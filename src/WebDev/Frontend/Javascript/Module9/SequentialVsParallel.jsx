import React from 'react';
import { BookOpen, Key, Lightbulb, AlertTriangle, ArrowRight, Compass, FastForward, GitCommit } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";
import JsSequentialVsParallelSimulator from "../../../../simulators/web/js/JsSequentialVsParallelSimulator";

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

const SequentialVsParallel = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="Sequential vs Parallel Execution | JavaScript Course"
                description="Understand the difference between sequential and parallel execution in JavaScript, and how to optimize async operations."
                keywords="javascript sequential execution, javascript parallel execution, promise.all optimization, async await performance"
                url="/webdevelopment/javascript/sequential-vs-parallel"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-yellow-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                
                <div className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                        <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 9.7: Asynchronous JS</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        Sequential <span className="text-gray-500 font-light italic">vs</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-500 to-green-500">Parallel</span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light px-4">
                        The distinction that matters most for performance.
                    </p>
                </div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">

                <p className="text-lg sm:text-xl font-medium text-white leading-relaxed mb-8">
                    Once you start using <code>async/await</code>, there is a subtle trap that almost every developer falls into: accidentally writing <strong>sequential</strong> code when the operations could safely run <strong>in parallel</strong>. The code looks correct and produces the right results — it's just much slower than it needs to be.
                </p>

                <Section title="Sequential Execution — One After Another" icon={GitCommit} id="sequential">
                    <p className="text-gray-300 leading-relaxed">
                        When you <code>await</code> each operation before starting the next, they run one at a time. The total wait time is the <strong>sum</strong> of all individual wait times.
                    </p>
                    <div className="mt-4 mb-6">
                        <CodeBlock 
                            title="sequential.js"
                            language="javascript"
                            code={`// Sequential: each awaits before the next starts
// Total time ≈ 200ms + 300ms + 150ms = 650ms
const profile  = await fetchProfile(userId);
const settings = await fetchSettings(userId);
const stats    = await fetchStats(userId);`}
                        />
                    </div>
                    <p className="text-gray-300 leading-relaxed mt-4">
                        Sequential execution is <strong>correct and necessary</strong> when each operation depends on the result of the previous one. You can't fetch a user's orders without first knowing their ID from the user record.
                    </p>
                    <HighlightBox title="The Waste of Sequential" type="warn">
                        But when the operations are completely <strong>independent</strong> — when none of them need each other's results — sequential execution is pure waste. The CPU sits idle during each wait instead of managing all operations simultaneously.
                    </HighlightBox>
                </Section>

                <Section title="Parallel Execution — All at Once" icon={FastForward} id="parallel">
                    <p className="text-gray-300 leading-relaxed">
                        When operations are independent, start all of them before awaiting any of them. The total wait time becomes the <strong>maximum</strong> of all individual wait times — the slowest one sets the pace, and the others finish within that window.
                    </p>
                    <div className="mt-4 mb-6">
                        <CodeBlock 
                            title="parallel.js"
                            language="javascript"
                            code={`// Parallel: all three start simultaneously
// Total time ≈ max(200ms, 300ms, 150ms) = 300ms
const [profile, settings, stats] = await Promise.all([
  fetchProfile(userId),
  fetchSettings(userId),
  fetchStats(userId),
]);`}
                        />
                    </div>
                    <p className="text-gray-300 leading-relaxed mt-4">
                        In this example, <code>Promise.all()</code> reduces the wait from 650ms to 300ms — more than a 50% improvement — with no change in behaviour, just a change in when the operations start.
                    </p>
                </Section>

                <Section title="Interactive: See the Difference" icon={BookOpen} id="simulator">
                    <p className="text-gray-300 leading-relaxed">
                        Run both approaches to visualize the performance difference when fetching three independent resources.
                    </p>
                    <div className="mt-6 mb-12">
                        <JsSequentialVsParallelSimulator />
                    </div>
                </Section>

                <Section title="The Dependency Test & Loops" icon={Key} id="dependency">
                    <h3 className="text-2xl font-bold text-white mb-4">The Dependency Test</h3>
                    <p className="text-gray-300 leading-relaxed">
                        Before deciding whether to run operations sequentially or in parallel, ask this question for each pair:
                    </p>
                    <p className="text-gray-300 leading-relaxed mt-2 italic font-bold">
                        "Does operation B need the result of operation A to even begin?"
                    </p>
                    <ul className="list-disc pl-6 space-y-3 mt-4 text-gray-300 font-medium">
                        <li><strong>Yes</strong> → They must be sequential. Await A first, then start B with A's result.</li>
                        <li><strong>No</strong> → They can be parallel. Put both in <code>Promise.all()</code>.</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-white mt-10 mb-4">Loops and Parallel Execution</h3>
                    <p className="text-gray-300 leading-relaxed">
                        Loops require special attention. Using <code>await</code> inside a <code>for...of</code> loop makes each iteration wait for the previous — this is sequential. Using <code>Promise.all</code> with <code>.map()</code> launches all iterations simultaneously — this is parallel.
                    </p>
                    <div className="mt-4 mb-6">
                        <CodeBlock 
                            title="loops.js"
                            language="javascript"
                            code={`// Sequential: processes one at a time
for (const id of ids) {
  await processItem(id);
}

// Parallel: processes all at once
await Promise.all(ids.map(id => processItem(id)));`}
                        />
                    </div>
                </Section>

                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript/error-handling" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">Error Handling</span>
                            </div>
                        </Link>

                        <Link to="/webdevelopment/javascript/common-mistakes" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block group-hover:text-yellow-500/80 transition-colors">Up Next</span>
                                <span className="text-gray-200 font-bold text-xs sm:text-sm group-hover:text-white transition-colors">Common Mistakes</span>
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

export default SequentialVsParallel;
