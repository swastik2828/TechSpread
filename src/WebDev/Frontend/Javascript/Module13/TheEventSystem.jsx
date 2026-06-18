import React from 'react';
import { BookOpen, Key, Network, ArrowRight, Compass, Zap, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock"; // Adjust path to your CodeBlock

const Section = ({ title, icon: Icon, children, id }) => (
    <section id={id} className="relative mb-16 sm:mb-24 scroll-mt-28">
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 mb-8 w-full">
            <div className="p-2 sm:p-4 bg-gradient-to-br from-yellow-500/20 to-yellow-500/20 rounded-xl sm:rounded-2xl border border-yellow-500/40 text-yellow-400 shadow-[0_0_30px_rgba(234,179,8,0.15)] flex-shrink-0">
                <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
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
        key: { icon: Key, color: "text-yellow-400", border: "border-yellow-500/40", bg: "bg-gradient-to-br from-yellow-900/40 to-yellow-900/10", heading: "text-yellow-500", shadow: "shadow-yellow-500/10" },
        note: { icon: BookOpen, color: "text-sky-400", border: "border-sky-500/40", bg: "bg-gradient-to-br from-sky-900/40 to-blue-900/10", heading: "text-sky-400", shadow: "shadow-sky-500/10" }
    }[type];

    const Icon = config.icon;

    return (
        <div className={`p-5 sm:p-8 rounded-3xl ${config.bg} border ${config.border} shadow-xl ${config.shadow} my-8 relative overflow-hidden group w-full`}>
            <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 blur-3xl rounded-full ${config.bg} transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700`}></div>
            <h4 className={`text-xl md:text-2xl font-bold mb-4 flex items-center gap-3 ${config.heading} relative z-10`}>
                <div className={`p-2 rounded-lg bg-black/20 ${config.border} border shrink-0`}>
                    <Icon className={`w-6 h-6 ${config.color}`} />
                </div>
                <span>{title}</span>
            </h4>
            <div className="text-gray-300 md:text-lg leading-relaxed relative z-10 font-medium">
                {children}
            </div>
        </div>
    );
};

const TheEventSystem = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-8 leading-loose tracking-wide font-sans pb-20 w-full px-4 sm:px-0">
            <SEO title="The Event System | JavaScript Course" description="Master the JavaScript Event System. Learn how to use addEventListener, EventTargets, and the Observer pattern." />

            <header className="py-16 md:py-24 text-center border-b border-white/10 mb-16 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px]">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none"></div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-8 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                    <Compass className="w-5 h-5 text-yellow-400" />
                    <span className="text-yellow-400 text-sm font-black uppercase tracking-[0.2em]">Module 13.1: Event Handling</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter drop-shadow-2xl">
                    The <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Event System</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
                    Events are the nervous system of every interactive web application. They let JavaScript observe what the user is doing and react to it.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none w-full border-box">
                <Section title="What an Event Actually Is" icon={Network}>
                    <p>
                        Every browser event is an instance of the <code>Event</code> interface. When something interesting happens — the user clicks a button, a network request completes, a CSS animation finishes — the browser creates one of these objects and dispatches it on a specific <strong>event target</strong>.
                    </p>
                    <p>
                        An event target is any object that implements the <code>EventTarget</code> interface. DOM elements are the most obvious targets, but the list also includes <code>window</code>, <code>document</code>, and <code>XMLHttpRequest</code>. You can even create custom event targets.
                    </p>
                    
                    <CodeBlock language="javascript" code={`class Store extends EventTarget {
  #state = {};

  update(key, value) {
    this.#state[key] = value;
    this.dispatchEvent(
      new CustomEvent('change', { detail: { key, value } })
    );
  }
}

const store = new Store();

store.addEventListener('change', ({ detail }) => {
  console.log(\`State changed: \${detail.key} = \${detail.value}\`);
});

store.update('username', 'alice'); // logs: State changed: username = alice`} />

                    <HighlightBox title="The Observer Pattern" type="key">
                        This is the Observer pattern at the language level — targets hold a list of listeners and notify all of them whenever an event fires.
                    </HighlightBox>
                </Section>

                <Section title="addEventListener in Full" icon={Zap}>
                    <p>The standard way to register a listener is <code>addEventListener</code>. Its signature has evolved over the years, now utilizing an options object for advanced control.</p>
                    
                    <div className="overflow-x-auto mt-6 rounded-xl border border-gray-800 mb-6">
                        <table className="w-full text-left text-sm text-gray-400">
                            <thead className="text-xs text-gray-300 uppercase bg-gray-900/80 border-b border-gray-800">
                                <tr>
                                    <th className="px-6 py-4">Option</th>
                                    <th className="px-6 py-4">Default</th>
                                    <th className="px-6 py-4">What it does</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-800/50">
                                    <td className="px-6 py-4 font-bold text-yellow-400">capture</td>
                                    <td className="px-6 py-4">false</td>
                                    <td className="px-6 py-4">Fire during capture phase instead of bubble phase.</td>
                                </tr>
                                <tr className="border-b border-gray-800/50">
                                    <td className="px-6 py-4 font-bold text-yellow-400">once</td>
                                    <td className="px-6 py-4">false</td>
                                    <td className="px-6 py-4">Auto-remove the listener after its first invocation.</td>
                                </tr>
                                <tr className="border-b border-gray-800/50">
                                    <td className="px-6 py-4 font-bold text-yellow-400">passive</td>
                                    <td className="px-6 py-4">Varies</td>
                                    <td className="px-6 py-4">Promise not to call preventDefault() — critical for scroll performance.</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-bold text-yellow-400">signal</td>
                                    <td className="px-6 py-4">—</td>
                                    <td className="px-6 py-4">Remove the listener when an AbortSignal is aborted.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Section>
            </div>

            {/* Pagination Footer */}
            <div className="mt-24 pt-12 border-t border-gray-800/60 w-full flex flex-col sm:flex-row justify-between items-center gap-4">
                <Link to="/webdevelopment/javascript/dom-working-example" className="group flex items-center gap-4 p-5 rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 w-full sm:w-auto">
                    <div className="w-12 h-12 rounded-xl bg-gray-800/40 flex items-center justify-center border border-gray-800"><ArrowRight className="w-6 h-6 rotate-180" /></div>
                    <div>
                        <span className="text-xs text-gray-500 font-bold uppercase tracking-widest block">Previous</span>
                        <span className="text-gray-300 font-bold">12.8 Working Example</span>
                    </div>
                </Link>
                <Link to="/webdevelopment/javascript/event-propagation" className="group flex items-center gap-4 p-5 rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] w-full sm:w-auto text-right">
                    <div>
                        <span className="text-xs text-gray-500 font-bold uppercase tracking-widest block group-hover:text-yellow-500/80">Up Next</span>
                        <span className="text-gray-200 font-bold group-hover:text-white">13.2 Event Propagation</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-yellow-400 flex items-center justify-center border border-gray-800 group-hover:border-yellow-500/30"><ArrowRight className="w-6 h-6" /></div>
                </Link>
            </div>
        </article>
    );
};

export default TheEventSystem;