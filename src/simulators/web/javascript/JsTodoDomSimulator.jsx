import React, { useState, useRef } from 'react';
import { Layers, List, Code, Plus, Trash2 } from 'lucide-react';

export default function JsTodoDomSimulator() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Master querySelector' }
    ]);
    const [inputText, setInputText] = useState('');
    const [actionLogs, setActionLogs] = useState([
        "document.addEventListener('DOMContentLoaded')"
    ]);
    const nextId = useRef(2);

    const logAction = (msg) => {
        setActionLogs(prev => {
            const newLogs = [...prev, msg];
            if (newLogs.length > 6) return newLogs.slice(newLogs.length - 6);
            return newLogs;
        });
    };

    const handleAdd = (e) => {
        e.preventDefault();
        const text = inputText.trim();
        if (!text) return;

        // Simulated DOM actions logging
        logAction(`const text = "${text}";`);
        logAction(`const li = document.createElement('li');`);
        logAction(`li.dataset.id = ${nextId.current};`);
        logAction(`const span = document.createElement('span');\nspan.textContent = text;`);
        logAction(`list.append(li);`);

        setTodos([...todos, { id: nextId.current++, text }]);
        setInputText('');
    };

    const handleRemove = (id) => {
        logAction(`// Delegated listener on <ul id="todo-list"> fired`);
        logAction(`const btn = event.target;`);
        logAction(`if (btn.dataset.action === 'remove') { ... }`);
        logAction(`const li = btn.closest('.todo-item');\nli.remove();`);

        setTodos(todos.filter(t => t.id !== id));
    };

    return (
        <div className="bg-[#0f172a] rounded-2xl border border-gray-800 p-6 my-8 shadow-2xl w-full">
            <div className="flex flex-col md:flex-row gap-6">
                
                {/* Visual UI (The "Browser") */}
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <List className="w-4 h-4" /> Live Interface
                    </div>
                    
                    <div className="bg-gray-900 border border-gray-700 rounded-xl p-5 relative overflow-hidden min-h-[300px]">
                        {/* Fake browser top */}
                        <div className="absolute top-0 left-0 w-full bg-black/40 border-b border-gray-800 px-3 py-2 flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                        </div>

                        <form onSubmit={handleAdd} className="mt-10 flex gap-2">
                            <input 
                                type="text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                placeholder="Add a new task..."
                                className="flex-1 bg-black/50 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white focus:border-blue-500 outline-none"
                            />
                            <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-lg transition-colors">
                                <Plus className="w-5 h-5" />
                            </button>
                        </form>

                        <ul className="mt-6 flex flex-col gap-2">
                            {todos.map(todo => (
                                <li key={todo.id} className="flex justify-between items-center bg-black/40 border border-gray-700 p-3 rounded-lg group animate-fadeIn">
                                    <span className="text-gray-300 text-sm">{todo.text}</span>
                                    <button 
                                        type="button"
                                        onClick={() => handleRemove(todo.id)}
                                        className="text-gray-500 hover:text-rose-400 transition-colors"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </li>
                            ))}
                            {todos.length === 0 && <div className="text-gray-500 text-sm text-center italic mt-4">No tasks remaining.</div>}
                        </ul>
                    </div>
                </div>

                {/* Live DOM Inspector / Code Logs */}
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                        <Layers className="w-4 h-4" /> Under The Hood
                    </div>

                    {/* Virtual DOM Tree view */}
                    <div className="bg-black/60 border border-gray-800 rounded-xl p-4 font-mono text-[11px] sm:text-xs overflow-x-auto">
                        <div className="text-blue-300">&lt;ul <span className="text-emerald-300">id</span>=<span className="text-orange-300">"todo-list"</span>&gt;</div>
                        <div className="pl-4 border-l border-gray-800/50 ml-2">
                            {todos.map(todo => (
                                <div key={todo.id} className="my-1 animate-fadeIn">
                                    <div className="text-blue-300">&lt;li <span className="text-emerald-300">class</span>=<span className="text-orange-300">"todo-item"</span> <span className="text-emerald-300">data-id</span>=<span className="text-orange-300">"{todo.id}"</span>&gt;</div>
                                    <div className="pl-4">
                                        <div className="text-blue-300">&lt;span&gt;<span className="text-gray-300">{todo.text}</span>&lt;/span&gt;</div>
                                        <div className="text-blue-300">&lt;button <span className="text-emerald-300">data-action</span>=<span className="text-orange-300">"remove"</span>&gt;<span className="text-gray-300">Remove</span>&lt;/button&gt;</div>
                                    </div>
                                    <div className="text-blue-300">&lt;/li&gt;</div>
                                </div>
                            ))}
                        </div>
                        <div className="text-blue-300">&lt;/ul&gt;</div>
                    </div>

                    {/* JS Execution Log */}
                    <div className="bg-[#1e1e1e] border border-gray-800 rounded-xl overflow-hidden flex-1 min-h-[150px] flex flex-col">
                        <div className="bg-[#2d2d2d] px-3 py-1.5 text-[10px] text-gray-400 uppercase font-bold flex gap-2 items-center">
                            <Code className="w-3 h-3" /> JS Engine Log
                        </div>
                        <div className="p-4 font-mono text-xs text-yellow-300/80 flex flex-col gap-1 overflow-y-auto">
                            {actionLogs.map((log, i) => (
                                <div key={i} className="whitespace-pre-wrap">{'> '} {log}</div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}