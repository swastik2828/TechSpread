import React from 'react';
import { List, ArrowRight, ArrowLeft, Paintbrush, ShieldCheck, CheckCircle2, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import ListsSimulator from "../../../../simulators/web/ListsSimulator";

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

const UnorderedLists = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="HTML Unordered Lists - Bullets and Features"
                description="Learn all about HTML Unordered Lists (<ul>). Best practices for defining bullet points, navigation menus, feature lists, and using CSS."
                keywords="HTML unordered lists, ul element, bullet point list HTML, list-style-type, HTML navigation menu, web development tutorial"
                url="/webdevelopment/html/lists/unordered-lists"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase border border-orange-500/20 mb-4 inline-block">
                    Module 7.2
                </span>
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    Introduction to HTML <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Unordered Lists</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    When the exact sequence of your content is irrelevant to its core meaning, HTML offers the
                    <code>&lt;ul&gt;</code> element. Unordered lists render with bullets and are arguably the most widely used structure on the web today.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">

                <Section title="The Anatomy of an Unordered List" icon={List}>
                    <p>
                        An <strong>unordered list</strong> uses the <code>&lt;ul&gt;</code> element to act as an outer container. Inside,
                        each specific list item is marked with exactly the same tag we used for ordered lists: <code>&lt;li&gt;</code>.
                        However, instead of rendering a numerical progression, the browser precedes each item with a bullet point (a solid circular disc by default).
                    </p>
                    <p>
                        You must choose an unordered list whenever the items hold no meaningful chronological or ranked sequence. For example, consider an ingredient checklist for baking a cake:
                    </p>

                    <div className="bg-[#161b22] border border-gray-800 rounded-xl overflow-hidden my-8">
                        <div className="bg-gray-800/50 px-4 py-2 text-sm text-gray-400 font-mono border-b border-gray-800 flex justify-between">
                            <span>Ingredient Checklist</span>
                            <span>HTML</span>
                        </div>
                        <pre className="p-4 text-sm text-blue-300 overflow-x-auto">
                            {`<ul>
  <li>1 kg King Edward potatoes</li>
  <li>100 ml fresh whole milk</li>
  <li>50 g salted butter</li>
  <li>Freshly grated nutmeg</li>
  <li>Sea salt and cracked black pepper to taste</li>
</ul>`}
                        </pre>
                    </div>

                    <p>
                        The order of listing these ingredients does not alter the final cake. You could list the milk first or last,
                        and the recipe retains its exact meaning. That is the fundamental defining characteristic of an unordered list.
                        If rearranging the elements breaks the meaning, you need an ordered list; if it doesn't, you need an unordered list.
                    </p>
                </Section>

                <Section title="Beyond Bullet Points: Navigation Menus" icon={ShieldCheck}>
                    <p>
                        One of the most surprising facts for absolute beginners is that almost every single navigation bar you use on modern
                        websites—including the sidebar you see on the left of this very TechSpread course—is built internally using unordered lists!
                    </p>
                    <p>
                        Why use lists for a menu instead of just a group of links wrapped in a <code>&lt;div&gt;</code>? The answer is twofold:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-300">
                        <li><strong>Semantics:</strong> Navigation mathematically is just a "list of links". Expressing that structure in code is logically sound.</li>
                        <li><strong>Accessibility:</strong> As mentioned in the previous module, screen readers explicitly announce a <code>&lt;ul&gt;</code> by telling the visually impaired user they have encountered a list and stating how many links it contains. This makes menus drastically easier to navigate and conceptually grasp.</li>
                    </ul>

                    <pre className="bg-[#161b22] p-4 rounded-xl border border-gray-800 my-4 text-sm text-green-300 overflow-x-auto">
                        {`<nav>
  <ul>
    <li><a href="/home">Home</a></li>
    <li><a href="/about">About Us</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>`}
                    </pre>

                    <p>
                        Out of the box, this HTML will display as a vertical bulleted list. How does it become a sleek, horizontal, styled menu?
                        That magic lies entirely in cascading style sheets (CSS). Using Flexbox or Grid layout modules, web developers strip the bullets,
                        lay the items out sideways, and apply padding and background colors. But the foundational bones remain an honest HTML unordered list.
                    </p>
                </Section>

                <Section title="Styling Unordered Lists" icon={Paintbrush}>
                    <p>
                        In the early 1990s, webmasters customized their bullets by using the <code>type</code> attribute directly on the HTML
                        <code>&lt;ul&gt;</code> tag (e.g., <code>&lt;ul type="square"&gt;</code>). This practice is now strictly deprecated.
                    </p>
                    <p>
                        Today, controlling presentation requires CSS. The primary property for styling basic lists is <code>list-style-type</code>.
                        There are three common built-in bullet styles:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-300">
                        <li style={{ listStyleType: "disc" }}><code>disc</code>: A solid black circle. This is the browser default for top-level lists.</li>
                        <li style={{ listStyleType: "circle" }}><code>circle</code>: An empty outline of a circle. Generally used by browsers for a nested list level.</li>
                        <li style={{ listStyleType: "square" }}><code>square</code>: A solid black square.</li>
                        <li style={{ listStyleType: "none" }}><code>none</code>: Removes the bullet entirely. This is universally used when turning lists into navigation bars, grids, or custom-designed text.</li>
                    </ul>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-white">Custom Images as Bullets</h3>
                    <p>
                        Occasionally, you might want a custom icon instead of a basic shape, like a green checkmark for a pricing tier's feature list.
                        You can use the <code>list-style-image</code> property, pointing it to an image URL.
                    </p>
                    <pre className="bg-[#161b22] p-4 rounded-xl border border-gray-800 my-4 text-sm text-green-300 overflow-x-auto">
                        {`ul.custom-checkmarks {
  list-style-image: url('checkmark.png');
}`}
                    </pre>
                    <p>
                        Alternatively, modern CSS allows you to suppress the default list style using <code>list-style: none;</code> and
                        then apply a background image accompanied by extra left-padding to simulate exactly where you want your custom bullet to reside.
                    </p>
                </Section>

                <Section title="Interactive Lists Simulator" icon={Code}>
                    <p className="mb-8">
                        Change the List Type to "Unordered", then experiment with the "List Style Type" dropdown to see the CSS values
                        (disc, circle, square, none) apply in real time! Check out the generated HTML snippet.
                    </p>
                    <ListsSimulator />
                </Section>

                <Section title="Key Takeaways" icon={CheckCircle2}>
                    <p>
                        To recap, whenever you are grouping items on a webpage:
                    </p>
                    <ul className="list-disc pl-6 space-y-4 text-gray-300">
                        <li>
                            Evaluate the content relationship. Does the sequence matter? If not, use <code>&lt;ul&gt;</code>.
                        </li>
                        <li>
                            Never place raw text directly into a <code>&lt;ul&gt;</code>. Wrap all internal content explicitly with <code>&lt;li&gt;</code> tags.
                        </li>
                        <li>
                            Realize that <code>&lt;ul&gt;</code> goes far beyond simple bullet points. Due to its accessibility benefits, it forms the structural backbone
                            for structural groupings like navigation tabs, image galleries, and pricing feature blocks.
                        </li>
                    </ul>
                </Section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/html/lists/ordered-lists" className="flex items-center gap-2 text-gray-500 hover:text-white">
                    <ArrowLeft size={16} /> Ordered Lists
                </Link>
                <Link to="/webdevelopment/html/lists/definition-lists" className="flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300">
                    Next: Definition Lists <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};

export default UnorderedLists;
