import React, { useState, useEffect, useRef } from 'react';
import { Play, RefreshCw, Target, Info, ChevronDown } from 'lucide-react';

// ─── Preset examples ───────────────────────────────────────────────────────────
const EXAMPLES = [
    { label: 'Paragraph', selector: 'p', desc: 'Selects every <p> element (type selector)' },
    { label: 'Class', selector: '.highlight', desc: 'Selects elements with class="highlight"' },
    { label: 'ID', selector: '#special', desc: 'Selects the element with id="special"' },
    { label: 'All elements', selector: '*', desc: 'Universal selector — selects everything' },
    { label: 'Descendant', selector: 'ul li', desc: 'Selects every <li> inside any <ul>' },
    { label: 'Direct child', selector: 'ul > li', desc: 'Only direct <li> children of <ul>' },
    { label: 'Adjacent sibling', selector: 'h3 + p', desc: 'The <p> that immediately follows an <h3>' },
    { label: 'Attribute exists', selector: '[data-role]', desc: 'Any element that has a data-role attribute' },
    { label: 'Attribute value', selector: '[data-role="nav"]', desc: 'Element where data-role equals "nav"' },
    { label: 'First child', selector: 'li:first-child', desc: 'The first <li> inside each parent' },
    { label: 'Second child', selector: 'li:nth-child(2)', desc: 'The second <li> in each list' },
    { label: ':not()', selector: 'li:not(.highlight)', desc: 'Every <li> that does NOT have class="highlight"' },
];

// ─── Sample HTML that lives inside the preview ────────────────────────────────
const SAMPLE_HTML = `
<div id="root-container">
  <h3>Section Title</h3>
  <p>First paragraph.</p>
  <ul data-role="nav">
    <li class="highlight">Item one</li>
    <li>Item two</li>
    <li>Item three</li>
  </ul>
  <ul>
    <li id="special">Special item</li>
    <li class="highlight">Another highlighted</li>
  </ul>
  <p data-role="footer">Footer paragraph.</p>
</div>
`.trim();

// ─── Helper: try querySelectorAll, return null on invalid selector ─────────────
function tryMatch(selector, container) {
    try {
        return Array.from(container.querySelectorAll(selector));
    } catch {
        return null;
    }
}

// ─── Walk the hidden DOM and build the visible highlighted copy ────────────────
function buildHighlighted(sourceNode, matchedSet, target) {
    function walk(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            return document.createTextNode(node.textContent);
        }
        if (node.nodeType !== Node.ELEMENT_NODE) return null;

        const el = document.createElement(node.tagName.toLowerCase());
        Array.from(node.attributes).forEach(a => el.setAttribute(a.name, a.value));

        if (matchedSet.includes(node)) {
            el.style.cssText =
                'background:rgba(14,165,233,0.18);outline:2px solid #38bdf8;' +
                'border-radius:6px;padding:3px 6px;margin:2px 0;display:block;transition:all .2s;';
        }

        Array.from(node.childNodes).forEach(child => {
            const clone = walk(child);
            if (clone) el.appendChild(clone);
        });
        return el;
    }

    target.innerHTML = '';
    Array.from(sourceNode.childNodes).forEach(child => {
        const cl = walk(child);
        if (cl) target.appendChild(cl);
    });
}

