import React from 'react';
import { Code, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import LinksSimulator from "../../../../simulators/web/LinksSimulator";

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

const AnchorSyntax = () => {
  return (
    <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
      <SEO
        title="Basic Anchor Syntax And Link Text"
        description="Learn the fundamental structure of an HTML link, the anchor tag, and how to write descriptive link text for better accessibility and SEO."
        keywords="HTML anchor tag, a tag, href attribute, HTML link syntax, descriptive link text, image links, web accessibility, TechSpread"
        url="/webdevelopment/html/anchor-syntax"
      />
      <header className="py-12 border-b border-gray-800 mb-12">
        <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase border border-orange-500/20 mb-4 inline-block">Module 4.2</span>
        <h1 className="text-5xl font-extrabold text-white mb-6">Basic Anchor Syntax <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">And Link Text</span></h1>
      </header>
      <div className="prose prose-invert prose-lg max-w-none">

        <Section title="The Fundamental Structure" icon={Code}>
          <p>
            The fundamental structure of a link in HTML is the anchor element with an <code>href</code> attribute:
          </p>
          <LocalCodeBlock code={`<a href="URL">Link text</a>`} />
          <p>
            The opening tag <code>&lt;a&gt;</code> can contain several attributes, but <code>href</code> is the one that turns it into a true hyperlink; without <code>href</code>, the anchor is just a generic element with no navigation behavior. The content between the opening and closing tags is what users see and interact with—this could be text, images, or other inline elements.
          </p>
          <p>
            For beginners, starting with simple text links is the easiest way to learn the pattern. Here is a straightforward example that links to an external site:
          </p>
          <LocalCodeBlock code={`<p>Read movie reviews on <a href="https://www.imdb.com/">IMDb</a>.</p>`} />
          <p>
            In this snippet, the <code>href</code> contains an absolute URL (a full web address starting with <code>https://</code>), and the link text is the word "IMDb". When the user activates the link, the browser loads the IMDb homepage in the current tab or window. By default, the entire phrase "IMDb" appears styled as a link, and clicking anywhere on that word triggers navigation.
          </p>
        </Section>

        <Section title="The Importance of Link Text" icon={Code}>
          <p>
            The choice of link text is more important than it first appears. Descriptive link text helps three main groups: regular users scanning the page visually, screen reader users navigating a list of links, and search engines trying to understand the structure of your content.
          </p>
          <p>For example, compare the following options:</p>
          <LocalCodeBlock code={`<a href="/movies/reviews">Click here</a> for movie reviews.

Read our <a href="/movies/reviews">latest movie reviews</a>.`} />
          <p>
            In the first case, the link text "Click here" gives no clue about the destination when read out of context. In the second, the phrase "latest movie reviews" clearly communicates where the link leads, even if it is read by itself. Good link text often reuses or closely matches the heading of the destination page, which also aligns with the words people might use in search queries.
          </p>
        </Section>

        <Section title="Linking Images and Blocks" icon={Code}>
          <p>
            The anchor element can contain more than just plain text. Image links are common, created by placing an <code>&lt;img&gt;</code> element inside the anchor:
          </p>
          <LocalCodeBlock code={`<a href="/">
  <img src="/images/logo.png" alt="Site home">
</a>`} />
          <p>
            Here, the logo image itself becomes clickable, taking the user to the homepage. The <code>alt</code> text of the image remains important for accessibility, because screen readers will announce that text in place of the image; the anchor does not remove the need for meaningful alternative text.
          </p>
          <p>
            You can also nest inline elements like <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>, or <code>&lt;span&gt;</code> inside anchors to emphasize or style parts of the link text. Historically, it was considered invalid HTML to nest a block‑level element, such as <code>&lt;div&gt;</code>, inside an <code>&lt;a&gt;</code> tag. Modern HTML5 relaxed this rule, and now anchors are allowed to wrap block‑level content, which enables patterns like turning an entire card or panel into a single clickable link.
          </p>
          <LocalCodeBlock code={`<a href="/movie/inception" class="card">
  <h2>Inception</h2>
  <p>A mind‑bending science fiction heist film.</p>
</a>`} />
          <p>
            In this pattern, the whole card becomes one large hit area, which can be very user‑friendly on touch devices where small targets are hard to tap accurately. When doing this, ensure that the entire linked region leads to the same destination to avoid confusing users.
          </p>
        </Section>

        <Section title="Semantics and Attributes" icon={Code}>
          <p>
            From a semantic point of view, an anchor with <code>href</code> always represents a navigation action. If you want a piece of text that looks like a link but does not go anywhere yet (for example, in a prototype), you should either omit the <code>href</code> and treat it as non‑interactive, or point it to a safe placeholder like <code>#</code> only during development, being careful not to ship such placeholders to production. Using anchors without real destinations can create accessibility and usability problems, because users will expect navigation where none exists.
          </p>
          <p>
            It is also possible to add attributes like <code>title</code> to provide extra information about the link. For example:
          </p>
          <LocalCodeBlock code={`<a href="/movies/reviews" title="Read detailed reviews and ratings">
  Movie reviews
</a>`} />
          <p>
            Many browsers display the <code>title</code> attribute as a tooltip when the user hovers over the link with a mouse. However, modern accessibility guidance warns against relying on <code>title</code> for critical information, since it is not always exposed on touch devices or to assistive technologies. It is better to make the visible link text itself clear and self‑explanatory.
          </p>
          <p>
            As you practice writing anchors, keep these habits in mind: always include an <code>href</code>, choose meaningful link text, and make sure the clickable area is large enough and visually distinct. These simple conventions will make your pages much more usable, even before you start adding more advanced navigation structures.
          </p>
        </Section>

        <Section title="Interactive Playground" icon={Code}>
          <p className="mb-8">
            Try building your own link using the interactive simulator below. Experiment with different URLs, link texts, and target attributes to see how the HTML is generated and how the browser handles the click.
          </p>
          <LinksSimulator />
        </Section>
      </div>

      <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
        <Link to="../links-intro" className="flex items-center gap-2 text-gray-500 hover:text-white"><ArrowLeft size={16} /> What Are Links</Link>
        <Link to="../urls" className="flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300">Next: URLs <ArrowRight size={16} /></Link>
      </div>
    </article>
  );
};

export default AnchorSyntax;