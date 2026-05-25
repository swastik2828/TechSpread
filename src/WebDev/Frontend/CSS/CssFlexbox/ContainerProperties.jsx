import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Layers, Sliders, Grid, HelpCircle } from 'lucide-react';
import SEO from '../../../../components/SEO';
import CssFlexboxContainerSimulator from '../../../../simulators/web/css/CssFlexboxContainerSimulator';

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
        warning: 'border-yellow-500 bg-yellow-900/10 text-yellow-250',
    };
    return (
        <div className={`border-l-4 p-6 rounded-r-xl my-6 ${styles[type]}`}>
            {children}
        </div>
    );
};

export default function ContainerProperties() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Flex Container Properties — The Complete Guide"
                description="Master CSS Flexbox container properties. Detailed exploration of flex-direction, flex-wrap, justify-content, align-items, align-content, and gap."
                keywords="flex-direction, flex-wrap, justify-content, align-items, align-content, gap, flex container css"
                url="/webdevelopment/css/flexbox/container"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-bold text-sky-400 uppercase tracking-widest">Module 10 • Part 2</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                    Flex Container{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">
                        Properties
                    </span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl">
                    Configure parent containers to control children layout. Learn to shift directions, wrap rows, align axes, and space items perfectly.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <Section title="5. Container Properties Overview" icon={Sliders}>
                    <p>
                        These properties go on the **flex container** (the parent element), directing the overarching flow, spacing, and sizing rules of its nested items.
                    </p>

                    <CssFlexboxContainerSimulator />
                </Section>

                <Section title="5.1 flex-direction" icon={Layers}>
                    <p>
                        Defines the <strong>main axis</strong> — the direction flex items are placed inside the container.
                    </p>
                    <CodeBlock title="styles.css" language="css">{`.container {
  flex-direction: row;            /* → Default. Left to right. */
  flex-direction: row-reverse;    /* ← Right to left. */
  flex-direction: column;         /* ↓ Top to bottom. */
  flex-direction: column-reverse; /* ↑ Bottom to top. */
}`}</CodeBlock>

                    <div className="my-6 overflow-x-auto bg-[#111] p-4 sm:p-6 rounded-lg font-mono text-xs sm:text-sm border border-gray-850 text-cyan-300">
<pre>{`row:            [A] [B] [C]  →
row-reverse:    ← [C] [B] [A]
column:         [A]
                [B]
                [C]
                ↓
column-reverse: ↑
                [C]
                [B]
                [A]`}</pre>
                    </div>

                    <InfoBox type="tip">
                        💡 <code>column</code> and <code>column-reverse</code> require the container to have a defined <strong>height</strong> (or <code>min-height</code>) for <code>justify-content</code> to have visible effect. Without it, the container is only as tall as its content.
                    </InfoBox>
                </Section>

                <Section title="5.2 flex-wrap" icon={Grid}>
                    <p>
                        By default, flex items will squeeze onto one line even if they overflow. <code>flex-wrap</code> changes that.
                    </p>
                    <CodeBlock title="styles.css" language="css">{`.container {
  flex-wrap: nowrap;        /* Default. All items on one line. May overflow. */
  flex-wrap: wrap;          /* Items wrap to next line if needed. */
  flex-wrap: wrap-reverse;  /* Items wrap to the previous line. */
}`}</CodeBlock>

                    <h4 className="text-sm font-bold text-gray-400 mt-6 mb-2">Visual (with 5 items in a narrow container):</h4>
                    <div className="my-4 overflow-x-auto bg-[#111] p-4 rounded-lg font-mono text-xs sm:text-sm border border-gray-850 text-cyan-300">
