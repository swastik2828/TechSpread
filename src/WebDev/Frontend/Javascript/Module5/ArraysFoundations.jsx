import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Key, Lightbulb, AlertTriangle, ArrowRight, Code2, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";
import ArrayMemoryVisualizer from "../../../../simulators/web/javascript/ArrayMemoryVisualizer";

// ----------------------------------------------------------------------
// Code Snippet Constants (Extracted for clean JSX parsing)
// ----------------------------------------------------------------------

const arrayCreationCode = `// 1. Array Literal (Always preferred)
const colours = ['red', 'green', 'blue'];
const mixedData = [42, 'hello', true, { name: 'John' }, null];

// 2. Array.from() — converts iterables and maps values
const charArray = Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']
const sequence = Array.from({ length: 5 }, (_, i) => i + 1); // [1, 2, 3, 4, 5]

// 3. Array.of() — creates an array from arguments
const numbers = Array.of(7); // [7]

// 4. The 'new Array()' Constructor Gotcha
const literal = [3];         // An array with one element: the number 3
const constructed = new Array(3); // A sparse array with 3 empty slots!`;

const arrayAccessCode = `const planets = ['Mercury', 'Venus', 'Earth', 'Mars'];

// Standard bracket notation (Zero-indexed)
console.log(planets[0]); // 'Mercury'
console.log(planets[2]); // 'Earth'

// Accessing out of bounds returns undefined, it does NOT throw an error
console.log(planets[10]); // undefined

// Updating elements
planets[1] = 'Aphrodite'; // Replaces 'Venus'

// Accessing the last element (Traditional way)
const lastPlanet = planets[planets.length - 1]; // 'Mars'

// Accessing the last element (Modern ES2022 way using .at())
const modernLast = planets.at(-1); // 'Mars'
const secondToLast = planets.at(-2); // 'Earth'`;

const arrayLengthCode = `const scores = [85, 92, 78, 90, 88];
console.log(scores.length); // 5

// 1. Truncating an array by mutating length
scores.length = 3;
console.log(scores); // [85, 92, 78] - The last two elements are permanently deleted!

// 2. Creating a sparse array (holes)
scores.length = 5;
console.log(scores); // [85, 92, 78, <2 empty items>]

// 3. Accidentally creating holes via index assignment
const fruits = ['Apple', 'Banana'];
fruits[5] = 'Mango'; 
console.log(fruits); // ['Apple', 'Banana', <3 empty items>, 'Mango']
console.log(fruits.length); // 6`;

const arrayCheckCode = `const dataList = [1, 2, 3];
const dataObject = { 0: 1, 1: 2, 2: 3, length: 3 };

// typeof is famously unhelpful for arrays
console.log(typeof dataList);   // 'object'
console.log(typeof dataObject); // 'object'

// The correct way to verify an array
console.log(Array.isArray(dataList));   // true
console.log(Array.isArray(dataObject)); // false`;


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

