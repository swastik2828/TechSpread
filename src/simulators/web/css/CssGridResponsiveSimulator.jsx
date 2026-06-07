import React, { useState } from 'react';
import { Smartphone, Monitor } from 'lucide-react';

export default function CssGridResponsiveSimulator() {
    const [containerWidth, setContainerWidth] = useState(100); // Percentage
    const [mode, setMode] = useState('auto-fit');
    const [minSize, setMinSize] = useState(150);

    return (
        <div className="my-8 bg-[#0d1117] border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-[#161b22] px-4 py-3 border-b border-gray-800 flex flex-wrap gap-4 items-center justify-between">
                <span className="text-sm font-bold text-gray-300 flex items-center gap-2">
                    <Monitor size={16} className="text-purple-400" />
                    Responsive Grid Simulator (No Media Queries)
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-800">
                <div className="p-5 border-b md:border-b-0 md:border-r border-gray-800 bg-[#111] space-y-5">
                    <div>
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Behavior</label>
                        <div className="flex gap-2">
                            <button onClick={() => setMode('auto-fit')} className={`flex-1 py-1.5 text-xs font-bold rounded ${mode === 'auto-fit' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/50' : 'bg-gray-800 text-gray-400 border border-gray-700'}`}>auto-fit</button>
                            <button onClick={() => setMode('auto-fill')} className={`flex-1 py-1.5 text-xs font-bold rounded ${mode === 'auto-fill' ? 'bg-pink-500/20 text-pink-400 border border-pink-500/50' : 'bg-gray-800 text-gray-400 border border-gray-700'}`}>auto-fill</button>
                        </div>
                    </div>
                    <div>
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Min Column Width: {minSize}px</label>
                        <input type="range" min="100" max="300" step="10" value={minSize} onChange={(e) => setMinSize(e.target.value)} className="w-full accent-purple-500" />
                    </div>
                </div>
                <div className="col-span-2 bg-[#161b22] p-5 flex items-center justify-center font-mono text-xs sm:text-sm text-sky-300">
                    <div>
                        <span className="text-purple-400">display</span>: grid;<br/>
                        <span className="text-purple-400">grid-template-columns</span>: repeat({mode}, minmax({minSize}px, 1fr));<br/>
                        <span className="text-purple-400">gap</span>: 16px;
                    </div>
                </div>
            </div>

            <div className="p-6 bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px] flex flex-col items-center overflow-hidden">
                <div className="w-full flex justify-between items-center mb-4 px-2 text-gray-400 text-xs">
                    <Smartphone size={14} />
                    <span>Resize container to see elements wrap</span>
                    <Monitor size={14} />
                </div>
                
                <input 
                    type="range" 
                    min="30" max="100" 
                    value={containerWidth} 
                    onChange={(e) => setContainerWidth(e.target.value)} 
                    className="w-full max-w-2xl mb-6 accent-gray-500" 
                    title="Drag to resize container"
                />

                <div className="w-full flex justify-center overflow-hidden border-x-2 border-dashed border-gray-600/50 py-4">
                    <div 
                        className="bg-[#0a0a0a] border border-gray-700 p-4 rounded-lg transition-all duration-300 overflow-hidden"
                        style={{
                            width: `${containerWidth}%`,
                            display: 'grid',
                            gridTemplateColumns: `repeat(${mode}, minmax(${minSize}px, 1fr))`,
                            gap: '16px'
                        }}
                    >
                        {/* Rendering 4 items to clearly show the difference between auto-fit and auto-fill */}
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="bg-purple-900/30 border border-purple-500/50 h-20 rounded-md flex items-center justify-center text-purple-300 font-bold shadow-lg">
                                Item {item}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-4 text-xs text-gray-500 text-center max-w-xl">
                    {mode === 'auto-fit' 
                        ? "auto-fit: Collapses empty tracks. If there are fewer items than columns allow, the existing items stretch to fill the space." 
                        : "auto-fill: Keeps empty column tracks and reserves space for them. Items won't stretch beyond their fractional share of the total possible columns."}
                </div>
            </div>
        </div>
    );
}