import React, { useState, useRef, useEffect } from 'react';
import { Play, RotateCcw } from 'lucide-react';

export const BasicsSimulator = () => {
    const [duration, setDuration] = useState(0.3);
    const [delay, setDelay] = useState(0);

    return (
        <div className="bg-[#0d1117] border border-gray-800 rounded-xl p-6 my-8">
            <h3 className="text-xl font-bold text-white mb-4">Interactive: Transition Duration & Delay</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col gap-4">
                    <div>
                        <label className="text-sm text-gray-400 flex justify-between">Duration: <span>{duration}s</span></label>
                        <input type="range" min="0" max="2" step="0.1" value={duration} onChange={(e) => setDuration(e.target.value)} className="w-full accent-sky-500" />
                    </div>
                    <div>
                        <label className="text-sm text-gray-400 flex justify-between">Delay: <span>{delay}s</span></label>
                        <input type="range" min="0" max="1" step="0.1" value={delay} onChange={(e) => setDelay(e.target.value)} className="w-full accent-purple-500" />
                    </div>
                    <div className="p-3 bg-black/50 border border-gray-800 rounded font-mono text-sm text-sky-300">
                        transition: all {duration}s ease {delay}s;
                    </div>
                </div>
                <div className="flex justify-center items-center h-48 bg-[#161b22] rounded-lg border border-gray-800 overflow-hidden group">
                    <div 
                        className="w-24 h-24 bg-sky-500 rounded-xl group-hover:bg-purple-500 group-hover:scale-125 group-hover:rotate-12 cursor-pointer flex items-center justify-center text-white font-bold text-center p-2 shadow-lg"
                        style={{ transition: `all ${duration}s ease ${delay}s` }}
                    >
                        Hover Me
                    </div>
                </div>
            </div>
        </div>
    );
};

export const TimingSimulator = () => {
    const [run, setRun] = useState(false);
    
    const curves = [
        { name: 'linear', val: 'linear', color: 'bg-blue-500' },
        { name: 'ease-out', val: 'ease-out', color: 'bg-green-500' },
        { name: 'ease-in-out', val: 'ease-in-out', color: 'bg-purple-500' },
        { name: 'cubic-bezier(0.34, 1.56, 0.64, 1)', val: 'cubic-bezier(0.34, 1.56, 0.64, 1)', color: 'bg-pink-500' },
        { name: 'steps(8, end)', val: 'steps(8, end)', color: 'bg-orange-500' },
    ];

    return (
        <div className="bg-[#0d1117] border border-gray-800 rounded-xl p-6 my-8">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">Interactive: The Great Timing Race</h3>
                <button onClick={() => setRun(!run)} className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors text-sm">
                    {run ? <RotateCcw size={16} /> : <Play size={16} />} {run ? 'Reset' : 'Run Animation'}
                </button>
            </div>
            <div className="flex flex-col gap-4 relative">
                <div className="absolute right-0 top-0 bottom-0 w-px bg-white/20" style={{ right: '40px' }}></div>
                {curves.map((curve, i) => (
                    <div key={i} className="flex flex-col gap-1">
                        <span className="text-xs font-mono text-gray-400">{curve.name}</span>
                        <div className="w-full bg-[#161b22] h-10 rounded-lg relative overflow-hidden flex items-center px-2">
                            <div 
                                className={`h-6 w-6 rounded shadow-lg ${curve.color}`}
                                style={{ 
                                    transition: `transform 2s ${curve.val}`,
                                    transform: run ? 'translateX(calc(100cqw - 40px))' : 'translateX(0)',
                                    containerType: 'inline-size'
                                }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const OriginSimulator = () => {
    const [origin, setOrigin] = useState('center');
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="bg-[#0d1117] border border-gray-800 rounded-xl p-6 my-8">
            <h3 className="text-xl font-bold text-white mb-4">Interactive: Transform Origin</h3>
            <div className="flex flex-col sm:flex-row gap-8">
                <div className="flex-1">
                    <label className="block text-sm text-gray-400 mb-2">Select transform-origin:</label>
                    <select 
                        value={origin} 
                        onChange={(e) => setOrigin(e.target.value)}
                        className="w-full bg-[#161b22] text-white border border-gray-700 rounded p-2 mb-4"
                    >
                        <option value="center">center (default)</option>
                        <option value="top left">top left</option>
                        <option value="top right">top right</option>
                        <option value="bottom left">bottom left</option>
                        <option value="bottom right">bottom right</option>
                    </select>
                    <div className="p-3 bg-black/50 border border-gray-800 rounded font-mono text-sm text-sky-300">
                        transform-origin: {origin};<br/>
                        transform: rotate(90deg) scale(0.5);
                    </div>
                </div>
                <div className="flex-1 h-48 bg-[#161b22] rounded-lg border border-gray-800 flex items-center justify-center border-dashed">
                    <div 
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="w-32 h-32 bg-gradient-to-br from-sky-400 to-blue-600 rounded-lg flex flex-col justify-between p-2 shadow-lg relative cursor-pointer"
                        style={{ 
                            transformOrigin: origin,
                            transition: 'transform 0.4s ease-out',
                            transform: isHovered ? 'rotate(90deg) scale(0.5)' : 'rotate(0deg) scale(1)'
                        }}
                    >
                        <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                        <span className="text-white text-center font-bold absolute inset-0 flex items-center justify-center pointer-events-none">Hover</span>
                    </div>
                </div>
            </div>
        </div>
    );
};