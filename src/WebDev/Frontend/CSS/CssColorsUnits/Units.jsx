import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Ruler, Maximize, Target, LayoutTemplate, BoxSelect, Maximize2 } from 'lucide-react';
import SEO from "../../../../components/SEO";
import CssUnitsSimulator from "../../../../simulators/web/css/CssUnitsSimulator";

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

const DataTable = ({ headers, rows }) => (
    <div className="overflow-x-auto my-6 border border-gray-800 rounded-xl">
        <table className="w-full text-left border-collapse text-sm">
            <thead className="bg-[#161b22]">
                <tr>{headers.map((h, idx) => <th key={idx} className="p-4 border-b border-gray-800 font-bold text-white">{h}</th>)}</tr>
            </thead>
            <tbody className="divide-y divide-gray-800 bg-[#0d1117]">
                {rows.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-900/50 transition-colors">
                        {row.map((cell, j) => (
                            <td key={j} className={`p-4 ${j === 0 ? 'text-sky-400 font-bold font-mono' : 'text-gray-300'}`}>{cell}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

const Units = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Units — Absolute, Relative, and Viewport"
                description="Understand CSS units perfectly. Learn when to use px, em, rem, vw, vh, percentages (%), and the calc() function for truly responsive layouts."
                keywords="css units, css rem vs em, css viewport units, css calc, responsive css units"
                url="/webdevelopment/css/colors-units/units"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    CSS <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">Units</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    Mastering CSS units is the key to building layouts that graciously adapt to any screen size, device, or user preference.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <p>
                    Every CSS property that defines a length or size requires a unit (unless the value is <code className="text-sky-300">0</code>). These units fall into two main categories: <strong>Absolute</strong> and <strong>Relative</strong>.
                </p>

                <CssUnitsSimulator />

                <Section title="Absolute Units" icon={Target}>
                    <p>
                        Absolute units are <strong>fixed</strong>—a length expressed in an absolute unit will appear as exactly that size regardless of the parent element, the screen size, or user accessibility settings. They are most appropriate when you need pixel-perfect precision (such as borders) or when designing for a physical medium like print.
                    </p>

                    <DataTable
                        headers={['Unit', 'Name', 'Description']}
                        rows={[
                            ['px', 'Pixels', 'The foundation of screen display. 1px typically equals 1 device pixel, though this varies on high-DPI screens.'],
                            ['cm / mm', 'Centimeters / Millimeters', 'Physical measurements; highly effective for print stylesheets.'],
                            ['in', 'Inches', '1in = 96px = 2.54cm.'],
                            ['pt', 'Points', '1pt = 1/72 of an inch. Commonly used for typography in print, but rarely on modern web.'],
                        ]}
                    />

                    <CodeBlock>
{`/* A classic absolute fixed card component */
.card {
    width: 350px;           /* Fixed width, breaks on small phones! */
    border: 1px solid #ccc; /* 1px is the perfect absolute unit here */
    border-radius: 4px;     /* Subtle fixed curves */
    padding: 24px;          /* Fixed inner spacing */
}`}
                    </CodeBlock>
                </Section>

                <Section title="Relative Units" icon={Maximize}>
                    <p>
                        Relative units <strong>scale based on something else</strong>. This "something else" could be the font size of the parent element, the root font size, or the dimensions of the browser viewport. They are the absolute foundation of responsive web design.
                    </p>

                    <DataTable
                        headers={['Unit', 'Name', 'Relative To']}
                        rows={[
                            ['em', 'Em', 'The font-size of the element itself (for properties like padding) or the element parent (for font-size properties).'],
                            ['rem', 'Root Em', 'The font-size of the root <html> element (usually defaults to 16px unless the user changes it).'],
                            ['%', 'Percentage', 'The corresponding property (usually width/height) of the parent element.'],
                            ['vw', 'Viewport Width', '1vw = 1% of the total width of the browser viewport window.'],
                            ['vh', 'Viewport Height', '1vh = 1% of the total height of the browser viewport window.'],
                            ['vmin', 'Viewport Minimum', '1vmin = 1% of the smaller dimension (vw or vh).'],
                            ['vmax', 'Viewport Maximum', '1vmax = 1% of the larger dimension (vw or vh).'],
                            ['ch', 'Character', 'The width of the "0" (zero) character of the element font.'],
                        ]}
                    />

                    <CodeBlock>
{`/* rem & em scaling strategy */
html { font-size: 16px; }     /* Base: 1rem = 16px */
h1   { font-size: 2rem; }     /* 32px */
p    { font-size: 1rem; }     /* 16px */
small{ font-size: 0.875rem; } /* 14px */

/* em scales relative to parent font-size */
.card { font-size: 18px; }
.card p { font-size: 1em; }      /* 18px (parent is .card) */
.card h2 { font-size: 1.5em; }   /* 27px (1.5 * 18px) */

/* vw/vh layout scaling */
.hero { 
    height: 100vh;  /* Take up 100% of the screen height */
    width: 100vw;   /* Take up 100% of the screen width */
}
h1.fluid-text { font-size: 5vw; } /* Text scales with window width */`}
                    </CodeBlock>
                </Section>

                <Section title="When To Use Which Unit?" icon={LayoutTemplate}>
                    <p>
                        Choosing the right unit reduces technical debt and dramatically improves accessibility. Here is a definitive guide on where to apply them:
                    </p>

                    <ul className="list-disc ml-6 space-y-4 text-gray-300">
                        <li><strong>Font Sizes (<code className="text-sky-300">rem</code>):</strong> Always use <code className="text-sky-300">rem</code> for fonts. It respects the user's browser-level text size preferences (crucial for visually impaired users), whereas <code className="text-sky-300">px</code> forces a hardcoded override.</li>
                        <li><strong>Container Widths (<code className="text-sky-300">%</code> or <code className="text-sky-300">vw</code>):</strong> Use percentages to make fluid columns that respect their parent container. Use <code className="text-sky-300">vw</code> for full-bleed background sections.</li>
                        <li><strong>Margins and Padding (<code className="text-sky-300">rem</code> or <code className="text-sky-300">em</code>):</strong> Use <code className="text-sky-300">rem</code> for consistent global spacing between large sections, and <code className="text-sky-300">em</code> for padding inside a component (like a button) so the padding scales perfectly if the font size grows.</li>
                        <li><strong>Borders (<code className="text-sky-300">px</code>):</strong> Use exact pixels. You rarely want a border to become drastically thicker just because the screen is wider.</li>
                    </ul>
                </Section>

                <Section title="The calc() Function" icon={BoxSelect}>
                    <p>
                        The <code className="text-sky-300">calc()</code> function is a native CSS feature that allows you to perform mathematical calculations (<code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>) to determine property values. Most importantly, it allows you to <strong>mix unit types</strong> dynamically!
                    </p>
                    <CodeBlock>
{`/* Width: 100% of the screen, MINUS the exact 280px sidebar width */
.content-area { 
    width: calc(100% - 280px); 
}

/* Fluid Typographical Scale */
/* Font gets bigger on wide screens, but never smaller than 1rem */
h1 { 
    font-size: calc(1rem + 2vw); 
}

/* Centering an absolutely positioned element of known width */
.modal { 
    position: absolute;
    left: calc(50% - 200px); /* 50% down middle, offset by half of 400px width */
    width: 400px;
}`}
                    </CodeBlock>
                    <p>
                        <strong>Note:</strong> When using addition (<code>+</code>) or subtraction (<code>-</code>) inside <code className="text-sky-300">calc()</code>, you <em>must</em> include whitespace around the operator. <code className="text-red-400">calc(100%-20px)</code> is invalid CSS.
                    </p>
                </Section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/colors-units/colors" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> CSS Colors
                </Link>
                <Link to="/webdevelopment/css/colors-units/exercises" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Mistakes & Exercises <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};

export default Units;
