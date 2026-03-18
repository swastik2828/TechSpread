import React from 'react';
import { Telescope, ArrowLeft, Zap, Shield, Award, CheckCircle } from 'lucide-react';
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

const CodeBlock = ({ title = "styles.css", children }) => (
    <div className="my-6 rounded-xl overflow-hidden bg-[#0d1117] border border-gray-800 shadow-2xl">
        <div className="flex items-center gap-4 px-4 py-3 bg-[#161b22] border-b border-gray-800">
            <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/30 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/30 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/30 border border-green-500/50" />
            </div>
            <span className="text-xs font-bold text-gray-400 font-mono">{title}</span>
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
        important: "border-purple-500 bg-purple-900/10 text-purple-200",
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
                            <td key={j} className={`p-4 font-mono ${j === 0 ? 'text-sky-400 font-bold' : j === 1 ? 'text-orange-300' : 'text-gray-300'}`}>{cell}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

const HighlightBox = ({ title, children, color = "blue" }) => {
    const colors = {
        blue: "from-sky-500/10 to-cyan-500/10 border-sky-500/30",
        purple: "from-purple-500/10 to-pink-500/10 border-purple-500/30",
        green: "from-green-500/10 to-emerald-500/10 border-green-500/30",
    };
    return (
        <div className={`p-6 rounded-2xl bg-gradient-to-br ${colors[color]} border shadow-lg my-6`}>
            <h4 className="text-lg font-bold mb-3 text-white">{title}</h4>
            <div className="text-gray-300 text-sm leading-relaxed">{children}</div>
        </div>
    );
};

const AdvancedSelectors = () => (
    <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
        <SEO
            title="Advanced CSS Selectors, Performance & Best Practices"
            description="Master Level 4 CSS selectors (:is, :where, :has), selector performance, BEM methodology, and modern CSS naming best practices."
            keywords="advanced css selectors, css :is, css :where, css :has, css selector performance, BEM css, css naming conventions"
            url="/webdevelopment/css/selectors/advanced"
        />

        <header className="py-12 border-b border-gray-800 mb-12">

            <h1 className="text-5xl font-extrabold text-white mb-6">
                Advanced Selectors & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">Best Practices</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl">
                The most sophisticated modern selectors, performance considerations, naming methodologies, and a complete reference.
            </p>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">

            <p>
                This final section brings together the most sophisticated contemporary selectors introduced in CSS Selectors Level 4, examines performance considerations, and distils best practices from modern front-end engineering. Mastering these concepts separates proficient CSS authors from truly exceptional ones.
            </p>

            <img
                src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&q=80&w=1200"
                alt="Advanced web development concepts"
                className="w-full h-64 object-cover rounded-xl my-8 border border-gray-800 shadow-2xl"
            />

            <Section title="CSS Selectors Level 4 — The Cutting Edge" icon={Zap}>
                <p>
                    The Selectors Level 4 specification introduces several powerful new constructs that dramatically reduce CSS verbosity and unlock styling patterns previously impossible without JavaScript.
                </p>

                <CodeBlock>
{`/* :is() — combine multiple selectors, takes highest arg specificity */
:is(article, section, aside) :is(h1, h2, h3) {
    margin-top: 1.5rem;
    font-family: 'Georgia', serif;
}

/* :where() — same as :is() but contributes ZERO specificity */
:where(ul, ol, dl) {
    list-style: none;
    padding: 0;
    margin: 0;
}

/* :has() — parent / relational selector */
figure:has(figcaption) {
    border: 1px solid #cccccc;
    padding: 1rem;
    border-radius: 4px;
}

.card:has(img) {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
}

.form-group:has(input:invalid) {
    border-left: 4px solid #dc3545;
}

h2:has(+ p) {
    margin-bottom: 0.25rem;  /* Tighten spacing when a p directly follows */
}

/* Hide containers with no children */
.grid:not(:has(*)) {
    display: none;
}

/* @scope — CSS Cascade Level 5 (emerging) */
@scope (.card) {
    .title { font-size: 1.25rem; }
    .body  { color: #444444; }
}`}
                </CodeBlock>

                <InfoBox type="note">
                    <strong>:has() Browser Support:</strong> Supported in Chrome 105+, Safari 15.4+, and Firefox 121+. As of 2024, it has strong support across all modern browsers. The key practical use is selecting parents and ancestors based on their descendants — something CSS could not do for its entire history.
                </InfoBox>
            </Section>

            <Section title="Selector Performance Considerations" icon={Shield}>
                <p>
                    Browsers evaluate selectors <strong className="text-white">right to left</strong>. For the selector <code className="text-sky-300">.nav a:hover</code>, the engine first finds all hovered elements, then filters for anchors, then checks for a <code className="text-sky-300">.nav</code> ancestor. The rightmost selector — the key selector — has the greatest performance impact, as it determines the initial candidate set.
                </p>

                <div className="grid gap-4 my-6">
                    {[
                        { icon: '⚡', title: 'Keep selectors short and specific', detail: 'Fewer matching steps means faster rendering — especially on large DOMs.' },
                        { icon: '🚫', title: 'Avoid universal key selectors', detail: '.sidebar * forces the browser to inspect every element in the document.' },
                        { icon: '✅', title: 'Prefer class over attribute selectors for hot paths', detail: 'Class matching is heavily optimised internally by all major browser engines.' },
                        { icon: '🎨', title: 'Use transform and opacity for animations', detail: 'GPU-composited properties avoid triggering layout (reflow) which is expensive.' },
                        { icon: '📦', title: 'Avoid overly qualified selectors', detail: 'div.container is no more specific than .container, just harder for engines to parse.' },
                    ].map(item => (
                        <div key={item.title} className="flex gap-4 p-4 rounded-xl bg-[#0d1117] border border-gray-800">
                            <span className="text-2xl shrink-0">{item.icon}</span>
                            <div>
                                <p className="font-bold text-white text-sm">{item.title}</p>
                                <p className="text-gray-500 text-xs mt-0.5">{item.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <InfoBox type="important">
                    <strong>Context Matters:</strong> Selector performance is rarely the bottleneck in real applications. Layout, paint, and JavaScript are almost always significantly more expensive. Write selectors for <em>maintainability first</em>; optimise only with profiler evidence.
                </InfoBox>
            </Section>

            <Section title="CSS Naming Methodologies" icon={Award}>
                <p>
                    Naming conventions are architectural decisions that have a direct impact on the specificity landscape of a stylesheet and its long-term maintainability. Several methodologies have emerged to address these challenges.
                </p>

                <HighlightBox title="BEM — Block Element Modifier" color="blue">
                    <p>The most widely-adopted CSS naming convention in professional front-end development. Every selector is a single class at (0,1,0) specificity — completely flat.</p>
                    <CodeBlock title="BEM Example">
{`.card { }                          /* Block */
.card__image { }                   /* Element */
.card__title { }                   /* Element */
.card--featured { }                /* Modifier */
.card__title--large { }            /* Element + Modifier */

/* In HTML: */
/* <div class="card card--featured">
     <img class="card__image" ...>
     <h2 class="card__title card__title--large">Title</h2>
   </div> */`}
                    </CodeBlock>
                </HighlightBox>

                <HighlightBox title="CUBE CSS" color="purple">
                    <p>Composition, Utility, Block, Exception — a modern methodology that embraces the cascade rather than fighting it. Designed to work with the natural cascade, specificity, and inheritance rather than override them with artificial constraints.</p>
                </HighlightBox>

                <HighlightBox title="Utility-First (Tailwind CSS approach)" color="green">
                    <p>Styling via atomic utility classes applied directly in HTML. Results in near-zero custom CSS authored by developers. Best for teams that prioritise design-system consistency and rapid iteration over semantic CSS architecture.</p>
                </HighlightBox>
            </Section>

            <Section title="Complete Selector Quick Reference" icon={Telescope}>
                <DataTable
                    headers={['Category', 'Selector', 'What It Targets']}
                    rows={[
                        ['Basic', '* { }', 'All elements'],
                        ['Basic', 'p { }', 'All paragraph elements'],
                        ['Basic', '.class { }', 'Elements with matching class attribute'],
                        ['Basic', '#id { }', 'Element with matching ID attribute'],
                        ['Attribute', '[attr] { }', 'Elements possessing the attribute'],
                        ['Attribute', '[attr^="val"] { }', 'Value starts with val'],
                        ['Attribute', '[attr$="val"] { }', 'Value ends with val'],
                        ['Attribute', '[attr*="val"] { }', 'Value contains val anywhere'],
                        ['Combinator', 'A B { }', 'B is a descendant of A (any depth)'],
                        ['Combinator', 'A > B { }', 'B is a direct child of A only'],
                        ['Combinator', 'A + B { }', 'B immediately follows A (sibling)'],
                        ['Combinator', 'A ~ B { }', 'B follows A among any siblings'],
                        ['Pseudo-Class', ':hover { }', 'Element under pointer'],
                        ['Pseudo-Class', ':nth-child(n) { }', 'Every nth child element'],
                        ['Pseudo-Class', ':not(sel) { }', 'Elements not matching sel'],
                        ['Pseudo-Class', ':has(sel) { }', 'Elements containing matching sel'],
                        ['Pseudo-Class', ':is(A, B) { }', 'Matches A or B (with specificity)'],
                        ['Pseudo-Class', ':where(A, B) { }', 'Matches A or B (zero specificity)'],
                        ['Pseudo-Element', '::before { }', 'Generated content before element'],
                        ['Pseudo-Element', '::after { }', 'Generated content after element'],
                        ['Pseudo-Element', '::first-line { }', 'First rendered line of text'],
                        ['Pseudo-Element', '::selection { }', 'User-highlighted text'],
                    ]}
                />
            </Section>

            <Section title="Key Takeaways" icon={CheckCircle}>
                <p className="text-xl text-white font-semibold italic mb-6">
                    "CSS Selectors are not merely a technical detail — they are the expressive vocabulary through which designers and engineers communicate intent to the browser."
                </p>
                <ul className="space-y-3">
                    {[
                        'A CSS selector is a pattern that targets DOM elements for styling.',
                        'Basic selectors (type, class, ID) are the foundation — master these first.',
                        'Attribute selectors enable semantic, markup-driven styling without extra classes.',
                        'Combinators encode structural relationships: descendant, child, sibling.',
                        'Pseudo-classes style elements based on state or position — no extra HTML needed.',
                        'Pseudo-elements create virtual content before/after or within elements.',
                        'Specificity (A,B,C) determines which rule wins; prefer classes for styling.',
                        'Modern Level 4 selectors (:has, :is, :where) dramatically reduce CSS verbosity.',
                    ].map(tk => (
                        <li key={tk} className="flex gap-3 p-3 rounded-lg bg-sky-900/10 border border-sky-500/20">
                            <CheckCircle size={15} className="text-sky-400 mt-0.5 shrink-0" />
                            <span className="text-gray-300 text-sm">{tk}</span>
                        </li>
                    ))}
                </ul>
            </Section>
        </div>

        <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
            <Link to="/webdevelopment/css/selectors/specificity" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                <ArrowLeft size={16} /> Specificity & the Cascade
            </Link>
            <div className="px-5 py-3 rounded-xl bg-gray-900/40 border border-gray-800 text-gray-600 text-sm">
                Module Complete 🎉
            </div>
        </div>
    </article>
);

export default AdvancedSelectors;
