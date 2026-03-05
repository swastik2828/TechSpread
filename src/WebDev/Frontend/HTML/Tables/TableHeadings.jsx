import React from 'react';
import { Type, ArrowRight, ArrowLeft, ShieldCheck, Eye, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";

const Section = ({ title, icon: Icon, children }) => (
    <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl border border-blue-500/30 text-blue-400">
                <Icon size={28} />
            </div>
            <h2 className="text-3xl font-bold text-white">{title}</h2>
        </div>
        {children}
    </section>
);

const TableHeadings = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="HTML Table Headings - The th tag and scope Attribute"
                description="Understand how to make HTML tables accessible by utilizing the <th> table heading element and the semantic scope attribute."
                keywords="HTML table headings, th element, HTML scope attribute, accessible HTML tables, web development accessibility"
                url="/webdevelopment/html/tables/table-headings"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase border border-blue-500/20 mb-4 inline-block">
                    Module 8.2
                </span>
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Table Headings</span> and Accessibility
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    Standard data cells (<code>&lt;td&gt;</code>) alone cannot explain what data they hold.
                    Discover how the <code>&lt;th&gt;</code> element makes tables deeply understandable to both sighted users and screen reading software.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">

                <Section title="Introducing the Table Heading element" icon={Type}>
                    <p>
                        When staring at a massive grid filled with raw numbers or dates, it’s practically impossible to determine
                        what they represent without corresponding labels at the top of the column or at the start of the row.
                    </p>
                    <p>
                        You might assume that you could simply type the label into a normal <code>&lt;td&gt;</code> and apply bold styling
                        via CSS (or the <code>&lt;strong&gt;</code> tag) to visually separate it from the rest of the data. While that visually
                        mimics a heading, it miserably fails the test of semantics and accessibility.
                    </p>

                    <p>
                        Whenever a grid cell acts as a label describing the data around it, you absolutely must replace the standard
                        <code>&lt;td&gt;</code> (Table Data) element with a <code>&lt;th&gt;</code> (Table Heading) element inside that row.
                    </p>

                    <div className="bg-[#161b22] border border-gray-800 rounded-xl overflow-hidden my-8">
                        <div className="bg-gray-800/50 px-4 py-2 text-sm text-gray-400 font-mono border-b border-gray-800 flex justify-between">
                            <span>Basic Column Headings</span>
                            <span>HTML</span>
                        </div>
                        <pre className="p-4 text-sm text-blue-300 overflow-x-auto">
                            {`<table>
  <tr>
    <th>Date</th>
    <th>Income</th>
    <th>Expenditure</th>
  </tr>
  <tr>
    <td>1st January</td>
    <td>250</td>
    <td>36</td>
  </tr>
</table>`}
                        </pre>
                    </div>

                    <p>
                        Most modern web browsers recognize the <code>&lt;th&gt;</code> element implicitly. By default, browsers will boldly
                        style its text content and automatically position it squarely in the horizontal center of the cell, visibly marking it
                        as distinct from standard data.
                    </p>
                </Section>

                <Section title="The Crucial 'scope' Attribute" icon={Compass}>
                    <p>
                        While using <code>&lt;th&gt;</code> identifies a cell as a header, it doesn’t computationally clarify <em>which</em> cells
                        it is actually labeling. Is the "Income" heading meant to label numbers running horizontally across its row, or down vertically
                        across its column? Sighted users typically infer this visually based on the table's shape.
                    </p>
                    <p>
                        You erase all ambiguity for screen readers by explicitly adding the <code>scope</code> attribute directly onto the
                        <code>&lt;th&gt;</code> tag.
                    </p>

                    <ul className="list-disc pl-6 space-y-4 mb-8 text-gray-300">
                        <li>
                            <strong>scope="col"</strong> — Declares that this heading acts as a label for every cell falling directly below it. It defines the entire vertical column.
                        </li>
                        <li>
                            <strong>scope="row"</strong> — Declares that this heading acts as a label for every subsequent cell residing directly to its right. It defines the horizontal row.
                        </li>
                    </ul>

                    <div className="bg-[#161b22] border border-gray-800 rounded-xl overflow-hidden my-6">
                        <div className="bg-gray-800/50 px-4 py-2 text-sm text-gray-400 font-mono border-b border-gray-800 flex justify-between">
                            <span>Weekend Ticket Sales Header Complex</span>
                            <span>HTML</span>
                        </div>
                        <pre className="p-4 text-sm text-blue-300 overflow-x-auto">
                            {`<table>
  <tr>
    <th></th> <!-- Empty top-left cell acts as a spacer -->
    <th scope="col">Saturday</th>
    <th scope="col">Sunday</th>
  </tr>
  <tr>
    <th scope="row">Tickets sold:</th>
    <td>120</td>
    <td>135</td>
  </tr>
  <tr>
    <th scope="row">Gross sales:</th>
    <td>$600</td>
    <td>$675</td>
  </tr>
</table>`}
                        </pre>
                    </div>

                    <p>
                        Observe the top-leftmost cell: <code>&lt;th&gt;&lt;/th&gt;</code>. Because that specific cell intersects a row defining headers
                        and a column defining headers, it rarely contains meaning itself. However, as noted in the previous chapter, we must author
                        the empty tag to maintain the rigid structural integrity of the 3-by-3 grid underneath.
                    </p>
                </Section>

                <Section title="Why Scope Is Non-Negotiable" icon={ShieldCheck}>
                    <p>
                        Consider a visually impaired user relying on a modern screen reader to evaluate the "Gross sales" on "Sunday".
                    </p>
                    <p>
                        A sighted user rapidly tracks their eye vertically from "Sunday" and horizontally from "Gross sales" to find the intersecting
                        value: $675. To simulate this mentally parsing intersection task, screen readers allow users to manually traverse the HTML
                        table cell-by-cell using complex keyboard shortcuts.
                    </p>

                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mt-6 flex items-start gap-4">
                        <Eye size={28} className="text-blue-500 shrink-0 mt-1" />
                        <div>
                            <h4 className="text-lg font-bold text-blue-400 mb-2">Screen Reader Navigation</h4>
                            <p className="text-gray-300 mb-2 text-sm">
                                When the visually disabled user finally arrives down at the cell containing "$675", the screen reader software performs
                                a programmatic scan in the background. It seeks upward and completely sideways across the DOM specifically searching for any heading
                                elements (<code>&lt;th&gt;</code>) equipped with matching <code>scope</code> declarations that relate to that specific cell's intersecting coordinates.
                            </p>
                            <p className="text-gray-300 text-sm">
                                By detecting <code>scope="col"</code> and <code>scope="row"</code>, the screen reader audibly announces:
                                <strong> "Sunday, Gross sales: $675."</strong>
                            </p>
                        </div>
                    </div>

                    <p className="mt-6">
                        Without those incredibly simple semantic signposts baked into your HTML syntax, the grid essentially crashes. The user would blindly hear
                        countless streams of uncontextualized numbers—"$600", "$675"—and be left utterly unable to determine their structural relationship. Therefore, applying
                        the <code>scope</code> attribute is not merely an optional best-practice recommendation; it is an absolute functional necessity.
                    </p>
                </Section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/html/tables/basic-tables" className="flex items-center gap-2 text-gray-500 hover:text-white">
                    <ArrowLeft size={16} /> Basic Tables
                </Link>
                <Link to="/webdevelopment/html/tables/spanning" className="flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300">
                    Next: Spanning Cells <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};

export default TableHeadings;
