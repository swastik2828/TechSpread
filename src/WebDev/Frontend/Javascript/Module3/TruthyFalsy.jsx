import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Key, Lightbulb, AlertTriangle, ArrowRight, Code2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";
import JsTruthyFalsySimulator from "../../../../simulators/web/js/JsTruthyFalsySimulator";

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
        key:  { icon: Key,           color: "text-amber-400",   border: "border-amber-500/40",   bg: "bg-gradient-to-br from-amber-900/40 to-yellow-900/10",   heading: "text-amber-500",  shadow: "shadow-amber-500/10"  },
        note: { icon: BookOpen,      color: "text-sky-400",     border: "border-sky-500/40",     bg: "bg-gradient-to-br from-sky-900/40 to-blue-900/10",       heading: "text-sky-400",    shadow: "shadow-sky-500/10"    },
        tip:  { icon: Lightbulb,     color: "text-emerald-400", border: "border-emerald-500/40", bg: "bg-gradient-to-br from-emerald-900/40 to-green-900/10",   heading: "text-emerald-400",shadow: "shadow-emerald-500/10"},
        warn: { icon: AlertTriangle, color: "text-rose-400",    border: "border-rose-500/40",    bg: "bg-gradient-to-br from-rose-900/40 to-red-900/10",       heading: "text-rose-500",   shadow: "shadow-rose-500/10"   },
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

const FalsyCard = ({ value, children }) => (
    <div className="flex items-start gap-3 p-4 bg-[#0a0c10] border border-rose-900/40 rounded-xl hover:border-rose-500/30 transition-colors">
        <code className="text-rose-400 font-mono font-black text-sm sm:text-base shrink-0 w-28">{value}</code>
        <p className="text-gray-400 text-sm leading-relaxed">{children}</p>
    </div>
);

