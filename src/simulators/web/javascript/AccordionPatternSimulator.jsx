// File: src/simulators/web/javascript/AccordionPatternSimulator.jsx

import React, { useState, useEffect, useRef } from 'react';
import { Layers, Keyboard, MousePointerClick, ChevronDown } from 'lucide-react';

const AccordionPatternSimulator = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeLog, setActiveLog] = useState("Component mounted. Listeners attached via AbortController.");
  const containerRef = useRef(null);
  
  const items = [
    { id: 0, title: "Single Responsibility Principle", content: "Each listener should do exactly one thing. If a handler branches on multiple conditions, it is doing too much." },
    { id: 1, title: "Component Lifecycle", content: "Attach listeners when the component mounts, and clean them up when it unmounts. Treat listeners as part of the component's state." },
    { id: 2, title: "Keyboard Navigation", content: "A well-built UI component must handle keyboard events (Arrow Keys, Home, End) alongside mouse clicks." }
  ];

  // Simulating the Component-Based Listener Management
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const controller = new AbortController();
    const { signal } = controller;

    const handleKeyDown = (e) => {
      // Only process if focus is inside our simulated accordion headers
      if (!e.target.dataset.simHeader) return;
      
      let nextIndex = openIndex;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        nextIndex = (openIndex + 1) % items.length;
        setActiveLog(`Keyboard: ArrowDown detected. Moving focus to item ${nextIndex + 1}`);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        nextIndex = (openIndex - 1 + items.length) % items.length;
        setActiveLog(`Keyboard: ArrowUp detected. Moving focus to item ${nextIndex + 1}`);
      } else if (e.key === 'Home') {
        e.preventDefault();
        nextIndex = 0;
        setActiveLog(`Keyboard: Home detected. Moving focus to first item`);
      } else if (e.key === 'End') {
        e.preventDefault();
        nextIndex = items.length - 1;
        setActiveLog(`Keyboard: End detected. Moving focus to last item`);
      }

      if (nextIndex !== openIndex) {
        setOpenIndex(nextIndex);
        // Physically focus the new header
        const headers = container.querySelectorAll('[data-sim-header]');
        headers[nextIndex]?.focus();
      }
    };

    container.addEventListener('keydown', handleKeyDown, { signal });

    return () => {
      controller.abort();
    };
  }, [openIndex, items.length]);

  const handleHeaderClick = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
    setActiveLog(`Mouse: Clicked header ${idx + 1}. Toggling state.`);
  };

  return (
    <div className="bg-[#0f172a] rounded-2xl border border-gray-800 overflow-hidden shadow-2xl w-full">
      <div className="bg-gray-900/80 p-4 border-b border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Layers className="text-yellow-400 w-5 h-5 shrink-0" />
          <h3 className="font-bold text-gray-200 text-sm sm:text-base">Component-Based Listener Pattern</h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-gray-400 bg-black/40 px-3 py-1.5 rounded-lg border border-gray-700 w-full sm:w-auto overflow-hidden">
          <span className="shrink-0">Event Log:</span>
          <span className="text-yellow-400 truncate">{activeLog}</span>
        </div>
      </div>

      <div className="p-4 sm:p-8 grid md:grid-cols-2 gap-8 items-start">
        <div 
          ref={containerRef}
          className="bg-black/20 p-4 rounded-xl border border-gray-800"
        >
          <div className="flex items-center gap-4 mb-4 text-xs text-gray-500 justify-center">
            <span className="flex items-center gap-1"><MousePointerClick className="w-3 h-3"/> Click</span>
            <span className="flex items-center gap-1"><Keyboard className="w-3 h-3"/> Tab & Arrows</span>
          </div>
          
          <div className="space-y-2">
            {items.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={item.id} className="border border-gray-700 rounded-lg overflow-hidden bg-gray-800/50">
                  <button
                    data-sim-header="true"
                    aria-expanded={isOpen}
                    onClick={() => handleHeaderClick(idx)}
                    className="w-full text-left px-4 py-3 font-semibold text-gray-200 flex justify-between items-center hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors"
                  >
                    <span>{item.title}</span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div 
                    className={`px-4 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 py-3 border-t border-gray-700/50 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                  >
                    <p className="text-sm text-gray-400 leading-relaxed">{item.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl border border-gray-800 p-5 font-mono text-xs sm:text-sm shadow-inner overflow-x-auto">
          <div className="text-gray-500 mb-2 uppercase tracking-widest text-[10px]">Active Listener Setup</div>
          <pre className="text-sky-400">
{`class Accordion {
  mount() {
    this.controller = new AbortController();
    
    // Delegation: One listener handles all clicks
    this.root.addEventListener('click', 
      this.onClick, 
      { signal: this.controller.signal }
    );

    // Delegation: One listener handles all keys
    this.root.addEventListener('keydown', 
      this.onKeyDown, 
      { signal: this.controller.signal }
    );
  }

  unmount() {
    // Cleans up EVERYTHING instantly
    this.controller.abort(); 
  }
}`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default AccordionPatternSimulator;