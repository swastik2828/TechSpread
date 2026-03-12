import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import {
    Palette, Layers, Box, Code, Hash, Smartphone, Globe, ArrowRight, Eye, Monitor, CheckCircle
} from 'lucide-react';

import SEO from "../../../components/SEO";
import CssBoxModelSimulator from "../../../simulators/web/CssBoxModelSimulator";

// Local Components
const Section = ({ title, icon: Icon, children, id }) => (
    <section id={id} className="relative mb-20 scroll-mt-24">
        <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-sky-500/20 to-cyan-500/20 rounded-xl border border-sky-500/30 text-sky-400">
                <Icon size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                {title}
            </h2>
        </div>
        {children}
    </section>
);

const HighlightBox = ({ title, children, color = "blue" }) => {
    const colors = {
        blue: "from-sky-500/10 to-cyan-500/10 border-sky-500/30 text-sky-300",
        orange: "from-orange-500/10 to-red-500/10 border-orange-500/30 text-orange-300",
        green: "from-green-500/10 to-emerald-500/10 border-green-500/30 text-green-300",
        purple: "from-purple-500/10 to-pink-500/10 border-purple-500/30 text-purple-300",
    };

    return (
        <div className={`p-6 rounded-2xl bg-gradient-to-br ${colors[color]} border backdrop-blur-sm shadow-lg`}>
            <h4 className="text-lg font-bold mb-3 text-white flex items-center gap-2">
                {title}
            </h4>
            <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                {children}
            </div>
        </div>
    );
};

const LocalCodeBlock = ({ title, code, language = "css" }) => {
    return (
        <div className="my-8 w-full rounded-xl overflow-hidden bg-[#0d1117] border border-gray-800 shadow-2xl group ring-1 ring-white/5">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-gray-800">
                <div className="flex items-center gap-4">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                    </div>
                    <span className="text-xs font-bold text-gray-400 font-mono tracking-wide">
                        {title}
                    </span>
                </div>
                <span className="text-[10px] font-bold text-gray-500 uppercase bg-gray-800 px-2 py-0.5 rounded border border-gray-700">
                    {language}
                </span>
            </div>

            {/* Code Area */}
            <div className="p-5 overflow-x-auto font-mono text-sm leading-relaxed scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                <pre className="text-gray-300 whitespace-pre-wrap">
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    );
};

