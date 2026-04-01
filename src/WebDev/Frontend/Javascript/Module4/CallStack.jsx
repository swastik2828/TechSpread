import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Key, Lightbulb, AlertTriangle, ArrowRight, Code2, GitBranch, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";
import CallStackSimulator from '../../../../simulators/web/javascript/CallStackSimulator';

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

const CallStack = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="The Call Stack & Synchrony | JavaScript Module 4"
                description="Understand the JavaScript Call Stack, single-threaded execution, the LIFO principle, and recursion stack overflow crashes explicitly."
                keywords="javascript call stack, LIFO principle, call stack visualizer, js recursion crash, javascript engine event loop"
                url="/webdevelopment/javascript/call-stack"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-amber-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                        <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 4.7: Single-Thread Architecture</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        The Call <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-orange-500">Stack.</span>
                    </h1>
                </motion.div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">

                <p className="text-lg sm:text-xl font-medium text-white p-6 bg-[#0d1117] border border-gray-800/60 rounded-2xl mb-12">
                    JavaScript is fundamentally a <strong>single-threaded</strong> programming language. This means it has exactly one Call Stack and one Memory Heap. Because it has only one call stack, it can only execute one piece of code at a time. The Call Stack is the internal data structure that the JavaScript engine uses to keep track of its place in a script that calls multiple functions. It acts as a precise itinerary, ensuring the engine knows exactly which function is currently running, and which functions are waiting to be executed next.
                </p>

                <Section title="The Mechanics of the Call Stack" icon={GitBranch} id="call-stack">
                    <p className="mb-4">
                        The Call Stack operates on a strict computer science principle known as <strong>LIFO: Last In, First Out</strong>. The easiest way to conceptualize LIFO is to imagine a physical stack of heavy dinner plates. When you wash a plate, you place it on top of the stack (pushing). When you need a plate for dinner, you take the one off the very top (popping). You cannot magically extract a plate from the bottom or the middle without knocking the entire stack over.
                    </p>
                    <p className="mb-4">
                        JavaScript treats function calls exactly like these plates. When a function is invoked, an <em>Execution Context</em> is created for it and dropped onto the top of the stack. If that function calls another function inside of it, that new function is placed on top of the first one. The engine will always prioritize and execute the function sitting at the absolute top of the stack. Once a function hits its <code>return</code> statement (or naturally reaches the end of its block), it is popped off the stack, and the engine resumes executing the function that was waiting directly beneath it.
                    </p>

                    <HighlightBox title="Tracing the Stack" type="note">
                        To truly understand the Call Stack, you must learn to read code not just top-to-bottom, but from the inside out. Let's look at a sequence of nested function calls to see how the stack grows and shrinks in real-time.
                    </HighlightBox>

                    <CodeBlock
                        title="stack-trace.js"
                        language="javascript"
                        code={`function multiply(x, y) {
  return x * y;
}

function calculateSquare(n) {
  const result = multiply(n, n);
  return result;
}

function printSquare(number) {
  const squared = calculateSquare(number);
  console.log("The square is: " + squared);
}

// Kick off the chain reaction
printSquare(5);`}
                    />
                    
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#38bdf8] mt-12 sm:mt-16 mb-4">
                        Step-by-Step Execution
                    </h3>
                    <p className="mb-4">
                        When the script above runs, the JavaScript engine reads all the function declarations during the creation phase. It does nothing until it reaches the very last line: <code>printSquare(5)</code>. Here is exactly what happens to the Call Stack:
                    </p>
                    <ol className="list-decimal pl-6 space-y-4 mb-8">
                        <li><strong>Push `printSquare()`:</strong> The engine encounters the call to <code>printSquare(5)</code>. It creates an execution context and pushes it onto the empty stack. The engine starts executing the code inside <code>printSquare</code>.</li>
                        <li><strong>Push `calculateSquare()`:</strong> On the first line of <code>printSquare</code>, it sees a call to <code>calculateSquare(5)</code>. The engine immediately pauses <code>printSquare</code>, creates a new context for <code>calculateSquare</code>, and pushes it onto the stack.</li>
                        <li><strong>Push `multiply()`:</strong> Inside <code>calculateSquare</code>, it encounters a call to <code>multiply(5, 5)</code>. Again, it pauses <code>calculateSquare</code> and pushes <code>multiply</code> onto the very top of the stack. The stack is now three levels deep.</li>
                        <li><strong>Pop `multiply()`:</strong> The <code>multiply</code> function simply returns <code>25</code>. Because it has finished, it is popped off the top of the stack. The engine resumes <code>calculateSquare</code> where it left off, passing it the value 25.</li>
                        <li><strong>Pop `calculateSquare()`:</strong> <code>calculateSquare</code> returns the 25 back to its caller. It is then popped off the stack.</li>
                        <li><strong>Push `console.log()`:</strong> <code>printSquare</code> resumes. It now needs to run <code>console.log()</code>. This built-in function is pushed onto the stack, executes, prints the text to the terminal, and is immediately popped off.</li>
                        <li><strong>Pop `printSquare()`:</strong> Reaching the end of its code block, <code>printSquare</code> finishes and is popped off the stack. The stack is empty, and the program concludes.</li>
                    </ol>
                </Section>

                <Section title="Blocking the Main Thread" icon={AlertTriangle} id="blocking">
                    <p className="mb-4">
                        Because JavaScript is single-threaded, the Call Stack acts as a massive bottleneck. If a function is currently executing on the stack, <strong>nothing else can happen</strong>. The browser cannot render visual updates, animations will freeze, and users cannot click buttons or type in input fields. The application effectively appears entirely frozen to the user.
                    </p>
                    <p className="mb-4">
                        When you write slow code—such as an massive mathematical calculation, processing millions of items in an array, or an accidental infinite <code>while</code> loop—you are "blocking the main thread." Modern web applications avoid this by utilizing asynchronous programming (Promises, async/await, and Web APIs) to offload heavy tasks away from the main Call Stack, keeping the user interface smooth and responsive. We will explore this architectural solution in depth in the upcoming Asynchronous JavaScript modules.
                    </p>
                </Section>

                <Section title="Stack Overflow and Runaway Recursion" icon={Code2} id="stack-overflow">
                    <p className="mb-4">
                        The Call Stack does not have infinite physical space. Browsers allocate a strict memory limit to the stack (typically around 10,000 function frames, depending on the specific engine like Google's V8). 
                    </p>
                    <p className="mb-4">
                        A Stack Overflow error occurs when the Call Stack grows too large and exhausts this allocated memory. The most common cause of this crash is runaway recursion. Recursion is a technique where a function calls itself to solve smaller pieces of a complex problem. A properly written recursive function must have a <strong>base case</strong>—a conditional statement that stops the function from calling itself again, allowing the stack to begin popping off. If you forget the base case, the function will push itself onto the stack indefinitely until the environment violently crashes to protect the user's system memory.
                    </p>

                    <HighlightBox title="The Fatal Error" type="warn">
                        If you ever see <code>Uncaught RangeError: Maximum call stack size exceeded</code> in your developer console, you have accidentally created an infinite loop of function calls. The engine successfully killed your program before it could consume all of your computer's RAM.
                    </HighlightBox>

                    <CodeBlock
                        title="recursion-crash.js"
                        language="javascript"
                        code={`// ❌ FATAL ERROR: No base case.
function inception() {
  // The function calls itself forever.
  // The stack goes: inception -> inception -> inception...
  inception(); 
}
inception(); // Throws: Maximum call stack size exceeded


// ✅ CORRECT: Includes a base case to stop the loop.
function countDown(number) {
  console.log(number);
  
  // The Base Case: This stops the recursion!
  if (number <= 0) {
    return "Done!";
  }
  
  // Recursion step
  return countDown(number - 1);
}
countDown(3); // Prints 3, then 2, then 1, then 0, then returns "Done!"`}
                    />
                    
                    <div className="mt-16 mb-8 pt-8 border-t border-gray-800/60">
                        <h4 className="text-2xl sm:text-3xl font-black text-white mb-4">Interactive Call Stack Simulator</h4>
                        <p className="text-gray-400 mb-8">Use the simulator below to visually trace how the JavaScript engine pushes and pops Execution Contexts onto the stack during complex nested operations.</p>
                        <CallStackSimulator />
                    </div>
                </Section>
                
                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript/execution-context" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">Execution Context</span>
                            </div>
                        </Link>

                        <Link to="/webdevelopment/javascript" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.1)] transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block group-hover:text-amber-500/80 transition-colors">Course Home</span>
                                <span className="text-gray-200 font-bold text-xs sm:text-sm group-hover:text-white transition-colors">Javascript Basics</span>
                            </div>
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-amber-400 group-hover:bg-amber-500/10 flex items-center justify-center border border-gray-800 group-hover:border-amber-500/30 transition-all duration-300">
                                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </article>
    );
};

export default CallStack;