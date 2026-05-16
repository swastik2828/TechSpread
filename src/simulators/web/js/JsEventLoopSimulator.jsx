import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Pause, CheckCircle2, Circle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const JsEventLoopSimulator = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    {
      code: `console.log("1");`,
      explanation: "Synchronous code. Goes straight to the Call Stack and executes immediately.",
      callStack: ["console.log(\"1\")"],
      webApi: [],
      callbackQueue: [],
      microtaskQueue: [],
      consoleOut: []
    },
    {
      code: `console.log("1");`,
      explanation: "Popped off the Call Stack. Output generated.",
      callStack: [],
      webApi: [],
      callbackQueue: [],
      microtaskQueue: [],
      consoleOut: ["1"]
    },
    {
      code: `setTimeout(() => console.log("4"), 0);`,
      explanation: "setTimeout is a Web API. It's sent off to the browser to handle the timer.",
      callStack: ["setTimeout(cb, 0)"],
      webApi: [],
      callbackQueue: [],
      microtaskQueue: [],
      consoleOut: ["1"]
    },
    {
      code: `setTimeout(() => console.log("4"), 0);`,
      explanation: "Timer is running in the background. The Call Stack is empty again.",
      callStack: [],
      webApi: ["Timer (0ms)"],
      callbackQueue: [],
      microtaskQueue: [],
      consoleOut: ["1"]
    },
    {
      code: `Promise.resolve().then(() => console.log("3"));`,
      explanation: "Promise resolves instantly. Its callback goes to the Microtask Queue (high priority).",
      callStack: ["Promise.resolve().then(cb)"],
      webApi: ["Timer (0ms)"],
      callbackQueue: [],
      microtaskQueue: [],
      consoleOut: ["1"]
    },
    {
      code: `Promise.resolve().then(() => console.log("3"));`,
      explanation: "Timer completes! Its callback is moved to the Callback Queue (Macrotask Queue).",
      callStack: [],
      webApi: [],
      callbackQueue: ["cb -> console.log(\"4\")"],
      microtaskQueue: ["cb -> console.log(\"3\")"],
      consoleOut: ["1"]
    },
    {
      code: `console.log("2");`,
      explanation: "Synchronous code again. Goes straight to the Call Stack.",
      callStack: ["console.log(\"2\")"],
      webApi: [],
      callbackQueue: ["cb -> console.log(\"4\")"],
      microtaskQueue: ["cb -> console.log(\"3\")"],
      consoleOut: ["1"]
    },
    {
      code: `console.log("2");`,
      explanation: "Popped off the Call Stack. Output generated. Call stack is now empty.",
      callStack: [],
      webApi: [],
      callbackQueue: ["cb -> console.log(\"4\")"],
      microtaskQueue: ["cb -> console.log(\"3\")"],
      consoleOut: ["1", "2"]
    },
    {
      code: `// Event Loop Check`,
      explanation: "Event Loop checks the queues. Microtask Queue has higher priority! It takes from there first.",
      callStack: [],
      webApi: [],
      callbackQueue: ["cb -> console.log(\"4\")"],
      microtaskQueue: ["cb -> console.log(\"3\")"],
      consoleOut: ["1", "2"]
    },
    {
      code: `// Microtask Execution`,
      explanation: "Microtask callback is pushed to the Call Stack.",
      callStack: ["cb -> console.log(\"3\")"],
      webApi: [],
      callbackQueue: ["cb -> console.log(\"4\")"],
      microtaskQueue: [],
      consoleOut: ["1", "2"]
    },
    {
      code: `// Microtask Execution`,
      explanation: "Microtask completes. Output generated.",
      callStack: [],
      webApi: [],
      callbackQueue: ["cb -> console.log(\"4\")"],
      microtaskQueue: [],
      consoleOut: ["1", "2", "3"]
    },
    {
      code: `// Macrotask Execution`,
      explanation: "Microtask queue is empty. Event loop takes next item from Callback Queue.",
      callStack: ["cb -> console.log(\"4\")"],
      webApi: [],
      callbackQueue: [],
      microtaskQueue: [],
      consoleOut: ["1", "2", "3"]
    },
    {
      code: `// Finished`,
      explanation: "Last callback completes. Output generated.",
      callStack: [],
      webApi: [],
      callbackQueue: [],
      microtaskQueue: [],
      consoleOut: ["1", "2", "3", "4"]
    }
  ];

  const timerRef = useRef(null);

  useEffect(() => {
    if (isPlaying && currentStep < steps.length - 1) {
      timerRef.current = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 2000);
    } else if (currentStep >= steps.length - 1) {
      setIsPlaying(false);
    }
    return () => clearTimeout(timerRef.current);
  }, [isPlaying, currentStep]);

  const handlePlayPause = () => {
    if (currentStep >= steps.length - 1) {
      setCurrentStep(0);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(0);
  };

  const currentData = steps[currentStep];

  const fullCode = `console.log("1");
setTimeout(() => console.log("4"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("2");`;

  return (
    <div className="bg-[#0a0c10] border border-gray-800/60 rounded-2xl overflow-hidden shadow-2xl my-8">
      <div className="bg-[#111418] border-b border-gray-800/60 p-4 flex justify-between items-center">
        <h3 className="text-white font-bold flex items-center gap-2">
          <Circle className="w-3 h-3 fill-amber-400 text-amber-400" />
          Event Loop Visualizer
        </h3>
        <div className="flex gap-2">
          <button 
            onClick={handlePlayPause}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-yellow-500/20 text-amber-400 rounded-lg hover:bg-yellow-500/30 transition-colors text-sm font-semibold"
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            {isPlaying ? "Pause" : currentStep >= steps.length - 1 ? "Replay" : "Play"}
          </button>
          <button 
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800/50 text-gray-400 rounded-lg hover:bg-gray-700/50 transition-colors text-sm font-semibold"
          >
            <RotateCcw size={16} />
            Reset
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-800/60">
        
        {/* Left Column: Code & Console */}
        <div className="bg-[#0a0c10] p-6 flex flex-col gap-6">
          <div>
            <h4 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-3">Code Editor</h4>
            <div className="bg-[#1e1e1e] p-4 rounded-xl border border-gray-800 font-mono text-sm leading-relaxed overflow-x-auto text-gray-300 relative">
              <pre>
                <code dangerouslySetInnerHTML={{
                  __html: fullCode.replace(
                    currentData.code.trim() !== '// Event Loop Check' && currentData.code.trim() !== '// Microtask Execution' && currentData.code.trim() !== '// Macrotask Execution' && currentData.code.trim() !== '// Finished' ? currentData.code.trim() : 'nonexistent',
                    `<span class="bg-yellow-500/20 text-yellow-300 py-0.5 px-1 rounded">${currentData.code.trim()}</span>`
                  )
                }} />
              </pre>
            </div>
          </div>
          
          <div className="flex-1 border border-gray-800/60 rounded-xl overflow-hidden flex flex-col">
            <h4 className="bg-[#111418] text-gray-400 text-xs font-bold uppercase tracking-wider px-4 py-2 border-b border-gray-800/60">Console</h4>
            <div className="p-4 bg-black flex-1 font-mono text-sm text-gray-300 flex flex-col gap-1 h-32 overflow-y-auto">
              <AnimatePresence>
                {currentData.consoleOut.map((out, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    key={i}
                  >
                    &gt; {out}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Right Column: Engine State */}
        <div className="bg-[#0a0c10] p-6 flex flex-col gap-4">
          
          <div className="bg-blue-950/20 border border-blue-900/30 rounded-xl p-4 min-h-[80px] flex items-center">
             <p className="text-blue-200 text-sm font-medium">{currentData.explanation}</p>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-4">
            
            {/* Call Stack */}
            <div className="border border-gray-800/60 rounded-xl overflow-hidden flex flex-col">
              <h4 className="bg-[#111418] text-gray-400 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 border-b border-gray-800/60 text-center">Call Stack</h4>
              <div className="p-2 bg-[#0a0c10] flex-1 flex flex-col-reverse justify-start gap-2 h-40 overflow-hidden">
                <AnimatePresence>
                  {currentData.callStack.map((item, i) => (
                    <motion.div 
                      initial={{ opacity: 0, y: -20 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      exit={{ opacity: 0, scale: 0.9 }}
                      key={`stack-${i}-${item}`}
                      className="bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-mono p-2 rounded text-center truncate"
                    >
                      {item}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Web API */}
            <div className="border border-gray-800/60 rounded-xl overflow-hidden flex flex-col">
              <h4 className="bg-[#111418] text-gray-400 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 border-b border-gray-800/60 text-center">Web APIs</h4>
              <div className="p-2 bg-[#0a0c10] flex-1 flex flex-col justify-start gap-2 h-40 overflow-hidden">
                <AnimatePresence>
                  {currentData.webApi.map((item, i) => (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }} 
                      animate={{ opacity: 1, scale: 1 }} 
                      exit={{ opacity: 0, scale: 0.8 }}
                      key={`api-${i}-${item}`}
                      className="bg-sky-500/20 border border-sky-500/40 text-sky-300 text-xs font-mono p-2 rounded text-center truncate"
                    >
                      {item}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Microtask Queue */}
            <div className="border border-yellow-900/40 rounded-xl overflow-hidden flex flex-col relative shadow-[0_0_15px_rgba(234,179,8,0.05)]">
              <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-yellow-500 m-2 animate-pulse"></div>
              <h4 className="bg-[#111418] text-amber-500/70 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 border-b border-yellow-900/30 text-center">Microtask Queue</h4>
              <div className="p-2 bg-[#0a0c10] flex-1 flex flex-row items-center gap-2 h-24 overflow-x-auto">
                <AnimatePresence>
                  {currentData.microtaskQueue.map((item, i) => (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }} 
                      animate={{ opacity: 1, x: 0 }} 
                      exit={{ opacity: 0, x: -20 }}
                      key={`micro-${i}-${item}`}
                      className="bg-yellow-500/20 border border-yellow-500/40 text-yellow-300 text-[10px] font-mono p-2 rounded whitespace-nowrap"
                    >
                      {item}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Callback Queue */}
            <div className="border border-gray-800/60 rounded-xl overflow-hidden flex flex-col">
              <h4 className="bg-[#111418] text-gray-400 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 border-b border-gray-800/60 text-center">Callback Queue</h4>
              <div className="p-2 bg-[#0a0c10] flex-1 flex flex-row items-center gap-2 h-24 overflow-x-auto">
                <AnimatePresence>
                  {currentData.callbackQueue.map((item, i) => (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }} 
                      animate={{ opacity: 1, x: 0 }} 
                      exit={{ opacity: 0, x: -20 }}
                      key={`macro-${i}-${item}`}
                      className="bg-gray-800/80 border border-gray-600/50 text-gray-300 text-[10px] font-mono p-2 rounded whitespace-nowrap"
                    >
                      {item}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>

      </div>
      
      {/* Progress Bar */}
      <div className="bg-[#111418] h-2 w-full">
        <motion.div 
          className="h-full bg-gradient-to-r from-amber-600 to-yellow-400"
          initial={{ width: "0%" }}
          animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
};

export default JsEventLoopSimulator;
