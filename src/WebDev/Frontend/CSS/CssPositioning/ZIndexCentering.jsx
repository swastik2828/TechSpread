import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Layers, AlignCenterHorizontal } from 'lucide-react';
import SEO from '../../../../components/SEO';
import CssZIndexSimulator from '../../../../simulators/web/css/CssZIndexSimulator';

const Section = ({ title, icon: Icon, children }) => (
    <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-sky-500/20 to-cyan-500/20 rounded-xl border border-sky-500/30 text-sky-400">
                <Icon size={28} />
            </div>
            <h2 className="text-3xl font-bold text-white">{title}</h2>
        </div>
        {children}
    </section>
);

const CodeBlock = ({ title = 'styles.css', language = 'css', children }) => (
    <div className="my-6 w-full rounded-xl overflow-hidden bg-[#0d1117] border border-gray-800 shadow-2xl">
        <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-gray-800">
            <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/30 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/30 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/30 border border-green-500/50" />
                </div>
                <span className="text-xs font-bold text-gray-400 font-mono">{title}</span>
            </div>
            <span className="text-[10px] font-bold text-gray-500 uppercase bg-gray-800 px-2 py-0.5 rounded border border-gray-700">{language}</span>
        </div>
        <div className="p-5 overflow-x-auto font-mono text-sm leading-relaxed">
            <pre className="text-gray-300 whitespace-pre-wrap"><code>{children}</code></pre>
        </div>
    </div>
);

const InfoBox = ({ type = 'note', children }) => {
    const styles = {
        note: 'border-sky-500 bg-sky-900/10 text-sky-200',
        tip: 'border-green-500 bg-green-900/10 text-green-200',
        warning: 'border-yellow-500 bg-yellow-900/10 text-yellow-200',
    };
    return (
        <div className={`border-l-4 p-6 rounded-r-xl my-6 ${styles[type]}`}>
            {children}
        </div>
    );
};

export default function ZIndexCentering() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Z-Index and Centering Tricks"
                description="Master CSS z-index stacking contexts and learn the classic absolute centering trick."
                keywords="css z-index, css stacking context, absolute centering css"
                url="/webdevelopment/css/positioning/z-index-centering"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-bold text-sky-400 uppercase tracking-widest">Module 9</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                    Z-Index &{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">
                        Centering
                    </span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl">
                    Understand who's on top when elements overlap, and learn the classic tricks for perfect centering.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                
                <CssZIndexSimulator />

                <Section title="10. z-index — Who's on Top?" icon={Layers}>
                    <p>
                        When positioned elements overlap, the browser needs to decide which one appears in front. That's controlled by <code>z-index</code>.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">10.1 How z-index works</h3>
                    <p>
                        Think of <code>z-index</code> as layers in a stack — like layers in a photo editing app. Higher number = closer to you = in front.
                    </p>

                    <div className="my-6 overflow-x-auto bg-[#111] p-4 sm:p-6 rounded-lg font-mono text-xs sm:text-sm border border-gray-800 text-sky-300">
