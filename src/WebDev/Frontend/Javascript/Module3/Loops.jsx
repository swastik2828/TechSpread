import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Key, Lightbulb, AlertTriangle, ArrowRight, Code2, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";
import JsLoopsSimulator from "../../../../simulators/web/js/JsLoopsSimulator";

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
        key:  { icon: Key,           color: "text-amber-400",   border: "border-amber-500/40",   bg: "bg-gradient-to-br from-amber-900/40 to-yellow-900/10",   heading: "text-amber-500",  shadow: "shadow-amber-500/10"  },
        note: { icon: BookOpen,      color: "text-sky-400",     border: "border-sky-500/40",     bg: "bg-gradient-to-br from-sky-900/40 to-blue-900/10",       heading: "text-sky-400",    shadow: "shadow-sky-500/10"    },
        tip:  { icon: Lightbulb,     color: "text-emerald-400", border: "border-emerald-500/40", bg: "bg-gradient-to-br from-emerald-900/40 to-green-900/10",   heading: "text-emerald-400",shadow: "shadow-emerald-500/10"},
        warn: { icon: AlertTriangle, color: "text-rose-400",    border: "border-rose-500/40",    bg: "bg-gradient-to-br from-rose-900/40 to-red-900/10",       heading: "text-rose-500",   shadow: "shadow-rose-500/10"   },
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

const LoopCard = ({ label, color, description, useCase }) => (
    <div className={`p-5 rounded-2xl border bg-[#0a0c10] hover:-translate-y-0.5 transition-transform duration-200 ${color}`}>
        <code className="font-mono text-sm font-black block mb-2">{label}</code>
        <p className="text-gray-400 text-sm leading-relaxed mb-2">{description}</p>
        <p className="text-xs text-gray-600 italic">Best for: {useCase}</p>
    </div>
);

