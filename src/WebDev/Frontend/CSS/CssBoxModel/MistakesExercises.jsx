import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, AlertTriangle } from 'lucide-react';
import SEO from "../../../../components/SEO";

const MistakesExercises = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Box Model - Common Mistakes & Exercises"
                description="Test your CSS Box Model knowledge with exercises. Learn the most common beginner mistakes and how to avoid them."
                keywords="css exercises, css box model mistakes, learn css layout"
                url="/webdevelopment/css/box-model/mistakes-exercises"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-lg border border-amber-500/30 text-amber-400">
                        <CheckCircle size={24} />
                    </div>
                    <span className="text-amber-400 font-bold tracking-widest uppercase text-sm">CSS Box Model</span>
                </div>
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    Mistakes & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Exercises</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    Solidify your understanding of the box model by examining common pitfalls and solving real layout challenges.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                        <AlertTriangle className="text-rose-500" /> Common Mistakes
                    </h2>
                    
                    <div className="space-y-6">
                        <div className="bg-[#0d1117] border border-gray-800 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-white mb-3">1. Forgetting border-box</h3>
                            <p className="text-gray-400">Not setting <code>box-sizing: border-box</code> globally is a classic beginner mistake. Adding side padding to a <code>100%</code> wide block suddenly pushes it to <code>110%</code>, causing an annoying horizontal scrollbar at the bottom of the webpage.</p>
                            <p className="text-amber-400 text-sm font-bold mt-2">Fix: Always reset box-sizing globally at the top of your CSS.</p>
                        </div>

                        <div className="bg-[#0d1117] border border-gray-800 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-white mb-3">2. Using height: 100% incorrectly</h3>
                            <p className="text-gray-400"><code>height: 100%</code> often does absolutely nothing. It requires the parent to have a hard-coded height to calculate the percentage against.</p>
                            <p className="text-amber-400 text-sm font-bold mt-2">Fix: Use `min-height: 100vh` if you want a section to fill the screen viewport instead.</p>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                        <CheckCircle className="text-emerald-500" /> Mini Exercises
                    </h2>
                    
                    <div className="space-y-6">
                        <div className="bg-[#161b22] border border-gray-800 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-white mb-2">Exercise 1: The Calculation</h3>
                            <p className="text-gray-400 mb-4">You have a div with <code>width: 300px</code>, <code>padding: 20px</code>, and <code>border: 5px solid</code>.</p>
                            <ul className="list-disc pl-6 text-sky-200">
                                <li>What is the total rendered width in <strong>content-box</strong> mode?</li>
                                <li>What is the total rendered width in <strong>border-box</strong> mode?</li>
                            </ul>
                            <details className="mt-4 text-sm bg-[#0d1117] p-4 rounded-lg cursor-pointer border border-gray-800">
                                <summary className="text-emerald-400 font-bold outline-none">Show Answer</summary>
                                <div className="mt-3 text-gray-400 space-y-2">
                                    <p><strong>Content-box:</strong> 350px (300 width + 20L padding + 20R padding + 5L border + 5R border).</p>
                                    <p><strong>Border-box:</strong> 300px (The width is strictly bounded, the padding and border look inwards).</p>
                                </div>
                            </details>
                        </div>

                        <div className="bg-[#161b22] border border-gray-800 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-white mb-2">Exercise 2: The Centered Container</h3>
                            <p className="text-gray-400">Build a layout where the main content sits in the middle of a wide screen. The container should take up 95% of the screen horizontally so it doesn't touch the edges on mobile, but should never grow wider than 1100px on large monitors.</p>
                            <details className="mt-4 text-sm bg-[#0d1117] p-4 rounded-lg cursor-pointer border border-gray-800">
                                <summary className="text-emerald-400 font-bold outline-none">Show Answer</summary>
                                <div className="mt-3 text-gray-400">
<pre className="text-emerald-300"><code>.container {'{'}
    width: 95%;
    max-width: 1100px;
    margin: 0 auto;
{'}'}</code></pre>
                                </div>
                            </details>
                        </div>

                        <div className="bg-[#161b22] border border-gray-800 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-white mb-2">Exercise 3: Margin Collapse</h3>
                            <p className="text-gray-400">Stack two <code>&lt;p&gt;</code> tags. Give the first one <code>margin-bottom: 50px</code>. Give the second one <code>margin-top: 25px</code>. What is the gap between them?</p>
                            <details className="mt-4 text-sm bg-[#0d1117] p-4 rounded-lg cursor-pointer border border-gray-800">
                                <summary className="text-emerald-400 font-bold outline-none">Show Answer</summary>
                                <div className="mt-3 text-gray-400">
                                    <p>The gap is <strong>50px</strong>. Expected by many to be 75px, the margins actually collapse vertically, and the larger of the two (50px) "consumes" the smaller.</p>
                                </div>
                            </details>
                        </div>

                        <div className="bg-[#161b22] border border-gray-800 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-white mb-2">Advanced: Exercise 4: Percentage Padding Trivia</h3>
                            <p className="text-gray-400">If you give a block element <code>padding-top: 50%</code>, what is the 50% calculating against? The height of the parent, or the width of the parent?</p>
                            <details className="mt-4 text-sm bg-[#0d1117] p-4 rounded-lg cursor-pointer border border-gray-800">
                                <summary className="text-emerald-400 font-bold outline-none">Show Answer</summary>
                                <div className="mt-3 text-gray-400">
                                    <p><strong>The Width of the Parent!</strong> It is a bizarre quirk of CSS that ALL percentage-based padding and margins (even top and bottom directions) resolve against the <em>width</em> of the containing block. This was historically used to trick CSS into rendering perfect squares (aspect-ratio hacks) before the <code>aspect-ratio</code> property existed.</p>
                                </div>
                            </details>
                        </div>

                        <div className="bg-[#161b22] border border-gray-800 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-white mb-2">Advanced: Exercise 5: The Stubborn Span</h3>
                            <p className="text-gray-400">You apply <code>margin-top: 100px</code> and <code>padding-top: 100px</code> to an inline <code>&lt;span&gt;</code> element sitting in the middle of a paragraph. What visually happens to the text lines above it?</p>
                            <details className="mt-4 text-sm bg-[#0d1117] p-4 rounded-lg cursor-pointer border border-gray-800">
                                <summary className="text-emerald-400 font-bold outline-none">Show Answer</summary>
                                <div className="mt-3 text-gray-400">
                                    <p><strong>Absolutely nothing!</strong> Inline elements completely ignore top and bottom margins. They <em>will</em> render the top padding visually (the background color will paint upwards), but it will <strong>not</strong> push the surrounding text lines away, causing it to overlap other text. You must use <code>display: inline-block</code> for it to push the text.</p>
                                </div>
                            </details>
                        </div>
                    </div>
                </section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/box-model/width-height" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Width & Height
                </Link>
                {/* Notice there is no Next link, module is finished! Let the user navigate via sidebar */}
            </div>
        </article>
    );
};

export default MistakesExercises;
