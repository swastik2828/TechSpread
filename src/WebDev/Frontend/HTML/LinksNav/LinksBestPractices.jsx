import React from 'react';
import { Target, ArrowRight, ArrowLeft, Search, CheckCircle, Keyboard } from 'lucide-react';
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

const LinksBestPractices = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="Accessibility, Usability And SEO Best Practices For Links"
                description="Master the best practices for HTML links, including descriptive text, keyboard accessibility, focus states, and search engine optimization."
                keywords="HTML link best practices, accessible links, keyboard navigation, link SEO, broken links, link hover states, TechSpread"
                url="/webdevelopment/html/links-best-practices"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase border border-orange-500/20 mb-4 inline-block">
                    Module 4.9
                </span>
                <h1 className="text-5xl font-extrabold text-white mb-6">Accessibility, Usability & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">SEO Best Practices</span></h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    Good link and navigation design is not just about making things work technically; it is about making them work delightfully well for all human users and making content vividly discoverable. Accessibility, usability, and SEO overlap heavily.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">

                <Section title="Descriptive Copy is King" icon={CheckCircle}>
                    <p>
                        First and foremost, your link text should be uniquely descriptive, incredibly specific, and understandable completely out of the context of the surrounding paragraph.
                    </p>
                    <p>
                        Avoid hyper-generic phrases like <em>"click here"</em> or <em>"read more"</em> at all costs. Instead, summarize the direct destination or the subsequent action in the link text itself.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 my-8">
                        <div className="bg-red-900/10 border border-red-500/20 p-6 rounded-xl">
                            <h4 className="font-bold text-red-400 mb-2">❌ Bad Link Copy</h4>
                            <p className="text-sm">For the links cheat sheet, <span className="text-blue-500 underline cursor-pointer">click here</span>.</p>
                        </div>
                        <div className="bg-green-900/10 border border-green-500/20 p-6 rounded-xl">
                            <h4 className="font-bold text-green-400 mb-2">✅ Good Link Copy</h4>
                            <p className="text-sm">Download the <span className="text-blue-500 underline cursor-pointer m-1">HTML links cheat sheet</span>.</p>
                        </div>
                    </div>
                    <p>
                        Screen reader users frequently navigate heavy pages by rapidly tabbing through links linearly or by commanding their software to list all links on the page in a popup. If the list is a dozen repetitions of "click here", their experience is ruined. Meaningful phrases make this navigational experience far more efficient.
                    </p>
                </Section>

                <Section title="Visual Salience & Hover Vectors" icon={Target}>
                    <p>
                        Secondly, ensure that inline text links are blindingly obvious to interact with visually. The traditional blue, underlined style exists in computing history for a reason: it is instantly recognizable.
                    </p>
                    <p>
                        If you customize your brand link colors, strictly maintain sufficient contrast ratios against the background palette and strongly consider keeping underlines. In long dense paragraphs, colored text alone may utterly fail to stand out, especially for colorblind users.
                    </p>
                    <div className="bg-[#111] p-5 rounded-lg my-6 border-l-4 border-orange-500">
                        <p className="text-gray-300">
                            If you decide an underline looks too cluttered, you must provide a strong visual effect (like an underline reappearing, or a background shifting prominently) upon <code>:hover</code> and <code>:focus</code>.
                        </p>
                    </div>
                </Section>

                <Section title="Keyboard Navigability" icon={Keyboard}>
                    <p>
                        Keyboard accessibility is another critical aspect separating amateur sites from professional ones. Motor-impaired users should be able to reach absolutely every functional link natively using just the <code>Tab</code> key.
                    </p>
                    <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-300">
                        <li><strong>Visible Focus Rings:</strong> Never set <code>outline: none</code> on links unless you follow it up immediately with an equally prominent custom <code>:focus</code> state (like a thick box-shadow). Without an outline, keyboard users become completely lost.</li>
                        <li><strong>No Mouse Traps:</strong> Avoid interactive patterns that require a precise mouse pointer (e.g. mega-menus that only trigger on hover but cannot be opened via a keyboard).</li>
                        <li><strong>Spacious Target Sizes:</strong> For mobile usability, ensure your links are adequately spaced. Fat-finger errors are painfully common when links are packed tightly together. Expand their hit areas utilizing CSS <code>padding</code> instead of just relying on text sizes.</li>
                    </ul>
                </Section>

                <Section title="SEO Synergy" icon={Search}>
                    <p>
                        From an Search Engine Optimization (SEO) perspective, crawler bots rely heavily on internal links to understand the architectural structure and relative thematic importance of pages on your site.
                    </p>
                    <p>
                        Pages that act as robust hubs linked from dozens of other relevant pages—especially featuring tight, descriptive anchor text—are treated by algorithms as authoritative and highly important. Carefully organizing your global navigation and diligently weaving contextual links directly within your content can radically improve organic search visibility.
                    </p>
                    <h3 className="text-xl font-bold text-white mt-8 mb-4 border-b border-gray-800 pb-2">Vigilant Maintenance</h3>
                    <p>
                        Finally, audit your links routinely. <strong>Broken links</strong> (those pointing to 404 pages that vanished off the internet) rapidly shatter credibility and user confidence. Automated pipeline tools during development can catch issues, but manually browsing key conversion flows remains irreplaceable. If you restructure directories, religiously deploy permanent 301 redirects so that inbound traffic from external legacy links does not meet a dead end.
                    </p>
                    <p className="mt-8">
                        Mastering these core HTML links principles prepares you gracefully for routing frameworks in Single Page Applications (SPAs) like React Router, dynamic rendering patterns, and complex programmatic navigation—all of which still definitively rely on these rock-solid original fundamentals at the end of the day.
                    </p>
                </Section>

            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="../nav-menus" className="flex items-center gap-2 text-gray-500 hover:text-white"><ArrowLeft size={16} /> Navigation Menus</Link>
                <Link to="/webdevelopment/html" className="flex items-center gap-2 text-gray-500 hover:text-white pointer-events-none opacity-50">End of Module <ArrowRight size={16} /></Link>
            </div>
        </article>
    );
};

export default LinksBestPractices;
