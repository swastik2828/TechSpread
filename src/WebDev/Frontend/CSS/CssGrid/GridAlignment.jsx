import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, AlignCenter, Layers } from 'lucide-react';
import SEO from '../../../../components/SEO';
import CssGridAlignmentSimulator from '../../../../simulators/web/css/CssGridAlignmentSimulator';

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

export default function GridAlignment() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Grid Alignment and Centering"
                description="Master grid alignment. Learn the difference between justify/align-items (cell alignment) and justify/align-content (grid alignment)."
                keywords="css grid alignment, justify-items, align-content, place-items css, center grid item"
                url="/webdevelopment/css/grid/alignment"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-bold text-sky-400 uppercase tracking-widest">Module 11 • Part 6</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                    Alignment in Grid
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl">
                    Grid gives you fine-grained control over how items sit inside their cells, and how the entire grid sits inside its container.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <Section title="Two Levels of Alignment" icon={Layers}>
                    <h3 className="text-2xl font-bold text-white mb-4">Level 1 — Items within their cells:</h3>
                    
                    <CodeBlock title="styles.css" language="css">{`.container {
  justify-items: center;   /* horizontal: start | end | center | stretch */
  align-items: center;     /* vertical:   start | end | center | stretch */
}`}</CodeBlock>

                    <p>
                        Default is <code>stretch</code>, which makes items fill their cell completely.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-10 mb-4">Level 2 — The grid inside the container</h3>
                    <p className="text-gray-400 text-sm mb-4">(This only matters when the grid is physically smaller than the container):</p>

                    <CodeBlock title="styles.css" language="css">{`.container {
  justify-content: center; /* horizontal: start | end | center | space-between | space-around */
  align-content: center;   /* vertical:   same options */
}`}</CodeBlock>

                    <CssGridAlignmentSimulator />
                </Section>

                <Section title="Overriding and Shorthands" icon={AlignCenter}>
                    <h3 className="text-2xl font-bold text-white mb-4">Override for a single item:</h3>
                    
                    <CodeBlock title="styles.css" language="css">{`.special-item {
  justify-self: end;
  align-self: start;
}`}</CodeBlock>

                    <p className="mt-6 p-6 bg-purple-900/10 border-l-4 border-purple-500 rounded-r-xl">
                        💡 <strong>Useful shorthand:</strong> <code>place-items: center center</code> sets both <code>align-items</code> and <code>justify-items</code> at once. Same applies for <code>place-content</code> and <code>place-self</code>. If you write one value (e.g., <code>place-items: center</code>), it applies to both axes!
                    </p>
                </Section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/grid/template-areas" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Previous: Template Areas
                </Link>
                <Link to="/webdevelopment/css/grid/implicit-grid" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors  " title="Next sections coming in the next response!">
                    Next: Implicit Grid <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
}