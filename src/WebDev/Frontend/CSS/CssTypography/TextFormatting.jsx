import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, AlignLeft, Scissors } from 'lucide-react';
import SEO from "../../../../components/SEO";
import CssSpacingSimulator from "../../../../simulators/web/css/CssSpacingSimulator";

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

export default function TextFormatting() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Text Formatting — Spacing, Alignment, Decoration"
                description="Learn CSS text formatting properties. Master line-height, letter/word spacing, alignment, decoration, transform, and advanced text truncation."
                keywords="css text-align, css line-height, css text-overflow, css ellipsis, typography css spacing"
                url="/webdevelopment/css/typography/formatting"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    Text <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">Formatting</span>
                </h1>
                <p className="text-lg text-gray-400">Perfect your layouts by fine-tuning line-height, tracking, alignment, and managing text overflow.</p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <CssSpacingSimulator />

                <Section title="Spacing & Alignment" icon={AlignLeft}>
                    <div className="mb-8 flex flex-col md:flex-row gap-8">
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-sky-400 mb-3">line-height</h3>
                            <p className="text-sm">Controls the vertical space between lines of text. Crucial for readability. Use a unitless value — it acts as a multiplier of the current font-size.</p>
                            <CodeBlock>
{`/* Unitless is best — relative to font-size */
p { line-height: 1.6; }  /* 1.6 × font-size */
 
/* Recommended values */
body         { line-height: 1.5; }  /* Normal paragraph text */
h1, h2, h3   { line-height: 1.2; }  /* Headings — tighter */
.code-block  { line-height: 1.8; }  /* Code — looser */`}
                            </CodeBlock>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-sky-400 mb-3">text-align</h3>
                            <CodeBlock>
{`text-align: left;     /* Default for LTR languages */
text-align: right;
text-align: center;
text-align: justify;  /* Stretches lines to fill width */`}
                            </CodeBlock>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-sky-400 mb-3">letter-spacing and word-spacing</h3>
                        <CodeBlock>
{`/* letter-spacing: space between individual characters */
.heading      { letter-spacing: -0.02em; } /* Tighter — good for headings */
.button-text  { letter-spacing: 0.08em; }  /* Looser — good for buttons/labels */
.caps-label   { letter-spacing: 0.15em; }  /* Wide — good for ALL CAPS */
 
/* word-spacing: space between words */
p { word-spacing: 0.05em; }`}
                        </CodeBlock>
                    </div>
                </Section>

                <Section title="Decoration & Transform" icon={Scissors}>
                    <div className="mb-8 flex flex-col md:flex-row gap-8">
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-sky-400 mb-3">text-decoration</h3>
                            <CodeBlock>
{`text-decoration: none;          /* Removes underline (common on links) */
text-decoration: underline;
text-decoration: line-through;  /* Strikethrough */
text-decoration: overline;
 
/* Modern — control style and color */
text-decoration: underline wavy red;
text-decoration-thickness: 2px;
text-underline-offset: 4px;     /* Gap between text and underline */`}
                            </CodeBlock>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-sky-400 mb-3">text-transform</h3>
                            <CodeBlock>
{`text-transform: none;       /* As written */
text-transform: uppercase;  /* ALL CAPS */
text-transform: lowercase;  /* all lowercase */
text-transform: capitalize; /* First Letter Of Each Word */`}
                            </CodeBlock>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-sky-400 mb-3">text-overflow and Truncation</h3>
                        <p>When text exceeds its container, you can truncate it with an ellipsis.</p>
                        <CodeBlock>
{`.truncate {
    white-space: nowrap;      /* Prevent text wrapping */
    overflow: hidden;         /* Hide overflow */
    text-overflow: ellipsis;  /* Show ... at the end */
}
 
/* Multi-line truncation (modern) */
.clamp {
    display: -webkit-box;
    -webkit-line-clamp: 3;    /* Show max 3 lines */
    -webkit-box-orient: vertical;
    overflow: hidden;
}`}
                        </CodeBlock>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-sky-400 mb-3">font shorthand</h3>
                        <CodeBlock>
{`/* font: style variant weight size/line-height family */
font: italic small-caps 600 1.25rem/1.5 "Georgia", serif;
 
/* More readable — use individual properties */
font-style: italic;
font-variant: small-caps;
font-weight: 600;
font-size: 1.25rem;
line-height: 1.5;
font-family: "Georgia", serif;`}
                        </CodeBlock>
                    </div>
                </Section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/typography/intro" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Intro to Typography
                </Link>
                <Link to="/webdevelopment/css/typography/responsive" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Responsive Typography <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
}
