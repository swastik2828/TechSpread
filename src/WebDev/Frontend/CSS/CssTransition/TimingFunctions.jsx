import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";
import { TimingSimulator } from "../../../../simulators/web/css/TransitionSimulators";

const TimingFunctions = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO title="Timing Functions in CSS Transitions" description="Understand ease, linear, cubic-bezier, and steps for perfect animation timing." url="/webdevelopment/css/transitions/timing" />

            <header className="py-12 border-b border-gray-800 mb-12">
                <span className="text-sky-400 font-bold tracking-widest uppercase text-sm">CSS Transitions / Part 2</span>
                <h1 className="text-4xl font-extrabold text-white mt-2 mb-6">Timing Functions, the Short Version</h1>
                <p className="text-xl text-gray-400">
                    You don't need all six curves memorized. In practice, two cover 90% of real interfaces.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <CodeBlock language="css" code={`transition-timing-function: ease-out;     /* fast start, gentle stop — feels responsive */
transition-timing-function: ease-in-out;  /* smooth both ends — feels calm */`} />
                
                <p>
                    <code>ease-out</code> is the one to reach for by default. Things that move <em>toward</em> the user (menus opening, tooltips appearing) should slow down as they arrive — it mimics how physical objects settle, and it's why most UI libraries default to it.
                </p>
                <p>
                    <code>linear</code> exists for one good reason: spinners and progress bars, where constant speed actually looks more "correct" than easing.
                </p>

                <TimingSimulator />

                <h3 className="text-2xl font-bold text-white mt-10 mb-4">Reading a cubic-bezier curve</h3>
                <p>
                    If you do end up needing a custom curve, it helps to know what the four numbers actually mean instead of copy-pasting them blindly:
                </p>
                <CodeBlock language="css" code={`transition-timing-function: cubic-bezier(x1, y1, x2, y2);`} />
                <p>
                    Think of it as two control points that bend a straight line into a curve. <code>x</code> values are time (0 to 1, start to end), <code>y</code> values are how far along the animation <em>appears</em> to be — and <code>y</code> is allowed to go above 1 or below 0, which is exactly how you get a little overshoot or bounce:
                </p>
                <CodeBlock language="css" code={`/* a playful little overshoot — useful for buttons, badges, success states */
transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);`} />
                <p>
                    You rarely need to write these by hand. <a href="https://cubic-bezier.com" target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">cubic-bezier.com</a> gives you a visual drag-and-drop editor, and most design systems (Material, iOS) publish their standard curves as ready-made values you can just paste in.
                </p>

                <h3 className="text-2xl font-bold text-white mt-10 mb-4">steps() — the one for deliberately <em>not</em> smooth</h3>
                <p>
                    <code>steps(n)</code> is the odd one out: instead of smoothing a change, it jumps through it in fixed increments. It's not for typical UI polish — it's for sprite-sheet animations, typewriter-text effects, or anything that should look mechanical/digital on purpose:
                </p>
                <CodeBlock language="css" code={`/* a loading dial that ticks through 8 positions instead of spinning smoothly */
transition-timing-function: steps(8, end);`} />
                <p>
                    The second argument (<code>start</code> or <code>end</code>) controls whether the jump happens at the beginning or end of each step interval — <code>end</code> is the default and the one you want almost always.
                </p>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/transitions/intro" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Previous
                </Link>
                <Link to="/webdevelopment/css/transitions/transform" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: The Transform Property <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};
export default TimingFunctions;