import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Key, Lightbulb, AlertTriangle, ArrowRight, Code2, Network } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";
import JsExpressionsSimulator from "../../../../simulators/web/js/JsExpressionsSimulator";

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

const Expressions = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="Expressions & Statements | JavaScript Course"
                description="Understand the difference between expressions and statements in JavaScript, and how operator precedence evaluates code."
                keywords="javascript expressions, javascript statements, operator precedence, evaluation order"
                url="/webdevelopment/javascript/expressions"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-amber-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                        <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 2.7: Expressions & Statements</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        Expressions & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-orange-500">Statements.</span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light px-4">
                        Understanding how JavaScript interprets your logic pieces.
                    </p>
                </motion.div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">
                
                <Section title="2.7 Expressions, Statements & Evaluation Order" icon={Network} id="expressions-statements">
                    <p className="text-lg sm:text-xl font-medium text-white mb-10 p-6 bg-[#0d1117] border border-gray-800 rounded-2xl shadow-inner">
                        An expression is any valid unit of code that resolves to a value. A statement is a larger unit that performs an action. It may contain expressions but does not itself produce a value. Understanding this distinction matters because expressions can be composed and embedded within other expressions; statements cannot.
                    </p>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-400 mt-12 sm:mt-16 mb-6">
                        Expression — The Value Producer
                    </h3>
                    <p className="mb-6">
                        Any code that results in a single value is an expression. When you type an expression into the browser console, the console immediately prints the resulting value back out.
                    </p>
                    <div className="space-y-4 font-mono text-sm sm:text-base bg-black/40 p-6 rounded-2xl border border-gray-800">
                        <div><span className="text-blue-300">42</span> <span className="text-gray-500">// Literal expression</span></div>
                        <div><span className="text-emerald-300">"Hello " + "World"</span> <span className="text-gray-500">// Arithmetic expression</span></div>
                        <div><span className="text-rose-300">isLoggedIn ? "Yes" : "No"</span> <span className="text-gray-500">// Ternary expression</span></div>
                        <div><span className="text-purple-300">Math.random()</span> <span className="text-gray-500">// Function call expression</span></div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#f472b6] mt-12 sm:mt-16 mb-6">
                        Statement — The Action Performer
                    </h3>
                    <p className="mb-6">
                        Statements are commands that tell the engine to do something. They form the structure of your program. A statement ends, conceptually or literally, with a semicolon. Crucially, statements do not return values that you can capture in variables.
                    </p>
                    <div className="space-y-4 font-mono text-sm sm:text-base bg-black/40 p-6 rounded-2xl border border-gray-800">
                        <div><span className="text-[#f472b6]">let x = 10;</span> <span className="text-gray-500">// Variable declaration statement</span></div>
                        <div><span className="text-[#34d399]">if (true) {`{ ... }`}</span> <span className="text-gray-500">// Conditional statement</span></div>
                        <div><span className="text-[#fbbf24]">while (running) {`{ ... }`}</span> <span className="text-gray-500">// Loop statement</span></div>
                    </div>

                    <HighlightBox title="The Golden Rule" type="key">
                        Wherever JavaScript expects an expression, you cannot place a statement. For example, you cannot use an <code>if</code> statement as a function argument: <code>console.log(if (true) "yes")</code>. But you CAN use a ternary expression: <code>console.log(true ? "yes" : "no")</code>.
                    </HighlightBox>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#38bdf8] mt-12 sm:mt-16 mb-6">
                        Evaluation Order (Precedence)
                    </h3>
                    <p className="mb-6 p-6 bg-blue-900/10 border border-blue-500/20 text-blue-200 rounded-2xl">
                        Operator precedence determines the order in which operators are evaluated when an expression contains multiple operators. Higher-precedence operators bind their operands before lower-precedence ones. Multiplication (<code>*</code>) has higher precedence than addition (<code>+</code>), so <code>2 + 3 * 4</code> evaluates as <code>2 + (3 * 4) = 14</code>, not <code>(2 + 3) * 4 = 20</code>. When precedence is ambiguous or the expression is complex, use parentheses <code>()</code> to make the intended order explicit — this is both correct practice and good communication.
                    </p>

                    <div className="mt-16 mb-8 pt-8 border-t border-gray-800/60">
                        <h4 className="text-2xl sm:text-3xl font-black text-white mb-6">Interactive Precedence Evaluator</h4>
                        <p className="text-gray-400 mb-8 font-medium">Use the evaluator engine to visually break down how logic flows through JavaScript contexts and operator precedences.</p>
                        <JsExpressionsSimulator />
                    </div>

                </Section>

                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <p className="text-[10px] sm:text-xs font-black text-amber-500/50 uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-8 sm:mb-12">
                        Module 2 Complete • TechSpread Curriculum
                    </p>

                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript/operators" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">Operators</span>
                            </div>
                        </Link>

                        <div className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0c10] border border-gray-800 w-full sm:w-auto order-1 sm:order-2 opacity-50 cursor-not-allowed">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Course Complete (For Now)</span>
                                <span className="text-gray-400 font-bold text-xs sm:text-sm">More modules coming soon...</span>
                            </div>
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-600 flex items-center justify-center border border-gray-800">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </article>
    );
};

export default Expressions;
