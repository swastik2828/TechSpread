import React, { useState } from 'react';
import { Crosshair } from 'lucide-react';

export default function CssGridPlacementSimulator() {
    const [colStart, setColStart] = useState(2);
    const [colSpan, setColSpan] = useState(2);
    const [rowStart, setRowStart] = useState(1);
    const [rowSpan, setRowSpan] = useState(3);

    const getColEnd = () => colSpan === -1 ? '-1' : colStart + colSpan;

    return (
        <div className="my-8 bg-[#0d1117] border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-[#161b22] px-4 py-3 border-b border-gray-800 flex items-center gap-2">
                <Crosshair size={16} className="text-purple-400" />
                <span className="text-sm font-bold text-gray-300">Grid Line Placement Simulator</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="p-6 border-b md:border-b-0 md:border-r border-gray-800 bg-[#111] space-y-6">
                    <div>
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">grid-column</label>
                        <div className="flex gap-2 items-center">
                            <span className="text-xs text-gray-500">Start Line:</span>
                            <input type="number" min="1" max="4" value={colStart} onChange={(e) => setColStart(Number(e.target.value))} className="w-16 bg-[#161b22] border border-gray-700 rounded p-1 text-white text-center" />
                        </div>
                        <div className="flex gap-2 items-center mt-2">
                            <span className="text-xs text-gray-500">Span/End:</span>
                            <select value={colSpan} onChange={(e) => setColSpan(Number(e.target.value))} className="w-24 bg-[#161b22] border border-gray-700 rounded p-1 text-white text-sm">
                                <option value={1}>span 1</option>
                                <option value={2}>span 2</option>
                                <option value={3}>span 3</option>
                                <option value={-1}>-1 (Full)</option>
                            </select>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-gray-800">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">grid-row</label>
                        <div className="flex gap-2 items-center">
                            <span className="text-xs text-gray-500">Start Line:</span>
                            <input type="number" min="1" max="4" value={rowStart} onChange={(e) => setRowStart(Number(e.target.value))} className="w-16 bg-[#161b22] border border-gray-700 rounded p-1 text-white text-center" />
                        </div>
                        <div className="flex gap-2 items-center mt-2">
                            <span className="text-xs text-gray-500">Span:</span>
                            <select value={rowSpan} onChange={(e) => setRowSpan(Number(e.target.value))} className="w-24 bg-[#161b22] border border-gray-700 rounded p-1 text-white text-sm">
                                <option value={1}>span 1</option>
                                <option value={2}>span 2</option>
                                <option value={3}>span 3</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 md:col-span-2 p-6">
                    <div className="bg-[#161b22] p-3 rounded-lg border border-gray-700 mb-6 font-mono text-xs text-sky-300 inline-block">
                        .item {'{'} <br/>
                        &nbsp;&nbsp;<span className="text-purple-400">grid-column</span>: {colStart} / {colSpan === -1 ? '-1' : `span ${colSpan}`};<br/>
                        &nbsp;&nbsp;<span className="text-purple-400">grid-row</span>: {rowStart} / span {rowSpan};<br/>
                        {'}'}
                    </div>

                    <div className="relative w-full aspect-square max-w-[300px] mx-auto bg-[#0a0a0a] border border-gray-700 p-4">
                        {/* Background Grid Lines Visualization */}
                        <div className="absolute inset-4 grid grid-cols-4 grid-rows-4 gap-2">
                            {Array.from({ length: 16 }).map((_, i) => (
                                <div key={i} className="border border-gray-800/50 bg-gray-900/20 rounded-sm" />
                            ))}
                        </div>

                        {/* Line Numbers */}
                        <div className="absolute top-0 left-4 w-[calc(100%-2rem)] flex justify-between text-[10px] text-gray-500 font-mono -translate-y-full">
                            <span>1</span><span>2</span><span>3</span><span>4</span><span className="text-pink-500 font-bold">-1</span>
                        </div>
                        <div className="absolute left-0 top-4 h-[calc(100%-2rem)] flex flex-col justify-between text-[10px] text-gray-500 font-mono -translate-x-full pr-1">
                            <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
                        </div>

                        {/* The Actual Grid */}
                        <div className="relative w-full h-full grid grid-cols-4 grid-rows-4 gap-2">
                            <div 
                                className="bg-gradient-to-br from-pink-500/80 to-purple-500/80 border-2 border-pink-400 rounded-md shadow-[0_0_15px_rgba(236,72,153,0.3)] flex items-center justify-center font-bold text-white transition-all duration-500 z-10"
                                style={{
                                    gridColumn: `${colStart} / ${colSpan === -1 ? '-1' : colStart + colSpan}`,
                                    gridRow: `${rowStart} / ${rowStart + rowSpan}`
                                }}
                            >
                                .item
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}