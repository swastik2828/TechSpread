import React from 'react';
import { BookOpen, Key, Lightbulb, AlertTriangle, ArrowRight, Waypoints, Map } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";
import JsScopeChainSimulator from "../../../../simulators/web/js/JsScopeChainSimulator";

const Section = ({ title, icon: Icon, children, id }) => (
    <section id={id} className="relative mb-16 sm:mb-24 scroll-mt-28">
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full">
            <div className="p-2 sm:p-3 md:p-4 bg-gradient-to-br from-yellow-500/20 to-yellow-500/20 rounded-xl sm:rounded-2xl border border-yellow-500/40 text-yellow-500 shadow-[0_0_30px_rgba(6,182,212,0.15)] flex-shrink-0">
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

const ScopeChain = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="The Scope Chain | JavaScript Course"
                description="Learn about the JavaScript Scope Chain, Lexical Environments, and Variable Shadowing."
                keywords="javascript scope chain, lexical environments javascript, variable shadowing javascript, js execution context"
                url="/webdevelopment/javascript/scope-chain"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-yellow-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                
                <div className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                        <Waypoints className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 6.6: Scope Chain</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-yellow-500">Scope Chain.</span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light px-4">
                        The Great Data Hunt. How the JS engine follows hidden arrows to find your variables.
                    </p>
                </div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">
                
                <Section title="The Great Data Hunt" icon={Map} id="scope-chain-intro">
                    <p className="text-lg sm:text-xl font-medium text-white leading-relaxed mb-6">
                        When a function needs a variable, it has to find it. The structured path it takes to find that variable is called the <strong>Scope Chain</strong>.
                    </p>

                    <HighlightBox title="The Mental Model: Asking for Sugar" type="note">
                        You are baking and realize you are out of sugar.
                        <br/><br/>
                        1. <strong>Local Check:</strong> You check your own kitchen cabinets. (Current Function)<br/>
                        2. <strong>Parent Check:</strong> You find nothing, so you walk next door and ask your neighbor. (Outer Function)<br/>
                        3. <strong>Grandparent Check:</strong> Your neighbor is out, so you walk down the street to the corner store. (Global Scope)<br/>
                        4. <strong>Failure:</strong> If the corner store is out of sugar, it simply doesn't exist. You give up and fail. (ReferenceError)
                    </HighlightBox>

                    <div className="mt-12">
                        <h4 className="text-2xl sm:text-3xl font-extrabold text-amber-400 mb-6">Step-by-Step Code Walkthrough: Variable Shadowing</h4>
                        <p className="mb-4">The engine searches strictly from the inside out, and it stops the exact millisecond it finds a match. This creates <strong>Shadowing</strong>.</p>
                        <CodeBlock 
                            language="javascript"
                            code={`const theme = "Dark Mode"; // The Corner Store

function renderPage() {
  const theme = "Light Mode"; // The Neighbor

  function renderButton() {
    const theme = "High Contrast Mode"; // Your Kitchen
    
    // The engine checks the kitchen first, finds a match, and stops looking.
    console.log(\`Button is using: \${theme}\`); 
  }
  
  renderButton();
}

renderPage(); // Outputs: Button is using: High Contrast Mode`}
                        />
                        <p className="mt-4 text-gray-400">Even though there are three variables named <code>theme</code>, they do not conflict. The innermost variable casts a "shadow" over the outer ones.</p>
                    </div>

                    <div className="mt-16 mb-8 pt-8 border-t border-gray-800/60">
                        <h4 className="text-2xl sm:text-3xl font-black text-white mb-6">Interactive Scope Chain Simulator</h4>
                        <p className="text-gray-400 mb-8 font-medium">Use the interactive simulator below to follow the engine as it traverses up the Lexical Environments to find data!</p>
                        <JsScopeChainSimulator />
                    </div>

                    <div className="pt-10 mt-10 border-t border-gray-800">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-amber-400 mb-4">
                            Under the Hood: Lexical Environments
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Every time a function runs, it creates a hidden, internal object called a <strong>Lexical Environment</strong>. This object holds two things:
                            <br/><br/>
                            1. All the local variables.<br/>
                            2. A secret arrow (a reference pointer) pointing to the Lexical Environment of its parent.
                            <br/><br/>
                            The Scope Chain is simply the JavaScript engine following these arrows, one by one, until it either finds the variable or hits the Global Scope (which has an arrow pointing to <code>null</code>).
                        </p>
                    </div>

                </Section>

                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript/closures" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">Closures</span>
                            </div>
                        </Link>

                        <div className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-cyan-900/10 border border-cyan-800/50 w-full sm:w-auto order-1 sm:order-2 opacity-50 cursor-not-allowed">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-yellow-500/50 font-bold uppercase tracking-widest mb-1 block">End of Module</span>
                                <span className="text-gray-400 font-bold text-xs sm:text-sm">Module Complete</span>
                            </div>
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-cyan-900/20 text-cyan-600 flex items-center justify-center border border-cyan-800/30">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </article>
    );
};

export default ScopeChain;
