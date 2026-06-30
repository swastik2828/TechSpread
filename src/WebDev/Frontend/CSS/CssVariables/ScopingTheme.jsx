import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";
import CssVariablesSimulator from "../../../../simulators/web/css/CssVariablesSimulator";

const ScopingTheme = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Scoping & Dark Mode Setup"
                description="Understand how CSS custom properties cascade and use local overrides. Learn the standard approach for building Light and Dark mode themes."
                keywords="css variable scope, css dark mode, theme switching, frontend"
                url="/webdevelopment/css/variables/scoping-theme"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <h1 className="text-4xl font-extrabold text-white mb-4">Scoping & Dark Mode</h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    Unlike preprocessor variables, native CSS variables respect the cascade. This unlocks powerful architectural patterns like local overrides and dynamic theme switching.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Variables Aren't Just Global</h2>
                    <p>
                        Variables can be re-declared inside any selector, and that new value only applies to that element and its descendants. This allows you to build one component and let its container decide how it should look.
                    </p>

                    <CssVariablesSimulator />

                    <CodeBlock 
                        language="css"
                        code={`:root {\n  --button-bg: #3a86ff; /* default: blue */\n}\n\n.button {\n  background-color: var(--button-bg);\n}\n\n/* Inside a warning section, redefine the variable locally */\n.warning-panel {\n  --button-bg: #e63946; /* now red, but only inside .warning-panel */\n}`}
                    />
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Practical Use Case: Light and Dark Mode</h2>
                    <p>Theme switching is the most common reason developers use custom properties. Here is the clean approach.</p>
                    
                    <h3 className="text-xl font-bold text-sky-400 mt-6 mb-2">Step 1 — Define your themes as variable sets</h3>
                    <CodeBlock 
                        language="css"
                        code={`:root {\n  --bg: #ffffff;\n  --text: #1f2933;\n}\n\n[data-theme="dark"] {\n  --bg: #121212;\n  --text: #e5e5e5;\n}`}
                    />

                    <h3 className="text-xl font-bold text-sky-400 mt-6 mb-2">Step 2 — Flip the switch with JavaScript</h3>
                    <p>You can toggle the attribute on the HTML element, and the cascade handles the rest instantly.</p>
                    <CodeBlock 
                        language="javascript"
                        code={`document.body.addEventListener("click", () => {\n  const html = document.documentElement;\n  const current = html.getAttribute("data-theme");\n  html.setAttribute("data-theme", current === "dark" ? "light" : "dark");\n});`}
                    />

                    <div className="border-l-4 p-6 rounded-r-xl my-6 border-sky-500 bg-sky-900/10 text-sky-200">
                        <strong>Automatic System Preference:</strong> You can respect the operating system's preference automatically using a media query: <code>@media (prefers-color-scheme: dark)</code> and wrapping your dark variables inside it.
                    </div>
                </section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/variables/palette-fallbacks" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Previous
                </Link>
                <Link to="/webdevelopment/css/variables/js-calc" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: JavaScript & Calc() <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};

export default ScopingTheme;