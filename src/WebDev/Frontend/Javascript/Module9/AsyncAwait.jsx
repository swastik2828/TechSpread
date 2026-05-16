import React from 'react';
import { BookOpen, Key, Lightbulb, AlertTriangle, ArrowRight, Compass, Zap } from 'lucide-react';
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

const AsyncAwait = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="Async / Await — Writing Async Like Sync | JavaScript Course"
                description="Understand how async and await keywords simplify Promise usage in JavaScript to write clean, synchronous-looking asynchronous code."
                keywords="javascript async await, async keyword, await keyword, promise syntactic sugar, top-level await"
                url="/webdevelopment/javascript/async-await"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-yellow-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                
                <div className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                        <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 9.5: Asynchronous JS</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-yellow-500">Async / Await.</span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light px-4">
                        Writing asynchronous code that reads like synchronous code.
                    </p>
                </div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">

                <Section title="What Async/Await Actually Is" icon={Lightbulb} id="what-it-is">
                    <p className="text-gray-300 leading-relaxed">
                        <code>async/await</code> is <strong>syntactic sugar built on top of Promises</strong>. It doesn't introduce a new async model — it's a cleaner <em>syntax</em> for working with Promises. Under the hood, the JavaScript engine transforms your <code>async/await</code> code into Promise chains automatically.
                    </p>
                    <HighlightBox title="The Core Benefit" type="tip">
                        The entire purpose of <code>async/await</code> is to let you write asynchronous code that <em>reads</em> like synchronous code. Instead of chaining <code>.then()</code> calls, you write sequential-looking statements.
                    </HighlightBox>
                </Section>

                <Section title="The async Keyword" icon={Zap} id="async">
                    <p className="text-gray-300 leading-relaxed">
                        Placing <code>async</code> before a function does two things:
                    </p>
                    <ul className="list-decimal pl-6 space-y-3 mt-4 text-gray-300 font-medium">
                        <li>It allows the use of <code>await</code> inside that function.</li>
                        <li>It <strong>guarantees the function always returns a Promise</strong>, no matter what. If you return a plain value, JavaScript automatically wraps it in <code>Promise.resolve()</code>.</li>
                    </ul>
                    <div className="mt-6 mb-6">
                        <CodeBlock 
                            title="async-func.js"
                            language="javascript"
                            code={`async function greet(name) {
  return \`Hello, \${name}!\`; // Automatically wrapped in Promise.resolve()
}

// Calling it gives you a Promise
greet("Alice").then(msg => console.log(msg)); // "Hello, Alice!"`}
                        />
                    </div>
                </Section>

                <Section title="The await Keyword" icon={Key} id="await">
                    <p className="text-gray-300 leading-relaxed">
                        <code>await</code> can only be used inside an <code>async</code> function. Placing it before a Promise expression <strong>pauses the execution of that async function</strong> until the Promise settles, then evaluates to the resolved value.
                    </p>
                    <HighlightBox title="Non-Blocking Pause" type="key">
                        This is the key behaviour: <code>await</code> pauses <strong>only the async function</strong>, not the entire JavaScript thread. The Event Loop remains fully active. Other code continues to run while the current function is waiting.
                    </HighlightBox>
                    <div className="mt-6 mb-6">
                        <CodeBlock 
                            title="await.js"
                            language="javascript"
                            code={`async function loadUser(id) {
  const user = await fetchUser(id); // Pauses here until Promise resolves
  console.log(user.name);           // Resumes here with the resolved value
  return user;
}`}
                        />
                    </div>
                </Section>

                <Section title="Async/Await vs Promise Chains" icon={BookOpen} id="vs-chains">
                    <p className="text-gray-300 leading-relaxed">
                        It helps to see these two styles doing identical work side by side:
                    </p>
                    <div className="mt-4 mb-6">
                        <CodeBlock 
                            title="compare.js"
                            language="javascript"
                            code={`// With Promise chains
function loadProfile(userId) {
  return fetchUser(userId)
    .then(user  => fetchPosts(user.id))
    .then(posts => renderPage(posts))
    .catch(err  => showError(err));
}

// With async/await — reads like synchronous code
async function loadProfile(userId) {
  try {
    const user  = await fetchUser(userId);
    const posts = await fetchPosts(user.id);
    await renderPage(posts);
  } catch (err) {
    showError(err);
  }
}`}
                        />
                    </div>
                    <p className="text-gray-300 leading-relaxed mt-4">
                        Both do exactly the same thing. The async/await version is simply easier to read, especially as complexity grows.
                    </p>
                </Section>

                <Section title="Top-Level Await" icon={Key} id="top-level">
                    <p className="text-gray-300 leading-relaxed">
                        Historically, <code>await</code> could only be used inside an <code>async</code> function. In modern JavaScript (ES modules, Node.js v14.8+), you can use <code>await</code> at the <strong>top level</strong> of a module file — outside of any function.
                    </p>
                    <div className="mt-4 mb-6">
                        <CodeBlock 
                            title="top-level.mjs"
                            language="javascript"
                            code={`// In an ES module (.mjs file or <script type="module">)
const config = await fetchConfig();  // Works at the top level!
const db     = await connectToDatabase(config.dbUrl);

export { db };`}
                        />
                    </div>
                </Section>

                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript/promises" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">Promises</span>
                            </div>
                        </Link>

                        <Link to="/webdevelopment/javascript/error-handling" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block group-hover:text-yellow-500/80 transition-colors">Up Next</span>
                                <span className="text-gray-200 font-bold text-xs sm:text-sm group-hover:text-white transition-colors">Error Handling</span>
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

export default AsyncAwait;
