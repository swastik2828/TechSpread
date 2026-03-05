import React from 'react';
import { ListOrdered, ArrowRight, ArrowLeft, BookOpen, AlertTriangle, Code, Key } from 'lucide-react';
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

const OrderedLists = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="HTML Ordered Lists - Creating Numbered Sequences"
                description="Master HTML Ordered Lists (<ol>). Learn when to use them, how to customize numbering with attributes, and style them using CSS."
                keywords="HTML ordered lists, ol element, numbered lists HTML, HTML list item, ol type attribute, ol start attribute, ol reversed, web development tutorial"
                url="/webdevelopment/html/lists/ordered-lists"  // Make sure to match the actual route when setting it up
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase border border-orange-500/20 mb-4 inline-block">
                    Module 7.1
                </span>
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    Introduction to HTML <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Ordered Lists</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    Whenever you need to display items in a sequence where the order fundamentally matters,
                    HTML provides the dedicated <code>&lt;ol&gt;</code> element. Discover how to create and customize numbered lists.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">

                <Section title="Why Sequence Matters" icon={ListOrdered}>
                    <p>
                        Lists are everywhere on the web, from user navigation menus to recipe ingredients. In HTML, using the correct
                        list type is not just about visual aesthetics; it is about <strong>semantics</strong>. Semantic meaning ensures that
                        browsers, search engines, and screen readers can interpret your content properly.
                    </p>
                    <p>
                        An <strong>ordered list</strong> wraps its items inside the <code>&lt;ol&gt;</code> element. Each individual
                        item is identified using the <code>&lt;li&gt;</code> (list item) element. The browser automatically prefixes
                        each item with an ordinal number (1, 2, 3...) or a letter/numeral sequence, saving you the effort of typing them out manually.
                    </p>
                    <p>
                        You should use an ordered list when the sequence is vital to the meaning of the content. Consider these examples:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-300">
                        <li><strong>Recipes:</strong> Cooking steps (1. Chop potatoes, 2. Boil water) must be followed chronologically.</li>
                        <li><strong>Leaderboards:</strong> Ranking top performers (1. Alice, 2. Bob, 3. Charlie) by their score.</li>
                        <li><strong>Legal documents:</strong> Step-by-step procedures or formal outlines containing numbered sections and clauses.</li>
                        <li><strong>Tutorials:</strong> Guiding a user through a software installation process sequentially.</li>
                    </ul>
                    <p className="mt-4">
                        If rearranging the items does not change the meaning (for instance, a grocery list of milk, bread, and eggs),
                        you should instead use an <em>unordered list</em>, which we will deeply explore in the next chapter.
                    </p>
                </Section>

                <Section title="Creating a Basic Ordered List" icon={Code}>
                    <p>
                        The structure of an ordered list is strictly hierarchical. It always consists of an outer <code>&lt;ol&gt;</code> container,
                        which directly houses one or more inner <code>&lt;li&gt;</code> elements. You must never place independent text or
                        other block elements directly inside the <code>&lt;ol&gt;</code> tags without wrapping them in an <code>&lt;li&gt;</code> first.
                    </p>

                    <div className="bg-[#161b22] border border-gray-800 rounded-xl overflow-hidden my-8">
                        <div className="bg-gray-800/50 px-4 py-2 text-sm text-gray-400 font-mono border-b border-gray-800 flex justify-between">
                            <span>Mashed Potatoes Recipe</span>
                            <span>HTML</span>
                        </div>
                        <pre className="p-4 text-sm text-blue-300 overflow-x-auto">
                            {`<ol>
  <li>Chop potatoes into quarters.</li>
  <li>Simmer in salted water for 15-20 minutes until tender.</li>
  <li>Heat milk, butter, and nutmeg.</li>
  <li>Drain potatoes thoroughly and mash them.</li>
  <li>Mix in the warm milk mixture until smooth.</li>
</ol>`}
                        </pre>
                    </div>

                    <p>
                        When a browser encounters this markup, it performs several automatic formatting tasks:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                        <li>It applies a default left-margin (indentation), shifting the list inward compared to regular paragraphs.</li>
                        <li>It calculates the total number of items and prepends the correct decimal number to each line dynamically.</li>
                        <li>If you later insert a new <code>&lt;li&gt;</code> directly in the middle of the list, the browser will seamlessly update all the subsequent numbers without any extra effort on your part!</li>
                    </ul>
                </Section>

                <Section title="Customizing the Sequence: HTML Attributes" icon={Key}>
                    <p>
                        While the default numerical sequence (1, 2, 3...) is appropriate for most situations, HTML provides three
                        powerful attributes that give you detailed control over the generated sequence.
                    </p>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-white">1. The 'start' Attribute</h3>
                    <p>
                        What happens if you need to pause a tutorial, insert a large image or a paragraph of explanation, and then
                        resume the steps? If you start a new <code>&lt;ol&gt;</code>, it will reset to 1 by default.
                        This is where the <code>start</code> attribute shines. By assigning a numeric value, you dictate exactly
                        where the numbering begins.
                    </p>
                    <pre className="bg-[#161b22] p-4 rounded-xl border border-gray-800 my-4 text-sm text-green-300 overflow-x-auto">
                        {`<ol start="4">
  <li>Fold the eggs from the edge to the centre every 20 seconds.</li>
  <li>When the eggs are still moist, remove from heat immediately.</li>
</ol>`}
                    </pre>
                    <p>The browser will render these as steps 4 and 5.</p>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-white">2. The 'reversed' Attribute</h3>
                    <p>
                        Often used in top-10 countdowns or version histories, the <code>reversed</code> attribute is a boolean attribute
                        that flips the numbering order backwards without affecting the actual flow of the HTML elements.
                    </p>
                    <pre className="bg-[#161b22] p-4 rounded-xl border border-gray-800 my-4 text-sm text-green-300 overflow-x-auto">
                        {`<ol reversed>
  <li>The highest ranked player.</li>
  <li>The second ranked player.</li>
  <li>The third ranked player.</li>
</ol>`}
                    </pre>
                    <p>
                        On a three-item list, the numbering will visibly output as "3, 2, 1" down the screen, yet the screen reader and DOM structure maintain the given
                        semantic arrangement.
                    </p>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-white">3. The 'type' Attribute</h3>
                    <p>
                        In certain niche scenarios (like legal outlines or formal document appendices), you might want alphabetical letters
                        or Roman numerals instead of standard decimals. HTML allows you to set the <code>type</code> attribute to one of five values:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-300">
                        <li><code>type="1"</code>: Decimal numbers (1, 2, 3...) - This is the default.</li>
                        <li><code>type="a"</code>: Lowercase letters (a, b, c...)</li>
                        <li><code>type="A"</code>: Uppercase letters (A, B, C...)</li>
                        <li><code>type="i"</code>: Lowercase Roman numerals (i, ii, iii...)</li>
                        <li><code>type="I"</code>: Uppercase Roman numerals (I, II, III...)</li>
                    </ul>

                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6 mt-6 flex gap-4 items-start">
                        <AlertTriangle className="text-yellow-500 shrink-0 mt-1" size={24} />
                        <div>
                            <h4 className="text-lg font-bold text-yellow-500 mb-2">Modern Best Practice Warning</h4>
                            <p className="text-gray-300 text-sm">
                                While the <code>type</code> attribute is completely valid HTML, modern web development standards heavily recommend
                                managing visual presentation solely through CSS. Instead of using <code>&lt;ol type="a"&gt;</code>, you should implement
                                the CSS property <code>list-style-type: lower-alpha;</code>. We will explore this interactive styling in the simulator below!
                            </p>
                        </div>
                    </div>
                </Section>

                <Section title="Interactive Lists Simulator" icon={BookOpen}>
                    <p className="mb-8">
                        The best way to solidify your understanding of HTML lists is by experimenting directly. Use the simulator below to toggle
                        between ordered, unordered, and definition list types. Notice how changing the CSS <code>list-style-type</code> updates the live output dynamically.
                    </p>
                    <ListsSimulator />
                </Section>

                <Section title="Semantic Importance and Accessibility" icon={Code}>
                    <p>
                        Accessibility is the practice of ensuring your website is usable by everyone, regardless of their physical abilities
                        or the specialized software they might require (like screen readers for the visually impaired).
                    </p>
                    <p>
                        When a screen reader encounters an <code>&lt;ol&gt;</code> element, it reads aloud something akin to "List, 5 items".
                        This single phrase provides crucial context, allowing the user to mentally prepare for the data structure and estimate
                        the reading time. Screen readers also allow users to quickly skip the entire list if the topic isn't relevant to them, a
                        feature totally lost if you mistakenly implement lists simply using paragraph tags and manually typing "1. ...".
                    </p>
                    <p>
                        For SEO (Search Engine Optimization), structured lists contribute massively toward featured snippets. When Google or Bing crawls
                        a web page looking for the answer to "How to boil an egg", an engine is significantly more likely to parse, extract, and display
                        a clean <code>&lt;ol&gt;</code> element than an arbitrary collection of styled `div` tags. Using the correct,
                        semantic HTML tags inherently makes your websites more powerful, discoverable, and user-friendly.
                    </p>
                </Section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/html/media-best-practices" className="flex items-center gap-2 text-gray-500 hover:text-white">
                    <ArrowLeft size={16} /> Previous Module
                </Link>
                <Link to="/webdevelopment/html/lists/unordered-lists" className="flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300">
                    Next: Unordered Lists <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};

export default OrderedLists;
