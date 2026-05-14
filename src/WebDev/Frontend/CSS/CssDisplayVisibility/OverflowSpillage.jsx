import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Maximize2 } from 'lucide-react';
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

export default function OverflowSpillage() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Overflow Property: Managing Content Spillage"
                description="Learn how to handle overflow in CSS. Control scrollbars, hide content, and use text-overflow to clip long text."
                keywords="css overflow, overflow auto, overflow hidden css, text overflow ellipsis"
                url="/webdevelopment/css/display-visibility/overflow-spillage"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-bold text-sky-400 uppercase tracking-widest">Section 3</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                    Managing Spillage:{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">
                        The overflow Property
                    </span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl">
                    Discover how to gracefully handle content that exceeds its container's strict dimensions using CSS overflow.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <Section title="4. Managing Spillage: The overflow Property" icon={Maximize2}>
                    <p>
                        When you strictly define a width and height for a block element, what happens if the text or children inside it are too big to fit? This is called an <strong>overflow</strong>, and CSS gives you tools to control the spill.
                    </p>
                    
                    <ul className="list-none space-y-4 mb-8">
                        <li className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                            <strong className="text-sky-400 font-mono">overflow: visible</strong><br />
                            (Default) Content spills outside the parent box, potentially overlapping other elements.
                        </li>
                        <li className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                            <strong className="text-sky-400 font-mono">overflow: hidden</strong><br />
                            Content is aggressively cut off precisely at the parent's border. No scrollbars are provided.
                        </li>
                        <li className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                            <strong className="text-sky-400 font-mono">overflow: scroll</strong><br />
                            Scrollbars are added to the box, even if the content currently fits.
                        </li>
                        <li className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                            <strong className="text-sky-400 font-mono">overflow: auto</strong><br />
                            (Recommended) Scrollbars appear only when the content actually exceeds the box dimensions.
                        </li>
                        <li className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                            <strong className="text-sky-400 font-mono">overflow: clip</strong><br />
                            A modern addition. Similar to hidden, but strictly prevents any programmatic scrolling entirely.
                        </li>
                    </ul>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">Axis Control</h3>
                    <p>
                        You can control horizontal (X) and vertical (Y) overflows independently using <code>overflow-x</code> and <code>overflow-y</code>:
                    </p>
                    <CodeBlock title="axis.css">{`.side-panel {
    height: 100vh;
    overflow-y: auto;   /* Scroll vertically if list gets too long */
    overflow-x: hidden; /* Never allow horizontal scrolling */
}`}</CodeBlock>

                    <InfoBox type="tip">
                        <strong>Pro-tip: Handling Text Overflow</strong><br />
                        If you want text to cut off cleanly with an ellipsis ("...") instead of just chopping a letter in half, you combine overflow with a few text-specific properties:
                    </InfoBox>

                    <CodeBlock title="truncate.css">{`.truncate-text {
    white-space: nowrap;      /* Prevent text from wrapping to next line */
    overflow: hidden;         /* Hide the spill */
    text-overflow: ellipsis;  /* Add '...' at the end */
}`}</CodeBlock>
                </Section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/display-visibility/visibility-opacity" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    ← Back: Visibility & Opacity
                </Link>
                <Link to="/webdevelopment/css/display-visibility/exercises" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Exercises & Summary <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
}
