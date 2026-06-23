// swastik2828/techspread/TechSpread-e42273dd6b6a9028bc99382c33681de38dbe3959/src/WebDev/Frontend/Javascript/Module14/BrowserStorage.jsx

import React, { useEffect } from 'react';
import { BookOpen, Key, Lightbulb, AlertTriangle, ArrowRight, Code2, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";
import JsStorageSimulator from "../../../../simulators/web/js/JsStorageSimulator";

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

const BrowserStorage = () => {

    useEffect(() => {
        // Safe scroll reset that handles client-side routing
        try {
            window.scrollTo(0, 0);
            const scrollContainers = document.querySelectorAll('.overflow-y-auto, main, article');
            scrollContainers.forEach(container => {
                container.scrollTop = 0;
            });
        } catch (error) {
            console.error("Scroll behavior failed: ", error);
        }
    }, []);

    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="Browser Storage | JavaScript Course"
                description="Understand localStorage, sessionStorage, Cookies, and IndexedDB. Learn where to securely store authentication tokens."
                keywords="javascript localStorage, sessionStorage, Cookies, IndexedDB, auth tokens"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-amber-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                
                <div className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                        <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 14.3: Storage</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        Browser <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-orange-500">Storage.</span>
                    </h1>
                </div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">
                
                <Section title="14.3 Where Should the Browser Remember Things?" icon={Database} id="storage">
                    <p className="text-lg sm:text-xl font-medium text-white leading-relaxed mb-8">
                        Forms are about <em>collecting</em> data. The rest of this module is about <em>remembering</em> it — letting a website hang onto information even after you've closed the tab, refreshed the page, or restarted your laptop. Browsers actually offer four different storage tools.
                    </p>

                    <div className="space-y-8 bg-[#0d1117] p-6 sm:p-10 rounded-3xl border border-gray-800/60 shadow-inner">
                        
                        <div className="border-b border-gray-800 pb-6">
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-400 mb-4">localStorage</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                <code>localStorage</code> is the simplest option. It stores key-value pairs tied to your website's origin, and that data sticks around indefinitely — through page reloads, browser restarts, even rebooting the computer — until either your code deletes it or the user clears their browser data.
                            </p>
                            <CodeBlock 
                                language="javascript"
                                code={`localStorage.setItem("theme", "dark");
const theme = localStorage.getItem("theme"); // "dark"
localStorage.removeItem("theme");`}
                            />
                            <p className="text-gray-300 leading-relaxed mt-4">
                                <strong>Good for:</strong> theme preferences, "don't show this again" flags, a saved draft of a comment box.
                            </p>
                        </div>

                        <div className="pt-2 border-b border-gray-800 pb-6">
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-purple-400 mb-4">sessionStorage</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                <code>sessionStorage</code> looks and behaves almost identically to <code>localStorage</code> in code — same methods — but it has a very different lifespan. Data in <code>sessionStorage</code> only survives as long as that specific browser tab stays open.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                <strong>Good for:</strong> progress through a multi-step signup wizard, temporary filter settings on a search page.
                            </p>
                        </div>

                        <div className="pt-2 border-b border-gray-800 pb-6">
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-orange-400 mb-4">Cookies</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Cookies are automatically attached to every HTTP request sent to their matching domain. That single fact is why cookies became the backbone of login sessions — the server can recognize you on every request without your JavaScript doing anything at all.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                <strong>Good for:</strong> authentication sessions, anything the server needs to see on every request.
                            </p>
                        </div>

                        <div className="pt-2">
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mb-4">IndexedDB</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                IndexedDB is a full transactional database running right inside the browser. Where <code>localStorage</code> is limited to strings and a few megabytes, IndexedDB can store structured data with no practical size ceiling.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                <strong>Good for:</strong> offline-first apps, caching files or images for offline use.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 mb-8 pt-8 border-t border-gray-800/60">
                        <h4 className="text-2xl sm:text-3xl font-black text-white mb-6">Interactive Storage Visualizer</h4>
                        <p className="text-gray-400 mb-8 font-medium">Use the interactive simulator below to see how different storage mechanisms survive a page refresh versus clearing the browser cache.</p>
                        <JsStorageSimulator />
                    </div>

                    <HighlightBox title="Security Alert: Storing Login Tokens" type="warn">
                        <strong>Don't store authentication tokens in localStorage.</strong> It might seem convenient, but localStorage is fully readable by any JavaScript running on your page — including malicious JavaScript injected through an XSS attack.
                        <br/><br/>
                        <strong>Safer Options:</strong><br/>
                        1. An <code>HttpOnly</code> cookie, set by the server. (Gold Standard)<br/>
                        2. Keep the token in memory — a plain JavaScript variable that disappears on refresh.
                    </HighlightBox>
                </Section>

                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript/form-validation" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous Module</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">Form Validation</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default BrowserStorage;