const Loops = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="Loops in JavaScript (for, while, for...of, for...in) | Module 3.3"
                description="Learn every JavaScript loop: for, while, do...while, for...of, and for...in. Understand when to use each loop type with interactive examples."
                keywords="javascript loops, for loop javascript, while loop, for of loop, for in loop, do while javascript"
                url="/webdevelopment/javascript/loops"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-amber-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                        <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 3.3: Loops</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        JavaScript <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-orange-500">Loops.</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light px-4">
                        Loops execute code repeatedly. From collections to conditions, each loop type is designed for a specific use case.
                    </p>
                </motion.div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">

                <Section title="3.3 Loops" icon={RefreshCw} id="loops">
                    <p className="text-lg sm:text-xl font-medium text-white p-6 bg-[#0d1117] border border-gray-800/60 rounded-2xl">
                        Loops execute a block of code repeatedly. They are essential for processing collections, repeating actions a fixed number of times, iterating until a condition changes, and traversing data structures. JavaScript provides a variety of loop constructs, each optimised for a different use case.
                    </p>

                    {/* Quick Reference */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
                        <LoopCard label="for" color="border-amber-900/50 text-amber-400" description="All mechanics in the header: init, condition, update." useCase="known iteration count, index control" />
                        <LoopCard label="while" color="border-sky-900/50 text-sky-400" description="Condition checked before each iteration." useCase="unknown iteration count, condition-driven" />
                        <LoopCard label="do...while" color="border-violet-900/50 text-violet-400" description="Body runs first, condition checked after." useCase="execute at least once" />
                        <LoopCard label="for...of" color="border-emerald-900/50 text-emerald-400" description="Iterates values of any iterable." useCase="arrays, strings, Maps, Sets" />
                        <LoopCard label="for...in" color="border-rose-900/50 text-rose-400" description="Iterates enumerable keys of an object." useCase="plain objects only" />
                    </div>

                    {/* for */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#fbbf24] mt-12 sm:mt-16 mb-4">
                        for — Classic Index-Driven Loop
                    </h3>
                    <p className="mb-6">
                        The classic <code>for</code> loop places all loop mechanics — initialiser, condition, update — in a single, compact header, making the loop's structure immediately visible to any reader. It is ideal when you know the number of iterations in advance or need precise control over the loop variable (skipping elements, iterating backwards, stepping by more than one).
                    </p>
                    <CodeBlock
                        title="for-loop.js"
                        language="javascript"
                        code={`// Standard forward loop
const fruits = ['apple', 'banana', 'cherry'];
for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}

// Reverse iteration
for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);  // cherry, banana, apple
}

// Step by 2
for (let i = 0; i < 10; i += 2) {
  console.log(i); // 0, 2, 4, 6, 8
}`}
                    />

                    {/* while */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#38bdf8] mt-12 sm:mt-16 mb-4">
                        while — Condition-Driven Loop
                    </h3>
                    <p className="mb-6">
                        A <code>while</code> loop evaluates its condition <em>before</em> each iteration and continues as long as it is truthy. It is the correct choice when the number of iterations is not known in advance and depends on state that changes during execution. Be careful to ensure the condition can eventually become false — an invariant condition creates an infinite loop.
                    </p>
                    <CodeBlock
                        title="while-loop.js"
                        language="javascript"
                        code={`// Process items until queue is empty
const queue = ['task1', 'task2', 'task3'];
while (queue.length > 0) {
  const task = queue.shift();
  console.log('Processing:', task);
}

// Collatz conjecture — unknown iteration count
function collatzSteps(n) {
  let steps = 0;
  while (n !== 1) {
    n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    steps++;
  }
  return steps;
}`}
                    />

                    {/* do...while */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#a78bfa] mt-12 sm:mt-16 mb-4">
                        do...while — Execute-First Loop
                    </h3>
                    <p className="mb-6">
                        <code>do...while</code> is structurally identical to <code>while</code>, but the condition is evaluated <em>after</em> each iteration instead of before. This guarantees the loop body runs at least once, even if the condition is immediately false. Most useful for user interaction patterns — show a prompt, then check if input was valid.
                    </p>
                    <CodeBlock
                        title="do-while-loop.js"
                        language="javascript"
                        code={`// Prompt user until valid input is received
let input;
do {
  input = prompt('Enter a number between 1 and 10:');
} while (input < 1 || input > 10);

// Always executes at least once — even if condition is false immediately
let count = 10;
do {
  console.log('This runs once');  // ← runs even though count >= 5
  count++;
} while (count < 5);`}
                    />

                    {/* for...of */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#34d399] mt-12 sm:mt-16 mb-4">
                        for...of — Value Iteration
                    </h3>
                    <p className="mb-6">
                        Introduced in ES6, <code>for...of</code> iterates over the <strong>values</strong> of any iterable object. Arrays, strings, Maps, Sets, generators, and any object implementing the iterable protocol can be iterated with <code>for...of</code>. It is the modern, idiomatic way to loop over arrays because it is clean, terse, and works with any iterable without caring about indices.
                    </p>
                    <CodeBlock
                        title="for-of-loop.js"
                        language="javascript"
                        code={`// Arrays
const nums = [10, 20, 30];
for (const num of nums) console.log(num);  // 10, 20, 30

// Strings (iterates characters)
for (const char of 'JS') console.log(char); // 'J', 'S'

// Maps
const map = new Map([['a', 1], ['b', 2]]);
for (const [key, val] of map) console.log(key, val);

// Sets
const unique = new Set([1, 2, 3, 2, 1]);
for (const item of unique) console.log(item); // 1, 2, 3`}
                    />

                    {/* for...in */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#f87171] mt-12 sm:mt-16 mb-4">
                        for...in — Key Iteration
                    </h3>
                    <p className="mb-4">
                        <code>for...in</code> iterates over the <strong>enumerable string property keys</strong> of an object, including inherited enumerable properties. It is intended for plain objects when you need to inspect their keys.
                    </p>
                    <p className="mb-6">
                        Using it on arrays is <strong className="text-rose-400">generally discouraged</strong> because it enumerates string index keys (<code>'0'</code>, <code>'1'</code>, <code>'2'</code>) and any enumerable properties added to <code>Array.prototype</code> by libraries, and does not guarantee iteration order.
                    </p>
                    <CodeBlock
                        title="for-in-loop.js"
                        language="javascript"
                        code={`// Correct use — plain objects
const user = { name: 'Alice', age: 25, role: 'dev' };
for (const key in user) {
  console.log(\`\${key}: \${user[key]}\`);
}
// Output: name: Alice, age: 25, role: dev

// ⚠ Avoid on arrays — use for...of instead
const arr = [10, 20, 30];
for (const key in arr) {
  console.log(key);    // '0', '1', '2' — string keys, not values!
}

// ✓ Use Object.keys/values/entries for safer object iteration
for (const [key, val] of Object.entries(user)) {
  console.log(key, val);
}`}
                    />

                    <HighlightBox title="Choosing the Right Loop" type="tip">
                        {'• Known iterations / index control → for\n• Unknown iterations / condition-based → while\n• Must run at least once → do...while\n• Iterating values (arrays, strings, Sets, Maps) → for...of\n• Iterating keys of a plain object → for...in'}
                    </HighlightBox>

                    <div className="mt-16 mb-8 pt-8 border-t border-gray-800/60">
                        <h4 className="text-2xl sm:text-3xl font-black text-white mb-4">Interactive Loop Visualizer</h4>
                        <p className="text-gray-400 mb-8 font-medium">
                            Select a loop type, adjust the iteration count, and press <strong className="text-amber-400">Run</strong> to animate each iteration. Observe how each loop type produces its output differently.
                        </p>
                        <JsLoopsSimulator />
                    </div>

                </Section>

                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript/truthy-falsy" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">Truthy & Falsy Values</span>
                            </div>
                        </Link>

                        <Link to="/webdevelopment/javascript/break-continue" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.1)] transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block group-hover:text-amber-500/80 transition-colors">Up Next</span>
                                <span className="text-gray-200 font-bold text-xs sm:text-sm group-hover:text-white transition-colors">break, continue & Labels</span>
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

export default Loops;
