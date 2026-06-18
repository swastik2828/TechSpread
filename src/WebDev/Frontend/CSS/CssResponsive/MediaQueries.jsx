import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, MonitorPlay } from 'lucide-react';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";

const MediaQueries = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Media Queries & Breakpoints — CSS Course"
                description="Master CSS media queries, understand mobile-first vs desktop-first workflows, and learn to select breakpoints driven by content."
                keywords="css media queries, breakpoints, mobile first css, desktop first css, media features"
                url="/webdevelopment/css/responsive/media-queries"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-br from-sky-500/20 to-cyan-500/20 rounded-lg border border-sky-500/30 text-sky-400">
                        <MonitorPlay size={24} />
                    </div>
                    <span className="text-sky-400 font-bold tracking-widest uppercase text-sm">CSS Course / Module 12</span>
                </div>
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    Media Queries & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">Breakpoints</span>
                </h1>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Conditional CSS Based on the Environment</h2>
                    <p>
                        A media query is really just an <code>if</code> statement for CSS — "if this condition about the environment is true, apply these rules." The condition is usually about viewport width, but it can check far more than that.
                    </p>
                    
                    <CodeBlock 
                        title="Classic Media Queries"
                        language="css"
                        code={`@media (max-width: 768px) {
  /* Applies when viewport width is 768px or less */
  .container { padding: 16px; }
}

@media (min-width: 769px) {
  /* Applies when viewport width is 769px or more */
  .container { padding: 32px; }
}`} 
                    />

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">A Modern Syntax Worth Knowing</h3>
                    <p>
                        CSS Media Queries Level 4 introduced range syntax, which reads more like ordinary math and avoids the off-by-one confusion of <code>min-width</code>/<code>max-width</code> pairs:
                    </p>
                    <CodeBlock 
                        title="Level 4 Range Syntax"
                        language="css"
                        code={`@media (768px <= width <= 1024px) {
  .container { padding: 24px; }
}

@media (width >= 1280px) {
  .container { padding: 40px; }
}`} 
                    />
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Mobile-First vs. Desktop-First</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-sky-900/10 border border-sky-500/30 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-sky-400 mb-3">Mobile-First</h3>
                            <p className="text-gray-400 text-sm mb-4">
                                Base rules target the smallest screens. You use <code>min-width</code> queries to layer enhancements as the screen grows.
                            </p>
                            <CodeBlock language="css" code={`.card { padding: 16px; }
@media (min-width: 768px) {
  .card { padding: 24px; }
}`} />
                        </div>
                        <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-gray-400 mb-3">Desktop-First</h3>
                            <p className="text-gray-400 text-sm mb-4">
                                Base rules assume full-width desktop. You use <code>max-width</code> queries to strip things down for smaller screens.
                            </p>
                            <CodeBlock language="css" code={`.card { padding: 40px; }
@media (max-width: 767px) {
  .card { padding: 16px; }
}`} />
                        </div>
                    </div>

                    <div className="border-l-4 p-6 rounded-r-xl my-6 border-sky-500 bg-sky-900/10 text-sky-200">
                        <strong>Why Mobile-First usually wins:</strong><br/>
                        1. <strong>Performance:</strong> Mobile devices (often on slower connections) parse the base styles first. No overrides needed.<br/>
                        2. <strong>Mirrors usage:</strong> Mobile traffic is the majority of web traffic.<br/>
                        3. <strong>Forces prioritization:</strong> Starting with 375px forces you to decide what content actually matters, reducing clutter across all views.
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Breakpoints: Choosing Them on Purpose</h2>
                    <p>
                        There is no universal, standardized set of breakpoints. The better approach, and the one professional teams actually use, is <strong>content-driven breakpoints</strong>: resize your browser slowly and add a breakpoint exactly where your <em>specific</em> layout starts to look awkward.
                    </p>
                    <p className="text-sm text-gray-400 italic">
                        Typical conventions (as a starting guess): 480px (Phones), 768px (Tablets), 1024px (Laptops), 1280px+ (Desktops).
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Media Features Beyond Width</h2>
                    <p>Width is common, but you can detect user preferences, device orientation, and more.</p>
                    
                    <CodeBlock 
                        title="Advanced Media Features"
                        language="css"
                        code={`/* Orientation */
@media (orientation: landscape) { .gallery { grid-template-columns: repeat(2, 1fr); } }

/* OS-level Dark Mode */
@media (prefers-color-scheme: dark) {
  body { background: #111; color: #f5f5f5; }
}

/* Reduced Motion (Accessibility requirement) */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    transition-duration: 0.001ms !important;
  }
}`} 
                    />
                    <p className="text-sm text-gray-400 mt-4">
                        Note: Setting durations to <code>0.001ms</code> instead of <code>none</code> ensures that JS events like <code>transitionend</code> still fire, preventing bugs in libraries relying on those events.
                    </p>
                </section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/responsive/intro" className="flex items-center gap-2 text-gray-500 font-bold hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Previous
                </Link>
                <Link to="/webdevelopment/css/responsive/flexible-layouts" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Fluid Layouts & Clamp <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};
export default MediaQueries;