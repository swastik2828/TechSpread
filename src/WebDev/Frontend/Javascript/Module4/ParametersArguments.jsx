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

const ParametersArguments = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="Parameters & Arguments | JavaScript Module 4"
                description="Understand the difference between parameters and arguments in JavaScript. Learn ES6 default variables, rest syntax, and destructured objects deeply."
                keywords="javascript parameters, function arguments, default parameters, rest operators, javascript destructuring configuration"
                url="/webdevelopment/javascript/parameters"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-amber-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                        <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 4.2: Data Input</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        Parameters <span className="text-gray-500">&</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-orange-500">Arguments.</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light px-4">
                        Mastering the modern structural pipeline for securely passing dynamic data into your logic blocks.
                    </p>
                </motion.div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">

                <p className="text-lg sm:text-xl font-medium text-white p-6 bg-[#0d1117] border border-gray-800/60 rounded-2xl mb-12">
                    A function that cannot accept external data is severely limited; it will simply execute the exact same hardcoded logic every single time it runs. To make functions dynamic, reusable, and powerful, we must pass data into them. This is where the concepts of Parameters and Arguments come into play. While often used interchangeably by beginners, they represent two fundamentally different parts of the data pipeline.
                </p>

                <Section title="Defining Inputs: The Difference" icon={Code2} id="parameters-arguments">
                    <p className="mb-4">
                        <strong>Parameters</strong> are the empty placeholders defined inside the parentheses when you <em>create</em> the function. Think of them as reserved parking spaces. They have no actual value until the function is used. <strong>Arguments</strong>, on the other hand, are the concrete, physical values (the actual cars) you pass into the function when you <em>call</em> it.
                    </p>
                    <p className="mb-4">
                        Unlike strict compiled languages such as C++ or Java, JavaScript is incredibly forgiving—sometimes to a fault—when it comes to matching arguments to parameters. JavaScript deliberately does not enforce argument counts:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li><strong>Too Few Arguments:</strong> If you call a function with fewer arguments than it has parameters, JavaScript doesn't crash. It simply assigns the value <code>undefined</code> to the missing parameters.</li>
                        <li><strong>Too Many Arguments:</strong> If you call a function with more arguments than there are parameters, JavaScript silently ignores the excess values. They are not assigned to any named variable, though they can still be accessed using modern rest syntax.</li>
                    </ul>

                    <HighlightBox title="The Legacy 'arguments' Object" type="warn">
                        In older JavaScript code, if you wanted to access an unknown number of arguments, you had to use a hidden, built-in variable called <code>arguments</code>. However, this object was notoriously frustrating to work with. It was "array-like", meaning it had a length property, but it lacked actual Array methods like <code>.map()</code>, <code>.filter()</code>, or <code>.reduce()</code>. Modern JavaScript introduced <strong>Rest Parameters</strong> to fix this exact problem.
                    </HighlightBox>
                </Section>

                <Section title="Default Parameters (ES6+)" icon={Lightbulb} id="default-parameters">
                    <p className="mb-4">
                        Before ES6 (ECMAScript 2015), providing fallback values for missing arguments required messy logical workarounds. Developers frequently had to write code like <code>var username = incomingName || 'Guest';</code>. This created massive bugs if the developer intentionally tried to pass in falsy values like <code>0</code>, <code>""</code> (empty string), or <code>false</code>, because the OR operator would accidentally overwrite them with the default.
                    </p>
                    <p className="mb-4">
                        <strong>Default parameters</strong> natively fix this issue. They allow you to specify exact fallback values directly in the function signature. The fallback only triggers if the argument is strictly missing, or explicitly passed as <code>undefined</code>.
                    </p>
                    <p className="mb-4">
                        A default parameter can be any valid JavaScript expression, including the result of another function call. Crucially, default values are evaluated <em>fresh on each invocation</em>. This means if you use an array <code>[]</code> or an object <code>&#123;&#125;</code> as a default, a brand new object is created in memory every time the function runs. This safely prevents the notorious "shared-state bugs" found in languages like Python, where mutable defaults accidentally share data across multiple function calls.
                    </p>

                    <CodeBlock
                        title="defaults.js"
                        language="javascript"
                        code={`// Modern Default Parameters
function createSession(userId, role = 'guest', expiresIn = 3600) {
  // If 'role' or 'expiresIn' are missing, JavaScript fills them automatically.
  // Passing 0 for expiresIn works perfectly and won't be overwritten!
  return { 
    userId, 
    role, 
    expiresAt: Date.now() + (expiresIn * 1000) 
  };
}

console.log(createSession(991)); 
// Evaluates to: { userId: 991, role: 'guest', expiresAt: <timestamp + 1 hour> }`}
                    />
                </Section>

                <Section title="Rest Parameters (ES6+)" icon={Terminal} id="rest-parameters">
                    <p className="mb-4">
                        Sometimes you need to write a function that can accept an unlimited, unknown amount of data. Think of the built-in <code>Math.max(1, 5, 10, 2)</code> function—it can take two arguments, or two hundred. 
                    </p>
                    <p className="mb-4">
                        The <strong>rest parameter</strong> syntax uses three dots <code>...</code> directly before the parameter name to collect all remaining overflowing arguments into a true JavaScript Array. Because it generates a real Array, you have immediate access to all powerful array transformation methods. 
                    </p>
                    <p className="mb-4">
                        There are two strict rules for using rest parameters: there can be only one rest parameter per function, and it <strong>must be the absolutely last parameter</strong> in the list. It acts as a final net, catching anything that wasn't assigned to the specific named parameters before it.
                    </p>

                    <CodeBlock
                        title="rest-syntax.js"
                        language="javascript"
                        code={`// The '...scores' parameter gathers all extra arguments into a true Array
function calculateStudentAverage(studentName, ...scores) {
  if (scores.length === 0) return \`\${studentName} has no scores yet.\`;
  
  // Because 'scores' is a real array, we can use .reduce() easily
  const total = scores.reduce((sum, score) => sum + score, 0);
  const average = total / scores.length;
  
  return \`\${studentName} averaged \${average}\`;
}

console.log(calculateStudentAverage("Alice", 90, 85, 95)); 
// Output: "Alice averaged 90"`}
                    />
                </Section>

                <Section title="Destructured Configuration Objects" icon={GitBranch} id="destructuring">
                    <p className="mb-4">
                        When a function requires more than three parameters, relying on the strict order of arguments becomes a nightmare. If you want to skip the second argument but provide the fourth, you are forced to write ugly code like <code>buildHouse(true, undefined, undefined, 'blue')</code>.
                    </p>
                    <p className="mb-4">
                        Modern JavaScript solves this using the <strong>Configuration Object Pattern</strong> combined with <strong>Inline Destructuring</strong>. Instead of passing multiple separate arguments, you pass a single Object. The function signature then "destructures" that object, instantly pulling out only the specific keys it cares about. Order no longer matters, and the code becomes perfectly self-documenting for any developer reading it.
                    </p>
                    <p className="mb-4">
                        Combining parameter destructuring with default fallbacks is arguably the most powerful pattern in modern UI development, particularly within React components.
                    </p>

                    <HighlightBox title="The Safety Catch: = {}" type="key">
                        When you destructure a parameter, you usually add <code>= &#123;&#125;</code> to the very end of the signature. This is a safety mechanism. If another developer calls your function entirely empty <code>renderButton()</code>, the engine attempts to destructure <code>undefined</code>, which causes a fatal crash. Adding <code>= &#123;&#125;</code> tells JavaScript: "If they provided absolutely nothing, use an empty object as the baseline, and then apply all my internal defaults to it."
                    </HighlightBox>

                    <CodeBlock
                        title="destructuring.js"
                        language="javascript"
                        code={`// We extract specific keys from the incoming object directly in the signature
function renderButton({
  label = 'Click Me',       // Default fallback
  variant = 'primary',      // Default fallback
  disabled = false,         // Default fallback
  onClick = () => {}        // Empty default function
} = {}) {  // <-- The safety catch
  
  console.log(\`Rendering \${variant} button: \${label}\`);
}

// 1. Order doesn't matter. We skip 'variant' and 'onClick' entirely.
renderButton({ disabled: true, label: 'Submit' }); 

// 2. Passing nothing safely triggers ALL defaults without crashing!
renderButton(); `}
                    />
                </Section>
                
                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript/functions" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">Function Basics</span>
                            </div>
                        </Link>

                        <Link to="/webdevelopment/javascript/return-values" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.1)] transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block group-hover:text-amber-500/80 transition-colors">Up Next</span>
                                <span className="text-gray-200 font-bold text-xs sm:text-sm group-hover:text-white transition-colors">Return Values</span>
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

export default ParametersArguments;