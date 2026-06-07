import React, { useState } from 'react';
import { LayoutDashboard, Image as ImageIcon, LayoutTemplate, LayoutPanelLeft } from 'lucide-react';

export default function CssGridPatternsSimulator() {
    const [pattern, setPattern] = useState('holygrail');

    const patterns = {
        gallery: {
            icon: ImageIcon,
            label: 'Photo Gallery',
            style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '8px' },
            code: `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\ngap: 12px;`,
            items: Array.from({length: 8}).map((_, i) => ({ id: i, label: `Img ${i+1}` }))
        },
        dashboard: {
            icon: LayoutDashboard,
            label: 'Dashboard',
            style: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' },
            code: `grid-template-columns: repeat(3, 1fr);\ngap: 24px;\n\n.card-wide { grid-column: span 2; }\n.card-tall { grid-row: span 2; }`,
            items: [
                { id: 1, label: 'Feature', span: { gridColumn: 'span 3' }, bg: 'bg-indigo-500/20 border-indigo-500/50' },
                { id: 2, label: 'Tall', span: { gridRow: 'span 2' }, bg: 'bg-emerald-500/20 border-emerald-500/50' },
                { id: 3, label: 'Standard', span: {}, bg: 'bg-slate-700/50 border-slate-600' },
                { id: 4, label: 'Standard', span: {}, bg: 'bg-slate-700/50 border-slate-600' },
                { id: 5, label: 'Wide', span: { gridColumn: 'span 2' }, bg: 'bg-amber-500/20 border-amber-500/50' }
            ]
        },
        holygrail: {
            icon: LayoutTemplate,
            label: 'Holy Grail',
            style: { 
                display: 'grid', 
                gridTemplateColumns: '80px 1fr 80px', 
                gridTemplateRows: 'auto 1fr auto', 
                gridTemplateAreas: '"header header header" "sidebar content aside" "footer footer footer"',
                gap: '8px',
                height: '100%'
            },
            code: `grid-template-areas:\n  "header  header  header"\n  "sidebar content aside"\n  "footer  footer  footer";`,
            items: [
                { id: 'header', label: 'Header', span: { gridArea: 'header' } },
                { id: 'sidebar', label: 'Sidebar', span: { gridArea: 'sidebar' } },
                { id: 'content', label: 'Content', span: { gridArea: 'content' } },
                { id: 'aside', label: 'Aside', span: { gridArea: 'aside' } },
                { id: 'footer', label: 'Footer', span: { gridArea: 'footer' } }
            ]
        }
    };

    const active = patterns[pattern];

    return (
        <div className="my-8 bg-[#0d1117] border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-[#161b22] px-4 py-3 border-b border-gray-800 flex items-center gap-2">
                <LayoutPanelLeft size={16} className="text-purple-400" />
                <span className="text-sm font-bold text-gray-300">Real-World Patterns Explorer</span>
            </div>

            <div className="flex flex-wrap border-b border-gray-800 bg-[#111]">
                {Object.keys(patterns).map(key => {
                    const P = patterns[key];
                    return (
                        <button
                            key={key}
                            onClick={() => setPattern(key)}
                            className={`flex-1 min-w-[120px] p-3 text-xs font-bold flex items-center justify-center gap-2 transition-all ${pattern === key ? 'bg-purple-500/10 text-purple-400 border-b-2 border-purple-500' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'}`}
                        >
                            <P.icon size={16} /> {P.label}
                        </button>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 border-b md:border-b-0 md:border-r border-gray-800 bg-[#161b22] flex flex-col justify-center">
                    <pre className="text-sky-300 font-mono text-xs leading-relaxed whitespace-pre-wrap">
                        <span className="text-purple-400">.container</span> {'{\n'}
                        {'  '}display: grid;{'\n'}
                        {'  '}{active.code.split('\n').join('\n  ')}{'\n'}
                        {'}'}
                    </pre>
                </div>
                
                <div className="p-6 bg-[#0a0a0a] min-h-[300px] flex items-center justify-center">
                    <div className="w-full h-full max-w-md max-h-[400px] border border-gray-700 bg-[#111] p-2 rounded-lg" style={active.style}>
                        {active.items.map((item) => (
                            <div 
                                key={item.id} 
                                className={`rounded flex items-center justify-center font-bold text-xs p-3 transition-all duration-500 ${item.bg || 'bg-purple-900/30 border border-purple-500/50 text-purple-300'}`}
                                style={item.span}
                            >
                                {item.label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}