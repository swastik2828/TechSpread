import React, { useState } from 'react';
import { Play, RotateCcw, GitBranch } from 'lucide-react';

const SCENARIOS = [
    {
        id: 'temperature',
        label: 'Temperature Classifier',
        description: 'Classify a temperature value using an if / else if / else chain.',
        paramLabel: 'Temperature (°C)',
        paramType: 'range',
        paramMin: -20,
        paramMax: 50,
        defaultValue: 22,
        evaluate: (val) => {
            const v = Number(val);
            let branch = '';
            let result = '';
            if (v > 35)      { branch = 'celsius > 35';   result = 'Extremely hot'; }
            else if (v > 25) { branch = 'celsius > 25';   result = 'Warm'; }
            else if (v > 15) { branch = 'celsius > 15';   result = 'Mild'; }
            else if (v > 5)  { branch = 'celsius > 5';    result = 'Cool'; }
            else if (v > -5) { branch = 'celsius > -5';   result = 'Cold'; }
            else             { branch = 'else (fallback)'; result = 'Freezing'; }
            return { branch, result };
        },
        branches: [
            { condition: 'celsius > 35',  output: 'Extremely hot' },
            { condition: 'celsius > 25',  output: 'Warm' },
            { condition: 'celsius > 15',  output: 'Mild' },
            { condition: 'celsius > 5',   output: 'Cool' },
            { condition: 'celsius > -5',  output: 'Cold' },
            { condition: 'else',          output: 'Freezing' },
        ]
    },
    {
        id: 'day',
        label: 'Day of Week (switch)',
        description: 'Map a day number (1–7) to a day name using a switch statement.',
        paramLabel: 'Day Number (1 = Mon, 7 = Sun)',
        paramType: 'range',
        paramMin: 1,
        paramMax: 7,
        defaultValue: 3,
        evaluate: (val) => {
            const v = Number(val);
            const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
            const result = days[v - 1] || 'Unknown';
            return { branch: `case ${v}`, result };
        },
        branches: [
            { condition: 'case 1', output: 'Monday' },
            { condition: 'case 2', output: 'Tuesday' },
            { condition: 'case 3', output: 'Wednesday' },
            { condition: 'case 4', output: 'Thursday' },
            { condition: 'case 5', output: 'Friday' },
            { condition: 'case 6', output: 'Saturday' },
            { condition: 'case 7', output: 'Sunday' },
        ]
    },
    {
        id: 'access',
        label: 'Age-Based Access (guard clauses)',
        description: 'Check access eligibility using guard clauses — return early for invalid cases.',
        paramLabel: 'Age',
        paramType: 'range',
        paramMin: 0,
        paramMax: 100,
        defaultValue: 20,
        evaluate: (val) => {
            const age = Number(val);
            if (age < 0)   return { branch: 'age < 0 (guard)',   result: '❌ Invalid age' };
            if (age < 13)  return { branch: 'age < 13 (guard)',  result: '🔒 Children area only' };
            if (age < 18)  return { branch: 'age < 18 (guard)',  result: '🔒 Teen zone only' };
            if (age >= 65) return { branch: 'age >= 65',         result: '✅ Senior access + discounts' };
            return              { branch: 'else (happy path)', result: '✅ Full access granted' };
        },
        branches: [
            { condition: 'age < 0',   output: '❌ Invalid age' },
            { condition: 'age < 13',  output: '🔒 Children area' },
            { condition: 'age < 18',  output: '🔒 Teen zone' },
            { condition: 'age >= 65', output: '✅ Senior access' },
            { condition: 'else',      output: '✅ Full access' },
        ]
    }
];

