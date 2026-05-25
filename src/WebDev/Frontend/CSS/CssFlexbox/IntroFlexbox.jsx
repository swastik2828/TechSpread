import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, BookOpen, Anchor, HelpCircle, Compass } from 'lucide-react';
import SEO from '../../../../components/SEO';
import CssFlexboxIntroSimulator from '../../../../simulators/web/css/CssFlexboxIntroSimulator';

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

export default function IntroFlexbox() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Flexbox Introduction — The Complete Guide"
                description="Master CSS Flexbox from scratch. Understand the 1D model, flex axes, default behaviors, and the container-item relationship."
                keywords="css flexbox, display flex, flex container, flex items, main axis, cross axis, web development"
                url="/webdevelopment/css/flexbox/intro"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-bold text-sky-400 uppercase tracking-widest">Module 10 • Part 1</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                    CSS Flexbox —{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">
                        Modern Layout Introduction
                    </span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl">
                    The Complete, Beginner-Friendly Guide to Modern Layout. Understand the mental model of Flexbox, learn how to activate it, and master the two axes.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <Section title="1. What Problem Does Flexbox Solve?" icon={HelpCircle}>
                    <p>
                        Before Flexbox (pre-2013), centering an element vertically was genuinely difficult. Developers used hacks involving:
                    </p>
                    <ul className="list-disc pl-6 mb-6">
                        <li><code>float: left</code> / <code>float: right</code> — designed for text wrapping around images, not page layout</li>
                        <li>Negative <code>margin</code> tricks</li>
                        <li><code>position: absolute</code> with <code>top: 50%; transform: translateY(-50%)</code></li>
                        <li>Tables used purely for visual layout (a semantic nightmare)</li>
                    </ul>

                    <p>
                        <strong>Flexbox was introduced to solve a specific class of problem:</strong> <em>distributing space and aligning items along a single axis, inside a container whose size may be unknown or dynamic.</em>
                    </p>

                    <InfoBox type="tip">
                        💡 <strong>Key insight:</strong> Flexbox is <strong>one-dimensional</strong>. It handles either a row <em>or</em> a column at a time. This is what makes it perfect for components like navbars, button groups, card rows, and form fields — and why CSS Grid exists alongside it for two-dimensional layouts.
                    </InfoBox>
                </Section>

                <Section title="2. The Mental Model: Thinking in Flex" icon={BookOpen}>
                    <p>
                        The single most important shift when learning Flexbox is understanding its <strong>two-role system</strong>.
                    </p>

                    <div className="my-6 overflow-x-auto bg-[#111] p-4 sm:p-6 rounded-lg font-mono text-xs sm:text-sm border border-gray-800 text-sky-300 leading-normal">
