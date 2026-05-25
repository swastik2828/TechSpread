import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, ToggleLeft, Percent, Layers, ShieldAlert } from 'lucide-react';
import SEO from '../../../../components/SEO';
import CssFlexboxItemSimulator from '../../../../simulators/web/css/CssFlexboxItemSimulator';

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

export default function ItemProperties() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Flex Item Properties — The Complete Guide"
                description="Master CSS Flexbox item properties. Learn about flex-grow, flex-shrink, flex-basis, align-self, and order."
                keywords="flex-grow, flex-shrink, flex-basis, flex shorthand, align-self, order css, flex items"
                url="/webdevelopment/css/flexbox/items"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-bold text-sky-400 uppercase tracking-widest">Module 10 • Part 3</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                    Flex Item{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">
                        Properties
                    </span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl">
                    Configure child elements directly to direct how they grow, shrink, align, or sort themselves inside the parent container.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <Section title="6. Flex Item Properties Overview" icon={ToggleLeft}>
                    <p>
                        These properties go on the **flex items** (the direct HTML children of the container), rather than the container itself.
                    </p>

                    <CssFlexboxItemSimulator />
                </Section>

                <Section title="6.1 flex-grow" icon={Percent}>
                    <p>
                        Controls how much an item <strong>grows</strong> to fill available space relative to its siblings.
                    </p>
                    <CodeBlock title="styles.css" language="css">{`.item {
  flex-grow: 0;   /* Default. Item does not grow. */
  flex-grow: 1;   /* Item takes 1 share of available space. */
  flex-grow: 2;   /* Item takes 2 shares (twice as wide as flex-grow: 1 siblings). */
}`}</CodeBlock>

                    <h4 className="text-sm font-bold text-gray-400 mt-6 mb-2">How the math works:</h4>
                    <div className="my-4 overflow-x-auto bg-[#111] p-4 rounded-lg font-mono text-xs sm:text-sm border border-gray-850 text-cyan-305 leading-normal">
<pre>{`Container: 600px wide
Three items with flex-basis: 0 (start at 0px)
Total available space: 600px

.a { flex-grow: 1 }  → 1/(1+2+3) × 600 = 100px
.b { flex-grow: 2 }  → 2/(1+2+3) × 600 = 200px
.c { flex-grow: 3 }  → 3/(1+2+3) × 600 = 300px`}</pre>
                    </div>

                    <InfoBox type="tip">
                        💡 <code>flex-grow: 1</code> on all items makes them <strong>equal width</strong>, regardless of content. This is one of the most commonly used layout patterns.
                    </InfoBox>
                </Section>

                <Section title="6.2 flex-shrink" icon={ToggleLeft}>
                    <p>
                        Controls how much an item <strong>shrinks</strong> when there is NOT enough space. Default is <code>1</code> — all items shrink equally.
                    </p>
                    <CodeBlock title="styles.css" language="css">{`.sidebar {
  flex-shrink: 0;   /* Never shrinks. Holds its size. */
  width: 250px;     /* This width will be respected even if container is small */
}

.main-content {
  flex-shrink: 1;   /* Shrinks normally (default) */
}

.shrinks-more {
  flex-shrink: 3;   /* Shrinks 3x faster than siblings with flex-shrink: 1 */
}`}</CodeBlock>

                    <h4 className="text-sm font-bold text-gray-400 mt-6 mb-2">The shrink formula (simplified):</h4>
                    <p className="mb-4">
                        When there's a <em>deficit</em> of space, each item gives up space proportional to <code>flex-shrink × flex-basis</code>.
                    </p>

                    <InfoBox type="warning">
                        ⚠️ Setting <code>flex-shrink: 0</code> is essential for elements you want to hold a fixed size — sidebars, icons, avatars, logos. Without it, they will compress on smaller screens.
                    </InfoBox>
                </Section>

                <Section title="6.3 flex-basis" icon={Percent}>
                    <p>
                        Sets the <strong>initial size</strong> of a flex item along the main axis <em>before</em> any growing or shrinking occurs.
                    </p>
                    <CodeBlock title="styles.css" language="css">{`.item {
  flex-basis: auto;    /* Default. Size based on content (respects width/height). */
  flex-basis: 0;       /* Ignore intrinsic size. Distribute ALL space via flex-grow. */
  flex-basis: 200px;   /* Start at exactly 200px, then grow/shrink from there. */
  flex-basis: 30%;     /* Start at 30% of container width. */
  flex-basis: min-content;  /* As small as the longest unbreakable word. */
}`}</CodeBlock>

                    <h3 className="text-xl font-bold text-white mt-6 mb-2"><code>auto</code> vs <code>0</code> — the critical distinction:</h3>
                    <div className="my-4 overflow-x-auto bg-[#111] p-4 rounded-lg font-mono text-xs sm:text-sm border border-gray-850 text-cyan-305 leading-normal">