const JsConditionalSimulator = () => {
    const [activeScenario, setActiveScenario] = useState(SCENARIOS[0]);
    const [value, setValue] = useState(SCENARIOS[0].defaultValue);
    const [hasRun, setHasRun] = useState(false);
    const [result, setResult] = useState(null);

    const handleScenarioChange = (scenario) => {
        setActiveScenario(scenario);
        setValue(scenario.defaultValue);
        setHasRun(false);
        setResult(null);
    };

    const handleRun = () => {
        const r = activeScenario.evaluate(value);
        setResult(r);
        setHasRun(true);
    };

    const handleReset = () => {
        setValue(activeScenario.defaultValue);
        setHasRun(false);
        setResult(null);
    };

    return (
        <div className="w-full bg-[#0d1117] border border-gray-800 rounded-2xl overflow-hidden font-sans my-8 shadow-2xl">
            {/* Header */}
            <div className="px-5 py-4 bg-[#161b22] border-b border-gray-800 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-500/20 border border-amber-500/30">
                    <GitBranch className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-white">Conditional Flow Simulator</h4>
                    <p className="text-xs text-gray-500">Choose a scenario, adjust the input, and trace the execution path</p>
                </div>
            </div>

            {/* Scenario Tabs */}
            <div className="flex overflow-x-auto border-b border-gray-800 bg-[#0d1117]">
                {SCENARIOS.map(s => (
                    <button
                        key={s.id}
                        onClick={() => handleScenarioChange(s)}
                        className={`px-4 py-3 text-xs font-bold whitespace-nowrap transition-all border-b-2 ${
                            activeScenario.id === s.id
                                ? 'border-amber-400 text-amber-400 bg-amber-500/5'
                                : 'border-transparent text-gray-500 hover:text-gray-300'
                        }`}
                    >
                        {s.label}
                    </button>
                ))}
            </div>

            <div className="flex flex-col md:flex-row">
                {/* Left Panel — Controls */}
                <div className="md:w-2/5 p-6 border-b md:border-b-0 md:border-r border-gray-800 flex flex-col gap-5">
                    <p className="text-xs text-gray-400 leading-relaxed">{activeScenario.description}</p>

                    <div>
                        <label className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-2 block">
                            {activeScenario.paramLabel}: <span className="text-amber-400 font-mono">{value}</span>
                        </label>
                        <input
                            type="range"
                            min={activeScenario.paramMin}
                            max={activeScenario.paramMax}
                            value={value}
                            onChange={e => { setValue(Number(e.target.value)); setHasRun(false); setResult(null); }}
                            className="w-full accent-amber-400 cursor-pointer"
                        />
                        <div className="flex justify-between text-xs text-gray-600 mt-1">
                            <span>{activeScenario.paramMin}</span>
                            <span>{activeScenario.paramMax}</span>
                        </div>
                    </div>

                    <div className="flex gap-3 mt-auto">
                        <button
                            onClick={handleRun}
                            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-sm font-bold transition-all shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.4)] active:scale-95"
                        >
                            <Play className="w-4 h-4" /> Run
                        </button>
                        <button
                            onClick={handleReset}
                            className="p-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors active:scale-95"
                            title="Reset"
                        >
                            <RotateCcw className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Right Panel — Branch Trace */}
                <div className="md:w-3/5 p-6 flex flex-col gap-4">
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Execution Path</p>
                    <div className="flex flex-col gap-2">
                        {activeScenario.branches.map((b, i) => {
                            const isActive = hasRun && result && result.branch === b.condition;
                            const isPassed = hasRun && result && !isActive &&
                                activeScenario.branches.slice(0, i).some(prev => prev.condition === result.branch);
                            return (
                                <div
                                    key={b.condition}
                                    className={`flex items-center gap-3 p-3 rounded-xl border text-xs font-mono transition-all duration-300 ${
                                        isActive
                                            ? 'bg-amber-500/15 border-amber-500/60 text-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.1)]'
                                            : isPassed
                                            ? 'bg-gray-900/40 border-gray-800/50 text-gray-600'
                                            : 'bg-[#0a0c10] border-gray-800/50 text-gray-500'
                                    }`}
                                >
                                    <span className={`w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold border ${
                                        isActive ? 'bg-amber-500 border-amber-400 text-black' : isPassed ? 'bg-gray-700 border-gray-600 text-gray-500' : 'bg-gray-900 border-gray-700 text-gray-600'
                                    }`}>
                                        {isPassed ? '✗' : isActive ? '✓' : i + 1}
                                    </span>
                                    <span className="flex-1">
                                        <span className={isPassed ? 'line-through opacity-40' : ''}>{b.condition}</span>
                                    </span>
                                    {isActive && (
                                        <span className="ml-auto text-amber-400 font-bold">→ {b.output}</span>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {hasRun && result && (
                        <div className="mt-2 p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-center">
                            <p className="text-xs text-emerald-400 uppercase tracking-widest font-bold mb-1">Result</p>
                            <p className="text-base font-black text-emerald-300">{result.result}</p>
                        </div>
                    )}
                    {!hasRun && (
                        <div className="mt-auto p-4 rounded-xl bg-gray-900/50 border border-gray-800 text-center text-gray-600 text-xs">
                            Adjust the slider and press <span className="text-amber-400 font-bold">Run</span> to trace the execution path
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default JsConditionalSimulator;
