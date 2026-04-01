import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Key, Lightbulb, AlertTriangle, ArrowRight, Code2, GitBranch, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";

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

const FunctionDeclarations = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="Function Declarations vs Expressions | JavaScript Module 4"
                description="Functions are the primary unit of abstraction, organisation, and reuse in JavaScript. Discover exactly how declaring them alters execution."
                keywords="javascript function declaration, function expression, javascript hoisting, first class citizens"
                url="/webdevelopment/javascript/functions"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-amber-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                        <GitBranch className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 4.1: Function Basics</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        Function <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-orange-500">Creation.</span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light px-4">
                        Mastering the fundamental ways we define executable logic structures in JavaScript memory.
                    </p>
                </motion.div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">

                <p className="text-lg sm:text-xl font-medium text-white p-6 bg-[#0d1117] border border-gray-800/60 rounded-2xl mb-12">
                    Functions are the absolute primary unit of abstraction, organisation, and logic reuse in JavaScript. In this language, functions are treated as <strong>First-Class Citizens</strong>. This is a computer science term meaning that functions are treated exactly like any other value or object. You can assign a function to a variable, store it in an array, pass it as an argument into another function (a callback), or even return a function from another function. Understanding the syntax forms we use to create them is the first step to mastering JavaScript architecture.
                </p>

                <Section title="Declarations vs Expressions" icon={Code2} id="declarations-expressions">
                    <p className="mb-4">
                        JavaScript offers multiple syntactic forms for defining functions. The two primary traditional forms — <strong>Function Declarations</strong> and <strong>Function Expressions</strong> — might look incredibly similar at first glance, but they differ in crucial ways. These differences directly affect precisely <em>when</em> the function becomes available in the engine's memory, how it interacts with the Call Stack, and how you are allowed to name and reference it.
                    </p>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#fbbf24] mt-12 sm:mt-16 mb-4">
                        Function Declarations & Hoisting
                    </h3>
                    <p className="mb-4">
                        A function declaration creates a named function using the <code>function</code> keyword strictly as the very first token of a statement. It is the most standard, recognizable way to write a function across many programming languages.
                    </p>
                    <p className="mb-4">
                        The superpower of Function Declarations is that they are <strong>hoisted entirely</strong>. As we learned in the Execution Context module, before your code actually runs, the JavaScript engine performs a Creation Phase setup. During this setup, it finds all function declarations and loads their <em>entire</em> code block into memory immediately. 
                    </p>
                    <p className="mb-4">
                        This means you can legitimately call a declared function lines, or even entire files, before the line where it actually appears in your source code. This hoisting behaviour drastically improves code readability for large files. It allows developers to write "high-level orchestration" code at the very top of a file, while burying the granular, messy helper functions at the bottom. The reader immediately sees the high-level flow of what the file does, with the implementation details cleanly deferred until later.
                    </p>

                    <HighlightBox title="The Parser Rule: How JS Knows the Difference" type="note">
                        How does the JavaScript engine quickly decide if your code is a Declaration or an Expression? It follows a very simple syntactic grammar rule: 
                        <br/><br/>
                        If the very first word in a code statement is the <code>function</code> keyword, the engine evaluates it as a <strong>Function Declaration</strong>. If the <code>function</code> keyword appears anywhere else—such as on the right side of an equals sign <code>=</code>, or wrapped inside parentheses <code>()</code>—it is evaluated as a <strong>Function Expression</strong>.
                    </HighlightBox>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#38bdf8] mt-12 sm:mt-16 mb-4">
                        Function Expressions & The Temporal Dead Zone
                    </h3>
                    <p className="mb-4">
                        A function expression does not stand alone. Instead, it creates a function and assigns it directly to a variable as a value. Because it is tied to a variable (declared with <code>var</code>, <code>let</code>, or <code>const</code>), it is bound by the specific hoisting rules of that variable type, rather than the hoisting rules of a function.
                    </p>
                    <p className="mb-4">
                        If you assign a function expression to a <code>const</code> or <code>let</code> variable, the variable name is hoisted, but it is placed in the <strong>Temporal Dead Zone (TDZ)</strong> until the engine explicitly reads that line of code during the Execution Phase. If you try to execute the function before its line of assignment, your application will crash with a Reference Error. 
                    </p>
                    <p className="mb-4">
                        Function expressions enforce a strict top-down coding style. Because they are not available until their specific assignment line executes, you must define the function before you are allowed to use it. Many modern development teams prefer this pattern because it prevents the confusion of functions being called magically out of thin air.
                    </p>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#a78bfa] mt-12 sm:mt-16 mb-4">
                        Anonymous vs. Named Expressions
                    </h3>
                    <p className="mb-4">
                        When you write a Function Expression, the function itself is typically <strong>anonymous</strong>—meaning there is no name written directly after the <code>function</code> keyword. The engine infers its identity based on the variable you assigned it to.
                    </p>
                    <p className="mb-4">
                        However, you can also write <strong>Named Function Expressions</strong>. By adding a name after the function keyword, you create an internal identifier that is tightly scoped *only* to the function's own internal body. It is completely invisible to the outside world. Why do this? First, it enables reliable recursion (a function calling itself) without relying on the outer variable name, which could potentially be reassigned and break the loop. Second, if your code throws an error, a named expression will show up clearly in your browser's error stack trace, making debugging significantly easier than trying to track down an "anonymous" function crash.
                    </p>

                    <CodeBlock
                        title="function-forms.js"
                        language="javascript"
                        code={`// 1. Function Declaration
// Completely hoisted. We can successfully call it before it is defined!
const taxResult = calculateTax(50000); 

function calculateTax(income) {
  const RATE = 0.20;
  return income * RATE;
}
 
// 2. Anonymous Function Expression (using const)
// The variable is in the Temporal Dead Zone. 
// Calling formatCurrency() up here would result in a fatal ReferenceError!
const formatCurrency = function(amount, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency', currency
  }).format(amount);
};
 
// 3. Named Function Expression
// 'mathFactorial' is the internal name, isolated to the function body.
const factorial = function mathFactorial(n) {
  // It securely references itself using its internal name for recursion
  return n <= 1 ? 1 : n * mathFactorial(n - 1);
};

// You call it via the variable name:
console.log(factorial(5)); // 120
// console.log(mathFactorial(5)); // ReferenceError: mathFactorial is not defined`}
                    />
                </Section>
                
                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript/clean-conditions" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">Clean Conditions</span>
                            </div>
                        </Link>

                        <Link to="/webdevelopment/javascript/parameters" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.1)] transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block group-hover:text-amber-500/80 transition-colors">Up Next</span>
                                <span className="text-gray-200 font-bold text-xs sm:text-sm group-hover:text-white transition-colors">Parameters & Arguments</span>
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

export default FunctionDeclarations;