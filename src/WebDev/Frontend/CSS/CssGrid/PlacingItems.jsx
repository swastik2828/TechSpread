import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Crosshair, LayoutTemplate } from 'lucide-react';
import SEO from '../../../../components/SEO';
import CssGridPlacementSimulator from '../../../../simulators/web/css/CssGridPlacementSimulator';

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

export default function PlacingItems() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="Placing Items in CSS Grid"
                description="Learn how to explicitly place and span items across grid lines using grid-column, grid-row, and the -1 trick."
                keywords="css grid lines, grid-column, grid-row, span css grid"
                url="/webdevelopment/css/grid/placing-items"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-bold text-sky-400 uppercase tracking-widest">Module 11 • Part 4</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                    Placing Items
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl">
                    By default, Grid places items automatically left-to-right, row by row. But you can take control and place any item exactly where you want using Grid Lines.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <Section title="Grid Lines" icon={Crosshair}>
                    <p>
                        Grid creates numbered lines. A 3-column grid has lines 1, 2, 3, and 4. Negative numbers count from the end — line <code>-1</code> is always the last line.
                    </p>

                    <div className="my-6 overflow-x-auto bg-[#111] p-4 sm:p-6 rounded-lg font-mono text-xs sm:text-sm border border-gray-800 text-sky-300 leading-normal">
<pre>{`Column lines:  1    2    3    4
               |    |    |    |
               | C1 | C2 | C3 |
               |    |    |    |`}</pre>
                    </div>

                    <h3 className="text-2xl font-bold text-white mt-10 mb-4">grid-column and grid-row</h3>
                    <p>
                        Use these on grid <em>items</em> to specify which lines they start and end at:
                    </p>

                    <CodeBlock title="styles.css" language="css">{`/* span from column line 1 to line 3 (covers 2 columns) */
.item {
  grid-column: 1 / 3;
}

/* start at row line 2, end at line 4 */
.item {
  grid-row: 2 / 4;
}

/* shorthand: start / end */
.item {
  grid-column: 2 / span 2;  /* start at line 2, span 2 columns */
  grid-row: 1 / span 3;     /* start at line 1, span 3 rows */
}`}</CodeBlock>
                </Section>

                <Section title="The -1 Trick — Full Width Items" icon={LayoutTemplate}>
                    <CodeBlock title="styles.css" language="css">{`/* Span the full width, no matter how many columns there are */
.header {
  grid-column: 1 / -1;
}`}</CodeBlock>

                    <p>
                        <code>1 / -1</code> means "from the first line to the last line." If you later change the number of columns, this item still spans all of them. Use this for headers and footers.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-10 mb-4">A Classic Layout Using Grid Lines</h3>
                    
                    <CodeBlock title="styles.css" language="css">{`.layout {
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-rows: 70px 1fr 60px;
  gap: 12px;
  min-height: 100vh;
}

.header  { grid-column: 1 / -1; grid-row: 1; }
.sidebar { grid-column: 1;      grid-row: 2; }
.main    { grid-column: 2;      grid-row: 2; }
.footer  { grid-column: 1 / -1; grid-row: 3; }`}</CodeBlock>

                    <CssGridPlacementSimulator />
                </Section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/grid/responsive" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Previous: Responsive Grids
                </Link>
                <Link to="/webdevelopment/css/grid/template-areas" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors " title="Next sections coming in the next response!">
                    Next: Grid Template Areas <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
}