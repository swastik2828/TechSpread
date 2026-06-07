import React, { useState } from 'react';
import { LayoutTemplate, MousePointer2 } from 'lucide-react';

export default function CssGridAreasSimulator() {
    const PRESETS = {
        classic: `"header header header"\n"sidebar main main"\n"footer footer footer"`,
        holyGrail: `"header header header"\n"sidebar main aside"\n"footer footer footer"`,
        dashboard: `"header header"\n"main main"`,
        custom: `"header header header"\n". main ."\n"footer footer footer"`
    };

    const [activePreset, setActivePreset] = useState('classic');
    const [templateString, setTemplateString] = useState(PRESETS.classic);

    const handlePresetChange = (key) => {
        setActivePreset(key);
        setTemplateString(PRESETS[key]);
    };

    // The available areas that we will render divs for
    const availableAreas = ['header', 'sidebar', 'main', 'aside', 'footer'];

    return (
        <div className="my-8 bg-[#0d1117] border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-[#161b22] px-4 py-3 border-b border-gray-800 flex items-center gap-2">
                <LayoutTemplate size={16} className="text-purple-400" />
                <span className="text-sm font-bold text-gray-300">ASCII Layout Builder (grid-template-areas)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 border-b md:border-b-0 md:border-r border-gray-800 bg-[#111] space-y-6">
                    <div>
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Layout Presets</label>
                        <div className="flex flex-wrap gap-2">
                            {Object.keys(PRESETS).map((key) => (
                                <button
                                    key={key}
                                    onClick={() => handlePresetChange(key)}
                                    className={`px-3 py-1.5 text-xs font-bold rounded transition-colors ${activePreset === key ? 'bg-purple-500/20 text-purple-400 border border-purple-500/50' : 'bg-gray-800 text-gray-400 border border-gray-700 hover:bg-gray-700'}`}
                                >
                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">grid-template-areas Editor</label>
                            <MousePointer2 size={12} className="text-gray-500" />
                        </div>
                        <p className="text-[10px] text-gray-500 mb-2 leading-tight">Edit the text below. Use <code>header</code>, <code>sidebar</code>, <code>main</code>, <code>aside</code>, <code>footer</code>, or <code>.</code> for empty space.</p>
                        <textarea
                            value={templateString}
                            onChange={(e) => {
                                setTemplateString(e.target.value);
                                setActivePreset('custom');
                            }}
                            className="w-full h-32 bg-[#0a0a0a] border border-gray-700 text-purple-300 font-mono text-sm p-3 rounded-lg focus:border-purple-500 outline-none resize-none"
                            spellCheck="false"
                        />
                    </div>
                </div>

                <div className="p-6 flex flex-col">
                    <div className="flex-1 bg-[#0a0a0a] border-2 border-dashed border-gray-700 rounded-xl p-4 overflow-hidden flex items-center justify-center">
                        <div 
                            className="w-full h-full max-h-[300px] transition-all duration-500"
                            style={{
                                display: 'grid',
                                gridTemplateAreas: templateString,
                                gridTemplateColumns: 'repeat(3, 1fr)',
                                gridTemplateRows: 'repeat(3, 1fr)',
                                gap: '8px'
                            }}
                        >
                            {availableAreas.map(area => {
                                // Only render the area if it exists in the template string
                                if (!templateString.includes(area)) return null;
                                
                                return (
                                    <div 
                                        key={area}
                                        className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/50 rounded-lg flex items-center justify-center text-purple-300 font-bold shadow-lg transition-all duration-300"
                                        style={{ gridArea: area }}
                                    >
                                        .{area}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}