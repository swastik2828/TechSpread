import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Maximize, Smartphone } from 'lucide-react';
import SEO from '../../../../components/SEO';
import CssGridResponsiveSimulator from '../../../../simulators/web/css/CssGridResponsiveSimulator';

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

export default function ResponsiveGrids() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="Responsive CSS Grids Without Media Queries"
                description="Learn how to build responsive layouts using auto-fill, auto-fit, and minmax() in CSS Grid without writing a single media query."
                keywords="css grid responsive, auto-fit vs auto-fill, minmax css, no media query grid"
                url="/webdevelopment/css/grid/responsive"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-bold text-sky-400 uppercase tracking-widest">Module 11 • Part 3</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                    Responsive Grids Without Media Queries
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl">
                    This is one of Grid's most powerful features. Learn how two keywords — <code>auto-fill</code> and <code>auto-fit</code> — let the grid figure out how many columns to create based on available space.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <Section title="The Pattern" icon={Maximize}>
                    <CodeBlock title="styles.css" language="css">{`.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}`}</CodeBlock>

                    <p className="mt-6 mb-4">Breaking this down:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li><code>repeat(auto-fit, ...)</code> — don't ask for a fixed number of columns; figure it out</li>
                        <li><code>minmax(250px, 1fr)</code> — each column should be <em>at least</em> 250px wide, but expand to fill available space</li>
                    </ul>

                    <p>
                        On a 1200px screen, this creates ~4 columns. On a 600px screen, ~2 columns. On a phone, 1 column. No media queries needed.
                    </p>
                </Section>

                <Section title="auto-fill vs auto-fit" icon={Smartphone}>
                    <p>
                        The difference only shows when there are fewer items than columns would allow:
                    </p>

                    <CodeBlock title="styles.css" language="css">{`/* auto-fill: keeps empty column tracks, reserves space */
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

/* auto-fit: collapses empty tracks, items stretch to fill */
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));`}</CodeBlock>

                    <p>
                        For most galleries and card grids, <code>auto-fit</code> is what you want — items expand to fill available space rather than leaving empty columns.
                    </p>

                    <CssGridResponsiveSimulator />
                </Section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/grid/columns-rows" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Previous: Columns & Rows
                </Link>
                <Link to="/webdevelopment/css/grid/placing-items" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Placing Items <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
}