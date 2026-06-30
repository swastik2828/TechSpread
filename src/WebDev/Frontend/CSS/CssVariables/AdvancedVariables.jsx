import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";

const AdvancedVariables = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Variables — Architecture & Best Practices"
                description="Master Two-Tier token systems for design architecture, learn common CSS variable mistakes, and review a quick reference cheatsheet."
                keywords="css design tokens, css variables best practices, css variable cheatsheet"
                url="/webdevelopment/css/variables/advanced"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <h1 className="text-4xl font-extrabold text-white mb-4">Architecture & Quick Reference</h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    Scaling CSS Variables in large projects requires organization. Learn the Two-Tier token system, avoid common pitfalls, and grab your quick reference cheatsheet.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Leveling Up: Two-Tier Token Systems</h2>
                    <p>
                        Once a project grows past a handful of colors, it helps to separate <strong>raw values</strong> from <strong>meaningful names</strong>. This is the same idea professional design systems use, and it pays off the moment a designer says "let's swap the accent color."
                    </p>
                    
                    <CodeBlock 
                        language="css"
                        code={`:root {\n  /* Tier 1 — Primitives: the raw palette, named by what they ARE */\n  --blue-100: #d0e3ff;\n  --blue-500: #3a86ff;\n  --blue-700: #0050c9;\n  --gray-100: #f4f4f5;\n  --gray-900: #1f2933;\n\n  /* Tier 2 — Semantic tokens: named by what they're FOR */\n  --color-action: var(--blue-500);\n  --color-action-hover: var(--blue-700);\n  --color-surface: var(--gray-100);\n  --color-text-primary: var(--gray-900);\n}`}
                    />
                    <p className="mt-4">
                        Your components only ever reference the semantic layer:
                    </p>
                    <CodeBlock 
                        language="css"
                        code={`.button {\n  background-color: var(--color-action);\n}\n\n.button:hover {\n  background-color: var(--color-action-hover);\n}`}
                    />
                    <p className="mt-4">
                        Why bother with two layers? Because "action color" might point to a different blue in dark mode, or change entirely during a rebrand — but the <em>concept</em> of "the color used for clickable actions" stays the same. You update the mapping once, at the top, and every component downstream just falls in line.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Common Mistakes to Avoid</h2>
                    <div className="overflow-x-auto rounded-xl border border-gray-800">
                        <table className="min-w-full text-left text-sm text-gray-300">
                            <thead className="bg-gray-800/50 text-white font-semibold">
                                <tr>
                                    <th className="p-4 border-b border-gray-700">Mistake</th>
                                    <th className="p-4 border-b border-gray-700">What Happens</th>
                                    <th className="p-4 border-b border-gray-700">Fix</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800">
                                <tr className="bg-[#0A0A0A]">
                                    <td className="p-4">Forgetting <code>var()</code> and writing <code>color: --brand-color;</code></td>
                                    <td className="p-4">The browser ignores the line entirely</td>
                                    <td className="p-4 text-emerald-400">Always wrap usage in <code>var(--name)</code></td>
                                </tr>
                                <tr className="bg-[#111]">
                                    <td className="p-4">Using a custom property where it isn't supported (e.g., in a media query like <code>@media (--mobile)</code>)</td>
                                    <td className="p-4">Doesn't work in standard CSS</td>
                                    <td className="p-4 text-emerald-400">Use plain values in media queries</td>
                                </tr>
                                <tr className="bg-[#0A0A0A]">
                                    <td className="p-4">Typos in variable names</td>
                                    <td className="p-4">No error is thrown — it just silently falls back or does nothing</td>
                                    <td className="p-4 text-emerald-400">Use a fallback value during development to catch this</td>
                                </tr>
                                <tr className="bg-[#111]">
                                    <td className="p-4">Defining variables too deep in the cascade by accident</td>
                                    <td className="p-4">Variable seems to "disappear" outside that selector</td>
                                    <td className="p-4 text-emerald-400">Remember: a custom property is only visible to the selector it's declared on and its descendants</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Quick Reference</h2>
                    <CodeBlock 
                        language="css"
                        code={`/* Declare (usually on :root for global scope) */\n:root {\n  --name: value;\n}\n\n/* Consume */\nproperty: var(--name);\n\n/* Consume with fallback */\nproperty: var(--name, fallback-value);\n\n/* Scoped override */\n.component {\n  --name: different-value;\n}\n\n/* Combine with calc() */\nproperty: calc(var(--name) * 2);`}
                    />
                    <div className="mt-4">
                        <CodeBlock 
                            language="javascript"
                            code={`// Read from JavaScript\ngetComputedStyle(element).getPropertyValue('--name');\n\n// Write from JavaScript\nelement.style.setProperty('--name', 'new-value');`}
                        />
                    </div>
                </section>

                <section className="mb-12 p-8 bg-sky-900/10 border border-sky-500/20 rounded-xl">
                    <h2 className="text-2xl font-bold text-sky-400 mb-4 flex items-center gap-2">
                        <CheckCircle size={24} /> Try It Yourself
                    </h2>
                    <p className="mb-4">Before moving to the next module, try building this small exercise:</p>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                        <li>Create a <code>:root</code> block with three variables: a primary color, a base spacing unit, and a border radius.</li>
                        <li>Style a <code>.card</code> component using only those variables.</li>
                        <li>Add a <code>.card--alert</code> modifier class that overrides just the primary color locally, using the scoping technique from Section 4.</li>
                        <li>Add a button that toggles a <code>data-theme="dark"</code> attribute on <code>&lt;html&gt;</code> using JavaScript, and define a second set of variables for dark mode.</li>
                    </ol>
                    <p className="mt-4 text-sm text-gray-400">
                        If you can get all four steps working, you've covered the core skill set this module is built around — and you'll have a small, reusable pattern you can drop straight into a real project.
                    </p>
                </section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/variables/js-calc" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Previous
                </Link>
                <Link to="/webdevelopment/css" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Return to CSS Hub <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};

export default AdvancedVariables;