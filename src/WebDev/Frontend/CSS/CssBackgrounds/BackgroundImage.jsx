import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, ImageIcon, SlidersHorizontal, AlignCenter } from 'lucide-react';
import SEO from '../../../../components/SEO';
import CssBackgroundImageSimulator from '../../../../simulators/web/css/CssBackgroundImageSimulator';

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

const PropertyTable = ({ rows }) => (
    <div className="overflow-x-auto my-6 rounded-xl border border-gray-800">
        <table className="w-full text-sm">
            <thead>
                <tr className="bg-[#161b22] border-b border-gray-800">
                    <th className="text-left p-4 text-sky-400 font-bold">Value</th>
                    <th className="text-left p-4 text-gray-400 font-bold">What it does</th>
                    <th className="text-left p-4 text-gray-400 font-bold">Best for</th>
                </tr>
            </thead>
            <tbody>
                {rows.map((row, i) => (
                    <tr key={i} className={`border-b border-gray-800/60 ${i % 2 === 0 ? 'bg-[#0d1117]' : 'bg-[#161b22]/50'}`}>
                        <td className="p-4 font-mono text-cyan-300">{row[0]}</td>
                        <td className="p-4 text-gray-300">{row[1]}</td>
                        <td className="p-4 text-gray-500 text-xs">{row[2]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default function BackgroundImage() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS background-image, size, position, repeat — Sections 2, 3 & 4"
                description="Learn how to add background images in CSS. Master background-size: cover, background-position: center, background-repeat: no-repeat, and the shorthand property."
                keywords="css background-image, background-size cover, background-position center, background-repeat no-repeat, css hero image, background shorthand"
                url="/webdevelopment/css/backgrounds/image"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-bold text-sky-400 uppercase tracking-widest">Module 6 · Sections 2 – 4</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                    Adding &amp; Controlling{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">
                        Images
                    </span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl">
                    You aren't limited to plain colors. Use photographs, textures, or patterns as backgrounds — and then control exactly how they appear.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">

                <Section title="Section 2: Adding Images (background-image)" icon={ImageIcon}>
                    <p>
                        You can use photographs, textures, or patterns as your background using the <code className="text-sky-300 bg-sky-900/20 px-1.5 py-0.5 rounded text-sm">url()</code> function.
                    </p>

                    <InfoBox type="note">
                        <strong>📝 Important Design Rule:</strong> Background images are just for decoration. If the image is crucial to understanding the page (like a picture of a product you are selling), use the HTML <code>&lt;img&gt;</code> tag instead. This is important for accessibility — screen readers can't describe background images.
                    </InfoBox>

                    <p className="font-semibold text-white mt-4">Beginner-Friendly Example: A Patterned Profile Card</p>
                    <p>
                        Imagine we have a small repeating pattern image called <code className="text-sky-300 bg-sky-900/20 px-1.5 py-0.5 rounded text-sm">dots.png</code> saved in the same folder as our CSS.
                    </p>
                    <CodeBlock>{`.my-box {
    /* Tell the browser where to find the image */
    background-image: url("dots.png");
    
    /* A fallback color just in case the image fails to load */
    background-color: #f4f4f4; 
}`}</CodeBlock>

                    <InfoBox type="tip">
                        <strong>🌐 Using online images:</strong> You can also link to any image on the internet: <code>background-image: url("https://images.unsplash.com/photo-1234...");</code> — great for quick testing!
                    </InfoBox>
                </Section>

                <Section title="Section 3: Controlling the Image" icon={SlidersHorizontal}>
                    <p>
                        When you add an image, the browser's default behavior is to place it in the top-left corner and tile it endlessly like kitchen floor tiles. We usually want to change that!
                    </p>

                    <h3 className="text-xl font-bold text-sky-400 mb-3 mt-8">background-size: How big should it be?</h3>
                    <PropertyTable rows={[
                        ['auto', 'The image stays its original, natural size', 'Small icons or sprites'],
                        ['contain', 'Shrinks/grows so whole picture is visible without cropping', 'Logos, icons that must be fully seen'],
                        ['cover', 'Grows to fill the box completely; edges may be cropped', '🌟 Hero sections — most common!'],
                        ['50%', 'Set an exact percentage of the container', 'Specific sizing needs'],
                    ]} />

                    <h3 className="text-xl font-bold text-sky-400 mb-3 mt-8">background-repeat: Should it tile?</h3>
                    <PropertyTable rows={[
                        ['repeat', 'Default! Tiles horizontally and vertically', 'Patterns and textures'],
                        ['no-repeat', 'Shows the image exactly once', 'Photographs and hero images'],
                        ['repeat-x', 'Tiles only horizontally', 'Horizontal stripe patterns'],
                        ['repeat-y', 'Tiles only vertically', 'Vertical stripe patterns'],
                    ]} />

                    <h3 className="text-xl font-bold text-sky-400 mb-3 mt-8">background-position: Where should it sit?</h3>
                    <p>You can use words like <code className="text-sky-300 text-sm">center</code>, <code className="text-sky-300 text-sm">top</code>, <code className="text-sky-300 text-sm">bottom</code>, <code className="text-sky-300 text-sm">left</code>, <code className="text-sky-300 text-sm">right</code>, or combine them like <code className="text-sky-300 text-sm">top left</code>.</p>

                    <p className="font-semibold text-white mt-8">Beginner-Friendly Example: The Perfect "Hero" Image</p>
                    <p>
                        A "Hero" section is the big image at the very top of a website (like an Airbnb listing). Here is the <strong>golden formula</strong> for a perfect hero image that won't look weird on different screen sizes:
                    </p>
                    <CodeBlock>{`.hero-section {
    height: 400px; /* Make the box tall */
    
    background-image: url("beautiful-mountain.jpg");
    
    /* Do not tile the image! */
    background-repeat: no-repeat; 
    
    /* Keep the focus on the middle of the photograph */
    background-position: center; 
    
    /* Make sure the image covers the entire 400px tall box */
    background-size: cover; 
}`}</CodeBlock>

                    <InfoBox type="tip">
                        <strong>🎯 The Golden Trio:</strong> For 95% of hero images, you'll use exactly this combination: <code>cover · center · no-repeat</code>. Memorise it!
                    </InfoBox>
                </Section>

                {/* Interactive Simulator */}
                <CssBackgroundImageSimulator />

                <Section title="Section 4: The Shorthand Property" icon={AlignCenter}>
                    <p>
                        Writing out all those background rules can take up a lot of space. CSS lets you combine them into a single line using the <code className="text-sky-300 bg-sky-900/20 px-1.5 py-0.5 rounded text-sm">background</code> shorthand property.
                    </p>

                    <div className="my-6 p-5 bg-[#161b22] border border-sky-500/30 rounded-xl">
                        <p className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-3">Shorthand Order</p>
                        <code className="text-white text-sm block font-mono">background: <span className="text-blue-400">color</span> <span className="text-green-400">image</span> <span className="text-yellow-400">position</span> / <span className="text-orange-400">size</span> <span className="text-purple-400">repeat</span>;</code>
                        <p className="text-gray-500 text-xs mt-3">Note: The slash <code>/</code> separates position from size — don't forget it!</p>
                    </div>

                    <p className="font-semibold text-white mt-4">Beginner-Friendly Example: The One-Liner</p>
                    <p>Here is the exact same Hero image from Section 3, written in just one line of code:</p>
                    <CodeBlock>{`.hero-section {
    height: 400px;
    background: #333 url("beautiful-mountain.jpg") center / cover no-repeat;
}`}</CodeBlock>

                    <p>
                        (Notice the <code className="text-sky-300">#333</code> at the beginning? That's a dark gray fallback color. It will show up for a split second while the mountain photo is downloading over the internet.)
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                        <div className="p-4 bg-[#161b22] rounded-xl border border-gray-800">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">✅ Shorthand (1 line)</p>
                            <CodeBlock>{`background: #333 url("img.jpg")
    center / cover no-repeat;`}</CodeBlock>
                        </div>
                        <div className="p-4 bg-[#161b22] rounded-xl border border-gray-800">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Same result, verbose (4 lines)</p>
                            <CodeBlock>{`background-color: #333;
background-image: url("img.jpg");
background-size: cover;
background-position: center;
background-repeat: no-repeat;`}</CodeBlock>
                        </div>
                    </div>

                    <InfoBox type="note">
                        <strong>🤔 Which should I use?</strong> Both are correct! When learning, use the individual properties — they're easier to read and understand. Once you're confident, switch to shorthand to save space. Many professional developers mix both approaches.
                    </InfoBox>
                </Section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/backgrounds/color" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> The Color Foundation
                </Link>
                <Link to="/webdevelopment/css/backgrounds/gradients" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: CSS Gradients <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
}
