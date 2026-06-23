import React, { useState } from 'react';
import { Play, RotateCcw } from 'lucide-react';

export default function CssAnimationSimulator() {
    const [keyframeId, setKeyframeId] = useState(0);
    const [duration, setDuration] = useState('2s');
    const [timing, setTiming] = useState('ease');
    const [iteration, setIteration] = useState('infinite');
    const [direction, setDirection] = useState('normal');

    const triggerAnimation = () => setKeyframeId(prev => prev + 1);

    const animationStyle = {
        animationName: 'demoBounce',
        animationDuration: duration,
        animationTimingFunction: timing,
        animationIterationCount: iteration,
        animationDirection: direction,
        animationFillMode: 'forwards'
    };

    return (
        <div className="my-8 rounded-xl overflow-hidden bg-[#0d1117] border border-gray-800 shadow-2xl">
            <div className="p-4 bg-[#161b22] border-b border-gray-800 flex items-center justify-between">
                <span className="text-sm font-bold text-sky-400 font-mono">Interactive Explorer: The animation Property</span>
                <button 
                    onClick={triggerAnimation}
                    className="flex items-center gap-2 px-3 py-1.5 bg-sky-500/20 text-sky-300 rounded hover:bg-sky-500/30 transition-colors text-xs font-bold"
                >
                    <RotateCcw size={14} /> Restart Animation
                </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 border-b md:border-b-0 md:border-r border-gray-800 flex flex-col items-center justify-center min-h-[300px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/20 to-[#0d1117]">
                    <style>
                        {`
                        @keyframes demoBounce {
                            0% { transform: translateY(0) scale(1); }
                            50% { transform: translateY(-50px) scale(1.1); background-color: #0ea5e9; }
                            100% { transform: translateY(0) scale(1); }
                        }
                        `}
                    </style>
                    <div 
                        key={keyframeId}
                        className="w-24 h-24 bg-sky-600 rounded-2xl shadow-[0_0_30px_rgba(14,165,233,0.3)] flex items-center justify-center text-white font-bold"
                        style={animationStyle}
                    >
                        CSS
                    </div>
                </div>

                <div className="p-6 bg-[#161b22]/50 font-mono text-sm flex flex-col gap-4">
                    <div>
                        <label className="block text-gray-400 text-xs mb-1">animation-duration:</label>
                        <select value={duration} onChange={(e) => setDuration(e.target.value)} className="w-full bg-[#0d1117] border border-gray-700 text-sky-300 rounded p-2 outline-none focus:border-sky-500">
                            <option value="0.5s">0.5s (Fast)</option>
                            <option value="2s">2s (Normal)</option>
                            <option value="5s">5s (Slow)</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-400 text-xs mb-1">animation-timing-function:</label>
                        <select value={timing} onChange={(e) => setTiming(e.target.value)} className="w-full bg-[#0d1117] border border-gray-700 text-sky-300 rounded p-2 outline-none focus:border-sky-500">
                            <option value="linear">linear (Mechanical)</option>
                            <option value="ease">ease (Natural)</option>
                            <option value="steps(3)">steps(3) (Staggered)</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-400 text-xs mb-1">animation-iteration-count:</label>
                        <select value={iteration} onChange={(e) => setIteration(e.target.value)} className="w-full bg-[#0d1117] border border-gray-700 text-sky-300 rounded p-2 outline-none focus:border-sky-500">
                            <option value="1">1</option>
                            <option value="3">3</option>
                            <option value="infinite">infinite</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-400 text-xs mb-1">animation-direction:</label>
                        <select value={direction} onChange={(e) => setDirection(e.target.value)} className="w-full bg-[#0d1117] border border-gray-700 text-sky-300 rounded p-2 outline-none focus:border-sky-500">
                            <option value="normal">normal</option>
                            <option value="reverse">reverse</option>
                            <option value="alternate">alternate</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}