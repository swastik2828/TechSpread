import React, { useState } from 'react';

export default function CssBoxShadowSimulator() {
  const [offsetX, setOffsetX] = useState(10);
  const [offsetY, setOffsetY] = useState(10);
  const [blur, setBlur] = useState(15);
  const [spread, setSpread] = useState(-5);
  const [opacity, setOpacity] = useState(0.5);
  const [isInset, setIsInset] = useState(false);

  const shadowString = `${isInset ? 'inset ' : ''}${offsetX}px ${offsetY}px ${blur}px ${spread}px rgba(0, 0, 0, ${opacity})`;

  return (
    <div className="bg-[#0f172a] rounded-xl border border-gray-800 shadow-2xl p-6 text-gray-200 font-sans my-8">
      <h3 className="text-xl font-bold text-sky-400 mb-4 flex items-center gap-2">
        <span className="text-2xl">📦</span> Box Shadow Dimensionality Simulator
      </h3>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-5">
          <div>
            <div className="flex justify-between mb-1">
              <label className="text-sm font-semibold">X-Offset (Horizontal)</label>
              <span className="text-xs text-sky-400 font-mono">{offsetX}px</span>
            </div>
            <input type="range" min="-50" max="50" value={offsetX} onChange={(e) => setOffsetX(e.target.value)} className="w-full accent-sky-500" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <label className="text-sm font-semibold">Y-Offset (Vertical)</label>
              <span className="text-xs text-sky-400 font-mono">{offsetY}px</span>
            </div>
            <input type="range" min="-50" max="50" value={offsetY} onChange={(e) => setOffsetY(e.target.value)} className="w-full accent-sky-500" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <label className="text-sm font-semibold">Blur Radius</label>
              <span className="text-xs text-sky-400 font-mono">{blur}px</span>
            </div>
            <input type="range" min="0" max="100" value={blur} onChange={(e) => setBlur(e.target.value)} className="w-full accent-sky-500" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <label className="text-sm font-semibold">Spread Radius</label>
              <span className="text-xs text-sky-400 font-mono">{spread}px</span>
            </div>
            <input type="range" min="-50" max="50" value={spread} onChange={(e) => setSpread(e.target.value)} className="w-full accent-sky-500" />
            <p className="text-xs text-gray-500 mt-1">Tip: A negative spread with a large blur creates realistic, grounded shadows.</p>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <label className="text-sm font-semibold">Shadow Opacity (Alpha)</label>
              <span className="text-xs text-sky-400 font-mono">{opacity}</span>
            </div>
            <input type="range" min="0" max="1" step="0.05" value={opacity} onChange={(e) => setOpacity(e.target.value)} className="w-full accent-sky-500" />
          </div>
          <div>
            <label className="flex items-center gap-2 cursor-pointer mt-4">
              <input type="checkbox" checked={isInset} onChange={(e) => setIsInset(e.target.checked)} className="accent-sky-500 w-4 h-4" />
              <span className="text-sm font-semibold">Inset (Inner Shadow)</span>
            </label>
          </div>
        </div>

        <div className="flex-1 bg-gradient-to-br from-gray-200 to-white rounded-xl p-8 flex items-center justify-center min-h-[350px] border border-gray-300">
          <div 
            className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center transition-shadow duration-75"
            style={{ boxShadow: shadowString }}
          >
            <span className="text-gray-400 font-bold text-lg select-none">UI Card</span>
          </div>
        </div>
      </div>
      
      <div className="mt-6 bg-[#0d1117] p-4 rounded-lg border border-gray-800 font-mono text-sm text-gray-300">
        <div className="text-gray-500 mb-1">/* Generated CSS */</div>
        <div className="text-pink-400">.card {'{'}</div>
        <div className="pl-4">
          <span className="text-sky-300">box-shadow:</span> <span className="text-orange-300">{shadowString}</span>;
        </div>
        <div className="text-pink-400">{'}'}</div>
      </div>
    </div>
  );
}
