import React, { useState, useEffect, useCallback } from 'react';
import { PaintBucket, Sliders, Hexagon, Hash } from 'lucide-react';

export default function CssColorsSimulator() {
    const [colorFormat, setColorFormat] = useState('hex'); // hex, rgb, hsl
    const [alpha, setAlpha] = useState(100);
    
    // RGB state
    const [r, setR] = useState(59);
    const [g, setG] = useState(130);
    const [b, setB] = useState(246);
    
    // HSL state (derived from RGB for simplification, but maintained separately for pure HSL)
    const [h, setH] = useState(217);
    const [s, setS] = useState(91);
    const [l, setL] = useState(60);

    // HEX sync string
    const [hexString, setHexString] = useState('#3b82f6');
    
    const [activeColor, setActiveColor] = useState('rgba(59, 130, 246, 1)');

    // Sync helpers
    const rgbToHex = (r, g, b, a = 100) => {
        const toHex = (n) => {
            const hex = n.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        };
        const alphaHex = a < 100 ? toHex(Math.round(a * 2.55)) : '';
        return `#${toHex(r)}${toHex(g)}${toHex(b)}${alphaHex}`;
    };

    const hslToHslString = (h, s, l, a) => {
        return a < 100 ? `hsla(${h}, ${s}%, ${l}%, ${a / 100})` : `hsl(${h}, ${s}%, ${l}%)`;
    };

    const rgbToRgbString = (r, g, b, a) => {
        return a < 100 ? `rgba(${r}, ${g}, ${b}, ${a / 100})` : `rgb(${r}, ${g}, ${b})`;
    };

    // Very basic one-way conversion mapping just to keep previews looking accurate when switching modes
    const hslToRgb = (h, s, l) => {
        s /= 100;
        l /= 100;
        const k = n => (n + h / 30) % 12;
        const a = s * Math.min(l, 1 - l);
        const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
        return [255 * f(0), 255 * f(8), 255 * f(4)].map(Math.round);
    };

    const updateFromRgb = () => {
        setActiveColor(rgbToRgbString(r, g, b, alpha));
        setHexString(rgbToHex(r, g, b, alpha));
    };

    const updateFromHsl = () => {
        setActiveColor(hslToHslString(h, s, l, alpha));
        const [nr, ng, nb] = hslToRgb(h, s, l);
        setHexString(rgbToHex(nr, ng, nb, alpha));
    };

    useEffect(() => {
        if (colorFormat === 'rgb' || colorFormat === 'hex') {
            updateFromRgb();
        } else if (colorFormat === 'hsl') {
            updateFromHsl();
        }
    }, [r, g, b, h, s, l, alpha, colorFormat]);

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        // Simple visual feedback could be added here
    };

    const getAlphaSliderBackground = () => {
        const colorBase = colorFormat === 'hex' 
            ? hexString.substring(0,7) 
            : activeColor.replace(/rgba?|hsla?\([^)]+\)|,\s*[0-9.]+\)$/g, ')');
        return `linear-gradient(to right, transparent, ${colorBase})`;
    };

    return (
        <div className="my-10 bg-[#0d1117] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-[#161b22] px-6 py-4 border-b border-gray-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-sky-500/20 text-sky-400 rounded-lg">
                        <PaintBucket size={20} />
                    </div>
                    <h3 className="text-white font-bold text-lg">Interactive Color Picker</h3>
                </div>
                
                <div className="flex bg-[#0d1117] rounded-lg p-1 border border-gray-800">
                    <button 
                        onClick={() => setColorFormat('hex')}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${colorFormat === 'hex' ? 'bg-sky-500 text-white shadow-sm' : 'text-gray-400 hover:text-white'}`}
                    >HEX</button>
                    <button 
                        onClick={() => setColorFormat('rgb')}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${colorFormat === 'rgb' ? 'bg-green-500 text-white shadow-sm' : 'text-gray-400 hover:text-white'}`}
                    >RGB</button>
                    <button 
                        onClick={() => setColorFormat('hsl')}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${colorFormat === 'hsl' ? 'bg-purple-500 text-white shadow-sm' : 'text-gray-400 hover:text-white'}`}
                    >HSL</button>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-0">
                {/* Controls Area */}
                <div className="p-6 md:p-8 md:border-r border-gray-800 flex flex-col justify-center">
                    <div className="space-y-6">
                        {/* Selected Format Output snippet */}
                        <div className="mb-4">
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest block mb-2">CSS Output</span>
                            <div 
                                onClick={() => handleCopy(colorFormat === 'hex' ? hexString : activeColor)}
                                className="bg-[#161b22] border border-gray-700 rounded-lg p-4 flex justify-between items-center cursor-pointer hover:border-sky-500 transition-colors group"
                                title="Click to copy CSS value"
                            >
                                <code className="text-white font-mono text-lg">
                                    {colorFormat === 'hex' ? hexString : activeColor}
                                </code>
                                <div className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Copy</div>
                            </div>
                        </div>

                        {colorFormat === 'hex' && (
                            <div className="text-gray-300 text-sm">
                                <p>Hex controls visually match the RGB sliders in this simulator. A HEX code directly represents the Red, Green, and Blue intensity.</p>
                            </div>
                        )}

                        {(colorFormat === 'rgb' || colorFormat === 'hex') && (
                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <div className="flex justify-between text-xs font-bold font-mono">
                                        <span className="text-red-400">Red (R)</span>
                                        <span className="text-gray-300">{r}</span>
                                    </div>
                                    <input type="range" min="0" max="255" value={r} onChange={(e) => setR(parseInt(e.target.value))} className="w-full accent-red-500 h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer" />
                                </div>
                                <div className="space-y-1">
                                    <div className="flex justify-between text-xs font-bold font-mono">
                                        <span className="text-green-400">Green (G)</span>
                                        <span className="text-gray-300">{g}</span>
                                    </div>
                                    <input type="range" min="0" max="255" value={g} onChange={(e) => setG(parseInt(e.target.value))} className="w-full accent-green-500 h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer" />
                                </div>
                                <div className="space-y-1">
                                    <div className="flex justify-between text-xs font-bold font-mono">
                                        <span className="text-blue-400">Blue (B)</span>
                                        <span className="text-gray-300">{b}</span>
                                    </div>
                                    <input type="range" min="0" max="255" value={b} onChange={(e) => setB(parseInt(e.target.value))} className="w-full accent-blue-500 h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer" />
                                </div>
                            </div>
                        )}

                        {colorFormat === 'hsl' && (
                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <div className="flex justify-between text-xs font-bold font-mono">
                                        <span className="text-purple-400">Hue (H)</span>
                                        <span className="text-gray-300">{h}°</span>
                                    </div>
                                    <input type="range" min="0" max="360" value={h} onChange={(e) => setH(parseInt(e.target.value))} className="w-full accent-purple-500 h-2 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-purple-500 to-red-500 rounded-lg appearance-none cursor-pointer" />
                                </div>
                                <div className="space-y-1">
                                    <div className="flex justify-between text-xs font-bold font-mono">
                                        <span className="text-gray-400">Saturation (S)</span>
                                        <span className="text-gray-300">{s}%</span>
                                    </div>
                                    <input type="range" min="0" max="100" value={s} onChange={(e) => setS(parseInt(e.target.value))} className="w-full accent-gray-400 h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer" />
                                </div>
                                <div className="space-y-1">
                                    <div className="flex justify-between text-xs font-bold font-mono">
                                        <span className="text-gray-200">Lightness (L)</span>
                                        <span className="text-gray-300">{l}%</span>
                                    </div>
                                    <input type="range" min="0" max="100" value={l} onChange={(e) => setL(parseInt(e.target.value))} className="w-full accent-gray-200 h-2 bg-gradient-to-r from-black via-gray-500 to-white rounded-lg appearance-none cursor-pointer" />
                                </div>
                            </div>
                        )}

                        {/* Alpha Slider */}
                        <div className="space-y-1 pt-4 border-t border-gray-800">
                            <div className="flex justify-between text-xs font-bold font-mono">
                                <span className="text-gray-500">Alpha / Opacity</span>
                                <span className="text-gray-300">{alpha}%</span>
                            </div>
                            <input type="range" min="0" max="100" value={alpha} onChange={(e) => setAlpha(parseInt(e.target.value))} className="w-full accent-gray-500 h-2 bg-gradient-to-r border border-gray-700 from-transparent to-white rounded-lg appearance-none cursor-pointer" style={{background: getAlphaSliderBackground()}} />
                        </div>
                    </div>
                </div>

                {/* Preview Area */}
                <div className="p-8 flex items-center justify-center bg-[#161b22] relative checkered-bg">
                    {/* CSS checkered background simulation for transparency */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, #111 25%, transparent 25%), linear-gradient(-45deg, #111 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #111 75%), linear-gradient(-45deg, transparent 75%, #111 75%)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px' }}></div>
                    
                    <div 
                        style={{ backgroundColor: colorFormat === 'hex' ? hexString : activeColor }}
                        className="transition-colors duration-200 w-48 h-48 md:w-64 md:h-64 rounded-2xl shadow-2xl border-4 border-white/10 flex items-center justify-center backdrop-blur-sm z-10 p-6 text-center"
                    >
                        <span className="font-bold text-white drop-shadow-lg text-lg mix-blend-difference">
                            Preview
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
