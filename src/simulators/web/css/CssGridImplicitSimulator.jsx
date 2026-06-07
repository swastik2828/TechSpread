import React, { useState } from 'react';
import { Layers, Plus, RotateCcw } from 'lucide-react';

export default function CssGridImplicitSimulator() {
    const [itemCount, setItemCount] = useState(4);
    const [autoFlow, setAutoFlow] = useState('row');
    const [autoRows, setAutoRows] = useState('100px');

    const handleAddItem = () => {
        if (itemCount < 12) setItemCount(prev => prev + 1);
    };

    const handleReset = () => setItemCount(4);

    return (
        <div className="my-8 bg-[#0d1117] border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-[#161b22] px-4 py-3 border-b border-gray-800 flex items-center justify-between">
                <span className="text-sm font-bold text-gray-300 flex items-center gap-2">
                    <Layers size={16} className="text-purple-400" />
                    Explicit vs Implicit Grid Simulator
                </span>
                <div className="flex gap-2">
                    <button onClick={handleReset} className="p-1.5 text-gray-400 hover:text-white bg-gray-800 rounded transition-colors" title="Reset">
                        <RotateCcw size={14} />
                    </button>
                    <button onClick={handleAddItem} disabled={itemCount >= 12} className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold rounded bg-purple-500/20 text-purple-400 border border-purple-500/50 disabled:opacity-50 transition-colors">
                        <Plus size={14} /> Add Item
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-800">
                <div className="p-5 border-b md:border-b-0 md:border-r border-gray-800 bg-[#111] space-y-5">
                    <div>
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">grid-auto-flow</label>
                        <select 
                            value={autoFlow} 
                            onChange={(e) => setAutoFlow(e.target.value)}
                            className="w-full bg-[#161b22] border border-gray-700 text-white rounded p-2 text-sm focus:border-purple-500 outline-none"
                        >
                            <option value="row">row (Default)</option>
                            <option value="column">column</option>
                            <option value="dense">dense</option>
                            <option value="row dense">row dense</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">grid-auto-rows</label>
                        <select 
                            value={autoRows} 
                            onChange={(e) => setAutoRows(e.target.value)}
                            className="w-full bg-[#161b22] border border-gray-700 text-white rounded p-2 text-sm focus:border-purple-500 outline-none"
                        >
                            <option value="100px">100px</option>
                            <option value="50px">50px</option>
                            <option value="minmax(80px, auto)">minmax(80px, auto)</option>
                        </select>
                    </div>
                </div>
                <div className="col-span-2 bg-[#161b22] p-5 flex items-center justify-center font-mono text-xs sm:text-sm text-sky-300">
                    <div>
                        <span className="text-gray-500">/* Explicit Grid (3 Columns, 1 Row) */</span><br/>
                        <span className="text-purple-400">display</span>: grid;<br/>
                        <span className="text-purple-400">grid-template-columns</span>: repeat(3, 1fr);<br/>
                        <span className="text-purple-400">grid-template-rows</span>: 100px;<br/><br/>
                        
                        <span className="text-gray-500">/* Implicit Grid (Controls overflow items) */</span><br/>
                        <span className="text-purple-400">grid-auto-flow</span>: {autoFlow};<br/>
                        <span className="text-purple-400">grid-auto-rows</span>: {autoRows};<br/>
                    </div>
                </div>
            </div>

            <div className="p-6 bg-[#0a0a0a] flex justify-center overflow-x-auto min-h-[300px]">
                <div 
                    className="w-full max-w-xl border-2 border-dashed border-gray-600 rounded-lg p-2 transition-all duration-500"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gridTemplateRows: '100px',
                        gap: '12px',
                        gridAutoFlow: autoFlow,
                        gridAutoRows: autoRows
                    }}
                >
                    {Array.from({ length: itemCount }).map((_, i) => {
                        // Make item 2 span 2 columns to demonstrate 'dense' packing
                        const isSpanning = i === 1;
                        return (
                            <div 
                                key={i} 
                                className={`bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/50 rounded-lg flex flex-col items-center justify-center text-purple-300 font-bold shadow-lg transition-all duration-300 ${isSpanning ? 'ring-2 ring-pink-500 ring-offset-2 ring-offset-[#0a0a0a]' : ''}`}
                                style={{
                                    gridColumn: isSpanning ? 'span 2' : 'auto',
                                    gridRow: isSpanning && autoFlow === 'column' ? 'span 2' : 'auto'
                                }}
                            >
                                <span className="text-lg">{i + 1}</span>
                                {isSpanning && <span className="text-[10px] text-pink-400 mt-1">span 2</span>}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="bg-[#161b22] p-4 text-xs text-gray-400 text-center border-t border-gray-800">
                The explicit grid only has <strong>1 row</strong> defined. Items 4+ overflow into the <strong>implicit grid</strong>. Change <code>grid-auto-flow</code> to <strong>dense</strong> to see Item 3 backfill the empty space left by Item 2!
            </div>
        </div>
    );
}