import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Maximize2 } from 'lucide-react';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";
import ResponsiveSimulator from "../../../../simulators/web/css/ResponsiveSimulator";

const FlexibleLayouts = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="Fluid Layouts, Clamp & Containers — CSS Course"
                description="Master the container pattern, responsive images, and continuous fluid scaling using the CSS clamp() function."
                keywords="css container pattern, responsive images, css clamp, fluid typography css"
                url="/webdevelopment/css/responsive/flexible-layouts"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-br from-sky-500/20 to-cyan-500/20 rounded-lg border border-sky-500/30 text-sky-400">
                        <Maximize2 size={24} />
                    </div>
                    <span className="text-sky-400 font-bold tracking-widest uppercase text-sm">CSS Course / Module 12</span>
                </div>
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    Flexible Layout <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">Foundations</span>
                </h1>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">The Container Pattern</h2>
                    <p>
                        Nearly every site uses this pattern to keep content from sprawling edge-to-edge on huge monitors while staying perfectly fluid on small ones:
                    </p>
                    
                    <CodeBlock 
                        title="Standard App Container"
                        language="css"
                        code={`.container {
  width: 100%;
  max-width: 1200px;
  margin-inline: auto;   /* centers the container */
  padding-inline: 16px;  /* side gutters for mobile */
}

@media (min-width: 768px) {
  .container { padding-inline: 24px; }
}

@media (min-width: 1280px) {
  .container { padding-inline: 40px; }
}`} 
                    />
                    <p className="text-sm text-gray-400 mt-4">
                        Using logical properties (<code>padding-inline</code> instead of left/right) ensures your layout doesn't need a separate RTL (Right-to-Left) stylesheet for languages like Arabic.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Responsive Images</h2>
                    <p>
                        Preventing images from breaking their containers is step one. But serving optimized file sizes requires HTML cooperation.
                    </p>
                    <CodeBlock title="CSS Safety Rule" language="css" code={`img {
  max-width: 100%;
  height: auto;
  display: block; /* removes the small inline gap underneath */
}`} />
                    <p className="mt-6">For real bandwidth savings, pair CSS with HTML <code>srcset</code> and <code>sizes</code>:</p>
                    <CodeBlock title="HTML" language="html" code={`<img
  src="hero-800.jpg"
  srcset="hero-480.jpg 480w, hero-800.jpg 800w, hero-1600.jpg 1600w"
  sizes="(max-width: 600px) 100vw, 50vw"
  alt="Description">`} />
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Fluid Values with clamp()</h2>
                    <p>
                        Media queries create <em>steps</em>. The <code>clamp()</code> function creates a value that scales continuously between a minimum and maximum, with no jump at all.
                    </p>
                    
                    <CodeBlock 
                        title="Fluid Scaling"
                        language="css"
                        code={`h1 {
  /* clamp(MIN, PREFERRED, MAX) */
  font-size: clamp(1.8rem, 5vw, 3.5rem);
}

.section {
  padding: clamp(40px, 8vw, 120px);
}`} 
                    />
                    
                    <ResponsiveSimulator />

                    <div className="border-l-4 p-6 rounded-r-xl my-6 border-sky-500 bg-sky-900/10 text-sky-200">
                        <strong>How it works:</strong> The preferred value (<code>5vw</code>) scales fluidly with the screen width. If the screen is so narrow that 5vw drops below <code>1.8rem</code>, the clamp hits the floor and stays at 1.8rem. If the screen is massive, it hits the ceiling and caps out at <code>3.5rem</code>.
                    </div>
                </section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/responsive/media-queries" className="flex items-center gap-2 text-gray-500 font-bold hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Previous
                </Link>
                <Link to="/webdevelopment/css/responsive/modern" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Modern CSS Features <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};
export default FlexibleLayouts;