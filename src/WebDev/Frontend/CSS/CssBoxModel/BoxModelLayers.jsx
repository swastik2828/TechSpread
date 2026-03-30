import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Layers } from 'lucide-react';
import SEO from "../../../../components/SEO";
import BoxModelSimulator from "../../../../simulators/web/css/BoxModelSimulator";

const BoxModelLayers = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="The Four Layers of the CSS Box Model"
                description="Learn the four layers that make up a CSS box: Content, Padding, Border, and Margin."
                keywords="css layers, css padding, css margin, css border, content box css"
                url="/webdevelopment/css/box-model/layers"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 rounded-lg border border-purple-500/30 text-purple-400">
                        <Layers size={24} />
                    </div>
                    <span className="text-purple-400 font-bold tracking-widest uppercase text-sm">CSS Box Model</span>
                </div>
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">Four Layers</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    From the inside out, every CSS box is constructed from four core layers. Let's break them down.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                
                {/* Simulator */}
                <BoxModelSimulator />

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-8">Layer Descriptions</h2>
                    <div className="overflow-x-auto rounded-xl border border-gray-800 bg-[#0d1117] shadow-lg mb-8">
                        <table className="w-full text-left text-gray-300 border-collapse">
                            <thead>
                                <tr className="bg-[#161b22] border-b border-gray-800 text-gray-400 text-sm tracking-wider uppercase">
                                    <th className="px-6 py-4 font-bold border-r border-gray-800">Layer</th>
                                    <th className="px-6 py-4 font-bold">Description</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800 font-medium">
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 border-r border-gray-800 text-sky-400">Content</td>
                                    <td className="px-6 py-4">The actual content — text, image, or nested elements inside the box.</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 border-r border-gray-800 text-sky-300">Padding</td>
                                    <td className="px-6 py-4">Transparent space INSIDE the border, between the content and the border itself.</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 border-r border-gray-800 text-yellow-400">Border</td>
                                    <td className="px-6 py-4">A line (or multiple lines) that wraps tightly around the padding layer.</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 border-r border-gray-800 text-orange-400">Margin</td>
                                    <td className="px-6 py-4">Transparent space OUTSIDE the border, separating this element from its neighbors.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Box Model Properties in Code</h2>
                    <p>Here is what the properties look like when applied to an element.</p>
                    <div className="my-6 w-full rounded-xl overflow-hidden bg-[#0d1117] border border-gray-800 shadow-2xl">
                        <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-gray-800">
                            <div className="flex items-center gap-4">
                                <span className="text-xs font-bold text-gray-400 font-mono">styles.css</span>
                            </div>
                            <span className="text-[10px] font-bold text-gray-500 uppercase bg-gray-800 px-2 py-0.5 rounded border border-gray-700">css</span>
                        </div>
                        <div className="p-5 overflow-x-auto font-mono text-sm leading-relaxed text-gray-300">
