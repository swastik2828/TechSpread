import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";

const PaletteFallbacks = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Variables — Building Palettes & Using Fallbacks"
                description="Learn how to structure a realistic design palette using CSS custom properties and how to implement safe fallback values."
                keywords="css variable fallbacks, css design tokens, css palette"
                url="/webdevelopment/css/variables/palette-fallbacks"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <h1 className="text-4xl font-extrabold text-white mb-4">Palettes & Fallbacks</h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    Variables aren't just for colors. They are the backbone of a robust, scalable design system covering typography, spacing, and safeguards.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Building a Starter Palette</h2>
                    <p>
                        A real project rarely needs just one variable. Here's a small, realistic set you might define at the top of a stylesheet:
                    </p>
                    <CodeBlock 
                        language="css"
                        code={`:root {\n  /* Colors */\n  --color-primary: #3a86ff;\n  --color-secondary: #ff9f1c;\n  --color-text: #1f2933;\n  --color-background: #ffffff;\n\n  /* Typography */\n  --font-main: "Segoe UI", system-ui, sans-serif;\n  --font-size-base: 16px;\n\n  /* Spacing scale */\n  --space-sm: 8px;\n  --space-md: 16px;\n\n  /* Border radius */\n  --radius-medium: 8px;\n}`}
                    />
                    <p className="mt-6">
                        Notice the pattern: you're not just storing colors. Spacing, fonts, radii, shadows, and transition speeds — anything reused more than once is a candidate for a variable.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Fallback Values: A Safety Net</h2>
                    <p>
                        The <code>var()</code> function accepts a second argument — a fallback value used if the variable hasn't been defined or is invalid:
                    </p>
                    <CodeBlock 
                        language="css"
                        code={`.badge {\n  /* If --badge-color isn't set anywhere, fall back to gray */\n  background-color: var(--badge-color, gray);\n}`}
                    />
                    <p className="mt-6">
                        You can even chain fallbacks, where each one falls back to the next:
                        <code>var(--card-bg, var(--surface-bg, white))</code>. The browser tries the first, then the second, and finally settles on white if neither exists.
                    </p>
                </section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/variables/intro" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Previous
                </Link>
                <Link to="/webdevelopment/css/variables/scoping-theme" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Scoping & Dark Mode <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};

export default PaletteFallbacks;