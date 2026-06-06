import React, { useState, useEffect, useRef } from 'react';
import { Timer, ServerCrash, Activity, BarChart, Server } from 'lucide-react';

const JsExponentialBackoffSimulator = () => {
    const [isSimulating, setIsSimulating] = useState(false);
    const [attempts, setAttempts] = useState([]);
    const [serverStatus, setServerStatus] = useState('down'); // 'down' or 'up'
    const scrollRef = useRef(null);

    const BASE_DELAY = 300; // ms for visual pacing
    const MAX_ATTEMPTS = 5;

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [attempts]);

    const runSimulation = async () => {
        if (isSimulating) return;
        setIsSimulating(true);
        setAttempts([]);

        for (let i = 0; i < MAX_ATTEMPTS; i++) {
            const timeStr = new Date().toLocaleTimeString('en-US', { hour12: false, fractionalSecondDigits: 2 });
            
            // 1. Make Request Attempt
            setAttempts(prev => [...prev, { id: `req-${i}`, time: timeStr, attempt: i + 1, type: 'request', msg: 'Initiating fetch()...' }]);
            await new Promise(r => setTimeout(r, 400)); // Network travel time

            // 2. Check Server Status
            if (serverStatus === 'up') {
                setAttempts(prev => [...prev, { id: `res-${i}`, time: new Date().toLocaleTimeString('en-US', { hour12: false, fractionalSecondDigits: 2 }), attempt: i + 1, type: 'success', msg: '200 OK - Data Received!' }]);
                break; // Exit loop on success
            } else {
                setAttempts(prev => [...prev, { id: `res-${i}`, time: new Date().toLocaleTimeString('en-US', { hour12: false, fractionalSecondDigits: 2 }), attempt: i + 1, type: 'error', msg: '503 Service Unavailable' }]);
                
                if (i === MAX_ATTEMPTS - 1) {
                    setAttempts(prev => [...prev, { id: `fail`, time: new Date().toLocaleTimeString('en-US', { hour12: false, fractionalSecondDigits: 2 }), attempt: i + 1, type: 'fatal', msg: 'Max retries reached. Throwing Error to UI.' }]);
                    break; // Exit on max retries
                }

                // 3. Calculate Exponential Backoff + Jitter
                const exponentialWait = BASE_DELAY * Math.pow(2, i); 
                const jitter = Math.floor(Math.random() * (BASE_DELAY * 0.5)); // Random jitter up to 50% of base
                const totalWait = exponentialWait + jitter;

                setAttempts(prev => [...prev, { 
                    id: `wait-${i}`, 
                    attempt: i + 1, 
                    type: 'wait', 
                    baseMs: exponentialWait, 
                    jitterMs: jitter, 
                    totalMs: totalWait,
                    msg: `Waiting ${totalWait}ms before retry...` 
                }]);

                await new Promise(r => setTimeout(r, totalWait)); // Actually wait
            }
        }
        setIsSimulating(false);
    };

    const handleServerToggle = () => {
        setServerStatus(prev => prev === 'down' ? 'up' : 'down');
    };

    return (
        <div className="w-full bg-[#0a0c10] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl font-sans">
            
            {/* Header Toolbar */}
            <div className="bg-gray-900 border-b border-gray-800 p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                    <Timer className="text-sky-400 w-5 h-5" />
                    <h3 className="text-white font-bold tracking-wide">Exponential Backoff Visualizer</h3>
                </div>
                
                {/* Server Control Panel */}
                <div className="flex items-center gap-3 bg-black/50 px-4 py-2 rounded-lg border border-gray-800">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Remote Server Status:</span>
                    <button 
                        onClick={handleServerToggle}
                        className={`flex items-center gap-2 px-3 py-1 rounded text-xs font-black uppercase transition-all ${
                            serverStatus === 'up' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 hover:bg-emerald-500/30' 
                            : 'bg-rose-500/20 text-rose-400 border border-rose-500/50 hover:bg-rose-500/30'
                        }`}
                    >
                        {serverStatus === 'up' ? <Server size={14}/> : <ServerCrash size={14}/>}
                        {serverStatus === 'up' ? 'Online (200)' : 'Overloaded (503)'}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 min-h-[400px]">
                
                {/* Left: Logic & Math Panel */}
                <div className="bg-gray-900/50 border-r border-gray-800 p-6 flex flex-col justify-center gap-6">
                    <div>
                        <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2"><BarChart size={16} className="text-sky-400"/> The Algorithm</h4>
                        <div className="bg-black/50 p-4 rounded-xl border border-gray-800 font-mono text-[10px] sm:text-xs text-sky-200 leading-relaxed">
                            <span className="text-purple-400">let</span> waitTime = <br/>
                            &nbsp;&nbsp;(<span className="text-amber-400">BASE_DELAY</span> * Math.pow(2, attempt)) <br/>
                            &nbsp;&nbsp;+ <span className="text-emerald-400">randomJitter</span>;
                        </div>
                        <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                            <strong>Jitter</strong> prevents a "thundering herd" where thousands of clients reconnect at the exact same millisecond and crash the server again.
                        </p>
                    </div>

                    <button
                        onClick={runSimulation}
                        disabled={isSimulating}
                        className="w-full py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-800 text-white font-black rounded-lg transition-colors flex justify-center items-center gap-2 uppercase tracking-widest text-sm"
                    >
                        {isSimulating ? <Activity className="animate-spin" size={18}/> : <Timer size={18}/>}
                        {isSimulating ? 'Simulating...' : 'Execute Request'}
                    </button>
                    <button onClick={() => {setAttempts([]); setIsSimulating(false);}} className="text-xs text-gray-500 hover:text-white transition-colors" disabled={isSimulating}>Clear Timeline</button>
                </div>

                {/* Right: Network Timeline */}
                <div className="md:col-span-2 bg-black p-6 relative overflow-hidden flex flex-col">
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Network Log Timeline</h4>
                    
                    <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-gray-800 pr-2 pb-4">
                        {attempts.length === 0 && (
                            <div className="h-full flex items-center justify-center text-gray-600 text-sm font-mono italic">
                                Awaiting request initiation...
                            </div>
                        )}
                        
                        {attempts.map((log) => {
                            if (log.type === 'wait') {
                                return (
                                    <div key={log.id} className="ml-12 border-l-2 border-dashed border-gray-700 pl-4 py-2 my-2 animate-in fade-in slide-in-from-top-2">
                                        <div className="text-xs text-gray-500 mb-1 font-mono">Calculating Backoff (Attempt {log.attempt})...</div>
                                        <div className="flex flex-wrap gap-2 text-[10px] font-mono">
                                            <span className="bg-gray-900 text-amber-400 px-2 py-1 rounded">Base: {log.baseMs}ms</span>
                                            <span className="bg-gray-900 text-emerald-400 px-2 py-1 rounded">+ Jitter: {log.jitterMs}ms</span>
                                            <span className="bg-gray-800 text-white font-bold px-2 py-1 rounded border border-gray-700">= Total Wait: {log.totalMs}ms</span>
                                        </div>
                                    </div>
                                );
                            }

                            return (
                                <div key={log.id} className={`flex gap-3 text-sm font-mono p-3 rounded-lg border animate-in slide-in-from-right-4 duration-300 ${
                                    log.type === 'success' ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300' :
                                    log.type === 'error' ? 'bg-rose-950/20 border-rose-500/30 text-rose-300' :
                                    log.type === 'fatal' ? 'bg-rose-900 border-rose-500 text-white shadow-[0_0_15px_rgba(225,29,72,0.5)]' :
                                    'bg-sky-950/10 border-sky-500/20 text-sky-200'
                                }`}>
                                    <span className="text-gray-500 shrink-0">[{log.time}]</span>
                                    <div className="flex-1">
                                        <span className="font-bold">
                                            {log.type === 'request' && `[Attempt ${log.attempt}] `}
                                            {log.msg}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default JsExponentialBackoffSimulator;