const TruthyFalsy = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="Truthy & Falsy Values in JavaScript | Module 3.2"
                description="Understand JavaScript's truthiness concept: the 6 falsy values, why empty arrays and objects are truthy, and when to use explicit comparisons."
                keywords="truthy falsy javascript, javascript falsy values, boolean coercion javascript, null undefined false 0"
                url="/webdevelopment/javascript/truthy-falsy"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-amber-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                        <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 3.2: Truthy & Falsy Values</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        Truthy <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-orange-500">& Falsy.</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light px-4">
                        Every value in JavaScript has an inherent boolean character. Master the 6 falsy values and everything else becomes truthy.
                    </p>
                </motion.div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">

                <Section title="3.2 Truthy & Falsy Values" icon={ShieldCheck} id="truthy-falsy">
                    <p className="text-lg sm:text-xl font-medium text-white p-6 bg-[#0d1117] border border-gray-800/60 rounded-2xl">
                        JavaScript's type system includes the concept of <strong>truthiness</strong>: every value has an inherent boolean character that determines how it behaves in conditional contexts. When a non-boolean value is used in an <code>if</code> condition, a loop condition, a ternary expression, or a logical expression, JavaScript automatically evaluates its truthiness.
                    </p>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-rose-400 mt-12 sm:mt-16 mb-6">
                        The Complete List of Falsy Values
                    </h3>
                    <p className="mb-6 text-gray-300">
                        The complete list of falsy values is <strong className="text-amber-400">exactly six items long</strong>. Memorise these — everything else is truthy.
                    </p>

                    <div className="flex flex-col gap-3 mb-8">
                        <FalsyCard value="false">The boolean literal. The original falsy.</FalsyCard>
                        <FalsyCard value="0">The number zero. Also: <code>-0</code> and <code>0n</code> (BigInt zero).</FalsyCard>
                        <FalsyCard value='""'>An empty string (any delimiter: single, double, or backtick). Any non-empty string is truthy — yes, even <code>"0"</code> and <code>"false"</code>.</FalsyCard>
                        <FalsyCard value="null">Intentional absence of an object value.</FalsyCard>
                        <FalsyCard value="undefined">An unassigned variable or missing object property.</FalsyCard>
                        <FalsyCard value="NaN">Not-a-number — the result of invalid math like <code>0/0</code> or <code>parseInt("abc")</code>.</FalsyCard>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-12 sm:mt-16 mb-4">
                        Everything Else is Truthy
                    </h3>
                    <p className="mb-4">
                        This includes values that surprise many beginners:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {[
                            { label: '[] (empty array)', detail: 'Arrays are objects. Even an empty array is truthy.' },
                            { label: '{} (empty object)', detail: 'Same as above — object references are truthy.' },
                            { label: '"0" (string zero)', detail: 'Non-empty strings are always truthy, regardless of content.' },
                            { label: '"false" (string)', detail: 'The word "false" as a string is truthy.' },
                            { label: '-1 (negative)', detail: 'All non-zero numbers, positive or negative, are truthy.' },
                            { label: 'Infinity', detail: 'Positive and negative Infinity are both truthy.' },
                        ].map(item => (
                            <div key={item.label} className="flex items-start gap-3 p-4 bg-[#0a0c10] border border-emerald-900/40 rounded-xl hover:border-emerald-500/30 transition-colors">
                                <code className="text-emerald-400 font-mono font-black text-sm shrink-0">{item.label}</code>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.detail}</p>
                            </div>
                        ))}
                    </div>

                    <HighlightBox title="🔑 Key Concept" type="key">
                        Memorise the six falsy values: <code>false</code>, <code>0</code>, <code>""</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code>. Everything else is truthy. When in doubt, test explicitly: <code>=== null</code> or <code>!== undefined</code>, rather than relying on implicit truthiness.
                    </HighlightBox>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#fbbf24] mt-12 sm:mt-16 mb-4">
                        Practical Consequence
                    </h3>
                    <p className="mb-6">
                        When your application logic returns <code>0</code> or <code>""</code> as valid, meaningful values, conditional checks like <code>if (result)</code> will incorrectly treat them as falsy. Use explicit comparisons or the nullish coalescing operator instead.
                    </p>

                    <CodeBlock
                        title="truthiness-pitfalls.js"
                        language="javascript"
                        code={`// Dangerous — treats 0 as falsy even though 0 is a valid score
const score = getUserScore(); // returns 0
if (score) {
  console.log('Has score:', score);  // ← This never runs when score is 0!
}

// Correct — explicit comparison
if (score !== null && score !== undefined) {
  console.log('Has score:', score);  // ← Works correctly for 0
}

// Or use nullish coalescing for defaults:
const displayScore = score ?? 'No score yet';
//  score = 0  → displayScore = 0     ✓ (0 is not null/undefined)
//  score = null → displayScore = 'No score yet'  ✓

// The surprising [] and {} case:
const arr = [];
if (arr) console.log('truthy!');  // ← runs, [] is truthy
if (arr.length) console.log('has items'); // ← does NOT run, 0 is falsy`}
                    />

                    <div className="mt-16 mb-8 pt-8 border-t border-gray-800/60">
                        <h4 className="text-2xl sm:text-3xl font-black text-white mb-4">Interactive Truthy / Falsy Explorer</h4>
                        <p className="text-gray-400 mb-8 font-medium">
                            Click any preset value to instantly see its truthiness classification. Notice the surprise markers on <code>[]</code> and <code>{"{}"}</code>. You can also test your own JavaScript expressions in the custom input field.
                        </p>
                        <JsTruthyFalsySimulator />
                    </div>

                </Section>

                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript/conditional-statements" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">Conditional Statements</span>
                            </div>
                        </Link>

                        <Link to="/webdevelopment/javascript/loops" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.1)] transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block group-hover:text-amber-500/80 transition-colors">Up Next</span>
                                <span className="text-gray-200 font-bold text-xs sm:text-sm group-hover:text-white transition-colors">Loops</span>
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

export default TruthyFalsy;
