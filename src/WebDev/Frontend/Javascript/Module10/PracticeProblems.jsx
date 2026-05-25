import React from 'react';
import { BookOpen, Key, Lightbulb, AlertTriangle, ArrowRight, Compass, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";

const Section = ({ title, icon: Icon, children, id }) => (
    <section id={id} className="relative mb-16 sm:mb-24 scroll-mt-28">
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full">
            <div className="p-2 sm:p-3 md:p-4 bg-gradient-to-br from-yellow-500/20 to-yellow-500/20 rounded-xl sm:rounded-2xl border border-yellow-500/40 text-yellow-500 shadow-[0_0_30px_rgba(168,85,247,0.15)] flex-shrink-0">
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
        tip: { icon: Lightbulb, color: "text-amber-400", border: "border-yellow-500/40", bg: "bg-gradient-to-br from-emerald-900/40 to-green-900/10", heading: "text-amber-400", shadow: "shadow-yellow-500/10" },
        warn: { icon: AlertTriangle, color: "text-amber-400", border: "border-yellow-500/40", bg: "bg-gradient-to-br from-rose-900/40 to-red-900/10", heading: "text-yellow-500", shadow: "shadow-yellow-500/10" },
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

const PracticeProblems = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="Event Loop Practice Problems | JavaScript Course"
                description="Test your Event Loop knowledge with 5 challenging practice problems, covering chained promises, interleaving queues, and async/await suspension."
                keywords="event loop practice problems, javascript timing questions, predict timing output, javascript promises quiz"
                url="/webdevelopment/javascript/practice-problems"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-yellow-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                
                <div className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                        <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 10.15: Event Loop & Concurrency</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        Event Loop: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-yellow-500">Practice Quiz</span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light px-4">
                        Work through these five problems in order. Predict the printed output sequence inside your mind before revealing the answers!
                    </p>
                </div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">

                <Section title="Problem 1 — Warm Up" icon={HelpCircle} id="prob-1">
                    <CodeBlock 
                        title="warmup.js"
                        language="javascript"
                        code={`setTimeout(() => console.log('A'), 0);
console.log('B');
Promise.resolve().then(() => console.log('C'));
console.log('D');`}
                    />
                    <details className="group border border-gray-800 rounded-xl p-4 bg-[#111] hover:border-yellow-500/30 transition cursor-pointer">
                        <summary className="font-bold text-gray-300 group-open:text-yellow-400 select-none flex justify-between items-center">
                            <span>Reveal Answer</span>
                            <span className="text-xs text-gray-500 group-open:hidden">Click to expand</span>
                        </summary>
                        <div className="mt-4 text-sm text-gray-400 space-y-2 border-t border-gray-800 pt-4">
                            <p className="font-mono text-white font-bold">&gt; B, D, C, A</p>
                            <p><strong>Reasoning:</strong> Synchronous lines execute immediately (logs 'B', 'D'). The Promise resolves instantly and queues 'C' into the Microtask Queue. setTimeout queues 'A' into the Macrotask Queue. Stack empty → Microtask drains ('C') → Macrotask runs ('A').</p>
                        </div>
                    </details>
                </Section>

                <Section title="Problem 2 — Chained Promises" icon={HelpCircle} id="prob-2">
                    <CodeBlock 
                        title="chained-promises.js"
                        language="javascript"
                        code={`Promise.resolve()
  .then(() => { console.log('1'); return 'x'; })
  .then(v => console.log('2', v));

Promise.resolve()
  .then(() => console.log('3'))
  .then(() => console.log('4'));`}
                    />
                    <details className="group border border-gray-800 rounded-xl p-4 bg-[#111] hover:border-yellow-500/30 transition cursor-pointer">
                        <summary className="font-bold text-gray-300 group-open:text-yellow-400 select-none flex justify-between items-center">
                            <span>Reveal Answer</span>
                            <span className="text-xs text-gray-500 group-open:hidden">Click to expand</span>
                        </summary>
                        <div className="mt-4 text-sm text-gray-400 space-y-2 border-t border-gray-800 pt-4">
                            <p className="font-mono text-white font-bold">&gt; 1, 3, 2 x, 4</p>
                            <p><strong>Reasoning:</strong> The two separate promise chains interleave. After the first `.then` block in Chain A finishes, the next chained callback in Chain A is queued behind the already-queued first callback of Chain B. They execute in alternating ticks.</p>
                        </div>
                    </details>
                </Section>

                <Section title="Problem 3 — async/await in a Chain" icon={HelpCircle} id="prob-3">
                    <CodeBlock 
                        title="async-chain.js"
                        language="javascript"
                        code={`async function foo() {
  console.log('foo start');
  await bar();
  console.log('foo end');
}

async function bar() {
  console.log('bar');
}

console.log('start');
foo();
console.log('end');`}
                    />
                    <details className="group border border-gray-800 rounded-xl p-4 bg-[#111] hover:border-yellow-500/30 transition cursor-pointer">
                        <summary className="font-bold text-gray-300 group-open:text-yellow-400 select-none flex justify-between items-center">
                            <span>Reveal Answer</span>
                            <span className="text-xs text-gray-500 group-open:hidden">Click to expand</span>
                        </summary>
                        <div className="mt-4 text-sm text-gray-400 space-y-2 border-t border-gray-800 pt-4">
                            <p className="font-mono text-white font-bold">&gt; start, foo start, bar, end, foo end</p>
                            <p><strong>Reasoning:</strong> `foo` executes synchronously until it hits `await bar()`. `bar` itself runs synchronously, logging 'bar' and returning a resolved promise. The `await` then suspends the remainder of `foo`, letting control return to global context where 'end' logs. Finally, `foo` resumes as a microtask, logging 'foo end'.</p>
                        </div>
                    </details>
                </Section>

                <Section title="Problem 4 — Starvation Check" icon={HelpCircle} id="prob-4">
                    <CodeBlock 
                        title="starvation.js"
                        language="javascript"
                        code={`let count = 0;

function tick() {
  count++;
  if (count < 5) Promise.resolve().then(tick);
  else console.log('done', count);
}

setTimeout(() => console.log('timeout'), 0);
tick();`}
                    />
                    <details className="group border border-gray-800 rounded-xl p-4 bg-[#111] hover:border-yellow-500/30 transition cursor-pointer">
                        <summary className="font-bold text-gray-300 group-open:text-yellow-400 select-none flex justify-between items-center">
                            <span>Reveal Answer</span>
                            <span className="text-xs text-gray-500 group-open:hidden">Click to expand</span>
                        </summary>
                        <div className="mt-4 text-sm text-gray-400 space-y-2 border-t border-gray-800 pt-4">
                            <p className="font-mono text-white font-bold">&gt; done 5, timeout</p>
                            <p><strong>Reasoning:</strong> `tick` schedules a recursive microtask chain of depth 5. The Event Loop refuses to check the macrotask queue (holding the setTimeout callback) until the microtask queue has completely drained, executing all 5 recursive ticks first.</p>
                        </div>
                    </details>
                </Section>

                <Section title="Problem 5 — Advanced Interleaving" icon={HelpCircle} id="prob-5">
                    <CodeBlock 
                        title="interleaving.js"
                        language="javascript"
                        code={`console.log('A');

setTimeout(() => {
  console.log('B');
  Promise.resolve().then(() => console.log('C'));
}, 0);

setTimeout(() => console.log('D'), 0);

Promise.resolve()
  .then(() => console.log('E'))
  .then(() => console.log('F'));

console.log('G');`}
                    />
                    <details className="group border border-gray-800 rounded-xl p-4 bg-[#111] hover:border-yellow-500/30 transition cursor-pointer">
                        <summary className="font-bold text-gray-300 group-open:text-yellow-400 select-none flex justify-between items-center">
                            <span>Reveal Answer</span>
                            <span className="text-xs text-gray-500 group-open:hidden">Click to expand</span>
                        </summary>
                        <div className="mt-4 text-sm text-gray-400 space-y-2 border-t border-gray-800 pt-4">
                            <p className="font-mono text-white font-bold">&gt; A, G, E, F, B, C, D</p>
                            <p><strong>Reasoning:</strong> 
                              <br />1. Sync logs: 'A', 'G'.
                              <br />2. Drains Microtask Queue: 'E', followed by 'F'.
                              <br />3. Pick first Macrotask (setTimeout 1): logs 'B'. Inside it, queues a new microtask 'C'.
                              <br />4. Before picking the next macrotask (setTimeout 2), the loop must drain any new microtasks: logs 'C'.
                              <br />5. Finally picks next Macrotask (setTimeout 2): logs 'D'.
                            </p>
                        </div>
                    </details>
                </Section>

                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <p className="text-xs font-black text-amber-500/40 uppercase tracking-[0.2em] mb-8">Module 10 Complete • TechSpread Curriculum</p>
                    <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-6 max-w-2xl mx-auto sm:ml-0">
                        <Link to="/webdevelopment/javascript/mental-models" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">10.14 Cheat Sheet</span>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </article>
    );
};

export default PracticeProblems;
