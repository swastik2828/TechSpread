import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CssBoxModelSimulator = () => {
    const [padding, setPadding] = useState(20);
    const [border, setBorder] = useState(5);
    const [margin, setMargin] = useState(20);

    return (
        <div className="w-full bg-[#0d1117] rounded-xl border border-gray-800 shadow-2xl overflow-hidden my-8">
            <div className="bg-[#161b22] px-4 py-3 border-b border-gray-800 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500/20 to-cyan-500/20 flex items-center justify-center border border-sky-500/30">
                        <span className="text-sky-400 font-bold text-sm">B</span>
                    </div>
                    <span className="text-gray-200 font-semibold tracking-wide text-sm">Interactive CSS Box Model</span>
                </div>
            </div>

            <div className="p-6 grid md:grid-cols-2 gap-8">
                {/* Controls */}
                <div className="space-y-6">
                    <div className="p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                        <h4 className="text-sm font-bold text-white mb-4">Adjust Box Properties</h4>

                        <div className="space-y-5">
                            <div>
                                <div className="flex justify-between text-xs mb-2">
                                    <span className="text-gray-400">Margin</span>
                                    <span className="text-orange-400 font-mono">{margin}px</span>
                                </div>
                                <input
                                    type="range"
                                    min="0" max="50"
                                    value={margin}
                                    onChange={(e) => setMargin(Number(e.target.value))}
                                    className="w-full accent-orange-500 h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between text-xs mb-2">
                                    <span className="text-gray-400">Border</span>
                                    <span className="text-yellow-400 font-mono">{border}px</span>
                                </div>
                                <input
                                    type="range"
                                    min="0" max="20"
                                    value={border}
                                    onChange={(e) => setBorder(Number(e.target.value))}
                                    className="w-full accent-yellow-500 h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between text-xs mb-2">
                                    <span className="text-gray-400">Padding</span>
                                    <span className="text-green-400 font-mono">{padding}px</span>
                                </div>
                                <input
                                    type="range"
                                    min="0" max="50"
                                    value={padding}
                                    onChange={(e) => setPadding(Number(e.target.value))}
                                    className="w-full accent-green-500 h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>
                        </div>

                        <div className="mt-6 p-3 bg-black/50 rounded-lg border border-gray-800 font-mono text-xs text-gray-300">
                            <span className="text-sky-400">.box</span> {'{'}
                            <div className="pl-4">
                                <span className="text-blue-300">margin:</span> <span className="text-orange-400">{margin}px</span>;
                            </div>
                            <div className="pl-4">
                                <span className="text-blue-300">border:</span> <span className="text-yellow-400">{border}px</span> solid <span className="text-gray-500">#444</span>;
                            </div>
                            <div className="pl-4">
                                <span className="text-blue-300">padding:</span> <span className="text-green-400">{padding}px</span>;
                            </div>
                            {'}'}
                        </div>
                    </div>
                </div>

                {/* Visualization */}
                <div className="flex items-center justify-center bg-gray-900 rounded-xl border border-gray-800 p-4 overflow-hidden relative min-h-[300px]">

                    {/* Margin Base */}
                    <motion.div
                        layout
                        className="border border-orange-500/30 bg-orange-500/10 flex items-center justify-center relative"
                        style={{ padding: `${margin}px` }}
                    >
                        <span className="absolute top-1 left-2 text-[10px] text-orange-400 font-mono font-bold">margin</span>

                        {/* Border Base */}
                        <motion.div
                            layout
                            className="bg-yellow-500/20 flex items-center justify-center relative"
                            style={{
                                borderWidth: `${border}px`,
                                borderStyle: 'solid',
                                borderColor: 'rgb(234, 179, 8)' // Tailwind yellow-500 
                            }}
                        >
                            {(border > 5) && <span className="absolute top-0 left-1 text-[10px] text-yellow-500 font-mono font-bold leading-none translate-y-[-100%] pt-0.5">border</span>}

                            {/* Padding Base */}
                            <motion.div
                                layout
                                className="border border-green-500/30 bg-green-500/20 flex items-center justify-center relative"
                                style={{ padding: `${padding}px` }}
                            >
                                <span className="absolute top-1 left-2 text-[10px] text-green-400 font-mono font-bold">padding</span>

                                {/* Content */}
                                <div className="bg-sky-500/30 border border-sky-400/50 p-4 text-center rounded relative min-w-[120px]">
                                    <span className="absolute top-1 left-2 text-[10px] text-sky-300 font-mono font-bold">content</span>
                                    <p className="text-white text-sm font-medium mt-3">Hello, CSS Box!</p>
                                </div>

                            </motion.div>
                        </motion.div>
                    </motion.div>

                </div >
            </div >
        </div >
    );
};

export default CssBoxModelSimulator;
