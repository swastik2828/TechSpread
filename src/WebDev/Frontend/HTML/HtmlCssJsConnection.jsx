// src/WebDev/Frontend/HTML/HtmlCssJsConnection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code, Layers, Cpu, Database, Eye, ArrowLeft, Paintbrush, Zap, FolderTree, ArrowRight
} from 'lucide-react';

import SEO from "../../../components/SEO";

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
    <div className={`p-6 rounded-2xl bg-gradient-to-br ${colors[color]} border backdrop-blur-sm shadow-lg my-6`}>
      {title && <h4 className="text-lg font-bold mb-3 text-white flex items-center gap-2">{title}</h4>}
      <div className="text-gray-300 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
};

const LocalCodeBlock = ({ title, code, language = "html" }) => {
  return (
    <div className="my-8 w-full rounded-xl overflow-hidden bg-[#0d1117] border border-gray-800 shadow-2xl">
      <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-gray-800">
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
          </div>
          <span className="text-xs font-bold text-gray-400 font-mono tracking-wide">{title}</span>
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
    </div>
  );
};

// --- Interactive Simulator Component ---
const ThemeToggleSimulator = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="my-10 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
      <div className="bg-gray-900 px-4 py-3 border-b border-gray-800 flex items-center gap-2">
        <Eye size={16} className="text-orange-400" />
        <span className="text-sm font-bold text-gray-300 uppercase tracking-wider">Live Simulator: Theme Toggle</span>
      </div>
      <div className={`p-8 transition-colors duration-500 ${isDark ? 'bg-[#111827]' : 'bg-[#f9fafb]'}`}>
        <div className={`max-w-xs mx-auto p-8 rounded-2xl shadow-xl text-center transition-colors duration-500 ${isDark ? 'bg-[#1f2933] text-[#e5e7eb]' : 'bg-white text-[#111827]'}`}>
          <h2 className="text-2xl font-bold mb-2">Jane Doe</h2>
          <p className={`mb-4 text-sm ${isDark ? 'text-[#9ca3af]' : 'text-[#6b7280]'}`}>Frontend Developer</p>
          <p className="mb-6 text-sm leading-relaxed">
            I love building clean user interfaces with HTML, CSS, and JavaScript.
          </p>
          <button 
            onClick={() => setIsDark(!isDark)}
            className="px-5 py-2.5 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors text-sm shadow-lg shadow-blue-500/30"
          >
            {isDark ? "Switch to light mode" : "Switch to dark mode"}
          </button>
        </div>
      </div>
    </div>
  );
};

