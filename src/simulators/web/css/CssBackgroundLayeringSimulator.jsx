import React, { useState } from 'react';
import { Layers, Eye } from 'lucide-react';

const DEMO_IMAGES = [
    { label: 'Bright Office', gradient: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' },
    { label: 'City Skyline', gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #533483 100%)' },
    { label: 'Nature Field', gradient: 'linear-gradient(180deg, #56CCF2 0%, #2F80ED 40%, #27AE60 100%)' },
];

export default function CssBackgroundLayeringSimulator() {
    const [overlayOpacity, setOverlayOpacity] = useState(60);
    const [overlayColor, setOverlayColor] = useState('#000000');
    const [imgIdx, setImgIdx] = useState(0);
    const [useGradientOverlay, setUseGradientOverlay] = useState(false);
    const [layers, setLayers] = useState(['gradient', 'image']); // order: top to bottom

    const img = DEMO_IMAGES[imgIdx];
    const alpha = (overlayOpacity / 100).toFixed(2);

    const overlayGradient = useGradientOverlay
        ? `linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,${alpha}))`
        : `linear-gradient(rgba(${hexToRgb(overlayColor)}, ${alpha}), rgba(${hexToRgb(overlayColor)}, ${alpha}))`;

    const cssOutput =
`.readable-hero {
    height: 350px;
    color: white;
    
    background-image:
        /* Layer 1 (Top): Dark overlay */
        ${useGradientOverlay ? `linear-gradient(to bottom,\n            rgba(0,0,0,0.0), rgba(0,0,0,${alpha}))` : `linear-gradient(\n            rgba(${hexToRgb(overlayColor)}, ${alpha}),\n            rgba(${hexToRgb(overlayColor)}, ${alpha}))`},
        
        /* Layer 2 (Bottom): The image */
        url("your-image.jpg");
    
    background-size: cover;
    background-position: center;
}`;

    const textReadabilityScore = overlayOpacity >= 60 ? 'Excellent' : overlayOpacity >= 40 ? 'Good' : overlayOpacity >= 20 ? 'Fair' : 'Poor';
    const scoreColor = overlayOpacity >= 60 ? 'text-green-400' : overlayOpacity >= 40 ? 'text-lime-400' : overlayOpacity >= 20 ? 'text-yellow-400' : 'text-red-400';

    return (
        <div className="my-10 bg-[#0d1117] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-[#161b22] px-6 py-4 border-b border-gray-800 flex items-center gap-3">
                <div className="p-2 bg-sky-500/20 text-sky-400 rounded-lg"><Layers size={20} /></div>
                <div>
                    <h3 className="text-white font-bold text-lg leading-tight">Background Layering Simulator</h3>
                    <p className="text-gray-500 text-xs mt-0.5">Master the dark overlay trick for readable text on images</p>
                </div>
            </div>

            <div className="p-5 md:p-6 space-y-6">
                {/* Image selector */}
                <div>
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Background Scene</label>
                    <div className="flex flex-wrap gap-2">
                        {DEMO_IMAGES.map((d, i) => (
                            <button key={i} onClick={() => setImgIdx(i)}
                                className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${imgIdx === i ? 'bg-sky-500/20 border-sky-500/50 text-sky-300' : 'bg-[#0A0A0A] border-gray-700 text-gray-400 hover:text-white'}`}>
                                {d.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                    {/* Controls */}
                    <div className="space-y-5">
                        {/* Overlay type */}
                        <div>
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Overlay Type</label>
                            <div className="flex bg-[#0d1117] rounded-lg p-1 border border-gray-800 w-fit">
                                <button onClick={() => setUseGradientOverlay(false)}
                                    className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors ${!useGradientOverlay ? 'bg-sky-500 text-white' : 'text-gray-400 hover:text-white'}`}>
                                    Solid Overlay
                                </button>
                                <button onClick={() => setUseGradientOverlay(true)}
                                    className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors ${useGradientOverlay ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'}`}>
                                    Gradient Overlay
                                </button>
                            </div>
                        </div>

                        {/* Overlay color */}
                        {!useGradientOverlay && (
                            <div>
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Overlay Color</label>
                                <div className="flex items-center gap-3">
                                    <input type="color" value={overlayColor} onChange={e => setOverlayColor(e.target.value)}
                                        className="w-10 h-10 rounded-lg border border-gray-700 bg-transparent cursor-pointer" />
                                    <code className="text-sky-300 text-sm font-mono">{overlayColor}</code>
                                </div>
                            </div>
                        )}

                        {/* Opacity slider */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-xs font-bold font-mono">
                                <span className="text-gray-400">Overlay Opacity</span>
                                <span className="text-gray-200">{overlayOpacity}%</span>
                            </div>
                            <input type="range" min="0" max="100" value={overlayOpacity}
                                onChange={e => setOverlayOpacity(parseInt(e.target.value))}
                                className="w-full accent-sky-400 h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer" />
                            <div className="flex justify-between text-xs">
                                <span className="text-gray-600">Transparent (0%)</span>
                                <span className="text-gray-600">Solid (100%)</span>
                            </div>
                        </div>

                        {/* Text readability score */}
                        <div className="p-3 bg-[#161b22] border border-gray-800 rounded-lg">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <Eye size={14} className="text-gray-400" />
                                    <span className="text-xs text-gray-400">Text Readability</span>
                                </div>
                                <span className={`text-sm font-bold ${scoreColor}`}>{textReadabilityScore}</span>
                            </div>
                            <div className="mt-2 w-full bg-gray-800 rounded-full h-1.5">
                                <div
                                    className={`h-1.5 rounded-full transition-all duration-300 ${scoreColor.replace('text-', 'bg-')}`}
                                    style={{ width: `${Math.min(overlayOpacity * 1.4, 100)}%` }}
                                />
                            </div>
                            <p className="text-xs text-gray-600 mt-2">Professionals recommend 50–70% opacity for hero sections.</p>
                        </div>

                        {/* Layer diagram */}
                        <div>
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Layer Stack (top → bottom)</label>
                            <div className="space-y-1.5">
                                <div className="flex items-center gap-3 p-2.5 bg-sky-900/20 border border-sky-800/40 rounded-lg">
                                    <span className="text-[10px] bg-sky-700/40 text-sky-300 px-1.5 py-0.5 rounded font-mono">LAYER 1</span>
                                    <span className="text-xs text-sky-300">Dark overlay gradient (closest to viewer)</span>
                                </div>
                                <div className="flex items-center gap-3 p-2.5 bg-gray-900/40 border border-gray-800 rounded-lg">
                                    <span className="text-[10px] bg-gray-700/40 text-gray-400 px-1.5 py-0.5 rounded font-mono">LAYER 2</span>
                                    <span className="text-xs text-gray-400">Background image (furthest from viewer)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Preview */}
                    <div>
                        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Live Preview</div>
                        <div
                            className="w-full rounded-xl border border-gray-800 overflow-hidden"
                            style={{
                                height: '280px',
                                backgroundImage: `${overlayGradient}, ${img.gradient}`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                                <h2 className="text-white text-2xl font-extrabold drop-shadow-md mb-2">Hero Title Here</h2>
                                <p className="text-gray-200 text-sm max-w-xs">Click any background option and drag the opacity slider to see how text readability changes.</p>
                                <button className="mt-4 bg-white/20 hover:bg-white/30 text-white border border-white/30 text-sm font-semibold px-5 py-2 rounded-full backdrop-blur-sm transition-colors">
                                    Get Started →
                                </button>
                            </div>
                        </div>

                        {/* CSS Output */}
                        <div className="mt-4 bg-[#0A0A0A] border border-gray-800 rounded-xl p-4 font-mono text-xs text-gray-300 overflow-x-auto">
                            <pre className="whitespace-pre-wrap text-sky-300">{cssOutput}</pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Helper: #hex → "r, g, b"
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return '0, 0, 0';
    return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
}
