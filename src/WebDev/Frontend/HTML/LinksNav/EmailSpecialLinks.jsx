import React from 'react';
import { Mail, ArrowRight, ArrowLeft, Phone, MessageSquare, Download } from 'lucide-react';
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

const EmailSpecialLinks = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="Email Links And Other Special Schemes"
                description="Explore unique HTML link schemes like mailto:, tel:, sms:, and how to create download links."
                keywords="mailto link, tel link, sms link, HTML special links, download attribute, mobile web links, HTML href schemes, TechSpread"
                url="/webdevelopment/html/special-links"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase border border-orange-500/20 mb-4 inline-block">
                    Module 4.6
                </span>
                <h1 className="text-5xl font-extrabold text-white mb-6">Email Links And <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Other Special Schemes</span></h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    So far, all examples have used HTTP or HTTPS URLs, which instruct the browser to load a web resource. However, the <code>href</code> attribute can also use other URI schemes to trigger different behaviors natively on the user's device.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">

                <Section title="Email Links (mailto:)" icon={Mail}>
                    <p>
                        One of the most common special cases is the <code>mailto:</code> scheme, which opens the user’s default email program (like Outlook, Apple Mail, or Gmail if configured that way) with a new message pre‑addressed to a specific email address.
                    </p>
                    <p>A basic email link looks like this:</p>
                    <LocalCodeBlock code={`<a href="mailto:jon@example.org">Email Jon</a>`} />
                    <p>
                        When the user activates this link, the browser launches the default mail client on the device, creates a new message, and fills in the "To" field with <code>jon@example.org</code>. The visible link text "Email Jon" behaves like any other link; the difference is entirely in the <code>href</code> scheme.
                    </p>
                    <h3 className="text-xl font-bold text-white mt-8 mb-4">Adding Subjects and Bodies</h3>
                    <p>
                        You can also include default subject lines, body text, and CC/BCC fields by adding a query string to the <code>mailto:</code> URL:
                    </p>
                    <LocalCodeBlock code={`<a href="mailto:support@example.com?subject=Support%20request&body=Please%20describe%20your%20issue.">
  Contact support
</a>`} />
                    <p>
                        Spaces and special characters are encoded using <strong>percent‑encoding</strong> (for example, a space becomes <code>%20</code>), just like in regular URLs. While email links are convenient, not all users have a local mail client configured. Spam bots can also harvest visible email addresses from pages easily, so sophisticated sites often obscure the email or provide an alternative contact form.
                    </p>
                </Section>

                <Section title="Phone Calls (tel:)" icon={Phone}>
                    <p>
                        The <code>tel:</code> scheme is invaluable for mobile-responsive websites. A link with <code>tel:</code> will prompt the user’s phone app to dial the number when tapped on a smartphone. On a desktop, it might trigger Facetime or offer to send the number to an integrated mobile device.
                    </p>
                    <LocalCodeBlock code={`<a href="tel:+15551234567">Call us at (555) 123-4567</a>`} />
                    <p>
                        It is universally recommended to include the full country code (like <code>+1</code> for US) to ensure the call connects seamlessly regardless of where the user is geographically located while browsing.
                    </p>
                </Section>

                <Section title="Text Messages (sms:)" icon={MessageSquare}>
                    <p>
                        Similarly, the <code>sms:</code> scheme can open the messaging app on mobile phones with the number pre‑filled. This is excellent for modern marketing flows or support numbers.
                    </p>
                    <LocalCodeBlock code={`<a href="sms:+15551234567">Text "HELP" to our support line</a>`} />
                    <p>
                        You can even prefill the message body using the <code>?body=</code> parameter, similar to emails (though support varies slightly across Android and iOS versions). These links make it much easier for users to initiate communication from mobile devices compared with copying and pasting numbers back and forth.
                    </p>
                </Section>

                <Section title="Download Links (download)" icon={Download}>
                    <p>
                        Download links often involve regular HTTP URLs pointing to binary files such as PDFs, images, or archives (.zip, .mp4). Browsers may decide to open some of these formats inline (for example, PDFs opening directly in Chrome's built‑in viewer) or download them directly, depending on configuration and headers sent from the server.
                    </p>
                    <p>
                        You do not necessarily need a special scheme for downloads; a simple anchor with <code>href="/files/report.pdf"</code> is technically enough. However, if you want to <strong>force</strong> or strongly suggest downloading rather than viewing inline, you can add the <code>download</code> attribute:
                    </p>
                    <LocalCodeBlock code={`<a href="/files/report.pdf" download>Download the report (PDF)</a>`} />
                    <p>
                        The <code>download</code> attribute hints to the browser that the target should be saved locally instead of opened. You can optionally specify a filename that will be suggested to the user when they save it, like <code>download="report-2026.pdf"</code>.
                    </p>
                    <div className="bg-red-900/10 border border-red-500/20 p-6 rounded-xl my-6">
                        <h4 className="text-red-400 font-bold mb-2">Cross-Origin Security Note</h4>
                        <p className="text-sm text-gray-300">
                            For security reasons in modern browsers, the <code>download</code> attribute will only be honored if the file comes from the same origin (domain) as the current page. If you link to an external site's PDF and try to force a download, the browser will likely ignore the download attribute and just navigate there.
                        </p>
                    </div>
                </Section>

            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="../in-page" className="flex items-center gap-2 text-gray-500 hover:text-white"><ArrowLeft size={16} /> In-Page Linking</Link>
                <Link to="../new-tabs" className="flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300">Next: New Tabs & Windows <ArrowRight size={16} /></Link>
            </div>
        </article>
    );
};

export default EmailSpecialLinks;
