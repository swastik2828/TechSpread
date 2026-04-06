import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, BookOpen, Code2 } from 'lucide-react';
import SEO from '../../../../components/SEO';

const Section = ({ title, icon: Icon, children }) => (
    <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-sky-500/20 to-cyan-500/20 rounded-xl border border-sky-500/30 text-sky-400">
                <Icon size={28} />
            </div>
            <h2 className="text-3xl font-bold text-white">{title}</h2>
        </div>
        {children}
    </section>
);

const CodeBlock = ({ title = 'styles.css', language = 'css', children }) => (
    <div className="my-6 w-full rounded-xl overflow-hidden bg-[#0d1117] border border-gray-800 shadow-2xl">
        <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-gray-800">
            <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/30 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/30 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/30 border border-green-500/50" />
                </div>
                <span className="text-xs font-bold text-gray-400 font-mono">{title}</span>
            </div>
            <span className="text-[10px] font-bold text-gray-500 uppercase bg-gray-800 px-2 py-0.5 rounded border border-gray-700">{language}</span>
        </div>
        <div className="p-5 overflow-x-auto font-mono text-sm leading-relaxed">
            <pre className="text-gray-300 whitespace-pre-wrap"><code>{children}</code></pre>
        </div>
    </div>
);

const InfoBox = ({ type = 'note', children }) => {
    const styles = {
        note: 'border-sky-500 bg-sky-900/10 text-sky-200',
        tip: 'border-green-500 bg-green-900/10 text-green-200',
        warning: 'border-yellow-500 bg-yellow-900/10 text-yellow-200',
    };
    return (
        <div className={`border-l-4 p-6 rounded-r-xl my-6 ${styles[type]}`}>
            {children}
        </div>
    );
};

const ModuleCard = ({ to, icon: Icon, title, desc, num }) => (
    <Link to={to} className="group flex items-start gap-4 p-5 bg-[#161b22] border border-gray-800 rounded-xl hover:border-sky-500/50 hover:bg-sky-900/5 transition-all duration-300">
        <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/20 to-cyan-500/20 border border-sky-500/30 text-sky-400 flex items-center justify-center font-bold text-sm">
            {num}
        </div>
        <div>
            <h3 className="text-white font-bold group-hover:text-sky-400 transition-colors">{title}</h3>
            <p className="text-gray-500 text-sm mt-1">{desc}</p>
        </div>
        <ArrowRight size={16} className="ml-auto shrink-0 text-gray-600 group-hover:text-sky-400 transition-colors mt-1" />
    </Link>
);

export default function IntroBackgrounds() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="Mastering CSS Backgrounds — Module 6 Overview"
                description="Learn everything about CSS backgrounds: solid colors, images, gradients, and layering. The complete beginner's guide to painting stunning web backgrounds."
                keywords="css backgrounds, css background-color, css background-image, css gradients, css linear-gradient, beginner css"
                url="/webdevelopment/css/backgrounds/intro"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-bold text-sky-400 uppercase tracking-widest">Module 6</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                    Mastering CSS{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">
                        Backgrounds
                    </span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl">
                    In web design, every element on your page is essentially a transparent box. CSS Backgrounds allow you to paint the back of that box — with solid colors, photographs, or smoothly blended gradients.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">

                <Section title="Module Overview" icon={BookOpen}>
                    <p>
                        Welcome to Module 6! In web design, every element on your page is essentially a transparent box. CSS Backgrounds allow you to paint the back of that box. You can use solid colors, photographs, or smoothly blended colors (gradients). Backgrounds set the mood of your website, draw attention to important buttons, and help separate different areas of content. By the end of this module, you will be able to build stunning, modern backgrounds from scratch.
                    </p>

                    {/* Visual intro card */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                        <div className="p-5 rounded-xl border border-sky-500/30 bg-sky-900/10 text-center">
                            <div className="text-3xl mb-2">🎨</div>
                            <h3 className="text-sky-300 font-bold text-sm">Colors</h3>
                            <p className="text-gray-500 text-xs mt-1">Solids, rgba, transparency</p>
                        </div>
                        <div className="p-5 rounded-xl border border-cyan-500/30 bg-cyan-900/10 text-center">
                            <div className="text-3xl mb-2">🖼️</div>
                            <h3 className="text-cyan-300 font-bold text-sm">Images</h3>
                            <p className="text-gray-500 text-xs mt-1">Photos, size, position, repeat</p>
                        </div>
                        <div className="p-5 rounded-xl border border-blue-500/30 bg-blue-900/10 text-center">
                            <div className="text-3xl mb-2">✨</div>
                            <h3 className="text-blue-300 font-bold text-sm">Gradients</h3>
                            <p className="text-gray-500 text-xs mt-1">Blends, layering, gradient text</p>
                        </div>
                    </div>
                </Section>

                <Section title="How to Use the Examples in This Module" icon={Code2}>
                    <p>
                        For every example below, imagine you have a simple HTML structure. You can test these by creating an <code className="text-sky-300 bg-sky-900/20 px-1.5 py-0.5 rounded text-sm">index.html</code> file and a <code className="text-sky-300 bg-sky-900/20 px-1.5 py-0.5 rounded text-sm">style.css</code> file.
                    </p>
                    <p className="font-semibold text-white mt-4">The HTML Setup:</p>
                    <CodeBlock title="index.html" language="html">{`<div class="my-box">
    <h2>Hello World</h2>
    <p>This is my content.</p>
</div>`}</CodeBlock>

                    <InfoBox type="tip">
                        <strong>🎯 Beginner Strategy:</strong> Open your browser's DevTools (press <code>F12</code>), click on any element, and find the Styles panel on the right. You can live-edit background properties and see changes instantly — no saving required!
                    </InfoBox>
                </Section>

                {/* Module Roadmap */}
                <Section title="What You Will Learn" icon={Layers}>
                    <p className="mb-6">This module is divided into focused sections. Click any section below to jump straight to it:</p>
                    <div className="space-y-3">
                        <ModuleCard to="/webdevelopment/css/backgrounds/color" num="01" title="The Color Foundation" desc="background-color, keywords, hex, rgb, rgba, transparency" />
                        <ModuleCard to="/webdevelopment/css/backgrounds/image" num="02" title="Adding & Controlling Images" desc="background-image, size, position, repeat, and the shorthand property" />
                        <ModuleCard to="/webdevelopment/css/backgrounds/gradients" num="03" title="Painting with Code — Gradients" desc="linear-gradient, angle, color stops, and gradient text trick" />
                        <ModuleCard to="/webdevelopment/css/backgrounds/layering" num="04" title="Layering Multiple Backgrounds" desc="Stacking gradients on images, the dark overlay technique" />
                        <ModuleCard to="/webdevelopment/css/backgrounds/summary" num="05" title="Summary & Exercises" desc="Review, cheat sheet, and hands-on practice challenges" />
                    </div>
                </Section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/typography/responsive" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    ← CSS Typography
                </Link>
                <Link to="/webdevelopment/css/backgrounds/color" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Section 1: Background Color <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
}
