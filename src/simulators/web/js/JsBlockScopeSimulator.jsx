import React, { useState } from 'react';
import { Play, RotateCcw, Box, ArrowRight, Eye, Code2 } from 'lucide-react';

const JsBlockScopeSimulator = () => {
    const [mode, setMode] = useState('var');
    const [step, setStep] = useState(0);

    const stepsVar = [
        { code: `for (var i = 1; i <= 3; i++) {\n  setTimeout(function() {\n    console.log('Downloading file ' + i);\n  }, 1000); \n}`, desc: "Step 1: Loop starts. 'var' is function-scoped, so only ONE 'i' variable is created for the entire loop.", state: { i: undefined }, timers: [], activeLine: 1, output: [] },
        { code: `for (var i = 1; i <= 3; i++) {\n  setTimeout(function() {\n    console.log('Downloading file ' + i);\n  }, 1000); \n}`, desc: "Step 2: Loop runs instantly. i=1, i=2, i=3. The loop queues 3 setTimeouts. The value of 'i' stops at 4 (when the loop condition fails).", state: { i: 4 }, timers: ["T1", "T2", "T3"], activeLine: 1, output: [] },
        { code: `for (var i = 1; i <= 3; i++) {\n  setTimeout(function() {\n    console.log('Downloading file ' + i);\n  }, 1000); \n}`, desc: "Step 3: One second later, the first setTimeout wakes up. It looks for 'i', sees it is 4.", state: { i: 4 }, timers: ["T2", "T3"], activeLine: 3, output: ["Downloading file 4"] },
        { code: `for (var i = 1; i <= 3; i++) {\n  setTimeout(function() {\n    console.log('Downloading file ' + i);\n  }, 1000); \n}`, desc: "Step 4: The second setTimeout wakes up. It also sees 'i' is 4.", state: { i: 4 }, timers: ["T3"], activeLine: 3, output: ["Downloading file 4", "Downloading file 4"] },
        { code: `for (var i = 1; i <= 3; i++) {\n  setTimeout(function() {\n    console.log('Downloading file ' + i);\n  }, 1000); \n}`, desc: "Step 5: The third setTimeout wakes up. It also sees 'i' is 4. The var has leaked and flooded the function.", state: { i: 4 }, timers: [], activeLine: 3, output: ["Downloading file 4", "Downloading file 4", "Downloading file 4"] }
    ];

    const stepsLet = [
        { code: `for (let i = 1; i <= 3; i++) {\n  setTimeout(function() {\n    console.log('Downloading file ' + i);\n  }, 1000); \n}`, desc: "Step 1: Loop starts. 'let' is block-scoped. A brand new, sealed vault is created for 'i' on every single spin of the loop.", blocks: [], timers: [], activeLine: 1, output: [] },
        { code: `for (let i = 1; i <= 3; i++) {\n  setTimeout(function() {\n    console.log('Downloading file ' + i);\n  }, 1000); \n}`, desc: "Step 2: Loop runs instantly. Three separate block scopes are created, each locking in its own value of 'i'.", blocks: [{id: 1, i: 1}, {id: 2, i: 2}, {id: 3, i: 3}], timers: ["T1(Vault 1)", "T2(Vault 2)", "T3(Vault 3)"], activeLine: 1, output: [] },
        { code: `for (let i = 1; i <= 3; i++) {\n  setTimeout(function() {\n    console.log('Downloading file ' + i);\n  }, 1000); \n}`, desc: "Step 3: The first setTimeout wakes up. It is locked in Vault 1, so it prints 1.", blocks: [{id: 1, i: 1}, {id: 2, i: 2}, {id: 3, i: 3}], timers: ["T2(Vault 2)", "T3(Vault 3)"], activeLine: 3, output: ["Downloading file 1"] },
        { code: `for (let i = 1; i <= 3; i++) {\n  setTimeout(function() {\n    console.log('Downloading file ' + i);\n  }, 1000); \n}`, desc: "Step 4: The second setTimeout wakes up. It is locked in Vault 2, so it prints 2.", blocks: [{id: 1, i: 1}, {id: 2, i: 2}, {id: 3, i: 3}], timers: ["T3(Vault 3)"], activeLine: 3, output: ["Downloading file 1", "Downloading file 2"] },
        { code: `for (let i = 1; i <= 3; i++) {\n  setTimeout(function() {\n    console.log('Downloading file ' + i);\n  }, 1000); \n}`, desc: "Step 5: The third setTimeout wakes up. It is locked in Vault 3, so it prints 3.", blocks: [{id: 1, i: 1}, {id: 2, i: 2}, {id: 3, i: 3}], timers: [], activeLine: 3, output: ["Downloading file 1", "Downloading file 2", "Downloading file 3"] }
    ];

    const steps = mode === 'var' ? stepsVar : stepsLet;
    const currentStep = steps[step];

    const toggleMode = (m) => {
        setMode(m);
        setStep(0);
    };

    return (
        <div className="bg-[#0a0a0a] rounded-xl border border-gray-800 overflow-hidden shadow-2xl flex flex-col w-full font-sans">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-3 border-b border-gray-800 bg-[#111] gap-3">
                <div className="flex items-center gap-2">
                    <Box className="w-5 h-5 text-indigo-400" />
                    <span className="font-semibold text-gray-200">Block Scope Explorer</span>
                </div>
                
                <div className="flex bg-gray-900 rounded-lg p-1 border border-gray-800">
                    <button onClick={() => toggleMode('var')} className={`px-3 py-1 text-xs font-bold rounded-md ${mode === 'var' ? 'bg-red-500/20 text-red-400 border border-red-500/50' : 'text-gray-500 hover:text-gray-300'}`}>The var Disaster</button>
                    <button onClick={() => toggleMode('let')} className={`px-3 py-1 text-xs font-bold rounded-md ${mode === 'let' ? 'bg-green-500/20 text-green-400 border border-green-500/50' : 'text-gray-500 hover:text-gray-300'}`}>The let Solution</button>
                </div>

                <div className="flex gap-2">
                    <button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0} className="p-1.5 rounded bg-gray-800 text-gray-300 hover:bg-gray-700 disabled:opacity-50"><ArrowRight className="w-4 h-4 rotate-180" /></button>
                    <button onClick={() => setStep(Math.min(steps.length - 1, step + 1))} disabled={step === steps.length - 1} className="p-1.5 rounded bg-indigo-600 text-white hover:bg-indigo-500 disabled:opacity-50 flex items-center gap-1"><span className="text-xs font-bold px-1">Next Step</span><ArrowRight className="w-4 h-4" /></button>
                    <button onClick={() => setStep(0)} className="p-1.5 rounded bg-gray-800 text-gray-300 hover:bg-gray-700 ml-2" title="Reset"><RotateCcw className="w-4 h-4" /></button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-800">
                <div className="bg-[#1e1e1e] p-4 flex flex-col">
                    <div className="flex items-center gap-2 mb-3 text-gray-400 text-sm font-semibold uppercase tracking-wider">
                        <Code2 className="w-4 h-4" /> Code
                    </div>
                    <pre className="text-sm font-mono text-gray-300 whitespace-pre-wrap flex-1 bg-[#161616] p-4 rounded-lg border border-gray-800">
                        {currentStep.code.split('\n').map((line, i) => (
                            <div key={i} className={`px-2 py-0.5 rounded ${i + 1 === currentStep.activeLine ? 'bg-indigo-500/20 border-l-2 border-indigo-500' : ''}`}>
                                {line}
                            </div>
                        ))}
                    </pre>
                </div>

                <div className="bg-[#1e1e1e] p-4 flex flex-col gap-4">
                    <div className="flex items-center gap-2 mb-1 text-gray-400 text-sm font-semibold uppercase tracking-wider">
                        <Eye className="w-4 h-4" /> Memory State
                    </div>
                    
                    <div className="flex-1 flex flex-col gap-3 relative">
                        {mode === 'var' ? (
                            <div className="bg-red-900/20 border border-red-800 rounded-lg p-4 flex-1 flex flex-col items-center justify-center">
                                <h4 className="text-sm font-bold text-red-400 mb-2 uppercase tracking-widest text-center">Global Function Scope (Leaky Pipe)</h4>
                                <div className="text-2xl font-mono text-white mb-4">i = <span className="text-amber-400">{currentStep.state.i !== undefined ? currentStep.state.i : 'undefined'}</span></div>
                                
                                {currentStep.timers.length > 0 && (
                                    <div className="flex gap-2">
                                        {currentStep.timers.map((t, idx) => (
                                            <div key={idx} className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400 border border-gray-700 animate-pulse">{t} Waiting...</div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flex flex-col gap-2 flex-1 justify-center">
                                {currentStep.blocks.length === 0 ? (
                                    <div className="text-center text-gray-500 text-sm italic">Waiting to loop...</div>
                                ) : (
                                    <div className="flex justify-between gap-2">
                                        {currentStep.blocks.map(b => (
                                            <div key={b.id} className="bg-green-900/20 border border-green-700 rounded-lg p-3 flex-1 text-center shadow-lg">
                                                <div className="text-xs text-green-400 font-bold mb-1 uppercase">Vault {b.id}</div>
                                                <div className="text-lg font-mono text-white mb-2">i = <span className="text-amber-400">{b.i}</span></div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {currentStep.timers.length > 0 && (
                                    <div className="flex justify-center gap-2 mt-4">
                                        {currentStep.timers.map((t, idx) => (
                                            <div key={idx} className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400 border border-gray-700 animate-pulse">{t}</div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="bg-[#111] p-3 rounded-lg border border-gray-800 min-h-[100px]">
                        <div className="text-xs text-gray-500 uppercase font-bold mb-2">Console Output</div>
                        <div className="flex flex-col gap-1">
                            {currentStep.output.length === 0 ? (
                                <span className="text-gray-600 italic text-sm font-mono">No output yet...</span>
                            ) : (
                                currentStep.output.map((out, idx) => (
                                    <div key={idx} className={`text-sm font-mono ${mode === 'var' ? 'text-red-300' : 'text-green-300'}`}>&gt; {out}</div>
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

export default JsBlockScopeSimulator;
