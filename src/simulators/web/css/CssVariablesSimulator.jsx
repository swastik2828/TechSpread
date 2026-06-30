import React, { useState } from 'react';
import { RefreshCcw } from 'lucide-react';

const CssVariablesSimulator = () => {
  const [globalTheme, setGlobalTheme] = useState('light');
  const [useLocalOverride, setUseLocalOverride] = useState(false);
  const [localColor, setLocalColor] = useState('#e63946');

  const rootBg = globalTheme === 'light' ? '#ffffff' : '#121212';
  const rootText = globalTheme === 'light' ? '#1f2933' : '#e5e5e5';
  const rootPrimary = globalTheme === 'light' ? '#3a86ff' : '#4cc9f0';

  const previewPrimary = useLocalOverride ? localColor : rootPrimary;

  return (
    <div className="bg-[#0d1117] border border-gray-800 rounded-xl p-6 my-8 font-sans">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Controls */}
        <div className="flex-1 space-y-6">
          <div>
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
              <RefreshCcw size={16} className="text-sky-400" />
              1. Global Scope (:root)
            </h3>
            <div className="flex gap-2">
              <button 
                onClick={() => setGlobalTheme('light')}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors ${globalTheme === 'light' ? 'bg-sky-500 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
              >
                Light Theme
              </button>
              <button 
                onClick={() => setGlobalTheme('dark')}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors ${globalTheme === 'dark' ? 'bg-sky-500 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
              >
                Dark Theme
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">2. Local Scope (.warning-panel)</h3>
            <label className="flex items-center gap-3 text-sm text-gray-300 mb-3 cursor-pointer">
              <input 
                type="checkbox" 
                checked={useLocalOverride}
                onChange={(e) => setUseLocalOverride(e.target.checked)}
                className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-sky-500 focus:ring-sky-500 focus:ring-offset-gray-900"
              />
              Override --primary-color locally
            </label>
            
            {useLocalOverride && (
              <div className="flex items-center gap-3">
                <input 
                  type="color" 
                  value={localColor}
                  onChange={(e) => setLocalColor(e.target.value)}
                  className="w-8 h-8 rounded cursor-pointer bg-transparent border-0"
                />
                <span className="text-sm text-gray-400 font-mono">{localColor}</span>
              </div>
            )}
          </div>
        </div>

        {/* Live Preview Environment */}
        <div className="flex-1 border border-gray-700 rounded-lg overflow-hidden flex flex-col">
          <div className="bg-gray-800/50 px-4 py-2 border-b border-gray-700 text-xs font-mono text-gray-400">Browser Render</div>
          <div 
            className="flex-1 p-6 transition-colors duration-300 flex flex-col gap-4"
            style={{ backgroundColor: rootBg, color: rootText }}
          >
            <p className="font-medium text-sm">Standard Component</p>
            <button 
              className="px-4 py-2 rounded font-medium text-white transition-colors self-start shadow-sm"
              style={{ backgroundColor: rootPrimary }}
            >
              Default Action
            </button>

            <div className={`mt-4 p-4 rounded border border-dashed ${useLocalOverride ? 'border-red-500/50 bg-red-500/5' : 'border-gray-500/30'}`}>
              <p className="font-medium text-sm mb-3">.warning-panel</p>
              <button 
                className="px-4 py-2 rounded font-medium text-white transition-colors self-start shadow-sm"
                style={{ backgroundColor: previewPrimary }}
              >
                Destructive Action
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CssVariablesSimulator;