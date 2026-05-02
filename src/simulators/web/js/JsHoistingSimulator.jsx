import React, { useState } from 'react';
import { Play, RotateCcw, ArrowRight, Eye, Code2, Zap } from 'lucide-react';

const JsHoistingSimulator = () => {
    const [step, setStep] = useState(0);

    const steps = [
        {
            phase: "Pre-Flight",
            code: `console.log(score);\nvar score = 100;\n\nplayMusic();\nfunction playMusic() {\n  console.log("Playing...");\n}\n\npauseMusic();\nconst pauseMusic = () => {\n  console.log("Paused");\n}`,
            desc: "The JavaScript Engine receives your code. Before executing line 1, it performs a 'Creation Phase' (Memory Allocation).",
            memory: {},
            output: [],
            activeLine: null
        },
        {
            phase: "Creation Phase (Memory Allocation)",
            code: `console.log(score);\nvar score = 100;\n\nplayMusic();\nfunction playMusic() {\n  console.log("Playing...");\n}\n\npauseMusic();\nconst pauseMusic = () => {\n  console.log("Paused");\n}`,
            desc: "The Engine scans the entire code for declarations. It finds 'var score'. It sets up memory and initializes it with 'undefined'.",
            memory: { score: { type: 'var', val: 'undefined', color: 'text-gray-500' } },
            output: [],
            activeLine: 2
        },
        {
            phase: "Creation Phase (Memory Allocation)",
            code: `console.log(score);\nvar score = 100;\n\nplayMusic();\nfunction playMusic() {\n  console.log("Playing...");\n}\n\npauseMusic();\nconst pauseMusic = () => {\n  console.log("Paused");\n}`,
            desc: "Next, it finds 'function playMusic()'. Function Declarations are FULLY hoisted. The entire function body is placed into memory.",
            memory: { 
                score: { type: 'var', val: 'undefined', color: 'text-gray-500' },
                playMusic: { type: 'function', val: 'ƒ playMusic() { ... }', color: 'text-green-400' } 
            },
            output: [],
            activeLine: 5
        },
        {
            phase: "Creation Phase (Memory Allocation)",
            code: `console.log(score);\nvar score = 100;\n\nplayMusic();\nfunction playMusic() {\n  console.log("Playing...");\n}\n\npauseMusic();\nconst pauseMusic = () => {\n  console.log("Paused");\n}`,
            desc: "Finally, it finds 'const pauseMusic'. Const (and let) are hoisted but remain UNINITIALIZED in the Temporal Dead Zone (TDZ). Memory setup is now complete.",
            memory: { 
                score: { type: 'var', val: 'undefined', color: 'text-gray-500' },
                playMusic: { type: 'function', val: 'ƒ playMusic() { ... }', color: 'text-green-400' },
                pauseMusic: { type: 'const', val: '<uninitialized / TDZ>', color: 'text-red-500' }
            },
            output: [],
            activeLine: 10
        },
        {
            phase: "Execution Phase",
            code: `console.log(score);\nvar score = 100;\n\nplayMusic();\nfunction playMusic() {\n  console.log("Playing...");\n}\n\npauseMusic();\nconst pauseMusic = () => {\n  console.log("Paused");\n}`,
            desc: "Execution begins chronologically. Line 1: 'console.log(score)'. The engine checks memory, sees 'score' is 'undefined', and prints it.",
            memory: { 
                score: { type: 'var', val: 'undefined', color: 'text-gray-500' },
                playMusic: { type: 'function', val: 'ƒ playMusic() { ... }', color: 'text-green-400' },
                pauseMusic: { type: 'const', val: '<uninitialized / TDZ>', color: 'text-red-500' }
            },
            output: ["undefined"],
            activeLine: 1
        },
        {
            phase: "Execution Phase",
            code: `console.log(score);\nvar score = 100;\n\nplayMusic();\nfunction playMusic() {\n  console.log("Playing...");\n}\n\npauseMusic();\nconst pauseMusic = () => {\n  console.log("Paused");\n}`,
            desc: "Line 2: 'score = 100'. The engine updates the memory. 'score' is now 100.",
            memory: { 
                score: { type: 'var', val: '100', color: 'text-amber-400' },
                playMusic: { type: 'function', val: 'ƒ playMusic() { ... }', color: 'text-green-400' },
                pauseMusic: { type: 'const', val: '<uninitialized / TDZ>', color: 'text-red-500' }
            },
            output: ["undefined"],
            activeLine: 2
        },
        {
            phase: "Execution Phase",
            code: `console.log(score);\nvar score = 100;\n\nplayMusic();\nfunction playMusic() {\n  console.log("Playing...");\n}\n\npauseMusic();\nconst pauseMusic = () => {\n  console.log("Paused");\n}`,
            desc: "Line 4: 'playMusic()'. The engine checks memory, sees a fully constructed function, and runs it successfully.",
            memory: { 
                score: { type: 'var', val: '100', color: 'text-amber-400' },
                playMusic: { type: 'function', val: 'ƒ playMusic() { ... }', color: 'text-green-400' },
                pauseMusic: { type: 'const', val: '<uninitialized / TDZ>', color: 'text-red-500' }
            },
            output: ["undefined", "Playing..."],
            activeLine: 4
        },
        {
            phase: "Execution Phase",
            code: `console.log(score);\nvar score = 100;\n\nplayMusic();\nfunction playMusic() {\n  console.log("Playing...");\n}\n\npauseMusic();\nconst pauseMusic = () => {\n  console.log("Paused");\n}`,
            desc: "Line 9: 'pauseMusic()'. CRASH! The engine checks memory, sees 'pauseMusic' is still in the TDZ, and halts the entire program.",
            memory: { 
                score: { type: 'var', val: '100', color: 'text-amber-400' },
                playMusic: { type: 'function', val: 'ƒ playMusic() { ... }', color: 'text-green-400' },
                pauseMusic: { type: 'const', val: '<uninitialized / TDZ>', color: 'text-red-500' }
            },
            output: ["undefined", "Playing...", "ReferenceError: Cannot access 'pauseMusic' before initialization"],
            activeLine: 9
        }
    ];

    const currentStep = steps[step];

    return (
        <div className="bg-[#0a0a0a] rounded-xl border border-gray-800 overflow-hidden shadow-2xl flex flex-col w-full font-sans">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-3 border-b border-gray-800 bg-[#111] gap-3">
                <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    <span className="font-semibold text-gray-200">Hoisting Memory Simulator</span>
                </div>
                
                <div className="flex bg-gray-900 rounded px-3 py-1 border border-gray-800 items-center justify-center">
                    <span className={`text-xs font-bold uppercase tracking-widest ${currentStep.phase.includes('Execution') ? 'text-green-400' : 'text-blue-400'}`}>{currentStep.phase}</span>
                </div>

                <div className="flex gap-2">
                    <button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0} className="p-1.5 rounded bg-gray-800 text-gray-300 hover:bg-gray-700 disabled:opacity-50"><ArrowRight className="w-4 h-4 rotate-180" /></button>
                    <button onClick={() => setStep(Math.min(steps.length - 1, step + 1))} disabled={step === steps.length - 1} className="p-1.5 rounded bg-yellow-600 text-white hover:bg-yellow-500 disabled:opacity-50 flex items-center gap-1"><span className="text-xs font-bold px-1">Next</span><ArrowRight className="w-4 h-4" /></button>
                    <button onClick={() => setStep(0)} className="p-1.5 rounded bg-gray-800 text-gray-300 hover:bg-gray-700 ml-2" title="Reset"><RotateCcw className="w-4 h-4" /></button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-800">
                <div className="bg-[#1e1e1e] p-4 flex flex-col">
                    <div className="flex items-center gap-2 mb-3 text-gray-400 text-sm font-semibold uppercase tracking-wider">
                        <Code2 className="w-4 h-4" /> Source Code
                    </div>
                    <pre className="text-sm font-mono text-gray-300 whitespace-pre-wrap flex-1 bg-[#161616] p-4 rounded-lg border border-gray-800">
                        {currentStep.code.split('\n').map((line, i) => {
                            const isCrash = currentStep.activeLine === i + 1 && line.includes('pauseMusic()');
                            return (
                                <div key={i} className={`px-2 py-0.5 rounded ${i + 1 === currentStep.activeLine ? (isCrash ? 'bg-red-500/20 border-l-2 border-red-500' : 'bg-yellow-500/20 border-l-2 border-yellow-500') : ''}`}>
                                    {line}
                                </div>
                            );
                        })}
                    </pre>
                </div>

                <div className="bg-[#1e1e1e] p-4 flex flex-col gap-4">
                    <div className="flex items-center gap-2 mb-1 text-gray-400 text-sm font-semibold uppercase tracking-wider">
                        <Eye className="w-4 h-4" /> Browser Memory
                    </div>
                    
                    <div className="flex-1 bg-gray-900 border border-gray-700 rounded-lg p-3 flex flex-col gap-2">
                        {Object.keys(currentStep.memory).length === 0 ? (
                            <div className="text-center text-gray-600 italic mt-8 text-sm">Memory is empty.<br/>Waiting for Creation Phase...</div>
                        ) : (
                            Object.entries(currentStep.memory).map(([k, v]) => (
                                <div key={k} className="flex justify-between items-center bg-black/40 p-2 rounded border border-gray-800">
                                    <div className="font-mono text-sm text-gray-300">
                                        <span className="text-purple-400 mr-2">{v.type}</span>{k}
                                    </div>
                                    <div className={`font-mono text-sm ${v.color}`}>{v.val}</div>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="bg-[#111] p-3 rounded-lg border border-gray-800 min-h-[100px]">
                        <div className="text-xs text-gray-500 uppercase font-bold mb-2">Console</div>
                        <div className="flex flex-col gap-1">
                            {currentStep.output.length === 0 ? (
                                <span className="text-gray-600 italic text-sm font-mono">...</span>
                            ) : (
                                currentStep.output.map((out, idx) => (
                                    <div key={idx} className={`text-sm font-mono ${out.includes('ReferenceError') ? 'text-red-400 bg-red-900/20 px-2 rounded py-1' : 'text-gray-300'}`}>&gt; {out}</div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#161616] p-4 border-t border-gray-800 min-h-[80px]">
                <p className="text-gray-300 text-sm leading-relaxed">{currentStep.desc}</p>
            </div>
        </div>
    );
};

export default JsHoistingSimulator;
