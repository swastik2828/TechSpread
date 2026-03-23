import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, AlertTriangle, CheckCircle, RefreshCw } from 'lucide-react';

const JsTypeCoercionSimulator = () => {
    const [selectedExplicit, setSelectedExplicit] = useState(0);
    const [selectedImplicit, setSelectedImplicit] = useState(0);

    const explicitCases = [
        { title: "Number('42')", code: "Number('42')", result: "42", type: "number", note: "Clean conversion." },
        { title: "Number('42px')", code: "Number('42px')", result: "NaN", type: "number", error: true, note: "Number() fails on strings with characters. Use parseInt() instead." },
        { title: "String(null)", code: "String(null)", result: "\"null\"", type: "string", note: "Explicitly converts to the string literal." },
        { title: "Boolean(0)", code: "Boolean(0)", result: "false", type: "boolean", note: "0 is a known falsy value." },
        { title: "Boolean([])", code: "Boolean([])", result: "true", type: "boolean", note: "Arrays, even empty ones, are always truthy objects!" }
    ];

    const implicitCases = [
        { title: "'5' + 3", code: "'5' + 3", result: "\"53\"", type: "string", danger: true, note: "The + operator favors String concatenation if ANY operand is a String." },
        { title: "'5' - 3", code: "'5' - 3", result: "2", type: "number", note: "The - operator forces Number logic. String is coerced to a Number." },
        { title: "true + 1", code: "true + 1", result: "2", type: "number", note: "Boolean coerced to Number. true becomes 1." },
        { title: "null == undefined", code: "null == undefined", result: "true", type: "boolean", danger: true, note: "Loose equality (==) coerces them to be suspiciously equal. Always use ===!" },
        { title: "'' == false", code: "'' == false", result: "true", type: "boolean", danger: true, note: "Empty string coerces to false in == comparisons! Use ===!" }
    ];

    const exp = explicitCases[selectedExplicit];
    const imp = implicitCases[selectedImplicit];

    return (
        <div className="w-full bg-[#0d1117] border border-gray-800 rounded-2xl overflow-hidden font-sans my-8 shadow-2xl flex flex-col md:flex-row">
            
            {/* Explicit Panel */}
            <div className="md:w-1/2 border-b md:border-b-0 md:border-r border-gray-800 flex flex-col">
                <div className="bg-[#161b22] p-4 border-b border-gray-800 text-center">
                    <h3 className="text-blue-400 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2">
                        <CheckCircle className="w-4 h-4" /> Explicit Conversion
                    </h3>
                </div>
                <div className="p-4 flex gap-2 flex-wrap justify-center border-b border-gray-800/50">
                    {explicitCases.map((c, idx) => (
                        <button key={idx} onClick={() => setSelectedExplicit(idx)} className={`px-3 py-1 text-xs font-mono rounded-lg transition-colors ${selectedExplicit === idx ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' : 'bg-gray-800 text-gray-400 hover:text-white'}`}>
                            {c.title}
                        </button>
                    ))}
                </div>
                <AnimatePresence mode="wait">
                    <motion.div key={exp.title} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-6 flex flex-col items-center justify-center h-full gap-4 text-center">
                        <div className="font-mono text-xl text-gray-300 bg-black/40 px-4 py-2 border border-gray-800 rounded-lg">{exp.code}</div>
                        <ArrowRight className="w-6 h-6 text-gray-600 rotate-90 md:rotate-0" />
                        <div className={`font-mono text-3xl font-black ${exp.error ? 'text-red-400' : 'text-blue-400'}`}>{exp.result}</div>
                        <div className="text-xs uppercase font-bold text-gray-500 tracking-widest">{exp.type}</div>
                        <p className={`text-sm mt-4 p-3 rounded-xl border ${exp.error ? 'bg-red-900/10 border-red-500/30 text-red-300' : 'bg-blue-900/10 border-blue-500/30 text-blue-300'}`}>
                            {exp.note}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Implicit Panel */}
            <div className="md:w-1/2 flex flex-col">
                <div className="bg-[#161b22] p-4 border-b border-gray-800 text-center">
                    <h3 className="text-rose-400 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2">
                        <AlertTriangle className="w-4 h-4" /> Implicit Coercion
                    </h3>
                </div>
                <div className="p-4 flex gap-2 flex-wrap justify-center border-b border-gray-800/50">
                    {implicitCases.map((c, idx) => (
                        <button key={idx} onClick={() => setSelectedImplicit(idx)} className={`px-3 py-1 text-xs font-mono rounded-lg transition-colors ${selectedImplicit === idx ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' : 'bg-gray-800 text-gray-400 hover:text-white'}`}>
                            {c.title}
                        </button>
                    ))}
                </div>
                <AnimatePresence mode="wait">
                    <motion.div key={imp.title} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-6 flex flex-col items-center justify-center h-full gap-4 text-center relative overflow-hidden">
                        {imp.danger && <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 blur-[40px] rounded-full"></div>}
                        <div className="font-mono text-xl text-gray-300 bg-black/40 px-4 py-2 border border-rose-900/30 rounded-lg relative z-10">{imp.code}</div>
                        <RefreshCw className="w-6 h-6 text-rose-500 animate-spin-slow relative z-10" />
                        <div className="font-mono text-3xl font-black text-rose-400 relative z-10">{imp.result}</div>
                        <div className="text-xs uppercase font-bold text-gray-500 tracking-widest relative z-10">{imp.type}</div>
                        <p className="text-sm mt-4 p-3 bg-rose-950/30 border border-rose-500/30 rounded-xl text-rose-300 relative z-10">
                            {imp.note}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>
            
        </div>
    );
};

export default JsTypeCoercionSimulator;
