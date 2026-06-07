import React, { useState } from 'react';
import { Layout, Columns, Grid } from 'lucide-react';

export default function CssGridIntroSimulator() {
    const [mode, setMode] = useState('block');

    return (
        <div className="my-8 bg-[#0d1117] border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-[#161b22] px-4 py-3 border-b border-gray-800 flex flex-wrap gap-4 items-center justify-between">
                <span className="text-sm font-bold text-gray-300 flex items-center gap-2">
                    <Layout size={16} className="text-sky-400" />
                    1D vs 2D Layout Simulator
                </span>
                <div className="flex gap-2">
                    <button
                        onClick={() => setMode('block')}
                        className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${mode === 'block' ? 'bg-gray-700 text-white' : 'bg-[#0d1117] text-gray-400 hover:text-gray-200 border border-gray-700'}`}
                    >
                        Block (Default)
                    </button>
                    <button
                        onClick={() => setMode('flex')}
                        className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all flex items-center gap-1 ${mode === 'flex' ? 'bg-sky-500/20 text-sky-400 border border-sky-500/50' : 'bg-[#0d1117] text-gray-400 hover:text-gray-200 border border-gray-700'}`}
                    >
                        <Columns size={14} /> Flexbox (1D)
                    </button>
                    <button
                        onClick={() => setMode('grid')}
                        className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all flex items-center gap-1 ${mode === 'grid' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/50' : 'bg-[#0d1117] text-gray-400 hover:text-gray-200 border border-gray-700'}`}
                    >
                        <Grid size={14} /> Grid (2D)
                    </button>
                </div>
            </div>

            <div className="p-6 relative min-h-[300px] flex items-center justify-center bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px]">
                <div 
                    className="w-full max-w-lg bg-[#111] border-2 border-dashed border-gray-700 p-2 rounded-lg transition-all duration-500"
                    style={{
                        display: mode === 'block' ? 'block' : mode,
                        flexDirection: mode === 'flex' ? 'row' : 'initial',
                        gridTemplateColumns: mode === 'grid' ? 'repeat(3, 1fr)' : 'initial',
                        gap: mode !== 'block' ? '12px' : '0'
                    }}
                >
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div 
                            key={item} 
                            className={`p-4 rounded border text-center font-bold transition-all duration-500 ${
                                mode === 'block' ? 'mb-2 last:mb-0 bg-gray-800 border-gray-600 text-gray-300' :
                                mode === 'flex' ? 'flex-1 bg-sky-900/40 border-sky-500/50 text-sky-300' :
                                'bg-purple-900/40 border-purple-500/50 text-purple-300'
                            }`}
                        >
                            Item {item}
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-[#161b22] p-4 text-sm text-gray-400 border-t border-gray-800">
                {mode === 'block' && "Elements stack vertically by default. No relational layout control."}
                {mode === 'flex' && "Flexbox distributes space along a single axis (row). Notice how items 4, 5, 6 squeeze in."}
                {mode === 'grid' && "Grid controls BOTH columns and rows simultaneously, creating a true 2D structure."}
            </div>
        </div>
    );
}