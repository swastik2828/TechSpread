import React, { useState } from 'react';
import { Database, Server, RefreshCw, Terminal, Check, X, ShieldAlert } from 'lucide-react';

const JsRestApiSimulator = () => {
    const initialDb = [
        { id: 1, item: 'Laptop', stock: 5 },
        { id: 2, item: 'Mouse', stock: 12 }
    ];
    
    const [db, setDb] = useState(initialDb);
    const [logs, setLogs] = useState([]);
    const [nextId, setNextId] = useState(3);
    const [dbHash, setDbHash] = useState(JSON.stringify(initialDb)); // Used to check idempotency

    const handleRequest = (method, endpoint) => {
        const previousDbHash = JSON.stringify(db);
        let newDb = [...db];
        let status = 200;
        let responseBody = null;
        
        // Parse endpoint
        const isCollection = endpoint === '/products';
        const idMatch = endpoint.match(/\/products\/(\d+)/);
        const id = idMatch ? parseInt(idMatch[1]) : null;

        if (isCollection) {
            if (method === 'GET') {
                responseBody = newDb;
            } else if (method === 'POST') {
                const newItem = { id: nextId, item: `New Item ${nextId}`, stock: 10 };
                newDb.push(newItem);
                setNextId(nextId + 1);
                status = 201; // Created
                responseBody = newItem;
            }
        } else if (id) {
            const index = newDb.findIndex(i => i.id === id);
            
            if (index === -1) {
                status = 404; // Not Found
                responseBody = { error: "Resource not found" };
            } else {
                if (method === 'GET') {
                    responseBody = newDb[index];
                } else if (method === 'PUT') {
                    // Full replace
                    newDb[index] = { id, item: 'Replaced Item', stock: 99 };
                    responseBody = newDb[index];
                } else if (method === 'DELETE') {
                    newDb.splice(index, 1);
                    status = 204; // No Content
                    responseBody = null;
                }
            }
        }

        const currentDbHash = JSON.stringify(newDb);
        const changedState = previousDbHash !== currentDbHash;
        
        setDb(newDb);
        setDbHash(currentDbHash);
        
        const logEntry = {
            id: Date.now(),
            method,
            endpoint,
            status,
            changedState,
            isIdempotent: !changedState || method === 'POST' // Simplified visual logic for demo
        };
        
        setLogs(prev => [logEntry, ...prev].slice(0, 6)); // Keep last 6
    };

    return (
        <div className="w-full bg-[#0a0c10] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl font-sans">
            <div className="bg-gray-900 border-b border-gray-800 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Database className="text-purple-400 w-5 h-5" />
                    <h3 className="text-white font-bold tracking-wide">REST Architecture & Idempotency Sandbox</h3>
                </div>
                <button onClick={() => {setDb(initialDb); setLogs([]); setNextId(3);}} className="text-xs text-gray-500 hover:text-white transition-colors">Reset Server</button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Left Panel: Client Actions */}
                <div className="lg:col-span-5 p-6 border-r border-gray-800 bg-black/20">
                    <h4 className="text-gray-500 font-bold text-xs uppercase tracking-widest mb-4">Client Requests</h4>
                    
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <p className="text-xs font-mono text-gray-400">Collection: /products</p>
                            <div className="flex gap-2">
                                <button onClick={() => handleRequest('GET', '/products')} className="flex-1 py-2 bg-sky-900/30 hover:bg-sky-600/50 text-sky-400 font-mono text-sm border border-sky-500/30 rounded transition-colors">GET</button>
                                <button onClick={() => handleRequest('POST', '/products')} className="flex-1 py-2 bg-emerald-900/30 hover:bg-emerald-600/50 text-emerald-400 font-mono text-sm border border-emerald-500/30 rounded transition-colors">POST</button>
                            </div>
                        </div>

                        <div className="w-full h-px bg-gray-800 my-4"></div>

                        <div className="space-y-2">
                            <p className="text-xs font-mono text-gray-400">Specific Resource: /products/1</p>
                            <div className="grid grid-cols-3 gap-2">
                                <button onClick={() => handleRequest('GET', '/products/1')} className="py-2 bg-sky-900/30 hover:bg-sky-600/50 text-sky-400 font-mono text-sm border border-sky-500/30 rounded transition-colors">GET</button>
                                <button onClick={() => handleRequest('PUT', '/products/1')} className="py-2 bg-amber-900/30 hover:bg-amber-600/50 text-amber-400 font-mono text-sm border border-amber-500/30 rounded transition-colors">PUT</button>
                                <button onClick={() => handleRequest('DELETE', '/products/1')} className="py-2 bg-rose-900/30 hover:bg-rose-600/50 text-rose-400 font-mono text-sm border border-rose-500/30 rounded transition-colors">DELETE</button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 bg-purple-900/10 border border-purple-500/20 rounded-lg p-4 text-xs text-purple-200/80 leading-relaxed">
                        <strong>Test Idempotency:</strong> Click <span className="text-emerald-400 font-mono">POST</span> multiple times. Notice the Database grows (Not Idempotent). Then, click <span className="text-rose-400 font-mono">DELETE</span> multiple times. The Database changes once, but subsequent clicks safely do nothing (Idempotent).
                    </div>
                </div>

                {/* Right Panel: Server State & Logs */}
                <div className="lg:col-span-7 flex flex-col">
                    
                    {/* Database View */}
                    <div className="p-6 border-b border-gray-800 bg-gray-900/30">
                        <h4 className="text-gray-500 font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                            Server Database State <RefreshCw size={12} className={logs.length > 0 && logs[0].changedState ? "text-green-400 animate-spin" : ""} />
                        </h4>
                        <div className="bg-black border border-gray-800 rounded-lg p-4 font-mono text-sm text-gray-300 min-h-[140px] max-h-[140px] overflow-y-auto">
                            {db.length === 0 ? <span className="text-gray-600 italic">Database is empty</span> : 
                            <pre className="text-emerald-400/90 m-0">
                                {JSON.stringify(db, null, 2)}
                            </pre>}
                        </div>
                    </div>

                    {/* Network Log */}
                    <div className="p-6 flex-1 bg-black">
                        <h4 className="text-gray-500 font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                            <Terminal size={14}/> Network Traffic Log
                        </h4>
                        <div className="space-y-2">
                            {logs.length === 0 && <span className="text-gray-700 text-sm font-mono">No requests made yet.</span>}
                            {logs.map((log) => (
                                <div key={log.id} className="flex flex-wrap sm:flex-nowrap items-center justify-between bg-gray-900 border border-gray-800 rounded p-2 text-sm font-mono animate-in fade-in slide-in-from-left-2">
                                    <div className="flex items-center gap-3 w-full sm:w-auto">
                                        <span className={`w-14 font-bold ${
                                            log.method === 'GET' ? 'text-sky-400' :
                                            log.method === 'POST' ? 'text-emerald-400' :
                                            log.method === 'PUT' ? 'text-amber-400' : 'text-rose-400'
                                        }`}>{log.method}</span>
                                        <span className="text-gray-400 truncate w-24 sm:w-32">{log.endpoint}</span>
                                        <span className={`px-2 py-0.5 rounded text-xs font-black ${
                                            log.status >= 200 && log.status < 300 ? 'bg-emerald-900/50 text-emerald-400' : 'bg-rose-900/50 text-rose-400'
                                        }`}>{log.status}</span>
                                    </div>
                                    <div className="flex items-center gap-2 mt-2 sm:mt-0 ml-auto sm:ml-0">
                                        {log.changedState ? (
                                            <span className="text-[10px] uppercase font-bold text-amber-500 bg-amber-950/50 px-2 py-1 rounded border border-amber-900">State Altered</span>
                                        ) : (
                                            <span className="text-[10px] uppercase font-bold text-gray-500 bg-gray-900 px-2 py-1 rounded border border-gray-800">State Unchanged</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default JsRestApiSimulator;