<pre>{`z-index: 1000  ← Modal overlay (highest, in front of everything)
z-index: 999   ← Modal box
z-index: 100   ← Fixed navbar
z-index: 10    ← Sticky sidebar
z-index: 1     ← Regular positioned card
               ← Normal flow elements (no z-index, behind all positioned)`}</pre>
                    </div>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">10.2 z-index only works on positioned elements</h3>
                    <InfoBox type="note">
                        <code>z-index</code> has <strong>no effect on static elements</strong>. The element must have <code>position: relative</code>, <code>absolute</code>, <code>fixed</code>, or <code>sticky</code>.
                    </InfoBox>
                    <CodeBlock title="styles.css" language="css">{`/* ❌ z-index does nothing here */
.element {
  position: static;
  z-index: 999; /* Ignored */
}

/* ✅ This works */
.element {
  position: relative;
  z-index: 999; /* Works! */
}`}</CodeBlock>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">10.3 Stacking contexts — the advanced concept</h3>
                    <p>
                        Here's where z-index gets subtle. A "stacking context" is an isolated layer bubble. Any element with a non-auto z-index and non-static position (or certain other CSS properties like <code>opacity &lt; 1</code>, <code>transform</code>, <code>filter</code>) creates a <strong>new stacking context</strong>.
                    </p>
                    <p>
                        Inside a stacking context, child z-indices are relative <em>only to that context</em> — they cannot escape it to compete with elements outside.
                    </p>

                    <CodeBlock title="index.html" language="html">{`<div class="parent" style="position: relative; z-index: 1;">
  <div class="child" style="position: relative; z-index: 9999;">
    I look like I should be on top of everything!
  </div>
</div>

<div class="competitor" style="position: relative; z-index: 2;">
  I win because my parent has z-index: 2 vs the other parent's z-index: 1.
</div>`}</CodeBlock>

                    <InfoBox type="tip">
                        <strong>Practical takeaway:</strong> When z-index isn't working the way you expect, check the parent elements — one of them likely has a z-index that's capping its children.
                    </InfoBox>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">10.4 Recommended z-index scale</h3>
                    <p>Using a consistent scale prevents conflicts:</p>
                    <CodeBlock title="styles.css" language="css">{`:root {
  --z-below:   -1;    /* Behind everything */
  --z-base:     0;    /* Default layer */
  --z-raised:   10;   /* Slightly elevated (cards, dropdowns) */
  --z-sticky:   100;  /* Sticky headers, sidebars */
  --z-fixed:    200;  /* Fixed navbars */
  --z-overlay:  300;  /* Modal backgrounds */
  --z-modal:    400;  /* Modals, dialogs */
  --z-toast:    500;  /* Toast notifications */
  --z-tooltip:  600;  /* Tooltips (should always be on top) */
}`}</CodeBlock>
                </Section>

                <Section title="11. Centering Tricks with Positioning" icon={AlignCenterHorizontal}>
                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">11.1 Classic absolute centering</h3>
                    <p>The most famous positioning trick — centering an element inside a container:</p>
                    <CodeBlock title="styles.css" language="css">{`.container {
  position: relative;
  width: 400px;
  height: 300px;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}`}</CodeBlock>

                    <p><strong>How it works, step by step:</strong></p>
                    <ol className="list-decimal pl-6 mb-6">
                        <li><code>top: 50%</code> — moves the element's <strong>top edge</strong> to the vertical center of the container</li>
                        <li><code>left: 50%</code> — moves the element's <strong>left edge</strong> to the horizontal center</li>
                        <li><code>transform: translate(-50%, -50%)</code> — shifts the element back by half its own width and height</li>
                    </ol>

                    <div className="my-6 overflow-x-auto bg-[#111] p-4 sm:p-6 rounded-lg font-mono text-xs sm:text-sm border border-gray-800 text-sky-300">
<pre>{`Step 1+2: top/left 50%          Step 3: translate(-50%, -50%)
┌──────────────────────┐         ┌──────────────────────┐
│                      │         │                      │
│                      │         │       ┌──────┐        │
│          ┌───────┐   │   →     │       │  ✓   │        │
│          │       │   │         │       └──────┘        │
│          └───────┘   │         │                      │
└──────────────────────┘         └──────────────────────┘
 Element's top-left is            Element is perfectly
 at 50% — not centered            centered`}</pre>
                    </div>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">11.2 Centering just horizontally</h3>
                    <CodeBlock title="styles.css" language="css">{`.child {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}`}</CodeBlock>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">11.3 Pinning to corners</h3>
                    <CodeBlock title="styles.css" language="css">{`/* All four corners */
.top-left     { position: absolute; top: 0; left: 0; }
.top-right    { position: absolute; top: 0; right: 0; }
.bottom-left  { position: absolute; bottom: 0; left: 0; }
.bottom-right { position: absolute; bottom: 0; right: 0; }`}</CodeBlock>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">11.4 Full-width bottom bar</h3>
                    <CodeBlock title="styles.css" language="css">{`.full-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;   /* Stretch edge to edge */
  height: 40px;
  background: rgba(0, 0, 0, 0.6);
}`}</CodeBlock>
                </Section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/positioning/fixed-sticky" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Previous: Fixed & Sticky
                </Link>
                <Link to="/webdevelopment/css/positioning/projects-mistakes" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Projects & Cheatsheet <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
}
