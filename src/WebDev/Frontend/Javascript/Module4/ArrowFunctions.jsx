import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Key, Lightbulb, AlertTriangle, ArrowRight, Code2, GitBranch, Terminal } from 'lucide-react';
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

const HighlightBox = ({ title, children, type = "info" }) => {
    const config = {
        key: { icon: Key, color: "text-amber-400", border: "border-amber-500/40", bg: "bg-gradient-to-br from-amber-900/40 to-yellow-900/10", heading: "text-amber-500", shadow: "shadow-amber-500/10" },
        note: { icon: BookOpen, color: "text-sky-400", border: "border-sky-500/40", bg: "bg-gradient-to-br from-sky-900/40 to-blue-900/10", heading: "text-sky-400", shadow: "shadow-sky-500/10" },
        tip: { icon: Lightbulb, color: "text-emerald-400", border: "border-emerald-500/40", bg: "bg-gradient-to-br from-emerald-900/40 to-green-900/10", heading: "text-emerald-400", shadow: "shadow-emerald-500/10" },
        warn: { icon: AlertTriangle, color: "text-rose-400", border: "border-rose-500/40", bg: "bg-gradient-to-br from-rose-900/40 to-red-900/10", heading: "text-rose-500", shadow: "shadow-rose-500/10" },
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

const ArrowFunctions = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="Arrow Functions | JavaScript Module 4"
                description="Master modern JavaScript Arrow Functions (ES6). Learn concise syntaxes, implicit returns, and lexical scoping."
                keywords="javascript arrow functions, ES6 fat arrow, javascript lexical this binding"
                url="/webdevelopment/javascript/arrow-functions"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-amber-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                        <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 4.4: Arrow Syntax</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        Arrow <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-orange-500">Functions.</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light px-4">
                        Discover the modern syntactical structure that completely overhauled JavaScript function methodology.
                    </p>
                </motion.div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">

                <p className="text-lg sm:text-xl font-medium text-white p-6 bg-[#0d1117] border border-gray-800/60 rounded-2xl mb-12">
                    Arrow functions are a concise function syntax introduced in ECMAScript 2015 (ES6). They are not simply a shorthand alternative to the traditional <code>function</code> keyword. Instead, they represent a fundamental shift in how functions operate under the hood. Most notably, they have a completely different relationship with the <code>this</code> keyword and lack their own <code>arguments</code> object. These mechanical differences make arrow functions incredibly powerful in specific modern development scenarios—such as React components and array iterations—while making them structurally incorrect in other specific use cases.
                </p>

                <Section title="Syntax Variants" icon={Code2} id="arrow-functions">
                    <p className="mb-4">
                        One of the primary reasons arrow functions became so popular so quickly is their flexibility. They support multiple syntax forms designed to adapt to the complexity of the logic you are writing. This adaptability reduces visual clutter and makes your code much easier to read at a glance.
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li><strong>Zero Parameters:</strong> If your function takes no arguments, you must use an empty pair of parentheses <code>() =&gt;</code>.</li>
                        <li><strong>Single Parameter:</strong> If you have exactly one parameter, you can entirely omit the parentheses around it, though many modern styling guides recommend keeping them for visual consistency.</li>
                        <li><strong>Multiple Parameters:</strong> If you are passing in two or more parameters, parentheses are strictly required.</li>
                    </ul>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#38bdf8] mt-12 sm:mt-16 mb-4">
                        Implicit vs. Explicit Returns
                    </h3>
                    <p className="mb-4">
                        In traditional JavaScript functions, if you want a function to produce a value, you are absolutely required to use the <code>return</code> keyword. Arrow functions introduce the concept of the <strong>implicit return</strong>.
                    </p>
                    <p className="mb-4">
                        If the body of your arrow function consists of a single expression, you can omit the curly braces <code>{}</code> entirely. When you do this, JavaScript automatically evaluates that single expression and returns the result back to the caller. You do not need to write the <code>return</code> keyword. This is what developers mean when they say "implicit return."
                    </p>
                    <p className="mb-4">
                        However, if your function logic is more complex and requires multiple lines of code—such as defining variables, running loops, or executing multiple logical steps—you must wrap the body in curly braces. Once you open a block with curly braces, the implicit return feature is disabled, and you must explicitly write the <code>return</code> keyword if you want to pass a value out of the function.
                    </p>

                    <HighlightBox title="The Object Literal Trap" type="warn">
                        Returning an object literal directly from a concise one-line arrow function is a common stumbling block for beginners. If you write <code>const makeUser = (name) =&gt; &#123; username: name &#125;</code>, JavaScript gets confused. It reads the opening curly brace <code>&#123;</code> not as an object, but as the start of a function block. To fix this, you must physically wrap the object literal in parentheses to force the JavaScript engine to evaluate it as an expression: <code>const makeUser = (name) =&gt; (&#123; username: name &#125;)</code>.
                    </HighlightBox>

                    <CodeBlock
                        title="arrow-syntaxes.js"
                        language="javascript"
                        code={`// 1. Zero parameters
const generateRandomId = () => Math.random().toString(36).substring(2);

// 2. Single parameter (parentheses are optional here)
const double = n => n * 2;
const greet = (name) => \`Hello, \${name}!\`;

// 3. Multiple parameters (parentheses required)
const add = (a, b) => a + b;
 
// 4. Block body — explicit 'return' is strictly required
const clamp = (n, min, max) => {
  if (n < min) return min;
  if (n > max) return max;
  return n;
};
 
// 5. Returning an object literal — parentheses required!
const toPoint = (x, y) => ({ x, y });
 
// 6. Idiomatic use — Clean array transformation pipelines
const activeNames = users
  .filter(user => user.isActive)
  .map(user => user.name.trim())
  .sort();`}
                    />
                </Section>

                <Section title="The Lexical 'this' Binding" icon={GitBranch} id="lexical-this">
                    <p className="mb-4">
                        To truly master arrow functions, you must understand how they handle the <code>this</code> keyword. In traditional JavaScript, every time a new standard function is created, it defines its very own <code>this</code> context. The value of <code>this</code> inside a regular function depends entirely on <strong>how the function is called</strong>, not where it was defined. This historical behavior has caused countless bugs, especially when passing standard functions as callbacks to array methods or timers like <code>setTimeout</code>.
                    </p>
                    <p className="mb-4">
                        Arrow functions completely fix this issue by using a mechanism called <strong>lexical scoping</strong>. An arrow function does not create its own <code>this</code> context. Instead, it absorbs the <code>this</code> value from its surrounding execution environment at the time it is defined. It locks onto that parent scope and never lets go, regardless of how or where the arrow function is eventually executed.
                    </p>

                    <CodeBlock
                        title="lexical-scoping.js"
                        language="javascript"
                        code={`const UserProfile = {
  name: 'System Admin',
  actions: ['Create', 'Read', 'Update'],
  
  printActionsLegacy: function() {
    // ❌ BUG: Standard callback functions create their VERY OWN "this". 
    // The inner function loses connection to the UserProfile object.
    this.actions.forEach(function(action) {
      // 'this' is undefined (or the global window object) here!
      console.log(this.name + " executes " + action); 
    });
  },

  printActionsModern() {
    // ✅ PERFECT: Arrow syntax magically absorbs and permanently anchors "this" 
    // to whatever it was outside. It inherently knows 'this' is UserProfile.
    this.actions.forEach((action) => {
      console.log(this.name + " executes " + action);
    });
  }
};`}
                    />
                </Section>

                <Section title="The Missing Arguments Object" icon={Lightbulb} id="arguments-object">
                    <p className="mb-4">
                        Another critical distinction is the <code>arguments</code> object. Standard functions come with a hidden, array-like object called <code>arguments</code> that contains every single value passed into the function, even if you didn't explicitly name those parameters in the signature.
                    </p>
                    <p className="mb-4">
                        Arrow functions <strong>do not have</strong> an <code>arguments</code> object. If you try to access <code>arguments</code> inside an arrow function, JavaScript will throw a ReferenceError (or look for it in the outer scope). If you need to write a function that accepts an unlimited or unknown number of arguments using modern ES6 syntax, you should use the <strong>Rest Parameter</strong> syntax (<code>...args</code>) instead. Rest parameters are actually superior because they generate a real JavaScript Array, granting you immediate access to helpful methods like <code>.map()</code>, <code>.filter()</code>, and <code>.reduce()</code>.
                    </p>

                    <HighlightBox title="When NOT to use Arrow Functions" type="key">
                        Because arrow functions lack their own <code>this</code> binding, there are three major scenarios where you should absolutely avoid them:
                        <br/><br/>
                        <strong>1. Object Methods:</strong> If you are writing a method inside an object literal that needs to access other properties on that exact same object, use a standard function. <br/>
                        <strong>2. Event Listeners (Vanilla JS):</strong> When attaching DOM event listeners, standard functions automatically bind <code>this</code> to the HTML element that triggered the event. Arrow functions will not do this.<br/>
                        <strong>3. Constructors:</strong> Arrow functions cannot be used as constructor functions. If you try to use the <code>new</code> keyword on an arrow function, your program will crash.
                    </HighlightBox>
                </Section>
                
                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript/return-values" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">Return Values</span>
                            </div>
                        </Link>

                        <Link to="/webdevelopment/javascript/execution-context" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.1)] transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block group-hover:text-amber-500/80 transition-colors">Up Next</span>
                                <span className="text-gray-200 font-bold text-xs sm:text-sm group-hover:text-white transition-colors">Execution Context</span>
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

export default ArrowFunctions;