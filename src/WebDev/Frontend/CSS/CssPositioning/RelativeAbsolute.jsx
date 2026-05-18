import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Target, Focus, BoxSelect } from 'lucide-react';
import SEO from '../../../../components/SEO';
import CssPositionSimulator from '../../../../simulators/web/css/CssPositionSimulator';

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

export default function RelativeAbsolute() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Relative and Absolute Positioning"
                description="Learn the differences between relative and absolute positioning in CSS, and master the Positioning Context pattern."
                keywords="css position relative, css position absolute, positioning context css"
                url="/webdevelopment/css/positioning/relative-absolute"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-bold text-sky-400 uppercase tracking-widest">Module 9</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                    Relative & Absolute{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">
                        Positioning
                    </span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl">
                    Discover how to nudge elements without breaking the flow, and how to completely remove them from the flow using absolute positioning.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                
                <CssPositionSimulator />

                <Section title="5. position: relative — Move Without Leaving" icon={Target}>
                    <p>
                        <code>position: relative</code> is deceptively simple. It does two things:
                    </p>
                    <ol className="list-decimal pl-6 mb-6">
                        <li><strong>Offsets</strong> the element visually from its natural position</li>
                        <li><strong>Creates a positioning context</strong> for any child elements (more on this in Section 7)</li>
                    </ol>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">5.1 Visual Offset</h3>
                    <p>
                        When you apply <code>position: relative</code> and use offset properties, the element <em>visually</em> moves from where it would naturally sit — but the <strong>space it occupied in the flow is preserved</strong>.
                    </p>

                    <CodeBlock title="index.html" language="html">{`<div class="box">Box 1</div>
<div class="box moved">Box 2 (moved)</div>
<div class="box">Box 3</div>`}</CodeBlock>

                    <CodeBlock title="styles.css" language="css">{`.box {
  width: 100px;
  height: 60px;
  background: steelblue;
  margin: 10px;
  color: white;
  text-align: center;
  line-height: 60px;
}

.moved {
  position: relative;
  top: 20px;   /* Move DOWN 20px from its natural position */
  left: 40px;  /* Move RIGHT 40px from its natural position */
  background: tomato;
}`}</CodeBlock>

                    <p><strong>What happens visually:</strong></p>
                    <div className="my-6 overflow-x-auto bg-[#111] p-4 sm:p-6 rounded-lg font-mono text-xs sm:text-sm border border-gray-800 text-sky-300">
<pre>{`┌─────────┐
│  Box 1  │
└─────────┘
              ┌─────────┐   ← Box 2 appears here (moved down+right)
[gap where    │  Box 2  │     but a gap remains where it would have been
 Box 2 was]   └─────────┘
┌─────────┐
│  Box 3  │   ← Box 3 does NOT move up to fill the gap
└─────────┘`}</pre>
                    </div>

                    <p>
                        The ghost space stays. Box 3 does not move. The element is only <em>visually</em> shifted — it still "lives" in the normal flow at its original location.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">5.2 When should you use relative offset?</h3>
                    <p>
                        Honestly, <em>rarely</em>. Moving an element with <code>relative</code> and offset properties is an old technique that can cause confusing layouts. Today, you'd typically use <code>margin</code>, <code>transform: translate()</code>, or Flexbox/Grid for visual nudges.
                    </p>
                    <InfoBox type="note">
                        <strong>The main, everyday use of <code>position: relative</code> is not for moving — it's for creating a positioning context.</strong>
                    </InfoBox>
                </Section>

                <Section title="6. position: absolute — Break Free from the Flow" icon={Focus}>
                    <p>
                        <code>position: absolute</code> is where things get powerful and tricky. When you apply it:
                    </p>
                    <ol className="list-decimal pl-6 mb-6">
                        <li>The element is <strong>completely removed</strong> from normal document flow — it no longer occupies any space, and other elements flow as if it doesn't exist</li>
                        <li>The element is positioned using <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code> relative to its <strong>nearest positioned ancestor</strong></li>
                        <li>If no positioned ancestor exists, it's positioned relative to the <strong>initial containing block</strong> (essentially the <code>&lt;html&gt;</code> element / viewport)</li>
                    </ol>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">6.1 The Flow Removal Effect</h3>
                    <CodeBlock title="styles.css" language="css">{`.abs {
  position: absolute;
  top: 50px;
  left: 200px;
  background: tomato;
}`}</CodeBlock>

                    <div className="my-6 overflow-x-auto bg-[#111] p-4 sm:p-6 rounded-lg font-mono text-xs sm:text-sm border border-gray-800 text-sky-300">
