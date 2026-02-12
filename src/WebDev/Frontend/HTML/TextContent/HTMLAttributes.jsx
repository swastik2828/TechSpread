import React from 'react';
import { Hash, Settings, CheckCircle, XCircle, ArrowRight, ArrowLeft, Globe } from 'lucide-react';
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

const HTMLAttributes = () => {
  return (
    <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
      <SEO 
        title="Mastering HTML Attributes" 
        description="Learn how to configure HTML elements using attributes. Covers global attributes, boolean attributes, and best practices."
        keywords="html attributes, href, src, global attributes, boolean attributes"
      />

      <header className="py-12 border-b border-gray-800 mb-12">
        <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase border border-orange-500/20 mb-4 inline-block">
          Module 3.2
        </span>
        <h1 className="text-5xl font-extrabold text-white mb-6">HTML <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Attributes</span></h1>
        <p className="text-xl text-gray-400 max-w-3xl">
          Elements are the nouns of HTML; attributes are the adjectives. They define characteristics, behavior, and data. Without them, an image is just an empty box, and a link goes nowhere.
        </p>
      </header>

      <div className="prose prose-invert prose-lg max-w-none">
        
        <Section title="What is an Attribute?" icon={Settings}>
          <p>
            Attributes provide additional information about an element. They are always specified in the <strong>opening tag</strong> and usually come in name/value pairs: <code>name="value"</code>.
          </p>
          <p>
            Think of an attribute as a setting knob on a machine. The machine (element) does the work, but the knob (attribute) tells it exactly <em>how</em> to do it.
          </p>
          <LocalCodeBlock code={`<a href="https://google.com" target="_blank">Go to Google</a>`} />
          <p className="text-sm">
            In this example, <code>href</code> tells the browser <em>where</em> to go, and <code>target</code> tells it <em>how</em> to open the link (in a new tab).
          </p>
          <p className="mt-4">
            <strong>Syntax Rules:</strong>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Attribute names should be lowercase.</li>
              <li>Values should always be wrapped in quotes (single <code>'</code> or double <code>"</code>). Double quotes are the standard convention.</li>
              <li>Multiple attributes are separated by spaces.</li>
            </ul>
          </p>
        </Section>

        <Section title="Global Attributes" icon={Globe}>
          <p>
            Some attributes are specific to certain elements (like <code>src</code> for images), but <strong>Global Attributes</strong> can be used on <em>any</em> HTML element. These are the superpowers of HTML manipulation.
          </p>
          
          <div className="space-y-6 mt-8">
            <div className="p-4 bg-gray-900 border border-gray-800 rounded-lg">
              <h4 className="text-orange-400 font-mono font-bold mb-2">id="unique-name"</h4>
              <p className="text-sm">
                Assigns a unique identifier to an element. Like a social security number, no two elements on a page should have the same ID. It is used for linking (bookmarks), CSS styling, and JavaScript targeting.
              </p>
            </div>
            
            <div className="p-4 bg-gray-900 border border-gray-800 rounded-lg">
              <h4 className="text-orange-400 font-mono font-bold mb-2">class="name1 name2"</h4>
              <p className="text-sm">
                Assigns one or more class names. Unlike IDs, classes are not unique. They are used to group elements together for styling. For example, you might have a class called <code>.button</code> that you apply to ten different links.
              </p>
            </div>

            <div className="p-4 bg-gray-900 border border-gray-800 rounded-lg">
              <h4 className="text-orange-400 font-mono font-bold mb-2">title="Tooltip text"</h4>
              <p className="text-sm">
                Provides advisory information. Browsers typically display this as a tooltip when the user hovers over the element. It's a simple way to add context without cluttering the design.
              </p>
            </div>

            <div className="p-4 bg-gray-900 border border-gray-800 rounded-lg">
              <h4 className="text-orange-400 font-mono font-bold mb-2">hidden</h4>
              <p className="text-sm">
                A newer attribute that tells the browser not to render the element. It’s functionally similar to CSS <code>display: none</code>, but it lives in the HTML semantics.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Boolean Attributes" icon={CheckCircle}>
          <p>
            Most attributes need a value, but some are just on/off switches. These are called <strong>Boolean Attributes</strong>. If the attribute is present, the value is true. If it is absent, the value is false.
          </p>
          <LocalCodeBlock code={`<input type="text">

<input type="text" disabled>

<input type="checkbox" checked>`} />
          <p>
            You <em>can</em> write <code>disabled="disabled"</code> or <code>disabled="true"</code>, but it is unnecessary and redundant. The mere presence of the word <code>disabled</code> is enough to trigger the behavior.
          </p>
        </Section>

        <Section title="The `data-*` Attributes" icon={Hash}>
          <p>
            What if you need to store some extra data in an element for your JavaScript to use, but there isn't a standard attribute for it? Enter custom data attributes.
          </p>
          <p>
            Any attribute starting with <code>data-</code> is reserved for your private use. Browsers ignore them, but they are easily accessible via JavaScript.
          </p>
          <LocalCodeBlock code={`<div id="user-123" data-role="admin" data-login-count="5">
  User Profile
</div>`} />
          <p>
            In this example, <code>data-role</code> and <code>data-login-count</code> don't affect how the page looks, but a script could read them to show an "Admin Badge" or offer a loyalty reward. This separates your data logic from your visual classes.
          </p>
        </Section>

      </div>

      <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
        <Link to="../elements" className="flex items-center gap-2 text-gray-500 hover:text-white"><ArrowLeft size={16}/> Elements</Link>
        <Link to="../headings" className="flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300">Next: Headings <ArrowRight size={16}/></Link>
      </div>
    </article>
  );
};

export default HTMLAttributes;