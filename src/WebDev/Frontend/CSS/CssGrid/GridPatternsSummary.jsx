import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, LayoutPanelLeft, Code, AlertTriangle, BookCheck } from 'lucide-react';
import SEO from '../../../../components/SEO';
import CssGridPatternsSimulator from '../../../../simulators/web/css/CssGridPatternsSimulator';

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

export default function GridPatternsSummary() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Grid Patterns, Summary & Exercises"
                description="Real-world CSS Grid patterns including Holy Grail, Dashboards, and Masonry. Complete with troubleshooting, exercises, and a quick reference cheatsheet."
                keywords="css grid patterns, holy grail layout css grid, css grid masonry, css grid cheatsheet"
                url="/webdevelopment/css/grid/patterns-summary"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-bold text-sky-400 uppercase tracking-widest">Module 11 • Part 8</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                    Real-World Patterns & Summary
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl">
                    Combine everything you've learned. Here are the classic, industry-standard layouts built natively with CSS Grid, followed by exercises and a final cheatsheet.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <Section title="Real-World Patterns" icon={LayoutPanelLeft}>
                    <CssGridPatternsSimulator />

                    <h3 className="text-2xl font-bold text-white mt-12 mb-4">Responsive Photo Gallery</h3>
                    <CodeBlock title="styles.css" language="css">{`.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
}`}</CodeBlock>
                    <p>No breakpoints. On any screen width, Grid figures out how many 200px+ columns can fit.</p>

                    <h3 className="text-2xl font-bold text-white mt-12 mb-4">Dashboard With Varying Card Sizes</h3>
                    <CodeBlock title="styles.css" language="css">{`.dashboard {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.card-wide    { grid-column: span 2; }   /* Takes up 2 columns */
.card-tall    { grid-row: span 2; }      /* Takes up 2 rows */
.card-feature { grid-column: span 3; }  /* Full width */`}</CodeBlock>

                    <h3 className="text-2xl font-bold text-white mt-12 mb-4">Holy Grail Layout</h3>
                    <p className="text-sm text-gray-400">(Header, Sidebar, Content, Aside, Footer)</p>
                    <CodeBlock title="styles.css" language="css">{`.page {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header  header  header"
    "sidebar content aside"
    "footer  footer  footer";
  min-height: 100vh;
  gap: 16px;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.aside   { grid-area: aside; }
.footer  { grid-area: footer; }`}</CodeBlock>

                    <h3 className="text-2xl font-bold text-white mt-12 mb-4">Masonry-Style Image Grid</h3>
                    <CodeBlock title="styles.css" language="css">{`.masonry {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-auto-rows: 10px;  /* Fine-grained row height for manual spanning */
  gap: 8px;
}`}</CodeBlock>
                    <p>For true masonry, each item needs <code>grid-row: span N</code> set via JavaScript based on image height. CSS Grid Masonry (a newer spec) will eventually handle this natively.</p>
                </Section>

                <Section title="Exercises" icon={Code}>
                    <div className="space-y-6">
                        <div className="p-6 bg-[#161b22] border border-gray-800 rounded-xl">
                            <h4 className="text-lg font-bold text-white mb-2">Exercise 1 — Page Layout with `grid-template-areas`</h4>
                            <p className="text-sm text-gray-400 mb-4">Build a layout with a full-width header (80px), 240px left sidebar, main content area, and full-width footer (60px). Fill 100vh height.</p>
                            <CodeBlock title="index.html" language="html">{`<div class="layout">\n  <header class="header">Header</header>\n  <aside class="sidebar">Sidebar</aside>\n  <main class="main">Main Content</main>\n  <footer class="footer">Footer</footer>\n</div>`}</CodeBlock>
                            <p className="text-sm text-purple-400 font-bold">Goal: Use `grid-template-areas` for placement.</p>
                        </div>

                        <div className="p-6 bg-[#161b22] border border-gray-800 rounded-xl">
                            <h4 className="text-lg font-bold text-white mb-2">Exercise 2 — Responsive Gallery</h4>
                            <p className="text-sm text-gray-400 mb-4">Build a photo gallery showing 4 columns on wide screens, automatically reducing as viewport narrows, with NO media queries and 12px gap.</p>
                            <p className="text-sm text-purple-400 font-bold">Goal: Use `auto-fit` and `minmax()`.</p>
                        </div>

                        <div className="p-6 bg-[#161b22] border border-gray-800 rounded-xl">
                            <h4 className="text-lg font-bold text-white mb-2">Exercise 3 — Dashboard Grid</h4>
                            <p className="text-sm text-gray-400 mb-4">Build a dashboard with 6 cards: default fills 1x1, one spans 2 cols, one spans 2 rows.</p>
                            <p className="text-sm text-purple-400 font-bold">Goal: Use `grid-column: span 2` and `grid-row: span 2`.</p>
                        </div>

                        <div className="p-6 bg-[#161b22] border border-gray-800 rounded-xl">
                            <h4 className="text-lg font-bold text-white mb-2">Exercise 4 — Line Placement vs. Areas</h4>
                            <p className="text-sm text-gray-400 mb-4">Take your Exercise 1 solution and rewrite it using `grid-column` and `grid-row` line numbers instead of template areas.</p>
                        </div>
                    </div>
                </Section>

                <Section title="Troubleshooting Common Mistakes" icon={AlertTriangle}>
                    <ul className="space-y-4">
                        <li className="p-4 bg-yellow-900/10 border border-yellow-700/50 rounded-lg">
                            <strong className="text-yellow-400 block mb-1">Items aren't spanning the full width</strong>
                            <span className="text-gray-300 text-sm">→ Make sure you're using <code>grid-column: 1 / -1</code>, not <code>grid-column: 1 / 3</code> (which breaks if column count changes)</span>
                        </li>
                        <li className="p-4 bg-yellow-900/10 border border-yellow-700/50 rounded-lg">
                            <strong className="text-yellow-400 block mb-1">`grid-template-areas` isn't working</strong>
                            <span className="text-gray-300 text-sm">→ Check that every row string has the same number of cells, and that each <code>grid-area</code> value exactly matches the name in the template</span>
                        </li>
                        <li className="p-4 bg-yellow-900/10 border border-yellow-700/50 rounded-lg">
                            <strong className="text-yellow-400 block mb-1">`auto-fit` / `auto-fill` looks the same</strong>
                            <span className="text-gray-300 text-sm">→ Add fewer items than columns allow and observe the difference: <code>auto-fill</code> leaves empty column tracks, <code>auto-fit</code> collapses them</span>
                        </li>
                        <li className="p-4 bg-yellow-900/10 border border-yellow-700/50 rounded-lg">
                            <strong className="text-yellow-400 block mb-1">Gap adds up and causes overflow</strong>
                            <span className="text-gray-300 text-sm">→ Use <code>gap</code> instead of margins on items — <code>gap</code> doesn't affect the outer edges</span>
                        </li>
                        <li className="p-4 bg-yellow-900/10 border border-yellow-700/50 rounded-lg">
                            <strong className="text-yellow-400 block mb-1">Implicit rows are too short</strong>
                            <span className="text-gray-300 text-sm">→ Add <code>grid-auto-rows: minmax(100px, auto)</code> so auto-created rows have a minimum height</span>
                        </li>
                    </ul>
                </Section>

                <Section title="Quick Reference & Summary" icon={BookCheck}>
                    <CodeBlock title="cheatsheet.css" language="css">{`/* Container */
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 80px 1fr 60px;
grid-template-areas: "a a" "b c" "d d";
gap: 16px;
grid-auto-rows: 200px;
grid-auto-flow: row | column | dense;
justify-items: start | end | center | stretch;
align-items: start | end | center | stretch;
justify-content: start | end | center | space-between | space-around;
align-content: start | end | center | space-between | space-around;

/* Items */
grid-column: 1 / 3;          /* line start / line end */
grid-column: 1 / span 2;     /* line start / span count */
grid-column: span 2;         /* auto start / span count */
grid-row: 2 / 4;
grid-area: sidebar;          /* named area */
justify-self: start | end | center | stretch;
align-self: start | end | center | stretch;`}</CodeBlock>

                    <h3 className="text-2xl font-bold text-white mt-10 mb-4">Summary Takeaways</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-5 bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/30 rounded-xl">
                            <h4 className="text-purple-400 font-bold mb-2">The Fundamentals</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                                <li>Grid is two-dimensional: controls rows and columns simultaneously.</li>
                                <li><code>fr</code> units divide remaining space proportionally.</li>
                                <li><code>gap</code> adds space between tracks, not outside the grid.</li>
                            </ul>
                        </div>
                        <div className="p-5 bg-gradient-to-br from-pink-900/20 to-transparent border border-pink-500/30 rounded-xl">
                            <h4 className="text-pink-400 font-bold mb-2">Must-Know Patterns</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                                <li><code>repeat(auto-fit, minmax(250px, 1fr))</code> builds responsive grids without media queries.</li>
                                <li><code>grid-template-areas</code> gives a visual map.</li>
                                <li><code>grid-column: 1 / -1</code> spans all columns safely.</li>
                            </ul>
                        </div>
                    </div>

                    <p className="mt-8 text-center text-gray-400 italic font-medium">
                        The mental model: Define the grid on the container. Place items on the grid. Alignment is a separate layer on top. Once these three steps click, Grid becomes highly intuitive.
                    </p>
                </Section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/grid/implicit-grid" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Previous: Implicit Grid
                </Link>
                <Link to="/tutorials/webdevelopment/frontend" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Finish Course & Return to Dashboard <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
}