import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Key, Lightbulb, AlertTriangle, ArrowRight, Code2, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";
import JsVariablesSimulator from "../../../../simulators/web/JsVariablesSimulator";

const Section = ({ title, icon: Icon, children, id }) => (
    <section id={id} className="relative mb-16 sm:mb-24 scroll-mt-28">
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full">
            <div className="p-2 sm:p-3 md:p-4 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-xl sm:rounded-2xl border border-amber-500/40 text-amber-500 shadow-[0_0_30px_rgba(251,191,36,0.15)] flex-shrink-0">
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
        tip: { icon: Lightbulb, color: "text-emerald-400", border: "border-emerald-500/40", bg: "bg-gradient-to-br from-emerald-900/40 to-green-900/10", heading: "text-emerald-400", shadow: "shadow-emerald-500/10" },
        warn: { icon: AlertTriangle, color: "text-rose-400", border: "border-rose-500/40", bg: "bg-gradient-to-br from-rose-900/40 to-red-900/10", heading: "text-rose-500", shadow: "shadow-rose-500/10" },
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

const Variables = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="Variables (var, let, const) | JavaScript Course"
                description="Learn the fundamentals of JavaScript variables, the differences between var, let, and const, and the best practices for declaring data in memory."
                keywords="javascript variables, var let const, block scope javascript, hoisting"
                url="/webdevelopment/javascript/variables"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-amber-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                        <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 2.1: Variables</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        JS <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-orange-500">Variables.</span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light px-4">
                        Master the structural foundation of data storage in memory using modern JavaScript conventions.
                    </p>
                </motion.div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">
                
                <Section title="2.1 Variables: var, let, and const" icon={Database} id="variables">
                    <div className="space-y-8 bg-[#0d1117] p-6 sm:p-10 rounded-3xl border border-gray-800/60 shadow-inner">
                        <p className="text-lg sm:text-xl font-medium text-white leading-relaxed">
                            A variable is a named binding between an identifier (the name you choose) and a value stored somewhere in memory. In JS, you create variables using one of three keywords: <code>var</code>, <code>let</code>, or <code>const</code>.
                        </p>

                        <div className="pt-6 border-t border-gray-800">
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-400 mb-4">
                                var — The Original Declaration (Avoid in Modern Code)
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                Before ES6 (2015), <code>var</code> was the only way to declare variables. It is function-scoped (or globally scoped), meaning it does not respect block boundaries (like `if` statements or `for` loops). Variables declared with <code>var</code> can be redeclared and are hoisted to the top of their scope, often leading to unpredictable bugs in complex logic. Professional developers almost never use <code>var</code> today.
                            </p>
                        </div>

                        <div className="pt-6 border-t border-gray-800">
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-green-400 mb-4">
                                let — Block-Scoped and Reassignable
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                Introduced in ES6, <code>let</code> is the modern standard for variables whose values need to change (e.g., loop counters or accumulators). It is strictly block-scoped (confined to the nearest set of <code>{`{}`}</code>) and cannot be redeclared within the same scope. While it is hoisted, accessing it before declaration results in a <code>ReferenceError</code> (this period is known as the Temporal Dead Zone).
                            </p>
                        </div>

                        <div className="pt-6 border-t border-gray-800">
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-amber-500 mb-4">
                                const — Block-Scoped and Reassignment-Locked
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                Also introduced in ES6, <code>const</code> works exactly like <code>let</code> regarding scope and hoisting, but with one critical difference: a <code>const</code> variable must be initialized immediately, and its identifier cannot be reassigned to a new value. It is best practice to default to <code>const</code> for all variables, falling back to <code>let</code> only when you know the value must change.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12">
                        <CodeBlock 
                            title="declaration.js"
                            language="javascript"
                            code={`var username = "Alice";    
let score = 0;             
const maxPlayers = 100;    

score = 10;                
maxPlayers = 200; // TypeError`}
                        />
                    </div>

                    <HighlightBox title="Pro Tip" type="tip">
                        <code>const</code> does not mean the value itself is immutable (like a frozen object) — it just means the variable name cannot be reassigned to point to a completely different value in memory. If a <code>const</code> holds an object or array, you can still modify its internal properties or elements.
                    </HighlightBox>

                    <div className="mt-16 mb-8 pt-8 border-t border-gray-800/60">
                        <h4 className="text-2xl sm:text-3xl font-black text-white mb-6">Interactive Scoping Lab</h4>
                        <p className="text-gray-400 mb-8 font-medium">Use the interactive simulator below to visually understand how <code>var</code>, <code>let</code>, and <code>const</code> behave differently in memory during block execution. Step through the code and observe the memory map!</p>
                        <JsVariablesSimulator />
                    </div>

                </Section>

                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">Introduction</span>
                            </div>
                        </Link>

                        <Link to="/webdevelopment/javascript/primitives" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.1)] transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block group-hover:text-amber-500/80 transition-colors">Up Next</span>
                                <span className="text-gray-200 font-bold text-xs sm:text-sm group-hover:text-white transition-colors">Primitives</span>
                            </div>
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-amber-400 group-hover:bg-amber-500/10 flex items-center justify-center border border-gray-800 group-hover:border-amber-500/30 transition-all duration-300">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </article>
    );
};

export default Variables;
