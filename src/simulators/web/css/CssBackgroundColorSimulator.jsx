import React, { useState } from 'react';
import { Paintbrush, Eye, EyeOff } from 'lucide-react';

export default function CssBackgroundColorSimulator() {
    const [r, setR] = useState(99);
    const [g, setG] = useState(102);
    const [b, setB] = useState(241);
    const [alpha, setAlpha] = useState(100);
    const [mode, setMode] = useState('rgba'); // 'rgba' | 'opacity'

    const hex = `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`;
    const rgbaColor = `rgba(${r}, ${g}, ${b}, ${(alpha / 100).toFixed(2)})`;
    const solidColor = `rgb(${r}, ${g}, ${b})`;

    const cssOutput = mode === 'rgba'
        ? `background-color: rgba(${r}, ${g}, ${b}, ${(alpha / 100).toFixed(2)});`
        : `background-color: rgb(${r}, ${g}, ${b});\nopacity: ${(alpha / 100).toFixed(2)};`;

    return (
        <div className="my-10 bg-[#0d1117] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-[#161b22] px-6 py-4 border-b border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-sky-500/20 text-sky-400 rounded-lg">
                        <Paintbrush size={20} />
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg leading-tight">Background Color Simulator</h3>
                        <p className="text-gray-500 text-xs mt-0.5">Explore rgba() vs opacity — a crucial distinction</p>
                    </div>
                </div>
                {/* Toggle */}
                <div className="flex bg-[#0d1117] rounded-lg p-1 border border-gray-800 self-start sm:self-auto">
                    <button
                        onClick={() => setMode('rgba')}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${mode === 'rgba' ? 'bg-sky-500 text-white' : 'text-gray-400 hover:text-white'}`}
                    >rgba()</button>
                    <button
                        onClick={() => setMode('opacity')}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${mode === 'opacity' ? 'bg-orange-500 text-white' : 'text-gray-400 hover:text-white'}`}
                    >opacity</button>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-0">
                {/* Controls */}
                <div className="p-6 md:border-r border-gray-800 space-y-5">
                    {/* Color explanation */}
                    <div className={`text-xs p-3 rounded-lg border ${mode === 'rgba' ? 'bg-sky-900/20 border-sky-800/50 text-sky-300' : 'bg-orange-900/20 border-orange-800/50 text-orange-300'}`}>
                        {mode === 'rgba'
                            ? <><strong>rgba() mode:</strong> Only the background becomes transparent. Text stays fully opaque and readable.</>
                            : <><strong>opacity mode:</strong> The whole element (background AND text) becomes transparent together.</>
                        }
                    </div>

                    {/* RGB Sliders */}
                    {[
                        { label: 'Red', val: r, set: setR, accent: 'accent-red-500', color: 'text-red-400' },
                        { label: 'Green', val: g, set: setG, accent: 'accent-green-500', color: 'text-green-400' },
                        { label: 'Blue', val: b, set: setB, accent: 'accent-blue-500', color: 'text-blue-400' },
                    ].map(({ label, val, set, accent, color }) => (
                        <div key={label} className="space-y-1">
                            <div className="flex justify-between text-xs font-bold font-mono">
                                <span className={color}>{label}</span>
                                <span className="text-gray-300">{val}</span>
                            </div>
                            <input type="range" min="0" max="255" value={val}
                                onChange={e => set(parseInt(e.target.value))}
                                className={`w-full ${accent} h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer`} />
                        </div>
                    ))}

                    {/* Alpha slider */}
                    <div className="space-y-1 pt-3 border-t border-gray-800">
                        <div className="flex justify-between text-xs font-bold font-mono">
                            <span className="text-gray-400">Alpha / Transparency</span>
                            <span className="text-gray-300">{alpha}%</span>
                        </div>
                        <input type="range" min="0" max="100" value={alpha}
                            onChange={e => setAlpha(parseInt(e.target.value))}
                            className="w-full accent-sky-400 h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer" />
                    </div>

                    {/* CSS Output */}
                    <div className="pt-2">
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest block mb-2">CSS Output</span>
                        <div className="bg-[#0A0A0A] border border-gray-700 rounded-lg p-4 font-mono text-sm text-sky-300 whitespace-pre">
                            {cssOutput}
                        </div>
                        <div className="mt-2 text-xs text-gray-500 font-mono">Also: {hex}</div>
                    </div>
                </div>

                {/* Preview */}
                <div className="p-6 bg-[#161b22] flex flex-col gap-6 justify-center">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest text-center">Live Preview</p>

                    {/* Preview with checkerboard behind */}
                    <div
                        className="rounded-xl p-1 border border-white/10"
                        style={{
                            backgroundImage: 'linear-gradient(45deg, #333 25%, transparent 25%), linear-gradient(-45deg, #333 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #333 75%), linear-gradient(-45deg, transparent 75%, #333 75%)',
                            backgroundSize: '16px 16px',
                            backgroundPosition: '0 0, 0 8px, 8px -8px, -8px 0px',
                        }}
                    >
                        <div
                            style={mode === 'rgba'
                                ? { backgroundColor: rgbaColor }
                                : { backgroundColor: solidColor, opacity: alpha / 100 }
                            }
                            className="rounded-lg p-5 transition-all duration-200"
                        >
                            <h4 className="text-white font-bold text-lg mb-1">Hello World</h4>
                            <p className="text-gray-200 text-sm">This is content inside the box. Notice how transparent the background is while these words remain crisp.</p>
                        </div>
                    </div>

                    {/* Side-by-side comparison */}
                    <div className="grid grid-cols-2 gap-3 mt-2">
                        <div className="text-center">
                            <div
                                className="rounded-lg p-3 mb-2 border border-white/10"
                                style={{ backgroundColor: rgbaColor }}
                            >
                                <span className="text-white text-xs font-bold">rgba()</span>
                                <p className="text-white text-[10px] mt-1">Text stays solid</p>
                            </div>
                            <span className="text-[9px] text-sky-400 font-mono uppercase tracking-wider">rgba background</span>
                        </div>
                        <div className="text-center">
                            <div
                                className="rounded-lg p-3 mb-2 border border-white/10"
                                style={{ backgroundColor: solidColor, opacity: alpha / 100 }}
                            >
                                <span className="text-white text-xs font-bold">opacity</span>
                                <p className="text-white text-[10px] mt-1">Text fades too</p>
                            </div>
                            <span className="text-[9px] text-orange-400 font-mono uppercase tracking-wider">full opacity</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
