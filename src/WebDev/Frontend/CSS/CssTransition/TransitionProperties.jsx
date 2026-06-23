import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Layers, AlertTriangle } from 'lucide-react';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";

const TransitionProperties = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO title="What Can and Can't Transition in CSS" description="Learn which CSS properties are animatable, how to handle display none, and why transition: all is a bad idea." url="/webdevelopment/css/transitions/properties" />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-br from-sky-500/20 to-cyan-500/20 rounded-lg border border-sky-500/30 text-sky-400">
                        <Layers size={24} />
                    </div>
                    <span className="text-sky-400 font-bold tracking-widest uppercase text-sm">CSS Transitions / Part 4</span>
                </div>
                <h1 className="text-4xl font-extrabold text-white mb-6">What You Can (and Can't) Transition</h1>
                <p className="text-xl text-gray-400">
                    The rule is simple: if a property has a value the browser can smoothly step between, it can transition. Colors and numbers, yes. Keywords and enums, no.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-green-900/10 border border-green-500/30 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">✅ Works (Interpolable)</h3>
                        <ul className="space-y-2 text-sm font-mono text-gray-300">
                            <li>color, background-color</li>
                            <li>opacity</li>
                            <li>width, height, padding, margin</li>
                            <li>transform</li>
                            <li>box-shadow</li>
                            <li>font-size, letter-spacing</li>
                        </ul>
                    </div>
                    <div className="bg-red-900/10 border border-red-500/30 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">❌ Doesn't Work (Discrete)</h3>
                        <ul className="space-y-2 text-sm font-mono text-gray-300">
                            <li>display</li>
                            <li>font-family</li>
                            <li>background-image <span className="text-gray-500 text-xs font-sans">(but you can fade between two images using opacity layers)</span></li>
                        </ul>
                    </div>
                </div>

                <p>
                    The <code>display</code> one trips people up constantly — you can't transition something from <code>display: none</code> to <code>display: block</code>, because there's no "halfway" state for display. The standard workaround:
                </p>
                <CodeBlock language="css" code={`.overlay {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s;
}

.overlay.is-visible {
    opacity: 1;
    visibility: visible;
}`} />
                <p>
                    <code>visibility</code> technically isn't smoothly interpolated either, but pairing it with <code>opacity</code> like this gets you the best of both: the element fades out <em>and</em> stops being clickable/focusable once it's invisible.
                </p>

                <h3 className="text-2xl font-bold text-white mt-12 mb-4 flex items-center gap-2">
                    <AlertTriangle className="text-amber-500" /> Why <code>transition: all</code> is a trap
                </h3>
                <p>
                    <code>transition: all 0.3s ease;</code> looks like a harmless shortcut, but it tells the browser to watch <em>every single animatable property</em> for changes — including ones you never meant to animate. The classic bug: someone adds <code>transition: all</code> to a button, then later a teammate changes its <code>width</code> in JS for an unrelated reason, and suddenly that change animates too, for no reason anyone intended.
                </p>
                <p>Naming exactly what you're transitioning costs a few extra characters and saves you a confusing bug later:</p>
                <CodeBlock language="css" code={`/* avoid */
.button { transition: all 0.3s ease; }

/* prefer */
.button { transition: background-color 0.3s ease, transform 0.3s ease; }`} />

                <h3 className="text-2xl font-bold text-white mt-12 mb-4">The <code>auto</code> problem (and why max-height is a workaround, not a fix)</h3>
                <p>
                    CSS transitions only work between two known values — and <code>height: auto</code> isn't a value the browser can interpolate <em>to</em>, because it doesn't know what "auto" will resolve to until the content is actually laid out. 
                </p>
                <p>
                    The standard workaround reaches for <code>max-height</code> instead of <code>height</code>, but it has a quirk: you have to pick a value big enough to fit the content, and if the content is dynamic, a fixed <code>max-height</code> can either clip it or leave a slow-feeling tail end of empty transition time if you guess too high.
                </p>
                <CodeBlock language="css" code={`.accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease;
}

.accordion-content.is-open {
    max-height: 500px; /* must safely exceed the tallest expected content */
}`} />
                <p>If your content height is genuinely unpredictable, the more robust fix is to measure the real height in JavaScript and transition to that exact pixel value:</p>
                <CodeBlock language="javascript" code={`const content = accordion.querySelector('.accordion-content');

function openAccordion() {
    content.style.maxHeight = content.scrollHeight + 'px';
}`} />
                <div className="border-l-4 p-6 rounded-r-xl my-6 border-sky-500 bg-sky-900/10 text-sky-200">
                    <strong>Modern Update:</strong> There's a newer, CSS-only option: <code>interpolate-size: allow-keywords;</code> (paired with <code>height: auto</code> directly) is landing in modern browsers and removes the need for this workaround entirely — worth checking current browser support before relying on it in production!
                </div>

                <h3 className="text-2xl font-bold text-white mt-12 mb-4">Hooking into JS with <code>transitionend</code></h3>
                <p>Sometimes you need to <em>know</em> when a transition has finished — to remove an element from the DOM after it fades out, for example, rather than just hiding it visually.</p>
                <CodeBlock language="javascript" code={`const card = document.querySelector('.card');

card.classList.add('is-leaving'); // triggers opacity: 0 via CSS

card.addEventListener('transitionend', () => {
    card.remove();
}, { once: true });`} />
                <p>The <code>{`{ once: true }`}</code> matters if you're transitioning multiple properties — without it, your callback fires once per property that finishes, not once total.</p>

                <h3 className="text-2xl font-bold text-white mt-12 mb-4">transition vs. animation — when to reach for which</h3>
                <p>It's worth knowing these aren't the same tool. A <code>transition</code> needs a trigger (hover, a class toggle, a JS-driven style change) and only ever moves between two states — start and end. <code>@keyframes</code> + <code>animation</code> can run automatically on page load, loop forever, and define multiple waypoints in between:</p>
                <CodeBlock language="css" code={`/* a transition needs something to change it — it won't move on its own */
.badge {
    transform: scale(1);
    transition: transform 0.2s ease-out;
}
.badge:hover { transform: scale(1.1); }

/* an animation can run by itself, looping, with multiple stops */
@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}
.notification-dot {
    animation: pulse 2s ease-in-out infinite;
}`} />
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/transitions/transform" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Previous
                </Link>
                <Link to="/webdevelopment/css/transitions/accessibility" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Accessibility & Bugs <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};
export default TransitionProperties;