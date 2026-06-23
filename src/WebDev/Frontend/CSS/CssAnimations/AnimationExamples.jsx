import React from 'react';
import { Sparkles, Layers, Box, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";

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

export default function AnimationExamples() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="Real-World CSS Animation Examples"
                description="Learn how to build loading spinners, pulsing dots, staggering effects, and multiple animations simultaneously in CSS."
                keywords="css loading spinner, css pulse animation, multiple css animations, stagger animations"
                url="/webdevelopment/css/animations/examples"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    Real-World <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">Examples</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    Moving from theory to practice with UI patterns you've seen a thousand times.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <Section title="Running more than one animation at once" icon={Layers}>
                    <p>An element isn't limited to a single animation. You can stack several, separated by commas, and they'll all run at the same time, independently of each other:</p>
                    <CodeBlock>
{`.element {
    animation:
        fadeIn 0.5s ease forwards,
        slideUp 0.5s ease forwards,
        glow 2s ease-in-out infinite 0.5s;
}`}
                    </CodeBlock>
                    <p>Here, the element fades in and slides up together over the first half-second. Then, starting half a second after everything begins (notice the trailing <code>0.5s</code> delay), it starts glowing forever. This is a powerful pattern that keeps code modular.</p>
                </Section>

                <Section title="1. The loading spinner" icon={Sparkles}>
                    <p>You've seen this shape a thousand times: a circle, mostly gray, with one little colored arc, spinning steadily.</p>
                    <CodeBlock>
{`@keyframes spin {
    to { transform: rotate(360deg); }
}

.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #e0e0e0;
    border-top-color: #0066cc;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
}`}
                    </CodeBlock>
                    <p>The trick here: it's a circle with a border, but the top border is colored differently. Notice the timing function: <code>linear</code>. Easing speeds up and slows down at certain points, which would make the spin look like it's hiccuping. A constant rotation needs <code>linear</code>.</p>
                </Section>

                <Section title="2. The pulsing notification dot" icon={Box}>
                    <p>That small dot on an app icon that gently grows and shrinks to catch your eye.</p>
                    <CodeBlock>
{`@keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%      { opacity: 0.6; transform: scale(1.15); }
}

.notification-dot {
    animation: pulse 1.5s ease-in-out infinite;
}`}
                    </CodeBlock>
                    <p>Because the start and end keyframes are identical, looping it over and over creates a smooth grow-and-shrink rhythm, with no <code>alternate</code> direction needed.</p>
                </Section>

                <Section title="3. Cards that fade in, one after another" icon={Layers}>
                    <p>The effect where a row of cards pops in left to right in a quick sequence.</p>
                    <CodeBlock>
{`@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
}

.card:nth-child(1) { animation: fadeInUp 0.5s ease 0.1s forwards; }
.card:nth-child(2) { animation: fadeInUp 0.5s ease 0.2s forwards; }
.card:nth-child(3) { animation: fadeInUp 0.5s ease 0.3s forwards; }`}
                    </CodeBlock>
                    <p>Here's the secret: it's the exact same animation applied to every card. The <em>only</em> thing that changes is the delay (<code>0.1s</code>, <code>0.2s</code>, <code>0.3s</code>). This staggered timing creates the cascade feel.</p>
                </Section>
                
                <Section title="4. Pausing things on hover" icon={Box}>
                    <CodeBlock>
{`.carousel:hover .slide {
    animation-play-state: paused;
}`}
                    </CodeBlock>
                    <p>The clever part is combining <code>paused</code> with <code>:hover</code> on a <em>parent</em> element. The moment your cursor enters the carousel, every slide inside it freezes in place.</p>
                </Section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/animations/properties" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Animation Properties
                </Link>
                <Link to="/webdevelopment/css/animations/recap" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Best Practices <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
}