// Main Component
const IntroToCSS = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="Introduction to CSS: The Web's Presentation Language"
                description="A Complete Beginner's Guide to Cascading Style Sheets. Learn how CSS works, write CSS rules, and explore key CSS properties."
                keywords="introduction to css, what is css, css tutorial, css selectors, css box model, beginner css"
                url="/webdevelopment/css"
            />

            {/* Hero Header */}
            <header className="py-12 text-center md:text-left border-b border-gray-800 mb-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 -z-10 opacity-20 transform translate-x-1/4 -translate-y-1/4">
                    <Palette size={400} className="text-sky-900" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold uppercase tracking-wider border border-sky-500/20 mb-4 inline-block">
                        Introduction to CSS
                    </span>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Introducing <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-600">CSS</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
                        A Complete Beginner's Guide to Cascading Style Sheets
                    </p>
                </motion.div>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">

                {/* What is CSS? */}
                <Section title="What is CSS?" icon={Palette} id="what-is-css">
                    <p>
                        CSS (Cascading Style Sheets) is the language used to control the visual presentation of web pages. While HTML defines the structure and content of a page, CSS defines how that content looks — its colors, fonts, layout, and spacing.
                    </p>
                    <p>
                        With CSS you can make the background of a page cream, display all paragraphs in gray using the Arial typeface, or style every level-one heading in blue italic Times — all without touching your HTML content.
                    </p>
                    <div className="bg-sky-900/10 border-l-4 border-sky-500 p-6 rounded-r-xl my-6">
                        <p className="m-0 text-sm text-gray-400">
                            In this guide you will: learn how CSS works, write CSS rules, see how rules apply to HTML pages, and explore the key CSS properties used in real projects.
                        </p>
                    </div>
                </Section>

                {/* Thinking Inside the Box */}
                <Section title="Thinking Inside the Box" icon={Box} id="box-model">
                    <p>
                        The key to understanding CSS is to imagine an invisible box surrounding every single HTML element on the page. CSS rules then control how each box — and everything inside it — appears.
                    </p>

                    <CssBoxModelSimulator />

                    <h3 className="text-2xl font-bold text-white mt-12 mb-4">Block vs. Inline Elements</h3>
                    <p>HTML elements fall into two display categories:</p>
                    <ul className="list-none space-y-4 my-6">
                        <li className="flex gap-4 items-start">
                            <span className="text-sky-400 mt-1">•</span>
                            <div>
                                <strong className="text-white">Block-level elements</strong> — These start on a new line and stack vertically. Examples: <code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;div&gt;</code>.
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <span className="text-sky-400 mt-1">•</span>
                            <div>
                                <strong className="text-white">Inline elements</strong> — These flow within surrounding text and do not break onto a new line. Examples: <code>&lt;b&gt;</code>, <code>&lt;i&gt;</code>, <code>&lt;img&gt;</code>, <code>&lt;em&gt;</code>, <code>&lt;span&gt;</code>.
                            </div>
                        </li>
                    </ul>

                    <p className="mb-4">CSS can target either type of element and style the following properties on any box:</p>

                    <div className="overflow-x-auto my-8 border border-gray-800 rounded-xl">
                        <table className="w-full text-left border-collapse text-sm">
                            <thead className="bg-[#161b22]">
                                <tr>
                                    <th className="p-4 border-b border-gray-800 font-bold text-white">Box Properties</th>
                                    <th className="p-4 border-b border-gray-800 font-bold text-white">Text Properties</th>
                                    <th className="p-4 border-b border-gray-800 font-bold text-white">Specific Elements</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800 bg-[#0d1117]">
                                <tr>
                                    <td className="p-4">Width, height, borders, background color & images, position</td>
                                    <td className="p-4">Typeface, size, color, bold, italic, uppercase, lowercase, small-caps</td>
                                    <td className="p-4">Lists, tables, forms — each have specific style options</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Section>

                {/* Anatomy of a CSS Rule */}
                <Section title="Anatomy of a CSS Rule" icon={Code} id="css-rule">
                    <p>
                        A CSS rule is made of two parts: a selector and a declaration block.
                    </p>
                    <ul className="list-none space-y-3 my-6">
                        <li className="flex gap-4">
                            <span className="text-sky-400">•</span>
                            <span><strong className="text-white">Selector</strong> — Indicates which HTML element(s) the rule applies to.</span>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-sky-400">•</span>
                            <span><strong className="text-white">Declaration</strong> — Specifies how those elements should be styled, written inside curly braces <code>{`{ }`}</code>.</span>
                        </li>
                        <li className="flex gap-4 ml-6">
                            <span className="text-orange-400">•</span>
                            <span><strong className="text-white">Property</strong> — The aspect to change (e.g., color, font-family, width).</span>
                        </li>
                        <li className="flex gap-4 ml-6">
                            <span className="text-orange-400">•</span>
                            <span><strong className="text-white">Value</strong> — The setting for that property (e.g., Arial, red, 100px).</span>
                        </li>
                    </ul>

                    <LocalCodeBlock
                        title="styles.css"
                        code={`p {
    font-family: Arial;
}

h1, h2, h3 {
    font-family: Arial;
    color: yellow;
}`}
                    />

                    <p>
                        Multiple selectors can share the same rule when separated by commas. Multiple declarations can sit inside one rule, each separated by a semicolon.
                    </p>
                </Section>

                {/* Three Ways to Add CSS */}
                <Section title="Three Ways to Add CSS" icon={Layers} id="adding-css">

                    <div className="space-y-12 my-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">1. External Style Sheet (Recommended)</h3>
                            <p>
                                An external CSS file is linked in the <code>&lt;head&gt;</code> of your HTML using the <code>&lt;link&gt;</code> element. This is the professional standard — all pages on a site share one file, keeping content and presentation cleanly separated.
                            </p>
                            <LocalCodeBlock
                                title="index.html"
                                language="html"
                                code={`<link href="css/styles.css" type="text/css" rel="stylesheet" />`}
                            />
                            <p className="mt-4 text-sm text-gray-400">The three required attributes are:</p>
                            <ul className="list-disc pl-5 mt-2 text-sm text-gray-400 space-y-1">
                                <li><code>href</code> — Path to the CSS file.</li>
                                <li><code>type</code> — Always text/css.</li>
                                <li><code>rel</code> — Always stylesheet.</li>
                            </ul>
                            <div className="mt-4 p-4 rounded-lg bg-green-900/10 border border-green-500/20 text-green-400 text-sm">
                                <strong>Why use external style sheets?</strong> One file controls all pages. Changing a single rule updates your entire site instantly. HTML stays clean and readable.
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">2. Internal CSS</h3>
                            <p>
                                CSS rules can be placed directly inside a <code>&lt;style&gt;</code> element in the <code>&lt;head&gt;</code> section. Useful for single-page sites or page-specific overrides, but not recommended for multi-page projects.
                            </p>
                            <LocalCodeBlock
                                title="index.html"
                                language="html"
                                code={`<style type="text/css">
  body { font-family: arial; background-color: rgb(185,179,175); }
  h1   { color: rgb(255,255,255); }
</style>`}
                            />
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                3. Inline CSS <span className="text-xs bg-red-900/50 text-red-400 border border-red-500/30 px-2 py-0.5 rounded ml-2 uppercase tracking-wide">Avoid</span>
                            </h3>
                            <p>
                                A style attribute can be placed on any individual HTML element. This approach is the least maintainable and should be avoided in modern development. You may encounter it in legacy code.
                            </p>
                            <LocalCodeBlock
                                title="index.html"
                                language="html"
                                code={`<p style="color:red;">This text is red.</p>`}
                            />
                        </div>
                    </div>
                </Section>

                {/* Selectors Reference */}
                <Section title="CSS Selectors Reference" icon={Hash} id="selectors">
                    <p>
                        CSS selectors determine which elements a rule targets. They are case-sensitive and must match element names and attribute values exactly.
                    </p>

                    <div className="overflow-x-auto my-8 border border-gray-800 rounded-xl">
                        <table className="w-full text-left border-collapse text-sm">
                            <thead className="bg-[#161b22]">
                                <tr>
                                    <th className="p-4 border-b border-gray-800 font-bold text-white">Selector Example</th>
                                    <th className="p-4 border-b border-gray-800 font-bold text-white">Type</th>
                                    <th className="p-4 border-b border-gray-800 font-bold text-white">Description</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800 bg-[#0d1117]">
                                <tr>
                                    <td className="p-4 font-mono text-orange-400">* {`{}`}</td>
                                    <td className="p-4">Universal Selector</td>
                                    <td className="p-4 text-gray-400">Targets every element on the page.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-orange-400">h1, h2, h3 {`{}`}</td>
                                    <td className="p-4">Type Selector</td>
                                    <td className="p-4 text-gray-400">Matches specified element names.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-blue-400">.note {`{}`}</td>
                                    <td className="p-4">Class Selector</td>
                                    <td className="p-4 text-gray-400">Targets elements whose class attribute matches.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-purple-400">#intro {`{}`}</td>
                                    <td className="p-4">ID Selector</td>
                                    <td className="p-4 text-gray-400">Targets the element with the matching id.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-sky-400">li &gt; a {`{}`}</td>
                                    <td className="p-4">Child Selector</td>
                                    <td className="p-4 text-gray-400">Targets a direct child of the specified element.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-sky-400">p a {`{}`}</td>
                                    <td className="p-4">Descendant Selector</td>
                                    <td className="p-4 text-gray-400">Targets a descendant inside another element.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-green-400">h1 + p {`{}`}</td>
                                    <td className="p-4">Adjacent Sibling</td>
                                    <td className="p-4 text-gray-400">Targets the element immediately after another.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-green-400">h1 ~ p {`{}`}</td>
                                    <td className="p-4">General Sibling</td>
                                    <td className="p-4 text-gray-400">Targets all siblings of the specified element.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Section>

                {/* How CSS Rules Cascade */}
                <Section title="How CSS Rules Cascade" icon={Layers} id="cascading">
                    <p>
                        When two or more rules target the same element, the browser follows three key principles to decide which rule wins:
                    </p>

                    <div className="grid gap-6 my-8">
                        <HighlightBox title="Last Rule" color="orange">
                            If two identical selectors exist, the one declared last takes precedence.
                        </HighlightBox>
                        <HighlightBox title="Specificity" color="blue">
                            A more specific selector overrides a general one. For example: <code>p#intro</code> beats <code>p</code>, and <code>p b</code> beats <code>p</code>.
                        </HighlightBox>
                        <HighlightBox title="!important" color="green">
                            Adding <code>!important</code> after a value forces it to override all other rules, regardless of order or specificity.
                        </HighlightBox>
                    </div>

                    <p>
                        Understanding cascade lets you write leaner style sheets — create broad generic rules and override only the elements that need to look different.
                    </p>
                </Section>

                {/* Inheritance */}
                <Section title="Inheritance" icon={Hash} id="inheritance">
                    <p>
                        Some CSS properties are automatically inherited by child elements from their parent. This makes style sheets more efficient.
                    </p>
                    <ul className="list-disc pl-5 mt-4 mb-6 text-gray-400 space-y-2">
                        <li><strong>Inherited by default:</strong> font-family, color, line-height, text-align.</li>
                        <li><strong>Not inherited by default:</strong> background-color, border, margin, padding.</li>
                    </ul>

                    <p>
                        You can explicitly force any property to inherit its parent's value by using the <code>inherit</code> keyword:
                    </p>
                    <LocalCodeBlock
                        title="styles.css"
                        code={`body  { padding: 10px; }
.page { padding: inherit; }  /* .page gets 10px padding */`}
                    />
                </Section>

                {/* Browser Compatibility */}
                <Section title="Browser Compatibility" icon={Globe} id="browser-compatibility">
                    <p>
                        Different browsers may render CSS properties slightly differently, especially older versions. Always test your site across multiple browsers before launch.
                    </p>
                    <p className="mt-4">
                        <strong>Testing tools:</strong> BrowserShots.org, CrossBrowserTesting.com, BrowserCam.com — test across operating systems (PC, Mac, Linux) and browser versions.
                    </p>
                    <div className="bg-yellow-900/10 border-l-4 border-yellow-500 p-6 rounded-r-xl my-6">
                        <h4 className="font-bold text-yellow-500 flex items-center gap-2 mb-2">CSS Bugs and Quirks</h4>
                        <p className="text-sm text-gray-400 m-0">
                            When a CSS property does not display as expected, it is called a browser quirk or CSS bug. Resources such as PositionIsEverything.net and QuirksMode.org catalog known bugs and solutions.
                        </p>
                    </div>
                </Section>

                {/* Key Takeaways */}
                <Section title="Key Takeaways" icon={CheckCircle} id="takeaways">
                    <div className="bg-[#161b22] border border-gray-800 rounded-2xl p-8">
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex gap-3">
                                <span className="text-sky-500 font-bold">✓</span>
                                <span>CSS uses rules made of selectors and declarations to style HTML elements.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-sky-500 font-bold">✓</span>
                                <span>Every HTML element is treated as a box — CSS controls that box's appearance.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-sky-500 font-bold">✓</span>
                                <span>External style sheets are the professional best practice for multi-page sites.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-sky-500 font-bold">✓</span>
                                <span>CSS selectors range from universal (*) to highly specific (ID, child, sibling).</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-sky-500 font-bold">✓</span>
                                <span>The cascade determines which rule wins when multiple rules target the same element.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-sky-500 font-bold">✓</span>
                                <span>Inherited properties flow from parent to child, keeping style sheets DRY.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-sky-500 font-bold">✓</span>
                                <span>Always test across browsers to catch quirks before going live.</span>
                            </li>
                        </ul>
                    </div>
                </Section>

                <p className="text-center text-sm font-bold text-gray-500 mt-16 pb-8 border-b border-gray-800 uppercase tracking-widest">
                    Web Development Series  •   CSS Foundations
                </p>

            </div>
        </article>
    );
};

export default IntroToCSS;
