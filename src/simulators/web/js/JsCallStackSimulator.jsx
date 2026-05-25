import React, { useState } from 'react';
import { Play, RotateCcw, ChevronRight, SquareTerminal, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const JsCallStackSimulator = () => {
  const [step, setStep] = useState(0);
  const [consoleLogs, setConsoleLogs] = useState([]);

  const steps = [
    {
      line: 9,
      explanation: "Global Context: The script starts running. The engine prepares to call greet('Ada').",
      stack: [{ name: "Global (anonymous)", args: {}, vars: {} }],
      highlightLines: [9]
    },
    {
      line: 1,
      explanation: "Pushing greet('Ada') to the Call Stack. Arguments: name = 'Ada'. Local variables are initialized to undefined.",
      stack: [
        { name: "Global (anonymous)", args: {}, vars: {} },
        { name: "greet('Ada')", args: { name: "'Ada'" }, vars: { message: "undefined" } }
      ],
      highlightLines: [1]
    },
    {
      line: 2,
      explanation: "Inside greet, we prepare to call sayHello(name). Pushing sayHello('Ada') to the Call Stack.",
      stack: [
        { name: "Global (anonymous)", args: {}, vars: {} },
        { name: "greet('Ada')", args: { name: "'Ada'" }, vars: { message: "undefined" } },
        { name: "sayHello('Ada')", args: { name: "'Ada'" }, vars: {} }
      ],
      highlightLines: [2, 6]
    },
    {
      line: 7,
      explanation: "sayHello resolves its return statement: 'Hello, Ada!'. We are ready to pop sayHello off the stack.",
      stack: [
        { name: "Global (anonymous)", args: {}, vars: {} },
        { name: "greet('Ada')", args: { name: "'Ada'" }, vars: { message: "undefined" } },
        { name: "sayHello('Ada')", args: { name: "'Ada'" }, vars: {}, returns: "'Hello, Ada!'" }
      ],
      highlightLines: [7]
    },
    {
      line: 2,
      explanation: "sayHello returned. Its frame is popped. The return value is assigned to the local variable 'message' in greet.",
      stack: [
        { name: "Global (anonymous)", args: {}, vars: {} },
        { name: "greet('Ada')", args: { name: "'Ada'" }, vars: { message: "'Hello, Ada!'" } }
      ],
      highlightLines: [2]
    },
    {
      line: 3,
      explanation: "Now inside greet, we call console.log(message). Pushing console.log('Hello, Ada!') to the Call Stack.",
      stack: [
        { name: "Global (anonymous)", args: {}, vars: {} },
        { name: "greet('Ada')", args: { name: "'Ada'" }, vars: { message: "'Hello, Ada!'" } },
        { name: "console.log(...)", args: { 0: "'Hello, Ada!'" }, vars: {} }
      ],
      highlightLines: [3]
    },
    {
      line: 3,
      explanation: "console.log executes. The string is printed to the Console tab. Now console.log is ready to be popped.",
      stack: [
        { name: "Global (anonymous)", args: {}, vars: {} },
        { name: "greet('Ada')", args: { name: "'Ada'" }, vars: { message: "'Hello, Ada!'" } },
        { name: "console.log(...)", args: { 0: "'Hello, Ada!'" }, vars: {} }
      ],
      highlightLines: [3],
      log: "Hello, Ada!"
    },
    {
      line: 4,
      explanation: "console.log popped off. greet('Ada') reaches its closing bracket and is ready to pop.",
      stack: [
        { name: "Global (anonymous)", args: {}, vars: {} },
        { name: "greet('Ada')", args: { name: "'Ada'" }, vars: { message: "'Hello, Ada!'" } }
      ],
      highlightLines: [4]
    },
    {
      line: 9,
      explanation: "greet('Ada') is popped off. The main program ends. The Call Stack is completely empty again.",
      stack: [
        { name: "Global (anonymous)", args: {}, vars: {} }
      ],
      highlightLines: [9]
    },
    {
      line: 0,
      explanation: "The script run is complete. The stack is empty. Ready for the next event loop tick!",
      stack: [],
      highlightLines: []
    }
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      const nextStep = step + 1;
      setStep(nextStep);
      if (steps[nextStep].log) {
        setConsoleLogs(prev => [...prev, steps[nextStep].log]);
      }
    }
  };

  const handleReset = () => {
    setStep(0);
    setConsoleLogs([]);
  };

  const codeSnippet = [
    { num: 1, code: "function greet(name) {" },
    { num: 2, code: "  const message = sayHello(name);" },
    { num: 3, code: "  console.log(message);" },
    { num: 4, code: "}" },
    { num: 5, code: "" },
    { num: 6, code: "function sayHello(name) {" },
    { num: 7, code: "  return `Hello, ${name}!`;" },
    { num: 8, code: "}" },
    { num: 9, code: "greet('Ada');" }
  ];

  const currentData = steps[step];

  return (
    <div className="bg-[#0a0c10] border border-gray-800/60 rounded-2xl overflow-hidden shadow-2xl my-8 w-full">
      <div className="bg-[#111418] border-b border-gray-800/60 p-4 flex justify-between items-center flex-wrap gap-3">
        <h3 className="text-white font-bold flex items-center gap-2 text-sm sm:text-base">
          <Layers className="w-5 h-5 text-amber-500" />
          Call Stack & Execution Context Simulator
        </h3>
        <div className="flex gap-2">
          <button 
            onClick={handleNext}
            disabled={step >= steps.length - 1}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors text-xs sm:text-sm font-semibold ${step >= steps.length - 1 ? 'bg-gray-800/50 text-gray-500 cursor-not-allowed' : 'bg-yellow-500/20 text-amber-400 hover:bg-yellow-500/30'}`}
          >
            <ChevronRight size={16} />
            Step Forward
          </button>
          <button 
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800/50 text-gray-400 rounded-lg hover:bg-gray-700/50 transition-colors text-xs sm:text-sm font-semibold"
          >
            <RotateCcw size={16} />
            Reset
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-gray-800/40">
        
        {/* Left Column: Code Highlighter & Console */}
        <div className="bg-[#0a0c10] p-4 sm:p-6 flex flex-col gap-6">
          <div>
            <h4 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-3">Code Editor</h4>
            <div className="bg-[#0D1117] p-4 rounded-xl border border-gray-800 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-gray-300">
              {codeSnippet.map(item => {
                const isHighlighted = currentData.highlightLines.includes(item.num);
                return (
                  <div 
                    key={item.num} 
                    className={`flex items-center gap-4 px-2 py-0.5 rounded transition-all duration-350 ${isHighlighted ? 'bg-yellow-500/10 text-yellow-300 font-bold border-l-2 border-yellow-500 pl-1.5' : 'opacity-80'}`}
                  >
                    <span className="text-gray-600 text-right w-5 select-none">{item.num}</span>
                    <pre className="m-0"><code>{item.code}</code></pre>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="border border-gray-800/60 rounded-xl overflow-hidden flex flex-col">
            <h4 className="bg-[#111418] text-gray-400 text-xs font-bold uppercase tracking-wider px-4 py-2 border-b border-gray-800/60 flex items-center gap-2">
              <SquareTerminal size={14} className="text-gray-400" />
              Developer Console
            </h4>
            <div className="p-4 bg-black/80 font-mono text-xs sm:text-sm text-green-400 min-h-[100px] flex flex-col gap-1.5">
              {consoleLogs.length === 0 ? (
                <span className="text-gray-600 italic">&gt; Console is empty...</span>
              ) : (
                consoleLogs.map((log, index) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -5 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    key={index}
                  >
                    &gt; {log}
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Call Stack Stack Visual */}
        <div className="bg-[#0a0c10] p-4 sm:p-6 flex flex-col gap-6">
          <div className="bg-amber-950/20 border border-amber-500/20 rounded-xl p-4 min-h-[90px] flex items-center shadow-[inset_0_0_15px_rgba(251,191,36,0.05)]">
            <p className="text-amber-200/90 text-xs sm:text-sm font-medium leading-relaxed">{currentData.explanation}</p>
          </div>

          <div className="flex-1 flex flex-col">
            <h4 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-3">Call Stack State</h4>
            
            <div className="border border-gray-800/80 bg-black/25 rounded-xl p-4 flex flex-col-reverse justify-end gap-3 min-h-[260px] relative overflow-hidden">
              <AnimatePresence mode="popLayout">
                {currentData.stack.length === 0 ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center text-gray-500 text-xs gap-2"
                  >
                    <Layers className="w-8 h-8 text-gray-600 stroke-[1.5]" />
                    <span>Call Stack is completely empty</span>
                    <span className="text-[10px] text-gray-600">(Restaurant Waiter is idle)</span>
                  </motion.div>
                ) : (
                  currentData.stack.map((frame, index) => {
                    const isTop = index === currentData.stack.length - 1;
                    return (
                      <motion.div
                        key={`${frame.name}-${index}`}
                        initial={{ opacity: 0, y: -40, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 18 }}
                        className={`p-4 rounded-xl border font-sans relative overflow-hidden transition-all duration-300 ${isTop ? 'bg-gradient-to-br from-yellow-500/25 to-amber-500/10 border-yellow-500/60 shadow-[0_0_20px_rgba(251,191,36,0.15)] ring-1 ring-yellow-500/30' : 'bg-gray-900/60 border-gray-800/80'}`}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className={`font-mono text-xs font-bold tracking-wide ${isTop ? 'text-yellow-400' : 'text-gray-400'}`}>
                            {frame.name}
                          </span>
                          {isTop && (
                            <span className="text-[9px] font-extrabold uppercase bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded border border-yellow-500/30">
                              Active Frame
                            </span>
                          )}
                        </div>

                        {/* Local Variables & Arguments */}
                        <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-gray-800/40 text-[10px] sm:text-xs">
                          <div>
                            <span className="text-gray-500 block font-bold mb-1 uppercase tracking-wider text-[9px]">Arguments:</span>
                            {Object.keys(frame.args).length === 0 ? (
                              <span className="text-gray-600 italic">None</span>
                            ) : (
                              Object.entries(frame.args).map(([key, val]) => (
                                <div key={key} className="font-mono"><span className="text-amber-500">{key}:</span> {val}</div>
                              ))
                            )}
                          </div>
                          <div>
                            <span className="text-gray-500 block font-bold mb-1 uppercase tracking-wider text-[9px]">Scope Variables:</span>
                            {Object.keys(frame.vars).length === 0 ? (
                              <span className="text-gray-600 italic">None</span>
                            ) : (
                              Object.entries(frame.vars).map(([key, val]) => (
                                <div key={key} className="font-mono"><span className="text-sky-400">{key}:</span> {val}</div>
                              ))
                            )}
                          </div>
                        </div>

                        {frame.returns && (
                          <div className="mt-2 pt-2 border-t border-dashed border-gray-800 text-[10px] sm:text-xs font-mono text-green-400">
                            <strong>Returns:</strong> {frame.returns}
                          </div>
                        )}
                      </motion.div>
                    );
                  })
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>

      <div className="bg-[#111418] h-2 w-full">
        <motion.div 
          className="h-full bg-gradient-to-r from-yellow-500 to-amber-400"
          animate={{ width: `${(step / (steps.length - 1)) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
};

export default JsCallStackSimulator;
