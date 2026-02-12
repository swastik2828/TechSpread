import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Tag, Layers, ArrowRight, ArrowLeft, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import DocStructureImg from "../../../../assets/WebDev/document_structure_analogy.jpeg";

// Reusing local components for consistency
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

const HTMLElements = () => {
  return (
    <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
      <SEO 
        title="HTML Elements Deep Dive" 
        description="A comprehensive guide to HTML elements, tags, nesting rules, and void elements. Learn the anatomy of the web."
        keywords="html elements, html tags, void elements, nesting html, web structure"
      />

      {/* Header */}
      <header className="py-12 border-b border-gray-800 mb-12">
        <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase border border-orange-500/20 mb-4 inline-block">
          Module 3.1
        </span>
        <h1 className="text-5xl font-extrabold text-white mb-6">HTML <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Elements</span></h1>
        <p className="text-xl text-gray-400 max-w-3xl">
          If the web were a house, HTML elements would be the bricks, beams, and windows. Understanding exactly how these blocks fit together is the difference between a website that crumbles and one that stands tall.
        </p>
      </header>

      {/* Content */}
      <div className="prose prose-invert prose-lg max-w-none">
        
        <Section title="The Anatomy of an Element" icon={Layout}>
          <p>
            In conversation, developers often use "tag" and "element" interchangeably, but technically, they are different. An <strong>element</strong> is the entire object—the start, the content, and the end. A <strong>tag</strong> is just the code bit that marks the start or end.
          </p>
          <p>
            Consider the paragraph element. It is the fundamental unit of text on the web. When the browser reads your code, it doesn't see "text"; it sees a tree of objects (the DOM). The HTML element is the instruction manual for building one of those objects.
          </p>
          <LocalCodeBlock code={`<p class="greeting">Hello World</p>

`} />
          <p>
            <strong>Why does this distinction matter?</strong> When you use JavaScript later in your journey, you will select an "Element" from the DOM. You won't be selecting the tags; you'll be selecting the object that the tags created. This mental model shift is crucial for advanced development.
          </p>
        </Section>

        <Section title="Nesting: The Box Model of the Web" icon={Layers}>
          <p>
            HTML is hierarchical. This means elements are placed inside other elements, a process called <strong>nesting</strong>. This creates a parent-child relationship between elements. The <code>&lt;body&gt;</code> is the parent of a <code>&lt;div&gt;</code>, which might be the parent of a <code>&lt;p&gt;</code>.
          </p>
          <p>
            The golden rule of nesting is: <strong>Close what you opened last.</strong> Think of it like a set of Russian nesting dolls. You cannot close the outer doll until the inner doll is securely closed inside.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-green-900/10 border border-green-500/20 p-6 rounded-xl">
              <h4 className="font-bold text-green-400 mb-2">✅ Correct Nesting</h4>
              <p className="text-sm mb-4">The child (em) is fully contained within the parent (p).</p>
              <code className="bg-black/30 p-2 rounded block text-sm">&lt;p&gt;This is &lt;em&gt;correct&lt;/em&gt;&lt;/p&gt;</code>
            </div>
            <div className="bg-red-900/10 border border-red-500/20 p-6 rounded-xl">
              <h4 className="font-bold text-red-400 mb-2">❌ Incorrect Nesting</h4>
              <p className="text-sm mb-4">The tags overlap. The browser has to guess how to fix this.</p>
              <code className="bg-black/30 p-2 rounded block text-sm">&lt;p&gt;This is &lt;em&gt;wrong&lt;/p&gt;&lt;/em&gt;</code>
            </div>
          </div>

          <p>
            <strong>The "Foster Parenting" Effect:</strong> If you mess up nesting, browsers try to be helpful. They use a process called "foster parenting" to move elements around to make the HTML valid. However, this often breaks your CSS layout or JavaScript functionality because the elements aren't where you think they are in the DOM tree. Always validate your nesting!
          </p>
        </Section>

        <Section title="Empty (Void) Elements" icon={Tag}>
          <p>
            Most elements wrap content, but some elements <em>are</em> the content. An image, for example, doesn't contain text; it points to a file. A line break doesn't contain text; it <em>is</em> the break.
          </p>
          <p>
            These are called <strong>Void Elements</strong> or Empty Elements. In HTML5, they do not require a closing tag. In strict XHTML (an older standard), they required a self-closing slash (e.g., <code>&lt;br /&gt;</code>). Today, the slash is optional, but many developers still use it out of habit or for compatibility with React (JSX), which requires it.
          </p>
          <ul className="space-y-4 mt-6">
            <li className="flex items-start gap-3 bg-gray-900 p-4 rounded-lg border border-gray-800">
              <span className="font-mono text-orange-400 font-bold">&lt;img&gt;</span>
              <span className="text-sm text-gray-400">Embeds an image. It cannot have child elements. You can't put text "inside" an image tag.</span>
            </li>
            <li className="flex items-start gap-3 bg-gray-900 p-4 rounded-lg border border-gray-800">
              <span className="font-mono text-orange-400 font-bold">&lt;input&gt;</span>
              <span className="text-sm text-gray-400">Creates a field for user data. The value is stored in an attribute, not as inner content.</span>
            </li>
            <li className="flex items-start gap-3 bg-gray-900 p-4 rounded-lg border border-gray-800">
              <span className="font-mono text-orange-400 font-bold">&lt;hr&gt;</span>
              <span className="text-sm text-gray-400">A thematic break. Historically a "Horizontal Rule" (line), but semantically a topic shift.</span>
            </li>
          </ul>
        </Section>

        <Section title="Case Sensitivity & Best Practices" icon={AlertTriangle}>
          <p>
            HTML tags are <strong>case-insensitive</strong>. The browser treats <code>&lt;P&gt;</code>, <code>&lt;p&gt;</code>, and <code>&lt;P&gt;</code> exactly the same. However, the professional standard is strictly <strong>lowercase</strong>.
          </p>
          <div className="bg-blue-900/10 border border-blue-500/20 p-6 rounded-xl my-6">
             <h4 className="text-blue-400 font-bold mb-2">Why Lowercase?</h4>
             <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
               <li><strong>Readability:</strong> Lowercase is generally easier to scan in large blocks of code.</li>
               <li><strong>Consistency:</strong> XHTML and modern frameworks like React often enforce or strongly prefer lowercase or camelCase specific conventions.</li>
               <li><strong>Future Proofing:</strong> Developing the muscle memory for strict syntax helps when you move to stricter languages like JavaScript or XML.</li>
             </ul>
          </div>
          <p>
            The only time you will see MixedCase in web development is usually in <strong>React Components</strong> (e.g., <code>&lt;MyComponent /&gt;</code>) to distinguish them from built-in HTML elements.
          </p>
        </Section>
        
        <img src={DocStructureImg} alt="Structure Analogy" className="w-full rounded-xl border border-gray-800 opacity-80 mb-12" />

      </div>

      <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
        <Link to="../structure" className="flex items-center gap-2 text-gray-500 hover:text-white"><ArrowLeft size={16}/> Document Structure</Link>
        <Link to="../attributes" className="flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300">Next: Attributes <ArrowRight size={16}/></Link>
      </div>
    </article>
  );
};

export default HTMLElements;