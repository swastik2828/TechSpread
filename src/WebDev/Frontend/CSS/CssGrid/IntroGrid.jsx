import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, BookOpen, LayoutGrid, HelpCircle } from 'lucide-react';
import SEO from '../../../../components/SEO';
import CssGridIntroSimulator from '../../../../simulators/web/css/CssGridIntroSimulator';

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

export default function IntroGrid() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Grid Introduction — The Complete Guide"
                description="Learn CSS Grid from scratch. Understand the 2D layout model, why it exists, and how to define grid containers, rows, and columns."
                keywords="css grid, display grid, web development, grid layout, css tutorials"
                url="/webdevelopment/css/grid/intro"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-bold text-sky-400 uppercase tracking-widest">Module 11 • Part 1</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                    CSS Grid —{' '}
                    <span className="text-transparent bg-clip-text bg-sky-400 ">
                        The Complete Guide
                    </span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl">
                    By the end of this module, you'll know how to build any two-dimensional layout — from a simple blog page to a complex dashboard — using CSS Grid.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <Section title="Why Grid Exists" icon={HelpCircle}>
                    <p>
                        Before Grid, building multi-column layouts meant fighting floats, hacking <code>display: table</code>, or patching things together with Flexbox. None of these were designed for two-dimensional layout — they were workarounds.
                    </p>
                    <p>
                        CSS Grid was designed specifically for layouts that need control over <strong>both rows and columns at the same time</strong>. That's the one-sentence distinction that matters:
                    </p>

                    <div className="overflow-x-auto my-6 bg-[#161b22] rounded-xl border border-gray-800 shadow-2xl">
                        <table className="min-w-full border-collapse text-left text-sm">
                            <thead className="bg-[#1a1a1a]">
                                <tr>
                                    <th className="border border-gray-700 p-4 text-white font-bold">Tool</th>
                                    <th className="border border-gray-700 p-4 text-white font-bold">Dimension</th>
                                    <th className="border border-gray-700 p-4 text-white font-bold">Best For</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-gray-800">
                                    <td className="p-4 text-sky-400 font-bold border-r border-gray-800">Flexbox</td>
                                    <td className="p-4 text-gray-300 border-r border-gray-800">One axis (row <em>or</em> column)</td>
                                    <td className="p-4 text-gray-300">Navigation bars, button groups, card internals</td>
                                </tr>
                                <tr className="border-t border-gray-800 bg-[#161616]">
                                    <td className="p-4 text-purple-400 font-bold border-r border-gray-800">Grid</td>
                                    <td className="p-4 text-gray-300 border-r border-gray-800">Two axes (row <em>and</em> column)</td>
                                    <td className="p-4 text-gray-300">Page layouts, galleries, dashboards</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <InfoBox type="tip">
                        💡 <strong>They're not competitors</strong> — a well-built page often uses Grid for the outer layout and Flexbox inside individual components.
                    </InfoBox>

                    <CssGridIntroSimulator />
                </Section>

                <Section title="Part 1: Turning on Grid" icon={LayoutGrid}>
                    <p>
                        Any element can become a grid container with one line:
                    </p>

                    <CodeBlock title="styles.css" language="css">{`.container {
  display: grid;
}`}</CodeBlock>

                    <p>
                        That's it. At this point nothing looks different — Grid needs to know about columns and rows before it does anything useful. That's next.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">Grid Terminology</h3>
                    <p>A few terms before we go further:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li><strong>Grid container</strong> — the element with <code>display: grid</code></li>
                        <li><strong>Grid items</strong> — the direct children of the container</li>
                        <li><strong>Grid lines</strong> — the invisible dividing lines between rows and columns. They're numbered starting from 1</li>
                        <li><strong>Grid tracks</strong> — a single row or column (the space between two lines)</li>
                        <li><strong>Grid cell</strong> — the intersection of a row track and a column track</li>
                        <li><strong>Grid area</strong> — any rectangular section made of one or more cells</li>
                    </ul>
                </Section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/flexbox/exercises-cheatsheet" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Previous: Flexbox vs Grid
                </Link>
                <Link to="/webdevelopment/css/grid/columns-rows" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Defining Columns & Rows <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
}