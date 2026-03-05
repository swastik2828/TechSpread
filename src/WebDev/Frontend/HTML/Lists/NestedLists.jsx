import React from 'react';
import { Layers, ArrowRight, ArrowLeft, BugIcon, ShieldAlert, Code } from 'lucide-react';
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

const NestedLists = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="HTML Nested Lists - Creating Sublists and Hierarchies"
                description="Learn the golden rules for nesting HTML lists correctly. Discover how to create complex submenus and multi-level outlines."
                keywords="HTML nested lists, nesting lists HTML, li element nesting, HTML sublist, multi-level lists, web development tutorial"
                url="/webdevelopment/html/lists/nested-lists"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase border border-orange-500/20 mb-4 inline-block">
                    Module 7.4
                </span>
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Nested Lists</span> and Hierarchies
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    Often, a simple flat list is not enough to convey complex information. HTML allows you to insert lists
                    inside other lists to create deeply nested hierarchical structures, such as a multi-tier menu or a detailed document outline.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">

                <Section title="The Golden Rule of Nesting Lists" icon={Layers}>
                    <p>
                        When building a nested list (also known as a sublist), there is one strict structural rule that beginners frequently violate:
                    </p>
                    <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 my-6 flex items-start gap-4">
                        <ShieldAlert size={28} className="text-red-500 shrink-0 mt-1" />
                        <div>
                            <h3 className="text-xl font-bold text-red-400 mb-2">The Golden Rule</h3>
                            <p className="text-gray-300">
                                A nested <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code> must <strong>always</strong> be placed directly inside an existing
                                <code>&lt;li&gt;</code> element. It must <strong>never</strong> be placed freely inside the parent
                                <code>&lt;ul&gt;</code> outside of a list item.
                            </p>
                        </div>
                    </div>

                    <p>
                        Let's visualize this with a dessert menu that has subcategories. Notice how the inner unordered list lives <em>inside</em> the
                        <code>&lt;li&gt;Pastries...&lt;/li&gt;</code> tag right before it closes.
                    </p>

                    <div className="bg-[#161b22] border border-gray-800 rounded-xl overflow-hidden my-8">
                        <div className="bg-gray-800/50 px-4 py-2 text-sm text-gray-400 font-mono border-b border-gray-800 flex justify-between">
                            <span>Correct Semantic Nesting</span>
                            <span className="text-green-400 flex items-center gap-1"><Code size={14} /> Valid</span>
                        </div>
                        <pre className="p-4 text-sm text-blue-300 overflow-x-auto">
                            {`<ul>
  <li>Mousses</li>
  <li>Pastries
    <!-- The nested list starts BEFORE the parent <li> closes -->
    <ul>
      <li>Croissant</li>
      <li>Mille-feuille</li>
      <li>Palmier</li>
      <li>Profiterole</li>
    </ul>
  </li> <!-- The parent <li> closes HERE -->
  <li>Tarts</li>
</ul>`}
                        </pre>
                    </div>
                </Section>

                <Section title="Common Mistakes to Avoid" icon={BugIcon}>
                    <p>
                        The most common mistake developers make is closing the list item too early and throwing the nested list directly onto
                        the same level as the other <code>&lt;li&gt;</code> elements.
                    </p>
                    <p>
                        While browsers are remarkably forgiving and might visually render this mistake somewhat correctly (attempting to guess
                        what you meant), it creates broken HTML that structurally fails accessibility validation.
                    </p>

                    <div className="bg-[#161b22] border border-red-900/50 rounded-xl overflow-hidden my-8">
                        <div className="bg-red-900/30 px-4 py-2 text-sm text-red-300 font-mono border-b border-red-900/50 flex justify-between">
                            <span>Incorrect Nesting</span>
                            <span className="text-red-400 flex items-center gap-1"><Code size={14} /> Invalid</span>
                        </div>
                        <pre className="p-4 text-sm text-red-300 overflow-x-auto">
                            {`<ul>
  <li>Pastries</li> <!-- WRONG! The tag closes here -->
  
  <ul> <!-- This <ul> is orphaned directly inside the parent <ul> -->
    <li>Croissant</li>
    <li>Palmier</li>
  </ul>
</ul>`}
                        </pre>
                    </div>
                </Section>

                <Section title="Mixing List Types" icon={Layers}>
                    <p>
                        You are not restricted to nesting unordered lists inside unordered lists. You can freely mix types depending on what the data demands.
                        A common scenario is a numbered procedural guide that contains a bulleted list of tools required for a specific step.
                    </p>
                    <pre className="bg-[#161b22] p-4 rounded-xl border border-gray-800 my-4 text-sm text-green-300 overflow-x-auto">
                        {`<ol>
  <li>Assemble the ingredients.</li>
  <li>Prepare the baking equipment.
    <ul>
      <li>1x Piping bag</li>
      <li>2x Stainless steel mixing bowls</li>
      <li>1x Whisk</li>
    </ul>
  </li>
  <li>Preheat the oven to 180°C.</li>
</ol>`}
                    </pre>
                    <p>
                        When browsers render deeply nested menus interactively, they intuitively alternate bullet styles (disc <span>→</span> circle <span>→</span> square)
                        to help the user visually distinguish the depth level. Of course, using modern CSS, you wield total control over the
                        appearance at every single nested tier.
                    </p>
                </Section>

            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/html/lists/definition-lists" className="flex items-center gap-2 text-gray-500 hover:text-white">
                    <ArrowLeft size={16} /> Definition Lists
                </Link>
                <Link to="/webdevelopment/html/tables/basic-tables" className="flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300">
                    Next Module: Tables <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};

export default NestedLists;
