import React from 'react';
import { BookOpen, Key, Lightbulb, AlertTriangle, ArrowRight, Backpack, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";
import JsClosureSimulator from "../../../../simulators/web/js/JsClosureSimulator";

const Section = ({ title, icon: Icon, children, id }) => (
    <section id={id} className="relative mb-16 sm:mb-24 scroll-mt-28">
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full">
            <div className="p-2 sm:p-3 md:p-4 bg-gradient-to-br from-yellow-500/20 to-yellow-500/20 rounded-xl sm:rounded-2xl border border-yellow-500/40 text-yellow-500 shadow-[0_0_30px_rgba(16,185,129,0.15)] flex-shrink-0">
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

const Closures = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="Closures | JavaScript Course"
                description="Master JavaScript Closures. Learn how inner functions remember their outer variables, escape the Garbage Collector, and create private state."
                keywords="javascript closures, closures in js, js garbage collector, private state javascript, memoization javascript"
                url="/webdevelopment/javascript/closures"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-yellow-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                
                <div className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                        <Backpack className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 6.5: Closures</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        JS <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-yellow-500">Closures.</span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light px-4">
                        The "Backpack" of Memory. How functions remember their birthplace, even after it's destroyed.
                    </p>
                </div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">
                
                <Section title="The Defining Characteristic of JS" icon={Rocket} id="closures-intro">
                    <p className="text-lg sm:text-xl font-medium text-white leading-relaxed mb-6">
                        Closures are the defining characteristic of JavaScript. A closure occurs when a function "remembers" the variables around it, even after the parent function has finished running and has been destroyed.
                    </p>

                    <HighlightBox title="The Mental Model: The Astronaut's Backpack" type="note">
                        Imagine an astronaut leaving Earth to live on a space station.
                        <br/><br/>
                        • <strong>Earth</strong> represents the parent function.<br/>
                        • <strong>The space station</strong> represents the global scope.<br/>
                        <br/>
                        When the astronaut leaves Earth, they pack a specialized <strong>backpack</strong> containing Earth's oxygen and soil (the variables). Even though they are no longer on Earth, and even if Earth were to disappear completely, they still have full access to the oxygen and soil inside their backpack.
                    </HighlightBox>

                    <div className="mt-12">
                        <h4 className="text-2xl sm:text-3xl font-extrabold text-amber-400 mb-6">Step-by-Step Code Walkthrough: Private State</h4>
                        <p className="mb-4">Let's build a secure digital wallet.</p>
                        <CodeBlock 
                            title="wallet.js"
                            language="javascript"
                            code={`function createWallet(initialFunds) {
  // 'balance' is a local variable. It is born here.
  let balance = initialFunds;

  // We return an object containing functions.
  // These functions are "astronauts" leaving the parent function.
  return {
    deposit: function(amount) {
      balance += amount;
      console.log(\`Deposited \${amount}. New balance: \${balance}\`);
    },
    checkBalance: function() {
      return balance;
    }
  };
}

const myWallet = createWallet(100); 
// createWallet has finished executing. Its execution context is destroyed.
// HOWEVER, myWallet.deposit still has a "backpack" containing 'balance'.

myWallet.deposit(50); // Deposited 50. New balance: 150.

// The security benefit:
console.log(myWallet.balance); // undefined! 
// The outside world cannot touch the balance. It is perfectly private.`}
                        />
                    </div>

                    <div className="mt-16 mb-8 pt-8 border-t border-gray-800/60">
                        <h4 className="text-2xl sm:text-3xl font-black text-white mb-6">Interactive Backpack Simulator</h4>
                        <p className="text-gray-400 mb-8 font-medium">Use the interactive simulator below to watch exactly how the JavaScript engine preserves data against the Garbage Collector!</p>
                        <JsClosureSimulator />
                    </div>

                    <div className="pt-10 mt-10 border-t border-gray-800">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-amber-400 mb-4">
                            Under the Hood: Escaping the Garbage Collector
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            In most programming languages, when a function finishes running, a system called the <strong>Garbage Collector</strong> sweeps in and deletes all the local variables to free up RAM.
                            <br/><br/>
                            Closures defeat the Garbage Collector. Because the inner function (<code>deposit</code>) still references the outer variable (<code>balance</code>), the JavaScript engine marks <code>balance</code> as "in use" and refuses to delete it. It preserves the exact memory address of that variable exclusively for the inner function.
                        </p>
                    </div>

                    <HighlightBox title="Professional Use Case: Memoization" type="key">
                        Senior engineers use closures for <strong>Memoization</strong>—giving functions a "memory" to speed up applications. If an app performs a massive calculation, a closure can store the result in a private cache object. The next time the user asks for the same calculation, the function checks its "backpack," sees the answer is already there, and returns it instantly without re-doing the math.
                    </HighlightBox>

                </Section>

                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript/tdz" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">Temporal Dead Zone</span>
                            </div>
                        </Link>

                        <Link to="/webdevelopment/javascript/scope-chain" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block group-hover:text-yellow-500/80 transition-colors">Up Next</span>
                                <span className="text-gray-200 font-bold text-xs sm:text-sm group-hover:text-white transition-colors">The Scope Chain</span>
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

export default Closures;
