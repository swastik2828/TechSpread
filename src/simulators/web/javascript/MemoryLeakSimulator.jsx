// File: src/simulators/web/javascript/MemoryLeakSimulator.jsx

import React, { useState } from 'react';
import { AlertTriangle, Trash2, Plus, Monitor } from 'lucide-react';

const MemoryLeakSimulator = () => {
  const [memoryUsage, setMemoryUsage] = useState(10); // Arbitrary starting MB
  const [activeComponents, setActiveComponents] = useState(0);
  const [danglingListeners, setDanglingListeners] = useState(0);
  const [logs, setLogs] = useState([]);

  const addLog = (msg, type = "info") => {
    setLogs(prev => [{ id: Date.now() + Math.random(), msg, type }, ...prev].slice(0, 5));
  };

  const mountComponent = () => {
    setActiveComponents(prev => prev + 1);
    setMemoryUsage(prev => prev + 5);
    addLog("Mounted new DataPanel. Added 1 global resize listener.", "success");
  };

  const destroyBad = () => {
    if (activeComponents === 0) return;
    setActiveComponents(prev => prev - 1);
    setDanglingListeners(prev => prev + 1);
    // Memory does NOT go down because the listener holds the reference
    addLog("Removed DOM element, but forgot to remove the window listener. Leak created!", "error");
  };

  const destroyGood = () => {
    if (activeComponents === 0) return;
    setActiveComponents(prev => prev - 1);
    setMemoryUsage(prev => prev - 5);
    addLog("Controller aborted. Removed DOM element AND global listener. Memory freed.", "success");
  };

  const triggerGC = () => {
    addLog("Garbage Collector ran.", "info");
    if (danglingListeners > 0) {
      addLog(`GC skipped ${danglingListeners} components due to active window listeners!`, "error");
    }
  };

  const reset = () => {
    setMemoryUsage(10);
    setActiveComponents(0);
    setDanglingListeners(0);
    setLogs([]);
  };

  return (
    <div className="bg-[#0f172a] rounded-2xl border border-gray-800 overflow-hidden shadow-2xl w-full">
      <div className="bg-gray-900/80 p-4 border-b border-gray-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertTriangle className="text-yellow-400 w-5 h-5" />
          <h3 className="font-bold text-gray-200 text-sm sm:text-base">Memory Leak Visualizer</h3>
        </div>
        <button onClick={reset} className="text-xs text-yellow-500 hover:text-yellow-400 font-bold px-3 py-1 rounded bg-yellow-500/10 border border-yellow-500/20 transition-colors">
          Reset Environment
        </button>
      </div>

      <div className="p-4 sm:p-6 grid md:grid-cols-2 gap-6">
        
        {/* Controls */}
        <div className="space-y-4 flex flex-col justify-between">
          <div>
            <p className="text-sm text-gray-400 mb-6">
              Simulate mounting a component that attaches a listener to the global <code>window</code> object. Observe how different cleanup strategies affect memory.
            </p>
            <div className="space-y-3">
              <button 
                onClick={mountComponent}
                className="w-full flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 rounded-xl border border-gray-600 transition-colors shadow-lg"
              >
                <Plus className="w-5 h-5" /> Mount Component
              </button>
              
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-800">
                <button 
                  onClick={destroyBad}
                  disabled={activeComponents === 0}
                  className="flex flex-col items-center justify-center gap-1 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 font-bold py-3 rounded-xl border border-rose-500/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Trash2 className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-wider">Bad Unmount</span>
                </button>

                <button 
                  onClick={destroyGood}
                  disabled={activeComponents === 0}
                  className="flex flex-col items-center justify-center gap-1 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-bold py-3 rounded-xl border border-emerald-500/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Trash2 className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-wider">Good Unmount</span>
                </button>
              </div>
            </div>
          </div>

          <button 
            onClick={triggerGC}
            className="w-full mt-4 flex items-center justify-center gap-2 bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400 font-bold py-2 rounded-lg border border-yellow-500/30 transition-colors text-sm"
          >
            <Monitor className="w-4 h-4" /> Trigger Garbage Collection
          </button>
        </div>

        {/* Dashboard */}
        <div className="bg-black/40 rounded-xl border border-gray-800 flex flex-col overflow-hidden">
          <div className="p-4 grid grid-cols-2 gap-4 border-b border-gray-800 bg-gray-900/50">
            <div className="text-center">
              <div className="text-3xl font-black text-white">{activeComponents}</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Visible DOM Nodes</div>
            </div>
            <div className="text-center border-l border-gray-800 pl-4">
              <div className={`text-3xl font-black ${danglingListeners > 0 ? 'text-rose-400' : 'text-emerald-400'}`}>{activeComponents + danglingListeners}</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Active Listeners</div>
            </div>
          </div>
          
          <div className="p-6 flex flex-col items-center justify-center relative">
            <div className="w-full bg-gray-800 rounded-full h-4 mb-2 overflow-hidden border border-gray-700">
              <div 
                className={`h-full transition-all duration-500 ${memoryUsage > 30 ? 'bg-rose-500' : 'bg-sky-500'}`} 
                style={{ width: `${Math.min(memoryUsage, 100)}%` }}
              ></div>
            </div>
            <div className="text-sm font-mono text-gray-400">Heap Size: <span className="text-white font-bold">{memoryUsage} MB</span></div>
          </div>

          <div className="flex-1 bg-gray-900/80 border-t border-gray-800 p-3 overflow-y-auto min-h-[120px]">
            {logs.length === 0 ? (
              <p className="text-gray-600 text-xs text-center mt-4">Action log empty...</p>
            ) : (
              logs.map(log => (
                <div key={log.id} className="text-xs mb-2 flex items-start gap-2 animate-fade-in-up">
                  <span className={`shrink-0 mt-0.5 w-2 h-2 rounded-full ${log.type === 'error' ? 'bg-rose-500' : log.type === 'success' ? 'bg-emerald-500' : 'bg-sky-500'}`}></span>
                  <span className={log.type === 'error' ? 'text-rose-300' : log.type === 'success' ? 'text-emerald-300' : 'text-gray-400'}>{log.msg}</span>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default MemoryLeakSimulator;