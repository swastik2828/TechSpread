import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, SkipForward, Globe, Search, Send, Server, FileText, LayoutTemplate, Activity } from 'lucide-react';

// Steps definition with specific icon, label, description, and "target actor" for diagram highlighting
const STEPS = [
  {
    id: 1,
    title: 'URL Entry',
    icon: Globe,
    desc: 'You enter a domain name (like techspread.co.in) into the address bar.',
    actor: 'client',
  },
  {
    id: 2,
    title: 'DNS Lookup',
    icon: Search,
    desc: 'Browser asks a DNS server for the IP address corresponding to the domain.',
    actor: 'dns',
  },
  {
    id: 3,
    title: 'HTTP Request',
    icon: Send,
    desc: 'Browser opens a TCP connection and sends an HTTP request to the server IP.',
    actor: 'client', // Originator of the request
  },
  {
    id: 4,
    title: 'Server Processing',
    icon: Server,
    desc: 'The server handles the request, interacting with database or logic if needed.',
    actor: 'server',
  },
  {
    id: 5,
    title: 'HTTP Response',
    icon: FileText,
    desc: 'The server sends back an HTTP response with the webpage content (HTML/CSS/JS).',
    actor: 'server', // Originator of the response
  },
  {
    id: 6,
    title: 'Render Page',
    icon: LayoutTemplate,
    desc: 'The browser parses the files and constructs the visible webpage on screen.',
    actor: 'client',
  },
];

const Node = ({ icon: Icon, label, ip, isActive, isProcessing }) => (
  <div className={`relative p-4 md:p-6 rounded-2xl border-2 transition-all duration-500 bg-slate-900 flex flex-col items-center text-center shadow-lg w-[140px] md:w-[160px]
    ${isActive ? 'border-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.4)] scale-105' : 'border-slate-800 scale-100'}`}>
    {isProcessing && (
      <span className="absolute -top-2 -right-2 flex h-5 w-5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-5 w-5 bg-cyan-500 flex items-center justify-center">
            <Activity className="w-3 h-3 text-slate-950" />
        </span>
      </span>
    )}
    <Icon className={`w-10 h-10 mb-3 transition-colors duration-300 ${isActive ? 'text-cyan-400' : 'text-slate-600'}`} strokeWidth={1.5} />
    <h3 className={`font-bold text-sm md:text-base ${isActive ? 'text-slate-50' : 'text-slate-400'}`}>{label}</h3>
    {ip && <p className="text-[10px] md:text-xs font-mono text-slate-500 bg-slate-950 mt-2 px-1.5 py-0.5 rounded border border-slate-800">{ip}</p>}
  </div>
);

// Small packet/dot element moving along the path
const Packet = ({ show, start, end, duration }) => {
  const transitionClass = `transition-transform duration-[${duration}ms] ease-in-out`;
  const style = show ? { transform: `translateX(${end - start}px)` } : { transform: `translateX(0px)` };

  return (
    <div className={`absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)] ${transitionClass}`} style={style} />
  );
};

