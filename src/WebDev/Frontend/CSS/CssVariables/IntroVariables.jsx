import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette } from 'lucide-react';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";

const IntroVariables = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Custom Properties — Introduction & Syntax"
                description="Learn the fundamentals of CSS Custom Properties (Variables), why they matter, and how to declare and consume them globally using the :root selector."
                keywords="css variables, css custom properties, web design, frontend"
                url="/webdevelopment/css/variables/intro"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-br from-sky-500/20 to-cyan-500/20 rounded-lg border border-sky-500/30 text-sky-400">
                        <Palette size={24} />
                    </div>
                    <span className="text-sky-400 font-bold tracking-widest uppercase text-sm">CSS Course / Module 15</span>
                </div>
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    CSS <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">Custom Properties</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    Imagine you built a website with a brand color used in 40 different places. Then the client asks to make it "a bit more purple." With CSS variables, you change one line, and the entire site updates instantly.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">What Is a Custom Property?</h2>
                    <p>
                        A CSS custom property (informally called a "CSS variable") is a value you define once and reuse anywhere in your stylesheet. It always starts with two dashes (<code>--</code>), and you read it back using the <code>var()</code> function.
                    </p>
                    
                    <CodeBlock 
                        language="css"
                        code={`:root {\n  --brand-color: #3a86ff;\n}\n\n.button {\n  background-color: var(--brand-color);\n}\n\n.link {\n  color: var(--brand-color);\n}`}
                    />
                    
                    <p className="mt-4">
                        Two important pieces of vocabulary here:
                    </p>
                    <ul className="list-disc pl-5 text-gray-400 space-y-2 mt-4">
                        <li><strong>Declaring</strong> a variable means defining it: <code>--brand-color: #3a86ff;</code></li>
                        <li><strong>Consuming</strong> a variable means using it: <code>var(--brand-color)</code></li>
                    </ul>
                    <div className="border-l-4 p-6 rounded-r-xl my-6 border-amber-500 bg-amber-900/10 text-amber-200">
                        <strong>Naming Convention:</strong> You can name a custom property almost anything, but it is case-sensitive (<code>--Brand</code> vs <code>--brand</code>). Stick to lowercase with hyphens to match standard CSS property conventions.
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Why :root?</h2>
                    <p>
                        <code>:root</code> is a special selector that targets the highest-level element in the document (the <code>&lt;html&gt;</code> tag, but with higher specificity). Declaring variables there makes them available <strong>everywhere</strong> on the page. Think of <code>:root</code> as the "global settings" file for your CSS.
                    </p>
                </section>
            </div>

            <div className="flex justify-end mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/variables/palette-fallbacks" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Palettes & Fallbacks <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};

export default IntroVariables;