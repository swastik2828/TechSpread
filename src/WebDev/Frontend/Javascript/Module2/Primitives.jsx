import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Key, Lightbulb, AlertTriangle, ArrowRight, Code2, Box } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import JsPrimitivesSimulator from "../../../../simulators/web/JsPrimitivesSimulator";

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

const Primitives = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="Primitive Data Types | JavaScript Course"
                description="Explore JavaScript's seven primitive data types: Number, String, Boolean, null, undefined, Symbol, and BigInt."
                keywords="javascript primitives, javascript data types, typeof null, BigInt javascript"
                url="/webdevelopment/javascript/primitives"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-amber-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                        <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 2.2: Primitives</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        JS <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-orange-500">Primitives.</span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light px-4">
                        Understanding the fundamental, immutable building blocks of data.
                    </p>
                </motion.div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">
                
                <Section title="2.2 Primitive Data Types" icon={Box} id="primitives">
                    <div className="bg-[#0d1117] p-6 sm:p-10 rounded-3xl border border-gray-800/60 shadow-inner mb-12">
                        <p className="text-lg sm:text-xl font-medium text-white leading-relaxed mb-8">
                            JavaScript has seven primitive types. These are the lowest level of data implementation. Primitives are immutable (they cannot be fundamentally changed, only replaced in memory).
                        </p>
                        
                        <div className="space-y-6">
                            <div className="pb-6 border-b border-gray-800/50">
                                <h3 className="text-2xl font-bold text-blue-400 mb-2">Number</h3>
                                <p className="text-gray-300">JavaScript has only one type for numbers. It represents both integers and floating-point decimals. Behind the scenes, it uses a 64-bit floating-point format (IEEE 754), meaning decimal arithmetic can occasionally yield tiny rounding errors (e.g., <code>0.1 + 0.2 === 0.30000000000000004</code>).</p>
                            </div>
                            
                            <div className="pb-6 border-b border-gray-800/50">
                                <h3 className="text-2xl font-bold text-emerald-400 mb-2">String</h3>
                                <p className="text-gray-300">A sequence of characters used to represent text. Strings can be wrapped in single quotes, double quotes, or backticks for template literals (which allow embedded expressions like <code>\`${`{name}`}\`</code>).</p>
                            </div>

                            <div className="pb-6 border-b border-gray-800/50">
                                <h3 className="text-2xl font-bold text-rose-400 mb-2">Boolean</h3>
                                <p className="text-gray-300">A logical entity that can only be <code>true</code> or <code>false</code>. Highly utilized in conditional statements and loops.</p>
                            </div>

                            <div className="pb-6 border-b border-gray-800/50">
                                <h3 className="text-2xl font-bold text-gray-400 mb-2">undefined</h3>
                                <p className="text-gray-300">When variable is declared but no value is ever assigned to it, JavaScript automatically assigns it the value <code>undefined</code>. It represents the "uninitialized" state.</p>
                            </div>

                            <div className="pb-6 border-b border-gray-800/50">
                                <h3 className="text-2xl font-bold text-orange-400 mb-2">null</h3>
                                <p className="text-gray-300">Unlike <code>undefined</code>, <code>null</code> is entirely intentional. It is an assignment value that you give to a variable to explicitly indicate that it has "no value" or "empty value".</p>
                            </div>

                            <div className="pb-6 border-b border-gray-800/50">
                                <h3 className="text-2xl font-bold text-purple-400 mb-2">Symbol</h3>
                                <p className="text-gray-300">Introduced in ES6, a Symbol is a unique and immutable primitive used primarily as an exclusive property key for objects, preventing naming collisions.</p>
                            </div>

                            <div className="pt-2">
                                <h3 className="text-2xl font-bold text-sky-400 mb-2">BigInt</h3>
                                <p className="text-gray-300">The standard <code>Number</code> type loses precision for integers exceeding <code>2^53 - 1</code>. <code>BigInt</code> was introduced to safely store and perform math operations on arbitrarily large integers. Created by appending 'n' to the end of an integer.</p>
                            </div>
                        </div>
                    </div>

                    <HighlightBox title="Note" type="note">
                        <code>typeof null</code> returns <code>'object'</code> — this is a notorious legacy bug from the earliest days of JavaScript that could not be fixed without breaking thousands of live websites. Despite what typeof says, <code>null</code> is definitely a primitive!
                    </HighlightBox>


                    <div className="mt-16 mb-8 pt-8 border-t border-gray-800/60">
                        <h4 className="text-2xl sm:text-3xl font-black text-white mb-6">Primitive Type Inspector</h4>
                        <p className="text-gray-400 mb-8 font-medium">Click on any primitive data entity to explore its properties, memory characteristics, and runtime behaviour—including the notorious `null` bug.</p>
                        <JsPrimitivesSimulator />
                    </div>

                </Section>

                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript/variables" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">Variables</span>
                            </div>
                        </Link>

                        <Link to="/webdevelopment/javascript/reference-types" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.1)] transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block group-hover:text-amber-500/80 transition-colors">Up Next</span>
                                <span className="text-gray-200 font-bold text-xs sm:text-sm group-hover:text-white transition-colors">Reference Types</span>
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

export default Primitives;
