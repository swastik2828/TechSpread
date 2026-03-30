import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Maximize } from 'lucide-react';
import SEO from "../../../../components/SEO";

const MarginPaddingShorthand = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Padding and Margin Shorthand"
                description="Learn the concise shorthand CSS rules for padding and margin. Save time and write cleaner, smaller CSS."
                keywords="css shorthand, css padding shorthand, css margin shorthand, css auto"
                url="/webdevelopment/css/box-model/shorthand"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg border border-emerald-500/30 text-emerald-400">
                        <Maximize size={24} />
                    </div>
                    <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm">CSS Box Model</span>
                </div>
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    Padding & Margin <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Shorthand</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    Instead of writing separate rules for top, right, bottom, and left, CSS provides elegant shorthand properties that save keystrokes and keep code clean.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Padding Shorthand</h2>
                    <p>The <code>padding</code> property can take 1, 2, 3, or 4 values. The order always follows a clockwise direction starting from the top: <strong>Top → Right → Bottom → Left</strong>.</p>
                    
                    <div className="my-6 w-full rounded-xl overflow-hidden bg-[#0d1117] border border-gray-800 shadow-2xl">
                        <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-gray-800">
                            <div className="flex items-center gap-4">
                                <span className="text-xs font-bold text-gray-400 font-mono">padding-shorthand.css</span>
                            </div>
                            <span className="text-[10px] font-bold text-gray-500 uppercase bg-gray-800 px-2 py-0.5 rounded border border-gray-700">css</span>
                        </div>
                        <div className="p-5 overflow-x-auto font-mono text-sm leading-relaxed text-gray-300">
<pre><code><span className="text-sky-300">padding:</span> <span className="text-emerald-400">20px;</span>               <span className="text-gray-500 italic">/* 1 value:  All four sides = 20px */</span>
<span className="text-sky-300">padding:</span> <span className="text-emerald-400">10px 20px;</span>          <span className="text-gray-500 italic">/* 2 values: Top/Bottom=10px, Left/Right=20px */</span>
<span className="text-sky-300">padding:</span> <span className="text-emerald-400">10px 20px 15px;</span>     <span className="text-gray-500 italic">/* 3 values: Top=10, LR=20, Bottom=15 */</span>
<span className="text-sky-300">padding:</span> <span className="text-emerald-400">5px 10px 15px 20px;</span> <span className="text-gray-500 italic">/* 4 values: Top Right Bottom Left (clockwise) */</span></code></pre>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Margin Shorthand & Centering</h2>
                    <p>Margin follows the exact same shorthand rules as padding. However, margin has a special value: <code>auto</code>.</p>
                    <p>Using <code>margin: auto</code> is the classic way to center a block-level element horizontally inside its container.</p>

                    <div className="my-6 w-full rounded-xl overflow-hidden bg-[#0d1117] border border-gray-800 shadow-2xl">
                        <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-gray-800">
                            <div className="flex items-center gap-4">
                                <span className="text-xs font-bold text-gray-400 font-mono">margin-shorthand.css</span>
                            </div>
                            <span className="text-[10px] font-bold text-gray-500 uppercase bg-gray-800 px-2 py-0.5 rounded border border-gray-700">css</span>
                        </div>
                        <div className="p-5 overflow-x-auto font-mono text-sm leading-relaxed text-gray-300">
<pre><code><span className="text-orange-300">margin:</span> <span className="text-emerald-400">16px;</span>            <span className="text-gray-500 italic">/* All sides equal */</span>
<span className="text-orange-300">margin:</span> <span className="text-emerald-400">20px 0;</span>          <span className="text-gray-500 italic">/* Top/Bottom=20px, Left/Right=0 */</span>
<span className="text-orange-300">margin:</span> <span className="text-emerald-400">0 auto;</span>          <span className="text-gray-500 italic">/* 0 vertical, auto horizontal = centered */</span></code></pre>
                        </div>
                    </div>

                    <div className="border-l-4 p-6 rounded-r-xl my-6 border-emerald-500 bg-emerald-900/10 text-emerald-200">
                        <strong>Rule of Thumb:</strong> <code>margin: 0 auto;</code> only centers block elements (like <code>&lt;div&gt;</code>) that have a set <code>width</code> or <code>max-width</code>. It does not work on inline elements or elements with 100% width.
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Deep Dive: CSS Logical Properties</h2>
                    <p>Historically, CSS spacing used <strong>physical directions</strong>: <code>top</code>, <code>right</code>, <code>bottom</code>, and <code>left</code>. However, the internet is global. Languages like Arabic and Hebrew read Right-to-Left (RTL), and some Asian languages read Top-to-Bottom vertically.</p>
                    <p className="mt-4">Modern CSS introduced <strong>Logical Properties</strong>. Instead of hardcoding physical directions, you use relative directions based on the <em>writing mode</em> (the flow of text):</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-[#0d1117] border border-gray-800 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-sky-400 mb-3">Block Axis (Vertical in English)</h3>
                            <ul className="list-disc pl-5 text-gray-400 space-y-2 text-sm font-mono">
                                <li>padding-block-start <span className="text-gray-500 font-sans text-xs">(top)</span></li>
                                <li>padding-block-end <span className="text-gray-500 font-sans text-xs">(bottom)</span></li>
                                <li>padding-block <span className="text-gray-500 font-sans text-xs">(top & bottom shorthand)</span></li>
                            </ul>
                        </div>
                        <div className="bg-[#161b22] border border-gray-800 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-amber-400 mb-3">Inline Axis (Horizontal in English)</h3>
                            <ul className="list-disc pl-5 text-gray-400 space-y-2 text-sm font-mono">
                                <li>margin-inline-start <span className="text-gray-500 font-sans text-xs">(left in LTR, right in RTL)</span></li>
                                <li>margin-inline-end <span className="text-gray-500 font-sans text-xs">(right in LTR, left in RTL)</span></li>
                                <li>margin-inline <span className="text-gray-500 font-sans text-xs">(left & right shorthand)</span></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="border-l-4 p-5 rounded-r-xl my-6 border-emerald-500 bg-emerald-900/10 text-emerald-200">
                        <strong className="block mb-2">Modern Best Practice:</strong>
                        Instead of writing <code>margin: 0 auto;</code> to center a div horizontally, use <code>margin-inline: auto;</code>.
                        Instead of writing <code>padding-left: 10px; padding-right: 10px;</code>, use <code>padding-inline: 10px;</code>. Your layout will automatically flip perfectly if someone translates your site into Arabic!
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Deep Dive: Sub-Pixel Rendering</h2>
                    <p>What happens if you type <code>padding: 10.5px;</code>? Monitors can't physically light up half of a pixel. Decades ago, browsers would round this up or down. Today, modern graphics engines use <strong>Anti-aliasing</strong> and <strong>Sub-pixel rendering</strong>.</p>
                    <p className="mt-4 text-gray-300">The browser computes the layout mathematics using float (decimal) precision. When it paints to the screen, it adjusts the color intensity and opacity of the nearest pixels to create the optical illusion of a half-pixel boundary. This is exactly why percentage-based grids (like <code>width: 33.333%</code>) don't break layouts anymore!</p>
                </section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/box-model/layers" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Layers of the Box Model
                </Link>
                <Link to="/webdevelopment/css/box-model/collapse" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Margin Collapse <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};

export default MarginPaddingShorthand;
