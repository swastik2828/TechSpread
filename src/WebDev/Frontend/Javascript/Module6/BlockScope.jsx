import React from 'react';
import { BookOpen, Key, Lightbulb, AlertTriangle, ArrowRight, ShieldCheck, Box } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";
import JsBlockScopeSimulator from "../../../../simulators/web/js/JsBlockScopeSimulator";

const Section = ({ title, icon: Icon, children, id }) => (
    <section id={id} className="relative mb-16 sm:mb-24 scroll-mt-28">
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full">
            <div className="p-2 sm:p-3 md:p-4 bg-gradient-to-br from-yellow-500/20 to-yellow-500/20 rounded-xl sm:rounded-2xl border border-yellow-500/40 text-yellow-500 shadow-[0_0_30px_rgba(245,158,11,0.15)] flex-shrink-0">
                <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight w-full break-words">
                {title}
            </h2>
        </div>
        <div className="space-y-6 sm:space-y-8 w-full">
            {children}
        </div>
    </section>
);

const HighlightBox = ({ title, children, type = "info" }) => {
    const config = {
        key: { icon: Key, color: "text-amber-400", border: "border-amber-500/40", bg: "bg-gradient-to-br from-amber-900/40 to-yellow-900/10", heading: "text-amber-500", shadow: "shadow-amber-500/10" },
        note: { icon: BookOpen, color: "text-sky-400", border: "border-sky-500/40", bg: "bg-gradient-to-br from-sky-900/40 to-blue-900/10", heading: "text-sky-400", shadow: "shadow-sky-500/10" },
        tip: { icon: Lightbulb, color: "text-amber-400", border: "border-yellow-500/40", bg: "bg-gradient-to-br from-emerald-900/40 to-green-900/10", heading: "text-amber-400", shadow: "shadow-yellow-500/10" },
        warn: { icon: AlertTriangle, color: "text-amber-400", border: "border-yellow-500/40", bg: "bg-gradient-to-br from-rose-900/40 to-red-900/10", heading: "text-yellow-500", shadow: "shadow-yellow-500/10" },
    }[type] || { icon: BookOpen, color: "text-sky-400", border: "border-sky-500/40", bg: "bg-gradient-to-br from-sky-900/40 to-blue-900/10", heading: "text-sky-400", shadow: "shadow-sky-500/10" };

    const Icon = config.icon;

    return (
        <div className={`p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl ${config.bg} border ${config.border} shadow-xl ${config.shadow} my-8 sm:my-10 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 w-full`}>
            <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 blur-3xl rounded-full ${config.bg} transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700`}></div>
            <h4 className={`text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3 ${config.heading} relative z-10 w-full`}>
                <div className={`p-1.5 sm:p-2 rounded-lg bg-black/20 ${config.border} border shrink-0`}>
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${config.color}`} />
                </div>
                <span className="break-words">{title}</span>
            </h4>
            <div className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-line relative z-10 font-medium w-full">
                {children}
            </div>
        </div>
    );
};

