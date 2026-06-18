import React from 'react';
import { Layers, Key, Lightbulb, AlertTriangle, ArrowRight, Compass, Code, LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";
import JsTodoDomSimulator from '../../../../simulators/web/javascript/JsTodoDomSimulator';

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
    const config = {
        key: { icon: Key, color: "text-amber-400", border: "border-amber-500/40", bg: "bg-gradient-to-br from-amber-900/40 to-yellow-900/10", heading: "text-amber-500", shadow: "shadow-amber-500/10" },
        note: { icon: Layers, color: "text-sky-400", border: "border-sky-500/40", bg: "bg-gradient-to-br from-sky-900/40 to-blue-900/10", heading: "text-sky-400", shadow: "shadow-sky-500/10" },
        tip: { icon: Lightbulb, color: "text-emerald-400", border: "border-emerald-500/40", bg: "bg-gradient-to-br from-emerald-900/40 to-green-900/10", heading: "text-emerald-400", shadow: "shadow-emerald-500/10" },
        warn: { icon: AlertTriangle, color: "text-rose-400", border: "border-rose-500/40", bg: "bg-gradient-to-br from-rose-900/40 to-red-900/10", heading: "text-rose-400", shadow: "shadow-rose-500/10" },
    }[type] || { icon: Layers, color: "text-sky-400", border: "border-sky-500/40", bg: "bg-gradient-to-br from-sky-900/40 to-blue-900/10", heading: "text-sky-400", shadow: "shadow-sky-500/10" };

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

const DomWorkingExample = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="DOM Manipulation Example & Summary | JavaScript"
                description="A complete working example of JavaScript DOM manipulation putting together selection, creation, data attributes, event delegation, and secure text handling."
                keywords="DOM manipulation example, javascript todo list, event delegation example, textContent security, DOM summary"
                url="/webdevelopment/javascript/dom-working-example"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-blue-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                
                <div className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                        <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                        <span className="text-yellow-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 12.8: DOM Manipulation</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        Putting It <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">Together</span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light px-4">
                        A minimal to-do list demonstrates most of what this module covers in one place: creating elements, safe text handling, data attributes, and event delegation.
                    </p>
                </div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">

                <Section title="The Complete Code" icon={Code} id="complete-code">
                    <p className="text-gray-300 leading-relaxed">
                        Study how this script builds an interactive UI entirely from logic, without relying on HTML template strings.
                    </p>

                    <CodeBlock 
                        code={`const list  = document.querySelector('#todo-list');
const input = document.querySelector('#todo-input');
const form  = document.querySelector('#todo-form');

let nextId = 1;

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Stop page reload

  const text = input.value.trim();
  if (!text) return;

  // 1. Build offline
  const li = document.createElement('li');
  li.dataset.id = nextId++;
  li.className = 'todo-item';

  const label = document.createElement('span');
  label.textContent = text; // SAFE: avoids XSS if user types HTML

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.dataset.action = 'remove';

  // 2. Assemble
  li.append(label, removeBtn);
  list.append(li);

  // 3. Reset form
  input.value = '';
});

// 4. Delegated listener handles "remove" for present OR future items
list.addEventListener('click', (event) => {
  if (event.target.dataset.action !== 'remove') return;
  
  event.target.closest('.todo-item').remove();
});`} 
                        language="javascript" 
                    />

                    <HighlightBox title="What this deliberately avoids:" type="tip">
                        It never uses <code>innerHTML</code> on user-supplied text. It never attaches a fresh listener per to-do item. And it never needs to know in advance how many items will exist.
                    </HighlightBox>
                </Section>

                <Section title="Live Interaction Simulator" icon={LayoutDashboard} id="live-simulator">
                    <p className="text-gray-300 leading-relaxed">
                        Add and remove items below. Watch how the Virtual DOM updates and see the exact JS execution logs mirroring the code above.
                    </p>
                    <JsTodoDomSimulator />
                </Section>

                <div className="my-16 sm:my-24 py-12 sm:py-16 border-t border-b border-gray-800/60 bg-black/20 rounded-3xl px-6 sm:px-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">Module Summary</h3>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-4xl mx-auto text-left">
                        The DOM is a live tree the browser builds from your HTML and keeps in sync with what's on screen. <code>querySelector</code> / <code>querySelectorAll</code> are the modern, CSS-based way to find elements, returning a static snapshot rather than a self-updating collection — a deliberate design choice that avoids loop bugs. Elements are best built fully before insertion and batched through a <code>DocumentFragment</code> when there are many of them, since every visible DOM change risks a layout recalculation. <code>textContent</code> and <code>innerHTML</code> look similar but carry very different security implications. Data attributes give you a clean place to attach custom values to markup. And events — especially delegated through <code>.closest()</code> on a stable parent — are how all of this responds to an actual human using the page.
                    </p>
                </div>

                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript/common-dom-pitfalls" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">12.7 Common Pitfalls</span>
                            </div>
                        </Link>

                        <Link to="/tutorial" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-900/40 to-cyan-900/20 border border-blue-500/30 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-blue-400 font-bold uppercase tracking-widest mb-1 block">Course Completed</span>
                                <span className="text-white font-bold text-xs sm:text-sm">Return to Hub</span>
                            </div>
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center border border-blue-500/30">
                                <LayoutDashboard className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </article>
    );
};

export default DomWorkingExample;