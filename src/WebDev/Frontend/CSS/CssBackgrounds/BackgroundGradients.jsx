import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Wand2, Sparkles, Type } from 'lucide-react';
import SEO from '../../../../components/SEO';
import CssGradientSimulator from '../../../../simulators/web/css/CssGradientSimulator';

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

export default function BackgroundGradients() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Gradients — linear-gradient, gradient text — Section 5 & 7"
                description="Master CSS gradients. Learn linear-gradient(), gradient directions, angle control, and the advanced background-clip text trick to create stunning gradient text effects."
                keywords="css linear-gradient, css gradient text, background-clip text, css gradient button, gradient direction css, css gradient angle"
                url="/webdevelopment/css/backgrounds/gradients"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-bold text-sky-400 uppercase tracking-widest">Module 6 · Sections 5 &amp; 7</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                    Painting with Code —{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
                        Gradients
                    </span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl">
                    Gradients are a smooth transition from one color to another. The browser draws them using math — no image files needed — making your website load blazing fast!
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">

                <Section title="Section 5: Linear Gradients (Straight Lines)" icon={Wand2}>
                    <p>
                        The magic of CSS gradients is that they don't require an image file. The browser draws them instantly using math, which makes your website load very fast!
                    </p>
                    <p>
                        You can make colors blend from top to bottom, left to right, or on any angle.
                    </p>

                    {/* Syntax breakdown */}
                    <div className="my-6 p-5 bg-[#161b22] border border-sky-500/30 rounded-xl">
                        <p className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-4">Anatomy of linear-gradient()</p>
                        <div className="flex flex-wrap gap-2 items-center font-mono text-sm">
                            <span className="text-gray-400">linear-gradient(</span>
                            <span className="text-yellow-400 bg-yellow-900/20 px-2 py-1 rounded">direction</span>
                            <span className="text-gray-400">,</span>
                            <span className="text-pink-400 bg-pink-900/20 px-2 py-1 rounded">start-color</span>
                            <span className="text-gray-400">,</span>
                            <span className="text-orange-400 bg-orange-900/20 px-2 py-1 rounded">end-color</span>
                            <span className="text-gray-400">)</span>
                        </div>
                        <div className="mt-4 space-y-2 text-xs">
                            <div className="flex gap-3"><span className="text-yellow-400 font-mono w-28 shrink-0">direction</span><span className="text-gray-400">to right · to left · to bottom · to top · 45deg · 135deg</span></div>
                            <div className="flex gap-3"><span className="text-pink-400 font-mono w-28 shrink-0">start-color</span><span className="text-gray-400">Any color format: #hex, rgb(), named colors</span></div>
                            <div className="flex gap-3"><span className="text-orange-400 font-mono w-28 shrink-0">end-color</span><span className="text-gray-400">The color the gradient transitions to</span></div>
                        </div>
                    </div>

                    {/* Direction examples */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
                        {[
                            { dir: 'to right', label: 'to right →' },
                            { dir: 'to bottom', label: '↓ to bottom' },
                            { dir: '45deg', label: '↗ 45deg' },
                            { dir: '135deg', label: '↘ 135deg' },
                        ].map(({ dir, label }) => (
                            <div key={dir} className="text-center">
                                <div
                                    className="h-20 rounded-lg mb-2 border border-white/10"
                                    style={{ background: `linear-gradient(${dir}, #ff0055, #ffaa00)` }}
                                />
                                <code className="text-[10px] text-gray-500 font-mono">{label}</code>
                            </div>
                        ))}
                    </div>

                    <p className="font-semibold text-white mt-6">Beginner-Friendly Example: The "Instagram" Style Button</p>
                    <p>Let's make a beautiful button with a warm, sunset gradient.</p>
                    <CodeBlock>{`.gradient-button {
    /* Blends from pink on the left to orange on the right */
    background: linear-gradient(to right, #ff0055, #ffaa00);
    
    color: white;
    padding: 15px 30px;
    border: none;
    border-radius: 50px; /* Makes it a pill shape */
    font-size: 18px;
    cursor: pointer;
}

/* Let's flip the gradient when the user hovers over it! */
.gradient-button:hover {
    background: linear-gradient(to left, #ff0055, #ffaa00);
}`}</CodeBlock>

                    {/* Live button example */}
                    <div className="my-6 p-6 bg-[#161b22] rounded-xl border border-gray-800 flex flex-col sm:flex-row items-center gap-6">
                        <div className="text-center">
                            <button
                                className="px-8 py-4 rounded-full text-white font-bold text-lg border-none shadow-lg transition-all duration-300 hover:scale-105"
                                style={{ background: 'linear-gradient(to right, #ff0055, #ffaa00)' }}
                            >
                                Follow Now
                            </button>
                            <p className="text-xs text-gray-600 mt-2">Hover for effect →</p>
                        </div>
                        <div className="flex-1">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">The Hover Trick</p>
                            <p className="text-sm text-gray-400">By reversing the gradient direction on hover (<code className="text-sky-300">to left</code> instead of <code className="text-sky-300">to right</code>), you create a smooth, eye-catching transition that feels very polished and interactive.</p>
                        </div>
                    </div>
                </Section>

                {/* Interactive Simulator */}
                <CssGradientSimulator />

                <Section title="Section 7: Fun & Advanced — Gradient Text" icon={Type}>
                    <p>
                        Once you have the basics down, you can do some amazing things with very little code. Instead of applying a gradient to a box, we can tell CSS to paint the gradient only inside the letters of our text!
                    </p>

                    <InfoBox type="note">
                        <strong>📝 How it works — 3 Steps:</strong>
                        <ol className="mt-3 space-y-2 list-decimal list-inside">
                            <li>Give the element a gradient background as normal.</li>
                            <li>Use <code>background-clip: text</code> to clip the gradient to the shape of the letters.</li>
                            <li>Make the actual text color transparent — so the gradient background peeks through the letters.</li>
                        </ol>
                    </InfoBox>

                    <CodeBlock title="index.html" language="html">{`<h1 class="magic-text">CSS is Awesome</h1>`}</CodeBlock>
                    <CodeBlock>{`.magic-text {
    /* 1. Give the text a bright gradient */
    background: linear-gradient(to right, #00f2fe, #4facfe);
    
    /* 2. Tell the background to clip itself to the shape of the letters */
    background-clip: text;
    -webkit-background-clip: text; /* Needed for some browsers */
    
    /* 3. Make the actual text color invisible so the background peeks through! */
    color: transparent; 
}`}</CodeBlock>

                    {/* Live gradient text */}
                    <div className="my-6 p-8 bg-[#161b22] rounded-xl border border-gray-800 text-center">
                        <h2
                            className="text-5xl font-extrabold"
                            style={{
                                background: 'linear-gradient(to right, #00f2fe, #4facfe)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent',
                            }}
                        >
                            CSS is Awesome
                        </h2>
                        <p className="text-xs text-gray-600 mt-4">↑ This is actual text, not an image! Resize your screen and it stays crisp.</p>
                    </div>

                    {/* More examples */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                        {[
                            { gradient: 'linear-gradient(to right, #f953c6, #b91d73)', text: 'Candy Crush' },
                            { gradient: 'linear-gradient(135deg, #11998e, #38ef7d)', text: 'Fresh Vibes' },
                            { gradient: 'linear-gradient(to right, #a855f7, #3b82f6)', text: 'Purple Rain' },
                        ].map(({ gradient, text }) => (
                            <div key={text} className="p-4 bg-[#0d1117] rounded-xl border border-gray-800 text-center">
                                <p
                                    className="text-2xl font-extrabold"
                                    style={{ background: gradient, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}
                                >
                                    {text}
                                </p>
                                <code className="text-[10px] text-gray-600 block mt-2">{gradient.slice(0, 40)}...</code>
                            </div>
                        ))}
                    </div>

                    <InfoBox type="tip">
                        <strong>🌐 Browser Support:</strong> The <code>-webkit-background-clip: text</code> prefix is needed for Safari and older Chrome. Modern Firefox supports <code>background-clip: text</code> without the prefix. Always include both for maximum compatibility.
                    </InfoBox>
                </Section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/backgrounds/image" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Background Images
                </Link>
                <Link to="/webdevelopment/css/backgrounds/layering" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Layering Backgrounds <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
}
