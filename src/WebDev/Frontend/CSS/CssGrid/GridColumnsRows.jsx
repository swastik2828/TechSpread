import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Ruler, Columns, SplitSquareVertical } from 'lucide-react';
import SEO from '../../../../components/SEO';
import CssGridTracksSimulator from '../../../../simulators/web/css/CssGridTracksSimulator';

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

export default function GridColumnsRows() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Grid Columns and Rows"
                description="Learn how to define grid tracks, use the fr unit, gap property, and repeat() function in CSS Grid."
                keywords="css grid columns, grid-template-rows, fr unit css, css repeat function, css grid gap"
                url="/webdevelopment/css/grid/columns-rows"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-bold text-sky-400 uppercase tracking-widest">Module 11 • Part 2</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                    Defining Columns & Rows
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl">
                    Once Grid is activated, you map out your infrastructure. Learn how to size tracks perfectly using fixed units, fractional space, and shorthand functions.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <Section title="grid-template-columns & rows" icon={Columns}>
                    <p>
                        These two properties define the structure of your grid. Each value you write is the size of one track (one column or one row).
                    </p>

                    <CodeBlock title="styles.css" language="css">{`.container {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: 80px auto 60px;
}`}</CodeBlock>

                    <p>
                        This creates a 3×3 grid. The columns are: a fixed 200px sidebar, a flexible middle, and another fixed 200px sidebar. The rows are: a fixed 80px header, a flexible content area (<code>auto</code>), and a fixed 60px footer.
                    </p>
                </Section>

                <Section title="The fr Unit" icon={SplitSquareVertical}>
                    <p>
                        <code>fr</code> stands for <em>fractional unit</em> — it means "take up this fraction of the remaining space after fixed sizes are accounted for."
                    </p>

                    <CodeBlock title="styles.css" language="css">{`/* Three equal columns */
grid-template-columns: 1fr 1fr 1fr;

/* Middle column is twice as wide as the others */
grid-template-columns: 1fr 2fr 1fr;

/* Fixed sidebar, rest goes to content */
grid-template-columns: 280px 1fr;`}</CodeBlock>

                    <p>
                        Think of <code>fr</code> like splitting a pizza. If you have <code>1fr 2fr 1fr</code>, the available space is divided into 4 total slices — the first column gets 1 slice, the middle gets 2, and the last gets 1.
                    </p>
                </Section>

                <Section title="repeat() — Avoid Repetition" icon={Ruler}>
                    <p>
                        Writing <code>1fr 1fr 1fr 1fr</code> is tedious. The <code>repeat()</code> function is the shorthand for this:
                    </p>

                    <CodeBlock title="styles.css" language="css">{`/* These are identical */
grid-template-columns: 1fr 1fr 1fr;
grid-template-columns: repeat(3, 1fr);

/* A 12-column grid system */
grid-template-columns: repeat(12, 1fr);

/* Alternating pattern: 100px, 1fr, 100px, 1fr */
grid-template-columns: repeat(2, 100px 1fr);`}</CodeBlock>

                    <h3 className="text-2xl font-bold text-white mt-10 mb-4">gap — Space Between Tracks</h3>
                    <p>
                        <code>gap</code> sets the spacing <em>between</em> cells. It does <strong>not</strong> add space on the outer edges of the grid.
                    </p>

                    <CodeBlock title="styles.css" language="css">{`.container {
  gap: 16px;           /* Same gap on rows and columns */
  gap: 20px 12px;      /* row-gap column-gap */
  row-gap: 20px;       /* Only between rows */
  column-gap: 12px;    /* Only between columns */
}`}</CodeBlock>

                    {/* Interactive Simulator */}
                    <CssGridTracksSimulator />
                </Section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/grid/intro" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Previous: Intro to Grid
                </Link>
                <Link to="/webdevelopment/css/grid/responsive" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors" title="Next sections coming in the next response!">
                    Next: Responsive Grids <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
}