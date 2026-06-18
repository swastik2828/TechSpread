// File: src/WebDev/Frontend/Javascript/Module13/TheEventObject.jsx

import React from 'react';
import { ArrowRight, Compass, Key, MousePointer2, Keyboard, AppWindow } from 'lucide-react';
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

const HighlightBox = ({ title, children, type = "info" }) => {
    const config = {
        key: { icon: Key, color: "text-yellow-400", border: "border-yellow-500/40", bg: "bg-gradient-to-br from-yellow-900/40 to-yellow-900/10", heading: "text-yellow-500", shadow: "shadow-yellow-500/10" }
    }[type] || { icon: Key, color: "text-yellow-400", border: "border-yellow-500/40", bg: "bg-gradient-to-br from-yellow-900/40 to-yellow-900/10", heading: "text-yellow-500", shadow: "shadow-yellow-500/10" };

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

const TheEventObject = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-8 leading-loose tracking-wide font-sans pb-20 w-full px-4 sm:px-0">
            <SEO title="The Event Object | JavaScript Course" description="Deep dive into the JavaScript Event Object, Mouse Events, Keyboard Events, and Pointer Events." />

            <header className="py-16 md:py-24 text-center border-b border-white/10 mb-16 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px]">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none"></div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-8 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                    <Compass className="w-5 h-5 text-yellow-400" />
                    <span className="text-yellow-400 text-sm font-black uppercase tracking-[0.2em]">Module 13.3: Event Handling</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter drop-shadow-2xl">
                    The <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Event Object</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
                    Every handler receives an event object. The base Event class provides universal properties, while subclasses add context-specific details.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none w-full border-box">
                <Section title="Universal Properties" icon={AppWindow}>
                    <p>
                        Every event shares these core properties, regardless of whether it's a click, a keystroke, or a network response.
                    </p>
                    <CodeBlock language="javascript" code={`element.addEventListener('click', (e) => {
  e.type;           // 'click'
  e.target;         // The element that was actually clicked
  e.currentTarget;  // The element this listener is attached to
  e.eventPhase;     // 1 = capture, 2 = target, 3 = bubble
  e.bubbles;        // Whether this event type bubbles
  e.cancelable;     // Whether preventDefault() has any effect
  e.timeStamp;      // High-resolution timestamp
  e.isTrusted;      // false if the event was created via JS dispatchEvent()
});`} />

                    <HighlightBox title="target vs currentTarget" type="key">
                        This distinction is crucial. If you click a <code>&lt;span&gt;</code> inside a <code>&lt;button&gt;</code>, and the listener is on the <code>&lt;button&gt;</code>, then <code>e.target</code> is the <code>&lt;span&gt;</code> (what actually received the physical click) and <code>e.currentTarget</code> is the <code>&lt;button&gt;</code> (the element the listener is attached to).
                    </HighlightBox>
                </Section>

                <Section title="Mouse Events" icon={MousePointer2}>
                    <p>Subclasses like <code>MouseEvent</code> inject coordinate data and button states into the event object.</p>
                    <CodeBlock language="javascript" code={`element.addEventListener('click', (e) => {
  // Position relative to the viewport (visible screen)
  e.clientX; e.clientY;

  // Position relative to the entire document (includes scrolled areas)
  e.pageX; e.pageY;

  // Position relative to the element the listener is on
  e.offsetX; e.offsetY;

  // Which physical button: 0 = left, 1 = middle, 2 = right
  e.button;

  // Modifier keys held down during the click
  e.shiftKey; e.ctrlKey; e.altKey; e.metaKey;
});`} />
                </Section>

                <Section title="Keyboard Events" icon={Keyboard}>
                    <p>Keyboard events supply information about which key was pressed, independent of capitalization or layout.</p>
                    <CodeBlock language="javascript" code={`document.addEventListener('keydown', (e) => {
  e.key;      // Human-readable key label: 'Enter', 'ArrowUp', 'a', 'A', ' '
  e.code;     // Physical key regardless of layout: 'KeyA', 'Space', 'Enter'
  e.repeat;   // true if the key is being held down and repeating

  e.shiftKey; e.ctrlKey; e.altKey; e.metaKey; // Modifier keys

  // Prefer e.key for semantic meaning
  if (e.key === 'Escape') closeModal();

  // Prefer e.code for position-based shortcuts (WASD gaming, etc.)
  if (e.code === 'KeyW') moveForward();
});`} />
                    <p className="text-gray-400 italic text-sm mt-4">
                        Note: Avoid checking <code>e.keyCode</code> or <code>e.which</code>, as both are deprecated in modern web standards.
                    </p>
                </Section>
            </div>

            {/* Pagination Footer */}
            <div className="mt-24 pt-12 border-t border-gray-800/60 w-full flex flex-col sm:flex-row justify-between items-center gap-4">
                <Link to="/webdevelopment/javascript/event-propagation" className="group flex items-center gap-4 p-5 rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 w-full sm:w-auto transition-all">
                    <div className="w-12 h-12 rounded-xl bg-gray-800/40 flex items-center justify-center border border-gray-800 group-hover:text-white text-gray-400 transition-colors"><ArrowRight className="w-6 h-6 rotate-180" /></div>
                    <div>
                        <span className="text-xs text-gray-500 font-bold uppercase tracking-widest block">Previous</span>
                        <span className="text-gray-300 font-bold">13.2 Event Propagation</span>
                    </div>
                </Link>
                <Link to="/webdevelopment/javascript/event-delegation" className="group flex items-center gap-4 p-5 rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] w-full sm:w-auto text-right transition-all">
                    <div>
                        <span className="text-xs text-gray-500 font-bold uppercase tracking-widest block group-hover:text-yellow-500/80 transition-colors">Up Next</span>
                        <span className="text-gray-200 font-bold group-hover:text-white transition-colors">13.4 Event Delegation</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-yellow-400 flex items-center justify-center border border-gray-800 group-hover:border-yellow-500/30 group-hover:bg-yellow-500/10 transition-all"><ArrowRight className="w-6 h-6" /></div>
                </Link>
            </div>
        </article>
    );
};

export default TheEventObject;