import React, { useState } from 'react';

const CssZIndexSimulator = () => {
    const [box1Z, setBox1Z] = useState(1);
    const [box2Z, setBox2Z] = useState(2);
    const [box3Z, setBox3Z] = useState(3);
    const [parent1Z, setParent1Z] = useState('auto');
    const [parent2Z, setParent2Z] = useState('auto');
    const [is3D, setIs3D] = useState(false);

    // Analysis logic to generate dynamic explanation
    const generateAnalysis = () => {
        let p1Context = parent1Z !== 'auto';
        let p2Context = parent2Z !== 'auto';

        if (!p1Context && !p2Context) {
            return "Both parents have z-index 'auto'. No new stacking contexts are created by the parents. The boxes will stack based entirely on their own z-index values.";
        } else if (p1Context && !p2Context) {
            return `Parent 1 creates a stacking context (z-index: ${parent1Z}). Parent 2 does not. Red Box is trapped inside Parent 1's context. Its z-index (${box1Z}) only matters inside Parent 1.`;
        } else if (!p1Context && p2Context) {
            return `Parent 2 creates a stacking context (z-index: ${parent2Z}). Parent 1 does not. Blue and Green boxes are trapped inside Parent 2's context.`;
        } else {
            let p1Val = Number(parent1Z);
            let p2Val = Number(parent2Z);
            if (p1Val > p2Val) {
                return `Both parents create stacking contexts. Parent 1 (${p1Val}) > Parent 2 (${p2Val}). Therefore, Parent 1 and ALL its children (Red) will appear ON TOP of Parent 2 and ALL its children (Blue, Green), completely ignoring the children's individual z-index values!`;
            } else if (p2Val > p1Val) {
                return `Both parents create stacking contexts. Parent 2 (${p2Val}) > Parent 1 (${p1Val}). Therefore, Parent 2 and ALL its children (Blue, Green) will appear ON TOP of Parent 1 and its children (Red), completely ignoring the children's individual z-index values!`;
            } else {
                return `Both parents create stacking contexts and have the SAME z-index (${p1Val}). Since Parent 2 appears later in the HTML, Parent 2 wins and its children will render on top!`;
            }
        }
    };

    return (
        <div className="bg-[#0A0A0A] p-4 md:p-6 rounded-xl border border-gray-800 my-8 shadow-2xl font-sans">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="bg-purple-500/20 text-purple-400 p-2 rounded-lg">🥞</span>
                    Stacking Contexts & Z-Index
                </h3>
                <button
                    onClick={() => setIs3D(!is3D)}
                    className={`text-sm px-4 py-2 rounded-lg font-bold transition-all ${is3D ? 'bg-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]' : 'bg-[#1A1A1A] text-gray-400 hover:text-white border border-gray-700'}`}
                >
                    {is3D ? '2D View' : '3D Depth View'}
                </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Controls */}
                <div className="lg:col-span-5 space-y-4">
                    <div className="bg-purple-900/10 border border-purple-500/30 p-4 rounded-lg text-sm text-purple-200 leading-relaxed shadow-inner">
                        <strong>Analysis:</strong> {generateAnalysis()}
                    </div>

                    <div className="bg-[#111] p-3 sm:p-4 rounded-lg border border-gray-800 transition-colors hover:border-gray-700">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-2">
                            <span className="text-sm font-bold text-gray-300 flex items-center gap-2">
                                <div className="w-3 h-3 bg-gray-600 rounded-sm"></div> Parent Container 1
                            </span>
                            <div className="flex items-center gap-2 self-end sm:self-auto">
                                <span className="text-xs text-gray-500">z-index:</span>
                                <select
                                    value={parent1Z}
                                    onChange={(e) => setParent1Z(e.target.value)}
                                    className="bg-[#1A1A1A] text-white border border-gray-700 rounded text-sm px-2 py-1 focus:outline-none focus:border-purple-500 cursor-pointer"
                                >
                                    <option value="auto">auto (no context)</option>
                                    <option value="1">1</option>
                                    <option value="10">10</option>
                                </select>
                            </div>
                        </div>
                        <div className="ml-2 sm:ml-5 border-l-2 border-red-500/30 pl-3 sm:pl-4 py-2">
                            <div className="flex justify-between items-center bg-[#1A1A1A] p-2 rounded border border-gray-800">
                                <span className="text-sm text-red-400 font-bold flex items-center gap-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-sm"></div> Red Box
                                </span>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-gray-500">z-index:</span>
                                    <input
                                        type="number"
                                        value={box1Z}
                                        onChange={(e) => setBox1Z(Number(e.target.value))}
                                        className="w-16 bg-[#111] text-white border border-gray-700 rounded text-sm px-2 py-1 text-center focus:border-red-500 outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#111] p-3 sm:p-4 rounded-lg border border-gray-800 transition-colors hover:border-gray-700">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-2">
                            <span className="text-sm font-bold text-gray-300 flex items-center gap-2">
                                <div className="w-3 h-3 bg-gray-600 rounded-sm"></div> Parent Container 2
                            </span>
                            <div className="flex items-center gap-2 self-end sm:self-auto">
                                <span className="text-xs text-gray-500">z-index:</span>
                                <select
                                    value={parent2Z}
                                    onChange={(e) => setParent2Z(e.target.value)}
                                    className="bg-[#1A1A1A] text-white border border-gray-700 rounded text-sm px-2 py-1 focus:outline-none focus:border-purple-500 cursor-pointer"
                                >
                                    <option value="auto">auto (no context)</option>
                                    <option value="2">2</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>
                        <div className="ml-2 sm:ml-5 border-l-2 border-blue-500/30 pl-3 sm:pl-4 py-2 space-y-2">
                            <div className="flex justify-between items-center bg-[#1A1A1A] p-2 rounded border border-gray-800">
                                <span className="text-sm text-blue-400 font-bold flex items-center gap-2">
                                    <div className="w-3 h-3 bg-blue-500 rounded-sm"></div> Blue Box
                                </span>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-gray-500">z-index:</span>
                                    <input
                                        type="number"
                                        value={box2Z}
                                        onChange={(e) => setBox2Z(Number(e.target.value))}
                                        className="w-16 bg-[#111] text-white border border-gray-700 rounded text-sm px-2 py-1 text-center focus:border-blue-500 outline-none"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between items-center bg-[#1A1A1A] p-2 rounded border border-gray-800">
                                <span className="text-sm text-emerald-400 font-bold flex items-center gap-2">
                                    <div className="w-3 h-3 bg-emerald-500 rounded-sm"></div> Green Box
                                </span>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-gray-500">z-index:</span>
                                    <input
                                        type="number"
                                        value={box3Z}
                                        onChange={(e) => setBox3Z(Number(e.target.value))}
                                        className="w-16 bg-[#111] text-white border border-gray-700 rounded text-sm px-2 py-1 text-center focus:border-emerald-500 outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Preview */}
                <div className="lg:col-span-7 bg-[#161616] rounded-xl border border-gray-700 overflow-hidden relative min-h-[400px] flex items-center justify-center p-4 perspective-1000">
                    <div 
                        className="w-[90%] max-w-[400px] h-[350px] relative transition-transform duration-700 ease-in-out transform-style-3d"
                        style={{
                            transform: is3D ? 'rotateX(55deg) rotateZ(-30deg)' : 'rotateX(0deg) rotateZ(0deg)',
                            transformStyle: 'preserve-3d'
                        }}
                    >
                        
                        {/* Parent 1 */}
                        <div 
                            className="absolute top-0 left-0 w-[70%] h-[180px] bg-gray-800/80 border-2 border-gray-600 rounded flex items-start p-2 text-xs text-gray-300 shadow-2xl transition-all duration-500"
                            style={{ 
                                position: 'relative', 
                                zIndex: parent1Z !== 'auto' ? Number(parent1Z) : 'auto',
                                transform: is3D ? `translateZ(${parent1Z !== 'auto' ? Number(parent1Z) * 20 : 0}px)` : 'none',
                                transformStyle: 'preserve-3d'
                            }}
                        >
                            <div className="font-mono bg-black/50 px-2 py-1 rounded">Parent 1 {parent1Z !== 'auto' ? `(z: ${parent1Z})` : '(z: auto)'}</div>
                            
                            {/* Red Box */}
                            <div 
                                className="absolute top-10 left-2 sm:left-6 w-20 h-20 sm:w-32 sm:h-32 bg-red-500/95 border border-red-400 rounded-lg shadow-[0_10px_30px_rgba(239,68,68,0.4)] flex flex-col items-center justify-center text-white font-bold transition-all duration-500"
                                style={{ 
                                    zIndex: box1Z,
                                    transform: is3D ? `translateZ(${box1Z * 20 + 20}px)` : 'none'
                                }}
                            >
                                <span className="text-lg drop-shadow-md">Red</span>
                                <span className="text-xs bg-black/40 px-2 py-1 rounded mt-1 font-mono">z-index: {box1Z}</span>
                            </div>
                        </div>

                        {/* Parent 2 */}
                        <div 
                            className="absolute top-[120px] left-[20%] w-[80%] h-[200px] bg-gray-700/80 border-2 border-gray-500 rounded flex items-start p-2 text-xs text-gray-200 shadow-2xl transition-all duration-500"
                            style={{ 
                                position: 'relative', 
                                zIndex: parent2Z !== 'auto' ? Number(parent2Z) : 'auto',
                                transform: is3D ? `translateZ(${parent2Z !== 'auto' ? Number(parent2Z) * 20 : 0}px)` : 'none',
                                transformStyle: 'preserve-3d'
                            }}
                        >
                            <div className="font-mono bg-black/50 px-2 py-1 rounded">Parent 2 {parent2Z !== 'auto' ? `(z: ${parent2Z})` : '(z: auto)'}</div>
                            
                            {/* Blue Box */}
                            <div 
                                className="absolute top-10 left-2 sm:left-4 w-20 h-20 sm:w-32 sm:h-32 bg-blue-500/95 border border-blue-400 rounded-lg shadow-[0_10px_30px_rgba(59,130,246,0.4)] flex flex-col items-center justify-center text-white font-bold transition-all duration-500"
                                style={{ 
                                    zIndex: box2Z,
                                    transform: is3D ? `translateZ(${box2Z * 20 + 20}px)` : 'none'
                                }}
                            >
                                <span className="text-lg drop-shadow-md">Blue</span>
                                <span className="text-xs bg-black/40 px-2 py-1 rounded mt-1 font-mono">z-index: {box2Z}</span>
                            </div>

                            {/* Green Box */}
                            <div 
                                className="absolute top-16 left-12 sm:top-20 sm:left-28 w-20 h-20 sm:w-32 sm:h-32 bg-emerald-500/95 border border-emerald-400 rounded-lg shadow-[0_10px_30px_rgba(16,185,129,0.4)] flex flex-col items-center justify-center text-white font-bold transition-all duration-500"
                                style={{ 
                                    zIndex: box3Z,
                                    transform: is3D ? `translateZ(${box3Z * 20 + 20}px)` : 'none'
                                }}
                            >
                                <span className="text-lg drop-shadow-md">Green</span>
                                <span className="text-xs bg-black/40 px-2 py-1 rounded mt-1 font-mono">z-index: {box3Z}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <style dangerouslySetInnerHTML={{__html: `
                .perspective-1000 {
                    perspective: 1000px;
                }
                .transform-style-3d {
                    transform-style: preserve-3d;
                }
            `}} />
        </div>
    );
};

export default CssZIndexSimulator;
