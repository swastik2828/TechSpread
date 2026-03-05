import React from 'react';
import { Table, LayoutGrid, ArrowRight, ArrowLeft, ShieldAlert, FileText, Code } from 'lucide-react';
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

const BasicTables = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="HTML Tables - Organizing Data in Grids"
                description="Learn the fundamentals of HTML tables. Master the table, tr, and td elements to display tabular data effectively on the web."
                keywords="HTML tables, table element, HTML tr, HTML td, tabular data, web development tutorial, beginner HTML tables"
                url="/webdevelopment/html/tables/basic-tables"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase border border-blue-500/20 mb-4 inline-block">
                    Module 8.1
                </span>
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    Introduction to HTML <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Tables</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    A table represents information in a strict grid format comprised of rows and columns.
                    Discover how to define precise data grids using the core HTML table elements.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">

                <Section title="What Are Tables For?" icon={Table}>
                    <p>
                        Whenever you need to present data that has a mathematical or logical two-dimensional relationship,
                        you should reach for an HTML table. If you can envision the data comfortably residing inside a spreadsheet
                        application like Microsoft Excel or Google Sheets, it belongs in an HTML <code>&lt;table&gt;</code>.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-300">
                        <li><strong>Financial Reports:</strong> Monthly income vs. expenditure.</li>
                        <li><strong>Schedules & Timetables:</strong> A weekly class schedule or train departure board.</li>
                        <li><strong>Comparisons:</strong> Feature comparisons between tiered pricing plans (Basic, Pro, Enterprise).</li>
                        <li><strong>Sports Scoreboards:</strong> Match results, points, and league standings.</li>
                    </ul>

                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mt-8 flex flex-col md:flex-row gap-6 items-start">
                        <ShieldAlert size={32} className="text-red-500 shrink-0 mt-1" />
                        <div>
                            <h3 className="text-xl font-bold text-red-500 mb-2">The Golden Rule: Never Use Tables For Layout</h3>
                            <p className="text-gray-300 text-sm md:text-base">
                                In the late 1990s and early 2000s, web developers constantly misused the <code>&lt;table&gt;</code> block
                                to create complex visual page layouts (like placing a sidebar next to a main content area). Today, this is
                                universally considered <strong>terrible practice</strong>.
                                <br /><br />
                                Screen readers struggle massively when layout tables are used, announcing unrelated layout columns as if they
                                were tabular data rows. Modern developers must <em>always</em> utilize CSS Layout mechanisms—specifically
                                Flexbox or CSS Grid—for structural webpage layout, and strictly reserve the HTML <code>&lt;table&gt;</code> tag solely for presenting data.
                            </p>
                        </div>
                    </div>
                </Section>

                <Section title="The Core Table Architecture" icon={LayoutGrid}>
                    <p>
                        An HTML table is built using a strict hierarchy of elements. The browser renders the grid horizontally, mapping it out row by row.
                        Unlike a spreadsheet where you can click on an arbitrary "Column C, Row 4", HTML forces you to declare the entire
                        first row, fill all its cells from left to right, then generate the second row, and so on.
                    </p>
                    <p>
                        Four core HTML tags construct practically every standard table:
                    </p>
                    <ul className="list-disc pl-6 space-y-4 mb-8 text-gray-300">
                        <li>
                            <strong>&lt;table&gt; (Table Container):</strong>
                            The overarching wrapper element. All other table-related tags must safely live inside this box.
                        </li>
                        <li>
                            <strong>&lt;tr&gt; (Table Row):</strong>
                            Defines a single horizontal row across the grid. An empty <code>&lt;tr&gt;</code> creates a physical
                            row in the DOM but displays nothing until you place cells inside it.
                        </li>
                        <li>
                            <strong>&lt;td&gt; (Table Data):</strong>
                            A standard data cell containing the actual content. Text, numbers, links, or even images go safely tucked away inside a <code>&lt;td&gt;</code> element.
                        </li>
                        <li>
                            <strong>&lt;th&gt; (Table Heading):</strong>
                            A specialized cell that acts as a header or label for the column below it or the row beside it. Browsers usually
                            render the text within a <code>&lt;th&gt;</code> as bold and horizontally centered by default. We will explore this
                            crucial accessibility tag deeply in the next chapter.
                        </li>
                    </ul>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-white">Visualizing A Simple 3x3 Grid</h3>
                    <p>
                        Let's trace out a basic 3-by-3 table. Notice the repetitive nested pattern. We declare the table, open the first row,
                        add three data cells, close the row. Then we repeat that pattern twice more.
                    </p>

                    <div className="bg-[#161b22] border border-gray-800 rounded-xl overflow-hidden my-6">
                        <div className="bg-gray-800/50 px-4 py-2 text-sm text-gray-400 font-mono border-b border-gray-800 flex justify-between">
                            <span>Basic 3x3 Score Grid</span>
                            <span>HTML</span>
                        </div>
                        <pre className="p-4 text-sm text-blue-300 overflow-x-auto">
                            {`<table>
  <!-- Row 1 -->
  <tr>
    <td>15</td>
    <td>15</td>
    <td>30</td>
  </tr>
  
  <!-- Row 2 -->
  <tr>
    <td>45</td>
    <td>60</td>
    <td>45</td>
  </tr>
  
  <!-- Row 3 -->
  <tr>
    <td>60</td>
    <td>90</td>
    <td>90</td>
  </tr>
</table>`}
                        </pre>
                    </div>
                    <p>
                        Without any external CSS styling applied to it, this raw table will appear somewhat cramped onscreen. The numbers
                        will bunch together tightly without visible grid borders. Historically, developers would add a bloated attribute directly
                        to the HTML tag like <code>&lt;table border="1"&gt;</code> simply to force borders to render. Because modern practices separate content
                        from presentation, we now strictly handle borders and padding entirely through CSS style sheets.
                    </p>
                </Section>

                <Section title="Interactive Tables Simulator" icon={Code}>
                    <p className="mb-8">
                        Let's witness HTML grids coming to life. Use this simulator to slide the row and column generators.
                        Toggle the "Enable CSS Borders" to toggle a helpful visual grid boundary and inspect the live HTML underneath.
                    </p>
                    <TablesSimulator />
                </Section>

                <Section title="Missing Cells Destabilize Grids" icon={FileText}>
                    <p>
                        Because HTML tables are rendered strictly sequentially, skipping or omitting cells creates dangerous cascading problems.
                        If your table is defined to expect 5 column cells per row, but in Row 3 you only provide 4 <code>&lt;td&gt;</code> tags,
                        the browser will misalign the data. The missing gap appears on the far right edge of the grid, pushing your remaining data
                        awkwardly to the left.
                    </p>
                    <p>
                        <strong>Crucial Rule:</strong> Every single cell position within the rectangular grid must be accounted for with a corresponding
                        <code>&lt;td&gt;</code> or <code>&lt;th&gt;</code> element! Even if the cell is intended to remain totally blank (such as the
                        top-leftmost "corner" intersecting a row header and a column header), you absolutely must still write an empty tag:
                        <code>&lt;th&gt;&lt;/th&gt;</code> or <code>&lt;td&gt;&lt;/td&gt;</code>.
                    </p>
                    <p>
                        In upcoming chapters, we will learn how to gracefully merge cells across multiple spaces using spanning attributes, thereby reducing
                        the total number of required <code>td</code> tags mathematically required in a given row.
                    </p>
                </Section>

            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/html/lists/nested-lists" className="flex items-center gap-2 text-gray-500 hover:text-white">
                    <ArrowLeft size={16} /> Nested Lists
                </Link>
                <Link to="/webdevelopment/html/tables/table-headings" className="flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300">
                    Next: Table Headings <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};

export default BasicTables;
