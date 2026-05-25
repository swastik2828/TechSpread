import React, { useState } from 'react';
import { Play, RotateCcw, Plus, ArrowRight, Layers, HelpCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const JsTaskPrioritySimulator = () => {
  const [callStack, setCallStack] = useState([]);
  const [microtasks, setMicrotasks] = useState([]);
  const [macrotasks, setMacrotasks] = useState([]);
  const [consoleOut, setConsoleOut] = useState([]);
  const [logs, setLogs] = useState(["Add tasks below, then click 'Tick Event Loop' to watch execution!"]);
  const [taskCount, setTaskCount] = useState(1);

  const addMicrotask = (name) => {
    const id = taskCount;
    setTaskCount(prev => prev + 1);
    const label = `Promise .then #${id} (${name})`;
    setMicrotasks(prev => [...prev, { id, label, type: "microtask" }]);
    setLogs(prev => [...prev, `Queued Microtask: ${label}`]);
  };

  const addMacrotask = (name, delay = 0) => {
    const id = taskCount;
    setTaskCount(prev => prev + 1);
    const label = `setTimeout #${id} (${name}, ${delay}ms)`;
    setMacrotasks(prev => [...prev, { id, label, type: "macrotask" }]);
    setLogs(prev => [...prev, `Queued Macrotask: ${label}`]);
  };

  const tickEventLoop = () => {
    // 1. If Call Stack has something, drain it first
    if (callStack.length > 0) {
      const popped = callStack[callStack.length - 1];
      setCallStack(prev => prev.slice(0, -1));
      setConsoleOut(prev => [...prev, popped.label]);
      setLogs(prev => [...prev, `Call Stack executes: ${popped.label}. Output printed to Console.`]);
      return;
    }

    // 2. If Call Stack is empty, Event Loop checks Microtask Queue first
    if (microtasks.length > 0) {
      const nextMicro = microtasks[0];
      setMicrotasks(prev => prev.slice(1));
      setCallStack([nextMicro]);
      setLogs(prev => [...prev, `Stack is empty. Fetching HIGH PRIORITY Microtask: ${nextMicro.label} from Microtask Queue.`]);
      return;
    }

    // 3. If Microtask Queue is completely empty, Event Loop picks EXACTLY ONE Macrotask
    if (macrotasks.length > 0) {
      const nextMacro = macrotasks[0];
      setMacrotasks(prev => prev.slice(1));
      setCallStack([nextMacro]);
      setLogs(prev => [...prev, `Microtask queue is empty. Picking ONE Macrotask: ${nextMacro.label} from Macrotask Queue.`]);
      return;
    }

    setLogs(prev => [...prev, "Nothing to execute! Queues are completely empty."]);
  };

  const handleReset = () => {
    setCallStack([]);
    setMicrotasks([]);
    setMacrotasks([]);
    setConsoleOut([]);
    setLogs(["Simulator reset. Ready to queue tasks."]);
    setTaskCount(1);
  };

  return (
    <div className="bg-[#0a0c10] border border-gray-800/60 rounded-2xl overflow-hidden shadow-2xl my-8 w-full">
      <div className="bg-[#111418] border-b border-gray-800/60 p-4 flex justify-between items-center flex-wrap gap-3">
        <h3 className="text-white font-bold flex items-center gap-2 text-sm sm:text-base">
          <Layers className="w-5 h-5 text-yellow-500" />
          Event Loop Priority Dashboard
        </h3>
        <div className="flex gap-2">
          <button 
            onClick={tickEventLoop}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-yellow-500/20 text-amber-400 rounded-lg hover:bg-yellow-500/30 transition-all font-semibold text-xs sm:text-sm"
          >
            <ArrowRight size={16} />
            Tick Event Loop
          </button>
          <button 
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800/50 text-gray-400 rounded-lg hover:bg-gray-700/50 transition-all font-semibold text-xs sm:text-sm"
          >
            <RotateCcw size={16} />
            Reset
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-gray-800/40">
        
        {/* Left Column: Queues Scheduler */}
        <div className="bg-[#0a0c10] p-4 sm:p-6 flex flex-col gap-6 lg:border-r border-gray-800/40">
          <div>
            <h4 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <Plus size={14} className="text-amber-500" />
              Task Scheduler Panel
            </h4>
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5">
                <span className="text-[10px] font-bold text-yellow-500 uppercase tracking-widest block mb-2">Microtasks (High Priority)</span>
                <div className="flex flex-col sm:flex-row gap-2">
                  <button 
                    onClick={() => addMicrotask("Log A")} 
                    className="flex-1 px-3 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-lg hover:bg-yellow-500/20 text-xs text-yellow-300 font-semibold transition"
                  >
                    + Promise A
                  </button>
                  <button 
                    onClick={() => addMicrotask("Log B")} 
                    className="flex-1 px-3 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-lg hover:bg-yellow-500/20 text-xs text-yellow-300 font-semibold transition"
                  >
                    + Promise B
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-sky-500/20 bg-sky-500/5">
                <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest block mb-2">Macrotasks (Normal Priority)</span>
                <div className="flex flex-col sm:flex-row gap-2">
                  <button 
                    onClick={() => addMacrotask("Log X", 0)} 
                    className="flex-1 px-3 py-2 bg-sky-500/10 border border-sky-500/30 rounded-lg hover:bg-sky-500/20 text-xs text-sky-300 font-semibold transition"
                  >
                    + setTimeout (0ms)
                  </button>
                  <button 
                    onClick={() => addMacrotask("Log Y", 100)} 
                    className="flex-1 px-3 py-2 bg-sky-500/10 border border-sky-500/30 rounded-lg hover:bg-sky-500/20 text-xs text-sky-300 font-semibold transition"
                  >
                    + setTimeout (100ms)
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-800/60 rounded-xl overflow-hidden flex flex-col flex-1">
            <h4 className="bg-[#111418] text-gray-400 text-xs font-bold uppercase tracking-wider px-4 py-2 border-b border-gray-800/60">Execution Log</h4>
            <div className="p-4 bg-black/60 font-sans text-xs text-gray-400 max-h-[180px] overflow-y-auto space-y-1.5">
              {logs.map((log, i) => (
                <div key={i} className={i === logs.length - 1 ? "text-yellow-400 font-medium" : ""}>
                  🕒 {log}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center Column: Engine State queues */}
        <div className="bg-[#0a0c10] p-4 sm:p-6 lg:col-span-2 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Call Stack */}
            <div className="border border-gray-800/60 bg-black/20 rounded-xl p-4 flex flex-col min-h-[140px] relative">
              <h5 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-3">Call Stack</h5>
              <div className="flex-1 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {callStack.length === 0 ? (
                    <motion.span 
                      key="stack-empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-gray-600 text-xs italic"
                    >
                      Stack is empty
                    </motion.span>
                  ) : (
                    callStack.map((task) => (
                      <motion.div
                        key={`stack-${task.id}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9, y: 15 }}
                        className={`px-4 py-3 rounded-lg border font-mono text-xs text-center font-bold tracking-wide w-full max-w-[260px] ${task.type === 'microtask' ? 'bg-yellow-500/20 border-yellow-500/40 text-yellow-300' : 'bg-sky-500/20 border-sky-500/40 text-sky-300'}`}
                      >
                        {task.label}
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Console */}
            <div className="border border-gray-800/60 bg-black/40 rounded-xl p-4 flex flex-col min-h-[140px]">
              <h5 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-3">Console Output</h5>
              <div className="flex-1 font-mono text-xs sm:text-sm text-green-400 flex flex-col gap-1 overflow-y-auto max-h-[100px]">
                {consoleOut.length === 0 ? (
                  <span className="text-gray-600 italic">No output yet</span>
                ) : (
                  consoleOut.map((out, i) => (
                    <div key={i}>&gt; {out}</div>
                  ))
                )}
              </div>
            </div>

          </div>

          <div className="space-y-4">
            {/* Microtasks Queue */}
            <div className="border border-yellow-500/20 bg-yellow-500/[0.02] rounded-xl p-4">
              <div className="flex justify-between items-center mb-3">
                <h5 className="text-yellow-500 text-xs font-bold uppercase tracking-wider">Microtask Queue (Job Queue)</h5>
                <span className="text-[10px] bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 px-2 py-0.5 rounded font-black uppercase">
                  Drains Fully
                </span>
              </div>
              <div className="flex gap-2 overflow-x-auto min-h-[60px] items-center p-1 bg-black/20 rounded-lg">
                <AnimatePresence mode="popLayout">
                  {microtasks.length === 0 ? (
                    <span className="text-gray-600 text-xs italic mx-auto">Microtask queue is empty</span>
                  ) : (
                    microtasks.map((task, i) => (
                      <motion.div
                        key={`micro-${task.id}`}
                        layout
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20, scale: 0.9 }}
                        className="px-3 py-2 bg-yellow-500/20 border border-yellow-500/30 text-yellow-300 font-mono text-[10px] sm:text-xs rounded-lg whitespace-nowrap"
                      >
                        {i === 0 ? "👉 " : ""}{task.label}
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Macrotasks Queue */}
            <div className="border border-sky-500/20 bg-sky-500/[0.02] rounded-xl p-4">
              <div className="flex justify-between items-center mb-3">
                <h5 className="text-sky-400 text-xs font-bold uppercase tracking-wider">Macrotask Queue (Callback Queue)</h5>
                <span className="text-[10px] bg-sky-500/20 text-sky-400 border border-sky-500/30 px-2 py-0.5 rounded font-black uppercase">
                  1 per tick
                </span>
              </div>
              <div className="flex gap-2 overflow-x-auto min-h-[60px] items-center p-1 bg-black/20 rounded-lg">
                <AnimatePresence mode="popLayout">
                  {macrotasks.length === 0 ? (
                    <span className="text-gray-600 text-xs italic mx-auto">Macrotask queue is empty</span>
                  ) : (
                    macrotasks.map((task, i) => (
                      <motion.div
                        key={`macro-${task.id}`}
                        layout
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20, scale: 0.9 }}
                        className="px-3 py-2 bg-sky-500/20 border border-sky-500/30 text-sky-300 font-mono text-[10px] sm:text-xs rounded-lg whitespace-nowrap"
                      >
                        {i === 0 ? "👉 " : ""}{task.label}
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
          
          <div className="bg-[#111418] p-4 rounded-xl border border-gray-800 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-gray-400 text-xs leading-relaxed">
              <strong>Event Loop Priority Rule:</strong> The waiter checks the Microtask Queue. If there's even one microtask, it processes it. It refuses to check the Macrotask Queue until the Microtask Queue has been completely drained to zero. After that, it executes exactly <em>one</em> macrotask and immediately loops back to check the microtask queue again.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default JsTaskPrioritySimulator;
