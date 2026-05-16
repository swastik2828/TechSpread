import React from 'react';
import { BookOpen, Key, Lightbulb, AlertTriangle, ArrowRight, Compass, ShieldCheck } from 'lucide-react';
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

const Promises = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="Promises — A Better Abstraction | JavaScript Course"
                description="Learn about JavaScript Promises, their states, creating and consuming them, and Promise combinators like Promise.all()."
                keywords="javascript promises, promise chaining, promise.all, promise states, asynchronous javascript"
                url="/webdevelopment/javascript/promises"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-yellow-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                
                <div className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                        <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 9.4: Asynchronous JS</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-yellow-500">Promises.</span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light px-4">
                        A better abstraction for managing asynchronous workflows.
                    </p>
                </div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">

                <Section title="The Core Idea" icon={ShieldCheck} id="core-idea">
                    <p className="text-gray-300 leading-relaxed">
                        A <strong>Promise</strong> is an object that represents the <em>eventual result</em> of an asynchronous operation. Instead of passing a callback into an async function, the function <em>returns</em> a Promise — a placeholder for a value that doesn't exist yet.
                    </p>
                    <HighlightBox title="The Restaurant Receipt Analogy" type="tip">
                        Think of it like ordering at a restaurant counter and receiving a <strong>receipt</strong>. You don't have your food yet, but the receipt is a promise that food is coming. You can go sit down, check your phone, talk to someone — and come back when your number is called. The receipt is a tangible object representing a future value.
                    </HighlightBox>
                    <p className="text-gray-300 leading-relaxed mt-4">
                        Crucially, the Promise object is returned <strong>immediately</strong>, before the operation finishes. This restores normal control flow — you have an object you can hold, pass around, and attach handlers to, just like any other value.
                    </p>
                </Section>

                <Section title="The Three States" icon={BookOpen} id="three-states">
                    <p className="text-gray-300 leading-relaxed">
                        Every Promise exists in one of three states, and it can only ever move forward — never backward:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 mt-4 text-gray-300 font-medium">
                        <li><strong>Pending</strong> — The operation is in-flight. The Promise has no value yet. This is the initial state from the moment the Promise is created.</li>
                        <li><strong>Fulfilled</strong> — The operation completed successfully. The Promise has resolved with a value. Any <code>.then()</code> handlers will be called with that value.</li>
                        <li><strong>Rejected</strong> — The operation failed. The Promise has a reason for failure, usually an Error object. Any <code>.catch()</code> handlers will be called with that reason.</li>
                    </ul>
                    <p className="text-gray-300 leading-relaxed mt-4">
                        Once a Promise moves from Pending to either Fulfilled or Rejected, it is <strong>settled</strong> and its state can <strong>never change again</strong>. A fulfilled Promise will never become rejected, and vice versa. This immutability guarantees consistency.
                    </p>
                    <div className="mt-4 bg-[#111418] p-4 rounded-xl border border-gray-800 font-mono text-sm text-yellow-500/80">
                        PENDING ──→ FULFILLED ✅ (calls .then() handlers)<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;──→ REJECTED ❌ (calls .catch() handlers)
                    </div>
                </Section>

                <Section title="Creating and Consuming a Promise" icon={Key} id="creating-consuming">
                    <h3 className="text-2xl font-bold text-white mb-4">Creating a Promise</h3>
                    <p className="text-gray-300 leading-relaxed">
                        The Promise constructor takes an <strong>executor function</strong> — a function that runs immediately and receives two arguments: <code>resolve</code> (call this on success) and <code>reject</code> (call this on failure).
                    </p>
                    <div className="mt-4 mb-6">
                        <CodeBlock 
                            title="create-promise.js"
                            language="javascript"
                            code={`const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) resolve({ id: 1, name: "Alice" });
    else reject(new Error("Something went wrong"));
  }, 1000);
});`}
                        />
                    </div>

                    <h3 className="text-2xl font-bold text-white mt-10 mb-4">Consuming a Promise</h3>
                    <div className="mt-4 mb-6">
                        <CodeBlock 
                            title="consume-promise.js"
                            language="javascript"
                            code={`promise
  .then(user  => console.log("Loaded:", user.name)) // Runs on fulfillment
  .catch(err  => console.error("Failed:", err.message)) // Runs on rejection
  .finally(() => hideLoadingSpinner()); // Always runs — perfect for cleanup`}
                        />
                    </div>
                </Section>

                <Section title="Promise Chaining — The Real Power" icon={BookOpen} id="chaining">
                    <p className="text-gray-300 leading-relaxed">
                        The breakthrough that Promises offer over callbacks is <strong>chaining</strong>. Each <code>.then()</code> call returns a <em>new</em> Promise, which resolves with whatever you return from its handler. This lets you express a sequence of async steps as a flat, top-to-bottom chain instead of a nested pyramid.
                    </p>
                    <div className="mt-4 mb-6">
                        <CodeBlock 
                            title="promise-chaining.js"
                            language="javascript"
                            code={`loginUser(credentials)
  .then(session  => fetchProfile(session.userId))
  .then(profile  => fetchOrders(profile.id))
  .then(orders   => renderDashboard(orders))
  .catch(error   => handleError(error)); // ONE handler for ALL steps above`}
                        />
                    </div>
                    <HighlightBox title="Unwrapping Promises" type="key">
                        If you return a <em>Promise</em> from a <code>.then()</code> handler (rather than a plain value), the chain automatically <strong>waits</strong> for that returned Promise to settle before calling the next <code>.then()</code>. The chain "unwraps" the inner Promise for you.
                    </HighlightBox>
                </Section>

                <Section title="Promise Combinators" icon={Key} id="combinators">
                    <p className="text-gray-300 leading-relaxed">
                        Sometimes you want to run several async operations <strong>at the same time</strong> and react to their collective outcome. The Promise class provides four static methods for this.
                    </p>
                    
                    <div className="space-y-6 mt-6">
                        <div>
                            <h3 className="text-2xl font-bold text-white">Promise.all()</h3>
                            <p className="text-gray-300 leading-relaxed mt-2">
                                Runs all Promises in parallel. Resolves when <strong>every</strong> Promise fulfills, providing an array of all their values in the same order as the input. Rejects immediately if <strong>any</strong> Promise rejects — the "fail fast" approach.
                            </p>
                            <div className="mt-2">
                                <CodeBlock 
                                    title="promise-all.js"
                                    language="javascript"
                                    code={`const [user, orders, reviews] = await Promise.all([
  fetchUser(id),
  fetchOrders(id),
  fetchReviews(id),
]);`}
                                />
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white">Promise.allSettled()</h3>
                            <p className="text-gray-300 leading-relaxed mt-2">
                                Waits for <strong>every one to settle</strong>, whether fulfilled or rejected. Returns an array of outcome objects, each with a <code>status</code> of <code>"fulfilled"</code> (with a <code>value</code>) or <code>"rejected"</code> (with a <code>reason</code>).
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white">Promise.race()</h3>
                            <p className="text-gray-300 leading-relaxed mt-2">
                                Resolves or rejects with the <strong>first Promise to settle</strong>, regardless of whether it fulfilled or rejected. Good for implementing timeouts.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white">Promise.any()</h3>
                            <p className="text-gray-300 leading-relaxed mt-2">
                                Resolves with the <strong>first Promise to fulfill</strong>. Rejections are ignored unless <em>all</em> Promises reject. Good for redundancy.
                            </p>
                        </div>
                    </div>

                    <div className="overflow-x-auto mt-8 border border-gray-800 rounded-xl">
                        <table className="w-full text-left text-gray-300">
                            <thead className="bg-gray-800/50">
                                <tr>
                                    <th className="px-6 py-4 font-bold text-white border-b border-gray-700">Method</th>
                                    <th className="px-6 py-4 font-bold text-white border-b border-gray-700">Resolves when</th>
                                    <th className="px-6 py-4 font-bold text-white border-b border-gray-700">Rejects when</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-800/50 hover:bg-gray-800/20">
                                    <td className="px-6 py-4 font-mono text-amber-400">Promise.all()</td>
                                    <td className="px-6 py-4">ALL fulfill</td>
                                    <td className="px-6 py-4">ANY rejects</td>
                                </tr>
                                <tr className="border-b border-gray-800/50 hover:bg-gray-800/20">
                                    <td className="px-6 py-4 font-mono text-amber-400">Promise.allSettled()</td>
                                    <td className="px-6 py-4">ALL settle</td>
                                    <td className="px-6 py-4">Never</td>
                                </tr>
                                <tr className="border-b border-gray-800/50 hover:bg-gray-800/20">
                                    <td className="px-6 py-4 font-mono text-amber-400">Promise.race()</td>
                                    <td className="px-6 py-4">FIRST settles (either way)</td>
                                    <td className="px-6 py-4">FIRST settles (either way)</td>
                                </tr>
                                <tr className="hover:bg-gray-800/20">
                                    <td className="px-6 py-4 font-mono text-amber-400">Promise.any()</td>
                                    <td className="px-6 py-4">FIRST fulfills</td>
                                    <td className="px-6 py-4">ALL reject</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Section>

                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript/callbacks" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">Callbacks</span>
                            </div>
                        </Link>

                        <Link to="/webdevelopment/javascript/async-await" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block group-hover:text-yellow-500/80 transition-colors">Up Next</span>
                                <span className="text-gray-200 font-bold text-xs sm:text-sm group-hover:text-white transition-colors">Async / Await</span>
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

export default Promises;
