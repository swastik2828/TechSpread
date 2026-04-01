import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Key, Lightbulb, AlertTriangle, ArrowRight, Code2, GitBranch, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";
import ExecutionSimulator from '../../../../simulators/web/javascript/ExecutionSimulator';

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

const ExecutionContext = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="Execution Context & Scope | JavaScript Module 4"
                description="Master JavaScript under the hood: Execution Contexts, Memory Creation Phase, Hoisting, and the Variable Environment."
                keywords="javascript execution context, js hoisting visually, creation phase execution phase, variable environment, javascript scope, javascript engine v8"
                url="/webdevelopment/javascript/execution-context"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-amber-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                        <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 4.5: Context Under The Hood</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        Execution <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-orange-500">Context.</span>
                    </h1>
                </motion.div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">

                <p className="text-lg sm:text-xl font-medium text-white p-6 bg-[#0d1117] border border-gray-800/60 rounded-2xl mb-12">
                    To truly master JavaScript, you must look past the syntax and understand how the JavaScript Engine (like Google's V8 Engine in Chrome or Node.js) interprets your code. The engine does not simply read your script top-to-bottom in one go. Instead, it sets up an environment—a container—for your code to run in. This invisible container is called the <strong>Execution Context</strong>.
                </p>

                <Section title="4.5 Function Scope & Closures" icon={Code2} id="scope">
                    <p className="mb-4">
                        Every function call creates a new, completely isolated and private <strong>scope</strong> — essentially a temporary namespace where the function's internal local variables actually live. Variables properly declared inside a function definitively remain invisible from the outside global environment.
                    </p>
                    <p className="mb-4">
                        When the function finishes its execution and hits a <code>return</code> statement (or reaches the end of its block), it is popped off the Call Stack. At this exact moment, its local variables are normally marked for deletion by the JavaScript Engine's Garbage Collector. This process automatically frees up allocated memory, keeping your application fast and efficient.
                    </p>
                    <p className="mb-4">
                        However, there is one major exception to this garbage collection rule. If a function returns <em>another</em> function (or passes an inner function elsewhere as a callback), that inner function retains a live "memory link" to the outer function's scope. It remembers the variables that existed when it was born. This retained reference is called a <strong>Closure</strong> — the inner function 'closes over' the outer variables, preventing them from being deleted. We explore closures deeply in Module 6, but awareness of this mechanism is foundational for understanding how Execution Contexts manage memory.
                    </p>
                </Section>

                <Section title="4.6 The Execution Context Mechanism" icon={Terminal} id="execution-context">
                    <p className="mb-4">
                        When JavaScript begins executing any code, it immediately creates an internal data structure called the <strong>Global Execution Context (GEC)</strong>. This context is the baseline runtime environment. In a browser, the GEC creates the <code>window</code> object and sets the global <code>this</code> keyword to point to it. 
                    </p>
                    <p className="mb-4">
                        Every single time you invoke a function, the engine creates a brand new, secondary container called a <strong>Function Execution Context (FEC)</strong>. Understanding how these Execution Contexts are built is the master key to unlocking JavaScript. It logically explains seemingly bizarre behaviors like "hoisting" and provides the exact mental model needed to understand the Call Stack and variable scoping.
                    </p>
                    <p className="mb-4">
                        Every Execution Context is created in two very distinct phases: The <strong>Creation Phase</strong> and the <strong>Execution Phase</strong>. Let's break them down.
                    </p>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#fbbf24] mt-12 sm:mt-16 mb-4">
                        Step 1: The Creation Phase (Memory Allocation)
                    </h3>
                    <p className="mb-4">
                        Before the literal first line of code in a context actually executes, JavaScript performs a setup pass called the Creation Phase. The engine quickly scans through your code to find all of your variable and function declarations. It then allocates memory space for them inside a structure called the Variable Environment.
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li><strong>var variables:</strong> The engine finds variables declared with <code>var</code>, creates a memory slot for them, and immediately initializes them with the value of <code>undefined</code>.</li>
                        <li><strong>function declarations:</strong> The engine finds standard <code>function</code> declarations and places their <em>entire body of code</em> directly into memory. They are fully ready to be used before the code even starts running.</li>
                        <li><strong>let and const:</strong> Variables declared with modern ES6 syntax are recorded in memory, but they are NOT initialized with <code>undefined</code>. Instead, they are placed in a state known as the <strong>Temporal Dead Zone (TDZ)</strong>. If you try to access them before their actual line of code, the engine will throw a ReferenceError.</li>
                    </ul>
                    <p className="mb-4">
                        This creation-phase scanning is the true mechanism behind what developers colloquially call <strong>hoisting</strong>. Beginners often think "hoisting" means JavaScript literally moves code to the top of the file. Nothing actually physically moves in your source code. The declarations are simply processed and stored in memory during this Phase 1 setup, which makes them available earlier than they literally appear on your screen.
                    </p>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#38bdf8] mt-12 sm:mt-16 mb-4">
                        Step 2: The Code Execution Phase
                    </h3>
                    <p className="mb-4">
                        Once the creation phase completes and the memory environment is fully set up, the Execution Phase finally begins. Now, the JavaScript engine reads your code line-by-line, from top to bottom.
                    </p>
                    <p className="mb-4">
                        During this phase, real values are assigned to the <code>undefined</code> placeholders that were set up in the Creation Phase. Mathematical expressions are evaluated, API calls are made, and function invocations are executed. When the engine encounters a function call during this phase, it immediately pauses the current execution, generates a brand new Function Execution Context, and starts the exact same two-step process (Creation, then Execution) for that new function.
                    </p>

                    <HighlightBox title="Tracing the 2 Phases Deeply" type="tip">
                        Let's trace exactly how the engine processes a simple script to see Hoisting and Execution in action:
                        <br/><br/>
                        <strong>The Code:</strong>
                        <div className="mt-4 mb-4">
                            <CodeBlock 
                                language="javascript"
                                title="hoisting-trace.js"
                                code={`console.log(message); // What happens here?
var message = 'Hello World!';

greet(); // Function is called before it is written!
function greet() {
  console.log('Running greet!');
}`}
                            />
                        </div>
                        
                        <strong>1. Memory Creation Phase (The invisible setup):</strong><br/>
                        The engine scans the file. It sees <code>var message</code>, so it creates memory for it and sets it to <code>message: undefined</code>. Next, it sees <code>function greet()</code>. It takes the entire function block and securely stores it in memory. Phase 1 is complete. No code has been executed yet.
                        <br/><br/>
                        
                        <strong>2. Execution Phase (Running top-down):</strong><br/>
                        The engine starts at line 1: <code>console.log(message)</code>. It checks its memory and finds <code>message</code> currently holds the value <code>undefined</code>. It prints <code>undefined</code> to the console without crashing.<br/><br/>
                        
                        Next, it hits line 2: <code>message = 'Hello World!'</code>. The engine updates the memory slot, replacing <code>undefined</code> with the actual string.<br/><br/>
                        
                        Finally, it hits line 4: <code>greet()</code>. The engine checks memory, finds the fully formed function waiting there, creates a new Execution Context for it, and successfully runs the code inside, printing <code>Running greet!</code>.
                    </HighlightBox>

                    <div className="mt-16 mb-8 pt-8 border-t border-gray-800/60">
                        <h4 className="text-2xl sm:text-3xl font-black text-white mb-4">Interactive Context Simulator</h4>
                        <p className="text-gray-400 mb-8">
                            Use the interactive simulator below to step through code block by block. Watch how the Global Execution Context maps variables to <code>undefined</code> during the Creation Phase, and how real values are assigned during the Execution Phase.
                        </p>
                        <ExecutionSimulator />
                    </div>
                </Section>
                
                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript/arrow-functions" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">Arrow Functions</span>
                            </div>
                        </Link>

                        <Link to="/webdevelopment/javascript/call-stack" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.1)] transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block group-hover:text-amber-500/80 transition-colors">Up Next</span>
                                <span className="text-gray-200 font-bold text-xs sm:text-sm group-hover:text-white transition-colors">The Call Stack</span>
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

export default ExecutionContext;