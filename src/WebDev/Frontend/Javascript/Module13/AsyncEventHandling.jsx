// File: src/WebDev/Frontend/Javascript/Module13/AsyncEventHandling.jsx

import React from 'react';
import { ArrowRight, Compass, Clock, AlertOctagon, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";
import DebounceThrottleSimulator from "../../../../simulators/web/javascript/DebounceThrottleSimulator";

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

const AsyncEventHandling = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-8 leading-loose tracking-wide font-sans pb-20 w-full px-4 sm:px-0">
            <SEO title="Async Event Handling | JavaScript Course" description="Master Asynchronous Event Handling, Error Catching, Debouncing, and Throttling in JavaScript." />

            <header className="py-16 md:py-24 text-center border-b border-white/10 mb-16 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px]">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none"></div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-8 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                    <Compass className="w-5 h-5 text-yellow-400" />
                    <span className="text-yellow-400 text-sm font-black uppercase tracking-[0.2em]">Module 13.6: Event Handling</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter drop-shadow-2xl">
                    Async Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Handling</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
                    Learn to manage long-running tasks, handle unhandled rejections, and tame high-frequency events with Debouncing and Throttling.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none w-full border-box">
                <Section title="The Synchronous Constraint" icon={Clock}>
                    <p>
                        Event handlers run synchronously inside the browser's event loop. Long-running synchronous code in a handler will freeze the entire UI.
                    </p>
                    
                    <CodeBlock language="javascript" code={`// NEVER do this — freezes the page
button.addEventListener('click', () => {
  const result = processMillionRows(data); // UI completely blocks for seconds
  displayResult(result);
});

// DO this — offload or break up the work
button.addEventListener('click', async () => {
  button.disabled = true;
  button.textContent = 'Processing…';

  try {
    const result = await processInWorker(data); // Web Worker handles the CPU load
    displayResult(result);
  } finally {
    button.disabled = false;
    button.textContent = 'Process';
  }
});`} />
                </Section>

                <Section title="Async Handlers and Silent Errors" icon={AlertOctagon}>
                    <p>
                        Async event handlers look clean but have a dangerous failure mode: <strong>unhandled promise rejections do not propagate through <code>addEventListener</code></strong>. If an <code>await</code> statement throws an error inside an event handler, the browser swallows it silently.
                    </p>

                    <CodeBlock language="javascript" code={`// ❌ PROBLEMATIC: Rejections are swallowed silently
button.addEventListener('click', async () => {
  const data = await fetchData(); // If this throws, execution stops, no error shown
  render(data);
});

// ✅ CORRECT: Wrap with explicit error handling
button.addEventListener('click', async () => {
  try {
    const data = await fetchData();
    render(data);
  } catch (err) {
    showErrorUI(err.message);
    console.error('fetchData failed:', err);
  }
});`} />
                </Section>

                <Section title="Debouncing and Throttling" icon={Filter}>
                    <p>
                        High-frequency events like <code>resize</code>, <code>scroll</code>, <code>mousemove</code>, and <code>input</code> can fire hundreds of times per second. Debouncing and throttling are two strategies for limiting how often your handler actually does work.
                    </p>

                    <div className="my-10">
                        <DebounceThrottleSimulator />
                    </div>

                    <h4 className="text-xl font-bold text-white mt-8 mb-4">Debouncing</h4>
                    <p>Wait until activity has <em>stopped</em> for a given delay before firing. Perfect for Search inputs or window resizing.</p>
                    <CodeBlock language="javascript" code={`function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Search only fires 300ms AFTER the user STOPS typing
searchInput.addEventListener('input', debounce((e) => {
  fetchResults(e.target.value);
}, 300));`} />

                    <h4 className="text-xl font-bold text-white mt-12 mb-4">Throttling</h4>
                    <p>Fire at most <em>once per interval</em>, regardless of how many events arrive. Perfect for scroll tracking or dragging.</p>
                    <CodeBlock language="javascript" code={`function throttle(fn, interval) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= interval) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

// Scroll position updates at most 10 times per second (every 100ms)
window.addEventListener('scroll', throttle(() => {
  updateProgressBar();
}, 100), { passive: true });`} />
                </Section>
            </div>

            {/* Pagination Footer */}
            <div className="mt-24 pt-12 border-t border-gray-800/60 w-full flex flex-col sm:flex-row justify-between items-center gap-4">
                <Link to="/webdevelopment/javascript/custom-events" className="group flex items-center gap-4 p-5 rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 w-full sm:w-auto transition-all">
                    <div className="w-12 h-12 rounded-xl bg-gray-800/40 flex items-center justify-center border border-gray-800 group-hover:text-white text-gray-400 transition-colors"><ArrowRight className="w-6 h-6 rotate-180" /></div>
                    <div>
                        <span className="text-xs text-gray-500 font-bold uppercase tracking-widest block">Previous</span>
                        <span className="text-gray-300 font-bold">13.5 Custom Events</span>
                    </div>
                </Link>
                <Link to="/webdevelopment/javascript/focus-management" className="group flex items-center gap-4 p-5 rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] w-full sm:w-auto text-right transition-all">
                    <div>
                        <span className="text-xs text-gray-500 font-bold uppercase tracking-widest block group-hover:text-yellow-500/80 transition-colors">Up Next</span>
                        <span className="text-gray-200 font-bold group-hover:text-white transition-colors">13.7 Focus Management</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-yellow-400 flex items-center justify-center border border-gray-800 group-hover:border-yellow-500/30 group-hover:bg-yellow-500/10 transition-all"><ArrowRight className="w-6 h-6" /></div>
                </Link>
            </div>
        </article>
    );
};

export default AsyncEventHandling;