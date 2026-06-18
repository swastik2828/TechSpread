// File: src/simulators/web/javascript/EventPropagationSimulator.jsx

import React, { useState } from 'react';
import { MousePointerClick } from 'lucide-react';

const EventPropagationSimulator = () => {
  const [logs, setLogs] = useState([]);
  const [activeNode, setActiveNode] = useState(null);

  const addLog = (phase, node) => {
    setLogs(prev => [...prev, { phase, node, id: Date.now() + Math.random() }]);
    setActiveNode(node);
  };

  const handleClick = (e, nodeName) => {
    addLog('Target/Bubble', nodeName);
    setTimeout(() => setActiveNode(null), 500);
  };

  const handleCapture = (e, nodeName) => {
    addLog('Capture', nodeName);
  };

  return (
    <div className="bg-[#0f172a] rounded-2xl border border-gray-800 overflow-hidden mb-12 shadow-2xl w-full">
      <div className="bg-gray-900/80 p-4 border-b border-gray-800 flex items-center gap-2">
        <MousePointerClick className="text-yellow-400 w-5 h-5" />
        <h3 className="font-bold text-gray-200">Interactive Propagation Simulator</h3>
      </div>
      
      <div className="grid md:grid-cols-2 gap-0">
        <div className="p-4 sm:p-8 border-b md:border-b-0 md:border-r border-gray-800/50 flex flex-col items-center justify-center min-h-[300px]">
          <p className="text-[10px] sm:text-xs text-gray-500 mb-6 uppercase tracking-widest text-center">Click elements to see the event flow</p>
          
          <div 
            onClickCapture={(e) => handleCapture(e, 'Document')} 
            onClick={(e) => handleClick(e, 'Document')}
            className={`p-4 sm:p-6 w-full rounded-xl border-2 transition-all duration-300 ${activeNode === 'Document' ? 'bg-yellow-500/20 border-yellow-500' : 'border-gray-700 bg-gray-800/50 cursor-pointer hover:border-gray-500'}`}
          >
            <span className="text-xs sm:text-sm font-bold text-gray-400">Document</span>
            
            <div 
              onClickCapture={(e) => handleCapture(e, 'body')} 
              onClick={(e) => handleClick(e, 'body')}
              className={`p-4 sm:p-6 mt-4 w-full rounded-xl border-2 transition-all duration-300 ${activeNode === 'body' ? 'bg-yellow-500/20 border-yellow-500' : 'border-gray-600 bg-gray-700/50 cursor-pointer hover:border-gray-400'}`}
            >
              <span className="text-xs sm:text-sm font-bold text-gray-300">{'<body>'}</span>
              
              <div 
                onClickCapture={(e) => handleCapture(e, 'button')} 
                onClick={(e) => handleClick(e, 'button')}
                className={`p-3 sm:p-4 mt-4 w-full rounded-xl border-2 flex items-center justify-center transition-all duration-300 shadow-lg ${activeNode === 'button' ? 'bg-yellow-500 border-yellow-400 text-black' : 'border-yellow-500/50 bg-yellow-500/10 cursor-pointer hover:bg-yellow-500/30 text-yellow-400'}`}
              >
                <span className="font-bold text-sm sm:text-base">{'<button> Click Me </button>'}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black/40 flex flex-col h-[300px] md:h-auto max-h-[400px]">
          <div className="p-4 border-b border-gray-800 flex justify-between items-center bg-gray-900/50 sticky top-0">
            <span className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest">Event Log</span>
            <button onClick={() => setLogs([])} className="text-xs text-yellow-500 hover:text-yellow-400 font-bold px-3 py-1 rounded bg-yellow-500/10 border border-yellow-500/20 transition-colors">Clear</button>
          </div>
          <div className="p-4 overflow-y-auto flex-1 font-mono text-xs sm:text-sm space-y-2">
            {logs.length === 0 ? (
              <div className="text-gray-600 text-center mt-8 italic">No events triggered yet.</div>
            ) : (
              logs.map((log, idx) => (
                <div key={log.id} className="flex gap-3 sm:gap-4 items-center animate-fade-in-up">
                  <span className="text-gray-500 w-4 sm:w-6 text-right shrink-0">{idx + 1}.</span>
                  <span className={`px-2 py-1 rounded text-[10px] sm:text-xs shrink-0 w-20 text-center ${log.phase === 'Capture' ? 'bg-sky-500/20 text-sky-400 border border-sky-500/30' : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'}`}>
                    {log.phase}
                  </span>
                  <span className="text-gray-300 font-bold truncate">{log.node}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPropagationSimulator;