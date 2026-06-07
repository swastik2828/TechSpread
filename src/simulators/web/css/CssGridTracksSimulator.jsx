import React, { useState } from 'react';
import { Grid, SlidersHorizontal } from 'lucide-react';

export default function CssGridTracksSimulator() {
    const [cols, setCols] = useState(3);
    const [rows, setRows] = useState(2);
    const [gap, setGap] = useState(16);
    const [colType, setColType] = useState('1fr');

    const colTemplate = `repeat(${cols}, ${colType})`;

    return (
        <div className="my-8 bg-[#0d1117] border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-[#161b22] px-4 py-3 border-b border-gray-800 flex items-center gap-2">
                <SlidersHorizontal size={16} className="text-sky-400" />
                <span className="text-sm font-bold text-gray-300">Tracks & Gap Visualizer</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="p-6 border-b md:border-b-0 md:border-r border-gray-800 bg-[#111] space-y-6">
                    <div>
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Columns: {cols}</label>
                        <input type="range" min="1" max="5" value={cols} onChange={(e) => setCols(e.target.value)} className="w-full accent-sky-500" />
                    </div>
                    <div>
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Rows: {rows}</label>
                        <input type="range" min="1" max="4" value={rows} onChange={(e) => setRows(e.target.value)} className="w-full accent-sky-500" />
                    </div>
                    <div>
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Gap: {gap}px</label>
                        <input type="range" min="0" max="40" value={gap} onChange={(e) => setGap(e.target.value)} className="w-full accent-sky-500" />
                    </div>
                    <div>
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Column Unit</label>
                        <select 
                            value={colType} 
                            onChange={(e) => setColType(e.target.value)}
                            className="w-full bg-[#161b22] border border-gray-700 text-white rounded p-2 text-sm focus:border-sky-500 outline-none"
                        >
                            <option value="1fr">1fr (Fractional)</option>
                            <option value="100px">100px (Fixed)</option>
                            <option value="minmax(50px, 1fr)">minmax(50px, 1fr)</option>
                        </select>
                    </div>
                </div>

                <div className="col-span-1 md:col-span-2 p-6 flex flex-col">
                    <div className="bg-[#161b22] p-3 rounded-lg border border-gray-700 mb-6 font-mono text-xs text-sky-300">
                        <div><span className="text-purple-400">display</span>: grid;</div>
                        <div><span className="text-purple-400">grid-template-columns</span>: {colTemplate};</div>
                        <div><span className="text-purple-400">grid-template-rows</span>: repeat({rows}, 80px);</div>
                        <div><span className="text-purple-400">gap</span>: {gap}px;</div>
                    </div>

                    <div className="flex-1 border-2 border-dashed border-gray-700 rounded-xl p-2 bg-[#0a0a0a] overflow-auto">
                        <div 
                            style={{
                                display: 'grid',
                                gridTemplateColumns: colTemplate,
                                gridTemplateRows: `repeat(${rows}, 80px)`,
                                gap: `${gap}px`
                            }}
                            className="w-full h-full transition-all duration-300"
                        >
                            {Array.from({ length: cols * rows }).map((_, i) => (
                                <div key={i} className="bg-sky-500/10 border border-sky-500/30 rounded flex items-center justify-center relative overflow-hidden group">
                                    <span className="text-sky-300 font-bold z-10">Cell {i + 1}</span>
                                    {/* Grid line indicator highlights on hover */}
                                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-sky-400/50 transition-all pointer-events-none" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}