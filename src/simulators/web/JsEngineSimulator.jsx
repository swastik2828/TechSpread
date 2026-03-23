import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Code, Cpu, FileJson, Zap, Settings, RefreshCcw, Box, ArrowRight } from "lucide-react";

export default function JsEngineSimulator() {
    const [step, setStep] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const codeSnippet = `function greet(name) {
  return "Hello, " + name;
}
greet("World");`;

    const astJson = `{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": { "name": "greet" },
      "params": [{ "name": "name" }]
    }
  ]
}`;

    const steps = [
        {
            id: 0,
            title: "1. Source Code",
            desc: "The JavaScript text you wrote.",
            icon: Code,
            color: "text-blue-400",
            bg: "bg-blue-500/10",
            border: "border-blue-500/30",
            content: codeSnippet,
        },
        {
            id: 1,
            title: "2. Lexer / Tokenizer",
            desc: "Breaks code down into meaningful chunks (tokens).",
            icon: Zap,
            color: "text-purple-400",
            bg: "bg-purple-500/10",
            border: "border-purple-500/30",
            content: `[keyword] "function" \n[identifier] "greet"\n[punctuator] "("\n[identifier] "name" \n[punctuator] ")"`,
        },
        {
            id: 2,
            title: "3. Parser & AST",
            desc: "Constructs an Abstract Syntax Tree structure.",
            icon: FileJson,
            color: "text-emerald-400",
            bg: "bg-emerald-500/10",
            border: "border-emerald-500/30",
            content: astJson,
        },
        {
            id: 3,
            title: "4. Interpreter (Ignition)",
            desc: "Reads the AST and generates unoptimized Bytecode.",
            icon: Cpu,
            color: "text-amber-400",
            bg: "bg-amber-500/10",
            border: "border-amber-500/30",
            content: `0000 00 LdaConstant [0]\n0002 01 Star r0\n0004 02 CallUndefinedReceiver0 r0`,
        },
        {
            id: 4,
            title: "5. JIT Compiler (TurboFan)",
            desc: "Monitors 'hot' code and optimizes it into machine code.",
            icon: Settings,
            color: "text-rose-400",
            bg: "bg-rose-500/10",
            border: "border-rose-500/30",
            content: `10101100 00110101\n11110000 10101010\n01010101 11001100`,
        }
    ];

    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                setStep(prev => {
                    if (prev >= steps.length - 1) {
                        setIsPlaying(false);
                        return prev;
                    }
                    return prev + 1;
                });
            }, 1800);
        }
        return () => clearInterval(interval);
    }, [isPlaying, steps.length]);

    const handlePlay = () => {
        if (step >= steps.length - 1) {
            setStep(0);
        }
        setIsPlaying(true);
    };

    return (
        <div className="w-full bg-[#0d1117] rounded-2xl border border-gray-800 shadow-xl overflow-hidden my-8">
            <div className="p-4 border-b border-gray-800 bg-[#161b22] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-yellow-500/20 text-yellow-400">
                        <Box size={20} />
                    </div>
                    <div>
                        <h3 className="text-white font-bold">V8 Engine Pipeline</h3>
                        <p className="text-xs text-gray-400">How JavaScript executes in Chrome & Node.js</p>
                    </div>
                </div>
                
                <button
                    onClick={isPlaying ? () => setIsPlaying(false) : handlePlay}
                    className="flex w-full sm:w-auto items-center justify-center gap-2 px-4 py-2 rounded-lg bg-yellow-500 text-yellow-950 hover:bg-yellow-400 font-bold text-sm transition-colors"
                >
                    {isPlaying ? <RefreshCcw size={16} className="animate-spin" /> : step === steps.length - 1 ? <RefreshCcw size={16} /> : <Play size={16} />}
                    {isPlaying ? "Simulating..." : step === steps.length - 1 ? "Restart" : "Run Pipeline"}
                </button>
            </div>

            <div className="p-4 sm:p-6 lg:p-8 flex flex-col md:flex-row gap-8">
                {/* Flow Diagram (Left / Top) */}
                <div className="flex-1 flex flex-col gap-3 relative">
                    <div className="absolute left-[20px] top-6 bottom-6 w-0.5 bg-gray-800 z-0 hidden sm:block"></div>
                    {steps.map((s, index) => {
                        const Icon = s.icon;
                        const isActive = step === index;
                        const isPast = step > index;
                        
                        return (
                            <button
                                key={s.id}
                                onClick={() => { setStep(index); setIsPlaying(false); }}
                                className={`relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 p-3 sm:p-4 rounded-xl border text-left transition-all duration-300 w-full ${
                                    isActive 
                                        ? s.bg + " border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.1)] ring-1 ring-yellow-500/30 ring-offset-2 ring-offset-[#0d1117]" 
                                        : isPast ? "bg-gray-800/40 border-gray-700 hover:bg-gray-800/60" : "bg-transparent border-gray-800/50 opacity-40 hover:opacity-100"
                                }`}
                            >
                                <div className={`p-2 sm:p-3 rounded-xl shrink-0 ${isActive ? s.color + " bg-black/40" : isPast ? "text-gray-400 bg-gray-900" : "text-gray-600 bg-gray-900"} transition-colors`}>
                                    <Icon size={24} />
                                </div>
                                <div>
                                    <h4 className={`font-bold sm:text-lg mb-1 ${isActive ? "text-white" : "text-gray-300"}`}>{s.title}</h4>
                                    <p className="text-xs sm:text-sm text-gray-500 leading-snug">{s.desc}</p>
                                </div>

                                {isActive && (
                                    <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="absolute right-4 hidden md:block" transition={{type:"spring", stiffness: 300, damping: 30}}>
                                        <ArrowRight className={s.color} size={20} />
                                    </motion.div>
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Data View (Right / Bottom) */}
                <div className="flex-1 w-full flex flex-col">
                    <div className="bg-[#161b22] border border-gray-800 rounded-t-xl px-4 py-3 flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                            <Code size={14} className="text-yellow-500" />
                            Internal Representation
                        </span>
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/30"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/30"></div>
                        </div>
                    </div>
                    <div className="flex-1 bg-[#0a0c10] border border-gray-800 border-t-0 rounded-b-xl p-4 sm:p-6 relative overflow-hidden min-h-[300px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 p-4 sm:p-6 overflow-auto scrollbar-thin scrollbar-thumb-gray-800"
                            >
                                <pre className={`font-mono text-xs sm:text-sm md:text-base leading-relaxed whitespace-pre-wrap ${steps[step].color}`}>
                                    {steps[step].content}
                                </pre>
                            </motion.div>
                        </AnimatePresence>

                        {/* Scanner effect (only when playing) */}
                        {isPlaying && (
                            <motion.div 
                                animate={{ top: ["0%", "100%", "0%"] }} 
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent blur-[1px] opacity-50 z-20 pointer-events-none" 
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
