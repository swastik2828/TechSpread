import React, { useState } from 'react';
import { Image as ImageIcon, ArrowRight, ArrowLeft, Maximize, Target, Aperture, Layers } from 'lucide-react';
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

const FormatComparison = () => {
    const [activeFormat, setActiveFormat] = useState('jpeg');

    const formats = {
        jpeg: {
            name: "JPEG",
            ideal: "Photographs & Complex Colors",
            notIdeal: "Logos with clear edges, Transparency",
            compression: "Lossy (high efficiency, some data loss)",
            imgSrc: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800&auto=format&fit=crop",
            desc: "JPEG excels at compressing images containing millions of subtly different colours. Even a snowy landscape contains thousands of shades. Excellent for lowering file sizes on photos."
        },
        png: {
            name: "PNG",
            ideal: "Transparency, Screenshots, Sharp Graphics",
            notIdeal: "Large photographs (files become too large)",
            compression: "Lossless (perfect quality, larger filesize)",
            imgSrc: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=800&auto=format&fit=crop", // placeholder
            desc: "PNG uses lossless compression. It was designed to replace GIF and supports alpha channel (variable) transparency, making it essential for images with soft shadows, glows, or feathered edges."
        },
        gif: {
            name: "GIF",
            ideal: "Simple Animations, Flat limited colours",
            notIdeal: "Photographs, High-color graphics",
            compression: "Lossless, but limited to 256 colors",
            imgSrc: "https://images.unsplash.com/photo-1518965493882-35b838ace024?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // placeholder
            desc: "GIF uses lossless compression but restricts the palette to 256 colours. It is completely unsuitable for photos, but historically great for crisp logos, icons, or animated memes."
        },
        svg: {
            name: "SVG",
            ideal: "Logos, Vectors, Icons, Diagrams",
            notIdeal: "Photographs",
            compression: "Math/Vector based text file",
            imgSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop", // placeholder
            desc: "SVG is fundamentally different. It is a vector format written in XML math. It scales infinitely without losing any sharpness. Perfect for responsive logos and icons."
        }
    };

    return (
        <div className="bg-[#1e293b]/40 border border-gray-700 rounded-2xl overflow-hidden shadow-2xl my-10">
            <div className="flex border-b border-gray-700 font-mono text-sm overflow-x-auto">
                {Object.keys(formats).map(key => (
                    <button
                        key={key}
                        onClick={() => setActiveFormat(key)}
                        className={`flex-1 py-4 px-6 font-bold transition-all border-b-2 flex justify-center whitespace-nowrap ${activeFormat === key ? "bg-[#0f172a] border-orange-500 text-orange-400" : "bg-transparent border-transparent text-gray-500 hover:text-gray-300 hover:bg-white/5"}`}
                    >
                        {formats[key].name} Format
                    </button>
                ))}
            </div>

            <div className="p-8 block lg:flex gap-8 bg-[#0f172a]/60">
                <div className="flex-1 mb-8 lg:mb-0">
                    <h4 className="text-2xl font-bold text-white mb-2">{formats[activeFormat].name}</h4>
                    <p className="text-gray-400 leading-relaxed mb-6">{formats[activeFormat].desc}</p>

                    <div className="space-y-4">
                        <div className="bg-green-900/10 border border-green-500/20 p-4 rounded-lg">
                            <strong className="text-green-400 text-sm uppercase tracking-wider block mb-1">Ideal For</strong>
                            <span className="text-white">{formats[activeFormat].ideal}</span>
                        </div>
                        <div className="bg-red-900/10 border border-red-500/20 p-4 rounded-lg">
                            <strong className="text-red-400 text-sm uppercase tracking-wider block mb-1">Avoid For</strong>
                            <span className="text-white">{formats[activeFormat].notIdeal}</span>
                        </div>
                        <div className="bg-blue-900/10 border border-blue-500/20 p-4 rounded-lg">
                            <strong className="text-blue-400 text-sm uppercase tracking-wider block mb-1">Compression</strong>
                            <span className="text-white font-mono text-sm">{formats[activeFormat].compression}</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex justify-center items-center">
                    <div className="w-full aspect-video rounded-xl overflow-hidden border-2 border-dashed border-gray-700 relative group">
                        <img
                            src={formats[activeFormat].imgSrc}
                            alt={`${formats[activeFormat].name} sample`}
                            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-black/70 backdrop-blur-sm p-3 text-center border-t border-gray-800 text-xs font-mono text-gray-300">
                            Simulated View of .{activeFormat} graphic
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ImageFormats = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="HTML Image Formats, Dimensions, and Optimization"
                description="Learn the golden rules for formatting, sizing and resolving web images, including JPEG, PNG, GIF, and SVG."
                keywords="Image optimization, JPEG vs PNG, SVG graphics, responsive images, web performance, TechSpread"
                url="/webdevelopment/html/image-formats"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase border border-orange-500/20 mb-4 inline-block">
                    Module 5.3
                </span>
                <h1 className="text-5xl font-extrabold text-white mb-6">Image Formats, Dimensions, & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Optimization</span></h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    Making images look beautiful without completely destroying your website's load speed and performance scores.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">

                <Section title="The Three Golden Rules of Web Images" icon={Target}>
                    <p className="mb-6">
                        Every professional web developer internalises three rules about images before touching a single HTML tag. Violating any of them causes real, measurable problems on live websites: slow load times, blurry visuals, or enormous bandwidth waste.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 bg-gradient-to-b from-[#1e293b] to-[#0f172a] rounded-2xl border border-gray-700 text-center shadow-lg">
                            <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xl mx-auto mb-4 border border-blue-500/30">1</div>
                            <h4 className="text-white font-bold mb-2">Correct Format</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">Use JPEG for photos; GIF or PNG for flat colours and illustrations. Wrong formats cause visible quality loss or huge files.</p>
                        </div>
                        <div className="p-6 bg-gradient-to-b from-[#1e293b] to-[#0f172a] rounded-2xl border border-gray-700 text-center shadow-lg">
                            <div className="w-12 h-12 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-xl mx-auto mb-4 border border-orange-500/30">2</div>
                            <h4 className="text-white font-bold mb-2">Correct Size</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">Save images at the exact pixel dimensions they will be displayed. Oversizing wastes bandwidth; undersizing creates a blurry look.</p>
                        </div>
                        <div className="p-6 bg-gradient-to-b from-[#1e293b] to-[#0f172a] rounded-2xl border border-gray-700 text-center shadow-lg">
                            <div className="w-12 h-12 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xl mx-auto mb-4 border border-purple-500/30">3</div>
                            <h4 className="text-white font-bold mb-2">Correct Resolution</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">Use 72 pixels per inch (ppi) for web images. 300 ppi is for print, and using it on the web simply wastes massive amounts of data.</p>
                        </div>
                    </div>
                </Section>

                <Section title="File Formats In Depth" icon={Layers}>
                    <p>
                        Selecting the perfect image format is as much art as it is science. Below you can compare the four dominant web image formats, determining precisely when to use each.
                    </p>

                    <FormatComparison />
                </Section>

                <Section title="Dimensions and The Pixel Budget" icon={Maximize}>
                    <p>
                        Saving an image at the correct dimensions is one of the most impactful optimisations you can make to a web page. The rule is straightforward: save images at exactly the pixel width and height at which they will be displayed. If a thumbnail on your page is 300 pixels wide by 200 pixels tall, the image file should be 300 by 200 pixels. Saving a 3000 by 2000 pixel version and relying on the browser to scale it down wastes bandwidth — the user downloads ten times more data than necessary.
                    </p>
                    <p>
                        Conversely, taking a small image and scaling it up using the HTML width and height attributes does not improve its quality. The browser simply stretches the existing pixels, resulting in blurry, pixelated artifacts (upsampling).
                    </p>

                    <div className="flex bg-[#111827] border border-gray-700 p-6 rounded-xl my-8 gap-6 items-center">
                        <Aperture size={48} className="text-orange-500 shrink-0" />
                        <div>
                            <h4 className="text-orange-400 font-bold mb-2">Cropping Deserves Explicit Attention</h4>
                            <p className="text-sm text-gray-400 leading-relaxed m-0">When you crop an image locally, you permanently remove a portion of it. The result must still make visual sense. An image of a person should not be awkwardly decapitated; a landscape cropped to portrait loses its breadth. Always think about what you are removing to reduce filesize, and whether the essence remains intact.</p>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 mt-12">Resolution: Why 72ppi Is the Rule</h3>
                    <p>
                        Computer screens are grids of tiny light-emitting dots called pixels. The resolution of an image is the number of pixels it contains per inch of display space, measured as pixels per inch (ppi). Standard computer monitors have historically displayed web content at 72 ppi.
                    </p>
                    <p>
                        This physical reality has a direct consequence: saving a web image at any resolution higher than 72 ppi does not improve its visual quality on standard screens. This is fundamentally different from print, which requires 300 dots per inch (dpi). A printed book needs dense ink to appear sharp. A web monitor completely ignores the extra 228 pixels, but your user still has to download all that heavyweight data. Save for the web, not for the printing press!
                    </p>
                </Section>

            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="../image-markup" className="flex items-center gap-2 text-gray-500 hover:text-white"><ArrowLeft size={16} /> Image Markup</Link>
                <Link to="../media-flash-video" className="flex items-center gap-2 text-gray-500 hover:text-white">Flash & Video <ArrowRight size={16} /></Link>
            </div>
        </article>
    );
};

export default ImageFormats;
