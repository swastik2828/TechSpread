import React, { useState } from 'react';
import { Wand2, Copy, Check } from 'lucide-react';

const DIRECTION_OPTIONS = [
    { label: '→ Right', value: 'to right' },
    { label: '← Left', value: 'to left' },
    { label: '↓ Bottom', value: 'to bottom' },
    { label: '↑ Top', value: 'to top' },
    { label: '↘ Bottom Right', value: 'to bottom right' },
    { label: '↗ Top Right', value: 'to top right' },
];

const PRESET_GRADIENTS = [
    { name: 'Sunset', color1: '#ff0055', color2: '#ffaa00', dir: 'to right' },
    { name: 'Ocean', color1: '#00f2fe', color2: '#4facfe', dir: 'to right' },
    { name: 'Forest', color1: '#11998e', color2: '#38ef7d', dir: 'to bottom right' },
    { name: 'Purple Haze', color1: '#a855f7', color2: '#3b82f6', dir: 'to right' },
    { name: 'Midnight', color1: '#0f0c29', color2: '#302b63', dir: 'to bottom' },
    { name: 'Candy', color1: '#f953c6', color2: '#b91d73', dir: 'to bottom' },
];

export default function CssGradientSimulator() {
    const [color1, setColor1] = useState('#ff0055');
    const [color2, setColor2] = useState('#ffaa00');
    const [direction, setDirection] = useState('to right');
    const [angle, setAngle] = useState(90);
    const [useAngle, setUseAngle] = useState(false);
    const [copied, setCopied] = useState(false);
    const [gradientTarget, setGradientTarget] = useState('background'); // 'background' | 'text'

    const dirValue = useAngle ? `${angle}deg` : direction;
    const gradientCSS = `linear-gradient(${dirValue}, ${color1}, ${color2})`;

    const cssOutput = gradientTarget === 'text'
        ? `.magic-text {\n    background: ${gradientCSS};\n    background-clip: text;\n    -webkit-background-clip: text;\n    color: transparent;\n}`
        : `.element {\n    background: ${gradientCSS};\n}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(gradientTarget === 'text' ? cssOutput : `background: ${gradientCSS};`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const applyPreset = (p) => {
        setColor1(p.color1);
        setColor2(p.color2);
        setDirection(p.dir);
        setUseAngle(false);
    };

    return (
        <div className="my-10 bg-[#0d1117] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-[#161b22] px-6 py-4 border-b border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-sky-500/20 text-sky-400 rounded-lg"><Wand2 size={20} /></div>
                    <div>
                        <h3 className="text-white font-bold text-lg leading-tight">CSS Gradient Generator</h3>
                        <p className="text-gray-500 text-xs mt-0.5">Build linear gradients visually — zero image files needed</p>
                    </div>
                </div>
                {/* Target toggle */}
                <div className="flex bg-[#0d1117] rounded-lg p-1 border border-gray-800 self-start sm:self-auto">
                    <button onClick={() => setGradientTarget('background')}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${gradientTarget === 'background' ? 'bg-sky-500 text-white' : 'text-gray-400 hover:text-white'}`}>
                        Box
                    </button>
                    <button onClick={() => setGradientTarget('text')}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${gradientTarget === 'text' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'}`}>
                        ✨ Text
                    </button>
                </div>
            </div>

            <div className="p-5 md:p-6">
                {/* Presets */}
                <div className="mb-6">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Quick Presets</label>
                    <div className="flex flex-wrap gap-2">
                        {PRESET_GRADIENTS.map(p => (
                            <button
                                key={p.name}
                                onClick={() => applyPreset(p)}
                                className="px-3 py-1.5 text-xs font-semibold rounded-lg text-white transition-all hover:scale-105 border border-white/10"
                                style={{ background: `linear-gradient(${p.dir}, ${p.color1}, ${p.color2})` }}
                            >
                                {p.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                    {/* Controls */}
                    <div className="space-y-5">
                        {/* Colors */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Start Color</label>
                                <div className="flex items-center gap-2">
                                    <input type="color" value={color1} onChange={e => setColor1(e.target.value)}
                                        className="w-10 h-10 rounded-lg border border-gray-700 bg-transparent cursor-pointer" />
                                    <code className="text-sky-300 text-sm font-mono">{color1}</code>
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">End Color</label>
                                <div className="flex items-center gap-2">
                                    <input type="color" value={color2} onChange={e => setColor2(e.target.value)}
                                        className="w-10 h-10 rounded-lg border border-gray-700 bg-transparent cursor-pointer" />
                                    <code className="text-sky-300 text-sm font-mono">{color2}</code>
                                </div>
                            </div>
                        </div>

                        {/* Direction toggle */}
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Direction</label>
                                <button
                                    onClick={() => setUseAngle(!useAngle)}
                                    className={`text-xs px-2 py-1 rounded border transition-colors ${useAngle ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300' : 'border-gray-700 text-gray-400'}`}
                                >
                                    {useAngle ? 'Using angle' : 'Use angle'}
                                </button>
                            </div>
                            {useAngle ? (
                                <div className="space-y-1">
                                    <div className="flex justify-between text-xs font-mono">
                                        <span className="text-gray-400">Angle</span>
                                        <span className="text-gray-200">{angle}deg</span>
                                    </div>
                                    <input type="range" min="0" max="360" value={angle}
                                        onChange={e => setAngle(parseInt(e.target.value))}
                                        className="w-full accent-sky-400 h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer" />
                                </div>
                            ) : (
                                <div className="flex flex-wrap gap-2">
                                    {DIRECTION_OPTIONS.map(d => (
                                        <button key={d.value} onClick={() => setDirection(d.value)}
                                            className={`px-2.5 py-1.5 text-xs font-mono rounded-lg border transition-all ${direction === d.value ? 'bg-sky-500/20 border-sky-500/50 text-sky-300' : 'bg-[#0A0A0A] border-gray-700 text-gray-500 hover:text-white'}`}>
                                            {d.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* CSS Output */}
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">CSS Output</span>
                                <button onClick={handleCopy}
                                    className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors">
                                    {copied ? <><Check size={12} className="text-green-400" /> Copied!</> : <><Copy size={12} /> Copy</>}
                                </button>
                            </div>
                            <div className="bg-[#0A0A0A] border border-gray-800 rounded-xl p-4 font-mono text-xs text-sky-300 overflow-x-auto">
                                <pre className="whitespace-pre-wrap">{cssOutput}</pre>
                            </div>
                        </div>
                    </div>

                    {/* Live Preview */}
                    <div>
                        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Live Preview</div>
                        {gradientTarget === 'background' ? (
                            <div
                                className="w-full h-56 rounded-xl border border-white/10 flex items-center justify-center transition-all duration-300"
                                style={{ background: gradientCSS }}
                            >
                                <div className="text-center">
                                    <p className="text-white font-bold text-xl drop-shadow-lg">Your Box</p>
                                    <p className="text-white/70 text-sm mt-1">Beautiful gradient background!</p>
                                </div>
                            </div>
                        ) : (
                            <div className="w-full h-56 rounded-xl border border-gray-800 bg-gray-950 flex items-center justify-center">
                                <h2
                                    className="text-4xl font-extrabold"
                                    style={{
                                        background: gradientCSS,
                                        WebkitBackgroundClip: 'text',
                                        backgroundClip: 'text',
                                        color: 'transparent',
                                    }}
                                >
                                    CSS is Awesome
                                </h2>
                            </div>
                        )}

                        {/* Hover button example */}
                        <div className="mt-4 flex justify-center">
                            <button
                                className="px-6 py-3 rounded-full text-sm font-bold text-white border-none cursor-default shadow-lg transition-all duration-300"
                                style={{ background: gradientCSS }}
                            >
                                Example Button ✨
                            </button>
                        </div>

                        {gradientTarget === 'text' && (
                            <div className="mt-4 p-3 bg-purple-900/10 border border-purple-800/40 rounded-lg text-xs text-purple-300">
                                <strong>How it works:</strong> The gradient is applied as a background, then clipped to the shape of the letters with <code>background-clip: text</code>, and the text color is made transparent so the background peeks through.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
