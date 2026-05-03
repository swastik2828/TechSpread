import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Image as ImageIcon, Laptop } from 'lucide-react';
import SEO from '../../../../components/SEO';
import CssDropShadowSimulator from '../../../../simulators/web/css/CssDropShadowSimulator';

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

export default function AlphaMaskRealWorld() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="Alpha-Mask Shadows and Real-World UI Masterclass"
                description="Master CSS filter: drop-shadow() for PNG/SVG transparency and learn real-world UI techniques for combining borders, shadows, and hover interactions."
                keywords="css filter drop-shadow, css alpha mask shadow, ui design css, interactive card css, accessible form inputs css"
                url="/webdevelopment/css/borders-shadows/alpha-mask"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-2 mb-4">
                    {/* <span className="text-sm font-bold text-sky-400 uppercase tracking-widest">Section 4</span> */}
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                    Alpha-Mask Shadows and{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">
                        Real-World UI
                    </span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl">
                    Transcend the CSS Box Model limitation with filter: drop-shadow(), and synthesize borders, radii, and shadows to build professional, tactile UI components.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <Section title="The Limitation of box-shadow" icon={ImageIcon}>
                    <p>
                        While <code className="bg-gray-800 px-1 rounded text-violet-400">box-shadow</code> is incredibly powerful, it has one massive, structural limitation: it only ever respects the CSS Box Model. It draws a rectangular shadow based on the physical dimensions of the element's container. 
                    </p>
                    <p>
                        If you place a transparent PNG image of a star or an intricately shaped SVG logo inside a standard <code>&lt;div&gt;</code>, and apply a box-shadow to that element, the browser will <strong>not</strong> cast a shadow in the shape of the star. It will cast a hard, square shadow representing the invisible boundary of the image file.
                    </p>
                </Section>

                <Section title="filter: drop-shadow()" icon={Sparkles}>
                    <p>
                        To overcome this limitation, CSS introduced the <code className="bg-gray-800 px-1 rounded text-amber-400">filter</code> property, and specifically, the <code className="bg-gray-800 px-1 rounded text-amber-400">drop-shadow()</code> function. This property represents a fundamental shift in how the browser calculates shadows. Instead of looking at the CSS Box Model, <code>filter: drop-shadow()</code> hooks into the browser's image processing pipeline.
                    </p>
                    <p>
                        It examines the actual <strong>alpha channel (the transparency data) pixel-by-pixel</strong>. It ignores fully transparent pixels and only casts a shadow behind the opaque or semi-opaque pixels. The result is a perfect, shrink-wrapped shadow that precisely follows the exact contour of a transparent PNG, a complex SVG vector graphic, or even complex CSS shapes clipped with clip-path.
                    </p>

                    <CssDropShadowSimulator />

                    <p className="mt-8">
                        The syntax for <code>drop-shadow()</code> is almost identical to text-shadow: it accepts an X-offset, a Y-offset, a blur radius, and a color. It is crucial to remember that drop-shadow() <strong>does not support a spread radius or the inset keyword</strong>. Furthermore, because it requires pixel-by-pixel image processing, drop-shadow() is generally more computationally expensive than a standard box-shadow. It should be used strategically—specifically for transparent assets.
                    </p>
                </Section>

                <Section title="Real-World UI Masterclass" icon={Laptop}>
                    <p>
                        To truly understand how these properties synthesize in a professional environment, let us engage in a deep-dive masterclass on building a highly interactive, accessible UI card component and a custom form input.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">1. The Tactile UI Card</h3>
                    <p>
                        When architecting a modern UI card, you do not want the card to look heavy or dated. You begin by establishing structural integrity using a very subtle border, perhaps <code>border: 1px solid rgba(0, 0, 0, 0.05);</code>. This faint line acts as a crisp boundary, preventing the card's background from bleeding into a similar page background. Next, you soften the container with <code>border-radius: 12px;</code>.
                    </p>
                    <p>
                        The true magic happens during user interaction. When the user hovers their cursor over the card, you apply a physical lift using <code>transform: translateY(-6px);</code>. Because the card is now physically higher off the page, the laws of physics dictate that the shadow must become larger, more blurred, and more diffuse.
                    </p>
                    <CodeBlock title="interactive-card.css">{`.modern-card {
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  /* Resting shadow: almost imperceptible */
  box-shadow: 
    0 2px 4px rgba(0,0,0,0.04), 
    0 4px 8px rgba(0,0,0,0.04);
  /* Smoothly animate both the lift and the shadow */
  transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), 
              box-shadow 0.3s ease;
}

.modern-card:hover {
  /* Physically lift the card */
  transform: translateY(-6px);
  /* Shadow grows larger, softer, and more diffuse */
  box-shadow: 
    0 12px 24px rgba(0,0,0,0.1), 
    0 4px 12px rgba(0,0,0,0.06);
}`}</CodeBlock>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">2. The Accessible Focus Ring Form Input</h3>
                    <p>
                        Another masterful application of shadows and borders is the creation of custom, accessible form inputs. A professional design system strips away the ugly default styling and rebuilds it.
                    </p>
                    <p>
                        You begin by removing the default border and replacing it with a custom one. When the user clicks into the input field to type, you must provide clear visual feedback. While you could just change the border-color, a 1-pixel color change is often insufficient for users with visual impairments.
                    </p>
                    <p>
                        The professional solution relies on an elegant synergy between borders and box-shadows. On the <code>:focus-visible</code> state, you change the border color to your brand's primary color. But to truly highlight the active state, you dynamically inject a <code>box-shadow</code> with a <strong>zero offset, zero blur, and a large spread radius</strong> matching the brand color with high transparency.
                    </p>
                    <CodeBlock title="custom-input.css">{`.custom-input {
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 12px 16px;
  outline: none; /* We will replace the outline with a shadow */
  transition: border-color 0.2s, box-shadow 0.2s;
}

.custom-input:focus-visible {
  border-color: #0ea5e9; /* Sky blue */
  /* Create a stunning focus ring using a spread radius */
  box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.2);
}`}</CodeBlock>
                    <p>
                        This technique creates a stunning "focus ring" that expands smoothly outward from the input's border. Because it utilizes box-shadow instead of a physical CSS border or an outline, it perfectly hugs the curved border-radius of your input field and does not cause any layout jumping or shifting. By mastering the delicate interplay between the physical space of borders, the accessible overlay of outlines, and the visual trickery of shadows, developers can craft user interfaces that are simultaneously beautiful, highly performant, and universally accessible to all users.
                    </p>
                </Section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/borders-shadows/dimensionality" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    ← Dimensionality with Shadows
                </Link>
                {/* Could link to next module */}
            </div>
        </article>
    );
}
