// File: src/WebDev/Frontend/Javascript/Module13/EventPropagation.jsx

import React from 'react';
import { ArrowRight, Compass, Network, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";
import EventPropagationSimulator from "../../../../simulators/web/javascript/EventPropagationSimulator";

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

const EventPropagation = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-8 leading-loose tracking-wide font-sans pb-20 w-full px-4 sm:px-0">
            <SEO title="Event Propagation | JavaScript Course" description="Understand DOM Event Propagation: Capture, Target, and Bubble phases." />

            <header className="py-16 md:py-24 text-center border-b border-white/10 mb-16 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px]">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none"></div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-8 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                    <Compass className="w-5 h-5 text-yellow-400" />
                    <span className="text-yellow-400 text-sm font-black uppercase tracking-[0.2em]">Module 13.2: Event Handling</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter drop-shadow-2xl">
                    Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Propagation</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
                    Events don't just happen on a single element. They travel through the DOM in a predictable, three-phase journey.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none w-full border-box">
                <Section title="The Three Phases" icon={Network}>
                    <p>
                        Most developers think of events as firing on a single element. In reality, events travel through the entire DOM tree in a defined sequence. This is what makes delegation, global keyboard shortcuts, and focus traps possible.
                    </p>
                    
                    <div className="my-10 w-full">
                        <EventPropagationSimulator />
                    </div>

                    <p>When an event is dispatched on a target element, it takes this journey:</p>
                    
                    <CodeBlock language="html" code={`window
  └── document
        └── <html>
              └── <body>
                    └── <main>
                          └── <ul>          ← ancestor elements
                                └── <li>    ← ancestor element
                                      └── <button>  ← TARGET`} />

                    <ul className="list-none space-y-6 mt-8">
                        <li className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
                            <strong className="text-yellow-400 text-xl block mb-2">Phase 1 — Capture</strong>
                            The event travels <em>down</em> from <code>window</code> toward the target. Listeners registered with <code>{`{ capture: true }`}</code> fire at each ancestor in order.
                        </li>
                        <li className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
                            <strong className="text-yellow-400 text-xl block mb-2">Phase 2 — Target</strong>
                            The event arrives at the target element. Both capturing and bubbling listeners on the target itself fire here, in the order they were added.
                        </li>
                        <li className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
                            <strong className="text-yellow-400 text-xl block mb-2">Phase 3 — Bubble</strong>
                            The event travels back <em>up</em> from the target to <code>window</code>. Most listeners (registered without <code>capture: true</code>) fire during this phase.
                        </li>
                    </ul>

                    <div className="p-6 bg-gradient-to-br from-rose-900/40 to-red-900/10 border border-rose-500/40 rounded-3xl mt-8 flex gap-4 items-start shadow-xl shadow-rose-500/10">
                        <div className="p-2 rounded-lg bg-black/20 border-rose-500/40 border shrink-0">
                            <AlertTriangle className="w-6 h-6 text-rose-400" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-rose-400 mb-2">Not all events bubble</h4>
                            <p className="text-gray-300 text-base m-0 leading-relaxed">
                                <code>focus</code> and <code>blur</code> do not bubble, but their equivalents <code>focusin</code> and <code>focusout</code> do. <code>mouseenter</code> and <code>mouseleave</code> do not bubble; <code>mouseover</code> and <code>mouseout</code> do. You can check the <code>Event.bubbles</code> property.
                            </p>
                        </div>
                    </div>
                </Section>

                <Section title="Controlling Propagation" icon={Network}>
                    <p>You can interfere with the event's journey using two methods on the event object, though they should be used sparingly.</p>
                    
                    <h4 className="text-xl font-bold text-white mt-8 mb-4">event.stopPropagation()</h4>
                    <p>Prevents the event from moving to the next element in its journey, but allows other listeners <em>on the current element</em> to still fire.</p>
                    <CodeBlock language="javascript" code={`inner.addEventListener('click', (e) => {
  e.stopPropagation(); // outer's listener will not fire
  // Other listeners on \`inner\` still fire
});`} />

                    <h4 className="text-xl font-bold text-white mt-8 mb-4">event.stopImmediatePropagation()</h4>
                    <p>Stops propagation <em>and</em> prevents any remaining listeners on the current element from firing.</p>
                    <CodeBlock language="javascript" code={`button.addEventListener('click', (e) => {
  e.stopImmediatePropagation(); // This is the only handler that runs
  doSomething();
});

button.addEventListener('click', () => {
  // This never runs
});`} />
                </Section>
            </div>

            {/* Pagination Footer */}
            <div className="mt-24 pt-12 border-t border-gray-800/60 w-full flex flex-col sm:flex-row justify-between items-center gap-4">
                <Link to="/webdevelopment/javascript/the-event-system" className="group flex items-center gap-4 p-5 rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 w-full sm:w-auto transition-all">
                    <div className="w-12 h-12 rounded-xl bg-gray-800/40 flex items-center justify-center border border-gray-800 group-hover:text-white text-gray-400 transition-colors"><ArrowRight className="w-6 h-6 rotate-180" /></div>
                    <div>
                        <span className="text-xs text-gray-500 font-bold uppercase tracking-widest block">Previous</span>
                        <span className="text-gray-300 font-bold">13.1 The Event System</span>
                    </div>
                </Link>
                <Link to="/webdevelopment/javascript/the-event-object" className="group flex items-center gap-4 p-5 rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] w-full sm:w-auto text-right transition-all">
                    <div>
                        <span className="text-xs text-gray-500 font-bold uppercase tracking-widest block group-hover:text-yellow-500/80 transition-colors">Up Next</span>
                        <span className="text-gray-200 font-bold group-hover:text-white transition-colors">13.3 The Event Object</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-yellow-400 flex items-center justify-center border border-gray-800 group-hover:border-yellow-500/30 group-hover:bg-yellow-500/10 transition-all"><ArrowRight className="w-6 h-6" /></div>
                </Link>
            </div>
        </article>
    );
};

export default EventPropagation;