import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, Play, CheckCircle2, XCircle } from 'lucide-react';

const JsExpressionsSimulator = () => {
    const [step, setStep] = useState(0);

    const evaluationSteps = [
        { desc: "Initial Expression", expression: ["2", "+", "3", "*", "4"] },
        { desc: "Precedence Resolution (* before +)", expression: ["2", "+", "(3 * 4)"], highlight: 2 },
        { desc: "Multiplication Evaluated", expression: ["2", "+", "12"], highlight: 2 },
        { desc: "Addition Resolved", expression: ["14"], highlight: 0 },
        { desc: "Final Rendered Value", expression: ["14"], complete: true }
    ];

    const currentStep = evaluationSteps[step];

    return (
        <div className="w-full bg-[#0d1117] border border-gray-800 rounded-2xl overflow-hidden font-sans my-8 shadow-2xl flex flex-col md:flex-row">
            
            {/* Context Checker */}
            <div className="md:w-1/2 border-b md:border-b-0 md:border-r border-gray-800 p-6 flex flex-col">
                <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-6 pb-2 border-b border-gray-800">
                    Context: Expression vs Statement
                </h3>
                
                <div className="space-y-4">
                    <div className="p-4 bg-emerald-900/10 border border-emerald-500/30 rounded-xl relative overflow-hidden group">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-mono text-emerald-300 text-sm">console.log( <span className="text-emerald-400 font-bold bg-emerald-500/20 px-1 rounded">true ? "Yes" : "No"</span> );</span>
                            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        </div>
                        <p className="text-emerald-400/80 text-xs">Valid. The argument expects an expression, and the ternary is an expression (it resolves to a value).</p>
                    </div>

                    <div className="p-4 bg-rose-900/10 border border-rose-500/30 rounded-xl relative overflow-hidden group">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-mono text-rose-300 text-sm">console.log( <span className="text-rose-400 font-bold bg-rose-500/20 px-1 rounded">if (true) "Yes"</span> );</span>
                            <XCircle className="w-5 h-5 text-rose-500" />
                        </div>
                        <p className="text-rose-400/80 text-xs">Syntax Error. <code>if</code> evaluates as a statement. You cannot pass a statement into an expression slot (like a function argument).</p>
                    </div>

                    <div className="p-4 bg-emerald-900/10 border border-emerald-500/30 rounded-xl relative overflow-hidden group">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-mono text-emerald-300 text-sm">const x = <span className="text-emerald-400 font-bold bg-emerald-500/20 px-1 rounded">10 + 5</span>;</span>
                            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        </div>
                        <p className="text-emerald-400/80 text-xs">Valid. The right side of the assignment statement is an expression slot.</p>
                    </div>
                </div>
            </div>

            {/* Precedence Evaluator */}
            <div className="md:w-1/2 p-6 flex flex-col bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMSkiLz48L3N2Zz4=')]">
                <div className="flex justify-between items-center mb-6 pb-2 border-b border-gray-800">
                    <h3 className="text-blue-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                        <Network className="w-4 h-4" /> Precedence Engine
                    </h3>
                    <div className="flex gap-2">
                        <button 
                            onClick={() => setStep(0)}
                            className="text-[10px] uppercase font-bold text-gray-400 hover:text-white transition"
                        >
                            Reset
                        </button>
                        <button 
                            onClick={() => setStep(s => Math.min(s + 1, evaluationSteps.length - 1))}
                            disabled={step === evaluationSteps.length - 1}
                            className="bg-blue-500 hover:bg-blue-400 disabled:bg-gray-800 disabled:text-gray-500 text-black px-2 py-1 rounded text-[10px] font-bold uppercase transition flex items-center gap-1"
                        >
                            <Play className="w-3 h-3" /> Step
                        </button>
                    </div>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center gap-8">
                    <div className="text-sm font-bold text-gray-500 uppercase tracking-widest h-6">
                        {currentStep.desc}
                    </div>

                    <div className="flex items-center justify-center gap-2 flex-wrap">
                        <AnimatePresence mode="wait">
                            {currentStep.expression.map((token, idx) => {
                                const isHighlighted = idx === currentStep.highlight;
                                const isComplete = currentStep.complete;
                                return (
                                    <motion.div
                                        key={token + idx}
                                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.8, y: -10 }}
                                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                        className={`font-mono text-3xl sm:text-4xl font-black px-4 py-3 rounded-2xl border transition-colors duration-500
                                            ${isComplete ? 'bg-blue-500/20 text-blue-400 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.3)]' :
                                              isHighlighted ? 'bg-amber-500/20 text-amber-400 border-amber-500/50' :
                                              'bg-black text-white border-gray-800'
                                            }
                                        `}
                                    >
                                        {token}
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default JsExpressionsSimulator;
