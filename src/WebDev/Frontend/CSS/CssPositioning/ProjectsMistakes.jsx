import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Rocket, AlertTriangle, FileText, CheckCircle } from 'lucide-react';
import SEO from '../../../../components/SEO';

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

export default function ProjectsMistakes() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Positioning Real-World Projects & Cheatsheet"
                description="Apply CSS positioning to real-world projects like card badges, sticky navbars, modal overlays, and tooltips. Avoid common mistakes and keep a cheatsheet."
                keywords="css positioning examples, sticky navbar css, css modal overlay, css tooltip, css position cheatsheet"
                url="/webdevelopment/css/positioning/projects-mistakes"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-bold text-sky-400 uppercase tracking-widest">Module 9</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                    Projects, Mistakes &{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">
                        Cheatsheet
                    </span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl">
                    Let's build actual components and avoid common traps that mess up CSS positioning layouts.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <Section title="12. Real-World Mini Projects" icon={Rocket}>
                    <p>
                        These are patterns you'll use in nearly every web project.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">Project 1: Card with a Notification Badge</h3>
                    <p>A card with a small red dot in the top-right corner showing a notification count.</p>
                    <CodeBlock title="index.html" language="html">{`<div class="card">
  <div class="badge">3</div>
  <img src="avatar.png" alt="User avatar" width="80" height="80">
  <h3>John Doe</h3>
  <p>Software Engineer</p>
</div>`}</CodeBlock>

                    <CodeBlock title="styles.css" language="css">{`/* Step 1: Make the card the positioning context */
.card {
  position: relative;        /* ← This is the key! Badge will be relative to this */
  display: inline-block;
  width: 160px;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Step 2: Position the badge absolutely within the card */
.badge {
  position: absolute;
  top: -8px;                 /* 8px above the card's top edge */
  right: -8px;               /* 8px beyond the card's right edge */

  /* Styling the badge */
  width: 24px;
  height: 24px;
  background: #e74c3c;
  color: white;
  border-radius: 50%;        /* Make it a circle */
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;   /* White border makes it "pop" off the card */
}`}</CodeBlock>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">Project 2: Sticky Navigation Header</h3>
                    <CodeBlock title="styles.css" language="css">{`/* The sticky navbar */
.navbar {
  position: sticky;
  top: 0;                    /* Stick when the top touches the viewport */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 24px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  z-index: 100;              /* Stay above page content */
}`}</CodeBlock>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">Project 3: Modal / Dialog Overlay</h3>
                    <p>A full-screen overlay with a centered dialog box.</p>
                    <CodeBlock title="styles.css" language="css">{`/* Step 1: Full-screen overlay */
.modal-overlay {
  position: fixed;           /* Relative to the VIEWPORT */
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;             /* Above everything else */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Step 2: The modal box itself */
.modal-box {
  position: relative;        /* So the close button can be positioned within it */
  background: white;
  border-radius: 12px;
  padding: 32px;
  width: 90%;
  max-width: 480px;
}

/* Step 3: Close button in top-right corner of modal box */
.modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
}`}</CodeBlock>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">Project 4: Tooltip on Hover</h3>
                    <CodeBlock title="styles.css" language="css">{`/* Step 1: Wrapper becomes the positioning context */
.tooltip-wrapper {
  position: relative;
  display: inline-block;
}

/* Step 2: Hide the tooltip by default */
.tooltip {
  position: absolute;
  bottom: calc(100% + 8px);  /* 8px above the wrapper */
  left: 50%;
  transform: translateX(-50%); /* Center horizontally */
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
  z-index: 999;
}

/* Step 3: Show tooltip on hover */
.tooltip-wrapper:hover .tooltip {
  opacity: 1;
}`}</CodeBlock>
                </Section>

                <Section title="13. Common Mistakes & How to Fix Them" icon={AlertTriangle}>
                    <h3 className="text-xl font-bold text-red-400 mt-8 mb-4">❌ Mistake 1: Forgetting to set a positioning context</h3>
                    <p><strong>Problem:</strong> You set <code>position: absolute</code> on an element, but it flies off to a weird position far from where you expected.</p>
                    <p><strong>Why:</strong> No ancestor has a non-static position, so the element is positioning itself relative to the <code>&lt;html&gt;</code> element.</p>
                    <p><strong>Fix:</strong> Add <code>position: relative</code> to the parent element.</p>

                    <h3 className="text-xl font-bold text-red-400 mt-8 mb-4">❌ Mistake 2: Not giving sticky a threshold</h3>
                    <p><strong>Problem:</strong> You add <code>position: sticky</code> but the element doesn't stick.</p>
                    <p><strong>Why:</strong> No threshold value (<code>top</code>, <code>bottom</code>, etc.) is set.</p>
                    <p><strong>Fix:</strong> Add <code>top: 0</code> (or whatever threshold you need).</p>

                    <h3 className="text-xl font-bold text-red-400 mt-8 mb-4">❌ Mistake 3: overflow: hidden on a parent killing sticky</h3>
                    <p><strong>Problem:</strong> Your sticky element stops working, and you can't figure out why.</p>
                    <p><strong>Why:</strong> An ancestor has <code>overflow: hidden</code> or <code>overflow: auto</code>, which breaks sticky.</p>
                    <p><strong>Fix:</strong> Find the ancestor with <code>overflow</code> set and remove it, or change it to <code>visible</code>.</p>

                    <h3 className="text-xl font-bold text-red-400 mt-8 mb-4">❌ Mistake 4: z-index not working</h3>
                    <p><strong>Problem:</strong> You set a high z-index, but it's still appearing behind something else.</p>
                    <p><strong>Fix:</strong> Check that the element is positioned (non-static), and inspect parent elements for stacking contexts.</p>
                    
                    <h3 className="text-xl font-bold text-red-400 mt-8 mb-4">❌ Mistake 5: Forgetting padding-top with a fixed navbar</h3>
                    <p><strong>Problem:</strong> You add a fixed navbar, and the top content of the page is hidden underneath it.</p>
                    <p><strong>Fix:</strong> Add <code>padding-top</code> to the body equal to the navbar height.</p>
                </Section>

                <Section title="14. Quick Reference Cheat Sheet" icon={FileText}>
                    <div className="overflow-x-auto my-6 bg-[#161b22] rounded-xl border border-gray-800 shadow-2xl">
                        <table className="min-w-full border-collapse text-left text-sm">
                            <thead className="bg-[#1a1a1a]">
                                <tr>
                                    <th className="border border-gray-700 p-3 text-white">Value</th>
                                    <th className="border border-gray-700 p-3 text-white">In Flow?</th>
                                    <th className="border border-gray-700 p-3 text-white">Reference</th>
                                    <th className="border border-gray-700 p-3 text-white">Scrolls?</th>
                                    <th className="border border-gray-700 p-3 text-white">Main Use Case</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-gray-800">
                                    <td className="p-3 text-sky-300 font-mono border-r border-gray-800">static</td>
                                    <td className="p-3 border-r border-gray-800">Yes</td>
                                    <td className="p-3 border-r border-gray-800">N/A</td>
                                    <td className="p-3 border-r border-gray-800">Yes</td>
                                    <td className="p-3">Default; reset position</td>
                                </tr>
                                <tr className="border-t border-gray-800 bg-[#161616]">
                                    <td className="p-3 text-sky-300 font-mono border-r border-gray-800">relative</td>
                                    <td className="p-3 border-r border-gray-800">Yes (space preserved)</td>
                                    <td className="p-3 border-r border-gray-800">Self</td>
                                    <td className="p-3 border-r border-gray-800">Yes</td>
                                    <td className="p-3">Positioning context; subtle nudges</td>
                                </tr>
                                <tr className="border-t border-gray-800">
                                    <td className="p-3 text-sky-300 font-mono border-r border-gray-800">absolute</td>
                                    <td className="p-3 text-red-400 border-r border-gray-800">No (removed)</td>
                                    <td className="p-3 border-r border-gray-800">Nearest non-static ancestor</td>
                                    <td className="p-3 border-r border-gray-800">Yes</td>
                                    <td className="p-3">Badges, tooltips, dropdowns, overlays</td>
                                </tr>
                                <tr className="border-t border-gray-800 bg-[#161616]">
                                    <td className="p-3 text-sky-300 font-mono border-r border-gray-800">fixed</td>
                                    <td className="p-3 text-red-400 border-r border-gray-800">No (removed)</td>
                                    <td className="p-3 border-r border-gray-800">Viewport</td>
                                    <td className="p-3 text-red-400 border-r border-gray-800">No (stays)</td>
                                    <td className="p-3">Navbars, chat buttons</td>
                                </tr>
                                <tr className="border-t border-gray-800">
                                    <td className="p-3 text-sky-300 font-mono border-r border-gray-800">sticky</td>
                                    <td className="p-3 border-r border-gray-800">Yes</td>
                                    <td className="p-3 border-r border-gray-800">Scroll container</td>
                                    <td className="p-3 text-yellow-400 border-r border-gray-800">Until stuck</td>
                                    <td className="p-3">Section headers, table headers</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">Decision Guide</h3>
                    <div className="my-6 overflow-x-auto bg-[#111] p-4 sm:p-6 rounded-lg font-mono text-xs sm:text-sm border border-gray-800 text-sky-300">
