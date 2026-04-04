import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Key, Lightbulb, AlertTriangle, ArrowRight, Code2, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";

// ----------------------------------------------------------------------
// Code Snippet Constants (Extracted for clean JSX parsing and performance)
// ----------------------------------------------------------------------

const arrayDestructuringCode = `// Basic positional destructuring
const rgb = [255, 128, 0];
const [red, green, blue] = rgb;
console.log(red); // 255

// Skipping elements with commas
const fibonacci = [1, 1, 2, 3, 5, 8];
const [first, , third, , fifth] = fibonacci;
console.log(third); // 2
console.log(fifth); // 5

// Using the Rest operator
const rankings = ['Alice', 'Bob', 'Charlie', 'Dave'];
const [winner, runnerUp, ...others] = rankings;
console.log(others); // ['Charlie', 'Dave']

// Variable Swapping (A classic trick!)
let a = 'first';
let b = 'second';
[a, b] = [b, a]; // Look ma, no temporary variables!`;

const objectDestructuringCode = `const user = {
    id: 42,
    username: 'johndoe',
    role: 'admin',
    theme_preference: 'dark'
};

// Basic key matching
const { username, role } = user;

// Renaming variables (Alias)
// Taking 'theme_preference' from the object and naming the local variable 'theme'
const { theme_preference: theme } = user; 

// Default values (if 'avatar' is missing, fallback to 'default.png')
const { avatar = 'default.png' } = user;

// Combining renaming AND defaults
const { display_name: displayName = 'Anonymous' } = user;`;

const nestedDestructuringCode = `const apiResponse = {
    status: 200,
    data: {
        user: {
            id: 101,
            profile: {
                firstName: 'Sarah',
                lastName: 'Connor',
                coordinates: [34.0522, -118.2437]
            }
        }
    }
};

// Digging deep to extract exactly what we need
const {
    data: {
        user: {
            profile: { 
                firstName, 
                coordinates: [lat, lng] // Array destructuring inside object destructuring!
            }
        }
    }
} = apiResponse;

console.log(firstName); // 'Sarah'
console.log(lat);       // 34.0522`;

const functionParamsCode = `// Without destructuring (Error prone order)
function setupServer(host, port, https, timeout) { /* ... */ }
setupServer('localhost', 8080, true, 5000);

// With Destructuring (Order doesn't matter, extremely clear)
// Notice the '= {}' at the very end to prevent crashes if called without args
function createConnection({
    host = 'localhost',
    port = 3000,
    https = false,
    timeout = 10000
} = {}) {
    console.log(\`Connecting to \${https ? 'https' : 'http'}://\${host}:\${port}\`);
}

createConnection({ port: 8080, https: true }); 
// Output: Connecting to https://localhost:8080`;


// ----------------------------------------------------------------------
// Components
// ----------------------------------------------------------------------

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

