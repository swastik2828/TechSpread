import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Activity, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const JsSequentialVsParallelSimulator = () => {
  const [isRunningSeq, setIsRunningSeq] = useState(false);
  const [isRunningPar, setIsRunningPar] = useState(false);
  
  const [seqProgress, setSeqProgress] = useState([0, 0, 0]);
  const [parProgress, setParProgress] = useState([0, 0, 0]);
  
  const [seqTime, setSeqTime] = useState(0);
  const [parTime, setParTime] = useState(0);

  const [seqFinished, setSeqFinished] = useState(false);
  const [parFinished, setParFinished] = useState(false);

  // Fake wait times: 1000ms, 1500ms, 500ms relative scaled.
  const durations = [1000, 1500, 500];
  
  // Sequential Simulator
  useEffect(() => {
    let interval;
    if (isRunningSeq) {
      interval = setInterval(() => {
        setSeqTime(t => t + 50);
        
        setSeqProgress(prev => {
          const newProg = [...prev];
          
          if (newProg[0] < 100) {
            newProg[0] = Math.min(100, newProg[0] + (50 / durations[0]) * 100);
          } else if (newProg[1] < 100) {
            newProg[1] = Math.min(100, newProg[1] + (50 / durations[1]) * 100);
          } else if (newProg[2] < 100) {
            newProg[2] = Math.min(100, newProg[2] + (50 / durations[2]) * 100);
          } else {
            setIsRunningSeq(false);
            setSeqFinished(true);
          }
          return newProg;
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isRunningSeq]);

  // Parallel Simulator
  useEffect(() => {
    let interval;
    if (isRunningPar) {
      interval = setInterval(() => {
        setParTime(t => t + 50);
        
        setParProgress(prev => {
          const newProg = [...prev];
          let allDone = true;
          
          for (let i = 0; i < 3; i++) {
            if (newProg[i] < 100) {
              newProg[i] = Math.min(100, newProg[i] + (50 / durations[i]) * 100);
              allDone = false;
            }
          }
          
          if (allDone) {
             setIsRunningPar(false);
             setParFinished(true);
          }
          return newProg;
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isRunningPar]);


  const startSequential = () => {
    setSeqProgress([0,0,0]);
    setSeqTime(0);
    setSeqFinished(false);
    setIsRunningSeq(true);
  };

  const startParallel = () => {
    setParProgress([0,0,0]);
    setParTime(0);
    setParFinished(false);
    setIsRunningPar(true);
  };

  const TaskBar = ({ label, progress, color, duration }) => (
    <div className="flex items-center gap-3 w-full">
      <div className="w-16 text-right text-xs font-bold text-gray-400">{label}</div>
      <div className="flex-1 bg-gray-800/80 h-3 rounded-full overflow-hidden border border-gray-700/50 relative">
        <motion.div 
          className={`h-full ${color}`}
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="w-12 text-left text-[10px] text-gray-500 font-mono">
        {progress === 100 ? <CheckCircle2 size={12} className="text-green-400 inline" /> : `${duration}ms`}
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8">
      
      {/* Sequential execution block */}
      <div className="bg-[#0a0c10] border border-gray-800/60 rounded-2xl overflow-hidden shadow-xl flex flex-col">
        <div className="bg-[#111418] border-b border-gray-800/60 p-4 flex justify-between items-center">
          <h3 className="text-white font-bold flex items-center gap-2">
            <Activity className="w-4 h-4 text-rose-400" />
            Sequential (await one by one)
          </h3>
          <button 
            onClick={startSequential}
            disabled={isRunningSeq}
            className={`px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-1.5 transition-colors ${isRunningSeq ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-rose-500/20 text-rose-400 hover:bg-rose-500/30'}`}
          >
            {seqFinished ? <RotateCcw size={14} /> : <Play size={14} />}
            {seqFinished ? "Reset & Run" : "Run"}
          </button>
        </div>
        <div className="p-6 flex-1 flex flex-col gap-6">
          <div className="bg-[#1e1e1e] p-3 rounded-xl border border-gray-800 font-mono text-xs text-gray-300">
            <div>const a = await fetchA(); <span className="text-gray-500">// 1000ms</span></div>
            <div>const b = await fetchB(); <span className="text-gray-500">// 1500ms</span></div>
            <div>const c = await fetchC(); <span className="text-gray-500">// 500ms</span></div>
          </div>
          <div className="space-y-4 flex-1 flex flex-col justify-center">
            <TaskBar label="fetchA()" progress={seqProgress[0]} color="bg-rose-500" duration={1000} />
            <TaskBar label="fetchB()" progress={seqProgress[1]} color="bg-rose-500" duration={1500} />
            <TaskBar label="fetchC()" progress={seqProgress[2]} color="bg-rose-500" duration={500} />
          </div>
          <div className="pt-4 border-t border-gray-800/60 flex justify-between items-center">
            <span className="text-gray-400 text-sm font-semibold">Total Wait Time:</span>
            <span className={`text-xl font-mono font-bold ${seqFinished ? 'text-rose-400' : 'text-gray-300'}`}>
              {seqTime}ms
            </span>
          </div>
        </div>
      </div>

      {/* Parallel execution block */}
      <div className="bg-[#0a0c10] border border-gray-800/60 rounded-2xl overflow-hidden shadow-xl flex flex-col">
        <div className="bg-[#111418] border-b border-gray-800/60 p-4 flex justify-between items-center">
          <h3 className="text-white font-bold flex items-center gap-2">
            <Activity className="w-4 h-4 text-emerald-400" />
            Parallel (Promise.all)
          </h3>
          <button 
            onClick={startParallel}
            disabled={isRunningPar}
            className={`px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-1.5 transition-colors ${isRunningPar ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30'}`}
          >
            {parFinished ? <RotateCcw size={14} /> : <Play size={14} />}
            {parFinished ? "Reset & Run" : "Run"}
          </button>
        </div>
        <div className="p-6 flex-1 flex flex-col gap-6">
          <div className="bg-[#1e1e1e] p-3 rounded-xl border border-gray-800 font-mono text-xs text-gray-300">
            <div>const [a, b, c] = await Promise.all([</div>
            <div className="pl-4">fetchA(), <span className="text-gray-500">// 1000ms</span></div>
            <div className="pl-4">fetchB(), <span className="text-gray-500">// 1500ms</span></div>
            <div className="pl-4">fetchC()  <span className="text-gray-500">// 500ms</span></div>
            <div>]);</div>
          </div>
          <div className="space-y-4 flex-1 flex flex-col justify-center">
            <TaskBar label="fetchA()" progress={parProgress[0]} color="bg-emerald-400" duration={1000} />
            <TaskBar label="fetchB()" progress={parProgress[1]} color="bg-emerald-400" duration={1500} />
            <TaskBar label="fetchC()" progress={parProgress[2]} color="bg-emerald-400" duration={500} />
          </div>
          <div className="pt-4 border-t border-gray-800/60 flex justify-between items-center">
            <span className="text-gray-400 text-sm font-semibold">Total Wait Time:</span>
            <span className={`text-xl font-mono font-bold ${parFinished ? 'text-emerald-400' : 'text-gray-300'}`}>
              {parTime}ms
            </span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default JsSequentialVsParallelSimulator;
