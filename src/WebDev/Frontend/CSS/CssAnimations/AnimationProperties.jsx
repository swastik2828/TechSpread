import React from 'react';
import { Settings, FastForward, Repeat, Layers, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CssAnimationSimulator from "../../../../simulators/web/css/CssAnimationSimulator";

// Re-use Section and CodeBlock components defined as above (omitted for brevity, please include identical implementations)
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

export default function AnimationProperties() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Animation Properties"
                description="Understand CSS animation properties including animation-duration, iteration-count, direction, and fill-mode."
                keywords="css animation properties, animation-fill-mode, animation-direction, animation shorthand"
                url="/webdevelopment/css/animations/properties"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    Animation <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">Properties</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    Attaching the keyframe recipe to an element and controlling exactly how it plays.
                </p>
            </header>

            <CssAnimationSimulator />

            <div className="prose prose-invert prose-lg max-w-none mt-16">
                <Section title="Actually running the animation" icon={Settings}>
                    <p>You hand a keyframe recipe to an element using the <code>animation</code> property:</p>
                    <CodeBlock>
{`.element {
    animation: fadeIn 0.6s ease forwards;
}`}
                    </CodeBlock>
                    <p>Three pieces of information here, in plain English:</p>
                    <ul className="space-y-2 mb-6">
                        <li><strong><code>fadeIn</code></strong> — which recipe to follow (matches the name in <code>@keyframes</code>)</li>
                        <li><strong><code>0.6s</code></strong> — how long one full play-through takes</li>
                        <li><strong><code>ease</code></strong> — the pacing, same easing curves you already know from transitions</li>
                        <li><strong><code>forwards</code></strong> — what to do once it's finished</li>
                    </ul>
                    <p>That's the shorthand. But it's worth seeing the individual properties spelled out too, since that's how you'll understand what each piece actually controls:</p>
                    <CodeBlock>
{`.loader {
    animation-name:            spin;
    animation-duration:        1s;
    animation-timing-function: linear;
    animation-delay:           0s;
    animation-iteration-count: infinite;
    animation-direction:       normal;
    animation-fill-mode:       none;
    animation-play-state:      running;
}`}
                    </CodeBlock>
                </Section>

                <Section title="How many times should it play?" icon={Repeat}>
                    <p>This is <code>animation-iteration-count</code>, and it's refreshingly simple:</p>
                    <CodeBlock>
{`animation-iteration-count: 1;        /* plays once, then stops (default) */
animation-iteration-count: 3;        /* plays three full times */
animation-iteration-count: infinite; /* never stops */
animation-iteration-count: 1.5;      /* one full play, then half of another */`}
                    </CodeBlock>
                    <p><code>infinite</code> is the one you'll reach for constantly — spinners, pulsing dots, breathing glows. That <code>1.5</code> value looks odd at first, but it lets an animation finish off-center instead of returning strictly to the start.</p>
                </Section>

                <Section title="Which way should it play?" icon={FastForward}>
                    <p>This is <code>animation-direction</code>. Imagine someone playing your flipbook forward, backward, or back-and-forth.</p>
                    <CodeBlock>
{`animation-direction: normal;            /* plays 0% to 100%, every single time */
animation-direction: reverse;           /* plays 100% to 0%, every single time */
animation-direction: alternate;         /* forward, then backward, then forward... */
animation-direction: alternate-reverse; /* backward, then forward, then backward... */`}
                    </CodeBlock>
                    <p>The one that actually matters is <code>alternate</code>. Pair it with <code>infinite</code> and you get a smooth back-and-forth motion, like a pendulum.</p>
                </Section>

                <Section title="What happens before it starts and after it ends?" icon={Layers}>
                    <p>This is <code>animation-fill-mode</code>, and it solves an annoying little problem.</p>
                    <p>Picture this: you write a fade-in animation. You apply it. You load the page... and the element flashes into view for a split second, then <em>snaps back to invisible</em> once the animation finishes. Why? Because the browser throws away the animation styles once it completes.</p>
                    <CodeBlock>
{`animation-fill-mode: none;       /* default — styles snap back once it ends */
animation-fill-mode: forwards;   /* keeps whatever the LAST keyframe set */
animation-fill-mode: backwards;  /* applies the FIRST keyframe even during the delay */
animation-fill-mode: both;       /* combines forwards and backwards */`}
                    </CodeBlock>
                    <p>In practice, <strong><code>forwards</code> is what you want almost every time you're animating something into view.</strong> It tells the browser "once you reach the final keyframe, stay there."</p>
                </Section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/animations/intro" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Intro & Keyframes
                </Link>
                <Link to="/webdevelopment/css/animations/examples" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Real Examples <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
}