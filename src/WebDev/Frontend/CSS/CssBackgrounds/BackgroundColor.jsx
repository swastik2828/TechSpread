import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Paintbrush, AlertTriangle, Lightbulb } from 'lucide-react';
import SEO from '../../../../components/SEO';
import CssBackgroundColorSimulator from '../../../../simulators/web/css/CssBackgroundColorSimulator';

const Section = ({ title, icon: Icon, children }) => (
    <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-sky-500/20 to-cyan-500/20 rounded-xl border border-sky-500/30 text-sky-400">
                <Icon size={28} />
            </div>
            <h2 className="text-3xl font-bold text-white">{title}</h2>
        </div>
        {children}
    </section>
);

const CodeBlock = ({ title = 'styles.css', language = 'css', children }) => (
    <div className="my-6 w-full rounded-xl overflow-hidden bg-[#0d1117] border border-gray-800 shadow-2xl">
        <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-gray-800">
            <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/30 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/30 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/30 border border-green-500/50" />
                </div>
                <span className="text-xs font-bold text-gray-400 font-mono">{title}</span>
            </div>
            <span className="text-[10px] font-bold text-gray-500 uppercase bg-gray-800 px-2 py-0.5 rounded border border-gray-700">{language}</span>
        </div>
        <div className="p-5 overflow-x-auto font-mono text-sm leading-relaxed">
            <pre className="text-gray-300 whitespace-pre-wrap"><code>{children}</code></pre>
        </div>
    </div>
);

const InfoBox = ({ type = 'note', children }) => {
    const styles = {
        note: 'border-sky-500 bg-sky-900/10 text-sky-200',
        tip: 'border-green-500 bg-green-900/10 text-green-200',
        warning: 'border-yellow-500 bg-yellow-900/10 text-yellow-200',
    };
    return (
        <div className={`border-l-4 p-6 rounded-r-xl my-6 ${styles[type]}`}>
            {children}
        </div>
    );
};

const ColorSwatch = ({ color, label, code }) => (
    <div className="flex flex-col items-center gap-2">
        <div
            className="w-16 h-16 rounded-xl border border-white/10 shadow-lg"
            style={{ backgroundColor: color }}
            title={code}
        />
        <span className="text-gray-400 text-xs">{label}</span>
        <code className="text-[10px] text-gray-500 font-mono">{code}</code>
    </div>
);

