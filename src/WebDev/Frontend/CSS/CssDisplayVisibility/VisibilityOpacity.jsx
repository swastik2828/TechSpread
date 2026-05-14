import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Grid } from 'lucide-react';
import SEO from '../../../../components/SEO';
import CssDisplayVisibilitySimulator from '../../../../simulators/web/css/CssDisplayVisibilitySimulator';

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

export default function VisibilityOpacity() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Visibility vs Display vs Opacity"
                description="Understand the difference between display: none, visibility: hidden, and opacity: 0 in CSS and when to use them."
                keywords="css visibility, css opacity vs display none, css hiding elements, visibility hidden"
                url="/webdevelopment/css/display-visibility/visibility-opacity"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-bold text-sky-400 uppercase tracking-widest">Section 2</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                    Modern Layout Contexts &{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">
                        The "Hiding Things" Matrix
                    </span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl">
                    Explore modern container displays and understand the crucial differences between hiding elements via display, visibility, and opacity.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <Section title="2. Modern Layout Contexts" icon={Grid}>
                    <p>
                        While the properties like block and inline control how an element behaves among its siblings, the following properties define how an element manages its <strong>children</strong>. We will cover these deeply in future modules, but you should know their names now.
                    </p>
                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>display: flex / inline-flex:</strong> Turns the element into a Flexbox container, allowing one-dimensional (row or column) layout control of its children. <code>inline-flex</code> makes the container itself flow inline.</li>
                        <li><strong>display: grid / inline-grid:</strong> Turns the element into a Grid container, allowing powerful two-dimensional (rows and columns) layout control.</li>
                    </ul>
                </Section>

                <Section title="3. The 'Hiding Things' Matrix" icon={Eye}>
                    <p>
                        CSS provides three primary ways to hide an element, and they are often confused. The key difference lies in whether the element keeps its physical space and whether it remains interactive.
                    </p>
                    
                    <div className="overflow-x-auto my-8">
                        <table className="w-full text-left border-collapse border border-gray-700">
                            <thead>
                                <tr className="bg-gray-800 text-sky-400">
                                    <th className="border border-gray-700 p-3">Property</th>
                                    <th className="border border-gray-700 p-3">Space in Layout?</th>
                                    <th className="border border-gray-700 p-3">Interactive?</th>
                                    <th className="border border-gray-700 p-3">Screen Reader</th>
                                    <th className="border border-gray-700 p-3">Use Case</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-700 p-3 font-mono text-sm">display: none</td>
                                    <td className="border border-gray-700 p-3">No (Removed)</td>
                                    <td className="border border-gray-700 p-3 text-red-400">No</td>
                                    <td className="border border-gray-700 p-3 text-red-400">Ignored</td>
                                    <td className="border border-gray-700 p-3">Hiding closed menus/modals.</td>
                                </tr>
                                <tr className="bg-white/5">
                                    <td className="border border-gray-700 p-3 font-mono text-sm">visibility: hidden</td>
                                    <td className="border border-gray-700 p-3 text-green-400">Yes (Blank hole)</td>
                                    <td className="border border-gray-700 p-3 text-red-400">No</td>
                                    <td className="border border-gray-700 p-3 text-red-400">Ignored</td>
                                    <td className="border border-gray-700 p-3">Keeping grid alignments intact.</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-700 p-3 font-mono text-sm">opacity: 0</td>
                                    <td className="border border-gray-700 p-3 text-green-400">Yes (Invisible)</td>
                                    <td className="border border-gray-700 p-3 text-green-400">Yes</td>
                                    <td className="border border-gray-700 p-3 text-green-400">Read out loud</td>
                                    <td className="border border-gray-700 p-3">Fading animations; invisible targets.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <CodeBlock title="hiding.css">{`.hide-completely { display: none; }      /* Gone entirely */
.hide-but-hold   { visibility: hidden; } /* Invisible, but reserves space */
.ghost-element   { opacity: 0; }         /* Invisible, reserves space, can be clicked! */`}</CodeBlock>

                    <h3 className="text-2xl font-bold text-white mt-12 mb-6">Interactive Layout Explorer</h3>
                    <p>
                        To truly understand how display, visibility, and opacity affect the flow of a document, it helps to manipulate them in real-time. Use the interactive widget below to toggle properties on the highlighted box and watch how the surrounding text and layout react.
                    </p>
                    
                    <CssDisplayVisibilitySimulator />

                </Section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/display-visibility/intro" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    ← Back: Introduction
                </Link>
                <Link to="/webdevelopment/css/display-visibility/overflow-spillage" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Managing Spillage <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
}
