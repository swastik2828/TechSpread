import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Layers, Award, Grid, Star } from 'lucide-react';
import SEO from '../../../../components/SEO';
import CssFlexboxExercisesSimulator from '../../../../simulators/web/css/CssFlexboxExercisesSimulator';

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

export default function FlexboxVsGridExercises() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Flexbox vs Grid & Exercises — The Complete Guide"
                description="Understand when to use CSS Flexbox vs CSS Grid. Complete the hands-on layout exercises and access the ultimate quick reference cheat sheet."
                keywords="flexbox vs grid, css grid, css flexbox exercises, flexbox cheat sheet, flexbox properties table, web development"
                url="/webdevelopment/css/flexbox/exercises-cheatsheet"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-bold text-sky-400 uppercase tracking-widest">Module 10 • Part 5</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                    Flexbox vs Grid,{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">
                        Exercises & Cheatsheet
                    </span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl">
                    Contrast Flexbox with Grid, test your skills in the interactive workbook, and bookmark our complete property reference sheets.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <Section title="9. Flexbox vs Grid: When to Use Which" icon={Grid}>
                    <p className="mb-6">
                        A question that comes up constantly. Here's a clear mental model and comparative grid:
                    </p>

                    <div className="overflow-x-auto my-6 bg-[#161b22] rounded-xl border border-gray-800 shadow-2xl">
                        <table className="min-w-full border-collapse text-left text-sm">
                            <thead className="bg-[#1a1a1a]">
                                <tr>
                                    <th className="border border-gray-700 p-4 text-white font-bold">Scenario</th>
                                    <th className="border border-gray-700 p-4 text-white font-bold">Use</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-gray-800">
                                    <td className="p-4 text-gray-300 border-r border-gray-800">Navigation bar (one row of items)</td>
                                    <td className="p-4 font-bold text-sky-400 bg-sky-950/20">Flexbox</td>
                                </tr>
                                <tr className="border-t border-gray-800 bg-[#161616]">
                                    <td className="p-4 text-gray-300 border-r border-gray-800">Button group</td>
                                    <td className="p-4 font-bold text-sky-400 bg-sky-950/20">Flexbox</td>
                                </tr>
                                <tr className="border-t border-gray-800">
                                    <td className="p-4 text-gray-300 border-r border-gray-800">Centering a single item</td>
                                    <td className="p-4 font-bold text-sky-400 bg-sky-950/20">Flexbox</td>
                                </tr>
                                <tr className="border-t border-gray-800 bg-[#161616]">
                                    <td className="p-4 text-gray-300 border-r border-gray-800">Card row that wraps</td>
                                    <td className="p-4 font-bold text-sky-400 bg-sky-950/20">Flexbox</td>
                                </tr>
                                <tr className="border-t border-gray-800">
                                    <td className="p-4 text-gray-300 border-r border-gray-800">Page-level layout (header, sidebar, main, footer)</td>
                                    <td className="p-4 font-bold text-purple-400 bg-purple-950/20">Grid</td>
                                </tr>
                                <tr className="border-t border-gray-800 bg-[#161616]">
                                    <td className="p-4 text-gray-300 border-r border-gray-800">Image gallery with strict rows AND columns</td>
                                    <td className="p-4 font-bold text-purple-400 bg-purple-950/20">Grid</td>
                                </tr>
                                <tr className="border-t border-gray-800">
                                    <td className="p-4 text-gray-300 border-r border-gray-800">Items need to align with items in other rows</td>
                                    <td className="p-4 font-bold text-purple-400 bg-purple-950/20">Grid</td>
                                </tr>
                                <tr className="border-t border-gray-800 bg-[#161616]">
                                    <td className="p-4 text-gray-300 border-r border-gray-800">Content-driven sizing (items size to fit)</td>
                                    <td className="p-4 font-bold text-sky-400 bg-sky-950/20">Flexbox</td>
                                </tr>
                                <tr className="border-t border-gray-800">
                                    <td className="p-4 text-gray-300 border-r border-gray-800">Layout-driven sizing (grid defines the slots)</td>
                                    <td className="p-4 font-bold text-purple-400 bg-purple-950/20">Grid</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <InfoBox type="tip">
                        💡 <strong>Rule of thumb:</strong>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li><em>"I want items to flow and fit as best they can"</em> → <strong>Flexbox</strong></li>
                            <li><em>"I want items to align to a defined grid"</em> → <strong>CSS Grid</strong></li>
                        </ul>
                        They work brilliantly together: Grid for the outer page skeleton, Flexbox for individual inner components.
                    </InfoBox>
                </Section>

                <Section title="10. Exercises Workbook" icon={Award}>
                    <p className="mb-6">
                        Complete these practical layout exercises. Use the interactive workbook component below to test and instantly verify your selector values!
                    </p>

                    {/* Interactive Exercises Simulator Component */}
                    <CssFlexboxExercisesSimulator />

                    <h3 className="text-xl font-bold text-white mt-8 mb-2">Exercise 1 — Navigation Bar</h3>
                    <p className="mb-4">Build a navigation bar using Flexbox:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Logo on the far left</li>
                        <li>Nav links on the far right, horizontally spaced with <code>gap</code></li>
                        <li>All items vertically centered</li>
                        <li>Use <code>justify-content: space-between</code> and <code>align-items: center</code></li>
                    </ul>

                    <h3 className="text-xl font-bold text-white mt-6 mb-2">Exercise 2 — Responsive Card Row</h3>
                    <p className="mb-4">Create a row of cards that:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Shows 3 columns on wide screens</li>
                        <li>Wraps to 2 columns on medium screens</li>
                        <li>Wraps to 1 column on narrow screens</li>
                        <li>Achieved using <code>flex-wrap: wrap</code> and <code>flex: 1 1 280px</code> — no media queries</li>
                    </ul>

                    <h3 className="text-xl font-bold text-white mt-6 mb-2">Exercise 3 — Holy Grail Layout</h3>
                    <p className="mb-4">Build the classic layout:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Header spanning full width at the top</li>
                        <li>Footer spanning full width at the bottom</li>
                        <li>Three columns in the middle: left sidebar (fixed 200px), main content (fills space), right sidebar (fixed 200px)</li>
                        <li>Main content must use <code>flex: 1</code> and <code>min-width: 0</code></li>
                        <li>Footer must stick to the bottom even if content is short</li>
                    </ul>

                    <h3 className="text-xl font-bold text-white mt-6 mb-2">Exercise 4 — Perfect Center</h3>
                    <p className="mb-4">
                        Center content both horizontally and vertically in a 400px × 300px box using exactly three Flexbox properties on the container: <code>display: flex</code>, <code>align-items: center</code>, <code>justify-content: center</code>.
                    </p>

                    <h3 className="text-xl font-bold text-white mt-6 mb-2">Exercise 5 — Reorder on Mobile (Bonus)</h3>
                    <p className="mb-4">
                        Create a layout with a sidebar and main content area. On desktop, the sidebar is on the left. On mobile (using a media query), visually move the main content above the sidebar using <code>order</code>, without changing the HTML.
                    </p>

                    <h3 className="text-xl font-bold text-white mt-6 mb-2">Exercise 6 — Media Object (Bonus)</h3>
                    <p className="mb-4">
                        Build a tweet-like component: circular avatar on the left, username + tweet text on the right. The text column should stretch to fill available space. The avatar should never grow or shrink.
                    </p>
                </Section>

                <Section title="11. Quick Reference Cheat Sheet" icon={BookOpen}>
                    <h3 className="text-xl font-bold text-white mb-4">Container Properties</h3>
                    <div className="overflow-x-auto my-6 border border-gray-800 rounded-xl">
                        <table className="w-full text-left border-collapse text-xs md:text-sm">
                            <thead className="bg-[#161b22]">
                                <tr>
                                    <th className="p-4 border-b border-gray-800 font-bold text-white">Property</th>
                                    <th className="p-4 border-b border-gray-800 font-bold text-white">Values</th>
                                    <th className="p-4 border-b border-gray-800 font-bold text-white">What It Does</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800 bg-[#0d1117] text-gray-300">
                                <tr>
                                    <td className="p-4 font-mono text-orange-400">display</td>
                                    <td className="p-4 font-mono">flex | inline-flex</td>
                                    <td className="p-4">Activates Flexbox on the parent container.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-orange-400">flex-direction</td>
                                    <td className="p-4 font-mono">row | row-reverse | column | column-reverse</td>
                                    <td className="p-4">Sets main axis flow direction.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-orange-400">flex-wrap</td>
                                    <td className="p-4 font-mono">nowrap | wrap | wrap-reverse</td>
                                    <td className="p-4">Controls line wrapping of items.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-orange-400">flex-flow</td>
                                    <td className="p-4 font-mono">&lt;direction&gt; &lt;wrap&gt;</td>
                                    <td className="p-4">Shorthand for direction and wrap.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-orange-400">justify-content</td>
                                    <td className="p-4 font-mono">flex-start | flex-end | center | space-between | space-around | space-evenly</td>
                                    <td className="p-4">Main axis spacing & item distribution.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-orange-400">align-items</td>
                                    <td className="p-4 font-mono">stretch | flex-start | flex-end | center | baseline</td>
                                    <td className="p-4">Cross axis alignment (single line).</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-orange-400">align-content</td>
                                    <td className="p-4 font-mono">flex-start | flex-end | center | space-between | space-around | stretch</td>
                                    <td className="p-4">Cross axis alignment (multi-line).</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-orange-400">gap</td>
                                    <td className="p-4 font-mono">&lt;length&gt; | &lt;row&gt; &lt;col&gt;</td>
                                    <td className="p-4">Spacing strictly between flex items.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4 mt-12">Item Properties</h3>
                    <div className="overflow-x-auto my-6 border border-gray-800 rounded-xl">
                        <table className="w-full text-left border-collapse text-xs md:text-sm">
                            <thead className="bg-[#161b22]">
                                <tr>
                                    <th className="p-4 border-b border-gray-800 font-bold text-white">Property</th>
                                    <th className="p-4 border-b border-gray-800 font-bold text-white">Values</th>
                                    <th className="p-4 border-b border-gray-800 font-bold text-white">What It Does</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800 bg-[#0d1117] text-gray-300">
                                <tr>
                                    <td className="p-4 font-mono text-sky-400">flex-grow</td>
                                    <td className="p-4 font-mono">&lt;number&gt; (default: 0)</td>
                                    <td className="p-4">How much the item expands into remaining space.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-sky-400">flex-shrink</td>
                                    <td className="p-4 font-mono">&lt;number&gt; (default: 1)</td>
                                    <td className="p-4">How much the item compresses under spatial deficits.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-sky-400">flex-basis</td>
                                    <td className="p-4 font-mono">auto | &lt;length&gt; | 0</td>
                                    <td className="p-4">Initial size before extra grow/shrink space distribution.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-sky-400">flex</td>
                                    <td className="p-4 font-mono">&lt;grow&gt; &lt;shrink&gt; &lt;basis&gt;</td>
                                    <td className="p-4">Shorthand for growth, shrinkage, and basis.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-sky-400">align-self</td>
                                    <td className="p-4 font-mono">Same as align-items</td>
                                    <td className="p-4">Overrides parent's align-items on a single item.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-sky-400">order</td>
                                    <td className="p-4 font-mono">&lt;integer&gt; (default: 0)</td>
                                    <td className="p-4">Visual order sequencing (lower values sort first).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className="text-xl font-bold text-white mt-12 mb-4">The Most Useful Flex Shortcuts</h3>
                    <CodeBlock title="styles.css" language="css">{`flex: 1          /* Equal-width columns */
flex: none       /* Rigid — never grows or shrinks */
flex: 0 0 200px  /* Fixed 200px */
flex: auto       /* Size based on content, can grow and shrink */`}</CodeBlock>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">The Perfect Center (3 lines)</h3>
                    <CodeBlock title="styles.css" language="css">{`display: flex;
align-items: center;
justify-content: center;`}</CodeBlock>
                </Section>
            </div>

            {/* Ending footer notes */}
            <p className="text-center text-sm font-bold text-gray-550 mt-16 pb-8 border-b border-gray-800 uppercase tracking-widest">
                Module 10 of the CSS Fundamentals Series<br />
                <span className="text-[10px] text-gray-600 mt-1 block">Prerequisites: Module 7 (CSS Box Model), Module 9 (CSS Positioning)</span>
            </p>

            {/* Previous link only since it is the last module page */}
            <div className="flex justify-between mt-12 pt-8">
                <Link to="/webdevelopment/css/flexbox/pitfalls-patterns" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Previous: Pitfalls & Patterns
                </Link>
                 <Link to="/webdevelopment/css/grid/intro" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                                    Next: Css Grid <ArrowRight size={16} />
                                </Link>
            </div>
        </article>
    );
}
