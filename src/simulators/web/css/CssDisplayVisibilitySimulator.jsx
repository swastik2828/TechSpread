import React, { useState } from 'react';

export default function CssDisplayVisibilitySimulator() {
  const [display, setDisplay] = useState('block');
  const [visibility, setVisibility] = useState('visible');
  const [opacity, setOpacity] = useState('1');

  const containerStyle = {
    display: display,
    visibility: visibility,
    opacity: opacity,
    width: display === 'inline' ? 'auto' : '150px',
    height: display === 'inline' ? 'auto' : '150px',
    backgroundColor: '#0ea5e920',
    border: '2px solid #38bdf8',
    padding: '10px',
    textAlign: 'center',
    margin: '5px',
    color: '#38bdf8',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  };

  return (
    <div className="bg-[#0f172a] rounded-xl border border-gray-800 shadow-2xl p-6 text-gray-200 font-sans my-8">
      <h3 className="text-xl font-bold text-sky-400 mb-4 flex items-center gap-2">
        <span className="text-2xl">👁️</span> Display & Visibility Explorer
      </h3>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Display:</label>
            <div className="flex flex-wrap gap-2 mb-2">
              <button onClick={() => setDisplay('block')} className={`px-3 py-1 rounded text-xs ${display === 'block' ? 'bg-sky-500 text-white' : 'bg-gray-800 hover:bg-gray-700'}`}>block</button>
              <button onClick={() => setDisplay('inline')} className={`px-3 py-1 rounded text-xs ${display === 'inline' ? 'bg-sky-500 text-white' : 'bg-gray-800 hover:bg-gray-700'}`}>inline</button>
              <button onClick={() => setDisplay('inline-block')} className={`px-3 py-1 rounded text-xs ${display === 'inline-block' ? 'bg-sky-500 text-white' : 'bg-gray-800 hover:bg-gray-700'}`}>inline-block</button>
              <button onClick={() => setDisplay('none')} className={`px-3 py-1 rounded text-xs ${display === 'none' ? 'bg-sky-500 text-white' : 'bg-gray-800 hover:bg-gray-700'}`}>none</button>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              {display === 'block' && 'Takes full width, elements below are pushed down.'}
              {display === 'inline' && 'Takes only necessary width, ignores height/width settings, flows with text.'}
              {display === 'inline-block' && 'Flows with text but respects height/width.'}
              {display === 'none' && 'Completely removed from the document flow.'}
            </p>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Visibility:</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="visibility" checked={visibility === 'visible'} onChange={() => setVisibility('visible')} className="accent-sky-500" />
                <span className="text-sm">visible</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="visibility" checked={visibility === 'hidden'} onChange={() => setVisibility('hidden')} className="accent-sky-500" />
                <span className="text-sm">hidden</span>
              </label>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              {visibility === 'visible' ? 'Element is visible as normal.' : 'Element is invisible but still takes up its physical space in the layout.'}
            </p>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Opacity: {opacity}</label>
            <input type="range" min="0" max="1" step="0.1" value={opacity} onChange={(e) => setOpacity(e.target.value)} className="w-full accent-sky-500" />
            <p className="text-xs text-gray-400 mt-2">
              {opacity == 0 ? 'Element is fully transparent (invisible) but still clickable and takes space.' : 'Element has some level of transparency.'}
            </p>
          </div>
        </div>

        <div className="flex-1 bg-[#1e293b] rounded-xl p-4 min-h-[350px] relative overflow-hidden border border-gray-700/50 flex flex-col">
          <p className="text-sm text-gray-400 mb-2">Surrounding text before the element. Notice how it flows based on the display property.</p>
          <div className="bg-gray-800 p-2 border border-gray-700 w-full mb-2 text-center text-xs text-gray-500">Sibling Element (Block)</div>
          
          <div className="flex flex-wrap items-center">
            <span className="text-sm text-gray-400 mr-2">Inline Text Left</span>
            
            <div style={containerStyle} onClick={() => alert('Element Clicked!')}>
              <span className="font-bold">Target Element</span>
              <div className="text-xs mt-1 opacity-70">Click Me!</div>
            </div>
            
            <span className="text-sm text-gray-400 ml-2">Inline Text Right</span>
          </div>

          <div className="bg-gray-800 p-2 border border-gray-700 w-full mt-2 text-center text-xs text-gray-500">Sibling Element (Block)</div>
          <p className="text-sm text-gray-400 mt-2">Surrounding text after the element. Watch the spacing when display: none vs visibility: hidden.</p>
        </div>
      </div>
      
      <div className="mt-6 bg-[#0d1117] p-4 rounded-lg border border-gray-800 font-mono text-sm text-gray-300">
        <div className="text-gray-500 mb-1">/* Generated CSS */</div>
        <div className="text-pink-400">.target-element {'{'}</div>
        <div className="pl-4">
          <span className="text-sky-300">display:</span> <span className="text-orange-300">{display}</span>;<br />
          <span className="text-sky-300">visibility:</span> <span className="text-orange-300">{visibility}</span>;<br />
          <span className="text-sky-300">opacity:</span> <span className="text-orange-300">{opacity}</span>;
        </div>
        <div className="text-pink-400">{'}'}</div>
      </div>
    </div>
  );
}
