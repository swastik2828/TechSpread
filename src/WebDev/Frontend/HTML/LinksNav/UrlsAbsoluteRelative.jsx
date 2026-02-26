import React from 'react';
import { Link2, ArrowRight, ArrowLeft, Globe, MapPin, FileQuestion, Server } from 'lucide-react';
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

const UrlsAbsoluteRelative = () => {
  return (
    <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
      <SEO
        title="URLs, Absolute And Relative Paths in HTML"
        description="Understand the difference between absolute and relative URLs in HTML links, query strings, and fragment identifiers."
        keywords="HTML URL, absolute vs relative URL, query strings, URL fragment identifiers, HTML href path, URL structure, TechSpread"
        url="/webdevelopment/html/urls"
      />

      <header className="py-12 border-b border-gray-800 mb-12">
        <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase border border-orange-500/20 mb-4 inline-block">
          Module 4.3
        </span>
        <h1 className="text-5xl font-extrabold text-white mb-6">URLs, Absolute <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">And Relative</span></h1>
        <p className="text-xl text-gray-400 max-w-3xl">
          Every link needs a destination, and that destination is expressed as a URL, which stands for Uniform Resource Locator. A URL is a standardized way of describing where a resource lives on the internet or within a site.
        </p>
      </header>

      <div className="prose prose-invert prose-lg max-w-none">

        <Section title="What is a URL?" icon={Globe}>
          <p>
            A URL (Uniform Resource Locator) may refer to a complete web page, an image, a script, a downloadable file, or even a specific position within a document. Understanding the structure of URLs and the difference between absolute and relative forms is essential for writing robust links. You can think of a URL like a home address. Just as a physical address includes a country, state, city, street, and house number to uniquely identify a location, a URL contains a protocol, domain name, path, and sometimes specific queries or fragments to pinpoint a digital resource.
          </p>
          <div className="bg-blue-900/10 border border-blue-500/20 p-6 rounded-xl my-6">
            <h4 className="text-blue-400 font-bold mb-2">Anatomy of a URL</h4>
            <p className="text-sm text-gray-300">Let's dissect <code>https://www.example.com:443/movies/reviews.html?sort=desc#top</code>:</p>
            <ul className="list-disc pl-5 mt-2 text-sm text-gray-300 space-y-1">
              <li><strong>Protocol:</strong> <code>https://</code> tells the browser to use a secure HTTP connection.</li>
              <li><strong>Domain:</strong> <code>www.example.com</code> points to the specific server where the site lives.</li>
              <li><strong>Port (optional):</strong> <code>:443</code> is the default port for HTTPS. Usually omitted.</li>
              <li><strong>Path:</strong> <code>/movies/reviews.html</code> is the specific file or route on the server.</li>
              <li><strong>Query String (optional):</strong> <code>?sort=desc</code> passes data to the server (like a filter).</li>
              <li><strong>Fragment (optional):</strong> <code>#top</code> scrolls the browser to an element with <code>id="top"</code>.</li>
            </ul>
          </div>
        </Section>

        <Section title="Absolute URLs" icon={Server}>
          <p>
            An <strong>absolute URL</strong> includes the full address of the resource, starting from the scheme (<code>http://</code> or <code>https://</code>), followed by the domain name, and optionally a path, query string, and fragment. For example:
          </p>
          <LocalCodeBlock code={`<a href="https://www.example.com/movies/reviews.html">Read Reviews</a>`} />
          <p>
            In this URL, <code>https</code> is the scheme, <code>www.example.com</code> is the domain name, and <code>/movies/reviews.html</code> is the path to a specific file on that site. When you put this in an <code>href</code>, the browser knows exactly where to go, regardless of which page the user is currently viewing. Absolute URLs are typically used when you are linking away from your current website to a completely different domain. Without the protocol (like <code>https://</code>), the browser might mistakenly think you are trying to link to a local file on your own server.
          </p>
        </Section>

        <Section title="Relative URLs" icon={MapPin}>
          <p>
            <strong>Relative URLs</strong>, on the other hand, are shortcuts that specify a destination relative to the current document’s location. They are most commonly used for links within the same website, because they are shorter to write and easier to maintain if the domain name changes (for example, when moving from a development server to production).
          </p>
          <p>
            A simple relative URL might look like <code>about.html</code>, which tells the browser to look for a file named <code>about.html</code> in the same folder as the current page. Relative URLs can also include path segments to move into subfolders or back up to parent folders.
          </p>
          <LocalCodeBlock code={`<!-- Same folder -->
<a href="about.html">About Us</a>

<!-- Go into a subfolder -->
<a href="movies/reviews.html">Movie Reviews</a>

<!-- Go up one folder (parent directory) -->
<a href="../index.html">Home</a>

<!-- Go up two levels (grandparent directory) -->
<a href="../../index.html">Home</a>`} />
          <p>
            These patterns mirror the way file paths work in most operating systems, using <code>..</code> to mean “one folder up” and <code>/</code> to separate folder names. When the browser resolves a relative URL, it combines it with the current page’s URL to compute an absolute address behind the scenes.
          </p>
          <p>
            Using relative URLs has several advantages for developers. During early development, you might host your site on <code>http://localhost:8000</code> or on a temporary domain. If all internal links are relative, you can move the entire site to <code>https://www.example.com</code> without changing the link code. It also keeps your HTML cleaner and easier to read, because internal links only need to mention the part of the path that differs from the current page.
          </p>
        </Section>

        <Section title="When to use Absolute vs Relative?" icon={FileQuestion}>
          <p>
            From a best‑practice perspective, use <strong>absolute URLs</strong> when linking to external sites and <strong>relative URLs</strong> for internal navigation, unless there is a clear technical reason to do otherwise. This balances clarity and maintainability: external links should always include the full address so the destination is unambiguous, while internal links can stay flexible if the site’s domain name changes.
          </p>
          <p>
            However, there are situations where absolute URLs are still preferred, even within the same site. For example, when generating HTML from templates or content management systems, developers sometimes use absolute URLs to ensure that links work correctly regardless of where the HTML snippet is included. Absolute URLs are also useful in syndication (like RSS feeds), emails, or social media sharing meta tags, where the HTML may be displayed outside the original site, and relative paths would no longer make sense.
          </p>
        </Section>

        <Section title="Query Strings and Fragments" icon={Link2}>
          <p>
            Another important part of the URL is the <strong>fragment identifier</strong>, which starts with <code>#</code>. A URL like <code>https://www.example.com/guide.html#introduction</code> points to the <code>guide.html</code> page, but the fragment <code>#introduction</code> indicates a specific location on that page. In HTML, that location is usually defined by an element with a matching <code>id</code> attribute, and the browser will scroll to it when the link is activated. Fragments are used heavily in in‑page navigation and documentation sites.
          </p>
          <p>
            <strong>Query strings</strong>, which start with <code>?</code> in a URL, allow you to pass additional parameters to the server or application, such as filters, search terms, or pagination numbers. For example, <code>https://example.com/search?q=html+links&page=2</code> includes two query parameters: <code>q</code> and <code>page</code>. While beginners do not need to master query syntax immediately, it is useful to recognize that such URLs are still valid values for <code>href</code> and can be created by hand or generated dynamically.
          </p>
        </Section>
      </div>

      <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
        <Link to="../anchor-syntax" className="flex items-center gap-2 text-gray-500 hover:text-white"><ArrowLeft size={16} /> Anchor Syntax</Link>
        <Link to="../paths" className="flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300">Next: Folder Structure <ArrowRight size={16} /></Link>
      </div>
    </article>
  );
};

export default UrlsAbsoluteRelative;
