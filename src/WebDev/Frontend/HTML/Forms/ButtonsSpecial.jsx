import React from 'react';
import { MousePointerClick, ArrowRight, ArrowLeft, Upload, RotateCcw, EyeOff } from 'lucide-react';
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

const ButtonsSpecial = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="HTML Form Buttons & Special Inputs"
                description="Master form submission mechanisms in HTML. Learn about submit buttons, reset controls, file uploads, and hidden tracking inputs."
                keywords="HTML form buttons, input type submit, input type file, hidden input HTML, form reset button"
                url="/webdevelopment/html/forms/buttons-special"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase border border-orange-500/20 mb-4 inline-block">
                    Module 9.5
                </span>
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    Buttons & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Special Inputs</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    Every form needs a trigger to launch data across the web. Discover submission buttons, file upload selectors, and invisible data passing mechanics.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">

                <Section title="The Submit Mechanism" icon={MousePointerClick}>
                    <p>
                        The ultimate culmination of any form interaction is the submission trigger. A submit button initiates the HTTP sequence defined by the <code>&lt;form&gt;</code> element attributes.
                    </p>

                    <img
                        src="https://images.unsplash.com/photo-1555421689-d68471e18987?auto=format&fit=crop&q=80&w=1200"
                        alt="A user pushing a glowing submit button"
                        className="w-full h-64 object-cover rounded-xl my-8 border border-gray-800 opacity-90"
                    />

                    <p>
                        There are two prevalent ways to create this trigger. Historically, developers used <code>&lt;input type="submit"&gt;</code>. However, modern engineering vehemently prefers the vastly more flexible HTML5 <code>&lt;button type="submit"&gt;</code> element.
                    </p>

                    <div className="bg-[#161b22] border border-gray-800 rounded-xl overflow-hidden my-6">
                        <div className="bg-gray-800/50 px-4 py-2 text-sm text-gray-400 font-mono border-b border-gray-800 text-center">
                            Button Tag vs Input Tag
                        </div>
                        <div className="grid md:grid-cols-2 gap-px bg-gray-800">
                            <div className="p-6 bg-[#0d1117]">
                                <h4 className="text-orange-400 font-bold mb-3 flex items-center gap-2 text-sm uppercase">Modern Method</h4>
                                <pre className="text-gray-300 text-sm mb-4"><code>{`<button type="submit">
  <img src="send.svg"/>
  Send Now
</button>`}</code></pre>
                                <p className="text-xs text-gray-400 leading-relaxed">The <code>&lt;button&gt;</code> element operates as an enclosing container. You can safely nest raw text, bold tags, or even full graphical SVG icons entirely within it.</p>
                            </div>
                            <div className="p-6 bg-[#0d1117]">
                                <h4 className="text-gray-500 font-bold mb-3 flex items-center gap-2 text-sm uppercase">Legacy Method</h4>
                                <pre className="text-gray-300 text-sm mb-4"><code>{`<input type="submit" 
  value="Send Now">`}</code></pre>
                                <p className="text-xs text-gray-400 leading-relaxed">The legacy <code>&lt;input&gt;</code> block is rigidly self-closing. It absolutely cannot contain inner HTML elements—you strictly map the display text onto the restrictive <code>value</code> attribute.</p>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section title="The Reset Button Warning" icon={RotateCcw}>
                    <p>
                        The <code>&lt;button type="reset"&gt;</code> instantly clears all input fields within the form, forcefully reverting them back to their default states.
                    </p>
                    <p>
                        <strong>UX Anti-Pattern:</strong> Use this incredibly sparingly. Modern UX research demonstrates that users massive accidentally click Reset rather than Submit, destroying their hard work. It's almost exclusively safer to omit the reset button entirely.
                    </p>
                </Section>

                <Section title="Handling File Uploads" icon={Upload}>
                    <p>
                        Whenever your application demands collecting image avatars, uploading massive video blobs, or accepting PDF resumes natively, you construct an <code>&lt;input type="file"&gt;</code> input.
                    </p>

                    <div className="bg-orange-900/10 border-l-4 border-orange-500 p-6 my-6 rounded-r-xl">
                        <p className="text-orange-200 m-0">
                            <strong>Architectural Prerequisite:</strong> If your form physically encompasses a file upload block, the encompassing overarching <code>&lt;form&gt;</code> element MUST universally possess structurally <code>method="post"</code> combined exclusively absolutely with exactly <code>enctype="multipart/form-data"</code>. If you omit the encoding type, the browser will catastrophically just logically send the textual filename (e.g. "photo.jpg") literally instead of mathematically transmitting the massive binary image data blob payload.
                        </p>
                    </div>

                    <div className="bg-[#161b22] border border-gray-800 rounded-xl p-5 my-6 overflow-hidden">
                        <pre className="text-blue-300 text-sm overflow-x-auto font-mono">
                            {`<form action="/upload-endpoint" method="post" enctype="multipart/form-data">
  <label for="id-scan">Scan of Identity Document:</label>
  <input type="file"
         id="id-scan"
         name="identity_doc"
         accept="image/jpeg, application/pdf"
         multiple
         required>
  <button type="submit">Upload Document</button>
</form>`}
                        </pre>
                    </div>

                    <ul className="text-sm text-gray-400 space-y-3 mt-4">
                        <li><strong>accept:</strong> Heavily filters the operating system's native graphical file picker allowing conditionally defined precise MIME format types (e.g. <code>.png, .csv</code>).</li>
                        <li><strong>multiple:</strong> Boolean. Empowers the connected human selecting an array of multiple distinct physical files simultaneously concurrently seamlessly.</li>
                        <li className="text-red-400"><strong>Note:</strong> The <code>accept</code> attribute acts purely conventionally as a polite convenience filter. Hackers fundamentally easily heavily bypass it. Universally aggressively cryptographically validate actual true file binaries definitively natively server-side!</li>
                    </ul>
                </Section>

                <Section title="Invisible Data: Hidden Inputs" icon={EyeOff}>
                    <p>
                        Web tracking, session mechanics, dynamic database primary keys, and severe CSRF security tokens heavily require natively passing contextual state actively from the client frontend safely back to backend servers without displaying any technical UI on the screen.
                    </p>

                    <div className="bg-orange-900/10 p-6 rounded-xl border border-orange-500/30 my-6 shadow-inner">
                        <pre className="text-gray-300 font-mono text-sm">
                            {`<input type="hidden" name="user_database_id" value="UUID-40982X3">
<input type="hidden" name="csrf_security_token" value="098f6bcd4621d373cade4e832627b4f6">
<input type="hidden" name="marketing_campaign" value="twitter_summer_sale">`}
                        </pre>
                    </div>

                    <p>
                        <strong>Ultimate Security Principle:</strong> Hidden inputs simply mean they are visually hidden in the CSS layout. They are entirely readable to users viewing the page source code.
                    </p>
                    <p className="text-red-400 font-bold">
                        Never store sensitive financial data, passwords, or actual API keys in hidden fields. Users can easily manipulate the value and submit malicious payloads.
                    </p>
                </Section>

            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/html/forms/choice-controls" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Choice Controls
                </Link>
                <Link to="/webdevelopment/html/forms/html5-inputs" className="flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300 transition-colors">
                    Next: HTML5 Inputs <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};

export default ButtonsSpecial;
