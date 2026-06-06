import React, { useState } from 'react';
import { Network, AlertTriangle, CheckCircle2, XCircle, Terminal, Info } from 'lucide-react';

const JsFetchGotchaSimulator = () => {
    const [scenario, setScenario] = useState('200');
    const [result, setResult] = useState(null);
    const [isExecuting, setIsExecuting] = useState(false);

    const runSimulation = () => {
        setIsExecuting(true);
        setResult(null);
        
        setTimeout(() => {
            if(scenario === '200') {
                setResult({ 
                    networkLayer: 'OK', 
                    httpLayer: 200, 
                    promiseState: 'FULFILLED',
                    responseOk: true,
                    catchBlock: false 
                });
            } else if(scenario === '404') {
                setResult({ 
                    networkLayer: 'OK', 
                    httpLayer: 404, 
                    promiseState: 'FULFILLED',
                    responseOk: false,
                    catchBlock: false 
                });
            } else if(scenario === '500') {
                setResult({ 
                    networkLayer: 'OK', 
                    httpLayer: 500, 
                    promiseState: 'FULFILLED',
                    responseOk: false,
                    catchBlock: false 
                });
            } else {
                setResult({ 
                    networkLayer: 'FAILED (DNS/Offline)', 
                    httpLayer: null, 
                    promiseState: 'REJECTED',
                    responseOk: null,
                    catchBlock: true 
                });
            }
            setIsExecuting(false);
        }, 800);
    };

    return (
        <div className="w-full bg-[#0a0c10] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl font-sans">
            <div className="p-6 sm:p-8 bg-gradient-to-br from-gray-900 to-black relative">
                
                <div className="flex flex-col sm:flex-row gap-6 justify-between items-start mb-8 border-b border-gray-800 pb-8">
                    <div>
                        <h3 className="text-xl font-black text-white flex items-center gap-2 mb-2">
                            <Network className="text-amber-500" /> The Fetch Promise Gotcha
                        </h3>
                        <p className="text-gray-400 text-sm max-w-md">
                            Select a scenario to visualize how the underlying Network Layer relates to the JS Promise State. Notice when the Catch block actually triggers.
                        </p>
                    </div>
                    
                    <div className="flex flex-col gap-2 w-full sm:w-auto">
                        {[
                            {id: '200', label: 'API Success (200 OK)', color: 'text-emerald-400 border-emerald-500/30'},
                            {id: '404', label: 'Not Found (404 Error)', color: 'text-yellow-400 border-yellow-500/30'},
                            {id: '500', label: 'Server Crash (500 Error)', color: 'text-orange-400 border-orange-500/30'},
                            {id: 'offline', label: 'No Internet / Network Failure', color: 'text-rose-400 border-rose-500/30'}
                        ].map(s => (
                            <button 
                                key={s.id} 
                                onClick={() => {setScenario(s.id); setResult(null);}}
                                className={`px-4 py-2 text-sm font-bold text-left rounded border transition-all ${
                                    scenario === s.id ? `bg-gray-800 ${s.color} shadow-lg scale-105` : 'bg-black text-gray-500 border-gray-800 hover:border-gray-600'
                                }`}
                            >
                                {s.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <button 
                        onClick={runSimulation}
                        disabled={isExecuting}
                        className="w-full py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-800 text-white font-black rounded-lg transition-colors flex justify-center items-center gap-2"
                    >
                        {isExecuting ? <span className="animate-pulse">Awaiting Promise...</span> : 'Execute fetch()'}
                    </button>

                    {result && (
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            
                            {/* Layer 1: Network */}
                            <div className="bg-gray-900 border border-gray-800 p-4 rounded-xl">
                                <span className="text-xs text-gray-500 font-bold uppercase tracking-widest block mb-2">1. Network Layer</span>
                                <div className={`font-mono text-sm font-bold flex items-center gap-2 ${result.networkLayer === 'OK' ? 'text-emerald-400' : 'text-rose-500'}`}>
                                    {result.networkLayer === 'OK' ? <CheckCircle2 size={16}/> : <XCircle size={16}/>}
                                    {result.networkLayer}
                                </div>
                                <p className="text-xs text-gray-500 mt-2">Did the browser successfully reach the server IP?</p>
                            </div>

                            {/* Layer 2: HTTP */}
                            <div className="bg-gray-900 border border-gray-800 p-4 rounded-xl">
                                <span className="text-xs text-gray-500 font-bold uppercase tracking-widest block mb-2">2. HTTP Layer</span>
                                <div className={`font-mono text-sm font-bold flex items-center gap-2 ${result.httpLayer === 200 ? 'text-emerald-400' : result.httpLayer === null ? 'text-gray-600' : 'text-orange-400'}`}>
                                    {result.httpLayer ? `Status: ${result.httpLayer}` : 'N/A (No connection)'}
                                </div>
                                <p className="text-xs text-gray-500 mt-2">What HTTP status code did the server return?</p>
                            </div>

                            {/* Layer 3: Promise */}
                            <div className={`p-4 rounded-xl border ${result.promiseState === 'FULFILLED' ? 'bg-emerald-950/20 border-emerald-500/50' : 'bg-rose-950/20 border-rose-500/50'}`}>
                                <span className="text-xs text-gray-500 font-bold uppercase tracking-widest block mb-2">3. JS Promise State</span>
                                <div className={`font-black text-lg ${result.promiseState === 'FULFILLED' ? 'text-emerald-400' : 'text-rose-400'}`}>
                                    {result.promiseState}
                                </div>
                                <div className="mt-2 text-xs font-mono">
                                    <div className={result.catchBlock ? 'text-rose-300 font-bold' : 'text-gray-500'}>► catch() triggered: {result.catchBlock.toString()}</div>
                                    <div className={result.responseOk !== null ? (result.responseOk ? 'text-emerald-300 font-bold' : 'text-orange-300 font-bold') : 'text-gray-500'}>
                                        ► response.ok: {result.responseOk !== null ? result.responseOk.toString() : 'undefined'}
                                    </div>
                                </div>
                            </div>

                        </div>
                    )}

                    {/* Explanatory Banner */}
                    {result && result.promiseState === 'FULFILLED' && result.httpLayer !== 200 && (
                        <div className="mt-4 bg-yellow-900/20 border border-yellow-500/50 p-4 rounded-xl flex gap-3 text-sm text-yellow-200/90 animate-in fade-in duration-700">
                            <AlertTriangle className="text-yellow-500 shrink-0 mt-0.5" size={18} />
                            <div>
                                <strong>Gotcha Alert:</strong> The server returned a <code>{result.httpLayer}</code> error, but the Promise <strong>Fulfilled</strong>! If you don't manually check <code>if (!response.ok) throw new Error(...)</code>, your code will try to parse an error page as JSON and crash.
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default JsFetchGotchaSimulator;