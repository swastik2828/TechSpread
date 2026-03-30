import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, ArrowDownUp } from 'lucide-react';
import SEO from "../../../../components/SEO";
import MarginCollapseSimulator from "../../../../simulators/web/css/MarginCollapseSimulator";

const MarginCollapse = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Margin Collapse - Explained Visually"
                description="Understand CSS Margin Collapse. Learn why vertical margins dissolve into each other, and the rules governing when this happens."
                keywords="css margin collapse, vertical margin collapse, collapsing margins css"
                url="/webdevelopment/css/box-model/collapse"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-lg border border-rose-500/30 text-rose-400">
                        <ArrowDownUp size={24} />
                    </div>
                    <span className="text-rose-400 font-bold tracking-widest uppercase text-sm">CSS Box Model</span>
                </div>
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    Margin <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-500">Collapse</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    When two vertical margins meet, they usually do not add together. They collapse into one margin — specifically, whichever one is larger.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">What is Margin Collapse?</h2>
                    <p>Imagine Element A has a bottom margin of <code>40px</code>, and Element B directly below it has a top margin of <code>30px</code>. You might expect the total gap to be <code>70px</code>. However, because of margin collapse, the total gap is only <code>40px</code>.</p>
                    
                    <MarginCollapseSimulator />

                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">The Rules of Margin Collapse</h2>
                    <p>Margin collapse can be confusing at first, but remembering these key rules will help you predict exactly how elements will sit on the page:</p>
                    
                    <ol className="list-decimal pl-6 space-y-4 text-gray-300 marker:text-rose-500">
                        <li><strong>Vertical Only:</strong> Margin collapse ONLY happens vertically (top and bottom). Left and right margins never collapse.</li>
                        <li><strong>The Larger Wins:</strong> If two positive margins meet, the smaller one collapses into the larger one.</li>
                        <li><strong>Negative Margins Subtract:</strong> If one margin is positive and the other is negative, the negative margin is subtracted from the positive one.</li>
                        <li><strong>Parent & Child:</strong> If a parent element does not have top/bottom padding or borders, its top/bottom margin will collapse with its first/last child's vertical margin.</li>
                    </ol>

                    <div className="border-l-4 p-6 rounded-r-xl my-6 border-sky-500 bg-sky-900/10 text-sky-200">
                        <strong>Exceptions:</strong> Flexbox and CSS Grid containers <em>never</em> collapse margins for their children. Furthermore, adding any <code>border</code>, <code>padding</code>, or <code>overflow: hidden</code> to a parent will stop margin collapse between the parent and child.
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Parent-Child "Punch Through"</h2>
                    <p className="text-gray-300 mb-4">
                        When a parent element has no top padding and no top border, the top margin of its first child will literally "punch through" the parent and collapse with the parent's top margin. The child pushes the entire parent downward, rather than pushing itself downward inside the parent.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-[#0d1117] border border-gray-800 p-6 rounded-xl">
                            <h3 className="text-lg font-bold text-rose-400 mb-3 flex items-center gap-2"><ArrowDownUp size={18}/> The Problem</h3>
                            <div className="bg-rose-900/10 p-4 border border-rose-500/20 rounded">
                                <p className="text-sm font-mono text-gray-300 mb-2">&lt;div class="parent"&gt;</p>
                                <p className="text-sm font-mono text-sky-300 ml-4">&lt;h1 style="margin-top: 50px"&gt;Heading&lt;/h1&gt;</p>
                                <p className="text-sm font-mono text-gray-300">&lt;/div&gt;</p>
                                <p className="text-xs text-rose-300 mt-4 leading-relaxed">Instead of the Heading moving 50px down *inside* the parent, the entire parent container drops 50px down the page!</p>
                            </div>
                        </div>

                        <div className="bg-[#161b22] border border-gray-800 p-6 rounded-xl">
                            <h3 className="text-lg font-bold text-emerald-400 mb-3 flex items-center gap-2"><ArrowDownUp size={18}/> The Solutions</h3>
                            <ul className="list-disc pl-5 text-gray-300 space-y-3 text-sm">
                                <li><strong>The Old Hack:</strong> Add <code>border: 1px solid transparent;</code> or <code>padding: 1px;</code> to the parent. The border/padding creates a "wall" that stops the margin from punching through.</li>
                                <li><strong>The Modern Solution:</strong> Add <code>display: flow-root;</code> to the parent. This creates a new Block Formatting Context (BFC) safely isolating the child margins completely!</li>
                                <li><strong>The Overflow Fix:</strong> Adding <code>overflow: hidden;</code> or <code>overflow: auto;</code> to the parent also creates a BFC.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Deep Dive: Empty Elements</h2>

                    <p className="text-gray-300">
                        If you create an empty <code>&lt;div&gt;&lt;/div&gt;</code> that has no height, no content, no padding, and no borders—but it DOES have <code>margin-top: 30px;</code> and <code>margin-bottom: 20px;</code>... what happens? 
                        <strong>The element collapses its own top and bottom margins into each other!</strong> The element will take up <code>30px</code> of vertical space, not <code>50px</code>.
                    </p>
                    
                    <div className="border-l-4 p-5 rounded-r-xl my-6 border-purple-500 bg-purple-900/10 text-purple-200">
                        <strong>Architectural Philosophy:</strong> Modern UI development heavily relies on Flexbox and Grid. Because of this, many developers go their entire careers without deeply understanding Margin Collapse. But the moment you style a simple blog article of heading tags and paragraphs (standard flow text), Margin Collapse rears its head!
                    </div>
                </section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/box-model/shorthand" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Padding & Margin Shorthand
                </Link>
                <Link to="/webdevelopment/css/box-model/box-sizing" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: box-sizing: border-box <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};

export default MarginCollapse;
