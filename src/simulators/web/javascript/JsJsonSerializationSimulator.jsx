import React, { useState } from 'react';
import { FileJson, Braces, AlertTriangle, ArrowRight, ArrowLeftRight, CheckCircle2, XCircle } from 'lucide-react';

const JsJsonSerializationSimulator = () => {
    const [scenarioId, setScenarioId] = useState('standard');

    const scenarios = {
        standard: {
            label: "Standard Types",
            jsObj: `const user = {\n  id: 42,\n  name: "Alice",\n  isActive: true,\n  tags: ["admin", "dev"]\n};`,
            jsonStr: `{\n  "id": 42,\n  "name": "Alice",\n  "isActive": true,\n  "tags": [\n    "admin",\n    "dev"\n  ]\n}`,
            notes: [
                { type: 'success', text: 'Numbers, Strings, Booleans, and Arrays map perfectly 1-to-1.' }
            ]
        },
        missing: {
            label: "Undefined & Functions",
            jsObj: `const config = {\n  theme: "dark",\n  version: undefined,\n  init: function() { \n    console.log("Ready"); \n  }\n};`,
            jsonStr: `{\n  "theme": "dark"\n}`,
            notes: [
                { type: 'error', text: 'Functions are completely stripped out.' },
                { type: 'error', text: 'Keys with undefined values are removed entirely from the object.' }
            ]
        },
        dates: {
            label: "Date Objects",
            jsObj: `const event = {\n  title: "Launch",\n  date: new Date('2025-01-01T12:00:00Z')\n};`,
            jsonStr: `{\n  "title": "Launch",\n  "date": "2025-01-01T12:00:00.000Z"\n}`,
            notes: [
                { type: 'warning', text: 'Dates are converted to ISO strings during stringify().' },
                { type: 'warning', text: 'When parsed back, they remain Strings, NOT Date objects! You must use a reviver function to restore them.' }
            ]
        },
        math: {
            label: "NaN & Infinity",
            jsObj: `const stats = {\n  score: 100,\n  ratio: NaN,\n  limit: Infinity\n};`,
            jsonStr: `{\n  "score": 100,\n  "ratio": null,\n  "limit": null\n}`,
            notes: [
                { type: 'warning', text: 'JSON has no concept of NaN or Infinity.' },
                { type: 'error', text: 'They are silently coerced into null to preserve the JSON structure.' }
            ]
        }
    };

    const current = scenarios[scenarioId];

    return (
        <div className="w-full bg-[#0a0c10] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl font-sans">
            <div className="bg-gray-900 border-b border-gray-800 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Braces className="text-amber-400 w-5 h-5" />
                    <h3 className="text-white font-bold tracking-wide">JSON Serialization Engine</h3>
                </div>
            </div>

            <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-800 pb-6">
                    {Object.entries(scenarios).map(([id, data]) => (
                        <button
                            key={id}
                            onClick={() => setScenarioId(id)}
                            className={`px-4 py-2 text-sm font-bold rounded transition-all ${
                                scenarioId === id ? 'bg-amber-500 text-black shadow-lg scale-105' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                            }`}
                        >
                            {data.label}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch relative">
                    
                    {/* Left: JavaScript Memory */}
                    <div className="bg-sky-950/20 border border-sky-500/30 rounded-xl flex flex-col">
                        <div className="bg-sky-900/50 p-3 border-b border-sky-500/30 text-xs font-bold text-sky-400 uppercase tracking-widest">
                            JavaScript Memory State
                        </div>
                        <div className="p-4 font-mono text-sm text-sky-200 whitespace-pre overflow-x-auto flex-1">
                            {current.jsObj}
                        </div>
                    </div>

                    {/* Middle Arrow (Desktop) */}
                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-amber-500 rounded-full items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.4)] z-10">
                        <ArrowLeftRight className="text-black w-5 h-5" />
                    </div>

                    {/* Right: JSON Output */}
                    <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-xl flex flex-col">
                        <div className="bg-emerald-900/50 p-3 border-b border-emerald-500/30 text-xs font-bold text-emerald-400 uppercase tracking-widest flex justify-between items-center">
                            <span>Network / Storage (JSON String)</span>
                            <span className="bg-emerald-950 text-emerald-500 px-2 py-0.5 rounded border border-emerald-800 text-[10px]">JSON.stringify()</span>
                        </div>
                        <div className="p-4 font-mono text-sm text-emerald-200 whitespace-pre overflow-x-auto flex-1">
                            {current.jsonStr}
                        </div>
                    </div>
                </div>

                {/* Analysis Notes */}
                <div className="mt-6 bg-gray-900 border border-gray-800 rounded-xl p-4 space-y-3">
                    <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                        <AlertTriangle size={14} /> Serialization Analysis
                    </h4>
                    {current.notes.map((note, idx) => (
                        <div key={idx} className={`flex items-start gap-3 p-3 rounded-lg text-sm font-medium border ${
                            note.type === 'error' ? 'bg-rose-950/30 border-rose-500/30 text-rose-300' :
                            note.type === 'warning' ? 'bg-amber-950/30 border-amber-500/30 text-amber-300' :
                            'bg-emerald-950/30 border-emerald-500/30 text-emerald-300'
                        }`}>
                            {note.type === 'error' ? <XCircle size={18} className="shrink-0 mt-0.5" /> : 
                             note.type === 'warning' ? <AlertTriangle size={18} className="shrink-0 mt-0.5" /> :
                             <CheckCircle2 size={18} className="shrink-0 mt-0.5" />}
                            <span>{note.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JsJsonSerializationSimulator;