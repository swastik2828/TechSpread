import React from 'react';
import { BookOpen, Key, Lightbulb, AlertTriangle, ArrowRight, Compass, Settings, Layers } from 'lucide-react';
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

const InheritanceVsComposition = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="Inheritance vs Composition in JavaScript"
                description="Understand System Design principles in JavaScript. Learn why Composition over Inheritance solves the fragile base class and Gorilla/Banana problem."
                keywords="javascript composition over inheritance, js inheritance vs composition, liskov substitution javascript, system design javascript"
                url="/webdevelopment/javascript/inheritance-vs-composition"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-yellow-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                
                <div className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                        <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 8.4: System Design</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        Inheritance vs <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-yellow-500">Composition.</span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light px-4">
                        Why inheriting the gorilla just for the banana is a bad idea.
                    </p>
                </div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">
                <p className="text-lg sm:text-xl font-medium text-white leading-relaxed mb-8">
                    The introduction of ES6 classes made classical-style inheritance incredibly easy in JavaScript. Unfortunately, it made it too easy. Because developers were armed with a shiny new extends keyword, many began porting over deeply nested, rigid class hierarchies from Java or C#. This often led to tangled, unmaintainable code. To write truly excellent software, we must understand the principles of system design and know when to avoid inheritance altogether.
                </p>

                <Section title="The Is-A Test and Liskov Substitution" icon={BookOpen} id="is-a-test">
                    <p className="text-gray-300 leading-relaxed">
                        Inheritance implies a strict <strong>"Is-A"</strong> relationship. When deciding whether to use the extends keyword, you must ask yourself: Is the child class genuinely a more specific version of the parent class in all contexts?
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-300 font-medium mb-6">
                        <li>A Dog is an Animal. (<strong>Valid</strong>)</li>
                        <li>A CheckingAccount is a BankAccount. (<strong>Valid</strong>)</li>
                        <li>A UserProfile is a Map (just because it needs to store key-value pairs). (<strong>Invalid</strong>)</li>
                    </ul>
                    <HighlightBox title="Liskov Substitution Principle" type="warn">
                        The third example violates this core tenet. If UserProfile extends Map, it inherits methods like <code>.clear()</code> and <code>.delete()</code>. Do you really want any part of your application to have the power to instantly wipe out a user profile by accidentally calling <code>profile.clear()</code>? A child class must be perfectly substitutable for its parent without breaking the program's logic.
                    </HighlightBox>
                </Section>

                <Section title="The Pitfalls of Deep Hierarchies" icon={AlertTriangle} id="pitfalls">
                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">The Fragile Base Class Problem</h3>
                    <p className="text-gray-300 leading-relaxed">
                        Inheritance creates the tightest form of coupling in software engineering. When you build deep inheritance trees, every child class becomes heavily dependent on the exact implementation details of its ancestors. If you change a method in the root base class, it sends a shockwave down the chain, potentially breaking child classes.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">The Gorilla / Banana Problem</h3>
                    <p className="text-gray-300 leading-relaxed italic border-l-4 border-amber-500 pl-4 my-6">
                        "The problem with object-oriented languages is they've got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle." <br/><span className="text-sm font-bold mt-2 inline-block">— Joe Armstrong</span>
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        If you need a specific piece of functionality (the banana) from a parent class, inheritance forces you to inherit the entire parent object, its constructor logic, all of its properties, and all of its ancestors.
                    </p>
                </Section>

                <Section title="The Solution: Composition Over Inheritance" icon={Layers} id="composition">
                    <p className="text-gray-300 leading-relaxed">
                        Instead of defining objects by what they are (Is-A), we construct objects by what they can do (<strong>Has-A / Can-Do</strong>). Composition encourages you to build small, isolated, reusable pieces of functionality and combine them.
                    </p>
                    <div className="mt-6">
                        <CodeBlock 
                            title="composition.js"
                            language="javascript"
                            code={`// 1. Define distinct, isolated capabilities (Behaviors)
const canFly = (state) => ({
  fly: () => console.log(\`\${state.name} flaps its wings and takes off!\`)
});

const canSwim = (state) => ({
  swim: () => console.log(\`\${state.name} paddles through the water.\`)
});

const canQuack = (state) => ({
  quack: () => console.log(\`\${state.name} lets out a loud quack!\`)
});

// 2. Create a Factory Function to assemble the specific object
function createDuck(name) {
  // State is captured via closure
  const state = { name: name, energy: 100 };

  // 3. Compose the final object by merging capabilities
  return Object.assign(
    {},            // Target empty object
    canFly(state), // Add flying ability
    canSwim(state),// Add swimming ability
    canQuack(state)// Add quacking ability
  );
}

const daffy = createDuck('Daffy');
daffy.fly();   // "Daffy flaps its wings and takes off!"`}
                        />
                    </div>
                    <HighlightBox title="Summary of Best Practices" type="tip">
                        - <strong>Understand the Prototype:</strong> Knowing that ES6 classes are just prototypes underneath will save you hours of debugging.
                        <br/>- <strong>Favor Shallow Hierarchies:</strong> If you must use extends, limit it to 1 or 2 levels deep.
                        <br/>- <strong>Classes for Infrastructure:</strong> Great for well-defined data models or core framework structures.
                        <br/>- <strong>Composition for Features:</strong> When building complex business logic or UI elements with overlapping behaviors, default to functional composition.
                    </HighlightBox>
                </Section>

                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript/es6-classes" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">ES6 Classes</span>
                            </div>
                        </Link>

                        <Link to="/webdevelopment/javascript" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block group-hover:text-yellow-500/80 transition-colors">Course Home</span>
                                <span className="text-gray-200 font-bold text-xs sm:text-sm group-hover:text-white transition-colors">Back to Dashboard</span>
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

export default InheritanceVsComposition;
