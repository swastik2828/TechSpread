import React, { useState } from 'react';
import { Minus, Plus, X, Divide, Percent, Power } from 'lucide-react';

const JsOperatorsSimulator = () => {
    const [num1, setNum1] = useState(10);
    const [num2, setNum2] = useState(3);
    const [activeOp, setActiveOp] = useState('+');

    const compute = () => {
        switch (activeOp) {
            case '+': return num1 + num2;
            case '-': return num1 - num2;
            case '*': return num1 * num2;
            case '/': return (num1 / num2).toFixed(2);
            case '%': return num1 % num2;
            case '**': return num1 ** num2;
            case '&&': return num1 && num2;
            case '||': return num1 || num2;
            case '??': return num1 ?? num2;
            default: return 0;
        }
    };

    const getExplanation = () => {
        if (activeOp === '%') return "Modulo: Returns the remainder of division. Great for checking even/odd (n % 2 === 0).";
        if (activeOp === '**') return "Exponentiation: Raises the first number to the power of the second.";
        if (activeOp === '&&') return "Logical AND: Returns first falsy value, or the last value if all truthy.";
        if (activeOp === '||') return "Logical OR: Returns first truthy value.";
        if (activeOp === '??') return "Nullish Coalescing: Returns right operand ONLY if left is null/undefined.";
        return "Standard arithmetic operator.";
    };

    return (
        <div className="w-full bg-[#0d1117] border border-gray-800 rounded-2xl overflow-hidden font-sans my-8 shadow-2xl flex flex-col md:flex-row">
            
            <div className="md:w-1/3 bg-[#161b22] border-r border-gray-800 p-6 flex flex-col gap-6">
                <div>
                    <label className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 block">Left Operand (Variables/Values)</label>
                    <input type="number" value={num1} onChange={e => setNum1(Number(e.target.value))} className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white font-mono" />
                </div>
                <div>
                    <label className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 block">Right Operand (Variables/Values)</label>
                    <input type="number" value={num2} onChange={e => setNum2(Number(e.target.value))} className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white font-mono" />
                </div>
                <div>
                    <label className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 block">Operator Library</label>
                    <div className="grid grid-cols-4 gap-2">
                        {['+', '-', '*', '/', '%', '**', '&&', '||', '??'].map(op => (
                            <button
                                key={op}
                                onClick={() => setActiveOp(op)}
                                className={`p-2 rounded font-mono font-bold transition-all ${activeOp === op ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(251,191,36,0.5)]' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                            >
                                {op}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="md:w-2/3 p-8 flex flex-col items-center justify-center bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMSkiLz48L3N2Zz4=')]">
                
                <div className="flex items-center gap-6 flex-wrap justify-center mb-12">
                    <div className="px-6 py-4 bg-black border border-gray-800 rounded-2xl font-mono text-3xl font-black text-white shadow-inner">
                        {num1}
                    </div>
                    
                    <div className="w-14 h-14 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center font-mono text-2xl font-black">
                        {activeOp}
                    </div>
                    
                    <div className="px-6 py-4 bg-black border border-gray-800 rounded-2xl font-mono text-3xl font-black text-white shadow-inner">
                        {num2}
                    </div>

                    <span className="text-3xl text-gray-600 font-bold mx-2">=</span>

                    <div className="px-8 py-4 bg-emerald-950/40 border-2 border-emerald-500/50 rounded-2xl font-mono text-4xl font-black text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.15)] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/20 blur-xl"></div>
                        {compute()}
                    </div>
                </div>

                <div className="w-full bg-blue-900/10 border border-blue-500/30 rounded-xl p-4 text-center">
                    <p className="text-blue-300 font-medium">💡 {getExplanation()}</p>
                </div>

            </div>

        </div>
    );
};

export default JsOperatorsSimulator;
