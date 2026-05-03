import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function CssBorderRadiusSimulator() {
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(150);
  const [borderWidth, setBorderWidth] = useState(5);
  const [borderRadius, setBorderRadius] = useState('0px');
  const [boxSizing, setBoxSizing] = useState('border-box');

  const containerStyle = {
    width: `${width}px`,
    height: `${height}px`,
    border: `${borderWidth}px solid #38bdf8`,
    borderRadius: borderRadius,
    boxSizing: boxSizing,
    backgroundColor: '#0ea5e920',
    transition: 'all 0.3s ease',
  };

  return (
    <div className="bg-[#0f172a] rounded-xl border border-gray-800 shadow-2xl p-6 text-gray-200 font-sans my-8">
      <h3 className="text-xl font-bold text-sky-400 mb-4 flex items-center gap-2">
        <span className="text-2xl">📐</span> The Anatomy of Borders Simulator
      </h3>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Width: {width}px</label>
            <input type="range" min="100" max="400" value={width} onChange={(e) => setWidth(e.target.value)} className="w-full accent-sky-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Height: {height}px</label>
            <input type="range" min="50" max="300" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full accent-sky-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Border Width: {borderWidth}px</label>
            <input type="range" min="0" max="40" value={borderWidth} onChange={(e) => setBorderWidth(e.target.value)} className="w-full accent-sky-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Border Radius: {borderRadius}</label>
            <div className="flex flex-wrap gap-2 mb-2">
              <button onClick={() => setBorderRadius('0px')} className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded text-xs">0px (Square)</button>
              <button onClick={() => setBorderRadius('20px')} className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded text-xs">20px (Rounded)</button>
              <button onClick={() => setBorderRadius('50%')} className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded text-xs">50% (Circle/Ellipse)</button>
              <button onClick={() => setBorderRadius('9999px')} className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded text-xs">9999px (Pill)</button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Box Sizing: {boxSizing}</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="boxSizing" checked={boxSizing === 'content-box'} onChange={() => setBoxSizing('content-box')} className="accent-sky-500" />
                <span className="text-sm">content-box</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="boxSizing" checked={boxSizing === 'border-box'} onChange={() => setBoxSizing('border-box')} className="accent-sky-500" />
                <span className="text-sm">border-box</span>
              </label>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              {boxSizing === 'content-box' ? 'Notice how the border expands outwards, making the total size larger than the defined width/height.' : 'Notice how the border pushes inwards. The total size remains exactly as the defined width/height.'}
            </p>
          </div>
        </div>

        <div className="flex-1 bg-[#1e293b] rounded-xl p-4 flex items-center justify-center min-h-[350px] relative overflow-hidden border border-gray-700/50 relative">
          {/* Reference guidelines for width and height */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
             <div style={{ width: `${width}px`, height: `${height}px`, border: '1px dashed white' }} />
          </div>
          
          <div style={containerStyle} className="flex items-center justify-center relative z-10">
            <div className="text-center">
              <span className="font-bold text-sky-300">Content</span>
              <div className="text-xs text-sky-400 mt-1 opacity-70">
                {boxSizing === 'content-box' ? `${Number(width) + Number(borderWidth) * 2} x ${Number(height) + Number(borderWidth) * 2}px total` : `${width} x ${height}px total`}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 bg-[#0d1117] p-4 rounded-lg border border-gray-800 font-mono text-sm text-gray-300">
        <div className="text-gray-500 mb-1">/* Generated CSS */</div>
        <div className="text-pink-400">.element {'{'}</div>
        <div className="pl-4">
          <span className="text-sky-300">width:</span> <span className="text-orange-300">{width}px</span>;<br />
          <span className="text-sky-300">height:</span> <span className="text-orange-300">{height}px</span>;<br />
          <span className="text-sky-300">border:</span> <span className="text-orange-300">{borderWidth}px solid #38bdf8</span>;<br />
          <span className="text-sky-300">border-radius:</span> <span className="text-orange-300">{borderRadius}</span>;<br />
          <span className="text-sky-300">box-sizing:</span> <span className="text-orange-300">{boxSizing}</span>;
        </div>
        <div className="text-pink-400">{'}'}</div>
      </div>
    </div>
  );
}
