import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Box } from 'lucide-react';
import SEO from "../../../../components/SEO";

const IntroBoxModel = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Box Model — Introduction & Why it Matters"
                description="The CSS Box Model is the foundation of web layout. Understand how every HTML element is treated as a rectangular box and how to control dimensions."
                keywords="css box model, web layout, box model css, dimensions in css"
                url="/webdevelopment/css/box-model/intro"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-br from-sky-500/20 to-cyan-500/20 rounded-lg border border-sky-500/30 text-sky-400">
                        <Box size={24} />
                    </div>
                    <span className="text-sky-400 font-bold tracking-widest uppercase text-sm">CSS Course / Module 4</span>
                </div>
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    The CSS <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">Box Model</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    Every element in CSS is a rectangular box. The box model defines how this box is sized and spaced. Understanding the box model is the single most important concept for controlling layout.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Module Overview</h2>
                    <p>
                        It explains why elements end up where they do, why adding padding can accidentally break your layout, and how to calculate widths and heights correctly.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Why the Box Model Matters</h2>
                    <p>
                        Without understanding the box model, you will constantly struggle with misaligned layouts, unexpected sizes, and spacing problems. Mastering this concept makes CSS layout intuitive. When elements wrap strangely or don't fit where you expect them to, the Box Model is usually to blame!
                    </p>
                    <div className="border-l-4 p-6 rounded-r-xl my-6 border-sky-500 bg-sky-900/10 text-sky-200">
                        <strong>Pro Tip:</strong> Even complex layouts built with Flexbox or CSS Grid are fundamentally composed of elements that obey the Box Model rules. The Box Model dictates the physical size of the grid items themselves.
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Brief History: The IE Box Model Bug</h2>
                    <p>
                        In 1996, CSS Level 1 defined the box model exactly as the default works today (where padding and borders add to the width). However, when Microsoft released Internet Explorer 5, they implemented it incorrectly. In IE5, the <code>width</code> property included the padding and border — exactly what we now know as <code>box-sizing: border-box</code>.
                    </p>
                    <p>
                        Although it was considered a "bug" that broke web standards, front-end developers universally realized that IE's flawed model was actually far superior and mathematically easier for building grids. Years later, the W3C practically codified the IE bug into the official spec via the <code>box-sizing</code> property so developers could legally opt-in to the "better" behavior.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Block vs. Inline Box Dimensions</h2>
                    <p>Before diving into the four layers, you must understand a critical caveat: <strong>Not all boxes behave the same way.</strong></p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-[#0d1117] border border-gray-800 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-sky-400 mb-3">Block-level Boxes</h3>
                            <ul className="list-disc pl-5 text-gray-400 space-y-2 text-sm">
                                <li>Examples: <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;h1&gt;</code>.</li>
                                <li>Always start on a new line.</li>
                                <li>Expand horizontally to fill 100% of their parent container's available width.</li>
                                <li>Respect <code>width</code>, <code>height</code>, and all directional <code>margin</code> and <code>padding</code> perfectly.</li>
                            </ul>
                        </div>
                        <div className="bg-[#161b22] border border-gray-800 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-amber-400 mb-3">Inline-level Boxes</h3>
                            <ul className="list-disc pl-5 text-gray-400 space-y-2 text-sm">
                                <li>Examples: <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;strong&gt;</code>.</li>
                                <li>Flow continuously with text and do not break onto a new line.</li>
                                <li><strong>CRITICAL:</strong> They completely ignore <code>width</code> and <code>height</code> properties.</li>
                                <li>They ignore <strong>top/bottom margins</strong>.</li>
                                <li>Top/bottom padding visually renders, but <em>does not push other elements away</em> (text will overlap).</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="border-l-4 p-6 rounded-r-xl my-6 border-amber-500 bg-amber-900/10 text-amber-200">
                        <strong>The Inline-Block Solution:</strong> If you need an element to sit inline with text, but you also need to give it a specific <code>width</code>, <code>height</code>, or vertical margins, you must change its display property to <code>display: inline-block;</code>. Every CSS veteran knows this trick by heart!
                    </div>
                </section>
            </div>

            <div className="flex justify-end mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/box-model/layers" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Layers of the Box Model <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};

export default IntroBoxModel;
