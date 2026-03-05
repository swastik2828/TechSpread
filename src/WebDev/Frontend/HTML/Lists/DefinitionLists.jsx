import React from 'react';
import { BookA, ArrowRight, ArrowLeft, BookOpen, Fingerprint, TextQuote, Hash } from 'lucide-react';
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

const DefinitionLists = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="HTML Definition Lists - Glossaries and Term Pairs"
                description="Learn how to use HTML Description Lists (dl, dt, dd) to structure glossaries, FAQs, and dictionary terms."
                keywords="HTML definition lists, description lists HTML, dl element, dt HTML, dd HTML, HTML glossary, web development tutorials"
                url="/webdevelopment/html/lists/definition-lists"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase border border-orange-500/20 mb-4 inline-block">
                    Module 7.3
                </span>
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    Introduction to HTML <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Definition Lists</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    While ordered and unordered lists handle simple items, <strong>Definition Lists</strong> (or Description Lists)
                    are designed to pair terms with their corresponding descriptions—perfect for glossaries, dictionaries, and FAQs.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">

                <Section title="The Three Elements of Description Lists" icon={BookA}>
                    <p>
                        Unlike <code>&lt;ul&gt;</code> and <code>&lt;ol&gt;</code> which only pair a single container tag with a single child
                        tag (<code>&lt;li&gt;</code>), a Definition List coordinates three different semantic tags to form its structure.
                    </p>
                    <p>
                        Historically known as "Definition Lists," the modern HTML specification renamed them to "Description Lists" to broaden
                        their scope (since you can use them to describe anything, not just define dictionary words).
                    </p>

                    <ul className="list-disc pl-6 space-y-4 mb-6 text-gray-300">
                        <li>
                            <strong>&lt;dl&gt; (Description List)</strong>: This is the outer container for all the term-description pairs. Everything belongs inside this element.
                        </li>
                        <li>
                            <strong>&lt;dt&gt; (Description Term)</strong>: This is the term, word, name, or concept that you are currently defining or describing. It almost acts like a heading for the definition.
                        </li>
                        <li>
                            <strong>&lt;dd&gt; (Description Details)</strong>: This is the explanation, description, value, or definition of the preceding term. By default, browsers visibly indent this element.
                        </li>
                    </ul>

                    <div className="bg-[#161b22] border border-gray-800 rounded-xl overflow-hidden my-8">
                        <div className="bg-gray-800/50 px-4 py-2 text-sm text-gray-400 font-mono border-b border-gray-800 flex justify-between">
                            <span>Basic Glossary Example</span>
                            <span>HTML</span>
                        </div>
                        <pre className="p-4 text-sm text-blue-300 overflow-x-auto">
                            {`<dl>
  <dt>Sashimi</dt>
  <dd>Sliced raw fish served with condiments such as shredded daikon, ginger, wasabi and soy sauce.</dd>

  <dt>Bento</dt>
  <dd>A single-portion takeout or home-packed meal of Japanese origin.</dd>
</dl>`}
                        </pre>
                    </div>
                </Section>

                <Section title="Flexible Pairing Configurations" icon={Fingerprint}>
                    <p>
                        The most powerful feature of Description Lists is their flexible nature. Not every term has one single definition,
                        and not every definition belongs exclusively to one term. The HTML <code>&lt;dl&gt;</code> element comfortably
                        handles multiple configurations without breaking semantics.
                    </p>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-white">One Term, Multiple Definitions</h3>
                    <p>
                        Often, a single word can have multiple meanings depending on the context. You express this by writing one
                        <code>&lt;dt&gt;</code>, followed immediately by several consecutive <code>&lt;dd&gt;</code> elements.
                    </p>
                    <pre className="bg-[#161b22] p-4 rounded-xl border border-gray-800 my-4 text-sm text-green-300 overflow-x-auto">
                        {`<dl>
  <dt>Scale</dt>
  <dd>A device used to accurately measure the weight of ingredients.</dd>
  <dd>A technique by which scales are removed from the skin of a fish.</dd>
  <dd>A sequence of marks at regular intervals used as a reference.</dd>
</dl>`}
                    </pre>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-white">Multiple Terms, One Definition</h3>
                    <p>
                        When regional spellings or synonyms share the exact same definition, you can write consecutive
                        <code>&lt;dt&gt;</code> elements, immediately followed by one <code>&lt;dd&gt;</code> that covers them all.
                    </p>
                    <pre className="bg-[#161b22] p-4 rounded-xl border border-gray-800 my-4 text-sm text-green-300 overflow-x-auto">
                        {`<dl>
  <dt>Scamorze</dt>
  <dt>Scamorzo</dt>
  <dd>An Italian cheese usually made from whole cow's milk.</dd>
  
  <dt>Centre</dt>
  <dt>Center</dt>
  <dd>The middle point or part of something.</dd>
</dl>`}
                    </pre>
                    <p>
                        Both of these patterns are completely valid HTML5 and are gracefully understood by assistive technologies.
                    </p>
                </Section>

                <Section title="When To Use Description Lists" icon={TextQuote}>
                    <p>
                        Beyond strict dictionary glossaries, description lists are the semantically correct choice for several common web design patterns:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-300">
                        <li><strong>Frequently Asked Questions (FAQs):</strong> The question sits in the <code>&lt;dt&gt;</code> and the answer belongs in the <code>&lt;dd&gt;</code>.</li>
                        <li><strong>Metadata panels:</strong> Whenever you define "Key / Value" pairs visually. E.g., <strong>Author:</strong> John Doe, <strong>Published:</strong> Sept 14th.</li>
                        <li><strong>Speaker dialogs:</strong> A script where the <code>&lt;dt&gt;</code> is the character name and the <code>&lt;dd&gt;</code> is the spoken line.</li>
                    </ul>

                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mt-6">
                        <h4 className="flex items-center gap-2 text-lg font-bold text-blue-400 mb-2">
                            <Hash size={20} /> Grouping with &lt;div&gt; in HTML5
                        </h4>
                        <p className="text-gray-300 text-sm">
                            In modern HTML5, you are allowed to wrap a group of <code>dt</code> and <code>dd</code> tags within a <code>&lt;div&gt;</code>
                            directly inside the <code>&lt;dl&gt;</code>. This is exceptionally helpful when you need to apply CSS Flexbox or Grid styles
                            to turn a <code>dl</code> into a two-column table view!
                        </p>
                    </div>
                </Section>

                <Section title="Interactive Lists Simulator" icon={BookOpen}>
                    <p className="mb-8">
                        Are you ready to see this in action? Select the "Definition" list type in our simulator below. Try adding multiple terms
                        and definitions to see how the browser visibly indents the <code>&lt;dd&gt;</code> element to distinguish it from the term.
                    </p>
                    <ListsSimulator />
                </Section>

            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/html/lists/unordered-lists" className="flex items-center gap-2 text-gray-500 hover:text-white">
                    <ArrowLeft size={16} /> Unordered Lists
                </Link>
                <Link to="/webdevelopment/html/lists/nested-lists" className="flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300">
                    Next: Nested Lists <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};

export default DefinitionLists;
