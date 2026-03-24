import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Key, Lightbulb, AlertTriangle, ArrowRight, Code2, PlusSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import JsOperatorsSimulator from "../../../../simulators/web/js/JsOperatorsSimulator";

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

const Operators = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="Operators in JavaScript | JavaScript Course"
                description="Explore arithmetic, comparison, logical, optional chaining and JS ternary operators."
                keywords="javascript operators, javascript comparison, optional chaining, nullish coalescing"
                url="/webdevelopment/javascript/operators"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-amber-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                        <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 2.6: Operators</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        JavaScript <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-orange-500">Operators.</span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light px-4">
                        Operators are the verbs of the language. They act on values to produce new values.
                    </p>
                </motion.div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">
                
                <Section title="2.6 Operators" icon={PlusSquare} id="operators">
                    <p className="text-lg sm:text-xl font-medium text-white p-6 bg-[#0d1117] border border-gray-800/60 rounded-2xl">
                        Operators are the verbs of the language. They act on values to produce new values. Operators are categorised by the number of operands they work on (unary: one; binary: two; ternary: three) and by what category of operation they perform.
                    </p>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#38bdf8] mt-12 sm:mt-16 mb-6">
                        Arithmetic Operators
                    </h3>
                    <p className="mb-6">
                        The standard arithmetic operators (<code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code>, <code>**</code>) perform mathematical calculations on numeric values. The modulo operator (<code>%</code>) returns the remainder after integer division — useful for detecting even/odd numbers (<code>n % 2 === 0</code>). The exponentiation operator (<code>**</code>) is a cleaner replacement for <code>Math.pow()</code>.
                    </p>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#f472b6] mt-12 sm:mt-16 mb-6">
                        Comparison Operators
                    </h3>
                    <p className="mb-6">
                        Comparison operators evaluate relationships between two values and always produce a boolean result. The most important distinction in JavaScript is between strict equality (<code>===</code>) and loose equality (<code>==</code>). Strict equality compares both value and type without any coercion — if the types differ, the result is false, period. Professional JavaScript code uses <code>===</code> and <code>!==</code> exclusively.
                    </p>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#34d399] mt-12 sm:mt-16 mb-6">
                        Logical Operators & Short-Circuiting
                    </h3>
                    <p className="mb-6">
                        Logical operators (<code>&&</code>, <code>||</code>, <code>!</code>) are powerful because they exhibit short-circuit evaluation and return actual operand values, not just <code>true</code> or <code>false</code>. <code>&&</code> returns the first falsy value it encounters, or the last value if all operands are truthy. <code>||</code> returns the first truthy value, or the last value if all are falsy.
                    </p>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#fbbf24] mt-12 sm:mt-16 mb-6">
                        The Nullish Coalescing Operator (??)
                    </h3>
                    <p className="mb-6">
                        Introduced in ES2020, <code>??</code> returns its right-hand operand only when the left-hand operand is <code>null</code> or <code>undefined</code> — not when it is any other falsy value. This is a critical distinction from <code>||</code>.
                    </p>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#818cf8] mt-12 sm:mt-16 mb-6">
                        Optional Chaining (?.)
                    </h3>
                    <p className="mb-6">
                        The optional chaining operator allows you to safely access deeply nested object properties without throwing a <code>TypeError</code> when an intermediate value is <code>null</code> or <code>undefined</code>. Instead of throwing, the entire expression short-circuits and evaluates to <code>undefined</code>.
                    </p>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#f87171] mt-12 sm:mt-16 mb-6">
                        The Ternary Operator
                    </h3>
                    <p className="mb-6">
                        The ternary operator is JavaScript's only operator that takes three operands: <code>condition ? expressionIfTrue : expressionIfFalse</code>. It is an expression (produces a value), not a statement, which means it can appear inside other expressions. Use it for simple, single-line conditional values.
                    </p>

                    <div className="mt-16 mb-8 pt-8 border-t border-gray-800/60">
                        <h4 className="text-2xl sm:text-3xl font-black text-white mb-6">Interactive Operators Lab</h4>
                        <p className="text-gray-400 mb-8 font-medium">Test logical, arithmetic, and coalescing operators using the visual evaluator to instantly see how inputs are resolved.</p>
                        <JsOperatorsSimulator />
                    </div>

                </Section>

                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript/type-conversion" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">Type Conversion</span>
                            </div>
                        </Link>

                        <Link to="/webdevelopment/javascript/expressions" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.1)] transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block group-hover:text-amber-500/80 transition-colors">Up Next</span>
                                <span className="text-gray-200 font-bold text-xs sm:text-sm group-hover:text-white transition-colors">Expressions</span>
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

export default Operators;
