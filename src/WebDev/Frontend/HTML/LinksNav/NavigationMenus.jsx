import React from 'react';
import { Menu, ArrowRight, ArrowLeft, LayoutTemplate, Smartphone, Accessibility } from 'lucide-react';
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

const NavigationMenus = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="Building Navigation Menus With Links"
                description="Learn how to build semantic and accessible HTML navigation menus using the nav element, unordered lists, and CSS styling."
                keywords="HTML navigation menu, nav element, HTML lists, responsive menu, HTML breadcrumbs, horizontal menu CSS, TechSpread"
                url="/webdevelopment/html/nav-menus"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase border border-orange-500/20 mb-4 inline-block">
                    Module 4.8
                </span>
                <h1 className="text-5xl font-extrabold text-white mb-6">Building Navigation Menus <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">With Links</span></h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    Individual links are powerful, but real websites typically present groups of links as navigation menus. Navigation menus are the compass of your website, helping users answer two questions: "Where am I?" and "Where can I go from here?"
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">

                <Section title="The Semantic Structure" icon={LayoutTemplate}>
                    <p>
                        At the structural level, HTML5 provides the <code>&lt;nav&gt;</code> element to explicitly indicate a section of the page that contains major navigational links.
                    </p>
                    <p>
                        Inside <code>&lt;nav&gt;</code>, authors universally use unordered lists (<code>&lt;ul&gt;</code>) to group each navigation item as a list item (<code>&lt;li&gt;</code>), with an anchor inserted inside.
                    </p>
                    <LocalCodeBlock code={`<nav aria-label="Main Navigation">
  <ul>
    <li><a href="/" aria-current="page">Home</a></li>
    <li><a href="/about/">About</a></li>
    <li><a href="/movies/">Movies</a></li>
    <li><a href="/contact/">Contact</a></li>
  </ul>
</nav>`} />
                    <p>
                        This underlying structure is incredibly simple, highly readable, and works cleanly with default browser styling even before you write a single line of CSS. It also communicates deep meaning to assistive technologies: a screen reader will gracefully announce that this region is a navigation landmark containing a list of four items.
                    </p>
                </Section>

                <Section title="Pivoting from Vertical to Horizontal" icon={Menu}>
                    <p>
                        By default, unordered lists pile vertically with bullet points. However, CSS can rapidly transform this basic list into horizontal menus, vertical sidebars, or responsive dropdowns—all without altering the HTML link structure.
                    </p>
                    <p>For a basic horizontal menu, Flexbox is the perfect tool:</p>
                    <LocalCodeBlock label="CSS" code={`nav ul {
  display: flex;       /* Arrange items in a row */
  gap: 1.5rem;         /* Add spacing between links */
  list-style: none;    /* Remove the default bullet points */
  margin: 0;
  padding: 0;
}

nav a {
  text-decoration: none; /* Remove standard underlines */
  padding: 0.5rem 1rem;
  color: #a0aec0;
  transition: color 0.3s;
}

nav a:hover,
nav a[aria-current="page"] {
  color: #fb923c;      /* Highlight when hovered or active */
}`} />
                    <p>
                        With these styles, the navigation links appear gracefully in a row, each with a beautifully extended clickable area powered by the padding. The <code>aria-current="page"</code> attribute fundamentally powers the “active styling” state, visually signaling to the user where they currently are in the app hierarchy.
                    </p>
                </Section>

                <Section title="Mobile Layouts and Breadcrumbs" icon={Smartphone}>
                    <p>
                        Large websites often require multiple navigation zones: a main site‑wide header menu, breadcrumb navigation demonstrating the deeply nested descent path to the current page, and footer navigation handling secondary utility links.
                    </p>
                    <h3 className="text-2xl text-white font-bold mt-8 mb-4">Breadcrumbs</h3>
                    <p>
                        Breadcrumbs usually sit near the top of content pages:
                    </p>
                    <LocalCodeBlock code={`<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/movies/">Movies</a></li>
    <li aria-current="page">Reviews</li>
  </ol>
</nav>`} />
                    <p>
                        Notice we use an ordered list <code>&lt;ol&gt;</code> here because breadcrumbs represent a linear hierarchy sequence. The final item represents the current page and logically does not require a link to itself.
                    </p>

                    <h3 className="text-2xl text-white font-bold mt-8 mb-4">Responsive "Hamburger" Menus</h3>
                    <p>
                        On small screens or mobile devices, horizontal navigation universally collapses into a "hamburger" icon containing three distinct lines. When tapped, it expands into a vertical menu drawer covering the viewport.
                    </p>
                    <p>
                        Once again, while the visual layout dramatically changes to adapt to the constraints of the smaller display, the HTML items themselves are still regular <code>&lt;a&gt;</code> elements grouped logically behind the scenes. This architectural consistency means that regardless of device dimensions or styling engines, the browser handles the core links in entirely predictable, standard ways.
                    </p>
                </Section>

            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="../new-tabs" className="flex items-center gap-2 text-gray-500 hover:text-white"><ArrowLeft size={16} /> New Tabs & Windows</Link>
                <Link to="../links-best-practices" className="flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300">Next: Links Best Practices <ArrowRight size={16} /></Link>
            </div>
        </article>
    );
};

export default NavigationMenus;