<pre>{`┌─────────────────────────────────────────────┐
│             FLEX CONTAINER (parent)          │
│                                             │
│  ┌────────┐  ┌────────┐  ┌────────┐        │
│  │ Item 1 │  │ Item 2 │  │ Item 3 │        │
│  └────────┘  └────────┘  └────────┘        │
│         FLEX ITEMS (direct children)        │
└─────────────────────────────────────────────┘`}</pre>
                    </div>

                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>The container</strong> controls how items are arranged, spaced, and aligned.</li>
                        <li><strong>The items</strong> control their own size, growth, shrinkage, and individual alignment.</li>
                    </ul>

                    <InfoBox type="warning">
                        <strong>⚠️ Important:</strong> Flexbox only affects <strong>direct children</strong> of the container. Grandchildren are not flex items unless you also set <code>display: flex</code> on their parent.
                    </InfoBox>

                    <CodeBlock title="index.html" language="html">{`<div class="container">       <!-- Flex container -->
  <div class="item">A</div>   <!-- Flex item ✓ -->
  <div class="item">         <!-- Flex item ✓ -->
    <span>not a flex item</span>  <!-- NOT a flex item ✗ -->
  </div>
</div>`}</CodeBlock>
                </Section>

                <Section title="3. Activating Flexbox" icon={Anchor}>
                    <CodeBlock title="styles.css" language="css">{`.container {
  display: flex;        /* Block-level flex container */
}

/* OR */

.container {
  display: inline-flex; /* Inline-level flex container */
}`}</CodeBlock>

                    <p>
                        <strong><code>display: flex</code></strong> — the container behaves like a block element (takes full width of its parent), but its <em>children</em> are laid out using Flexbox rules.
                    </p>
                    <p>
                        <strong><code>display: inline-flex</code></strong> — the container itself shrinks to fit its content (like <code>inline-block</code>), but its children still follow Flexbox rules. Useful for buttons or tags where you don't want the container to stretch full-width.
                    </p>

                    <p className="mt-6">
                        The moment you write <code>display: flex</code>, several <strong>default behaviors activate immediately</strong>, even though you haven't written any other properties:
                    </p>

                    <div className="overflow-x-auto my-6 bg-[#161b22] rounded-xl border border-gray-800 shadow-2xl">
                        <table className="min-w-full border-collapse text-left text-sm">
                            <thead className="bg-[#1a1a1a]">
                                <tr>
                                    <th className="border border-gray-700 p-4 text-white font-bold">Default behavior</th>
                                    <th className="border border-gray-700 p-4 text-white font-bold">CSS property responsible</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-gray-800">
                                    <td className="p-4 text-gray-300 border-r border-gray-800">Items line up in a horizontal row</td>
                                    <td className="p-4 font-mono text-sky-300">flex-direction: row</td>
                                </tr>
                                <tr className="border-t border-gray-800 bg-[#161616]">
                                    <td className="p-4 text-gray-300 border-r border-gray-800">Items do NOT wrap to a new line</td>
                                    <td className="p-4 font-mono text-sky-300">flex-wrap: nowrap</td>
                                </tr>
                                <tr className="border-t border-gray-800">
                                    <td className="p-4 text-gray-300 border-r border-gray-800">Items align to the start of the row</td>
                                    <td className="p-4 font-mono text-sky-300">justify-content: flex-start</td>
                                </tr>
                                <tr className="border-t border-gray-800 bg-[#161616]">
                                    <td className="p-4 text-gray-300 border-r border-gray-800">Items stretch to fill the container's height</td>
                                    <td className="p-4 font-mono text-sky-300">align-items: stretch</td>
                                </tr>
                                <tr className="border-t border-gray-800">
                                    <td className="p-4 text-gray-300 border-r border-gray-800">Items will shrink if needed to fit</td>
                                    <td className="p-4 font-mono text-sky-300">flex-shrink: 1</td>
                                </tr>
                                <tr className="border-t border-gray-800 bg-[#161616]">
                                    <td className="p-4 text-gray-300 border-r border-gray-800">Items won't grow to fill extra space</td>
                                    <td className="p-4 font-mono text-sky-300">flex-grow: 0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p>
                        Understanding these defaults will explain a lot of "why is my layout doing that?" moments.
                    </p>

                    {/* Activation Simulator component */}
                    <CssFlexboxIntroSimulator />
                </Section>

                <Section title="4. The Two Axes Explained" icon={Compass}>
                    <p>
                        Every Flexbox layout has two axes. Which direction they run depends on <code>flex-direction</code>.
                    </p>

                    <h3 className="text-xl font-bold text-white mt-6 mb-2">Main Axis</h3>
                    <p className="mb-4">The direction items are placed. Controlled by <code>flex-direction</code>.</p>

                    <h3 className="text-xl font-bold text-white mb-2">Cross Axis</h3>
                    <p className="mb-4">Perpendicular to the main axis.</p>

                    <div className="my-6 overflow-x-auto bg-[#111] p-4 sm:p-6 rounded-lg font-mono text-xs sm:text-sm border border-gray-800 text-sky-300 leading-normal">
<pre>{`flex-direction: row (default)
─────────────────────────────────────────→  Main Axis
│
│
↓  Cross Axis


flex-direction: column
│
│
↓  Main Axis
─────────────────────────────────────────→  Cross Axis`}</pre>
                    </div>

                    <InfoBox type="tip">
                        💡 <strong>Why this matters:</strong> <code>justify-content</code> always works on the <strong>main axis</strong>. <code>align-items</code> always works on the <strong>cross axis</strong>. If you change <code>flex-direction</code>, these properties change which direction they affect — which is a common source of confusion.
                    </InfoBox>
                </Section>
            </div>

            {/* Navigation links */}
            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/positioning/projects-mistakes" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Previous: Positioning Cheatsheet
                </Link>
                <Link to="/webdevelopment/css/flexbox/container" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Container Properties <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
}
