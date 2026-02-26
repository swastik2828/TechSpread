import React from 'react';
import { ExternalLink, ArrowRight, ArrowLeft, ShieldAlert, AlertTriangle } from 'lucide-react';
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

const NewTabsWindows = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="Opening Links In New Tabs Or Windows"
                description="Learn how to open links in new tabs using target='_blank' and ensure security with rel='noopener noreferrer'."
                keywords="HTML target attribute, target=_blank, rel noopener noreferrer, open link in new tab, secure HTML links, TechSpread"
                url="/webdevelopment/html/new-tabs"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase border border-orange-500/20 mb-4 inline-block">
                    Module 4.7
                </span>
                <h1 className="text-5xl font-extrabold text-white mb-6">Opening Links In <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">New Tabs Or Windows</span></h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    By default, when a user activates a link, the browser navigates in the same tab or window. Sometimes, authors want a link to open in a new tab instead, usually so that the original page remains available for easy return.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">

                <Section title="The Target Attribute" icon={ExternalLink}>
                    <p>
                        In HTML, link handling is controlled by the <code>target</code> attribute on the <code>&lt;a&gt;</code> element. The value of this attribute determines the "browsing context".
                    </p>
                    <p>
                        To explicitly force a link to open in a new, un-named tab (or window, depending on the user's browser preferences), set <code>target="_blank"</code>:
                    </p>
                    <LocalCodeBlock code={`<a href="https://www.imdb.com/" target="_blank">
  Internet Movie Database 
</a>`} />
                    <p>
                        Here, <code>target="_blank"</code> instructs the browser to spin up a new tab for the destination. The original page stays loaded in the existing tab, completely unmodified.
                    </p>
                </Section>

                <Section title="Usability and Accessibility Issues" icon={AlertTriangle}>
                    <p>
                        While this technique is extremely common, modern usability and accessibility guidelines recommend using it sparingly. Forcing new tabs can disorient some users, especially those using assistive technologies (like Screen Readers) or keyboard navigation, because the unexpected change in window context may not be announced clearly. They may press "Back" on their browser and wonder why nothing is happening (because they are in a completely new tab with no history).
                    </p>
                    <p>
                        Many power users also prefer to decide for themselves whether to open a link in the same tab or a new one, using browser features like middle‑clicking their mouse wheel or using keyboard modifier shortcuts (Command/Ctrl + Click).
                    </p>
                    <p>
                        If you do consciously choose to open a link in a new tab (for example, opening an external reference document without losing a multi-step form's state), best practice is to deliberately warn users. You should indicate this in the link text or nearby, such as "(opens in a new tab)" or with an appropriate visual indicator accompanied by accessible labeling.
                    </p>
                    <LocalCodeBlock code={`<a href="https://www.imdb.com/" target="_blank" rel="noopener noreferrer">
  Internet Movie Database 
  <span class="sr-only">(opens in a new tab)</span>
</a>`} />
                    <p>
                        The visually hidden <code>sr-only</code> text (styled with CSS to be invisible but readable by screen readers) provides an explicit cue. This kind of labeling respects user autonomy and drastically reduces surprise.
                    </p>
                </Section>

                <Section title="Security Risks: noopener and noreferrer" icon={ShieldAlert}>
                    <p>
                        Security is an incredibly important consideration. When using <code>target="_blank"</code>, there is a known vulnerability regarding Javascript execution contexts.
                    </p>
                    <p>
                        Without mitigation, the newly opened page can access the <code>window.opener</code> object back on your site. This means the newly opened (potentially untrusted) page could execute malicious JavaScript to manipulate your original page, perhaps redirecting your original tab to a phishing clone login page.
                    </p>
                    <p>
                        To neutralize this threat, you must add <code>rel="noopener noreferrer"</code> to the anchor tag:
                    </p>
                    <ol className="list-decimal pl-5 mt-4 space-y-2 text-gray-300">
                        <li><strong>noopener:</strong> Severely restricts the new page's access to the <code>window.opener</code> property, keeping your original tab safe.</li>
                        <li><strong>noreferrer:</strong> Prevents the browser from sending the origin page’s address as the HTTP <code>Referer</code> header, which can be highly desirable for user privacy (for example, if you don't want the external site knowing exactly which internal portal the user just came from).</li>
                    </ol>
                    <div className="bg-green-900/10 border border-green-500/20 p-6 rounded-xl my-6">
                        <p className="text-sm text-gray-300">
                            <strong>Good news:</strong> Most modern browsers (Chrome 88+, Safari, Firefox) now automatically imply <code>rel="noopener"</code> whenever they see <code>target="_blank"</code> to protect users implicitly. However, explicitly writing it is still required for backwards compatibility with slightly older browsers.
                        </p>
                    </div>
                </Section>

            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="../special-links" className="flex items-center gap-2 text-gray-500 hover:text-white"><ArrowLeft size={16} /> Email & Special</Link>
                <Link to="../nav-menus" className="flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300">Next: Navigation Menus <ArrowRight size={16} /></Link>
            </div>
        </article>
    );
};

export default NewTabsWindows;
