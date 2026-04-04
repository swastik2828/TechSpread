import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCcw, BoxSelect, Cpu, ArrowRight, LayoutTemplate, Database } from 'lucide-react';

const ObjectVisualizer = () => {
    const [step, setStep] = useState(0);

    const userObj = {
        id: 101,
        name: "Alice",
        role: "admin",
        details: {
            age: 28,
            city: "London"
        }
    };

    const nextStep = () => setStep((s) => (s < 3 ? s + 1 : 0));
    
    // Subcomponents for cleaner animation definitions
    const PropertyRow = ({ propKey, propValue, isDimmed }) => (
        <motion.div 
            animate={{ opacity: isDimmed ? 0.4 : 1, filter: isDimmed ? "grayscale(50%)" : "grayscale(0%)" }}
            className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 p-2 sm:p-3 rounded-lg sm:rounded-xl border transition-colors
                ${isDimmed ? 'bg-gray-800/10 border-gray-800/50' : 'bg-gray-800/30 border-gray-700/50 hover:bg-gray-800/50'}
            `}
        >
            <div className="flex items-center gap-2 w-full sm:w-24 shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                <span className="text-blue-400 font-mono font-bold text-xs sm:text-sm">{propKey}:</span>
            </div>
            <div className="flex-1 sm:text-right">
                 <span className={`font-mono text-xs sm:text-sm px-2 sm:px-3 py-0.5 sm:py-1 rounded bg-opacity-20 inline-block w-fit max-w-full break-all
                     ${typeof propValue === 'number' ? 'text-emerald-400 bg-emerald-900 border border-emerald-800/30' : 'text-amber-200 bg-amber-900 border border-amber-800/30'}
                 `}>
                     {typeof propValue === 'string' ? `"${propValue}"` : propValue}
                 </span>
            </div>
        </motion.div>
    );

    return (
        <div className="w-full bg-[#0a0c10] border border-gray-800/60 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl shadow-black/50 pb-8 my-8 relative">
            {/* Top decorative line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-amber-500 to-rose-500"></div>
            
            {/* Header */}
            <div className="p-4 sm:p-6 md:p-8 border-b border-gray-800/60 bg-gradient-to-b from-gray-900/30 to-transparent flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 mb-1">
                        <BoxSelect className="w-6 h-6 text-amber-400" /> Object Memory & Destructuring
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 max-w-md">
                        Step through to visualize how key-value pairs are stored in the heap and how destructuring extracts values into scoped variables.
                    </p>
                </div>
                
                <button 
                    onClick={nextStep}
                    className="w-full sm:w-auto flex justify-center items-center gap-2 px-5 py-2.5 sm:py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-extrabold rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transform hover:-translate-y-0.5"
                >
                    {step === 3 ? <RefreshCcw className="w-5 h-5 animate-spin-once"/> : <Cpu className="w-5 h-5"/>}
                    <span className="whitespace-nowrap">{step === 3 ? "Reset Simulator" : "Step Forward"}</span>
                </button>
            </div>

            <div className="p-4 sm:p-6 md:p-8 relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mt-2">
                {/* Object Memory Representation (Left Side) */}
                <div className="flex flex-col h-full bg-[#11161d] rounded-2xl border border-gray-800/80 overflow-hidden shadow-inner">
                    <div className="bg-black/40 px-4 py-3 border-b border-gray-800 flex justify-between items-center shrink-0">
                        <span className="text-xs text-gray-500 uppercase tracking-widest font-bold flex items-center gap-2">
                            <Database className="w-3.5 h-3.5" /> Memory: Heap
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-900/30 text-blue-400 border border-blue-800/50 font-mono">0xBEAF</span>
                    </div>
                    
                    <div className="p-4 sm:p-6 flex-1 flex flex-col justify-center">
                        <div className="text-amber-400 font-mono text-sm mb-4 bg-amber-500/5 px-3 py-2 rounded-lg border border-amber-500/20 shadow-sm w-fit">
                            const user = {'{'}
                        </div>
                        
                        <div className="flex flex-col gap-2 sm:gap-3 pl-4 sm:pl-6 relative z-10 border-l-2 border-gray-800/80 my-2">
                            <PropertyRow propKey="id" propValue={101} isDimmed={step >= 3} />
                            <PropertyRow propKey="name" propValue="Alice" isDimmed={step >= 1} />
                            <PropertyRow propKey="role" propValue="admin" isDimmed={step >= 2} />
                            <motion.div 
                                animate={{ opacity: step >= 3 ? 0.4 : 1, filter: step >= 3 ? "grayscale(50%)" : "grayscale(0%)" }}
                                className={`flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 p-2 sm:p-3 rounded-lg sm:rounded-xl border transition-colors bg-gray-800/30 border-gray-700/50`}
                            >
                                <div className="flex items-center gap-2 w-full sm:w-24 shrink-0 pt-0.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                    <span className="text-blue-400 font-mono font-bold text-xs sm:text-sm">details:</span>
                                </div>
                                <div className="flex-1">
                                     <span className="font-mono text-xs sm:text-sm px-2 py-1 rounded bg-blue-900/20 text-blue-300 border border-blue-800/30 block break-all whitespace-pre-wrap leading-relaxed shadow-inner">
                                        {"{\n  age: 28,\n  city: \"London\"\n}"}
                                     </span>
                                </div>
                            </motion.div>
                        </div>
                        
                        <div className="text-amber-400 font-mono text-sm mt-4 bg-amber-500/5 px-3 py-2 rounded-lg border border-amber-500/20 shadow-sm w-fit">
                            {'}'};
                        </div>
                    </div>
                </div>

                {/* Destructuring Action Details (Right Side) */}
                <div className="flex flex-col h-full bg-[#11161d] rounded-2xl border border-gray-800/80 overflow-hidden shadow-inner">
                     <div className="bg-black/40 px-4 py-3 border-b border-gray-800 flex justify-between items-center shrink-0">
                        <span className="text-xs text-gray-500 uppercase tracking-widest font-bold flex items-center gap-2">
                            <LayoutTemplate className="w-3.5 h-3.5" /> Execution Scope
                        </span>
                        <div className="flex gap-1">
                            {[0,1,2,3].map(i => (
                                <div key={i} className={`w-2 h-2 rounded-full ${step >= i ? 'bg-amber-500 shadow-[0_0_8px_rgba(251,191,36,0.8)]' : 'bg-gray-700'}`} />
                            ))}
                        </div>
                    </div>
                     
                     <div className="p-4 sm:p-6 flex flex-col justify-center flex-1 h-full min-h-[300px]">
                        
                        {step === 0 && (
                            <motion.div 
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                className="text-center flex flex-col items-center justify-center h-full text-gray-500"
                            >
                                <div className="w-16 h-16 rounded-full bg-gray-800/50 flex items-center justify-center mb-4 border border-gray-700">
                                    <ArrowRight className="w-8 h-8 text-gray-600 animate-pulse" />
                                </div>
                                <p className="italic mb-2 text-sm sm:text-base px-4">Click "Step Forward" to execute the destructuring assignment.</p>
                            </motion.div>
                        )}

                        <AnimatePresence mode="wait">
                            {(step > 0) && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="w-full flex-1 flex flex-col shrink-0"
                                >
                                    <code className="block text-center sm:text-left text-rose-400 font-mono bg-rose-500/10 border border-rose-500/20 p-3 sm:p-4 rounded-xl mb-6 text-xs sm:text-sm shadow-inner break-all relative">
                                        <div className="absolute right-3 top-3 text-[10px] text-rose-500 uppercase tracking-widest border border-rose-500/20 p-1 rounded hidden sm:block">Code</div>
                                        <span className="text-purple-400">const</span> {'{ '} 
                                        <span className={step >= 1 ? 'text-white font-bold bg-white/10 px-1 rounded transition-colors' : ''}>name</span>,{' '}
                                        <span className={step >= 2 ? 'text-white font-bold bg-white/10 px-1 rounded transition-colors' : ''}>role</span>,{' '}
                                        <span className={step >= 3 ? 'text-white font-bold bg-white/10 px-1 rounded transition-colors' : ''}>...rest</span> 
                                        {' }'} <span className="text-teal-400">=</span> user;
                                    </code>

                                    <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3 pl-1">Variables Setup:</div>
                                    <div className="flex flex-col gap-3 sm:gap-4 overflow-x-hidden">
                                        <AnimatePresence>
                                            {step >= 1 && (
                                                <motion.div 
                                                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                                    className="flex flex-col sm:flex-row justify-between sm:items-center bg-gray-900/60 p-3 sm:p-4 rounded-xl border border-gray-700 shadow-md gap-2"
                                                >
                                                    <span className="text-teal-400 font-mono font-bold text-sm sm:text-base flex items-center gap-2">
                                                        <div className="w-6 h-6 rounded-md bg-teal-500/10 text-teal-400 flex items-center justify-center text-xs">V1</div>
                                                        name
                                                    </span>
                                                    <ArrowRight className="w-4 h-4 text-gray-600 hidden sm:block rotate-90 sm:rotate-0 self-center" />
                                                    <span className="text-amber-200 font-mono bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-lg text-sm sm:text-base inline-block self-start sm:self-auto shadow-inner">
                                                        "Alice"
                                                    </span>
                                                </motion.div>
                                            )}
                                            {step >= 2 && (
                                                <motion.div 
                                                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                                    className="flex flex-col sm:flex-row justify-between sm:items-center bg-gray-900/60 p-3 sm:p-4 rounded-xl border border-gray-700 shadow-md gap-2"
                                                >
                                                    <span className="text-teal-400 font-mono font-bold text-sm sm:text-base flex items-center gap-2">
                                                        <div className="w-6 h-6 rounded-md bg-teal-500/10 text-teal-400 flex items-center justify-center text-xs">V2</div>
                                                        role
                                                    </span>
                                                    <ArrowRight className="w-4 h-4 text-gray-600 hidden sm:block rotate-90 sm:rotate-0 self-center" />
                                                    <span className="text-amber-200 font-mono bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-lg text-sm sm:text-base inline-block self-start sm:self-auto shadow-inner">
                                                        "admin"
                                                    </span>
                                                </motion.div>
                                            )}
                                            {step >= 3 && (
                                                <motion.div 
                                                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                                    className="flex justify-between items-start bg-blue-950/20 p-3 sm:p-4 rounded-xl border border-blue-900/50 shadow-md gap-4 sm:flex-row flex-col"
                                                >
                                                    <span className="text-blue-300 font-mono font-bold text-sm sm:text-base flex items-center gap-2 shrink-0 pt-1">
                                                        <div className="w-6 h-6 rounded-md bg-blue-500/10 text-blue-400 flex items-center justify-center text-xs">V3</div>
                                                        rest <span className="text-xs text-blue-500 font-normal uppercase tag">(Object)</span>
                                                    </span>
                                                    <ArrowRight className="w-4 h-4 text-gray-600 hidden sm:block mt-2 self-start" />
                                                    <span className="text-blue-200 font-mono bg-blue-950 border border-blue-800/40 px-3 py-2 rounded-lg text-xs sm:text-sm leading-relaxed whitespace-pre-wrap break-all shadow-inner block w-full sm:w-auto overflow-x-auto">
                                                        {"{\n  id: 101,\n  details: {…}\n}"}
                                                    </span>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default ObjectVisualizer;
