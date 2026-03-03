import React, { useState, useEffect } from 'react';
import { Settings, Image as ImageIcon, CheckCircle, Zap, Eye, MonitorSmartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MediaOptimizationSimulator = () => {
    const [optimizationLevel, setOptimizationLevel] = useState('unoptimized'); // 'unoptimized', 'basic', 'advanced'
    const [scrollPosition, setScrollPosition] = useState(0);

    // Simulate viewport metrics
    const viewportHeight = 300;
    const totalHeight = 1200;

    // Simulate simulated images properties
    const images = [
        { id: 1, pos: 50, originalSize: "2.4 MB (JPEG)", optimizedSize: "180 KB (WebP)", avifSize: "110 KB (AVIF)" },
        { id: 2, pos: 350, originalSize: "1.8 MB (PNG)", optimizedSize: "140 KB (WebP)", avifSize: "95 KB (AVIF)" },
        { id: 3, pos: 650, originalSize: "3.2 MB (JPEG)", optimizedSize: "210 KB (WebP)", avifSize: "145 KB (AVIF)" },
        { id: 4, pos: 950, originalSize: "1.5 MB (JPEG)", optimizedSize: "120 KB (WebP)", avifSize: "80 KB (AVIF)" }
    ];

    // Check if an image is in viewport based on scroll
    const isVisible = (pos) => (scrollPosition + viewportHeight + 100) >= pos && scrollPosition <= (pos + 200);

    const isLoaded = (imgPos) => {
        if (optimizationLevel === 'unoptimized') return true; // All load immediately
        if (optimizationLevel === 'basic') return isVisible(imgPos) || scrollPosition > 0; // Simple lazy loading
        return isVisible(imgPos); // Strict eager/lazy separation
    };

    const getNetworkUsage = () => {
        let loadedImgs = images.filter(img => isLoaded(img.pos));
        let totalOriginal = 8.9; // 2.4+1.8+3.2+1.5 = 8.9 MB
        let totalWebp = 0.65;    // 180+140+210+120 = 650 KB = 0.65 MB
        let totalAvif = 0.43;    // 110+95+145+80 = 430 KB = 0.43 MB

        if (optimizationLevel === 'unoptimized') return `${totalOriginal.toFixed(1)} MB (${images.length}/4 loaded)`;

        // Calculate based on what's visible
        let currentSize = 0;
        loadedImgs.forEach((_, i) => {
            if (optimizationLevel === 'basic') currentSize += (parseFloat(images[i].optimizedSize) / 1000);
            if (optimizationLevel === 'advanced') currentSize += (parseFloat(images[i].avifSize) / 1000);
        });

        return `${currentSize.toFixed(2)} MB (${loadedImgs.length}/4 loaded)`;
    };


    return (
        <div className="bg-[#1a1a1a] rounded-xl border border-white/10 overflow-hidden my-8">
            <div className="px-4 py-3 border-b border-white/10 bg-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Zap className="text-orange-400" size={20} />
                    <h3 className="text-white font-medium text-lg">Media Optimization & Loading Simulator</h3>
                </div>
            </div>

            <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Control Panel */}
                <div className="space-y-6">
                    <div>
                        <h4 className="text-gray-300 font-medium mb-3 flex items-center gap-2">
                            <Settings size={18} className="text-blue-400" />
                            Optimization Strategy
                        </h4>

                        <div className="space-y-3">
                            <label className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${optimizationLevel === 'unoptimized' ? 'bg-orange-900/20 border-orange-500/50' : 'bg-[#111] border-white/10 hover:bg-white/5'}`}>
                                <input type="radio" value="unoptimized" checked={optimizationLevel === 'unoptimized'} onChange={() => setOptimizationLevel('unoptimized')} className="mt-1" />
                                <div>
                                    <h5 className="text-white font-medium text-sm">Legacy HTML</h5>
                                    <p className="text-xs text-gray-400 mt-1">JPEG/PNG formats. All images loaded immediately on page request.</p>
                                </div>
                            </label>

                            <label className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${optimizationLevel === 'basic' ? 'bg-orange-900/20 border-orange-500/50' : 'bg-[#111] border-white/10 hover:bg-white/5'}`}>
                                <input type="radio" value="basic" checked={optimizationLevel === 'basic'} onChange={() => setOptimizationLevel('basic')} className="mt-1" />
                                <div>
                                    <h5 className="text-white font-medium text-sm">Modern WebP & Lazy Loading</h5>
                                    <p className="text-xs text-gray-400 mt-1">Uses WebP encoding. Below-the-fold images use `loading="lazy"`.</p>
                                </div>
                            </label>

                            <label className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${optimizationLevel === 'advanced' ? 'bg-orange-900/20 border-orange-500/50' : 'bg-[#111] border-white/10 hover:bg-white/5'}`}>
                                <input type="radio" value="advanced" checked={optimizationLevel === 'advanced'} onChange={() => setOptimizationLevel('advanced')} className="mt-1" />
                                <div>
                                    <h5 className="text-white font-medium text-sm">Advanced Picture Element</h5>
                                    <p className="text-xs text-gray-400 mt-1">Uses AVIF with WebP fallback via `&lt;picture&gt;`. Strict viewport boundaries.</p>
                                </div>
                            </label>
                        </div>
                    </div>

                    <div className="bg-[#111] p-4 rounded-lg border border-white/5 space-y-3">
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-400 flex items-center gap-2"><MonitorSmartphone size={16} /> Initial Page Weight (Network)</span>
                            <span className={`font-mono font-medium ${optimizationLevel === 'unoptimized' ? 'text-red-400' : 'text-green-400'}`}>{getNetworkUsage()}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-400 flex items-center gap-2"><Eye size={16} /> Elements offscreen loaded</span>
                            <span className={`font-mono font-medium ${optimizationLevel === 'unoptimized' ? 'text-red-400' : 'text-green-400'}`}>
                                {images.filter(img => isLoaded(img.pos) && !isVisible(img.pos)).length}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Simulation Screen */}
                <div className="bg-[#050505] rounded-lg border border-white/10 overflow-hidden relative" style={{ height: "400px" }}>

                    {/* Simulated Browser Navbar */}
                    <div className="h-8 bg-[#222] border-b border-white/10 flex items-center px-3 gap-2 sticky top-0 z-20">
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                        </div>
                        <div className="bg-[#111] text-[10px] text-gray-400 rounded px-2 py-0.5 ml-2 border border-white/5 w-48 text-center flex-1">
                            example.com/blog ({optimizationLevel})
                        </div>
                    </div>

                    {/* Scrollable Container */}
                    <div
                        className="h-full overflow-y-auto relative scroll-smooth scrollbar-thin scrollbar-thumb-gray-800"
                        onScroll={(e) => setScrollPosition(e.target.scrollTop)}
                    >
                        <div style={{ height: `${totalHeight}px` }} className="relative bg-[#111]">
                            {/* Content blocks to create scroll height */}
                            <div className="absolute top-0 w-full h-40 bg-gradient-to-b from-gray-900 to-transparent"></div>

                            {images.map((img, index) => (
                                <div
                                    key={img.id}
                                    className="absolute w-[80%] left-[10%] p-4 border border-white/5 rounded-lg bg-black shadow-lg"
                                    style={{ top: `${img.pos}px`, height: "180px" }}
                                >
                                    <div className="w-24 h-4 bg-gray-800 rounded mb-4"></div>
                                    <div className="w-full h-2 bg-gray-800/50 rounded mb-2"></div>
                                    <div className="w-5/6 h-2 bg-gray-800/50 rounded mb-4"></div>

                                    {/* Image Placeholder Frame */}
                                    <div className={`w-full h-24 rounded border border-dashed flex items-center justify-center transition-all ${isLoaded(img.pos) ? 'border-orange-500/30 bg-orange-900/10' : 'border-gray-700 bg-transparent'}`}>
                                        {!isLoaded(img.pos) ? (
                                            <div className="flex flex-col items-center opacity-50">
                                                <ImageIcon size={24} className="text-gray-500 mb-1" />
                                                <span className="text-[10px] text-gray-500 uppercase">Awaiting Scroll...</span>
                                            </div>
                                        ) : (
                                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
                                                <ImageIcon size={24} className="text-orange-400 mb-1" />
                                                <div className="text-[10px] bg-black/50 px-2 py-1 rounded text-gray-300 font-mono flex flex-col items-center">
                                                    <span>{optimizationLevel === 'unoptimized' ? 'Format: JPEG/PNG' : optimizationLevel === 'basic' ? 'Format: WebP' : 'Format: AVIF'}</span>
                                                    <span className="text-orange-400 font-bold mt-0.5">
                                                        Size: {optimizationLevel === 'unoptimized' ? img.originalSize : optimizationLevel === 'basic' ? img.optimizedSize : img.avifSize}
                                                    </span>
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Viewport Tracker HUD */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-[250px] border-y-2 border-l border-blue-500/50 bg-blue-500/10 pointer-events-none rounded-l">
                        <div className="absolute top-1/2 left-0 -translate-x-full text-[10px] bg-blue-500 text-white px-1 py-0.5 rounded -translate-y-1/2 font-mono whitespace-nowrap">Viewport</div>
                    </div>

                </div>
            </div>

            {/* HTML Snapshot Area */}
            <div className="bg-[#050505] p-4 font-mono text-sm border-t border-white/10 text-gray-300">
                <span className="text-xs text-gray-500 block mb-2">// Network Output Example (Image #{optimizationLevel === 'unoptimized' ? '4' : '1'})</span>
                {optimizationLevel === 'unoptimized' ? (
                    <div className="text-red-400 text-xs">
                        &lt;img src="hero.jpg" alt="Hero" /&gt;<br />
                        <span className="text-gray-500 border-l-2 border-red-500/30 pl-2 ml-2 mt-1 block">Request: GET /hero.jpg (2.4 MB)<br />Render blocking: Yes (No lazy loading)</span>
                    </div>
                ) : optimizationLevel === 'basic' ? (
                    <div className="text-yellow-400 text-xs">
                        &lt;img src="hero.webp" alt="Hero" <span className="text-white bg-white/10 px-1 rounded">loading="lazy"</span> /&gt;<br />
                        <span className="text-gray-500 border-l-2 border-yellow-500/30 pl-2 ml-2 mt-1 block">Request: GET /hero.webp (180 KB)<br />Deferred until near viewport.</span>
                    </div>
                ) : (
                    <div className="text-green-400 text-xs">
                        &lt;picture&gt;<br />
                        &nbsp;&nbsp;&lt;source srcset="hero.avif" type="image/avif" /&gt;<br />
                        &nbsp;&nbsp;&lt;source srcset="hero.webp" type="image/webp" /&gt;<br />
                        &nbsp;&nbsp;&lt;img src="hero.jpg" alt="Hero" <span className="text-white bg-white/10 px-1 rounded">loading="lazy"</span> /&gt;<br />
                        &lt;/picture&gt;<br />
                        <span className="text-gray-500 border-l-2 border-green-500/30 pl-2 ml-2 mt-1 block">Browser selects .avif based on support.<br />Request: GET /hero.avif (110 KB)<br />Deferred until near viewport.</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MediaOptimizationSimulator;
