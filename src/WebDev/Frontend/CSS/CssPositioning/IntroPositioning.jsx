import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Move, Code2, BookOpen, Anchor } from 'lucide-react';
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

const InfoBox = ({ type = 'note', children }) => {
    const styles = {
        note: 'border-sky-500 bg-sky-900/10 text-sky-200',
        tip: 'border-green-500 bg-green-900/10 text-green-200',
        warning: 'border-yellow-500 bg-yellow-900/10 text-yellow-200',
    };
    return (
        <div className={`border-l-4 p-6 rounded-r-xl my-6 ${styles[type]}`}>
            {children}
        </div>
    );
};

export default function IntroPositioning() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Positioning — The Complete Guide"
                description="Master CSS Positioning from scratch. Understand normal flow, offsets, static positioning, and how to break free from the document flow."
                keywords="css positioning, css position static, css offset properties, normal document flow"
                url="/webdevelopment/css/positioning/intro"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-bold text-sky-400 uppercase tracking-widest">Module 9</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                    CSS Positioning —{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">
                        The Complete Guide
                    </span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl">
                    By the end of this module, you'll understand not just what each value does, but why it works the way it does — and you'll be able to build navbars, badges, modals, tooltips, and sticky headers from scratch.
                </p>
                <InfoBox type="note">
                    <strong>Who is this for?</strong> Complete beginners are welcome. If you've never heard of <code>position: absolute</code> before, you're in the right place.
                </InfoBox>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <Section title="1. Before We Begin: The Normal Document Flow" icon={BookOpen}>
                    <p>
                        Before we talk about positioning, we need to understand what we're <em>breaking out of</em>.
                    </p>
                    <p>
                        By default, every HTML element sits in what's called the <strong>normal document flow</strong> (also called <em>normal flow</em> or <em>static flow</em>). Think of it like this: every element is like a word in a sentence — it naturally sits next to or below the previous one, going left-to-right and top-to-bottom.
                    </p>

                    <CodeBlock title="index.html" language="html">{`<!-- HTML -->
<div class="box">Box 1</div>
<div class="box">Box 2</div>
<div class="box">Box 3</div>`}</CodeBlock>

                    <CodeBlock title="styles.css" language="css">{`.box {
  width: 100px;
  height: 100px;
  background: steelblue;
  margin: 10px;
}`}</CodeBlock>
                    
                    <p>
                        <strong>Result:</strong> Box 1 sits on top, Box 2 below it, Box 3 below that. Simple, linear, predictable.
                    </p>

                    <div className="my-6 overflow-x-auto bg-[#111] p-4 sm:p-6 rounded-lg font-mono text-xs sm:text-sm border border-gray-800 text-sky-300">
