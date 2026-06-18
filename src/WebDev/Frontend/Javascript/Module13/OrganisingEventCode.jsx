// File: src/WebDev/Frontend/Javascript/Module13/OrganisingEventCode.jsx

import React from 'react';
import { ArrowRight, Compass, Code2, FolderTree } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";
import AccordionPatternSimulator from "../../../../simulators/web/javascript/AccordionPatternSimulator";

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

const OrganisingEventCode = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-8 leading-loose tracking-wide font-sans pb-20 w-full px-4 sm:px-0">
            <SEO title="Organising Event Code | JavaScript Course" description="Learn architectural patterns for organising JavaScript event listeners cleanly and efficiently." />

            <header className="py-16 md:py-24 text-center border-b border-white/10 mb-16 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px]">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none"></div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-8 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                    <Compass className="w-5 h-5 text-yellow-400" />
                    <span className="text-yellow-400 text-sm font-black uppercase tracking-[0.2em]">Module 13.8: Event Handling</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter drop-shadow-2xl">
                    Code <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Patterns</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
                    Writing an event listener is easy. Structuring them so they don't turn into an unmaintainable "spaghetti code" nightmare is hard.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none w-full border-box">
                <Section title="Single Responsibility per Handler" icon={Code2}>
                    <p>
                        Each listener should do exactly one thing. If a handler branches on multiple conditions and contains all the business logic, it's usually a sign that it is doing too much. The event handler should act as a simple "router", deferring the heavy lifting to other testable functions.
                    </p>

                    <CodeBlock language="javascript" code={`// ❌ DIFFICULT to maintain — one handler doing everything
button.addEventListener('click', (e) => {
  if (!isLoggedIn) { showLoginModal(); return; }
  if (cart.length === 0) { showEmptyCartMessage(); return; }
  if (isProcessing) return;
  
  isProcessing = true;
  fetch('/checkout', { method: 'POST', body: JSON.stringify(cart) })
    .then(r => r.json())
    .then(data => { window.location.href = data.redirectUrl; })
    .catch(err => showError(err));
});

// ✅ BETTER — handler orchestrates; individual functions are testable
async function handleCheckout(e) {
  if (!isLoggedIn) return showLoginModal();
  if (cart.length === 0) return showEmptyCartMessage();
  if (isProcessing) return;

  isProcessing = true;
  try {
    const { redirectUrl } = await submitCheckout(cart);
    window.location.href = redirectUrl;
  } catch (err) {
    showError(err);
  } finally {
    isProcessing = false;
  }
}

button.addEventListener('click', handleCheckout);`} />
                </Section>

                <Section title="Component-Based Listener Management" icon={FolderTree}>
                    <p>
                        For UI components (like dropdowns, modals, and accordions), treat listener attachment and detachment as part of the component lifecycle.
                    </p>

                    <div className="my-10">
                        <AccordionPatternSimulator />
                    </div>

                    <p>
                        By attaching listeners within a <code>mount()</code> method and passing an <code>AbortSignal</code>, you can guarantee that calling <code>unmount()</code> will instantly wipe out all event listeners associated with that component, preventing ghost interactions and memory leaks.
                    </p>
                    <CodeBlock language="javascript" code={`class Accordion {
  #root;
  #controller = null;

  constructor(root) {
    this.#root = root;
    this.mount();
  }

  mount() {
    this.#controller = new AbortController();

    this.#root.addEventListener('click', this.#onHeaderClick, {
      signal: this.#controller.signal,
    });

    this.#root.addEventListener('keydown', this.#onKeyDown, {
      signal: this.#controller.signal,
    });
  }

  unmount() {
    // Immediately detaches both 'click' and 'keydown'
    this.#controller?.abort();
    this.#controller = null;
  }
  
  #onHeaderClick = (e) => { /* logic */ };
  #onKeyDown = (e) => { /* logic */ };
}`} />
                </Section>
            </div>

            {/* Pagination Footer */}
            <div className="mt-24 pt-12 border-t border-gray-800/60 w-full flex flex-col sm:flex-row justify-between items-center gap-4">
                <Link to="/webdevelopment/javascript/focus-management" className="group flex items-center gap-4 p-5 rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 w-full sm:w-auto transition-all">
                    <div className="w-12 h-12 rounded-xl bg-gray-800/40 flex items-center justify-center border border-gray-800 group-hover:text-white text-gray-400 transition-colors"><ArrowRight className="w-6 h-6 rotate-180" /></div>
                    <div>
                        <span className="text-xs text-gray-500 font-bold uppercase tracking-widest block">Previous</span>
                        <span className="text-gray-300 font-bold">13.7 Focus Management</span>
                    </div>
                </Link>
                <Link to="/webdevelopment/javascript/memory-leaks" className="group flex items-center gap-4 p-5 rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] w-full sm:w-auto text-right transition-all">
                    <div>
                        <span className="text-xs text-gray-500 font-bold uppercase tracking-widest block group-hover:text-yellow-500/80 transition-colors">Up Next</span>
                        <span className="text-gray-200 font-bold group-hover:text-white transition-colors">13.9 Memory Leaks</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-yellow-400 flex items-center justify-center border border-gray-800 group-hover:border-yellow-500/30 group-hover:bg-yellow-500/10 transition-all"><ArrowRight className="w-6 h-6" /></div>
                </Link>
            </div>
        </article>
    );
};

export default OrganisingEventCode;