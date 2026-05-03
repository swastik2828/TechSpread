import React, { useState } from 'react';

export default function CssDropShadowSimulator() {
  const [offsetX, setOffsetX] = useState(8);
  const [offsetY, setOffsetY] = useState(8);
  const [blur, setBlur] = useState(12);
  const [opacity, setOpacity] = useState(0.6);
  
  const boxShadowString = `${offsetX}px ${offsetY}px ${blur}px rgba(0, 0, 0, ${opacity})`;
  const filterString = `drop-shadow(${offsetX}px ${offsetY}px ${blur}px rgba(0, 0, 0, ${opacity}))`;

  return (
    <div className="bg-[#0f172a] rounded-xl border border-gray-800 shadow-2xl p-6 text-gray-200 font-sans my-8">
      <h3 className="text-xl font-bold text-sky-400 mb-4 flex items-center gap-2">
        <span className="text-2xl">🌟</span> Alpha-Mask drop-shadow() vs box-shadow
      </h3>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-6">
          <p className="text-sm text-gray-400 mb-4">
            Notice how <code className="text-sky-300">box-shadow</code> creates a rectangular shadow around the image container, while <code className="text-sky-300">filter: drop-shadow()</code> hugs the actual visible pixels (alpha channel) of the transparent PNG/SVG.
          </p>
          <div>
            <div className="flex justify-between mb-1">
              <label className="text-sm font-semibold">X-Offset</label>
              <span className="text-xs text-sky-400 font-mono">{offsetX}px</span>
            </div>
            <input type="range" min="-30" max="30" value={offsetX} onChange={(e) => setOffsetX(e.target.value)} className="w-full accent-sky-500" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <label className="text-sm font-semibold">Y-Offset</label>
              <span className="text-xs text-sky-400 font-mono">{offsetY}px</span>
            </div>
            <input type="range" min="-30" max="30" value={offsetY} onChange={(e) => setOffsetY(e.target.value)} className="w-full accent-sky-500" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <label className="text-sm font-semibold">Blur Radius</label>
              <span className="text-xs text-sky-400 font-mono">{blur}px</span>
            </div>
            <input type="range" min="0" max="50" value={blur} onChange={(e) => setBlur(e.target.value)} className="w-full accent-sky-500" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <label className="text-sm font-semibold">Shadow Opacity</label>
              <span className="text-xs text-sky-400 font-mono">{opacity}</span>
            </div>
            <input type="range" min="0" max="1" step="0.1" value={opacity} onChange={(e) => setOpacity(e.target.value)} className="w-full accent-sky-500" />
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <div className="flex-1 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">box-shadow</div>
            <div 
               className="w-32 h-32 flex items-center justify-center text-6xl"
               style={{ boxShadow: boxShadowString, backgroundColor: 'transparent' }}
            >
              ⭐
            </div>
          </div>
          
          <div className="flex-1 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 flex flex-col items-center justify-center relative overflow-hidden">
             <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">filter: drop-shadow()</div>
             <div 
               className="text-6xl flex items-center justify-center"
               style={{ filter: filterString }}
            >
              ⭐
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#0d1117] p-4 rounded-lg border border-gray-800 font-mono text-sm text-gray-300">
          <div className="text-gray-500 mb-1">/* Incorrect Approach */</div>
          <div className="text-pink-400">.star-icon {'{'}</div>
          <div className="pl-4">
            <span className="text-red-400">box-shadow:</span> <span className="text-orange-300">{boxShadowString}</span>;
          </div>
          <div className="text-pink-400">{'}'}</div>
        </div>
        <div className="bg-[#0d1117] p-4 rounded-lg border border-gray-800 font-mono text-sm text-gray-300">
          <div className="text-gray-500 mb-1">/* Professional Approach */</div>
          <div className="text-pink-400">.star-icon {'{'}</div>
          <div className="pl-4">
            <span className="text-green-400">filter:</span> <span className="text-orange-300">{filterString}</span>;
          </div>
          <div className="text-pink-400">{'}'}</div>
        </div>
      </div>
    </div>
  );
}