<pre>{`nowrap:         [1][2][3][4][5]  ← may overflow!

wrap:           [1][2][3]
                [4][5]

wrap-reverse:   [4][5]
                [1][2][3]`}</pre>
                    </div>

                    <InfoBox type="tip">
                        💡 <code>flex-wrap: wrap</code> is the key to making responsive layouts without media queries. Combined with <code>flex-basis</code> on items, items will naturally reflow as the viewport narrows.
                    </InfoBox>
                </Section>

                <Section title="5.3 justify-content — Main Axis" icon={Sliders}>
                    <p>
                        Controls <strong>how items are distributed along the main axis</strong> when there is extra space (or how they behave when there isn't).
                    </p>
                    <CodeBlock title="styles.css" language="css">{`.container {
  justify-content: flex-start;    /* Items packed at start. (Default) */
  justify-content: flex-end;      /* Items packed at end. */
  justify-content: center;        /* Items centered. */
  justify-content: space-between; /* Equal space between items, none at edges. */
  justify-content: space-around;  /* Equal space around each item (half at edges). */
  justify-content: space-evenly;  /* Perfectly equal space including edges. */
}`}</CodeBlock>

                    <h4 className="text-sm font-bold text-gray-400 mt-6 mb-2">Visual diagram (5 items, horizontal row):</h4>
                    <div className="my-4 overflow-x-auto bg-[#111] p-4 rounded-lg font-mono text-xs sm:text-sm border border-gray-850 text-cyan-305 leading-normal">
<pre>{`flex-start:    [1][2][3][4][5]___________

flex-end:      ___________[1][2][3][4][5]

center:        _____[1][2][3][4][5]______

space-between: [1]___[2]___[3]___[4]___[5]

space-around:  _[1]__[2]__[3]__[4]__[5]_
               (each item has equal margins left and right)

space-evenly:  __[1]__[2]__[3]__[4]__[5]__
               (all gaps including edges are identical)`}</pre>
                    </div>

                    <InfoBox type="note">
                        💡 <strong><code>space-between</code> vs <code>space-around</code> vs <code>space-evenly</code></strong> — this trips up many beginners.
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li><code>space-between</code>: no margin at edges, gaps only <em>between</em> items.</li>
                            <li><code>space-around</code>: each item gets equal margin on both sides (so edge gaps are <em>half</em> the internal gaps).</li>
                            <li><code>space-evenly</code>: every gap (including edges) is exactly equal.</li>
                        </ul>
                    </InfoBox>
                </Section>

                <Section title="5.4 align-items — Cross Axis" icon={Layers}>
                    <p>
                        Controls <strong>how items are aligned on the cross axis</strong> (perpendicular to the main axis).
                    </p>
                    <CodeBlock title="styles.css" language="css">{`.container {
  align-items: stretch;     /* Default. Items stretch to fill container height/width. */
  align-items: flex-start;  /* Items align to the start of the cross axis. */
  align-items: flex-end;    /* Items align to the end of the cross axis. */
  align-items: center;      /* Items centered on cross axis. */
  align-items: baseline;    /* Items aligned so their text baselines line up. */
}`}</CodeBlock>

                    <h4 className="text-sm font-bold text-gray-400 mt-6 mb-2">Visual (horizontal row, cross axis is vertical):</h4>
                    <div className="my-4 overflow-x-auto bg-[#111] p-4 rounded-lg font-mono text-xs sm:text-sm border border-gray-850 text-cyan-305 leading-normal">
<pre>{`stretch:      ┌───┐┌─────┐┌──┐
              │ A ││  B  ││C │  ← all same height, filling container
              └───┘└─────┘└──┘

flex-start:   ┌───┐┌─────┐┌──┐
              │ A ││  B  ││C │
              │   ││     ││  │  ← items at top
              └───┘└─────┘└──┘

center:       │   ││     ││  │
              │ A ││  B  ││C │  ← items centered vertically
              │   ││     ││  │

flex-end:     │   ││     ││  │
              │ A ││  B  ││C │  ← items at bottom
              └───┘└─────┘└──┘

baseline:     items aligned so first line of text lines up`}</pre>
                    </div>

                    <InfoBox type="tip">
                        💡 <strong><code>baseline</code></strong> is extremely useful for navbars and toolbars where items have different font sizes or padding — it keeps the text optically aligned.
                    </InfoBox>
                </Section>

                <Section title="5.5 align-content — Multi-line Cross Axis" icon={Grid}>
                    <p>
                        <code>align-content</code> only takes effect when <strong><code>flex-wrap: wrap</code> is set AND there are multiple lines of items</strong>. It controls spacing between those lines, similar to how <code>justify-content</code> controls spacing between items on the main axis.
                    </p>
                    <CodeBlock title="styles.css" language="css">{`.container {
  flex-wrap: wrap;               /* Required for align-content to work */
  align-content: flex-start;     /* Lines packed at start */
  align-content: flex-end;       /* Lines packed at end */
  align-content: center;         /* Lines centered */
  align-content: space-between;  /* Equal space between lines */
  align-content: space-around;   /* Equal space around lines */
  align-content: stretch;        /* Default. Lines stretch to fill container. */
}`}</CodeBlock>

                    <InfoBox type="warning">
                        <strong>⚠️ Common confusion:</strong> <code>align-items</code> vs <code>align-content</code>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li><code>align-items</code> → aligns items <strong>within each line</strong></li>
                            <li><code>align-content</code> → aligns the <strong>lines themselves</strong> within the container</li>
                        </ul>
                    </InfoBox>
                </Section>

                <Section title="5.6 gap" icon={HelpCircle}>
                    <p>
                        The modern, clean way to add spacing between flex items. Replaces old <code>margin</code> hacks.
                    </p>
                    <CodeBlock title="styles.css" language="css">{`.container {
  gap: 16px;           /* Equal gap between all items (row and column) */
  gap: 16px 24px;      /* row-gap: 16px, column-gap: 24px */
  row-gap: 16px;       /* Gap between rows (when wrapping) */
  column-gap: 24px;    /* Gap between columns */
}`}</CodeBlock>

                    <InfoBox type="tip">
                        💡 <strong>Why <code>gap</code> is better than <code>margin</code>:</strong> Margins on items create extra space at the edges (first/last item). <code>gap</code> only adds space <em>between</em> items, never at the outer edges. No need for <code>:first-child</code> / <code>:last-child</code> margin resets.
                    </InfoBox>
                </Section>

                <Section title="5.7 flex-flow Shorthand" icon={Sliders}>
                    <p>
                        A shorthand for <code>flex-direction</code> + <code>flex-wrap</code>.
                    </p>
                    <CodeBlock title="styles.css" language="css">{`/* flex-flow: <flex-direction> <flex-wrap> */

.container {
  flex-flow: row wrap;          /* Most common responsive pattern */
  flex-flow: column nowrap;     /* Vertical stack */
  flex-flow: row-reverse wrap;  /* Reversed horizontal, wrapping */
}`}</CodeBlock>
                </Section>
            </div>

            {/* Navigation links */}
            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/flexbox/intro" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Previous: Flexbox Intro
                </Link>
                <Link to="/webdevelopment/css/flexbox/items" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Flex Item Properties <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
}
