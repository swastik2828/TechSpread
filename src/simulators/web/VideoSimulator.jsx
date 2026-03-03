import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Square, Settings, Layout, Code, MonitorPlay, AlertTriangle } from 'lucide-react';

const VideoSimulator = () => {
    const [videoSrc, setVideoSrc] = useState('mp4');
    const [hasFlash, setHasFlash] = useState(false);
    const [browserSupport, setBrowserSupport] = useState('modern'); // 'modern', 'legacy-mp4', 'legacy-none'

    return (
        <div className="bg-[#1a1a1a] rounded-xl border border-white/10 overflow-hidden my-8">
            <div className="px-4 py-3 border-b border-white/10 bg-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <MonitorPlay className="text-orange-400" size={20} />
                    <h3 className="text-white font-medium text-lg">HTML5 Video & Fallback Simulator</h3>
                </div>
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
            </div>

            <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Controls Area */}
                <div className="space-y-6">
                    <div>
                        <h4 className="text-gray-300 font-medium mb-3 flex items-center gap-2">
                            <Settings size={18} className="text-blue-400" />
                            Simulated Environment
                        </h4>
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm text-gray-400 block mb-2">Browser Capabilities</label>
                                <select
                                    value={browserSupport}
                                    onChange={(e) => setBrowserSupport(e.target.value)}
                                    className="w-full bg-[#111] border border-white/10 rounded-lg p-2 text-white outline-none focus:border-orange-500 transition-colors"
                                >
                                    <option value="modern">Modern Browser (Supports HTML5 Video, MP4 & WebM)</option>
                                    <option value="legacy-mp4">Legacy Browser (Supports HTML5 Video, MP4 Only)</option>
                                    <option value="legacy-none">Very Old Browser (No HTML5 Video Support)</option>
                                </select>
                            </div>

                            <div className="flex items-center justify-between bg-[#111] p-3 rounded-lg border border-white/5">
                                <span className="text-sm text-gray-300">Flash Player Plugin Installed</span>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={hasFlash}
                                        onChange={() => setHasFlash(!hasFlash)}
                                    />
                                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#111] rounded-lg p-4 border border-white/5 relative overflow-hidden group">
                        <h4 className="text-gray-300 font-medium mb-3 flex items-center gap-2 text-sm">
                            <Code size={16} className="text-green-400" />
                            Generated Logic Path
                        </h4>
                        <div className="font-mono text-xs text-blue-300 leading-relaxed">
                            {browserSupport === 'modern' && "1. Browser checks <video> tag\n2. Rejects WebM (if preference is MP4) or accepts first valid source\n3. Plays native HTML5 Video"}
                            {browserSupport === 'legacy-mp4' && "1. Browser checks <video> tag\n2. Rejects WebM\n3. Accepts MP4 source\n4. Plays native HTML5 Video"}
                            {browserSupport === 'legacy-none' && hasFlash && "1. Browser ignores <video> tag entirely\n2. Renders child SWFObject <div>\n3. Detects Flash Player\n4. Plays SWF Video Player"}
                            {browserSupport === 'legacy-none' && !hasFlash && "1. Browser ignores <video> tag entirely\n2. Renders child SWFObject <div>\n3. Flash Player missing\n4. Displays plain text download link fallback"}
                        </div>
                    </div>
                </div>

                {/* Display Area */}
                <div className="flex justify-center items-center bg-[#111] rounded-lg border border-white/5 min-h-[300px] relative overflow-hidden p-6">
                    <div className="absolute top-3 left-3 flex gap-2">
                        <span className="px-2 py-1 rounded bg-white/10 text-xs font-mono text-gray-400 border border-white/5">
                            Render Output
                        </span>
                    </div>

                    <motion.div
                        key={`${browserSupport}-${hasFlash}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-full max-w-sm"
                    >
                        {(browserSupport === 'modern' || browserSupport === 'legacy-mp4') ? (
                            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 flex flex-col items-center justify-center relative shadow-xl">
                                <MonitorPlay className="text-white/20 mb-2 w-16 h-16" />
                                <div className="text-sm font-medium text-white/80">Native HTML5 Player</div>
                                <div className="text-xs text-white/50">{browserSupport === 'modern' ? 'Using WebM/MP4' : 'Using MP4'}</div>
                                <div className="absolute bottom-0 left-0 right-0 h-10 bg-black/50 backdrop-blur flex items-center px-4 gap-4">
                                    <Play className="text-white/80 w-4 h-4 cursor-pointer hover:text-white" />
                                    <div className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
                                        <div className="h-full w-1/3 bg-orange-500 rounded-full"></div>
                                    </div>
                                    <Layout className="text-white/80 w-4 h-4" />
                                </div>
                            </div>
                        ) : hasFlash ? (
                            <div className="aspect-video bg-[#333] border-4 border-[#222] rounded flex flex-col items-center justify-center relative shadow-xl shadow-red-900/20">
                                <div className="absolute top-2 right-2 text-[10px] text-white/40 font-bold uppercase tracking-wider">Flash Player</div>
                                <AlertTriangle className="text-red-400/50 mb-2 w-12 h-12" />
                                <div className="text-sm font-bold text-red-200">SWF Video Player</div>
                                <div className="text-xs text-red-300/70 mt-1">Loading presentation.flv</div>
                                <div className="absolute bottom-2 left-2 right-2 h-6 bg-gradient-to-b from-[#444] to-[#222] border border-[#111] rounded-sm flex items-center px-2 shadow-inner">
                                    <Square className="text-white/60 w-3 h-3 fill-current" />
                                    <div className="ml-2 h-1.5 flex-1 bg-black/60 rounded-full shadow-inner border-b border-white/10"></div>
                                </div>
                            </div>
                        ) : (
                            <div className="w-full p-6 bg-white/5 border border-white/10 rounded-lg text-center backdrop-blur-sm">
                                <AlertTriangle className="text-yellow-500 mx-auto mb-3 w-10 h-10" />
                                <p className="text-gray-300 text-sm mb-4">
                                    This video requires either HTML5 video support or Adobe Flash Player.
                                </p>
                                <button className="px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 rounded-md text-white font-medium text-sm hover:from-orange-500 hover:to-red-500 transition-all shadow-lg hover:shadow-orange-500/25">
                                    Download MP4 Version
                                </button>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
            {/* Code Output Area */}
            <div className="bg-[#0a0a0a] p-4 border-t border-white/10">
                <h4 className="text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">Example Implementation</h4>
                <pre className="text-xs font-mono text-gray-300 overflow-x-auto whitespace-pre-wrap">
                    {`<video width="960" height="540" controls preload="metadata">
    <source src="video.mp4" type='video/mp4' />
    <source src="video.webm" type='video/webm' />
    
    <div id="flash-fallback">
        <p>This video requires HTML5 or Flash. <a href="video.mp4">Download</a>.</p>
    </div>
</video>`}
                </pre>
            </div>
        </div>
    );
};

export default VideoSimulator;
