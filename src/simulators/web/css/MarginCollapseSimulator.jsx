import React, { useState } from 'react';
import { ArrowDownUp, Settings } from 'lucide-react';

const MarginCollapseSimulator = () => {
    const [margin1, setMargin1] = useState(40);
    const [margin2, setMargin2] = useState(30);

    // Calculate actual gap based on standard margin collapse rules
    const actualGap = Math.max(margin1, margin2);
    
    // Convert visually for demo purposes (px to scale)
    const displayGap = actualGap;

    return (
        <div className="my-8 bg-[#0d1117] border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-gray-800">
                <div className="flex items-center gap-2 text-rose-400">
                    <ArrowDownUp size={18} />
                    <span className="font-bold text-sm">Visualizing Margin Collapse</span>
                </div>
            </div>

            <div className="p-4 md:p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Controls */}
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-medium text-gray-300">Top Element: margin-bottom</label>
                            <span className="text-purple-400 font-mono text-sm">{margin1}px</span>
                        </div>
                        <input 
                            type="range" min="0" max="80" value={margin1} 
                            onChange={(e) => setMargin1(Number(e.target.value))}
                            className="w-full accent-purple-500"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-medium text-gray-300">Bottom Element: margin-top</label>
                            <span className="text-blue-400 font-mono text-sm">{margin2}px</span>
                        </div>
                        <input 
                            type="range" min="0" max="80" value={margin2} 
                            onChange={(e) => setMargin2(Number(e.target.value))}
                            className="w-full accent-blue-500"
                        />
                    </div>

                    <div className="bg-[#161b22] rounded-lg p-5 border border-gray-800 font-mono text-sm">
                        <div className="flex justify-between mb-4 pb-4 border-b border-gray-700">
                            <span className="text-gray-400">Calculated sum:</span>
                            <span className="text-gray-500 line-through">{margin1 + margin2}px</span>
                        </div>
                        <div className="flex justify-between items-center bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/20">
                            <span className="text-emerald-400 font-bold">Actual Gap Rendered:</span>
                            <span className="text-emerald-400 font-bold text-lg">{actualGap}px</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-3 italic">
                            The larger margin ({actualGap}px) "swallows" the smaller margin. They do not add together!
                        </p>
                    </div>
                </div>

                {/* Visualization */}
                <div className="flex flex-col items-center justify-center bg-[#0a0a0a] rounded-xl border border-gray-800 relative py-12 px-4 shadow-inner">
                    
                    {/* Box 1 */}
                    <div className="bg-purple-500/20 border border-purple-500 w-full max-w-[250px] h-20 rounded-t-lg flex items-center justify-center z-10">
                        <span className="font-bold text-purple-300 text-sm">Element 1</span>
                    </div>

                    {/* Gap Indicator Area */}
                    <div className="w-full max-w-[250px] relative flex justify-center h-full transition-all duration-300 ease-out" style={{ height: `${displayGap}px` }}>
                        
                        {/* Box 1 Margin Visualized */}
                        <div 
                            className="absolute top-0 w-3/4 bg-purple-500/10 border-x border-b border-purple-500/30 border-dashed rounded-b opacity-70 transition-all duration-300"
                            style={{ height: `${margin1}px` }}
                        >
                             <div className="absolute right-2 top-1 text-[10px] text-purple-400">{margin1}px</div>
                        </div>

                        {/* Box 2 Margin Visualized */}
                        <div 
                            className="absolute bottom-0 w-2/4 bg-blue-500/10 border-x border-t border-blue-500/30 border-dashed rounded-t opacity-70 transition-all duration-300"
                            style={{ height: `${margin2}px` }}
                        >
                            <div className="absolute left-2 bottom-1 text-[10px] text-blue-400">{margin2}px</div>
                        </div>

                        {/* Actual Gap Measurement Line */}
                        <div className="absolute left-1/2 -translate-x-1/2 h-full flex items-center h-full w-full justify-center">
                            <div className="w-8 border-l-2 border-emerald-500 h-full relative">
                                <div className="absolute -top-1 -left-1.5 w-3 h-px bg-emerald-500" />
                                <div className="absolute -bottom-1 -left-1.5 w-3 h-px bg-emerald-500" />
                                <div className="absolute top-1/2 -translate-y-1/2 -left-24 bg-[#0a0a0a] px-2 py-1 rounded text-xs font-bold text-emerald-400 whitespace-nowrap border border-emerald-500/30">
                                    Gap = {actualGap}px
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Box 2 */}
                    <div className="bg-blue-500/20 border border-blue-500 w-full max-w-[250px] h-20 rounded-b-lg flex items-center justify-center z-10 transition-all duration-300 ease-out">
                        <span className="font-bold text-blue-300 text-sm">Element 2</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MarginCollapseSimulator;
