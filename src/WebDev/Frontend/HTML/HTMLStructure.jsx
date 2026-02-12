import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Layout, FileText, Code, GitBranch, Layers, 
  Eye, Globe, Database, Box, Sidebar, 
  CheckCircle, AlertTriangle, Terminal, ArrowLeft, ArrowRight
} from 'lucide-react';

import SEO from "../../../components/SEO";

// --- Image Imports ---
import DocStructureImg from "../../../assets/WebDev/document_structure_analogy.jpeg";
import HTMLSkeletonImg from "../../../assets/WebDev/html5_skeleton_diagram.jpeg";
import HeadVsBodyImg from "../../../assets/WebDev/head_vs_body.jpeg";
import SemanticLayoutImg from "../../../assets/WebDev/semantic_layout_example.jpeg";

// --- Local Components for Styling ---

const Section = ({ title, icon: Icon, children, id }) => (
  <section id={id} className="relative mb-20 scroll-mt-24">
    <div className="flex items-center gap-3 mb-8">
      <div className="p-3 bg-gradient-to-br from-orange-500/20 to-orange-500/20 rounded-xl border border-orange-500/30 text-orange-400">
        <Icon size={28} />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
        {title}
      </h2>
    </div>
    {children}
  </section>
);

const HighlightBox = ({ title, children, color = "blue" }) => {
  const colors = {
    blue: "from-blue-500/10 to-cyan-500/10 border-blue-500/30 text-blue-300",
    orange: "from-orange-500/10 to-red-500/10 border-orange-500/30 text-orange-300",
    green: "from-green-500/10 to-emerald-500/10 border-green-500/30 text-green-300",
    purple: "from-purple-500/10 to-pink-500/10 border-purple-500/30 text-purple-300",
    red: "from-red-500/10 to-pink-500/10 border-red-500/30 text-red-300",
  };
  
  return (
    <div className={`p-6 rounded-2xl bg-gradient-to-br ${colors[color]} border backdrop-blur-sm shadow-lg mb-6`}>
      <h4 className="text-lg font-bold mb-3 text-white flex items-center gap-2">
        {title}
      </h4>
      <div className="text-gray-300 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
};

const LocalCodeBlock = ({ title, code, output, language = "html", outputLabel = "Browser Output" }) => {
  return (
    <div className="my-8 w-full rounded-xl overflow-hidden bg-[#0d1117] border border-gray-800 shadow-2xl group ring-1 ring-white/5">
      <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-gray-800">
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
          </div>
          <span className="text-xs font-bold text-gray-400 font-mono tracking-wide">
            {title}
          </span>
        </div>
        <span className="text-[10px] font-bold text-gray-500 uppercase bg-gray-800 px-2 py-0.5 rounded border border-gray-700">
          {language}
        </span>
      </div>
      <div className="p-5 overflow-x-auto font-mono text-sm leading-relaxed scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
        <pre className="text-gray-300 whitespace-pre-wrap">
          <code>{code}</code>
        </pre>
      </div>
      {output && (
        <div className="border-t border-gray-800 bg-white text-black p-6">
          <div className="text-xs text-gray-500 font-bold uppercase mb-3 select-none flex items-center gap-2">
            <Eye size={12} /> {outputLabel}
          </div>
          <div className="font-sans text-base border border-gray-200 rounded p-4 bg-gray-50 shadow-sm">
            {output}
          </div>
        </div>
      )}
    </div>
  );
};

// --- Main Component ---

const HTMLStructure = () => {
  return (
    <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
      <SEO 
        title="Structure of an HTML Document: The Beginner's Guide"
        description="Learn the anatomy of an HTML document. Master the DOCTYPE, head, body, and semantic tags to build structured, accessible, and SEO-friendly web pages."
        keywords="html structure, html document skeleton, html5 doctype, head vs body, semantic html, html tags and attributes"
        url="/webdevelopment/html/structure"
      />

      {/* Hero Header */}
      <header className="py-12 text-center md:text-left border-b border-gray-800 mb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 opacity-10 transform translate-x-1/4 -translate-y-1/4">
          <Layout size={400} className="text-blue-900" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase tracking-wider border border-orange-500/20 mb-4 inline-block">
            Module 2: Document Structure
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            The Structure of an <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">HTML Document</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Just like a house needs a blueprint and a human needs a skeleton, every web page relies on a specific structure to hold it together.
          </p>
        </motion.div>
      </header>

      <div className="prose prose-invert prose-lg max-w-none">
        
        {/* 1. Why Structure Matters */}
        <Section title="1. Why Document Structure Matters" icon={FileText} id="why-structure">
          <p>
            Imagine trying to read a newspaper where the headlines were the same size as the articles, the photos were randomly scattered, and there were no page numbers. It would be chaos. You read structured documents every day without thinking about it:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-400">
            <li><strong>Newspapers</strong> have mastheads, headlines, bylines, and columns.</li>
            <li><strong>Insurance forms</strong> have sections for personal details, medical history, and declarations.</li>
            <li><strong>Shop catalogs</strong> are divided into departments, categories, and product items.</li>
          </ul>
          <p>
            That structure is what makes content readable, navigable, and understandable. Web pages are simply electronic documents, and they require the same level of organization.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
             <HighlightBox title="For Humans" color="blue">
               Structure helps us scan content visually. We look for big text (headings) to know what a section is about before committing to reading the small text (paragraphs).
             </HighlightBox>
             <HighlightBox title="For Machines" color="green">
               Browsers, search engines (Google), and assistive tools (Screen Readers) rely entirely on code structure to "understand" what part of the page is the title, the content, or the menu.
             </HighlightBox>
          </div>

          <div className="my-8 rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
            <img 
              src={DocStructureImg} 
              alt="Comparison of a newspaper structure vs website structure" 
              className="w-full h-auto object-cover opacity-90"
            />
            <div className="bg-gray-900 p-3 text-center text-xs text-gray-500">
              Figure 1: Visualizing how physical document structures translate to the web.
            </div>
          </div>
        </Section>

        {/* 2. What is HTML? */}
        <Section title="2. HTML & Markup Mechanics" icon={Code} id="what-is-markup">
          <p>
            <strong>HTML (HyperText Markup Language)</strong> is not a programming language in the sense of Python or Java; it doesn't "calculate" things. It is a <em>markup</em> language. "Markup" means you take plain text and wrap it in special codes to give it meaning.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">The Anatomy of a Tag</h3>
              <p className="text-gray-400">Tags are the keywords enclosed in angle brackets. Most come in pairs.</p>
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 font-mono text-lg">
                <span className="text-gray-500">&lt;</span>
                <span className="text-blue-400">p</span>
                <span className="text-gray-500">&gt;</span>
                <span className="text-white mx-2">Hello World</span>
                <span className="text-gray-500">&lt;/</span>
                <span className="text-blue-400">p</span>
                <span className="text-gray-500">&gt;</span>
              </div>
              <ul className="text-sm space-y-2 text-gray-400 mt-2">
                <li><code className="text-blue-400">&lt;p&gt;</code> : The <strong>Opening Tag</strong> (Start).</li>
                <li><code className="text-white">Hello World</code> : The <strong>Content</strong>.</li>
                <li><code className="text-blue-400">&lt;/p&gt;</code> : The <strong>Closing Tag</strong> (End).</li>
              </ul>
            </div>
            
            <div className="space-y-4">
               <h3 className="text-xl font-bold text-white">Elements vs. Tags</h3>
               <p className="text-gray-400">Strictly speaking, the "tag" is just the code bit. The "element" is the whole package.</p>
               <HighlightBox title="Definitions" color="purple">
                 <strong>Tag:</strong> Just the <code>&lt;h1&gt;</code> part.<br/>
                 <strong>Element:</strong> The entire <code>&lt;h1&gt;Title&lt;/h1&gt;</code> block.
               </HighlightBox>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mt-10 mb-4">The Power of Attributes</h3>
          <p>
            Elements can have <strong>attributes</strong> to provide extra information that doesn't appear directly on the screen but changes how the element behaves.
          </p>

          <LocalCodeBlock 
            title="Attributes Example" 
            language="html"
            code={`<p lang="en">This paragraph is in English.</p>

<img src="photo.jpg" alt="A beautiful landscape" />`}
            output={null}
          />
          
          <p className="text-sm text-gray-400">
            <strong>Note:</strong> Attributes always go in the <em>opening</em> tag and usually follow the format <code>name="value"</code>. Also, notice the <code>&lt;img&gt;</code> tag? It's an <strong>Empty (Void) Element</strong>—it doesn't have a closing tag because it doesn't hold text content inside it.
          </p>
        </Section>

        {/* 3. The Skeleton */}
        <Section title="3. The HTML5 Document Skeleton" icon={GitBranch} id="skeleton">
          <p>
            Every modern web page starts with a standard boilerplate. If you memorize nothing else, memorize this structure. It is the canvas upon which you will paint everything else.
          </p>

          <LocalCodeBlock 
            title="Basic HTML5 Template"
            language="html"
            code={`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Web Page</title>
  </head>
  <body>
    <h1>This is the Main Heading</h1>
    <p>This text is an introduction to the rest of the page.</p>
    
    <h2>This is a Subheading</h2>
    <p>Subheadings help organize longer content.</p>
  </body>
</html>`}
            outputLabel="Browser View"
            output={
              <div className="font-sans">
                 <h1 className="text-3xl font-bold mb-4 border-b pb-2">This is the Main Heading</h1>
                 <p className="mb-6">This text is an introduction to the rest of the page.</p>
                 <h2 className="text-2xl font-bold mb-3">This is a Subheading</h2>
                 <p>Subheadings help organize longer content.</p>
              </div>
            }
          />
          
          <div className="mt-8 flex justify-center">
             <img 
               src={HTMLSkeletonImg} 
               alt="Diagram of the HTML5 Document Skeleton" 
               className="rounded-xl border border-gray-700 shadow-2xl max-w-full"
             />
          </div>
        </Section>

        {/* 4. Line by Line Breakdown */}
        <Section title="4. Detailed Breakdown" icon={Layers} id="breakdown">
          <p>Let's dismantle the skeleton to understand the function of every single bone.</p>

          <div className="space-y-12 mt-8">
            {/* DOCTYPE */}
            <div className="relative pl-8 border-l-2 border-orange-500/30">
              <h3 className="text-2xl font-bold text-white mb-2">4.1 The DOCTYPE</h3>
              <code className="bg-gray-800 px-2 py-1 rounded text-orange-400">&lt;!DOCTYPE html&gt;</code>
              <p className="mt-4">
                This is <strong>not</strong> an HTML tag; it's an instruction to the web browser. It tells the browser, "This document is written in modern HTML5." 
              </p>
              <p className="mt-2 text-sm text-gray-400">
                In the old days (HTML 4.01), this line used to be huge and complex. Now, it's just two words. If you omit this, browsers enter "Quirks Mode," where they try to emulate bugs from 1990s browsers to keep old sites working—you definitely don't want that for a modern site.
              </p>
            </div>

            {/* ROOT */}
            <div className="relative pl-8 border-l-2 border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-2">4.2 The Root Element</h3>
              <code className="bg-gray-800 px-2 py-1 rounded text-blue-400">&lt;html lang="en"&gt; ... &lt;/html&gt;</code>
              <p className="mt-4">
                This element wraps <strong>everything</strong> else. It is the root of the tree.
              </p>
              <HighlightBox title="Why lang='en'?" color="blue">
                Defining the language (<code>lang="en"</code>, <code>lang="es"</code>, etc.) is critical for accessibility. It tells screen readers which accent to use when reading aloud, and it tells search engines what language the content is in.
              </HighlightBox>
            </div>

            {/* HEAD */}
            <div className="relative pl-8 border-l-2 border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-2">4.3 The Head (Metadata)</h3>
              <code className="bg-gray-800 px-2 py-1 rounded text-purple-400">&lt;head&gt; ... &lt;/head&gt;</code>
              <p className="mt-4">
                The <code>&lt;head&gt;</code> contains <strong>metadata</strong>—data about data. Nothing inside the head is displayed directly on the page canvas. It is the "brain" of the document.
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-400">
                <li><code>&lt;meta charset="UTF-8"&gt;</code>: Essential. It allows your page to display emojis, accents, and characters from almost all human languages without turning into garbage text.</li>
                <li><code>&lt;title&gt;</code>: The text that appears in the <strong>browser tab</strong> and the blue link in <strong>Google search results</strong>.</li>
              </ul>
            </div>

            {/* BODY */}
            <div className="relative pl-8 border-l-2 border-green-500/30">
              <h3 className="text-2xl font-bold text-white mb-2">4.4 The Body (Visible Content)</h3>
              <code className="bg-gray-800 px-2 py-1 rounded text-green-400">&lt;body&gt; ... &lt;/body&gt;</code>
              <p className="mt-4">
                The <code>&lt;body&gt;</code> contains everything the user actually <strong>sees</strong> and interacts with. If you put text outside the body, the browser might try to fix it for you, but it's invalid code.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-xl overflow-hidden border border-gray-800">
            <img 
              src={HeadVsBodyImg} 
              alt="Head vs Body visualization" 
              className="w-full h-auto object-cover opacity-80"
            />
          </div>
        </Section>

        {/* 5. Structuring Content */}
        <Section title="5. Structuring Content Inside Body" icon={Box} id="content-structure">
          <p>
            Inside the body, you don't just dump text. You use specific elements to mirror the logical structure of your information.
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div>
               <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                 <Terminal size={18} className="text-blue-400"/> Headings (h1-h6)
               </h4>
               <p className="text-sm text-gray-400 mb-4">
                 Use <code>&lt;h1&gt;</code> for the main page title (only one per page!). Use <code>&lt;h2&gt;</code> for major sections, and <code>&lt;h3&gt;</code> for subsections. This hierarchy allows users to "skim" the document.
               </p>
               <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                 <Terminal size={18} className="text-blue-400"/> Paragraphs (p)
               </h4>
               <p className="text-sm text-gray-400 mb-4">
                 Blocks of text go here. Browsers automatically add breathing room (margin) before and after paragraphs to improve readability.
               </p>
            </div>
            <div>
               <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                 <Terminal size={18} className="text-blue-400"/> Lists (ul, ol, li)
               </h4>
               <p className="text-sm text-gray-400 mb-4">
                 Use <code>&lt;ul&gt;</code> for bullet points (unordered) and <code>&lt;ol&gt;</code> for numbered steps (ordered). Each item inside must be wrapped in a <code>&lt;li&gt;</code> (list item) tag.
               </p>
               <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                 <Terminal size={18} className="text-blue-400"/> Media & Links
               </h4>
               <p className="text-sm text-gray-400 mb-4">
                 <code>&lt;a href="..."&gt;</code> connects your page to the rest of the web. <code>&lt;img&gt;</code> embeds visuals.
               </p>
            </div>
          </div>

          <LocalCodeBlock 
            title="Content Structure Example"
            language="html"
            code={`<body>
  <h1>News: City Marathon 2026</h1>
  <p>Thousands of runners joined the event.</p>
  
  <h2>Race Results</h2>
  <ul>
    <li>Winner: Jane Doe (2h 15m)</li>
    <li>Runner up: John Smith (2h 18m)</li>
  </ul>

  <p>See <a href="/photos">photos</a> of the event.</p>
</body>`}
            output={
               <div className="font-sans text-black">
                 <h1 className="text-2xl font-bold mb-2">News: City Marathon 2026</h1>
                 <p className="mb-4">Thousands of runners joined the event.</p>
                 <h2 className="text-xl font-bold mb-2">Race Results</h2>
                 <ul className="list-disc pl-5 mb-4">
                   <li>Winner: Jane Doe (2h 15m)</li>
                   <li>Runner up: John Smith (2h 18m)</li>
                 </ul>
                 <p>See <a href="#" className="text-blue-600 underline">photos</a> of the event.</p>
               </div>
            }
          />
        </Section>

        {/* 6. Semantic Layout */}
        <Section title="6. Semantic Layout (A Glimpse)" icon={Sidebar} id="semantics">
           <p>
             As you advance, you will stop using generic containers for everything. You will start using <strong>Semantic Elements</strong>. These tags clearly describe their meaning to both the developer and the browser.
           </p>

           <div className="grid md:grid-cols-2 gap-8 items-center mt-8">
             <div className="space-y-4">
               <ul className="space-y-3">
                 <li className="flex items-center gap-3 bg-gray-900 p-3 rounded border border-gray-800">
                   <code className="text-pink-400 font-bold">&lt;header&gt;</code>
                   <span className="text-gray-400 text-sm">Introductory content, logos, navigation.</span>
                 </li>
                 <li className="flex items-center gap-3 bg-gray-900 p-3 rounded border border-gray-800">
                   <code className="text-pink-400 font-bold">&lt;nav&gt;</code>
                   <span className="text-gray-400 text-sm">Links to other pages.</span>
                 </li>
                 <li className="flex items-center gap-3 bg-gray-900 p-3 rounded border border-gray-800">
                   <code className="text-pink-400 font-bold">&lt;main&gt;</code>
                   <span className="text-gray-400 text-sm">The dominant content of the body.</span>
                 </li>
                 <li className="flex items-center gap-3 bg-gray-900 p-3 rounded border border-gray-800">
                   <code className="text-pink-400 font-bold">&lt;footer&gt;</code>
                   <span className="text-gray-400 text-sm">Copyright, contact info, sitemap.</span>
                 </li>
               </ul>
             </div>
             
             <div className="rounded-xl overflow-hidden border border-gray-800 shadow-lg">
                <img 
                  src={SemanticLayoutImg} 
                  alt="Semantic HTML Layout Diagram" 
                  className="w-full h-auto"
                />
             </div>
           </div>
        </Section>

        {/* 7. Practice */}
        <Section title="7. Practice: Create Your Own" icon={CheckCircle} id="practice">
          <p>
            The best way to learn is to do. Follow these steps to create your very first HTML file on your computer.
          </p>

          <div className="bg-[#1e293b] p-6 rounded-xl border border-gray-700 space-y-4">
             <div className="flex gap-4">
               <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center font-bold text-white">1</div>
               <p>Create a new file on your desktop named <code>index.html</code>.</p>
             </div>
             <div className="flex gap-4">
               <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center font-bold text-white">2</div>
               <p>Open the file with a text editor (Notepad, TextEdit, or VS Code).</p>
             </div>
             <div className="flex gap-4">
               <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center font-bold text-white">3</div>
               <p>Copy the code skeleton from Section 3 above and paste it in.</p>
             </div>
             <div className="flex gap-4">
               <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center font-bold text-white">4</div>
               <p>Save the file, then double-click it. It will open in your default web browser.</p>
             </div>
          </div>
          
          
        </Section>

      </div>
      
     {/* Navigation Footer */}
      <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col-reverse md:flex-row md:justify-between items-center gap-4 md:gap-0">
        <Link 
          to="/webdevelopment/html/intro"
          className="group flex items-center gap-4 px-4 md:px-6 py-2 md:py-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-orange-500 transition-all w-full md:w-auto"
        >
          <div className="p-2 bg-orange-500/10 rounded-full text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all flex-shrink-0">
            <ArrowLeft size={20} />
          </div>
          <div className="text-left">
            <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Previous Module</span>
            <div className="text-white font-bold group-hover:text-orange-400 transition-colors">Introduction of HTML</div>
          </div>
        </Link>
        <Link 
          to="/webdevelopment/html/elements"
          className="group flex items-center justify-between gap-4 px-4 md:px-6 py-2 md:py-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-orange-500 transition-all w-full md:w-auto"
        >
          <div className="text-right">
            <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Next Module</span>
            <div className="text-white font-bold group-hover:text-orange-400 transition-colors">Text and Content Elements</div>
          </div>
          <div className="p-2 bg-orange-500/10 rounded-full text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all flex-shrink-0">
            <ArrowRight size={20} />
          </div>
        </Link>
      </div>
    </article>
  );
};

export default HTMLStructure;