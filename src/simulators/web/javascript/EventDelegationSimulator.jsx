// File: src/simulators/web/javascript/EventDelegationSimulator.jsx

import React, { useState, useRef } from 'react';
import { Layers, CheckCircle2, Trash2, Edit3, Settings } from 'lucide-react';

const EventDelegationSimulator = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Refactor user authentication", completed: false },
    { id: 2, text: "Update database schema", completed: false },
    { id: 3, text: "Write unit tests", completed: true },
    { id: 4, text: "Deploy to staging", completed: false },
  ]);
  
  const [log, setLog] = useState("Waiting for interaction...");
  const [activeElement, setActiveElement] = useState(null);
  const timeoutRef = useRef(null);

  // This single function handles ALL clicks for the entire list
  const handleDelegatedClick = (e) => {
    const target = e.target;
    
    // Highlight what was physically clicked
    setActiveElement(target.tagName.toLowerCase());
    
    // Find the parent row using closest()
    const row = target.closest('[data-task-id]');
    
    if (!row) {
        setLog(`Delegated listener caught click on <${target.tagName.toLowerCase()}> outside any task row. Ignored.`);
        resetActiveElement();
        return;
    }

    const taskId = parseInt(row.dataset.taskId);
    
    // Use closest() to find if an action button (or its child) was clicked
    const actionBtn = target.closest('[data-action]');

    if (actionBtn) {
      const action = actionBtn.dataset.action;
      if (action === 'delete') {
        setLog(`Match found [data-action="delete"]. Removing task ${taskId}`);
        setTasks(prev => prev.filter(t => t.id !== taskId));
      } 
      else if (action === 'complete') {
        setLog(`Match found [data-action="complete"]. Toggling task ${taskId}`);
        setTasks(prev => prev.map(t => t.id === taskId ? {...t, completed: !t.completed} : t));
      }
      else if (action === 'edit') {
        setLog(`Match found [data-action="edit"]. Editing task ${taskId}`);
      }
    } else {
      setLog(`Caught click on <${target.tagName.toLowerCase()}> in Task ${taskId}, but no action matched.`);
    }

    resetActiveElement();
  };

  const resetActiveElement = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setActiveElement(null), 800);
  };

  const addTask = () => {
    setTasks(prev => [...prev, { id: Date.now(), text: `New Task ${prev.length + 1}`, completed: false }]);
    setLog(`Added new item. NO new event listeners were attached!`);
  };

  return (
    <div className="bg-[#0f172a] rounded-2xl border border-gray-800 overflow-hidden shadow-2xl w-full">
      {/* Header - Made Responsive */}
      <div className="bg-gray-900/80 p-3 sm:p-4 border-b border-gray-800 flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
        <div className="flex items-center gap-2">
          <Layers className="text-yellow-400 w-5 h-5 shrink-0" />
          <h3 className="font-bold text-gray-200 text-sm sm:text-base">Delegation Architecture Simulator</h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono bg-yellow-500/10 text-yellow-400 px-3 py-1.5 rounded border border-yellow-500/20 w-full sm:w-auto justify-between sm:justify-start">
          <span>Active Listeners:</span>
          <strong className="text-sm sm:text-base">1</strong>
        </div>
      </div>
      
      <div className="p-4 sm:p-6 md:p-8">
        {/* Controls - Made Responsive */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            The single event listener is attached to the dashed <code className="text-yellow-500 bg-yellow-500/10 px-1 rounded border border-yellow-500/20">{'<ul>'}</code> wrapper.
          </p>
          <button onClick={addTask} className="w-full sm:w-auto text-sm font-bold bg-gray-800 hover:bg-gray-700 text-white px-4 py-2.5 rounded-lg border border-gray-700 transition-colors shrink-0 shadow-lg">
            + Add Row
          </button>
        </div>

        {/* The Delegated Container */}
        <div className="relative mt-2">
          <div className="absolute -left-2 -top-2 text-[10px] font-mono text-yellow-500 bg-[#0f172a] px-1 z-10">Listener Attached Here</div>
          <ul 
            className="border-2 border-dashed border-yellow-500/30 p-3 sm:p-4 rounded-xl space-y-3 bg-black/20"
            onClick={handleDelegatedClick}
          >
            {tasks.map(task => (
              <li 
                key={task.id} 
                data-task-id={task.id}
                className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-lg border transition-all ${task.completed ? 'bg-gray-800/30 border-gray-700/50 opacity-60' : 'bg-gray-800 border-gray-700'} hover:border-gray-500 cursor-pointer`}
              >
                {/* Notice: Removed pointer-events-none so clicking text actually registers as clicking text */}
                <div className="flex items-center gap-3 w-full sm:w-auto overflow-hidden">
                  <span className="text-gray-500 text-[10px] sm:text-xs font-mono shrink-0">#{task.id.toString().slice(-4)}</span>
                  <span className={`text-xs sm:text-sm truncate ${task.completed ? 'line-through text-gray-500' : 'text-gray-200'}`}>
                    {task.text}
                  </span>
                </div>
                
                <div className="flex gap-2 self-end sm:self-auto shrink-0">
                  <button data-action="complete" className="p-2 rounded hover:bg-emerald-500/20 text-emerald-500 transition-colors group border border-transparent hover:border-emerald-500/30">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button data-action="edit" className="p-2 rounded hover:bg-sky-500/20 text-sky-500 transition-colors border border-transparent hover:border-sky-500/30">
                    <Edit3 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button data-action="delete" className="p-2 rounded hover:bg-rose-500/20 text-rose-500 transition-colors border border-transparent hover:border-rose-500/30">
                    <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </li>
            ))}
            {tasks.length === 0 && (
              <div className="text-center p-6 text-gray-500 text-xs sm:text-sm">List is empty. Add a task to see delegation work dynamically.</div>
            )}
          </ul>
        </div>

        {/* Console Log */}
        <div className="mt-8 bg-gray-900 rounded-xl border border-gray-800 p-4 font-mono text-xs sm:text-sm shadow-inner overflow-hidden">
          <div className="flex items-center gap-2 mb-2 text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest border-b border-gray-800 pb-2">
            <Settings className="w-3 h-3" /> Console Log
          </div>
          <div className="text-yellow-400 break-words leading-relaxed">
            {activeElement && <span className="inline-block bg-yellow-500/20 text-yellow-500 px-1.5 py-0.5 rounded mr-2 mb-1 border border-yellow-500/30">e.target: &lt;{activeElement}&gt;</span>}
            <span className="text-gray-300">{log}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDelegationSimulator;