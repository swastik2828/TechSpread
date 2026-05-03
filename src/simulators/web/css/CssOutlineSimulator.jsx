import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function CssOutlineSimulator() {
  const [outlineWidth, setOutlineWidth] = useState(3);
  const [outlineOffset, setOutlineOffset] = useState(4);
  const [outlineStyle, setOutlineStyle] = useState('solid');
  const [outlineColor, setOutlineColor] = useState('#0ea5e9'); // sky-500
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="bg-[#0f172a] rounded-xl border border-gray-800 shadow-2xl p-6 text-gray-200 font-sans my-8">
      <h3 className="text-xl font-bold text-sky-400 mb-4 flex items-center gap-2">
        <span className="text-2xl">🔍</span> Accessibility & Outline Simulator
      </h3>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Outline Width: {outlineWidth}px</label>
            <input type="range" min="0" max="10" value={outlineWidth} onChange={(e) => setOutlineWidth(e.target.value)} className="w-full accent-sky-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Outline Offset: {outlineOffset}px</label>
            <input type="range" min="-10" max="20" value={outlineOffset} onChange={(e) => setOutlineOffset(e.target.value)} className="w-full accent-sky-500" />
            <p className="text-xs text-gray-400 mt-1">Offset pushes the outline away from the border, creating a highly visible "double ring" effect.</p>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Outline Style</label>
            <select value={outlineStyle} onChange={(e) => setOutlineStyle(e.target.value)} className="w-full bg-[#1e293b] border border-gray-700 rounded p-2 text-white">
              <option value="solid">Solid</option>
              <option value="dashed">Dashed</option>
              <option value="dotted">Dotted</option>
              <option value="double">Double</option>
            </select>
          </div>
          <div>
             <label className="block text-sm font-semibold mb-2">Simulate Interaction</label>
             <button 
                onClick={() => setIsActive(!isActive)}
                className={`px-4 py-2 rounded-lg font-bold transition-all ${isActive ? 'bg-sky-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
             >
                {isActive ? 'Remove Focus State' : 'Trigger :focus-visible'}
             </button>
             <p className="text-xs text-gray-400 mt-2">In real life, this triggers when a keyboard user tabs to an interactive element.</p>
          </div>
        </div>

        <div className="flex-1 bg-[#1e293b] rounded-xl p-8 flex flex-col items-center justify-center min-h-[350px] border border-gray-700/50">
          <p className="text-center text-sm text-gray-400 mb-8 max-w-xs">
            Notice how the outline does not push other elements around. It renders <span className="font-bold text-white">on top</span> of the layout.
          </p>
          
          <div className="flex gap-4 items-center">
            <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center text-xs text-gray-500">Neighbor</div>
            
            <button
              style={{
                outline: isActive ? `${outlineWidth}px ${outlineStyle} ${outlineColor}` : 'none',
                outlineOffset: isActive ? `${outlineOffset}px` : '0px',
                transition: 'outline 0.1s, outline-offset 0.1s'
              }}
              className="px-6 py-3 bg-white text-gray-900 font-bold rounded-lg cursor-pointer"
            >
              Interactive Button
            </button>
            
            <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center text-xs text-gray-500">Neighbor</div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 bg-[#0d1117] p-4 rounded-lg border border-gray-800 font-mono text-sm text-gray-300">
        <div className="text-gray-500 mb-1">/* Generated CSS */</div>
        <div className="text-pink-400">button:focus-visible {'{'}</div>
        <div className="pl-4">
          <span className="text-sky-300">outline:</span> <span className="text-orange-300">{outlineWidth}px {outlineStyle} {outlineColor}</span>;<br />
          <span className="text-sky-300">outline-offset:</span> <span className="text-orange-300">{outlineOffset}px</span>;
        </div>
        <div className="text-pink-400">{'}'}</div>
      </div>
    </div>
  );
}
