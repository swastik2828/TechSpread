import React, { useState } from 'react';
import { Calculator, Plus, Trash2, Info, ChevronDown } from 'lucide-react';

// ─── Presets ──────────────────────────────────────────────────────────────────
const PRESETS = [
    { selector: 'p',              hint: 'One type selector — lowest weight' },
    { selector: '.card',          hint: 'One class selector — medium weight' },
    { selector: '#hero',          hint: 'One ID selector — high weight' },
    { selector: 'p.intro',        hint: 'Type + class combined' },
    { selector: '#nav .link',     hint: 'ID + class — beats everything above' },
    { selector: 'a:hover',        hint: 'Type + pseudo-class' },
    { selector: 'ul > li:first-child', hint: 'Two types + one pseudo-class' },
    { selector: '*',              hint: 'Universal — contributes zero' },
];

// ─── Column meta ─────────────────────────────────────────────────────────────
const COLUMNS = [
    { key: 'a', label: 'A', name: 'IDs',            color: 'text-red-400',    bg: 'bg-red-500/15',    border: 'border-red-500/30',    tip: '#navbar, #hero …' },
    { key: 'b', label: 'B', name: 'Classes / Attrs / Pseudo-classes', color: 'text-yellow-400', bg: 'bg-yellow-500/15', border: 'border-yellow-500/30', tip: '.card, [href], :hover …' },
    { key: 'c', label: 'C', name: 'Types / Pseudo-elements', color: 'text-green-400',  bg: 'bg-green-500/15',  border: 'border-green-500/30',  tip: 'p, h2, ::before …' },
];

