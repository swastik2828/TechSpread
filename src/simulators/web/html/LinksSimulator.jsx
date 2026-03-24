import React, { useState } from 'react';
import { Link2, MousePointerClick, RefreshCw, LayoutTemplate, ExternalLink, Mail, Code } from 'lucide-react';

const LinksSimulator = () => {
    const [href, setHref] = useState('https://www.example.com');
    const [linkText, setLinkText] = useState('Visit Example');
    const [target, setTarget] = useState('_self');
    const [isHovered, setIsHovered] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    const simulateClick = (e) => {
        e.preventDefault();
        setClickCount(c => c + 1);
    };

    const getLinkPreview = () => {
        return `<a href="${href}"${target !== '_self' ? ` target="${target}" rel="noopener noreferrer"` : ''}>${linkText}</a>`;
    };

    return (
        <div className="w-full max-w-4xl mx-auto my-12 bg-[#0d1117] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-[#161b22] px-6 py-4 border-b border-gray-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg">
                        <Link2 size={20} />
                    </div>
                    <h3 className="text-white font-bold text-lg">Interactive Link Builder</h3>
                </div>
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                </div>
            </div>

            <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">

                {/* Controls Section */}
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                            <Code size={16} /> Link Text
                        </label>
                        <input
                            type="text"
                            value={linkText}
                            onChange={(e) => setLinkText(e.target.value)}
                            className="w-full bg-[#161b22] border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition-colors"
                            placeholder="e.g. Click Here"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                            <LayoutTemplate size={16} /> Destination URL (href)
                        </label>
                        <input
                            type="text"
                            value={href}
                            onChange={(e) => setHref(e.target.value)}
                            className="w-full bg-[#161b22] border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition-colors font-mono text-sm"
                            placeholder="https://..."
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                            <ExternalLink size={16} /> Target Attribute
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => setTarget('_self')}
                                className={`px-4 py-2 rounded-lg text-sm transition-all border ${target === '_self' ? 'bg-blue-600/20 border-blue-500 text-blue-400 font-bold' : 'bg-[#161b22] border-gray-700 text-gray-400 hover:border-gray-500'}`}
                            >
                                _self (Same tab)
                            </button>
                            <button
                                onClick={() => setTarget('_blank')}
                                className={`px-4 py-2 rounded-lg text-sm transition-all border ${target === '_blank' ? 'bg-blue-600/20 border-blue-500 text-blue-400 font-bold' : 'bg-[#161b22] border-gray-700 text-gray-400 hover:border-gray-500'}`}
                            >
                                _blank (New tab)
                            </button>
                        </div>
                    </div>

                    {/* Quick Presets */}
                    <div className="pt-4 border-t border-gray-800">
                        <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider font-bold">Quick Presets</p>
                        <div className="flex flex-wrap gap-2">
                            <button onClick={() => { setHref('mailto:hello@example.com'); setLinkText('Email Us'); setTarget('_self'); }} className="px-3 py-1 bg-[#161b22] border border-gray-700 rounded-full text-xs text-gray-400 hover:text-white hover:border-blue-500 transition-all flex items-center gap-1"><Mail size={12} /> Email (mailto:)</button>
                            <button onClick={() => { setHref('#top'); setLinkText('Back to Top'); setTarget('_self'); }} className="px-3 py-1 bg-[#161b22] border border-gray-700 rounded-full text-xs text-gray-400 hover:text-white hover:border-blue-500 transition-all">Jump Link (#)</button>
                            <button onClick={() => { setHref('/about.html'); setLinkText('About Us'); setTarget('_self'); }} className="px-3 py-1 bg-[#161b22] border border-gray-700 rounded-full text-xs text-gray-400 hover:text-white hover:border-blue-500 transition-all">Relative Path</button>
                        </div>
                    </div>
                </div>

                {/* Live Preview Section */}
                <div className="bg-[#0a0c10] rounded-xl border border-gray-800 p-6 flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="absolute top-4 right-4 flex items-center gap-2 text-xs text-gray-500">
                        <MousePointerClick size={14} /> Live Output
                    </div>

                    {/* The actual simulated link */}
                    <div className="my-8">
                        <a
                            href={href}
                            target={target}
                            rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                            onClick={simulateClick}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className="text-2xl font-semibold text-blue-500 hover:text-blue-400 hover:underline transition-all relative z-10 p-2"
                        >
                            {linkText || 'Empty Link'}
                        </a>
                    </div>

                    {/* Status logs */}
                    <div className="w-full mt-auto mt-8 bg-[#161b22] border border-gray-800 rounded-lg p-4 font-mono text-xs text-gray-400">
                        <div className="flex justify-between items-center mb-2 border-b border-gray-700 pb-2">
                            <span className="text-green-400 flex items-center gap-2"><Code size={12} /> Generate HTML:</span>
                            <button
                                onClick={() => {
                                    setHref('https://www.example.com'); setLinkText('Visit Example'); setTarget('_self'); setClickCount(0);
                                }}
                                className="text-gray-500 hover:text-white"
                            >
                                <RefreshCw size={14} />
                            </button>
                        </div>
                        <code className="text-blue-300 block break-all">
                            {getLinkPreview()}
                        </code>
                        <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between items-center">
                            <span>Status: <span className={isHovered ? 'text-yellow-400' : 'text-gray-500'}>{isHovered ? 'Hovering...' : 'Idle'}</span></span>
                            <span>Link Clicks (Simulated): <span className="text-white font-bold">{clickCount}</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LinksSimulator;
