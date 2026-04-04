import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, ArrowRight, Activity, Filter, GitMerge, FileCode } from 'lucide-react';

const ArrayVisualizer = () => {
    const defaultArray = [10, 15, 20, 25, 30];
    const [sourceArray, setSourceArray] = useState(defaultArray);
    const [resultArray, setResultArray] = useState(null);
    const [activeMethod, setActiveMethod] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(-1);

    const methods = {
        map: {
            title: 'arr.map(x => x * 2)',
            icon: Activity,
            desc: 'Creates a new array with the results of calling the function on every element.',
            code: 'const doubled = arr.map(x => x * 2);',
            run: async () => {
                setIsAnimating(true);
                setResultArray([]);
                let temp = [];
                for (let i = 0; i < defaultArray.length; i++) {
                    setCurrentIndex(i);
                    await new Promise(r => setTimeout(r, 600));
                    temp.push(defaultArray[i] * 2);
                    setResultArray([...temp]);
                }
                setCurrentIndex(-1);
                setIsAnimating(false);
            }
        },
        filter: {
            title: 'arr.filter(x => x >= 20)',
            icon: Filter,
            desc: 'Creates a new array with all elements that pass the test implemented by the function.',
            code: 'const large = arr.filter(x => x >= 20);',
            run: async () => {
                setIsAnimating(true);
                setResultArray([]);
                let temp = [];
                for (let i = 0; i < defaultArray.length; i++) {
                    setCurrentIndex(i);
                    await new Promise(r => setTimeout(r, 600));
                    if (defaultArray[i] >= 20) {
                        temp.push(defaultArray[i]);
                        setResultArray([...temp]);
                    }
                }
                setCurrentIndex(-1);
                setIsAnimating(false);
            }
        },
        reduce: {
            title: 'arr.reduce((sum, x) => sum + x, 0)',
            icon: GitMerge,
            desc: 'Executes a reducer function on each element, passing in the return value from the preceding calculation.',
            code: 'const sum = arr.reduce((acc, x) => acc + x, 0);',
            run: async () => {
                setIsAnimating(true);
                setResultArray([0]);
                let tempSum = 0;
                for (let i = 0; i < defaultArray.length; i++) {
                    setCurrentIndex(i);
                    await new Promise(r => setTimeout(r, 800));
                    tempSum += defaultArray[i];
                    setResultArray([tempSum]);
                }
                setCurrentIndex(-1);
                setIsAnimating(false);
            }
        }
    };

    const handleRun = async (key) => {
        if (isAnimating) return;
        setActiveMethod(key);
        await methods[key].run();
    };

    const reset = () => {
        if (isAnimating) return;
        setActiveMethod(null);
        setResultArray(null);
        setCurrentIndex(-1);
    };

    return (
        <div className="w-full bg-[#0d1117] border border-gray-800/60 rounded-2xl overflow-hidden shadow-2xl">
            {/* Header Controls */}
            <div className="p-4 sm:p-6 border-b border-gray-800/60 bg-black/40">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <FileCode className="w-5 h-5 text-amber-400" /> Array Methods Visualizer
                    </h3>
                    <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
                        {Object.keys(methods).map(key => {
                            const Icon = methods[key].icon;
                            const isActive = activeMethod === key;
                            return (
                                <button
                                    key={key}
                                    onClick={() => handleRun(key)}
                                    disabled={isAnimating}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap
                                        ${isActive ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(251,191,36,0.3)]' : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700'}
                                        ${isAnimating && !isActive ? 'opacity-50 cursor-not-allowed' : ''}
                                    `}
                                >
                                    <Icon className="w-4 h-4" /> {key.toUpperCase()}
                                </button>
                            );
                        })}
                        <button
                            onClick={reset}
                            disabled={isAnimating}
                            className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:bg-rose-500/20 hover:text-rose-400 border border-transparent hover:border-rose-500/30 transition-all flex item-center justify-center shrink-0"
                            title="Reset Simulator"
                        >
                            <RotateCcw className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="p-4 sm:p-8 relative min-h-[400px] flex flex-col gap-10">
                {activeMethod && (
                    <div className="bg-amber-900/10 border border-amber-500/20 p-4 rounded-xl text-center shadow-inner">
                        <code className="text-amber-400 text-sm sm:text-base font-mono">{methods[activeMethod].code}</code>
                        <p className="text-teal-200 mt-2 text-xs sm:text-sm">{methods[activeMethod].desc}</p>
                    </div>
                )}

                {/* Source Array */}
                <div className="relative">
                    <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3 pl-2">Original Array</div>
                    <div className="flex flex-wrap gap-2 sm:gap-4 p-4 rounded-xl bg-black/30 border border-gray-800 border-dashed">
                        {sourceArray.map((num, i) => (
                            <div key={`src-${i}`} className="flex flex-col items-center">
                                <span className="text-[10px] text-gray-500 mb-1 font-mono">[{i}]</span>
                                <motion.div
                                    animate={{
                                        scale: currentIndex === i ? 1.1 : 1,
                                        borderColor: currentIndex === i ? '#fbbf24' : '#374151',
                                        boxShadow: currentIndex === i ? '0 0 20px rgba(251,191,36,0.4)' : 'none',
                                    }}
                                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gray-800 flex items-center justify-center text-lg sm:text-xl font-bold text-white border-2 relative z-10"
                                >
                                    {num}
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Transformation Area */}
                <div className="flex justify-center -my-4 relative z-0 opacity-50">
                    <ArrowRight className="w-8 h-8 text-amber-500 rotate-90" />
                </div>

                {/* Result Array */}
                <div className="relative min-h-[120px]">
                    <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3 pl-2">Result {activeMethod === 'reduce' ? 'Value' : 'Array'}</div>
                    <div className="flex flex-wrap gap-2 sm:gap-4 p-4 rounded-xl bg-amber-900/5 border border-amber-500/10 min-h-[100px]">
                        <AnimatePresence>
                            {resultArray && resultArray.map((num, i) => (
                                <motion.div
                                    key={`res-${num}-${i}`}
                                    initial={{ opacity: 0, y: -20, scale: 0.5 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    className="flex flex-col items-center"
                                >
                                    <span className="text-[10px] text-gray-500 mb-1 font-mono">{activeMethod === 'reduce' ? 'ACC' : `[${i}]`}</span>
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-amber-500 text-black flex items-center justify-center text-lg sm:text-xl font-black shadow-[0_4px_20px_rgba(251,191,36,0.3)]">
                                        {num}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {!resultArray && (
                           <div className="w-full flex items-center justify-center text-gray-600 italic text-sm">
                               Run a transformation method to see results
                           </div> 
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArrayVisualizer;
