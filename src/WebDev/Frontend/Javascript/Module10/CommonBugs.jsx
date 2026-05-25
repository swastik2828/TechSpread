import React from 'react';
import { BookOpen, Key, Lightbulb, AlertTriangle, ArrowRight, Compass } from 'lucide-react';
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

const CommonBugs = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="Common Async Bugs & Solutions | JavaScript Course"
                description="Explore standard asynchronous bugs in JavaScript, including setState batching, event listeners, setTimeout loops, and forEach Promise traps."
                keywords="javascript async bugs, setstate asynchronous, settimeout loop, foreach async await, unhandled promise rejection"
                url="/webdevelopment/javascript/common-bugs"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-yellow-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                
                <div className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                        <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 10.12: Event Loop & Concurrency</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        Common Bugs: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-yellow-500">Async Traps</span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light px-4">
                        Asynchronous execution flow can be counter-intuitive. Let's examine the five most common async bugs and how the Event Loop explains them.
                    </p>
                </div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">

                <Section title="Bug 1 — State Update Reflection" icon={AlertTriangle} id="bug-1">
                    <CodeBlock 
                        title="setState-bug.js"
                        language="javascript"
                        code={`// React example — buggy
this.setState({ count: 1 });
console.log(this.state.count); // still 0 — why?`}
                    />
                    <HighlightBox title="The Event Loop Reason" type="warn">
                        React batches <code>setState</code> calls and applies them asynchronously (inside a microtask queue or just before next paint). The state has not yet been applied when the next synchronous line of code runs.
                        <br /><br />
                        <strong>Solution:</strong> Use the updater callback form or use a React <code>useEffect</code> hook to react to state changes.
                    </HighlightBox>
                </Section>

                <Section title="Bug 2 — Event Listener Accumulation" icon={AlertTriangle} id="bug-2">
                    <CodeBlock 
                        title="event-listeners-bug.js"
                        language="javascript"
                        code={`function attachListeners() {
  for (let i = 0; i < 5; i++) {
    button.addEventListener('click', () => console.log(i));
  }
}
attachListeners(); // called multiple times`}
                    />
                    <HighlightBox title="The Event Loop Reason" type="warn">
                        Since event listeners are added synchronously and event callbacks are placed onto the macrotask queue when clicked, multiple calls will pile up and fire multiple console logs for a single click.
                        <br /><br />
                        <strong>Solution:</strong> Use <code>{"{ once: true }"}</code> parameter option, or clean up listeners via <code>removeEventListener</code>.
                    </HighlightBox>
                </Section>

                <Section title="Bug 3 — setTimeout in Loops" icon={AlertTriangle} id="bug-3">
                    <CodeBlock 
                        title="simultaneous-timers.js"
                        language="javascript"
                        code={`for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Logs 0, 1, 2, 3, 4 — all at roughly the same time (1 second later)`}
                    />
                    <HighlightBox title="The Event Loop Reason" type="warn">
                        All 5 timers are registered <strong>synchronously</strong> on the call stack in milliseconds. The 1000ms delay countdown finishes at practically the exact same tick.
                        <br /><br />
                        <strong>Solution:</strong> Chain delays sequentially using async/await inside loops.
                    </HighlightBox>
                    <CodeBlock 
                        title="sequential-delays.js"
                        language="javascript"
                        code={`async function delayedLoop() {
  for (let i = 0; i < 5; i++) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(i); // each waits 1s after the previous
  }
}`}
                    />
                </Section>

                <Section title="Bug 4 — Promise inside forEach" icon={AlertTriangle} id="bug-4">
                    <CodeBlock 
                        title="foreach-trap.js"
                        language="javascript"
                        code={`// ❌ This does NOT wait for each fetch to complete!
items.forEach(async (item) => {
  await processItem(item);
});`}
                    />
                    <HighlightBox title="The Event Loop Reason" type="warn">
                        <code>Array.prototype.forEach</code> is a synchronous iterator. It does not await returned Promises from its callback before moving to the next iteration. It fires all tasks concurrently and returns immediately.
                    </HighlightBox>
                    <div className="space-y-4">
                        <p className="text-xs font-bold uppercase text-emerald-400">✅ Solution A: Promise.all with map (Parallel)</p>
                        <CodeBlock 
                            title="parallel-map.js"
                            language="javascript"
                            code={`await Promise.all(items.map(async (item) => {
  await processItem(item);
}));`}
                        />
                        <p className="text-xs font-bold uppercase text-emerald-400">✅ Solution B: for...of Loop (Sequential)</p>
                        <CodeBlock 
                            title="sequential-for-of.js"
                            language="javascript"
                            code={`for (const item of items) {
  await processItem(item);
}`}
                        />
                    </div>
                </Section>

                <Section title="Bug 5 — Unhandled Promise Rejections" icon={AlertTriangle} id="bug-5">
                    <CodeBlock 
                        title="unhandled-promise.js"
                        language="javascript"
                        code={`async function failing() {
  throw new Error('oops');
}

failing(); // ❌ Rejection is unhandled — may crash process in Node.js`}
                    />
                    <HighlightBox title="The Event Loop Reason" type="warn">
                        Promises that reject queue microtask rejections. If the call stack drains and there is no `.catch()` listener registered, this event raises an unhandled error state. In Node.js 15+, unhandled rejections crash the server process by default.
                    </HighlightBox>
                </Section>

                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript/node-differences" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">10.11 Node Differences</span>
                            </div>
                        </Link>

                        <Link to="/webdevelopment/javascript/performance-patterns" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block group-hover:text-yellow-500/80 transition-colors">Up Next</span>
                                <span className="text-gray-200 font-bold text-xs sm:text-sm group-hover:text-white transition-colors">Best Practices</span>
                            </div>
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-amber-400 group-hover:bg-yellow-500/10 flex items-center justify-center border border-gray-800 group-hover:border-yellow-500/30 transition-all duration-300">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </article>
    );
};

export default CommonBugs;
