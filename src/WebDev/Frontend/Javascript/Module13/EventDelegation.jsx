// File: src/WebDev/Frontend/Javascript/Module13/EventDelegation.jsx

import React from 'react';
import { ArrowRight, Compass, Layers, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";
import EventDelegationSimulator from "../../../../simulators/web/javascript/EventDelegationSimulator";

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

const EventDelegation = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-8 leading-loose tracking-wide font-sans pb-20 w-full px-4 sm:px-0">
            <SEO title="Event Delegation | JavaScript Course" description="Master Event Delegation in JavaScript. Learn to manage complex UIs with a single event listener." />

            <header className="py-16 md:py-24 text-center border-b border-white/10 mb-16 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px]">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none"></div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-8 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                    <Compass className="w-5 h-5 text-yellow-400" />
                    <span className="text-yellow-400 text-sm font-black uppercase tracking-[0.2em]">Module 13.4: Event Handling</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter drop-shadow-2xl">
                    Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Delegation</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
                    Stop adding thousands of listeners. Use the bubbling phase to orchestrate entire applications from a single DOM node.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none w-full border-box">
                <Section title="The Core Idea" icon={Layers}>
                    <p>
                        Imagine a table with ten thousand rows, each needing click handling. Adding a listener to each row creates ten thousand listener objects, holds references to ten thousand DOM nodes, and requires cleanup every time rows are added or removed.
                    </p>
                    <p>
                        <strong>Event delegation solves all of this.</strong> You add <em>one</em> listener to the table body and use the event's <code>target</code> to figure out which row was involved. Because events bubble up from the clicked row to the <code>&lt;tbody&gt;</code>, the single listener catches everything.
                    </p>

                    <div className="my-10">
                        <EventDelegationSimulator />
                    </div>

                    <CodeBlock language="javascript" code={`const tbody = document.querySelector('tbody');

tbody.addEventListener('click', (e) => {
  // closest() walks UP the DOM finding the nearest matching ancestor
  const row = e.target.closest('tr[data-id]');
  if (!row) return; // If clicked outside a row, do nothing

  const id = row.dataset.id;

  // Route the logic based on what inside the row was clicked
  if (e.target.matches('[data-action="edit"]')) {
    openEditor(id);
  } else if (e.target.matches('[data-action="delete"]')) {
    deleteRow(id);
  } else if (e.target.matches('[data-action="select"]')) {
    toggleSelection(id);
  }
});`} />
                    <p className="mt-4">
                        Using <code>e.target.closest()</code> is vital here. If the user clicks on an SVG icon <em>inside</em> the delete button, <code>e.target</code> is the SVG path. <code>closest()</code> ensures you correctly identify the button regardless of the exact nested element that received the physical click.
                    </p>
                </Section>

                <Section title="When Delegation Fails" icon={Zap}>
                    <p>Delegation depends entirely on the Bubble phase. If an event type does not bubble, delegation via a parent container will not work using standard listeners.</p>
                    
                    <div className="overflow-x-auto mt-6 rounded-xl border border-gray-800 mb-6">
                        <table className="w-full text-left text-sm text-gray-400">
                            <thead className="text-xs text-gray-300 uppercase bg-gray-900/80 border-b border-gray-800">
                                <tr>
                                    <th className="px-6 py-4">Does Not Bubble</th>
                                    <th className="px-6 py-4">Bubbling Equivalent to Use</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-800/50">
                                    <td className="px-6 py-4 font-bold font-mono text-rose-400">focus</td>
                                    <td className="px-6 py-4 font-mono text-emerald-400">focusin</td>
                                </tr>
                                <tr className="border-b border-gray-800/50">
                                    <td className="px-6 py-4 font-bold font-mono text-rose-400">blur</td>
                                    <td className="px-6 py-4 font-mono text-emerald-400">focusout</td>
                                </tr>
                                <tr className="border-b border-gray-800/50">
                                    <td className="px-6 py-4 font-bold font-mono text-rose-400">mouseenter</td>
                                    <td className="px-6 py-4 font-mono text-emerald-400">mouseover</td>
                                </tr>
                                <tr className="border-b border-gray-800/50">
                                    <td className="px-6 py-4 font-bold font-mono text-rose-400">mouseleave</td>
                                    <td className="px-6 py-4 font-mono text-emerald-400">mouseout</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-bold font-mono text-rose-400">load (on &lt;img&gt;)</td>
                                    <td className="px-6 py-4 text-gray-500 italic">No equivalent; must attach directly</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Section>
            </div>

            {/* Pagination Footer */}
            <div className="mt-24 pt-12 border-t border-gray-800/60 w-full flex flex-col sm:flex-row justify-between items-center gap-4">
                <Link to="/webdevelopment/javascript/the-event-object" className="group flex items-center gap-4 p-5 rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 w-full sm:w-auto transition-all">
                    <div className="w-12 h-12 rounded-xl bg-gray-800/40 flex items-center justify-center border border-gray-800 group-hover:text-white text-gray-400 transition-colors"><ArrowRight className="w-6 h-6 rotate-180" /></div>
                    <div>
                        <span className="text-xs text-gray-500 font-bold uppercase tracking-widest block">Previous</span>
                        <span className="text-gray-300 font-bold">13.3 The Event Object</span>
                    </div>
                </Link>
                <Link to="/webdevelopment/javascript/custom-events" className="group flex items-center gap-4 p-5 rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] w-full sm:w-auto text-right transition-all">
                    <div>
                        <span className="text-xs text-gray-500 font-bold uppercase tracking-widest block group-hover:text-yellow-500/80 transition-colors">Up Next</span>
                        <span className="text-gray-200 font-bold group-hover:text-white transition-colors">13.5 Custom Events</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-yellow-400 flex items-center justify-center border border-gray-800 group-hover:border-yellow-500/30 group-hover:bg-yellow-500/10 transition-all"><ArrowRight className="w-6 h-6" /></div>
                </Link>
            </div>
        </article>
    );
};

export default EventDelegation;