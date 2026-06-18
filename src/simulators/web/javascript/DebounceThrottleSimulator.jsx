// File: src/simulators/web/javascript/DebounceThrottleSimulator.jsx

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Activity, MousePointer2 } from 'lucide-react';

const DebounceThrottleSimulator = () => {
  const [rawCount, setRawCount] = useState(0);
  const [debounceCount, setDebounceCount] = useState(0);
  const [throttleCount, setThrottleCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  // Refs for tracking timeouts and last run times
  const debounceTimer = useRef(null);
  const lastThrottleTime = useRef(0);
  const throttleTimer = useRef(null);

  const handleInteraction = () => {
    setIsTyping(true);
    setRawCount(prev => prev + 1);

    // Debounce Logic (Wait 500ms after LAST interaction)
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      setDebounceCount(prev => prev + 1);
      setIsTyping(false);
    }, 500);

    // Throttle Logic (Run at most once every 500ms)
    const now = Date.now();
    if (now - lastThrottleTime.current >= 500) {
      setThrottleCount(prev => prev + 1);
      lastThrottleTime.current = now;
    } else {
      // Ensure the very last event fires if we stop interacting during a cooldown
      if (throttleTimer.current) clearTimeout(throttleTimer.current);
      throttleTimer.current = setTimeout(() => {
        setThrottleCount(prev => prev + 1);
        lastThrottleTime.current = Date.now();
      }, 500 - (now - lastThrottleTime.current));
    }
  };

  const handleMouseMove = () => {
    handleInteraction();
  };

  const reset = () => {
    setRawCount(0);
    setDebounceCount(0);
    setThrottleCount(0);
    setIsTyping(false);
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    if (throttleTimer.current) clearTimeout(throttleTimer.current);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
      if (throttleTimer.current) clearTimeout(throttleTimer.current);
    };
  }, []);

  return (
    <div className="bg-[#0f172a] rounded-2xl border border-gray-800 overflow-hidden shadow-2xl w-full">
      <div className="bg-gray-900/80 p-4 border-b border-gray-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="text-yellow-400 w-5 h-5" />
          <h3 className="font-bold text-gray-200 text-sm sm:text-base">Debounce & Throttle Visualizer</h3>
        </div>
        <button onClick={reset} className="text-xs text-yellow-500 hover:text-yellow-400 font-bold px-3 py-1 rounded bg-yellow-500/10 border border-yellow-500/20 transition-colors">
          Reset
        </button>
      </div>

      <div className="p-4 sm:p-8">
        <div 
          className="w-full h-32 sm:h-48 border-2 border-dashed border-gray-700 hover:border-yellow-500/50 rounded-xl bg-black/40 flex flex-col items-center justify-center cursor-crosshair transition-colors group relative overflow-hidden mb-8"
          onMouseMove={handleMouseMove}
        >
          <MousePointer2 className="w-8 h-8 text-gray-600 group-hover:text-yellow-500/50 mb-2 transition-colors" />
          <p className="text-gray-400 text-sm text-center px-4 pointer-events-none">
            Move your mouse rapidly inside this box to trigger high-frequency events.
          </p>
          {isTyping && <div className="absolute top-2 right-2 flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
            </span>
            <span className="text-[10px] text-yellow-500 font-mono uppercase tracking-wider">Active</span>
          </div>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Raw Events */}
          <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700 relative overflow-hidden">
            <h4 className="text-gray-400 text-xs uppercase tracking-widest mb-1">Raw Events</h4>
            <p className="text-xs text-gray-500 mb-4 h-8">Fires continuously on every movement.</p>
            <div className="text-4xl font-black text-white">{rawCount}</div>
            <div className="absolute bottom-0 left-0 h-1 bg-gray-600 transition-all duration-75" style={{ width: `${Math.min((rawCount % 100), 100)}%` }}></div>
          </div>

          {/* Debounced Events */}
          <div className="bg-sky-900/20 rounded-xl p-5 border border-sky-800/50 relative overflow-hidden">
            <h4 className="text-sky-400 text-xs uppercase tracking-widest mb-1">Debounced (500ms)</h4>
            <p className="text-xs text-sky-500/70 mb-4 h-8">Waits for you to <strong>stop</strong> interacting for 500ms.</p>
            <div className="text-4xl font-black text-white">{debounceCount}</div>
            <div className={`absolute inset-0 bg-sky-500/10 transition-opacity duration-300 ${isTyping ? 'opacity-0' : 'opacity-100'}`}></div>
          </div>

          {/* Throttled Events */}
          <div className="bg-emerald-900/20 rounded-xl p-5 border border-emerald-800/50 relative overflow-hidden">
            <h4 className="text-emerald-400 text-xs uppercase tracking-widest mb-1">Throttled (500ms)</h4>
            <p className="text-xs text-emerald-500/70 mb-4 h-8">Fires continuously, but <strong>at most</strong> once per 500ms.</p>
            <div className="text-4xl font-black text-white">{throttleCount}</div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-emerald-900">
              <div className="h-full bg-emerald-500 w-full origin-left animate-[pulse_0.5s_linear_infinite]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebounceThrottleSimulator;