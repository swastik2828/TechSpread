import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Key, Lightbulb, AlertTriangle, ArrowRight, Code2, SkipForward } from 'lucide-react';
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

const BreakContinue = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="break, continue & Labeled Statements | JavaScript Module 3.4"
                description="Learn how to use break and continue for fine-grained loop control in JavaScript, and when labeled statements help with nested loops."
                keywords="javascript break, javascript continue, labeled statements javascript, nested loops control flow"
                url="/webdevelopment/javascript/break-continue"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-amber-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                        <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 3.4: break, continue & Labels</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        break <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-orange-500">& continue.</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light px-4">
                        Fine-grained control over loop execution — exit early or skip to the next iteration.
                    </p>
                </motion.div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">

                <Section title="3.4 break, continue & Labeled Statements" icon={SkipForward} id="break-continue">
                    <p className="text-lg sm:text-xl font-medium text-white p-6 bg-[#0d1117] border border-gray-800/60 rounded-2xl">
                        <code>break</code> and <code>continue</code> give you fine-grained control over loop execution. <code>break</code> immediately exits the enclosing loop or switch statement. <code>continue</code> skips the remainder of the current iteration and resumes with the next evaluation of the loop condition.
                    </p>

                    {/* break */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#fbbf24] mt-12 sm:mt-16 mb-4">
                        break — Exit the Loop Early
                    </h3>
                    <p className="mb-6">
                        <code>break</code> immediately terminates the innermost enclosing loop (or <code>switch</code>) and transfers control to the first statement after it. It is commonly used for linear search — stop iterating once you have found what you are looking for rather than processing the remaining items unnecessarily.
                    </p>
                    <CodeBlock
                        title="break-example.js"
                        language="javascript"
                        code={`const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Carol' },
];

// Linear search — stop as soon as target is found
let target = null;
for (const user of users) {
  if (user.id === 2) {
    target = user;
    break;              // ← no need to check remaining users
  }
}
console.log(target); // { id: 2, name: 'Bob' }

// break in a while loop
let count = 0;
while (true) {          // intentional infinite loop
  if (count >= 5) break;
  count++;
}
console.log(count);   // 5`}
                    />

                    {/* continue */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#38bdf8] mt-12 sm:mt-16 mb-4">
                        continue — Skip to the Next Iteration
                    </h3>
                    <p className="mb-6">
                        <code>continue</code> skips the rest of the current iteration's code block and moves immediately to the next loop cycle (re-evaluating the condition for <code>while</code>/<code>do...while</code>, or executing the update expression for <code>for</code>). This is useful for filtering — process only items that meet a condition, skip the rest.
                    </p>
                    <CodeBlock
                        title="continue-example.js"
                        language="javascript"
                        code={`// Skip even numbers — process odd only
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;   // ← skip even numbers
  console.log(i);               // 1, 3, 5, 7, 9
}

// Filter and process — skip invalid items
const readings = [12, -1, 45, null, 8, undefined, 33];
for (const r of readings) {
  if (r == null || r < 0) continue;  // skip bad readings
  console.log('Valid reading:', r);  // 12, 45, 8, 33
}`}
                    />

                    {/* Labeled Statements */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#a78bfa] mt-12 sm:mt-16 mb-4">
                        Labeled Statements
                    </h3>
                    <p className="mb-4">
                        Labeled statements allow <code>break</code> and <code>continue</code> to target an <em>outer</em> loop when dealing with nested loops. A label is an identifier followed by a colon placed before the loop statement. <code>break label</code> exits all loops up to and including the named one.
                    </p>
                    <p className="mb-6">
                        Labeled jumps can make complex nested loop logic clearer, but overuse can obscure control flow. If you find yourself reaching for labels frequently, consider refactoring the nested logic into helper functions instead.
                    </p>
                    <CodeBlock
                        title="labeled-statements.js"
                        language="javascript"
                        code={`// Find first pair that sums to a target
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

outer: for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix[row].length; col++) {
    if (matrix[row][col] === 5) {
      console.log(\`Found at [\${row}][\${col}]\`);
      break outer;   // ← exits BOTH loops, not just inner
    }
  }
}
// Without the label, only the inner loop breaks
// and the outer loop continues to the next row.`}
                    />

                    <HighlightBox title="When to Use break vs continue vs labels" type="note">
                        {'• break: Exit immediately — good for search/early termination\n• continue: Skip an item — good for filtering logic\n• Labels: Targeting outer loops — use sparingly, prefer helper functions for complex nested logic\n\nIf a loop body needs many break/continue statements, the logic may belong in a separate function using early returns instead.'}
                    </HighlightBox>

                    <HighlightBox title="⚠ Infinite Loop Warning" type="warn">
                        Using <code>break</code> to exit a <code>while (true)</code> is a valid pattern — but always ensure the break condition will eventually be reached. An invariant condition combined with no break creates an infinite loop that will freeze your application.
                    </HighlightBox>

                </Section>

                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript/loops" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">Loops</span>
                            </div>
                        </Link>

                        <Link to="/webdevelopment/javascript/clean-conditions" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.1)] transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block group-hover:text-amber-500/80 transition-colors">Up Next</span>
                                <span className="text-gray-200 font-bold text-xs sm:text-sm group-hover:text-white transition-colors">Writing Clean Conditions</span>
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

export default BreakContinue;
