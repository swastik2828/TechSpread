import React, { useState, useEffect } from "react";
import { Play, RotateCcw, ChevronRight, Info, AlertTriangle, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ExecutionSimulator = () => {
  const [step, setStep] = useState(0);
  const [phase, setPhase] = useState("Creation Phase (Hoisting)");

  const CODE_LINES = [
    { id: 1, text: "console.log(message); // undefined", type: "log" },
    { id: 2, text: "var message = 'Hello World';", type: "assign" },
    { id: 3, text: "greet(); // 'Hi!'", type: "call" },
    { id: 4, text: "function greet() {", type: "decl-start" },
    { id: 5, text: "  console.log('Hi!');", type: "inner" },
    { id: 6, text: "}", type: "decl-end" },
  ];

  const STEPS = [
    // Step 0: Initial state (Creation Phase just scanning)
    {
      phase: "Creation Phase",
      desc: "The JS Engine scans the code for variable and function declarations before executing any line.",
      activeLine: null,
      memory: [],
      console: []
    },
    // Step 1: Hoisting variables
    {
      phase: "Creation Phase",
      desc: "It finds 'var message'. It allocates memory and initializes it to 'undefined'.",
      activeLine: 2,
      memory: [{ name: "message", val: "undefined", type: "var" }],
      console: []
    },
    // Step 2: Hoisting functions
    {
      phase: "Creation Phase",
      desc: "It finds 'function greet()'. It allocates memory and stores the ENTIRE function definition.",
      activeLine: 4,
      memory: [
        { name: "message", val: "undefined", type: "var" },
        { name: "greet", val: "ƒ () {...}", type: "func" }
      ],
      console: []
    },
    // Step 3: Execution starts - line 1
    {
      phase: "Execution Phase",
      desc: "Now execution starts line by line. console.log(message) evaluates to 'undefined' because 'var' was hoisted.",
      activeLine: 1,
      memory: [
        { name: "message", val: "undefined", type: "var" },
        { name: "greet", val: "ƒ () {...}", type: "func" }
      ],
      console: ["undefined"]
    },
    // Step 4: Assignment
    {
      phase: "Execution Phase",
      desc: "Line 2 executes. 'message' receives its actual value: 'Hello World'.",
      activeLine: 2,
      memory: [
        { name: "message", val: "'Hello World'", type: "var", changed: true },
        { name: "greet", val: "ƒ () {...}", type: "func" }
      ],
      console: ["undefined"]
    },
    // Step 5: Function call
    {
      phase: "Execution Phase",
      desc: "Line 3 executes. 'greet()' is called. It works perfectly because the entire function was hoisted in memory!",
      activeLine: 3,
      memory: [
        { name: "message", val: "'Hello World'", type: "var" },
        { name: "greet", val: "ƒ () {...}", type: "func" }
      ],
      console: ["undefined", "Hi!"]
    }
  ];

  const nextStep = () => {
    if (step < STEPS.length - 1) {
      setStep(step + 1);
      setPhase(STEPS[step + 1].phase);
    }
  };

  const reset = () => {
    setStep(0);
    setPhase(STEPS[0].phase);
  };

  const curState = STEPS[step];

  return (
    <div className="bg-[#0f172a] rounded-xl border border-gray-800 shadow-2xl overflow-hidden my-8 w-full">
      {/* Header */}
      <div className="bg-[#1e293b] p-4 flex flex-col sm:flex-row justify-between items-center border-b border-gray-800 gap-3">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Layers className="text-yellow-400 w-5 h-5" />
          <h3 className="text-white font-bold text-lg m-0">Execution Context visualizer</h3>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <div className="text-xs font-mono px-3 py-1 bg-gray-900 rounded border border-gray-700 text-gray-300">
            Phase: <span className={phase.includes("Creation") ? "text-purple-400 font-bold" : "text-green-400 font-bold"}>{phase}</span>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6 pb-2">
        <p className="text-gray-300 text-sm mb-6 flex items-start gap-2 bg-blue-900/20 p-3 rounded-lg border border-blue-900/50">
          <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
          <span>{curState.desc}</span>
        </p>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row gap-0 border-t border-gray-800">
        
        {/* Code View */}
        <div className="flex-1 bg-[#0a0f18] p-4 sm:p-6 lg:border-r border-gray-800">
          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Source Code</h4>
          <div className="font-mono text-sm sm:text-base flex flex-col gap-1">
            {CODE_LINES.map((line) => (
              <div 
                key={line.id} 
                className={`py-1.5 px-3 rounded flex transition-colors ${curState.activeLine === line.id ? 'bg-yellow-500/20 border-l-2 border-yellow-500' : 'pl-4 border-l-2 border-transparent'}`}
              >
                <span className="text-gray-600 mr-4 select-none">{line.id}</span>
                <span className={`
                  ${line.type === 'log' || line.type === 'call' || line.type === 'inner' ? 'text-gray-300' : ''}
                  ${line.type === 'assign' || line.type === 'decl-start' || line.type === 'decl-end' ? 'text-blue-300' : ''}
                  ${curState.activeLine === line.id ? 'text-yellow-100' : ''}
                `}>
                  {line.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Memory View */}
        <div className="w-full lg:w-72 bg-[#1e293b] p-4 sm:p-6 flex flex-col gap-6">
          
          <div>
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 flex items-center justify-between">
              Memory setup (Variable Env)
            </h4>
            
            <div className="min-h-[120px] bg-[#0f172a] rounded border border-gray-800 p-3 flex flex-col gap-2">
              <AnimatePresence>
                {curState.memory.length === 0 && (
                  <motion.p initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="text-gray-600 font-mono text-xs text-center mt-8">Memory is empty</motion.p>
                )}
                {curState.memory.map((item, idx) => (
                  <motion.div 
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`flex flex-col rounded p-2 text-sm font-mono border border-gray-800 ${item.changed ? 'bg-green-900/30 border-green-700/50' : item.type === 'func' ? 'bg-purple-900/20' : 'bg-[#1e293b]'}`}
                  >
                    <span className="text-pink-400">{item.name}</span>
                    <span className={`pl-2 ${item.val === 'undefined' ? 'text-gray-500' : 'text-green-300'}`}>{item.val}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <div>
             <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Console Output</h4>
             <div className="min-h-[60px] bg-black rounded p-3 font-mono text-sm border border-gray-800">
               {curState.console.length === 0 ? (
                 <span className="text-gray-600">&gt; _</span>
               ) : (
                 <div className="flex flex-col gap-1">
                   {curState.console.map((c, i) => (
                     <span key={i} className="text-white">&gt; {c}</span>
                   ))}
                 </div>
               )}
             </div>
          </div>

        </div>
      </div>

      {/* Controls */}
      <div className="bg-[#1e293b] p-4 sm:px-6 flex items-center justify-between border-t border-gray-800">
        <div className="text-sm font-medium text-gray-400">
           Step {step} of {STEPS.length - 1}
        </div>
        <div className="flex gap-3">
          <button 
            onClick={reset}
            className="flex items-center justify-center p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            title="Reset Simulator"
          >
            <RotateCcw size={18} />
          </button>
          <button 
            onClick={nextStep}
            disabled={step === STEPS.length - 1}
            className={`flex items-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-lg transition-colors ${step === STEPS.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {step === 0 ? "Start Creation Phase" : step === 2 ? "Start Execution" : "Step Forward"} <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExecutionSimulator;
