import React, { useState } from 'react';
import { AlignCenter } from 'lucide-react';

export default function CssGridAlignmentSimulator() {
    const [justifyItems, setJustifyItems] = useState('stretch');
    const [alignItems, setAlignItems] = useState('stretch');
    const [justifyContent, setJustifyContent] = useState('center');
    const [alignContent, setAlignContent] = useState('center');

    const options = ['start', 'end', 'center', 'stretch'];
    const contentOptions = ['start', 'end', 'center', 'space-between', 'space-around', 'space-evenly'];

    const SelectControl = ({ label, value, setter, list }) => (
        <div className="flex-1 min-w-[140px]">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1 block">{label}</label>
            <select 
                value={value} 
                onChange={(e) => setter(e.target.value)}
                className="w-full bg-[#161b22] border border-gray-700 text-white rounded p-1.5 text-xs focus:border-purple-500 outline-none"
            >
                {list.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
        </div>
    );

    return (
        <div className="my-8 bg-[#0d1117] border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-[#161b22] px-4 py-3 border-b border-gray-800 flex items-center gap-2">
                <AlignCenter size={16} className="text-purple-400" />
                <span className="text-sm font-bold text-gray-300">2-Level Alignment Matrix</span>
            </div>

            <div className="p-5 border-b border-gray-800 bg-[#111] flex flex-wrap gap-4">
                <div className="flex-1 min-w-[200px] border-r border-gray-800 pr-4">
                    <span className="text-xs font-bold text-purple-400 block mb-3">Level 1: Items inside Cells</span>
                    <div className="flex gap-2">
                        <SelectControl label="justify-items (X)" value={justifyItems} setter={setJustifyItems} list={options} />
                        <SelectControl label="align-items (Y)" value={alignItems} setter={setAlignItems} list={options} />
                    </div>
                </div>
                <div className="flex-1 min-w-[200px]">
                    <span className="text-xs font-bold text-pink-400 block mb-3">Level 2: Grid inside Container</span>
                    <div className="flex gap-2">
                        <SelectControl label="justify-content (X)" value={justifyContent} setter={setJustifyContent} list={contentOptions} />
                        <SelectControl label="align-content (Y)" value={alignContent} setter={setAlignContent} list={contentOptions} />
                    </div>
                </div>
            </div>

            <div className="p-6 bg-[#0a0a0a] flex justify-center">
                <div className="relative w-full max-w-lg h-64 border-2 border-dashed border-gray-600 rounded-lg p-2 overflow-hidden group">
                    <span className="absolute top-2 left-2 text-[10px] text-gray-500 font-mono">Container (w: 100%, h: 250px)</span>
                    
                    <div 
                        className="w-full h-full transition-all duration-500"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '80px 80px',
                            gridTemplateRows: '60px 60px',
                            gap: '10px',
                            justifyItems,
                            alignItems,
                            justifyContent,
                            alignContent
                        }}
                    >
                        {[1, 2, 3, 4].map((item) => (
                            // The outer div represents the Grid Track/Cell bounds visually
                            <div key={item} className="border border-gray-700 bg-[#161b22] relative overflow-visible">
                                {/* The inner div represents the actual item content */}
                                <div className={`bg-gradient-to-br from-purple-600 to-pink-600 rounded flex items-center justify-center font-bold text-white text-xs shadow-lg transition-all duration-300 ${justifyItems !== 'stretch' && alignItems !== 'stretch' ? 'p-2' : ''}`}
                                    style={{
                                        width: justifyItems === 'stretch' ? '100%' : 'auto',
                                        height: alignItems === 'stretch' ? '100%' : 'auto'
                                    }}
                                >
                                    {item}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-[#161b22] p-4 text-xs text-gray-400 text-center border-t border-gray-800">
                Notice how <code>justify/align-content</code> moves the <strong>entire grid</strong> around the container, while <code>justify/align-items</code> moves the <strong>purple boxes</strong> inside their respective grey grid cells.
            </div>
        </div>
    );
}