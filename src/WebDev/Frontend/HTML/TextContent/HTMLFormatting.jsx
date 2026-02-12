import React from 'react';
import { Bold, Italic, Quote, Code, ArrowRight, ArrowLeft, MessageSquare } from 'lucide-react';
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

const HTMLFormatting = () => {
  return (
    <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
      <SEO 
        title="HTML Text Formatting Tags" 
        description="Learn the difference between semantic tags (strong, em) and visual tags (b, i). Master quotations, citations, and code formatting."
        keywords="html formatting, strong vs b, em vs i, blockquote, semantic html"
      />

      <header className="py-12 border-b border-gray-800 mb-12">
        <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase border border-orange-500/20 mb-4 inline-block">
          Module 3.5
        </span>
        <h1 className="text-5xl font-extrabold text-white mb-6">Text <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Formatting</span></h1>
        <p className="text-xl text-gray-400 max-w-3xl">
          Formatting isn't just about making text look pretty; it's about adding meaning. We will explore how to emphasize content in a way that is understood by both humans and machines.
        </p>
      </header>

      <div className="prose prose-invert prose-lg max-w-none">
        
        <Section title="Semantic vs. Visual Formatting" icon={MessageSquare}>
          <p>
            In the early days of the web, we used tags like <code>&lt;b&gt;</code> (bold) and <code>&lt;i&gt;</code> (italic) strictly to change how text looked. Today, we prefer <strong>Semantic HTML</strong>. Semantic tags describe <em>what</em> the text is, not just what it looks like.
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-4 text-orange-400">
                <Bold size={20} />
                <h3 className="font-bold text-lg">Bold vs Strong</h3>
              </div>
              <ul className="space-y-4 text-sm">
                <li>
                  <code>&lt;b&gt;</code>: Directs the browser to make text bold. It has <strong>no semantic meaning</strong>. Use it for keywords or product names.
                </li>
                <li>
                  <code>&lt;strong&gt;</code>: Indicates <strong>strong importance</strong>. Screen readers may shout this or say it with a heavier tone.
                </li>
              </ul>
              <div className="mt-4 p-3 bg-black rounded text-xs text-green-400">
                &lt;p&gt;<strong>Warning:</strong> Do not unplug.&lt;/p&gt;
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-4 text-blue-400">
                <Italic size={20} />
                <h3 className="font-bold text-lg">Italic vs Em</h3>
              </div>
              <ul className="space-y-4 text-sm">
                <li>
                  <code>&lt;i&gt;</code>: Represents text in an alternate voice (foreign words, technical terms, thoughts).
                </li>
                <li>
                  <code>&lt;em&gt;</code>: Represents <strong>emphasized</strong> stress. "I <em>never</em> said that" has a different meaning than "I never said that."
                </li>
              </ul>
              <div className="mt-4 p-3 bg-black rounded text-xs text-green-400">
                &lt;p&gt;She <em>must</em> be joking.&lt;/p&gt;
              </div>
            </div>
          </div>
        </Section>

        <Section title="Quotations and Citations" icon={Quote}>
          <p>
            HTML has specific tags for handling quotes to ensure they are attributed correctly.
          </p>
          
          <h4 className="text-xl text-white font-bold mt-6 mb-2">Blockquote</h4>
          <p>
            Use <code>&lt;blockquote&gt;</code> for long quotations that stand alone. Browsers usually indent these significantly. You can use the <code>cite</code> attribute to provide a URL source (though this is invisible to users).
          </p>
          <LocalCodeBlock code={`<blockquote cite="https://www.kennedy.gov/speeches">
  <p>Ask not what your country can do for you — ask what you can do for your country.</p>
</blockquote>`} />

          <h4 className="text-xl text-white font-bold mt-6 mb-2">Inline Quotes (q)</h4>
          <p>
            Use <code>&lt;q&gt;</code> for short quotes inside a paragraph. Modern browsers automatically add quotation marks around the text for you!
          </p>
          <LocalCodeBlock code={`<p>The teacher said, <q>Please sit down</q> immediately.</p>`} />

           <h4 className="text-xl text-white font-bold mt-6 mb-2">Abbreviations (abbr)</h4>
          <p>
             Use <code>&lt;abbr&gt;</code> for acronyms. The <code>title</code> attribute provides the full expansion on hover.
          </p>
          <LocalCodeBlock code={`<p>I am learning <abbr title="HyperText Markup Language">HTML</abbr>.</p>`} />
        </Section>

        <Section title="Code and Technical Text" icon={Code}>
          <p>
            As a developer, you will often need to display code on a webpage.
          </p>
          <ul className="list-disc pl-5 space-y-3 mt-4 text-gray-400">
            <li><code>&lt;code&gt;</code>: Defines a snippet of computer code. It uses a monospace font.</li>
            <li><code>&lt;kbd&gt;</code>: Represents user keyboard input (e.g., <kbd className="bg-gray-800 p-1 rounded border border-gray-600 text-xs">Ctrl</kbd> + <kbd className="bg-gray-800 p-1 rounded border border-gray-600 text-xs">C</kbd>).</li>
            <li><code>&lt;samp&gt;</code>: Represents output from a computer program.</li>
            <li><code>&lt;var&gt;</code>: Represents a variable in a mathematical expression.</li>
          </ul>
        </Section>

      </div>

      <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
        <Link to="../paragraphs" className="flex items-center gap-2 text-gray-500 hover:text-white"><ArrowLeft size={16}/> Paragraphs</Link>
        <Link to="../block-inline" className="flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300">Next: Block vs Inline <ArrowRight size={16}/></Link>
      </div>
    </article>
  );
};

export default HTMLFormatting;