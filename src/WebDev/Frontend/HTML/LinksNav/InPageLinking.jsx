import React from 'react';
import { Hash, ArrowRight, ArrowLeft, ArrowDownToLine, BookOpen, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";

const Section = ({ title, icon: Icon, children }) => (
    <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl border border-orange-500/30 text-orange-400">
                <Icon size={28} />
            </div>
            <h2 className="text-3xl font-bold text-white">{title}</h2>
        </div>
        {children}
    </section>
);

const LocalCodeBlock = ({ code, label = "HTML" }) => (
    <div className="my-6 rounded-xl overflow-hidden bg-[#0d1117] border border-gray-800 shadow-2xl">
        <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-gray-800">
            <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-500/20"></div><div className="w-3 h-3 rounded-full bg-yellow-500/20"></div></div>
            <span className="text-[10px] font-bold text-gray-500 uppercase">{label}</span>
        </div>
        <div className="p-5 overflow-x-auto font-mono text-sm text-gray-300 whitespace-pre-wrap">{code}</div>
    </div>
);

const InPageLinking = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="Linking Within A Page And Between Sections"
                description="Learn how to create jump links and in-page navigation using fragment identifiers and ID attributes in HTML."
                keywords="HTML in-page links, jump links, fragment identifiers, HTML id attribute, smooth scrolling, table of contents links, TechSpread"
                url="/webdevelopment/html/in-page"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase border border-orange-500/20 mb-4 inline-block">
                    Module 4.5
                </span>
                <h1 className="text-5xl font-extrabold text-white mb-6">Linking Within A Page <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">And Between Sections</span></h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    Sometimes you do not want to send the user to a different page at all; instead, you want to help them jump quickly to another part of the same page. This is common in long articles, documentation, FAQs, glossaries, and single‑page layouts.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">

                <Section title="Fragment Identifiers" icon={Hash}>
                    <p>
                        HTML supports in-page navigation using <strong>fragment identifiers</strong> and the <code>id</code> attribute. Scrolling manually through a massive wall of text could be tedious or disorienting. Jump links solve this by teleporting the user instantly.
                    </p>
                    <p>
                        To create an in‑page link, you need two things:
                    </p>
                    <ol className="list-decimal pl-5 mt-4 space-y-2 text-gray-300">
                        <li><strong>A target element:</strong> An element anywhere on the page with a unique <code>id</code> attribute.</li>
                        <li><strong>An anchor:</strong> An <code>&lt;a&gt;</code> element whose <code>href</code> points to <code>#</code> followed strictly by that same <code>id</code>.</li>
                    </ol>

                    <LocalCodeBlock code={`<!-- 1. The Anchors (The Jump Links) -->
<h2 id="top">Film‑making terms</h2>
<ul>
  <li><a href="#arc_shot">Arc shot</a></li>
  <li><a href="#interlude">Interlude</a></li>
</ul>

<!-- 2. The Targets (The Destinations) -->
<h3 id="arc_shot">Arc shot</h3>
<p>A shot in which the subject is photographed by an encircling or moving camera.</p>

<h3 id="interlude">Interlude</h3>
<p>A brief, intervening scene or sequence, not tied directly to the main plot.</p>

<!-- 3. The Return Jump -->
<p><a href="#top">Back to top</a></p>`} />
                    <p>
                        Here, each term heading has a unique <code>id</code> value, and the list at the top links to those ids with <code>href</code> values like <code>#arc_shot</code>. When the user activates one of those links, the browser scrolls the page so that the corresponding heading is brought into view. The <strong>"Back to top"</strong> link works exactly the same way, pointing to the <code>id="top"</code> on the main heading.
                    </p>
                </Section>

                <Section title="Rules for IDs" icon={BookOpen}>
                    <p>
                        There are a few strict rules for <code>id</code> attributes that are important to remember:
                    </p>

                    <div className="bg-red-900/10 border border-red-500/20 p-6 rounded-xl my-6">
                        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                            <li><strong>Unique Value:</strong> Each <code>id</code> must be unique within a single page; you should not assign the same <code>id</code> value to two different elements, because the browser would not know which one to scroll to. It is invalid HTML.</li>
                            <li><strong>No Spaces:</strong> The value must not contain spaces. Hyphens and underscores are very common separators in multi‑word ids (for example, <code>getting-started</code> or <code>arc_shot</code>).</li>
                            <li><strong>Case Sensitive:</strong> IDs are technically case sensitive, so <code>#Top</code> is different from <code>#top</code>. Stick to lowercase for safety and sanity.</li>
                        </ul>
                    </div>
                </Section>

                <Section title="Cross-Page Fragments" icon={Layers}>
                    <p>
                        The exact same fragment identifier approach works across pages as well. Suppose you have a separate document at <code>/guide.html</code> with an element like <code>&lt;h2 id="bottom"&gt;Further reading&lt;/h2&gt;</code>.
                    </p>
                    <p>
                        A link from another page or another site can point directly to that section using a URL like <code>/guide.html#bottom</code> or <code>https://example.com/guide.html#bottom</code>.
                    </p>
                    <LocalCodeBlock code={`<a href="/guide.html#bottom">Read the Further Reading section on our guide page.</a>`} />
                    <p>
                        When the browser loads the page, it does not just load the top of the file. It will wait until the layout is calculated, and then it will scroll straight down to the element with <code>id="bottom"</code>.
                    </p>
                </Section>

                <Section title="Accessibility and UX Enhancements" icon={ArrowDownToLine}>
                    <p>
                        In‑page navigation contributes greatly to usability for long content. Many documentation sites automatically generate a table of contents on the side of the page that lists all the sections and subsections as links. This table of contents is usually built from the headings’ <code>id</code> attributes (or <code>name</code> attributes in much older HTML templates).
                    </p>
                    <p>
                        Users can glance at the list to understand the structure of the article and jump directly to what they need, which is often faster than scrolling and scanning.
                    </p>
                    <div className="bg-[#111] border-l-4 border-orange-500 p-5 rounded-lg mt-6">
                        <h4 className="text-orange-400 font-bold mb-2">CSS Smooth Scrolling</h4>
                        <p className="text-sm text-gray-400">
                            By default, jump links snap instantly to the target, which can be jarring. You can tell the browser to smoothly animate the scroll by adding a single line of CSS to your root element:
                        </p>
                        <LocalCodeBlock label="CSS" code={`html {
  scroll-behavior: smooth;
}`} />
                        <p className="text-sm text-gray-400 mt-2">
                            Note that for accessibility, modern developers often disable smooth scroll if the user has requested reduced motion in their OS preferences using <code>@media (prefers-reduced-motion: reduce)</code>.
                        </p>
                    </div>
                    <p className="mt-6">
                        Historically, HTML also allowed <code>name</code> attributes on anchors to mark in‑page destinations (<code>&lt;a name="section"&gt;&lt;/a&gt;</code>), but modern practice overwhelmingly favors <code>id</code> on any semantic element like a heading or section. Keep your markup current and consistent with DOM standards.
                    </p>
                </Section>

            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="../paths" className="flex items-center gap-2 text-gray-500 hover:text-white"><ArrowLeft size={16} /> Folder Structure</Link>
                <Link to="../special-links" className="flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300">Next: Email & Special Links <ArrowRight size={16} /></Link>
            </div>
        </article>
    );
};

export default InPageLinking;