<pre>{`┌─────────┐
│  Box 1  │
└─────────┘
┌─────────┐           ┌─────────┐
│  Box 3  │           │  Box 2  │  ← Floats above everything, positioned
└─────────┘           │ (abs)   │     at top:50px, left:200px
                      └─────────┘`}</pre>
                    </div>
                    <p>Box 3 moved up because Box 2 vacated its space. Box 2 now floats independently.</p>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">6.2 Sizing behavior of absolutely positioned elements</h3>
                    <p>
                        By default, an absolutely positioned element shrinks to wrap its content. To control its size:
                    </p>
                    <CodeBlock title="styles.css" language="css">{`.tooltip {
  position: absolute;
  width: 200px;          /* Explicit width */
  /* OR */
  left: 0;
  right: 0;              /* Stretch to fill container width */
}

/* Full overlay — covers its positioned parent entirely */
.overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
}`}</CodeBlock>
                </Section>

                <Section title="7. The Positioning Context — The Most Important Concept" icon={BoxSelect}>
                    <p>
                        This is the concept that trips up almost every beginner. Understand this and everything else clicks.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">7.1 What is a positioning context?</h3>
                    <p>
                        A <strong>positioning context</strong> (also called a <em>containing block</em> for positioned elements) is the reference box that an absolutely positioned element uses as its coordinate system.
                    </p>
                    <InfoBox type="note">
                        In plain English: <strong>when you write <code>top: 20px</code> on an absolute element, "20px from where?" — the answer is "from its positioning context."</strong>
                    </InfoBox>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">7.2 Which ancestor creates a positioning context?</h3>
                    <p>
                        An element creates a positioning context for its descendants if it has <strong>any <code>position</code> value other than <code>static</code></strong>.
                    </p>
                    <ul className="list-disc pl-6 mb-6">
                        <li><code>position: relative</code> ✅</li>
                        <li><code>position: absolute</code> ✅</li>
                        <li><code>position: fixed</code> ✅</li>
                        <li><code>position: sticky</code> ✅</li>
                        <li><code>position: static</code> ❌ (does NOT create a context)</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">7.3 How the browser finds the positioning context</h3>
                    <p>
                        When you have an absolute element, the browser walks <strong>up the DOM tree</strong> looking for the nearest ancestor that is positioned. The first one it finds becomes the positioning context.
                    </p>
                    <CodeBlock title="index.html" language="html">{`<body>                        ← position: static (doesn't count)
  <section>                   ← position: static (doesn't count)
    <div class="card">        ← position: relative ✅ FOUND — this is the context!
      <span class="badge">    ← position: absolute — uses .card as its reference`}</CodeBlock>

                    <CodeBlock title="styles.css" language="css">{`.card {
  position: relative;    /* Creates the positioning context */
  width: 200px;
  height: 150px;
}

.badge {
  position: absolute;
  top: -8px;             /* 8px above the TOP of .card */
  right: -8px;           /* 8px to the RIGHT of .card's right edge */
  width: 20px;
  height: 20px;
  background: red;
  border-radius: 50%;
}`}</CodeBlock>

                    <div className="my-6 overflow-x-auto bg-[#111] p-4 sm:p-6 rounded-lg font-mono text-xs sm:text-sm border border-gray-800 text-sky-300">
<pre>{`┌──────────────────┐
│                ⬤ │  ← badge sits in the top-right corner of .card
│    .card         │     because .card is the positioning context
│                  │
└──────────────────┘`}</pre>
                    </div>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">7.4 What if no positioned ancestor exists?</h3>
                    <p>
                        If no ancestor has a non-static position, the absolute element positions itself relative to the <strong>initial containing block</strong> — which is the <code>&lt;html&gt;</code> element, effectively the top-left corner of the page.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">7.5 The Classic Pattern</h3>
                    <p>The most common use of positioning in real-world CSS is this pattern:</p>
                    <CodeBlock title="styles.css" language="css">{`/* Parent: create the context */
.parent {
  position: relative;
}

/* Child: position inside the parent */
.child {
  position: absolute;
  top: 0;
  right: 0;
}`}</CodeBlock>
                    <p>
                        This is everywhere — card badges, dropdown menus, image captions, tooltips, close buttons. Learn this pattern and you'll use it constantly.
                    </p>
                </Section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/positioning/intro" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Previous: Introduction
                </Link>
                <Link to="/webdevelopment/css/positioning/fixed-sticky" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Fixed & Sticky <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
}
