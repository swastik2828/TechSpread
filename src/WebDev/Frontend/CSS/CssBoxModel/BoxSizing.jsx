import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, BoxSelect } from 'lucide-react';
import SEO from "../../../../components/SEO";
import BoxSizingSimulator from "../../../../simulators/web/css/BoxSizingSimulator";

const BoxSizing = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Box-Sizing: border-box Explained"
                description="Learn the difference between content-box and border-box in CSS. Understand why border-box is the industry standard for layout."
                keywords="css box sizing, css border-box, css content-box, box-sizing css"
                url="/webdevelopment/css/box-model/box-sizing"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30 text-cyan-400">
                        <BoxSelect size={24} />
                    </div>
                    <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm">CSS Box Model</span>
                </div>
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    box-sizing: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">border-box</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    By default, adding padding or borders to an element makes the entire element wider. The <code>box-sizing</code> property fixes this frustrating behavior forever.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">content-box vs. border-box</h2>
                    <p>By default, CSS uses <code>box-sizing: content-box</code>, which means width and height apply ONLY to the content area. Padding and border are added on top, making the actual rendered box bigger than you specified.</p>
                    <p>With <code>box-sizing: border-box</code>, the width and height you specify <em>include</em> the padding and border. This is almost always what you want, as it keeps your elements fitting perfectly into their grids and containers regardless of how much padding they have.</p>

                    <BoxSizingSimulator />
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">The Global Reset</h2>
                    <p>Because <code>border-box</code> is so vastly superior for creating stable layouts, it is considered an industry-standard best practice to apply it to every element on the page immediately.</p>
                    
                    <div className="my-6 w-full rounded-xl overflow-hidden bg-[#0d1117] border border-gray-800 shadow-2xl">
                        <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-gray-800">
                            <div className="flex items-center gap-4">
                                <span className="text-xs font-bold text-gray-400 font-mono">reset.css</span>
                            </div>
                            <span className="text-[10px] font-bold text-gray-500 uppercase bg-gray-800 px-2 py-0.5 rounded border border-gray-700">css</span>
                        </div>
                        <div className="p-5 overflow-x-auto font-mono text-sm leading-relaxed text-gray-300">
<pre><code><span className="text-gray-500 italic">/* Apply globally at the top of every CSS file */</span>
<span className="text-purple-400">*, *::before, *::after</span> {'{'}
    <span className="text-emerald-400">box-sizing:</span> <span className="text-cyan-400">border-box;</span>
{'}'}</code></pre>
                        </div>
                    </div>
                    
                    <div className="border-l-4 p-6 rounded-r-xl my-6 border-cyan-500 bg-cyan-900/10 text-cyan-200">
                        <strong>Why pseudo-elements?</strong> <code>*::before</code> and <code>*::after</code> are included in the reset to ensure that any decorative elements or icons you generate with CSS also obey the border-box model, preventing unexpected layout breakages.
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Deep Dive: Box-Shadow and Outline</h2>
                    <p>While the Box Model dictates the physical layout geometry of an element, there are two common CSS properties that draw visually outside the box <strong>without affecting layout at all</strong>: <code>box-shadow</code> and <code>outline</code>.</p>
                    
                    <ul className="list-disc pl-6 space-y-4 mt-4 text-gray-300">
                        <li>
                            <strong>Box-Shadow:</strong> Draws a shadow <em>underneath</em> and <em>outside</em> the border layer. It does not push surrounding elements away. If a shadow is 100px wide, it will simply overlap nearby elements without causing a scrollbar. 
                            <span className="block mt-1 text-sm text-cyan-400">Exception: Sometimes gigantic box-shadows can trigger overflow scrollbars on the <code>&lt;html&gt;</code> element if they cross the screen boundary.</span>
                        </li>
                        <li>
                            <strong>Outline:</strong> Works exactly like a border, but it paints <em>on top of</em> the element's exterior margin space. Like a shadow, it takes up 0 physical layout space. Outlines are critically important for Accessibility (WCAG) to show which element currently has keyboard focus (<code>:focus-visible</code>).
                        </li>
                    </ul>
                </section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/box-model/collapse" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Margin Collapse
                </Link>
                <Link to="/webdevelopment/css/box-model/width-height" className="flex items-center gap-2 text-cyan-400 font-bold hover:text-cyan-300 transition-colors">
                    Next: Width, Min-Width, Max-Width <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};

export default BoxSizing;
