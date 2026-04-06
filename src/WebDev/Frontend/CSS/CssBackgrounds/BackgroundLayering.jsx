import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Layers, Eye } from 'lucide-react';
import SEO from '../../../../components/SEO';
import CssBackgroundLayeringSimulator from '../../../../simulators/web/css/CssBackgroundLayeringSimulator';

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

export default function BackgroundLayering() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Multiple Backgrounds & Dark Overlay — Section 6"
                description="Learn how to layer multiple CSS backgrounds. Master the dark overlay technique to make text readable on photographs — a crucial professional skill for web design."
                keywords="css multiple backgrounds, css background layers, css dark overlay, css text readable on image, css background-image stacking, readable hero section css"
                url="/webdevelopment/css/backgrounds/layering"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-bold text-sky-400 uppercase tracking-widest">Module 6 · Section 6</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                    Layering{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">
                        Multiple Backgrounds
                    </span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl">
                    CSS allows you to stack backgrounds like layers in a painting. The first item in your CSS list is the top layer (closest to the user). The last item is the bottom layer.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">

                <Section title="Section 6: How Layering Works" icon={Layers}>
                    <p>
                        CSS allows you to stack backgrounds like layers in a cake. The first item in your CSS list is the top layer (closest to the user). The last item is the bottom layer.
                    </p>

                    {/* Visual layer diagram */}
                    <div className="my-8 space-y-2">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Visualizing the Layer Stack</p>
                        <div className="relative">
                            <div className="p-4 bg-sky-900/30 border border-sky-700/50 rounded-xl flex items-center gap-3">
                                <span className="text-xs bg-sky-700/50 text-sky-300 px-2 py-1 rounded font-mono shrink-0">LAYER 1</span>
                                <span className="text-sm text-sky-300">Gradient overlay (top — closest to viewer, listed first in CSS)</span>
                            </div>
                            <div className="w-0.5 h-4 bg-gray-700 mx-6" />
                            <div className="p-4 bg-gray-800/40 border border-gray-700 rounded-xl flex items-center gap-3">
                                <span className="text-xs bg-gray-700/50 text-gray-400 px-2 py-1 rounded font-mono shrink-0">LAYER 2</span>
                                <span className="text-sm text-gray-400">Background image (bottom — furthest from viewer, listed last in CSS)</span>
                            </div>
                        </div>
                    </div>

                    <p className="font-semibold text-white mt-8">The Syntax — Comma-Separated List</p>
                    <p>Multiple backgrounds are separated by commas inside the <code className="text-sky-300 bg-sky-900/20 px-1.5 py-0.5 rounded text-sm">background-image</code> property:</p>
                    <CodeBlock>{`/* Multiple backgrounds: Layer1 (top), Layer2, Layer3... */
background-image: 
    url("top-layer.png"),      /* Layer 1 - on top */
    url("middle-layer.png"),   /* Layer 2 - in the middle */
    url("bottom-layer.png");   /* Layer 3 - at the bottom */`}</CodeBlock>
                </Section>

                <Section title="The Dark Text Overlay — A Crucial Skill" icon={Eye}>
                    <InfoBox type="warning">
                        <strong>⚠️ The Problem:</strong> If you put white text directly on top of a bright photograph, nobody will be able to read it. Light text gets lost in light areas of the image, and dark text gets lost in dark areas.
                    </InfoBox>

                    <p>
                        The professional trick is to sandwich a dark, see-through gradient between the image and the text. This is used by virtually every major website that has a hero section — Airbnb, Netflix, Spotify, and more.
                    </p>

                    <p className="font-semibold text-white mt-6">Beginner-Friendly Example: The Dark Text Overlay</p>
                    <CodeBlock>{`.readable-hero {
    height: 400px;
    color: white; /* White text */

    background-image: 
        /* LAYER 1 (Top): A dark, 60% transparent black gradient */
        linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
        
        /* LAYER 2 (Bottom): The actual photograph */
        url("bright-office.jpg");
        
    background-size: cover;
    background-position: center;
}`}</CodeBlock>

                    {/* Static visual */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                        <div>
                            <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-2">❌ Without overlay</p>
                            <div
                                className="h-40 rounded-xl border border-gray-800 overflow-hidden flex items-center justify-center"
                                style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}
                            >
                                <div className="text-center p-4">
                                    <h3 className="text-white font-bold text-lg drop-shadow-none"
                                        style={{ textShadow: 'none' }}
                                    >Hero Title</h3>
                                    <p className="text-white text-sm" style={{ textShadow: 'none' }}>Hard to read text</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-green-400 uppercase tracking-widest mb-2">✅ With dark overlay</p>
                            <div
                                className="h-40 rounded-xl border border-gray-800 overflow-hidden flex items-center justify-center"
                                style={{
                                    backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                <div className="text-center p-4">
                                    <h3 className="text-white font-bold text-lg">Hero Title</h3>
                                    <p className="text-gray-200 text-sm">Crystal clear readable text!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gradient overlay variation */}
                    <p className="font-semibold text-white mt-8">Advanced: Directional Overlay (Bottom-Heavy)</p>
                    <p>Instead of a uniform dark overlay, many sites use a gradient that fades from transparent at the top to dark at the bottom. This lets more of the photo show at the top while keeping text at the bottom perfectly readable.</p>
                    <CodeBlock>{`.cinematic-hero {
    height: 400px;
    color: white;
    display: flex;
    align-items: flex-end; /* Push text to the bottom */
    padding: 30px;

    background-image:
        /* Transparent at top, dark at bottom */
        linear-gradient(to bottom, transparent 30%, rgba(0, 0, 0, 0.85) 100%),
        url("your-image.jpg");
    
    background-size: cover;
    background-position: center;
}`}</CodeBlock>

                    {/* Cinematic example */}
                    <div className="my-6 rounded-xl overflow-hidden border border-gray-800">
                        <div
                            className="h-52 flex items-end p-6"
                            style={{
                                backgroundImage: 'linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.85) 100%), linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 70%, #e94560 100%)',
                                backgroundSize: 'cover',
                            }}
                        >
                            <div>
                                <p className="text-xs text-cyan-400 font-bold uppercase tracking-widest mb-1">Featured Article</p>
                                <h3 className="text-white text-xl font-bold">The Art of Modern Web Design</h3>
                                <p className="text-gray-300 text-sm mt-1">A directional gradient overlay in action →</p>
                            </div>
                        </div>
                    </div>

                    <InfoBox type="tip">
                        <strong>🎬 Real-world usage:</strong> Netflix uses this exact technique on every movie thumbnail card. The bottom half of the image has a gradient to black, making the title and rating perfectly readable while still showing the image.
                    </InfoBox>
                </Section>

                {/* Interactive Simulator */}
                <CssBackgroundLayeringSimulator />

            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/backgrounds/gradients" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> CSS Gradients
                </Link>
                <Link to="/webdevelopment/css/backgrounds/summary" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Summary &amp; Exercises <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
}
