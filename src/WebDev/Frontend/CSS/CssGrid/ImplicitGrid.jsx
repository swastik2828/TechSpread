import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Layers, ArrowDownUp } from 'lucide-react';
import SEO from '../../../../components/SEO';
import CssGridImplicitSimulator from '../../../../simulators/web/css/CssGridImplicitSimulator';

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

export default function ImplicitGrid() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Implicit Grid — Auto Rows and Flow"
                description="Understand the difference between the explicit and implicit grid in CSS. Learn to use grid-auto-rows and grid-auto-flow dense."
                keywords="implicit grid, css grid auto flow, grid-auto-rows, grid auto flow dense, explicit vs implicit grid"
                url="/webdevelopment/css/grid/implicit-grid"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-bold text-sky-400 uppercase tracking-widest">Module 11 • Part 7</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                    Implicit Grid
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl">
                    Everything covered so far is the <em>explicit</em> grid. But what happens when you have more items than cells? Grid automatically creates the <em>implicit</em> grid.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <Section title="Auto-Created Tracks" icon={Layers}>
                    <p>
                        The explicit grid consists of the rows and columns you define with <code>grid-template-*</code>. Grid automatically creates extra rows (or columns) to hold overflow items. These auto-created tracks are the <strong>implicit grid</strong>.
                    </p>

                    <CodeBlock title="styles.css" language="css">{`.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 explicit columns */
  
  /* Grid creates rows automatically as items are added */
  grid-auto-rows: 150px;    /* Control the height of auto-created rows */
  grid-auto-flow: row;      /* Default: items flow into new rows */
}`}</CodeBlock>
                </Section>

                <Section title="grid-auto-flow Control" icon={ArrowDownUp}>
                    <p>
                        <code>grid-auto-flow</code> controls the direction in which new implicit tracks are created and how items are placed into them.
                    </p>

                    <CodeBlock title="styles.css" language="css">{`grid-auto-flow: row;    /* Fill rows first (default) */
grid-auto-flow: column; /* Fill columns first */
grid-auto-flow: dense;  /* Backfill gaps when items have varying spans */`}</CodeBlock>

                    <p className="mt-4 p-6 bg-purple-900/10 border-l-4 border-purple-500 rounded-r-xl">
                        💡 <code>dense</code> is particularly useful for image galleries where items have different sizes — it prevents empty holes by moving smaller items into gaps that appear earlier in the grid.
                    </p>

                    <CssGridImplicitSimulator />
                </Section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/grid/alignment" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Previous: Alignment
                </Link>
                <Link to="/webdevelopment/css/grid/patterns-summary" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Real-World Patterns & Summary <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
}