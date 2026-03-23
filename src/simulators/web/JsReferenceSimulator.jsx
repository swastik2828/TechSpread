import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Copy, ShieldAlert, Cpu, ArrowRight } from 'lucide-react';

const JsReferenceSimulator = () => {
    const [step, setStep] = useState(0);

    const steps = [
        {
            title: "1. Declaration",
            desc: "const original = [1, 2, 3];",
            stack: [ { var: "original", val: "0xAB12" } ],
            heap: [ { addr: "0xAB12", data: "[ 1, 2, 3 ]", active: true } ],
            console: "Memory allocated in heap. Pointer saved in stack."
        },
        {
            title: "2. Assignment (Shared Ref)",
            desc: "const copied = original;",
            stack: [ { var: "original", val: "0xAB12" }, { var: "copied", val: "0xAB12" } ],
            heap: [ { addr: "0xAB12", data: "[ 1, 2, 3 ]", active: true } ],
            console: "Address 0xAB12 copied! Both variables point to the exact same heap memory."
        },
        {
            title: "3. Mutation",
            desc: "copied.push(4);",
            stack: [ { var: "original", val: "0xAB12" }, { var: "copied", val: "0xAB12" } ],
            heap: [ { addr: "0xAB12", data: "[ 1, 2, 3, 4 ]", active: true, mutate: true } ],
            console: "Data at 0xAB12 mutated. 'original' sees the inherited change automatically!"
        },
        {
            title: "4. Shallow Clone (Fix)",
            desc: "const cloned = [...original];",
            stack: [ { var: "original", val: "0xAB12" }, { var: "copied", val: "0xAB12" }, { var: "cloned", val: "0xCD34" } ],
            heap: [ 
                { addr: "0xAB12", data: "[ 1, 2, 3, 4 ]", active: false },
                { addr: "0xCD34", data: "[ 1, 2, 3, 4 ]", active: true, secure: true }
            ],
            console: "Spread operator creates a completely new array in memory with a fresh address."
        }
    ];

    const current = steps[step];

    return (
        <div className="w-full bg-[#0d1117] border border-gray-800 rounded-2xl overflow-hidden font-sans my-8 shadow-2xl">
            <div className="bg-[#161b22] p-4 border-b border-gray-800 flex justify-between items-center">
                <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-emerald-500" /> Stack vs Heap Memory Visualizer
                </h3>
                <div className="flex gap-2">
                    <button 
                        onClick={() => setStep(0)}
                        className="p-1.5 rounded bg-gray-800 hover:bg-gray-700 text-gray-400 transition"
                        title="Reset"
                    >
                        Reset
                    </button>
                    <button 
                        onClick={() => setStep(s => Math.min(s + 1, steps.length - 1))}
                        disabled={step === steps.length - 1}
                        className="px-4 py-1.5 rounded bg-amber-500 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-amber-400 text-black font-bold text-sm flex items-center gap-2 transition"
                    >
                        <Play className="w-4 h-4" /> Next Step
                    </button>
                </div>
            </div>

            <div className="p-6 bg-[#0a0c10]">
                {/* Active Code Execution */}
                <div className="mb-8">
                    <h4 className="text-white text-lg font-bold mb-2">{current.title}</h4>
                    <div className="px-4 py-3 bg-black/60 border border-gray-800 rounded-lg font-mono text-amber-400 text-lg sm:text-xl">
                        {current.desc}
                    </div>
                </div>

                {/* Memory Diagram */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 mb-8">
                    {/* The Stack */}
                    <div className="bg-[#161b22] border border-purple-500/30 rounded-xl p-4 relative">
                        <div className="absolute top-0 right-0 px-3 py-1 bg-purple-500/20 text-purple-300 text-[10px] font-black uppercase tracking-widest rounded-bl-xl rounded-tr-xl">Stack Memory</div>
                        <h4 className="text-gray-400 text-sm font-bold mb-4 mt-2">Variable Identifiers</h4>
                        <div className="space-y-3">
                            {current.stack.map((item, idx) => (
                                <motion.div 
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    key={item.var + idx} 
                                    className="flex justify-between items-center p-3 bg-black/50 border border-gray-700/50 rounded-lg"
                                >
                                    <span className="font-mono text-white text-sm">{item.var}</span>
                                    <div className="flex items-center gap-2">
                                        <ArrowRight className="w-3 h-3 text-gray-500" />
                                        <span className={`font-mono text-xs px-2 py-0.5 rounded ${item.val === '0xAB12' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'}`}>
                                            {item.val}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* The Heap */}
                    <div className="bg-[#161b22] border border-sky-500/30 rounded-xl p-4 relative flex flex-col items-center justify-center min-h-[200px] overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-900/10 via-transparent to-transparent opacity-50"></div>
                        <div className="absolute top-0 right-0 px-3 py-1 bg-sky-500/20 text-sky-300 text-[10px] font-black uppercase tracking-widest rounded-bl-xl rounded-tr-xl">Heap Memory</div>
                        
                        <div className="w-full flex flex-col gap-4 mt-8 relative z-10 w-full max-w-sm">
                            {current.heap.map((block, idx) => (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    key={block.addr + block.data}
                                    className={`w-full p-4 rounded-xl border-2 transition-all duration-500 
                                        ${block.active ? (block.secure ? 'bg-emerald-950/40 border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.2)]' : 'bg-rose-950/40 border-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.2)]') : 'bg-gray-900 border-gray-700 opacity-50'}
                                    `}
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${block.addr === '0xAB12' ? 'bg-rose-500/20 text-rose-300' : 'bg-emerald-500/20 text-emerald-300'}`}>Address: {block.addr}</span>
                                        {block.mutate && <span className="text-[10px] text-rose-400 font-bold uppercase flex items-center gap-1"><ShieldAlert className="w-3 h-3" /> Mutated!</span>}
                                        {block.secure && <span className="text-[10px] text-emerald-400 font-bold uppercase flex items-center gap-1"><Copy className="w-3 h-3" /> Safe Clone</span>}
                                    </div>
                                    <div className="font-mono text-xl sm:text-2xl text-center text-white py-2 tracking-widest break-all">
                                        {block.data}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Execution Note */}
                <div className="p-4 bg-blue-900/10 border border-blue-500/30 rounded-xl text-blue-300 text-sm md:text-base leading-relaxed break-words font-medium">
                    {current.console}
                </div>
            </div>
        </div>
    );
};

export default JsReferenceSimulator;
