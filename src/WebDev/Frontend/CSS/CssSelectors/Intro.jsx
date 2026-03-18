import React from 'react';
import { BookOpen, ArrowRight, Code, History, Lightbulb, Target } from 'lucide-react';
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
        important: "border-purple-500 bg-purple-900/10 text-purple-200",
    };
    return (
        <div className={`border-l-4 p-6 rounded-r-xl my-6 ${styles[type]}`}>
            {children}
        </div>
    );
};

const Intro = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="Introduction to CSS Selectors"
                description="Learn what CSS selectors are, how they match DOM elements, and why mastering them is fundamental to writing quality CSS."
                keywords="css selectors introduction, what are css selectors, css selector Dom, css rule anatomy, css history"
                url="/webdevelopment/css/selectors/intro"
            />

            <header className="py-12 border-b border-gray-800 mb-12">

                <h1 className="text-5xl font-extrabold text-white mb-6">
                    Introduction to <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">CSS Selectors</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    A Comprehensive Technical Reference — From Fundamentals to Advanced Techniques
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                    {['Selectors', 'Combinators', 'Pseudo-Classes', 'Pseudo-Elements', 'Specificity'].map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-gray-800 text-gray-400 text-xs border border-gray-700">{tag}</span>
                    ))}
                </div>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">

                <Section title="What Are CSS Selectors?" icon={Target}>
                    <p>
                        CSS (Cascading Style Sheets) is the language that governs the visual presentation of documents written in HTML or XML. At the heart of every CSS rule is one essential component: the selector. A CSS selector is a pattern that identifies which HTML element or group of elements a given set of style declarations should be applied to. Without selectors, there would be no mechanism for targeting the specific parts of a document that need to be styled.
                    </p>

                    <img
                        src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200"
                        alt="Code on a computer screen representing CSS styling"
                        className="w-full h-72 object-cover rounded-xl my-8 border border-gray-800 shadow-2xl"
                    />

                    <p>
                        Every CSS rule is composed of two parts: the selector and the declaration block. The selector precedes the opening curly brace, while the declaration block — enclosed within curly braces — holds one or more property-value pairs that define the visual treatment. Understanding selectors is therefore the very first and most fundamental skill any web developer must master.
                    </p>

                    <CodeBlock title="styles.css">
{`selector {
    property: value;
}`}
                    </CodeBlock>
                </Section>

                <Section title="The Role of Selectors in the Browser" icon={Code}>
                    <p>
                        When a browser parses an HTML document, it constructs a tree structure known as the Document Object Model (DOM). Each element, attribute, and piece of text in the HTML becomes a node in this tree. When the browser subsequently parses the associated CSS, it uses the selectors defined in the stylesheets to traverse the DOM and match elements against each rule. Only when a selector successfully matches a DOM node does the browser apply the associated declarations to that node.
                    </p>
                    <p>
                        This matching process happens continuously as the page loads and whenever the DOM changes dynamically via JavaScript. The efficiency of selector matching therefore has a direct impact on rendering performance, particularly in complex, dynamic user interfaces.
                    </p>

                    <div className="bg-[#161b22] border border-gray-800 rounded-xl p-6 my-8">
                        <h4 className="text-xl font-bold text-white mb-4">DOM Matching — How It Works</h4>
                        <div className="font-mono text-xs text-gray-400 bg-[#0d1117] rounded-lg p-4 border border-gray-800">
                            <div className="text-gray-500">html</div>
                            <div className="pl-4 text-gray-500">├── head</div>
                            <div className="pl-4 text-gray-500">└── body</div>
                            <div className="pl-8 text-sky-400">    ├── h1.title <span className="text-gray-600">← matched by: h1, .title, *</span></div>
                            <div className="pl-8 text-gray-500">    └── section</div>
                            <div className="pl-12 text-cyan-400">        └── p.intro <span className="text-gray-600">← matched by: p, .intro, section p</span></div>
                        </div>
                        <p className="text-sm text-gray-400 mt-4">
                            Browsers evaluate selectors <strong className="text-white">right to left</strong> for performance. For <code className="text-sky-300">section p</code>, the engine first finds all <code className="text-sky-300">p</code> elements, then verifies each is a descendant of a <code className="text-sky-300">section</code>.
                        </p>
                    </div>
                </Section>

                <Section title="The Anatomy of a CSS Rule" icon={BookOpen}>
                    <p>
                        Before exploring the various selector types, it is valuable to understand the complete anatomy of a CSS rule set. Consider the following example:
                    </p>

                    <CodeBlock title="styles.css">
{`h1, h2, h3 {
    color: #1A3A5C;
    font-family: Arial, sans-serif;
    margin-bottom: 1rem;
}`}
                    </CodeBlock>

                    <p>
                        In this example, <code className="text-sky-300">h1, h2, h3</code> is a selector list — a comma-separated collection of three individual selectors. The entire block between the curly braces is the declaration block. Each line within the block — such as <code className="text-sky-300">color: #1A3A5C;</code> — is a declaration, consisting of a property (<code className="text-sky-300">color</code>) and a value (<code className="text-sky-300">#1A3A5C</code>). The combination of a selector and a declaration block forms a complete rule set.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 my-6">
                        {[
                            { term: 'Selector List', val: 'h1, h2, h3', desc: 'Comma-separated selectors — all matched elements receive the styles.' },
                            { term: 'Declaration Block', val: '{ … }', desc: 'Everything between the curly braces.' },
                            { term: 'Declaration', val: 'color: #1A3A5C;', desc: 'A single property-value pair ending with a semicolon.' },
                            { term: 'Property / Value', val: 'color / #1A3A5C', desc: 'The stylistic aspect being changed, and its setting.' },
                        ].map(item => (
                            <div key={item.term} className="p-4 rounded-xl bg-[#0d1117] border border-gray-800">
                                <p className="text-sky-400 font-bold text-sm mb-1">{item.term}</p>
                                <code className="text-orange-300 text-xs">{item.val}</code>
                                <p className="text-gray-500 text-xs mt-2">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section title="Categories of CSS Selectors" icon={Lightbulb}>
                    <p>
                        The CSS specification organizes selectors into several distinct categories, each designed to match elements based on different criteria:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 my-6 text-gray-300">
                        <li><strong className="text-white">Simple Selectors</strong> — target elements based on element type, class, or ID attribute</li>
                        <li><strong className="text-white">Attribute Selectors</strong> — target elements based on the presence or value of HTML attributes</li>
                        <li><strong className="text-white">Pseudo-Class Selectors</strong> — target elements based on their state or position in the document</li>
                        <li><strong className="text-white">Pseudo-Element Selectors</strong> — target specific parts of an element's content or surroundings</li>
                        <li><strong className="text-white">Combinator Selectors</strong> — target elements based on their structural relationship to other elements</li>
                    </ul>
                    <p>
                        Each category will be examined in dedicated sections of this module. Together, these selector categories give CSS authors extraordinary expressive power, enabling them to style any part of any HTML document with precision and elegance.
                    </p>
                </Section>

                <Section title="A Brief History of CSS Selectors" icon={History}>
                    <p>
                        CSS was first proposed by Håkon Wium Lie in 1994 and was jointly developed by the World Wide Web Consortium (W3C). The first formal specification, CSS Level 1 (CSS1), was published in December 1996. CSS1 introduced fundamental selector types including type selectors, class selectors, and ID selectors — the building blocks that remain in universal use to this day.
                    </p>
                    <p>
                        CSS Level 2 (CSS2), published in 1998, significantly expanded the selector vocabulary with the introduction of attribute selectors, pseudo-class selectors such as <code className="text-sky-300">:hover</code> and <code className="text-sky-300">:focus</code>, pseudo-elements, and combinators including the child combinator (<code className="text-sky-300">&gt;</code>) and the adjacent sibling combinator (<code className="text-sky-300">+</code>).
                    </p>
                    <p>
                        CSS Level 3 introduced the concept of modular specifications, breaking the monolithic standard into independently evolving pieces. The Selectors Level 3 module, which became a W3C Recommendation in 2011, enriched the palette with structural pseudo-classes, the negation pseudo-class, and the general sibling combinator. Selectors Level 4 continues to advance the language with features such as <code className="text-sky-300">:is()</code>, <code className="text-sky-300">:where()</code>, <code className="text-sky-300">:has()</code>, and improved scoping mechanisms.
                    </p>

                    <div className="relative pl-6 border-l-2 border-gray-800 space-y-8 my-8">
                        {[
                            { year: '1994', label: 'CSS proposed by Håkon Wium Lie', detail: 'Jointly developed by the W3C.' },
                            { year: '1996', label: 'CSS Level 1 published', detail: 'Type selectors, class selectors, ID selectors.' },
                            { year: '1998', label: 'CSS Level 2 published', detail: 'Attribute selectors, :hover, :focus, >, + combinators.' },
                            { year: '2011', label: 'Selectors Level 3 — W3C Recommendation', detail: 'Structural pseudo-classes, :not(), general sibling (~).' },
                            { year: '2023+', label: 'Selectors Level 4 — All major browsers', detail: ':is(), :where(), :has(), @scope — now widely supported.' },
                        ].map(item => (
                            <div key={item.year} className="relative">
                                <div className="absolute -left-[29px] top-1 w-4 h-4 rounded-full bg-sky-500/20 border-2 border-sky-500" />
                                <div className="text-sky-400 font-bold text-sm mb-0.5">{item.year}</div>
                                <div className="text-white font-semibold text-sm">{item.label}</div>
                                <div className="text-gray-500 text-xs">{item.detail}</div>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section title="Why Mastering Selectors Matters" icon={BookOpen}>
                    <p>
                        Proficiency with CSS selectors is not merely an academic exercise — it has direct, practical implications for code quality, maintainability, and performance. A developer who understands selectors deeply can write CSS that is precise without being brittle, expressive without being verbose, and performant without sacrificing readability.
                    </p>
                    <p>
                        Conversely, a weak understanding of selectors leads to over-use of class names, excessive nesting, reliance on overly specific rules that are difficult to override, and the accumulation of technical debt. By investing time in mastering selectors, developers lay the foundation for scalable, maintainable front-end code. The sections that follow will guide you through every major category of CSS selector, equipping you with the knowledge to write CSS of exceptional quality.
                    </p>

                    <InfoBox type="tip">
                        <strong>Best Practice:</strong> Before adding a new class to your HTML, always ask yourself: can I target this element with a selector based on its existing attributes, position, or state? A good selector eliminates the need for extra markup.
                    </InfoBox>
                </Section>

            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    ← Introduction to CSS
                </Link>
                <Link to="/webdevelopment/css/selectors/basic" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Basic Selectors <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};

export default Intro;
