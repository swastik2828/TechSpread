import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";
import { OriginSimulator } from "../../../../simulators/web/css/TransitionSimulators";

const TransformProperty = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO title="CSS Transforms & Performance" description="Why you should only animate transform and opacity, and how to use transform-origin." url="/webdevelopment/css/transitions/transform" />

            <header className="py-12 border-b border-gray-800 mb-12">
                <span className="text-sky-400 font-bold tracking-widest uppercase text-sm">CSS Transitions / Part 3</span>
                <h1 className="text-4xl font-extrabold text-white mt-2 mb-6">transform: The Property That Actually Matters</h1>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <div className="border-l-4 p-6 rounded-r-xl my-6 border-red-500 bg-red-900/10 text-white font-bold text-xl">
                    Animate <code>transform</code> and <code>opacity</code>. Avoid animating <code>width</code>, <code>height</code>, <code>top</code>, <code>left</code>, or <code>margin</code>.
                </div>
                <p>
                    The reason is performance, not style. <code>transform</code> and <code>opacity</code> can be handled directly by the GPU. Everything else forces the browser to recalculate layout on every single frame — which is why a "simple" width animation can look janky on a low-end phone while a <code>transform: scale()</code> animation stays buttery smooth.
                </p>
                <CodeBlock language="css" code={`transform: translateX(20px);        /* move sideways */
transform: translateY(-10px);       /* move up */
transform: scale(1.05);             /* grow 5% */
transform: rotate(45deg);           /* spin */

/* combine freely */
transform: translateY(-4px) scale(1.02);`} />

                <h3 className="text-2xl font-bold text-white mt-10 mb-4">The hover-lift, in full</h3>
                <p>This is probably the single most copy-pasted pattern in modern web design — cards, buttons, list items, all use some version of it:</p>
                <CodeBlock language="css" code={`.card {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
}

.card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
}`} />
                <p>Notice both properties get their own transition, comma-separated. You can give each property a different duration or curve this way if you want — handy when, say, the shadow should linger slightly longer than the lift.</p>

                <h3 className="text-2xl font-bold text-white mt-10 mb-4">will-change: the easy-to-misuse optimization</h3>
                <p>
                    The performance tips floating around the web often mention <code>will-change: transform</code> as a free speed boost. It can help, but it's not free — it tells the browser to set aside a separate compositing layer for that element <em>ahead of time</em>, which costs memory. Set it on too many elements and you can actually make things slower, not faster.
                </p>
                <p>The practical rule: only apply it right before an animation starts, and remove it once the animation ends — rather than leaving it sitting on every <code>.card</code> in your CSS permanently.</p>
                <CodeBlock language="css" code={`.card {
    transition: transform 0.3s ease-out;
}

.card:hover {
    will-change: transform;
    transform: translateY(-6px);
}`} />
                <p>For most everyday hover effects, you genuinely don't need <code>will-change</code> at all.</p>

                <h3 className="text-2xl font-bold text-white mt-10 mb-4">transform-origin: why your rotation looks wrong</h3>
                <p>If a <code>rotate()</code> or <code>scale()</code> transform ever pivots from a point that feels off, the culprit is almost always <code>transform-origin</code>. By default, transforms pivot from the center of the element (<code>50% 50%</code>) — but you can move that pivot point:</p>
                
                <OriginSimulator />

                <CodeBlock language="css" code={`.menu-icon {
    transition: transform 0.2s ease-out;
}
.menu-icon.is-open {
    transform: rotate(90deg);
}

/* a dropdown that should grow from its trigger button, not its own center */
.dropdown {
    transform-origin: top right;
    transform: scale(0);
    transition: transform 0.2s ease-out;
}
.dropdown.is-open {
    transform: scale(1);
}`} />
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/transitions/timing" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Previous
                </Link>
                <Link to="/webdevelopment/css/transitions/properties" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: What Can Transition <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};
export default TransformProperty;