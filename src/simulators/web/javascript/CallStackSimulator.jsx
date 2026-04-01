import React, { useState } from "react";
import { Play, RotateCcw, ChevronRight, AlertTriangle, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CallStackSimulator = () => {
  const [step, setStep] = useState(0);
  const [overflow, setOverflow] = useState(false);

  const CODE_LINES = [
    { id: 1, text: "function multiply(a, b) {" },
    { id: 2, text: "  return a * b;" },
    { id: 3, text: "}" },
    { id: 4, text: "" },
    { id: 5, text: "function square(n) {" },
    { id: 6, text: "  return multiply(n, n);" },
    { id: 7, text: "}" },
    { id: 8, text: "" },
    { id: 9, text: "function printSquare(n) {" },
    { id: 10, text: "  const result = square(n);" },
    { id: 11, text: "  console.log(result);" },
    { id: 12, text: "}" },
    { id: 13, text: "" },
    { id: 14, text: "printSquare(4);" }
  ];

  const NORMAL_STEPS = [
    { desc: "Global Execution Context is created. Code execution reaches line 14.", activeLine: 14, stack: [{ name: "Global Context", type: "global", vars: {} }] },
    { desc: "printSquare(4) is called. Pushed to Call Stack.", activeLine: 9, stack: [
      { name: "printSquare(4)", type: "func", vars: { n: 4 } },
      { name: "Global Context", type: "global", vars: {} }
    ]},
    { desc: "Inside printSquare, it calls square(4) on line 10.", activeLine: 10, stack: [
      { name: "printSquare(4)", type: "func", vars: { n: 4, result: "undefined" } },
      { name: "Global Context", type: "global", vars: {} }
    ]},
    { desc: "square(4) is pushed to the stack.", activeLine: 5, stack: [
      { name: "square(4)", type: "func", vars: { n: 4 } },
      { name: "printSquare(4)", type: "func", vars: { n: 4, result: "undefined" } },
      { name: "Global Context", type: "global", vars: {} }
    ]},
    { desc: "Inside square, it calls multiply(4, 4) on line 6.", activeLine: 6, stack: [
      { name: "square(4)", type: "func", vars: { n: 4 } },
      { name: "printSquare(4)", type: "func", vars: { n: 4, result: "undefined" } },
      { name: "Global Context", type: "global", vars: {} }
    ]},
    { desc: "multiply(4, 4) is pushed to the stack.", activeLine: 1, stack: [
      { name: "multiply(4, 4)", type: "func", vars: { a: 4, b: 4 } },
      { name: "square(4)", type: "func", vars: { n: 4 } },
      { name: "printSquare(4)", type: "func", vars: { n: 4, result: "undefined" } },
      { name: "Global Context", type: "global", vars: {} }
    ]},
    { desc: "multiply returns 16 and is popped off the stack.", activeLine: 2, stack: [
      { name: "square(4)", type: "func", vars: { n: 4 } },
      { name: "printSquare(4)", type: "func", vars: { n: 4, result: "undefined" } },
      { name: "Global Context", type: "global", vars: {} }
    ]},
    { desc: "square returns 16 to printSquare and is popped off.", activeLine: 6, stack: [
      { name: "printSquare(4)", type: "func", vars: { n: 4, result: 16 } },
      { name: "Global Context", type: "global", vars: {} }
    ]},
    { desc: "printSquare logs 16 to the console.", activeLine: 11, stack: [
      { name: "printSquare(4)", type: "func", vars: { n: 4, result: 16 } },
      { name: "Global Context", type: "global", vars: {} }
    ]},
    { desc: "printSquare finishes and is popped. Stack is empty (back to Global).", activeLine: 12, stack: [
      { name: "Global Context", type: "global", vars: {} }
    ]},
  ];

  const OVERFLOW_STEPS = Array.from({ length: 15 }).map((_, i) => ({
    desc: `Recursive call... stack depth: ${i + 1}`,
    activeLine: 2,
    stack: Array.from({ length: i + 1 }).map((_, j) => ({ name: "runForever()", type: "error" })).reverse().concat({ name: "Global Context", type: "global" })
  }));

  const steps = overflow ? OVERFLOW_STEPS : NORMAL_STEPS;
  const curState = steps[Math.min(step, steps.length - 1)];

  const nextStep = () => {
    if (step < steps.length - 1) setStep(s => s + 1);
  };

  const triggerOverflow = () => {
    setOverflow(true);
    setStep(0);
  };

  const reset = () => {
    setOverflow(false);
    setStep(0);
  };

  return (
    <div className="bg-[#0f172a] rounded-xl border border-gray-800 shadow-2xl overflow-hidden my-8 w-full">
      <div className="bg-[#1e293b] p-4 flex flex-col md:flex-row justify-between items-center border-b border-gray-800 gap-4">
        <div className="flex items-center gap-3">
          <Layers className="text-pink-400 w-5 h-5" />
          <h3 className="text-white font-bold text-lg m-0">Call Stack Visualizer</h3>
        </div>
        <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          <button 
            onClick={reset}
            className={`px-3 py-1.5 rounded text-sm font-medium whitespace-nowrap border transition-colors ${!overflow ? 'bg-blue-900/50 text-blue-300 border-blue-700/50' : 'bg-gray-800 text-gray-400 border-gray-700 hover:text-white'}`}
          >
            Normal Execution
          </button>
          <button 
            onClick={triggerOverflow}
            className={`px-3 py-1.5 rounded text-sm font-medium whitespace-nowrap border transition-colors ${overflow ? 'bg-red-900/50 text-red-300 border-red-700/50' : 'bg-transparent text-gray-400 border-gray-700 hover:text-red-400 hover:border-red-900'}`}
          >
            Trigger Stack Overflow
          </button>
        </div>
      </div>

      <div className="p-4 md:p-6 pb-2">
        <div className={`p-4 rounded-lg flex gap-3 items-start border ${overflow && step === steps.length - 1 ? 'bg-red-950/50 border-red-900/50 text-red-200' : 'bg-[#1e293b] border-gray-700 text-gray-300'}`}>
          {overflow && step === steps.length - 1 ? <AlertTriangle className="text-red-500 shrink-0" /> : <Play className={`w-5 h-5 shrink-0 ${overflow ? 'text-orange-400' : 'text-blue-400'}`} />}
          <p className="text-sm font-medium">
            {overflow && step === steps.length - 1 ? "RangeError: Maximum call stack size exceeded. The engine crashed!" : curState.desc}
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row border-t border-gray-800 min-h-[400px]">
        {/* Code Column */}
        <div className="flex-1 p-4 md:p-6 bg-[#0a0f18] border-b md:border-b-0 md:border-r border-gray-800">
          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
            {overflow ? "Infinite Recursion Code" : "Function Chain Code"}
          </h4>
          <div className="font-mono text-sm flex flex-col gap-1 overflow-x-auto">
            {overflow ? (
              <>
                <div className={`py-1 px-2 rounded ${curState.activeLine === 1 ? 'bg-red-900/30 text-red-100 border-l-2 border-red-500' : 'text-gray-400 border-l-2 border-transparent'}`}>1 <span className="text-blue-400 ml-4">function</span> runForever() {'{'}</div>
                <div className={`py-1 px-2 rounded ${curState.activeLine === 2 ? 'bg-red-900/30 text-red-100 border-l-2 border-red-500' : 'text-gray-400 border-l-2 border-transparent'}`}>2 <span className="ml-8">runForever();</span></div>
                <div className="py-1 px-2 rounded text-gray-400 border-l-2 border-transparent">3 {'}'}</div>
                <div className="py-1 px-2 rounded text-gray-400 border-l-2 border-transparent">4</div>
                <div className="py-1 px-2 rounded text-gray-400 border-l-2 border-transparent">5 runForever();</div>
              </>
            ) : (
              CODE_LINES.map(line => (
                <div key={line.id} className={`py-0.5 px-2 rounded whitespace-nowrap ${curState.activeLine === line.id ? 'bg-blue-900/30 text-blue-100 border-l-2 border-blue-500' : 'text-gray-400 border-l-2 border-transparent pl-3'}`}>
                  <span className="text-gray-600 inline-block w-6 text-right mr-3 select-none">{line.id}</span>
                  {line.text}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Stack Column */}
        <div className="w-full md:w-80 p-4 md:p-6 bg-[#111827] flex flex-col">
          <div className="flex justify-between items-center mb-4">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest m-0">The Call Stack</h4>
              <span className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded">LIFO (Last In, First Out)</span>
          </div>

          <div className="flex-1 flex flex-col justify-end border-b-2 border-l-2 border-r-2 border-gray-700 rounded-b p-2 relative bg-[#1e293b]/50 overflow-hidden min-h-[300px]">
            <AnimatePresence>
              {curState.stack.map((frame, idx) => (
                <motion.div
                  key={idx + '-' + frame.name}
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className={`w-full p-3 rounded-md mb-2 shadow-lg border relative z-10 ${
                    frame.type === 'global' ? 'bg-gray-800 border-gray-600 text-gray-300' :
                    frame.type === 'error' ? 'bg-red-900/80 border-red-500 text-red-100' :
                    'bg-indigo-900/60 border-indigo-500/50 text-indigo-100'
                  }`}
                >
                  <div className="font-mono text-sm font-bold truncate">{frame.name}</div>
                  {frame.vars && Object.keys(frame.vars).length > 0 && (
                     <div className="mt-2 text-xs opacity-80 font-mono grid grid-cols-2 gap-x-2">
                       {Object.entries(frame.vars).map(([k, v]) => (
                         <span key={k}>{k}: {v}</span>
                       ))}
                     </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
            
            {/* Visual Overflow overflow indicator */}
            <AnimatePresence>
                {overflow && step === steps.length - 1 && (
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="absolute top-0 left-0 w-full h-full bg-red-500/20 z-20 flex items-center justify-center backdrop-blur-sm">
                        <span className="bg-red-900 text-white px-4 py-2 rounded-lg font-bold rotate-12 shadow-2xl border-2 border-red-500">STACK FULL</span>
                    </motion.div>
                )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="bg-[#1e293b] p-4 flex items-center justify-between border-t border-gray-800">
        <div className="text-xs text-gray-500 font-mono">
          Depth: {curState.stack.length} frame(s)
        </div>
        <div className="flex gap-2">
           <button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0} className="p-2 bg-gray-800 text-gray-400 rounded hover:bg-gray-700 disabled:opacity-50">Back</button>
           <button onClick={nextStep} disabled={step === steps.length - 1} className="px-5 py-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold rounded flex gap-2 items-center disabled:opacity-50 transition-colors">
              Step <ChevronRight size={16} />
           </button>
        </div>
      </div>
    </div>
  );
};

export default CallStackSimulator;
