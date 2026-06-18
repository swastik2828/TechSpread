import React, { useState } from 'react';
import { AlertCircle, CheckCircle, Bug, Terminal } from 'lucide-react';

export default function JsDomPitfallsSimulator() {
    const [activeTab, setActiveTab] = useState('nullSelector');
    
    const pitfalls = {
        nullSelector: {
            title: "Unchecked querySelector",
            badCode: `const el = document.querySelector('.maybe-missing');\nel.textContent = 'Hi'; // CRASH!`,
            goodCode: `const el = document.querySelector('.maybe-missing');\nif (el) {\n  el.textContent = 'Hi';\n}`,
            error: "TypeError: Cannot set properties of null (setting 'textContent')",
            explanation: "querySelector returns null if no element matches. Calling methods on null throws an immediate runtime error that breaks your entire script."
        },
        liveCollection: {
            title: "Mutating Live Collections",
            badCode: `const items = document.getElementsByClassName('item');\nfor (let i = 0; i < items.length; i++) {\n  items[i].className = 'done'; // Changes length!\n}`,
            goodCode: `const items = document.querySelectorAll('.item');\nitems.forEach(item => {\n  item.className = 'done';\n});`,
            error: "Logic Bug: Skips every other element.",
            explanation: "getElementsByClassName is LIVE. Changing the class removes the element from the collection instantly. The length shrinks, your loop index shifts, and elements get skipped."
        },
        innerHTMLState: {
            title: "innerHTML State Loss",
            badCode: `const container = document.getElementById('list');\ncontainer.innerHTML += '<li>New Item</li>';`,
            goodCode: `const li = document.createElement('li');\nli.textContent = 'New Item';\ncontainer.append(li);`,
            error: "UX Bug: All existing event listeners & input values destroyed.",
            explanation: "Using innerHTML += forces the browser to destroy EVERY child node and parse the entire string from scratch. Any state (typed form text, attached event listeners) is wiped out."
        },
        listenerLeak: {
            title: "Listener Stacking",
            badCode: `function update() {\n  btn.addEventListener('click', () => {\n    console.log('Fired!');\n  });\n}`,
            goodCode: `// Attach ONCE outside the update loop\nbtn.addEventListener('click', handleClick);\n\nfunction update() { /* ... */ }`,
            error: "Memory Bug: Firing 50 times per click.",
            explanation: "Attaching an anonymous listener inside a frequently called function (like a resize or scroll handler) stacks them endlessly. They never replace each other."
        }
    };

    const active = pitfalls[activeTab];

    return (
        <div className="bg-[#0f172a] rounded-2xl border border-gray-800 p-6 my-8 shadow-2xl w-full">
            <div className="flex flex-col lg:flex-row gap-6">
                
                {/* Tabs */}
                <div className="w-full lg:w-1/3 flex flex-col gap-2 border-r border-gray-800 pr-4">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Common Anti-Patterns</div>
                    {Object.entries(pitfalls).map(([key, data]) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            className={`text-left p-3 rounded-lg border transition-all ${activeTab === key ? 'bg-rose-900/20 border-rose-500/50 text-rose-300' : 'bg-transparent border-transparent text-gray-400 hover:bg-gray-800 hover:text-gray-200'}`}
                        >
                            <div className="font-semibold text-sm flex items-center gap-2">
                                <Bug className={`w-4 h-4 ${activeTab === key ? 'text-rose-400' : 'text-gray-500'}`} />
                                {data.title}
                            </div>
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="w-full lg:w-2/3 flex flex-col gap-4">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Bad Code */}
                        <div className="bg-gray-900 border border-rose-900/50 rounded-xl overflow-hidden relative">
                            <div className="bg-rose-950/40 text-rose-300 text-xs px-3 py-2 border-b border-rose-900/30 flex items-center gap-2 font-bold uppercase tracking-wider">
                                <AlertCircle className="w-3 h-3" /> The Trap
                            </div>
                            <pre className="p-4 text-sm font-mono text-gray-300 whitespace-pre-wrap">
                                {active.badCode}
                            </pre>
                        </div>

                        {/* Good Code */}
                        <div className="bg-gray-900 border border-emerald-900/50 rounded-xl overflow-hidden relative">
                            <div className="bg-emerald-950/40 text-emerald-300 text-xs px-3 py-2 border-b border-emerald-900/30 flex items-center gap-2 font-bold uppercase tracking-wider">
                                <CheckCircle className="w-3 h-3" /> The Fix
                            </div>
                            <pre className="p-4 text-sm font-mono text-gray-300 whitespace-pre-wrap">
                                {active.goodCode}
                            </pre>
                        </div>
                    </div>

                    {/* Console Execution */}
                    <div className="bg-black border border-gray-800 rounded-xl mt-2 overflow-hidden">
                        <div className="bg-gray-900 text-gray-400 text-[10px] px-3 py-1.5 flex items-center gap-2 font-mono border-b border-gray-800">
                            <Terminal className="w-3 h-3" /> Console Output
                        </div>
                        <div className="p-4 text-sm font-mono text-rose-400">
                            <span className="font-bold">Uncaught Error:</span> {active.error}
                        </div>
                    </div>

                    <div className="bg-blue-900/20 border border-blue-900/50 text-blue-200 text-sm p-4 rounded-xl leading-relaxed">
                        {active.explanation}
                    </div>

                </div>
            </div>
        </div>
    );
}