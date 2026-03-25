import React, { useState, useCallback } from 'react';
import { Play, RotateCcw, RefreshCw } from 'lucide-react';

const LOOP_TYPES = [
    {
        id: 'for',
        label: 'for',
        description: 'Classic index-driven loop. Best when you know the number of iterations upfront.',
        code: (limit) => `for (let i = 0; i < ${limit}; i++) {\n  console.log(i);\n}`,
        run: (limit) => {
            const steps = [];
            for (let i = 0; i < limit; i++) steps.push({ iter: i, value: i, condition: `i (${i}) < ${limit}` });
            return steps;
        }
    },
    {
        id: 'while',
        label: 'while',
        description: 'Condition-driven loop. Best when you do not know the iteration count in advance.',
        code: (limit) => `let count = 0;\nwhile (count < ${limit}) {\n  console.log(count);\n  count++;\n}`,
        run: (limit) => {
            const steps = [];
            let count = 0;
            while (count < limit) { steps.push({ iter: count, value: count, condition: `count (${count}) < ${limit}` }); count++; }
            return steps;
        }
    },
    {
        id: 'dowhile',
        label: 'do...while',
        description: 'Execute-first loop. Body always runs at least once before condition is checked.',
        code: (limit) => `let n = 0;\ndo {\n  console.log(n);\n  n++;\n} while (n < ${limit});`,
        run: (limit) => {
            const steps = [];
            let n = 0;
            do { steps.push({ iter: n, value: n, condition: `n (${n}) < ${limit} (checked after)` }); n++; } while (n < limit);
            return steps;
        }
    },
    {
        id: 'forof',
        label: 'for...of',
        description: 'Value iteration over any iterable (arrays, strings, Maps, Sets). Modern & idiomatic.',
        code: () => `const fruits = ['🍎', '🍌', '🍇', '🍓', '🥝'];\nfor (const fruit of fruits) {\n  console.log(fruit);\n}`,
        run: () => {
            const fruits = ['🍎', '🍌', '🍇', '🍓', '🥝'];
            return fruits.map((f, i) => ({ iter: i, value: f, condition: `iterating value at index ${i}` }));
        }
    },
    {
        id: 'forin',
        label: 'for...in',
        description: 'Key iteration over enumerable object properties. For plain objects only.',
        code: () => `const user = { name: 'Alice', age: 25,\n  role: 'dev', active: true };\nfor (const key in user) {\n  console.log(key);\n}`,
        run: () => {
            const user = { name: 'Alice', age: 25, role: 'dev', active: true };
            return Object.keys(user).map((k, i) => ({ iter: i, value: k, condition: `key: "${k}"` }));
        }
    }
];

