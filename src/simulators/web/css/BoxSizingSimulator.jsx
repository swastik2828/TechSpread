import React, { useState } from 'react';
import { BoxSelect } from 'lucide-react';

const BoxSizingSimulator = () => {
    const [boxSizing, setBoxSizing] = useState('content-box');
    const width = 300;
    const padding = 20;
    const border = 5;

    // Calculate actual rendered width
    const totalWidth = boxSizing === 'content-box' 
        ? width + (padding * 2) + (border * 2)
        : width;

    // Content area width for visualization
    const contentWidth = boxSizing === 'content-box'
        ? width
        : width - (padding * 2) - (border * 2);

    return (
        <div className="my-8 bg-[#0d1117] border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-gray-800">
                <div className="flex items-center gap-2 text-cyan-400">
                    <BoxSelect size={18} />
                    <span className="font-bold text-sm">Visualizing Box-Sizing</span>
                </div>
            </div>

            <div className="p-4 md:p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Controls */}
                <div className="space-y-6">
                    <div>
                        <label className="text-sm font-medium text-gray-300 mb-3 block">Box Sizing Mode</label>
                        <div className="flex bg-gray-900 rounded-lg p-1 border border-gray-800">
                            <button
                                onClick={() => setBoxSizing('content-box')}
                                className={`flex-1 py-2 px-4 rounded-md text-sm font-bold transition-all ${
                                    boxSizing === 'content-box'
                                        ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30 shadow-md'
                                        : 'text-gray-500 hover:text-gray-300'
                                }`}
                            >
                                content-box (Default)
                            </button>
                            <button
                                onClick={() => setBoxSizing('border-box')}
                                className={`flex-1 py-2 px-4 rounded-md text-sm font-bold transition-all ${
                                    boxSizing === 'border-box'
                                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-md'
                                        : 'text-gray-500 hover:text-gray-300'
                                }`}
                            >
                                border-box
                            </button>
                        </div>
                    </div>

                    <div className="bg-[#161b22] rounded-lg p-5 border border-gray-800 font-mono text-sm text-gray-300">
                        <div className="text-purple-400 mb-2">.box {'{'}</div>
                        <div className="pl-4 space-y-1">
                            <div><span className="text-cyan-300">width:</span> <span className="text-cyan-400">{width}px;</span></div>
                            <div><span className="text-sky-300">padding:</span> <span className="text-sky-400">{padding}px;</span></div>
                            <div><span className="text-yellow-300">border:</span> <span className="text-yellow-400">{border}px solid #333;</span></div>
                            <div className="mt-2 text-gray-500">
                                <span className={boxSizing === 'content-box' ? 'text-rose-400 font-bold' : ''}>
                                    {boxSizing === 'content-box' ? '/* Default behavior */' : ''}
                                </span>
                                <span className={boxSizing === 'border-box' ? 'text-emerald-400 font-bold' : ''}>
                                    {boxSizing === 'border-box' ? <>box-sizing: <span className="text-emerald-300">border-box;</span></> : ''}
                                </span>
                            </div>
                        </div>
                        <div className="text-purple-400 mt-2">{'}'}</div>
                    </div>

                    <div className={`p-4 rounded-lg border ${boxSizing === 'content-box' ? 'bg-rose-900/10 border-rose-500/30' : 'bg-emerald-900/10 border-emerald-500/30'}`}>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-400 font-semibold text-sm">Actual Rendered Width:</span>
                            <span className={`text-xl font-bold ${boxSizing === 'content-box' ? 'text-rose-400' : 'text-emerald-400'}`}>
                                {totalWidth}px
                            </span>
                        </div>
                        <div className="text-xs text-gray-500 font-mono">
                            {boxSizing === 'content-box' 
                                ? `Calculation: ${width} (width) + ${padding*2} (L/R padding) + ${border*2} (L/R border)`
                                : `Width constraint (${width}px) includes padding & border.`
                            }
                        </div>
                    </div>
                </div>

                {/* Visualization */}
                <div className="flex flex-col items-center justify-center bg-[#0a0a0a] rounded-xl border border-gray-800 relative p-4 min-h-[350px] overflow-hidden">
                    <div className="w-full max-w-[400px]">
                        {/* Parent Container Outline */}
                        <div className="w-full h-8 border-x-2 border-t-2 border-gray-800 rounded-t border-dashed relative mb-2">
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-gray-500 font-bold">Parent Container Space</div>
                        </div>

                        {/* Visual Box */}
                        <div className="relative mx-auto transition-all duration-500 ease-out flex flex-col items-center" style={{ width: `${totalWidth}px` }}>
                            
                            {/* Measurement line for total width */}
                            <div className="w-full flex items-center justify-between mb-2">
                                <div className="w-px h-3 bg-gray-500" />
                                <div className="flex-1 h-px bg-gray-600 border-t border-dashed border-gray-400 mx-1" />
                                <div className={`text-[10px] font-bold px-2 ${boxSizing === 'content-box' ? 'text-rose-400' : 'text-emerald-400'}`}>{totalWidth}px</div>
                                <div className="flex-1 h-px bg-gray-600 border-t border-dashed border-gray-400 mx-1" />
                                <div className="w-px h-3 bg-gray-500" />
                            </div>

                            {/* The Box */}
                            <div 
                                className="relative bg-sky-500/20 w-full flex items-center justify-center transition-all duration-500"
                                style={{
                                    height: '120px',
                                    border: `${border}px solid #eab308`,
                                    padding: `${padding}px`
                                }}
                            >
                                <div className="absolute top-0 right-1 text-[8px] text-yellow-500 bg-[#0a0a0a] px-1 translate-y-[-50%]">Border</div>
                                <div className="absolute top-1 left-2 text-[9px] text-sky-400">Padding</div>

                                {/* Content Area */}
                                <div className="bg-sky-500/30 border border-sky-400/50 w-full h-full flex flex-col items-center justify-center text-center transition-all duration-500 relative">
                                    <span className="text-sky-200 font-bold text-sm">Content</span>
                                    <span className="text-sky-300 text-xs font-mono">{contentWidth}px</span>
                                    
                                    {/* Measurement line for content width */}
                                    <div className="absolute -bottom-6 w-full flex items-center justify-between opacity-50">
                                        <div className="w-px h-2 bg-sky-400" />
                                        <div className="flex-1 h-px bg-sky-400/50" />
                                        <div className="w-px h-2 bg-sky-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoxSizingSimulator;
