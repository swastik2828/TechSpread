import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Key, Lightbulb, AlertTriangle, ArrowRight, Code2, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";

// ----------------------------------------------------------------------
// Code Snippet Constants (Extracted for clean JSX parsing)
// ----------------------------------------------------------------------

const arraySpreadCode = `// 1. Copying an array (Shallow copy)
const original = ['apple', 'banana'];
const copy = [...original];

// 2. Concatenating arrays intuitively
const veggies = ['carrot', 'potato'];
const fruits = ['apple', 'banana'];
const groceries = [...veggies, 'milk', ...fruits];
console.log(groceries); 
// ['carrot', 'potato', 'milk', 'apple', 'banana']

// 3. Spreading a string into characters
const letters = [...'hello']; 
console.log(letters); 
// ['h', 'e', 'l', 'l', 'o']

// 4. Spreading arguments into Math functions
const temperatures = [72, 85, 93, 64, 88];
const highest = Math.max(...temperatures); // 93`;

const objectSpreadCode = `const user = { name: 'Alice', role: 'viewer' };
const preferences = { theme: 'dark', alerts: true };

// 1. Merging objects
const fullProfile = { ...user, ...preferences };

// 2. Overriding properties (Order matters!)
const promotedUser = { ...user, role: 'admin' }; 
// 'role' is overwritten to 'admin'

const failedPromotion = { role: 'admin', ...user }; 
// 'role' stays 'viewer' because ...user overwrites 'admin'!

// 3. The Shallow Copy Trap
const player = { id: 1, stats: { hp: 100 } };
const playerCopy = { ...player };

playerCopy.stats.hp = 50;
console.log(player.stats.hp); 
// 50! Both objects share the exact same 'stats' reference in memory.`;

const restOperatorCode = `// 1. Collecting indefinite arguments into an array
function calculateSum(...numbers) {
    // 'numbers' is a real array, so we can use .reduce()
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(calculateSum(10, 20, 30)); // 60

// 2. The Rest parameter MUST be the very last parameter
function greetGroup(greeting, ...names) {
    names.forEach(name => console.log(\`\${greeting}, \${name}!\`));
}
greetGroup('Welcome', 'Alice', 'Bob', 'Charlie');

// 3. Rest in Array Destructuring
const [firstPlace, secondPlace, ...others] = ['Alice', 'Bob', 'Charlie', 'Dave'];
console.log(others); // ['Charlie', 'Dave']

// 4. Rest in Object Destructuring
const config = { host: 'localhost', port: 8080, secure: true, timeout: 5000 };
const { host, port, ...options } = config;
console.log(options); // { secure: true, timeout: 5000 }`;


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

const SpreadRest = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="Spread & Rest Operators | JavaScript Module 5"
                description="Master the JavaScript spread and rest operators (...) for robust functional programming and immutable data structures."
                keywords="javascript spread operator, js rest operator, immutable state updates js, javascript object spread, javascript array spread"
                url="/webdevelopment/javascript/spread-rest"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-amber-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                        <Database className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 5.5: Arrays & Objects</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        Spread & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-orange-500">Rest.</span>
                    </h1>
                </motion.div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">

                <Section title="The Dual Nature of '...'" icon={Key} id="introduction">
                    <p>
                        The <code>...</code> syntax in modern JavaScript is a beautiful example of syntax overloading. It serves two conceptually opposite roles depending entirely on <em>where</em> you use it in your code.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-300">
                        <li><strong>Spread Operator:</strong> Takes an iterable (like an array, string, or object) and <em>expands</em> it into individual elements. Think of it like taking a deck of cards and fanning them out on a table.</li>
                        <li><strong>Rest Parameter:</strong> Takes multiple individual elements and <em>condenses</em> them into a single array or object. Think of it like scooping up a bunch of loose cards from a table and putting them back into a single deck.</li>
                    </ul>
                </Section>

                <Section title="The Spread Operator: Arrays" icon={Database} id="array-spread">
                    <p>
                        Before the spread operator, combining arrays or copying them required clunky methods like <code>Array.prototype.concat()</code> or <code>Array.prototype.slice()</code>. Spread makes these operations declarative and highly readable.
                    </p>
                    <p>
                        It is also the cleanest way to pass an array of numbers to functions that expect separate arguments, like <code>Math.max()</code>.
                    </p>

                    <div className="mt-8 mb-8">
                        <CodeBlock 
                            language="javascript"
                            title="array-spread.js"
                            code={arraySpreadCode}
                        />
                    </div>
                </Section>

                <Section title="The Spread Operator: Objects" icon={Code2} id="object-spread">
                    <p>
                        Object spread enables concise, immutable-style updates. You spread the original object into a new object literal, and then provide overriding properties. This is the exact pattern used in Redux reducers and React <code>useState</code> hooks.
                    </p>
                    <HighlightBox title="Order Dictates Priority" type="note">
                        When spreading objects, properties declared later in the object literal will overwrite properties with the same name declared earlier. Therefore, you almost always want to put your spread operator <code>{'{ ...object }'}</code> at the <em>beginning</em> of the new object, followed by the properties you want to update.
                    </HighlightBox>

                    <HighlightBox title="The Shallow Copy Warning" type="warn">
                        The spread operator only creates a <strong>shallow copy</strong>. It duplicates the top-level properties. However, if your object contains nested objects or arrays, those nested structures are passed by reference, not duplicated. Modifying a nested object in the copy will mutate the original!
                    </HighlightBox>

                    <div className="mt-8 mb-8">
                        <CodeBlock 
                            language="javascript"
                            title="object-spread.js"
                            code={objectSpreadCode}
                        />
                    </div>
                </Section>

                <Section title="The Rest Operator: Gathering Data" icon={BookOpen} id="rest-operator">
                    <p>
                        The Rest operator condenses data. It is most commonly used in function signatures to accept an indefinite number of arguments. In older JavaScript, developers had to use the awkward, array-like <code>arguments</code> keyword. The Rest parameter provides a genuine Array, giving you immediate access to methods like <code>.map()</code>, <code>.filter()</code>, and <code>.reduce()</code>.
                    </p>
                    <p>
                        It is also incredibly powerful when combined with Destructuring. You can extract specific properties from an object or array, and use the Rest operator to sweep up everything that's left over into a new variable.
                    </p>

                    <HighlightBox title="Syntax Rule" type="tip">
                        Because it collects "the rest" of the items, the Rest parameter must always be the <strong>last</strong> element in a function parameter list or a destructuring assignment. Placing it anywhere else will throw a SyntaxError.
                    </HighlightBox>

                    <div className="mt-8 mb-8">
                        <CodeBlock 
                            language="javascript"
                            title="rest-parameters.js"
                            code={restOperatorCode}
                        />
                    </div>
                </Section>
                
                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full mx-auto">
                        <Link to="/webdevelopment/javascript/destructuring" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">Destructuring</span>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </article>
    );
};

export default SpreadRest;