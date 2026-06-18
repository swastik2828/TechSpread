// File: src/WebDev/Frontend/Javascript/Module13/MemoryLeaks.jsx

import React from 'react';
import { ArrowRight, Compass, ShieldAlert, MonitorOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";
import MemoryLeakSimulator from "../../../../simulators/web/javascript/MemoryLeakSimulator";

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

const MemoryLeaks = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-8 leading-loose tracking-wide font-sans pb-20 w-full px-4 sm:px-0">
            <SEO title="Memory Leaks in JS Events | JavaScript Course" description="Understand how Javascript event listeners cause memory leaks and how to prevent them." />

            <header className="py-16 md:py-24 text-center border-b border-white/10 mb-16 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px]">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none"></div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-8 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                    <Compass className="w-5 h-5 text-yellow-400" />
                    <span className="text-yellow-400 text-sm font-black uppercase tracking-[0.2em]">Module 13.9: Event Handling</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter drop-shadow-2xl">
                    Memory <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Leaks</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
                    Attached listeners hold references to handler functions, and those functions often close over other objects. This is the most common source of memory leaks in modern web apps.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none w-full border-box">
                <Section title="The Common Leak Pattern" icon={ShieldAlert}>
                    <p>
                        If a listener is never removed, everything it references stays in memory <em>even if the element is removed from the DOM</em>.
                    </p>

                    <div className="my-10">
                        <MemoryLeakSimulator />
                    </div>

                    <CodeBlock language="javascript" code={`class DataPanel {
  constructor(element) {
    this.element = element;
    // Massive array taking up memory
    this.data = new Array(10_000).fill({ value: 0 });

    // ❌ LEAK: This handler closes over \`this\`, keeping the entire DataPanel alive 
    // globally on the window object.
    window.addEventListener('resize', () => this.recalculate());
  }
}

const panel = new DataPanel(document.querySelector('.panel'));

// Later...
panel.element.remove(); 
// The DOM element is gone, but the window STILL holds a reference to the resize 
// handler, which holds \`this\`, keeping the 10,000 item array in memory forever.`} />
                </Section>

                <Section title="Prevention Strategies" icon={MonitorOff}>
                    <p>
                        Relying on manual <code>removeEventListener</code> is brittle because the function signature must match exactly. The modern standard is using <code>AbortController</code> or the <code>once</code> parameter.
                    </p>

                    <h4 className="text-xl font-bold text-white mt-8 mb-4">Strategy 1: AbortController</h4>
                    <p>Ideal for components that need to remove multiple listeners at once during their destruction phase.</p>
                    <CodeBlock language="javascript" code={`class DataPanel {
  #controller = new AbortController();

  constructor(element) {
    this.element = element;
    this.data = new Array(10_000).fill({ value: 0 });

    window.addEventListener('resize', () => this.recalculate(), {
      signal: this.#controller.signal, // Tie listener to the controller
    });
  }

  destroy() {
    this.#controller.abort(); // 🔥 Instantly removes the window listener
    this.element.remove();    // Now DataPanel can be Garbage Collected
  }
}`} />

                    <h4 className="text-xl font-bold text-white mt-12 mb-4">Strategy 2: once: true</h4>
                    <p>For listeners that only need to run a single time, let the browser handle the cleanup.</p>
                    <CodeBlock language="javascript" code={`// ❌ DO NOT DO THIS:
function onFirstInteraction() {
  initAnalytics();
  document.removeEventListener('click', onFirstInteraction);
}
document.addEventListener('click', onFirstInteraction);

// ✅ DO THIS:
document.addEventListener('click', () => {
  initAnalytics();
}, { once: true }); // Browser removes it automatically after it runs`} />
                </Section>
            </div>

            {/* Pagination Footer */}
            <div className="mt-24 pt-12 border-t border-gray-800/60 w-full flex flex-col sm:flex-row justify-between items-center gap-4">
                <Link to="/webdevelopment/javascript/organising-event-code" className="group flex items-center gap-4 p-5 rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 w-full sm:w-auto transition-all">
                    <div className="w-12 h-12 rounded-xl bg-gray-800/40 flex items-center justify-center border border-gray-800 group-hover:text-white text-gray-400 transition-colors"><ArrowRight className="w-6 h-6 rotate-180" /></div>
                    <div>
                        <span className="text-xs text-gray-500 font-bold uppercase tracking-widest block">Previous</span>
                        <span className="text-gray-300 font-bold">13.8 Code Patterns</span>
                    </div>
                </Link>
                <Link to="/webdevelopment/javascript/quick-reference-events" className="group flex items-center gap-4 p-5 rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] w-full sm:w-auto text-right transition-all">
                    <div>
                        <span className="text-xs text-gray-500 font-bold uppercase tracking-widest block group-hover:text-yellow-500/80 transition-colors">Up Next</span>
                        <span className="text-gray-200 font-bold group-hover:text-white transition-colors">13.10 Quick Reference</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-yellow-400 flex items-center justify-center border border-gray-800 group-hover:border-yellow-500/30 group-hover:bg-yellow-500/10 transition-all"><ArrowRight className="w-6 h-6" /></div>
                </Link>
            </div>
        </article>
    );
};

export default MemoryLeaks;