<pre>{`flex-basis: auto  → Item gets its intrinsic size FIRST, then flex-grow
                    distributes only the LEFTOVER space.
                    Result: items with more content are wider.

flex-basis: 0     → Items start at 0px. flex-grow distributes ALL available
                    space from scratch.
                    Result: items are proportionally sized by flex-grow alone.`}</pre>
                    </div>

                    <h4 className="text-sm font-bold text-gray-450 mt-6 mb-2">Example:</h4>
                    <p className="mb-4">
                        Three items: one has "Hi", one has "Hello World", one has "A"
                    </p>
                    <ul className="list-disc pl-6 mb-6">
                        <li>With <code>flex-basis: auto, flex-grow: 1</code> — items are <strong>NOT</strong> equal width. "Hello World" item will be widest because it claims its content size first.</li>
                        <li>With <code>flex-basis: 0, flex-grow: 1</code> — items <strong>ARE</strong> equal width. All content size is ignored; space is split into 3 equal parts.</li>
                    </ul>
                </Section>

                <Section title="6.4 flex Shorthand" icon={ToggleLeft}>
                    <p>
                        <code>flex</code> is the shorthand for <code>flex-grow flex-shrink flex-basis</code>. <strong>Always prefer the shorthand</strong> over setting the three properties separately, as it handles edge cases and browser defaults more reliably.
                    </p>
                    <CodeBlock title="styles.css" language="css">{`/* flex: <grow> <shrink> <basis> */

.item { flex: 1; }           /* Equivalent to: flex: 1 1 0%
                                Equal sizing, can grow and shrink */

.item { flex: auto; }        /* Equivalent to: flex: 1 1 auto
                                Grows/shrinks based on content size */

.item { flex: none; }        /* Equivalent to: flex: 0 0 auto
                                Rigid. Respects width. Will not grow or shrink. */

.item { flex: 0 0 200px; }   /* Fixed 200px. Will not grow or shrink. */
.item { flex: 2 1 auto; }    /* Grows twice as fast as flex: 1 siblings */`}</CodeBlock>

                    <h3 className="text-xl font-bold text-white mt-6 mb-2">The "magic" of <code>flex: 1</code>:</h3>
                    <p className="mb-4">
                        <code>flex: 1</code> expands to <code>flex: 1 1 0%</code>. Because <code>flex-basis</code> is <code>0%</code>, all items start from zero and grow equally, giving you perfectly equal-width columns regardless of their content. This is the go-to for equal-width layouts.
                    </p>
                    <CodeBlock title="styles.css" language="css">{`/* Equal-width three-column layout */
.columns {
  display: flex;
}
.column {
  flex: 1;  /* All three take up equal space */
}`}</CodeBlock>
                </Section>

                <Section title="6.5 align-self" icon={Layers}>
                    <p>
                        Overrides the container's <code>align-items</code> for a <strong>single item</strong>.
                    </p>
                    <CodeBlock title="styles.css" language="css">{`.container {
  align-items: center;  /* Default for all items */
}

.special {
  align-self: flex-end;   /* This item overrides: goes to the bottom */
}

/* All align-self values mirror align-items: */
align-self: auto;          /* Inherits from container's align-items (default) */
align-self: flex-start;
align-self: flex-end;
align-self: center;
align-self: stretch;
align-self: baseline;`}</CodeBlock>
                </Section>

                <Section title="6.6 order" icon={ShieldAlert}>
                    <p>
                        Changes the <strong>visual order</strong> of items without touching the HTML. Default is <code>0</code>. Items are sorted from lowest to highest order value.
                    </p>
                    <CodeBlock title="styles.css" language="css">{`.nav-logo    { order: 1; }   /* Appears first visually */
.nav-links   { order: 2; }   /* Appears second */
.nav-cta     { order: 3; }   /* Appears last */

/* For reordering on mobile: */
@media (max-width: 600px) {
  .sidebar { order: 2; }      /* Move sidebar below main on mobile */
  .main    { order: 1; }      /* Main content first on mobile */
}`}</CodeBlock>

                    <InfoBox type="warning">
                        <strong>⚠️ Accessibility warning:</strong> <code>order</code> changes <strong>visual</strong> order only. Keyboard focus and screen reader order still follow the DOM order. Never use <code>order</code> to convey meaning — if content order matters semantically, change the HTML instead.
                    </InfoBox>
                </Section>
            </div>

            {/* Navigation links */}
            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/flexbox/container" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Previous: Container Properties
                </Link>
                <Link to="/webdevelopment/css/flexbox/pitfalls-patterns" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Pitfalls & Patterns <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
}
