import React from 'react';
import { BookOpen, Key, Lightbulb, AlertTriangle, ArrowRight, Compass, Layout, Network } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";

const Section = ({ title, icon: Icon, children, id }) => (
    <section id={id} className="relative mb-16 sm:mb-24 scroll-mt-28">
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full">
            <div className="p-2 sm:p-3 md:p-4 bg-gradient-to-br from-yellow-500/20 to-yellow-500/20 rounded-xl sm:rounded-2xl border border-yellow-500/40 text-yellow-400 shadow-[0_0_30px_rgba(59,130,246,0.15)] flex-shrink-0">
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
        warn: { icon: AlertTriangle, color: "text-rose-400", border: "border-rose-500/40", bg: "bg-gradient-to-br from-rose-900/40 to-red-900/10", heading: "text-rose-400", shadow: "shadow-rose-500/10" },
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

const WhatIsTheDom = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="What is the DOM | JavaScript DOM Manipulation"
                description="Understand the Document Object Model (DOM). Learn how browsers parse HTML into a live, in-memory tree structure that JavaScript manipulates."
                keywords="DOM, Document Object Model, JavaScript DOM, nodes, element nodes, text nodes"
                url="/webdevelopment/javascript/what-is-the-dom"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-blue-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                
                <div className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                        <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                        <span className="text-yellow-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 12.1: DOM Manipulation</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        What the <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">DOM</span> Actually Is
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light px-4">
                        The DOM is the bridge between the static HTML you write and the dynamic interface a user experiences. It is what JavaScript reads and rewrites in real time.
                    </p>
                </div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">

                <Section title="The Document Object Model" icon={Network} id="understanding-dom">
                    <p className="text-gray-300 leading-relaxed">
                        When a browser loads an HTML file, it doesn't keep your markup around as a string. It parses it into an in-memory tree of objects called the <strong>Document Object Model</strong>. Every tag becomes an <strong>element node</strong>, the text sitting between tags becomes a <strong>text node</strong>, every HTML comment becomes a <strong>comment node</strong>, and the whole tree hangs off a single <strong>document</strong> object at the root. 
                    </p>
                    <p className="text-gray-300 leading-relaxed mt-4">
                        This tree — not your original HTML file — is what the browser actually renders, and it's what JavaScript manipulates.
                    </p>

                    <HighlightBox title="Two Core Superpowers" type="key">
                        <strong>It's a live, in-memory structure.</strong> The DOM is directly wired to what's rendered on screen. There's no separate "save and refresh" step — the moment you change a node's property, the browser's rendering engine notices and updates the pixels instantly.

                        <strong>It's a tree, so it has direction.</strong> Nodes have parents, children, and siblings. Almost every DOM API either walks this tree (finding ancestors or descendants) or restructures it.
                    </HighlightBox>
                </Section>

                <Section title="Understanding Node Types" icon={Layout} id="node-types">
                    <p className="text-gray-300 leading-relaxed">
                        It's worth being precise about node types, because mixing them up is a common source of bugs. Most day-to-day work targets element nodes, but text nodes matter the moment you start asking "why does my element have three child nodes when I only wrote two tags?"
                    </p>

                    <div className="overflow-x-auto mt-6 rounded-xl border border-gray-800 mb-6">
                        <table className="w-full text-left text-sm text-gray-400">
                            <thead className="text-xs text-gray-300 uppercase bg-gray-900/80 border-b border-gray-800">
                                <tr>
                                    <th className="px-6 py-4">Node Type</th>
                                    <th className="px-6 py-4">What it represents</th>
                                    <th className="px-6 py-4">Example</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-800/50">
                                    <td className="px-6 py-4 font-bold text-white">Element</td>
                                    <td className="px-6 py-4">An HTML tag</td>
                                    <td className="px-6 py-4 font-mono text-blue-400">{`<div>, <p>, <button>`}</td>
                                </tr>
                                <tr className="border-b border-gray-800/50">
                                    <td className="px-6 py-4 font-bold text-white">Text</td>
                                    <td className="px-6 py-4">The literal text inside an element (including whitespace!)</td>
                                    <td className="px-6 py-4">the word `Hello` inside {`<p>Hello</p>`}</td>
                                </tr>
                                <tr className="border-b border-gray-800/50">
                                    <td className="px-6 py-4 font-bold text-white">Comment</td>
                                    <td className="px-6 py-4">An HTML comment</td>
                                    <td className="px-6 py-4 font-mono text-blue-400">{``}</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-bold text-white">Document</td>
                                    <td className="px-6 py-4">The root of the whole tree</td>
                                    <td className="px-6 py-4 font-mono text-blue-400">document</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Section>

                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript/practice-problems" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">10.15 Practice Problems</span>
                            </div>
                        </Link>

                        <Link to="/webdevelopment/javascript/selecting-elements" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block group-hover:text-yellow-500/80 transition-colors">Up Next</span>
                                <span className="text-gray-200 font-bold text-xs sm:text-sm group-hover:text-white transition-colors">12.2 Selecting Elements</span>
                            </div>
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-yellow-400 group-hover:bg-yellow-500/10 flex items-center justify-center border border-gray-800 group-hover:border-yellow-500/30 transition-all duration-300">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </article>
    );
};

export default WhatIsTheDom;