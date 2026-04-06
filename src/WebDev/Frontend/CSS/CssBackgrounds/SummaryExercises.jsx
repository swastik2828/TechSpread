import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ListOrdered, Zap, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
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

const CheatSheetRow = ({ prop, value, desc }) => (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-4 border-b border-gray-800/60 hover:bg-white/2 transition-colors">
        <code className="text-cyan-300 font-mono text-sm">{prop}</code>
        <code className="text-yellow-300 font-mono text-sm">{value}</code>
        <span className="text-gray-400 text-sm">{desc}</span>
    </div>
);

const Exercise = ({ num, title, desc, hint, difficulty }) => {
    const [showHint, setShowHint] = useState(false);
    const diffColor = { Easy: 'text-green-400 bg-green-900/20 border-green-800/50', Medium: 'text-yellow-400 bg-yellow-900/20 border-yellow-800/50', Hard: 'text-red-400 bg-red-900/20 border-red-800/50' };
    return (
        <div className="bg-[#161b22] border border-gray-800 rounded-xl p-6 hover:border-sky-500/30 transition-all duration-300">
            <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-sky-900/30 border border-sky-800/50 text-sky-400 flex items-center justify-center text-sm font-bold shrink-0">
                        {num}
                    </div>
                    <h4 className="text-white font-bold">{title}</h4>
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded border shrink-0 ${diffColor[difficulty]}`}>{difficulty}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            {hint && (
                <div className="mt-4">
                    <button
                        onClick={() => setShowHint(!showHint)}
                        className="flex items-center gap-2 text-xs text-sky-400 hover:text-sky-300 transition-colors"
                    >
                        {showHint ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        {showHint ? 'Hide Hint' : 'Show Hint'}
                    </button>
                    {showHint && (
                        <div className="mt-3 p-3 bg-sky-900/10 border border-sky-800/40 rounded-lg text-xs text-sky-300 font-mono">
                            💡 {hint}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default function SummaryExercises() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Backgrounds Summary & Exercises — Module 6 Complete"
                description="Review everything you learned about CSS backgrounds. Comprehensive cheat sheet, key concepts summary, and hands-on practice exercises for beginners."
                keywords="css backgrounds summary, css background cheat sheet, css background exercises, css background practice, learn css backgrounds"
                url="/webdevelopment/css/backgrounds/summary"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-bold text-sky-400 uppercase tracking-widest">Module 6 · Summary</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                    Summary &amp;{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">
                        Mini-Exercises
                    </span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl">
                    Let's review what we learned and solidify it with hands-on practice!
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">

                {/* Key Takeaways */}
                <Section title="What You Learned — Key Takeaways" icon={CheckCircle}>
                    <div className="bg-sky-900/10 border-l-4 border-sky-500 p-6 rounded-r-xl mb-8">
                        <h4 className="text-xl font-bold text-sky-400 mb-5">Module 6 Complete! 🎉</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle size={18} className="text-sky-400 shrink-0 mt-0.5" />
                                <span><code className="text-sky-300">background-color</code> is your base coat of paint. Remember to use <code className="text-sky-300">rgba()</code> if you want it to be see-through without affecting the text.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle size={18} className="text-sky-400 shrink-0 mt-0.5" />
                                <span><code className="text-sky-300">background-image</code> brings in external pictures. Always provide a <code className="text-sky-300">background-color</code> fallback in case the image fails to load.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle size={18} className="text-sky-400 shrink-0 mt-0.5" />
                                <span><code className="text-sky-300">background-size: cover</code> is the secret to perfect, full-width header images. Pair it with <code className="text-sky-300">background-position: center</code> for the golden combo.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle size={18} className="text-sky-400 shrink-0 mt-0.5" />
                                <span><code className="text-sky-300">linear-gradient()</code> lets you paint smooth color blends without needing an image file. The browser draws them with math — blazing fast!</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle size={18} className="text-sky-400 shrink-0 mt-0.5" />
                                <span>You can stack gradients on top of images to make text readable. This is used by Netflix, Airbnb, Spotify, and virtually every major website.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle size={18} className="text-sky-400 shrink-0 mt-0.5" />
                                <span>The <code className="text-sky-300">background-clip: text</code> trick creates stunning gradient text effects using pure CSS — no images or fonts required.</span>
                            </li>
                        </ul>
                    </div>
                </Section>

                {/* Cheat Sheet */}
                <Section title="Quick Reference Cheat Sheet" icon={BookOpen}>
                    <div className="rounded-xl overflow-hidden border border-gray-800">
                        <div className="bg-[#161b22] px-4 py-3 border-b border-gray-800">
                            <div className="grid grid-cols-3 gap-2">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Property</span>
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Key Value</span>
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Use When</span>
                            </div>
                        </div>
                        <div className="bg-[#0d1117]">
                            <CheatSheetRow prop="background-color" value="#hex / rgb / rgba()" desc="Always your first line of defense" />
                            <CheatSheetRow prop="background-color" value="rgba(r,g,b,0.5)" desc="Transparent bg, solid text" />
                            <CheatSheetRow prop="background-image" value='url("file.jpg")' desc="Adding decorative images" />
                            <CheatSheetRow prop="background-size" value="cover" desc="Full-bleed hero images" />
                            <CheatSheetRow prop="background-size" value="contain" desc="Logos / icons — no crop" />
                            <CheatSheetRow prop="background-repeat" value="no-repeat" desc="Photographs" />
                            <CheatSheetRow prop="background-repeat" value="repeat" desc="Patterns and textures" />
                            <CheatSheetRow prop="background-position" value="center" desc="Keep focal point in view" />
                            <CheatSheetRow prop="background" value="color url() pos/size repeat" desc="Shorthand — all in one line" />
                            <CheatSheetRow prop="linear-gradient()" value="to right, #f00, #00f" desc="Smooth color transitions" />
                            <CheatSheetRow prop="background-clip" value="text" desc="Gradient text effect" />
                        </div>
                    </div>

                    <InfoBox type="tip">
                        <strong>🎯 The Hero Section Formula — Memorise This!</strong>
                        <div className="mt-3 bg-green-900/20 rounded-lg p-3 font-mono text-sm text-green-200">
                            background: #333 url("img.jpg") center / cover no-repeat;
                        </div>
                        <p className="mt-2 text-sm">This single line gives you: a fallback color, the image, centered focal point, full coverage, and no tiling.</p>
                    </InfoBox>
                </Section>

                {/* Exercises */}
                <Section title="Your Turn! — Practice Exercises" icon={ListOrdered}>
                    <p className="mb-6">
                        The best way to truly understand CSS backgrounds is to build things yourself. Try each exercise below. Start simple and work your way up!
                    </p>

                    <div className="space-y-4">
                        <Exercise
                            num="01"
                            title="The Simple Card"
                            difficulty="Easy"
                            desc="Create a white box with a light blue background-color, round the corners with border-radius, and add some text inside. Play with different color values — try hex, rgb, and rgba."
                            hint="background-color: #e0f2fe; border-radius: 12px; padding: 24px;"
                        />
                        <Exercise
                            num="02"
                            title="The Sky"
                            difficulty="Easy"
                            desc="Create a div that is 300px tall. Give it a linear-gradient that goes from top to bottom. Make the top color light blue (#87CEEB) and the bottom color white. Then try adding a third color to make it look like a sunrise!"
                            hint="background: linear-gradient(to bottom, #87CEEB, white); Try: linear-gradient(to bottom, #FF6B6B, #FFD93D, #6BCB77)"
                        />
                        <Exercise
                            num="03"
                            title="The Photographer"
                            difficulty="Medium"
                            desc='Find a free image online (like on Unsplash.com). Make a 500px tall Hero section. Use background-size: cover and background-position: center. Add an rgba gradient overlay so you can put a clear, readable <h1> title in the middle.'
                            hint='background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("your-image.jpg");'
                        />
                        <Exercise
                            num="04"
                            title="The Gradient Button"
                            difficulty="Medium"
                            desc='Build a pill-shaped button (border-radius: 50px) with a gradient background. Make the gradient flip direction on hover using the :hover pseudo-class. Try various color combinations!'
                            hint="background: linear-gradient(to right, #7c3aed, #3b82f6); On hover: background: linear-gradient(to left, #7c3aed, #3b82f6);"
                        />
                        <Exercise
                            num="05"
                            title="The Magic Heading"
                            difficulty="Hard"
                            desc='Create gradient text using the background-clip: text technique. Make an <h1> with a bright multi-color gradient. Remember: you need background-clip: text, -webkit-background-clip: text, AND color: transparent — all three!'
                            hint="background: linear-gradient(to right, #f953c6, #b91d73); -webkit-background-clip: text; background-clip: text; color: transparent;"
                        />
                    </div>

                    <InfoBox type="note">
                        <div className="flex items-start gap-3">
                            <Zap size={18} className="shrink-0 mt-0.5 text-yellow-400" />
                            <div>
                                <strong>Pro Developer Tip:</strong> After finishing each exercise, open your browser's DevTools (<kbd className="px-1.5 py-0.5 bg-gray-800 rounded text-xs">F12</kbd>), click on your element, and try adjusting the values live in the Styles panel. This is the fastest way to learn — you see changes instantly without saving!
                            </div>
                        </div>
                    </InfoBox>
                </Section>

                {/* Module complete card */}
                <div className="p-8 rounded-2xl border border-sky-500/30 bg-gradient-to-br from-sky-900/20 to-cyan-900/10 text-center">
                    <div className="text-4xl mb-4">🎨</div>
                    <h3 className="text-2xl font-bold text-white mb-3">Module 6 Complete!</h3>
                    <p className="text-gray-400 max-w-lg mx-auto mb-6">
                        You now know how to paint stunning backgrounds using colors, images, gradients, and layering. These skills will be used in every single web project you build!
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 text-sm">
                        <Link to="/webdevelopment/css/backgrounds/color" className="text-sky-400 hover:text-sky-300 underline transition-colors">Section 1: Colors</Link>
                        <span className="text-gray-700">·</span>
                        <Link to="/webdevelopment/css/backgrounds/image" className="text-sky-400 hover:text-sky-300 underline transition-colors">Section 2–4: Images</Link>
                        <span className="text-gray-700">·</span>
                        <Link to="/webdevelopment/css/backgrounds/gradients" className="text-sky-400 hover:text-sky-300 underline transition-colors">Section 5&7: Gradients</Link>
                        <span className="text-gray-700">·</span>
                        <Link to="/webdevelopment/css/backgrounds/layering" className="text-sky-400 hover:text-sky-300 underline transition-colors">Section 6: Layering</Link>
                    </div>
                </div>

            </div>

            <div className="flex justify-start mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/backgrounds/layering" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Layering Multiple Backgrounds
                </Link>
            </div>
        </article>
    );
}
