import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Pin, LayoutList } from 'lucide-react';
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

export default function FixedSticky() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Fixed and Sticky Positioning"
                description="Learn the power of fixed and sticky positioning in CSS for creating sticky navbars, floating action buttons, and scroll-spying headers."
                keywords="css position fixed, css position sticky, css sticky header, sticky navbar css"
                url="/webdevelopment/css/positioning/fixed-sticky"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-bold text-sky-400 uppercase tracking-widest">Module 9</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                    Fixed & Sticky{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">
                        Positioning
                    </span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl">
                    Pin elements to the screen permanently, or make them scroll until they "stick" dynamically.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <Section title="8. position: fixed — Anchored to the Screen" icon={Pin}>
                    <p>
                        <code>position: fixed</code> is similar to <code>absolute</code> with one critical difference:
                    </p>
                    <InfoBox type="note">
                        <strong>Its reference point is always the browser viewport (the visible area of the browser window), not any ancestor.</strong>
                    </InfoBox>
                    <p>
                        No matter what, <code>top: 0; left: 0</code> means "the top-left corner of the screen." The element <strong>does not move when you scroll.</strong>
                    </p>

                    <CodeBlock title="styles.css" language="css">{`/* A classic fixed navigation bar */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;           /* Stretch full width */
  height: 60px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;         /* Stay above everything */
}

/* IMPORTANT: Push body content down so it's not hidden behind the navbar */
body {
  padding-top: 60px;     /* Same as navbar height */
}`}</CodeBlock>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">8.1 Fixed removes the element from flow</h3>
                    <p>
                        Like <code>absolute</code>, a fixed element is removed from normal flow. Other elements behave as if it doesn't exist. This is why you need <code>padding-top</code> on the body when using a fixed navbar — without it, the top content would be hidden under the navbar.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">8.2 Common use cases for fixed</h3>
                    <CodeBlock title="styles.css" language="css">{`/* Back to top button */
.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: steelblue;
  color: white;
}

/* Cookie consent banner */
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 16px;
  background: #222;
  color: white;
  z-index: 9999;
}`}</CodeBlock>

                    <InfoBox type="warning">
                        <strong>The transform gotcha:</strong> One important quirk: if any ancestor of a <code>fixed</code> element has a <code>transform</code> property applied, the fixed element loses its viewport-relative behavior and becomes relative to that ancestor instead. This is a known browser quirk — keep it in mind if your fixed element is misbehaving.
                    </InfoBox>
                </Section>

                <Section title="9. position: sticky — The Smart Hybrid" icon={LayoutList}>
                    <p>
                        <code>position: sticky</code> is the most modern positioning value and one of the most useful. It's a hybrid between <code>relative</code> and <code>fixed</code>.
                    </p>
                    <p><strong>Here's how it works:</strong></p>
                    <ol className="list-decimal pl-6 mb-6">
                        <li>The element scrolls normally with the page (like <code>relative</code>)</li>
                        <li>Once it reaches a threshold you define (like <code>top: 0</code>), it "sticks" in place (like <code>fixed</code>)</li>
                        <li>When its parent container scrolls out of view, it unsticks and disappears with it</li>
                    </ol>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">9.1 Basic sticky header</h3>
                    <CodeBlock title="styles.css" language="css">{`.section-header {
  position: sticky;
  top: 0;                  /* Stick when it reaches the top of the viewport */
  background: white;       /* Needs a background or content shows through */
  padding: 12px 16px;
  z-index: 10;
  border-bottom: 1px solid #eee;
}`}</CodeBlock>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">9.2 The threshold value is required</h3>
                    <p>
                        <code>position: sticky</code> <strong>does nothing without a threshold value</strong> (<code>top</code>, <code>bottom</code>, <code>left</code>, or <code>right</code>). Without it, the browser doesn't know where to stick.
                    </p>
                    <CodeBlock title="styles.css" language="css">{`/* ❌ This does nothing — no threshold */
.header { position: sticky; }

/* ✅ This works — sticks at the top */
.header { position: sticky; top: 0; }

/* ✅ This works — sticks when 20px from the top */
.header { position: sticky; top: 20px; }`}</CodeBlock>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">9.3 Sticky is contained by its parent</h3>
                    <p>
                        This is the key behavior that differentiates sticky from fixed: <strong>a sticky element is constrained to the boundaries of its parent container</strong>. When the parent scrolls out of view, the sticky element goes with it.
                    </p>
                    <CodeBlock title="index.html" language="html">{`<section>
  <h2 class="sticky-heading">Section A</h2>
  <p>Content...</p>
</section>

<section>
  <h2 class="sticky-heading">Section B</h2>
  <p>Content...</p>
</section>`}</CodeBlock>

                    <p>
                        As you scroll, "Section A" sticks at the top — but only until Section A's parent <code>&lt;section&gt;</code> ends. Then "Section B" takes over. This creates a beautiful directory/scroll-spy effect without JavaScript.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">9.4 Common sticky gotcha: overflow: hidden</h3>
                    <InfoBox type="warning">
                        If any ancestor of your sticky element has <code>overflow: hidden</code> or <code>overflow: auto</code>, sticky will stop working. The element needs to be able to scroll within a scrollable container — if <code>overflow</code> is hidden, there's no scrollable container, and sticky breaks.
                    </InfoBox>
                </Section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/positioning/relative-absolute" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Previous: Relative & Absolute
                </Link>
                <Link to="/webdevelopment/css/positioning/z-index-centering" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Z-Index & Centering <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
}