const Destructuring = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="Destructuring in Depth | JavaScript Module 5"
                description="Unpack array values and object properties directly into variables using ES6 destructing syntax."
                keywords="javascript destructuring, js unpack object, modern javascript, destructure array js, function parameter destructuring"
                url="/webdevelopment/javascript/destructuring"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-amber-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                        <Database className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 5.4: Arrays & Objects</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        Destructuring <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-orange-500">In Depth.</span>
                    </h1>
                </motion.div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">

                <Section title="The Art of Unpacking" icon={Code2} id="introduction">
                    <p>
                        Destructuring assignment is a special syntax introduced in ES6 that allows us to &quot;unpack&quot; arrays or objects into a bunch of variables. It is easily one of the most transformative features added to modern JavaScript, fundamentally changing how developers write and read code. Before destructuring, extracting multiple properties from an object or array required tedious, repetitive variable assignments.
                    </p>
                    <p>
                        Today, almost every function that accepts a complex argument, every API response handler, and every configuration object benefits from destructuring. It reduces boilerplate, clarifies the intent of your code, and creates a highly readable mapping between the data structure and the variables you intend to use.
                    </p>
                    <HighlightBox title="Deep Unpacking Capabilities" type="key">
                        Destructuring is more than just a shortcut. It supports: renaming extracted values, providing default fallback values for absent properties, ignoring unwanted elements entirely, nested destructuring (extracting from complex, multi-layered trees in one fluid expression), and rest collection (gathering remaining properties or elements into a new structure).
                    </HighlightBox>
                </Section>

                <Section title="Array Destructuring" icon={Database} id="array-destructuring">
                    <p>
                        Arrays are ordered collections of data. When you destructure an array, the unpacking happens based strictly on the <strong>position</strong> (or index) of the items. You define an array literal on the left side of the assignment operator, containing the variable names you want to assign the array elements to.
                    </p>
                    <p>
                        You don&apos;t have to unpack every single item. If you only care about the first and third items, you can skip the second item by simply leaving its space blank between commas. Furthermore, you can use the rest operator (<code>...</code>) to bundle any remaining array elements into a brand-new array. This is exceptionally useful when you want to separate the head of an array from its tail.
                    </p>
                    <div className="mt-8 mb-8">
                        <CodeBlock 
                            language="javascript"
                            title="array-destructuring.js"
                            code={arrayDestructuringCode}
                        />
                    </div>
                </Section>

                <Section title="Object Destructuring" icon={BookOpen} id="object-destructuring">
                    <p>
                        Unlike arrays, objects are unordered collections of key-value pairs. Therefore, object destructuring relies on <strong>property names</strong> (keys) rather than positions. The variable names you provide inside the destructuring brackets must match the property names inside the object.
                    </p>
                    <p>
                        But what if you want to extract a property into a variable with a different name? JavaScript provides a renaming syntax: <code>{'{ oldName: newName }'}</code>. This is incredibly helpful when dealing with APIs that return data with awkward naming conventions (like snake_case), allowing you to immediately map them to cleaner camelCase variables in your local scope.
                    </p>
                    <HighlightBox title="The Default Value Lifesaver" type="tip">
                        When destructuring, if a property doesn&apos;t exist on the object, your variable will be <code>undefined</code>. To protect your application from crashing, you can assign default values right inside the destructuring expression using the <code>=</code> sign.
                    </HighlightBox>
                    <div className="mt-8 mb-8">
                        <CodeBlock 
                            language="javascript"
                            title="object-destructuring.js"
                            code={objectDestructuringCode}
                        />
                    </div>
                </Section>

                <Section title="Nested Destructuring" icon={Code2} id="nested-destructuring">
                    <p>
                        Real-world applications rarely deal with flat data structures. Data retrieved from an external API or a database is often deeply nested. Destructuring shines in these scenarios, allowing you to dig multiple levels deep into an object or array in a single, readable statement. 
                    </p>
                    <p>
                        To destructure nested objects, you simply mirror the shape of the object on the left side of the assignment. Be careful, though: when you dig deep into an object (e.g., <code>{'{ parent: { child } }'}</code>), the intermediate keys (like <code>parent</code>) are <strong>not</strong> created as variables; only the final target (<code>child</code>) is declared.
                    </p>
                    <div className="mt-8 mb-8">
                        <CodeBlock 
                            language="javascript"
                            title="nested-destructuring.js"
                            code={nestedDestructuringCode}
                        />
                    </div>
                </Section>

                <Section title="Function Parameter Destructuring" icon={Lightbulb} id="function-parameters">
                    <p>
                        Perhaps the most practical application of destructuring is within function parameters. Before destructuring, functions that required many arguments often relied on developers remembering the exact order of those arguments. If an argument was optional, you still had to pass <code>null</code> or <code>undefined</code> to maintain the positional order.
                    </p>
                    <p>
                        By passing a single &quot;configuration object&quot; to a function and immediately destructuring it in the parameter list, order no longer matters. You can also mix in default values directly in the function signature, making your code self-documenting. React developers will recognize this immediately—it is exactly how React components accept <code>props</code>.
                    </p>
                    <HighlightBox title="Watch out for the nested default trick!" type="warn">
                        When setting up function parameters with default object values, it&apos;s a best practice to default the *entire* parameter to an empty object <code>{'{ }'}</code> as well. Otherwise, calling the function with no arguments at all will throw a <code>Cannot destructure property</code> error.
                    </HighlightBox>
                    <div className="mt-8 mb-8">
                        <CodeBlock 
                            language="javascript"
                            title="function-params.js"
                            code={functionParamsCode}
                        />
                    </div>
                </Section>
                
                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full mx-auto">
                        <Link to="/webdevelopment/javascript/objects-foundations" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">Objects Foundations</span>
                            </div>
                        </Link>

                        <Link to="/webdevelopment/javascript/spread-rest" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.1)] transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block group-hover:text-amber-500/80 transition-colors">Up Next</span>
                                <span className="text-gray-200 font-bold text-xs sm:text-sm group-hover:text-white transition-colors">Spread & Rest</span>
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

export default Destructuring;