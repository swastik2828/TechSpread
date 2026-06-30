import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, AlertOctagon, CheckCircle2 } from 'lucide-react';

export default function JsTryCatchSimulator() {
  const [step, setStep] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [logs, setLogs] = useState([]);

  const steps = [
    { id: 'start', label: 'Start Execution', code: 'function processData(input) {' },
    { id: 'try', label: 'Enter Try Block', code: '  try {' },
    { id: 'action', label: 'Execute Risky Code', code: '    const data = JSON.parse(input);' },
    { id: 'catch', label: 'Catch Block (If Error)', code: '  } catch (error) {' },
    { id: 'finally', label: 'Finally Block (Always)', code: '  } finally {' },
    { id: 'end', label: 'End Execution', code: '  }' }
  ];

  const runSimulation = (triggerError) => {
    setHasError(triggerError);
    setStep(0);
    setLogs([]);
    
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      
      if (currentStep === 2) { // try block
        setLogs(prev => [...prev, { type: 'info', msg: 'Entered try block' }]);
      }
      
      if (currentStep === 3) { // action
        if (triggerError) {
          setLogs(prev => [...prev, { type: 'error', msg: '💥 SyntaxError: Unexpected token' }]);
          currentStep = 4; // Jump straight to catch
        } else {
          setLogs(prev => [...prev, { type: 'success', msg: 'Parsed successfully' }]);
        }
      }
      
      if (currentStep === 4 && !triggerError) {
        currentStep = 5; // Skip catch if no error
      }
      
      if (currentStep === 4 && triggerError) {
        setLogs(prev => [...prev, { type: 'warning', msg: 'Handling error in catch block' }]);
      }
      
      if (currentStep === 5) {
        setLogs(prev => [...prev, { type: 'info', msg: 'Running cleanup in finally block' }]);
      }

      setStep(currentStep);

      if (currentStep >= 5) {
        clearInterval(interval);
      }
    }, 1000);
  };

  return (
    <div className="bg-[#0d1117] rounded-2xl border border-gray-800 p-6 flex flex-col md:flex-row gap-6 font-sans">
      <div className="flex-1 space-y-4">
        <div className="flex gap-4 mb-6">
          <button 
            onClick={() => runSimulation(false)}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-lg hover:bg-emerald-500/20 transition-colors text-sm font-bold"
          >
            <Play size={16} /> Run (Success)
          </button>
          <button 
            onClick={() => runSimulation(true)}
            className="flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-400 border border-red-500/30 rounded-lg hover:bg-red-500/20 transition-colors text-sm font-bold"
          >
            <AlertOctagon size={16} /> Run (With Error)
          </button>
        </div>

        <div className="font-mono text-sm bg-black/40 rounded-xl p-4 border border-gray-800">
          {steps.map((s, i) => (
            <div 
              key={s.id} 
              className={`p-2 rounded transition-colors ${step === i ? 'bg-amber-500/20 text-amber-300 border-l-2 border-amber-500' : 'text-gray-400 border-l-2 border-transparent'}`}
            >
              {s.code}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 bg-black/40 rounded-xl p-4 border border-gray-800 flex flex-col">
        <h3 className="text-gray-400 font-bold mb-4 text-sm uppercase tracking-wider">Console Output</h3>
        <div className="flex-1 flex flex-col gap-2">
          <AnimatePresence>
            {logs.map((log, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className={`p-3 rounded-lg text-sm flex items-center gap-3 border ${
                  log.type === 'error' ? 'bg-red-900/20 border-red-500/30 text-red-300' :
                  log.type === 'success' ? 'bg-emerald-900/20 border-emerald-500/30 text-emerald-300' :
                  log.type === 'warning' ? 'bg-amber-900/20 border-amber-500/30 text-amber-300' :
                  'bg-blue-900/20 border-blue-500/30 text-blue-300'
                }`}
              >
                {log.type === 'error' ? <AlertOctagon size={16} /> : <CheckCircle2 size={16} />}
                {log.msg}
              </motion.div>
            ))}
          </AnimatePresence>
          {logs.length === 0 && <p className="text-gray-600 italic text-sm">Waiting for execution...</p>}
        </div>
      </div>
    </div>
  );
}