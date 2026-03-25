import React, { useState } from 'react';
import { ShieldCheck, ShieldOff, FlaskConical, ChevronRight } from 'lucide-react';

const PRESET_VALUES = [
    { label: 'false',    code: 'false',    value: false,     group: 'falsy' },
    { label: '0',        code: '0',        value: 0,         group: 'falsy' },
    { label: '-0',       code: '-0',       value: -0,        group: 'falsy' },
    { label: '""',       code: '""',       value: '',        group: 'falsy' },
    { label: 'null',     code: 'null',     value: null,      group: 'falsy' },
    { label: 'undefined',code: 'undefined',value: undefined, group: 'falsy' },
    { label: 'NaN',      code: 'NaN',      value: NaN,       group: 'falsy' },
    { label: 'true',     code: 'true',     value: true,      group: 'truthy' },
    { label: '1',        code: '1',        value: 1,         group: 'truthy' },
    { label: '-1',       code: '-1',       value: -1,        group: 'truthy' },
    { label: '"hello"',  code: '"hello"',  value: 'hello',   group: 'truthy' },
    { label: '"0"',      code: '"0"',      value: '0',       group: 'truthy' },
    { label: '"false"',  code: '"false"',  value: 'false',   group: 'truthy' },
    { label: '[]',       code: '[]',       value: [],        group: 'truthy', surprise: true },
    { label: '{}',       code: '{}',       value: {},        group: 'truthy', surprise: true },
    { label: '42n',      code: '42n',      value: 42n,       group: 'truthy' },
];

const isTruthy = (val) => {
    if (val === null || val === undefined || val === false || val !== val) return false;
    if (typeof val === 'string' && val === '') return false;
    if (typeof val === 'number' && val === 0) return false;
    if (typeof val === 'bigint' && val === 0n) return false;
    return true;
};

