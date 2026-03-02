import React, { useState } from 'react';
import { Image as ImageIcon, ArrowRight, ArrowLeft, Camera, Eye, Zap, Palette, Map, Info } from 'lucide-react';
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

const ImpactCard = ({ icon: Icon, title, description }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-[#111827] border border-gray-800 p-6 rounded-2xl flex flex-col gap-4 shadow-xl"
    >
        <div className="p-3 bg-orange-500/10 rounded-lg w-fit text-orange-400">
            <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
);

const ImagesIntro = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="Introduction to HTML Images and Visual Media"
                description="Explore why visual media is the heart of the web, the purpose of images, and how to source them correctly."
                keywords="HTML images, visual web design, image selection, copyright law, beginner HTML, TechSpread"
                url="/webdevelopment/html/images-intro"
            />

            <header className="py-12 border-b border-gray-800 mb-12 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-900/50 to-transparent" />
                </div>
                <div className="relative z-10">
                    <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase border border-orange-500/20 mb-4 inline-block">
                        Module 5.1
                    </span>
                    <h1 className="text-5xl font-extrabold text-white mb-6">Introduction: Why Visual Media is the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Heart of the Web</span></h1>
                    <p className="text-xl text-gray-400 max-w-3xl">
                        When you visit a website, what is the very first thing that draws your attention? In almost every case, it is not a paragraph of text. It is an image, a short video clip, or a vivid illustration.
                    </p>
                </div>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">

                <p className="text-lg mb-8 leading-relaxed">
                    The human brain processes visual information roughly 60,000 times faster than text, which means that the visual choices you make as a web developer speak to your audience long before a single word is read. In this module, we explore that power — methodically and deeply.
                </p>

                <div className="my-10 rounded-2xl overflow-hidden border border-gray-800 bg-[#0d1117] flex justify-center items-center shadow-2xl relative group">
                    <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop" alt="Photography composition showing the power of visual media" className="w-full h-[400px] object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-6 left-8">
                        <p className="text-white font-medium text-lg flex items-center gap-2"><Camera className="text-orange-400" size={20} /> Professional Photography Engages</p>
                    </div>
                </div>

                <p>
                    This module is structured around two interconnected themes: images and multimedia. We begin with still images — their purpose, selection, formats, and correct HTML implementation — before moving into the richer territory of embedded video and audio. Throughout, we marry beginner-friendly explanations with professional-level depth, so that whether you are writing your first HTML file or auditing an existing production site, you will find material that challenges and guides you.
                </p>

                <p className="mb-12">
                    By the end of this module you will be able to select the right image format for any given scenario, write semantically correct image markup, optimise assets for fast page loads, and embed video and audio using both modern HTML5 elements and classic Flash-based approaches. You will also understand why certain older techniques exist — a knowledge that proves invaluable when maintaining legacy codebases or debugging cross-browser issues.
                </p>

                <Section title="Understanding Images on the Web" icon={Eye}>
                    <h3 className="text-2xl font-bold text-white mb-4">1.1 The Role of Images in Web Design</h3>
                    <p>
                        Before we write a single line of HTML, we need to understand why images exist on web pages and what they are supposed to accomplish. This is not a trivial question. A poorly chosen image can undermine trust, slow down a page, and confuse users. A well-chosen one can communicate a brand's entire personality in less than a second.
                    </p>

                    <p>Images on the web serve several distinct functions:</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                        <ImpactCard
                            icon={Palette}
                            title="Establish Mood"
                            description="Images communicate tone. An outdoor gear shop wants action photography; a medical clinic wants clean, trustworthy, and precise visuals."
                        />
                        <ImpactCard
                            icon={Info}
                            title="Convey Information"
                            description="A diagram or infographic teaches more in ten seconds than three paragraphs of text ever could."
                        />
                        <ImpactCard
                            icon={Map}
                            title="Visual Structure"
                            description="Imagery creates visual rhythm, breaking up dense walls of text and guiding the user’s eye naturally down the page."
                        />
                    </div>

                    <p>
                        There is also a powerful psychological dimension. Studies in user experience design consistently show that pages featuring relevant, high-quality imagery generate longer average session times and higher conversion rates than text-only equivalents. When users encounter a professional photograph on a product page, they unconsciously attribute higher quality to the product itself. This is not manipulation — it is communication, and it is every web developer's responsibility to understand it.
                    </p>
                </Section>

                <Section title="Characteristics of an Effective Web Image" icon={Zap}>
                    <p>
                        Professional web designers evaluate every image against five criteria before including it on a page. These criteria are not subjective preferences — they are rooted in communication theory and user psychology:
                    </p>

                    <ul className="list-none space-y-4 pl-0 mt-6">
                        {[
                            { title: "Relevance", text: "The image must directly relate to the surrounding content. A travel blog post about Kyoto should feature Kyoto, not a generic stock photo of 'Asia.' Relevance builds credibility." },
                            { title: "Informational value", text: "Ask whether the image teaches the viewer something. Even a purely decorative header image should reinforce the page's subject matter rather than distract." },
                            { title: "Emotional resonance", text: "Images that evoke appropriate emotions — joy, curiosity, trust, urgency — keep users emotionally engaged with your content. A charity needs empathy; tech products need clean aspiration." },
                            { title: "Instant recognisability", text: "Users scan web pages rather than reading linearly. An image must communicate its meaning within roughly 100 milliseconds. If it requires study, it fails." },
                            { title: "Colour palette compatibility", text: "The image's dominant colours should harmonise with the site's overall colour scheme. Jarring colour clashes break visual flow and feel unprofessional." }
                        ].map((item, idx) => (
                            <li key={idx} className="flex flex-col md:flex-row gap-4 p-5 bg-[#1e293b]/30 rounded-xl border border-gray-800">
                                <div className="flex-shrink-0 mt-1 hidden md:block">
                                    <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold">{idx + 1}</div>
                                </div>
                                <div>
                                    <strong className="text-orange-300 block mb-1">{item.title}</strong>
                                    <span className="text-gray-400 text-sm leading-relaxed">{item.text}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Section>

                <Section title="Where to Find Images and Copyright Law" icon={ImageIcon}>
                    <h3 className="text-2xl font-bold text-white mb-4">1.2 Sourcing Images Safely</h3>
                    <p>
                        One of the most common mistakes made by beginners is using images found through a basic search engine query without investigating copyright status. Every image on the internet is protected by copyright from the moment of its creation, regardless of whether it carries a visible watermark or copyright notice. Using such an image without permission or a valid licence exposes you — and your client — to legal liability.
                    </p>

                    <p>Fortunately, there are several legitimate pathways to sourcing images:</p>

                    <div className="space-y-4 my-6">
                        <div className="p-4 border-l-4 border-emerald-500 bg-emerald-900/10 rounded-r-lg">
                            <h4 className="text-emerald-400 font-bold mb-1 m-0">1. Original Photography</h4>
                            <p className="text-sm text-gray-400 m-0">The most expensive route, but guarantees full ownership and a completely unique visual identity.</p>
                        </div>
                        <div className="p-4 border-l-4 border-blue-500 bg-blue-900/10 rounded-r-lg">
                            <h4 className="text-blue-400 font-bold mb-1 m-0">2. Paid Stock Photography</h4>
                            <p className="text-sm text-gray-400 m-0">Purchasing licences from stock agencies offers vast, professional libraries. Always read the licence (commercial vs editorial use).</p>
                        </div>
                        <div className="p-4 border-l-4 border-purple-500 bg-purple-900/10 rounded-r-lg">
                            <h4 className="text-purple-400 font-bold mb-1 m-0">3. Creative Commons (CC) Libraries</h4>
                            <p className="text-sm text-gray-400 m-0">Creators share work voluntarily (e.g., Unsplash, Pexels). Some CC licences allow completely free use; others require attribution. Check the specific licence.</p>
                        </div>
                        <div className="p-4 border-l-4 border-orange-500 bg-orange-900/10 rounded-r-lg">
                            <h4 className="text-orange-400 font-bold mb-1 m-0">4. Custom Vector Assets</h4>
                            <p className="text-sm text-gray-400 m-0">Creating your own interface graphics using tools like Illustrator, Figma, or Inkscape.</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#1c1917] to-[#0c0a09] border border-orange-500/20 p-6 rounded-2xl mt-8">
                        <h4 className="text-orange-400 font-bold text-lg mb-2 flex items-center gap-2"><Zap size={20} /> Professional Tip: Consistency</h4>
                        <p className="text-sm text-gray-400 leading-relaxed m-0">
                            If your site uses multiple stock photographs, try to source them from the same photographer or at least the same photographic style. Mixing dramatically different photographic styles — soft portrait lighting, high-contrast street photography, and flat-lay product shots — creates a fragmented visual experience. Consistency of style signals professionalism and intentionality.
                        </p>
                    </div>

                </Section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="../nav-menus" className="flex items-center gap-2 text-gray-500 hover:text-white"><ArrowLeft size={16} /> Previous Module</Link>
                <Link to="../image-markup" className="flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300">Next: HTML Image Markup <ArrowRight size={16} /></Link>
            </div>
        </article>
    );
};

export default ImagesIntro;
