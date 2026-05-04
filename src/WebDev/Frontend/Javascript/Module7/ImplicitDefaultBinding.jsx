import React from 'react';
import { Target, Key, Lightbulb, AlertTriangle, ArrowRight, CornerDownRight } from 'lucide-react';
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
        note: { icon: CornerDownRight, color: "text-sky-400", border: "border-sky-500/40", bg: "bg-gradient-to-br from-sky-900/40 to-blue-900/10", heading: "text-sky-400", shadow: "shadow-sky-500/10" },
        tip: { icon: Lightbulb, color: "text-amber-400", border: "border-yellow-500/40", bg: "bg-gradient-to-br from-emerald-900/40 to-green-900/10", heading: "text-amber-400", shadow: "shadow-yellow-500/10" },
        warn: { icon: AlertTriangle, color: "text-amber-400", border: "border-yellow-500/40", bg: "bg-gradient-to-br from-rose-900/40 to-red-900/10", heading: "text-yellow-500", shadow: "shadow-yellow-500/10" },
    }[type] || { icon: CornerDownRight, color: "text-sky-400", border: "border-sky-500/40", bg: "bg-gradient-to-br from-sky-900/40 to-blue-900/10", heading: "text-sky-400", shadow: "shadow-sky-500/10" };

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

const ImplicitDefaultBinding = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="Implicit & Default Binding | JavaScript Course"
                description="Learn about Implicit and Default Binding in JavaScript. Understand the Left of the Dot rule and how to avoid losing the 'this' context."
                keywords="javascript implicit binding, default binding, left of the dot rule, losing this context"
                url="/webdevelopment/javascript/implicit-default-binding"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-yellow-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                
                <div className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                        <CornerDownRight className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 7.4: Implicit & Default Binding</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-yellow-500">Implicit</span> & Default.
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light px-4">
                        The "Left of the Dot" rule, the Fallback, and the Great Pitfall of losing `this`.
                    </p>
                </div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">
                
                <Section title="3. Implicit Binding" icon={CornerDownRight} id="implicit-binding">
                    <p className="text-lg sm:text-xl font-medium text-white leading-relaxed">
                        This is the most common way you will see <code>this</code> used. When a function is called as a method of an object, the <strong>object immediately to the left of the dot</strong> becomes <code>this</code>.
                    </p>

                    <div className="mt-8">
                        <CodeBlock 
                            title="implicit.js"
                            language="javascript"
                            code={`const user = {
  name: "Marcus",
  greet() {
    console.log(\`Hello, my name is \${this.name}\`);
  }
};

user.greet(); // "Hello, my name is Marcus"`}
                        />
                    </div>
                    <p className="text-gray-300 leading-relaxed mt-4">
                        Because <code>user</code> is to the left of the dot at the call site (<code>user.greet()</code>), <code>user</code> becomes the context for <code>this</code>.
                    </p>
                </Section>

                <Section title="4. Default Binding (The Fallback)" icon={AlertTriangle} id="default-binding">
                    <p className="text-lg sm:text-xl font-medium text-white leading-relaxed">
                        If none of the above three rules apply—meaning you are just calling a plain, standalone function like <code>myFunction()</code>—the default binding kicks in.
                    </p>

                    <div className="space-y-4 bg-[#0d1117] p-6 sm:p-10 rounded-3xl border border-gray-800/60 shadow-inner mt-8 text-gray-300">
                        <p><strong>In Non-Strict Mode:</strong> <code>this</code> defaults to the Global Object (the <code>window</code> object in a browser). This is dangerous and can lead to bugs.</p>
                        <p><strong>In Strict Mode (<code>'use strict'</code>):</strong> <code>this</code> defaults to <code>undefined</code>. This is much safer, as attempting to read a property on <code>undefined</code> will throw a loud error rather than silently failing.</p>
                    </div>

                    <div className="mt-8">
                        <CodeBlock 
                            title="default.js"
                            language="javascript"
                            code={`function sayHi() {
  console.log(this);
}

sayHi(); // standalone call. 'this' is undefined (in strict mode).`}
                        />
                    </div>
                </Section>

                <Section title="The Great Pitfall: Losing this" icon={AlertTriangle} id="losing-this">
                    <p className="text-lg sm:text-xl font-medium text-white leading-relaxed">
                        The dynamic nature of <code>this</code> leads to the most common bug in JavaScript: losing the implicit binding. This happens when you pass a method as a callback or assign it to a new variable.
                    </p>

                    <div className="mt-8">
                        <CodeBlock 
                            title="pitfall.js"
                            language="javascript"
                            code={`const logger = {
  prefix: "[APP]",
  log(message) { console.log(this.prefix + " " + message); }
};

// ❌ Mistake 1: Assigning to a variable
const standaloneLog = logger.log;
standaloneLog("Error!"); // TypeError: Cannot read properties of undefined

// ❌ Mistake 2: Passing as a callback
setTimeout(logger.log, 1000); // TypeError: Cannot read properties of undefined`}
                        />
                    </div>

                    <HighlightBox title="Why did it fail?" type="warn">
                        Because at the exact moment the function was actually executed by <code>setTimeout</code> or <code>standaloneLog</code>, there was <strong>no object to the left of the dot</strong>. It fell back to Default Binding (Rule 4).
                    </HighlightBox>

                    <h4 className="text-2xl font-bold text-emerald-400 mt-10 mb-4">The Fix: Use .bind()</h4>
                    <p className="text-gray-300 leading-relaxed mb-6">
                        You can fix this by explicitly locking the context using <code>.bind()</code> before passing the function.
                    </p>

                    <CodeBlock 
                        title="fix.js"
                        language="javascript"
                        code={`setTimeout(logger.log.bind(logger), 1000); // Works perfectly!`}
                    />
                </Section>

                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript/explicit-binding" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">Explicit Binding</span>
                            </div>
                        </Link>

                        <Link to="/webdevelopment/javascript/arrow-functions-this" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block group-hover:text-yellow-500/80 transition-colors">Up Next</span>
                                <span className="text-gray-200 font-bold text-xs sm:text-sm group-hover:text-white transition-colors">Arrow Functions</span>
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

export default ImplicitDefaultBinding;
