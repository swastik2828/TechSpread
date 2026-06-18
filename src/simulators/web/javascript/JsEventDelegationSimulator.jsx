import React, { useState, useEffect } from 'react';
import { Target, Layers, PlayCircle, RefreshCw } from 'lucide-react';

export default function JsEventDelegationSimulator() {
    const [logs, setLogs] = useState([]);
    const [activeNode, setActiveNode] = useState(null);
    const [strategy, setStrategy] = useState('delegation'); // 'direct' or 'delegation'
    const [isAnimating, setIsAnimating] = useState(false);

    const triggerEvent = (targetId) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setLogs([]);
        
        const sequence = ['button', 'row', 'list', 'document'];
        let delay = 0;

        sequence.forEach((node, index) => {
            setTimeout(() => {
                setActiveNode(node);
                
                // Determine what gets logged based on strategy
                if (strategy === 'delegation' && node === 'list') {
                    setLogs(prev => [...prev, { 
                        listener: 'list', 
                        target: targetId,
                        message: `Delegated listener fired! Handled click on ${targetId}` 
                    }]);
                } else if (strategy === 'direct' && node === 'button') {
                    setLogs(prev => [...prev, { 
                        listener: 'button', 
                        target: targetId,
                        message: `Direct listener fired on ${targetId}` 
                    }]);
                } else {
                    setLogs(prev => [...prev, { 
                        listener: node, 
                        target: targetId,
                        message: `Event bubbled to ${node} (No listener attached)` 
                    }]);
                }

                if (index === sequence.length - 1) {
                    setTimeout(() => {
                        setActiveNode(null);
                        setIsAnimating(false);
                    }, 800);
                }
            }, delay);
            delay += 800; // 800ms per bubble step
        });
    };

    return (
        <div className="bg-[#0f172a] rounded-2xl border border-gray-800 p-6 my-8 shadow-2xl w-full">
            <div className="flex flex-col lg:flex-row gap-6">
                
                {/* Controls & UI */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                    <div>
                        <div className="flex justify-between items-center mb-3">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Listener Strategy</label>
                            <button onClick={() => setLogs([])} className="text-xs text-gray-500 hover:text-white flex items-center gap-1"><RefreshCw className="w-3 h-3" /> Clear Logs</button>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <button 
                                onClick={() => setStrategy('direct')}
                                className={`p-3 rounded-lg border text-sm font-medium transition-all ${strategy === 'direct' ? 'bg-purple-600/20 border-purple-500 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.3)]' : 'bg-gray-800/50 border-gray-700 text-gray-400 hover:bg-gray-800'}`}
                            >
                                Direct Listeners
                            </button>
                            <button 
                                onClick={() => setStrategy('delegation')}
                                className={`p-3 rounded-lg border text-sm font-medium transition-all ${strategy === 'delegation' ? 'bg-blue-600/20 border-blue-500 text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.3)]' : 'bg-gray-800/50 border-gray-700 text-gray-400 hover:bg-gray-800'}`}
                            >
                                Event Delegation
                            </button>
                        </div>
                    </div>

                    {/* Simulated DOM UI */}
                    <div className="bg-black/40 rounded-xl border border-gray-800 p-6 relative">
                        <div className="text-[10px] text-gray-500 uppercase tracking-widest absolute top-2 right-3">The Screen</div>
                        
                        <div className={`p-4 rounded-lg border-2 transition-all duration-300 ${activeNode === 'list' ? 'border-blue-500 bg-blue-900/20' : 'border-gray-700 bg-gray-900/50'}`}>
                            <div className="text-xs text-gray-400 mb-2 font-mono flex items-center gap-2">
                                &lt;ul id="list"&gt; 
                                {strategy === 'delegation' && <span className="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded text-[10px]">has listener</span>}
                            </div>
                            
                            <div className="flex flex-col gap-3">
                                {[1, 2].map(num => (
                                    <div key={num} className={`p-3 rounded border transition-all duration-300 ${activeNode === 'row' ? 'border-gray-500 bg-gray-800' : 'border-gray-800 bg-black/50'} flex justify-between items-center`}>
                                        <span className="text-gray-300 text-sm">Item {num}</span>
                                        <button 
                                            disabled={isAnimating}
                                            onClick={() => triggerEvent(`Button ${num}`)}
                                            className={`px-3 py-1.5 rounded text-sm font-medium transition-all duration-300 ${activeNode === 'button' ? 'bg-emerald-500 text-white scale-105' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
                                        >
                                            Click Me
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Event Flow & Logs */}
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <Layers className="w-4 h-4" /> Event Bubbling Flow
                    </label>

                    <div className="flex-1 bg-black/60 rounded-xl border border-gray-800 p-4 font-mono text-sm overflow-y-auto min-h-[250px] flex flex-col justify-end">
                        <div className="flex flex-col gap-2">
                            {logs.length === 0 && <div className="text-gray-600 text-center italic mt-auto pb-4">Click a button to watch the event bubble up the DOM tree...</div>}
                            
                            {logs.map((log, i) => (
                                <div key={i} className={`p-2 rounded border-l-2 flex flex-col gap-1 animate-fadeIn
                                    ${log.message.includes('fired') ? (strategy === 'delegation' ? 'bg-blue-900/20 border-blue-500 text-blue-200' : 'bg-purple-900/20 border-purple-500 text-purple-200') : 'bg-gray-900/40 border-gray-600 text-gray-500'}
                                `}>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] uppercase tracking-wider opacity-70">Node: {log.listener}</span>
                                        {log.message.includes('fired') && <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 rounded">event.target: {log.target}</span>}
                                    </div>
                                    <div>{log.message}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="p-3 bg-gray-900/50 rounded-lg border border-gray-800 text-xs text-gray-400">
                        {strategy === 'delegation' 
                            ? "Delegation: We put ONE listener on the parent <ul>. The event bubbles up from the <button>. We use event.target.closest() to figure out which row was clicked. Extremely efficient!" 
                            : "Direct: We must attach a separate listener to EVERY <button>. If we add 100 new rows, we have to attach 100 new listeners. Uses more memory."}
                    </div>
                </div>

            </div>
        </div>
    );
}