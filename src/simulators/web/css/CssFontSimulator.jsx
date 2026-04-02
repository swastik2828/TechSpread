import React, { useState } from 'react';
import { Type, RotateCcw, Monitor } from 'lucide-react';

export default function CssFontSimulator() {
  const [fontFamily, setFontFamily] = useState('"Inter", sans-serif');
  const [fontSize, setFontSize] = useState('2rem');
  const [fontWeight, setFontWeight] = useState('400');
  const [fontStyle, setFontStyle] = useState('normal');
  const [fontVariant, setFontVariant] = useState('normal');

  const handleReset = () => {
    setFontFamily('"Inter", sans-serif');
    setFontSize('2rem');
    setFontWeight('400');
    setFontStyle('normal');
    setFontVariant('normal');
  };

  const codeString = `font-family: ${fontFamily};
font-size: ${fontSize};
font-weight: ${fontWeight};
font-style: ${fontStyle};
font-variant: ${fontVariant};`;

  return (
    <div className="my-8 rounded-2xl bg-[#0f1117] border border-gray-800 shadow-2xl overflow-hidden">
      <div className="p-4 border-b border-gray-800 flex items-center justify-between bg-[#161b22]">
        <div className="flex items-center gap-2">
          <Type className="text-sky-400 w-5 h-5" />
          <h3 className="font-semibold text-gray-200">Interactive Font Simulator</h3>
        </div>
        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs font-medium transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Controls */}
        <div className="p-6 border-b lg:border-b-0 lg:border-r border-gray-800 space-y-6 bg-[#0f1117]">
          
          <div className="space-y-3">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Font Family</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                { label: 'Inter (Sans-Serif)', val: '"Inter", sans-serif' },
                { label: 'Georgia (Serif)', val: 'Georgia, serif' },
                { label: 'Courier (Monospace)', val: '"Courier New", monospace' },
                { label: 'Comic Sans (Cursive)', val: '"Comic Sans MS", cursive' },
              ].map((font) => (
                <button
                  key={font.val}
                  onClick={() => setFontFamily(font.val)}
                  className={`px-3 py-2 rounded-lg text-sm transition-all ${fontFamily === font.val ? 'bg-sky-500/20 text-sky-300 border border-sky-500/50' : 'bg-[#1c212b] text-gray-400 border border-gray-800 hover:border-gray-600'}`}
                >
                  {font.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
             <div className="flex justify-between">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Font Size</label>
                <span className="text-xs text-sky-400 font-mono">{fontSize}</span>
             </div>
             <input type="range" min="0.5" max="4" step="0.1" value={parseFloat(fontSize)} onChange={(e) => setFontSize(e.target.value + 'rem')} className="w-full accent-sky-500" />
          </div>

          <div className="space-y-3">
             <div className="flex justify-between">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Font Weight</label>
                <span className="text-xs text-sky-400 font-mono">{fontWeight}</span>
             </div>
             <input type="range" min="100" max="900" step="100" value={fontWeight} onChange={(e) => setFontWeight(e.target.value)} className="w-full accent-sky-500" />
             <div className="flex justify-between text-[10px] text-gray-500 font-mono">
               <span>100 (Thin)</span>
               <span>400 (Regular)</span>
               <span>900 (Black)</span>
             </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Font Style</label>
              <div className="flex gap-2">
                {['normal', 'italic'].map(style => (
                    <button key={style} onClick={() => setFontStyle(style)} className={`flex-1 py-1.5 rounded-lg text-xs capitalize transition-all ${fontStyle === style ? 'bg-sky-500/20 text-sky-300 border border-sky-500/50' : 'bg-[#1c212b] text-gray-400 border border-gray-800'}`}>
                      {style}
                    </button>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Font Variant</label>
              <div className="flex gap-2">
                {['normal', 'small-caps'].map(variant => (
                    <button key={variant} onClick={() => setFontVariant(variant)} className={`flex-1 py-1.5 rounded-lg text-[11px] capitalize transition-all ${fontVariant === variant ? 'bg-sky-500/20 text-sky-300 border border-sky-500/50' : 'bg-[#1c212b] text-gray-400 border border-gray-800'}`}>
                      {variant}
                    </button>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Output */}
        <div className="flex flex-col relative bg-gradient-to-br from-indigo-900/10 to-transparent">
           <div className="flex-1 p-8 flex items-center justify-center min-h-[250px] relative overflow-hidden">
             <Monitor className="absolute top-4 right-4 text-gray-800 w-24 h-24 opacity-20" />
             <div
                className="text-center w-full relative z-10"
                style={{ fontFamily, fontSize, fontWeight, fontStyle, fontVariant }}
             >
                Typography is the Art
             </div>
           </div>
           
           <div className="bg-[#0b0e14] p-4 border-t border-gray-800">
               <div className="flex items-center justify-between mb-2">
                   <span className="text-xs text-gray-500 uppercase font-semibold">Generated CSS</span>
               </div>
               <pre className="text-sm font-mono text-sky-300 overflow-x-auto p-2 bg-black/40 rounded-lg"><code>{codeString}</code></pre>
           </div>
        </div>
      </div>
    </div>
  );
}