const BlockScope = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="Block Scope vs Function Scope | JavaScript Course"
                description="Understand the difference between var, let, and const in JavaScript. Learn about block scope vs function scope and how to avoid common variable bugs."
                keywords="javascript block scope, javascript function scope, var vs let vs const, javascript loop bug"
                url="/webdevelopment/javascript/block-scope"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-yellow-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                
                <div className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                        <Box className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 6.2: Block Scope</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        Block vs <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-yellow-500">Function Scope.</span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light px-4">
                        The Evolution of Fences: How modern JavaScript fixed a 20-year-old architectural flaw.
                    </p>
                </div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">
                
                <Section title="The Evolution of Fences" icon={ShieldCheck} id="block-vs-function">
                    <p className="text-lg sm:text-xl font-medium text-white leading-relaxed">
                        For two decades, JavaScript had a major architectural flaw: it only knew how to build fences around entire functions. It did not know how to build fences around smaller structures like <code>if</code> statements or <code>for</code> loops. This was the era of <code>var</code>.
                    </p>

                    <HighlightBox title="The Mental Model: The Leaky Pipe vs. The Sealed Vault" type="warn">
                        • <strong>var (Function Scope):</strong> Imagine a leaky pipe in your bathroom. The water doesn't stay in the sink; it leaks out and floods the entire bathroom floor. <code>var</code> leaks out of if blocks and loops, flooding the entire function it lives inside.
                        <br/><br/>
                        • <strong>let and const (Block Scope):</strong> Imagine a sealed, waterproof vault. Whatever you put inside stays inside. <code>let</code> and <code>const</code> respect any set of curly braces <code>{`{}`}</code>, keeping your data perfectly contained.
                    </HighlightBox>

                    <div className="mt-12">
                        <h4 className="text-xl font-bold mb-4">Step-by-Step Code Walkthrough: The Classic Loop Bug</h4>
                        <p className="mb-4">The difference is most obvious—and most destructive—in asynchronous loops.</p>
                        
                        <h5 className="text-lg font-bold text-amber-400 mb-2">The var Disaster:</h5>
                        <CodeBlock 
                            title="varBug.js"
                            language="javascript"
                            code={`for (var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(\`Downloading file \${i}\`);
  }, 1000); 
}
// Outputs: 
// Downloading file 4
// Downloading file 4
// Downloading file 4`}
                        />
                        <p className="mt-4 mb-8">
                            Why 4? Because <code>var</code> is function-scoped (leaky), there is only <strong>one</strong> <code>i</code> variable floating in the background. The loop runs instantly, counting 1, 2, 3, 4. One second later, the setTimeout functions wake up, look at the single <code>i</code> variable, and print its final state: 4.
                        </p>

                        <h5 className="text-lg font-bold text-amber-400 mb-2">The let Solution:</h5>
                        <CodeBlock 
                            title="letFix.js"
                            language="javascript"
                            code={`for (let i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(\`Downloading file \${i}\`);
  }, 1000); 
}
// Outputs: 1, 2, 3`}
                        />
                        <p className="mt-4">
                            Why does this work? Because <code>let</code> is block-scoped, every single spin of the loop creates a <strong>brand new, sealed vault</strong> in memory. The first setTimeout is locked in a vault with i = 1. The second is locked in a vault with i = 2. They do not share data.
                        </p>
                    </div>

                    <div className="mt-16 mb-8 pt-8 border-t border-gray-800/60">
                        <h4 className="text-2xl sm:text-3xl font-black text-white mb-6">Interactive Loop Simulator</h4>
                        <p className="text-gray-400 mb-8 font-medium">Use the interactive simulator below to see exactly how memory is managed during a loop for both <code>var</code> and <code>let</code>!</p>
                        <JsBlockScopeSimulator />
                    </div>

                    <HighlightBox title="Professional Standard" type="key">
                        Modern JavaScript <strong>entirely abandons</strong> <code>var</code>.
                        <br/><br/>
                        • Use <code>const</code> by default to signal that a variable's identifier will never change.<br/>
                        • Use <code>let</code> only when you explicitly need a value to change (like a math counter or a boolean toggle).
                    </HighlightBox>

                </Section>

                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript/lexical-scope" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">Lexical Scope</span>
                            </div>
                        </Link>

                        <Link to="/webdevelopment/javascript/hoisting" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block group-hover:text-yellow-500/80 transition-colors">Up Next</span>
                                <span className="text-gray-200 font-bold text-xs sm:text-sm group-hover:text-white transition-colors">Hoisting</span>
                            </div>
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-amber-400 group-hover:bg-yellow-500/10 flex items-center justify-center border border-gray-800 group-hover:border-yellow-500/30 transition-all duration-300">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </article>
    );
};

export default BlockScope;
