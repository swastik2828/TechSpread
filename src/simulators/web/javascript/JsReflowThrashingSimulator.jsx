import React, { useState, useEffect } from 'react';
import { Activity, Zap, Play, RotateCcw } from 'lucide-react';

export default function JsReflowThrashingSimulator() {
    const [mode, setMode] = useState('thrashing'); // 'thrashing' or 'batched'
    const [timeline, setTimeline] = useState([]);
    const [isSimulating, setIsSimulating] = useState(false);
    const [boxes, setBoxes] = useState([50, 60, 70, 80]); // widths

    const runSimulation = () => {
        if (isSimulating) return;
        setIsSimulating(true);
        setTimeline([]);
        setBoxes([50, 60, 70, 80]); // reset visually
        
        let delay = 0;
        const addEvent = (type, time, detail) => {
            setTimeout(() => {
                setTimeline(prev => [...prev, { type, time, detail }]);
            }, delay);
            delay += time;
        };

        if (mode === 'thrashing') {
            // Unoptimized: Loop Read -> Write -> Read -> Write
            for (let i = 0; i < 4; i++) {
                addEvent('JS', 100, `box[${i}].offsetWidth`); // Read
                addEvent('Layout', 150, `Forced Sync Layout`); // Forced reflow
                addEvent('JS', 100, `box[${i}].style.width = newWidth`); // Write (invalidates layout)
            }
            addEvent('Paint', 200, `Final Paint`);
        } else {
            // Optimized: Batch Reads -> Batch Writes
            addEvent('JS', 200, `Read all widths (map)`); // Reads
            addEvent('JS', 200, `Write all widths (forEach)`); // Writes
            addEvent('Layout', 150, `Single Layout Calc`); // One reflow
            addEvent('Paint', 200, `Final Paint`);
        }

        setTimeout(() => {
            setBoxes([80, 90, 100, 110]); // animate to final state
            setIsSimulating(false);
        }, delay + 100);
    };

    return (
        <div className="bg-[#0f172a] rounded-2xl border border-gray-800 p-6 my-8 shadow-2xl w-full">
            <div className="flex flex-col md:flex-row gap-6">
                
                {/* Controls & DOM View */}
                <div className="w-full md:w-1/3 flex flex-col gap-6">
                    <div>
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 block">Execution Mode</label>
                        <div className="grid grid-cols-2 gap-2">
                            <button 
                                onClick={() => setMode('thrashing')}
                                className={`p-2 rounded border text-xs font-medium transition-all ${mode === 'thrashing' ? 'bg-rose-600/20 border-rose-500 text-rose-300 shadow-[0_0_10px_rgba(244,63,94,0.3)]' : 'bg-gray-800/50 border-gray-700 text-gray-400 hover:bg-gray-800'}`}
                            >
                                Thrashing (Slow)
                            </button>
                            <button 
                                onClick={() => setMode('batched')}
                                className={`p-2 rounded border text-xs font-medium transition-all ${mode === 'batched' ? 'bg-emerald-600/20 border-emerald-500 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.3)]' : 'bg-gray-800/50 border-gray-700 text-gray-400 hover:bg-gray-800'}`}
                            >
                                Batched (Fast)
                            </button>
                        </div>
                    </div>

                    <div className="bg-black/50 border border-gray-800 rounded-xl p-4 flex flex-col gap-3">
                        <button 
                            disabled={isSimulating}
                            onClick={runSimulation}
                            className="w-full flex justify-center items-center gap-2 py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-lg font-bold transition-all"
                        >
                            <Play className="w-4 h-4" /> Run Code
                        </button>
                        
                        <div className="mt-4 pt-4 border-t border-gray-800 space-y-2">
                            <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">Visible DOM</div>
                            {boxes.map((w, i) => (
                                <div key={i} className="h-6 bg-blue-500/30 border border-blue-500 rounded flex items-center px-2 text-xs text-blue-200 transition-all duration-300" style={{ width: `${w}%` }}>
                                    Box {i+1}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Performance Timeline View */}
                <div className="w-full md:w-2/3 flex flex-col gap-4">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <Activity className="w-4 h-4" /> Browser Main Thread Timeline
                    </label>

                    <div className="flex-1 bg-black/60 rounded-xl border border-gray-800 p-4 font-mono overflow-x-auto min-h-[250px] relative flex items-center">
                        <div className="flex items-end gap-1 h-full min-w-max px-4">
                            {timeline.length === 0 && <div className="text-gray-600 italic absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Run simulation to view performance trace...</div>}
                            
                            {timeline.map((event, i) => {
                                const isLayout = event.type === 'Layout';
                                const isPaint = event.type === 'Paint';
                                const colorClass = isLayout ? 'bg-rose-500/80 border-rose-400 text-rose-100' 
                                                 : isPaint ? 'bg-emerald-500/80 border-emerald-400 text-emerald-100'
                                                 : 'bg-yellow-500/80 border-yellow-400 text-yellow-900';
                                const hClass = isLayout ? 'h-32' : isPaint ? 'h-24' : 'h-16';
                                const wClass = event.time > 150 ? 'w-24' : 'w-16';

                                return (
                                    <div key={i} className={`flex flex-col items-center justify-end gap-2 animate-fadeIn`}>
                                        <div className="text-[9px] text-gray-400 text-center w-full break-words px-1 opacity-80 h-10 overflow-hidden">{event.detail}</div>
                                        <div className={`${hClass} ${wClass} ${colorClass} border rounded shadow-lg flex items-center justify-center text-xs font-bold`}>
                                            {event.type}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-gray-400 justify-center">
                        <div className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-yellow-500 inline-block"></span> JS Exec</div>
                        <div className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-rose-500 inline-block"></span> Recalculate Layout (Expensive)</div>
                        <div className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-emerald-500 inline-block"></span> Paint</div>
                    </div>
                </div>

            </div>
        </div>
    );
}