const ArraysFoundations = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="Arrays — Foundations | JavaScript Module 5"
                description="Learn the foundations of JavaScript Arrays, how they work under the hood, and how to create them efficiently."
                keywords="javascript arrays, array from iterable, array of, javascript array methods, array literal syntax, js array basics"
                url="/webdevelopment/javascript/arrays-foundations"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-amber-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                        <Database className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 5.1: Arrays & Objects</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        Arrays <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-orange-500">Foundations.</span>
                    </h1>
                </motion.div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">

                <Section title="What is an Array in JavaScript?" icon={Code2} id="foundations">
                    <p>
                        In many low-level programming languages, an array is a contiguous block of memory designed to hold a fixed number of items of the exact same data type. JavaScript arrays, however, are fundamentally different. Under the hood, JavaScript arrays are highly optimized <strong>objects</strong>. 
                    </p>
                    <p>
                        Because they are objects, JavaScript arrays are entirely dynamic. They can grow and shrink in size automatically, and a single array can hold a mix of different data types—strings, numbers, booleans, objects, functions, or even other arrays. The numeric indices you use to access items (like <code>0</code>, <code>1</code>, <code>2</code>) are actually converted to string property keys behind the scenes.
                    </p>
                    
                    <HighlightBox title="Creating Arrays" type="tip">
                        The <strong>Array Literal</strong> syntax (square brackets) is the universal preference for creating arrays due to its readability and performance. However, modern JavaScript provides helpful utility methods like <code>Array.from()</code> for converting iterables (like NodeLists or Strings) into arrays, and <code>Array.of()</code> to bypass quirks of the traditional <code>new Array()</code> constructor.
                    </HighlightBox>

                    <div className="mt-8 mb-8">
                        <CodeBlock 
                            language="javascript"
                            title="array-creation.js"
                            code={arrayCreationCode}
                        />
                    </div>
                </Section>

                <Section title="Accessing and Modifying" icon={Key} id="access-modification">
                    <p>
                        Arrays are zero-indexed. The first element occupies index <code>0</code>, the second occupies index <code>1</code>, and the last occupies index <code>length - 1</code>. You access these values using bracket notation. 
                    </p>
                    <p>
                        A unique feature of JavaScript is that trying to access an index that doesn't exist does not crash your program with an "Index Out of Bounds" error. Instead, it quietly returns <code>undefined</code>.
                    </p>
                    
                    <HighlightBox title="Negative Indexing with .at()" type="note">
                        For years, getting the last element of an array required the clunky syntax <code>arr[arr.length - 1]</code>. ES2022 introduced the <code>.at()</code> method, which allows for elegant negative indexing. Passing <code>-1</code> gets the last element, <code>-2</code> gets the second to last, and so on.
                    </HighlightBox>

                    <div className="mt-8 mb-8">
                        <CodeBlock 
                            language="javascript"
                            title="array-access.js"
                            code={arrayAccessCode}
                        />
                    </div>
                </Section>

                <Section title="The Quirks of Length and Sparse Arrays" icon={AlertTriangle} id="length-property">
                    <p>
                        Every array has a special, automatically updated property called <code>length</code>. However, a common misconception is that <code>length</code> counts the exact number of elements inside the array. Technically, the <code>length</code> property strictly reflects <strong>one more than the highest numeric index</strong> present in the array.
                    </p>
                    <p>
                        Because <code>length</code> is a mutable property, you can manually reassign it. If you decrease an array's length, JavaScript will instantly delete all elements at indices greater than or equal to the new length. If you artificially increase the length, or assign an element to an index far beyond the current bounds, you create a <strong>Sparse Array</strong>. Sparse arrays contain "holes"—empty slots that return <code>undefined</code> but don't actually hold any data, potentially causing performance de-optimizations in the JavaScript engine.
                    </p>

                    <div className="mt-8 mb-8">
                        <CodeBlock 
                            language="javascript"
                            title="array-length.js"
                            code={arrayLengthCode}
                        />
                    </div>

                    <div className="mt-16 mb-8 pt-4 border-t border-gray-800/60">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Interactive Memory Visualizer</h3>
                        <p className="mb-8">Experiment with the visualizer below to see how arrays map indices to memory addresses and how adding elements dynamically scales the array's footprint under the hood.</p>
                        <ArrayMemoryVisualizer />
                    </div>
                </Section>

                <Section title="Recognizing Arrays" icon={Lightbulb} id="checking-arrays">
                    <p>
                        Because arrays are objects under the hood, the standard JavaScript <code>typeof</code> operator is incredibly unhelpful when you need to check if a variable holds an array. Calling <code>typeof []</code> will simply return the string <code>"object"</code>.
                    </p>
                    <p>
                        To reliably check if a value is an array, you must use the built-in <code>Array.isArray()</code> static method. This is a critical pattern when writing robust functions that need to differentiate between standard objects (like dictionaries/maps) and iterable array lists.
                    </p>

                    <div className="mt-8 mb-8">
                        <CodeBlock 
                            language="javascript"
                            title="array-check.js"
                            code={arrayCheckCode}
                        />
                    </div>
                </Section>
                
                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full mx-auto">
                        <Link to="/webdevelopment/javascript/call-stack" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous Module</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">The Call Stack</span>
                            </div>
                        </Link>

                        <Link to="/webdevelopment/javascript/array-methods" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.1)] transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block group-hover:text-amber-500/80 transition-colors">Up Next</span>
                                <span className="text-gray-200 font-bold text-xs sm:text-sm group-hover:text-white transition-colors">Array Methods</span>
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

export default ArraysFoundations;