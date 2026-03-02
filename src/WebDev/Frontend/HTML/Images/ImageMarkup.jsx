import React, { useState } from 'react';
import { Code, ArrowRight, ArrowLeft, Terminal, Server, Layout, MonitorSmartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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

const ImgSimulator = () => {
    const [src, setSrc] = useState("https://images.unsplash.com/photo-1517404215738-15263e9f9178?q=80&w=600&auto=format&fit=crop");
    const [alt, setAlt] = useState("A laptop showing code segments on a dark desk");
    const [width, setWidth] = useState("400");
    const [height, setHeight] = useState("250");
    const [imgError, setImgError] = useState(false);

    const handleSrcChange = (e) => {
        setSrc(e.target.value);
        setImgError(false);
    };

    return (
        <div className="bg-[#1e293b]/40 border border-gray-700 rounded-2xl overflow-hidden shadow-2xl my-10">
            <div className="border-b border-gray-700 bg-[#0f172a] p-4 flex items-center justify-between">
                <h4 className="text-blue-400 font-bold flex items-center gap-2"><MonitorSmartphone size={18} /> Image Element Simulator</h4>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Editor */}
                <div className="p-6 border-r border-gray-700 bg-[#0f172a]/80">
                    <p className="text-sm text-gray-400 mb-6">Modify the attributes below to see how they affect the image rendering in real-time. Notice how the alt text appears if the source is broken.</p>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-500 mb-1">src (Image URL)</label>
                            <input
                                type="text"
                                value={src}
                                onChange={handleSrcChange}
                                className="w-full bg-[#111] border border-gray-700 rounded-lg px-3 py-2 text-sm text-green-300 font-mono focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 mb-1">alt (Alternative Text)</label>
                            <input
                                type="text"
                                value={alt}
                                onChange={(e) => setAlt(e.target.value)}
                                className="w-full bg-[#111] border border-gray-700 rounded-lg px-3 py-2 text-sm text-yellow-300 font-mono focus:border-orange-500 focus:outline-none transition-colors"
                            />
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label className="block text-xs font-bold text-gray-500 mb-1">width (px)</label>
                                <input
                                    type="number"
                                    value={width}
                                    onChange={(e) => setWidth(e.target.value)}
                                    className="w-full bg-[#111] border border-gray-700 rounded-lg px-3 py-2 text-sm text-purple-300 font-mono focus:border-orange-500 focus:outline-none transition-colors"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-xs font-bold text-gray-500 mb-1">height (px)</label>
                                <input
                                    type="number"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                    className="w-full bg-[#111] border border-gray-700 rounded-lg px-3 py-2 text-sm text-purple-300 font-mono focus:border-orange-500 focus:outline-none transition-colors"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 bg-black/50 p-4 rounded-lg border border-gray-800 font-mono text-sm overflow-x-auto text-gray-300">
                        <span className="text-gray-500">&lt;</span>
                        <span className="text-blue-400">img</span>
                        <br />
                        &nbsp;&nbsp;<span className="text-blue-200">src</span><span className="text-gray-500">=</span><span className="text-green-300">"{src}"</span>
                        <br />
                        &nbsp;&nbsp;<span className="text-blue-200">alt</span><span className="text-gray-500">=</span><span className="text-yellow-300">"{alt}"</span>
                        <br />
                        &nbsp;&nbsp;<span className="text-blue-200">width</span><span className="text-gray-500">=</span><span className="text-purple-300">"{width}"</span>
                        <br />
                        &nbsp;&nbsp;<span className="text-blue-200">height</span><span className="text-gray-500">=</span><span className="text-purple-300">"{height}"</span>
                        <br />
                        <span className="text-gray-500">/&gt;</span>
                    </div>
                </div>

                {/* Preview */}
                <div className="p-6 bg-[#0B1120] flex flex-col items-center justify-center min-h-[400px]">
                    <span className="text-xs uppercase tracking-widest text-gray-600 font-bold mb-4 block w-full text-center">Browser Preview</span>

                    <div className="border border-dashed border-gray-700 p-2 relative overflow-hidden flex items-center justify-center bg-white/5"
                        style={{ width: `${width}px`, height: `${height}px`, maxWidth: '100%', maxHeight: '400px' }}>
                        {!imgError ? (
                            <img
                                src={src}
                                alt={alt}
                                width={width}
                                height={height}
                                onError={() => setImgError(true)}
                                className="object-cover w-full h-full"
                            />
                        ) : (
                            <div className="flex items-center gap-2 text-gray-400 p-4 text-center">
                                <span className="text-sm font-serif italic border border-gray-600 bg-gray-800/50 p-2 flex items-center justify-center min-w-[20px] min-h-[20px]">
                                    (Missing image icon) {alt}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

const ImageMarkup = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="HTML Image Markup: Writing It Correctly"
                description="Master the HTML img element, src and alt attributes, figures, and block vs inline element concepts."
                keywords="HTML img tag, image attributes, figure element, figcaption, alt text, web development, TechSpread"
                url="/webdevelopment/html/image-markup"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase border border-orange-500/20 mb-4 inline-block">
                    Module 5.2
                </span>
                <h1 className="text-5xl font-extrabold text-white mb-6">HTML Image Markup: <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Writing It Correctly</span></h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    Learn the syntax, necessary attributes, and file structures required to cleanly and semantically present graphics on a web page.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">

                <p className="text-lg mb-8 leading-relaxed">
                    In HTML, images are inserted using the self-closing <code>&lt;img&gt;</code> element. Unlike most HTML elements, <code>img</code> does not have an opening and closing tag pair — it is an empty element that stands alone and tells the browser to fetch and display an external file at that point in the document.
                </p>

                <ImgSimulator />

                <Section title="Attributes In Depth" icon={Code}>
                    <h3 className="text-2xl font-bold text-white mb-4">The `src` Attribute</h3>
                    <p>
                        The <code>src</code> attribute stands for 'source' and its value is the path to the image file. This path can be a relative URL (pointing to a file within your own site's file system) or an absolute URL (pointing to an image hosted on another server). In professional practice, you will almost always use relative URLs for images that belong to your site — for example, <code>images/hero.jpg</code> — and absolute URLs only for externally hosted assets like a CDN-delivered image.
                    </p>
                    <p>
                        Path syntax matters enormously. Getting paths wrong results in broken images — represented in most browsers by a small icon of a torn picture — which is one of the most visually damaging errors a web page can display.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">The `alt` Attribute</h3>
                    <p>
                        The <code>alt</code> attribute provides a text description of the image. Its value is displayed in the browser when the image cannot be loaded. More importantly, screen reader software reads the alt text aloud to users who are visually impaired, making it the primary way that non-sighted users understand what an image depicts.
                    </p>
                    <div className="bg-orange-500/10 border-l-4 border-orange-500 p-4 rounded-r-lg my-6">
                        <strong className="text-orange-400 block mb-1">Accessibility and SEO: Two Reasons for Perfect alt Text</strong>
                        <p className="text-sm text-gray-300 m-0 leading-relaxed">Search engines cannot see images — they read alt text to understand what an image depicts and to index your content appropriately. A well-written alt attribute improves your page's search engine ranking for relevant image searches. At the same time, WCAG accessibility guidelines strictly require meaningful alt text on all informational images.</p>
                    </div>
                    <p>
                        For a purely decorative image — such as a gradient divider line — the alt attribute should be present but left empty (<code>alt=""</code>), which tells screen readers to skip it completely.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">Width and Height Attributes</h3>
                    <p>
                        The <code>width</code> and <code>height</code> attributes specify the display dimensions of an image in pixels. When these are included in the HTML, the browser can immediately allocate the correct amount of space on the page for the image before it has finished downloading. Without these values, every time an image loads it causes the surrounding text to jump and reflow — a disorienting experience sometimes called <strong>'layout shift'</strong> or Cumulative Layout Shift (CLS).
                    </p>
                    <p>
                        Modern web development handles image scaling through CSS, allowing for responsive images that scale fluidly. However, it is still best practice to include the width and height attributes in HTML so the browser can calculate the correct <em>aspect ratio</em>. The HTML attributes define the intrinsic dimensions; CSS then handles the responsive visual presentation.
                    </p>
                </Section>

                <Section title="Organising Your Files" icon={Server}>
                    <p>
                        As a website grows, file organisation becomes one of the most important disciplines. A common convention is to store all images in a dedicated folder called <code>images</code> at the root level of the project, with sensible subfolders:
                    </p>

                    <div className="bg-[#111827] rounded-xl border border-gray-800 overflow-hidden my-6">
                        <table className="w-full text-left text-sm border-collapse">
                            <thead>
                                <tr className="bg-[#1f2937] border-b border-gray-700">
                                    <th className="p-4 font-bold text-white">Image Folder</th>
                                    <th className="p-4 font-bold text-white">Contents</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800">
                                <tr><td className="p-4 font-mono text-orange-300">images/interface/</td><td className="p-4 text-gray-400">Logos, navigation icons, UI elements</td></tr>
                                <tr className="bg-[#1f2937]/30"><td className="p-4 font-mono text-orange-300">images/products/</td><td className="p-4 text-gray-400">Product photography, packaging shots</td></tr>
                                <tr><td className="p-4 font-mono text-orange-300">images/news/</td><td className="p-4 text-gray-400">Editorial photography, event photos</td></tr>
                                <tr className="bg-[#1f2937]/30"><td className="p-4 font-mono text-orange-300">images/banners/</td><td className="p-4 text-gray-400">Hero images, promotional banners</td></tr>
                                <tr><td className="p-4 font-mono text-orange-300">images/avatars/</td><td className="p-4 text-gray-400">Team photos, user profile pictures</td></tr>
                            </tbody>
                        </table>
                    </div>
                </Section>

                <Section title="Block vs Inline Placement & Figures" icon={Layout}>
                    <h3 className="text-2xl font-bold text-white mb-4">2.3 Block vs Inline</h3>
                    <p>
                        The <code>img</code> tag is technically an <strong>inline element</strong>. They flow within the text stream and do not force line breaks. When an <code>img</code> appears inside a paragraph, the surrounding text flows around it according to the element's alignment. Today, all text-wrapping and alignment is heavily controlled through CSS (using floats, grids, or flexbox), but understanding that an image defaults to inline is crucial.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">2.4 The `figure` and `figcaption` Elements</h3>
                    <p>
                        HTML5 introduced two elements specifically designed to associate an image with its caption in a semantically meaningful way: <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code>. Before these elements existed, developers had to place an image and a paragraph next to each other and hope the relationship was obvious.
                    </p>

                    <div className="bg-[#0A0A0A] border border-gray-800 p-6 rounded-xl my-6">
                        <pre className="text-green-400 text-sm overflow-x-auto m-0"><code className="block">
                            &lt;figure&gt;
                            &lt;img src="images/grand-canyon.jpg" alt="Arial view of Grand Canyon" width="960" height="540" /&gt;
                            &lt;figcaption&gt;The Grand Canyon stretches 446 kilometers through northwest Arizona.&lt;/figcaption&gt;
                            &lt;/figure&gt;
                        </code></pre>
                    </div>

                    <p>
                        The <code>figure</code> element acts as a wrapper that groups the image and caption together. Screen readers announce the image and then its caption as a single semantic unit, giving non-sighted users the exact equivalent of sighted users.
                    </p>
                </Section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="../images-intro" className="flex items-center gap-2 text-gray-500 hover:text-white"><ArrowLeft size={16} /> Images Intro</Link>
                <Link to="../image-formats" className="flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300">Next: Image Formats & Optimisation <ArrowRight size={16} /></Link>
            </div>
        </article>
    );
};

export default ImageMarkup;
