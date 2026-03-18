import React from 'react';
import { Code2, ArrowRight, ArrowLeft, Globe, Link as LinkIcon, Filter } from 'lucide-react';
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

const InfoBox = ({ type = "tip", children }) => {
    const styles = {
        tip: "border-green-500 bg-green-900/10 text-green-200",
        note: "border-sky-500 bg-sky-900/10 text-sky-200",
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

const AttributeSelectors = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Attribute Selectors — [attr], [attr=value], starts-with, ends-with"
                description="Learn all CSS attribute selectors: presence, exact match, word match, language match, starts-with, ends-with, and substring matching with real-world examples."
                keywords="css attribute selector, css [attr], css starts-with selector, css ends-with selector, css substring selector"
                url="/webdevelopment/css/selectors/attribute"
            />

            <header className="py-12 border-b border-gray-800 mb-12">

                <h1 className="text-5xl font-extrabold text-white mb-6">
                    Attribute <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">Selectors</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    Match elements by the presence or value of their HTML attributes — from simple presence checks to sophisticated substring matching.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">

                <p>
                    Attribute selectors provide a mechanism for matching HTML elements based on the presence or value of their attributes. They are enclosed within square brackets and offer a flexible range of matching operations, from simple presence checks to sophisticated substring matching. Attribute selectors are indispensable when working with data attributes, form elements, links, and any scenario where element behaviour is described through HTML attributes rather than class names.
                </p>

                <img
                    src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1200"
                    alt="HTML attribute code on screen"
                    className="w-full h-64 object-cover rounded-xl my-8 border border-gray-800 shadow-2xl"
                />

                <Section title="[attr] — Presence Selector" icon={Code2}>
                    <p>
                        The most basic attribute selector matches any element that possesses the specified attribute, regardless of the attribute's value:
                    </p>

                    <CodeBlock>
{`a[href] {
    text-decoration: underline;
}

input[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
}`}
                    </CodeBlock>

                    <p>
                        The first rule targets anchor elements that have an <code className="text-sky-300">href</code> attribute (i.e., functional links). The second targets input elements bearing the <code className="text-sky-300">disabled</code> attribute. This is particularly useful for progressive enhancement — styling elements that have certain capabilities differently from those that do not.
                    </p>
                </Section>

                <Section title={`[attr="value"] — Exact Match Selector`} icon={Filter}>
                    <p>
                        This selector matches elements where the specified attribute has a value exactly equal to the provided string:
                    </p>

                    <CodeBlock>
{`input[type="text"] {
    border: 1px solid #cccccc;
    padding: 0.5rem;
}

a[target="_blank"] {
    padding-right: 1.2em;
    background: url("external-link-icon.svg") no-repeat right center;
}`}
                    </CodeBlock>

                    <p>
                        The second example is a best-practice pattern: it visually signals to users that a link will open in a new tab, improving accessibility and user experience without requiring any additional HTML markup. Attribute selectors are particularly well-suited to this kind of semantic styling because they align CSS with the HTML's intended meaning.
                    </p>
                </Section>

                <Section title={`[attr~="value"] — Space-Separated Word Match`} icon={Filter}>
                    <p>
                        This selector matches elements where the attribute's value is a whitespace-separated list of words, and the specified word is one of them:
                    </p>

                    <CodeBlock>
{`[data-tags~="featured"] {
    border-left: 4px solid #E8501A;
}`}
                    </CodeBlock>

                    <p>
                        An element with <code className="text-sky-300">data-tags="featured new-arrival sale"</code> would match this selector because <code className="text-sky-300">featured</code> is one of the space-separated words. This pattern is most commonly applied to data attributes that carry multiple semantic values.
                    </p>
                </Section>

                <Section title={`[attr|="value"] — Hyphen-Separated Language Match`} icon={Globe}>
                    <p>
                        This selector matches elements where the attribute's value is either exactly the specified string, or begins with the specified string immediately followed by a hyphen. It was designed for matching language codes:
                    </p>

                    <CodeBlock>
{`[lang|="en"] {
    font-family: 'Georgia', serif;
}`}
                    </CodeBlock>

                    <p>
                        This rule matches elements with <code className="text-sky-300">lang="en"</code>, <code className="text-sky-300">lang="en-US"</code>, <code className="text-sky-300">lang="en-GB"</code>, and so on — the correct tool for applying language-specific styles without enumerating every regional variant explicitly.
                    </p>
                </Section>

                <Section title={`[attr^="value"] — Starts-With Selector`} icon={LinkIcon}>
                    <p>
                        This selector matches elements where the attribute's value begins with the specified string:
                    </p>

                    <CodeBlock>
{`a[href^="https"] {
    color: #2E75B6;
}

[class^="icon-"] {
    display: inline-block;
    width: 1em;
    height: 1em;
}`}
                    </CodeBlock>

                    <p>
                        The second example targets any element whose class attribute begins with the prefix <code className="text-sky-300">icon-</code>. This is a common pattern in icon systems where each icon class shares a common prefix such as <code className="text-sky-300">icon-home</code>, <code className="text-sky-300">icon-user</code>, or <code className="text-sky-300">icon-search</code>.
                    </p>
                </Section>

                <Section title={`[attr$="value"] — Ends-With Selector`} icon={LinkIcon}>
                    <p>
                        This selector matches elements where the attribute's value ends with the specified string:
                    </p>

                    <CodeBlock>
{`a[href$=".pdf"] {
    padding-right: 1.5em;
    background: url("pdf-icon.svg") no-repeat right center;
}`}
                    </CodeBlock>

                    <p>
                        This pattern automatically appends a PDF icon to all links pointing to PDF files, providing valuable context to the user without any HTML changes. This exemplifies how attribute selectors enable CSS authors to derive meaningful styling from the semantics already embedded in the markup.
                    </p>
                </Section>

                <Section title={`[attr*="value"] — Substring Match Selector`} icon={Filter}>
                    <p>
                        This selector matches elements where the attribute's value contains the specified string anywhere within it:
                    </p>

                    <CodeBlock>
{`[class*="col-"] {
    float: left;
    padding: 0 15px;
}`}
                    </CodeBlock>

                    <p>
                        The substring match selector is the most permissive of the value-matching operators. It is extremely useful for targeting a family of related elements — such as all grid column classes in a utility-first framework — without enumerating each individually. It should be used carefully, as overly broad substring patterns can produce unintended matches.
                    </p>
                </Section>

                <Section title="Case-Insensitive Matching with the i Flag" icon={Filter}>
                    <p>
                        By default, attribute value matching is case-sensitive. CSS Selectors Level 4 introduced the <code className="text-sky-300">i</code> flag, which makes value matching case-insensitive:
                    </p>

                    <CodeBlock>
{`input[type="text" i] {
    border: 1px solid #cccccc;
}`}
                    </CodeBlock>

                    <p>
                        With the <code className="text-sky-300">i</code> flag, this selector matches inputs with <code className="text-sky-300">type="text"</code>, <code className="text-sky-300">type="TEXT"</code>, <code className="text-sky-300">type="Text"</code>, and any other capitalisation variant. The flag is placed inside the square brackets after the value, separated by a space.
                    </p>

                    <InfoBox type="tip">
                        <strong>Real-World Use:</strong> Attribute selectors shine when styling form elements by type, automatically decorating links by their destination type, and applying styles to data attributes without extra class markup. They help you write semantic CSS that aligns the visual presentation with the HTML's inherent meaning.
                    </InfoBox>

                    <DataTable
                        headers={['Selector', 'Matches When Value…', 'Example']}
                        rows={[
                            ['[attr]', 'Attribute exists', '[disabled]'],
                            ['[attr="val"]', 'Exactly equals val', '[type="email"]'],
                            ['[attr~="val"]', 'Space-separated list contains val', '[data-tags~="new"]'],
                            ['[attr|="val"]', 'Equals val or starts with val-', '[lang|="fr"]'],
                            ['[attr^="val"]', 'Starts with val', '[href^="https"]'],
                            ['[attr$="val"]', 'Ends with val', '[href$=".pdf"]'],
                            ['[attr*="val"]', 'Contains val anywhere', '[class*="grid"]'],
                        ]}
                    />
                </Section>

            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/selectors/basic" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Basic Selectors
                </Link>
                <Link to="/webdevelopment/css/selectors/combinators" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Combinators <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};

export default AttributeSelectors;
