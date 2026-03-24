import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Palette, Droplet, Sun, Type } from 'lucide-react';
import SEO from "../../../../components/SEO";
import CssColorsSimulator from "../../../../simulators/web/css/CssColorsSimulator";

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

const CodeBlock = ({ title = "styles.css", language = "css", children }) => (
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

const InfoBox = ({ type = "note", children }) => {
    const styles = {
        note: "border-sky-500 bg-sky-900/10 text-sky-200",
        warning: "border-yellow-500 bg-yellow-900/10 text-yellow-200",
        tip: "border-green-500 bg-green-900/10 text-green-200",
    };
    return (
        <div className={`border-l-4 p-6 rounded-r-xl my-6 ${styles[type]}`}>
            {children}
        </div>
    );
};

const Colors = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Colors & Formats — Keywords, Hex, RGB, HSL"
                description="Master CSS colors. Learn the difference between named colors, Hex strings, RGB/RGBA functions, and why modern design systems rely on HSL/HSLA."
                keywords="css rgb, css hsl, css hex, css named colors, css currentColor, web design colors"
                url="/webdevelopment/css/colors-units/colors"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    CSS <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">Colors</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    CSS provides multiple ways to express colors and set opacity. Choosing the right color format and unit is critical for accessibility, responsive design, and visual consistency.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <p>
                    From quick prototyping with named color keywords to building scalable design systems using <code>HSL</code> variables, understanding color formats is foundational to CSS. This module covers every major color system used in modern web development.
                </p>

                <CssColorsSimulator />

                <Section title="Color Keywords" icon={Type}>
                    <p>
                        CSS has 140+ predefined named colors. While they are very convenient for quick prototyping and debugging, they offer limited precision and are rarely used in production codebases where strict branding guidelines apply.
                    </p>
                    <CodeBlock>
{`color: red;
color: tomato;
color: steelblue;
color: hotpink;

/* The transparent keyword represents fully transparent black */
background-color: transparent;`}
                    </CodeBlock>
                </Section>

                <Section title="Hexadecimal Colors" icon={Palette}>
                    <p>
                        Hex codes are the most widely used color format on the web. A hex color starts with a hash (<code>#</code>) followed by six hexadecimal digits (<code>0-9, a-f</code>), representing the <strong>Red</strong>, <strong>Green</strong>, and <strong>Blue</strong> (RGB) color channels.
                    </p>
                    <CodeBlock>
{`/* 6-digit Hexadecimal (R, G, B) */
#ff0000   /* Pure red */
#00ff00   /* Pure green */
#0000ff   /* Pure blue */
#ffffff   /* White */
#000000   /* Black */
#f0f0f0   /* Light gray */
#1a7a3b   /* Custom dark green */

/* 3-digit Shorthand (expands to #rrggbb) */
#f00      /* equivalent to #ff0000 */
#fff      /* equivalent to #ffffff */
#abc      /* equivalent to #aabbcc */

/* 8-digit Hex includes an Alpha channel (Opacity) */
#ff000080 /* Pure Red at 50% opacity (128 out of 255) */`}
                    </CodeBlock>
                </Section>

                <Section title="RGB and RGBA" icon={Droplet}>
                    <p>
                        The <code>rgb()</code> function takes three decimal values (0-255) for the Red, Green, and Blue channels. The <code>rgba()</code> function allows a fourth value: the <strong>alpha</strong> (opacity) channel, ranging from <code>0</code> (fully transparent) to <code>1</code> (fully opaque).
                    </p>
                    <CodeBlock>
{`/* Legacy comma-separated syntax */
color: rgb(255, 0, 0);          /* Red */
color: rgb(30, 95, 168);        /* Custom blue */
color: rgba(0, 0, 0, 0.5);      /* Black at 50% opacity */

/* Modern space-separated syntax (Level 4 specification) */
color: rgb(255 0 0);
color: rgb(30 95 168 / 0.8);    /* Custom blue at 80% opacity */`}
                    </CodeBlock>
                </Section>

                <Section title="HSL and HSLA" icon={Sun}>
                    <p>
                        <strong>Hue, Saturation, Lightness.</strong> Many designers prefer HSL because it is far more intuitive for human perception. The Hue is a degree on the color wheel (0°=red, 120°=green, 240°=blue). Saturation and Lightness are applied as percentages.
                    </p>
                    <CodeBlock>
{`/* hsl(hue, saturation%, lightness%) */
color: hsl(0, 100%, 50%);       /* Pure red */
color: hsl(120, 60%, 40%);      /* Medium green */
color: hsl(210, 80%, 55%);      /* Sky blue */

/* Creating variations is trivial */
color: hsl(210, 80%, 90%);      /* Light tint */
color: hsl(210, 80%, 20%);      /* Dark shade */

/* Modern syntax with alpha opacity */
color: hsl(210 80% 55% / 0.5);  /* Sky blue at 50% opacity */`}
                    </CodeBlock>
                    
                    <InfoBox type="tip">
                        <strong>Pro Tip: Use HSL for Design Systems</strong><br/>
                        When building a dynamic design system or UI library, defining your base brand color in HSL allows you to generate robust hover states, focus outlines, and background tints dynamically just by adjusting the Lightness (L) percentage value, leaving the hue and saturation consistent.
                    </InfoBox>
                </Section>

                <Section title="The currentColor Keyword" icon={Droplet}>
                    <p>
                        The <code>currentColor</code> keyword acts as a reactive CSS variable. It automatically evaluates to the current resolved value of the <code>color</code> property. Uniquely, this allows you to pass the current text color to other visual properties without redefining the exact value.
                    </p>
                    <CodeBlock>
{`.icon {
    /* Set the text color */
    color: #1a7a3b;
    
    /* Inherit the text color for the border */
    border: 2px solid currentColor;
    
    /* Inherit the text color for the shadow */
    box-shadow: 0 0 8px currentColor;
}`}
                    </CodeBlock>
                    <p>
                        This is extremely useful for SVG icons configured with <code>fill="currentColor"</code>, preventing you from having to manipulate SVG fills directly on hover—just change the text <code>color</code> on the parent wrapper.
                    </p>
                </Section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/selectors/advanced" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Advanced Selectors
                </Link>
                <Link to="/webdevelopment/css/colors-units/units" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: CSS Units <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};

export default Colors;
