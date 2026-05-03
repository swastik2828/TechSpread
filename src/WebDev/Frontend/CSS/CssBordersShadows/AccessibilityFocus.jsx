import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, MousePointerClick } from 'lucide-react';
import SEO from '../../../../components/SEO';
import CssOutlineSimulator from '../../../../simulators/web/css/CssOutlineSimulator';

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

const InfoBox = ({ type = 'warning', children }) => {
    const styles = {
        note: 'border-sky-500 bg-sky-900/10 text-sky-200',
        tip: 'border-green-500 bg-green-900/10 text-green-200',
        warning: 'border-yellow-500 bg-yellow-900/10 text-yellow-200',
        danger: 'border-red-500 bg-red-900/10 text-red-200',
    };
    return (
        <div className={`border-l-4 p-6 rounded-r-xl my-6 ${styles[type]}`}>
            {children}
        </div>
    );
};

export default function AccessibilityFocus() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="Accessibility and Focus Management with CSS Outlines"
                description="Learn the critical difference between borders and outlines, and how to manage focus rings for accessibility using outline-offset and :focus-visible."
                keywords="css outline, accessibility a11y, focus rings, outline-offset, focus-visible css"
                url="/webdevelopment/css/borders-shadows/accessibility"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-2 mb-4">
                    {/* <span className="text-sm font-bold text-sky-400 uppercase tracking-widest">Section 2</span> */}
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                    Accessibility and Focus{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">
                        Management
                    </span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl">
                    Outlines serve a radically different, fundamentally functional purpose: Accessibility (a11y). Discover how to style focus rings professionally.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <Section title="The Difference Between Border and Outline" icon={Eye}>
                    <p>
                        While borders are heavily utilized for aesthetic design and layout structuring, the <code className="bg-gray-800 px-1 rounded text-pink-400">outline</code> property serves a radically different, fundamentally functional purpose: <strong>Accessibility (often abbreviated as a11y)</strong>. To the untrained eye, a standard outline looks identical to a border. It draws a line around the element. However, the internal browser mechanics governing outline are entirely disconnected from the CSS Box Model, making it a unique and powerful tool that must be handled with care.
                    </p>
                    <p>
                        The most critical distinction between a border and an outline is that <strong>an outline does not occupy any physical space in the document layout</strong>. It is drawn entirely in the visual layer, rendered "on top" of the element and its surroundings. 
                    </p>
                    <p>
                        If you dynamically apply a massive 50-pixel border to an element when a user hovers over it, the entire webpage layout will aggressively jump and shift to accommodate that newly required physical space. If you apply a 50-pixel outline, the layout remains perfectly still; the outline simply bleeds outward, potentially overlapping adjacent text or images. Because outlines do not trigger layout recalculations (a process known in browser rendering as a "reflow"), they are highly performant to animate or toggle on and off rapidly.
                    </p>
                </Section>

                <Section title="Focus Rings and the Accessibility Crisis" icon={MousePointerClick}>
                    <p>
                        The primary, intended use-case for the outline property is to create <strong>"Focus Rings."</strong> When a user interacts with a webpage, they don't always use a mouse or a touchscreen. Power users, individuals with motor disabilities, and users utilizing screen reader technologies frequently navigate through a document sequentially using the <code>Tab</code> key on their keyboard. As they press Tab, the browser moves an internal cursor, known as "focus," from one interactive element (like a hyperlink, a form input, or a button) to the next. The browser visually communicates exactly which element currently holds focus by drawing a default outline around it.
                    </p>

                    <InfoBox type="danger">
                        <strong>The Absolute Golden Rule of Web Accessibility:</strong> Never remove a focus indicator without providing a highly visible replacement. Historically, developers applied <code className="text-red-300">outline: none;</code> globally because default focus rings clashed with brand aesthetics. Removing the focus ring renders keyboard navigation virtually impossible, as the user becomes completely blind to their current location on the page.
                    </InfoBox>
                    <p>
                        If the default blue glow does not match your brand's aesthetic, you are fully empowered to replace it using standard CSS syntax, which mirrors the border shorthand (e.g., <code className="bg-gray-800 px-1 rounded text-green-400">outline: 3px solid #ff0055;</code>).
                    </p>
                </Section>

                <Section title="Designing Accessible Outlines" icon={Eye}>
                    <p>
                        When designing custom focus outlines, you must adhere to the Web Content Accessibility Guidelines (WCAG) regarding color contrast. A subtle, light gray outline on a white background fails accessibility standards because visually impaired users will not be able to perceive it.
                    </p>
                    <p>
                        To further enhance visibility without increasing the thickness of the line, CSS provides the incredibly useful <code className="bg-gray-800 px-1 rounded text-sky-400">outline-offset</code> property. This allows you to push the outline away from the edge of the element by a specified number of pixels. By adding an <code className="bg-gray-800 px-1 rounded">outline-offset: 4px;</code>, you create a visible gap of negative space between the element's background and the outline itself. This "double ring" effect is highly recommended by accessibility experts.
                    </p>

                    <CssOutlineSimulator />

                </Section>

                <Section title="The :focus-visible Revolution" icon={MousePointerClick}>
                    <p>
                        A significant leap forward in focus management was the introduction of the <code className="bg-gray-800 px-1 rounded text-pink-400">:focus-visible</code> pseudo-class. For years, developers struggled with the <code>:focus</code> pseudo-class because it was overly aggressive. If you styled a button with <code>:focus {'{ outline: 3px solid purple; }'}</code>, that purple outline would appear when a keyboard user tabbed to it (which is correct). However, it would also appear when a <strong>mouse user simply clicked the button</strong>. Mouse users do not need visual focus indicators because their physical mouse cursor already tells them where they are interacting.
                    </p>
                    <p>
                        The <code>:focus-visible</code> pseudo-class solves this dilemma elegantly. By leveraging advanced browser heuristics, <code>:focus-visible</code> applies the CSS rules <strong>only when the browser determines the user actually needs a focus indicator</strong>—primarily during keyboard navigation.
                    </p>
                    <CodeBlock title="global-focus.css">{`:root {
  /* Define standard brand focus ring */
  --brand-focus-ring: 3px solid #0ea5e9;
  --brand-focus-offset: 4px;
}

/* Remove default focus ONLY for mouse users */
:focus:not(:focus-visible) {
  outline: none;
}

/* Apply strong focus for keyboard users */
:focus-visible {
  outline: var(--brand-focus-ring);
  outline-offset: var(--brand-focus-offset);
}`}</CodeBlock>
                    <p>
                        Modern CSS architecture highly encourages standardizing your outline styles globally using CSS Custom Properties (variables). This ensures a consistent, predictable, and fully accessible user experience that respects both the aesthetic vision of the designer and the functional needs of every user.
                    </p>
                </Section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/borders-shadows/anatomy" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    ← Anatomy of Borders
                </Link>
                <Link to="/webdevelopment/css/borders-shadows/dimensionality" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Section 3: Dimensionality with Shadows <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
}