// ─── Main component ───────────────────────────────────────────────────────────
const CssSelectorSimulator = () => {
    const [selector, setSelector] = useState('p');
    const [matchCount, setMatchCount] = useState(0);
    const [error, setError] = useState('');
    const [selectedExample, setSelectedExample] = useState(EXAMPLES[0]);
    const [showHowTo, setShowHowTo] = useState(true);

    const hiddenRef = useRef(null);   // invisible parser
    const visibleRef = useRef(null);  // the visible DOM preview

    // Run on mount
    useEffect(() => {
        if (hiddenRef.current) {
            hiddenRef.current.innerHTML = SAMPLE_HTML;
            applySelector('p');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const applySelector = (sel) => {
        if (!hiddenRef.current || !visibleRef.current) return;
        setError('');
        hiddenRef.current.innerHTML = SAMPLE_HTML;

        const matched = tryMatch(sel.trim(), hiddenRef.current);
        if (matched === null) {
            setError('That selector has a syntax error. Try something like: p  or  .highlight');
            setMatchCount(0);
            buildHighlighted(hiddenRef.current, [], visibleRef.current);
            return;
        }
        setMatchCount(matched.length);
        buildHighlighted(hiddenRef.current, matched, visibleRef.current);
    };

    const handleRun = () => applySelector(selector);

    const pickExample = (ex) => {
        setSelectedExample(ex);
        setSelector(ex.selector);
        applySelector(ex.selector);
    };

    const handleReset = () => {
        const def = EXAMPLES[0];
        setSelectedExample(def);
        setSelector(def.selector);
        applySelector(def.selector);
    };

    return (
        <div className="my-10 rounded-2xl overflow-hidden border border-sky-500/20 bg-[#0d1117] shadow-2xl">

            {/* ── Header ── */}
            <div className="flex items-center gap-3 px-6 py-4 bg-[#161b22] border-b border-gray-800">
                <Target size={18} className="text-sky-400 shrink-0" />
                <div>
                    <p className="font-bold text-white text-sm leading-none">Selector Playground</p>
                    <p className="text-xs text-gray-500 mt-0.5">Type a CSS selector and see which elements it matches — live!</p>
                </div>
            </div>

            {/* ── Collapsible How-To ── */}
            <div className="border-b border-gray-800">
                <button
                    onClick={() => setShowHowTo(v => !v)}
                    className="flex items-center gap-2 w-full px-6 py-3 text-xs text-sky-400 hover:text-sky-300 transition-colors font-semibold"
                >
                    <Info size={13} />
                    How to use this playground
                    <ChevronDown size={13} className={`ml-auto transition-transform ${showHowTo ? 'rotate-180' : ''}`} />
                </button>
                {showHowTo && (
                    <div className="px-6 pb-5 grid sm:grid-cols-3 gap-4 text-xs text-gray-400">
                        <div className="flex gap-3 items-start p-3 rounded-xl bg-gray-900/60 border border-gray-800">
                            <span className="text-sky-400 font-black text-base shrink-0">①</span>
                            <p><strong className="text-white">Pick an example</strong> from the buttons below, or type your own selector in the input box.</p>
                        </div>
                        <div className="flex gap-3 items-start p-3 rounded-xl bg-gray-900/60 border border-gray-800">
                            <span className="text-sky-400 font-black text-base shrink-0">②</span>
                            <p><strong className="text-white">Click Run</strong> (or press Enter). The playground instantly highlights every matched element in the sample HTML below.</p>
                        </div>
                        <div className="flex gap-3 items-start p-3 rounded-xl bg-gray-900/60 border border-gray-800">
                            <span className="text-sky-400 font-black text-base shrink-0">③</span>
                            <p><strong className="text-white">Blue border = matched!</strong> The count at the top tells you exactly how many elements your selector found.</p>
                        </div>
                    </div>
                )}
            </div>

            <div className="p-5 space-y-5">

                {/* ── Input row ── */}
                <div className="flex gap-3">
                    <div className="relative flex-1">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-sky-500 text-sm select-none">⬩</span>
                        <input
                            className="w-full pl-8 pr-4 py-3 font-mono text-sm bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/40 transition-all"
                            value={selector}
                            onChange={e => setSelector(e.target.value)}
                            onKeyDown={e => e.key === 'Enter' && handleRun()}
                            placeholder="e.g.  p  or  .highlight  or  li:first-child"
                            spellCheck={false}
                        />
                    </div>
                    <button
                        onClick={handleRun}
                        className="flex items-center gap-2 px-5 py-3 bg-sky-500 hover:bg-sky-400 active:scale-95 text-white rounded-lg font-bold text-sm transition-all shadow-lg shadow-sky-500/20"
                    >
                        <Play size={14} /> Run
                    </button>
                    <button
                        onClick={handleReset}
                        className="p-3 bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white rounded-lg transition-colors"
                        title="Reset to default"
                    >
                        <RefreshCw size={14} />
                    </button>
                </div>

                {/* ── Example presets ── */}
                <div>
                    <p className="text-xs text-gray-600 uppercase tracking-widest font-bold mb-2">Quick Examples — click any to try it:</p>
                    <div className="flex flex-wrap gap-2">
                        {EXAMPLES.map(ex => (
                            <button
                                key={ex.selector}
                                onClick={() => pickExample(ex)}
                                title={ex.desc}
                                className={`px-3 py-1.5 rounded-full text-xs font-mono border transition-all ${
                                    selectedExample.selector === ex.selector
                                        ? 'bg-sky-500/20 text-sky-300 border-sky-500/50 shadow-sm'
                                        : 'bg-gray-800 text-gray-400 border-gray-700 hover:bg-sky-500/10 hover:text-sky-300 hover:border-sky-500/30'
                                }`}
                            >
                                {ex.selector}
                            </button>
                        ))}
                    </div>
                    {/* Show description of selected example */}
                    {selectedExample && (
                        <p className="mt-2 text-xs text-gray-500 italic">
                            💡 <span className="text-sky-400 font-semibold">{selectedExample.selector}</span> — {selectedExample.desc}
                        </p>
                    )}
                </div>

                {/* ── Result banner ── */}
                <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                    error
                        ? 'bg-red-900/10 border-red-500/30 text-red-400'
                        : matchCount > 0
                            ? 'bg-sky-900/10 border-sky-500/30 text-sky-300'
                            : 'bg-gray-900/50 border-gray-800 text-gray-500'
                }`}>
                    {error ? (
                        <><span className="text-red-400 font-bold">⚠</span> {error}</>
                    ) : (
                        <>
                            <span className={`font-black text-lg leading-none ${matchCount > 0 ? 'text-sky-400' : 'text-gray-600'}`}>{matchCount}</span>
                            <span>element{matchCount !== 1 ? 's' : ''} matched</span>
                            {matchCount > 0 && <span className="ml-auto text-xs text-sky-500/70">highlighted below ↓</span>}
                        </>
                    )}
                </div>

                {/* ── Hidden parser DOM ── */}
                <div ref={hiddenRef} style={{ display: 'none' }} aria-hidden="true" />

                {/* ── Visible preview ── */}
                <div>
                    <p className="text-xs text-gray-600 uppercase tracking-widest font-bold mb-2">Sample HTML Structure — matched elements glow blue:</p>
                    <div
                        ref={visibleRef}
                        className="bg-[#161b22] border border-gray-800 rounded-xl p-5 font-mono text-sm text-gray-300 leading-relaxed min-h-[200px] overflow-x-auto"
                    />
                </div>

            </div>
        </div>
    );
};

export default CssSelectorSimulator;
