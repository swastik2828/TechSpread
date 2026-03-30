import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, AlertTriangle, CheckCircle, Code, ListTodo, Award } from 'lucide-react';
import SEO from "../../../../components/SEO";

const Section = ({ title, icon: Icon, children }) => (
    <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl border border-red-500/30 text-red-400">
                <Icon size={28} />
            </div>
            <h2 className="text-3xl font-bold text-white">{title}</h2>
        </div>
        {children}
    </section>
);

const CodeBlock = ({ title = "styles.css", language = "css", children }) => (
    <div className="my-6 w-full rounded-xl overflow-hidden bg-[#0d1117] border border-gray-800 shadow-2xl">
        <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-gray-800">
            <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/30 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/30 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/30 border border-green-500/50" />
                </div>
                <span className="text-xs font-bold text-gray-400 font-mono">{title}</span>
            </div>
            <span className="text-[10px] font-bold text-gray-500 uppercase bg-gray-800 px-2 py-0.5 rounded border border-gray-700">{language}</span>
        </div>
        <div className="p-5 overflow-x-auto font-mono text-sm leading-relaxed">
            <pre className="text-gray-300 whitespace-pre-wrap"><code>{children}</code></pre>
        </div>
    </div>
);

const Exercises = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Colors & Units — Exercises and Summary"
                description="Test your knowledge on CSS Colors and Units. Avoid common mistakes like using px for font sizes, and review the module summary."
                keywords="css exercises, css common mistakes, css module summary"
                url="/webdevelopment/css/colors-units/exercises"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    Mistakes, Exercises & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">Summary</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    Solidify your understanding of CSS Colors and Units by reviewing common pitfalls and practicing what you've learned.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                
                <Section title="Common Mistakes" icon={AlertTriangle}>
                    <div className="space-y-8">
                        {/* Mistake 1 */}
                        <div className="bg-red-950/20 border border-red-900/50 rounded-xl p-6">
                            <h3 className="text-red-400 font-bold text-xl mb-2 flex items-center gap-2">
                                <AlertTriangle size={20} /> Using px for font sizes
                            </h3>
                            <p className="text-gray-300 mb-4">
                                If you set <code className="text-red-300">font-size</code> in pixels (<code className="text-red-300">px</code>) on the <code className="text-red-300">&lt;html&gt;</code> element, users who change their browser font size preferences for accessibility reasons cannot override it.
                            </p>
                            <div className="bg-[#0d1117] p-4 rounded-lg border border-gray-800 mb-4 text-sm font-mono">
                                <span className="text-red-400">❌ Bad:</span> <span>html {'{'} font-size: 16px; {'}'}</span>
                                <br/>
                                <span className="text-green-400 mt-2 block">✅ Good:</span> <span>html {'{'} font-size: 100%; {'}'} /* Default */</span>
                                <br/>
                                <span className="text-green-400 mt-1 block">✅ Good:</span> <span>p {'{'} font-size: 1rem; {'}'}</span>
                            </div>
                            <p className="text-sm text-gray-400">Always use <code className="text-sky-300">rem</code> so fonts scale gracefully with user preferences.</p>
                        </div>

                        {/* Mistake 2 */}
                        <div className="bg-orange-950/20 border border-orange-900/50 rounded-xl p-6">
                            <h3 className="text-orange-400 font-bold text-xl mb-2 flex items-center gap-2">
                                <AlertTriangle size={20} /> Forgetting % is relative to the parent
                            </h3>
                            <p className="text-gray-300 mb-4">
                                Setting <code className="text-orange-300">width: 50%</code> means 50% of the parent element's width, <strong>not</strong> the viewport. If the parent is only 400px wide, the child will be 200px wide, regardless of screen size.
                            </p>
                            <p className="text-gray-300">
                                If you want an element to strictly take up 50% of the screen width regardless of its container, you must use viewport units (<code className="text-sky-300">vw</code>).
                            </p>
                            <div className="bg-[#0d1117] p-4 rounded-lg border border-gray-800 mt-4 text-sm font-mono">
                                <span className="text-green-400 mt-2 block">✅ Screen-relative:</span> <span>.hero {'{'} width: 50vw; {'}'}</span>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section title="Mini Exercises" icon={ListTodo}>
                    <p className="mb-6">
                        Try implementing these exercises in your own code editor (or CodePen) to test your knowledge!
                    </p>

                    <div className="space-y-6">
                        <div className="border border-gray-800 bg-[#161b22] rounded-xl p-6">
                            <h4 className="text-white font-bold text-lg mb-2">Exercise 1: Color Equivalency</h4>
                            <p className="text-gray-300">
                                Create three boxes with identical sizes. Apply the exact same background color using three different formats: Hex, <code>rgb()</code>, and <code>hsl()</code>. Verify they look identical.
                            </p>
                            <details className="mt-4 cursor-pointer">
                                <summary className="text-sky-400 font-medium select-none">Show Hint</summary>
                                <div className="mt-2 text-sm text-gray-400 p-4 bg-[#0d1117] rounded-lg border border-gray-800">
                                    Try using <code className="text-sky-300">#ff0000</code>, <code className="text-sky-300">rgb(255, 0, 0)</code>, and <code className="text-sky-300">hsl(0, 100%, 50%)</code>.
                                </div>
                            </details>
                        </div>

                        <div className="border border-gray-800 bg-[#161b22] rounded-xl p-6">
                            <h4 className="text-white font-bold text-lg mb-2">Exercise 2: Proportional Component Scaling</h4>
                            <p className="text-gray-300">
                                Build a card component with <code className="text-sky-300">font-size: 18px</code>. Use <code className="text-sky-300">em</code> units for all padding and heading sizes inside the card so they scale proportionally if you change the root card font size to 24px later.
                            </p>
                        </div>

                        <div className="border border-gray-800 bg-[#161b22] rounded-xl p-6">
                            <h4 className="text-white font-bold text-lg mb-2">Exercise 3: Fluid Full-Screen Layout</h4>
                            <p className="text-gray-300">
                                Create a full-viewport hero section. Use <code className="text-sky-300">100vh</code> for height to make it fill the screen, and create a responsive font size using <code className="text-sky-300">calc(1rem + 2vw)</code>. Resize your browser window to see how fluidly it scales.
                            </p>
                        </div>
                    </div>
                </Section>

                <Section title="Module Summary" icon={Award}>
                    <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/30 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-6">Module 3 Complete! 🎉</h3>
                        <ul className="space-y-4 text-gray-300 list-disc ml-6">
                            <li>
                                CSS colors can be expressed as <strong>keywords</strong>, <strong>hex</strong>, <strong>rgb()</strong>/<strong>rgba()</strong>, or <strong>hsl()</strong>/<strong>hsla()</strong>.
                            </li>
                            <li>
                                <strong>HSL</strong> is the most designer-friendly format for building dynamic color systems and generating tints/shades.
                            </li>
                            <li>
                                <strong>Absolute units</strong> (<code className="text-white bg-gray-800 px-1 rounded">px</code>) are fixed globally; <strong>Relative units</strong> (<code className="text-white bg-gray-800 px-1 rounded">rem</code>, <code className="text-white bg-gray-800 px-1 rounded">em</code>, <code className="text-white bg-gray-800 px-1 rounded">%</code>, <code className="text-white bg-gray-800 px-1 rounded">vw</code>, <code className="text-white bg-gray-800 px-1 rounded">vh</code>) scale based on an external factor.
                            </li>
                            <li>
                                Use <code className="text-white bg-gray-800 px-1 rounded">rem</code> for font sizes to respect user accessibility preferences natively.
                            </li>
                            <li>
                                The <code className="text-white bg-gray-800 px-1 rounded">calc()</code> function allows you to perform math and mix completely different unit types dynamically.
                            </li>
                        </ul>
                    </div>
                </Section>
                
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/colors-units/units" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> CSS Units
                </Link>
                {/* At the end of the module, point to the next module */}
                <Link to="/webdevelopment/css/box-model/intro" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: CSS Box Model <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};

export default Exercises;