export default function WebArchitectureSimulator() {
  const [currentStepIndex, setCurrentStepIndex] = useState(-1); // -1 = idle/start
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1500); // ms per step

  useEffect(() => {
    let timer;
    if (isPlaying && currentStepIndex < STEPS.length - 1) {
      timer = setTimeout(() => {
        setCurrentStepIndex((prev) => prev + 1);
      }, speed);
    } else if (currentStepIndex === STEPS.length - 1) {
      setIsPlaying(false); // Stop when end is reached
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentStepIndex, speed]);

  const handleStartPlay = () => {
    if (currentStepIndex === STEPS.length - 1) {
      setCurrentStepIndex(0); // Reset to start if already at end
    } else if (currentStepIndex === -1) {
        setCurrentStepIndex(0); // Go to first step
    }
    setIsPlaying(true);
  };

  const handlePause = () => setIsPlaying(false);

  const handleNext = () => {
    handlePause();
    if (currentStepIndex < STEPS.length - 1) setCurrentStepIndex((prev) => prev + 1);
  };

  const handleReset = () => {
    handlePause();
    setCurrentStepIndex(-1);
  };

  const toggleSpeed = () => {
    setSpeed((prev) => (prev === 1500 ? 750 : 1500));
  };

  const currentStep = STEPS[currentStepIndex];
  const progress = ((currentStepIndex + 1) / STEPS.length) * 100;

  // Determine which diagram actors are active or processing based on current conceptual step
  const isActive = (actor) => currentStepIndex >= 0 && currentStep?.actor === actor;
  const isProcessing = (actor) => isActive(actor) && (currentStepIndex === 1 || currentStepIndex === 3 || currentStepIndex === 5); // Lookup, Server Proc, Rendering

  // Packet animation logic (requires fixed layout width for simplicity)
  const SHOW_PACKET = isPlaying && (currentStepIndex === 1 || currentStepIndex === 2 || currentStepIndex === 4);
  const PACKET_START = 160; // Client node end position roughly
  const PACKET_END = currentStepIndex === 1 ? 260 : 420; // DNS or Server position roughly
  const REVERSE_PACKET = currentStepIndex === 4; // Server -> Client for Step 5 Response

  return (
    <div className="max-w-[720px] mx-auto p-4 md:p-6 bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl font-sans text-slate-200">
      
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-3 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
            <div className='p-2 bg-slate-900 border border-slate-800 rounded-xl'>
                <Activity className='w-6 h-6 text-cyan-400' />
            </div>
          <div>
            <h2 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
              Web Requests
            </h2>
            <p className="text-xs text-slate-500 font-medium">TechSpread Interactive Guide</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
            <button onClick={toggleSpeed} className="px-3 py-1.5 text-xs font-mono rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-300 transition-colors border border-slate-800">
                {speed === 1500 ? '1x' : '2x'} Speed
            </button>
            <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-lg p-0.5">
                {isPlaying ? (
                    <button onClick={handlePause} className="p-2 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors">
                        <Pause className="w-4 h-4" />
                    </button>
                ) : (
                    <button onClick={handleStartPlay} className={`p-2 rounded-md ${currentStepIndex === STEPS.length - 1 ? 'bg-orange-600 hover:bg-orange-500' : 'bg-cyan-600 hover:bg-cyan-500'} text-white transition-colors`}>
                        {currentStepIndex === STEPS.length - 1 ? <RotateCcw className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                )}
                <button onClick={handleNext} disabled={currentStepIndex === STEPS.length - 1} className="p-2 rounded-md hover:bg-slate-800 text-slate-500 hover:text-slate-300 disabled:opacity-40 transition-colors">
                    <SkipForward className="w-4 h-4" />
                </button>
                <button onClick={handleReset} className="p-2 rounded-md hover:bg-slate-800 text-slate-500 hover:text-red-400 transition-colors">
                    <RotateCcw className="w-4 h-4" />
                </button>
            </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-800 h-1.5 rounded-full mb-8 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-cyan-500 to-blue-400 h-full transition-all duration-300 ease-out"
          style={{ width: `${currentStepIndex >= 0 ? progress : 0}%` }}
        />
      </div>

      {/* Vis Area - Desktop Row, Mobile wrapped */}
      <div className="relative flex items-start justify-center min-h-[160px] mb-8 gap-x-2 md:gap-x-4 max-w-[600px] mx-auto overflow-hidden">
        
        {/* Connection Lines (Desktop only for packet animation) */}
        <div className="absolute top-[55px] left-[140px] right-[140px] h-0.5 bg-slate-800 rounded-full hidden md:block">
            {/* Moving packet dot along the line */}
            <div className={`absolute -top-1.5 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)] transition-all ease-linear
                ${currentStepIndex === 1 && isPlaying ? 'left-0 translate-x-[110px] duration-1000' : ''} /* Client -> DNS */
                ${currentStepIndex === 2 && isPlaying ? 'left-0 translate-x-[300px] duration-1000' : ''} /* Client -> Server */
                ${currentStepIndex === 4 && isPlaying ? 'right-0 -translate-x-[300px] duration-1000 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]' : ''} /* Server -> Client */
                ${!SHOW_PACKET || !isPlaying ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`} />
        </div>

        <Node icon={Globe} label="Browser" ip="Client Machine" isActive={isActive('client')} isProcessing={isProcessing('client')} />
        <Node icon={Search} label="DNS Server" ip="1.1.1.1" isActive={isActive('dns')} isProcessing={isProcessing('dns')} />
        <Node icon={Server} label="Web Server" ip="techspread.co.in (104.18.2.10)" isActive={isActive('server')} isProcessing={isProcessing('server')} />
      </div>

      {/* Current Step Info Panel */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-inner">
        {currentStepIndex === -1 ? (
          <div className="text-center py-6 text-slate-500 italic flex flex-col items-center gap-4">
            <LayoutTemplate className='w-12 h-12 text-slate-700' strokeWidth={1}/>
            <div>
              <p className='font-semibold text-slate-400 text-lg'>Simulation Ready</p>
              <p className='text-sm'>Press Play or Next to see how content flows across the internet.</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 animate-fade-in transition-opacity duration-300">
            <div className={`p-4 rounded-xl border border-slate-800 bg-slate-950 flex-shrink-0
                ${currentStep?.actor === 'dns' ? 'text-purple-400' : currentStep?.actor === 'server' ? 'text-emerald-400' : 'text-cyan-400'}`}>
              {currentStep && <currentStep.icon className="w-8 h-8" strokeWidth={1.5} />}
            </div>
            <div className="flex-grow text-center sm:text-left">
              <p className="text-xs font-mono text-slate-600 mb-1 tracking-widest">STEP {currentStepIndex + 1} OF 6</p>
              <h4 className="text-xl font-bold text-slate-50 mb-2">{currentStep?.title}</h4>
              <p className="text-sm text-slate-400 leading-relaxed font-normal">
                {currentStep?.desc}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Inline animation keyframe definition (clean, self-contained) */}
      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
      `}</style>

    </div>
  );
}