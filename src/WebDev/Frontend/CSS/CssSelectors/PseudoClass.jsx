import React from 'react';
import { Zap, ArrowRight, ArrowLeft, Heart, Shield, AlignJustify } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CssPseudoClassSimulator from "../../../../simulators/web/css/CssPseudoClassSimulator";

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
        important: "border-purple-500 bg-purple-900/10 text-purple-200",
        tip: "border-green-500 bg-green-900/10 text-green-200",
        warning: "border-yellow-500 bg-yellow-900/10 text-yellow-200",
    };
    return <div className={`border-l-4 p-6 rounded-r-xl my-6 ${styles[type]}`}>{children}</div>;
};

const PseudoClass = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Pseudo-Class Selectors — :hover, :focus, :nth-child, :has()"
                description="Complete guide to CSS pseudo-class selectors — user actions, link states, form states, structural positioning, and modern Level 4 selectors like :has()."
                keywords="css pseudo-class, css :hover, css :focus, css :nth-child, css :has, css :not, css :is, css :where"
                url="/webdevelopment/css/selectors/pseudo-class"
            />

            <header className="py-12 border-b border-gray-800 mb-12">

                <h1 className="text-5xl font-extrabold text-white mb-6">
                    Pseudo-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">Selectors</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    Style elements based on state, position, user interaction, and form validity — without touching the HTML.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">

                <p>
                    Pseudo-classes are keywords added to selectors that express a special state of the selected element or a particular positional relationship within the document. They begin with a single colon (<code className="text-sky-300">:</code>) and allow CSS authors to style elements dynamically — based on user interaction, DOM structure, or element state — without requiring any additional HTML classes or JavaScript.
                </p>

                {/* Interactive Simulator */}
                <CssPseudoClassSimulator />

                <Section title="User Action Pseudo-Classes" icon={Heart}>
                    <p>
                        These pseudo-classes reflect dynamic states that arise from user interaction with the page. They are the basis for all hover effects, focus styles, and active button states.
                    </p>

                    <CodeBlock>
{`/* :hover — pointer is over the element */
a:hover {
    color: #E8501A;
    text-decoration: underline;
}

.card:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
    transition: all 0.2s ease;
}

/* :focus — element has keyboard or click focus */
input:focus {
    outline: 2px solid #2E75B6;
    outline-offset: 2px;
}

/* :focus-visible — focus only for keyboard navigation */
button:focus-visible {
    outline: 2px solid #2E75B6;
    outline-offset: 2px;
}

button:focus:not(:focus-visible) {
    outline: none;
}

/* :active — element is being activated (clicked/pressed) */
button:active {
    transform: scale(0.97);
    background-color: #1A3A5C;
}`}
                    </CodeBlock>

                    <p>
                        The distinction between <code className="text-sky-300">:focus</code> and <code className="text-sky-300">:focus-visible</code> is important for modern accessible design. <code className="text-sky-300">:focus</code> triggers for any focus event — including mouse clicks — while <code className="text-sky-300">:focus-visible</code> only activates when the browser determines the user is navigating by keyboard, allowing developers to provide clear keyboard focus indicators without showing focus rings on mouse interaction.
                    </p>

                    <InfoBox type="important">
                        <strong>Accessibility:</strong> Never remove focus outlines without providing an equally clear alternative. Users navigating by keyboard depend on visible focus indicators to understand which element is currently active. <code className="text-sky-300">:focus-visible</code> provides the best balance between aesthetics and accessibility.
                    </InfoBox>
                </Section>

                <Section title="Link Pseudo-Classes" icon={Heart}>
                    <p>
                        Links have four distinct states, each addressable by a dedicated pseudo-class. The order in which these are declared in the stylesheet is critical because of the cascade:
                    </p>

                    <CodeBlock>
{`a:link    { color: #2E75B6; }    /* Unvisited links */
a:visited { color: #7B2D8B; }    /* Visited links */
a:hover   { color: #E8501A; }    /* Pointer hovering */
a:active  { color: #C0392B; }    /* Being clicked */`}
                    </CodeBlock>

                    <p>
                        The mnemonic <strong className="text-white">LoVe HAte</strong> (Link, Visited, Hover, Active) encodes the required order. Deviating from this order causes earlier declarations to be overridden by later, equal-specificity ones, producing incorrect visual results. For example, if <code className="text-sky-300">:hover</code> is declared before <code className="text-sky-300">:visited</code>, hovering over a visited link will not show the hover colour.
                    </p>
                </Section>

                <Section title="Form State Pseudo-Classes" icon={Shield}>
                    <p>
                        CSS provides a rich set of pseudo-classes for reflecting the current state of form elements, enabling purely CSS-driven form validation feedback:
                    </p>

                    <CodeBlock>
{`input:valid         { border-color: #28a745; }
input:invalid       { border-color: #dc3545; }
input:disabled      { background-color: #f0f0f0; cursor: not-allowed; }
input:enabled       { background-color: #ffffff; }
input:read-only     { background-color: #f8f9fa; }
input:checked       + label { font-weight: bold; }
input:placeholder-shown { border-style: dashed; }`}
                    </CodeBlock>

                    <p>
                        A critical subtlety: <code className="text-sky-300">:valid</code> and <code className="text-sky-300">:invalid</code> apply from the moment the page loads — before the user has had any opportunity to interact with a field. This can cause fields to appear red immediately, which is poor UX. The solution is to combine these with <code className="text-sky-300">:not(:placeholder-shown)</code> to only activate validation styling after the user has started typing:
                    </p>

                    <CodeBlock>
{`input:not(:placeholder-shown):invalid {
    border-color: #dc3545;
    background-color: #fff5f5;
}

input:not(:placeholder-shown):valid {
    border-color: #28a745;
    background-color: #f0fff4;
}`}
                    </CodeBlock>
                </Section>

                <Section title="Structural Pseudo-Classes" icon={AlignJustify}>
                    <p>
                        Structural pseudo-classes allow elements to be selected based on their position and relationships within their parent's children. They enable styling patterns such as zebra-striping, first/last element treatments, and layout-driven conditional styling.
                    </p>

                    <CodeBlock>
{`/* First and last children */
li:first-child { font-weight: bold; }
li:last-child  { border-bottom: none; }
p:only-child   { text-align: center; }

/* nth-child — zebra-stripe table rows */
tr:nth-child(even) { background-color: #EBF3FB; }
tr:nth-child(odd)  { background-color: #FFFFFF; }

/* An+B notation — every 3rd item starting from 1 */
li:nth-child(3n+1) { color: #2E75B6; }

/* First of type among siblings */
p:first-of-type { font-size: 1.15rem; font-weight: 500; }

/* Empty elements */
div:empty { display: none; }`}
                    </CodeBlock>

                    <p>
                        The <code className="text-sky-300">:nth-child(An+B)</code> expression deserves special attention. The <code className="text-sky-300">A</code> parameter defines the cycle size, while <code className="text-sky-300">B</code> defines the offset. Common patterns include:
                    </p>

                    <ul className="list-disc pl-6 space-y-2 my-4 text-gray-300">
                        <li><code className="text-sky-300">:nth-child(2n)</code> or <code className="text-sky-300">:nth-child(even)</code> — every second element</li>
                        <li><code className="text-sky-300">:nth-child(3n)</code> — every third element</li>
                        <li><code className="text-sky-300">:nth-child(n+4)</code> — all elements from the fourth onwards</li>
                        <li><code className="text-sky-300">:nth-child(-n+3)</code> — only the first three elements</li>
                    </ul>
                </Section>

                <Section title=":not(), :is(), :where(), and :has()" icon={Zap}>
                    <p>
                        CSS Selectors Level 3 introduced the <code className="text-sky-300">:not()</code> pseudo-class; Selectors Level 4 dramatically expanded the pseudo-class vocabulary with <code className="text-sky-300">:is()</code>, <code className="text-sky-300">:where()</code>, and the groundbreaking <code className="text-sky-300">:has()</code>.
                    </p>

                    <CodeBlock>
{`/* :not() — exclude matching elements */
p:not(.intro) { font-size: 0.95rem; }

/* :is() — forgiving selector list, takes specificity of its highest-specificity argument */
:is(h1, h2, h3, h4, h5, h6) {
    font-family: 'Georgia', serif;
}

:is(article, section, aside) :is(h2, h3) {
    margin-top: 2rem;
}

/* :where() — same as :is() but contributes ZERO specificity */
:where(ul, ol) {
    list-style: none;
    padding: 0;
}

/* :has() — the "parent selector" — available since Chrome 105, Safari 15.4, Firefox 121 */
figure:has(figcaption) {
    border: 1px solid #cccccc;
    padding: 1rem;
}

.card:has(img) {
    display: grid;
    grid-template-columns: auto 1fr;
}

.form-group:has(input:invalid) {
    border-left: 4px solid #dc3545;
}`}
                    </CodeBlock>

                    <p>
                        <code className="text-sky-300">:has()</code> is the most significant addition to CSS selectors in years. Often referred to as the "parent selector", it allows an element to be selected based on what it contains — something previously impossible in CSS and requiring JavaScript. The <code className="text-sky-300">:where()</code> pseudo-class is uniquely valuable for utility and reset stylesheets because its zero specificity makes all rules effortlessly overridable.
                    </p>

                    <InfoBox type="note">
                        <strong>:is() vs :where():</strong> Both accept a forgiving selector list, but they differ in specificity. <code className="text-sky-300">:is(h1, .title, #hero)</code> takes the specificity of its highest-specificity argument — in this case the ID. <code className="text-sky-300">:where()</code> always contributes zero specificity, no matter what selectors it contains.
                    </InfoBox>
                </Section>

            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/selectors/combinators" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Combinators
                </Link>
                <Link to="/webdevelopment/css/selectors/pseudo-element" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Pseudo-Element Selectors <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};

export default PseudoClass;
