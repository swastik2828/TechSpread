import React, { useState } from 'react';
import { LayoutGrid, ArrowRight, ArrowDown } from 'lucide-react';

export default function CssFlexboxIntroSimulator() {
    const [displayType, setDisplayType] = useState('flex');

    const defaults = [
        { name: 'Direction', property: 'flex-direction', value: 'row', desc: 'Items line up horizontally' },
        { name: 'Wrapping', property: 'flex-wrap', value: 'nowrap', desc: 'Items squeeze onto a single line' },
        { name: 'Main Axis Alignment', property: 'justify-content', value: 'flex-start', desc: 'Items align to the start' },
        { name: 'Cross Axis Alignment', property: 'align-items', value: 'stretch', desc: 'Items stretch to fill height' },
        { name: 'Item Growth', property: 'flex-grow', value: '0', desc: 'Items do not grow to fill space' },
        { name: 'Item Shrinkage', property: 'flex-shrink', value: '1', desc: 'Items will shrink to fit container' }
    ];

    return (
        <div className="bg-[#0A0A0A] p-4 md:p-6 rounded-xl border border-gray-800 my-8 shadow-2xl font-sans">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="bg-sky-500/20 text-sky-400 p-2 rounded-lg"><LayoutGrid size={20} /></span>
                    1. Display & Activation Simulator
                </h3>
                <span className="text-xs font-semibold text-gray-500 bg-gray-900 border border-gray-800 px-3 py-1.5 rounded-lg">
                    Interactive Preview
                </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Controls */}
                <div className="lg:col-span-5 space-y-6">
                    <div className="bg-[#111] p-4 rounded-lg border border-gray-800">
                        <label className="block text-sm font-medium text-gray-400 mb-3">
                            Set Container Display Property
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                            {['block', 'flex', 'inline-flex'].map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setDisplayType(type)}
                                    className={`py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg border transition-all duration-200 ${
                                        displayType === type
                                            ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white border-sky-400 shadow-md shadow-sky-500/20'
                                            : 'bg-[#161b22] text-gray-400 border-gray-800 hover:text-white hover:bg-[#1f242c]'
                                    }`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                        <div className="mt-4 text-xs sm:text-sm text-sky-300 bg-sky-950/20 p-3 rounded-lg border border-sky-500/10 leading-relaxed">
                            {displayType === 'block' && (
                                <span>
                                    <strong>Block behavior:</strong> Container spans 100% width. Children are treated as standard block elements and stack vertically, filling the width.
                                </span>
                            )}
                            {displayType === 'flex' && (
                                <span>
                                    <strong>Flex behavior:</strong> Container spans 100% width. Flexbox is activated, turning direct children into <em>flex items</em> lined up horizontally by default.
                                </span>
                            )}
                            {displayType === 'inline-flex' && (
                                <span>
                                    <strong>Inline-Flex behavior:</strong> Container shrinks to fit only its content width. Flexbox rules apply internally for the children just like <code>display: flex</code>.
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Default Actions Checklist */}
                    <div className="bg-[#111] p-4 rounded-lg border border-gray-800 space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 border-b border-gray-850 pb-2">
                            Active Flex Defaults
                        </h4>
                        <div className="space-y-2">
                            {defaults.map((d, idx) => (
                                <div
                                    key={idx}
                                    className={`flex items-start justify-between text-xs p-2 rounded transition-all duration-300 ${
                                        displayType !== 'block'
                                            ? 'bg-[#161b22]/50 text-gray-300 border border-sky-500/5'
                                            : 'opacity-30 text-gray-500'
                                    }`}
                                >
                                    <div>
                                        <span className="font-semibold text-white block">{d.name}</span>
                                        <span className="text-[10px] text-gray-400">{d.desc}</span>
                                    </div>
                                    <code className="text-[10px] font-bold text-sky-400 bg-sky-950/40 border border-sky-500/20 px-1.5 py-0.5 rounded shrink-0">
                                        {displayType !== 'block' ? d.value : 'N/A'}
                                    </code>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Preview Window */}
                <div className="lg:col-span-7 bg-[#161b22]/20 border border-gray-800 rounded-xl overflow-hidden min-h-[300px] flex flex-col">
                    <div className="bg-[#161b22]/80 px-4 py-2 text-xs text-gray-400 border-b border-gray-800 flex justify-between items-center font-mono">
                        <span>Simulator Sandbox</span>
                        <span className="text-pink-400">
                            display: <span className="text-yellow-300">{displayType}</span>;
                        </span>
                    </div>

                    <div className="flex-1 p-6 flex flex-col justify-center items-center relative">
                        {/* Axes helper lines - only show if flex active */}
                        {displayType !== 'block' && (
                            <>
                                {/* Main Axis Arrow */}
                                <div className="absolute top-2 left-6 right-6 flex items-center gap-1 text-[10px] font-bold text-sky-400/70 uppercase tracking-widest font-mono">
                                    <span>Main Axis (row)</span>
                                    <div className="flex-1 h-[1px] bg-gradient-to-r from-sky-400/40 via-cyan-400/40 to-transparent relative">
                                        <ArrowRight size={10} className="absolute right-0 top-1/2 -translate-y-1/2 text-cyan-400/70" />
                                    </div>
                                </div>

                                {/* Cross Axis Arrow */}
                                <div className="absolute top-6 bottom-6 left-2 flex flex-col items-center gap-1 text-[10px] font-bold text-pink-500/70 uppercase tracking-widest font-mono select-none">
                                    <span className="origin-top-left -rotate-90 -translate-x-[4px] translate-y-[50px] whitespace-nowrap">
                                        Cross Axis
                                    </span>
                                    <div className="flex-1 w-[1px] bg-gradient-to-b from-pink-500/40 via-purple-500/40 to-transparent relative">
                                        <ArrowDown size={10} className="absolute bottom-0 left-1/2 -translate-x-1/2 text-purple-500/70" />
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Interactive Container */}
                        <div
                            className={`border-2 border-dashed border-gray-700 bg-gray-900/30 p-4 rounded-xl transition-all duration-500 ${
                                displayType === 'inline-flex' ? 'inline-flex' : displayType === 'flex' ? 'flex w-full' : 'block w-full'
                            }`}
                            style={{
                                minHeight: '140px',
                                gap: displayType !== 'block' ? '12px' : undefined
                            }}
                        >
                            <div className={`p-4 bg-gradient-to-br from-indigo-500/20 to-sky-500/20 border border-indigo-500/30 text-white rounded-lg flex items-center justify-center font-bold text-sm shadow-md transition-all duration-300 ${
                                displayType === 'block' ? 'mb-2 w-full' : ''
                            }`}>
                                Box A
                            </div>
                            <div className={`p-4 bg-gradient-to-br from-indigo-500/20 to-sky-500/20 border border-indigo-500/30 text-white rounded-lg flex items-center justify-center font-bold text-sm shadow-md transition-all duration-300 ${
                                displayType === 'block' ? 'mb-2 w-full' : ''
                            }`}>
                                Box B
                            </div>
                            <div className={`p-4 bg-gradient-to-br from-indigo-500/20 to-sky-500/20 border border-indigo-500/30 text-white rounded-lg flex items-center justify-center font-bold text-sm shadow-md transition-all duration-300 ${
                                displayType === 'block' ? 'w-full' : ''
                            }`}>
                                Box C
                            </div>
                        </div>

                        {/* Intrinsic Width Indicator for inline-flex */}
                        {displayType === 'inline-flex' && (
                            <div className="text-[10px] text-gray-500 font-mono mt-3 select-none">
                                ↑ Container shrinks to only fit content width ↑
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
