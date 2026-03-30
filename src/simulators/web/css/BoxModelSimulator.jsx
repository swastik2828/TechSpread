import React, { useState } from 'react';
import { Settings, Maximize, Layers } from 'lucide-react';

const BoxModelSimulator = () => {
    const [padding, setPadding] = useState(20);
    const [border, setBorder] = useState(5);
    const [margin, setMargin] = useState(30);

    return (
        <div className="my-8 bg-[#0d1117] border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-gray-800">
                <div className="flex items-center gap-2 text-sky-400">
                    <Layers size={18} />
                    <span className="font-bold text-sm">Box Model Interactive Simulator</span>
                </div>
            </div>

            <div className="p-4 md:p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Controls */}
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-medium text-gray-300">Padding</label>
                            <span className="text-sky-400 font-mono text-sm">{padding}px</span>
                        </div>
                        <input 
                            type="range" min="0" max="60" value={padding} 
                            onChange={(e) => setPadding(Number(e.target.value))}
                            className="w-full accent-sky-500"
                        />
                        <p className="text-xs text-gray-500 mt-1">Space inside the border.</p>
                    </div>

                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-medium text-gray-300">Border Width</label>
                            <span className="text-yellow-400 font-mono text-sm">{border}px</span>
                        </div>
                        <input 
                            type="range" min="0" max="20" value={border} 
                            onChange={(e) => setBorder(Number(e.target.value))}
                            className="w-full accent-yellow-500"
                        />
                        <p className="text-xs text-gray-500 mt-1">The visible boundary.</p>
                    </div>

                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-medium text-gray-300">Margin</label>
                            <span className="text-orange-400 font-mono text-sm">{margin}px</span>
                        </div>
                        <input 
                            type="range" min="0" max="60" value={margin} 
                            onChange={(e) => setMargin(Number(e.target.value))}
                            className="w-full accent-orange-500"
                        />
                        <p className="text-xs text-gray-500 mt-1">Space outside the border.</p>
                    </div>

                    <div className="bg-[#161b22] rounded-lg p-4 border border-gray-800 font-mono text-sm text-gray-300">
                        <div className="text-purple-400 mb-1">.element {'{'}</div>
                        <div className="pl-4">
                            <span className="text-sky-300">padding:</span> <span className="text-sky-400">{padding}px;</span><br/>
                            <span className="text-yellow-300">border:</span> <span className="text-yellow-400">{border}px solid #3b82f6;</span><br/>
                            <span className="text-orange-300">margin:</span> <span className="text-orange-400">{margin}px;</span>
                        </div>
                        <div className="text-purple-400 mt-1">{'}'}</div>
                    </div>
                </div>

                {/* Visualization */}
                <div className="flex items-center justify-center bg-[#0a0a0a] rounded-xl border border-gray-800 relative p-4 min-h-[350px] overflow-hidden">
                    {/* Background grid for perspective */}
                    <div className="absolute inset-0 opacity-10" 
                         style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px' }} />

                    <div className="relative animate-in zoom-in duration-300" 
                         style={{ padding: `${margin}px`, backgroundColor: 'rgba(249, 115, 22, 0.2)', border: '1px dashed rgba(249, 115, 22, 0.5)' }}>
                        {/* Margin Label */}
                        <div className="absolute top-1 left-2 text-[10px] font-bold text-orange-400 uppercase tracking-widest">Margin</div>

                        <div className="relative"
                             style={{
                                 padding: `${padding}px`,
                                 border: `${border}px solid #eab308`,
                                 backgroundColor: 'rgba(56, 189, 248, 0.2)'
                             }}>
                            {/* Border Label */}
                            {border > 0 && <div className="absolute -top-5 left-1 text-[10px] font-bold text-yellow-500 uppercase tracking-widest bg-[#0a0a0a] px-1 rounded">Border</div>}
                            
                            {/* Padding Label */}
                            {padding > 10 && <div className="absolute top-2 left-2 text-[10px] font-bold text-sky-400 uppercase tracking-widest">Padding</div>}

                            <div className="bg-sky-500/10 border border-sky-500/30 rounded flex items-center justify-center text-center p-4 min-w-[120px] min-h-[80px]">
                                <div>
                                    <div className="font-bold text-sky-300 mb-1">Content</div>
                                    <div className="text-xs text-sky-400/70 font-mono">120 × 80</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoxModelSimulator;
