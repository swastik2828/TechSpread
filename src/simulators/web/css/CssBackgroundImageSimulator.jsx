import React, { useState } from 'react';
import { ImageIcon, RefreshCw } from 'lucide-react';

// We'll simulate images using CSS gradients to avoid file dependencies
const DEMO_IMAGES = [
    {
        label: 'Mountain Landscape',
        gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 70%, #e94560 100%)',
    },
    {
        label: 'Sunset Ocean',
        gradient: 'linear-gradient(180deg, #ff6b35 0%, #f7931e 30%, #ffd700 60%, #1a6ba0 100%)',
    },
    {
        label: 'Forest Canopy',
        gradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
    },
];

const SIZE_OPTIONS = ['auto', 'contain', 'cover', '50%', '100px'];
const REPEAT_OPTIONS = ['no-repeat', 'repeat', 'repeat-x', 'repeat-y'];
const POSITION_OPTIONS = ['center', 'top', 'bottom', 'left', 'right', 'top left', 'top right', 'bottom left'];

export default function CssBackgroundImageSimulator() {
    const [imgIdx, setImgIdx] = useState(0);
    const [size, setSize] = useState('cover');
    const [repeat, setRepeat] = useState('no-repeat');
    const [position, setPosition] = useState('center');

    const img = DEMO_IMAGES[imgIdx];

    const cssOutput =
`.hero-section {
    height: 300px;
    background-image: url("${img.label.toLowerCase().replace(/ /g, '-')}.jpg");
    background-size: ${size};
    background-repeat: ${repeat};
    background-position: ${position};
    
    /* Shorthand equivalent: */
    /* background: url("image.jpg") ${position} / ${size} ${repeat}; */
}`;

    const Select = ({ label, value, options, onChange }) => (
        <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">{label}</label>
            <div className="flex flex-wrap gap-2">
                {options.map(opt => (
                    <button
                        key={opt}
                        onClick={() => onChange(opt)}
                        className={`px-3 py-1.5 text-xs font-mono rounded-lg border transition-all ${value === opt ? 'bg-sky-500/20 border-sky-500/50 text-sky-300 shadow-sm shadow-sky-500/10' : 'bg-[#0A0A0A] border-gray-700 text-gray-400 hover:text-white hover:border-gray-500'}`}
                    >
                        {opt}
                    </button>
                ))}
            </div>
        </div>
    );

    return (
        <div className="my-10 bg-[#0d1117] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-[#161b22] px-6 py-4 border-b border-gray-800 flex items-center gap-3">
                <div className="p-2 bg-sky-500/20 text-sky-400 rounded-lg"><ImageIcon size={20} /></div>
                <div>
                    <h3 className="text-white font-bold text-lg leading-tight">Background Image Control Simulator</h3>
                    <p className="text-gray-500 text-xs mt-0.5">Experiment with size, repeat, and position in real-time</p>
                </div>
            </div>

            <div className="p-5 md:p-6">
                {/* Image selector */}
                <div className="mb-5">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Demo Image</label>
                    <div className="flex flex-wrap gap-2">
                        {DEMO_IMAGES.map((img, i) => (
                            <button
                                key={i}
                                onClick={() => setImgIdx(i)}
                                className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${imgIdx === i ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300' : 'bg-[#0A0A0A] border-gray-700 text-gray-400 hover:text-white'}`}
                            >
                                {img.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                    {/* Controls */}
                    <div className="space-y-5">
                        <Select label="background-size" value={size} options={SIZE_OPTIONS} onChange={setSize} />
                        <Select label="background-repeat" value={repeat} options={REPEAT_OPTIONS} onChange={setRepeat} />
                        <Select label="background-position" value={position} options={POSITION_OPTIONS} onChange={setPosition} />

                        {/* Tip */}
                        <div className="p-3 bg-green-900/10 border border-green-800/40 rounded-lg text-xs text-green-300">
                            <strong>🎯 Pro Tip:</strong> For hero sections, always use <code className="bg-green-900/30 px-1 rounded">cover + center + no-repeat</code> — this is the golden combo!
                        </div>
                    </div>

                    {/* Preview */}
                    <div>
                        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Live Preview</div>
                        <div
                            className="w-full rounded-xl border border-gray-800 overflow-hidden"
                            style={{
                                height: '260px',
                                background: img.gradient,
                                backgroundSize: size,
                                backgroundRepeat: repeat,
                                backgroundPosition: position,
                            }}
                        >
                            <div className="w-full h-full flex items-end p-4">
                                <span className="text-xs bg-black/50 text-white px-2 py-1 rounded font-mono">
                                    Simulated: "{img.label}"
                                </span>
                            </div>
                        </div>

                        {/* Code output */}
                        <div className="mt-4 bg-[#0A0A0A] border border-gray-800 rounded-xl p-4 font-mono text-xs text-gray-300 overflow-x-auto">
                            <pre className="whitespace-pre-wrap text-sky-300">{cssOutput}</pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
