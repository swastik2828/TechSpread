import React, { useState } from 'react';
import { Sliders, Plus, Minus } from 'lucide-react';

export default function CssFlexboxContainerSimulator() {
    const [direction, setDirection] = useState('row');
    const [wrap, setWrap] = useState('nowrap');
    const [justify, setJustify] = useState('flex-start');
    const [alignItems, setAlignItems] = useState('stretch');
    const [alignContent, setAlignContent] = useState('stretch');
    const [gap, setGap] = useState('16px');
    const [itemCount, setItemCount] = useState(5);

    const handleReset = () => {
        setDirection('row');
        setWrap('nowrap');
        setJustify('flex-start');
        setAlignItems('stretch');
        setAlignContent('stretch');
        setGap('16px');
        setItemCount(5);
    };

    const addItem = () => setItemCount(prev => Math.min(prev + 1, 8));
    const removeItem = () => setItemCount(prev => Math.max(prev - 1, 2));

    const showAlignContent = wrap === 'wrap' || wrap === 'wrap-reverse';

    return (
        <div className="bg-[#0A0A0A] p-4 md:p-6 rounded-xl border border-gray-800 my-8 shadow-2xl font-sans">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <span className="bg-sky-500/20 text-sky-400 p-2 rounded-lg"><Sliders size={20} /></span>
                        2. Flex Container Playground
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">Configure parent container settings and view layout responses</p>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                    <button 
                        onClick={removeItem}
                        disabled={itemCount <= 2}
                        className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 text-xs bg-[#161b22] hover:bg-[#1f242c] text-white px-3 py-1.5 rounded-lg border border-gray-800 transition-colors disabled:opacity-40"
                    >
                        <Minus size={14} /> Item
                    </button>
                    <button 
                        onClick={addItem}
                        disabled={itemCount >= 8}
                        className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 text-xs bg-[#161b22] hover:bg-[#1f242c] text-white px-3 py-1.5 rounded-lg border border-gray-800 transition-colors disabled:opacity-40"
                    >
                        <Plus size={14} /> Item
                    </button>
                    <button 
                        onClick={handleReset}
                        className="flex-1 sm:flex-none text-xs bg-gray-800 hover:bg-gray-700 text-white px-3 py-1.5 rounded-lg transition-colors"
                    >
                        Reset
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Controls (Left) */}
                <div className="lg:col-span-5 space-y-4">
                    {/* flex-direction */}
                    <div className="bg-[#111] p-3 rounded-lg border border-gray-800">
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">flex-direction</label>
                            <span className="text-[10px] text-gray-500 font-mono">Main Axis</span>
                        </div>
                        <select
                            value={direction}
                            onChange={(e) => setDirection(e.target.value)}
                            className="w-full bg-[#1A1A1A] text-white border border-gray-750 rounded-md p-2 text-sm focus:outline-none focus:border-sky-500 transition-colors cursor-pointer"
                        >
                            <option value="row">row (default)</option>
                            <option value="row-reverse">row-reverse</option>
                            <option value="column">column</option>
                            <option value="column-reverse">column-reverse</option>
                        </select>
                    </div>

                    {/* flex-wrap */}
                    <div className="bg-[#111] p-3 rounded-lg border border-gray-800">
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">flex-wrap</label>
                            <span className="text-[10px] text-gray-500 font-mono">Multi-line support</span>
                        </div>
                        <select
                            value={wrap}
                            onChange={(e) => setWrap(e.target.value)}
                            className="w-full bg-[#1A1A1A] text-white border border-gray-750 rounded-md p-2 text-sm focus:outline-none focus:border-sky-500 transition-colors cursor-pointer"
                        >
                            <option value="nowrap">nowrap (default)</option>
                            <option value="wrap">wrap</option>
                            <option value="wrap-reverse">wrap-reverse</option>
                        </select>
                    </div>

                    {/* justify-content */}
                    <div className="bg-[#111] p-3 rounded-lg border border-gray-800">
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">justify-content</label>
                            <span className="text-[10px] text-sky-400 font-mono">Align Main Axis</span>
                        </div>
                        <select
                            value={justify}
                            onChange={(e) => setJustify(e.target.value)}
                            className="w-full bg-[#1A1A1A] text-white border border-gray-750 rounded-md p-2 text-sm focus:outline-none focus:border-sky-500 transition-colors cursor-pointer"
                        >
                            <option value="flex-start">flex-start (default)</option>
                            <option value="flex-end">flex-end</option>
                            <option value="center">center</option>
                            <option value="space-between">space-between</option>
                            <option value="space-around">space-around</option>
                            <option value="space-evenly">space-evenly</option>
                        </select>
                    </div>

                    {/* align-items */}
                    <div className="bg-[#111] p-3 rounded-lg border border-gray-800">
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">align-items</label>
                            <span className="text-[10px] text-pink-400 font-mono">Align Cross Axis</span>
                        </div>
                        <select
                            value={alignItems}
                            onChange={(e) => setAlignItems(e.target.value)}
                            className="w-full bg-[#1A1A1A] text-white border border-gray-750 rounded-md p-2 text-sm focus:outline-none focus:border-sky-500 transition-colors cursor-pointer"
                        >
                            <option value="stretch">stretch (default)</option>
                            <option value="flex-start">flex-start</option>
                            <option value="flex-end">flex-end</option>
                            <option value="center">center</option>
                            <option value="baseline">baseline</option>
                        </select>
                    </div>

                    {/* align-content */}
                    <div className={`bg-[#111] p-3 rounded-lg border transition-all duration-300 ${showAlignContent ? 'border-gray-800 opacity-100' : 'border-gray-900 opacity-40 select-none'}`}>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">align-content</label>
                            <span className="text-[10px] text-purple-400 font-mono">Row Alignment</span>
                        </div>
                        <select
                            value={alignContent}
                            onChange={(e) => setAlignContent(e.target.value)}
                            disabled={!showAlignContent}
                            className="w-full bg-[#1A1A1A] text-white border border-gray-750 rounded-md p-2 text-sm focus:outline-none focus:border-sky-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <option value="stretch">stretch (default)</option>
                            <option value="flex-start">flex-start</option>
                            <option value="flex-end">flex-end</option>
                            <option value="center">center</option>
                            <option value="space-between">space-between</option>
                            <option value="space-around">space-around</option>
                        </select>
                        {!showAlignContent && (
                            <span className="text-[10px] text-yellow-500/80 mt-1 block">
                                Requires <code>flex-wrap: wrap</code> or <code>wrap-reverse</code> to activate.
                            </span>
                        )}
                    </div>

                    {/* gap */}
                    <div className="bg-[#111] p-3 rounded-lg border border-gray-800">
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">gap</label>
                            <span className="text-[10px] text-gray-500 font-mono">Gutters</span>
                        </div>
                        <select
                            value={gap}
                            onChange={(e) => setGap(e.target.value)}
                            className="w-full bg-[#1A1A1A] text-white border border-gray-750 rounded-md p-2 text-sm focus:outline-none focus:border-sky-500 transition-colors cursor-pointer"
                        >
                            <option value="0px">0px</option>
                            <option value="8px">8px (0.5rem)</option>
                            <option value="16px">16px (1.0rem)</option>
                            <option value="24px">24px (1.5rem)</option>
                        </select>
                    </div>

                    {/* Generated CSS */}
                    <div className="bg-[#0d1117] p-4 rounded-lg border border-gray-800 font-mono text-xs sm:text-sm shadow-inner">
                        <span className="text-pink-400">.container</span> {'{'}
                        <div className="pl-4 text-sky-300">
                            display: <span className="text-yellow-300">flex</span>;
                        </div>
                        {direction !== 'row' && (
                            <div className="pl-4 text-sky-300">flex-direction: <span className="text-yellow-300">{direction}</span>;</div>
                        )}
                        {wrap !== 'nowrap' && (
                            <div className="pl-4 text-sky-300">flex-wrap: <span className="text-yellow-300">{wrap}</span>;</div>
                        )}
                        {justify !== 'flex-start' && (
                            <div className="pl-4 text-sky-300">justify-content: <span className="text-yellow-300">{justify}</span>;</div>
                        )}
                        {alignItems !== 'stretch' && (
                            <div className="pl-4 text-sky-300">align-items: <span className="text-yellow-300">{alignItems}</span>;</div>
                        )}
                        {showAlignContent && alignContent !== 'stretch' && (
                            <div className="pl-4 text-sky-300">align-content: <span className="text-yellow-300">{alignContent}</span>;</div>
                        )}
                        {gap !== '0px' && (
                            <div className="pl-4 text-sky-300">gap: <span className="text-yellow-300">{gap}</span>;</div>
                        )}
                        {'}'}
                    </div>
                </div>

                {/* Preview Panel (Right) */}
                <div className="lg:col-span-7 bg-[#161b22]/20 border border-gray-800 rounded-xl overflow-hidden min-h-[450px] flex flex-col">
                    <div className="bg-[#161b22]/80 px-4 py-2.5 text-xs text-gray-400 border-b border-gray-800 flex justify-between items-center font-mono select-none">
                        <span>Live Sandbox Layout</span>
                        <div className="flex gap-2">
                            <span className="text-sky-400">Main: {direction.includes('row') ? 'Horizontal' : 'Vertical'}</span>
                            <span className="text-gray-600">|</span>
                            <span className="text-pink-400">Cross: {direction.includes('row') ? 'Vertical' : 'Horizontal'}</span>
                        </div>
                    </div>

                    <div className="flex-1 p-6 relative flex items-center justify-center overflow-auto bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:16px_16px]">
                        {/* Interactive Flex Container */}
                        <div
                            className="bg-[#0f1115] border-2 border-gray-800 rounded-xl transition-all duration-350 shadow-2xl relative flex"
                            style={{
                                display: 'flex',
                                flexDirection: direction,
                                flexWrap: wrap,
                                justifyContent: justify,
                                alignItems: alignItems,
                                alignContent: alignContent,
                                gap: gap,
                                width: '100%',
                                height: '100%',
                                minHeight: '380px',
                                padding: '16px',
                                overflow: 'hidden'
                            }}
                        >
                            {Array.from({ length: itemCount }).map((_, i) => {
                                // Design boxes with different dimensions and fonts to highlight layout alignment
                                const number = i + 1;
                                const heights = ['60px', '90px', '50px', '75px', '65px', '85px', '55px', '70px'];
                                const fontSizes = ['14px', '22px', '12px', '18px', '15px', '20px', '13px', '17px'];
                                const paddings = ['12px', '16px', '8px', '14px', '10px', '15px', '9px', '13px'];

                                return (
                                    <div
                                        key={number}
                                        className="bg-gradient-to-br from-sky-500/10 to-cyan-500/20 border border-sky-400/40 text-white rounded-lg flex items-center justify-center font-bold shadow-[0_4px_20px_rgba(14,165,233,0.15)] transition-all duration-300 relative select-none shrink-0"
                                        style={{
                                            height: direction.includes('column') ? 'auto' : alignItems === 'stretch' ? 'auto' : heights[i % heights.length],
                                            width: direction.includes('column') ? '100%' : '80px',
                                            minHeight: direction.includes('column') ? '45px' : undefined,
                                            padding: paddings[i % paddings.length]
                                        }}
                                    >
                                        <div className="flex flex-col items-center justify-center">
                                            <span 
                                                className="text-cyan-300"
                                                style={{ fontSize: fontSizes[i % fontSizes.length], lineHeight: 1 }}
                                            >
                                                {number}
                                            </span>
                                            {alignItems === 'baseline' && (
                                                <span className="text-[7px] text-gray-500 uppercase tracking-widest mt-0.5">
                                                    Base
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
