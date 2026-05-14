import React from 'react';
import { BookOpen, Key, Lightbulb, AlertTriangle, ArrowRight, Compass, Link2, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";
import JsPrototypeSimulator from "../../../../simulators/web/js/JsPrototypeSimulator";

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

const PrototypeChain = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="The Prototype Chain | JavaScript Course"
                description="Understand prototypal inheritance, the hidden [[Prototype]] link, and how JavaScript resolves property lookups through the prototype chain."
                keywords="javascript prototype chain, prototypal inheritance, object.getprototypeof, property shadowing, javascript oop"
                url="/webdevelopment/javascript/prototype-chain"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-yellow-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                
                <div className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                        <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 8.1: Prototypes</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-yellow-500">Prototype Chain.</span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light px-4">
                        Delegation and Object Linkage in JavaScript's true Object-Oriented system.
                    </p>
                </div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">
                <p className="text-lg sm:text-xl font-medium text-white leading-relaxed mb-8">
                    JavaScript is a multi-paradigm language, but its approach to Object-Oriented Programming (OOP) is uniquely misunderstood. Unlike traditional class-based languages such as Java, C++, or C#, JavaScript’s object model is built entirely on <strong>prototypal inheritance</strong>—a system where objects inherit directly from other objects.
                </p>

                <Section title="The Hidden [[Prototype]] Link" icon={Link2} id="hidden-link">
                    <p className="text-gray-300 leading-relaxed">
                        To understand JavaScript, you must fundamentally shift your mental model of what an "object" is. In JavaScript, an object is a dynamic collection of key-value pairs. But more importantly, almost every object has a secret, hidden link to another object. This linked object is called its prototype.
                    </p>
                    <p className="text-gray-300 leading-relaxed mt-4">
                        Whenever you create an object, the JavaScript engine automatically attaches a hidden internal reference to it, defined in the ECMAScript specification as <code>[[Prototype]]</code>.
                    </p>
                    <HighlightBox title="Delegation Mechanism" type="key">
                        You can think of this link as a "fallback" or a "delegation" mechanism. Imagine you are working in an office and you are asked a question. If you know the answer, you respond immediately. If you don't know the answer, you delegate the question to your manager. This is exactly how JavaScript resolves property access.
                    </HighlightBox>
                    <p className="text-gray-300 leading-relaxed mt-4">
                        Historically, browsers exposed this hidden link via the <code>__proto__</code> property. While you will still see <code>__proto__</code> in legacy codebases, the modern, standard, and safe way to access this hidden link is using <code>Object.getPrototypeOf(obj)</code>.
                    </p>
                </Section>

                <Section title="The Property Lookup Mechanism" icon={Search} id="lookup">
                    <p className="text-gray-300 leading-relaxed">
                        When you attempt to access a property or method on a JavaScript object (e.g., <code>myObject.toString()</code>), the engine initiates a specific sequence:
                    </p>
                    <ul className="list-decimal pl-6 space-y-3 mt-4 text-gray-300 font-medium">
                        <li><strong>Own Property Check:</strong> The engine first looks directly at the object itself. "Does myObject have a property explicitly named toString?"</li>
                        <li><strong>First Delegation:</strong> If the property is not found, the engine follows the <code>[[Prototype]]</code> link to the object's prototype. It then asks, "Does this prototype object have the toString property?"</li>
                        <li><strong>Chain Traversal:</strong> If it is still not found, the engine follows the prototype's own prototype link. It continues to traverse "up" this chain of linked objects.</li>
                        <li><strong>End of the Chain:</strong> Eventually, the chain leads to the root prototype, usually <code>Object.prototype</code>. The prototype of <code>Object.prototype</code> is strictly <code>null</code>. If the engine reaches <code>null</code>, it returns <code>undefined</code>.</li>
                    </ul>

                    <div className="mt-12">
                        <JsPrototypeSimulator />
                    </div>
                </Section>

                <Section title="Memory Efficiency & Shadowing" icon={BookOpen} id="memory">
                    <h3 className="text-2xl font-bold text-white mb-4">Memory Efficiency</h3>
                    <p className="text-gray-300 leading-relaxed">
                        Why does JavaScript use this system? The primary answer is memory efficiency. When you create an array <code>const numbers = [1, 2, 3]</code>, you instantly have access to dozens of methods like <code>.map()</code> and <code>.filter()</code>. If JavaScript attached a brand new copy of all these methods directly onto every array, your application would consume massive amounts of memory.
                    </p>
                    <p className="text-gray-300 leading-relaxed mt-4">
                        Instead, JavaScript stores these methods exactly once in memory, on an object named <code>Array.prototype</code>. Every array you create is born with an invisible link pointing directly to <code>Array.prototype</code>.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-10 mb-4">Property Shadowing</h3>
                    <p className="text-gray-300 leading-relaxed">
                        The prototype chain is strictly used for <strong>reading</strong> values. When you <strong>write</strong> (assign) a value to an object, the assignment always happens directly on the object itself, never on the prototype. This protects shared prototypes from accidental mutation.
                    </p>
                    <div className="mt-6">
                        <CodeBlock 
                            title="shadowing.js"
                            language="javascript"
                            code={`const parentObj = { hairColor: 'brown', surname: 'Smith' };

// Object.create() makes a new object with parentObj as its prototype
const childObj = Object.create(parentObj);

console.log(childObj.surname); // Output: 'Smith' (Found via chain)

// Write to the child object
childObj.hairColor = 'blonde'; 

console.log(childObj.hairColor); // Output: 'blonde' (Found on childObj)
console.log(parentObj.hairColor); // Output: 'brown' (Parent untouched!)`}
                        />
                    </div>
                    
                    <HighlightBox title="Interrogating the Chain" type="note">
                        Because objects have both their "own" properties and "inherited" properties, we have different tools:
                        <br/>- The <code>in</code> operator traverses the chain (<code>'surname' in childObj</code> is true).
                        <br/>- <code>Object.hasOwn(childObj, 'surname')</code> only checks the object itself and returns false.
                    </HighlightBox>
                </Section>

                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript/arrow-functions-this" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">Arrow Functions & this</span>
                            </div>
                        </Link>

                        <Link to="/webdevelopment/javascript/constructor-functions" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block group-hover:text-yellow-500/80 transition-colors">Up Next</span>
                                <span className="text-gray-200 font-bold text-xs sm:text-sm group-hover:text-white transition-colors">Constructor Functions</span>
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

export default PrototypeChain;
