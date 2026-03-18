import React from 'react';
import { GitBranch, ArrowRight, ArrowLeft, ChevronRight, Layers } from 'lucide-react';
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
        important: "border-purple-500 bg-purple-900/10 text-purple-200",
        tip: "border-green-500 bg-green-900/10 text-green-200",
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

const Combinators = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Combinators — Descendant, Child, Adjacent, General Sibling"
                description="Master all four CSS combinators: descendant (space), child (>), adjacent sibling (+), and general sibling (~) selectors with real examples."
                keywords="css combinators, css descendant selector, css child selector, css adjacent sibling, css general sibling"
                url="/webdevelopment/css/selectors/combinators"
            />

            <header className="py-12 border-b border-gray-800 mb-12">

                <h1 className="text-5xl font-extrabold text-white mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">Combinators</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    Target elements based on how they relate structurally to other elements in the DOM tree.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">

                <p>
                    Combinators are symbols placed between simple selectors to define a structural relationship between elements in the DOM tree. Rather than targeting an element in isolation, combinators allow CSS authors to select elements based on how they relate to their ancestors, descendants, parents, children, and siblings. There are four fundamental combinators in CSS, each encoding a different type of relationship.
                </p>

                <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200"
                    alt="Structured code relationships representing DOM hierarchy"
                    className="w-full h-64 object-cover rounded-xl my-8 border border-gray-800 shadow-2xl"
                />

                <Section title="Descendant Combinator (Space)" icon={Layers}>
                    <p>
                        The descendant combinator is the most commonly used combinator in CSS. It is represented by whitespace between two selectors. It selects all elements matching the right-hand selector that are descendants — at any depth — of an element matching the left-hand selector.
                    </p>

                    <CodeBlock>
{`article p {
    font-size: 1rem;
    line-height: 1.7;
}

.sidebar a {
    color: #2E75B6;
    text-decoration: none;
}`}
                    </CodeBlock>

                    <p>
                        The first rule targets all paragraph elements that exist anywhere inside an <code className="text-sky-300">article</code> element — whether direct children, grandchildren, or nested at any greater depth. While powerful, deeply nested descendant selectors are difficult to maintain and may create specificity problems. Contemporary best practice favours flatter class hierarchies that avoid long combinator chains.
                    </p>
                </Section>

                <Section title="Child Combinator (>)" icon={ChevronRight}>
                    <p>
                        The child combinator, represented by the greater-than sign (<code className="text-sky-300">&gt;</code>), is more precise than the descendant combinator. It selects only elements matching the right-hand selector that are direct children of elements matching the left-hand selector. Grandchildren and deeper descendants are not selected.
                    </p>

                    <CodeBlock>
{`ul > li {
    list-style-type: disc;
    margin-bottom: 0.5rem;
}

.nav > .nav-item {
    display: inline-block;
    padding: 0 1rem;
}`}
                    </CodeBlock>

                    <p>
                        The child combinator is particularly useful when dealing with nested structures such as nested lists, navigation menus, or tables, where applying a rule to all descendants would unintentionally affect inner elements. By restricting the match to direct children, the rule's scope is precisely controlled.
                    </p>
                </Section>

                <Section title="Adjacent Sibling Combinator (+)" icon={GitBranch}>
                    <p>
                        The adjacent sibling combinator, represented by the plus sign (<code className="text-sky-300">+</code>), selects an element that is the immediately following sibling of another element. Both elements must share the same parent.
                    </p>

                    <CodeBlock>
{`h2 + p {
    font-size: 1.1rem;
    font-weight: 500;
    color: #333333;
}

input[type='checkbox']:checked + label {
    font-weight: bold;
    color: #2E75B6;
}`}
                    </CodeBlock>

                    <p>
                        The first rule applies lead paragraph styling to any paragraph that immediately follows an <code className="text-sky-300">h2</code> element — an elegant typographic convention implemented without additional classes. The second example demonstrates how powerful selector composition can be, combining an attribute selector, a pseudo-class, and the adjacent sibling combinator to style interactive form elements purely in CSS.
                    </p>
                    <p>
                        The key constraint of this combinator is that the two elements must be immediately adjacent in the DOM with no other sibling elements between them.
                    </p>

                    <InfoBox type="important">
                        <strong>Common Technique:</strong> The <code className="text-sky-300">input:checked + label</code> pattern is the foundation of CSS-only toggles, accordions, and custom checkboxes — all without a single line of JavaScript.
                    </InfoBox>
                </Section>

                <Section title="General Sibling Combinator (~)" icon={GitBranch}>
                    <p>
                        The general sibling combinator, represented by the tilde (<code className="text-sky-300">~</code>), selects all elements matching the right-hand selector that appear after an element matching the left-hand selector among the same siblings. Unlike the adjacent sibling combinator, the matched elements do not need to be immediately following — they simply need to come after the reference element within the same parent.
                    </p>

                    <CodeBlock>
{`h2 ~ p {
    color: #444444;
}

.toggle:checked ~ .panel {
    display: block;
    max-height: 500px;
}`}
                    </CodeBlock>

                    <p>
                        The second rule is a classic CSS-only accordion pattern: a hidden panel becomes visible when a preceding checkbox is in the checked state. This technique leverages the general sibling combinator to create interactive UI components without JavaScript, demonstrating the expressive power CSS selectors can achieve when thoughtfully combined.
                    </p>
                </Section>

                <Section title="Combining Combinators" icon={GitBranch}>
                    <p>
                        Combinators can be freely combined in a single selector to express complex structural relationships:
                    </p>

                    <CodeBlock>
{`.card > .card-header + .card-body {
    border-top: 1px solid #cccccc;
}`}
                    </CodeBlock>

                    <p>
                        This rule selects elements with the class <code className="text-sky-300">card-body</code> that are direct children of <code className="text-sky-300">.card</code> elements AND are immediately preceded by a sibling with the class <code className="text-sky-300">card-header</code>. Such chained combinators allow for surgical precision in targeting specific DOM patterns.
                    </p>

                    <InfoBox type="tip">
                        <strong>Best Practice:</strong> Avoid nesting combinators more than two or three levels deep. Deeply chained selectors become difficult to read, brittle when the HTML structure changes, and carry higher specificity than necessary.
                    </InfoBox>

                    <DataTable
                        headers={['Combinator', 'Symbol', 'Relationship Described']}
                        rows={[
                            ['Descendant', 'A B (space)', 'B is a descendant of A at any depth'],
                            ['Child', 'A > B', 'B is a direct child of A only'],
                            ['Adjacent Sibling', 'A + B', 'B is the immediately adjacent sibling after A'],
                            ['General Sibling', 'A ~ B', 'B is any subsequent sibling of A'],
                        ]}
                    />
                </Section>

            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/selectors/attribute" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Attribute Selectors
                </Link>
                <Link to="/webdevelopment/css/selectors/pseudo-class" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Pseudo-Class Selectors <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};

export default Combinators;
