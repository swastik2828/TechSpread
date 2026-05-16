import React from 'react';
import { BookOpen, Key, Lightbulb, AlertTriangle, ArrowRight, Compass, PhoneCall } from 'lucide-react';
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

const Callbacks = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="Callbacks — The Original Solution | JavaScript Course"
                description="Understand how callbacks were originally used for asynchronous programming in JavaScript and the issues like Callback Hell."
                keywords="javascript callbacks, callback hell, inversion of control, async javascript, callback queue"
                url="/webdevelopment/javascript/callbacks"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-yellow-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                
                <div className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                        <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 9.3: Asynchronous JS</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-yellow-500">Callbacks.</span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light px-4">
                        The original solution to asynchronous programming.
                    </p>
                </div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">

                <Section title="What Is a Callback?" icon={PhoneCall} id="callback">
                    <p className="text-gray-300 leading-relaxed">
                        A <strong>callback</strong> is a function you pass as an argument to another function, to be called later — either synchronously or asynchronously. The name comes from the idea of "calling back" to your code when something is done.
                    </p>
                    <p className="text-gray-300 leading-relaxed mt-4">
                        You already use synchronous callbacks all the time:
                    </p>
                    <div className="mt-4 mb-6">
                        <CodeBlock 
                            title="sync-callback.js"
                            language="javascript"
                            code={`// The function passed to forEach is a callback — called immediately, synchronously
[1, 2, 3].forEach(number => console.log(number));`}
                        />
                    </div>
                    <p className="text-gray-300 leading-relaxed mt-4">
                        Asynchronous callbacks work the same way, except they aren't called immediately — they're called <em>later</em>, when some operation completes.
                    </p>
                    <div className="mt-4 mb-6">
                        <CodeBlock 
                            title="async-callback.js"
                            language="javascript"
                            code={`// setTimeout hands work off to the browser and provides a callback for when it's done
setTimeout(() => {
  console.log("2 seconds have passed");
}, 2000);

console.log("This runs first"); // ← prints BEFORE the callback fires`}
                        />
                    </div>
                </Section>

                <Section title="The Error-First Convention" icon={Key} id="error-first">
                    <p className="text-gray-300 leading-relaxed">
                        Node.js standardised a critical pattern for async callbacks: <strong>the first parameter is always reserved for an error</strong>. If the operation succeeds, the first argument is <code>null</code> and the second argument is the result. If it fails, the first argument is an <code>Error</code> object.
                    </p>
                    <div className="mt-4 mb-6">
                        <CodeBlock 
                            title="error-first.js"
                            language="javascript"
                            code={`fs.readFile('data.txt', 'utf8', function(error, contents) {
  if (error) {
    console.error("Failed:", error.message);
    return; // Always return after handling an error — stops further execution
  }
  console.log("Success:", contents);
});`}
                        />
                    </div>
                    <p className="text-gray-300 leading-relaxed mt-4">
                        This consistent signature makes error handling mechanical and predictable — always check the first argument. However, it requires developers to remember to check it. There's no enforcement. If you forget the <code>if (error)</code> check, your code continues with a broken state and no warning.
                    </p>
                </Section>

                <Section title="Inversion of Control" icon={AlertTriangle} id="inversion">
                    <p className="text-gray-300 leading-relaxed">
                        Callbacks introduce a subtle but important problem called <strong>inversion of control</strong>: you are handing control of your code to someone else.
                    </p>
                    <p className="text-gray-300 leading-relaxed mt-4">
                        When you pass a callback to a third-party library, you are trusting that library to:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 mt-4 text-gray-300 font-medium">
                        <li>Call your callback at the right time</li>
                        <li>Call it with the right arguments</li>
                        <li>Call it exactly once — not zero times, not two times</li>
                    </ul>
                    <HighlightBox title="Loss of Control" type="warn">
                        If the library has a bug, your code breaks in confusing ways that are very hard to trace. You've given up control over your own execution flow. The code that matters most — your callback — is now someone else's responsibility to invoke.
                    </HighlightBox>
                    <p className="text-gray-300 leading-relaxed mt-4">
                        This loss of control is one of the fundamental limitations of the callback pattern, and it motivated the creation of Promises.
                    </p>
                </Section>

                <Section title="Callback Hell" icon={BookOpen} id="callback-hell">
                    <p className="text-gray-300 leading-relaxed">
                        The deeper problem with callbacks emerges when async operations need to happen <strong>in sequence</strong>, where each step depends on the result of the previous step. The only way to express this is through nesting — and nesting creates what's infamously called <strong>"callback hell"</strong> or the <strong>"pyramid of doom"</strong>.
                    </p>
                    <div className="mt-4 mb-6">
                        <CodeBlock 
                            title="callback-hell.js"
                            language="javascript"
                            code={`loginUser(credentials, function(err, session) {
  if (err) { handleError(err); return; }

  fetchProfile(session.userId, function(err, profile) {
    if (err) { handleError(err); return; }

    fetchOrders(profile.id, function(err, orders) {
      if (err) { handleError(err); return; }

      renderDashboard(profile, orders, function(err) {
        if (err) { handleError(err); return; }
        console.log("Done!");
      });
    });
  });
});`}
                        />
                    </div>
                    <p className="text-gray-300 leading-relaxed mt-4">
                        Notice how the code drifts further and further to the right with each step. This code has several serious problems:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 mt-4 text-gray-300 font-medium">
                        <li><strong>Readability</strong> — the logic is buried in layers of nesting. Following the flow requires tracking multiple indentation levels simultaneously.</li>
                        <li><strong>Maintainability</strong> — adding a new step means adding another level of nesting, reshaping the entire block.</li>
                        <li><strong>Error handling</strong> — you must manually check for errors at every single level. Miss one check and your code silently continues with broken data.</li>
                        <li><strong>Reusability</strong> — the steps are entangled inside each other and can't be extracted or reused independently.</li>
                        <li><strong>No return values</strong> — you can't <code>return</code> a meaningful value from a callback. Data can only travel <em>inward</em> through deeper nesting, never outward to the caller.</li>
                    </ul>
                    <p className="text-gray-300 leading-relaxed mt-6">
                        This is the problem that Promises were created to solve.
                    </p>
                </Section>

                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript/event-loop" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">The Event Loop</span>
                            </div>
                        </Link>

                        <Link to="/webdevelopment/javascript/promises" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block group-hover:text-yellow-500/80 transition-colors">Up Next</span>
                                <span className="text-gray-200 font-bold text-xs sm:text-sm group-hover:text-white transition-colors">Promises</span>
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

export default Callbacks;
