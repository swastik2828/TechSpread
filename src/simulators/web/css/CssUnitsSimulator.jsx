import React, { useState, useEffect } from 'react';
import { Ruler, Maximize2, Settings, Box } from 'lucide-react';

export default function CssUnitsSimulator() {
    const [parentWidth, setParentWidth] = useState(80); // percentage 20-100
    const [rootFontSize, setRootFontSize] = useState(16); // px 10-32
    
    const [boxUnit, setBoxUnit] = useState('%'); // %, px, vw, rem, em
    const [boxValue, setBoxValue] = useState(50);

    const [boxUnitFontSize, setBoxUnitFontSize] = useState('rem');
    const [boxFontSizeValue, setBoxFontSizeValue] = useState(1.5);
    
    // Limits
    useEffect(() => {
        if (boxUnit === '%') setBoxValue(Math.min(boxValue, 100));
        else if (boxUnit === 'vw') setBoxValue(Math.min(boxValue, 100));
        else if (boxUnit === 'px') setBoxValue(Math.min(Math.max(boxValue, 50), 400));
        else if (boxUnit === 'rem' || boxUnit === 'em') setBoxValue(Math.min(Math.max(boxValue, 1), 20));
    }, [boxUnit]);

    const getBoxWidthString = () => {
        return `${boxValue}${boxUnit}`;
    };

    const getBoxFontString = () => {
        return `${boxFontSizeValue}${boxUnitFontSize}`;
    };

    return (
        <div className="my-10 bg-[#0d1117] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl" style={{ fontSize: `${rootFontSize}px` }}>
            {/* Header */}
            <div className="bg-[#161b22] px-6 py-4 border-b border-gray-800 flex items-center justify-between" style={{ fontSize: '16px' }}>
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-500/20 text-indigo-400 rounded-lg">
                        <Ruler size={20} />
                    </div>
                    <h3 className="text-white font-bold text-lg">Interactive Units Simulator</h3>
                </div>
            </div>

            <div className="grid md:grid-cols-5 gap-0" style={{ fontSize: '16px' }}>
                {/* Controls Area */}
                <div className="p-6 md:p-8 md:border-r border-gray-800 md:col-span-2 flex flex-col justify-start bg-gradient-to-b from-[#161b22]/50 to-transparent">
                    <div className="space-y-6">
                        
                        {/* Parent Controls */}
                        <div className="mb-4">
                            <h4 className="text-indigo-400 font-bold flex items-center gap-2 mb-4 border-b border-gray-800 pb-2">
                                <Maximize2 size={16} /> Environment Controls
                            </h4>
                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <div className="flex justify-between text-xs font-bold font-mono">
                                        <span className="text-gray-400">Parent Container Width</span>
                                        <span className="text-gray-300">{parentWidth}%</span>
                                    </div>
                                    <input type="range" min="30" max="100" value={parentWidth} onChange={(e) => setParentWidth(parseInt(e.target.value))} className="w-full accent-indigo-500 h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer" />
                                </div>
                                <div className="space-y-1">
                                    <div className="flex justify-between text-xs font-bold font-mono">
                                        <span className="text-gray-400">Root HTML Font Size</span>
                                        <span className="text-gray-300">{rootFontSize}px</span>
                                    </div>
                                    <input type="range" min="10" max="32" step="1" value={rootFontSize} onChange={(e) => setRootFontSize(parseInt(e.target.value))} className="w-full accent-indigo-500 h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer" />
                                    <p className="text-[10px] text-gray-500 leading-tight pt-1">Changes 1rem value globally.</p>
                                </div>
                            </div>
                        </div>

                        {/* Element Controls */}
                        <div className="mb-4">
                            <h4 className="text-sky-400 font-bold flex items-center gap-2 mb-4 border-b border-gray-800 pb-2">
                                <Box size={16} /> Target Element Controls
                            </h4>
                            
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <span className="text-xs font-bold text-gray-400 font-mono">Element Width Unit</span>
                                    <div className="flex bg-[#0d1117] rounded-lg p-1 border border-gray-800 flex-wrap gap-1">
                                        {['%', 'px', 'vw', 'rem', 'em'].map(unit => (
                                            <button 
                                                key={unit}
                                                onClick={() => { setBoxUnit(unit); setBoxValue(unit === 'px' ? 200 : unit === '%' || unit === 'vw' ? 50 : 10); }}
                                                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors flex-1 ${boxUnit === unit ? 'bg-sky-500 text-white shadow-sm' : 'text-gray-500 hover:text-white'}`}
                                            >{unit}</button>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-3 pt-2">
                                        <input type="range" min={boxUnit === 'px' ? 50 : boxUnit === 'rem' || boxUnit === 'em' ? 1 : 10} max={boxUnit === 'px' ? 400 : boxUnit === 'rem' || boxUnit === 'em' ? 30 : 100} step={boxUnit === 'px' ? 10 : boxUnit === 'rem' || boxUnit === 'em' ? 0.5 : 5} value={boxValue} onChange={(e) => setBoxValue(parseFloat(e.target.value))} className="flex-1 accent-sky-500 h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer" />
                                        <span className="text-xs font-mono text-white bg-gray-800 px-2 py-1 rounded w-16 text-center">{boxValue}{boxUnit}</span>
                                    </div>
                                </div>

                                <div className="space-y-2 pt-2">
                                    <span className="text-xs font-bold text-gray-400 font-mono">Font Size Unit</span>
                                    <div className="flex bg-[#0d1117] rounded-lg p-1 border border-gray-800 gap-1">
                                        {['rem', 'em', 'px'].map(unit => (
                                            <button 
                                                key={unit}
                                                onClick={() => { setBoxUnitFontSize(unit); setBoxFontSizeValue(unit === 'px' ? 24 : 1.5); }}
                                                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors flex-1 ${boxUnitFontSize === unit ? 'bg-purple-500 text-white shadow-sm' : 'text-gray-500 hover:text-white'}`}
                                            >{unit}</button>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-3 pt-2">
                                        <input type="range" min={boxUnitFontSize === 'px' ? 12 : 0.5} max={boxUnitFontSize === 'px' ? 48 : 4} step={boxUnitFontSize === 'px' ? 1 : 0.1} value={boxFontSizeValue} onChange={(e) => setBoxFontSizeValue(parseFloat(e.target.value))} className="flex-1 accent-purple-500 h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer" />
                                        <span className="text-xs font-mono text-white bg-gray-800 px-2 py-1 rounded w-16 text-center">{boxFontSizeValue}{boxUnitFontSize}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Preview Area */}
                <div className="p-4 md:p-8 flex items-center justify-center bg-[#0d1117] relative md:col-span-3 min-h-[350px] overflow-hidden">
                    {/* Visual Grid Background */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '1rem 1rem' }}></div>
                    
                    {/* Parent Container (simulating the viewport/wrapper constraint) */}
                    <div 
                        style={{ width: `${parentWidth}%` }}
                        className="transition-all duration-300 h-full border border-indigo-500/50 rounded-xl bg-indigo-900/10 flex items-center justify-center relative p-4 backdrop-blur-sm"
                    >
                        {/* Parent Label indicator */}
                        <div className="absolute top-2 left-2 text-[10px] font-mono text-indigo-400 tracking-widest font-bold bg-indigo-950 px-2 py-1 rounded">
                            PARENT_NODE ({parentWidth}%)
                        </div>

                        {/* The Target Element */}
                        <div 
                            className="bg-sky-500/20 border-2 border-sky-400 flex flex-col items-center justify-center rounded-lg shadow-xl overflow-hidden relative transition-all duration-300"
                            style={{ 
                                width: getBoxWidthString(),
                                height: "200px",
                                fontSize: getBoxFontString()
                            }}
                        >
                            <span className="font-bold text-sky-100 whitespace-nowrap px-4 drop-shadow text-center">
                                Resize Me!
                            </span>
                            <div className="absolute bottom-2 left-0 right-0 text-center font-mono opacity-60 text-sky-200" style={{ fontSize: '10px' }}>
                                W: {getBoxWidthString()}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
            <div className="bg-[#161b22] px-6 py-3 border-t border-gray-800" style={{ fontSize: '14px' }}>
                <code className="text-gray-400 font-mono">
                    <span className="text-purple-400">.target-element</span> {'{'} 
                    <span className="text-sky-300 ml-4">width:</span> <span className="text-white">{getBoxWidthString()};</span> 
                    <span className="text-sky-300 ml-4">font-size:</span> <span className="text-white">{getBoxFontString()};</span> 
                    {'}'}
                </code>
            </div>
        </div>
    );
}
