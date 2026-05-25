import React, { useState } from 'react';
import { Award, CheckCircle2, XCircle, RefreshCw } from 'lucide-react';

export default function CssFlexboxExercisesSimulator() {
    const [activeExercise, setActiveExercise] = useState('ex4'); // ex1 | ex2 | ex4 | ex6
    
    // ex1 state
    const [ex1Justify, setEx1Justify] = useState('flex-start');
    const [ex1Align, setEx1Align] = useState('stretch');
    const [ex1Status, setEx1Status] = useState('idle'); // idle | correct | wrong

    // ex2 state
    const [ex2Wrap, setEx2Wrap] = useState('nowrap');
    const [ex2Flex, setEx2Flex] = useState('none');
    const [ex2Status, setEx2Status] = useState('idle');

    // ex4 state
    const [ex4Display, setEx4Display] = useState('block');
    const [ex4Align, setEx4Align] = useState('flex-start');
    const [ex4Justify, setEx4Justify] = useState('flex-start');
    const [ex4Status, setEx4Status] = useState('idle');

    // ex6 state
    const [ex6Shrink, setEx6Shrink] = useState('1');
    const [ex6Grow, setEx6Grow] = useState('0');
    const [ex6Status, setEx6Status] = useState('idle');

    const checkSolution = () => {
        if (activeExercise === 'ex1') {
            if (ex1Justify === 'space-between' && ex1Align === 'center') {
                setEx1Status('correct');
            } else {
                setEx1Status('wrong');
            }
        } else if (activeExercise === 'ex2') {
            if (ex2Wrap === 'wrap' && ex2Flex === '1 1 280px') {
                setEx2Status('correct');
            } else {
                setEx2Status('wrong');
            }
        } else if (activeExercise === 'ex4') {
            if (ex4Display === 'flex' && ex4Align === 'center' && ex4Justify === 'center') {
                setEx4Status('correct');
            } else {
                setEx4Status('wrong');
            }
        } else if (activeExercise === 'ex6') {
            if (ex6Shrink === '0' && ex6Grow === '1') {
                setEx6Status('correct');
            } else {
                setEx6Status('wrong');
            }
        }
    };

    const handleReset = () => {
        if (activeExercise === 'ex1') {
            setEx1Justify('flex-start');
            setEx1Align('stretch');
            setEx1Status('idle');
        } else if (activeExercise === 'ex2') {
            setEx2Wrap('nowrap');
            setEx2Flex('none');
            setEx2Status('idle');
        } else if (activeExercise === 'ex4') {
            setEx4Display('block');
            setEx4Align('flex-start');
            setEx4Justify('flex-start');
            setEx4Status('idle');
        } else if (activeExercise === 'ex6') {
            setEx6Shrink('1');
            setEx6Grow('0');
            setEx6Status('idle');
        }
    };

    return (
        <div className="bg-[#0A0A0A] p-4 md:p-6 rounded-xl border border-gray-800 my-8 shadow-2xl font-sans">
            <div className="flex justify-between items-center border-b border-gray-850 pb-4 mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="bg-sky-500/20 text-sky-400 p-2 rounded-lg"><Award size={20} /></span>
                    Interactive Exercises Workbook
                </h3>
                <span className="text-xs font-semibold text-gray-500 bg-gray-900 border border-gray-800 px-3 py-1.5 rounded-lg">
                    Check Solutions Live
                </span>
            </div>

            {/* Exercise Tabs */}
            <div className="flex flex-wrap gap-1.5 mb-6">
                <button
                    onClick={() => setActiveExercise('ex4')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                        activeExercise === 'ex4' ? 'bg-sky-500/20 text-sky-400 border-sky-500/20 font-bold' : 'bg-[#111] text-gray-400 border-gray-850 hover:text-white'
                    }`}
                >
                    Ex 4 — Perfect Center
                </button>
                <button
                    onClick={() => setActiveExercise('ex1')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                        activeExercise === 'ex1' ? 'bg-sky-500/20 text-sky-400 border-sky-500/20 font-bold' : 'bg-[#111] text-gray-400 border-gray-850 hover:text-white'
                    }`}
                >
                    Ex 1 — Navigation Bar
                </button>
                <button
                    onClick={() => setActiveExercise('ex2')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                        activeExercise === 'ex2' ? 'bg-sky-500/20 text-sky-400 border-sky-500/20 font-bold' : 'bg-[#111] text-gray-400 border-gray-850 hover:text-white'
                    }`}
                >
                    Ex 2 — Card Row
                </button>
                <button
                    onClick={() => setActiveExercise('ex6')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                        activeExercise === 'ex6' ? 'bg-sky-500/20 text-sky-400 border-sky-500/20 font-bold' : 'bg-[#111] text-gray-400 border-gray-850 hover:text-white'
                    }`}
                >
                    Ex 6 — Media Object
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Control Panel (Left) */}
                <div className="lg:col-span-5 space-y-4">
                    {/* ex4 controls */}
                    {activeExercise === 'ex4' && (
                        <div className="space-y-4">
                            <div className="bg-[#111] p-3 rounded-lg border border-gray-800">
                                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">display</label>
                                <select
                                    value={ex4Display}
                                    onChange={(e) => { setEx4Display(e.target.value); setEx4Status('idle'); }}
                                    className="w-full bg-[#1A1A1A] text-white border border-gray-750 p-2 rounded text-sm focus:outline-none focus:border-sky-500"
                                >
                                    <option value="block">block</option>
                                    <option value="inline">inline</option>
                                    <option value="flex">flex</option>
                                </select>
                            </div>
                            <div className="bg-[#111] p-3 rounded-lg border border-gray-800">
                                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">align-items</label>
                                <select
                                    value={ex4Align}
                                    disabled={ex4Display !== 'flex'}
                                    onChange={(e) => { setEx4Align(e.target.value); setEx4Status('idle'); }}
                                    className="w-full bg-[#1A1A1A] text-white border border-gray-750 p-2 rounded text-sm focus:outline-none focus:border-sky-500 disabled:opacity-40"
                                >
                                    <option value="flex-start">flex-start</option>
                                    <option value="flex-end">flex-end</option>
                                    <option value="center">center</option>
                                    <option value="stretch">stretch</option>
                                </select>
                            </div>
                            <div className="bg-[#111] p-3 rounded-lg border border-gray-800">
                                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">justify-content</label>
                                <select
                                    value={ex4Justify}
                                    disabled={ex4Display !== 'flex'}
                                    onChange={(e) => { setEx4Justify(e.target.value); setEx4Status('idle'); }}
                                    className="w-full bg-[#1A1A1A] text-white border border-gray-750 p-2 rounded text-sm focus:outline-none focus:border-sky-500 disabled:opacity-40"
                                >
                                    <option value="flex-start">flex-start</option>
                                    <option value="flex-end">flex-end</option>
                                    <option value="center">center</option>
                                    <option value="space-between">space-between</option>
                                </select>
                            </div>
                        </div>
                    )}

                    {/* ex1 controls */}
                    {activeExercise === 'ex1' && (
                        <div className="space-y-4">
                            <div className="bg-[#111] p-3 rounded-lg border border-gray-800">
                                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">justify-content</label>
                                <select
                                    value={ex1Justify}
                                    onChange={(e) => { setEx1Justify(e.target.value); setEx1Status('idle'); }}
                                    className="w-full bg-[#1A1A1A] text-white border border-gray-750 p-2 rounded text-sm focus:outline-none focus:border-sky-500"
                                >
                                    <option value="flex-start">flex-start</option>
                                    <option value="center">center</option>
                                    <option value="space-around">space-around</option>
                                    <option value="space-between">space-between</option>
                                </select>
                            </div>
                            <div className="bg-[#111] p-3 rounded-lg border border-gray-800">
                                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">align-items</label>
                                <select
                                    value={ex1Align}
                                    onChange={(e) => { setEx1Align(e.target.value); setEx1Status('idle'); }}
                                    className="w-full bg-[#1A1A1A] text-white border border-gray-750 p-2 rounded text-sm focus:outline-none focus:border-sky-500"
                                >
                                    <option value="stretch">stretch</option>
                                    <option value="flex-start">flex-start</option>
                                    <option value="flex-end">flex-end</option>
                                    <option value="center">center</option>
                                </select>
                            </div>
                        </div>
                    )}

                    {/* ex2 controls */}
                    {activeExercise === 'ex2' && (
                        <div className="space-y-4">
                            <div className="bg-[#111] p-3 rounded-lg border border-gray-800">
                                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">flex-wrap</label>
                                <select
                                    value={ex2Wrap}
                                    onChange={(e) => { setEx2Wrap(e.target.value); setEx2Status('idle'); }}
                                    className="w-full bg-[#1A1A1A] text-white border border-gray-750 p-2 rounded text-sm focus:outline-none focus:border-sky-500"
                                >
                                    <option value="nowrap">nowrap</option>
                                    <option value="wrap">wrap</option>
                                </select>
                            </div>
                            <div className="bg-[#111] p-3 rounded-lg border border-gray-800">
                                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400">flex on cards</label>
                                <span className="text-[9px] text-gray-500 block mb-1">grow shrink basis</span>
                                <select
                                    value={ex2Flex}
                                    onChange={(e) => { setEx2Flex(e.target.value); setEx2Status('idle'); }}
                                    className="w-full bg-[#1A1A1A] text-white border border-gray-750 p-2 rounded text-sm focus:outline-none focus:border-sky-500"
                                >
                                    <option value="none">none</option>
                                    <option value="1 1 auto">1 1 auto</option>
                                    <option value="1 1 280px">1 1 280px</option>
                                    <option value="0 0 280px">0 0 280px</option>
                                </select>
                            </div>
                        </div>
                    )}

                    {/* ex6 controls */}
                    {activeExercise === 'ex6' && (
                        <div className="space-y-4">
                            <div className="bg-[#111] p-3 rounded-lg border border-gray-800">
                                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400">flex-shrink on avatar</label>
                                <select
                                    value={ex6Shrink}
                                    onChange={(e) => { setEx6Shrink(e.target.value); setEx6Status('idle'); }}
                                    className="w-full bg-[#1A1A1A] text-white border border-gray-750 p-2 rounded text-sm focus:outline-none focus:border-sky-500"
                                >
                                    <option value="1">1 (default - allowed to shrink)</option>
                                    <option value="0">0 (rigid - never shrinks)</option>
                                </select>
                            </div>
                            <div className="bg-[#111] p-3 rounded-lg border border-gray-800">
                                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400">flex-grow on body text</label>
                                <select
                                    value={ex6Grow}
                                    onChange={(e) => { setEx6Grow(e.target.value); setEx6Status('idle'); }}
                                    className="w-full bg-[#1A1A1A] text-white border border-gray-750 p-2 rounded text-sm focus:outline-none focus:border-sky-500"
                                >
                                    <option value="0">0 (default - stays narrow)</option>
                                    <option value="1">1 (grows to fill available space)</option>
                                </select>
                            </div>
                        </div>
                    )}

                    {/* Check & Reset Controls */}
                    <div className="flex gap-2">
                        <button
                            onClick={checkSolution}
                            className="flex-1 py-2.5 px-4 font-bold text-xs bg-sky-500 hover:bg-sky-400 text-white rounded-lg transition-colors border border-sky-400 shadow-md shadow-sky-500/10"
                        >
                            Verify Solution
                        </button>
                        <button
                            onClick={handleReset}
                            className="p-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
                            title="Reset Code"
                        >
                            <RefreshCw size={14} />
                        </button>
                    </div>
                </div>

                {/* Sandbox & Validation (Right) */}
                <div className="lg:col-span-7 bg-[#161b22]/20 border border-gray-850 rounded-xl overflow-hidden min-h-[300px] flex flex-col justify-between">
                    {/* Header */}
                    <div className="bg-[#161b22]/80 px-4 py-2 border-b border-gray-800 flex justify-between items-center text-xs text-gray-400 font-mono">
                        <span>Exercise Sandbox Preview</span>
                        {activeExercise === 'ex4' && <span>Exercise 4: Center Box</span>}
                        {activeExercise === 'ex1' && <span>Exercise 1: Navbar</span>}
                        {activeExercise === 'ex2' && <span>Exercise 2: Card Row</span>}
                        {activeExercise === 'ex6' && <span>Exercise 6: Media Card</span>}
                    </div>

                    {/* Visual Preview */}
                    <div className="flex-1 p-6 flex flex-col justify-center items-center relative overflow-hidden bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:16px_16px]">
                        {/* ex4 render */}
                        {activeExercise === 'ex4' && (
                            <div 
                                className="w-full max-w-[280px] h-[150px] border-2 border-dashed border-gray-700 bg-gray-950 p-2 rounded-xl transition-all duration-300"
                                style={{
                                    display: ex4Display,
                                    alignItems: ex4Display === 'flex' ? ex4Align : undefined,
                                    justifyContent: ex4Display === 'flex' ? ex4Justify : undefined
                                }}
                            >
                                <div className="p-4 bg-gradient-to-br from-indigo-500/20 to-sky-500/20 border border-indigo-500/30 text-white rounded-lg flex items-center justify-center font-bold text-xs select-none shadow-md">
                                    Target Center
                                </div>
                            </div>
                        )}

                        {/* ex1 render */}
                        {activeExercise === 'ex1' && (
                            <div className="w-full max-w-[380px] bg-gray-950 p-4 border border-gray-850 rounded-xl">
                                <div 
                                    className="w-full h-12 bg-gray-900 border border-gray-800 rounded-lg p-2 flex"
                                    style={{
                                        justifyContent: ex1Justify,
                                        alignItems: ex1Align
                                    }}
                                >
                                    <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400 text-xs px-2 select-none">
                                        Logo
                                    </span>
                                    <div className="flex gap-2 text-[10px] font-bold text-gray-500 px-2">
                                        <span>Link 1</span>
                                        <span>Link 2</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ex2 render */}
                        {activeExercise === 'ex2' && (
                            <div className="w-full max-w-[340px] bg-gray-950 p-4 border border-gray-850 rounded-xl overflow-x-auto">
                                <div 
                                    className="w-full flex gap-3 min-w-[200px]"
                                    style={{
                                        flexWrap: ex2Wrap
                                    }}
                                >
                                    {[1, 2, 3].map(n => (
                                        <div 
                                            key={n} 
                                            className="bg-[#161b22] border border-gray-800 p-3 rounded-lg text-center select-none text-[10px] font-bold text-white"
                                            style={{
                                                flex: ex2Flex === 'none' ? undefined : ex2Flex
                                            }}
                                        >
                                            Card {n}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* ex6 render */}
                        {activeExercise === 'ex6' && (
                            <div className="w-full max-w-[320px] bg-gray-950 p-4 border border-gray-850 rounded-xl">
                                <div className="flex items-start gap-3 w-full">
                                    <div 
                                        className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-sky-500 flex items-center justify-center font-bold text-[9px] text-white shrink-0 border border-sky-400/30"
                                        style={{
                                            flexShrink: parseInt(ex6Shrink)
                                        }}
                                    >
                                        AV
                                    </div>
                                    <div 
                                        className="bg-[#161b22] border border-gray-800 p-2.5 rounded-lg text-left select-none text-[9px] leading-relaxed text-gray-400 min-w-[50px]"
                                        style={{
                                            flexGrow: parseInt(ex6Grow)
                                        }}
                                    >
                                        <span className="font-extrabold text-white block mb-0.5">@system</span>
                                        Media object text block. Shrink or Grow determines alignment container width.
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Checking Banner */}
                    <div className="border-t border-gray-850 p-4 bg-[#0d1117]">
                        {activeExercise === 'ex4' && (
                            <>
                                {ex4Status === 'idle' && (
                                    <div className="text-xs text-gray-400 font-mono">
                                        Goal: Center the target box. Ensure display is <strong>flex</strong>, and both alignment options are set to <strong>center</strong>.
                                    </div>
                                )}
                                {ex4Status === 'correct' && (
                                    <div className="flex items-center gap-2 text-xs text-green-400 bg-green-950/20 border border-green-500/10 p-2 rounded-lg font-bold">
                                        <CheckCircle2 size={16} /> Solution Correct! You successfully mastered vertical and horizontal centering.
                                    </div>
                                )}
                                {ex4Status === 'wrong' && (
                                    <div className="flex items-center gap-2 text-xs text-red-400 bg-red-950/20 border border-red-500/10 p-2 rounded-lg font-bold">
                                        <XCircle size={16} /> Incorrect. Remember: Center vertically with align-items, and horizontally with justify-content.
                                    </div>
                                )}
                            </>
                        )}
                        {activeExercise === 'ex1' && (
                            <>
                                {ex1Status === 'idle' && (
                                    <div className="text-xs text-gray-400 font-mono">
                                        Goal: Push links to the right edge and center them vertically. (Hint: <strong>space-between</strong> and <strong>center</strong>)
                                    </div>
                                )}
                                {ex1Status === 'correct' && (
                                    <div className="flex items-center gap-2 text-xs text-green-400 bg-green-950/20 border border-green-500/10 p-2 rounded-lg font-bold">
                                        <CheckCircle2 size={16} /> Solution Correct! The navbar is now perfectly spaced and optically centered.
                                    </div>
                                )}
                                {ex1Status === 'wrong' && (
                                    <div className="flex items-center gap-2 text-xs text-red-400 bg-red-950/20 border border-red-500/10 p-2 rounded-lg font-bold">
                                        <XCircle size={16} /> Incorrect. To put space between edges, use space-between. To align vertically, use center.
                                    </div>
                                )}
                            </>
                        )}
                        {activeExercise === 'ex2' && (
                            <>
                                {ex2Status === 'idle' && (
                                    <div className="text-xs text-gray-400 font-mono">
                                        Goal: Allow card wrapping and set a baseline minimum width of 280px for the cards. (Hint: <strong>wrap</strong> and <strong>1 1 280px</strong>)
                                    </div>
                                )}
                                {ex2Status === 'correct' && (
                                    <div className="flex items-center gap-2 text-xs text-green-400 bg-green-950/20 border border-green-500/10 p-2 rounded-lg font-bold">
                                        <CheckCircle2 size={16} /> Solution Correct! Cards will now fluidly wrap and hold a premium minimum baseline of 280px.
                                    </div>
                                )}
                                {ex2Status === 'wrong' && (
                                    <div className="flex items-center gap-2 text-xs text-red-400 bg-red-950/20 border border-red-500/10 p-2 rounded-lg font-bold">
                                        <XCircle size={16} /> Incorrect. Make sure wrap is active on the container, and cards set flex to "1 1 280px".
                                    </div>
                                )}
                            </>
                        )}
                        {activeExercise === 'ex6' && (
                            <>
                                {ex6Status === 'idle' && (
                                    <div className="text-xs text-gray-400 font-mono">
                                        Goal: Make the avatar rigid (never shrink) and allow the text container to grow and fill remaining space.
                                    </div>
                                )}
                                {ex6Status === 'correct' && (
                                    <div className="flex items-center gap-2 text-xs text-green-400 bg-green-950/20 border border-green-500/10 p-2 rounded-lg font-bold">
                                        <CheckCircle2 size={16} /> Solution Correct! Avatar is rigid (shrink: 0), and message expands dynamically (grow: 1).
                                    </div>
                                )}
                                {ex6Status === 'wrong' && (
                                    <div className="flex items-center gap-2 text-xs text-red-400 bg-red-950/20 border border-red-500/10 p-2 rounded-lg font-bold">
                                        <XCircle size={16} /> Incorrect. Set avatar flex-shrink to 0, and body text flex-grow to 1.
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
