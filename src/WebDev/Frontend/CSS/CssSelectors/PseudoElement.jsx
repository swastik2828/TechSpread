import React from 'react';
import { Star, ArrowRight, ArrowLeft, Quote, PenTool, Highlighter } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";

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
        tip: "border-green-500 bg-green-900/10 text-green-200",
        warning: "border-yellow-500 bg-yellow-900/10 text-yellow-200",
    };
    return <div className={`border-l-4 p-6 rounded-r-xl my-6 ${styles[type]}`}>{children}</div>;
};

const DataTable = ({ headers, rows }) => (
    <div className="overflow-x-auto my-6 border border-gray-800 rounded-xl">
        <table className="w-full text-left border-collapse text-sm">
            <thead className="bg-[#161b22]">
                <tr>{headers.map(h => <th key={h} className="p-4 border-b border-gray-800 font-bold text-white">{h}</th>)}</tr>
            </thead>
            <tbody className="divide-y divide-gray-800 bg-[#0d1117]">
                {rows.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-900/50 transition-colors">
                        {row.map((cell, j) => (
                            <td key={j} className={`p-4 font-mono ${j === 0 ? 'text-sky-400 font-bold' : 'text-gray-300'}`}>{cell}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

const PseudoElement = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Pseudo-Element Selectors — ::before, ::after, ::first-letter, ::selection"
                description="Master CSS pseudo-elements: ::before, ::after, ::first-line, ::first-letter, ::placeholder, ::selection, and ::marker with practical code examples."
                keywords="css pseudo-element, css ::before, css ::after, css ::first-letter, css ::selection, css ::placeholder, css ::marker"
                url="/webdevelopment/css/selectors/pseudo-element"
            />

            <header className="py-12 border-b border-gray-800 mb-12">

                <h1 className="text-5xl font-extrabold text-white mb-6">
                    Pseudo-Element <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">Selectors</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    Style virtual parts of elements that don't exist in the DOM — generated content, first letters, text selections, and more.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">

                <p>
                    While pseudo-classes target elements based on their state or position, pseudo-elements are fundamentally different: they create entirely new virtual elements — parts of the document that do not exist as actual nodes in the DOM tree. In CSS3 and later, pseudo-elements are written with a double colon (<code className="text-sky-300">::</code>) to distinguish them visually from pseudo-classes, though browsers continue to accept the single-colon syntax for historical compatibility.
                </p>

                <img
                    src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=1200"
                    alt="Typography and text design representing CSS pseudo-elements"
                    className="w-full h-64 object-cover rounded-xl my-8 border border-gray-800 shadow-2xl"
                />

                <Section title="::before and ::after" icon={PenTool}>
                    <p>
                        <code className="text-sky-300">::before</code> and <code className="text-sky-300">::after</code> are the most widely used pseudo-elements. They insert a virtual child as the very first or last child respectively of the selected element. The <code className="text-sky-300">content</code> property is required — even if set to an empty string — for these pseudo-elements to render.
                    </p>

                    <CodeBlock>
{`/* Required field markers — no extra HTML needed */
.required-label::after {
    content: " *";
    color: #dc3545;
    font-weight: bold;
}

/* Decorative opening curly quote */
.blockquote::before {
    content: "\\201C";
    font-size: 4rem;
    color: #2E75B6;
    line-height: 0;
    vertical-align: -0.4em;
    margin-right: 0.1em;
}

/* Classic clearfix — contains floated children */
.clearfix::after {
    content: "";
    display: table;
    clear: both;
}

/* Tooltip from data attribute */
[data-tooltip]::after {
    content: attr(data-tooltip);
    position: absolute;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.75rem;
    white-space: nowrap;
}`}
                    </CodeBlock>

                    <p>
                        The <code className="text-sky-300">content</code> property supports raw text strings, Unicode escape sequences for special characters, and the powerful <code className="text-sky-300">attr()</code> function which can inject the value of any HTML attribute directly into the generated content, enabling data-driven tooltips and labels from the markup itself.
                    </p>

                    <InfoBox type="important">
                        <strong>Accessibility Note:</strong> Screen readers handle <code className="text-sky-300">::before</code> and <code className="text-sky-300">::after</code> content inconsistently. Never use them for content that is essential to understanding the page — reserve them for purely decorative content or supplementary visual cues.
                    </InfoBox>
                </Section>

                <Section title="::first-line and ::first-letter" icon={Star}>
                    <p>
                        These pseudo-elements target specific portions of a block element's text content, enabling fine typographic control without any additional HTML markup.
                    </p>

                    <CodeBlock>
{`/* Style only the first line of a paragraph */
p::first-line {
    font-variant: small-caps;
    letter-spacing: 0.05em;
    font-weight: 600;
}

/* Classical drop cap — editorial typography */
article > p:first-of-type::first-letter {
    font-size: 3.5rem;
    font-weight: bold;
    float: left;
    line-height: 0.8;
    margin: 0.1em 0.1em 0 0;
    color: #1A3A5C;
    font-family: 'Georgia', serif;
}`}
                    </CodeBlock>

                    <p>
                        <code className="text-sky-300">::first-line</code> uniquely responds to the actual rendered content of the first line — which varies based on viewport width, font size, and text content. This means the browser dynamically determines what constitutes the first line at render time, applying the styles accordingly. Only a limited subset of CSS properties can be applied to <code className="text-sky-300">::first-line</code>: font properties, color, background, word-spacing, letter-spacing, text-decoration, and a few others. Properties relating to the box model (margin, padding, border) are not supported.
                    </p>

                    <InfoBox type="note">
                        <strong>Property Restrictions:</strong> <code className="text-sky-300">::first-line</code> supports a limited set of properties (font, color, letter-spacing, etc.). <code className="text-sky-300">::first-letter</code> supports a broader range including padding, margin, border, and float, enabling the classic drop-cap typographic treatment shown above.
                    </InfoBox>
                </Section>

                <Section title="::placeholder, ::selection, and ::marker" icon={Highlighter}>
                    <p>
                        These three pseudo-elements address specific, commonly needed styling scenarios in modern web development.
                    </p>

                    <CodeBlock>
{`/* Placeholder text in form inputs */
input::placeholder,
textarea::placeholder {
    color: #aaaaaa;
    font-style: italic;
    font-size: 0.9rem;
}

/* Custom text selection highlight */
::selection {
    background-color: #2E75B6;
    color: #ffffff;
}

/* List marker styling */
li::marker {
    color: #2E75B6;
    font-size: 1.2em;
    font-weight: bold;
}

ol li::marker {
    content: counter(list-item) ". ";
    color: #1A3A5C;
    font-weight: 700;
}`}
                    </CodeBlock>

                    <p>
                        <code className="text-sky-300">::placeholder</code> allows developers to style the placeholder text independently from the actual input value, improving visual clarity. <code className="text-sky-300">::selection</code> enables brand-consistent text highlighting — a small but memorable touch that contributes to a polished user experience. <code className="text-sky-300">::marker</code>, introduced in modern browsers, provides granular control over list bullets and numbers, including the ability to use the <code className="text-sky-300">content</code> property to replace the default marker with custom content.
                    </p>

                    <DataTable
                        headers={['Pseudo-Element', 'Description']}
                        rows={[
                            ['::before', 'Inserts generated content before the element\'s content'],
                            ['::after', 'Inserts generated content after the element\'s content'],
                            ['::first-line', 'Styles the first rendered line of a block element'],
                            ['::first-letter', 'Styles the first letter — enables drop caps'],
                            ['::placeholder', 'Styles form input and textarea placeholder text'],
                            ['::selection', 'Styles the portion of document text selected by the user'],
                            ['::marker', 'Styles list item markers (bullets and numbers)'],
                        ]}
                    />
                </Section>

                <Section title="The content Property in Depth" icon={Quote}>
                    <p>
                        The <code className="text-sky-300">content</code> property is exclusively applicable to <code className="text-sky-300">::before</code> and <code className="text-sky-300">::after</code> pseudo-elements. It accepts a variety of value types:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 my-6 text-gray-300">
                        <li><strong className="text-white">String literals</strong> — e.g. <code className="text-sky-300">content: "→"</code> or <code className="text-sky-300">content: "Required: "</code></li>
                        <li><strong className="text-white">Unicode escape sequences</strong> — e.g. <code className="text-sky-300">content: "\201C"</code> for an opening double quote</li>
                        <li><strong className="text-white">attr() function</strong> — e.g. <code className="text-sky-300">content: attr(data-label)</code> pulls the value from an HTML attribute</li>
                        <li><strong className="text-white">counter() function</strong> — e.g. <code className="text-sky-300">content: counter(section)</code> for auto-numbering sections</li>
                        <li><strong className="text-white">Empty string</strong> — e.g. <code className="text-sky-300">content: ""</code> creates a styleable box with no visible text content</li>
                    </ul>
                </Section>

            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/selectors/pseudo-class" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Pseudo-Class Selectors
                </Link>
                <Link to="/webdevelopment/css/selectors/specificity" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Specificity & the Cascade <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};

export default PseudoElement;
