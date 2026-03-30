import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Ruler } from 'lucide-react';
import SEO from "../../../../components/SEO";

const WidthHeight = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Width, Height, and Overflow"
                description="Master CSS width, min-width, max-width, height, min-height, and overflow properties to build flexible, responsive layouts."
                keywords="css width, css max width, css min height, css overflow"
                url="/webdevelopment/css/box-model/width-height"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-lg border border-indigo-500/30 text-indigo-400">
                        <Ruler size={24} />
                    </div>
                    <span className="text-indigo-400 font-bold tracking-widest uppercase text-sm">CSS Box Model</span>
                </div>
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    Width, Height & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">Overflow</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    Controlling width and height dynamically gives you flexible layouts that work flawlessly across massive desktop monitors and tiny smartphone screens.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Width Constraints</h2>
                    <p>Setting a fixed <code>width</code> (like <code>800px</code>) is dangerous in modern web design, because users on screens smaller than 800px will get a scrollbar. Instead, we use percentages combined with <code>max-width</code>.</p>
                    
                    <div className="my-6 w-full rounded-xl overflow-hidden bg-[#0d1117] border border-gray-800 shadow-2xl">
                        <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-gray-800">
                            <div className="flex items-center gap-4">
                                <span className="text-xs font-bold text-gray-400 font-mono">width.css</span>
                            </div>
                            <span className="text-[10px] font-bold text-gray-500 uppercase bg-gray-800 px-2 py-0.5 rounded border border-gray-700">css</span>
                        </div>
                        <div className="p-5 overflow-x-auto font-mono text-sm leading-relaxed text-gray-300">
<pre><code><span className="text-purple-400">.container</span> {'{'}
    <span className="text-sky-300">width:</span> <span className="text-emerald-400">90%;</span>          <span className="text-gray-500 italic">/* Stay 90% of parent width (responsive) */</span>
    <span className="text-sky-300">max-width:</span> <span className="text-emerald-400">1200px;</span>   <span className="text-gray-500 italic">/* BUT never grow wider than 1200px */</span>
    <span className="text-sky-300">min-width:</span> <span className="text-emerald-400">320px;</span>    <span className="text-gray-500 italic">/* NEVER squish narrower than 320px */</span>
    <span className="text-orange-300">margin:</span> <span className="text-emerald-400">0 auto;</span>      <span className="text-gray-500 italic">/* Center it horizontally on large screens */</span>
{'}'}</code></pre>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Deep Dive: Intrinsic Sizing</h2>
                    <p>CSS Grid and modern layouts introduced powerful keyword values that allow elements to size themselves intelligently based on their internal contents, rather than parent constraints. These are called <strong>Intrinsic Sizes</strong>.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                        <div className="bg-[#0d1117] border border-gray-800 p-6 rounded-xl">
                            <h3 className="text-lg font-bold text-indigo-400 mb-3 font-mono text-sm">min-content</h3>
                            <p className="text-sm text-gray-300">Shrinks the box to be as small as possible without breaking the longest single unbroken word (which would cause text to spill out). Great for tightly wrapping titles.</p>
                        </div>
                        <div className="bg-[#161b22] border border-gray-800 p-6 rounded-xl">
                            <h3 className="text-lg font-bold text-blue-400 mb-3 font-mono text-sm">max-content</h3>
                            <p className="text-sm text-gray-300">Forces the box to expand indefinitely to fit the text on a single line. Text will never wrap. Will cause overflow if the text is longer than the screen.</p>
                        </div>
                        <div className="bg-[#0d1117] border border-gray-800 p-6 rounded-xl">
                            <h3 className="text-lg font-bold text-emerald-400 mb-3 font-mono text-sm">fit-content</h3>
                            <p className="text-sm text-gray-300">The best of both worlds. Acts like <code>max-content</code> until it hits the available screen space, then it naturally wraps the text like normal.</p>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Modern CSS Math Functions</h2>
                    <p>Instead of writing clunky media queries for every screen size, you can use CSS Math Functions to let the browser compute dynamic fluid dimensions.</p>

                    <div className="my-6 w-full rounded-xl overflow-hidden bg-[#0d1117] border border-gray-800 shadow-2xl">
                        <div className="p-5 overflow-x-auto font-mono text-sm leading-relaxed text-gray-300">
<pre><code><span className="text-gray-500 italic">/* The function clamp(MIN_SIZE, IDEAL_SIZE, MAX_SIZE) built into CSS! */</span>
<span className="text-purple-400">.fluid-container</span> {'{'}
    <span className="text-sky-300">width:</span> <span className="text-emerald-400">clamp(300px, 50vw, 800px);</span>
{'}'}
<span className="text-gray-500 italic">/* 
   Translation:
   1. The container ideally wants to be exactly 50% of the screen width (50vw).
   2. BUT, if 50% of the screen shrinks below 300px, stop shrinking and stay 300px.
   3. AND, if 50% of the screen grows beyond 800px, stop growing and stay 800px.
*/</span></code></pre>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Height Behavior</h2>
                    <p>Similarly, setting a rigid <code>height</code> is risky. By default, block elements expand vertically to fit their content perfectly. If you force a <code>height: 200px</code>, but there's 300px of text, the text will spill right out of the box ("overflow").</p>
                    
                    <div className="my-6 w-full rounded-xl overflow-hidden bg-[#0d1117] border border-gray-800 shadow-2xl">
                        <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-gray-800">
                            <div className="flex items-center gap-4">
                                <span className="text-xs font-bold text-gray-400 font-mono">height.css</span>
                            </div>
                            <span className="text-[10px] font-bold text-gray-500 uppercase bg-gray-800 px-2 py-0.5 rounded border border-gray-700">css</span>
                        </div>
                        <div className="p-5 overflow-x-auto font-mono text-sm leading-relaxed text-gray-300">
<pre><code><span className="text-purple-400">.card</span> {'{'}
    <span className="text-sky-300">min-height:</span> <span className="text-emerald-400">200px;</span>   <span className="text-gray-500 italic">/* Grows naturally with content, but guarantees a minimum 200px size */</span>
{'}'}
 
<span className="text-gray-500 italic">/* If you absolutely MUST use a fixed height, control the overflow */</span>
<span className="text-purple-400">.fixed-box</span> {'{'}
    <span className="text-sky-300">height:</span> <span className="text-emerald-400">200px;</span>
    <span className="text-sky-300">overflow:</span> <span className="text-emerald-400">auto;</span>      <span className="text-gray-500 italic">/* Provide a scrollbar if content is too tall */</span>
    
    <span className="text-gray-500 italic">/* Alternative: */</span>
    <span className="text-gray-500 italic">/* overflow: hidden; — clips the text permanently */</span>
    <span className="text-gray-500 italic">/* overflow: visible; — content spills out into other elements (default) */</span>
{'}'}</code></pre>
                        </div>
                    </div>
                    
                    <div className="border-l-4 p-6 rounded-r-xl my-6 border-indigo-500 bg-indigo-900/10 text-indigo-200">
                        <strong>Height 100% Pitfall:</strong> Setting <code>height: 100%</code> only works if the parent element <em>also</em> has an explicitly defined height. On most modern web pages, we use viewport units (like <code>min-height: 100vh</code>) instead to make elements stretch to the full height of the screen.
                    </div>
                </section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/box-model/box-sizing" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> box-sizing
                </Link>
                <Link to="/webdevelopment/css/box-model/mistakes-exercises" className="flex items-center gap-2 text-indigo-400 font-bold hover:text-indigo-300 transition-colors">
                    Next: Mistakes & Exercises <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};

export default WidthHeight;
