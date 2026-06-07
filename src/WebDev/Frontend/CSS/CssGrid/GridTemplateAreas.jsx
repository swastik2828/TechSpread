import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, LayoutTemplate, AlertTriangle } from 'lucide-react';
import SEO from '../../../../components/SEO';
import CssGridAreasSimulator from '../../../../simulators/web/css/CssGridAreasSimulator';

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

export default function GridTemplateAreas() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Grid Template Areas — Visual Layout Mapping"
                description="Master grid-template-areas in CSS Grid. Map your layouts visually using ASCII art-style strings and link them to items using grid-area."
                keywords="grid-template-areas, grid-area, visual css grid, ascii css grid"
                url="/webdevelopment/css/grid/template-areas"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-bold text-sky-400 uppercase tracking-widest">Module 11 • Part 5</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                    grid-template-areas — The Visual Approach
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl">
                    If placing items by line numbers feels abstract, <code>grid-template-areas</code> lets you draw your layout physically in the code using named strings.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <Section title="ASCII Art in CSS" icon={LayoutTemplate}>
                    <p>
                        You can define the structure of your container by mapping out named zones, and then simply tell individual items which "zone" they belong to:
                    </p>

                    <CodeBlock title="styles.css" language="css">{`.layout {
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-rows: 70px 1fr 60px;
  grid-template-areas:
    "header  header"
    "sidebar main"
    "footer  footer";
  gap: 12px;
  min-height: 100vh;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }`}</CodeBlock>

                    <p className="mt-4">
                        Each string in <code>grid-template-areas</code> represents one row. Each word in the string is a cell. Repeat the same name across multiple cells to make that area span them.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-10 mb-4">Leaving Empty Spaces</h3>
                    <p>Use a period (<code>.</code>) for an intentionally empty cell:</p>

                    <CodeBlock title="styles.css" language="css">{`grid-template-areas:
  "header  header"
  ".       main"
  "footer  footer";`}</CodeBlock>

                    <div className="border-l-4 border-yellow-500 bg-yellow-900/10 p-6 rounded-r-xl my-8">
                        <div className="flex items-center gap-2 text-yellow-500 font-bold mb-3">
                            <AlertTriangle size={20} /> Rules to keep in mind:
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-yellow-200/80">
                            <li>Every named area must form a rectangle — L-shapes are not valid.</li>
                            <li>Every row must have the same number of cells.</li>
                            <li>Area names must match the <code>grid-area</code> values on items exactly.</li>
                        </ul>
                    </div>

                    <CssGridAreasSimulator />
                </Section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/grid/placing-items" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Previous: Placing Items
                </Link>
                <Link to="/webdevelopment/css/grid/alignment" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Alignment <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
}