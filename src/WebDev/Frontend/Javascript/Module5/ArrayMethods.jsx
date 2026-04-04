import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Key, Lightbulb, AlertTriangle, ArrowRight, Code2, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";
import ArrayVisualizer from "../../../../simulators/web/javascript/ArrayVisualizer";

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

const ArrayMethods = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="Array Methods — Transforming Data | JavaScript Module 5"
                description="Master JavaScript array methods. Deep dive into map, filter, and reduce to transform data arrays functionally."
                keywords="javascript map filter reduce, js array methods, functional data processing javascript, reduce array javascript, array transform javascript"
                url="/webdevelopment/javascript/array-methods"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-amber-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                        <Database className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 5.2: Arrays & Objects</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        Array <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-orange-500">Methods.</span>
                    </h1>
                </motion.div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">

                <Section title="5.2 Array Methods — Transforming Data" icon={Code2} id="methods">
                    <p className="mb-4">
                        JavaScript's array prototype includes over 30 built-in methods. The most important for modern development are the non-mutating, higher-order methods that accept callback functions. These methods are the foundation of declarative, functional data processing.
                    </p>

                    <HighlightBox title="map — Transform Every Element" type="key">
                        map produces a new array by applying a transformation function to every element of the original. The result is always a new array of the same length. The original array is never modified. map is ideal when you need to convert each element of one format into another: extracting a field, formatting a value, computing a derived property.
                    </HighlightBox>

                    <HighlightBox title="filter — Select Matching Elements" type="note">
                        filter produces a new array containing only the elements for which the predicate function returns true. The result can be shorter than the original (or even empty), but never longer. The original is untouched. filter is ideal for removing unwanted elements: filtering by status, excluding nulls, limiting by threshold.
                    </HighlightBox>

                    <HighlightBox title="reduce — Accumulate to a Single Value" type="warn">
                        reduce is the most powerful and general of the trio. It traverses the array left-to-right, maintaining an accumulator value that is updated by the callback on each iteration. The final accumulated value is returned. reduce can implement map and filter as special cases, and it can produce any output type from an array: a sum, a product, an object, a nested array, a string.
                        <br/><br/>
                        The second argument to reduce — the initial value — is important. Without it, reduce uses the first element as the initial accumulator and starts the loop from the second element. Always provide an initial value to make the behaviour explicit and predictable, especially for non-numeric accumulators.
                    </HighlightBox>

                    <div className="mt-8 mb-8">
                        <CodeBlock 
                            language="javascript"
                            title="transformation-methods.js"
                            code={`const orders = [
  { id: 1, product: 'Widget',  status: 'shipped',  total: 29.99 },
  { id: 2, product: 'Gadget',  status: 'pending',  total: 89.50 },
  { id: 3, product: 'Widget',  status: 'shipped',  total: 29.99 },
  { id: 4, product: 'Gizmo',   status: 'cancelled',total: 14.00 },
];
 
// map — extract product names
const names = orders.map(o => o.product);
// ['Widget', 'Gadget', 'Widget', 'Gizmo']
 
// filter — shipped orders only
const shipped = orders.filter(o => o.status === 'shipped');
// [{ id:1... }, { id:3... }]
 
// reduce — sum total of shipped orders
const shippedRevenue = orders
  .filter(o => o.status === 'shipped')
  .reduce((sum, o) => sum + o.total, 0);
// 59.98
 
// reduce — group by status
const byStatus = orders.reduce((groups, order) => {
  const key = order.status;
  groups[key] = groups[key] || [];
  groups[key].push(order);
  return groups;
}, {});
// { shipped: [...], pending: [...], cancelled: [...] }`}
                        />
                    </div>

                    <div className="mt-16 mb-16">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#fbbf24] mt-12 mb-4">
                            Interactive Array Methods Visualizer
                        </h3>
                        <p className="text-gray-400 mb-8">
                            Click below to step through how the fundamental methods dynamically process elements to generate fresh data.
                        </p>
                        <ArrayVisualizer />
                    </div>

                    <HighlightBox title="Other Important Methods" type="tip">
                        find() returns the first element passing a test (or undefined). findIndex() returns its index (or -1). some() returns true if any element passes; every() returns true if all pass. includes() checks for a value with ===. flat() flattens nested arrays. flatMap() maps then flattens one level — more efficient than .map().flat(). slice() extracts a portion without modifying the original. concat() merges arrays into a new one (spread is usually preferred).
                    </HighlightBox>
                </Section>
                
                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full mx-auto">
                        <Link to="/webdevelopment/javascript/arrays-foundations" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">Arrays Foundations</span>
                            </div>
                        </Link>

                        <Link to="/webdevelopment/javascript/objects-foundations" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.1)] transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block group-hover:text-amber-500/80 transition-colors">Up Next</span>
                                <span className="text-gray-200 font-bold text-xs sm:text-sm group-hover:text-white transition-colors">Objects Foundations</span>
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

export default ArrayMethods;
