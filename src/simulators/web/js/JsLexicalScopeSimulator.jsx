import React, { useState } from 'react';
import { Play, RotateCcw, Box, ArrowRight, Eye, Code2 } from 'lucide-react';

const JsLexicalScopeSimulator = () => {
    const [step, setStep] = useState(0);

    const steps = [
        {
            code: 'const universe = "The Milky Way"; // Global Scope\n\nfunction solarSystem() {\n  // ...\n}\nsolarSystem();',
            description: "Step 1: The Global Scope is created. The variable `universe` is declared and is visible to everything inside the file.",
            activeLine: 1,
            global: { universe: '"The Milky Way"' },
            solarSystem: null,
            earth: null,
            output: []
        },
        {
            code: 'const universe = "The Milky Way";\n\nfunction solarSystem() {\n  const star = "The Sun"; // Floor 1\n  \n  function earth() {\n    // ...\n  }\n  earth();\n}\nsolarSystem();',
            description: "Step 2: `solarSystem` is called. It creates its own nested Lexical Environment (Floor 1). It declares `star`.",
            activeLine: 4,
            global: { universe: '"The Milky Way"' },
            solarSystem: { star: '"The Sun"' },
            earth: null,
            output: []
        },
        {
            code: 'const universe = "The Milky Way";\n\nfunction solarSystem() {\n  const star = "The Sun";\n  function earth() {\n    const city = "Bhubaneswar"; // Floor 2\n    console.log(`I live in ${city}, orbiting ${star}, in ${universe}.`);\n  }\n  earth();\n}\nsolarSystem();',
            description: "Step 3: `earth` is called inside `solarSystem`. It creates another nested Lexical Environment (Floor 2). It declares `city`.",
            activeLine: 6,
            global: { universe: '"The Milky Way"' },
            solarSystem: { star: '"The Sun"' },
            earth: { city: '"Bhubaneswar"' },
            output: []
        },
        {
            code: 'const universe = "The Milky Way";\n\nfunction solarSystem() {\n  const star = "The Sun";\n  function earth() {\n    const city = "Bhubaneswar";\n    console.log(`I live in ${city}, orbiting ${star}, in ${universe}.`);\n  }\n  earth();\n}\nsolarSystem();',
            description: "Step 4: Execution hits `console.log`. The engine looks for `city` (found locally). It looks for `star` (found one floor up). It looks for `universe` (found at the global top floor).",
            activeLine: 7,
            global: { universe: '"The Milky Way"' },
            solarSystem: { star: '"The Sun"' },
            earth: { city: '"Bhubaneswar"' },
            output: ["I live in Bhubaneswar, orbiting The Sun, in The Milky Way."]
        }
    ];

    const currentStep = steps[step];

    return (
        <div className="bg-[#0a0a0a] rounded-xl border border-gray-800 overflow-hidden shadow-2xl flex flex-col w-full font-sans">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800 bg-[#111]">
                <div className="flex items-center gap-2">
                    <Box className="w-5 h-5 text-purple-400" />
                    <span className="font-semibold text-gray-200">Lexical Scope Explorer</span>
                </div>
                <div className="flex gap-2">
                    <button 
                        onClick={() => setStep(Math.max(0, step - 1))}
                        disabled={step === 0}
                        className="p-1.5 rounded bg-gray-800 text-gray-300 hover:bg-gray-700 disabled:opacity-50"
                    >
                        <ArrowRight className="w-4 h-4 rotate-180" />
                    </button>
                    <button 
                        onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
                        disabled={step === steps.length - 1}
                        className="p-1.5 rounded bg-purple-600 text-white hover:bg-purple-500 disabled:opacity-50 flex items-center gap-1"
                    >
                        <span className="text-xs font-bold px-1">Next Step</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                    <button 
                        onClick={() => setStep(0)}
                        className="p-1.5 rounded bg-gray-800 text-gray-300 hover:bg-gray-700 ml-2"
                        title="Reset"
                    >
                        <RotateCcw className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-800">
                <div className="bg-[#1e1e1e] p-4 flex flex-col">
                    <div className="flex items-center gap-2 mb-3 text-gray-400 text-sm font-semibold uppercase tracking-wider">
                        <Code2 className="w-4 h-4" /> Code
                    </div>
                    <pre className="text-sm font-mono text-gray-300 whitespace-pre-wrap flex-1 bg-[#161616] p-4 rounded-lg border border-gray-800">
                        {currentStep.code.split('\n').map((line, i) => (
                            <div key={i} className={`px-2 py-0.5 rounded ${i + 1 === currentStep.activeLine ? 'bg-purple-500/20 border-l-2 border-purple-500' : ''}`}>
                                {line}
                            </div>
                        ))}
                    </pre>
                </div>

                <div className="bg-[#1e1e1e] p-4 flex flex-col gap-4">
                    <div className="flex items-center gap-2 mb-1 text-gray-400 text-sm font-semibold uppercase tracking-wider">
                        <Eye className="w-4 h-4" /> Environment (One-Way Mirror)
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-end gap-3 relative">
                        {/* Global Scope */}
                        <div 
                           
                            className="bg-gray-800/50 border border-gray-700 rounded-lg p-3"
                        >
                            <h4 className="text-xs font-bold text-gray-400 mb-2 uppercase">Global Scope (The Street)</h4>
                            {currentStep.global && Object.entries(currentStep.global).map(([k, v]) => (
                                <div key={k} className="text-sm font-mono text-blue-300"><span className="text-purple-400">const</span> {k} = <span className="text-green-400">{v}</span>;</div>
                            ))}
                        </div>

                        {/* solarSystem Scope */}
                        
                            {currentStep.solarSystem && (
                                <div 
                                   
                                   
                                    className="bg-blue-900/20 border border-blue-800 rounded-lg p-3 ml-4 relative"
                                >
                                    <div className="absolute -left-4 top-1/2 w-4 border-t border-blue-500/50 border-dashed"></div>
                                    <h4 className="text-xs font-bold text-blue-400 mb-2 uppercase">solarSystem() Scope (Floor 1)</h4>
                                    {Object.entries(currentStep.solarSystem).map(([k, v]) => (
                                        <div key={k} className="text-sm font-mono text-blue-200"><span className="text-purple-400">const</span> {k} = <span className="text-green-400">{v}</span>;</div>
                                    ))}
                                </div>
                            )}
                        

                        {/* earth Scope */}
                        
                            {currentStep.earth && (
                                <div 
                                   
                                   
                                    className="bg-purple-900/20 border border-purple-800 rounded-lg p-3 ml-8 relative"
                                >
                                    <div className="absolute -left-4 top-1/2 w-4 border-t border-purple-500/50 border-dashed"></div>
                                    <h4 className="text-xs font-bold text-purple-400 mb-2 uppercase">earth() Scope (Floor 2)</h4>
                                    {Object.entries(currentStep.earth).map(([k, v]) => (
                                        <div key={k} className="text-sm font-mono text-purple-200"><span className="text-purple-400">const</span> {k} = <span className="text-green-400">{v}</span>;</div>
                                    ))}
                                </div>
                            )}
                        
                    </div>

                    <div className="bg-[#111] p-3 rounded-lg border border-gray-800 min-h-[60px]">
                        <div className="text-xs text-gray-500 uppercase font-bold mb-1">Console Output</div>
                        <div className="text-sm font-mono text-gray-300">{currentStep.output || <span className="text-gray-600 italic">No output yet...</span>}</div>
                    </div>
                </div>
            </div>

            <div className="bg-[#161616] p-4 border-t border-gray-800">
                <p className="text-gray-300 text-sm leading-relaxed">{currentStep.description}</p>
            </div>
        </div>
    );
};

export default JsLexicalScopeSimulator;
