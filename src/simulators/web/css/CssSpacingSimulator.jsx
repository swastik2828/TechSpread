import React, { useState } from 'react';
import { AlignLeft, AlignCenter, AlignRight, AlignJustify, Type, RotateCcw } from 'lucide-react';

export default function CssSpacingSimulator() {
  const [lineHeight, setLineHeight] = useState('1.5');
  const [letterSpacing, setLetterSpacing] = useState('0em');
  const [wordSpacing, setWordSpacing] = useState('0em');
  const [textAlign, setTextAlign] = useState('left');
  const [textDecoration, setTextDecoration] = useState('none');
  const [textTransform, setTextTransform] = useState('none');
  const [textOverflow, setTextOverflow] = useState('none');

  const handleReset = () => {
    setLineHeight('1.5');
    setLetterSpacing('0em');
    setWordSpacing('0em');
    setTextAlign('left');
    setTextDecoration('none');
    setTextTransform('none');
    setTextOverflow('none');
  };

  const getCodeString = () => {
    let out = [];
    if (lineHeight !== '1.5') out.push(`line-height: ${lineHeight};`);
    if (letterSpacing !== '0em') out.push(`letter-spacing: ${letterSpacing};`);
    if (wordSpacing !== '0em') out.push(`word-spacing: ${wordSpacing};`);
    if (textAlign !== 'left') out.push(`text-align: ${textAlign};`);
    if (textDecoration !== 'none') out.push(`text-decoration: ${textDecoration};`);
    if (textTransform !== 'none') out.push(`text-transform: ${textTransform};`);
    
    if (textOverflow === 'ellipsis') {
       out.push(`white-space: nowrap;`);
       out.push(`overflow: hidden;`);
       out.push(`text-overflow: ellipsis;`);
    }

    if (out.length === 0) return '/* No properties changed from default */';
    return out.join('\n');
  };

  return (
    <div className="my-8 rounded-2xl bg-[#0f1117] border border-gray-800 shadow-2xl overflow-hidden">
      <div className="p-4 border-b border-gray-800 flex items-center justify-between bg-[#161b22]">
        <div className="flex items-center gap-2">
          <AlignLeft className="text-cyan-400 w-5 h-5" />
          <h3 className="font-semibold text-gray-200">Text Formatting Simulator</h3>
        </div>
        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs font-medium transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Controls */}
        <div className="lg:col-span-4 p-6 border-b lg:border-b-0 lg:border-r border-gray-800 space-y-5 bg-[#0f1117] h-full overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
          
          <div className="space-y-3">
             <div className="flex justify-between">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Line Height</label>
                <span className="text-xs text-cyan-400 font-mono">{lineHeight}</span>
             </div>
             <input type="range" min="0.8" max="3" step="0.1" value={lineHeight} onChange={(e) => setLineHeight(e.target.value)} className="w-full accent-cyan-500" />
          </div>

          <div className="space-y-3">
             <div className="flex justify-between">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Letter Spacing</label>
                <span className="text-xs text-cyan-400 font-mono">{letterSpacing}</span>
             </div>
             <input type="range" min="-0.1" max="0.5" step="0.05" value={parseFloat(letterSpacing)} onChange={(e) => setLetterSpacing(e.target.value + 'em')} className="w-full accent-cyan-500" />
          </div>

          <div className="space-y-3">
             <div className="flex justify-between">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Word Spacing</label>
                <span className="text-xs text-cyan-400 font-mono">{wordSpacing}</span>
             </div>
             <input type="range" min="-0.2" max="2" step="0.1" value={parseFloat(wordSpacing)} onChange={(e) => setWordSpacing(e.target.value + 'em')} className="w-full accent-cyan-500" />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Text Align</label>
            <div className="flex gap-2">
              {[ {id: 'left', icon: AlignLeft}, {id: 'center', icon: AlignCenter}, {id: 'right', icon: AlignRight}, {id: 'justify', icon: AlignJustify} ].map(item => (
                <button
                  key={item.id}
                  onClick={() => setTextAlign(item.id)}
                  title={`text-align: ${item.id}`}
                  className={`flex-1 flex justify-center py-2 rounded-lg transition-all ${textAlign === item.id ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50' : 'bg-[#1c212b] text-gray-400 border border-gray-800'}`}
                >
                  <item.icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Decoration & Transform</label>
            <select value={textDecoration} onChange={(e) => setTextDecoration(e.target.value)} className="w-full bg-[#1c212b] text-sm text-gray-300 border border-gray-700 rounded-lg p-2 outline-none focus:border-cyan-500 transition-colors">
              <option value="none">Decoration: None</option>
              <option value="underline">Underline</option>
              <option value="line-through">Line Through</option>
              <option value="overline">Overline</option>
              <option value="underline wavy red">Wavy Underline (Modern)</option>
            </select>
            <select value={textTransform} onChange={(e) => setTextTransform(e.target.value)} className="w-full bg-[#1c212b] text-sm text-gray-300 border border-gray-700 rounded-lg p-2 outline-none focus:border-cyan-500 transition-colors">
              <option value="none">Transform: None</option>
              <option value="uppercase">UPPERCASE</option>
              <option value="lowercase">lowercase</option>
              <option value="capitalize">Capitalize Words</option>
            </select>
          </div>

          <div className="space-y-2">
             <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Truncation (Ellipsis)</label>
             <div className="flex gap-2">
                <button onClick={() => setTextOverflow('none')} className={`flex-1 py-1.5 rounded-lg text-xs transition-all ${textOverflow === 'none' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50' : 'bg-[#1c212b] text-gray-400 border border-gray-800'}`}>Wrap Text</button>
                <button onClick={() => setTextOverflow('ellipsis')} className={`flex-1 py-1.5 rounded-lg text-xs transition-all ${textOverflow === 'ellipsis' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50' : 'bg-[#1c212b] text-gray-400 border border-gray-800'}`}>Truncate (Ellipsis)</button>
             </div>
          </div>
        </div>

        {/* Output */}
        <div className="lg:col-span-8 flex flex-col relative bg-gradient-to-br from-cyan-900/10 to-transparent">
           {/* Preview Block */}
           <div className="flex-1 p-8 flex flex-col justify-center min-h-[300px]">
             
             <div
                className={`bg-white/5 border border-white/10 rounded-xl p-6 text-gray-100 ${textOverflow === 'ellipsis' ? 'w-[250px] mx-auto' : 'w-full'}`}
             >
                <p 
                   style={{
                      lineHeight,
                      letterSpacing,
                      wordSpacing,
                      textAlign,
                      textDecoration,
                      textTransform,
                      ...(textOverflow === 'ellipsis' ? {
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                      } : {})
                   }}
                   className="text-lg"
                >
                  "Good typography is like a transparent goblet. You should be able to see the wine clearly, without being distracted by the goblet." <br /><br />
                  - Beatrice Warde
                </p>
             </div>

           </div>
           
           <div className="bg-[#0b0e14] p-4 border-t border-gray-800">
               <div className="flex items-center justify-between mb-2">
                   <span className="text-xs text-gray-500 uppercase font-semibold">Generated CSS</span>
               </div>
               <pre className="text-sm font-mono text-cyan-300 overflow-x-auto p-2 bg-black/40 rounded-lg"><code>{getCodeString()}</code></pre>
           </div>
        </div>
      </div>
    </div>
  );
}