<pre>{`Do you want the element to scroll with the page normally?
├── Yes → Do you also want it to "stick" at a scroll position?
│         ├── Yes → position: sticky + top/bottom value
│         └── No  → position: static (default) or position: relative (if adjusting)
└── No  → Do you want it pinned to the screen forever?
          ├── Yes → position: fixed
          └── No  → position: absolute (pinned to a container)`}</pre>
                    </div>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">The Positioning Context Rule — Memorize This</h3>
                    <div className="my-6 bg-sky-900/10 p-6 rounded-lg font-bold text-lg border border-sky-500/50 text-sky-200">
                        An absolutely positioned element is positioned relative to:<br/><br/>
                        <span className="text-white">→ its nearest ancestor with position ≠ static</span><br/>
                        <span className="text-white">→ OR the &lt;html&gt; element if none exists</span>
                    </div>

                </Section>

                <div className="flex items-center gap-3 p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20 mt-16">
                    <CheckCircle className="text-green-400 shrink-0" size={32} />
                    <div>
                        <h3 className="text-xl font-bold text-white">Module 9 Complete!</h3>
                        <p className="text-green-200/80 mt-1 text-sm">
                            You've mastered CSS Document Flow and Positioning.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/positioning/z-index-centering" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Previous: Z-Index & Centering
                </Link>
                <Link to="/webdevelopment/css/flexbox/intro" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: CSS Flexbox <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
}
