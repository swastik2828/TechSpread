import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Type, Bold, ArrowLeft } from 'lucide-react';
import SEO from "../../../../components/SEO";
import CssFontSimulator from "../../../../simulators/web/css/CssFontSimulator";

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

export default function IntroTypography() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Typography — Fonts, Sizes, and Weights"
                description="Master CSS typography. Learn how to control font-family, sizes, and weights to significantly improve your web applications."
                keywords="css fonts, css typography, css text, font face, google fonts css"
                url="/webdevelopment/css/typography/intro"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-bold text-sky-400 uppercase tracking-widest">Module 5</span>
                </div>
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    CSS <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">Typography</span>
                </h1>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">Module Overview</h2>
                    <p>Typography is the art of arranging text to make it readable and visually appealing. In CSS, typography controls fonts, sizes, line spacing, letter spacing, text alignment, and more. Good typography dramatically improves user experience.</p>
                </div>

                <CssFontSimulator />

                <Section title="Core Typography Properties" icon={Type}>
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-sky-400 mb-3">font-family</h3>
                        <p>Specifies which font to use. Always provide fallback fonts — a font stack — in case the first choice is unavailable. The last value should always be a generic family.</p>
                        <CodeBlock>
{`body {
    font-family: "Inter", "Helvetica Neue", Arial, sans-serif;
}
/* Reads as: try Inter first, then Helvetica Neue,
   then Arial, then any sans-serif the browser has */
 
/* Generic families (browser always has one of these) */
font-family: serif;       /* Georgia, Times New Roman style */
font-family: sans-serif;  /* Arial, Helvetica style */
font-family: monospace;   /* Courier, code editors */
font-family: cursive;     /* Handwriting style */
font-family: fantasy;     /* Decorative style */`}
                        </CodeBlock>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-sky-400 mb-3">Google Fonts</h3>
                        <p>Google Fonts provides hundreds of free web fonts. Add the link in your HTML head, then use the font name in CSS.</p>
                        <CodeBlock title="index.html" language="html">
{`<!-- In HTML <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">`}
                        </CodeBlock>
                        <CodeBlock language="css">
{`/* In CSS */
body { font-family: "Inter", sans-serif; }`}
                        </CodeBlock>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-sky-400 mb-3">font-size</h3>
                        <p>Controls the size of text. Use <code>rem</code> for most text to respect user accessibility preferences.</p>
                        <CodeBlock>
{`html  { font-size: 16px; }   /* Base — 1rem = 16px */
h1    { font-size: 2.5rem; } /* 40px */
h2    { font-size: 2rem; }   /* 32px */
h3    { font-size: 1.5rem; } /* 24px */
p     { font-size: 1rem; }   /* 16px */
small { font-size: 0.875rem;}/* 14px */`}
                        </CodeBlock>
                    </div>

                    <div className="mb-8 flex gap-8 flex-col lg:flex-row">
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-sky-400 mb-3 flex items-center gap-2"><Bold className="w-5 h-5"/> font-weight</h3>
                            <CodeBlock>
{`font-weight: normal;    /* Same as 400 */
font-weight: bold;      /* Same as 700 */
font-weight: 300;       /* Light */
font-weight: 400;       /* Regular */
font-weight: 500;       /* Medium */
font-weight: 600;       /* Semibold */
font-weight: 700;       /* Bold */
font-weight: 800;       /* Extrabold */
font-weight: 900;       /* Black */`}
                            </CodeBlock>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-sky-400 mb-3">font-style and font-variant</h3>
                            <CodeBlock>
{`font-style: normal;
font-style: italic;
font-style: oblique;
 
font-variant: normal;
font-variant: small-caps; /* TEXT LOOKS LIKE THIS */`}
                            </CodeBlock>
                        </div>
                    </div>

                </Section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/box-model/mistakes-exercises" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Box Model Mistakes & Exercises
                </Link>
                <Link to="/webdevelopment/css/typography/formatting" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Text Formatting <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
}
