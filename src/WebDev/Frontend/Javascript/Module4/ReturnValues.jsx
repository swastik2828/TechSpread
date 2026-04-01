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

const ReturnValues = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="Return Values | JavaScript Module 4"
                description="Understand JavaScript Return values, function termination, implicit undefined returns, eager early return patterns, and standard guard clauses."
                keywords="javascript return values, early return pattern, guard clauses, implicit return undefined"
                url="/webdevelopment/javascript/return-values"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-amber-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                        <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 4.3: Outputs</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        Return <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-orange-500">Values.</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light px-4">
                        Functions without usable output are just procedures. Discover how to cleanly terminate execution and return payloads back to your application.
                    </p>
                </motion.div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">

                <p className="text-lg sm:text-xl font-medium text-white p-6 bg-[#0d1117] border border-gray-800/60 rounded-2xl mb-12">
                    In previous lessons, we explored how to pass data into a function using parameters. Now, we must examine how to get processed data back out. The <code>return</code> statement is the mechanism JavaScript uses to explicitly pass a value from the inside of a function's private scope back out to the global scope or to the code that called the function.
                </p>

                <Section title="Function Termination" icon={Terminal} id="return-values">
                    <p className="mb-4">
                        The explicitly stated <code>return</code> keyword serves two distinct, equally important purposes. First, it specifies the exact physical value the function produces. Second, and crucially, it <strong>immediately terminates the current function's execution pipeline.</strong> 
                    </p>
                    <p className="mb-4">
                        Because <code>return</code> permanently and instantly exits the code block, absolutely any code written after a return statement in the exact same execution branch becomes completely unreachable. The JavaScript engine will literally never see it. Most modern code editors will actually gray out any code written below a return statement to warn you that it is "dead code."
                    </p>

                    <HighlightBox title="The Implicit Undefined" type="warn">
                        What happens if you forget to write a return statement? JavaScript does not throw an error. Instead, if a function reaches the closing curly brace <code>&#125;</code> without encountering a `return` keyword, the engine quietly forces it to <strong>implicitly return <code>undefined</code>.</strong>
                        <br/><br/>
                        This is perfectly fine for functions that exist purely to create "side effects" (like a function that just modifies an HTML element or logs a message to the console). However, if you write a mathematical function, forget the return statement, and try to save the result to a variable, you will inject <code>undefined</code> into your application logic, often causing cascading NaN (Not a Number) bugs down the line.
                    </HighlightBox>

                    <CodeBlock
                        title="terminating-functions.js"
                        language="javascript"
                        code={`// 1. Explicit Return
function add(a, b) {
  return a + b;
  // This console.log is DEAD CODE. It will never run.
  console.log("I will never see the light of day"); 
}

const sum = add(5, 5); // sum is exactly 10

// 2. Implicit Return (No return keyword)
function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
  // Reaches the end of the block. Returns undefined.
}

const result = changeBackgroundColor('blue'); 
console.log(result); // Output: undefined`}
                    />

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#38bdf8] mt-12 sm:mt-16 mb-4">
                        What Can You Return?
                    </h3>
                    <p className="mb-4">
                        JavaScript is entirely unopinionated about what kind of payload a function can return. You can return any valid JavaScript value. This includes basic primitives (strings, numbers, booleans), highly nested abstract Objects, massive mapping Arrays, unresolved background Promises, or even completely other functions (a concept we will explore in the Closures module).
                    </p>
                </Section>

                <Section title="The Guard Clause Pattern" icon={GitBranch} id="guard-clause">
                    <p className="mb-4">
                        Because the <code>return</code> keyword instantly stops a function from executing, developers can leverage it to create cleaner, more readable code architecture. The most famous example of this is the <strong>Guard Clause</strong> (also known as the "Early Return" pattern).
                    </p>
                    <p className="mb-4">
                        When writing complex logic, beginners often start by writing a massive <code>if</code> statement to check if everything is correct, and then they place their entire application logic inside that `if` block. If they need to check a second condition, they nest another `if` statement inside the first one. This creates a diagonal wedge of code often mockingly referred to as the <strong>"Pyramid of Doom."</strong> Nested code is notoriously difficult to read, test, and maintain.
                    </p>
                    <p className="mb-4">
                        The Guard Clause pattern completely inverts this logic. Instead of nesting code to see if conditions are "good", you check if conditions are "bad" at the very top of the function. If a bad condition is met (like a missing user ID or a negative bank balance), you immediately hit a `return` statement to cancel the function.
                    </p>
                    <p className="mb-4">
                        By doing this, your main execution logic never needs to be wrapped in an `if` block at all. It can sit flatly at the bottom of the function, safe in the knowledge that if the engine reaches that line, all the "guards" at the top of the file have been successfully passed.
                    </p>

                    <HighlightBox title="Refactoring the Pyramid of Doom" type="note">
                        Compare the two functions below. They both accomplish the exact same goal, but the Guard Clause version is dramatically easier to read because the "happy path" (the actual main logic) is flat and not buried three levels deep inside curly braces.
                    </HighlightBox>

                    <CodeBlock
                        title="guard-clause.js"
                        language="javascript"
                        code={`// ❌ THE PYRAMID OF DOOM (Deeply Nested & Hard to Read)
function processPayment(user, amount) {
  if (user !== null) {
    if (user.hasValidCard) {
      if (amount > 0) {
        // Main logic is nested 3 levels deep!
        chargeCard(user, amount);
        return true;
      } else {
        return false; // Amount error
      }
    } else {
      return false; // Card error
    }
  } else {
    return false; // User error
  }
}
 
// ✅ THE STUNNING GUARD CLAUSE (Clean, Flat, Modern)
function processPayment(user, amount) {
  // 1. The Guards: Invert the checks! Return early if things are bad.
  if (!user) return false;
  if (!user.hasValidCard) return false;
  if (amount <= 0) return false;
  
  // 2. The Main Logic: Stays perfectly flat at the bottom!
  // If we reach this line, we mathematically KNOW the user is valid.
  chargeCard(user, amount);
  return true;
}`}
                    />
                </Section>
                
                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript/parameters" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">Parameters & Args</span>
                            </div>
                        </Link>

                        <Link to="/webdevelopment/javascript/arrow-functions" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.1)] transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block group-hover:text-amber-500/80 transition-colors">Up Next</span>
                                <span className="text-gray-200 font-bold text-xs sm:text-sm group-hover:text-white transition-colors">Arrow Functions</span>
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

export default ReturnValues;