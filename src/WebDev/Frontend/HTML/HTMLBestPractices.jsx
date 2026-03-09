// src/WebDev/Frontend/HTML/HTMLBestPractices.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FileText, Code, CheckCircle, AlertTriangle, Terminal,
  ArrowLeft, ArrowRight, Layout, Globe, Smartphone, Eye, Server, List, CheckSquare, ShieldCheck, Type, ImageIcon, FormInput, Zap
} from 'lucide-react';

import SEO from "../../../components/SEO";

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

const HTMLBestPractices = () => {
  return (
    <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
      <SEO 
        title="HTML Best Practices: Semantics, SEO & Accessibility"
        description="Master modern HTML best practices. Learn how to write semantic, accessible, SEO-friendly, and maintainable markup."
        keywords="html best practices, accessible html, semantic html, seo html structure, clean html code"
        url="/webdevelopment/html/best-practices"
      />

      {/* Hero Header */}
      <header className="py-12 text-center md:text-left border-b border-gray-800 mb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 opacity-10 transform translate-x-1/4 -translate-y-1/4">
          <ShieldCheck size={400} className="text-orange-900" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase tracking-wider border border-orange-500/20 mb-4 inline-block">
            Module 11: Best Practices
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            HTML <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Best Practices</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            This module summarizes widely accepted best practices for writing modern, semantic, and accessible HTML based on standards and leading web guidelines.
          </p>
        </motion.div>
      </header>

      <div className="prose prose-invert prose-lg max-w-none">
        
        {/* 1. Solid Skeleton */}
        <Section title="1. Start Every Page with a Solid Skeleton" icon={FileText} id="solid-skeleton">
          <p>
            Every HTML document should begin with the HTML5 doctype and declare the primary language of the page. This sets a reliable foundation for browsers and search engines.
          </p>
          <LocalCodeBlock 
            title="HTML5 Skeleton" 
            language="html" 
            code={`<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <title>Page title</title>\n  </head>\n  <body>\n    \n  </body>\n</html>`}
          />
          <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-400">
            <li><strong>Use the HTML5 doctype:</strong> <code>&lt;!doctype html&gt;</code> keeps browsers in standards mode.</li>
            <li><strong>Add <code>lang</code> on the <code>&lt;html&gt;</code> element:</strong> Crucial for accessibility, localization, and search engines.</li>
            <li><strong>Declare UTF-8:</strong> Use <code>&lt;meta charset="utf-8" /&gt;</code> so the document can represent most languages correctly.</li>
            <li><strong>Include a responsive viewport meta tag:</strong> Ensures layouts behave correctly on mobile devices.</li>
          </ul>
        </Section>

        {/* 2. Semantic Structure */}
        <Section title="2. Use Semantic Structure, Not Just <div>s" icon={Layout} id="semantic-structure">
          <p>
            Semantic HTML means choosing elements that describe the role and meaning of content instead of using generic containers for everything. This improves accessibility, SEO, and maintainability. Common semantic layout elements include <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, and <code>&lt;footer&gt;</code>.
          </p>
          <LocalCodeBlock 
            title="Semantic Page Structure" 
            language="html" 
            code={`<body>\n  <header>\n    <h1>My Tech Blog</h1>\n    <nav>\n      <a href="/">Home</a>\n      <a href="/articles">Articles</a>\n      <a href="/about">About</a>\n    </nav>\n  </header>\n\n  <main>\n    <article>\n      <header>\n        <h2>Understanding Semantic HTML</h2>\n        <p>Published on 8 March 2026</p>\n      </header>\n      <section>\n        <h3>Why semantics matter</h3>\n        <p>Semantic elements communicate structure to browsers and assistive technologies.</p>\n      </section>\n    </article>\n\n    <aside>\n      <h2>Related resources</h2>\n      <ul>\n        <li><a href="#">Accessibility checklist</a></li>\n      </ul>\n    </aside>\n  </main>\n\n  <footer>\n    <p>&copy; 2026 My Tech Blog</p>\n  </footer>\n</body>`}
          />
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <HighlightBox title="The <main> Element" color="blue">
              Use <code>&lt;main&gt;</code> exactly once per page to wrap the primary content. This helps screen readers skip repetitive navigation blocks.
            </HighlightBox>
            <HighlightBox title="<article> vs <section>" color="green">
              Prefer <code>&lt;article&gt;</code> for self-contained pieces (blog posts, news items). Use <code>&lt;section&gt;</code> for logical groups of content within them.
            </HighlightBox>
          </div>
        </Section>

        {/* 3. Headings & Text */}
        <Section title="3. Headings and Text Content" icon={Type} id="headings-text">
          <p>
            Headings create a logical outline of the page that screen readers and search engines rely on. They are not just styling hooks.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-400">
            <li>Use exactly one <code>&lt;h1&gt;</code> per page for the main title where possible.</li>
            <li>Follow a logical hierarchy: <code>&lt;h2&gt;</code> for major sections, <code>&lt;h3&gt;</code> for subsections, without skipping levels.</li>
            <li>Do not use heading tags just to make text big or bold; use CSS for visual styling.</li>
          </ul>
          <LocalCodeBlock 
            title="Heading Hierarchy Example" 
            language="html" 
            code={`<main>\n  <h1>Learn HTML the Right Way</h1>\n\n  <section>\n    <h2>Getting started</h2>\n    <p>HTML is the foundation of all web pages.</p>\n  </section>\n\n  <section>\n    <h2>Semantic elements</h2>\n    <h3>Layout elements</h3>\n    <p>Use elements such as &lt;header&gt;, &lt;main&gt;, and &lt;footer&gt;.</p>\n    <h3>Text-level semantics</h3>\n    <p>Use &lt;strong&gt; and &lt;em&gt; instead of purely visual tags.</p>\n  </section>\n</main>`}
          />
          <p className="mt-6 font-bold text-white">For inline text semantics:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-400">
            <li>Use <code>&lt;strong&gt;</code> for important or critical text, and <code>&lt;em&gt;</code> for emphasis, instead of <code>&lt;b&gt;</code> and <code>&lt;i&gt;</code>.</li>
            <li>Use <code>&lt;code&gt;</code>, <code>&lt;pre&gt;</code>, <code>&lt;kbd&gt;</code>, and <code>&lt;samp&gt;</code> to mark up code and user input appropriately.</li>
            <li>Use lists (<code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code>) for any naturally list-like content.</li>
          </ul>
        </Section>

        {/* 4. Links, Images, and Media */}
        <Section title="4. Links, Images, and Media" icon={ImageIcon} id="links-images-media">
          
          <h3 className="text-xl font-bold text-white mb-3 mt-6">4.1 Links</h3>
          <p className="text-gray-400 mb-4">Links should be keyboard-accessible and have descriptive text that conveys their destination, especially for screen reader users.</p>
          <LocalCodeBlock 
            title="Descriptive Links" 
            language="html" 
            code={`\n<p>To view our pricing, <a href="/pricing">click here</a>.</p>\n\n\n<p>See our <a href="/pricing">website pricing plans</a>.</p>`}
          />
          <p className="text-gray-400 mt-2">Make link text meaningful out of context (avoid "click here" or "read more"). Indicate when a link opens a new tab or downloads a file in the link text.</p>

          <h3 className="text-xl font-bold text-white mb-3 mt-8">4.2 Images</h3>
          <p className="text-gray-400 mb-4">Images must include alternative text via the <code>alt</code> attribute so that users who cannot see the image still understand its purpose.</p>
          <LocalCodeBlock 
            title="Alternative Text Usage" 
            language="html" 
            code={`\n<img src="team-photo.jpg" alt="Digit-Era development team standing in front of the office" />\n\n\n<img src="decorative-line.svg" alt="" aria-hidden="true" />\n\n\n<figure>\n  <img src="traffic-chart.png" alt="Line chart showing website traffic growth over six months" />\n  <figcaption>Website traffic increased steadily from January to June.</figcaption>\n</figure>`}
          />
          <p className="text-gray-400 mt-2">Write concise <code>alt</code> text that describes the image’s function. Use empty <code>alt=""</code> for purely decorative images so they are ignored by assistive technologies.</p>

          <h3 className="text-xl font-bold text-white mb-3 mt-8">4.3 Audio and Video</h3>
          <p className="text-gray-400 mb-4">Always provide controls on <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> elements to respect user choice. Provide captions and transcripts for multimedia content.</p>
          <LocalCodeBlock 
            title="Accessible Video" 
            language="html" 
            code={`<video controls>\n  <source src="intro.mp4" type="video/mp4" />\n  <track kind="captions" src="intro-en.vtt" srclang="en" label="English" />\n  Your browser does not support the video tag.\n</video>`}
          />
        </Section>

        {/* 5. Forms */}
        <Section title="5. Forms That Are Accessible and Usable" icon={FormInput} id="accessible-forms">
          <p>
            Forms are a common source of accessibility issues, but many can be avoided by using native HTML features correctly.
          </p>
          <LocalCodeBlock 
            title="Best Practice Form Elements" 
            language="html" 
            code={`<form action="/signup" method="post">\n  <div>\n    <label for="name">Full name</label>\n    <input id="name" name="name" type="text" autocomplete="name" required />\n  </div>\n\n  <div>\n    <label for="email">Email address</label>\n    <input id="email" name="email" type="email" autocomplete="email" required />\n  </div>\n\n  <fieldset>\n    <legend>Preferred contact method</legend>\n    <label>\n      <input type="radio" name="contact" value="email" checked /> Email\n    </label>\n    <label>\n      <input type="radio" name="contact" value="phone" /> Phone\n    </label>\n  </fieldset>\n\n  <button type="submit">Create account</button>\n</form>`}
          />
          <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-400">
            <li>Use <code>&lt;label&gt;</code> elements associated with form controls via <code>for</code> and <code>id</code>.</li>
            <li>Use appropriate <code>type</code> values (email, tel, number, date, etc.) so browsers can optimize keyboards and validation.</li>
            <li>Do not rely on placeholders as the only label; they disappear once the user types.</li>
            <li>Group related controls using <code>&lt;fieldset&gt;</code> and <code>&lt;legend&gt;</code>.</li>
            <li>Add <code>autocomplete</code> hints to support password managers and autofill.</li>
          </ul>
        </Section>

        {/* 6. Accessibility */}
        <Section title="6. Accessibility as a First-Class Concern" icon={CheckSquare} id="accessibility">
          <p>
            Many accessibility wins come “for free” from semantic HTML: correct headings, lists, labels, and roles.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-400">
            <li>Ensure all interactive elements (buttons, links, form controls) are reachable and operable via keyboard.</li>
            <li>Use ARIA attributes only when native elements cannot express the needed semantics; prefer built-in semantics first.</li>
            <li>Maintain a logical focus order that matches the visual order.</li>
          </ul>
          <LocalCodeBlock 
            title="Native Elements vs ARIA" 
            language="html" 
            code={`\n<button type="button">Open menu</button>\n\n\n<div role="button" tabindex="0">Open menu</div>`}
          />
        </Section>

        {/* 7. Clean Markup */}
        <Section title="7. Clean, Consistent, and Maintainable Markup" icon={Code} id="clean-markup">
          <p>
            Consistent code style improves collaboration and reduces bugs. While exact preferences vary, common recommendations include:
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-400">
            <li>Use lowercase for element and attribute names.</li>
            <li>Quote attribute values with double quotes for readability.</li>
            <li>Indent nested elements consistently (2 or 4 spaces).</li>
            <li>Avoid unnecessary wrappers and “div/span soup” when a semantic element is available.</li>
            <li>Keep inline styles and event handlers out of HTML; use external CSS and JavaScript instead.</li>
          </ul>
          <LocalCodeBlock 
            title="Cleaner Markup Example" 
            language="html" 
            code={`\n<div class="header">\n  <div class="title">My Site</div>\n  <div class="menu">\n    <span onclick="goHome()">Home</span>\n  </div>\n</div>\n\n\n<header>\n  <h1>My Site</h1>\n  <nav>\n    <button type="button" id="home-button">Home</button>\n  </nav>\n</header>`}
          />
        </Section>

        {/* 8. Performance & SEO */}
        <Section title="8. Performance and SEO-Friendly HTML" icon={Zap} id="performance-seo">
          <p>
            Although performance often depends heavily on CSS and JavaScript, certain HTML practices help pages load faster and rank better.
          </p>
          <LocalCodeBlock 
            title="SEO & Performance Optimization" 
            language="html" 
            code={`<head>\n  <meta charset="utf-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1" />\n  <title>Restaurant Website Development Services | Digit-Era</title>\n  <meta name="description" content="Custom, mobile-friendly restaurant websites, digital menus, and SEO services for small businesses." />\n  <link rel="stylesheet" href="/assets/main.css" />\n  <script src="/assets/app.js" defer></script>\n</head>`}
          />
          <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-400">
            <li>Load critical CSS early in the <code>&lt;head&gt;</code> and defer non-critical scripts using <code>defer</code> or <code>async</code> where safe.</li>
            <li>Keep the DOM reasonably small; unnecessary wrappers increase parsing and layout cost.</li>
            <li>Provide unique and descriptive <code>&lt;title&gt;</code> and <code>&lt;meta name="description"&gt;</code> for each page.</li>
          </ul>
        </Section>

        {/* 9. Anti-Patterns */}
        <Section title="9. Common Anti-Patterns to Avoid" icon={AlertTriangle} id="anti-patterns">
          <p>Avoid patterns that fight the browser’s native behavior or hurt accessibility.</p>
          <div className="bg-[#1e293b] p-6 rounded-xl border border-red-900/50 mt-4 mb-6 text-gray-300">
            <h4 className="text-red-400 font-bold mb-3 flex items-center gap-2"><AlertTriangle size={18} /> Typical Issues to Avoid:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Using <code>&lt;br&gt;</code> repeatedly for spacing or layout instead of CSS.</li>
              <li>Using tables for layout instead of for tabular data.</li>
              <li>Turning non-interactive elements (<code>&lt;div&gt;</code>, <code>&lt;span&gt;</code>) into buttons or links when native <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code> elements would work better.</li>
              <li>Omitting <code>alt</code> attributes on images or using meaningless text like <code>alt="image"</code>.</li>
              <li>Skipping heading levels or using headings purely for visual styling.</li>
            </ul>
          </div>
          <LocalCodeBlock 
            title="Correct Layout Patterns" 
            language="html" 
            code={`\n<p class="section-intro">Welcome to our services page.</p>\n\n\n<table>\n  <caption>Service plans</caption>\n  <thead>\n    <tr>\n      <th>Plan</th>\n      <th>Price (INR)</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Starter</td>\n      <td>5000</td>\n    </tr>\n    <tr>\n      <td>Growth</td>\n      <td>10000</td>\n    </tr>\n  </tbody>\n</table>`}
          />
        </Section>

        {/* 10. Putting It All Together */}
        <Section title="10. Putting It All Together" icon={Globe} id="putting-it-together">
           <p>A small, realistic page that combines these best practices might look like this. It demonstrates a complete document skeleton, semantic structure, accessible forms, and SEO-conscious metadata while keeping the HTML clean and maintainable.</p>
           <LocalCodeBlock 
             title="Complete Best Practices Example"
             language="html"
             code={`<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <title>Digit-Era | Restaurant Websites</title>\n    <meta name="description" content="Digit-Era builds fast, mobile-friendly restaurant websites with digital menus and SEO." />\n  </head>\n  <body>\n    <header>\n      <h1>Digit-Era</h1>\n      <nav>\n        <a href="#services">Services</a>\n        <a href="#process">Process</a>\n        <a href="#contact">Contact</a>\n      </nav>\n    </header>\n\n    <main>\n      <section id="services">\n        <h2>Services for Restaurants</h2>\n        <ul>\n          <li>Responsive websites</li>\n          <li>QR-based digital menus</li>\n          <li>Local SEO optimization</li>\n        </ul>\n      </section>\n\n      <section id="process">\n        <h2>How We Work</h2>\n        <article>\n          <h3>1. Understand your business</h3>\n          <p>We learn about your menu, brand, and customers.</p>\n        </article>\n        <article>\n          <h3>2. Design and build</h3>\n          <p>We create a fast, accessible website that works on all devices.</p>\n        </article>\n      </section>\n\n      <section id="contact">\n        <h2>Contact us</h2>\n        <form action="/contact" method="post">\n          <div>\n            <label for="restaurant-name">Restaurant name</label>\n            <input id="restaurant-name" name="restaurant-name" type="text" required />\n          </div>\n          <div>\n            <label for="phone">Phone number</label>\n            <input id="phone" name="phone" type="tel" autocomplete="tel" required />\n          </div>\n          <button type="submit">Request a callback</button>\n        </form>\n      </section>\n    </main>\n\n    <footer>\n      <p>&copy; 2026 Digit-Era</p>\n    </footer>\n  </body>\n</html>`}
           />
        </Section>

      </div>
      
      {/* Navigation Footer */}
      <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col-reverse md:flex-row md:justify-between items-center gap-4 md:gap-0">
        <Link 
          to="/webdevelopment/html/semantic"
          className="group flex items-center gap-4 px-4 md:px-6 py-2 md:py-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-orange-500 transition-all w-full md:w-auto"
        >
          <div className="p-2 bg-orange-500/10 rounded-full text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all flex-shrink-0">
            <ArrowLeft size={20} />
          </div>
          <div className="text-left">
            <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Previous Module</span>
            <div className="text-white font-bold group-hover:text-orange-400 transition-colors">Semantic HTML</div>
          </div>
        </Link>
        <Link 
                  to="/webdevelopment/html/integration"
                  className="group flex items-center justify-between gap-4 px-4 md:px-6 py-2 md:py-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-orange-500 transition-all w-full md:w-auto"
                >
                  <div className="text-right">
                    <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Next Module</span>
                    <div className="text-white font-bold group-hover:text-orange-400 transition-colors">HTML + CSS + JS Connection</div>
                  </div>
                  <div className="p-2 bg-orange-500/10 rounded-full text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all flex-shrink-0">
                    <ArrowRight size={20} />
                  </div>
                </Link>
      </div>
    </article>
  );
};

export default HTMLBestPractices;