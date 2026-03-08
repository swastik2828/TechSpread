// src/WebDev/Frontend/HTML/SemanticHTML.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FileText, Code, CheckCircle, AlertTriangle, Terminal, 
  ArrowLeft, ArrowRight, Layout, Globe, Smartphone, Eye, Server, List, CheckSquare
} from 'lucide-react';

import SEO from "../../../components/SEO";

// Reusing the semantic layout image as an appropriate visual
import SemanticLayoutImg from "../../../assets/WebDev/semantic_layout_example_2.jpeg";

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

const LocalCodeBlock = ({ title, code, language = "html", output = null, outputLabel = "Browser Output" }) => {
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

const SemanticHTML = () => {
  return (
    <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
      <SEO 
        title="Semantic HTML: Meaningful Web Structure"
        description="Master Semantic HTML. Learn the importance of semantic tags like header, main, article, and section for accessibility, SEO, and maintainability."
        keywords="semantic html, html5 semantic tags, web accessibility, seo html, html structure"
        url="/webdevelopment/html/semantic"
      />

      {/* Hero Header */}
      <header className="py-12 text-center md:text-left border-b border-gray-800 mb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 opacity-10 transform translate-x-1/4 -translate-y-1/4">
          <Code size={400} className="text-orange-900" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase tracking-wider border border-orange-500/20 mb-4 inline-block">
            Module 10: Semantic HTML
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Introduction to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Semantic HTML</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Semantic HTML is the practice of using HTML elements that describe their meaning and role in a document, instead of relying on generic containers for everything.
          </p>
        </motion.div>
      </header>

      <div className="prose prose-invert prose-lg max-w-none">
        
        <p className="mb-10 text-lg">
          When you write semantic markup, the structure of the page becomes clearer not only to other developers, but also to browsers, search engines, and assistive technologies. This document explains what semantic HTML is, why it matters, the most important semantic elements in HTML5, and how to apply them correctly with practical examples.
        </p>

        {/* 1. What is Semantic HTML */}
        <Section title="1. What is Semantic HTML?" icon={FileText} id="what-is-semantic-html">
          <p>
            In HTML, an element is considered “semantic” when its tag name communicates what kind of content it contains or what role it plays in the page. For example, <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, and <code>&lt;footer&gt;</code> all indicate structure and purpose, while <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> are generic blocks and inline containers with no inherent meaning.
          </p>
          <p className="mt-4">
            Semantic HTML is essentially adding <strong>meaning to structure</strong>: the same visual layout can be built with generic div elements, but using expressive tags allows user agents (browsers, screen readers, crawlers) to understand the document without guessing from IDs or classes.
          </p>
        </Section>

        {/* 2. Why Semantic HTML Matters */}
        <Section title="2. Why Semantic HTML Matters" icon={CheckCircle} id="why-it-matters">
          <div className="grid md:grid-cols-1 gap-6 my-8">
            <HighlightBox title="Accessibility" color="purple">
              Assistive technologies rely heavily on document structure to help people navigate. Landmark elements like <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;aside&gt;</code>, and <code>&lt;footer&gt;</code> are announced as distinct regions so screen reader users can jump directly to them, similar to how sighted users scan visually.
              <br/><br/>
              Text-level semantics such as <code>&lt;em&gt;</code>, <code>&lt;strong&gt;</code>, <code>&lt;blockquote&gt;</code>, <code>&lt;q&gt;</code>, <code>&lt;abbr&gt;</code>, and <code>&lt;time&gt;</code> give additional context about emphasis, quotations, abbreviations, and dates, which assistive tools can interpret more accurately than raw styling alone.
            </HighlightBox>

            <HighlightBox title="SEO and Machine Understanding" color="green">
              Semantic HTML also helps search engines recognize which parts of a page are headings, navigation, main content, or secondary information. This improves how pages are indexed and can influence which content appears in search snippets, featured results, or sitelinks.
              <br/><br/>
              Semantic markup is not a magic ranking factor, but it supports SEO by making content structure obvious to crawlers and reducing ambiguity.
            </HighlightBox>

            <HighlightBox title="Maintainability and Readability" color="blue">
              When you open a semantic HTML document, the layout is often obvious from the tag names alone. That makes it easier for teams to collaborate, reduces the need for comments like <code>&lt;!-- main content --&gt;</code>, and encourages cleaner component boundaries.
              <br/><br/>
              Using meaningful tags also tends to discourage layout hacks such as misusing tables or non-semantic containers for visual tricks, which improves long‑term maintainability.
            </HighlightBox>
          </div>
        </Section>

        {/* 3. Semantic vs Non-Semantic */}
        <Section title="3. Semantic vs Non-Semantic Elements" icon={Layout} id="semantic-vs-nonsemantic">
          <p>HTML elements can be grouped into two broad categories:</p>
          <ul className="list-disc pl-5 mt-4 space-y-4 text-gray-400">
            <li>
              <strong>Semantic elements:</strong> tags that carry meaning about their content or role.<br/>
              <em>Examples:</em> <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;figure&gt;</code>, <code>&lt;figcaption&gt;</code>, <code>&lt;time&gt;</code>, <code>&lt;table&gt;</code>.
            </li>
            <li>
              <strong>Non-semantic elements:</strong> generic containers that carry no inherent meaning.<br/>
              <em>Examples:</em> <code>&lt;div&gt;</code> for block content and <code>&lt;span&gt;</code> for inline content.
            </li>
          </ul>
          <p className="mt-4">
            A good page mixes both: use semantic elements wherever they clearly fit, and reserve <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> for low-level layout, styling hooks, or when no specific semantic tag applies.
          </p>

          <div className="overflow-x-auto mt-8 border border-gray-800 rounded-xl shadow-lg">
            <table className="w-full text-left border-collapse bg-[#161b22]">
              <thead>
                <tr className="bg-gray-800 text-white text-sm uppercase tracking-wider">
                  <th className="p-4 border-b border-gray-700">Aspect</th>
                  <th className="p-4 border-b border-gray-700">Semantic elements</th>
                  <th className="p-4 border-b border-gray-700">Non-semantic elements</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-300">
                <tr className="hover:bg-white/5 transition-colors border-b border-gray-800">
                  <td className="p-4 font-bold text-gray-200">Meaning</td>
                  <td className="p-4 text-green-400">Indicate the role or type of content</td>
                  <td className="p-4 text-red-400">No built‑in meaning</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors border-b border-gray-800">
                  <td className="p-4 font-bold text-gray-200">Readability</td>
                  <td className="p-4 text-green-400">Code self-documents the structure</td>
                  <td className="p-4 text-red-400">Needs IDs, classes, or comments</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors border-b border-gray-800">
                  <td className="p-4 font-bold text-gray-200">Accessibility</td>
                  <td className="p-4 text-green-400">Provide landmarks and roles to assistive tech</td>
                  <td className="p-4 text-red-400">Often need extra ARIA roles</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors border-b border-gray-800">
                  <td className="p-4 font-bold text-gray-200">SEO</td>
                  <td className="p-4 text-green-400">Help search engines interpret layout and importance</td>
                  <td className="p-4 text-red-400">Offer little structure by default</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-gray-200">Examples</td>
                  <td className="p-4"><code>&lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;article&gt;, &lt;footer&gt;</code></td>
                  <td className="p-4"><code>&lt;div&gt;, &lt;span&gt;</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        {/* 4. Examples */}
        <Section title="4. Example: Non-Semantic vs Semantic Layout" icon={Terminal} id="examples">
          <p>Observe how the semantic layout removes ambiguity and relies less on artificial IDs.</p>

          <LocalCodeBlock 
            title="Non-semantic layout (Avoid this approach)"
            language="html"
            code={`<body>
  <div id="header">My Site</div>
  <div id="nav">Home | Blog | About</div>

  <div id="content">
    <div class="post">
      <h2>First Post</h2>
      <p>Welcome to the site!</p>
    </div>
  </div>

  <div id="footer">© 2026 My Site</div>
</body>`}
          />

          <LocalCodeBlock 
            title="Semantic layout (Best Practice)"
            language="html"
            code={`<body>
  <header>
    <h1>My Site</h1>
  </header>

  <nav aria-label="Main navigation">
    <a href="/">Home</a>
    <a href="/blog">Blog</a>
    <a href="/about">About</a>
  </nav>

  <main>
    <article>
      <header>
        <h2>First Post</h2>
      </header>
      <p>Welcome to the site!</p>
      <footer>
        <p>Posted in <a href="/category/news">News</a></p>
      </footer>
    </article>
  </main>

  <footer>
    <p>© 2026 My Site</p>
  </footer>
</body>`}
          />
          <p className="mt-4">
            In the second version, each element describes its function without relying on IDs, which is easier for humans and machines to interpret.
          </p>
        </Section>

        {/* 5. Core Structural Semantic Elements */}
        <Section title="5. Core Structural Semantic Elements" icon={Layout} id="core-elements">
          <p className="mb-8">HTML5 introduced several structural elements that replace common div‑based patterns.</p>

          <div className="space-y-12">
            <div className="relative pl-8 border-l-2 border-orange-500/30">
              <h3 className="text-2xl font-bold text-white mb-2">&lt;header&gt;</h3>
              <p className="mb-4">Represents introductory content for a page or section, often containing a logo, heading, or navigation. You can have multiple headers in a document, but should not nest them inside each other.</p>
              <LocalCodeBlock title="Header Example" language="html" code={`<header>\n  <h1>My Portfolio</h1>\n  <p>Front-end developer and designer</p>\n</header>`}/>
            </div>

            <div className="relative pl-8 border-l-2 border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-2">&lt;nav&gt;</h3>
              <p className="mb-4">Marks a block of primary navigation links. Not every collection of links needs <code>&lt;nav&gt;</code>; it’s best reserved for major navigation sections.</p>
              <LocalCodeBlock title="Nav Example" language="html" code={`<nav aria-label="Primary">\n  <ul>\n    <li><a href="/">Home</a></li>\n    <li><a href="/projects">Projects</a></li>\n    <li><a href="/contact">Contact</a></li>\n  </ul>\n</nav>`}/>
            </div>

            <div className="relative pl-8 border-l-2 border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-2">&lt;main&gt;</h3>
              <p className="mb-4">Contains the unique, central content for the current page, excluding headers, sidebars, and repeated navigation. There must be exactly one <code>&lt;main&gt;</code> per page.</p>
              <LocalCodeBlock title="Main Example" language="html" code={`<body>\n  <header>…</header>\n  <nav>…</nav>\n\n  <main>\n    <h1>Documentation</h1>\n    <p>This guide explains how to use the API.</p>\n  </main>\n\n  <footer>…</footer>\n</body>`}/>
            </div>

            <div className="relative pl-8 border-l-2 border-green-500/30">
              <h3 className="text-2xl font-bold text-white mb-2">&lt;section&gt;</h3>
              <p className="mb-4">Groups related content under a common theme, usually with a heading. Think of it as a chapter or subsection in the document outline.</p>
              <LocalCodeBlock title="Section Example" language="html" code={`<section>\n  <h2>Features</h2>\n  <ul>\n    <li>Fast performance</li>\n    <li>Responsive design</li>\n    <li>Accessible by default</li>\n  </ul>\n</section>`}/>
            </div>

            <div className="relative pl-8 border-l-2 border-pink-500/30">
              <h3 className="text-2xl font-bold text-white mb-2">&lt;article&gt;</h3>
              <p className="mb-4">Represents self-contained content that could stand on its own, such as blog posts, news stories, forum threads, or comments. It can contain its own header, footer, and sections.</p>
              <LocalCodeBlock title="Article Example" language="html" code={`<article>\n  <header>\n    <h2>How to Bake Sourdough Bread</h2>\n    <p>By Priya Das</p>\n  </header>\n\n  <p>Making sourdough bread at home is easier than it seems…</p>\n\n  <footer>\n    <p>Last updated:\n      <time datetime="2026-03-07">7 March 2026</time>\n    </p>\n  </footer>\n</article>`}/>
            </div>

            <div className="relative pl-8 border-l-2 border-yellow-500/30">
              <h3 className="text-2xl font-bold text-white mb-2">&lt;aside&gt;</h3>
              <p className="mb-4">For content that is related but not central to the main flow, such as sidebars, pull quotes, or related links.</p>
              <LocalCodeBlock title="Aside Example" language="html" code={`<main>\n  <article>\n    <h1>Understanding CSS Grid</h1>\n    <p>CSS Grid is a powerful layout system…</p>\n  </article>\n\n  <aside aria-label="Further reading">\n    <h2>Further Reading</h2>\n    <ul>\n      <li><a href="/css-flexbox">CSS Flexbox Guide</a></li>\n      <li><a href="/responsive-design">Responsive Design 101</a></li>\n    </ul>\n  </aside>\n</main>`}/>
            </div>

            <div className="relative pl-8 border-l-2 border-teal-500/30">
              <h3 className="text-2xl font-bold text-white mb-2">&lt;footer&gt;</h3>
              <p className="mb-4">Represents information about the nearest sectioning element: author information, copyright, related links, or closing notes.</p>
              <LocalCodeBlock title="Footer Example" language="html" code={`<footer>\n  <p>© 2026 Example Corp.</p>\n  <nav aria-label="Footer links">\n    <a href="/privacy">Privacy</a>\n    <a href="/terms">Terms</a>\n  </nav>\n</footer>`}/>
            </div>
          </div>
        </Section>

        {/* Visual Break */}
        <div className="my-16 rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
          <img 
            src={SemanticLayoutImg} 
            alt="Semantic Layout Visual Diagram" 
            className="w-full h-auto"
          />
          <div className="bg-gray-900 p-3 text-center text-xs text-gray-500">
            Figure 1: Visualizing a semantic HTML5 document layout.
          </div>
        </div>

        {/* 6. Other Important Semantic Elements */}
        <Section title="6. Other Important Semantic Elements" icon={List} id="other-elements">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Headings: <code>&lt;h1&gt;–&lt;h6&gt;</code></h3>
              <p className="text-sm text-gray-400 mb-2">Headings define the document outline, where <code>&lt;h1&gt;</code> is the top-level heading. A clear heading hierarchy is essential for accessibility and SEO.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Text Semantics</h3>
              <p className="text-sm text-gray-400 mb-2">Several inline elements add meaning beyond pure styling: <code>&lt;p&gt;</code>, <code>&lt;em&gt;</code> (emphasis), <code>&lt;strong&gt;</code> (importance), <code>&lt;blockquote&gt;</code>, <code>&lt;q&gt;</code>, <code>&lt;abbr&gt;</code>, <code>&lt;time&gt;</code>, <code>&lt;mark&gt;</code>.</p>
              <LocalCodeBlock title="Text Semantics" language="html" code={`<p>\n  <abbr title="Application Programming Interface">API</abbr> design\n  should prioritize <strong>clarity</strong> and\n  <em>backwards compatibility</em>.\n</p>\n\n<blockquote>\n  <p>Programs must be written for people to read, and only incidentally for machines to execute.</p>\n  <cite>Harold Abelson</cite>\n</blockquote>`}/>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">Lists: <code>&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;</code></h3>
              <p className="text-sm text-gray-400 mb-2">Lists communicate that items are part of an ordered or unordered collection, which assistive tech and search engines can treat differently from separate paragraphs.</p>
              <LocalCodeBlock title="Lists" language="html" code={`<ol>\n  <li>Preheat the oven.</li>\n  <li>Mix the ingredients.</li>\n  <li>Bake for 30 minutes.</li>\n</ol>`}/>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">Tables: Data, Not Layout</h3>
              <p className="text-sm text-gray-400 mb-2"><code>&lt;table&gt;</code>, <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;th&gt;</code>, and <code>&lt;td&gt;</code> are for genuine tabular data, not general page layout.</p>
              <LocalCodeBlock title="Tables" language="html" code={`<table>\n  <caption>Monthly Revenue</caption>\n  <thead>\n    <tr>\n      <th scope="col">Month</th>\n      <th scope="col">Revenue (₹)</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope="row">January</th>\n      <td>50,000</td>\n    </tr>\n    <tr>\n      <th scope="row">February</th>\n      <td>55,000</td>\n    </tr>\n  </tbody>\n</table>`}/>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">Forms and Native Controls</h3>
              <p className="text-sm text-gray-400 mb-2"><code>&lt;form&gt;</code>, <code>&lt;label&gt;</code>, <code>&lt;input&gt;</code>, etc., all carry semantics about user input and actions. They come with built‑in keyboard interaction.</p>
              <LocalCodeBlock title="Forms" language="html" code={`<form>\n  <label for="email">Email</label>\n  <input id="email" name="email" type="email" required>\n\n  <button type="submit">Sign up</button>\n</form>\n\n\n<div role="button" tabindex="0">Sign up</div>`}/>
              <p className="text-xs text-red-400 mt-2">The styled div needs extra work to behave like a real button and is more fragile.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">Time and Details</h3>
              <p className="text-sm text-gray-400 mb-2">HTML5 adds specific semantics for expandable sections and contact information.</p>
              <LocalCodeBlock title="Details & Summary" language="html" code={`<details>\n  <summary>Show installation steps</summary>\n  <ol>\n    <li>Download the installer.</li>\n    <li>Run the setup file.</li>\n    <li>Follow the on-screen instructions.</li>\n  </ol>\n</details>\n\n<address>\n  Contact: <a href="mailto:hello@example.com">hello@example.com</a>\n</address>`}/>
            </div>
          </div>
        </Section>

        {/* 7. Putting it together */}
        <Section title="7. Putting It Together: Page Structure Example" icon={Globe} id="putting-it-together">
           <p>Here is a compact blog-style page that shows structural tags used together. Even without CSS, the intent of each region is clear from the tags themselves.</p>
           <LocalCodeBlock 
             title="Complete Semantic Page Example"
             language="html"
             code={`<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <title>Tech Blog</title>\n</head>\n<body>\n  <header>\n    <h1>Tech Blog</h1>\n    <p>Web development and programming articles</p>\n  </header>\n\n  <nav aria-label="Primary">\n    <a href="/">Home</a>\n    <a href="/articles">Articles</a>\n    <a href="/about">About</a>\n  </nav>\n\n  <main>\n    <section aria-labelledby="latest-posts">\n      <h2 id="latest-posts">Latest Posts</h2>\n\n      <article>\n        <header>\n          <h3>Semantic HTML Best Practices</h3>\n          <p>\n            <time datetime="2026-03-07">7 March 2026</time>\n          </p>\n        </header>\n        <p>Learn how to use HTML5 semantic tags to build accessible layouts…</p>\n        <footer>\n          <a href="/articles/semantic-html">Read more</a>\n        </footer>\n      </article>\n    </section>\n\n    <aside aria-label="Sidebar">\n      <section>\n        <h2>About the Author</h2>\n        <p>Sharing tips on front-end development and performance.</p>\n      </section>\n    </aside>\n  </main>\n\n  <footer>\n    <p>© 2026 Tech Blog</p>\n  </footer>\n</body>\n</html>`}
           />
        </Section>

        {/* 8. Best Practices */}
        <Section title="8. Best Practices and Common Pitfalls" icon={AlertTriangle} id="best-practices">
           <div className="grid md:grid-cols-2 gap-6 mt-6">
             <HighlightBox title="Use Elements for Their Intended Meaning" color="orange">
               Only use a semantic element when its definition matches your content; do not wrap random blocks in <code>&lt;section&gt;</code> just to “make the HTML semantic.” When nothing fits, use <code>&lt;div&gt;</code>.
             </HighlightBox>
             <HighlightBox title="One <main> per Page" color="blue">
               Have exactly one <code>&lt;main&gt;</code> that represents the primary content. This makes it easy for assistive tools to expose “jump to main content” behavior.
             </HighlightBox>
             <HighlightBox title="section vs article" color="green">
               Use <code>&lt;article&gt;</code> for standalone items that could be reused or syndicated. Use <code>&lt;section&gt;</code> for thematic groupings within a page. Both should normally include a heading.
             </HighlightBox>
             <HighlightBox title="Prefer Native Controls" color="purple">
               Avoid recreating links, buttons, and form elements using div and span; you lose default keyboard behavior and accessibility.
             </HighlightBox>
           </div>
        </Section>

        {/* 9. Checklist */}
        <Section title="9. Practical Checklist" icon={CheckSquare} id="checklist">
  <div className="bg-[#1e293b] p-5 sm:p-6 md:p-8 rounded-xl border border-gray-700 space-y-4 shadow-lg text-gray-300 transition-all duration-300">
    
    <p className="mb-4 text-white font-bold text-base sm:text-lg md:text-xl leading-snug">
      When you review or write HTML, use this quick checklist:
    </p>
    
    <ul className="list-none space-y-3 sm:space-y-4">
      <li className="flex items-start gap-3 text-sm sm:text-base leading-relaxed">
        <CheckCircle className="text-green-500 mt-0.5 sm:mt-1 shrink-0" size={18} /> 
        <span>Use structural tags (<code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, etc.) instead of just divs.</span>
      </li>
      
      <li className="flex items-start gap-3 text-sm sm:text-base leading-relaxed">
        <CheckCircle className="text-green-500 mt-0.5 sm:mt-1 shrink-0" size={18} /> 
        <span>Ensure there is exactly one <code>&lt;main&gt;</code> element per page.</span>
      </li>
      
      <li className="flex items-start gap-3 text-sm sm:text-base leading-relaxed">
        <CheckCircle className="text-green-500 mt-0.5 sm:mt-1 shrink-0" size={18} /> 
        <span>Give each important section or article a clear heading level.</span>
      </li>
      
      <li className="flex items-start gap-3 text-sm sm:text-base leading-relaxed">
        <CheckCircle className="text-green-500 mt-0.5 sm:mt-1 shrink-0" size={18} /> 
        <span>Maintain a logical heading hierarchy from <code>&lt;h1&gt;</code> downward.</span>
      </li>
      
      <li className="flex items-start gap-3 text-sm sm:text-base leading-relaxed">
        <CheckCircle className="text-green-500 mt-0.5 sm:mt-1 shrink-0" size={18} /> 
        <span>Use semantic inline elements (<code>&lt;em&gt;</code>, <code>&lt;strong&gt;</code>, <code>&lt;abbr&gt;</code>, etc.) instead of styling generic tags.</span>
      </li>
      
      <li className="flex items-start gap-3 text-sm sm:text-base leading-relaxed">
        <CheckCircle className="text-green-500 mt-0.5 sm:mt-1 shrink-0" size={18} /> 
        <span>Represent genuine lists with <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code> and <code>&lt;li&gt;</code>, not line breaks.</span>
      </li>
      
      <li className="flex items-start gap-3 text-sm sm:text-base leading-relaxed">
        <CheckCircle className="text-green-500 mt-0.5 sm:mt-1 shrink-0" size={18} /> 
        <span>Use <code>&lt;figure&gt;</code>/<code>&lt;figcaption&gt;</code> for images or diagrams discussed in text.</span>
      </li>
      
      <li className="flex items-start gap-3 text-sm sm:text-base leading-relaxed">
        <CheckCircle className="text-green-500 mt-0.5 sm:mt-1 shrink-0" size={18} /> 
        <span>Reserve <code>&lt;table&gt;</code> for tabular data, with headers and captions.</span>
      </li>
      
      <li className="flex items-start gap-3 text-sm sm:text-base leading-relaxed">
        <CheckCircle className="text-green-500 mt-0.5 sm:mt-1 shrink-0" size={18} /> 
        <span>Prefer native interactive elements (<code>&lt;a&gt;</code>, <code>&lt;button&gt;</code>) over clickable divs.</span>
      </li>
      
      <li className="flex items-start gap-3 text-sm sm:text-base leading-relaxed">
        <CheckCircle className="text-green-500 mt-0.5 sm:mt-1 shrink-0" size={18} /> 
        <span>Add ARIA attributes only when they provide information not already expressed by semantic HTML.</span>
      </li>
    </ul>
    
    <div className="pt-2 sm:pt-4">
      <p className="font-bold text-orange-400 text-sm sm:text-base md:text-lg leading-relaxed border-l-4 border-orange-500/50 pl-3 sm:pl-4">
        Applied consistently, these habits lead to pages that are more robust, accessible, and future‑proof.
      </p>
    </div>
    
  </div>
</Section>

      </div>
      
      {/* Navigation Footer */}
      <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col-reverse md:flex-row md:justify-between items-center gap-4 md:gap-0">
        <Link 
          to="/webdevelopment/html/forms/accessible-forms"
          className="group flex items-center gap-4 px-4 md:px-6 py-2 md:py-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-orange-500 transition-all w-full md:w-auto"
        >
          <div className="p-2 bg-orange-500/10 rounded-full text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all flex-shrink-0">
            <ArrowLeft size={20} />
          </div>
          <div className="text-left">
            <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Previous Module</span>
            <div className="text-white font-bold group-hover:text-orange-400 transition-colors">Accesible forms </div>
          </div>
        </Link>
        <Link
          to="/webdevelopment/html/best-practices"
          className="group flex items-center justify-between gap-4 px-4 md:px-6 py-2 md:py-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-grey-500 transition-all w-full md:w-auto"
        >
          <div className="text-right">
            <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Next Module</span>
            <div className="text-white font-bold group-hover:text-orange-400 transition-colors">HTML Best Practices</div>
          </div>
          <div className="p-2 bg-orange-500/10 rounded-full text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all flex-shrink-0">
            <ArrowRight size={20} />
          </div>
        </Link>
      </div>
    </article>
  );
};

export default SemanticHTML;