<pre>{`┌─────────┐
│  Box 1  │
└─────────┘
┌─────────┐
│  Box 2  │
└─────────┘
┌─────────┐
│  Box 3  │
└─────────┘`}</pre>
                    </div>

                    <p>
                        That's normal flow. CSS positioning gives us tools to:
                    </p>
                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>Nudge</strong> elements away from their natural position</li>
                        <li><strong>Lift</strong> elements completely out of the flow</li>
                        <li><strong>Pin</strong> elements to the screen or a container</li>
                        <li><strong>Layer</strong> elements on top of each other</li>
                    </ul>
                </Section>

                <Section title="2. What Is CSS Positioning?" icon={Anchor}>
                    <p>
                        CSS positioning is controlled by one property: <code>position</code>. It accepts five values:
                    </p>

                    <div className="overflow-x-auto my-6 bg-[#161b22] rounded-xl border border-gray-800 shadow-2xl">
                        <table className="min-w-full border-collapse text-left">
                            <thead className="bg-[#1a1a1a]">
                                <tr>
                                    <th className="border border-gray-700 p-4 text-white font-bold">Value</th>
                                    <th className="border border-gray-700 p-4 text-white font-bold">Behavior Summary</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-gray-800">
                                    <td className="p-4 font-mono text-sky-300 border-r border-gray-800">static</td>
                                    <td className="p-4 text-gray-300">Default. Part of normal flow. Cannot be moved with offsets.</td>
                                </tr>
                                <tr className="border-t border-gray-800 bg-[#161616]">
                                    <td className="p-4 font-mono text-sky-300 border-r border-gray-800">relative</td>
                                    <td className="p-4 text-gray-300">Stays in normal flow, but can be nudged. Creates a positioning context for children.</td>
                                </tr>
                                <tr className="border-t border-gray-800">
                                    <td className="p-4 font-mono text-sky-300 border-r border-gray-800">absolute</td>
                                    <td className="p-4 text-gray-300">Removed from normal flow. Positioned relative to nearest non-static ancestor.</td>
                                </tr>
                                <tr className="border-t border-gray-800 bg-[#161616]">
                                    <td className="p-4 font-mono text-sky-300 border-r border-gray-800">fixed</td>
                                    <td className="p-4 text-gray-300">Removed from normal flow. Positioned relative to the browser viewport. Stays on scroll.</td>
                                </tr>
                                <tr className="border-t border-gray-800">
                                    <td className="p-4 font-mono text-sky-300 border-r border-gray-800">sticky</td>
                                    <td className="p-4 text-gray-300">Hybrid: scrolls normally until it hits a threshold, then "sticks".</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p>You use it like this:</p>
                    <CodeBlock title="styles.css" language="css">{`.element {
  position: relative; /* or static, absolute, fixed, sticky */
}`}</CodeBlock>

                    <p>
                        Once an element is positioned (anything <em>except</em> <code>static</code>), you can also use four <strong>offset properties</strong> to move it.
                    </p>
                </Section>

                <Section title="3. The Offset Properties: top, right, bottom, left" border icon={Move}>
                    <p>
                        The properties <code>top</code>, <code>right</code>, <code>bottom</code>, and <code>left</code> only do something when <code>position</code> is <em>not</em> <code>static</code>. They describe where the element should be <em>relative to its reference point</em> (which depends on which <code>position</code> value you're using).
                    </p>
                    
                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">Intuition: Think of them as "push from this side"</h3>
                    <ul className="list-disc pl-6 mb-6">
                        <li><code>top: 20px</code> → push the element <strong>20px down</strong> from the top of its reference point</li>
                        <li><code>left: 30px</code> → push the element <strong>30px to the right</strong> from the left edge</li>
                        <li><code>bottom: 0</code> → pin the bottom edge to the bottom of its reference point</li>
                        <li><code>right: 0</code> → pin the right edge to the right edge of its reference point</li>
                    </ul>

                    <InfoBox type="warning">
                        <strong>⚠️ Common beginner confusion:</strong> <code>top: 20px</code> doesn't mean "20px from the top of the page" — it means "20px from the top of whatever this element is positioned <em>relative to</em>." That reference point changes depending on which <code>position</code> value you use.
                    </InfoBox>
                </Section>

                <Section title="4. position: static — The Default" icon={Code2}>
                    <p>
                        Every single HTML element starts as <code>static</code>. You almost never need to write this yourself, but you'll see it used to <em>undo</em> a positioning that was inherited or applied.
                    </p>

                    <CodeBlock title="styles.css" language="css">{`.element {
  position: static; /* This is what every element is by default */
}`}</CodeBlock>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">Key facts about static:</h3>
                    <ul className="list-disc pl-6 mb-6">
                        <li>It is part of normal document flow</li>
                        <li><code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code> have <strong>zero effect</strong> on static elements</li>
                        <li><code>z-index</code> has <strong>zero effect</strong> on static elements</li>
                        <li>It does <strong>not</strong> create a positioning context for children</li>
                    </ul>

                    <CodeBlock title="styles.css" language="css">{`/* ❌ This does NOTHING — the element is static */
.box {
  position: static;
  top: 50px;    /* Ignored */
  left: 20px;   /* Ignored */
  z-index: 100; /* Ignored */
}`}</CodeBlock>

                    <p>
                        <strong>When would you use it?</strong> When you need to reset an element that was set to <code>relative</code>, <code>absolute</code>, etc. — for example, in responsive design where you want positioning on desktop but not on mobile.
                    </p>

                    <CodeBlock title="responsive.css" language="css">{`/* Desktop: positioned */
.sidebar {
  position: sticky;
  top: 0;
}

/* Mobile: back to normal */
@media (max-width: 600px) {
  .sidebar {
    position: static; /* Undo the sticky positioning */
  }
}`}</CodeBlock>
                </Section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/display-visibility/exercises" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Previous: Display Exercises
                </Link>
                <Link to="/webdevelopment/css/positioning/relative-absolute" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Relative & Absolute <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
}