const JsTruthyFalsySimulator = () => {
    const [selected, setSelected] = useState(null);
    const [customInput, setCustomInput] = useState('');
    const [customResult, setCustomResult] = useState(null);
    const [customError, setCustomError] = useState('');

    const handleCustomTest = () => {
        setCustomError('');
        setCustomResult(null);
        try {
            // eslint-disable-next-line no-new-func
            const val = new Function(`return (${customInput})`)();
            setCustomResult({ value: val, truthy: !!val });
        } catch {
            setCustomError('⚠ Invalid expression — try: 0, "", [], {}, "hello", null, 42');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleCustomTest();
    };

    return (
        <div className="w-full bg-[#0d1117] border border-gray-800 rounded-2xl overflow-hidden font-sans my-8 shadow-2xl">
            {/* Header */}
            <div className="px-5 py-4 bg-[#161b22] border-b border-gray-800 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-500/20 border border-amber-500/30">
                    <FlaskConical className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-white">Truthy / Falsy Explorer</h4>
                    <p className="text-xs text-gray-500">Click any value to evaluate it — or test your own expressions below</p>
                </div>
            </div>

            <div className="p-5 flex flex-col gap-6">
                {/* Falsy Column */}
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                        <p className="text-xs text-rose-400 uppercase tracking-widest font-bold mb-3 flex items-center gap-1">
                            <ShieldOff className="w-3 h-3" /> The 6 Falsy Values
                        </p>
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                            {PRESET_VALUES.filter(v => v.group === 'falsy').map(v => (
                                <button
                                    key={v.label}
                                    onClick={() => setSelected(v)}
                                    className={`p-2.5 rounded-xl border font-mono text-xs font-bold transition-all active:scale-95 ${
                                        selected?.label === v.label
                                            ? 'bg-rose-950/60 border-rose-500/70 text-rose-300 shadow-[0_0_15px_rgba(239,68,68,0.15)]'
                                            : 'bg-gray-900 border-gray-700/50 text-gray-400 hover:border-rose-500/40 hover:text-rose-300'
                                    }`}
                                >
                                    {v.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1">
                        <p className="text-xs text-emerald-400 uppercase tracking-widest font-bold mb-3 flex items-center gap-1">
                            <ShieldCheck className="w-3 h-3" /> Truthy Values (everything else)
                        </p>
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                            {PRESET_VALUES.filter(v => v.group === 'truthy').map(v => (
                                <button
                                    key={v.label}
                                    onClick={() => setSelected(v)}
                                    className={`p-2.5 rounded-xl border font-mono text-xs font-bold transition-all active:scale-95 relative ${
                                        selected?.label === v.label
                                            ? 'bg-emerald-950/60 border-emerald-500/70 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                                            : 'bg-gray-900 border-gray-700/50 text-gray-400 hover:border-emerald-500/40 hover:text-emerald-300'
                                    }`}
                                >
                                    {v.label}
                                    {v.surprise && (
                                        <span className="absolute -top-1.5 -right-1.5 text-[8px] bg-yellow-500 text-black rounded-full px-1 font-bold leading-tight">!</span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Result Display */}
                {selected && (
                    <div className={`flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl border transition-all duration-300 ${
                        isTruthy(selected.value)
                            ? 'bg-emerald-950/30 border-emerald-500/40'
                            : 'bg-rose-950/30 border-rose-500/40'
                    }`}>
                        <div className="flex-1 font-mono text-center sm:text-left">
                            <span className={`text-3xl font-black ${isTruthy(selected.value) ? 'text-emerald-300' : 'text-rose-300'}`}>{selected.code}</span>
                            <span className="text-gray-500 text-sm ml-2">({typeof selected.value === 'bigint' ? 'bigint' : typeof selected.value})</span>
                        </div>
                        <ChevronRight className="text-gray-600 rotate-90 sm:rotate-0" size={20} />
                        <div className={`flex items-center gap-3 px-5 py-3 rounded-xl font-black text-sm ${
                            isTruthy(selected.value)
                                ? 'bg-emerald-500/20 text-emerald-300'
                                : 'bg-rose-500/20 text-rose-300'
                        }`}>
                            {isTruthy(selected.value) ? <ShieldCheck size={18} /> : <ShieldOff size={18} />}
                            {isTruthy(selected.value) ? 'TRUTHY' : 'FALSY'}
                        </div>
                        {selected.surprise && (
                            <div className="w-full sm:w-auto text-center text-xs text-yellow-400 bg-yellow-900/20 border border-yellow-700/40 px-3 py-2 rounded-lg">
                                ⚠ Surprise! Empty {selected.label === '[]' ? 'arrays' : 'objects'} are <strong>truthy</strong>!
                            </div>
                        )}
                    </div>
                )}

                {/* Custom Test */}
                <div className="p-4 rounded-xl bg-[#0a0c10] border border-gray-800">
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3">Test Your Own Expression</p>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={customInput}
                            onChange={e => { setCustomInput(e.target.value); setCustomResult(null); setCustomError(''); }}
                            onKeyDown={handleKeyDown}
                            placeholder='e.g.  "hello", 0, [], null + 1, !!"text"'
                            className="flex-1 bg-black border border-gray-700 rounded-xl px-4 py-2.5 text-sm font-mono text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/60 transition-colors"
                        />
                        <button
                            onClick={handleCustomTest}
                            className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm transition-all active:scale-95 whitespace-nowrap"
                        >
                            Test
                        </button>
                    </div>
                    {customError && <p className="mt-2 text-xs text-rose-400 font-medium">{customError}</p>}
                    {customResult && (
                        <div className={`mt-3 flex items-center gap-3 p-3 rounded-xl font-mono text-sm font-bold ${
                            customResult.truthy ? 'bg-emerald-950/40 text-emerald-300 border border-emerald-800/50' : 'bg-rose-950/40 text-rose-300 border border-rose-800/50'
                        }`}>
                            {customResult.truthy ? <ShieldCheck size={16} /> : <ShieldOff size={16} />}
                            <span className="font-sans">Result is <strong>{customResult.truthy ? 'TRUTHY' : 'FALSY'}</strong></span>
                            <span className="ml-auto opacity-60 text-xs">Boolean({String(customInput)}) = {String(customResult.truthy)}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default JsTruthyFalsySimulator;
