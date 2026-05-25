import React, { useState } from 'react';
import { ToggleLeft } from 'lucide-react';

export default function CssFlexboxItemSimulator() {
    const [selectedItem, setSelectedItem] = useState(1);
    
    // Individual item states
    const [item1, setItem1] = useState({ text: 'Hi', grow: 0, shrink: 1, basis: 'auto', alignSelf: 'auto', order: 0 });
    const [item2, setItem2] = useState({ text: 'Hello World', grow: 0, shrink: 1, basis: 'auto', alignSelf: 'auto', order: 0 });
    const [item3, setItem3] = useState({ text: 'A', grow: 0, shrink: 1, basis: 'auto', alignSelf: 'auto', order: 0 });

    const handleReset = () => {
        setSelectedItem(1);
        setItem1({ text: 'Hi', grow: 0, shrink: 1, basis: 'auto', alignSelf: 'auto', order: 0 });
        setItem2({ text: 'Hello World', grow: 0, shrink: 1, basis: 'auto', alignSelf: 'auto', order: 0 });
        setItem3({ text: 'A', grow: 0, shrink: 1, basis: 'auto', alignSelf: 'auto', order: 0 });
    };

    const applyEqualSizing = () => {
        // Set all to flex: 1 (grow: 1, shrink: 1, basis: 0)
        setItem1(prev => ({ ...prev, grow: 1, shrink: 1, basis: '0%' }));
        setItem2(prev => ({ ...prev, grow: 1, shrink: 1, basis: '0%' }));
        setItem3(prev => ({ ...prev, grow: 1, shrink: 1, basis: '0%' }));
    };

    const getSelectedItemState = () => {
        if (selectedItem === 1) return item1;
        if (selectedItem === 2) return item2;
        return item3;
    };

    const updateSelectedItemState = (field, value) => {
        const updater = (prev) => ({ ...prev, [field]: value });
        if (selectedItem === 1) setItem1(updater);
        else if (selectedItem === 2) setItem2(updater);
        else setItem3(updater);
    };

    const currentItem = getSelectedItemState();

    return (
        <div className="bg-[#0A0A0A] p-4 md:p-6 rounded-xl border border-gray-800 my-8 shadow-2xl font-sans">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <span className="bg-sky-500/20 text-sky-400 p-2 rounded-lg"><ToggleLeft size={20} /></span>
                        3. Flex Item Customizer
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">Select an item inside the container to customize its specific properties</p>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                    <button
                        onClick={applyEqualSizing}
                        className="flex-1 sm:flex-none text-xs bg-sky-900/30 border border-sky-500/30 hover:bg-sky-900/50 hover:border-sky-400 text-sky-300 px-3 py-1.5 rounded-lg transition-all"
                    >
                        Apply Equal Sizing (flex: 1)
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
                    {/* Item Selector Tabs */}
                    <div className="bg-[#111] p-3 rounded-lg border border-gray-800">
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                            Select Item to Edit
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                            {[1, 2, 3].map((num) => (
                                <button
                                    key={num}
                                    onClick={() => setSelectedItem(num)}
                                    className={`py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg border transition-all duration-200 ${
                                        selectedItem === num
                                            ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white border-sky-400 shadow-md shadow-sky-500/20'
                                            : 'bg-[#161b22] text-gray-400 border-gray-850 hover:text-white hover:bg-[#1f242c]'
                                    }`}
                                >
                                    Box {num}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Text content changer */}
                    <div className="bg-[#111] p-3 rounded-lg border border-gray-800">
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Item Content Text</label>
                        <input
                            type="text"
                            value={currentItem.text}
                            onChange={(e) => updateSelectedItemState('text', e.target.value)}
                            placeholder="Enter box content..."
                            className="w-full bg-[#1A1A1A] text-white border border-gray-750 rounded-md p-2 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                        />
                    </div>

                    {/* flex-grow */}
                    <div className="bg-[#111] p-3 rounded-lg border border-gray-800">
                        <div className="flex justify-between items-center mb-1">
                            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">flex-grow</label>
                            <span className="text-[10px] text-sky-400 font-bold font-mono">Share of extra space</span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="3"
                            step="1"
                            value={currentItem.grow}
                            onChange={(e) => updateSelectedItemState('grow', parseInt(e.target.value))}
                            className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
                        />
                        <div className="flex justify-between text-[10px] text-gray-500 font-mono mt-1 px-1">
                            <span>0 (default)</span>
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                        </div>
                    </div>

                    {/* flex-shrink */}
                    <div className="bg-[#111] p-3 rounded-lg border border-gray-800">
                        <div className="flex justify-between items-center mb-1">
                            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">flex-shrink</label>
                            <span className="text-[10px] text-pink-400 font-bold font-mono">Shrinkage rate</span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="3"
                            step="1"
                            value={currentItem.shrink}
                            onChange={(e) => updateSelectedItemState('shrink', parseInt(e.target.value))}
                            className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-pink-500"
                        />
                        <div className="flex justify-between text-[10px] text-gray-500 font-mono mt-1 px-1">
                            <span>0 (never)</span>
                            <span>1 (default)</span>
                            <span>2</span>
                            <span>3</span>
                        </div>
                    </div>

                    {/* flex-basis */}
                    <div className="bg-[#111] p-3 rounded-lg border border-gray-800">
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">flex-basis</label>
                            <span className="text-[10px] text-gray-550 font-mono">Base width</span>
                        </div>
                        <select
                            value={currentItem.basis}
                            onChange={(e) => updateSelectedItemState('basis', e.target.value)}
                            className="w-full bg-[#1A1A1A] text-white border border-gray-750 rounded-md p-2 text-sm focus:outline-none focus:border-sky-500 transition-colors cursor-pointer"
                        >
                            <option value="auto">auto (default)</option>
                            <option value="0%">0% (ignore content size)</option>
                            <option value="150px">150px (fixed pixel width)</option>
                            <option value="35%">35% (percentage of parent)</option>
                        </select>
                    </div>

                    {/* align-self */}
                    <div className="bg-[#111] p-3 rounded-lg border border-gray-800">
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">align-self</label>
                            <span className="text-[10px] text-purple-400 font-mono">Individual alignment</span>
                        </div>
                        <select
                            value={currentItem.alignSelf}
                            onChange={(e) => updateSelectedItemState('alignSelf', e.target.value)}
                            className="w-full bg-[#1A1A1A] text-white border border-gray-750 rounded-md p-2 text-sm focus:outline-none focus:border-sky-500 transition-colors cursor-pointer"
                        >
                            <option value="auto">auto (default)</option>
                            <option value="flex-start">flex-start</option>
                            <option value="flex-end">flex-end</option>
                            <option value="center">center</option>
                            <option value="stretch">stretch</option>
                        </select>
                    </div>

                    {/* order */}
                    <div className="bg-[#111] p-3 rounded-lg border border-gray-800">
                        <div className="flex justify-between items-center mb-1">
                            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">order</label>
                            <span className="text-[10px] text-gray-550 font-mono">Visual sequencing</span>
                        </div>
                        <input
                            type="range"
                            min="-2"
                            max="2"
                            step="1"
                            value={currentItem.order}
                            onChange={(e) => updateSelectedItemState('order', parseInt(e.target.value))}
                            className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                        />
                        <div className="flex justify-between text-[10px] text-gray-500 font-mono mt-1 px-1">
                            <span>-2</span>
                            <span>-1</span>
                            <span>0 (default)</span>
                            <span>1</span>
                            <span>2</span>
                        </div>
                    </div>
                </div>

                {/* Preview Window (Right) */}
                <div className="lg:col-span-7 bg-[#161b22]/20 border border-gray-800 rounded-xl overflow-hidden min-h-[450px] flex flex-col justify-between">
                    {/* Header */}
                    <div className="bg-[#161b22]/80 px-4 py-2.5 text-xs text-gray-400 border-b border-gray-800 flex justify-between items-center font-mono select-none">
                        <span>Items Inspector Sandbox</span>
                        <span className="text-sky-400 font-bold">Editing: Box {selectedItem}</span>
                    </div>

                    {/* Preview Box Container */}
                    <div className="flex-1 p-6 flex flex-col justify-center bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:16px_16px]">
                        <div
                            className="border border-gray-800 bg-[#0f1115] p-6 rounded-xl flex gap-4 w-full"
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'nowrap',
                                justifyContent: 'flex-start',
                                alignItems: 'stretch',
                                minHeight: '160px'
                            }}
                        >
                            {/* Box 1 */}
                            <div
                                onClick={() => setSelectedItem(1)}
                                className={`border rounded-lg flex items-center justify-center font-bold text-sm shadow-md transition-all duration-300 relative select-none cursor-pointer p-4 overflow-hidden text-center min-w-[30px] ${
                                    selectedItem === 1
                                        ? 'bg-sky-500/20 border-sky-400 text-white ring-2 ring-sky-500/30'
                                        : 'bg-gray-800/40 border-gray-700 text-gray-400 hover:border-gray-650 hover:bg-gray-800/60'
                                }`}
                                style={{
                                    flexGrow: item1.grow,
                                    flexShrink: item1.shrink,
                                    flexBasis: item1.basis,
                                    alignSelf: item1.alignSelf === 'auto' ? undefined : item1.alignSelf,
                                    order: item1.order
                                }}
                            >
                                <div className="flex flex-col items-center">
                                    <span className="text-white text-base truncate max-w-full font-sans">{item1.text}</span>
                                    <span className="text-[9px] text-gray-400 font-mono mt-1">Box 1</span>
                                    {item1.grow > 0 && <span className="text-[8px] text-sky-400 font-mono">grow: {item1.grow}</span>}
                                    {item1.basis !== 'auto' && <span className="text-[8px] text-yellow-500 font-mono">basis: {item1.basis}</span>}
                                </div>
                            </div>

                            {/* Box 2 */}
                            <div
                                onClick={() => setSelectedItem(2)}
                                className={`border rounded-lg flex items-center justify-center font-bold text-sm shadow-md transition-all duration-300 relative select-none cursor-pointer p-4 overflow-hidden text-center min-w-[30px] ${
                                    selectedItem === 2
                                        ? 'bg-sky-500/20 border-sky-400 text-white ring-2 ring-sky-500/30'
                                        : 'bg-gray-800/40 border-gray-700 text-gray-400 hover:border-gray-650 hover:bg-gray-800/60'
                                }`}
                                style={{
                                    flexGrow: item2.grow,
                                    flexShrink: item2.shrink,
                                    flexBasis: item2.basis,
                                    alignSelf: item2.alignSelf === 'auto' ? undefined : item2.alignSelf,
                                    order: item2.order
                                }}
                            >
                                <div className="flex flex-col items-center">
                                    <span className="text-white text-base truncate max-w-full font-sans">{item2.text}</span>
                                    <span className="text-[9px] text-gray-400 font-mono mt-1">Box 2</span>
                                    {item2.grow > 0 && <span className="text-[8px] text-sky-400 font-mono">grow: {item2.grow}</span>}
                                    {item2.basis !== 'auto' && <span className="text-[8px] text-yellow-500 font-mono">basis: {item2.basis}</span>}
                                </div>
                            </div>

                            {/* Box 3 */}
                            <div
                                onClick={() => setSelectedItem(3)}
                                className={`border rounded-lg flex items-center justify-center font-bold text-sm shadow-md transition-all duration-300 relative select-none cursor-pointer p-4 overflow-hidden text-center min-w-[30px] ${
                                    selectedItem === 3
                                        ? 'bg-sky-500/20 border-sky-400 text-white ring-2 ring-sky-500/30'
                                        : 'bg-gray-800/40 border-gray-700 text-gray-400 hover:border-gray-650 hover:bg-gray-800/60'
                                }`}
                                style={{
                                    flexGrow: item3.grow,
                                    flexShrink: item3.shrink,
                                    flexBasis: item3.basis,
                                    alignSelf: item3.alignSelf === 'auto' ? undefined : item3.alignSelf,
                                    order: item3.order
                                }}
                            >
                                <div className="flex flex-col items-center">
                                    <span className="text-white text-base truncate max-w-full font-sans">{item3.text}</span>
                                    <span className="text-[9px] text-gray-400 font-mono mt-1">Box 3</span>
                                    {item3.grow > 0 && <span className="text-[8px] text-sky-400 font-mono">grow: {item3.grow}</span>}
                                    {item3.basis !== 'auto' && <span className="text-[8px] text-yellow-500 font-mono">basis: {item3.basis}</span>}
                                </div>
                            </div>
                        </div>

                        {/* Educational note on basis auto vs 0% */}
                        {item1.grow > 0 && item2.grow > 0 && item3.grow > 0 && (
                            <div className="mt-4 p-3 bg-indigo-950/20 border border-indigo-500/10 rounded-lg text-xs leading-relaxed text-indigo-300">
                                {item1.basis === 'auto' || item2.basis === 'auto' || item3.basis === 'auto' ? (
                                    <span>
                                        💡 <strong>Why are they not equal width?</strong> Because <code>flex-basis</code> is <code>auto</code>! Ratios apply <em>only</em> to extra space leftover <em>after</em> accounting for intrinsic text size. Box 2 ("Hello World") takes up more starting space, making it visually wider!
                                    </span>
                                ) : (
                                    <span>
                                        🎉 <strong>Perfect columns!</strong> Because <code>flex-basis</code> is set to <code>0%</code>, the container completely ignores intrinsic text sizes, starts everyone at 0px, and splits 100% of space using your <code>flex-grow</code> proportions.
                                    </span>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Generated CSS (Footer) */}
                    <div className="bg-[#0d1117] p-4 border-t border-gray-800 font-mono text-xs md:text-sm">
                        <span className="text-pink-400">.item-{selectedItem}</span> {'{'}
                        <div className="pl-4 text-sky-300">
                            flex-grow: <span className="text-yellow-300">{currentItem.grow}</span>;
                        </div>
                        <div className="pl-4 text-sky-300">
                            flex-shrink: <span className="text-yellow-300">{currentItem.shrink}</span>;
                        </div>
                        <div className="pl-4 text-sky-300">
                            flex-basis: <span className="text-yellow-300">{currentItem.basis}</span>;
                        </div>
                        {currentItem.alignSelf !== 'auto' && (
                            <div className="pl-4 text-sky-300">align-self: <span className="text-yellow-300">{currentItem.alignSelf}</span>;</div>
                        )}
                        {currentItem.order !== 0 && (
                            <div className="pl-4 text-sky-300">order: <span className="text-yellow-300">{currentItem.order}</span>;</div>
                        )}
                        {'}'}
                    </div>
                </div>
            </div>
        </div>
    );
}
