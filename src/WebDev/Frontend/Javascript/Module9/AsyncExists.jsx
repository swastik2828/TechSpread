import React from 'react';
import { BookOpen, Key, Lightbulb, AlertTriangle, ArrowRight, Compass, Clock, Zap } from 'lucide-react';
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

const AsyncExists = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="Why Asynchronous Programming Exists | JavaScript Course"
                description="Understand why asynchronous programming exists in JavaScript, the single-threaded nature, and how it handles blocking operations."
                keywords="javascript async, asynchronous programming, javascript single-threaded, javascript blocking, web development"
                url="/webdevelopment/javascript/async-exists"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-yellow-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                
                <div className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                        <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 9.1: Asynchronous JS</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-yellow-500">Asynchronous</span> Programming Exists.
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light px-4">
                        Understanding the core problem: single-threaded execution and slow operations.
                    </p>
                </div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">
                <p className="text-lg sm:text-xl font-medium text-white leading-relaxed mb-8 border-l-4 border-yellow-500 pl-6 italic">
                    "JavaScript is single-threaded. It handles millions of concurrent things. Both of these are true — and understanding why is the key to mastering async."
                </p>

                <Section title="The Core Problem: JavaScript Is Single-Threaded" icon={Clock} id="single-threaded">
                    <p className="text-gray-300 leading-relaxed">
                        JavaScript can only do <strong>one thing at a time</strong>. It has a single thread of execution — meaning it has one "lane" of work, and tasks must happen one after another, not simultaneously.
                    </p>
                    <p className="text-gray-300 leading-relaxed mt-4">
                        Most of the time, this is perfectly fine. Adding numbers, manipulating strings, updating the DOM — these happen in microseconds. The single thread never feels like a bottleneck.
                    </p>
                    <HighlightBox title="The Problem of Waiting" type="warn">
                        The problem arises with <strong>slow operations</strong>: fetching data from a remote server, reading a file from disk, waiting for a timer, querying a database. These operations don't take microseconds — they take hundreds or thousands of milliseconds. And the slowness isn't because of complex computation. It's because of <em>waiting</em>.
                    </HighlightBox>
                    <p className="text-gray-300 leading-relaxed mt-4">
                        If JavaScript simply waited — pausing everything until the slow operation completed — the consequences would be severe:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 mt-4 text-gray-300 font-medium">
                        <li>In a <strong>browser</strong>, the page would completely freeze. Buttons wouldn't respond to clicks. Animations would stop. The user would see a hung, unresponsive page.</li>
                        <li>In a <strong>Node.js server</strong>, every request would have to wait for all previous requests to finish. A single slow database query could hold up hundreds of users.</li>
                    </ul>
                    <p className="text-gray-300 leading-relaxed mt-4">
                        This is called <strong>blocking</strong> — the thread is blocked from doing anything else while it waits.
                    </p>
                </Section>

                <Section title="The Insight That Changes Everything" icon={Zap} id="insight">
                    <HighlightBox title="The CPU is Free" type="key">
                        Most slow operations aren't using the CPU while they wait. The CPU is free.
                    </HighlightBox>
                    <p className="text-gray-300 leading-relaxed mt-4">
                        When you make a network request, JavaScript hands that request off to the browser's networking layer and immediately has nothing to do — the CPU just sits there idle until the response comes back. The same is true for timers, file reads, and database queries. The waiting happens <em>outside</em> JavaScript, in the operating system or browser internals.
                    </p>
                    <p className="text-gray-300 leading-relaxed mt-4">
                        Asynchronous programming is the art of <strong>handing off slow work to the environment</strong> (browser or Node.js), letting JavaScript continue with other tasks, and then <strong>resuming the original work</strong> when the result is ready.
                    </p>
                    <p className="text-gray-300 leading-relaxed mt-4">
                        This is not multi-threading. JavaScript doesn't run multiple things simultaneously. Instead, it <strong>interleaves</strong> work — starts one thing, moves to another while the first is waiting, comes back to the first when it's ready. This interleaving is managed by something called the <strong>Event Loop</strong>.
                    </p>
                </Section>
                
                <Section title="The Three Generations of Async JavaScript" icon={BookOpen} id="generations">
                    <p className="text-gray-300 leading-relaxed">
                        JavaScript has developed three different syntaxes for expressing asynchronous logic, each an improvement on the last:
                    </p>
                    <div className="overflow-x-auto mt-6 border border-gray-800 rounded-xl">
                        <table className="w-full text-left text-gray-300">
                            <thead className="bg-gray-800/50">
                                <tr>
                                    <th className="px-6 py-4 font-bold text-white border-b border-gray-700">Generation</th>
                                    <th className="px-6 py-4 font-bold text-white border-b border-gray-700">Syntax</th>
                                    <th className="px-6 py-4 font-bold text-white border-b border-gray-700">Introduced</th>
                                    <th className="px-6 py-4 font-bold text-white border-b border-gray-700">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-800/50 hover:bg-gray-800/20">
                                    <td className="px-6 py-4 font-medium">First</td>
                                    <td className="px-6 py-4 text-amber-400">Callbacks</td>
                                    <td className="px-6 py-4">From the beginning</td>
                                    <td className="px-6 py-4">Still used in core APIs</td>
                                </tr>
                                <tr className="border-b border-gray-800/50 hover:bg-gray-800/20">
                                    <td className="px-6 py-4 font-medium">Second</td>
                                    <td className="px-6 py-4 text-amber-400">Promises</td>
                                    <td className="px-6 py-4">ES2015 (2015)</td>
                                    <td className="px-6 py-4">Foundation of everything</td>
                                </tr>
                                <tr className="hover:bg-gray-800/20">
                                    <td className="px-6 py-4 font-medium">Third</td>
                                    <td className="px-6 py-4 text-amber-400">Async/Await</td>
                                    <td className="px-6 py-4">ES2017 (2017)</td>
                                    <td className="px-6 py-4 text-white font-bold">The modern standard</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-gray-300 leading-relaxed mt-6">
                        All three solve the same problem. They differ in readability, composability, and error handling. You will encounter all three in real codebases, so understanding each one is important — even if you write async/await exclusively going forward.
                    </p>
                </Section>

                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript/inheritance-vs-composition" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous Module</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">Inheritance vs Composition</span>
                            </div>
                        </Link>

                        <Link to="/webdevelopment/javascript/event-loop" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block group-hover:text-yellow-500/80 transition-colors">Up Next</span>
                                <span className="text-gray-200 font-bold text-xs sm:text-sm group-hover:text-white transition-colors">The Event Loop</span>
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

export default AsyncExists;
