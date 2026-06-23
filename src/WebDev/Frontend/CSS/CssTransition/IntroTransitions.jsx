import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";
import { BasicsSimulator } from "../../../../simulators/web/css/TransitionSimulators";

const IntroTransitions = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO title="CSS Transitions: The Practical Guide" description="Master CSS transitions to make your interface feel snappy and polished." url="/webdevelopment/css/transitions/intro" />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-br from-sky-500/20 to-cyan-500/20 rounded-lg border border-sky-500/30 text-sky-400">
                        <Sparkles size={24} />
                    </div>
                    <span className="text-sky-400 font-bold tracking-widest uppercase text-sm">CSS Course / Module 13</span>
                </div>
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    CSS Transitions: <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">The Practical Guide</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    If your interface feels "snappy" or "polished," there's a good chance transitions are doing the quiet work behind it. They take a sudden, jarring change — a button going from blue to dark blue, a menu popping open — and stretch it across a fraction of a second so your eye can follow it.
                </p>
                <p className="mt-4 text-gray-500">This guide covers exactly what you'll actually use, day to day, and skips the trivia.</p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-white mb-6">The One Line You'll Write Constantly</h2>
                <CodeBlock language="css" title="styles.css" code={`.button {
    background: #0066cc;
    transition: background 0.3s ease;
}

.button:hover {
    background: #0044aa;
}`} />
                <p>
                    That's the whole pattern: set a starting style, define a <code>transition</code>, then change the property somewhere else (<code>:hover</code>, <code>:focus</code>, a toggled class, whatever). The browser handles the in-between frames for you.
                </p>
                <p>The shorthand reads as:</p>
                <CodeBlock language="css" code={`transition: <property> <duration> <timing-function> <delay>;`} />
                <p>
                    Only <code>property</code> and <code>duration</code> matter most of the time. The other two have sane defaults (<code>ease</code>, <code>0s</code>).
                </p>

                <h3 className="text-2xl font-bold text-white mt-10 mb-4">When delay actually earns its keep</h3>
                <p>
                    Most tutorials mention <code>transition-delay</code> and move on, but it has one genuinely common use: staggering. If you're animating a list of items in one after another, a small delay per item is what creates that "cascade" feel instead of everything popping at once.
                </p>
                <CodeBlock language="css" code={`.list-item {
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.4s ease-out, transform 0.4s ease-out;
}

.list-item:nth-child(1) { transition-delay: 0s; }
.list-item:nth-child(2) { transition-delay: 0.05s; }
.list-item:nth-child(3) { transition-delay: 0.1s; }
.list-item:nth-child(4) { transition-delay: 0.15s; }`} />
                <p>
                    In real projects you'd generate this with a CSS preprocessor loop or a few lines of JS (<code>{"element.style.transitionDelay = `${i * 50}ms`"}</code>) rather than hand-writing every nth-child, but the principle is the same: a fixed small offset per item, applied in sequence.
                </p>
                <div className="border-l-4 p-6 rounded-r-xl my-6 border-sky-500 bg-sky-900/10 text-sky-200">
                    The other place delay matters: hover effects where you don't want the transition to fire on a quick mouse pass-through. A <code>transition-delay: 0.1s</code> on the <em>entrance</em> of a tooltip means brief, accidental hovers don't trigger it — only hovers that last a beat.
                </div>

                <BasicsSimulator />

            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <div></div>
                <Link to="/webdevelopment/css/transitions/timing" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Timing Functions <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};
export default IntroTransitions;