const JsLoopsSimulator = () => {
    const [activeLoop, setActiveLoop] = useState(LOOP_TYPES[0]);
    const [limit, setLimit] = useState(5);
    const [steps, setSteps] = useState([]);
    const [currentStep, setCurrentStep] = useState(-1);
    const [isRunning, setIsRunning] = useState(false);
    const [isDone, setIsDone] = useState(false);

    const handleReset = useCallback(() => {
        setSteps([]);
        setCurrentStep(-1);
        setIsRunning(false);
        setIsDone(false);
    }, []);

    const handleLoopChange = (loop) => {
        setActiveLoop(loop);
        handleReset();
    };

    const handleRun = () => {
        const computed = activeLoop.run(limit);
        setSteps(computed);
        setCurrentStep(-1);
        setIsRunning(true);
        setIsDone(false);
        let idx = 0;
        const interval = setInterval(() => {
            if (idx >= computed.length) {
                clearInterval(interval);
                setCurrentStep(computed.length);
                setIsRunning(false);
                setIsDone(true);
                return;
            }
            setCurrentStep(idx);
            idx++;
        }, 350);
    };

    const codeStr = ['forof', 'forin'].includes(activeLoop.id) ? activeLoop.code() : activeLoop.code(limit);
    const showLimit = !['forof', 'forin'].includes(activeLoop.id);

    return (
        <div className="w-full bg-[#0d1117] border border-gray-800 rounded-2xl overflow-hidden font-sans my-8 shadow-2xl">
            {/* Header */}
            <div className="px-5 py-4 bg-[#161b22] border-b border-gray-800 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-500/20 border border-amber-500/30">
                    <RefreshCw className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-white">Loop Visualizer</h4>
                    <p className="text-xs text-gray-500">Step through iterations to see exactly how each loop type executes</p>
                </div>
            </div>

            {/* Loop Type Tabs */}
            <div className="flex overflow-x-auto border-b border-gray-800 bg-[#0d1117]">
                {LOOP_TYPES.map(l => (
                    <button
                        key={l.id}
                        onClick={() => handleLoopChange(l)}
                        className={`px-4 py-3 text-xs font-bold font-mono whitespace-nowrap transition-all border-b-2 ${
                            activeLoop.id === l.id
                                ? 'border-amber-400 text-amber-400 bg-amber-500/5'
                                : 'border-transparent text-gray-500 hover:text-gray-300'
                        }`}
                    >
                        {l.label}
                    </button>
                ))}
            </div>

            <div className="flex flex-col md:flex-row min-h-[300px]">
                {/* Left — Code + Controls */}
                <div className="md:w-2/5 p-5 border-b md:border-b-0 md:border-r border-gray-800 flex flex-col gap-4">
                    <p className="text-xs text-gray-400 leading-relaxed">{activeLoop.description}</p>

                    {showLimit && (
                        <div>
                            <label className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-2 block">
                                Iterations: <span className="text-amber-400 font-mono">{limit}</span>
                            </label>
                            <input
                                type="range" min={1} max={8} value={limit}
                                onChange={e => { setLimit(Number(e.target.value)); handleReset(); }}
                                className="w-full accent-amber-400 cursor-pointer"
                            />
                        </div>
                    )}

                    {/* Pseudo-code display */}
                    <div className="bg-black/60 rounded-xl border border-gray-800 p-4 font-mono text-xs leading-relaxed text-gray-300 whitespace-pre overflow-x-auto flex-1">
                        {codeStr}
                    </div>

                    <div className="flex gap-2 mt-auto">
                        <button
                            onClick={handleRun}
                            disabled={isRunning}
                            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed text-black text-sm font-bold transition-all shadow-[0_0_20px_rgba(251,191,36,0.25)] active:scale-95"
                        >
                            <Play className="w-4 h-4" /> {isRunning ? 'Running…' : 'Run'}
                        </button>
                        <button onClick={handleReset} className="p-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors active:scale-95">
                            <RotateCcw className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Right — Iteration Tiles */}
                <div className="md:w-3/5 p-5 flex flex-col gap-3 overflow-y-auto max-h-[400px]">
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Iterations</p>
                    {steps.length === 0 && (
                        <div className="flex-1 flex items-center justify-center text-gray-700 text-xs text-center">
                            Press <span className="mx-1 text-amber-400 font-bold">Run</span> to animate the loop execution
                        </div>
                    )}
                    <div className="flex flex-wrap gap-2">
                        {steps.map((step, idx) => (
                            <div
                                key={idx}
                                className={`px-3 py-2 rounded-xl border font-mono text-xs font-bold transition-all duration-200 ${
                                    idx < currentStep
                                        ? 'bg-emerald-950/40 border-emerald-700/50 text-emerald-300'
                                        : idx === currentStep
                                        ? 'bg-amber-500/20 border-amber-500/60 text-amber-300 scale-110 shadow-[0_0_15px_rgba(251,191,36,0.2)]'
                                        : 'bg-gray-900 border-gray-800 text-gray-600'
                                }`}
                            >
                                <div className="text-center">{String(step.value)}</div>
                                <div className="text-[9px] opacity-60 font-sans mt-0.5">iter {step.iter}</div>
                            </div>
                        ))}
                    </div>
                    {isDone && (
                        <div className="mt-auto p-3 rounded-xl bg-emerald-950/30 border border-emerald-700/40 text-center text-emerald-400 text-xs font-bold">
                            ✓ Loop complete — {steps.length} iteration{steps.length !== 1 ? 's' : ''}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default JsLoopsSimulator;
