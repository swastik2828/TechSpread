import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, AlertTriangle, Activity, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

const JsRenderPipelineSimulator = () => {
  const [animationType, setAnimationType] = useState('none'); // 'none' | 'raf' | 'timeout' | 'blocked'
  const [blockProgress, setBlockProgress] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);
  const [boxPosition, setBoxPosition] = useState(0);
  const [frameCount, setFrameCount] = useState(0);
  const [pipelinePhase, setPipelinePhase] = useState('Idle'); // 'Style' | 'Layout' | 'Paint' | 'Composite' | 'Idle'
  const [logs, setLogs] = useState(["Select an animation type below to visualize browser rendering pipeline!"]);

  const rafRef = useRef(null);
  const timeoutRef = useRef(null);
  const startTimeRef = useRef(null);

  // Smooth rAF Loop
  const runRaf = (timestamp) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    const elapsed = timestamp - startTimeRef.current;
    
    // Update position smoothly
    setBoxPosition(Math.sin(elapsed / 300) * 100 + 100);
    setFrameCount(f => f + 1);

    // Visual pipeline animation stepping
    const phases = ['Style Recalculation', 'Layout calculation', 'Paint (Pixels)', 'Composite (Layering)'];
    const currentPhase = phases[Math.floor((timestamp / 100) % 4)];
    setPipelinePhase(currentPhase);

    rafRef.current = requestAnimationFrame(runRaf);
  };

  // Stuttering setTimeout Loop
  const runTimeout = () => {
    const elapsed = Date.now() - startTimeRef.current;
    setBoxPosition(Math.sin(elapsed / 300) * 100 + 100);
    setFrameCount(f => f + 1);
    
    // Simulate pipeline ticking slightly out of sync
    const phases = ['Style Recalculation', 'Layout calculation', 'Paint (Pixels)', 'Composite (Layering)'];
    setPipelinePhase(phases[Math.floor((Date.now() / 150) % 4)]);

    timeoutRef.current = setTimeout(runTimeout, 25); // drift!
  };

  useEffect(() => {
    cancelAnimationFrame(rafRef.current);
    clearTimeout(timeoutRef.current);
    startTimeRef.current = null;

    if (animationType === 'raf') {
      setLogs(["Running requestAnimationFrame: Synced to monitor refresh rate (~60fps). Perfect synchronization!"]);
      rafRef.current = requestAnimationFrame(runRaf);
    } else if (animationType === 'timeout') {
      setLogs(["Running setTimeout(cb, 25): callback queue triggers are out of sync with rendering ticks. Noticeable micro-stutters!"]);
      startTimeRef.current = Date.now();
      runTimeout();
    } else if (animationType === 'blocked') {
      setIsBlocked(true);
      setPipelinePhase('BLOCKED 🛑');
      setLogs(["Main thread blocked by heavy synchronous loop! Call stack is busy. Browser style calculation, layout, and painting are frozen."]);
      
      // Simulate blocking task progression over 4 seconds
      let p = 0;
      const interval = setInterval(() => {
        p += 25;
        setBlockProgress(p);
        if (p >= 100) {
          clearInterval(interval);
          setIsBlocked(false);
          setAnimationType('none');
          setPipelinePhase('Idle');
          setLogs(prev => [...prev, "Loop complete! Call Stack is empty. Browser rendering pipeline resumes."]);
        }
      }, 1000);

      return () => clearInterval(interval);
    } else {
      setPipelinePhase('Idle');
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, [animationType]);

  const handleBlockClick = () => {
    setBlockProgress(0);
    setAnimationType('blocked');
  };

  return (
    <div className="bg-[#0a0c10] border border-gray-800/60 rounded-2xl overflow-hidden shadow-2xl my-8 w-full">
      <div className="bg-[#111418] border-b border-gray-800/60 p-4 flex justify-between items-center flex-wrap gap-3">
        <h3 className="text-white font-bold flex items-center gap-2 text-sm sm:text-base">
          <Activity className="w-5 h-5 text-emerald-500" />
          Rendering Pipeline & requestAnimationFrame Simulator
        </h3>
        <div className="flex gap-2">
          {animationType !== 'none' && (
            <button 
              onClick={() => setAnimationType('none')}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800/50 text-gray-400 rounded-lg hover:bg-gray-700/50 transition-all font-semibold text-xs sm:text-sm"
            >
              <Pause size={16} />
              Stop Animation
            </button>
          )}
          <button 
            onClick={() => { setAnimationType('none'); setBoxPosition(0); setFrameCount(0); }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800/50 text-gray-400 rounded-lg hover:bg-gray-700/50 transition-all font-semibold text-xs sm:text-sm"
          >
            <RefreshCw size={16} />
            Reset
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-gray-800/40">
        
        {/* Left Column: Animation Controls */}
        <div className="bg-[#0a0c10] p-4 sm:p-6 lg:col-span-4 flex flex-col gap-6 lg:border-r border-gray-800/40">
          <div>
            <h4 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4">Pipeline Controls</h4>
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => setAnimationType('raf')}
                disabled={isBlocked}
                className={`px-4 py-3 rounded-xl border text-left flex flex-col gap-1 transition ${animationType === 'raf' ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.1)]' : 'bg-[#111418] border-gray-800 hover:border-gray-700 text-gray-300'}`}
              >
                <span className="text-xs font-bold uppercase tracking-wider">Option A: Smooth rAF</span>
                <span className="text-[10px] text-gray-400">Run animation synced to rendering loop via requestAnimationFrame</span>
              </button>

              <button 
                onClick={() => setAnimationType('timeout')}
                disabled={isBlocked}
                className={`px-4 py-3 rounded-xl border text-left flex flex-col gap-1 transition ${animationType === 'timeout' ? 'bg-amber-500/20 border-amber-500/50 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.1)]' : 'bg-[#111418] border-gray-800 hover:border-gray-700 text-gray-300'}`}
              >
                <span className="text-xs font-bold uppercase tracking-wider">Option B: setTimeout (25ms)</span>
                <span className="text-[10px] text-gray-400">Run animation using timer callbacks (may stutter or drift)</span>
              </button>

              <button 
                onClick={handleBlockClick}
                disabled={isBlocked}
                className={`px-4 py-3 rounded-xl border text-left flex flex-col gap-1 transition ${isBlocked ? 'bg-rose-500/25 border-rose-500/60 text-rose-300 shadow-[0_0_15px_rgba(239,68,68,0.1)]' : 'bg-[#111418] border-gray-800 hover:border-rose-500/30 hover:shadow-[0_0_15px_rgba(239,68,68,0.05)] text-gray-300'}`}
              >
                <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle size={14} className="text-rose-400" />
                  Block Main Thread
                </span>
                <span className="text-[10px] text-gray-400 font-medium">Run a heavy loop (blocks call stack, freezes layout updates)</span>
              </button>
            </div>
          </div>

          <div className="border border-gray-800/60 rounded-xl overflow-hidden flex flex-col flex-1">
            <h4 className="bg-[#111418] text-gray-400 text-xs font-bold uppercase tracking-wider px-4 py-2 border-b border-gray-800/60">Frames & Stats</h4>
            <div className="p-4 bg-black/60 font-sans text-xs text-gray-400 space-y-3">
              <div className="flex justify-between font-mono">
                <span>Renders count:</span>
                <span className="text-emerald-400 font-bold">{frameCount} frames</span>
              </div>
              <div className="flex justify-between font-mono">
                <span>Render Tick Phase:</span>
                <span className={`font-bold ${isBlocked ? 'text-rose-500 animate-pulse' : 'text-sky-400'}`}>{pipelinePhase}</span>
              </div>
              {isBlocked && (
                <div className="mt-2 space-y-2">
                  <div className="flex justify-between text-[10px] text-rose-400 font-bold uppercase tracking-wide">
                    <span>Synchronous Block in progress...</span>
                    <span>{blockProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-900 border border-gray-800 h-2 rounded-full overflow-hidden">
                    <motion.div className="h-full bg-rose-500" style={{ width: `${blockProgress}%` }} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Visualizer Canvas & Log */}
        <div className="bg-[#0a0c10] p-4 sm:p-6 lg:col-span-8 flex flex-col gap-6">
          <div className="border border-gray-800/60 rounded-2xl bg-black/40 p-6 flex flex-col items-center justify-center min-h-[220px] relative overflow-hidden">
            {/* Visual element moving */}
            <div className="w-full h-8 bg-gray-900/60 border border-gray-800 rounded-full relative overflow-hidden mb-6 flex items-center px-2">
              <motion.div 
                className={`w-8 h-8 rounded-full shadow-[0_0_15px_rgba(251,191,36,0.3)] transition-all duration-75 flex items-center justify-center font-bold text-black text-xs ${isBlocked ? 'bg-rose-500 shadow-rose-500/50' : 'bg-yellow-400'}`}
                style={{ transform: `translateX(${boxPosition}px)` }}
              >
                JS
              </motion.div>
            </div>

            {/* Pipeline Visual Bar */}
            <div className="w-full grid grid-cols-4 gap-2 text-center text-[10px] sm:text-xs">
              <div className={`p-2.5 rounded-lg border font-bold ${pipelinePhase.includes('Style') ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300' : isBlocked ? 'bg-rose-950/20 border-rose-900/30 text-rose-900/40' : 'bg-[#111418] border-gray-800 text-gray-500'}`}>
                1. Recalc Style
              </div>
              <div className={`p-2.5 rounded-lg border font-bold ${pipelinePhase.includes('Layout') ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300' : isBlocked ? 'bg-rose-950/20 border-rose-900/30 text-rose-900/40' : 'bg-[#111418] border-gray-800 text-gray-500'}`}>
                2. Layout Pos
              </div>
              <div className={`p-2.5 rounded-lg border font-bold ${pipelinePhase.includes('Paint') ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300' : isBlocked ? 'bg-rose-950/20 border-rose-900/30 text-rose-900/40' : 'bg-[#111418] border-gray-800 text-gray-500'}`}>
                3. Paint Frame
              </div>
              <div className={`p-2.5 rounded-lg border font-bold ${pipelinePhase.includes('Composite') ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300' : isBlocked ? 'bg-rose-950/20 border-rose-900/30 text-rose-900/40' : 'bg-[#111418] border-gray-800 text-gray-500'}`}>
                4. Composite
              </div>
            </div>
          </div>

          <div className="border border-gray-800/60 rounded-xl overflow-hidden flex flex-col">
            <h4 className="bg-[#111418] text-gray-400 text-xs font-bold uppercase tracking-wider px-4 py-2 border-b border-gray-800/60">
              Pipeline Explanation Log
            </h4>
            <div className="p-4 bg-black/60 font-sans text-xs sm:text-sm text-gray-300 leading-relaxed min-h-[80px]">
              {logs.map((log, i) => (
                <div key={i}>{log}</div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default JsRenderPipelineSimulator;