// ─── Specificity calculator ───────────────────────────────────────────────────
function calcSpecificity(raw) {
    let s = raw.trim();
    let a = 0, b = 0, c = 0;

    // 1. Strip pseudo-elements  ::before, ::after …  → c++
    s = s.replace(/::[a-z-]+/gi, () => { c++; return ''; });

    // 2. Strip IDs  #foo  → a++
    s = s.replace(/#[\w-]+/g, () => { a++; return ''; });

    // 3. Strip classes, attribute selectors, pseudo-classes  .foo  [attr]  :hover  → b++
    s = s.replace(/\.[\w-]+|\[[\w\s"'=^$*|~-]+\]|:[\w-]+(\([^)]*\))?/g, () => { b++; return ''; });

    // 4. Strip combinators and the universal selector
    s = s.replace(/[>+~]/g, ' ').replace(/\*/g, ' ').trim();

    // 5. Remaining tokens are type selectors  → c++
    s.split(/\s+/).forEach(t => { if (t) c++; });

    return { a, b, c };
}

// ─── Main component ───────────────────────────────────────────────────────────
const CssSpecificitySimulator = () => {
    const [rows, setRows] = useState([
        { id: 1, selector: 'p' },
        { id: 2, selector: '.intro' },
        { id: 3, selector: '#main' },
    ]);
    const [input, setInput] = useState('');
    const [error, setError] = useState('');
    const [showHowTo, setShowHowTo] = useState(true);
    const nextId = React.useRef(4);

    // Compute results
    const results = rows.map(r => {
        const sp = calcSpecificity(r.selector);
        return { ...r, ...sp, score: sp.a * 10000 + sp.b * 100 + sp.c };
    });

    const maxScore = Math.max(...results.map(r => r.score), 1);
    const highestScore = Math.max(...results.map(r => r.score));

    const addRow = (sel) => {
        const s = (sel || input).trim();
        if (!s) return;
        if (rows.find(r => r.selector === s)) {
            setError(`"${s}" is already in the list.`);
            return;
        }
        setError('');
        setRows(prev => [...prev, { id: nextId.current++, selector: s }]);
        setInput('');
    };

    const removeRow = (id) => {
        setRows(prev => prev.filter(r => r.id !== id));
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') addRow();
    };

    return (
        <div className="my-10 rounded-2xl overflow-hidden border border-sky-500/20 bg-[#0d1117] shadow-2xl">

            {/* ── Header ── */}
            <div className="flex items-center gap-3 px-6 py-4 bg-[#161b22] border-b border-gray-800">
                <Calculator size={18} className="text-sky-400 shrink-0" />
                <div>
                    <p className="font-bold text-white text-sm leading-none">Specificity Calculator</p>
                    <p className="text-xs text-gray-500 mt-0.5">Instantly see which CSS selector is stronger — and why!</p>
                </div>
            </div>

            {/* ── Collapsible How-To ── */}
            <div className="border-b border-gray-800">
                <button
                    onClick={() => setShowHowTo(v => !v)}
                    className="flex items-center gap-2 w-full px-6 py-3 text-xs text-sky-400 hover:text-sky-300 transition-colors font-semibold"
                >
                    <Info size={13} />
                    How specificity works & how to use this tool
                    <ChevronDown size={13} className={`ml-auto transition-transform ${showHowTo ? 'rotate-180' : ''}`} />
                </button>
                {showHowTo && (
                    <div className="px-6 pb-5 space-y-4">
                        {/* Concept explanation */}
                        <div className="grid sm:grid-cols-3 gap-3 text-xs">
                            {COLUMNS.map(col => (
                                <div key={col.key} className={`p-3 rounded-xl border ${col.border} ${col.bg}`}>
                                    <div className={`font-black text-2xl ${col.color}`}>{col.label}</div>
                                    <div className={`font-bold text-sm ${col.color} mt-1`}>{col.name}</div>
                                    <div className="text-gray-500 mt-1">{col.tip}</div>
                                </div>
                            ))}
                        </div>
                        {/* Steps */}
                        <div className="grid sm:grid-cols-3 gap-3 text-xs text-gray-400">
                            <div className="flex gap-2 items-start p-3 rounded-xl bg-gray-900/60 border border-gray-800">
                                <span className="text-sky-400 font-black text-base shrink-0">①</span>
                                <p>The calculator counts <strong className="text-white">IDs (A)</strong>, <strong className="text-white">classes (B)</strong>, and <strong className="text-white">types (C)</strong> in each selector.</p>
                            </div>
                            <div className="flex gap-2 items-start p-3 rounded-xl bg-gray-900/60 border border-gray-800">
                                <span className="text-sky-400 font-black text-base shrink-0">②</span>
                                <p>Compare <strong className="text-white">left-to-right</strong>: the selector with the bigger A wins. If A ties, compare B. If B ties, compare C.</p>
                            </div>
                            <div className="flex gap-2 items-start p-3 rounded-xl bg-gray-900/60 border border-gray-800">
                                <span className="text-sky-400 font-black text-base shrink-0">③</span>
                                <p>Add your own selectors below and watch the <strong className="text-white">bar chart update</strong> — the longest bar wins!</p>
                            </div>
                        </div>
                        {/* Key rule */}
                        <div className="flex gap-3 p-3 rounded-xl bg-purple-900/10 border border-purple-500/20 text-xs text-purple-200">
                            <span className="text-purple-400 font-bold shrink-0">⚡ Key Rule:</span>
                            <span>A selector with even one ID <code className="text-purple-300 bg-purple-900/20 px-1 rounded">(1,0,0)</code> beats any number of classes, even <code className="text-purple-300 bg-purple-900/20 px-1 rounded">(0,999,999)</code>. There is NO overflow between columns.</span>
                        </div>
                    </div>
                )}
            </div>

            <div className="p-5 space-y-5">

                {/* ── Input row ── */}
                <div>
                    <p className="text-xs text-gray-600 uppercase tracking-widest font-bold mb-2">Add a selector to compare:</p>
                    <div className="flex gap-3">
                        <div className="relative flex-1">
                             <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-sky-500 text-sm select-none">⬩</span>
                            <input
                                className="w-full pl-8 pr-4 py-3 font-mono text-sm bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/40 transition-all"
                                value={input}
                                onChange={e => { setInput(e.target.value); setError(''); }}
                                onKeyDown={handleKeyDown}
                                placeholder="e.g.  #navbar .link:hover"
                                spellCheck={false}
                            />
                        </div>
                        <button
                            onClick={() => addRow()}
                            className="flex items-center gap-2 px-5 py-3 bg-sky-500 hover:bg-sky-400 active:scale-95 text-white rounded-lg font-bold text-sm transition-all shadow-lg shadow-sky-500/20"
                        >
                            <Plus size={14} /> Add
                        </button>
                    </div>
                    {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
                </div>

                {/* ── Preset chips ── */}
                <div>
                    <p className="text-xs text-gray-600 uppercase tracking-widest font-bold mb-2">Try a preset:</p>
                    <div className="flex flex-wrap gap-2">
                        {PRESETS.map(p => (
                            <button
                                key={p.selector}
                                onClick={() => addRow(p.selector)}
                                title={p.hint}
                                className="px-3 py-1.5 rounded-full text-xs font-mono bg-gray-800 text-gray-400 border border-gray-700 hover:bg-sky-500/10 hover:text-sky-300 hover:border-sky-500/30 transition-all"
                            >
                                {p.selector}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ── Column legend ── */}
                <div className="flex gap-3 flex-wrap">
                    {COLUMNS.map(col => (
                        <div key={col.key} className={`flex items-center gap-1.5 px-3 py-1 rounded-full ${col.bg} border ${col.border}`}>
                            <span className={`font-black text-sm ${col.color}`}>{col.label}</span>
                            <span className={`text-xs ${col.color}`}>=</span>
                            <span className="text-xs text-gray-300">{col.name}</span>
                        </div>
                    ))}
                </div>

                {/* ── Results ── */}
                {results.length > 0 && (
                    <div className="space-y-3">
                        {results.map(r => {
                            const isWinner = r.score === highestScore && results.length > 1;
                            return (
                                <div
                                    key={r.id}
                                    className={`p-4 rounded-xl border transition-all ${isWinner ? 'border-sky-500/50 bg-sky-900/10' : 'border-gray-800 bg-[#161b22]'}`}
                                >
                                    {/* Top row */}
                                    <div className="flex items-center justify-between gap-3 flex-wrap mb-3">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <code className="font-mono text-sm text-white font-bold bg-gray-900 px-2 py-0.5 rounded border border-gray-800">{r.selector}</code>
                                            {isWinner && (
                                                <span className="px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold border border-sky-500/30 animate-pulse">
                                                    🏆 Highest Specificity
                                                </span>
                                            )}
                                        </div>

                                        {/* A B C boxes + delete */}
                                        <div className="flex items-center gap-2">
                                            {COLUMNS.map(col => (
                                                <div
                                                    key={col.key}
                                                    className={`w-11 h-11 rounded-xl flex flex-col items-center justify-center ${col.bg} border ${col.border}`}
                                                    title={col.name}
                                                >
                                                    <span className={`font-black text-xl leading-none ${col.color}`}>{r[col.key]}</span>
                                                    <span className={`text-[9px] font-bold ${col.color} opacity-70`}>{col.label}</span>
                                                </div>
                                            ))}
                                            <button
                                                onClick={() => removeRow(r.id)}
                                                className="p-2 text-gray-700 hover:text-red-400 hover:bg-red-900/10 rounded-lg transition-all"
                                                title="Remove"
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Score bar */}
                                    <div className="flex items-center gap-3">
                                        <div className="flex-1 h-2.5 bg-gray-900 rounded-full overflow-hidden border border-gray-800">
                                            <div
                                                className={`h-full rounded-full transition-all duration-700 ${isWinner ? 'bg-gradient-to-r from-sky-500 to-cyan-400' : 'bg-gray-600'}`}
                                                style={{ width: `${(r.score / maxScore) * 100}%` }}
                                            />
                                        </div>
                                        <span className="text-xs text-gray-500 font-mono w-28 shrink-0 text-right">
                                            ({r.a}, {r.b}, {r.c}) = {r.score}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}

                        {/* Clear all */}
                        {results.length > 1 && (
                            <button
                                onClick={() => setRows([])}
                                className="w-full mt-2 py-2 text-xs text-gray-600 hover:text-red-400 transition-colors border border-dashed border-gray-800 rounded-xl hover:border-red-500/30"
                            >
                                Clear all selectors
                            </button>
                        )}
                    </div>
                )}

                {results.length === 0 && (
                    <div className="text-center py-12 text-gray-700 text-sm border border-dashed border-gray-800 rounded-xl">
                        Add at least one selector above to see its specificity score.
                    </div>
                )}

            </div>
        </div>
    );
};

export default CssSpecificitySimulator;
