import React, { useState } from 'react';
import { Play, RotateCcw, ArrowRight, Eye, Code2, Backpack, Rocket, Trash2 } from 'lucide-react';

const JsClosureSimulator = () => {
    const [step, setStep] = useState(0);

    const steps = [
        {
            code: 'function createWallet(initialFunds) {\\n  let balance = initialFunds;\\n  return {\\n    deposit: function(amount) {\\n      balance += amount;\\n      console.log(`Deposited ${amount}. New balance: ${balance}`);\\n    }\\n  };\\n}\\n\\nconst myWallet = createWallet(100);\\n\\nmyWallet.deposit(50);',
            desc: "Step 1: The 'createWallet' function is called with 100. It creates its own Execution Context. The 'balance' variable is born.",
            activeLine: 10,
            ec: { name: "createWallet(100)", vars: { balance: 100 }, status: "Active" },
            heap: {},
            global: { myWallet: "undefined" },
            output: []
        },
        {
            code: 'function createWallet(initialFunds) {\\n  let balance = initialFunds;\\n  return {\\n    deposit: function(amount) {\\n      balance += amount;\\n      console.log(`Deposited ${amount}. New balance: ${balance}`);\\n    }\\n  };\\n}\\n\\nconst myWallet = createWallet(100);\\n\\nmyWallet.deposit(50);',
            desc: "Step 2: 'createWallet' creates an object with a 'deposit' function. Because 'deposit' uses 'balance', the engine creates a Closure (The Backpack) containing 'balance' and attaches it to the 'deposit' function.",
            activeLine: 3,
            ec: { name: "createWallet(100)", vars: { balance: 100 }, status: "Active" },
            heap: { depositFn: { backpack: { balance: 100 } } },
            global: { myWallet: "undefined" },
            output: []
        },
        {
            code: 'function createWallet(initialFunds) {\\n  let balance = initialFunds;\\n  return {\\n    deposit: function(amount) {\\n      balance += amount;\\n      console.log(`Deposited ${amount}. New balance: ${balance}`);\\n    }\\n  };\\n}\\n\\nconst myWallet = createWallet(100);\\n\\nmyWallet.deposit(50);',
            desc: "Step 3: 'createWallet' finishes running and returns the object to 'myWallet'. The execution context of 'createWallet' is DESTROYED. Normally, 'balance' would be deleted by the Garbage Collector.",
            activeLine: 10,
            ec: { name: "createWallet(100)", vars: { balance: 100 }, status: "Destroyed" },
            heap: { depositFn: { backpack: { balance: 100 } } },
            global: { myWallet: "{ deposit: ƒ }" },
            output: []
        },
        {
            code: 'function createWallet(initialFunds) {\\n  let balance = initialFunds;\\n  return {\\n    deposit: function(amount) {\\n      balance += amount;\\n      console.log(`Deposited ${amount}. New balance: ${balance}`);\\n    }\\n  };\\n}\\n\\nconst myWallet = createWallet(100);\\n\\nmyWallet.deposit(50);',
            desc: "Step 4: But the Garbage Collector sees the Closure! 'myWallet.deposit' still holds a reference to 'balance' inside its Backpack. The Garbage Collector SPARES 'balance'.",
            activeLine: 12,
            ec: null,
            heap: { depositFn: { backpack: { balance: 100 } } },
            global: { myWallet: "{ deposit: ƒ }" },
            output: []
        },
        {
            code: 'function createWallet(initialFunds) {\\n  let balance = initialFunds;\\n  return {\\n    deposit: function(amount) {\\n      balance += amount;\\n      console.log(`Deposited ${amount}. New balance: ${balance}`);\\n    }\\n  };\\n}\\n\\nconst myWallet = createWallet(100);\\n\\nmyWallet.deposit(50);',
            desc: "Step 5: We call 'myWallet.deposit(50)'. It creates a new Execution Context. It looks for 'balance'. It doesn't have it locally, so it unzips its Backpack (the Closure).",
            activeLine: 5,
            ec: { name: "deposit(50)", vars: { amount: 50 }, status: "Active" },
            heap: { depositFn: { backpack: { balance: 100 } } },
            global: { myWallet: "{ deposit: ƒ }" },
            output: []
        },
        {
            code: 'function createWallet(initialFunds) {\\n  let balance = initialFunds;\\n  return {\\n    deposit: function(amount) {\\n      balance += amount;\\n      console.log(`Deposited ${amount}. New balance: ${balance}`);\\n    }\\n  };\\n}\\n\\nconst myWallet = createWallet(100);\\n\\nmyWallet.deposit(50);',
            desc: "Step 6: It successfully updates 'balance' inside the Backpack to 150. The data is preserved, yet completely private from the global scope!",
            activeLine: 6,
            ec: { name: "deposit(50)", vars: { amount: 50 }, status: "Active" },
            heap: { depositFn: { backpack: { balance: 150 } } },
            global: { myWallet: "{ deposit: ƒ }" },
            output: ["Deposited 50. New balance: 150"]
        }
    ];

    const currentStep = steps[step];

    return (
        <div className="bg-[#0a0a0a] rounded-xl border border-gray-800 overflow-hidden shadow-2xl flex flex-col w-full font-sans">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-3 border-b border-gray-800 bg-[#111] gap-3">
                <div className="flex items-center gap-2">
                    <Backpack className="w-5 h-5 text-emerald-400" />
                    <span className="font-semibold text-gray-200">Closure "Backpack" Simulator</span>
                </div>

                <div className="flex gap-2">
                    <button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0} className="p-1.5 rounded bg-gray-800 text-gray-300 hover:bg-gray-700 disabled:opacity-50"><ArrowRight className="w-4 h-4 rotate-180" /></button>
                    <button onClick={() => setStep(Math.min(steps.length - 1, step + 1))} disabled={step === steps.length - 1} className="p-1.5 rounded bg-emerald-600 text-white hover:bg-emerald-500 disabled:opacity-50 flex items-center gap-1"><span className="text-xs font-bold px-1">Next Step</span><ArrowRight className="w-4 h-4" /></button>
                    <button onClick={() => setStep(0)} className="p-1.5 rounded bg-gray-800 text-gray-300 hover:bg-gray-700 ml-2" title="Reset"><RotateCcw className="w-4 h-4" /></button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-gray-800">
                <div className="bg-[#1e1e1e] p-4 flex flex-col lg:col-span-1">
                    <div className="flex items-center gap-2 mb-3 text-gray-400 text-sm font-semibold uppercase tracking-wider">
                        <Code2 className="w-4 h-4" /> Source Code
                    </div>
                    <pre className="text-xs font-mono text-gray-300 whitespace-pre-wrap flex-1 bg-[#161616] p-4 rounded-lg border border-gray-800 overflow-x-auto">
                        {currentStep.code.split('\n').map((line, i) => (
                            <div key={i} className={`px-2 py-0.5 rounded whitespace-nowrap ${i + 1 === currentStep.activeLine ? 'bg-emerald-500/20 border-l-2 border-emerald-500' : ''}`}>
                                {line}
                            </div>
                        ))}
                    </pre>
                </div>

                <div className="bg-[#1e1e1e] p-4 flex flex-col gap-4 lg:col-span-2">
                    <div className="flex items-center gap-2 mb-1 text-gray-400 text-sm font-semibold uppercase tracking-wider">
                        <Eye className="w-4 h-4" /> Engine Memory
                    </div>
                    
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Call Stack & Execution Context */}
                        <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 flex flex-col gap-2 relative">
                            <h4 className="text-xs font-bold text-gray-400 uppercase text-center mb-2">Call Stack (Earth)</h4>
                            
                            
                                {currentStep.ec ? (
                                    <div 
                                        key={currentStep.ec.name}
                                       
                                       
                                       
                                        className={`p-3 rounded border ${currentStep.ec.status === "Destroyed" ? 'bg-red-900/20 border-red-800/50 relative overflow-hidden' : 'bg-blue-900/20 border-blue-800'}`}
                                    >
                                        {currentStep.ec.status === "Destroyed" && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-red-900/40 backdrop-blur-[1px] z-10">
                                                <div className="flex flex-col items-center rotate-12">
                                                    <Trash2 className="w-8 h-8 text-red-500 mb-1" />
                                                    <span className="text-red-500 font-black tracking-widest uppercase text-xl">Destroyed</span>
                                                </div>
                                            </div>
                                        )}
                                        <div className="font-bold text-blue-300 text-sm mb-2">{currentStep.ec.name}</div>
                                        {Object.entries(currentStep.ec.vars).map(([k, v]) => (
                                            <div key={k} className="text-sm font-mono text-gray-300">
                                                {k}: <span className="text-amber-400">{v}</span>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="flex-1 flex items-center justify-center text-gray-600 italic text-sm">
                                        Empty
                                    </div>
                                )}
                            

                            <div className="mt-auto p-3 rounded border bg-black/40 border-gray-800">
                                <div className="font-bold text-gray-400 text-xs mb-2 uppercase">Global Scope</div>
                                {Object.entries(currentStep.global).map(([k, v]) => (
                                    <div key={k} className="text-xs font-mono text-gray-300">
                                        {k}: <span className={`${v === 'undefined' ? 'text-gray-500' : 'text-purple-400'}`}>{v}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Heap & Closures */}
                        <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 flex flex-col gap-2">
                            <h4 className="text-xs font-bold text-gray-400 uppercase text-center mb-2">Memory Heap (Space Station)</h4>
                            
                            
                                {currentStep.heap.depositFn && (
                                    <div 
                                       
                                       
                                        className="p-3 rounded border bg-purple-900/20 border-purple-800 flex flex-col items-center"
                                    >
                                        <Rocket className="w-6 h-6 text-purple-400 mb-2" />
                                        <div className="font-bold text-purple-300 text-sm mb-3 text-center">Function: deposit(amount)</div>
                                        
                                        {/* The Backpack */}
                                        <div 
                                           
                                           
                                            className="w-full p-3 rounded border bg-emerald-900/30 border-emerald-500/30 relative"
                                        >
                                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-900 px-2 py-0.5 rounded text-[10px] font-bold text-emerald-400 uppercase border border-emerald-800 flex items-center gap-1">
                                                <Backpack className="w-3 h-3" /> Closure (Backpack)
                                            </div>
                                            <div className="mt-2 text-center text-sm font-mono text-gray-200">
                                                balance: <span key={currentStep.heap.depositFn.backpack.balance} className="text-emerald-400 font-bold text-lg">{currentStep.heap.depositFn.backpack.balance}</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            
                        </div>
                    </div>

                    <div className="bg-[#111] p-3 rounded-lg border border-gray-800 min-h-[60px]">
                        <div className="text-xs text-gray-500 uppercase font-bold mb-1">Console</div>
                        <div className="flex flex-col gap-1">
                            {currentStep.output.length === 0 ? (
                                <span className="text-gray-600 italic text-sm font-mono">...</span>
                            ) : (
                                currentStep.output.map((out, idx) => (
                                    <div key={idx} className="text-sm font-mono text-gray-300">&gt; {out}</div>
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

export default JsClosureSimulator;
