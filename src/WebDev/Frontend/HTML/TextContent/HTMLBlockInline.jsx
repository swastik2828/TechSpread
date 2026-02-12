import React from 'react';
import { Box, Columns, Layers, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import SemanticImg from "../../../../assets/WebDev/semantic_layout_example.jpeg";

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

const HTMLBlockInline = () => {
  return (
    <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
      <SEO 
        title="Block vs Inline Elements in HTML" 
        description="Understand the fundamental display models of HTML. Learn when to use div vs span and how elements behave in the layout flow."
        keywords="block level elements, inline elements, div vs span, html display property"
      />

      <header className="py-12 border-b border-gray-800 mb-12">
        <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase border border-orange-500/20 mb-4 inline-block">
          Module 3.6
        </span>
        <h1 className="text-5xl font-extrabold text-white mb-6">Block vs <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Inline</span></h1>
        <p className="text-xl text-gray-400 max-w-3xl">
          Every HTML element has a default "display" value. Understanding this concept is the key to mastering layout. It dictates whether elements stack like boxes or flow like text.
        </p>
      </header>

      <div className="prose prose-invert prose-lg max-w-none">
        
        <Section title="Block-Level Elements" icon={Box}>
          <p>
            A <strong>Block-level element</strong> is a selfish element. It wants the entire line to itself.
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-400">
            <li>It always starts on a new line.</li>
            <li>It stretches to the full width of its parent container (100% width).</li>
            <li>It forces elements that follow it to the next line.</li>
            <li>It can contain other block elements or inline elements.</li>
          </ul>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
            {['<div>', '<p>', '<h1> - <h6>', '<form>', '<ul>', '<section>'].map((tag, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 p-3 rounded text-center font-mono text-blue-400">{tag}</div>
            ))}
          </div>

          <p>
            <strong>Mental Model:</strong> Think of block elements as stacking shipping containers. Even if a container is mostly empty, you can't put another container right next to it on the same footprint; you have to stack it on top or put it below.
          </p>
        </Section>

        <Section title="Inline Elements" icon={Columns}>
          <p>
            An <strong>Inline element</strong> is a cooperative element. It only takes up as much space as it needs.
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-400">
            <li>It does <strong>not</strong> start on a new line.</li>
            <li>It sits comfortably next to other inline elements.</li>
            <li>Width and height properties generally do not affect it (in CSS).</li>
            <li>It usually contains only text or other inline elements.</li>
          </ul>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
            {['<span>', '<a>', '<img>', '<strong>', '<em>', '<input>'].map((tag, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 p-3 rounded text-center font-mono text-green-400">{tag}</div>
            ))}
          </div>
          
          <p>
            <strong>Mental Model:</strong> Think of inline elements as words in a sentence. They flow from left to right. If they run out of space, they wrap to the next line, but they don't break the flow unless they have to.
          </p>
        </Section>

        <Section title="The Generic Containers: Div vs Span" icon={Layers}>
          <p>
            Often, you need to group elements for styling or layout, but no semantic tag (like <code>&lt;article&gt;</code> or <code>&lt;nav&gt;</code>) seems appropriate. This is where generic containers come in.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-gray-900 p-6 rounded-xl border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-white mb-2">&lt;div&gt; (Division)</h3>
              <p className="text-sm mb-4">The generic <strong>block</strong> container.</p>
              <p className="text-sm text-gray-400">Use it to group larger sections of layout, create cards, wrappers, or columns.</p>
              <LocalCodeBlock code={`<div class="card">
  <h2>Title</h2>
  <p>Content goes here.</p>
</div>`} />
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-white mb-2">&lt;span&gt;</h3>
              <p className="text-sm mb-4">The generic <strong>inline</strong> container.</p>
              <p className="text-sm text-gray-400">Use it to style a specific part of text within a line, like changing color or font weight.</p>
              <LocalCodeBlock code={`<p>
  My favorite color is 
  <span style="color:red">Red</span>.
</p>`} />
            </div>
          </div>
          
          <img src={SemanticImg} alt="Layout Example" className="w-full rounded-xl border border-gray-800 opacity-80 mt-12" />
        </Section>

      </div>

      <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
        <Link to="../formatting" className="flex items-center gap-2 text-gray-500 hover:text-white"><ArrowLeft size={16}/> Formatting</Link>
        <Link to="../charsets" className="flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300">Next: Charsets <ArrowRight size={16}/></Link>
      </div>
    </article>
  );
};

export default HTMLBlockInline;