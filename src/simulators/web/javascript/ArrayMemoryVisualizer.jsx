import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Plus, RefreshCcw, Layers } from 'lucide-react';

const ArrayMemoryVisualizer = () => {
    const [arrayState, setArrayState] = useState([]);
    const [isAnimating, setIsAnimating] = useState(false);

    const memoryBlocks = Array.from({ length: 5 }); // visual limit of 5 for display
    const itemsToAdd = ["'Apple'", "'Banana'", "'Cherry'", "42", "true"];

    const handleAdd = async () => {
        if (isAnimating || arrayState.length >= 5) return;
        setIsAnimating(true);
        
        const newItem = itemsToAdd[arrayState.length];
        
        await new Promise(r => setTimeout(r, 400));
        setArrayState(prev => [...prev, newItem]);
        setIsAnimating(false);
    };

    const handleReset = () => {
        if (isAnimating) return;
        setArrayState([]);
    };

    return (
        <div className="w-full bg-[#0a0c10] border border-gray-800/80 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl pb-8 my-8 relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600"></div>
            
            <div className="p-4 sm:p-6 md:p-8 border-b border-gray-800/60 bg-gradient-to-b from-gray-900/50 to-transparent flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 mb-1">
                        <Layers className="w-6 h-6 text-amber-400" /> Array Memory Structure
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 max-w-md line-clamp-2">
                        Visualize how arrays are contiguous, zero-indexed structures storing elements continuously in memory.
                    </p>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                     <button 
                        onClick={handleAdd}
                        disabled={arrayState.length >= 5 || isAnimating}
                        className={`flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-xl font-bold transition-all text-sm
                            ${arrayState.length >= 5 ? 'bg-gray-800 text-gray-500 cursor-not-allowed border border-gray-700' : 'bg-amber-500 text-black hover:bg-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.3)]'}
                        `}
                    >
                        <Plus className="w-4 h-4 sm:w-5 sm:h-5" /> Push Element
                    </button>
                    <button 
                        onClick={handleReset}
                        disabled={isAnimating}
                        className="p-2 sm:p-2.5 rounded-xl bg-gray-800/80 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors border border-gray-700"
                        title="Reset"
                    >
                        <RefreshCcw className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                </div>
            </div>

            <div className="p-4 sm:p-6 md:p-8 relative">
                {/* Code Representation */}
                <div className="mb-8">
                    <div className="bg-black/40 border border-gray-800/80 p-4 sm:p-5 rounded-xl sm:rounded-2xl flex flex-col font-mono text-sm sm:text-base w-full overflow-x-auto">
                        <div className="flex gap-2">
                            <span className="text-amber-500">const</span>
                            <span className="text-emerald-400">arr</span>
                            <span className="text-gray-300">=</span>
                            <span className="text-yellow-200">[</span>
                        </div>
                        <div className="pl-8 flex text-gray-300 min-h-[1.5rem]">
                            <AnimatePresence>
                                {arrayState.map((item, idx) => (
                                    <motion.span 
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0 }}
                                        key={idx}
                                        className="text-amber-200 break-all"
                                    >
                                        {item}{idx < arrayState.length - 1 ? <span className="text-gray-400 mr-2">,</span> : ''}
                                    </motion.span>
                                ))}
                            </AnimatePresence>
                            {arrayState.length === 0 && <span className="text-gray-600 italic"> // Empty container </span>}
                        </div>
                        <div className="text-yellow-200">]</div>
                    </div>
                </div>

                {/* Conceptual Memory Allocation */}
                <div className="mt-8">
                    <div className="flex items-center gap-2 mb-4">
                        <Database className="w-5 h-5 text-teal-400" />
                        <h4 className="text-gray-300 font-bold uppercase tracking-wider text-sm sm:text-base">Contiguous Memory Allocation</h4>
                    </div>

                    <div className="flex flex-col gap-2 bg-[#121820]/50 p-4 sm:p-6 rounded-xl sm:rounded-3xl border border-gray-800/50">
                        {memoryBlocks.map((_, index) => {
                            const isOccupied = index < arrayState.length;
                            const value = isOccupied ? arrayState[index] : null;

                            return (
                                <div key={index} className="flex flex-col sm:flex-row items-stretch sm:items-center p-3 sm:p-4 bg-[#1a212d] border border-gray-800 rounded-lg sm:rounded-xl relative overflow-hidden group hover:border-amber-500/30 transition-colors">
                                    {/* Sub-bg effect */}
                                    {isOccupied && (
                                        <motion.div 
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            transition={{ duration: 0.4, ease: "easeOut" }}
                                            className="absolute inset-0 bg-gradient-to-r from-teal-900/40 to-transparent origin-left z-0"
                                        />
                                    )}

                                    {/* Index Column */}
                                    <div className="w-full sm:w-24 shrink-0 flex items-center justify-between sm:justify-start gap-4 mb-2 sm:mb-0 relative z-10 px-2 sm:px-4 sm:border-r border-gray-700">
                                        <span className="text-xs font-bold text-gray-500">INDEX</span>
                                        <span className={`text-lg sm:text-xl font-black font-mono transition-colors ${isOccupied ? 'text-teal-400' : 'text-gray-600'}`}>
                                            {index}
                                        </span>
                                    </div>
                                    
                                    {/* Value Column */}
                                    <div className="flex-1 relative z-10 flex items-center px-2 sm:px-6">
                                        {isOccupied ? (
                                            <AnimatePresence>
                                                <motion.div 
                                                    initial={{ opacity: 0, y: 15 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="flex items-center gap-3 w-full border border-teal-500/20 bg-teal-950/30 p-2 sm:p-3 rounded-md sm:rounded-lg shadow-inner"
                                                >
                                                    <span className="text-[10px] sm:text-xs text-teal-500 font-bold uppercase tracking-widest bg-teal-900/50 px-2 py-0.5 rounded shrink-0">VALUE</span>
                                                    <span className="font-mono text-amber-200 text-sm sm:text-lg break-all">
                                                        {value}
                                                    </span>
                                                </motion.div>
                                            </AnimatePresence>
                                        ) : (
                                            <div className="text-gray-600 font-mono italic text-sm py-2 px-2 border border-transparent">
                                                [ Empty Element / Hole ]
                                            </div>
                                        )}
                                    </div>

                                    {/* Memory address simulation */}
                                    <div className="absolute right-3 top-2 sm:top-auto sm:-translate-y-0 opacity-20 group-hover:opacity-60 transition-opacity">
                                        <span className="text-[10px] font-mono text-gray-400">0x00FF{index * 8}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {/* Footnote */}
                    <p className="text-right mt-4 text-xs text-gray-500 font-mono">
                        Array length: <span className="text-amber-500">{arrayState.length}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ArrayMemoryVisualizer;
