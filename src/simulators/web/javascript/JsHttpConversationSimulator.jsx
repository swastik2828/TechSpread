import React, { useState, useEffect } from 'react';
import { Globe, Server, ArrowRight, FileJson, Activity, Clock, ShieldCheck } from 'lucide-react';

const JsHttpConversationSimulator = () => {
    const [phase, setPhase] = useState('idle'); // idle, sending, processing, receiving, complete
    const [progress, setProgress] = useState(0);
    
    const requestDetails = {
        method: 'GET',
        url: 'https://api.example.com/users/42',
        headers: {
            'Accept': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Web)'
        }
    };

    const responseDetails = {
        status: '200 OK',
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        },
        body: '{\n  "id": 42,\n  "name": "Alice",\n  "role": "Admin"\n}'
    };

    useEffect(() => {
        let timer;
        if (phase === 'sending') {
            timer = setInterval(() => {
                setProgress(p => {
                    if (p >= 100) { setPhase('processing'); return 0; }
                    return p + 2;
                });
            }, 20);
        } else if (phase === 'processing') {
            timer = setTimeout(() => { setPhase('receiving'); }, 1200);
        } else if (phase === 'receiving') {
            timer = setInterval(() => {
                setProgress(p => {
                    if (p >= 100) { setPhase('complete'); return 100; }
                    return p + 2;
                });
            }, 20);
        }
        return () => { clearInterval(timer); clearTimeout(timer); };
    }, [phase]);

    const reset = () => { setPhase('idle'); setProgress(0); };

    return (
        <div className="w-full bg-[#0a0c10] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl font-sans">
            {/* Top Toolbar */}
            <div className="bg-gray-900 border-b border-gray-800 p-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <Activity className="text-sky-400 w-5 h-5" />
                    <h3 className="text-white font-bold tracking-wide">HTTP Lifecycle Analyzer</h3>
                </div>
                <div className="flex gap-3">
                    <button onClick={reset} className="px-4 py-1.5 text-xs font-bold text-gray-400 hover:text-white transition-colors">Reset</button>
                    <button 
                        onClick={() => phase === 'idle' && setPhase('sending')}
                        disabled={phase !== 'idle'}
                        className="px-5 py-1.5 bg-sky-500 hover:bg-sky-400 disabled:bg-gray-700 disabled:text-gray-500 text-black font-black rounded text-xs uppercase tracking-wider transition-all"
                    >
                        {phase === 'idle' ? 'Execute Fetch' : phase}
                    </button>
                </div>
            </div>

            <div className="p-6 sm:p-8">
                {/* Visualizer Area */}
                <div className="relative flex justify-between items-center mb-12 mt-4 px-4 sm:px-12">
                    
                    {/* Browser Node */}
                    <div className={`relative z-10 flex flex-col items-center transition-all duration-500 ${phase === 'sending' ? 'scale-110' : ''}`}>
                        <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center border-2 shadow-lg transition-colors duration-500 ${phase !== 'idle' ? 'bg-sky-900/40 border-sky-500 shadow-sky-500/20' : 'bg-gray-800 border-gray-700'}`}>
                            <Globe className={`w-8 h-8 sm:w-10 sm:h-10 ${phase !== 'idle' ? 'text-sky-400' : 'text-gray-500'}`} />
                        </div>
                        <span className="mt-4 font-bold text-gray-300 text-sm">Client</span>
                    </div>

                    {/* Network Path */}
                    <div className="flex-1 h-1.5 bg-gray-800 mx-4 sm:mx-8 rounded-full relative overflow-hidden">
                        {(phase === 'sending' || phase === 'receiving') && (
                            <div 
                                className={`absolute top-0 bottom-0 w-24 blur-sm rounded-full ${phase === 'sending' ? 'bg-sky-500' : 'bg-emerald-500'}`}
                                style={{ 
                                    left: phase === 'sending' ? `${progress}%` : `${100 - progress}%`,
                                    transform: 'translateX(-50%)'
                                }}
                            />
                        )}
                    </div>

                    {/* Server Node */}
                    <div className={`relative z-10 flex flex-col items-center transition-all duration-500 ${phase === 'processing' ? 'scale-110' : ''}`}>
                        <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center border-2 shadow-lg transition-colors duration-500 ${
                            phase === 'processing' ? 'bg-amber-900/40 border-amber-500 shadow-amber-500/20 animate-pulse' : 
                            (phase === 'receiving' || phase === 'complete') ? 'bg-emerald-900/40 border-emerald-500 shadow-emerald-500/20' : 'bg-gray-800 border-gray-700'
                        }`}>
                            <Server className={`w-8 h-8 sm:w-10 sm:h-10 ${
                                phase === 'processing' ? 'text-amber-400' : 
                                (phase === 'receiving' || phase === 'complete') ? 'text-emerald-400' : 'text-gray-500'
                            }`} />
                        </div>
                        <span className="mt-4 font-bold text-gray-300 text-sm">Server</span>
                    </div>
                </div>

                {/* Data Inspection Panels */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Request Inspector */}
                    <div className={`border rounded-xl overflow-hidden transition-all duration-500 ${phase !== 'idle' ? 'border-sky-500/30 bg-sky-950/10' : 'border-gray-800 bg-gray-900/50'}`}>
                        <div className="bg-gray-900/80 p-3 border-b border-gray-800 text-xs font-bold text-sky-400 uppercase tracking-widest flex items-center gap-2">
                            <ArrowRight size={14} /> Outbound Request
                        </div>
                        <div className="p-4 font-mono text-xs sm:text-sm leading-relaxed text-gray-400">
                            <div className="text-white font-bold">{requestDetails.method} {requestDetails.url}</div>
                            <div className="mt-2 text-sky-200/70">Headers:</div>
                            {Object.entries(requestDetails.headers).map(([k, v]) => (
                                <div key={k}><span className="text-sky-300">{k}:</span> {v}</div>
                            ))}
                        </div>
                    </div>

                    {/* Response Inspector */}
                    <div className={`border rounded-xl overflow-hidden transition-all duration-500 ${
                        (phase === 'receiving' || phase === 'complete') ? 'border-emerald-500/30 bg-emerald-950/10' : 'border-gray-800 bg-gray-900/50 opacity-50'
                    }`}>
                        <div className="bg-gray-900/80 p-3 border-b border-gray-800 text-xs font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                            <FileJson size={14} /> Inbound Response
                        </div>
                        <div className="p-4 font-mono text-xs sm:text-sm leading-relaxed text-gray-400 relative">
                            {phase === 'idle' || phase === 'sending' || phase === 'processing' ? (
                                <div className="absolute inset-0 flex items-center justify-center text-gray-600 bg-gray-900/50 backdrop-blur-[1px]">
                                    {phase === 'processing' ? 'Generating Response...' : 'Awaiting Data...'}
                                </div>
                            ) : null}
                            <div className="text-emerald-400 font-bold">HTTP/1.1 {responseDetails.status}</div>
                            <div className="mt-2 text-emerald-200/70">Headers:</div>
                            {Object.entries(responseDetails.headers).map(([k, v]) => (
                                <div key={k}><span className="text-emerald-300">{k}:</span> {v}</div>
                            ))}
                            <div className="mt-3 text-emerald-200/70">Body:</div>
                            <pre className="text-emerald-100 mt-1">{responseDetails.body}</pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JsHttpConversationSimulator;