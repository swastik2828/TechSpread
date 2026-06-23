// swastik2828/techspread/TechSpread-e42273dd6b6a9028bc99382c33681de38dbe3959/src/WebDev/Frontend/Javascript/Module14/FormsIntro.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Key, Lightbulb, AlertTriangle, ArrowRight, Code2, AppWindow, FormInput } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";
import JsFormSimulator from "../../../../simulators/web/js/JsFormSimulator";

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
        tip: { icon: Lightbulb, color: "text-emerald-400", border: "border-emerald-500/40", bg: "bg-gradient-to-br from-emerald-900/40 to-green-900/10", heading: "text-emerald-400", shadow: "shadow-emerald-500/10" },
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

const FormsIntro = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="Forms & Storage Intro | JavaScript Course"
                description="Learn how modern JavaScript handles forms without page reloads using preventDefault and FormData."
                keywords="javascript forms, FormData, preventDefault, javascript web development"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-amber-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                        <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 14.1: Forms</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        Forms <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-orange-500">& Data.</span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light px-4">
                        Master the structural foundation of data collection and browser storage mechanisms.
                    </p>
                </motion.div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">
                
                <Section title="Introduction to Forms & Storage" icon={BookOpen} id="intro">
                    <p className="text-lg sm:text-xl font-medium text-white leading-relaxed">
                        Think about the last time you used a website. You probably typed something into a box, clicked a button, or stayed logged in even after closing your laptop. All of that depends on two things: <strong>forms</strong> (how a page collects what you type) and <strong>browser storage</strong> (how a page remembers things). This module walks through both, starting from "what even is a form" all the way to "how do real apps keep you logged in."
                    </p>
                    <HighlightBox title="What You Will Learn" type="key">
                        - How forms actually work under the hood, and why we usually stop them from "really" submitting
                        - How to read what a user typed, and the right moment to react to it
                        - How to check that input is actually valid, both nicely and securely
                        - The four major ways browsers can remember data, and which one to reach for
                    </HighlightBox>
                </Section>

                <Section title="14.1 What a Form Actually Does (and Why We Interrupt It)" icon={AppWindow} id="form-behavior">
                    <div className="space-y-8 bg-[#0d1117] p-6 sm:p-10 rounded-3xl border border-gray-800/60 shadow-inner">
                        <div className="border-b border-gray-800 pb-6">
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-400 mb-4">The old-school behavior</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Long before JavaScript was doing anything fancy, forms already worked. A <code>&lt;form&gt;</code> tag, a few <code>&lt;input&gt;</code> tags, and a submit button were enough to send data to a server. When you clicked submit, the browser packaged up everything you typed, sent it to a URL, and then <strong>reloaded the page</strong> with whatever the server sent back.
                                That's the form's <em>default</em> behavior, and it still exists today. A full page reload for every form is a jarring experience in a modern app — imagine your email client refreshing the entire page every time you hit "send."
                            </p>
                        </div>

                        <div className="pt-2 border-b border-gray-800 pb-6">
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-green-400 mb-4">Stopping the default behavior</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                This is where <code>event.preventDefault()</code> comes in. It's a small method with a big job: it tells the browser, "I've got this one, don't do your usual thing." You call it inside the function that handles the form's <code>submit</code> event, and the page reload simply never happens. From that point on, <em>you</em> — meaning your JavaScript — are fully in charge of what happens to the data.
                            </p>
                            <CodeBlock 
                                language="javascript"
                                code={`document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); // stop the page from reloading
  console.log("Form submitted — let's handle it ourselves!");
});`}
                            />
                        </div>

                        <div className="pt-2 border-b border-gray-800 pb-6">
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-amber-500 mb-4">Reading what the user typed: the FormData object</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Once you've stopped the default behavior, you need a way to actually grab the values the user entered. This is what <code>FormData</code> is for. Instead of reaching into the DOM and pulling out each field's <code>.value</code> one at a time, you hand your <code>&lt;form&gt;</code> element to <code>FormData</code>, and it gives you back every field's name and value, neatly packaged.
                            </p>
                            <CodeBlock 
                                language="javascript"
                                code={`const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  console.log(data.get("email")); // grabs the value of <input name="email">
});`}
                            />
                            <p className="text-gray-300 leading-relaxed mt-4 mb-4">
                                <strong>Turning FormData into a plain object.</strong> Many APIs expect a plain JSON object rather than a FormData object. Converting one to the other looks a little odd the first time you see it, but it becomes second nature:
                            </p>
                            <CodeBlock 
                                language="javascript"
                                code={`const data = new FormData(form);
const plainObject = Object.fromEntries(data.entries());

console.log(plainObject); // { email: "jordan@example.com", plan: "free-trial" }`}
                            />
                        </div>

                        <div className="pt-2">
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-purple-400 mb-4">Knowing when to react: the three events that matter</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Forms fire several different events, and mixing them up is one of the most common beginner stumbles.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li><strong>input:</strong> Every single keystroke or change, instantly (Best for live character counters).</li>
                                <li><strong>change:</strong> The value changes <em>and</em> the field loses focus (Best for validating email format once someone is done typing).</li>
                                <li><strong>submit:</strong> The form is submitted, by click or Enter key (Best for final validation and sending data).</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-16 mb-8 pt-8 border-t border-gray-800/60">
                        <h4 className="text-2xl sm:text-3xl font-black text-white mb-6">Interactive Lab: Form Behavior</h4>
                        <p className="text-gray-400 mb-8 font-medium">Use the interactive simulator below to visually understand how <code>preventDefault()</code> stops the classic page reload and allows JavaScript to securely intercept data.</p>
                        <JsFormSimulator />
                    </div>
                </Section>

                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript/quick-reference-events" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous Module</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">Event Reference</span>
                            </div>
                        </Link>

                        <Link to="/webdevelopment/javascript/form-validation" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.1)] transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block group-hover:text-amber-500/80 transition-colors">Up Next</span>
                                <span className="text-gray-200 font-bold text-xs sm:text-sm group-hover:text-white transition-colors">Form Validation</span>
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

export default FormsIntro;