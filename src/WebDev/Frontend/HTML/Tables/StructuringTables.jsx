import React from 'react';
import { Columns, ArrowLeft, ArrowRight, Paintbrush, Ban, DatabaseZap, ListTree } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import TablesSimulator from "../../../../simulators/web/TablesSimulator";

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

const StructuringTables = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="Structuring HTML Tables - thead, tbody, tfoot"
                description="Master advanced HTML table semantics by grouping rows using thead, tbody, and tfoot. Learn why legacy table attributes must be avoided."
                keywords="HTML thead, HTML tbody, HTML tfoot, table semantics HTML, obsolete HTML presentation tags, HTML table sections"
                url="/webdevelopment/html/tables/structuring"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase border border-blue-500/20 mb-4 inline-block">
                    Module 8.4
                </span>
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Structuring</span> Long Tables
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    For massive grids containing dozens or hundreds of rows, HTML5 introduces three sophisticated grouping blocks
                    originating from accounting methodologies: thead, tbody, and tfoot.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">

                <Section title="Semantic Row Grouping" icon={ListTree}>
                    <p>
                        When a raw <code>&lt;table&gt;</code> contains fifty dense rows, there's no inherent way for the
                        browser or JavaScript plugins to quickly differentiate the table's "meat" (the raw metrics) from its "bread"
                        (the labeling headers and numerical summation footers). HTML resolves this via semantic subdivisions.
                    </p>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-white">Three Distinct Sections</h3>
                    <ul className="list-disc pl-6 space-y-4 mb-8 text-gray-300">
                        <li>
                            <strong>&lt;thead&gt;</strong>: Holds the labeling headers (usually containing only <code>&lt;th&gt;</code> tags).
                            Operating-system-level browser features can lock this group to the top of the screen when printing a massive table across multiple printed pages.
                        </li>
                        <li>
                            <strong>&lt;tbody&gt;</strong>: The sprawling container wrapping the actual core data. A table usually contains one
                            <code>tbody</code>, but massive interconnected tables can legally deploy several consecutive <code>tbody</code> blocks to group varied dataset distinctively.
                        </li>
                        <li>
                            <strong>&lt;tfoot&gt;</strong>: The concluding footer block holding overall totals, overarching footnotes, or comprehensive numerical
                            averages calculated from the preceding data block.
                        </li>
                    </ul>

                    <div className="bg-[#161b22] border border-gray-800 rounded-xl overflow-hidden my-6">
                        <div className="bg-gray-800/50 px-4 py-2 text-sm text-gray-400 font-mono border-b border-gray-800 flex justify-between">
                            <span>Financial Report Using Semantics</span>
                            <span>HTML</span>
                        </div>
                        <pre className="p-4 text-sm text-blue-300 overflow-x-auto">
                            {`<table class="finances-table">
  <!-- Table Header Segment -->
  <thead>
    <tr>
      <th>Date</th>
      <th>Income</th>
      <th>Expenditure</th>
    </tr>
  </thead>

  <!-- Table Core Body Segment -->
  <tbody>
    <tr>
      <th scope="row">1st January</th>
      <td>250</td>
      <td>36</td>
    </tr>
    <tr>
      <th scope="row">2nd January</th>
      <td>285</td>
      <td>48</td>
    </tr>
  </tbody>

  <!-- Table Footer Segment -->
  <tfoot>
    <tr>
      <td>Monthly Aggregates</td>
      <td>$7824</td>
      <td>$1241</td>
    </tr>
  </tfoot>
</table>`}
                        </pre>
                    </div>

                    <p>
                        An extremely neat benefit of these tags operates behind the scenes in advanced web development: JavaScript libraries
                        like React or DataTables explicitly rely precisely on the <code>tbody</code> tag to rapidly filter, sort, or paginate
                        the central rows without scrambling the column titles stored cleanly away upstairs inside the <code>thead</code> block.
                    </p>
                </Section>

                <Section title="Obsolete HTML Legacy Attributes" icon={Ban}>
                    <p>
                        Throughout past eras spanning from HTML 2.0 to HTML 4.01, webmakers injected heavy visual formatting attributes explicitly onto tables.
                        Because HTML5 strictly demands separating presentation (the aesthetics) from structure (the actual data), these
                        legacy formatting attributes are aggressively condemned.
                    </p>
                    <p>
                        You will likely dissect decrepit production codebases containing these museum pieces. You must systematically rip them out
                        and implement cleaner CSS alternatives instead.
                    </p>

                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mt-6">
                        <h4 className="text-xl font-bold text-red-400 mb-6">Avoid These Obsolete Attributes:</h4>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-[#161b22] p-4 rounded-lg border border-gray-800">
                                <p className="font-mono text-red-300 text-sm mb-2">&lt;table width="400"&gt;</p>
                                <p className="text-xs text-gray-400"><strong>Fate:</strong> Banned.<br /><strong>Modern Fix:</strong> Inject <code>width: 400px;</code> in an external CSS stylesheet hitting the table selector.</p>
                            </div>
                            <div className="bg-[#161b22] p-4 rounded-lg border border-gray-800">
                                <p className="font-mono text-red-300 text-sm mb-2">&lt;table cellpadding="10"&gt;</p>
                                <p className="text-xs text-gray-400"><strong>Fate:</strong> Banned.<br /><strong>Modern Fix:</strong> Implement CSS <code>padding: 10px;</code> natively targeting the interior <code>td</code> & <code>th</code> elements.</p>
                            </div>
                            <div className="bg-[#161b22] p-4 rounded-lg border border-gray-800">
                                <p className="font-mono text-red-300 text-sm mb-2">&lt;table cellspacing="5"&gt;</p>
                                <p className="text-xs text-gray-400"><strong>Fate:</strong> Banned.<br /><strong>Modern Fix:</strong> Enforce CSS <code>border-spacing: 5px;</code> directly on the overarching <code>table</code> tag.</p>
                            </div>
                            <div className="bg-[#161b22] p-4 rounded-lg border border-gray-800">
                                <p className="font-mono text-red-300 text-sm mb-2">&lt;td bgcolor="#efefef"&gt;</p>
                                <p className="text-xs text-gray-400"><strong>Fate:</strong> Banned.<br /><strong>Modern Fix:</strong> Command CSS <code>background-color: #efefef;</code> via a distinct cell class.</p>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section title="Interactive Tables Simulator" icon={DatabaseZap}>
                    <p className="mb-8">
                        Let's witness <code>thead</code> and <code>tfoot</code> dynamically injected. Use this simulator to toggle the table
                        headers and footers on or off. Note how cleanly those HTML5 groupings structure the generated code overview.
                    </p>
                    <TablesSimulator />
                </Section>

            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/html/tables/spanning" className="flex items-center gap-2 text-gray-500 hover:text-white">
                    <ArrowLeft size={16} /> Spanning Cells
                </Link>
                <Link to="/webdevelopment/html/forms/introduction" className="flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300 transition-colors">
                    Next: Intro to Forms <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};

export default StructuringTables;
