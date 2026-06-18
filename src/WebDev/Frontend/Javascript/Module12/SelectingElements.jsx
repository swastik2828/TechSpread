import React from 'react';
import { Search, Code, AlertTriangle, ArrowRight, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";
import JsSelectorVisualizer from '../../../../simulators/web/javascript/JsSelectorVisualizer';

// Reuse the exact Section and HighlightBox components from WhatIsTheDom.jsx here
// (Omitting standard component boilerplate for brevity, copy them from above)

const Section = ({ title, icon: Icon, children, id }) => (
    <section id={id} className="relative mb-16 sm:mb-24 scroll-mt-28">
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full">
            <div className="p-2 sm:p-3 md:p-4 bg-gradient-to-br from-yellow-500/20 to-yellow-500/20 rounded-xl sm:rounded-2xl border border-yellow-500/40 text-yellow-400 shadow-[0_0_30px_rgba(59,130,246,0.15)] flex-shrink-0">
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
    // Note: ensure identical config mapping as 12.1 here 
    const config = {
        warn: { icon: AlertTriangle, color: "text-rose-400", border: "border-rose-500/40", bg: "bg-gradient-to-br from-rose-900/40 to-red-900/10", heading: "text-rose-400", shadow: "shadow-rose-500/10" },
    }[type] || { icon: Search, color: "text-sky-400", border: "border-sky-500/40", bg: "bg-gradient-to-br from-sky-900/40 to-blue-900/10", heading: "text-sky-400", shadow: "shadow-sky-500/10" };

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

const SelectingElements = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="Selecting Elements in the DOM | JavaScript"
                description="Learn the modern CSS-based way to select DOM elements using querySelector and querySelectorAll, and understand the crucial static vs live NodeList distinction."
                keywords="querySelector, querySelectorAll, getElementById, NodeList, HTMLCollection, JavaScript DOM selection"
                url="/webdevelopment/javascript/selecting-elements"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-blue-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                
                <div className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                        <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                        <span className="text-yellow-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 12.2: DOM Manipulation</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">Selecting</span> Elements
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light px-4">
                        Before you can change anything, you need to find it. Modern JavaScript gives you one consistent, CSS-based way to do this.
                    </p>
                </div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">

                <Section title="The Modern Standard" icon={Search} id="query-selector">
                    <p className="text-gray-300 leading-relaxed">
                        If you can write the selector in a CSS stylesheet, you can pass it to these methods. That shared syntax is deliberate: it means you don't learn a separate "DOM selection language."
                    </p>
                    <CodeBlock 
                        code={`// Returns the FIRST matching element, or null if none match
const firstCard = document.querySelector('.card');

// Returns a NodeList of ALL matching elements
const allCards = document.querySelectorAll('.card');`} 
                        language="javascript" 
                    />

                    <div className="mt-12">
                        <h3 className="text-2xl font-bold text-white mb-6">Interactive Selector Simulator</h3>
                        <p className="text-gray-400 mb-6 text-sm">Type CSS selectors to see how <code>querySelector</code> and <code>querySelectorAll</code> traverse the DOM tree.</p>
                        <JsSelectorVisualizer />
                    </div>
                </Section>

                <Section title="The Static vs. Live Distinction" icon={AlertTriangle} id="static-live">
                    <HighlightBox title="The NodeList Snapshot Bug" type="warn">
                        This detail looks academic right up until it causes a real bug. 
                        
                        <code>querySelectorAll</code> returns a <strong>static</strong> NodeList — a snapshot frozen at the moment you called it. Older methods like <code>getElementsByClassName</code> return a <strong>live</strong> HTMLCollection that auto-updates.
                    </HighlightBox>

                    <p className="text-gray-300 leading-relaxed mt-6">
                        This distinction has a sharp edge in loops. If you iterate over a <em>live</em> collection while inserting elements inside that loop, the collection's length shifts mid-iteration, causing infinite loops or skipped elements. This is why modern code defaults to <code>querySelectorAll</code>.
                    </p>

                    <CodeBlock 
                        code={`const liveItems   = document.getElementsByClassName('item'); // live
const staticItems = document.querySelectorAll('.item');       // static

document.body.insertAdjacentHTML('beforeend', '<div class="item">New</div>');

console.log(liveItems.length);   // increased by 1!
console.log(staticItems.length); // unchanged — it's a snapshot`} 
                        language="javascript" 
                    />
                </Section>

                <Section title="Walking the Tree" icon={Code} id="tree-walking">
                    <p className="text-gray-300 leading-relaxed">
                        Once you have a starting element, you can navigate relative to it using relationship properties.
                    </p>
                    <CodeBlock 
                        code={`element.parentElement;          // The direct parent node
element.children;               // Live HTMLCollection of child *elements*
element.nextElementSibling;     // Next sibling element, or null
element.previousElementSibling; // Previous sibling element, or null

// THE MVP OF DOM TRAVERSAL:
// Walks UP the tree to find the first ancestor matching the selector
button.closest('.card');`} 
                        language="javascript" 
                    />
                </Section>

                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript/what-is-the-dom" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">12.1 What the DOM is</span>
                            </div>
                        </Link>

                        <Link to="/webdevelopment/javascript/modifying-elements" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block group-hover:text-yellow-500/80 transition-colors">Up Next</span>
                                <span className="text-gray-200 font-bold text-xs sm:text-sm group-hover:text-white transition-colors">12.3 Modifying Elements</span>
                            </div>
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-yellow-400 group-hover:bg-yellow-500/10 flex items-center justify-center border border-gray-800 group-hover:border-yellow-500/30 transition-all duration-300">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </article>
    );
};

export default SelectingElements;