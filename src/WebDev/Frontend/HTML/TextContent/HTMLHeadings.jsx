import React from 'react';
import { Type, List, Search, Eye, ArrowRight, ArrowLeft } from 'lucide-react';
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

const HTMLHeadings = () => {
  return (
    <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
      <SEO 
        title="HTML Headings & Document Outline" 
        description="Learn how to structure web content using h1-h6 tags. Why headings matter for SEO and accessibility."
        keywords="html headings, h1 vs h2, document outline, seo structure, accessibility"
      />

      <header className="py-12 border-b border-gray-800 mb-12">
        <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase border border-orange-500/20 mb-4 inline-block">
          Module 3.3
        </span>
        <h1 className="text-5xl font-extrabold text-white mb-6">HTML <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Headings</span></h1>
        <p className="text-xl text-gray-400 max-w-3xl">
          Headings are the skeleton of your content. They guide users, help search engines understand your topic, and allow screen readers to navigate. They are about structure, not size.
        </p>
      </header>

      <div className="prose prose-invert prose-lg max-w-none">
        
        <Section title="The Six Levels of Headings" icon={List}>
          <p>
            HTML provides six levels of headings, from <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>. The <code>&lt;h1&gt;</code> represents the most important heading (the main title), while <code>&lt;h6&gt;</code> represents the least important.
          </p>
          <LocalCodeBlock code={`<h1>Main Page Title (Only one per page)</h1>
  <h2>Major Section</h2>
    <h3>Subsection of the Major Section</h3>
    <h3>Another Subsection</h3>
  <h2>Another Major Section</h2>`} />
          <p>
            Browsers render <code>h1</code> as very large and bold, scaling down to <code>h6</code> which is often smaller than regular text. However, <strong>never use headings just to make text big.</strong> Use them to define the outline of your document. If you need big text that isn't a heading, use CSS.
          </p>
        </Section>

        <Section title="The Importance of Structure" icon={Type}>
          <p>
            Imagine reading a textbook that has no chapters, no bold titles, and no table of contents—just a wall of text. It would be impossible to scan. That is what a web page looks like to a machine if you don't use headings correctly.
          </p>
          <p>
            A proper heading structure creates a logical hierarchy:
          </p>
          <ul className="list-decimal pl-5 space-y-2 mt-4">
             <li><strong>h1:</strong> The book title. Describes the whole page.</li>
             <li><strong>h2:</strong> The chapter titles. breaks the page into big topics.</li>
             <li><strong>h3:</strong> The sub-chapters. Breaks topics into details.</li>
          </ul>
          <p className="mt-4">
             <strong>Rule of Thumb:</strong> Do not skip levels. Do not jump from an <code>h1</code> directly to an <code>h4</code> just because you like the font size of the <code>h4</code>. This confuses the document outline.
          </p>
        </Section>

        <Section title="Headings and SEO" icon={Search}>
          <p>
            Search Engine Optimization (SEO) relies heavily on headings. When Google's bot crawls your page, it looks at the headings to understand what the content is about.
          </p>
          <div className="bg-gray-900/50 p-6 rounded-xl border-l-4 border-orange-500 my-6">
            <h4 className="font-bold text-white mb-2">The H1 Rule</h4>
            <p className="text-sm text-gray-300">
              Each page should have <strong>exactly one</strong> <code>&lt;h1&gt;</code> tag. It should contain the primary keyword or topic of that specific page. While HTML5 technically allows multiple H1s (if inside specific section tags), almost all SEO experts recommend sticking to the "One H1 per page" rule for maximum clarity.
            </p>
          </div>
          <p>
             Keywords found in headings carry more weight than keywords found in paragraphs. If you are writing a page about "Vintage Cameras," make sure those words appear in your H1 or H2s.
          </p>
        </Section>

        <Section title="Accessibility (A11y)" icon={Eye}>
          <p>
            For users who are blind or visually impaired, headings are a primary navigation tool. Screen readers (like NVDA or VoiceOver) have a shortcut key (usually 'H') that allows the user to jump from one heading to the next.
          </p>
          <p>
            If you use bold text (<code>&lt;b&gt;</code> or styled <code>&lt;div&gt;</code>) instead of heading tags, screen readers will skip right over them. The user will have to listen to the entire page linearly to find what they are looking for. By using proper tags, you make your site usable for millions of people who rely on assistive technology.
          </p>
        </Section>

      </div>

      <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
        <Link to="../attributes" className="flex items-center gap-2 text-gray-500 hover:text-white"><ArrowLeft size={16}/> Attributes</Link>
        <Link to="../paragraphs" className="flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300">Next: Paragraphs <ArrowRight size={16}/></Link>
      </div>
    </article>
  );
};

export default HTMLHeadings;