import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BoxSelect } from 'lucide-react';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";

const ModernResponsive = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="Container Queries & Grid Responsiveness — CSS Course"
                description="Learn how to build responsive layouts without media queries using auto-fit Grid and modern CSS Container Queries."
                keywords="css container queries, @container, css grid responsive, auto-fit minmax"
                url="/webdevelopment/css/responsive/modern"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-br from-sky-500/20 to-cyan-500/20 rounded-lg border border-sky-500/30 text-sky-400">
                        <BoxSelect size={24} />
                    </div>
                    <span className="text-sky-400 font-bold tracking-widest uppercase text-sm">CSS Course / Module 12</span>
                </div>
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">Responsive Tools</span>
                </h1>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Responsive Layout Without Media Queries</h2>
                    <p>
                        Modern CSS layout modules can absorb a surprising amount of responsive behavior on their own, with zero breakpoints.
                    </p>
                    
                    <CodeBlock 
                        title="Intrinsic Grid Scaling"
                        language="css"
                        code={`/* Columns automatically wrap based on available space */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}`} 
                    />
                    <p>
                        This single declaration replaces what used to take three or four media queries. It fits as many columns as it can (at least 280px wide) and stretches them to fill leftover space evenly. On a phone, that's one column. On a desktop, it's four.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Container Queries: Responding to the Parent</h2>
                    <p>
                        A media query only ever knows about the <em>viewport</em>. But a component (like a card) might be 1200px wide in a hero section and 280px wide sitting inside a sidebar. Container queries allow components to react to their own available space.
                    </p>
                    
                    <CodeBlock 
                        title="Container Queries Syntax"
                        language="css"
                        code={`/* Step 1: mark an element as a "query container" */
.card-wrapper {
  container-type: inline-size;
  container-name: card;
}

/* Step 2: rules that respond to THAT container's width */
@container card (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 120px 1fr;
  }
}

@container card (max-width: 399px) {
  .card {
    display: flex;
    flex-direction: column;
  }
}`} 
                    />
                    
                    <div className="border-l-4 p-6 rounded-r-xl my-6 border-amber-500 bg-amber-900/10 text-amber-200">
                        <strong>Practical Guidance:</strong> Use media queries for page-level decisions (the overall grid, navigation pattern) and container queries for component-level decisions (how a specific card rearranges itself). They are complementary tools.
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Module Summary</h2>
                    <ul className="space-y-4">
                        <li>The viewport meta tag (<code>width=device-width, initial-scale=1.0</code>) is non-negotiable.</li>
                        <li><strong>Mobile-first</strong> is generally the better default: it's leaner to parse and forces useful prioritization.</li>
                        <li>Breakpoints are conventions, not rules — let your actual content dictate breaks.</li>
                        <li><code>clamp(min, preferred, max)</code> produces smooth, continuous scaling for type and spacing.</li>
                        <li><code>grid-template-columns: repeat(auto-fit, minmax(...))</code> replaces multiple breakpoints for grid cards.</li>
                        <li><strong>Container queries</strong> let a component respond to its own available space, shifting us away from viewport-exclusive thinking.</li>
                    </ul>
                </section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/responsive/flexible-layouts" className="flex items-center gap-2 text-gray-500 font-bold hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Previous
                </Link>
                {/* Could route to a wrap-up/next module from here */}
                <span className="text-gray-500 italic text-sm">End of Module</span>
            </div>
        </article>
    );
};
export default ModernResponsive;