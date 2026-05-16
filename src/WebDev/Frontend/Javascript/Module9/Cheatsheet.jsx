import React from 'react';
import { BookOpen, Key, Lightbulb, AlertTriangle, ArrowRight, Compass, Code, List } from 'lucide-react';
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

const Cheatsheet = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="Quick Reference Cheatsheet - Async JS | JavaScript Course"
                description="A quick reference cheatsheet for Asynchronous JavaScript concepts including Promises, Async/Await, and Promise combinators."
                keywords="javascript async cheatsheet, js promises reference, promise all, async await cheat sheet"
                url="/webdevelopment/javascript/async-cheatsheet"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-yellow-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                
                <div className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                        <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 9.9: Asynchronous JS</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        Quick Reference <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-yellow-500">Cheatsheet</span>.
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light px-4">
                        A quick review of all Asynchronous JavaScript code snippets.
                    </p>
                </div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">

                <Section title="Creating Promises" icon={Code} id="create">
                    <div className="mt-4 mb-6">
                        <CodeBlock 
                            title="creating-promises.js"
                            language="javascript"
                            code={`// From scratch
const p = new Promise((resolve, reject) => {
  if (success) resolve(value);
  else reject(new Error("reason"));
});

// Immediately settled
const fulfilled = Promise.resolve(42);
const rejected  = Promise.reject(new Error("oops"));`}
                        />
                    </div>
                </Section>

                <Section title="Consuming Promises" icon={Code} id="consume">
                    <div className="mt-4 mb-6">
                        <CodeBlock 
                            title="consuming-promises.js"
                            language="javascript"
                            code={`// With .then() / .catch() / .finally()
promise
  .then(value  => { /* success */ })
  .catch(error => { /* failure */ })
  .finally(()  => { /* always  */ });

// With async/await
async function example() {
  try {
    const value = await promise;
  } catch (error) {
    // handle error
  } finally {
    // cleanup — always runs
  }
}`}
                        />
                    </div>
                </Section>

                <Section title="Promise Combinators" icon={Code} id="combinators">
                    <div className="mt-4 mb-6">
                        <CodeBlock 
                            title="combinators.js"
                            language="javascript"
                            code={`// All must succeed — resolves with array of all values
const [a, b, c] = await Promise.all([p1, p2, p3]);

// Wait for all — resolves with array of outcome objects
const results = await Promise.allSettled([p1, p2, p3]);
// results[i].status → 'fulfilled' | 'rejected'
// results[i].value  → the resolved value (if fulfilled)
// results[i].reason → the error (if rejected)

// First to settle wins (either outcome)
const first = await Promise.race([p1, p2, p3]);

// First to fulfill wins (ignores rejections until all fail)
const firstSuccess = await Promise.any([p1, p2, p3]);`}
                        />
                    </div>
                </Section>

                <Section title="Sequential vs Parallel" icon={Code} id="seq-vs-par">
                    <div className="mt-4 mb-6">
                        <CodeBlock 
                            title="sequential-vs-parallel.js"
                            language="javascript"
                            code={`// Sequential (when each step needs the previous result)
const a = await step1();
const b = await step2(a);
const c = await step3(b);

// Parallel (when steps are independent of each other)
const [a, b, c] = await Promise.all([step1(), step2(), step3()]);

// Mixed: sequential step, then parallel steps
const first = await step1();
const [second, third] = await Promise.all([step2(first), step3(first)]);`}
                        />
                    </div>
                </Section>

                <Section title="Safe Fetch Pattern" icon={Code} id="safe-fetch">
                    <div className="mt-4 mb-6">
                        <CodeBlock 
                            title="safe-fetch.js"
                            language="javascript"
                            code={`async function safeFetch(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
  return response.json();
}`}
                        />
                    </div>
                </Section>

                <Section title="Timeout Pattern with Promise.race()" icon={Code} id="timeout-pattern">
                    <div className="mt-4 mb-6">
                        <CodeBlock 
                            title="timeout.js"
                            language="javascript"
                            code={`function withTimeout(promise, ms) {
  const timer = new Promise((_, reject) =>
    setTimeout(() => reject(new Error(\`Timed out after \${ms}ms\`)), ms)
  );
  return Promise.race([promise, timer]);
}`}
                        />
                    </div>
                </Section>

                <Section title="Key Takeaways" icon={List} id="takeaways">
                    <ul className="list-disc pl-6 space-y-3 mt-4 text-gray-300 font-medium">
                        <li>JavaScript is <strong>single-threaded</strong> but avoids blocking by <strong>delegating slow work to the environment</strong> (browser/Node.js) and resuming when done.</li>
                        <li>The <strong>Event Loop</strong> moves callbacks from the queue to the call stack only when the stack is empty. Microtasks (Promises) always run before macrotasks (setTimeout).</li>
                        <li><strong>Callbacks</strong> are simple but create nesting hell for sequential operations and surrender control of your code to whoever you pass them to.</li>
                        <li><strong>Promises</strong> restore normal control flow with a returnable object, flat chaining, and a single error handler for an entire operation sequence.</li>
                        <li><strong>Async/Await</strong> is Promise syntax that reads like synchronous code — always backed by Promises underneath.</li>
                        <li><strong><code>fetch()</code> does not reject on HTTP errors.</strong> Always check <code>response.ok</code> manually.</li>
                        <li><strong>Parallel execution</strong> with <code>Promise.all()</code> is dramatically faster than sequential <code>await</code>s for independent operations. This is one of the most impactful optimisations you can make.</li>
                        <li><strong>Silent failures</strong> — unhandled rejections and swallowed errors — are the most dangerous bugs in async code. Always handle the rejection path.</li>
                    </ul>
                </Section>

                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript/common-mistakes" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">Common Mistakes</span>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </article>
    );
};

export default Cheatsheet;
