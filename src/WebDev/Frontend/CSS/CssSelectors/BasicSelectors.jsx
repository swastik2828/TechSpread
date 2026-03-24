import React from 'react';
import { Hash, ArrowRight, ArrowLeft, Star, AlertTriangle, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CssSelectorSimulator from "../../../../simulators/web/css/CssSelectorSimulator";

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

const BasicSelectors = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="Basic CSS Selectors — Universal, Type, Class, ID"
                description="Master the fundamental CSS selectors: universal (*), type (element), class, and ID selectors with real examples and best practices."
                keywords="css universal selector, css type selector, css class selector, css id selector, css selector basics"
                url="/webdevelopment/css/selectors/basic"
            />

            <header className="py-12 border-b border-gray-800 mb-12">

                <h1 className="text-5xl font-extrabold text-white mb-6">
                    Basic <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">Selectors</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    The elemental building blocks of CSS — targeting elements by type, class, and ID.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">

                <p>
                    Basic selectors are the elemental building blocks of CSS. They match elements based on the most fundamental identifying characteristics of HTML: the element's type (tag name), its class attribute, or its unique identifier. Mastery of these three selector types — along with the universal selector — is essential before advancing to more complex constructs.
                </p>

                {/* Interactive Simulator */}
                <CssSelectorSimulator />

                <Section title="The Universal Selector" icon={Star}>
                    <p>
                        The universal selector is denoted by a single asterisk (<code className="text-sky-300">*</code>). It matches every element in the document, regardless of type, class, or any other characteristic. It is, in essence, a catch-all that applies to the entire element tree.
                    </p>

                    <CodeBlock>
{`* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}`}
                    </CodeBlock>

                    <p>
                        The above rule — commonly known as a CSS reset — is one of the most practical and widely used applications of the universal selector. It removes all default browser margins and padding, and switches every element to the border-box sizing model, providing a clean and predictable base for styling. While convenient, the universal selector should be used judiciously. In modern browsers selector matching is highly optimised, but it remains best practice to prefer more targeted selectors in performance-sensitive contexts.
                    </p>
                </Section>

                <Section title="The Type Selector" icon={Tag}>
                    <p>
                        The type selector (also called an element selector or tag selector) matches every instance of a specified HTML element type. It is written simply as the name of the HTML tag, without any additional prefix or symbol.
                    </p>

                    <CodeBlock>
{`p {
    font-size: 1rem;
    line-height: 1.6;
    color: #444444;
}

h1 {
    font-size: 2.25rem;
    font-weight: 700;
}`}
                    </CodeBlock>

                    <p>
                        In the first rule above, all paragraph elements in the document will receive the specified font size, line height, and colour. Type selectors are powerful because of their scope — a single rule can uniformly style every instance of an element across an entire website. They are ideal for establishing baseline typography, default link styles, and fundamental form element appearances. Note that type selectors are case-insensitive in HTML documents but case-sensitive in XML.
                    </p>
                </Section>

                <Section title="The Class Selector" icon={Hash}>
                    <p>
                        The class selector targets elements that have a specific value in their <code className="text-sky-300">class</code> attribute. It is written as a period (<code className="text-sky-300">.</code>) followed immediately by the class name. Class names are defined by the developer and applied to HTML elements via the class attribute.
                    </p>

                    <CodeBlock>
{`.button {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: #2E75B6;
    color: #ffffff;
    border-radius: 4px;
    cursor: pointer;
}`}
                    </CodeBlock>

                    <p>
                        Any HTML element bearing the class <code className="text-sky-300">button</code> — whether it is a button, anchor, div, or any other element — will receive these styles. This flexibility is a defining strength of class selectors: they are completely decoupled from element type, making styles fully reusable across different HTML elements.
                    </p>
                    <p>
                        HTML elements may have multiple classes, separated by spaces in the class attribute. To target elements that possess more than one specific class simultaneously, class selectors can be chained without any space between them:
                    </p>

                    <CodeBlock>
{`.button.button-primary {
    background-color: #1A3A5C;
}`}
                    </CodeBlock>

                    <p>
                        This selector matches only elements that have both the <code className="text-sky-300">button</code> class and the <code className="text-sky-300">button-primary</code> class. Class names are case-sensitive in CSS — a selector of <code className="text-sky-300">.button</code> will not match an element with <code className="text-sky-300">class="Button"</code>.
                    </p>
                </Section>

                <Section title="The ID Selector" icon={Hash}>
                    <p>
                        The ID selector targets a single element by its unique identifier, defined via the <code className="text-sky-300">id</code> attribute in HTML. It is written as a hash symbol (<code className="text-sky-300">#</code>) followed immediately by the ID value. According to the HTML specification, each ID must be unique within a document.
                    </p>

                    <CodeBlock>
{`#main-header {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #1A3A5C;
}`}
                    </CodeBlock>

                    <p>
                        Because IDs are unique, the ID selector by definition targets at most one element per page. Contemporary CSS best practices recommend restraint in using ID selectors for styling. Their significantly higher specificity makes their styles extremely difficult to override, which creates maintenance challenges in larger codebases. Many teams adopt the convention of reserving IDs exclusively for JavaScript hooks and accessibility anchors, relying solely on class selectors for all styling.
                    </p>

                    <InfoBox type="warning">
                        <strong>Best Practice:</strong> Avoid using ID selectors in your stylesheets. Reserve <code>#id</code> attributes for JavaScript targeting and in-page anchor links. The extremely high specificity of ID selectors makes overrides very difficult and leads to hard-to-maintain CSS in larger projects.
                    </InfoBox>
                </Section>

                <Section title="Selector Lists" icon={Hash}>
                    <p>
                        Any combination of selectors can be grouped into a selector list using commas. All elements matched by any selector in the list will receive the same declarations, eliminating redundant code:
                    </p>

                    <CodeBlock>
{`h1, h2, h3, h4, h5, h6 {
    font-family: 'Georgia', serif;
    line-height: 1.2;
}`}
                    </CodeBlock>

                    <p>
                        An important subtlety: if any single selector in a list is syntactically invalid, the entire rule is discarded by browsers that do not understand it. The <code className="text-sky-300">:is()</code> pseudo-class (covered in a later section) provides a forgiving alternative that is immune to this issue.
                    </p>

                    <DataTable
                        headers={['Selector', 'Example', 'What It Matches']}
                        rows={[
                            ['*', '* { box-sizing: border-box; }', 'Every element'],
                            ['type', 'p { line-height: 1.6; }', 'All <p> elements'],
                            ['.class', '.highlight { background: yellow; }', 'Elements with class="highlight"'],
                            ['#id', '#navbar { position: fixed; }', 'The element with id="navbar"'],
                            ['A, B', 'h1, h2, h3 { font-family: serif; }', 'All matched elements share the rule'],
                        ]}
                    />
                </Section>

            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/selectors/intro" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Introduction
                </Link>
                <Link to="/webdevelopment/css/selectors/attribute" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Attribute Selectors <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};

export default BasicSelectors;
