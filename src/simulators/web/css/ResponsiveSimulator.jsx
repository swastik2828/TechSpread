import React, { useState } from 'react';
import { Maximize2, Smartphone, Tablet, Monitor, MousePointerClick } from 'lucide-react';

const ResponsiveSimulator = () => {
    // Default to tablet width for a solid middle-ground experience
    const [simulatedWidth, setSimulatedWidth] = useState(768);

    const getDeviceLabel = () => {
        if (simulatedWidth < 480) return "Mobile";
        if (simulatedWidth < 768) return "Phablet";
        if (simulatedWidth < 1024) return "Tablet";
        return "Desktop";
    };

    return (
        <div className="bg-[#0d1117] border border-gray-800 rounded-xl overflow-hidden my-8 w-full shadow-2xl">
            {/* Control Panel (Header) */}
            <div className="bg-[#161b22] border-b border-gray-800 p-4 sm:p-5">
                <div className="flex flex-col gap-5">
                    {/* Top Row: Title & Device Presets */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="flex items-center gap-2 shrink-0">
                            <Maximize2 className="text-sky-400" size={20} />
                            <h3 className="text-white font-bold text-sm sm:text-base">Responsive Simulator</h3>
                        </div>
                        
                        <div className="flex bg-gray-900 rounded-lg p-1 border border-gray-800 w-full sm:w-auto overflow-x-auto scrollbar-none">
                            <button onClick={() => setSimulatedWidth(375)} className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 py-1.5 rounded-md text-sm transition-all shrink-0 ${simulatedWidth === 375 ? 'bg-sky-500/20 text-sky-400' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}>
                                <Smartphone size={16}/> <span className="hidden sm:inline">Mobile</span>
                            </button>
                            <button onClick={() => setSimulatedWidth(768)} className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 py-1.5 rounded-md text-sm transition-all shrink-0 ${simulatedWidth === 768 ? 'bg-sky-500/20 text-sky-400' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}>
                                <Tablet size={16}/> <span className="hidden sm:inline">Tablet</span>
                            </button>
                            <button onClick={() => setSimulatedWidth(1024)} className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 py-1.5 rounded-md text-sm transition-all shrink-0 ${simulatedWidth === 1024 ? 'bg-sky-500/20 text-sky-400' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}>
                                <Monitor size={16}/> <span className="hidden sm:inline">Desktop</span>
                            </button>
                        </div>
                    </div>

                    {/* Bottom Row: Precision Slider & Readout */}
                    <div className="flex items-center gap-4">
                        <span className="text-gray-400 text-xs sm:text-sm font-mono w-16 shrink-0 text-right">{simulatedWidth}px</span>
                        <input 
                            type="range" 
                            min="320" 
                            max="1200" 
                            value={simulatedWidth}
                            onChange={(e) => setSimulatedWidth(Number(e.target.value))}
                            className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
                        />
                        <span className="text-xs sm:text-sm font-bold text-sky-400 bg-sky-500/10 px-2 py-1 rounded border border-sky-500/20 w-20 text-center shrink-0">
                            {getDeviceLabel()}
                        </span>
                    </div>
                </div>
            </div>
            
            {/* THE FIX: True Native Resolution with Horizontal Panning */}
            <div 
                className="w-full relative bg-[#0a0a0a] overflow-x-auto overflow-y-hidden custom-scrollbar py-6 sm:py-8"
                style={{ 
                    backgroundImage: 'radial-gradient(#1f2937 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }}
            >
                {/* Mobile Hint Overlay */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 text-gray-500 text-[10px] sm:hidden flex items-center gap-1 z-10 animate-pulse bg-[#0a0a0a] px-2 rounded-full">
                    <MousePointerClick size={12} /> Swipe to pan horizontally
                </div>

                {/* The Simulated "Mini-Browser" Window */}
                <div 
                    className="bg-[#0d1117] border border-gray-700 rounded-lg shadow-2xl overflow-hidden flex flex-col transition-all duration-300 ease-out mx-auto"
                    style={{ 
                        width: `${simulatedWidth}px`, 
                        height: `450px`, // Fixed vertical height. No more shrinking.
                    }}
                >
                    {/* Mock Browser Header */}
                    <div className="bg-[#161b22] border-b border-gray-700 h-10 flex items-center px-4 gap-2 shrink-0">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        <div className="mx-auto bg-[#0d1117] border border-gray-700 rounded-md px-16 sm:px-24 py-1 flex items-center text-[10px] text-gray-500 font-mono">
                            https://techspread.co.in
                        </div>
                    </div>

                    {/* Mock Website Content - True 1:1 Rendering */}
                    <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 sm:p-8 text-white custom-scrollbar">
                        
                        {/* Responsive Nav */}
                        <header className="flex justify-between items-center mb-8 pb-4 border-b border-gray-800">
                            <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400 text-xl tracking-wide">
                                Techspread
                            </div>
                            {/* Reacts natively to the simulated width */}
                            {simulatedWidth >= 768 ? (
                                <nav className="flex gap-6 text-sm text-gray-400 font-medium">
                                    <span className="hover:text-white cursor-pointer transition-colors">Services</span>
                                    <span className="hover:text-white cursor-pointer transition-colors">Portfolio</span>
                                    <span className="text-sky-400 cursor-pointer">Contact Us</span>
                                </nav>
                            ) : (
                                <div className="w-6 h-5 flex flex-col justify-between cursor-pointer">
                                    <div className="w-full h-1 bg-gray-400 rounded"></div>
                                    <div className="w-full h-1 bg-gray-400 rounded"></div>
                                    <div className="w-full h-1 bg-gray-400 rounded"></div>
                                </div>
                            )}
                        </header>

                        {/* Fluid Hero Section */}
                        <section className="mb-10 text-center sm:text-left">
                            <h1 
                                style={{ fontSize: `clamp(1.5rem, ${simulatedWidth / 250}rem, 2.5rem)` }} 
                                className="font-extrabold leading-tight mb-4"
                            >
                                True 1:1 Responsive Design
                            </h1>
                            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto sm:mx-0">
                                This window is rendering exactly at {simulatedWidth}px width. Because we aren't using zoom illusions anymore, a 16px font is always exactly 16px. 
                            </p>
                        </section>

                        {/* Intrinsic Auto-Fit Grid */}
                        <section>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: `repeat(auto-fit, minmax(220px, 1fr))`,
                                gap: '16px'
                            }}>
                                {[1, 2, 3].map((item) => (
                                    <div key={item} className="bg-[#161b22] border border-gray-800 hover:border-sky-500/50 transition-colors p-5 rounded-xl flex flex-col gap-3 shadow-lg">
                                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500/20 to-cyan-500/20 text-sky-400 flex items-center justify-center font-bold border border-sky-500/30">
                                            {item}
                                        </div>
                                        <h3 className="text-white font-bold text-sm mt-1">Grid Item</h3>
                                        <p className="text-xs text-gray-500 leading-relaxed">
                                            This card automatically wraps based on the available space provided by the parent container.
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResponsiveSimulator;