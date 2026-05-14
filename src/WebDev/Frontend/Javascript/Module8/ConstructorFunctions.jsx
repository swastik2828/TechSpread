import React from 'react';
import { BookOpen, Key, Lightbulb, AlertTriangle, ArrowRight, Compass, Settings } from 'lucide-react';
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

const ConstructorFunctions = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="Constructor Functions & The Pre-ES6 Era | JavaScript"
                description="Explore JavaScript Constructor Functions, the magic of the new keyword, and how classical OOP was mimicked before ES6."
                keywords="javascript constructor functions, javascript new keyword, js prototype property, pre-es6 javascript oop"
                url="/webdevelopment/javascript/constructor-functions"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-yellow-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                
                <div className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                        <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 8.2: The Pre-ES6 Era</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        Constructor <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-yellow-500">Functions.</span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light px-4">
                        How developers mimicked classical OOP in JavaScript for 20 years.
                    </p>
                </div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">
                <p className="text-lg sm:text-xl font-medium text-white leading-relaxed mb-8">
                    When JavaScript was created, it was designed as prototypal by nature but was forced to wear a classical, class-based disguise. This disguise was implemented using Constructor Functions and the <code>new</code> keyword.
                </p>

                <Section title="The Anatomy of a Constructor Function" icon={Settings} id="anatomy">
                    <p className="text-gray-300 leading-relaxed">
                        A constructor function is just a normal, everyday JavaScript function. By convention, developers capitalize the first letter to signal: "Hey, do not call this function normally; it must be called with the <code>new</code> keyword."
                    </p>
                    <div className="mt-6">
                        <CodeBlock 
                            title="constructor.js"
                            language="javascript"
                            code={`// Capitalized by convention
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding methods to the constructor's prototype property
Person.prototype.greet = function() {
  return "Hello, my name is " + this.name + " and I am " + this.age + " years old.";
};

const alice = new Person('Alice', 28);
console.log(alice.greet());`}
                        />
                    </div>
                </Section>

                <Section title="The Magic of the new Keyword" icon={Lightbulb} id="new-keyword">
                    <p className="text-gray-300 leading-relaxed">
                        The magic does not lie in the function itself; it lies entirely in the <code>new</code> keyword. When you use <code>new</code>, the engine performs four crucial steps behind the scenes:
                    </p>
                    <ul className="list-decimal pl-6 space-y-3 mt-4 text-gray-300 font-medium mb-6">
                        <li><strong>Creates a new object:</strong> A brand new empty object <code>{'{'} {'}'}</code> is created.</li>
                        <li><strong>Links the prototype:</strong> It sets the hidden <code>[[Prototype]]</code> link of this new object to point to the <code>prototype</code> property of the constructor function.</li>
                        <li><strong>Binds this:</strong> It calls the constructor function, forcing <code>this</code> to point to the newly created object.</li>
                        <li><strong>Returns the object:</strong> It automatically returns the newly populated object.</li>
                    </ul>
                    <HighlightBox title="The Global Variable Disaster" type="warn">
                        If a developer forgets the new keyword (e.g., <code>const alice = Person('Alice', 28);</code>), the four steps do not happen. <code>this</code> defaults to the global object (window), creating accidental global variables <code>window.name</code> and <code>window.age</code>, and alice becomes undefined. This was a massive source of bugs in early web development.
                    </HighlightBox>
                </Section>

                <Section title="The .prototype Property Explained" icon={BookOpen} id="prototype-prop">
                    <p className="text-gray-300 leading-relaxed">
                        One of the most confusing concepts is the difference between an object's hidden <code>[[Prototype]]</code> link and a function's <code>.prototype</code> property.
                    </p>
                    <p className="text-gray-300 leading-relaxed mt-4">
                        Every time you create a function, the engine attaches an empty object to it called <code>.prototype</code>. <strong>This is not the function's own prototype.</strong> Rather, it is a workspace object. Its sole purpose is to serve as the blueprint that all future instances will link to when the function is called with <code>new</code>.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-10 mb-4">instanceof and the Prototype Chain</h3>
                    <p className="text-gray-300 leading-relaxed">
                        In the pre-ES6 era, verifying object types was done using <code>instanceof</code>.
                    </p>
                    <div className="mt-4">
                        <CodeBlock 
                            title="instanceof.js"
                            language="javascript"
                            code={`console.log(alice instanceof Person); // true
console.log(alice instanceof Object); // true
console.log(alice instanceof Array);  // false`}
                        />
                    </div>
                    <p className="text-gray-300 leading-relaxed mt-4">
                        What <code>instanceof</code> actually does is walk up the hidden prototype chain, asking: "Does this link point to Person.prototype?" If yes, it returns true. Because <code>Object.prototype</code> is at the top of the chain, <code>alice instanceof Object</code> is also true.
                    </p>
                </Section>

                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript/prototype-chain" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">The Prototype Chain</span>
                            </div>
                        </Link>

                        <Link to="/webdevelopment/javascript/es6-classes" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block group-hover:text-yellow-500/80 transition-colors">Up Next</span>
                                <span className="text-gray-200 font-bold text-xs sm:text-sm group-hover:text-white transition-colors">ES6 Classes</span>
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

export default ConstructorFunctions;
