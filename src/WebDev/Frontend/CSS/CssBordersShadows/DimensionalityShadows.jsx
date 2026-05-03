import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, BoxSelect } from 'lucide-react';
import SEO from '../../../../components/SEO';
import CssBoxShadowSimulator from '../../../../simulators/web/css/CssBoxShadowSimulator';

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

const InfoBox = ({ type = 'tip', children }) => {
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

export default function DimensionalityShadows() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="Dimensionality with Box and Text Shadows"
                description="Break out of the flat screen and introduce depth to your UI with CSS box-shadow and text-shadow. Master spread radius, blur, and multi-layered shadows."
                keywords="css box-shadow, css text-shadow, spread radius, ui depth, material design shadows"
                url="/webdevelopment/css/borders-shadows/dimensionality"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-2 mb-4">
                    {/* <span className="text-sm font-bold text-sky-400 uppercase tracking-widest">Section 3</span> */}
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                    Dimensionality with Box and{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">
                        Text Shadows
                    </span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl">
                    Shadows transform a webpage from a flat piece of paper into a dynamic, physical environment. Learn how to layer shadows for photorealistic depth.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <Section title="Breaking the Flat Screen" icon={Layers}>
                    <p>
                        While borders define the rigid, two-dimensional boundaries of an element, shadows are the primary mechanism for breaking out of the flat screen and introducing depth, layering, and physical dimensionality to a user interface. The strategic use of shadows transforms a webpage from a flat piece of paper into a dynamic, physical environment. This concept was heavily popularized by Google's Material Design system, which theorized that UI elements are physical surfaces resting at various elevations above a fixed background.
                    </p>
                    <p>
                        Higher elevations naturally cast larger, softer shadows, while elements resting close to the background cast tight, sharp shadows. The <code className="bg-gray-800 px-1 rounded text-violet-400">box-shadow</code> property in CSS is responsible for rendering these visual cues. To master box-shadow, one must deeply understand its anatomy, which comprises up to six distinct parameters: <strong>X-offset, Y-offset, blur radius, spread radius, color, and an optional inset keyword.</strong>
                    </p>
                </Section>

                <Section title="The Anatomy of Box-Shadow" icon={BoxSelect}>
                    <p>
                        The <strong>X and Y offsets</strong> act as a coordinate system to move the shadow relative to the original element. In web design, the standard assumption is a global light source positioned at the top-left of the screen. Therefore, a positive X-offset pushes the shadow to the right, and a positive Y-offset pushes the shadow down. Conversely, negative values pull the shadow left and up.
                    </p>
                    <p>
                        The <strong>blur radius</strong> is where the browser's graphics engine performs heavy lifting. If the blur radius is set to 0px, the shadow renders as a solid, pixel-perfect copy of the element's shape—a stark, graphic style often used in retro, neo-brutalist, or comic-book aesthetics. As you increase the blur radius value, the browser applies a mathematical Gaussian blur to the shadow's edges, smoothly dissipating the color outward.
                    </p>
                    
                    <CssBoxShadowSimulator />

                    <p className="mt-8">
                        The <strong>spread radius</strong> is an optional parameter that causes widespread confusion among beginners, yet it is the secret weapon of elite UI designers. The spread radius physically grows or shrinks the core footprint of the shadow before the blur is applied. A positive spread radius makes the shadow larger than the element itself. More importantly, a negative spread radius physically shrinks the shadow. By combining a large blur radius with a negative spread radius, you can ensure that a shadow only pools softly at the very bottom edge of a card, rather than spilling out indiscriminately on all four sides.
                    </p>
                    <InfoBox type="warning">
                        <strong>Color & Transparency:</strong> The color parameter must almost always incorporate transparency. Hardcoding a shadow with black or <code className="text-red-300">#000000</code> will result in a heavy, artificial, and muddy appearance. Standard practice dictates using <code className="text-green-300">rgba(0, 0, 0, 0.1)</code> or hex codes with an alpha channel like <code className="text-green-300">#0000001A</code>.
                    </InfoBox>
                </Section>

                <Section title="Layering Multiple Shadows" icon={Layers}>
                    <p>
                        To achieve truly photorealistic depth, a single box-shadow declaration is rarely sufficient. Real-world objects interact with multiple light sources—direct directional light, and soft ambient light bouncing off the environment. CSS allows developers to chain multiple shadows together on a single element by separating them with commas.
                    </p>
                    <p>
                        When the browser renders multiple shadows, it paints them from back to front in reverse order; the first shadow in your CSS list is drawn closest to the element, right on top of the others. A professional shadow architecture usually involves layering two to three distinct shadows.
                    </p>
                    <CodeBlock title="multi-layered-shadow.css">{`.professional-card {
  box-shadow: 
    0 2px 4px rgba(0,0,0,0.04), /* Ambient occlusion (tight & close) */
    0 8px 16px rgba(0,0,0,0.06); /* Diffuse blocking (soft & large) */
}`}</CodeBlock>
                </Section>

                <Section title="Text Shadows and Performance" icon={BoxSelect}>
                    <p>
                        Similarly, the <code className="bg-gray-800 px-1 rounded text-violet-400">text-shadow</code> property brings this dimensionality to typography. It operates using the exact same principles as box-shadow, but is applied exclusively to the individual characters of a text node rather than the rectangular bounding box. Notably, text-shadow <strong>lacks the spread radius and inset capabilities</strong>.
                    </p>
                    <p>
                        text-shadow is not just for creating drop-shadows; it is a versatile tool for typographic art direction. By utilizing a zero pixel offset and varying blur radii, developers can create glowing neon text effects. By layering multiple tight text shadows with contrasting colors, you can simulate 3D retro text or an embossed letterpress effect.
                    </p>
                    <InfoBox type="tip">
                        <strong>Performance Considerations:</strong> Blurring pixels is computationally expensive. When an element with a large box-shadow is animated, or if a user scrolls a page loaded with dozens of shadow-heavy cards, the browser must continuously recalculate those blurred pixels. The performance best practice is to keep shadows relatively subtle and, when animating hover states, to animate the <code className="text-green-300">transform</code> property (physically moving the element) rather than animating the box-shadow blur radius itself.
                    </InfoBox>
                </Section>

            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/borders-shadows/accessibility" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    ← Accessibility & Focus
                </Link>
                <Link to="/webdevelopment/css/borders-shadows/alpha-mask" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Alpha-Mask Shadows <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
}
