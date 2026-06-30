import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";

const JavascriptCalc = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Variables with JavaScript & Calc()"
                description="Learn how to manipulate CSS custom properties using JavaScript and how to scale design systems mathematically using the calc() function."
                keywords="css calc, javascript css variables, dynamic css"
                url="/webdevelopment/css/variables/js-calc"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <h1 className="text-4xl font-extrabold text-white mb-4">JavaScript & Calc()</h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    Custom properties exist in the DOM at runtime. This means JavaScript can talk directly to your CSS, and CSS can perform math based on shared tokens.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Reading and Writing with JavaScript</h2>
                    <p>
                        Because custom properties are a real part of the CSS object model, JavaScript can read and update them directly. This opens the door to things like live color pickers, cursor tracking, or font-size sliders.
                    </p>
                    
                    <h3 className="text-xl font-bold text-sky-400 mt-6 mb-2">Setting a variable</h3>
                    <CodeBlock 
                        language="javascript"
                        code={`document.documentElement.style.setProperty("--brand-color", "#9b5de5");`}
                    />

                    <h3 className="text-xl font-bold text-sky-400 mt-6 mb-2">Reading a variable</h3>
                    <CodeBlock 
                        language="javascript"
                        code={`const styles = getComputedStyle(document.documentElement);\nconst brandColor = styles.getPropertyValue("--brand-color").trim();`}
                    />
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Doing Math with calc()</h2>
                    <p>
                        Custom properties become even more useful when paired with <code>calc()</code>, because you can build an entire spacing or sizing system off of a single base number.
                    </p>
                    <CodeBlock 
                        language="css"
                        code={`:root {\n  --space-unit: 8px;\n}\n\n.tight  { padding: calc(var(--space-unit) * 1); }  /* 8px  */\n.normal { padding: calc(var(--space-unit) * 2); }  /* 16px */\n.loose  { padding: calc(var(--space-unit) * 4); }  /* 32px */`}
                    />
                    <p className="mt-6">
                        Change <code>--space-unit</code> to <code>10px</code> once, and every spacing value across your entire site scales proportionally. A small but important rule: <code>calc()</code> requires a space around <code>+</code> and <code>-</code> operators.
                    </p>
                </section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/variables/scoping-theme" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Previous
                </Link>
                <Link to="/webdevelopment/css/variables/advanced" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Architecture & Recap <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};

export default JavascriptCalc;