<pre><code><span className="text-purple-400">.box</span> {'{'}
    <span className="text-gray-500 italic">/* Content area */</span>
    <span className="text-sky-300">width:</span> <span className="text-emerald-400">300px;</span>
    <span className="text-sky-300">height:</span> <span className="text-emerald-400">150px;</span>
 
    <span className="text-gray-500 italic">/* Padding — space inside the border */</span>
    <span className="text-sky-300">padding-top:</span> <span className="text-emerald-400">20px;</span>
    <span className="text-sky-300">padding-right:</span> <span className="text-emerald-400">30px;</span>
    <span className="text-sky-300">padding-bottom:</span> <span className="text-emerald-400">20px;</span>
    <span className="text-sky-300">padding-left:</span> <span className="text-emerald-400">30px;</span>
    <span className="text-gray-500 italic">/* Shorthand: padding: top right bottom left */</span>
    <span className="text-sky-300">padding:</span> <span className="text-emerald-400">20px 30px;</span>      <span className="text-gray-500 italic">/* top/bottom=20px, left/right=30px */</span>
 
    <span className="text-gray-500 italic">/* Border */</span>
    <span className="text-yellow-300">border:</span> <span className="text-yellow-400">2px solid #333;</span>
 
    <span className="text-gray-500 italic">/* Margin — space outside the border */</span>
    <span className="text-orange-300">margin:</span> <span className="text-orange-400">24px auto;</span>       <span className="text-gray-500 italic">/* top/bottom=24px, center horizontally */</span>
 
    <span className="text-sky-300">background-color:</span> <span className="text-sky-200">#f0f8ff;</span>
{'}'}</code></pre>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Deep Dive: Background Boundaries</h2>
                    <p>When you apply a <code>background-color</code> or <code>background-image</code> to an element, where exactly does the background end? By default, the background fills the <strong>Content Area</strong>, the <strong>Padding Area</strong>, and goes completely underneath the <strong>Border Area</strong>.</p>
                    
                    <p className="mt-4">You can control this bleeding using the <code>background-clip</code> property:</p>
                    
                    <div className="bg-[#0d1117] border border-gray-800 rounded-xl overflow-hidden mt-6 shadow-xl">
                        <table className="w-full text-left text-sm text-gray-300">
                            <thead>
                                <tr className="bg-[#161b22] border-b border-gray-800 text-gray-400">
                                    <th className="px-5 py-3 font-bold border-r border-gray-800">Property Value</th>
                                    <th className="px-5 py-3 font-bold">Behavior</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800 font-mono">
                                <tr>
                                    <td className="px-5 py-3 border-r border-gray-800 text-sky-300">border-box <span className="text-xs text-gray-500">(default)</span></td>
                                    <td className="px-5 py-3 font-sans">Background stretches all the way to the outer edge of the border. If the border has transparency (like <code>rgba()</code> or dashed border gaps), the background color will show through.</td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-3 border-r border-gray-800 text-sky-300">padding-box</td>
                                    <td className="px-5 py-3 font-sans">Background stops exactly at the outer edge of the padding. Behind the border, the background is completely transparent.</td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-3 border-r border-gray-800 text-sky-300">content-box</td>
                                    <td className="px-5 py-3 font-sans">Background only colors the text/content area. It will not render underneath the padding or border.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Deep Dive: Negative Margins and Layout Hacks</h2>
                    <p>While <strong>Padding cannot be negative</strong> (a box can't be smaller than itself on the inside), <strong>Margin CAN be negative</strong>. This provides incredible power for advanced CSS layouts.</p>
                    
                    <ul className="list-disc pl-6 space-y-3 mt-4 text-gray-300">
                        <li>Applying negative <code>margin-top</code> or <code>margin-left</code> literally pulls the element upward or to the left, overlapping the preceding element.</li>
                        <li>Applying negative <code>margin-bottom</code> or <code>margin-right</code> doesn't move the element itself. Instead, it pulls the <em>succeeding sibling elements</em> backward to overlap it!</li>
                        <li>Negative margins are perfectly valid CSS, and unlike absolute positioning, they still maintain interactions with the surrounding document flow.</li>
                    </ul>

                    <div className="border-l-4 p-5 rounded-r-xl my-6 border-purple-500 bg-purple-900/10 text-purple-200">
                        <h4 className="font-bold mb-1 flex items-center gap-2">The Transparent Border Trick</h4>
                        <p className="text-sm">If you want an element to gain a border when you hover over it, applying <code>border: 2px solid blue;</code> on hover will force the box to immediately grow by 4px, instantly disrupting everything around it. <strong>The Pro Fix:</strong> Apply <code>border: 2px solid transparent;</code> in the default state, and only change the border <em>color</em> on hover. The box model space is reserved in advance!</p>
                    </div>
                </section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/box-model/intro" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Introduction
                </Link>
                <Link to="/webdevelopment/css/box-model/shorthand" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Padding & Margin Shorthand <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};

export default BoxModelLayers;
