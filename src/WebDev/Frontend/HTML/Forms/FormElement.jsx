import React from 'react';
import { Box, ArrowRight, ArrowLeft, Link as LinkIcon, RadioReceiver, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import FormsSimulator from "../../../../simulators/web/FormsSimulator";

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

const FormElement = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="The HTML Form Element - Syntax & Attributes"
                description="Master the HTML <form> element. Understand form action, GET vs POST HTTP methods, and crucial attributes."
                keywords="HTML form element, form action, form method, GET vs POST, form syntax, HTML form attributes"
                url="/webdevelopment/html/forms/form-element"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase border border-orange-500/20 mb-4 inline-block">
                    Module 9.2
                </span>
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    The <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">&lt;form&gt;</span> Element
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    Every input block must reside safely inside an invisible envelope known as the form element. It orchestrates where and how data gets physically routed across the internet.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">

                <Section title="Basic Form Syntax & Container Role" icon={Box}>
                    <p>
                        All user-facing form controls — textboxes, checkboxes, dropdowns, and submit buttons — must be nested inside a <code>&lt;form&gt;</code> element to function properly.
                    </p>

                    <img
                        src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1200"
                        alt="Code syntax highlighting"
                        className="w-full h-64 object-cover rounded-xl my-8 border border-gray-800 opacity-90"
                    />

                    <p>
                        The <code>&lt;form&gt;</code> tag acts like an invisible shipping envelope. It defines the destination (<em>where</em> the data goes) and the protocol (<em>how</em> the data gets there).
                    </p>

                    <div className="bg-[#161b22] border border-gray-800 rounded-xl overflow-hidden my-6">
                        <div className="bg-gray-800/50 px-4 py-2 text-sm text-gray-400 font-mono border-b border-gray-800 flex justify-between">
                            <span>Standard Form Implementation</span>
                            <span>HTML</span>
                        </div>
                        <pre className="p-5 text-sm text-blue-300 overflow-x-auto">
                            {`<form action="/submit-contact" method="post" id="contact-form">
  <!-- All form controls go cleanly inside here -->
  <input type="text" name="visitor" />
  <button type="submit">Submit Data</button>
</form>`}
                        </pre>
                    </div>
                </Section>

                <Section title="Core Form Attributes" icon={ShieldAlert}>
                    <p>
                        The power of the form element lies predominantly within its expansive set of attributes. These modifiers tell the browser how precisely to handle the HTTP network request triggered upon successful submission.
                    </p>

                    <div className="overflow-x-auto mt-8 mb-10">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-800/50 text-gray-300 text-sm tracking-wide">
                                    <th className="p-4 border-b border-gray-700 font-semibold w-1/4">Attribute</th>
                                    <th className="p-4 border-b border-gray-700 font-semibold">Purpose & Functionality</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800/50 text-gray-400">
                                <tr>
                                    <td className="p-4 font-mono text-blue-400 font-medium">action</td>
                                    <td className="p-4 leading-normal">Specifies the absolute or relative URL where the form's packaged data payload is definitively sent upon submission. Defaults to reloading the current page if completely omitted.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-blue-400 font-medium">method</td>
                                    <td className="p-4 leading-normal">Defines the underlying HTTP protocol method deployed to route the package: <code>get</code> (append data directly in URL string) or <code>post</code> (embed data completely hidden in the request body). Defaults silently to <code>get</code>.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-blue-400 font-medium">id</td>
                                    <td className="p-4 leading-normal">A unique identifier targeted rapidly by complex CSS styling, external JavaScript document traversals, and modern external button linkages.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-blue-400 font-medium">enctype</td>
                                    <td className="p-4 leading-normal">Declares the explicit encoding algorithm activated for POST requests. Must be manually overridden to <code>multipart/form-data</code> when transmitting binary files or image uploads.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-blue-400 font-medium">autocomplete</td>
                                    <td className="p-4 leading-normal">Controls whether the browser is explicitly permitted to forcefully inject historical autofill suggestions. Accepted robust values: <code>on</code> (default configuration) or <code>off</code>.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-blue-400 font-medium">novalidate</td>
                                    <td className="p-4 leading-normal">A powerful Boolean switch. Including this attribute entirely neutralizes and disables the browser's strict HTML5 built-in safety validation protocols when present.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Section>

                <Section title="The Great Debate: GET vs POST" icon={RadioReceiver}>
                    <p>
                        The most critical architectural decision you must constantly make when rendering a form is assigning the proper HTTP protocol method. Choosing incorrectly heavily damages application architecture and actively introduces apocalyptic security vulnerabilities.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mt-8 mb-10">
                        <div className="bg-orange-900/10 border border-orange-500/30 rounded-xl p-6">
                            <h4 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">Method: GET</h4>
                            <ul className="space-y-3 text-sm text-gray-300">
                                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Appends data directly to the URL string.</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Highly visible inside the address bar.</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Can be bookmarked and cached.</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Limited by URL length restrictions.</li>
                                <li className="pt-2"><strong>Best For:</strong> Searches, filtering, read-only requests.</li>
                            </ul>
                        </div>

                        <div className="bg-red-900/10 border border-red-500/30 rounded-xl p-6">
                            <h4 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">Method: POST</h4>
                            <ul className="space-y-3 text-sm text-gray-300">
                                <li className="flex items-start gap-2"><span className="text-red-500 font-bold">•</span> Embeds data hidden within the HTTP request body.</li>
                                <li className="flex items-start gap-2"><span className="text-red-500 font-bold">•</span> Invisible within the standard address bar.</li>
                                <li className="flex items-start gap-2"><span className="text-red-500 font-bold">•</span> Cannot be bookmarked or heavily cached.</li>
                                <li className="flex items-start gap-2"><span className="text-red-500 font-bold">•</span> No data length constraints (supports file uploads).</li>
                                <li className="pt-2"><strong>Best For:</strong> Secure logins, record updates, massive data.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mt-6 flex flex-col md:flex-row gap-6 items-center">
                        <ShieldAlert size={48} className="text-red-500 shrink-0" />
                        <div>
                            <h3 className="text-xl font-bold text-red-500 mb-2">Severe Security Warning</h3>
                            <p className="text-gray-300 m-0">
                                <strong>Never utilize GET for transmission of passwords, valid credit card arrays, social security numbers, or practically any protected cryptographic sequence!</strong> Because GET openly jams data straight into the query URL string, it permanently appears fully exposed in raw plain text to shoulder-surfers, local Wi-Fi router network server logs, external HTTP proxies, tracking scripts, and universally throughout the user's permanent browser history.
                            </p>
                        </div>
                    </div>
                </Section>

                <Section title="Interactive Submission Simulator" icon={LinkIcon}>
                    <p className="mb-8">
                        Test how the form element natively structures data based on the chosen HTTP Method. Toggle between GET and POST then click submit to witness how the payload routing drastically alters depending entirely on the method parameter.
                    </p>
                    <FormsSimulator />
                </Section>

            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/html/forms/introduction" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Intro to Forms
                </Link>
                <Link to="/webdevelopment/html/forms/text-inputs" className="flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300 transition-colors">
                    Next: Text Inputs <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};

export default FormElement;
