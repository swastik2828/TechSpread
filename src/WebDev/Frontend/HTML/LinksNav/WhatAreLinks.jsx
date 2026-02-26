import React from 'react';
import { Link as LinkIcon, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import introImg from '../../../../assets/WebDev/html_browser_flow.jpeg';

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

const WhatAreLinks = () => {
  return (
    <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
      <SEO
        title="What HTML Links Are And Why They Matter"
        description="Learn the fundamentals of HTML links, the anchor tag, and why links are the heart of web navigation."
        keywords="HTML links, what is a link, anchor tag, web navigation, hyperlink reference, href attribute, beginner HTML, TechSpread"
        url="/webdevelopment/html/links-intro"
      />

      <header className="py-12 border-b border-gray-800 mb-12">
        <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase border border-orange-500/20 mb-4 inline-block">
          Module 4.1
        </span>
        <h1 className="text-5xl font-extrabold text-white mb-6">What HTML Links Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">And Why They Matter</span></h1>
        <p className="text-xl text-gray-400 max-w-3xl">
          Links are the heart of the web because they connect individual pages into a navigable network of information.
        </p>
      </header>

      <div className="prose prose-invert prose-lg max-w-none">
        <Section title="The Core of the Web" icon={LinkIcon}>
          <p>
            Without links, each page would be an isolated document, and users would have to manually know and type every address they want to visit. A link turns part of a page into something you can click or tap, and the browser then loads a new location, which might be another page, another site, a file, or even a specific part of the same page. From a beginner’s perspective, understanding links is the first step toward building sites that feel like real websites instead of static documents.
          </p>
          <p>
            In HTML, links are created with the anchor element, written as <code>&lt;a&gt; ... &lt;/a&gt;</code>. The word "anchor" comes from earlier days of the web, when links were described as anchors between documents, and the same element is still used today.
          </p>

          <div className="my-8 rounded-xl overflow-hidden border border-gray-800 bg-[#0d1117] flex justify-center items-center p-4">
            <img src={introImg} alt="HTML links concept" className="max-w-full h-auto rounded-lg opacity-80 hover:opacity-100 transition-opacity" />
          </div>

          <p>
            The hyperlink reference is defined by the <code>href</code> attribute on the <code>&lt;a&gt;</code> tag; it tells the browser where the link should go. When a user activates the link—by clicking with a mouse, tapping on touch screens, or using a keyboard shortcut in screen readers—the browser follows the address provided in <code>href</code> and loads that resource.
          </p>

          <h3 className="text-2xl text-white font-bold mt-8 mb-4">Common Kinds of Links</h3>
          <p>Conceptually, there are several common kinds of links you will create:</p>
          <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-400">
            <li>Links from one website to a completely different website (external links).</li>
            <li>Links from one page to another page on the same website (internal links).</li>
            <li>Links from one part of a page to another part of the same page (in‑page or fragment links).</li>
            <li>Links that trigger special actions, such as starting an email, downloading a file, or dialing a phone number on mobile.</li>
            <li>Links that open in new tabs or windows.</li>
          </ul>
          <p className="mt-4">
            All these cases use the same <code>&lt;a&gt;</code> element; only the value of attributes like <code>href</code>, <code>target</code>, or others changes. This consistency is helpful because once you understand the basic pattern for one type of link, the others follow naturally.
          </p>
        </Section>

        <Section title="Navigation & Accessibility" icon={LinkIcon}>
          <p>
            From the user’s point of view, links are also strong signals for navigation and understanding. By default, browsers style unvisited links as blue text with an underline, and visited links as purple text with an underline, so users can quickly see where they can go and what they have already visited.
          </p>
          <p>
            Many designers customize these colors, but the essential idea remains: links should look clickable and should stand out from regular text. If you style links in a way that hides their clickability, people may miss important navigation paths, making your site harder to use.
          </p>
          <p>
            Links are equally important for accessibility tools such as screen readers. Screen reader users can navigate a page by jumping from link to link, listening to the link text instead of reading visually. If the link text is vague (for example “click here”), it is much harder for them to understand where each link goes; descriptive link text (for example “Read the HTML links tutorial”) provides quick, meaningful context.
          </p>
          <p>
            Search engines also pay attention to link structure and link text, using them as signals to understand how pages connect and what each page is about.
          </p>
        </Section>

        <Section title="Modern Linking Behavior" icon={LinkIcon}>
          <p>
            In modern HTML, links are not only for plain navigation between pages; they can connect to images, downloads, API endpoints, or even trigger scripts in client‑side applications. However, even in complex applications, it is still recommended to use <code>&lt;a&gt;</code> for things that behave like navigation—moving the user to a different resource or view—because browsers and assistive technologies have built‑in expectations around this element.
          </p>
          <p>
            Buttons (<code>&lt;button&gt;</code>) are usually reserved for actions like submitting a form or opening a dialog rather than moving to a different location.
          </p>
          <p>
            Understanding links as relationships between resources is also helpful: <code>href</code> is a pointer from the current document to another resource, and HTML’s job is to expose that relationship to the user. When you write a link, you are answering the question: "From here, where could the user reasonably want to go next?"
          </p>
          <p>
            Thoughtful links guide visitors along a path, turning a loose collection of pages into a coherent experience. As you work through the next sections, you will see how the same basic building block—the anchor element—can cover all the link and navigation patterns you need for typical websites.
          </p>
        </Section>
      </div>

      <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
        <Link to="../charsets" className="flex items-center gap-2 text-gray-500 hover:text-white"><ArrowLeft size={16} /> Charsets</Link>
        <Link to="../anchor-syntax" className="flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300">Next: Anchor Syntax <ArrowRight size={16} /></Link>
      </div>
    </article>
  );
};

export default WhatAreLinks;