import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Smartphone, CheckSquare, ListOrdered, CheckCircle } from 'lucide-react';
import SEO from "../../../../components/SEO";
import CssClampSimulator from "../../../../simulators/web/css/CssClampSimulator";

const Section = ({ title, icon: Icon, children }) => (
    <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-sky-500/20 to-cyan-500/20 rounded-xl border border-sky-500/30 text-sky-400">
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

const InfoBox = ({ type = "note", children }) => {
    const styles = {
        note: "border-sky-500 bg-sky-900/10 text-sky-200",
        warning: "border-yellow-500 bg-yellow-900/10 text-yellow-200",
        tip: "border-green-500 bg-green-900/10 text-green-200",
    };
    return (
        <div className={`border-l-4 p-6 rounded-r-xl my-6 ${styles[type]}`}>
            {children}
        </div>
    );
};

export default function ResponsiveTypography() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="Responsive Typography — Fluid text with clamp()"
                description="Learn to use the CSS clamp() function for fluid typography to ensure font sizes automatically adapt across mobile and desktop."
                keywords="css clamp, fluid typography css, responsive fonts, css min max resizer"
                url="/webdevelopment/css/typography/responsive"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    Responsive <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">Typography</span>
                </h1>
                <p className="text-lg text-gray-400">Make your text natively adapt relative to screen size gracefully using modern CSS functions without endless media queries.</p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                
                <Section title="Fluid Typography with clamp()" icon={Smartphone}>
                    <p>Use <code>clamp()</code> to create fluid type scales that automatically size between a minimum and maximum.</p>
                    <CssClampSimulator />
                    <CodeBlock>
{`/* clamp(min, preferred, max) */
h1 { font-size: clamp(1.75rem, 4vw, 3rem); }
/* At narrow screens: 1.75rem */
/* At medium screens: scales with viewport (4vw) */
/* At wide screens: caps at 3rem */`}
                    </CodeBlock>
                </Section>

                <Section title="Mini Exercises" icon={CheckSquare}>
                    <div className="space-y-6">
                        <div className="bg-[#161b22] p-6 rounded-xl border border-gray-800">
                           <h4 className="text-lg font-bold text-sky-400 mb-2 flex items-center gap-2"><ListOrdered className="w-5 h-5"/> Exercise 1</h4>
                           <p>Build a blog post layout with a heading, sub-heading, and body text. Apply appropriate font sizes, weights, and line-height for maximum readability.</p>
                        </div>
                        <div className="bg-[#161b22] p-6 rounded-xl border border-gray-800">
                           <h4 className="text-lg font-bold text-sky-400 mb-2 flex items-center gap-2"><ListOrdered className="w-5 h-5"/> Exercise 2</h4>
                           <p>Create a navigation bar. Make the nav links uppercase with wide letter-spacing (0.1em) and remove the default underline.</p>
                        </div>
                        <div className="bg-[#161b22] p-6 rounded-xl border border-gray-800">
                           <h4 className="text-lg font-bold text-sky-400 mb-2 flex items-center gap-2"><ListOrdered className="w-5 h-5"/> Exercise 3</h4>
                           <p>Add Google Fonts to your project. Use a serif font for headings and a sans-serif for body text.<br/><span className="text-sm text-gray-400 block mt-2">Hint: Combine two Google Font families in one <code>&lt;link&gt;</code> tag using the <code>&amp;</code> separator</span></p>
                        </div>
                    </div>
                </Section>

                <Section title="Summary" icon={CheckCircle}>
                    <div className="bg-sky-900/10 border-l-4 border-sky-500 p-6 rounded-r-xl">
                        <h4 className="text-xl font-bold text-sky-400 mb-4">Module 5 Complete!</h4>
                        <ul className="space-y-2 list-disc list-inside text-gray-300">
                            <li><code>font-family</code> should always include fallbacks. Use <code>rem</code> for <code>font-size</code>.</li>
                            <li><code>line-height</code> with unitless values (like 1.5) is the recommended approach.</li>
                            <li><code>text-overflow: ellipsis</code> requires <code>nowrap</code> and <code>overflow: hidden</code>.</li>
                            <li><code>clamp()</code> creates fluid font sizes that scale with viewport width.</li>
                            <li className="font-semibold text-white mt-4 border-t border-sky-500/20 pt-4 list-none">Good typography = right font, right size, right spacing, right hierarchy.</li>
                        </ul>
                    </div>
                </Section>

            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/typography/formatting" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Text Formatting
                </Link>
            </div>
        </article>
    );
}
