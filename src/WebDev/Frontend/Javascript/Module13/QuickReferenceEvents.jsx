// File: src/WebDev/Frontend/Javascript/Module13/QuickReferenceEvents.jsx

import React from 'react';
import { ArrowRight, Compass, LibraryBig, LayoutList, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";

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

const QuickReferenceEvents = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-8 leading-loose tracking-wide font-sans pb-20 w-full px-4 sm:px-0">
            <SEO title="Event Handling Quick Reference | JavaScript Course" description="A cheat sheet for modern JavaScript Event Handling: delegation, custom events, and propagation." />

            <header className="py-16 md:py-24 text-center border-b border-white/10 mb-16 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px]">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none"></div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-8 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                    <Compass className="w-5 h-5 text-yellow-400" />
                    <span className="text-yellow-400 text-sm font-black uppercase tracking-[0.2em]">Module 13.10: Event Handling</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter drop-shadow-2xl">
                    Quick <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Reference</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
                    A consolidated cheat-sheet for everything covered in the Event Handling module. Bookmark this for your daily development.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none w-full border-box">
                <Section title="Essential Patterns Code Snippets" icon={Terminal}>
                    <CodeBlock language="javascript" code={`// Register a listener with options
el.addEventListener('click', handler, { capture: false, once: true, passive: true });

// Remove a group of listeners atomically
const ac = new AbortController();
el.addEventListener('click', handler, { signal: ac.signal });
ac.abort(); // removes all listeners using this signal

// Dispatch a custom event
el.dispatchEvent(new CustomEvent('my:event', {
  detail: { id: 42 },
  bubbles: true,
  cancelable: true,
  composed: true, // for shadow DOM crossing
}));

// Delegate clicks to descendants
parent.addEventListener('click', (e) => {
  const target = e.target.closest('[data-action]');
  if (!target) return;
  dispatch(target.dataset.action, target.dataset);
});`} />
                </Section>

                <Section title="Event Phase Decision Matrix" icon={LibraryBig}>
                    <div className="overflow-x-auto rounded-xl border border-gray-800">
                        <table className="w-full text-left text-sm text-gray-400">
                            <thead className="text-xs text-gray-300 uppercase bg-gray-900/80 border-b border-gray-800">
                                <tr>
                                    <th className="px-6 py-4">You want to…</th>
                                    <th className="px-6 py-4">Use…</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-800/50">
                                    <td className="px-6 py-4">Handle events from many child elements</td>
                                    <td className="px-6 py-4 font-mono text-yellow-400">Delegation on a common ancestor</td>
                                </tr>
                                <tr className="border-b border-gray-800/50">
                                    <td className="px-6 py-4">Intercept an event before it reaches the target</td>
                                    <td className="px-6 py-4 font-mono text-yellow-400">Capture phase (capture: true)</td>
                                </tr>
                                <tr className="border-b border-gray-800/50">
                                    <td className="px-6 py-4">Prevent default browser action</td>
                                    <td className="px-6 py-4 font-mono text-yellow-400">event.preventDefault()</td>
                                </tr>
                                <tr className="border-b border-gray-800/50">
                                    <td className="px-6 py-4">Stop an event reaching ancestor elements</td>
                                    <td className="px-6 py-4 font-mono text-yellow-400">event.stopPropagation()</td>
                                </tr>
                                <tr className="border-b border-gray-800/50">
                                    <td className="px-6 py-4">Handle an event exactly once</td>
                                    <td className="px-6 py-4 font-mono text-yellow-400">once: true option</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4">Communicate between decoupled components</td>
                                    <td className="px-6 py-4 font-mono text-yellow-400">Custom events with bubbles: true</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Section>

                <Section title="Events That Do Not Bubble" icon={LayoutList}>
                    <p>If an event does not bubble, you cannot use standard event delegation. Use their bubbling equivalents where applicable.</p>
                    <div className="overflow-x-auto rounded-xl border border-gray-800 mt-6">
                        <table className="w-full text-left text-sm text-gray-400">
                            <thead className="text-xs text-gray-300 uppercase bg-gray-900/80 border-b border-gray-800">
                                <tr>
                                    <th className="px-6 py-4">Event (Does Not Bubble)</th>
                                    <th className="px-6 py-4">Bubbling Equivalent</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-800/50 bg-rose-500/5">
                                    <td className="px-6 py-4 font-mono font-bold text-rose-400">focus</td>
                                    <td className="px-6 py-4 font-mono text-emerald-400">focusin</td>
                                </tr>
                                <tr className="border-b border-gray-800/50 bg-rose-500/5">
                                    <td className="px-6 py-4 font-mono font-bold text-rose-400">blur</td>
                                    <td className="px-6 py-4 font-mono text-emerald-400">focusout</td>
                                </tr>
                                <tr className="border-b border-gray-800/50 bg-rose-500/5">
                                    <td className="px-6 py-4 font-mono font-bold text-rose-400">mouseenter</td>
                                    <td className="px-6 py-4 font-mono text-emerald-400">mouseover</td>
                                </tr>
                                <tr className="border-b border-gray-800/50 bg-rose-500/5">
                                    <td className="px-6 py-4 font-mono font-bold text-rose-400">mouseleave</td>
                                    <td className="px-6 py-4 font-mono text-emerald-400">mouseout</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-mono font-bold text-rose-400">load / error / abort</td>
                                    <td className="px-6 py-4 text-gray-500 italic">No equivalent — attach directly</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Section>
            </div>

            {/* Pagination Footer */}
            <div className="mt-24 pt-12 border-t border-gray-800/60 w-full flex flex-col sm:flex-row justify-between items-center gap-4">
                <Link to="/webdevelopment/javascript/memory-leaks" className="group flex items-center gap-4 p-5 rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 w-full sm:w-auto transition-all">
                    <div className="w-12 h-12 rounded-xl bg-gray-800/40 flex items-center justify-center border border-gray-800 group-hover:text-white text-gray-400 transition-colors"><ArrowRight className="w-6 h-6 rotate-180" /></div>
                    <div>
                        <span className="text-xs text-gray-500 font-bold uppercase tracking-widest block">Previous</span>
                        <span className="text-gray-300 font-bold">13.9 Memory Leaks</span>
                    </div>
                </Link>
                {/* Points back to course hub or next major module */}
                <Link to="/tutorials/webdevelopment/frontend" className="group flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border border-yellow-500/40 hover:border-yellow-400 hover:shadow-[0_0_30px_rgba(234,179,8,0.2)] w-full sm:w-auto text-right transition-all">
                    <div>
                        <span className="text-xs text-yellow-500/80 font-bold uppercase tracking-widest block">Complete</span>
                        <span className="text-yellow-400 font-bold">Return to Course Hub</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-yellow-500/20 text-yellow-400 flex items-center justify-center border border-yellow-500/30"><ArrowRight className="w-6 h-6" /></div>
                </Link>
            </div>
        </article>
    );
};

export default QuickReferenceEvents;