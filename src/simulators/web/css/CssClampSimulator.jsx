import React, { useState } from 'react';
import { Smartphone, MonitorSmartphone, Monitor, MoveHorizontal } from 'lucide-react';

export default function CssClampSimulator() {
  const [viewportWidth, setViewportWidth] = useState(800);
  const [minSize, setMinSize] = useState('1.5'); // rem
  const [prefSize, setPrefSize] = useState('4'); // vw
  const [maxSize, setMaxSize] = useState('3.5'); // rem

  // Calculate pixel values just for the visual readout (assuming 1rem = 16px)
  const vwInPx = (viewportWidth * parseFloat(prefSize)) / 100;
  const minInPx = parseFloat(minSize) * 16;
  const maxInPx = parseFloat(maxSize) * 16;
  
  let currentPx = vwInPx;
  let activeState = 'scaling';
  if (vwInPx <= minInPx) {
    currentPx = minInPx;
    activeState = 'min';
  } else if (vwInPx >= maxInPx) {
    currentPx = maxInPx;
    activeState = 'max';
  }

  return (
    <div className="my-8 rounded-2xl bg-[#0f1117] border border-gray-800 shadow-2xl overflow-hidden">
      <div className="p-4 border-b border-gray-800 flex items-center justify-between bg-[#161b22]">
        <div className="flex items-center gap-2">
          <MonitorSmartphone className="text-pink-400 w-5 h-5" />
          <h3 className="font-semibold text-gray-200">Fluid Typography: clamp()</h3>
        </div>
      </div>

      <div className="p-6 border-b border-gray-800 bg-[#0f1117]">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="space-y-2">
               <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Min Size (rem)</label>
               <input type="number" step="0.1" value={minSize} onChange={(e)=>setMinSize(e.target.value)} className="w-full bg-[#1c212b] text-gray-200 border border-gray-700 rounded-lg p-2 focus:border-pink-500 outline-none" />
            </div>
            <div className="space-y-2">
               <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Preferred (vw)</label>
               <input type="number" step="0.5" value={prefSize} onChange={(e)=>setPrefSize(e.target.value)} className="w-full bg-[#1c212b] text-gray-200 border border-gray-700 rounded-lg p-2 focus:border-pink-500 outline-none" />
            </div>
            <div className="space-y-2">
               <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Max Size (rem)</label>
               <input type="number" step="0.1" value={maxSize} onChange={(e)=>setMaxSize(e.target.value)} className="w-full bg-[#1c212b] text-gray-200 border border-gray-700 rounded-lg p-2 focus:border-pink-500 outline-none" />
            </div>
         </div>

         <div className="space-y-3">
             <div className="flex justify-between items-center bg-gray-900 px-4 py-2 rounded-lg border border-gray-800">
                <Smartphone className={`w-4 h-4 ${viewportWidth < 600 ? 'text-pink-400' : 'text-gray-500'}`} />
                <span className="text-xs text-gray-400">Simulate Viewport</span>
                <Monitor className={`w-4 h-4 ${viewportWidth > 1000 ? 'text-pink-400' : 'text-gray-500'}`} />
             </div>
             <input type="range" min="320" max="1200" value={viewportWidth} onChange={(e) => setViewportWidth(parseInt(e.target.value))} className="w-full accent-pink-500 h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer" />
             <div className="text-center text-xs font-mono text-pink-400">{viewportWidth}px width</div>
         </div>
      </div>

      <div className="bg-gradient-to-br from-[#161b22] to-[#0f1117] p-8 flex flex-col items-center justify-center relative overflow-hidden min-h-[350px]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          <div 
            className="border-2 border-pink-500/50 bg-pink-500/10 rounded-xl flex items-center justify-center relative z-10 p-6 transition-all shadow-[0_0_30px_rgba(236,72,153,0.15)]"
            style={{ width: `${(viewportWidth / 1200) * 100}%`, minWidth: '280px' }}
          >
             <div className="absolute -top-3 bg-pink-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full inline-flex items-center gap-1 shadow-lg shadow-pink-500/20">
               <MoveHorizontal className="w-3 h-3" /> Viewport: {viewportWidth}px
             </div>
             
             <h1 
               className="font-bold whitespace-nowrap overflow-hidden text-center text-white"
               style={{ fontSize: `clamp(${minSize}rem, ${prefSize}vw, ${maxSize}rem)` }}
             >
                Fluid Text
             </h1>
          </div>

          <div className="flex gap-4 mt-12 z-10 w-full max-w-2xl justify-between">
             <div className={`flex flex-col items-center bg-gray-900/80 backdrop-blur border rounded-xl p-4 flex-1 ${activeState === 'min' ? 'border-pink-500 shadow-lg shadow-pink-500/20' : 'border-gray-800'}`}>
                <span className="text-xs text-gray-400 uppercase font-bold mb-1">Min Check</span>
                <span className="text-lg font-mono text-white">{minInPx.toFixed(0)}px</span>
                {activeState === 'min' && <span className="text-[10px] text-pink-400 mt-1 bg-pink-500/10 px-2 py-0.5 rounded">ACTIVE</span>}
             </div>
             <div className={`flex flex-col items-center bg-gray-900/80 backdrop-blur border rounded-xl p-4 flex-1 ${activeState === 'scaling' ? 'border-pink-500 shadow-lg shadow-pink-500/20' : 'border-gray-800'}`}>
                <span className="text-xs text-gray-400 uppercase font-bold mb-1">Scaling ({prefSize}vw)</span>
                <span className="text-lg font-mono text-white">{vwInPx.toFixed(0)}px</span>
                {activeState === 'scaling' && <span className="text-[10px] text-pink-400 mt-1 bg-pink-500/10 px-2 py-0.5 rounded">ACTIVE</span>}
             </div>
             <div className={`flex flex-col items-center bg-gray-900/80 backdrop-blur border rounded-xl p-4 flex-1 ${activeState === 'max' ? 'border-pink-500 shadow-lg shadow-pink-500/20' : 'border-gray-800'}`}>
                <span className="text-xs text-gray-400 uppercase font-bold mb-1">Max Check</span>
                <span className="text-lg font-mono text-white">{maxInPx.toFixed(0)}px</span>
                {activeState === 'max' && <span className="text-[10px] text-pink-400 mt-1 bg-pink-500/10 px-2 py-0.5 rounded">ACTIVE</span>}
             </div>
          </div>
      </div>

      <div className="bg-[#0b0e14] p-4 border-t border-gray-800 flex justify-between items-center">
          <span className="text-xs text-gray-500 uppercase font-semibold">CSS Result</span>
          <code className="text-sm font-mono text-pink-400 bg-black/40 px-3 py-1.5 rounded-lg border border-pink-500/20">
             font-size: clamp({minSize}rem, {prefSize}vw, {maxSize}rem);
          </code>
      </div>

    </div>
  );
}
