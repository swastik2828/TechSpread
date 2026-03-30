import React, { useState, useEffect, useRef, useCallback } from 'react';

const STEPS = [
  { id: 'idle', title: 'Ready', desc: 'Enter a web address and choose your simulation mode.' },
  { id: 'parse', title: '1. Parse URL', desc: 'The browser breaks the link into protocol, domain, and path.' },
  { id: 'dns', title: '2. DNS Lookup', desc: 'Translating the domain name into a machine IP address.' },
  { id: 'tcp', title: '3. Connect', desc: 'Establishing a reliable TCP connection with the server.' },
  { id: 'tls', title: '4. Secure', desc: 'Creating a secure, encrypted tunnel (HTTPS/TLS) for data.' },
  { id: 'req', title: '5. Request', desc: 'Sending the HTTP GET request to ask for the webpage.' },
  { id: 'process', title: '6. Process', desc: 'The server reads the request and prepares the HTML response.' },
  { id: 'res', title: '7. Response', desc: 'The server sends the webpage data back to your browser.' },
  { id: 'render', title: '8. Render', desc: 'The browser paints the code onto your screen!' }
];

const Icons = {
  Play: () => <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>,
  StepForward: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>,
  Refresh: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
  Globe: () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
  Server: () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>,
  Lock: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
};

export default function UniqueNetworkSimulator() {
  // Pre-configured for TechSpread
  const [url, setUrl] = useState('https://techspread.co.in'); 
  const [parsedUrl, setParsedUrl] = useState(null);
  const [error, setError] = useState('');
  
  const [stepIndex, setStepIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [serverIp, setServerIp] = useState('');
  const [iframeLoading, setIframeLoading] = useState(true);

  const timerRef = useRef(null);

  const parseTargetUrl = useCallback((inputUrl) => {
    try {
      const u = new URL(inputUrl);
      setParsedUrl({ protocol: u.protocol.replace(':', ''), domain: u.hostname, path: u.pathname });
      setError('');
      return true;
    } catch (err) {
      setError('Please include https:// (e.g., https://techspread.co.in)');
      return false;
    }
  }, []);

  useEffect(() => {
    if (isAutoPlaying && stepIndex > 0 && stepIndex < STEPS.length - 1) {
      timerRef.current = setTimeout(() => {
        setStepIndex(prev => prev + 1);
      }, 2000);
    } else if (stepIndex === STEPS.length - 1) {
      setIsAutoPlaying(false);
    }
    return () => clearTimeout(timerRef.current);
  }, [isAutoPlaying, stepIndex]);

  const initSimulation = () => {
    if (parseTargetUrl(url)) {
      setServerIp(`104.21.${Math.floor(Math.random() * 100)}.${Math.floor(Math.random() * 255)}`); // Cloudflare style IP
      setStepIndex(1);
      setIframeLoading(true);
      return true;
    }
    return false;
  };

  const handleAutoPlay = () => {
    if (stepIndex === 0 && initSimulation()) setIsAutoPlaying(true);
    else setIsAutoPlaying(true);
  };

  const handleManualStep = () => {
    setIsAutoPlaying(false);
    if (stepIndex === 0) initSimulation();
    else if (stepIndex < STEPS.length - 1) setStepIndex(prev => prev + 1);
  };

  const handleReset = () => {
    setIsAutoPlaying(false);
    setStepIndex(0);
    setParsedUrl(null);
    clearTimeout(timerRef.current);
  };

  const currentStep = STEPS[stepIndex];
  const isHttps = parsedUrl?.protocol === 'https';

  return (
    <div className="w-full bg-[#0a0f1c] text-slate-200 font-sans p-4 rounded-2xl shadow-2xl border border-slate-800 max-w-5xl mx-auto flex flex-col gap-4">
      
      {/* Controls Header */}
      <div className="flex flex-col md:flex-row gap-4 items-center bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
        <div className="flex-1 w-full relative">
          <input 
            type="text" 
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={stepIndex > 0}
            className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-4 pr-4 py-3 font-mono text-sm text-cyan-100 focus:outline-none focus:border-cyan-500 transition-all disabled:opacity-60"
          />
          {error && <p className="absolute -bottom-5 left-0 text-red-400 text-xs">{error}</p>}
        </div>

        <div className="flex gap-2 w-full md:w-auto">
          {stepIndex === 0 ? (
            <>
              <button onClick={handleManualStep} className="flex-1 md:flex-none bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all">
                <Icons.StepForward /> Step-by-Step
              </button>
              <button onClick={handleAutoPlay} className="flex-1 md:flex-none bg-slate-800 hover:bg-slate-700 text-white px-5 py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all border border-slate-700">
                <Icons.Play /> Auto
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={handleManualStep} 
                disabled={stepIndex === STEPS.length - 1 || isAutoPlaying}
                className="flex-1 md:flex-none bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:bg-slate-800"
              >
                {stepIndex === STEPS.length - 1 ? 'Done' : 'Next Step ➔'}
              </button>
              <button onClick={handleReset} className="p-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors">
                <Icons.Refresh />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Info Banner & URL Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-2 bg-cyan-900/20 border border-cyan-500/20 rounded-xl p-4 flex flex-col justify-center">
          <h2 className="text-cyan-400 font-bold tracking-wide text-sm uppercase mb-1">{currentStep.title}</h2>
          <p className="text-slate-300 text-sm">{currentStep.desc}</p>
        </div>
        
        <div className={`col-span-1 flex gap-2 transition-all duration-500 ${stepIndex >= 1 ? 'opacity-100' : 'opacity-20 grayscale'}`}>
          <div className="flex-1 bg-slate-900/50 rounded-lg border border-slate-700 p-2 flex flex-col justify-center items-center">
            <span className="text-[10px] text-slate-500 uppercase">Protocol</span>
            <span className="text-xs font-mono text-pink-400 truncate max-w-[80px]">{parsedUrl?.protocol || '-'}</span>
          </div>
          <div className="flex-[2] bg-slate-900/50 rounded-lg border border-slate-700 p-2 flex flex-col justify-center items-center overflow-hidden">
            <span className="text-[10px] text-slate-500 uppercase">Domain</span>
            <span className="text-xs font-mono text-cyan-400 truncate max-w-full">{parsedUrl?.domain || '-'}</span>
          </div>
        </div>
      </div>

      {/* Visualizer Stage */}
      <div className="relative bg-slate-950 border border-slate-800 rounded-xl h-[320px] overflow-hidden flex items-center justify-between px-6 md:px-16 shadow-inner">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:16px_16px]"></div>

        {/* Client / Browser Node */}
        <div className={`relative z-20 flex flex-col items-center transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]
          ${stepIndex === 8 ? 'absolute inset-0 w-full h-full justify-start' : 'w-24'}`}>
          
          <div className={`flex items-center justify-center transition-all duration-1000 overflow-hidden relative
            ${stepIndex === 8 
              ? 'w-full h-full bg-slate-900 rounded-none border-0' 
              : 'w-16 h-16 rounded-2xl bg-slate-800 border-2 border-slate-600 shadow-lg'}`}>
            
            {stepIndex === 8 ? (
              <div className="w-full h-full flex flex-col">
                {/* Browser Header Bar */}
                <div className="bg-[#1e293b] h-10 flex items-center px-4 gap-3 border-b border-slate-700">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="flex-1 max-w-md mx-auto bg-slate-800/80 px-3 py-1 rounded-md flex items-center gap-2 border border-slate-700">
                    <Icons.Lock />
                    <span className="text-xs text-slate-300 font-mono truncate">{url}</span>
                  </div>
                </div>
                
                {/* Loading Skeleton before Iframe loads */}
                {iframeLoading && (
                  <div className="absolute inset-0 top-10 bg-slate-900 flex flex-col p-8 gap-4 animate-pulse z-0">
                    <div className="h-8 w-1/3 bg-slate-800 rounded"></div>
                    <div className="h-4 w-2/3 bg-slate-800 rounded"></div>
                    <div className="h-4 w-1/2 bg-slate-800 rounded"></div>
                    <div className="h-32 w-full bg-slate-800 rounded mt-4"></div>
                  </div>
                )}

                {/* The Actual Website Iframe */}
                <iframe 
                  src={url} 
                  className="w-full flex-1 bg-white relative z-10 transition-opacity duration-500"
                  style={{ opacity: iframeLoading ? 0 : 1 }}
                  title="Rendered Page" 
                  onLoad={() => setIframeLoading(false)}
                  sandbox="allow-scripts allow-same-origin allow-popups" 
                />
              </div>
            ) : (
              <Icons.Globe />
            )}
          </div>
          
          {stepIndex < 8 && (
             <span className="mt-3 font-mono text-[10px] text-slate-300 bg-slate-800 px-2 py-1 rounded border border-slate-700">Browser</span>
          )}

          {/* DNS Tooltip */}
          <div className={`absolute -top-12 bg-indigo-900/90 border border-indigo-500 text-indigo-100 px-3 py-1.5 rounded font-mono text-[10px] transition-all duration-500 whitespace-nowrap z-30
            ${stepIndex === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
            Translating...<br/>{serverIp}
          </div>
        </div>

        {/* Network Middle Section */}
        <div className={`flex-1 relative mx-4 transition-opacity duration-300 ${stepIndex === 8 ? 'opacity-0' : 'opacity-100'}`}>
          <div className={`absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 transition-all duration-1000 bg-slate-800 ${stepIndex >= 3 ? 'bg-cyan-500 shadow-[0_0_10px_#06b6d4]' : ''}`}></div>

          {isHttps && (
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 p-1.5 rounded-full border border-emerald-500 transition-all duration-500 z-10
              ${stepIndex >= 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
              <Icons.Lock />
            </div>
          )}

          {stepIndex === 5 && <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-pink-500 rounded-full shadow-[0_0_10px_#ec4899] sim-slide-right"></div>}
          {stepIndex === 7 && <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981] sim-slide-left right-0"></div>}
        </div>

        {/* Server Node */}
        <div className={`relative z-10 flex flex-col items-center w-24 transition-opacity duration-300 ${stepIndex === 8 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border-2 transition-all duration-300
            ${stepIndex === 6 ? 'bg-purple-900/60 border-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.5)] scale-110' : 'bg-slate-800 border-slate-600'}`}>
            <Icons.Server />
          </div>
          <span className="mt-3 font-mono text-[10px] text-slate-300 bg-slate-800 px-2 py-1 rounded border border-slate-700 text-center leading-tight">
            Server<br/>({serverIp || '---'})
          </span>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .sim-slide-right { animation: simRight 1.5s ease-in-out infinite; }
        .sim-slide-left { animation: simLeft 1.5s ease-in-out infinite; }
        @keyframes simRight { 0% { left: 0; opacity: 0; } 20% { opacity: 1; } 80% { opacity: 1; } 100% { left: 100%; opacity: 0; } }
        @keyframes simLeft { 0% { right: 0; opacity: 0; } 20% { opacity: 1; } 80% { opacity: 1; } 100% { right: 100%; opacity: 0; } }
      `}} />
    </div>
  );
}