const HtmlCssJsConnection = () => {
  return (
    <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
      <SEO 
        title="HTML + CSS + JS Connection"
        description="Learn how HTML, CSS, and JavaScript connect and interact to build modern, dynamic web pages."
        keywords="html css js connection, DOM api, web development basics, frontend integration"
        url="/webdevelopment/html/integration"
      />

      {/* Hero Header */}
      <header className="py-12 text-center md:text-left border-b border-gray-800 mb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 opacity-20 transform translate-x-1/4 -translate-y-1/4">
          <Layers size={400} className="text-orange-900" />
        </div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase tracking-wider border border-orange-500/20 mb-4 inline-block">
            Advanced Module
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            HTML + CSS + JS <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Connection</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Understand the holy trinity of web development. See exactly how structure, presentation, and behavior work together.
          </p>
        </motion.div>
      </header>

      <div className="prose prose-invert prose-lg max-w-none">
        
        {/* Section 1 */}
        <Section title="Big picture: who does what?" icon={Eye} id="big-picture">
          <p>
            A modern web page is built from three core technologies that each have a distinct job:
          </p>
          <ul className="space-y-2 mt-4 text-gray-300">
            <li><strong className="text-orange-400">HTML (HyperText Markup Language)</strong> – defines the <strong>structure</strong> and <strong>meaning</strong> of the content (headings, paragraphs, images, forms, buttons, etc.).</li>
            <li><strong className="text-blue-400">CSS (Cascading Style Sheets)</strong> – defines the <strong>presentation</strong> (colors, fonts, layout, spacing, responsiveness).</li>
            <li><strong className="text-yellow-400">JavaScript</strong> – defines the <strong>behavior</strong> (interactivity, reacting to clicks, fetching data, updating the page without a reload).</li>
          </ul>

          <HighlightBox title="A useful analogy:" color="orange">
            <ul className="space-y-1">
              <li><strong>HTML</strong> = the walls and rooms of a house (what exists and where),</li>
              <li><strong>CSS</strong> = paint, furniture, and interior design (how it looks),</li>
              <li><strong>JavaScript</strong> = electricity and appliances (what moves or reacts).</li>
            </ul>
          </HighlightBox>
        </Section>

        {/* Section 2 */}
        <Section title="How the browser loads a page" icon={Cpu} id="browser-load">
          <p>When you open a URL, your browser roughly does this:</p>
          <ol className="space-y-3 mt-4 text-gray-300 list-decimal pl-6">
            <li>Downloads the HTML file and starts reading it from top to bottom.</li>
            <li>Builds the <strong>DOM (Document Object Model)</strong> – an in‑memory tree representation of all the HTML elements: <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;body&gt;</code>, <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;button&gt;</code>, etc.</li>
            <li>Whenever it encounters <code>&lt;link rel="stylesheet" …&gt;</code> or <code>&lt;style&gt;…&lt;/style&gt;</code>, it loads CSS and builds a <strong>CSSOM</strong> (a tree of all the style rules).</li>
            <li>It combines DOM + CSSOM to compute the final layout and paint pixels on the screen.</li>
            <li>When it encounters <code>&lt;script&gt;</code>, it loads and runs JavaScript, which can <strong>read</strong> and <strong>modify</strong> the DOM and CSSOM through Web APIs we collectively call the DOM API.</li>
          </ol>
          <p className="mt-4 text-xl font-semibold text-white">
            So JavaScript never edits the raw HTML file; it talks to the <strong>DOM</strong>, which is the browser’s live, tree‑like model of the page.
          </p>
        </Section>

        {/* Section 3 */}
        <Section title="HTML: building a clean structure for CSS and JS" icon={Code} id="clean-structure">
          <p>HTML gives things names and roles so that CSS and JavaScript can target them reliably.</p>
          <p>A minimal, well‑structured page:</p>
          
          <LocalCodeBlock title="index.html" language="xml" code={`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>HTML + CSS + JS Example</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="site-header">
      <h1 id="main-title">Welcome!</h1>
    </header>
    <main>
      <p class="intro-text">
        This text will be styled with CSS and can be changed with JavaScript.
      </p>
      <button id="change-text-btn">Change text</button>
    </main>
    <script src="script.js" defer></script>
  </body>
</html>`} />

          <HighlightBox title="Key ideas:" color="green">
            <ul className="space-y-2">
              <li>Use semantic elements like <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;footer&gt;</code> for meaning, not just <code>&lt;div&gt;</code> everywhere.</li>
              <li>Use <code>class</code> for reusable styling hooks (<code>class="intro-text"</code>) and <code>id</code> for unique elements JS will often target (<code>id="change-text-btn"</code>).</li>
              <li>Link your CSS with <code>&lt;link rel="stylesheet" href="styles.css"&gt;</code> in <code>&lt;head&gt;</code>, and your JS with <code>&lt;script src="script.js" defer&gt;&lt;/script&gt;</code> so it runs after the HTML is parsed.</li>
            </ul>
          </HighlightBox>
        </Section>

        {/* Section 4 */}
        <Section title="CSS: attaching style to the structure" icon={Paintbrush} id="css-styles">
          <p>CSS is a separate language that selects HTML elements and applies style rules.</p>
          <p>A simple <code>styles.css</code> for the page above:</p>

          <LocalCodeBlock title="styles.css" language="css" code={`/* Global styles */
body {
  font-family: system-ui, sans-serif;
  margin: 0;
  padding: 2rem;
  background-color: #f5f5f5;
}

/* Class selector */
.intro-text {
  color: #333;
  font-size: 1.1rem;
}

/* ID selector */
#change-text-btn {
  padding: 0.5rem 1rem;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* Pseudo-class: style on interaction */
#change-text-btn:hover {
  background-color: #1d4ed8;
}`} />
          
          <p><strong>Main connection points between HTML and CSS:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Type selectors</strong> (<code>p</code>, <code>button</code>) style all elements of that type.</li>
            <li><strong>Class selectors</strong> (<code>.intro-text</code>) style any element with that class.</li>
            <li><strong>ID selectors</strong> (<code>#change-text-btn</code>) target exactly one element (should be unique).</li>
          </ul>
          <p className="mt-4">Because CSS is loaded before JS runs (with <code>defer</code>), JavaScript works with elements that are already styled, and can also <strong>change</strong> styles on the fly.</p>
        </Section>

        {/* Section 5 */}
        <Section title="JavaScript in the browser: DOM + events" icon={Zap} id="js-dom">
          <p>In the browser, JavaScript gets access to a set of Web APIs, the most important one being the <strong>DOM API</strong>.</p>
          <p>The DOM API lets you:</p>
          <ul className="list-disc pl-6 space-y-1 mb-6">
            <li>Find elements (<code>document.getElementById</code>, <code>querySelector</code>)</li>
            <li>Read or change text and HTML content</li>
            <li>Add/remove CSS classes or inline styles</li>
            <li>Listen for <strong>events</strong> like <code>click</code>, <code>input</code>, <code>submit</code></li>
            <li>Create and remove elements dynamically</li>
          </ul>

          <p>A simple <code>script.js</code> that wires behavior to our button:</p>
          <LocalCodeBlock title="script.js" language="javascript" code={`// Run when the DOM is ready because we used "defer" in the script tag

// 1. Grab elements from the DOM
const title = document.getElementById("main-title");
const intro = document.querySelector(".intro-text");
const button = document.getElementById("change-text-btn");

// 2. Add behavior on click
button.addEventListener("click", () => {
  title.textContent = "You clicked the button!";
  intro.textContent = "The text was changed by JavaScript.";
  
  // Toggle a CSS class to change appearance
  intro.classList.toggle("highlighted");
});`} />

          <p>In <code>styles.css</code> you could define:</p>
          <LocalCodeBlock title="styles.css" language="css" code={`.highlighted {
  background-color: #facc15;
  padding: 0.5rem;
}`} />

          <HighlightBox title="This is the core of HTML–CSS–JS interaction:" color="purple">
            <ul className="space-y-1">
              <li><strong>HTML</strong> creates identifiable elements (<code>id</code>, <code>class</code>).</li>
              <li><strong>CSS</strong> defines how different classes/states look.</li>
              <li><strong>JavaScript</strong> listens to user actions and updates text, attributes, classes, or creates/removes elements, which automatically triggers CSS to restyle the page.</li>
            </ul>
          </HighlightBox>
        </Section>

        {/* Section 6 */}
        <Section title="Understanding the DOM tree (essential mental model)" icon={FolderTree} id="dom-tree">
          <p>The DOM is a <strong>tree</strong> of nodes representing your HTML document.</p>
          <p>For this HTML:</p>
          <LocalCodeBlock title="index.html" language="xml" code={`<body>
  <h1>Hello</h1>
  <p>This is a paragraph.</p>
  <button>Click me</button>
</body>`} />
          <p>The DOM looks (conceptually) like:</p>
          <div className="bg-gray-900 p-6 rounded-xl font-mono text-sm text-gray-400 mb-6 border border-gray-800">
            <div>document</div>
            <div className="pl-4">└── &lt;html&gt;</div>
            <div className="pl-8">├── &lt;head&gt; …</div>
            <div className="pl-8">└── &lt;body&gt;</div>
            <div className="pl-12">├── &lt;h1&gt; → text node "Hello"</div>
            <div className="pl-12">├── &lt;p&gt; → text node "This is a paragraph."</div>
            <div className="pl-12">└── &lt;button&gt; → text node "Click me"</div>
          </div>

          <p>JavaScript does things like:</p>
          <LocalCodeBlock title="script.js" language="javascript" code={`const button = document.querySelector("button");
button.textContent = "Clicked!";`} />
          <p>You didn’t change the original HTML file; you changed the <strong>button node</strong> in the DOM, and the browser re-renders it.</p>
          <p>You can also create new nodes:</p>
          <LocalCodeBlock title="script.js" language="javascript" code={`const newPara = document.createElement("p");
newPara.textContent = "This paragraph was added with JavaScript.";
document.body.appendChild(newPara);`} />
          <p>This is exactly how interactive interfaces, infinite lists, and dynamic forms are built: JS is constantly modifying the DOM tree.</p>
        </Section>

        {/* Section 7 */}
        <Section title="File organization: clean separation of concerns" icon={Layers} id="file-org">
          <p>A good starting pattern is:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><code>index.html</code> – content and structure only (no big style blocks or long inline JS)</li>
            <li><code>styles.css</code> – all your layout, colors, typography</li>
            <li><code>script.js</code> – all your behavior and logic</li>
          </ul>
          <p>Your HTML connects them:</p>
          <LocalCodeBlock title="index.html" language="xml" code={`<link rel="stylesheet" href="styles.css" />
<script src="script.js" defer></script>`} />
          <HighlightBox title="Benefits of this separation:" color="blue">
            <ul className="list-disc pl-4 space-y-1">
              <li>Easier to read and maintain.</li>
              <li>You can change design without touching HTML or JS.</li>
              <li>You can change behavior without touching HTML or CSS.</li>
              <li>Browsers cache CSS and JS files separately, improving performance.</li>
            </ul>
          </HighlightBox>
        </Section>

        {/* Section 8 */}
        <Section title="Mini project: interactive “theme toggle” card" icon={Eye} id="mini-project">
          <p>Let’s build a tiny component that shows a profile card and a button that toggles between light and dark themes. This demonstrates the <strong>connection</strong> between HTML, CSS, and JS very clearly.</p>

          <ThemeToggleSimulator />

          <h4 className="text-xl font-bold mt-8 mb-4 text-white">HTML (index.html)</h4>
          <LocalCodeBlock title="index.html" language="xml" code={`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Theme Toggle Card</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <main class="page">
      <section class="card" id="profile-card">
        <h2 class="card__title">Jane Doe</h2>
        <p class="card__subtitle">Frontend Developer</p>
        <p class="card__text">
          I love building clean user interfaces with HTML, CSS, and JavaScript.
        </p>
        <button id="theme-toggle-btn">Switch to dark mode</button>
      </section>
    </main>
    <script src="script.js" defer></script>
  </body>
</html>`} />

          <h4 className="text-xl font-bold mt-8 mb-4 text-white">CSS (styles.css)</h4>
          <LocalCodeBlock title="styles.css" language="css" code={`:root {
  --bg-light: #f9fafb;
  --bg-dark: #111827;
  --card-light: #ffffff;
  --card-dark: #1f2933;
  --text-light: #111827;
  --text-dark: #e5e7eb;
}

/* Page base */
.page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  background-color: var(--bg-light);
}

/* Card in light mode by default */
.card {
  background-color: var(--card-light);
  color: var(--text-light);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.1);
  max-width: 320px;
  text-align: center;
}

/* BEM-style element classes */
.card__title {
  margin: 0 0 0.5rem;
  font-size: 1.5rem;
}
.card__subtitle {
  margin: 0 0 1rem;
  color: #6b7280;
}
.card__text {
  margin-bottom: 1.5rem;
}

/* Button */
#theme-toggle-btn {
  padding: 0.5rem 1.25rem;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  background-color: #2563eb;
  color: white;
}

/* Dark-mode modifier */
.card--dark {
  background-color: var(--card-dark);
  color: var(--text-dark);
}
.card--dark .card__subtitle {
  color: #9ca3af;
}

/* When body is dark, change page background too */
body.dark {
  background-color: var(--bg-dark);
}`} />
          <p>Notice how CSS is prepared with <strong>class-based modifiers</strong> (<code>.card--dark</code>, <code>body.dark</code>) that JavaScript can toggle.</p>

          <h4 className="text-xl font-bold mt-8 mb-4 text-white">JavaScript (script.js)</h4>
          <LocalCodeBlock title="script.js" language="javascript" code={`const card = document.getElementById("profile-card");
const button = document.getElementById("theme-toggle-btn");
let isDark = false;

button.addEventListener("click", () => {
  isDark = !isDark;
  
  // Toggle classes on the DOM
  card.classList.toggle("card--dark", isDark);
  document.body.classList.toggle("dark", isDark);
  
  // Update button text based on state
  button.textContent = isDark ? "Switch to light mode" : "Switch to dark mode";
});`} />

          <HighlightBox title="What’s happening here:" color="orange">
            <ol className="list-decimal pl-4 space-y-1">
              <li><strong>HTML</strong> provides identifiable hooks (<code>id="profile-card"</code>, <code>id="theme-toggle-btn"</code>).</li>
              <li><strong>CSS</strong> defines two visual states: normal card vs <code>.card--dark</code>, and normal body vs <code>.dark</code>.</li>
              <li><strong>JavaScript</strong> listens for button clicks and toggles CSS classes accordingly.</li>
            </ol>
            <p className="mt-2 text-white font-bold">The DOM updates, and CSS automatically re-applies the correct styles.</p>
            <p>This is the core pattern you’ll use everywhere: HTML elements + CSS classes + JS event listeners and DOM manipulation.</p>
          </HighlightBox>
        </Section>

        {/* Section 9 */}
        <Section title="Common connection patterns you’ll use daily" icon={Database} id="common-patterns">
          <p>Once you grasp the basics, you’ll repeatedly use these patterns:</p>
          <div className="space-y-4 mt-6">
            <div className="bg-gray-900/50 border-l-4 border-orange-500 p-4 rounded-r-xl">
              <h4 className="font-bold text-white mb-2">Show/hide elements</h4>
              <p className="text-sm"><strong>CSS:</strong> <code>.hidden &#123; display: none; &#125;</code></p>
              <p className="text-sm"><strong>JS:</strong> <code>element.classList.add("hidden");</code> or <code>.remove("hidden");</code></p>
            </div>
            <div className="bg-gray-900/50 border-l-4 border-blue-500 p-4 rounded-r-xl">
              <h4 className="font-bold text-white mb-2">Form handling</h4>
              <p className="text-sm"><strong>HTML:</strong> <code>&lt;form&gt;</code> with <code>&lt;input&gt;</code> and <code>&lt;button type="submit"&gt;</code></p>
              <p className="text-sm"><strong>JS:</strong> <code>form.addEventListener("submit", (e) =&gt; &#123; e.preventDefault(); … &#125;);</code></p>
              <p className="text-sm"><strong>CSS:</strong> style <code>input:focus</code>, <code>button:disabled</code>, error states, etc.</p>
            </div>
            <div className="bg-gray-900/50 border-l-4 border-green-500 p-4 rounded-r-xl">
              <h4 className="font-bold text-white mb-2">Dynamic lists/cards</h4>
              <p className="text-sm"><strong>HTML:</strong> <code>&lt;ul id="todo-list"&gt;&lt;/ul&gt;</code></p>
              <p className="text-sm"><strong>JS:</strong> <code>createElement("li")</code>, append to the list when user adds items.</p>
              <p className="text-sm"><strong>CSS:</strong> style list items, hover states, completed states using classes.</p>
            </div>
            <div className="bg-gray-900/50 border-l-4 border-purple-500 p-4 rounded-r-xl">
              <h4 className="font-bold text-white mb-2">Responsive layout</h4>
              <p className="text-sm"><strong>HTML:</strong> group logical sections with containers.</p>
              <p className="text-sm"><strong>CSS:</strong> use Flexbox/Grid and media queries; HTML stays the same.</p>
              <p className="text-sm"><strong>JS:</strong> sometimes adds/removes classes for responsive menus (e.g., mobile nav toggle).</p>
            </div>
          </div>
          <p className="mt-6 italic text-gray-400">All of these are just variations of “HTML describes what, CSS describes how it looks, JS describes how it changes over time.”</p>
        </Section>

        {/* Section 10 */}
        <Section title="How to go deeper from here" icon={ArrowRight} id="go-deeper">
          <p>To keep this module beginner‑friendly but powerful, here’s a suggested next path with high‑quality, free docs:</p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6 mb-8">
            <div className="p-5 border border-gray-700 bg-gray-900/80 rounded-xl">
              <h4 className="font-bold text-orange-400 mb-2">Deepen HTML & CSS</h4>
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li>MDN HTML guide and reference (elements, attributes, forms, semantics).</li>
                <li>MDN CSS tutorials (selectors, cascade, box model, Flexbox, Grid, media queries).</li>
              </ul>
            </div>
            <div className="p-5 border border-gray-700 bg-gray-900/80 rounded-xl">
              <h4 className="font-bold text-yellow-400 mb-2">Deepen JavaScript in the browser</h4>
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li>MDN JavaScript basics and “JavaScript guide” for language fundamentals (types, functions, objects, arrays, modules).</li>
                <li>MDN DOM scripting introduction to practice selecting elements, handling events, and updating the DOM.</li>
              </ul>
            </div>
          </div>

          <HighlightBox title="Practice projects (all focused on HTML–CSS–JS connection):" color="green">
            <ul className="list-disc pl-5 space-y-1">
              <li>A counter app (buttons to increment/decrement, JS updates text).</li>
              <li>A todo list (add/remove tasks, mark complete with CSS class).</li>
              <li>A tabbed interface (JS toggles which section is visible by adding/removing classes).</li>
            </ul>
          </HighlightBox>

          <p className="mt-8 text-xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
            Whenever you’re unsure how something should connect, ask yourself:<br/>
            “Which layer is this: structure (HTML), presentation (CSS), or behavior (JS)?”<br/>
            Then design your solution so that each concern lives in the correct place, wired together through attributes and the DOM API.
          </p>
        </Section>

      </div>

      {/* Navigation Footer */}
      <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col-reverse md:flex-row md:justify-between items-center gap-4 md:gap-0">
        <Link 
          to="/webdevelopment/html/best-practices"
          className="group flex items-center gap-4 px-4 md:px-6 py-2 md:py-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-orange-500 transition-all w-full md:w-auto"
        >
          <div className="p-2 bg-orange-500/10 rounded-full text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all flex-shrink-0">
            <ArrowLeft size={20} />
          </div>
          <div className="text-left">
            <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Previous Module</span>
            <div className="text-white font-bold group-hover:text-orange-400 transition-colors">HTML Best Practices</div>
          </div>
        </Link>
        <span
                  className="group flex items-center justify-between gap-4 px-4 md:px-6 py-2 md:py-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-grey-500 transition-all w-full md:w-auto opacity-60 cursor-not-allowed"
                >
                  <div className="text-right">
                    <span className="text-xs text-grey-500 uppercase font-bold tracking-wider">Next Module</span>
                    <div className="text-white font-bold transition-colors">End of HTML Course</div>
                  </div>
                  <div className="p-2 bg-grey-500/10 rounded-full text-grey-500 transition-all flex-shrink-0">
                    <ArrowRight size={20} />
                  </div>
                </span>
      </div>

    </article>
  );
};

export default HtmlCssJsConnection;