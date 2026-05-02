import React, { useState } from 'react';
import { Play, RotateCcw, ArrowRight, Eye, Code2, AlertCircle } from 'lucide-react';

const JsTdzSimulator = () => {
    const [step, setStep] = useState(0);

    const steps = [
        {
            code: `function calculateTax() {\n  // --- TDZ FOR 'taxRate' STARTS HERE ---\n  \n  const subtotal = 50;\n  const discount = 5;\n  \n  // --- TDZ FOR 'taxRate' ENDS HERE ---\n  const taxRate = 0.08; \n  \n  return (subtotal - discount) * taxRate;\n}`,
            desc: "Step 1: The engine enters the function scope. It knows about 'taxRate' because of hoisting, but places a lock on it. The TDZ starts.",
            tdzActive: true,
            vars: { subtotal: '<uninitialized>', discount: '<uninitialized>', taxRate: '<uninitialized / locked>' },
            activeLine: 1,
            output: "Entering scope..."
        },
        {
            code: `function calculateTax() {\n  // --- TDZ FOR 'taxRate' STARTS HERE ---\n  console.log(taxRate); // TRYING TO READ EARLY\n  const subtotal = 50;\n  const discount = 5;\n  \n  // --- TDZ FOR 'taxRate' ENDS HERE ---\n  const taxRate = 0.08; \n  \n  return (subtotal - discount) * taxRate;\n}`,
            desc: "Step 2 (Simulated Error): What if we try to read 'taxRate' while inside the TDZ? The engine will instantly throw a ReferenceError to protect us from bad data.",
            tdzActive: true,
            vars: { subtotal: '<uninitialized>', discount: '<uninitialized>', taxRate: '<uninitialized / locked>' },
            activeLine: 3,
            output: "ReferenceError: Cannot access 'taxRate' before initialization",
            isError: true
        },
        {
            code: `function calculateTax() {\n  // --- TDZ FOR 'taxRate' STARTS HERE ---\n  \n  const subtotal = 50;\n  const discount = 5;\n  \n  // --- TDZ FOR 'taxRate' ENDS HERE ---\n  const taxRate = 0.08; \n  \n  return (subtotal - discount) * taxRate;\n}`,
            desc: "Step 3: Continuing normally. Line 4 initializes 'subtotal'.",
            tdzActive: true,
            vars: { subtotal: 50, discount: '<uninitialized>', taxRate: '<uninitialized / locked>' },
            activeLine: 4,
            output: "subtotal initialized to 50"
        },
        {
            code: `function calculateTax() {\n  // --- TDZ FOR 'taxRate' STARTS HERE ---\n  \n  const subtotal = 50;\n  const discount = 5;\n  \n  // --- TDZ FOR 'taxRate' ENDS HERE ---\n  const taxRate = 0.08; \n  \n  return (subtotal - discount) * taxRate;\n}`,
            desc: "Step 4: Line 5 initializes 'discount'. 'taxRate' is STILL locked in the TDZ.",
            tdzActive: true,
            vars: { subtotal: 50, discount: 5, taxRate: '<uninitialized / locked>' },
            activeLine: 5,
            output: "discount initialized to 5"
        },
        {
            code: `function calculateTax() {\n  // --- TDZ FOR 'taxRate' STARTS HERE ---\n  \n  const subtotal = 50;\n  const discount = 5;\n  \n  // --- TDZ FOR 'taxRate' ENDS HERE ---\n  const taxRate = 0.08; \n  \n  return (subtotal - discount) * taxRate;\n}`,
            desc: "Step 5: Line 8! The engine reaches the exact line where 'taxRate' is declared. The TDZ ends. The lock is removed. The value is stored.",
            tdzActive: false,
            vars: { subtotal: 50, discount: 5, taxRate: 0.08 },
            activeLine: 8,
            output: "taxRate initialized to 0.08. TDZ ends."
        },
        {
            code: `function calculateTax() {\n  // --- TDZ FOR 'taxRate' STARTS HERE ---\n  \n  const subtotal = 50;\n  const discount = 5;\n  \n  // --- TDZ FOR 'taxRate' ENDS HERE ---\n  const taxRate = 0.08; \n  \n  return (subtotal - discount) * taxRate;\n}`,
            desc: "Step 6: We safely do math with all initialized values. (50 - 5) * 0.08 = 3.6.",
            tdzActive: false,
            vars: { subtotal: 50, discount: 5, taxRate: 0.08 },
            activeLine: 10,
            output: "Returned 3.6"
        }
    ];

    const currentStep = steps[step];

    return (
        <div className="bg-[#0a0a0a] rounded-xl border border-gray-800 overflow-hidden shadow-2xl flex flex-col w-full font-sans">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-3 border-b border-gray-800 bg-[#111] gap-3">
                <div className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <span className="font-semibold text-gray-200">Temporal Dead Zone Simulator</span>
                </div>

                <div className="flex gap-2">
                    <button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0} className="p-1.5 rounded bg-gray-800 text-gray-300 hover:bg-gray-700 disabled:opacity-50"><ArrowRight className="w-4 h-4 rotate-180" /></button>
                    <button onClick={() => setStep(Math.min(steps.length - 1, step + 1))} disabled={step === steps.length - 1} className="p-1.5 rounded bg-red-600 text-white hover:bg-red-500 disabled:opacity-50 flex items-center gap-1"><span className="text-xs font-bold px-1">Next Step</span><ArrowRight className="w-4 h-4" /></button>
                    <button onClick={() => setStep(0)} className="p-1.5 rounded bg-gray-800 text-gray-300 hover:bg-gray-700 ml-2" title="Reset"><RotateCcw className="w-4 h-4" /></button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-800">
                <div className="bg-[#1e1e1e] p-4 flex flex-col">
                    <div className="flex items-center gap-2 mb-3 text-gray-400 text-sm font-semibold uppercase tracking-wider">
                        <Code2 className="w-4 h-4" /> Code execution
                    </div>
                    <pre className="text-sm font-mono text-gray-300 whitespace-pre-wrap flex-1 bg-[#161616] p-4 rounded-lg border border-gray-800">
                        {currentStep.code.split('\n').map((line, i) => (
                            <div key={i} className={`px-2 py-0.5 rounded ${i + 1 === currentStep.activeLine ? (currentStep.isError ? 'bg-red-500/20 border-l-2 border-red-500' : 'bg-green-500/20 border-l-2 border-green-500') : ''}`}>
                                {line}
                            </div>
                        ))}
                    </pre>
                </div>

                <div className="bg-[#1e1e1e] p-4 flex flex-col gap-4">
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2 text-gray-400 text-sm font-semibold uppercase tracking-wider">
                            <Eye className="w-4 h-4" /> Variable State
                        </div>
                        {currentStep.tdzActive && (
                            <div className="flex items-center gap-1 text-red-400 text-xs font-bold uppercase bg-red-500/10 px-2 py-1 rounded">
                                <AlertCircle className="w-3 h-3" /> TDZ Active
                            </div>
                        )}
                    </div>
                    
                    <div className="flex-1 flex flex-col gap-3 relative justify-center items-center">
                        <div className="w-full bg-gray-900 border border-gray-700 rounded-lg p-4 flex flex-col gap-3 shadow-inner">
                            {Object.entries(currentStep.vars).map(([k, v]) => {
                                const isLocked = typeof v === 'string' && v.includes('locked');
                                return (
                                    <div key={k} className={`flex justify-between items-center p-3 rounded border ${isLocked ? 'bg-red-900/20 border-red-800/50' : 'bg-black/40 border-gray-800'}`}>
                                        <div className="font-mono text-sm text-blue-300 font-bold">{k}</div>
                                        <div className={`font-mono text-sm ${isLocked ? 'text-red-400 animate-pulse flex items-center gap-2' : 'text-green-400'}`}>
                                            {isLocked && <AlertCircle className="w-4 h-4" />}
                                            {v}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="bg-[#111] p-3 rounded-lg border border-gray-800 min-h-[80px]">
                        <div className="text-xs text-gray-500 uppercase font-bold mb-2">System Output</div>
                        <div className={`text-sm font-mono ${currentStep.isError ? 'text-red-400' : 'text-gray-300'}`}>
                            {currentStep.isError ? <span>&#10007; {currentStep.output}</span> : <span>&gt; {currentStep.output}</span>}
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

export default JsTdzSimulator;
