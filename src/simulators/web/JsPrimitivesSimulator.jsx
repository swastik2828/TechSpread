import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Info, Layers } from 'lucide-react';

const primitivesData = [
    { type: 'Number', code: '42', typeof: '"number"', memory: '64-bit float', desc: 'Represents both integer and floating-point numbers.', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
    { type: 'String', code: '"Hello"', typeof: '"string"', memory: 'UTF-16 text', desc: 'A sequence of characters used for text.', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' },
    { type: 'Boolean', code: 'true', typeof: '"boolean"', memory: 'Logical entity', desc: 'Can be exactly two values: true or false.', color: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/30' },
    { type: 'undefined', code: 'undefined', typeof: '"undefined"', memory: 'Uninitialized', desc: 'A variable that has not been assigned a value.', color: 'text-gray-400', bg: 'bg-gray-500/10', border: 'border-gray-500/30' },
    { type: 'null', code: 'null', typeof: '"object" ⚠️', memory: 'Empty intentional', desc: 'Represents the intentional absence of an object value.', color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/30' },
    { type: 'Symbol', code: 'Symbol()', typeof: '"symbol"', memory: 'Unique identifier', desc: 'A unique and immutable primitive used as an object key.', color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30' },
    { type: 'BigInt', code: '9007199254740991n', typeof: '"bigint"', memory: 'Arbitrary precision', desc: 'Numeric values larger than the standard Number limit.', color: 'text-sky-400', bg: 'bg-sky-500/10', border: 'border-sky-500/30' }
];

const JsPrimitivesSimulator = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeData = primitivesData[activeIndex];

    return (
        <div className="w-full bg-[#0d1117] border border-gray-800 rounded-2xl overflow-hidden font-sans my-8 shadow-2xl flex flex-col md:flex-row">
            
            {/* Sidebar Data List */}
            <div className="md:w-1/3 bg-[#161b22] border-r border-gray-800 p-4 shrink-0 flex flex-col gap-2 relative overflow-y-auto max-h-[400px]">
                <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 pl-2">Select a Primitive</h3>
                {primitivesData.map((prim, idx) => (
                    <button
                        key={prim.type}
                        onClick={() => setActiveIndex(idx)}
                        className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 border ${activeIndex === idx ? `${prim.bg} ${prim.border}` : 'border-transparent hover:bg-white/5'} flex justify-between items-center group`}
                    >
                        <span className={`font-bold ${activeIndex === idx ? prim.color : 'text-gray-300 group-hover:text-white'}`}>
                            {prim.type}
                        </span>
                        <ArrowRight className={`w-4 h-4 transition-transform ${activeIndex === idx ? `translate-x-1 ${prim.color}` : 'opacity-0 -translate-x-2 group-hover:opacity-50'}`} />
                    </button>
                ))}
            </div>

            {/* Visualizer Area */}
            <div className="md:w-2/3 p-6 sm:p-8 flex flex-col relative overflow-hidden bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')]">
                
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeData.type}
                        initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 0.98, filter: "blur(2px)" }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col h-full gap-8"
                    >
                        {/* Definition Card */}
                        <div className={`p-6 rounded-2xl border ${activeData.bg} ${activeData.border} backdrop-blur-md`}>
                            <div className="flex items-center gap-3 mb-4">
                                <Layers className={`w-6 h-6 ${activeData.color}`} />
                                <h2 className={`text-2xl sm:text-3xl font-black ${activeData.color}`}>{activeData.type}</h2>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-sm sm:text-base font-medium">
                                {activeData.desc}
                            </p>
                        </div>

                        {/* Analysis Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto border-t border-gray-800 pt-8">
                            
                            <div className="bg-black/50 border border-gray-800 rounded-xl p-5">
                                <h3 className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-3">Literal Code Value</h3>
                                <div className="font-mono text-xl sm:text-2xl text-white">
                                    {activeData.code}
                                </div>
                            </div>

                            <div className="bg-black/50 border border-gray-800 rounded-xl p-5">
                                <h3 className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-3">Runtime Memory Map</h3>
                                <div className={`font-mono text-xl sm:text-2xl ${activeData.color}`}>
                                    {activeData.memory}
                                </div>
                            </div>
                            
                            <div className="bg-black/50 border border-gray-800 rounded-xl p-5 sm:col-span-2">
                                <h3 className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-3">Operator Execution</h3>
                                <div className="flex items-center flex-wrap gap-2 font-mono text-sm sm:text-lg">
                                    <span className="text-pink-400">typeof</span>
                                    <span className="text-gray-300">{activeData.code}</span>
                                    <ArrowRight className="w-4 h-4 text-gray-600 mx-2" />
                                    <span className="bg-gray-900 px-3 py-1 rounded text-green-400 font-bold border border-gray-700 shadow-inner">
                                        {activeData.typeof}
                                    </span>
                                </div>
                                {activeData.type === 'null' && (
                                    <div className="mt-4 p-3 bg-red-950/20 border border-red-900/40 rounded-lg flex gap-3 text-red-300 text-sm items-start leading-relaxed">
                                        <Info className="w-5 h-5 shrink-0" />
                                        This is a legacy bug in JavaScript dating back to 1995. Even though the type evaluates to "object", null is officially a primitive.
                                    </div>
                                )}
                            </div>

                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default JsPrimitivesSimulator;
