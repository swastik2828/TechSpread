import React, { useState } from 'react';

const CssPositionSimulator = () => {
    const [position, setPosition] = useState('relative');
    const [top, setTop] = useState('20px');
    const [left, setLeft] = useState('20px');
    const [right, setRight] = useState('auto');
    const [bottom, setBottom] = useState('auto');

    const handleReset = () => {
        setPosition('relative');
        setTop('20px');
        setLeft('20px');
        setRight('auto');
        setBottom('auto');
    };

    const getExplanation = () => {
        switch (position) {
            case 'static':
                return "The element is in the normal document flow. Top, left, right, and bottom have no effect.";
            case 'relative':
                return "The element remains in the normal flow (preserving its original space), but is visually shifted by the offset properties relative to its normal position.";
            case 'absolute':
                return "The element is removed from normal flow (other elements collapse to fill its space). It is positioned relative to its nearest positioned ancestor (the dashed container).";
            case 'fixed':
                return "The element is removed from normal flow and positioned relative to the viewport. (In this simulator, we trap it within the preview window using a CSS transform hack so it doesn't fly off your screen!)";
            case 'sticky':
                return "The element scrolls normally until it reaches the defined offset, then 'sticks' in place. Try scrolling the preview container!";
            default:
                return "";
        }
    };

    const isOffsetDisabled = position === 'static';

    return (
        <div className="bg-[#0A0A0A] p-4 md:p-6 rounded-xl border border-gray-800 my-8 shadow-2xl font-sans">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="bg-sky-500/20 text-sky-400 p-2 rounded-lg">⚙️</span>
                    Advanced Positioning Simulator
                </h3>
                <button 
                    onClick={handleReset}
                    className="text-sm bg-gray-800 hover:bg-gray-700 text-white px-3 py-1.5 rounded transition-colors"
                >
                    Reset
                </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Controls (Left Side) */}
                <div className="lg:col-span-5 space-y-6">
                    <div className="bg-[#111] p-4 rounded-lg border border-gray-800">
                        <label className="block text-sm font-medium text-gray-400 mb-2">Position Value</label>
                        <select
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                            className="w-full bg-[#1A1A1A] text-white border border-gray-700 rounded-md p-2 focus:outline-none focus:border-sky-500 transition-colors cursor-pointer"
                        >
                            <option value="static">static (default)</option>
                            <option value="relative">relative</option>
                            <option value="absolute">absolute</option>
                            <option value="fixed">fixed</option>
                            <option value="sticky">sticky</option>
                        </select>
                        <div className="mt-3 text-sm text-sky-300/80 leading-relaxed bg-sky-900/10 p-3 rounded border border-sky-500/20">
                            <strong>Behavior:</strong> {getExplanation()}
                        </div>
                    </div>

                    <div className="bg-[#111] p-3 sm:p-4 rounded-lg border border-gray-800 space-y-4">
                        <h4 className="text-sm font-bold text-gray-300 border-b border-gray-800 pb-2">Offsets</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs text-gray-500 mb-1">Top</label>
                                <select 
                                    value={top} 
                                    onChange={(e) => setTop(e.target.value)}
                                    disabled={isOffsetDisabled}
                                    className="w-full bg-[#1A1A1A] text-white border border-gray-700 rounded p-1.5 text-sm disabled:opacity-50"
                                >
                                    <option value="auto">auto</option>
                                    <option value="0px">0px</option>
                                    <option value="20px">20px</option>
                                    <option value="50px">50px</option>
                                    <option value="-20px">-20px</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs text-gray-500 mb-1">Bottom</label>
                                <select 
                                    value={bottom} 
                                    onChange={(e) => setBottom(e.target.value)}
                                    disabled={isOffsetDisabled}
                                    className="w-full bg-[#1A1A1A] text-white border border-gray-700 rounded p-1.5 text-sm disabled:opacity-50"
                                >
                                    <option value="auto">auto</option>
                                    <option value="0px">0px</option>
                                    <option value="20px">20px</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs text-gray-500 mb-1">Left</label>
                                <select 
                                    value={left} 
                                    onChange={(e) => setLeft(e.target.value)}
                                    disabled={isOffsetDisabled}
                                    className="w-full bg-[#1A1A1A] text-white border border-gray-700 rounded p-1.5 text-sm disabled:opacity-50"
                                >
                                    <option value="auto">auto</option>
                                    <option value="0px">0px</option>
                                    <option value="20px">20px</option>
                                    <option value="50px">50px</option>
                                    <option value="-20px">-20px</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs text-gray-500 mb-1">Right</label>
                                <select 
                                    value={right} 
                                    onChange={(e) => setRight(e.target.value)}
                                    disabled={isOffsetDisabled}
                                    className="w-full bg-[#1A1A1A] text-white border border-gray-700 rounded p-1.5 text-sm disabled:opacity-50"
                                >
                                    <option value="auto">auto</option>
                                    <option value="0px">0px</option>
                                    <option value="20px">20px</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#0d1117] p-4 rounded-lg border border-gray-800 font-mono text-sm shadow-inner">
                        <span className="text-pink-400">.target-box</span> {'{'}
                        <div className="pl-4 text-sky-300">
                            position: <span className="text-yellow-300">{position}</span>;
                        </div>
                        {position !== 'static' && top !== 'auto' && (
                            <div className="pl-4 text-sky-300">top: <span className="text-yellow-300">{top}</span>;</div>
                        )}
                        {position !== 'static' && right !== 'auto' && (
                            <div className="pl-4 text-sky-300">right: <span className="text-yellow-300">{right}</span>;</div>
                        )}
                        {position !== 'static' && bottom !== 'auto' && (
                            <div className="pl-4 text-sky-300">bottom: <span className="text-yellow-300">{bottom}</span>;</div>
                        )}
                        {position !== 'static' && left !== 'auto' && (
                            <div className="pl-4 text-sky-300">left: <span className="text-yellow-300">{left}</span>;</div>
                        )}
                        {'}'}
                    </div>
                </div>

                {/* Preview (Right Side) */}
                <div className="lg:col-span-7 bg-[#161616] rounded-xl border border-gray-700 overflow-hidden relative min-h-[400px] flex flex-col">
                    <div className="bg-gray-800/50 px-4 py-2 text-xs text-gray-400 border-b border-gray-700 flex justify-between items-center z-20 relative">
                        <span>Browser Viewport (Simulated)</span>
                        {position === 'sticky' && <span className="text-yellow-400 animate-pulse">Scroll down! ↓</span>}
                    </div>
                    
                    {/* The Viewport Container. transform: translateZ(0) makes it the containing block for fixed elements! */}
                    <div className="flex-1 overflow-y-auto relative p-3 sm:p-4" style={{ transform: 'translateZ(0)' }}>
                        <div className="h-[400px] md:h-[600px]"> {/* Tall content to allow scrolling */}
                            
                            <p className="text-gray-500 text-xs mb-4">Scrolling Content Above...</p>
                            
                            {/* The Relative Parent Container */}
                            <div className="w-full border-2 border-dashed border-purple-500/50 bg-purple-500/5 relative rounded p-2 sm:p-4 mb-4">
                                <span className="text-xs text-purple-400 absolute top-1 right-2 font-mono">position: relative</span>
                                
                                <div className="w-full h-12 bg-gray-800 text-gray-400 flex items-center justify-center text-sm rounded mb-2 border border-gray-700">
                                    Normal Flow Box 1
                                </div>
                                
                                {/* Target Element Wrapper (to show ghost space for relative) */}
                                <div className="relative">
                                    {/* Ghost Space (Only visible if relative, to show space is preserved) */}
                                    {position === 'relative' && (
                                        <div className="w-full h-16 border-2 border-dotted border-gray-600 bg-gray-800/30 flex items-center justify-center text-gray-500 text-xs rounded">
                                            Original Space Preserved
                                        </div>
                                    )}

                                    {/* Target Element */}
                                    <div
                                        className="w-full h-16 bg-gradient-to-r from-sky-500 to-cyan-500 text-white flex items-center justify-center font-bold text-sm shadow-[0_8px_30px_rgb(14,165,233,0.3)] rounded border border-sky-400 z-10 transition-all duration-500"
                                        style={{
                                            position: position,
                                            top: position !== 'static' ? top : 'auto',
                                            bottom: position !== 'static' ? bottom : 'auto',
                                            left: position !== 'static' ? left : 'auto',
                                            right: position !== 'static' ? right : 'auto',
                                        }}
                                    >
                                        Target Box
                                    </div>
                                </div>

                                <div className="w-full h-12 bg-gray-800 text-gray-400 flex items-center justify-center text-sm rounded mt-2 border border-gray-700">
                                    Normal Flow Box 2
                                </div>
                            </div>

                            <p className="text-gray-500 text-xs mt-8">Scrolling Content Below...</p>
                            <p className="text-gray-600 text-xs mt-20">Keep scrolling...</p>
                            <p className="text-gray-700 text-xs mt-20">Bottom of page.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CssPositionSimulator;
