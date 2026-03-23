import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, Box, Ban, CheckCircle2, AlertCircle } from 'lucide-react';

const JsVariablesSimulator = () => {
    const [selectedType, setSelectedType] = useState('let');
    const [step, setStep] = useState(0);

    const scenarios = {
        var: {
            title: "var - Function Scope (Leaky)",
            code: [
                "function testVar() {",
                "  var name = 'Global';",
                "  if (true) {",
                "    var name = 'Block'; // Redeclared!",
                "  }",
                "  console.log(name);",
                "}"
            ],
            steps: [
                { line: 1, memory: { name: "'Global'" }, output: null, note: "Memory allocated for 'name'." },
                { line: 3, memory: { name: "'Block'" }, output: null, note: "Because var ignores block scope {}, it overwrites the outer 'name'." },
                { line: 5, memory: { name: "'Block'" }, output: "'Block'", note: "The outer variable was mutated by the inner block!" }
            ]
        },
        let: {
            title: "let - Block Scope (Safe)",
            code: [
                "function testLet() {",
                "  let score = 10;",
                "  if (true) {",
                "    let score = 50; // New variable",
                "  }",
                "  console.log(score);",
                "}"
            ],
            steps: [
                { line: 1, memory: { score: "10" }, output: null, note: "Outer 'score' allocated." },
                { line: 3, memory: { score: "10", innerScore: "50 (Block scoped)" }, output: null, note: "Inner 'score' is a completely different variable in memory." },
                { line: 5, memory: { score: "10", innerScore: "Garbage Collected" }, output: "10", note: "Inner 'score' is destroyed. Outer 'score' remains 10!" }
            ]
        },
        const: {
            title: "const - Constant Reference",
            code: [
                "function testConst() {",
                "  const max = 100;",
                "  max = 200;",
                "  console.log(max);",
                "}"
            ],
            steps: [
                { line: 1, memory: { max: "100" }, output: null, note: "const initialized. Reference locked." },
                { line: 2, memory: { max: "100" }, output: "TypeError: Assignment to constant variable.", isError: true, note: "Attempting to reassign const throws an error immediately!" }
            ]
        }
    };

    const currentScenario = scenarios[selectedType];
    const currentStepData = currentScenario.steps[Math.min(step, currentScenario.steps.length - 1)];

    const handleNext = () => {
        if (step < currentScenario.steps.length - 1) setStep(step + 1);
    };

    const handleReset = () => {
        setStep(0);
    };

    return (
        <div className="w-full bg-[#0d1117] border border-gray-800 rounded-2xl overflow-hidden font-sans my-8 shadow-2xl">
            {/* Header / Controls */}
            <div className="bg-[#161b22] p-4 border-b border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex bg-black/40 p-1 rounded-lg border border-gray-800">
                    {['var', 'let', 'const'].map(type => (
                        <button
                            key={type}
                            onClick={() => { setSelectedType(type); setStep(0); }}
                            className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${selectedType === type ? 'bg-amber-500/20 text-amber-400' : 'text-gray-500 hover:text-gray-300'}`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
                <div className="flex items-center gap-2">
                    <button 
                        onClick={handleReset}
                        className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition"
                        title="Reset"
                    >
                        <RotateCcw className="w-4 h-4" />
                    </button>
                    <button 
                        onClick={handleNext}
                        disabled={step >= currentScenario.steps.length - 1}
                        className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm flex items-center gap-2 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Play className="w-4 h-4" /> Step Forward
                    </button>
                </div>
            </div>

            {/* Simulator Body */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-800">
                {/* Visual Code */}
                <div className="bg-[#0d1117] p-6">
                    <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">Code Flow</h3>
                    <div className="font-mono text-sm leading-8 text-gray-300 relative">
                        {currentScenario.code.map((line, idx) => {
                            const isActive = idx === currentStepData.line;
                            return (
                                <div key={idx} className={`relative px-4 py-1 rounded transition-all duration-300 ${isActive ? 'bg-amber-500/10 border-l-2 border-amber-500 text-white font-bold tracking-wide' : 'border-l-2 border-transparent hover:bg-white/5'}`}>
                                    {isActive && (
                                        <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="absolute left-[-10px] top-1/2 -translate-y-1/2 text-amber-500">
                                            <Play className="w-4 h-4 fill-current" />
                                        </motion.div>
                                    )}
                                    {line}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Visual Memory & Output */}
                <div className="bg-[#0d1117] p-6 flex flex-col gap-6">
                    <div>
                        <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4 border-b border-gray-800 pb-2 flex items-center gap-2">
                            <Box className="w-4 h-4" /> Memory State
                        </h3>
                        <div className="bg-[#161b22] border border-gray-800 rounded-xl p-4 min-h-[120px]">
                            <AnimatePresence mode="wait">
                                {Object.entries(currentStepData.memory).map(([key, val]) => (
                                    <motion.div 
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        key={key} 
                                        className="flex justify-between items-center mb-2 last:mb-0 p-2 bg-black/40 rounded border border-gray-800/50"
                                    >
                                        <span className="font-mono text-amber-400 text-sm">{key}</span>
                                        <span className="font-mono text-green-400 text-sm">{val}</span>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">Execution Note</h3>
                        <div className={`p-4 rounded-xl border ${currentStepData.isError ? 'bg-red-900/10 border-red-500/30' : 'bg-blue-900/10 border-blue-500/30'} flex items-start gap-3`}>
                            {currentStepData.isError ? <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" /> : <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />}
                            <p className={`text-sm leading-relaxed ${currentStepData.isError ? 'text-red-300' : 'text-blue-300'}`}>
                                {currentStepData.note}
                            </p>
                        </div>
                    </div>

                    
                    {currentStepData.output && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-auto">
                            <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">Console Output</h3>
                            <div className={`p-3 rounded-lg font-mono text-sm border ${currentStepData.isError ? 'bg-red-950/30 border-red-500/50 text-red-400' : 'bg-black border-gray-700 text-gray-300'}`}>
                                {currentStepData.output}
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default JsVariablesSimulator;
