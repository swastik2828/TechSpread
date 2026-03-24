import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Fingerprint, Activity } from 'lucide-react';

const JsDynamicTypingSimulator = () => {
    const [inputValue, setInputValue] = useState('42');
    const [evaluatedType, setEvaluatedType] = useState('number');
    const [isThinking, setIsThinking] = useState(false);
    const [parsedCode, setParsedCode] = useState(42);

    useEffect(() => {
        setIsThinking(true);
        const timer = setTimeout(() => {
            try {
                // Safely evaluate simple primitives or string literals
                let val;
                const trimmed = inputValue.trim();
                
                if (trimmed === 'null') {
                    val = null;
                } else if (trimmed === 'undefined') {
                    val = undefined;
                } else if (trimmed === 'true') {
                    val = true;
                } else if (trimmed === 'false') {
                    val = false;
                } else if (!isNaN(Number(trimmed)) && trimmed !== '') {
                    val = Number(trimmed);
                } else if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
                    val = trimmed.substring(1, trimmed.length - 1);
                } else if (trimmed.startsWith('{') && trimmed.endsWith('}')) {
                    val = {}; // Mock object detection
                } else if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
                    val = []; // Mock array detection
                } else if (trimmed.startsWith('Symbol(')) {
                    val = Symbol('mock');
                } else {
                    // Fallback: If it's pure text without quotes, it's a syntax error in real JS, but we treat it as an unquoted string for safety here unless it's a keyword
                    val = String(trimmed);
                }

                setParsedCode(val);
                setEvaluatedType(typeof val);
            } catch (e) {
                setEvaluatedType('SyntaxError');
                setParsedCode('Invalid Format');
            }
            setIsThinking(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [inputValue]);

    return (
        <div className="w-full bg-[#0d1117] border border-gray-800 rounded-2xl overflow-hidden font-sans my-8 shadow-2xl">
            <div className="bg-[#161b22] p-4 border-b border-gray-800 flex justify-between items-center">
                <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                    <Activity className="w-4 h-4 text-pink-500" /> Runtime Engine
                </h3>
            </div>

            <div className="p-6 sm:p-8 flex flex-col md:flex-row gap-8">
                {/* Input Area */}
                <div className="flex-1 flex flex-col gap-4">
                    <p className="text-sm font-medium text-gray-400 mb-2">Reassign this variable to anything:</p>
                    
                    <div className="flex bg-black/40 border border-gray-800 rounded-xl overflow-hidden focus-within:border-amber-500/50 focus-within:ring-1 focus-within:ring-amber-500/50 transition-all">
                        <div className="px-4 py-4 md:py-5 bg-[#161b22] border-r border-gray-800 font-mono text-purple-400 font-bold flex items-center">
                            let myVar = 
                        </div>
                        <input 
                            type="text" 
                            className="flex-1 bg-transparent px-4 py-4 md:py-5 font-mono text-white text-lg focus:outline-none placeholder-gray-700"
                            placeholder={"e.g. 42, 'hello', true..."}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <div className="px-4 py-4 md:py-5 font-mono text-gray-500 flex items-center">;</div>
                    </div>
                </div>

                {/* Analysis Node */}
                <div className="w-full md:w-64 shrink-0 flex flex-col items-center justify-center p-6 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-900/10 via-[#0d1117] to-[#0d1117] border border-gray-800 rounded-xl relative overflow-hidden">
                    <div className="absolute top-2 left-3 flex items-center gap-1.5 opacity-50">
                        <Terminal className="w-3 h-3 text-pink-500" />
                        <span className="text-[9px] uppercase tracking-widest font-black text-pink-500">typeof Eval</span>
                    </div>

                    <AnimatePresence mode="wait">
                        {isThinking ? (
                            <motion.div 
                                key="thinking"
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                className="h-20 w-20 border-4 border-gray-800 border-t-pink-500 rounded-full animate-spin mt-4"
                            />
                        ) : (
                            <motion.div 
                                key="loaded"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="flex flex-col items-center gap-3 mt-4 w-full"
                            >
                                <Fingerprint className="w-8 h-8 text-white opacity-20 mb-2" />
                                <div className={`text-2xl font-black uppercase tracking-widest break-all text-center
                                    ${evaluatedType === 'number' ? 'text-blue-400' : 
                                      evaluatedType === 'string' ? 'text-emerald-400' :
                                      evaluatedType === 'boolean' ? 'text-rose-400' :
                                      evaluatedType === 'object' ? 'text-orange-400' :
                                      evaluatedType === 'undefined' ? 'text-gray-400' :
                                      evaluatedType === 'symbol' ? 'text-purple-400' : 'text-red-500'}`
                                     }>
                                    "{evaluatedType}"
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default JsDynamicTypingSimulator;
