import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, ShieldAlert, Sparkles, BookOpen, Layers } from 'lucide-react';
import SEO from '../../../../components/SEO';
import CssFlexboxPatternsSimulator from '../../../../simulators/web/css/CssFlexboxPatternsSimulator';

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

export default function PitfallsPatterns() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Flexbox Pitfalls & Patterns — The Complete Guide"
                description="Learn how to avoid common CSS Flexbox bugs and master 7 real-world design patterns like centering, sticky footers, and holy grail layouts."
                keywords="flexbox pitfalls, flexbox patterns, vertical centering css, holy grail layout flexbox, sticky footer, navbar flexbox"
                url="/webdevelopment/css/flexbox/pitfalls-patterns"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-bold text-sky-400 uppercase tracking-widest">Module 10 • Part 4</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                    Flexbox Common{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">
                        Pitfalls & Patterns
                    </span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl">
                    Debug common layout mistakes and explore 7 essential, fully functional real-world UI patterns built purely using CSS Flexbox.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <Section title="7. Common Pitfalls & How to Avoid Them" icon={ShieldAlert}>
                    <p className="mb-6">
                        Flexbox is incredibly powerful, but it has a few quirks that commonly trip up developers. Here is a checklist of the most common issues and how to resolve them.
                    </p>

                    <h3 className="text-xl font-bold text-white mt-6 mb-2">Pitfall 1: Forgetting that Flexbox is one-dimensional</h3>
                    <p className="mb-4">
                        Flexbox handles one axis at a time. If you need rows <em>and</em> columns (a grid layout), use CSS Grid for the outer layout skeleton.
                    </p>

                    <h3 className="text-xl font-bold text-white mt-6 mb-2">Pitfall 2: Setting <code>width</code> when you should use <code>flex-basis</code></h3>
                    <p className="mb-4">
                        For flex items, always use <code>flex-basis</code> instead of <code>width</code> (when using <code>flex-direction: row</code>) or <code>height</code> (when using <code>flex-direction: column</code>). Setting <code>width</code> directly can interfere with flex growth/shrinkage calculations.
                    </p>
                    <CodeBlock title="styles.css" language="css">{`/* ❌ Might behave unexpectedly */
.item { width: 200px; }

/* ✓ Correct */
.item { flex: 0 0 200px; }
/* or */
.item { flex-basis: 200px; flex-shrink: 0; }`}</CodeBlock>

                    <h3 className="text-xl font-bold text-white mt-6 mb-2">Pitfall 3: <code>align-content</code> having no effect</h3>
                    <p className="mb-4">
                        <code>align-content</code> does nothing unless <code>flex-wrap: wrap</code> is active <strong>and</strong> there are actually multiple lines of items. Always check both conditions.
                    </p>

                    <h3 className="text-xl font-bold text-white mt-6 mb-2">Pitfall 4: Items not centering vertically</h3>
                    <p className="mb-4">
                        The most common cause: the container has no height! If the container's height is determined only by its content (the flex items), there is no extra vertical space to center them inside.
                    </p>
                    <CodeBlock title="styles.css" language="css">{`/* ❌ No height = no centering effect */
.container {
  display: flex;
  align-items: center;
}

/* ✓ Give the container height */
.container {
  display: flex;
  align-items: center;
  min-height: 100vh;    /* or any specific height */
}`}</CodeBlock>

                    <h3 className="text-xl font-bold text-white mt-6 mb-2">Pitfall 5: <code>justify-content</code> doesn't work as expected with <code>flex-grow</code></h3>
                    <p className="mb-4">
                        If any flex item has <code>flex-grow &gt; 0</code>, it will consume all available space, leaving nothing to distribute with <code>justify-content</code>. <code>justify-content</code> only distributes <em>leftover</em> space.
                    </p>

                    <h3 className="text-xl font-bold text-white mt-6 mb-2">Pitfall 6: Using <code>order</code> for semantic reordering</h3>
                    <p className="mb-4">
                        As noted previously, <code>order</code> is visual only. Use it for cosmetic shifts, not for changing logical reading order for screen readers.
                    </p>
                </Section>

                <Section title="8. Real-World Patterns" icon={Sparkles}>
                    <p className="mb-6">
                        Explore these 7 essential layouts. Use the interactive sandbox below to toggle between them, see the live rendered mockups, and copy the production-grade source code.
                    </p>

                    {/* Interactive Patterns Sandbox Component */}
                    <CssFlexboxPatternsSimulator />
                </Section>
            </div>

            {/* Navigation links */}
            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/flexbox/items" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Previous: Flex Item Properties
                </Link>
                <Link to="/webdevelopment/css/flexbox/exercises-cheatsheet" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Exercises & Cheatsheet <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
}
