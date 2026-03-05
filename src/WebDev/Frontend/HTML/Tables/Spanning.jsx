import React from 'react';
import { Maximize2, MoveVertical, MoveHorizontal, ArrowRight, ArrowLeft, Grid3X3, Layers } from 'lucide-react';
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

const Spanning = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="HTML Table Spanning - colspan and rowspan attributes"
                description="Learn how to merge cells in HTML grids using colspan and rowspan attributes to design complex table layouts without breaking rows."
                keywords="HTML colspan, HTML rowspan, spanning table cells, merge cells HTML, advanced HTML tables, web development tutorial"
                url="/webdevelopment/html/tables/spanning"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase border border-blue-500/20 mb-4 inline-block">
                    Module 8.3
                </span>
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Spanning Cells</span>: colspan & rowspan
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    Often times, data grid cells must stretch horizontally across multiple columns or vertically down multiple rows.
                    Discover the mathematical logic underlying the HTML spanning attributes.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">

                <Section title="Merging Cells in HTML" icon={Maximize2}>
                    <p>
                        Think about a school timetable. Some subjects, like a double-period science laboratory class or a geography
                        lecture, might stretch over two consecutive one-hour time blocks (from 9:00 AM to 11:00 AM).
                    </p>
                    <p>
                        If you were building this grid in Microsoft Excel, you would simply highlight the two adjacent cells, right-click,
                        and select <em>"Merge Cells"</em>. In HTML, this visual merging effect is strictly achieved using two powerful numerical
                        attributes applied directly onto the <code>&lt;th&gt;</code> or <code>&lt;td&gt;</code> element you wish to dominate the surrounding space.
                    </p>

                    <ul className="list-disc pl-6 space-y-4 mb-8 text-gray-300">
                        <li>
                            <strong>colspan="N"</strong>: Forces a cell to stretch horizontally across the X-axis across <em>N</em> contiguous columns.
                        </li>
                        <li>
                            <strong>rowspan="N"</strong>: Forces a cell to stretch vertically down the Y-axis across <em>N</em> contiguous rows.
                        </li>
                    </ul>

                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 flex items-start gap-4">
                        <Grid3X3 size={28} className="text-red-500 shrink-0 mt-1" />
                        <div>
                            <h4 className="text-lg font-bold text-red-500 mb-2">The Critical Compensation Rule</h4>
                            <p className="text-gray-300 text-sm">
                                When a master cell forcibly spans across multiple columns or descends into subsequent rows, it physically
                                occupies those grid coordinates. Therefore, when you write the HTML code for the "invaded" portions of the grid,
                                you must deliberately write <strong>fewer</strong> <code>&lt;td&gt;</code> elements entirely. If you forget to deduct the occupied cells,
                                the table's geometry shatters, instantly forcing the remaining trailing data drastically off the edge of the grid structure.
                            </p>
                        </div>
                    </div>
                </Section>

                <Section title="Horizontal Control: The 'colspan' Attribute" icon={MoveHorizontal}>
                    <p>
                        When utilizing the <code>colspan</code> attribute, the modification happens strictly within a single standalone row.
                    </p>
                    <p>
                        Let's build a class timetable representing Monday morning. We need 5 total columns: a blank cell on the left followed
                        by 4 distinct one-hour time slots.
                    </p>

                    <div className="bg-[#161b22] border border-gray-800 rounded-xl overflow-hidden my-6">
                        <div className="bg-gray-800/50 px-4 py-2 text-sm text-gray-400 font-mono border-b border-gray-800 flex justify-between">
                            <span>Two-Hour Geography Class</span>
                            <span>HTML</span>
                        </div>
                        <pre className="p-4 text-sm text-blue-300 overflow-x-auto">
                            {`<table>
  <tr>
    <th></th>
    <th>9:00am</th>
    <th>10:00am</th>
    <th>11:00am</th>
    <th>12:00pm</th>
  </tr> <!-- We defined exactly 5 cells for the top header row. -->

  <tr>
    <th>Monday</th> <!-- 1st cell -->
    <td colspan="2">Geography</td> <!-- 2nd cell spans across 9am & 10am slots -->
    <td>Math</td> <!-- 3rd cell sits under 11am -->
    <td>Art</td> <!-- 4th cell sits under 12pm -->
  </tr>
</table>`}
                        </pre>
                    </div>

                    <p>
                        Notice how the <code>&lt;tr&gt;</code> for Monday has technically produced only <strong>four tags</strong>—(1 th, 3 tds)—rather
                        than five. The browser sees that the <code>Geography</code> entry is explicitly claiming two column slots via
                        <code>colspan="2"</code>, summing out correctly to form a perfect 5-column grid without leaving an ugly vacant space hanging off the right margin.
                    </p>
                </Section>

                <Section title="Vertical Control: The 'rowspan' Attribute" icon={MoveVertical}>
                    <p>
                        Mastering <code>rowspan</code> requires significantly more visualization skill because its effects cascade aggressively
                        downwards into entirely separate <code>&lt;tr&gt;</code> blocks written lower on the page.
                    </p>

                    <p>
                        Imagine a TV programming schedule grid containing three channels (ABC, BBC, CNN) airing content from 6:00 PM to 8:00 PM.
                        On the ABC network, an epic feature-length "Movie" occupies the total two-hour continuous timeframe.
                        Conversely, BBC and CNN broadcast typical half-hour or one-hour shorter segments independently.
                    </p>

                    <div className="bg-[#161b22] border border-gray-800 rounded-xl overflow-hidden my-6">
                        <div className="bg-gray-800/50 px-4 py-2 text-sm text-gray-400 font-mono border-b border-gray-800 flex justify-between">
                            <span>TV Schedule Film Runtime</span>
                            <span>HTML</span>
                        </div>
                        <pre className="p-4 text-sm text-blue-300 overflow-x-auto">
                            {`<table>
  <tr>
    <th></th> <!-- Empty corner -->
    <th>ABC</th>
    <th>BBC</th>
    <th>CNN</th>
  </tr> <!-- 4 total column units expected per row -->

  <!-- First Time Row (6pm) -->
  <tr>
    <th>6pm - 7pm</th>
    <td rowspan="2">Movie</td> <!-- Forces this cell down into the NEXT row's ABC column -->
    <td>Comedy</td>
    <td>News</td>
  </tr> <!-- 4 cells perfectly generated -->

  <!-- Second Time Row (7pm) -->
  <tr>
    <th>7pm - 8pm</th>
    <!-- DO NOT place an ABC cell here. The "Movie" cell from the row above has legally claimed this coordinate. -->
    <td>Sport</td> <!-- Sits securely under BBC -->
    <td>Current Affairs</td> <!-- Sits securely under CNN -->
  </tr> <!-- Only 3 physical tags written, but the grid computes 4 correctly! -->
</table>`}
                        </pre>
                    </div>
                    <p>
                        In the 7:00 PM row, only <strong>three</strong> HTML cell tags are authored. The first cell is the row header (7pm - 8pm).
                        The ABC column position is legally consumed by the hovering "Movie" from the block above it. So, the browser skips it, interpreting the
                        subsequent two tags (Sport and Current Affairs) sequentially inserting them into the BBC and CNN slots appropriately.
                    </p>
                </Section>

                <Section title="Simulating the Process Mentally" icon={Layers}>
                    <p>
                        Before attempting a highly complex table combining interwoven rowspans and colspans, professional web engineers highly recommend
                        sketching the visual grid structure directly on paper first using a pen. Draw the full unmerged strict rectangular grid,
                        then shade in the blocks that span, and boldly cross out the empty boxes they obliterate. Finally, write the underlying HTML solely
                        following the boxes that remain on your paper.
                    </p>
                </Section>

            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/html/tables/table-headings" className="flex items-center gap-2 text-gray-500 hover:text-white">
                    <ArrowLeft size={16} /> Table Headings
                </Link>
                <Link to="/webdevelopment/html/tables/structuring" className="flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300">
                    Next: Structuring Tables <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};

export default Spanning;
