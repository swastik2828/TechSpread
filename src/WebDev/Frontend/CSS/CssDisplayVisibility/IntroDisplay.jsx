import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layout, Code2, BookOpen } from 'lucide-react';
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

export default function IntroDisplay() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Display, Visibility, and Document Flow"
                description="Master CSS Document Flow by understanding the display property, including block, inline, inline-block, and none."
                keywords="css display, document flow, css inline vs block, display none css"
                url="/webdevelopment/css/display-visibility/intro"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-bold text-sky-400 uppercase tracking-widest">Module 8</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                    CSS Display, Visibility, and{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">
                        Document Flow
                    </span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl">
                    Understand how browsers read HTML and position elements sequentially, and learn how to master the display switch to control page layout.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <Section title="Module Overview" icon={BookOpen}>
                    <p>
                        To master CSS, you must understand the <strong>Document Flow</strong> (also known as Normal Flow). By default, browsers read your HTML from top to bottom and render elements sequentially. 
                    </p>
                    <p>
                        The <code>display</code> property is the master switch that controls how an element participates in this flow. It determines whether an element greedily takes up a whole line, neatly flows within text, or establishes a completely new layout system (like Flexbox or Grid) for its children.
                    </p>
                    <InfoBox type="note">
                        <strong>Why it matters:</strong> Understanding display, combined with visibility and overflow, is the foundational secret to building predictable, robust, and accessible web layouts.
                    </InfoBox>
                </Section>

                <Section title="1. The Core display Values" icon={Layout}>
                    <p>
                        Elements in HTML default to one of two primary formatting contexts: Block or Inline. The display property allows you to override these defaults and reshape the box model.
                    </p>
                    
                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">display: block</h3>
                    <p>
                        Block-level elements act like greedy siblings. They start on a fresh line and immediately expand to fill 100% of the available horizontal space of their parent container.
                    </p>
                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>Box Model Behavior:</strong> You can manipulate the width, height, margin, and padding on all four sides.</li>
                        <li><strong>Native Examples:</strong> <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;ul&gt;</code>, <code>&lt;li&gt;</code>.</li>
                    </ul>
                    <CodeBlock title="block.css">{`/* Natively block elements */
div { display: block; } 

.full-row-card {
    display: block;
    width: 100%; /* Redundant, but explicit */
    max-width: 800px;
    margin: 0 auto 20px auto; /* Centers the block, adds bottom space */
    padding: 24px;
}`}</CodeBlock>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">display: inline</h3>
                    <p>
                        Inline elements are team players. They flow seamlessly with surrounding text and only take up as much horizontal space as their internal content requires. They do not force a line break.
                    </p>
                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>Box Model Behavior:</strong> You cannot set width or height. Furthermore, vertical layout properties (margin-top, margin-bottom, padding-top, padding-bottom) are largely ignored in terms of pushing other elements away (though vertical padding might visibly bleed over other text). Horizontal margins and padding (left and right) work perfectly.</li>
                        <li><strong>Native Examples:</strong> <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>.</li>
                    </ul>
                    <CodeBlock title="inline.css">{`span { display: inline; } 

.text-highlight {
    display: inline;
    background: #fff3cd;
    color: #856404;
    padding: 0 8px; /* Left and right padding works well */
    /* margin-top: 20px; -> THIS WILL DO NOTHING */
}`}</CodeBlock>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">display: inline-block</h3>
                    <p>
                        This is the hybrid "best of both worlds" value. An inline-block element sits harmoniously in a line of text (like inline), but it respects the full Box Model internally (like block).
                    </p>
                    <p>
                        <strong>Use Cases:</strong> Perfect for buttons, navigation links, avatars, and badge components where you need exact sizing but don't want to break the text flow.
                    </p>
                    <CodeBlock title="inline-block.css">{`.primary-button {
    display: inline-block;
    padding: 12px 24px;
    background-color: #0077cc;
    color: white;
    width: 150px;       /* Width is respected! */
    text-align: center;
    border-radius: 6px;
    text-decoration: none;
}`}</CodeBlock>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">display: none</h3>
                    <p>
                        This is the nuclear option. It completely removes the element from the Document Flow.
                    </p>
                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>Behavior:</strong> The element takes up zero space, as if it were deleted from the HTML.</li>
                        <li><strong>Accessibility Note:</strong> Elements with <code>display: none</code> are completely ignored by screen readers.</li>
                        <li><strong>Use Cases:</strong> Toggling mobile menus, hiding modal dialogs, or creating tabbed interfaces via JavaScript.</li>
                    </ul>
                    <CodeBlock title="none.css">{`.hidden-menu { 
    display: none; 
} 
/* Toggling via JavaScript later:
   element.style.display = 'block'; 
*/`}</CodeBlock>
                </Section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/borders-shadows/alpha-mask" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    ← Previous: Alpha Mask Shadows
                </Link>
                <Link to="/webdevelopment/css/display-visibility/visibility-opacity" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Visibility & Opacity <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
}
