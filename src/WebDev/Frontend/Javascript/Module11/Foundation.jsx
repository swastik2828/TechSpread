import React, { useState, useEffect } from 'react';
import { BookOpen, Key, Lightbulb, AlertTriangle, ArrowRight, Compass, Globe, Server, Activity, ArrowLeftRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import JsHttpConversationSimulator from '../../../../simulators/web/javascript/JsHttpConversationSimulator';    

const Section = ({ title, icon: Icon, children, id }) => (
    <section id={id} className="relative mb-16 sm:mb-24 scroll-mt-28">
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full">
            <div className="p-2 sm:p-3 md:p-4 bg-gradient-to-br from-yellow-500/20 to-yellow-500/20 rounded-xl sm:rounded-2xl border border-yellow-500/40 text-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.15)] flex-shrink-0">
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



const Foundation = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="How the Web Actually Works | JavaScript Web APIs"
                description="Understand the foundation of web APIs, HTTP requests, responses, and standard status codes before writing fetch requests."
                keywords="http, requests, responses, status codes, REST API, web foundation, javascript"
                url="/webdevelopment/javascript/web-apis-foundation"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-yellow-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                
                <div className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                        <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 11.1: Web APIs & Data Handling</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        How the Web <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-yellow-500">Actually Works</span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light px-4">
                        Before writing a single line of fetch code, understand the fundamental HTTP conversation happening under the hood between your browser and remote servers.
                    </p>
                </div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">
                <HighlightBox title="Prerequisites" type="note">
                    Before diving in, you should be comfortable with:
                    • JavaScript Promises and async/await
                    • Basic JavaScript objects and arrays
                    • What a browser is doing when you visit a website
                    
                    If Promises feel shaky, revisit Module 9 before continuing — almost everything in this module builds on them.
                </HighlightBox>

                <Section title="The HTTP Conversation" icon={Activity} id="http-conversation">
                    <p className="text-gray-300 leading-relaxed">
                        When your JavaScript asks for data from a server, it's having a structured conversation over the internet.
                    </p>

                    <JsHttpConversationSimulator />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-white mb-4">Every Request has:</h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-400">
                                <li><strong className="text-yellow-400">A method</strong> — what action to take (GET, POST, etc.)</li>
                                <li><strong className="text-yellow-400">A URL</strong> — where to send it</li>
                                <li><strong className="text-yellow-400">Headers</strong> — metadata (who you are, desired format)</li>
                                <li><strong className="text-yellow-400">A body</strong> — (optional) data you're sending along</li>
                            </ul>
                        </div>
                        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-white mb-4">Every Response has:</h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-400">
                                <li><strong className="text-green-400">A status code</strong> — a number telling you what happened</li>
                                <li><strong className="text-green-400">Headers</strong> — metadata about the response</li>
                                <li><strong className="text-green-400">A body</strong> — the actual data you asked for</li>
                            </ul>
                        </div>
                    </div>
                </Section>

                <Section title="Status Codes You Need to Know" icon={Server} id="status-codes">
                    <p className="text-gray-300 leading-relaxed">
                        Status codes are three-digit numbers servers use to announce the result of your request.
                    </p>

                    <div className="overflow-x-auto mt-6 rounded-xl border border-gray-800">
                        <table className="w-full text-left text-sm text-gray-400">
                            <thead className="text-xs text-gray-300 uppercase bg-gray-900/80 border-b border-gray-800">
                                <tr>
                                    <th className="px-6 py-4">Code</th>
                                    <th className="px-6 py-4">Meaning</th>
                                    <th className="px-6 py-4">What it usually means for you</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-800/50 hover:bg-gray-800/20"><td className="px-6 py-4 text-green-400 font-bold">200</td><td className="px-6 py-4 text-white">OK</td><td className="px-6 py-4">Everything worked</td></tr>
                                <tr className="border-b border-gray-800/50 hover:bg-gray-800/20"><td className="px-6 py-4 text-green-400 font-bold">201</td><td className="px-6 py-4 text-white">Created</td><td className="px-6 py-4">Your POST succeeded, resource was made</td></tr>
                                <tr className="border-b border-gray-800/50 hover:bg-gray-800/20"><td className="px-6 py-4 text-green-400 font-bold">204</td><td className="px-6 py-4 text-white">No Content</td><td className="px-6 py-4">Worked, but nothing to return (common for DELETE)</td></tr>
                                <tr className="border-b border-gray-800/50 hover:bg-gray-800/20"><td className="px-6 py-4 text-amber-400 font-bold">400</td><td className="px-6 py-4 text-white">Bad Request</td><td className="px-6 py-4">You sent something malformed</td></tr>
                                <tr className="border-b border-gray-800/50 hover:bg-gray-800/20"><td className="px-6 py-4 text-amber-400 font-bold">401</td><td className="px-6 py-4 text-white">Unauthorized</td><td className="px-6 py-4">You need to log in</td></tr>
                                <tr className="border-b border-gray-800/50 hover:bg-gray-800/20"><td className="px-6 py-4 text-amber-400 font-bold">403</td><td className="px-6 py-4 text-white">Forbidden</td><td className="px-6 py-4">You're logged in but don't have permission</td></tr>
                                <tr className="border-b border-gray-800/50 hover:bg-gray-800/20"><td className="px-6 py-4 text-amber-400 font-bold">404</td><td className="px-6 py-4 text-white">Not Found</td><td className="px-6 py-4">That resource doesn't exist</td></tr>
                                <tr className="border-b border-gray-800/50 hover:bg-gray-800/20"><td className="px-6 py-4 text-amber-400 font-bold">429</td><td className="px-6 py-4 text-white">Too Many Requests</td><td className="px-6 py-4">You're being rate-limited; slow down</td></tr>
                                <tr className="border-b border-gray-800/50 hover:bg-gray-800/20"><td className="px-6 py-4 text-rose-500 font-bold">500</td><td className="px-6 py-4 text-white">Internal Server Error</td><td className="px-6 py-4">The server crashed — not your fault</td></tr>
                                <tr className="hover:bg-gray-800/20"><td className="px-6 py-4 text-rose-500 font-bold">503</td><td className="px-6 py-4 text-white">Service Unavailable</td><td className="px-6 py-4">Server is down or overloaded</td></tr>
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

                        <Link to="/webdevelopment/javascript/fetch-api" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block group-hover:text-yellow-500/80 transition-colors">Up Next</span>
                                <span className="text-gray-200 font-bold text-xs sm:text-sm group-hover:text-white transition-colors">11.2 The Fetch API</span>
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

export default Foundation;