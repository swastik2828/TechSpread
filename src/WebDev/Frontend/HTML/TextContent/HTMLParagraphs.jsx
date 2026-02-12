import React from 'react';
import { AlignLeft, Scissors, Eye, Type, ArrowRight, ArrowLeft, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';
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

const LocalCodeBlock = ({ code, label = "HTML" }) => (
  <div className="my-6 rounded-xl overflow-hidden bg-[#0d1117] border border-gray-800 shadow-2xl">
    <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-gray-800">
      <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-500/20"></div><div className="w-3 h-3 rounded-full bg-yellow-500/20"></div></div>
      <span className="text-[10px] font-bold text-gray-500 uppercase">{label}</span>
    </div>
    <div className="p-5 overflow-x-auto font-mono text-sm text-gray-300 whitespace-pre-wrap">{code}</div>
  </div>
);

const HTMLParagraphs = () => {
  return (
    <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
      <SEO 
        title="HTML Paragraphs & Whitespace" 
        description="Master the <p> tag, line breaks, and horizontal rules. Understand how browsers handle whitespace and text flow."
        keywords="html paragraph tag, whitespace collapsing, line break tag, horizontal rule, preformatted text"
      />

      <header className="py-12 border-b border-gray-800 mb-12">
        <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase border border-orange-500/20 mb-4 inline-block">
          Module 3.4
        </span>
        <h1 className="text-5xl font-extrabold text-white mb-6">HTML <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Paragraphs</span></h1>
        <p className="text-xl text-gray-400 max-w-3xl">
          Text on the web behaves differently than text in a Word document. Understanding paragraphs means understanding the flow of content and the browser's ruthless management of empty space.
        </p>
      </header>

      <div className="prose prose-invert prose-lg max-w-none">
        
        <Section title="The Paragraph Element" icon={AlignLeft}>
          <p>
            The <code>&lt;p&gt;</code> element is the default container for text. It represents a block of text that forms a single cohesive thought.
          </p>
          <p>
            By default, browsers display paragraphs as <strong>block-level</strong> elements. This means:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-400">
            <li>They start on a new line.</li>
            <li>They take up the full width available.</li>
            <li>They have a default top and bottom margin (usually 1em) to visually separate them from surrounding content.</li>
          </ul>
          <p className="mt-4">
            <strong>Accessibility Note:</strong> Screen readers pause briefly after reading a paragraph element, simulating the natural pause a human speaker would take. This is why using <code>&lt;p&gt;</code> is better than just using <code>&lt;br&gt;</code> tags to separate text.
          </p>
        </Section>

        <Section title="Whitespace Collapsing" icon={Wind}>
          <p>
            One of the most confusing things for beginners is <strong>Whitespace Collapsing</strong>. In a code editor, you might press "Enter" five times or use "Tab" to indent your text perfectly. However, the browser ignores almost all of this.
          </p>
          <LocalCodeBlock code={`<p>
  This      text       has
  many      spaces
  and       lines.
</p>`} />
          <div className="bg-gray-900 border-l-4 border-orange-500 p-4 mb-6">
            <span className="font-bold text-white block mb-1">Browser Output:</span>
            <span className="text-gray-300">This text has many spaces and lines.</span>
          </div>
          <p>
            The browser reduces any sequence of whitespace (spaces, tabs, newlines) into a <strong>single space</strong>. This is actually a feature, not a bug—it allows developers to format their code for readability without worrying about messing up the visual layout.
          </p>
        </Section>

        <Section title="Controlling Breaks & Lines" icon={Scissors}>
          <p>
            Since "Enter" in your code doesn't create a new line on the screen, you need specific tags to force breaks.
          </p>

          <h3 className="text-2xl text-white font-bold mt-8 mb-4">1. The Line Break &lt;br&gt;</h3>
          <p>
            The <code>&lt;br&gt;</code> element forces a line break within the current block. It is an empty element.
          </p>
          <LocalCodeBlock code={`<p>
  123 Web Street<br>
  New York, NY 10001<br>
  USA
</p>`} />
          <p className="text-sm italic text-gray-500 mb-8">
            <strong>Use Sparingly:</strong> Do not use <code>&lt;br&gt;</code> to create space between paragraphs. Use CSS margins for spacing. Only use <code>&lt;br&gt;</code> when the line break is actually part of the content (like in a poem or address).
          </p>

          <h3 className="text-2xl text-white font-bold mb-4">2. The Horizontal Rule &lt;hr&gt;</h3>
          <p>
            The <code>&lt;hr&gt;</code> element represents a thematic break between paragraph-level elements. Visually, it renders as a horizontal line.
          </p>
          <LocalCodeBlock code={`<p>Scene 1: The hero enters the room.</p>
<hr>
<p>Scene 2: Meanwhile, at the villain's lair...</p>`} />
        </Section>

        <Section title="Preformatted Text" icon={Type}>
          <p>
            Sometimes you <em>do</em> want the browser to respect your whitespace—for example, when displaying code snippets or ASCII art. For this, use the <code>&lt;pre&gt;</code> tag.
          </p>
          <LocalCodeBlock code={`<pre>
  Items:
     - Apple
     - Banana
</pre>`} />
          <p>
            Inside a <code>&lt;pre&gt;</code> tag, all spaces, tabs, and newlines are preserved exactly as written in the code.
          </p>
        </Section>

      </div>

      <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
        <Link to="../headings" className="flex items-center gap-2 text-gray-500 hover:text-white"><ArrowLeft size={16}/> Headings</Link>
        <Link to="../formatting" className="flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300">Next: Formatting <ArrowRight size={16}/></Link>
      </div>
    </article>
  );
};

export default HTMLParagraphs;