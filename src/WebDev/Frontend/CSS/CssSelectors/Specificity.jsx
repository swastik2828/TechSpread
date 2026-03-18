import React from 'react';
import { Shield, ArrowRight, ArrowLeft, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CssSpecificitySimulator from "../../../../simulators/web/CssSpecificitySimulator";

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
        warning: "border-yellow-500 bg-yellow-900/10 text-yellow-200",
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

const Specificity = () => (
    <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
        <SEO
            title="CSS Specificity & The Cascade — A Complete Guide"
            description="Understand how CSS specificity (A,B,C) works, the cascade algorithm, !important, and best practices for maintainable CSS."
            keywords="css specificity, css cascade, css !important, css inheritance, specificity calculator"
            url="/webdevelopment/css/selectors/specificity"
        />

        <header className="py-12 border-b border-gray-800 mb-12">
            <h1 className="text-5xl font-extrabold text-white mb-6">
                Specificity & the <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">Cascade</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl">
                Understand exactly how browsers decide which styles win when rules conflict.
            </p>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
            <p>
                Understanding how browsers decide which CSS declarations to apply when multiple rules conflict is one of the most important concepts in CSS. The answer lies in two interrelated mechanisms: specificity and the cascade.
            </p>

            <CssSpecificitySimulator />

            <Section title="What Is Specificity?" icon={Shield}>
                <p>
                    Specificity is a numerical weight assigned to every CSS selector. When two or more rules target the same element and declare the same property, the browser applies the declaration from the rule with higher specificity. Specificity is calculated as a three-component value, written <code className="text-sky-300">(A, B, C)</code>:
                </p>

                <div className="grid sm:grid-cols-3 gap-4 my-8">
                    {[
                        { letter: 'A', label: 'ID Selectors', eg: '#navbar', color: 'text-red-400 border-red-500/30 bg-red-900/10' },
                        { letter: 'B', label: 'Class + Attribute + Pseudo-class', eg: '.card, [href], :hover', color: 'text-yellow-400 border-yellow-500/30 bg-yellow-900/10' },
                        { letter: 'C', label: 'Type + Pseudo-element', eg: 'p, h1, ::before', color: 'text-green-400 border-green-500/30 bg-green-900/10' },
                    ].map(s => (
                        <div key={s.letter} className={`p-5 rounded-2xl border ${s.color} text-center`}>
                            <div className={`text-5xl font-black mb-2 ${s.color.split(' ')[0]}`}>{s.letter}</div>
                            <div className="text-white font-bold text-sm mb-1">{s.label}</div>
                            <div className="font-mono text-xs text-gray-500 mt-1">{s.eg}</div>
                        </div>
                    ))}
                </div>

                <p>
                    Each ID selector increments A. Each class, attribute selector, or pseudo-class increments B. Each type selector or pseudo-element increments C. The universal selector, combinators, and <code className="text-sky-300">:not()/:where()</code> themselves contribute zero. Specificity is compared left to right: a single ID (1,0,0) outweighs any number of classes.
                </p>

                <InfoBox type="important">
                    <strong>Key Rule:</strong> Specificity is not decimal. (1,0,0) always beats (0,999,999). There is no way to overflow a lower column into a higher one.
                </InfoBox>

                <DataTable
                    headers={['Selector', 'Specificity (A,B,C)', 'Notes']}
                    rows={[
                        ['*', '(0, 0, 0)', 'Universal selector — zero specificity'],
                        ['p', '(0, 0, 1)', 'One type selector'],
                        ['.intro', '(0, 1, 0)', 'One class selector'],
                        ['#main', '(1, 0, 0)', 'One ID selector'],
                        ['p.intro', '(0, 1, 1)', 'Type + class'],
                        ['#nav .link:hover', '(1, 2, 0)', 'ID + class + pseudo-class'],
                        [':is(h1, .title)', '(0, 1, 0)', ':is() takes highest argument specificity'],
                        [':where(h1, .title)', '(0, 0, 0)', ':where() is always zero specificity'],
                    ]}
                />
            </Section>

            <Section title="The !important Declaration" icon={Shield}>
                <CodeBlock>
{`p {
    color: red !important;
}

#main p {
    color: blue;   /* Does NOT apply — !important above wins */
}`}
                </CodeBlock>
                <InfoBox type="warning">
                    <strong>Anti-Pattern:</strong> <code className="text-sky-300">!important</code> breaks the natural cascade and makes styles difficult to override. Reserve it for deliberate utility overrides and user accessibility stylesheets.
                </InfoBox>
            </Section>

            <Section title="The Cascade Algorithm" icon={Award}>
                <p>The cascade resolves conflicts in this priority order, stopping when a winner is found:</p>
                <div className="space-y-4 my-6">
                    {[
                        { num: '1', title: 'Origin & Importance', desc: 'User agent < user < author stylesheets. !important reverses origin order.' },
                        { num: '2', title: 'Specificity', desc: 'Higher (A,B,C) score wins, evaluated left-to-right.' },
                        { num: '3', title: 'Source Order', desc: 'Among equal-specificity rules, the last declared wins.' },
                    ].map(item => (
                        <div key={item.num} className="flex gap-4 items-start p-5 rounded-xl bg-[#0d1117] border border-gray-800">
                            <span className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-500/30 text-sky-400 font-bold text-sm flex items-center justify-center shrink-0">{item.num}</span>
                            <div>
                                <p className="font-bold text-white text-sm mb-1">{item.title}</p>
                                <p className="text-gray-500 text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section title="Inheritance" icon={Award}>
                <p>
                    Properties like <code className="text-sky-300">font-family</code>, <code className="text-sky-300">color</code>, and <code className="text-sky-300">line-height</code> are inherited automatically from parent to child. Properties like <code className="text-sky-300">background-color</code>, <code className="text-sky-300">border</code>, <code className="text-sky-300">margin</code>, and <code className="text-sky-300">padding</code> are not inherited by default.
                </p>
                <CodeBlock>
{`body {
    font-family: 'Arial', sans-serif;  /* Inherited by all children */
    color: #333333;                    /* Inherited by all children */
}

/* Force a non-inherited property to inherit */
.child  { padding: inherit; }

/* Reset to browser default */
.reset  { color: initial; }

/* Use whatever the parent computes */
.match  { font-size: unset; }`}
                </CodeBlock>
            </Section>

            <Section title="Best Practices" icon={CheckCircle}>
                <ul className="space-y-3 my-4">
                    {[
                        'Use classes as the primary styling mechanism — consistent (0,1,0) specificity.',
                        'Avoid ID selectors in stylesheets — reserve them for JS hooks and anchor links.',
                        'Limit selector nesting to 2–3 levels maximum.',
                        'Never use !important for general styling.',
                        'Use @layer (Cascade Layers) in modern CSS to control source-order priority.',
                        'Adopt BEM naming for a flat, predictable specificity landscape.',
                    ].map(tip => (
                        <li key={tip} className="flex gap-3 p-3 rounded-lg bg-green-900/10 border border-green-500/20">
                            <CheckCircle size={15} className="text-green-400 mt-0.5 shrink-0" />
                            <span className="text-gray-300 text-sm">{tip}</span>
                        </li>
                    ))}
                </ul>
            </Section>
        </div>

        <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
            <Link to="/webdevelopment/css/selectors/pseudo-element" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                <ArrowLeft size={16} /> Pseudo-Element Selectors
            </Link>
            <Link to="/webdevelopment/css/selectors/advanced" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                Next: Advanced Selectors <ArrowRight size={16} />
            </Link>
        </div>
    </article>
);

export default Specificity;
