import React, { useState, useEffect } from 'react';
import { ShieldCheck, ShieldAlert, Lock, Unlock, Edit3, Key } from 'lucide-react';

const JsJwtSimulator = () => {
    // Simulated token logic for educational purposes (Not real crypto)
    const headerStr = '{"alg":"HS256","typ":"JWT"}';
    const [payloadObj, setPayloadObj] = useState({ userId: 42, role: "user", accessLevel: 1 });
    const [isTampered, setIsTampered] = useState(false);
    const [viewMode, setViewMode] = useState('encoded'); // encoded or decoded

    // Helper to simulate Base64URL encoding
    const b64Encode = (str) => btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
    
    const headerB64 = b64Encode(headerStr);
    const payloadB64 = b64Encode(JSON.stringify(payloadObj));
    
    // Simulated secret and signature logic
    const secret = "my-super-secret-key-123";
    const generateSimulatedSignature = (header, payload) => {
        // Simple hash simulation for visual effect
        let hash = 0;
        const str = `${header}.${payload}.${secret}`;
        for (let i = 0; i < str.length; i++) hash = Math.imul(31, hash) + str.charCodeAt(i) | 0;
        return b64Encode(Math.abs(hash).toString(16) + "pseudo-signature-padding");
    };

    // The "original" trusted signature based on the un-tampered payload
    const [trustedSignature, setTrustedSignature] = useState('');
    
    useEffect(() => {
        if(!isTampered) {
            setTrustedSignature(generateSimulatedSignature(headerB64, payloadB64));
        }
    }, []);

    const currentSignature = generateSimulatedSignature(headerB64, payloadB64);
    const signatureIsValid = currentSignature === trustedSignature;

    const handleTamper = () => {
        setIsTampered(true);
        setPayloadObj({ ...payloadObj, role: "admin", accessLevel: 99 });
        setViewMode('decoded');
    };

    const handleReset = () => {
        setIsTampered(false);
        setPayloadObj({ userId: 42, role: "user", accessLevel: 1 });
        setViewMode('encoded');
    };

    return (
        <div className="w-full bg-[#0a0c10] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl font-sans">
            <div className="bg-gray-900 border-b border-gray-800 p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                    <Key className="text-yellow-400 w-5 h-5" />
                    <h3 className="text-white font-bold tracking-wide">JWT Cryptography Sandbox</h3>
                </div>
                <div className="flex gap-2">
                    <button 
                        onClick={() => setViewMode(viewMode === 'encoded' ? 'decoded' : 'encoded')}
                        className="px-4 py-1.5 bg-gray-800 hover:bg-gray-700 text-white rounded text-xs font-bold transition-colors flex items-center gap-2"
                    >
                        {viewMode === 'encoded' ? <Unlock size={14}/> : <Lock size={14}/>}
                        {viewMode === 'encoded' ? 'Decode Token' : 'Encode Token'}
                    </button>
                    <button onClick={handleReset} className="px-4 py-1.5 text-xs font-bold text-gray-500 hover:text-white transition-colors">Reset</button>
                </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
                
                {/* Visual Security Status */}
                <div className={`p-4 rounded-xl flex items-center gap-4 border ${
                    signatureIsValid ? 'bg-emerald-950/20 border-emerald-500/30' : 'bg-rose-950/20 border-rose-500/30'
                }`}>
                    {signatureIsValid ? (
                        <ShieldCheck className="text-emerald-400 w-8 h-8 shrink-0" />
                    ) : (
                        <ShieldAlert className="text-rose-400 w-8 h-8 shrink-0" />
                    )}
                    <div>
                        <h4 className={`font-black uppercase tracking-wider text-sm ${signatureIsValid ? 'text-emerald-400' : 'text-rose-400'}`}>
                            {signatureIsValid ? 'Signature Verified' : 'Signature Invalid - Token Rejected'}
                        </h4>
                        <p className="text-gray-400 text-xs mt-1">
                            {signatureIsValid 
                                ? 'The server computed a hash that matches the attached signature. The payload is trusted.' 
                                : 'The payload was modified by a client! The computed hash no longer matches the attached signature. The server drops the request.'}
                        </p>
                    </div>
                </div>

                {/* Encoded View */}
                {viewMode === 'encoded' && (
                    <div className="bg-black border border-gray-800 rounded-xl p-6 font-mono text-sm sm:text-lg break-all leading-relaxed shadow-inner">
                        <span className="text-rose-400" title="Header (Base64Url)">{headerB64}</span>
                        <span className="text-white font-black">.</span>
                        <span className="text-emerald-400" title="Payload (Base64Url)">{payloadB64}</span>
                        <span className="text-white font-black">.</span>
                        <span className={`transition-colors duration-300 ${signatureIsValid ? 'text-sky-400' : 'text-rose-600 line-through'}`} title="Signature">{trustedSignature}</span>
                    </div>
                )}

                {/* Decoded View */}
                {viewMode === 'decoded' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-rose-950/10 border border-rose-500/30 rounded-lg p-4">
                            <h5 className="text-rose-400 text-xs font-bold uppercase tracking-widest mb-3">1. Header (Algorithm)</h5>
                            <pre className="font-mono text-xs text-rose-200 bg-rose-950/50 p-3 rounded overflow-x-auto">
                                {JSON.stringify(JSON.parse(headerStr), null, 2)}
                            </pre>
                        </div>
                        
                        <div className={`relative bg-emerald-950/10 border rounded-lg p-4 transition-colors duration-500 ${isTampered ? 'border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.2)]' : 'border-emerald-500/30'}`}>
                            <div className="flex justify-between items-center mb-3">
                                <h5 className={`text-xs font-bold uppercase tracking-widest ${isTampered ? 'text-amber-400' : 'text-emerald-400'}`}>2. Payload (Data)</h5>
                                {!isTampered && (
                                    <button onClick={handleTamper} className="flex items-center gap-1 text-[10px] bg-amber-500/20 text-amber-400 hover:bg-amber-500 hover:text-black px-2 py-1 rounded font-bold transition-colors">
                                        <Edit3 size={10}/> Hack to Admin
                                    </button>
                                )}
                            </div>
                            <pre className={`font-mono text-xs p-3 rounded overflow-x-auto ${isTampered ? 'bg-amber-950/30 text-amber-300' : 'bg-emerald-950/50 text-emerald-200'}`}>
                                {JSON.stringify(payloadObj, null, 2)}
                            </pre>
                            {isTampered && <span className="absolute -top-3 -right-3 bg-rose-500 text-white text-[10px] font-black px-2 py-1 rounded-full shadow-lg rotate-12">TAMPERED!</span>}
                        </div>

                        <div className={`bg-sky-950/10 border rounded-lg p-4 ${signatureIsValid ? 'border-sky-500/30' : 'border-rose-500/50 opacity-50'}`}>
                            <h5 className={`text-xs font-bold uppercase tracking-widest mb-3 ${signatureIsValid ? 'text-sky-400' : 'text-rose-400'}`}>3. Signature (Trust)</h5>
                            <div className="bg-sky-950/50 p-3 rounded flex flex-col gap-2 font-mono text-[10px]">
                                <div>
                                    <span className="text-gray-500">Expected: </span><br/>
                                    <span className="text-sky-300 break-all">{trustedSignature}</span>
                                </div>
                                <div className="border-t border-sky-900 pt-2">
                                    <span className="text-gray-500">Computed from Payload: </span><br/>
                                    <span className={`break-all ${signatureIsValid ? 'text-sky-300' : 'text-rose-400 font-bold'}`}>{currentSignature}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default JsJwtSimulator;