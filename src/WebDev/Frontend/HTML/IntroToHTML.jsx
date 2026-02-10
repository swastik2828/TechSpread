import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FileCode, Hash, Tag, Layout, Layers, Globe, 
  History, Settings, Play, Database, ShieldCheck, 
  ArrowLeft, Terminal, Code, Cpu, Eye,
  ArrowRight
} from 'lucide-react';

import SEO from "../../../components/SEO";

// --- Image Imports ---
// Please ensure these images exist in src/assets/WebDev/ and are JPEGs
import HTMLStructureImg from "../../../assets/WebDev/html_structure_visual.jpeg";
import HTMLHistoryImg from "../../../assets/WebDev/html_history_timeline.jpeg";
import BrowserFlowImg from "../../../assets/WebDev/html_browser_flow.jpeg";
import HTMLSkeletonImg from "../../../assets/WebDev/html_document_skeleton.jpeg";
import HTMLCssJsImg from "../../../assets/WebDev/html_css_js_cooperation.jpeg";

// --- Local Components for Styling ---

const Section = ({ title, icon: Icon, children, id }) => (
  <section id={id} className="relative mb-20 scroll-mt-24">
    <div className="flex items-center gap-3 mb-8">
      <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl border border-orange-500/30 text-orange-400">
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
  };
  
  return (
    <div className={`p-6 rounded-2xl bg-gradient-to-br ${colors[color]} border backdrop-blur-sm shadow-lg`}>
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
      {/* Header */}
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

      {/* Code Area */}
      <div className="p-5 overflow-x-auto font-mono text-sm leading-relaxed scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
        <pre className="text-gray-300 whitespace-pre-wrap">
          <code>{code}</code>
        </pre>
      </div>

      {/* Output Area */}
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

const IntroToHTML = () => {
  const navigate = useNavigate();

  return (
    <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
      <SEO 
        title="Introduction to HTML: The Web's Core Language"
        description="Start your web development journey here. Learn what HTML is, how it structures the web, and master tags, attributes, and the DOM."
        keywords="introduction to html, html tags, html structure, web development for beginners, html attributes, what is html"
        url="/webdevelopment/html/intro"
      />

     

      {/* Hero Header */}
      <header className="py-12 text-center md:text-left border-b border-gray-800 mb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 opacity-20 transform translate-x-1/4 -translate-y-1/4">
          <FileCode size={400} className="text-orange-900" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase tracking-wider border border-orange-500/20 mb-4 inline-block">
            Module 1: Introduction
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Introduction to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">HTML</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Every great journey begins with a single step. On the web, that step is HTML. 
            Before you build complex apps, you must master the language that structures them.
          </p>
        </motion.div>
      </header>

      <div className="prose prose-invert prose-lg max-w-none">
        <p className="lead text-xl text-gray-300 mb-12">
          <strong>HyperText Markup Language (HTML)</strong> is the core language used to structure content on the web. Every web page you open in a browser—whether it looks simple or highly interactive—starts as an HTML document. HTML does not “run” like a programming language; instead, it describes what each piece of content is and how it fits into the overall page. Browsers then interpret this description to render text, images, links, forms, and application interfaces on the screen.
        </p>

        {/* 1. What HTML Actually Does */}
        <Section title="1. What HTML Actually Does" icon={Layers} id="what-html-does">
          <p>
            HTML’s primary role is to define the <strong>meaning</strong> and <strong>structure</strong> of content, not its visual design or interactive behavior. Think of HTML as the steel frame of a skyscraper. It holds everything together and defines where the rooms, windows, and doors go.
          </p>
          <p>
            For example, HTML distinguishes between a heading, a paragraph, a quote, a navigation menu, a table of data, and a form control. Each of these concepts is represented by an element, written using tags such as <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;blockquote&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;table&gt;</code>, or <code>&lt;input&gt;</code>.
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-8">
             <HighlightBox title="HTML (Structure)" color="orange">
                Defines <em>what</em> things are. <br/>
                "This is a button." <br/>
                "This is an image."
             </HighlightBox>
             <HighlightBox title="CSS (Presentation)" color="blue">
                Defines <em>how</em> things look. <br/>
                "The button is blue." <br/>
                "The image is round."
             </HighlightBox>
             <HighlightBox title="JavaScript (Behavior)" color="green">
                Defines <em>how</em> things act. <br/>
                "Clicking the button sends data."
             </HighlightBox>
          </div>

          {/* New Image Added */}
          <div className="my-8 rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
            <img 
              src={HTMLStructureImg} 
              alt="Visualizing HTML Structure vs CSS Presentation" 
              className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
            />
            <div className="bg-gray-900 p-3 text-center text-xs text-gray-500">
              Figure 1: The separation of concerns in modern web development.
            </div>
          </div>

          <p>
            A well-built page uses HTML for structure, CSS for presentation, and JavaScript for behavior, keeping each concern separate. This separation makes code easier to maintain and ensures that if one part fails, the content is still accessible.
          </p>
        </Section>

        {/* 2. History & Standards */}
        <Section title="2. History & The Role of Standards" icon={History} id="history">
          <p>
            HTML was originally created in the early 1990s by <strong>Tim Berners‑Lee</strong> as a simple way to share linked scientific documents over the World Wide Web. As the web grew, formal standardization passed through different organizations, most notably the World Wide Web Consortium (W3C).
          </p>
          <p>
            Over time, more and more features were added: tables, forms, multimedia support, and APIs for web applications. Today, the living HTML standard is maintained primarily by the <strong>WHATWG</strong> (Web Hypertext Application Technology Working Group), in collaboration with the W3C.
          </p>
          
          <div className="bg-gray-900/50 border-l-4 border-orange-500 p-6 rounded-r-xl my-6">
            <h4 className="text-lg font-bold text-white mb-2">The "Living Standard"</h4>
            <p className="text-sm text-gray-400">
              There is no longer a strict “HTML5 vs HTML6” distinction. Instead, there is one evolving HTML specification that browsers implement and update continuously. For you as a learner, this means the syntax you learn today is stable, but new features will continue to appear.
            </p>
          </div>

          {/* New Image Added */}
          <div className="mb-8 rounded-xl overflow-hidden border border-gray-800">
             <img 
               src={HTMLHistoryImg} 
               alt="Timeline of HTML History" 
               className="w-full h-auto object-cover opacity-80"
             />
          </div>
        </Section>

        {/* 3. Browser Processing */}
        <Section title="3. How Browsers Process HTML" icon={Cpu} id="browser-processing">
          <p>
            When you enter a URL, the browser doesn't just "show" the file. It goes through a complex rendering process:
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center my-10">
            <div className="relative pl-8 border-l border-gray-800 space-y-8">
              <div className="relative">
                 <span className="absolute -left-[41px] flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full ring-4 ring-gray-900 text-orange-400 font-bold text-sm">1</span>
                 <h4 className="text-lg font-bold text-white">Fetch</h4>
                 <p className="text-gray-400 text-sm">Requests the HTML document from a server.</p>
              </div>
              <div className="relative">
                 <span className="absolute -left-[41px] flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full ring-4 ring-gray-900 text-orange-400 font-bold text-sm">2</span>
                 <h4 className="text-lg font-bold text-white">Parse</h4>
                 <p className="text-gray-400 text-sm">Reads the HTML from top to bottom, recognizing tags, attributes, and text.</p>
              </div>
              <div className="relative">
                 <span className="absolute -left-[41px] flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full ring-4 ring-gray-900 text-orange-400 font-bold text-sm">3</span>
                 <h4 className="text-lg font-bold text-white">Build DOM</h4>
                 <p className="text-gray-400 text-sm">Creates a <strong>Document Object Model (DOM)</strong>—an internal tree where each element becomes a node.</p>
              </div>
              <div className="relative">
                 <span className="absolute -left-[41px] flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full ring-4 ring-gray-900 text-orange-400 font-bold text-sm">4</span>
                 <h4 className="text-lg font-bold text-white">Render</h4>
                 <p className="text-gray-400 text-sm">Applies CSS rules and paints pixels to the screen.</p>
              </div>
            </div>
            
            {/* New Image Added */}
            <div className="bg-black/20 p-2 rounded-xl border border-gray-800">
               <img 
                 src={BrowserFlowImg} 
                 alt="Browser Rendering Process Diagram" 
                 className="rounded-lg w-full h-auto"
               />
            </div>
          </div>

          <p>
             A deep understanding of HTML is essentially an understanding of how that structure is defined and how it maps to the DOM that JavaScript and CSS operate on.
          </p>
        </Section>

        {/* 4. Elements, Tags, Attributes */}
        <Section title="4. Elements, Tags, and Attributes" icon={Tag} id="elements-tags">
          <p>Three core concepts underpin every HTML document:</p>
          
          <div className="grid md:grid-cols-2 gap-8 my-8">
             <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">The Anatomy of an Element</h3>
                <p>An <strong>Element</strong> is the complete structure. It consists of a start tag, content, and an end tag.</p>
                <LocalCodeBlock 
                  title="Element Structure" 
                  language="html"
                  code={`<p class="greeting">Hello World</p>`}
                  output={null}
                />
                <ul className="text-sm space-y-2 list-disc list-inside text-gray-400">
                  <li><strong>Start Tag:</strong> <code>&lt;p&gt;</code></li>
                  <li><strong>Attribute:</strong> <code>class="greeting"</code></li>
                  <li><strong>Content:</strong> Hello World</li>
                  <li><strong>End Tag:</strong> <code>&lt;/p&gt;</code></li>
                </ul>
             </div>

             <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Attributes</h3>
                <p><strong>Attributes</strong> provide extra information. They are always written in the start tag as name-value pairs.</p>
                <div className="bg-gray-900 p-4 rounded-xl border border-gray-800 text-sm space-y-3">
                   <div className="flex items-start gap-2">
                     <code className="text-orange-400">id="main"</code>
                     <span>Unique identifier for an element.</span>
                   </div>
                   <div className="flex items-start gap-2">
                     <code className="text-blue-400">src="img.png"</code>
                     <span>Source path for images/media.</span>
                   </div>
                   <div className="flex items-start gap-2">
                     <code className="text-green-400">href="url"</code>
                     <span>Destination link for anchors.</span>
                   </div>
                </div>
             </div>
          </div>

          <p>
            <strong>Key Note on Nesting:</strong> Elements can contain other elements. Proper nesting (closing elements in the reverse order they were opened) is essential. Also, remember <strong>Empty Elements</strong> like <code>&lt;br&gt;</code> or <code>&lt;img&gt;</code> have no closing tag.
          </p>
        </Section>

        {/* 5. The Document Skeleton */}
        <Section title="5. The Basic HTML Document Skeleton" icon={Layout} id="skeleton">
          <p>
            Every modern HTML document follows a standard structure. This "boilerplate" code ensures browsers know how to read your file.
          </p>

          <LocalCodeBlock 
            title="index.html"
            language="html"
            code={`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Page</title>
  </head>
  <body>
    <h1>Welcome to the Web</h1>
    <p>This is where the visible content goes.</p>
  </body>
</html>`}
            outputLabel="Browser Tab & Viewport"
            output={
              <div className="font-sans">
                 <h1 className="text-2xl font-bold mb-2">Welcome to the Web</h1>
                 <p>This is where the visible content goes.</p>
              </div>
            }
          />

          <div className="grid gap-4 mt-6 text-sm">
             <HighlightBox title="<!DOCTYPE html>" color="purple">
               Not an HTML tag, but an instruction to the browser that this is a modern HTML5 document.
             </HighlightBox>
             <HighlightBox title="<head>" color="blue">
               Contains metadata: The Title (shown in tabs), character sets (UTF-8), and links to CSS/JS files. Users don't see this directly in the viewport.
             </HighlightBox>
             <HighlightBox title="<body>" color="green">
               Contains everything the user <em>sees</em>: text, images, buttons, and layout containers.
             </HighlightBox>
          </div>

          {/* New Image Added */}
          <div className="mt-8 flex justify-center">
             <img 
               src={HTMLSkeletonImg} 
               alt="Anatomy of an HTML Document" 
               className="rounded-xl border border-gray-700 shadow-2xl max-w-full md:max-w-2xl"
             />
          </div>
        </Section>

        {/* 6. Categories of Elements */}
        <Section title="6. Categories of Common HTML Elements" icon={Database} id="categories">
          <p>
            To reason about HTML effectively, categorize elements by their function rather than memorizing a flat list.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {[
              { title: "Text & Structure", tags: "h1-h6, p, ul, ol, li, blockquote", desc: "Defines hierarchy and reading flow." },
              { title: "Links & Navigation", tags: "a, nav, link", desc: "Connects pages and resources together." },
              { title: "Media", tags: "img, video, audio, figure", desc: "Embeds rich content into the page." },
              { title: "Forms & Input", tags: "form, input, button, select, textarea", desc: "Allows users to send data to the server." },
              { title: "Sectioning", tags: "header, footer, main, section, article", desc: "Describes the logical regions of a layout." },
              { title: "Embedded Content", tags: "iframe, canvas, svg", desc: "Advanced graphics and external windows." }
            ].map((cat, i) => (
              <div key={i} className="p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-orange-500/50 transition-colors">
                <h4 className="font-bold text-white mb-1">{cat.title}</h4>
                <code className="text-xs text-orange-400 block mb-2">{cat.tags}</code>
                <p className="text-sm text-gray-400">{cat.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 7. Integration */}
        <Section title="7. HTML, CSS, and JavaScript Together" icon={Code} id="integration">
          <p>
            In real-world applications, these three technologies collaborate closely.
          </p>
          <ul className="list-disc pl-5 space-y-3 mb-6 text-gray-400">
             <li><strong>HTML:</strong> Provides the structure ("This is a product card").</li>
             <li><strong>CSS:</strong> Provides the presentation ("The card has a shadow and rounded corners").</li>
             <li><strong>JavaScript:</strong> Adds behavior ("Add to cart when clicked").</li>
          </ul>

          <div className="my-8">
             {/* New Image Added */}
             <img 
               src={HTMLCssJsImg} 
               alt="How HTML, CSS, and JS Work Together" 
               className="w-full rounded-xl border border-gray-800 shadow-lg mb-6"
             />
             
             <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 bg-gray-900 p-4 rounded border border-gray-800">
                  <span className="text-orange-500 font-bold block mb-2">HTML</span>
                  <pre className="text-xs text-gray-500">
                    &lt;button&gt;Click Me&lt;/button&gt;
                  </pre>
                </div>
                <div className="flex items-center justify-center text-gray-600">+</div>
                <div className="flex-1 bg-gray-900 p-4 rounded border border-gray-800">
                  <span className="text-blue-500 font-bold block mb-2">CSS</span>
                  <pre className="text-xs text-gray-500">
                    button &#123; color: red; &#125;
                  </pre>
                </div>
                <div className="flex items-center justify-center text-gray-600">+</div>
                 <div className="flex-1 bg-gray-900 p-4 rounded border border-gray-800">
                  <span className="text-green-500 font-bold block mb-2">JS</span>
                  <pre className="text-xs text-gray-500">
                    btn.onclick = save();
                  </pre>
                </div>
             </div>
          </div>
        </Section>

        {/* 8. Best Practices */}
        <Section title="8. Good Practices for Writing HTML" icon={ShieldCheck} id="best-practices">
          <p>
            Even at the introductory stage, cultivating good habits leads to professional‑grade HTML.
          </p>

          <div className="space-y-4">
            <div className="bg-green-900/10 border border-green-500/20 p-4 rounded-lg">
              <h4 className="font-bold text-green-400 flex items-center gap-2">
                <span className="text-xl">✓</span> Use Semantic Elements
              </h4>
              <p className="text-sm mt-1">
                Prefer <code>&lt;nav&gt;</code> for menus and <code>&lt;main&gt;</code> for content instead of generic <code>&lt;div&gt;</code> tags. This helps search engines understand your page.
              </p>
            </div>

            <div className="bg-green-900/10 border border-green-500/20 p-4 rounded-lg">
              <h4 className="font-bold text-green-400 flex items-center gap-2">
                <span className="text-xl">✓</span> Maintain Hierarchy
              </h4>
              <p className="text-sm mt-1">
                Use a single <code>&lt;h1&gt;</code> for the main title, then <code>&lt;h2&gt;</code> for sections. Do not skip levels (e.g., h1 to h3) just for sizing—use CSS for that.
              </p>
            </div>

            <div className="bg-green-900/10 border border-green-500/20 p-4 rounded-lg">
              <h4 className="font-bold text-green-400 flex items-center gap-2">
                <span className="text-xl">✓</span> Accessibility First
              </h4>
              <p className="text-sm mt-1">
                Always provide meaningful <code>alt</code> text for images. Use labels with form controls. Ensure your site can be navigated by keyboard alone.
              </p>
            </div>
          </div>

          <p className="mt-8 text-gray-400 italic text-center">
            By internalizing these concepts—what HTML is, how it is standardized, and how browsers interpret it—you gain a solid foundation. You are now ready to write your first line of code.
          </p>
        </Section>
      </div>

      {/* Navigation Footer */}
      <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col-reverse md:flex-row md:justify-between items-center gap-4 md:gap-0">
        <Link 
          to="/webdevelopment/html"
          className="group flex items-center gap-4 px-4 md:px-6 py-2 md:py-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-orange-500 transition-all w-full md:w-auto"
        >
          <div className="p-2 bg-orange-500/10 rounded-full text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all flex-shrink-0">
            <ArrowLeft size={20} />
          </div>
          <div className="text-left">
            <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Previous Module</span>
            <div className="text-white font-bold group-hover:text-orange-400 transition-colors">Fundamentals Of Web</div>
          </div>
        </Link>
        <Link 
          to="/webdevelopment/html/structure"
          className="group flex items-center justify-between gap-4 px-4 md:px-6 py-2 md:py-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-orange-500 transition-all w-full md:w-auto"
        >
          <div className="text-right">
            <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Next Module</span>
            <div className="text-white font-bold group-hover:text-orange-400 transition-colors">HTML Structure</div>
          </div>
          <div className="p-2 bg-orange-500/10 rounded-full text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all flex-shrink-0">
            <ArrowRight size={20} />
          </div>
        </Link>
      </div>

    </article>
  );
};

export default IntroToHTML;