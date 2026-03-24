import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, FileAudio, RefreshCw, Layers } from 'lucide-react';

const AudioSimulator = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(120); // Simulated 2 mins
    const [isMuted, setIsMuted] = useState(false);
    const [hasControls, setHasControls] = useState(true);
    const [hasAutoplay, setHasAutoplay] = useState(false);
    const [preload, setPreload] = useState('metadata');
    const [browserSupport, setBrowserSupport] = useState('modern');

    // Simulate playback
    useEffect(() => {
        let interval;
        if (isPlaying && progress < duration) {
            interval = setInterval(() => {
                setProgress((prev) => (prev >= duration ? duration : prev + 1));
            }, 1000);
        } else if (progress >= duration) {
            setIsPlaying(false);
            setProgress(0);
        }
        return () => clearInterval(interval);
    }, [isPlaying, progress, duration]);

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60);
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    const togglePlay = () => setIsPlaying(!isPlaying);
    const toggleMute = () => setIsMuted(!isMuted);

    return (
        <div className="bg-[#1a1a1a] rounded-xl border border-white/10 overflow-hidden my-8">
            <div className="px-4 py-3 border-b border-white/10 bg-white/5 flex items-center gap-2">
                <FileAudio className="text-orange-400" size={20} />
                <h3 className="text-white font-medium text-lg">HTML5 Audio Configuration Simulator</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Configuration Panel */}
                <div className="p-6 border-r border-white/10 space-y-5 bg-[#111]">
                    <h4 className="text-gray-300 font-medium mb-2 opacity-80 uppercase text-xs tracking-wider">Audio Attributes</h4>

                    <div className="space-y-4">
                        <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition">
                            <span className="text-sm text-gray-200 font-mono">controls</span>
                            <div className={`w-8 h-4 rounded-full flex items-center transition-colors px-0.5 ${hasControls ? 'bg-orange-500' : 'bg-gray-600'}`}>
                                <div className={`w-3 h-3 bg-white rounded-full shadow-md transform transition-transform ${hasControls ? 'translate-x-4' : 'translate-x-0'}`}></div>
                            </div>
                            <input type="checkbox" checked={hasControls} onChange={() => setHasControls(!hasControls)} className="hidden" />
                        </label>

                        <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition">
                            <span className="text-sm text-gray-200 font-mono">autoplay <span className="text-gray-500 text-xs ml-1">(Requires muted to work reliably)</span></span>
                            <div className={`w-8 h-4 rounded-full flex items-center transition-colors px-0.5 ${hasAutoplay ? 'bg-orange-500' : 'bg-gray-600'}`}>
                                <div className={`w-3 h-3 bg-white rounded-full shadow-md transform transition-transform ${hasAutoplay ? 'translate-x-4' : 'translate-x-0'}`}></div>
                            </div>
                            <input type="checkbox" checked={hasAutoplay} onChange={() => setHasAutoplay(!hasAutoplay)} className="hidden" />
                        </label>

                        <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition">
                            <span className="text-sm text-gray-200 font-mono">muted</span>
                            <div className={`w-8 h-4 rounded-full flex items-center transition-colors px-0.5 ${isMuted ? 'bg-orange-500' : 'bg-gray-600'}`}>
                                <div className={`w-3 h-3 bg-white rounded-full shadow-md transform transition-transform ${isMuted ? 'translate-x-4' : 'translate-x-0'}`}></div>
                            </div>
                            <input type="checkbox" checked={isMuted} onChange={() => setIsMuted(!isMuted)} className="hidden" />
                        </label>

                        <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex flex-col gap-2">
                            <span className="text-sm text-gray-200 font-mono">preload</span>
                            <div className="flex bg-black/50 rounded-md overflow-hidden p-1 border border-white/10">
                                {['none', 'metadata', 'auto'].map((val) => (
                                    <button
                                        key={val}
                                        onClick={() => setPreload(val)}
                                        className={`flex-1 text-xs py-1.5 rounded-sm transition-all font-mono ${preload === val ? 'bg-white/20 text-white shadow-sm' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                                    >
                                        {val}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Output Panel */}
                <div className="p-6 flex flex-col justify-center items-center relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">

                    <div className="absolute top-4 right-4 bg-orange-500/10 border border-orange-500/30 text-orange-400 px-3 py-1 rounded-full text-xs font-mono flex items-center gap-1">
                        <Layers size={12} /> Live Preview
                    </div>

                    <div className="w-full max-w-sm mt-8">
                        {/* The simulated player UI representing the browser native <audio controls> */}
                        {hasControls ? (
                            <div className="bg-[#f0f0f0] px-4 py-3 rounded-full flex shadow-lg items-center gap-4 text-gray-800 transition-all">
                                <button onClick={togglePlay} className="text-blue-500 hover:text-blue-600 transition-colors focus:outline-none shrink-0" title={isPlaying ? "Pause" : "Play"}>
                                    {isPlaying ? <Pause className="fill-current" size={20} /> : <Play className="fill-current ml-0.5" size={20} />}
                                </button>

                                <div className="flex-1 shrink-0 px-2 flex items-center">
                                    <div className="relative w-full h-1.5 bg-gray-300 rounded-full cursor-pointer">
                                        <div className="absolute top-0 left-0 h-full bg-blue-500 rounded-full transition-all duration-1000 ease-linear" style={{ width: `${(progress / duration) * 100}%` }}></div>
                                        <div className="absolute top-1/2 -mt-2 w-4 h-4 bg-white border border-gray-300 rounded-full shadow-sm shadow-black/20 transition-all duration-1000 ease-linear" style={{ left: `calc(${(progress / duration) * 100}% - 8px)` }}></div>
                                    </div>
                                </div>
                                <span className="text-xs font-mono text-gray-600 tabular-nums shrink-0">{formatTime(progress)} / {formatTime(duration)}</span>

                                <button onClick={toggleMute} className="text-gray-500 hover:text-gray-700 transition-colors focus:outline-none shrink-0 ml-2 border-l border-gray-300 pl-4" title={isMuted ? "Unmute" : "Mute"}>
                                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                                </button>
                            </div>
                        ) : (
                            <div className="text-center p-8 border border-dashed border-gray-600 rounded-lg text-gray-500 flex flex-col items-center">
                                <FileAudio size={32} className="mb-2 opacity-50 text-orange-500" />
                                <p className="text-sm">Audio element is present but invisible.</p>
                                <p className="text-xs mt-1 text-gray-600">(controls attribute is false)</p>

                                <button onClick={togglePlay} className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-md text-sm transition-colors border border-white/20">
                                    Simulate External JS Control ({isPlaying ? 'Pause' : 'Play'})
                                </button>
                            </div>
                        )}

                        <div className="mt-8">
                            <h5 className="font-mono text-xs text-gray-500 mb-2">Network Activity (Simulated)</h5>
                            <div className="bg-black/50 p-3 rounded border border-white/5 font-mono text-[10px] text-green-400 min-h-[60px] flex flex-col justify-end">
                                {preload === 'none' && !isPlaying && <div>&gt; Waiting for user interaction...</div>}
                                {preload === 'metadata' && !isPlaying && <div>&gt; Fetched duration: 2:00<br />&gt; Waiting for playback...</div>}
                                {preload === 'auto' && !isPlaying && <div>&gt; Fetched duration: 2:00<br />&gt; Buffering audio data fully...</div>}
                                {isPlaying && <div className="text-blue-300 flex items-center gap-2">&gt; Streaming audio data <RefreshCw size={10} className="animate-spin text-orange-400" /> </div>}
                                {hasAutoplay && !isMuted && <div className="text-red-400 mt-1 uppercase tracking-wider">&gt; WARNING: Autoplay blocked by browser policy without 'muted'.</div>}
                            </div>
                        </div>

                    </div>
                </div>
            </div >

            {/* Code Generation */}
            < div className="bg-[#050505] p-4 font-mono text-sm border-t border-white/10 text-gray-300 grid grid-cols-1 md:grid-cols-2 gap-4" >
                <div>
                    <span className="text-xs text-gray-500 block mb-2">// Generated Code</span>
                    <p>
                        <span className="text-pink-500">&lt;audio</span>
                        {hasControls && <span className="text-green-400"> controls</span>}
                        {hasAutoplay && <span className="text-green-400"> autoplay</span>}
                        {isMuted && <span className="text-green-400"> muted</span>}
                        {preload !== 'metadata' && <span className="text-blue-400"> preload<span className="text-white">=</span><span className="text-yellow-300">"{preload}"</span></span>}
                        <span className="text-pink-500">&gt;</span>
                    </p>
                    <p className="pl-4"><span className="text-pink-500">&lt;source</span> <span className="text-blue-400">src</span>=<span className="text-yellow-300">"audio.mp3"</span> <span className="text-blue-400">type</span>=<span className="text-yellow-300">"audio/mpeg"</span> <span className="text-pink-500">/&gt;</span></p>
                    <p className="pl-4"><span className="text-yellow-600">&lt;!-- fallback --&gt;</span></p>
                    <p><span className="text-pink-500">&lt;/audio&gt;</span></p>
                </div>
            </div >
        </div >
    );
};

export default AudioSimulator;
