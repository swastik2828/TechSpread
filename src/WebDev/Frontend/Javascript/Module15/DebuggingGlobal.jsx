import React from 'react';
import { motion } from 'framer-motion';
import { Bug, Key, Globe, ArrowRight, Code2, AlertTriangle } from 'lucide-react';
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

export default function DebuggingGlobal() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="Debugging & Global Error Handling | JavaScript Course"
                description="Learn advanced browser debugging techniques and how to set up global error handlers."
                keywords="javascript debugging, chrome devtools breakpoints, window.onerror, unhandledrejection"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-amber-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                        <Bug className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 15.2</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        Squash <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-orange-500">Bugs.</span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light px-4">
                        Move beyond console.log and catch every silent failure in production.
                    </p>
                </motion.div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">
                
                <Section title="15.3 Debugging: Moving Beyond console.log" icon={Bug} id="debugging">
                    <div className="space-y-8 bg-[#0d1117] p-6 sm:p-10 rounded-3xl border border-gray-800/60 shadow-inner">
                        <p className="text-gray-300 leading-relaxed">
                            Most beginners debug by sprinkling <code>console.log('here 1')</code> throughout their code, rerunning the page, and squinting at the output. It works, eventually — but it's slow. Every modern browser has a full debugger built into its developer tools.
                        </p>

                        <div className="border-l-4 border-amber-500 pl-6 my-6 bg-amber-500/5 p-4 rounded-r-lg">
                            <h4 className="font-bold text-white mb-2">Breakpoints: Pausing Time Itself</h4>
                            <p className="text-sm">A breakpoint tells the browser "stop running the program right here, and let me look around." Once frozen, you gain access to:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-400">
                                <li><strong>Scope:</strong> See every variable currently in reach.</li>
                                <li><strong>Call Stack:</strong> See the exact chain of function calls leading to this moment.</li>
                                <li><strong>Step Over/Into:</strong> Execute the code one single line at a time.</li>
                            </ul>
                        </div>
                    </div>
                </Section>

                <Section title="15.4 Catching What Slips Through (Global Handlers)" icon={Globe} id="global-errors">
                    <div className="space-y-8 bg-[#0d1117] p-6 sm:p-10 rounded-3xl border border-gray-800/60 shadow-inner">
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Even with careful <code>try/catch</code> blocks, something will eventually throw an error nowhere near a <code>catch</code> block — a typo in an event handler or a third-party script. In a live application, you need a final safety net.
                        </p>

                        <CodeBlock 
                            language="javascript"
                            code={`// Catches standard synchronous errors
window.addEventListener('error', (event) => {
  console.log('Uncaught error:', event.message, 'at', event.filename, event.lineno);
  // Send to Datadog, Sentry, etc.
});

// Catches failed Promises that lacked a .catch()
window.addEventListener('unhandledrejection', (event) => {
  console.log('Unhandled promise rejection:', event.reason);
});`}
                        />
                    </div>
                </Section>

                <Section title="Common Beginner Mistakes" icon={AlertTriangle} id="mistakes">
                    <ul className="space-y-4">
                        <li className="flex gap-4 p-4 bg-red-900/10 border border-red-500/20 rounded-xl">
                            <div className="text-red-400 font-bold shrink-0">1.</div>
                            <p><strong>Catching errors and doing nothing.</strong> An empty <code>catch &#123;&#125;</code> block hides bugs instead of fixing them. At minimum, log what happened.</p>
                        </li>
                        <li className="flex gap-4 p-4 bg-amber-900/10 border border-amber-500/20 rounded-xl">
                            <div className="text-amber-400 font-bold shrink-0">2.</div>
                            <p><strong>Using try/catch for standard logic.</strong> Don't use it to check if a value exists. A simple <code>if</code> check is clearer and faster.</p>
                        </li>
                        <li className="flex gap-4 p-4 bg-blue-900/10 border border-blue-500/20 rounded-xl">
                            <div className="text-blue-400 font-bold shrink-0">3.</div>
                            <p><strong>Forgetting async errors.</strong> A forgotten <code>await</code> or a <code>.then()</code> chain with no <code>.catch()</code> means the error has nowhere to land.</p>
                        </li>
                    </ul>
                </Section>

                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript/error-handling-try-catch" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous Module</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">Errors & Try/Catch</span>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </article>
    );
}