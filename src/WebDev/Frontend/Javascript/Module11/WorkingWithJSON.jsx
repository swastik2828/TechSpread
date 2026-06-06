import React, { useState } from 'react';
import { BookOpen, Key, Lightbulb, AlertTriangle, ArrowRight, Compass, Braces, Code, FileCode } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";
import JsJsonSerializationSimulator from '../../../../simulators/web/javascript/JsJsonSerializationSimulator';

const Section = ({ title, icon: Icon, children, id }) => (
    <section id={id} className="relative mb-16 sm:mb-24 scroll-mt-28">
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full">
            <div className="p-2 sm:p-3 md:p-4 bg-gradient-to-br from-yellow-500/20 to-yellow-500/20 rounded-xl sm:rounded-2xl border border-yellow-500/40 text-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.15)] flex-shrink-0">
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



const WorkingWithJSON = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="Working with JSON | JavaScript Web APIs"
                description="Master JSON parsing and stringification. Understand the limits of JSON, safe parsing techniques, and the Reviver function."
                keywords="JSON, JSON.parse, JSON.stringify, javascript JSON, reviver function, deep clone JSON"
                url="/webdevelopment/javascript/working-with-json"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-yellow-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>

                <div className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                        <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 11.4: Web APIs & Data Handling</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        Working with <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-yellow-500">JSON</span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light px-4">
                        JSON (JavaScript Object Notation) is the dominant data format for web APIs. It maps cleanly to JavaScript objects, but it has limitations that catch developers off guard.
                    </p>
                </div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">

                <Section title="What JSON Supports (and Doesn't)" icon={Braces} id="json-support">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                            <h3 className="text-emerald-400 font-bold mb-4">JSON Supports:</h3>
                            <CodeBlock
                                code={`{
  "string": "hello",
  "number": 42,
  "float": 3.14,
  "boolean": true,
  "null": null,
  "array": [1, 2, 3],
  "nested": { "key": "value" }
}`}
                                language="json"
                            />
                        </div>
                        <div className="bg-rose-900/10 border border-rose-500/30 rounded-xl p-6">
                            <h3 className="text-rose-400 font-bold mb-4">JSON DOES NOT Support:</h3>
                            <ul className="list-disc pl-5 space-y-2 text-rose-200 text-sm">
                                <li>Functions (they vanish)</li>
                                <li><code>undefined</code> (they vanish)</li>
                                <li><code>Date</code> objects (they become strings)</li>
                                <li>Circular references (throws an error)</li>
                                <li><code>Infinity</code> or <code>NaN</code> (they become <code>null</code>)</li>
                            </ul>
                            <p className="mt-4 text-xs italic text-rose-300/70">If your object has a Date, JSON.stringify() silently converts it to a string. When parsed back, you get a string, not a Date.</p>
                        </div>
                    </div>

                    <JsJsonSerializationSimulator />

                </Section>

                <Section title="JSON.stringify() — Advanced Usage" icon={Code} id="stringify">
                    <p className="text-gray-300 leading-relaxed">
                        `JSON.stringify()` converts JavaScript to JSON. It takes optional arguments for formatting and filtering.
                    </p>
                    <CodeBlock
                        code={`const user = { name: 'Alice', age: 30, joined: new Date('2024-01-15') };

// Pretty-printed (for logging or debugging)
JSON.stringify(user, null, 2);

// With a replacer array — control which keys are included
JSON.stringify(user, ['name', 'age']); 
// '{"name":"Alice","age":30}'

// Replacer as a function — transform values
JSON.stringify(user, (key, value) => {
  if (typeof value === 'number') return undefined; // Exclude numbers
  return value;
});`}
                        language="javascript"
                    />
                </Section>

                <Section title="JSON.parse() and The Reviver" icon={FileCode} id="parse-reviver">
                    <HighlightBox title="Always Handle Parse Errors" type="warn">
                        Always wrap `JSON.parse()` in try/catch when parsing untrusted input. Invalid JSON will throw a `SyntaxError` and completely crash your code.
                    </HighlightBox>
                    <CodeBlock
                        code={`function safeParseJSON(str) {
  try {
    return { data: JSON.parse(str), error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
}`}
                        language="javascript"
                    />

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">The Reviver — Transforming as You Parse</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        `JSON.parse()` accepts a second argument — a <strong>reviver function</strong>. This is the correct way to convert ISO date strings back into actual `Date` objects as they are parsed!
                    </p>
                    <CodeBlock
                        code={`const json = '{"name":"Alice","joinedAt":"2024-01-15T10:30:00.000Z"}';

const user = JSON.parse(json, (key, value) => {
  // Convert any string that looks like an ISO date back to a Date object
  if (typeof value === 'string' && /^\\d{4}-\\d{2}-\\d{2}T/.test(value)) {
    return new Date(value);
  }
  return value;
});

console.log(user.joinedAt instanceof Date); // true
console.log(user.joinedAt.getFullYear());   // 2024`}
                        language="javascript"
                    />
                </Section>

                <Section title="Deep Cloning Objects with JSON" icon={Braces} id="deep-clone">
                    <p className="text-gray-300 leading-relaxed">
                        A common, though limited, trick for making a complete disconnected copy of an object:
                    </p>
                    <CodeBlock
                        code={`const original = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.b.c = 99;
console.log(original.b.c); // 2 — original is unaffected`}
                        language="javascript"
                    />
                    <p className="text-gray-400 mt-4 italic">
                        Warning: This only works for JSON-serializable values. For objects with Dates or functions, use the modern `structuredClone()` built into browsers instead!
                    </p>
                </Section>

                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript/http-methods-rest" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">11.3 HTTP Methods</span>
                            </div>
                        </Link>

                        <Link to="/webdevelopment/javascript/auth-headers" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block group-hover:text-yellow-500/80 transition-colors">Up Next</span>
                                <span className="text-gray-200 font-bold text-xs sm:text-sm group-hover:text-white transition-colors">11.5 Auth & Headers</span>
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

export default WorkingWithJSON;