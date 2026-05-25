import React, { useState } from 'react';
import { Eye, Code } from 'lucide-react';

export default function CssFlexboxPatternsSimulator() {
    const [activePattern, setActivePattern] = useState('center');
    const [viewMode, setViewMode] = useState('preview'); // preview | code

    const patterns = {
        center: {
            name: 'Perfect Center',
            desc: 'The ultimate, foolproof 3-line centering trick for absolute vertical and horizontal layout alignment.',
            html: `<div className="centered-container">\n  <div className="centered-box">Centered!</div>\n</div>`,
            css: `.centered-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 150px;\n}\n\n.centered-box {\n  padding: 16px 24px;\n  background: #0ea5e9;\n  border-radius: 8px;\n}`,
            render: () => (
                <div className="w-full bg-[#111] rounded-xl border border-gray-850 h-[180px] flex justify-center items-center">
                    <div className="px-6 py-3 bg-sky-500 text-white font-bold text-sm rounded-lg shadow-lg shadow-sky-500/20 animate-pulse">
                        Centered!
                    </div>
                </div>
            )
        },
        navbar: {
            name: 'Navigation Bar',
            desc: 'A classic responsive navbar. Keeps logo on the left, navigation items on the right, and centers them vertically.',
            html: `<nav className="navbar">\n  <div className="logo">TechSpread</div>\n  <ul className="nav-links">\n    <li>Home</li>\n    <li>Docs</li>\n    <li>Pricing</li>\n  </ul>\n</nav>`,
            css: `.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: #161b22;\n}\n\n.nav-links {\n  display: flex;\n  gap: 16px;\n  list-style: none;\n}`,
            render: () => (
                <div className="w-full bg-[#111] rounded-xl border border-gray-850 p-4 flex flex-col justify-center h-[180px]">
                    <div className="bg-[#161b22] border border-gray-800 rounded-lg p-3 flex justify-between items-center w-full">
                        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400 text-sm">
                            TechSpread
                        </span>
                        <div className="flex gap-4 text-xs font-bold text-gray-400">
                            <span className="hover:text-white cursor-pointer transition-colors">Home</span>
                            <span className="hover:text-white cursor-pointer transition-colors">Docs</span>
                            <span className="hover:text-white cursor-pointer transition-colors">Pricing</span>
                        </div>
                    </div>
                </div>
            )
        },
        grid: {
            name: 'Card Grid',
            desc: 'Fully fluid, responsive card layout wrapping. Cards wrap naturally as container shrinks without media queries!',
            html: `<div className="cards">\n  <div className="card">Card 1</div>\n  <div className="card">Card 2</div>\n  <div className="card">Card 3</div>\n</div>`,
            css: `.cards {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n\n.card {\n  flex: 1 1 120px; /* grow, shrink, basis */\n  padding: 20px;\n  background: #1a1f26;\n}`,
            render: () => (
                <div className="w-full bg-[#111] rounded-xl border border-gray-855 p-4 flex items-center h-[180px] overflow-y-auto">
                    <div className="flex flex-wrap gap-3 w-full">
                        {[1, 2, 3].map(n => (
                            <div key={n} className="flex-1 min-w-[100px] bg-gray-900 border border-gray-800 rounded-lg p-3 text-center">
                                <h5 className="text-xs font-bold text-white">Card {n}</h5>
                                <p className="text-[10px] text-gray-500 mt-1">flex: 1 1 100px</p>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        sidebar: {
            name: 'Sidebar Layout',
            desc: 'A standard page layout setting a rigid, fixed-width sidebar while allowing the main content to dynamically stretch.',
            html: `<div className="layout">\n  <aside className="sidebar">Sidebar</aside>\n  <main className="content">Main Content</main>\n</div>`,
            css: `.layout {\n  display: flex;\n}\n\n.sidebar {\n  flex: 0 0 100px; /* Never grow or shrink, fixed 100px */\n  background: #161b22;\n}\n\n.content {\n  flex: 1; /* Stretch to occupy all remaining width */\n  min-width: 0; /* Prevents text overflow breaks */\n  background: #0d1117;\n}`,
            render: () => (
                <div className="w-full bg-[#111] rounded-xl border border-gray-855 p-3 flex items-center h-[180px]">
                    <div className="flex border border-gray-800 rounded-lg overflow-hidden w-full h-full text-xs font-bold">
                        <aside className="w-[80px] bg-[#161b22] border-r border-gray-800 flex items-center justify-center text-gray-400 shrink-0">
                            Sidebar
                        </aside>
                        <main className="flex-1 bg-gray-950 p-3 flex flex-col justify-between">
                            <span className="text-white text-xs">Main Content Workspace</span>
                            <div className="h-6 w-full bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center text-[9px] rounded font-mono">
                                flex: 1 (occupies all remaining space)
                            </div>
                        </main>
                    </div>
                </div>
            )
        },
        holyGrail: {
            name: 'Holy Grail Layout',
            desc: 'The complete page structure. Standard sticky header and footer enclosing a 3-column content layout.',
            html: `<div className="page">\n  <header>Header</header>\n  <div className="body">\n    <nav>Left</nav>\n    <main>Main</main>\n    <aside>Right</aside>\n  </div>\n  <footer>Footer</footer>\n</div>`,
            css: `.page {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n\n.body {\n  display: flex;\n  flex: 1;\n}\n\nnav, aside {\n  flex: 0 0 60px;\n}\n\nmain {\n  flex: 1;\n  min-width: 0;\n}`,
            render: () => (
                <div className="w-full bg-[#111] rounded-xl border border-gray-855 p-2 flex items-center h-[180px]">
                    <div className="flex flex-col border border-gray-800 rounded-lg overflow-hidden w-full h-full text-[9px] font-bold">
                        <header className="h-[25px] bg-[#161b22] border-b border-gray-800 flex items-center justify-center text-gray-300 shrink-0">
                            Header
                        </header>
                        <div className="flex-1 flex min-h-0">
                            <nav className="w-[45px] bg-[#111] border-r border-gray-850 flex items-center justify-center text-gray-500 shrink-0">
                                Left
                            </nav>
                            <main className="flex-1 bg-gray-950 flex items-center justify-center text-white">
                                Main Content (flex: 1)
                            </main>
                            <aside className="w-[45px] bg-[#111] border-l border-gray-850 flex items-center justify-center text-gray-500 shrink-0">
                                Right
                            </aside>
                        </div>
                        <footer className="h-[25px] bg-[#161b22] border-t border-gray-800 flex items-center justify-center text-gray-400 shrink-0">
                            Footer
                        </footer>
                    </div>
                </div>
            )
        },
        media: {
            name: 'Media Object',
            desc: 'The core element of comments, social posts, and notifications. Avatar sits on left, message columns sit on right.',
            html: `<div className="media">\n  <img className="avatar" />\n  <div className="body">\n    <h6>@username</h6>\n    <p>Flexible comment text goes here...</p>\n  </div>\n</div>`,
            css: `.media {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n\n.avatar {\n  flex-shrink: 0; /* Keep avatar fixed size */\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n\n.body {\n  flex: 1;\n  min-width: 0;\n}`,
            render: () => (
                <div className="w-full bg-[#111] rounded-xl border border-gray-855 p-4 flex flex-col justify-center h-[180px]">
                    <div className="flex items-start gap-3 bg-[#161b22]/50 border border-gray-800 p-3 rounded-lg w-full">
                        {/* Avatar */}
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shrink-0 shadow-md" />
                        {/* Body */}
                        <div className="flex-1 min-w-0">
                            <h6 className="text-xs font-extrabold text-white">@techspread.co.in</h6>
                            <p className="text-[10px] text-gray-400 mt-1 leading-relaxed line-clamp-2">
                                Building rich and beautiful user interfaces is highly satisfying when using modern CSS Flexbox layout techniques!
                            </p>
                        </div>
                    </div>
                </div>
            )
        },
        stickyFooter: {
            name: 'Sticky Footer',
            desc: 'Pins footer to the bottom of the viewport even if page content is short, but lets it scroll normally when page grows.',
            html: `<div className="container">\n  <main className="content">Content</main>\n  <footer>Footer</footer>\n</div>`,
            css: `.container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n.content {\n  flex: 1; /* Pushes footer down */\n}\n\nfooter {\n  flex-shrink: 0;\n}`,
            render: () => (
                <div className="w-full bg-[#111] rounded-xl border border-gray-855 p-3 flex items-center h-[180px]">
                    <div className="flex flex-col border border-gray-800 rounded-lg overflow-hidden w-full h-full text-[9px] font-bold">
                        <main className="flex-1 bg-gray-950 p-2 flex flex-col justify-between items-center">
                            <span className="text-gray-500 uppercase tracking-wide">Main Content Viewport</span>
                            <span className="text-sky-400 font-mono text-[8px] bg-sky-950/20 border border-sky-500/10 px-2 py-0.5 rounded animate-pulse">
                                flex: 1 (forces footer to bottom)
                            </span>
                        </main>
                        <footer className="h-[25px] bg-[#161b22] border-t border-gray-800 flex items-center justify-center text-gray-300 shrink-0">
                            Sticky Footer
                        </footer>
                    </div>
                </div>
            )
        }
    };

    const active = patterns[activePattern];

    return (
        <div className="bg-[#0A0A0A] p-4 md:p-6 rounded-xl border border-gray-800 my-8 shadow-2xl font-sans">
            {/* Header Tabs */}
            <div className="flex flex-wrap gap-1.5 border-b border-gray-850 pb-4 mb-6">
                {Object.keys(patterns).map((key) => (
                    <button
                        key={key}
                        onClick={() => {
                            setActivePattern(key);
                            setViewMode('preview');
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200 ${
                            activePattern === key
                                ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white border-sky-400'
                                : 'bg-[#111] text-gray-400 border-gray-850 hover:text-white hover:bg-gray-800'
                        }`}
                    >
                        {patterns[key].name}
                    </button>
                ))}
            </div>

            {/* Pattern Desc & Panel Toggles */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <div className="max-w-xl">
                    <h4 className="text-base font-bold text-white">{active.name} Layout Pattern</h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">{active.desc}</p>
                </div>
                <div className="flex bg-[#111] p-1 rounded-lg border border-gray-800 self-stretch md:self-auto">
                    <button
                        onClick={() => setViewMode('preview')}
                        className={`flex-1 md:flex-none flex items-center justify-center gap-1 px-4 py-1.5 rounded-md text-xs font-bold transition-all ${
                            viewMode === 'preview' ? 'bg-sky-500/20 text-sky-400 border border-sky-500/20' : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        <Eye size={12} /> Preview
                    </button>
                    <button
                        onClick={() => setViewMode('code')}
                        className={`flex-1 md:flex-none flex items-center justify-center gap-1 px-4 py-1.5 rounded-md text-xs font-bold transition-all ${
                            viewMode === 'code' ? 'bg-sky-500/20 text-sky-400 border border-sky-500/20' : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        <Code size={12} /> View Code
                    </button>
                </div>
            </div>

            {/* Main Sandbox */}
            <div className="w-full transition-all duration-300">
                {viewMode === 'preview' ? (
                    <div className="bg-[#161b22]/20 border border-gray-800 p-6 rounded-xl flex items-center justify-center min-h-[220px]">
                        {active.render()}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* HTML Codeblock */}
                        <div className="bg-[#0d1117] rounded-xl overflow-hidden border border-gray-850 flex flex-col h-[260px]">
                            <div className="bg-[#161b22] px-4 py-2 border-b border-gray-800 flex justify-between items-center text-[10px] font-bold text-gray-400 font-mono">
                                <span>structure.html</span>
                                <span className="text-orange-400">HTML</span>
                            </div>
                            <div className="p-4 overflow-auto font-mono text-xs text-gray-300 leading-relaxed flex-1 select-all">
                                <pre>{active.html}</pre>
                            </div>
                        </div>

                        {/* CSS Codeblock */}
                        <div className="bg-[#0d1117] rounded-xl overflow-hidden border border-gray-850 flex flex-col h-[260px]">
                            <div className="bg-[#161b22] px-4 py-2 border-b border-gray-800 flex justify-between items-center text-[10px] font-bold text-gray-400 font-mono">
                                <span>styles.css</span>
                                <span className="text-sky-400">CSS</span>
                            </div>
                            <div className="p-4 overflow-auto font-mono text-xs text-sky-300 leading-relaxed flex-1 select-all">
                                <pre>{active.css}</pre>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
