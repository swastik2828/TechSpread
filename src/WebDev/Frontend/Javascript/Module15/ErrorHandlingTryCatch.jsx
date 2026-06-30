import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Key, AlertTriangle, ArrowRight, Code2, AppWindow, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";
import JsTryCatchSimulator from "../../../../simulators/web/js/JsTryCatchSimulator";

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
        key: { icon: Key, color: "text-amber-400", border: "border-amber-500/40", bg: "bg-gradient-to-br from-amber-900/40 to-yellow-900/10", heading: "text-amber-500", shadow: "shadow-amber-500/10" },
        tip: { icon: Zap, color: "text-emerald-400", border: "border-emerald-500/40", bg: "bg-gradient-to-br from-emerald-900/40 to-green-900/10", heading: "text-emerald-400", shadow: "shadow-emerald-500/10" },
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

export default function ErrorHandlingTryCatch() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="Error Handling & Try/Catch | JavaScript Course"
                description="Learn how JavaScript handles errors, reads stack traces, and utilizes try/catch/finally for resilient applications."
                keywords="javascript error handling, try catch finally, JS stack trace, custom errors"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-amber-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                        <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 15.1</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        Fail <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-orange-500">Gracefully.</span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light px-4">
                        Master the art of handling unexpected bugs and network failures without crashing your application.
                    </p>
                </motion.div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">
                
                <Section title="Why Error Handling Matters" icon={BookOpen} id="intro">
                    <p className="text-lg sm:text-xl font-medium text-white leading-relaxed">
                        Every program you ever write will eventually do something you didn't expect. A user will type a letter where you expected a number. A server will be slow, or down. A file you assumed would exist won't. This isn't a sign that you're a bad programmer — it's just what software is like once real people start using it.
                    </p>
                    <p className="text-gray-300 leading-relaxed mt-4">
                        What separates a beginner from an experienced developer isn't that the experienced developer's code never breaks. It's that their code <strong>fails politely</strong>. It tells the user something useful instead of freezing the screen. It tells the developer exactly where things went wrong instead of leaving them to guess.
                    </p>
                </Section>

                <Section title="15.1 How JavaScript Represents Errors" icon={AlertTriangle} id="representing-errors">
                    <div className="space-y-8 bg-[#0d1117] p-6 sm:p-10 rounded-3xl border border-gray-800/60 shadow-inner">
                        <div className="border-b border-gray-800 pb-6">
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Think of an error like a fire alarm. The moment smoke is detected, the alarm doesn't wait around — it goes off immediately, and everyone stops what they're doing and follows the nearest exit route. JavaScript errors work the same way.
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                When something goes wrong while your code is running, JavaScript creates an <strong>Error object</strong> and <em>throws</em> it. The instant that happens, the normal flow of your program stops. If it searches the entire chain and finds nothing, your program crashes.
                            </p>
                            <CodeBlock 
                                language="javascript"
                                code={`function getFirstLetter(word) {
  return word[0].toUpperCase();
}

getFirstLetter(undefined); // 💥 throws an error — there's no [0] on undefined`}
                            />
                        </div>

                        <div className="pt-2 border-b border-gray-800 pb-6">
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-400 mb-4">Reading a stack trace without panicking</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Every <code>Error</code> object has a <code>.stack</code> property — a block of text describing exactly which function called which function, all the way down to where the error happened. 
                            </p>
                            <div className="bg-red-950/30 border border-red-500/30 rounded-lg p-4 font-mono text-sm text-red-400">
                                TypeError: Cannot read properties of undefined (reading 'toUpperCase')<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;at getFirstLetter (app.js:2:15)<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;at main (app.js:6:1)
                            </div>
                            <p className="text-gray-300 leading-relaxed mt-4">
                                Read it from the top down: the first line tells you <em>what</em> went wrong, and the lines below tell you <em>where</em>, starting from the exact location and working outward.
                            </p>
                        </div>
                    </div>
                </Section>

                <Section title="15.2 Handling Errors with try / catch / finally" icon={Code2} id="try-catch">
                    <div className="space-y-8 bg-[#0d1117] p-6 sm:p-10 rounded-3xl border border-gray-800/60 shadow-inner">
                        <p className="text-gray-300 leading-relaxed">
                            If throwing an error is like a fire alarm, <code>try / catch</code> is like having a fire extinguisher ready in the one room where a fire is actually likely. You don't install fire extinguishers in every single room "just in case" — you put them where they're actually needed.
                        </p>
                        
                        <CodeBlock 
                            language="javascript"
                            code={`try {
  const data = JSON.parse(userInput); // this is the risky part
  console.log(data.name);
} catch (error) {
  console.log('That input was not valid JSON:', error.message);
}`}
                        />
                        
                        <HighlightBox title="The finally Block" type="key">
                            A `finally` block runs no matter what happened in `try` or `catch` — whether everything succeeded, an error was thrown and caught, or even if there's a `return` statement inside `try`. It's the right place for cleanup work like hiding a loading spinner.
                        </HighlightBox>

                        <div className="mt-8 pt-8 border-t border-gray-800/60">
                            <h4 className="text-2xl sm:text-3xl font-black text-white mb-6">Interactive Lab: Execution Flow</h4>
                            <p className="text-gray-400 mb-8 font-medium">Use the interactive simulator below to visually understand how JavaScript jumps execution blocks when an error occurs.</p>
                            <JsTryCatchSimulator />
                        </div>
                    </div>
                </Section>

                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript/browser-storage" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous Module</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">Browser Storage</span>
                            </div>
                        </Link>

                        <Link to="/webdevelopment/javascript/debugging-global" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.1)] transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block group-hover:text-amber-500/80 transition-colors">Up Next</span>
                                <span className="text-gray-200 font-bold text-xs sm:text-sm group-hover:text-white transition-colors">Debugging & Global</span>
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
}