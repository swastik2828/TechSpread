import React from 'react';
import { BookOpen, Key, Lightbulb, AlertTriangle, ArrowRight, Compass, List, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";
import JsTaskPrioritySimulator from "../../../../simulators/web/js/JsTaskPrioritySimulator";

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

const PrioritySystem = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="Microtasks vs Macrotasks Priority | JavaScript Course"
                description="Understand the canonical Event Loop rules: microtasks have absolute priority, classification table of async APIs, and how infinite microtasks cause starvation."
                keywords="canonical rule, microtask priority, macrotask queue, microtask starvation, queue prioritization, settimeout vs promise"
                url="/webdevelopment/javascript/priority-system"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-yellow-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                
                <div className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                        <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 10.7: Event Loop & Concurrency</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        Priority: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-yellow-500">The System</span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light px-4">
                        This section is where most Event Loop confusion lives. Let's be extremely precise about priority rules.
                    </p>
                </div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">
                
                <Section title="The Canonical Rule of Priority" icon={Key} id="canonical-rule">
                    <p className="text-lg sm:text-xl font-medium text-white leading-relaxed mb-8 border-l-4 border-yellow-500 pl-6 italic">
                        "After every task (macro or initial script), drain the ENTIRE microtask queue before the next macrotask."
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        This means: <strong>microtasks always run before the next macrotask, no exceptions.</strong>
                    </p>
                </Section>

                <Section title="The Priority Queue Simulator" icon={Activity} id="interactive-demo">
                    <JsTaskPrioritySimulator />
                </Section>

                <Section title="API Classification Table" icon={List} id="classification-table">
                    <div className="overflow-x-auto border border-gray-800 rounded-xl">
                        <table className="w-full text-left text-gray-300">
                            <thead className="bg-[#111] border-b border-gray-800">
                                <tr>
                                    <th className="px-6 py-4 font-bold text-white">Source API</th>
                                    <th className="px-6 py-4 font-bold text-white">Queue Type</th>
                                    <th className="px-6 py-4 font-bold text-white">Priority Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-850 hover:bg-white/5">
                                    <td className="px-6 py-4 font-mono text-xs text-yellow-300">Promise.then/catch/finally</td>
                                    <td className="px-6 py-4 font-semibold text-yellow-500">Microtask</td>
                                    <td className="px-6 py-4 text-xs">Core Promise handling</td>
                                </tr>
                                <tr className="border-b border-gray-850 hover:bg-white/5">
                                    <td className="px-6 py-4 font-mono text-xs text-yellow-300">async/await (after await)</td>
                                    <td className="px-6 py-4 font-semibold text-yellow-500">Microtask</td>
                                    <td className="px-6 py-4 text-xs">`await` compiles to implicit `.then()`</td>
                                </tr>
                                <tr className="border-b border-gray-850 hover:bg-white/5">
                                    <td className="px-6 py-4 font-mono text-xs text-yellow-300">queueMicrotask(fn)</td>
                                    <td className="px-6 py-4 font-semibold text-yellow-500">Microtask</td>
                                    <td className="px-6 py-4 text-xs">Explicit microtask scheduling</td>
                                </tr>
                                <tr className="border-b border-gray-850 hover:bg-white/5">
                                    <td className="px-6 py-4 font-mono text-xs text-yellow-300">MutationObserver</td>
                                    <td className="px-6 py-4 font-semibold text-yellow-500">Microtask</td>
                                    <td className="px-6 py-4 text-xs">Browser DOM mutation updates</td>
                                </tr>
                                <tr className="border-b border-gray-850 hover:bg-white/5">
                                    <td className="px-6 py-4 font-mono text-xs text-sky-300">setTimeout(fn, n)</td>
                                    <td className="px-6 py-4 font-semibold text-sky-400">Macrotask</td>
                                    <td className="px-6 py-4 text-xs">Even when delay `n = 0`</td>
                                </tr>
                                <tr className="border-b border-gray-850 hover:bg-white/5">
                                    <td className="px-6 py-4 font-mono text-xs text-sky-300">setInterval(fn, n)</td>
                                    <td className="px-6 py-4 font-semibold text-sky-400">Macrotask</td>
                                    <td className="px-6 py-4 text-xs">Repeating timer execution</td>
                                </tr>
                                <tr className="border-b border-gray-850 hover:bg-white/5">
                                    <td className="px-6 py-4 font-mono text-xs text-sky-300">fetch / XHR callbacks</td>
                                    <td className="px-6 py-4 font-semibold text-sky-400">Macrotask</td>
                                    <td className="px-6 py-4 text-xs">I/O completions from network</td>
                                </tr>
                                <tr className="border-b border-gray-850 hover:bg-white/5">
                                    <td className="px-6 py-4 font-mono text-xs text-sky-300">DOM Event Listeners</td>
                                    <td className="px-6 py-4 font-semibold text-sky-400">Macrotask</td>
                                    <td className="px-6 py-4 text-xs">User interactions (clicks, keyboard)</td>
                                </tr>
                                <tr className="hover:bg-white/5">
                                    <td className="px-6 py-4 font-mono text-xs text-purple-300">requestAnimationFrame</td>
                                    <td className="px-6 py-4 font-semibold text-purple-400">Special</td>
                                    <td className="px-6 py-4 text-xs">Executes before visual paints</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Section>

                <Section title="Starvation: The Dark Side of Priority" icon={AlertTriangle} id="microtask-starvation">
                    <p className="text-gray-300 leading-relaxed">
                        Because microtasks drain <strong>completely</strong> before any macrotask runs, an infinite chain of microtasks will <strong>block everything else forever</strong> — no renders, no timers, no user clicks can resolve.
                    </p>
                    <CodeBlock 
                        title="infinite-promise-starvation.js"
                        language="javascript"
                        code={`// ⚠️ WARNING: This freezes the browser!
function infinitePromise() {
  return Promise.resolve().then(infinitePromise);
}
infinitePromise();`}
                    />
                    <p className="text-gray-300 leading-relaxed mt-4">
                        This behaves identically to a synchronous infinite loop, but looks deceptively async! If you need to process extremely large datasets, use <code>setTimeout(nextChunk, 0)</code> to deliberately yield back to the Event Loop, giving the browser window a chance to render frames between operations.
                    </p>
                </Section>

                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript/event-loop-orchestrator" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">10.6 The Event Loop</span>
                            </div>
                        </Link>

                        <Link to="/webdevelopment/javascript/execution-order" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block group-hover:text-yellow-500/80 transition-colors">Up Next</span>
                                <span className="text-gray-200 font-bold text-xs sm:text-sm group-hover:text-white transition-colors">Execution Order</span>
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

export default PrioritySystem;