export default function BackgroundColor() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS background-color — Section 1: The Color Foundation"
                description="Master CSS background-color. Learn hex codes, rgb, rgba, and the crucial difference between rgba() transparency and opacity for professional web design."
                keywords="css background-color, css rgba, css opacity vs rgba, hex color css, background transparency css"
                url="/webdevelopment/css/backgrounds/color"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-bold text-sky-400 uppercase tracking-widest">Module 6 · Section 1</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                    The Color{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">
                        Foundation
                    </span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl">
                    The simplest way to style an element is by giving it a solid background color. This is the base coat of paint on your canvas.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">

                <Section title="background-color Property" icon={Paintbrush}>
                    <p>
                        The <code className="text-sky-300 bg-sky-900/20 px-1.5 py-0.5 rounded text-sm">background-color</code> property sets the background color of an element. You can define colors using:
                    </p>

                    {/* Color format grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                        <div className="p-5 bg-[#161b22] rounded-xl border border-gray-800">
                            <h3 className="text-sky-400 font-bold text-sm mb-3">🔤 Keywords</h3>
                            <div className="space-y-1 font-mono text-xs text-gray-400">
                                <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-red-500" /> <span>red</span></div>
                                <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-blue-500" /> <span>blue</span></div>
                                <div className="flex items-center gap-2"><div className="w-4 h-4 rounded" style={{ backgroundColor: 'tomato' }} /> <span>tomato</span></div>
                                <div className="flex items-center gap-2"><div className="w-4 h-4 rounded" style={{ backgroundColor: 'gold' }} /> <span>gold</span></div>
                            </div>
                        </div>
                        <div className="p-5 bg-[#161b22] rounded-xl border border-gray-800">
                            <h3 className="text-sky-400 font-bold text-sm mb-3"># Hex Codes</h3>
                            <div className="space-y-1 font-mono text-xs text-gray-400">
                                <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-white" /> <span>#ffffff</span></div>
                                <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-black border border-gray-700" /> <span>#000000</span></div>
                                <div className="flex items-center gap-2"><div className="w-4 h-4 rounded" style={{ backgroundColor: '#ff5733' }} /> <span>#ff5733</span></div>
                                <div className="flex items-center gap-2"><div className="w-4 h-4 rounded" style={{ backgroundColor: '#3b82f6' }} /> <span>#3b82f6</span></div>
                            </div>
                        </div>
                        <div className="p-5 bg-[#161b22] rounded-xl border border-gray-800">
                            <h3 className="text-sky-400 font-bold text-sm mb-3">🔢 RGB / RGBA</h3>
                            <div className="space-y-1 font-mono text-xs text-gray-400">
                                <div>rgb(255, 0, 0)</div>
                                <div>rgb(59, 130, 246)</div>
                                <div>rgba(255, 0, 0, 0.5)</div>
                                <div className="text-cyan-400 text-[10px] mt-2">↑ A = Alpha (transparency)</div>
                            </div>
                        </div>
                    </div>

                    <p className="font-semibold text-white mt-6">Beginner-Friendly Example: A Warning Alert Box</p>
                    <p>
                        Let's make a soft red alert box that looks professional, not overly bright.
                    </p>
                    <CodeBlock>{`.my-box {
    /* A very soft, light red */
    background-color: #f8d7da; 
    
    /* Dark red text so it is easy to read */
    color: #721c24; 
    
    /* Give it some breathing room */
    padding: 20px; 
    border-radius: 8px; /* Rounded corners! */
}`}</CodeBlock>

                    {/* Live example */}
                    <div className="my-6 p-1 bg-[#0d1117] border border-gray-800 rounded-xl">
                        <div className="px-4 py-2 bg-[#161b22] border-b border-gray-800 rounded-t-xl">
                            <span className="text-xs text-gray-500 font-mono">Live Result ↓</span>
                        </div>
                        <div className="p-6 bg-white/5 rounded-b-xl">
                            <div style={{ backgroundColor: '#f8d7da', color: '#721c24', padding: '20px', borderRadius: '8px' }}>
                                <strong>⚠ Warning!</strong> This is an example alert box with a soft background color.
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Interactive Simulator */}
                <CssBackgroundColorSimulator />

                <Section title="Beginner Tip: opacity vs. rgba()" icon={Lightbulb}>
                    <InfoBox type="warning">
                        <div className="flex items-start gap-3">
                            <AlertTriangle size={20} className="shrink-0 mt-0.5" />
                            <div>
                                <strong>This is one of the most common beginner mistakes!</strong>
                                <p className="mt-2">If you use <code>opacity: 0.5</code> on a box, the background AND the text inside it become see-through. If you only want the background to be see-through (so your text remains easy to read), use an RGBA color:</p>
                                <code className="block mt-2 bg-yellow-900/20 p-2 rounded text-sm">background-color: rgba(0, 0, 0, 0.5);</code>
                            </div>
                        </div>
                    </InfoBox>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                        <div>
                            <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-2">❌ opacity: 0.5 (text fades too)</p>
                            <CodeBlock>{`/* Both background AND text fade */
.box {
    background-color: rgb(99, 102, 241);
    opacity: 0.5; /* Everything fades */
}`}</CodeBlock>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-green-400 uppercase tracking-widest mb-2">✅ rgba() (text stays sharp)</p>
                            <CodeBlock>{`/* Only background fades */
.box {
    /* 4th value = alpha: 0=clear, 1=solid */
    background-color: rgba(99, 102, 241, 0.5);
    /* Text stays fully visible! */
}`}</CodeBlock>
                        </div>
                    </div>

                    <InfoBox type="tip">
                        <strong>💡 Rule of Thumb:</strong> Once you learn <code>rgba()</code>, you'll barely ever need <code>opacity</code> for backgrounds. Use <code>opacity</code> when you want to fade an entire element (including its content and children) — like for a loading animation.
                    </InfoBox>
                </Section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/backgrounds/intro" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Module Overview
                </Link>
                <Link to="/webdevelopment/css/backgrounds/image" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Background Images <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
}
