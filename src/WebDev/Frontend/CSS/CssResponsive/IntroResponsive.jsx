import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone } from 'lucide-react';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";

const IntroResponsive = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="Responsive Design Introduction — CSS Course"
                description="Learn the fundamentals of responsive design, why it matters, and how the viewport meta tag controls mobile rendering."
                keywords="responsive design css, viewport meta tag, css mobile layout, web responsiveness"
                url="/webdevelopment/css/responsive/intro"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-br from-sky-500/20 to-cyan-500/20 rounded-lg border border-sky-500/30 text-sky-400">
                        <Smartphone size={24} />
                    </div>
                    <span className="text-sky-400 font-bold tracking-widest uppercase text-sm">CSS Course / Module 12</span>
                </div>
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    Introduction to <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">Responsive Design</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    Responsive design isn't really about phones versus desktops anymore. It's about building layouts that don't care what device they're on, because they're built out of flexible parts from the start.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Why This Module Matters</h2>
                    <p>
                        Somewhere between 2010 and now, "responsive design" stopped being a specialty and became table stakes. If a site breaks on a phone, most visitors never bother scrolling past the broken part — they leave. 
                    </p>
                    <p>
                        This module walks through that modern mindset — from the one HTML tag every responsive site needs, through media queries, fluid units, modern layout tools, and the newer container query system that's now safe to use in production. By the end, you should be able to look at a design mockup and know exactly which tool fits which problem, instead of reaching for a media query out of habit every time something looks wrong on a small screen.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">The Viewport Meta Tag: The Switch That Turns Responsive CSS On</h2>
                    <p>
                        Before any CSS rule can do its job, the browser needs to be told how to treat the screen it's rendering on. Mobile browsers historically assumed every site was built for a desktop, so by default they'd render the page at a fixed width (typically 980px) and shrink the whole thing down to fit, leaving users to pinch-zoom just to read text. <strong>The viewport meta tag turns that behavior off.</strong>
                    </p>
                    
                    <CodeBlock 
                        title="HTML Head"
                        language="html"
                        code={`<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
</head>`} 
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-[#0d1117] border border-gray-800 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-sky-400 mb-3">width=device-width</h3>
                            <p className="text-gray-400 text-sm">
                                Tells the browser to set the viewport's width to match the actual width of the device in CSS pixels, rather than some fixed desktop-sized assumption.
                            </p>
                        </div>
                        <div className="bg-[#161b22] border border-gray-800 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-cyan-400 mb-3">initial-scale=1.0</h3>
                            <p className="text-gray-400 text-sm">
                                Sets the initial zoom level to 1, so the page loads at a 1:1 ratio between CSS pixels and viewport pixels.
                            </p>
                        </div>
                    </div>
                    
                    <div className="border-l-4 p-6 rounded-r-xl my-6 border-amber-500 bg-amber-900/10 text-amber-200">
                        <strong>Accessibility Warning:</strong> A common mistake is adding <code>user-scalable=no</code> or <code>maximum-scale=1.0</code> to "lock" the zoom level. Resist that urge. Disabling pinch-zoom is an accessibility problem — people with low vision rely on it. Let people zoom.
                    </div>
                </section>
            </div>

            <div className="flex justify-end mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/responsive/media-queries" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Media Queries & Breakpoints <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};
export default IntroResponsive;