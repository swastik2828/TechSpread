import React from 'react';
import { HelpCircle, FileCode, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CssAnimationSimulator from "../../../../simulators/web/css/CssAnimationSimulator";

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

const CodeBlock = ({ title = "styles.css", language = "css", children }) => (
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

export default function IntroKeyframes() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="Introduction to CSS Animations & Keyframes"
                description="Learn CSS Animations from absolute zero. Understand the limitations of transitions, how to use @keyframes, and build independent motion loops."
                keywords="css animations, keyframes, css transitions vs animations, web animation tutorial"
                url="/webdevelopment/css/animations/intro"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    CSS <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">Animations</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    Bring interfaces to life with complex, multi-step motion that runs completely independently of user interactions.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <Section title="Let's start with a question" icon={HelpCircle}>
                    <p>
                        You already know how to make things transition smoothly — you covered that in the previous module. So why do you need something else?
                    </p>
                    <p>
                        Here's the limitation. A transition only knows about two points: where something started, and where it ends up. You hover over a button, it changes color. You click a menu, it slides open. One state, then another state, done.
                    </p>
                    <p>
                        But what if you want a loading spinner that just... spins. Forever. Nobody hovered over anything. Nobody clicked anything. It just starts spinning the moment the page loads and never stops until the data arrives.
                    </p>
                    <p>
                        A transition can't do that. It needs a trigger — a state change to react to. A spinner has no second state to transition into. It just goes round and round and round.
                    </p>
                    <p>
                        That's the gap CSS animations fill. They don't wait for permission. They don't need a hover or a click. You write the motion once, and the browser plays it on its own — looping, reversing, pausing, whatever you tell it to do. By the end of this module you'll be building spinners, pulsing dots, bouncing icons, and that nice staggered "cards fade in one after another" effect.
                    </p>
                </Section>

                <Section title="The core idea: keyframes are a script" icon={FileCode}>
                    <p>
                        Think about a flipbook — the kind where you draw a slightly different picture on each page, and flipping through fast makes it look like the picture is moving.
                    </p>
                    <p>
                        Each page is a <strong>keyframe</strong>. It's a snapshot of what things should look like at one specific moment. CSS does the same thing, except instead of "page 1, page 2, page 3," you describe moments as <strong>percentages of the animation's total length</strong>.
                    </p>
                    <ul className="space-y-2 mb-6">
                        <li><code className="text-sky-300">0%</code> is the very beginning.</li>
                        <li><code className="text-sky-300">100%</code> is the very end.</li>
                        <li>Anything in between is up to you — <code className="text-sky-300">25%</code>, <code className="text-sky-300">50%</code>, <code className="text-sky-300">73%</code>, whatever moments matter.</li>
                    </ul>
                    <p>
                        You write this list of moments inside a block called <code>@keyframes</code>, and you give that block a name so you can refer to it later.
                    </p>

                    <CodeBlock>
{`@keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
}`}
                    </CodeBlock>

                    <p>
                        Quick note on <code>from</code> and <code>to</code> — they're just friendlier nicknames for <code>0%</code> and <code>100%</code>. Both work exactly the same way. Most people use <code>from</code>/<code>to</code> for simple two-step animations and switch to percentages once there are three or more steps.
                    </p>

                    <CodeBlock>
{`@keyframes slideUp {
    0%   { opacity: 0; transform: translateY(30px); }
    100% { opacity: 1; transform: translateY(0); }
}`}
                    </CodeBlock>

                    <p>
                        Now here's where keyframes really start to shine — when you give them more than just a start and an end:
                    </p>

                    <CodeBlock>
{`@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    30%       { transform: translateY(-20px); }
    60%       { transform: translateY(-10px); }
    80%       { transform: translateY(-5px); }
}`}
                    </CodeBlock>

                    <p>
                        Read this like a little story. At the start (<code>0%</code>) the element is at rest. By <code>30%</code> of the way through the animation, it's jumped up 20 pixels. By <code>60%</code>, it's come back down partway, to 10 pixels up. And at <code>100%</code>, it's back to rest. That's a bounce! Notice that <code>0%, 100%</code> shares one rule. That's just a shortcut for writing the same styles twice.
                    </p>

                    <p className="mt-8">
                        <strong>One thing worth remembering:</strong> writing <code>@keyframes</code> doesn't animate anything by itself. It's just a named recipe sitting there, unused, until you tell an actual element to follow it.
                    </p>
                </Section>
            </div>

            <div className="flex justify-end mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/animations/properties" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Animation Properties <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
}