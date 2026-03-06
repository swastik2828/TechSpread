import React from 'react';
import { Type, ArrowRight, ArrowLeft, KeyRound, AlignLeft, Hash } from 'lucide-react';
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

const TextInputControls = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="Text Input Controls - HTML Types & Textareas"
                description="Learn to collect text from users via HTML inputs. Master single-line inputs, secure password fields, and multi-line textareas."
                keywords="HTML input type text, HTML password input, HTML textarea, form controls, website form text, frontend development"
                url="/webdevelopment/html/forms/text-inputs"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase border border-orange-500/20 mb-4 inline-block">
                    Module 9.3
                </span>
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    Text Input <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Controls</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    Textual communication remains the fundamental backbone of form interactions. Discover how to precisely construct single-line text boxes, heavily guarded password arrays, and massive multi-line biographical text areas.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">

                <Section title="The Single-Line Text Input" icon={Type}>
                    <p>
                        The most widespread HTML form element across the global web is the basic single-line text input field. This creates a short, horizontal box explicitly meant for brief alphanumeric character entry.
                    </p>

                    <img
                        src="https://images.unsplash.com/photo-1555421689-d68471e18987?auto=format&fit=crop&q=80&w=1200"
                        alt="Entering keyboard text"
                        className="w-full h-64 object-cover rounded-xl my-8 border border-gray-800 opacity-90"
                    />

                    <p>
                        It is highly suitable for capturing brief qualitative data like names, usernames, search query terms, short street addresses, or any other tiny string.
                    </p>

                    <div className="bg-[#161b22] border border-gray-800 rounded-xl overflow-hidden my-6">
                        <div className="bg-gray-800/50 px-4 py-2 text-sm text-gray-400 font-mono border-b border-gray-800">
                            HTML Implementation
                        </div>
                        <pre className="p-4 text-sm text-blue-300 overflow-x-auto">
                            {`<label for="username">Username:</label>
<input type="text"
       id="username"
       name="username"
       placeholder="Enter your unique username"
       maxlength="30"
       required>`}
                        </pre>
                    </div>

                    <h3 className="text-2xl font-bold mt-10 mb-6 text-white border-b border-gray-800 pb-2">Vital Parameter Attributes</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-[#0A0A0A] border border-gray-800 p-5 rounded-lg">
                            <h4 className="font-mono text-orange-400 mb-2">name</h4>
                            <p className="text-sm text-gray-400 m-0">The explicit categorical key sent directly to the server. Mandatory for the value payload to successfully be received and submitted.</p>
                        </div>
                        <div className="bg-[#0A0A0A] border border-gray-800 p-5 rounded-lg">
                            <h4 className="font-mono text-orange-400 mb-2">id</h4>
                            <p className="text-sm text-gray-400 m-0">Crucially links the input element strictly to its matching descriptive <code>&lt;label&gt;</code> through the <code>for</code> attribute tag.</p>
                        </div>
                        <div className="bg-[#0A0A0A] border border-gray-800 p-5 rounded-lg">
                            <h4 className="font-mono text-orange-400 mb-2">placeholder</h4>
                            <p className="text-sm text-gray-400 m-0">A translucent temporary hint string rendered inside the empty input box. <em>Never use a placeholder as a permanent label substitution.</em></p>
                        </div>
                        <div className="bg-[#0A0A0A] border border-gray-800 p-5 rounded-lg">
                            <h4 className="font-mono text-orange-400 mb-2">value</h4>
                            <p className="text-sm text-gray-400 m-0">Pre-fills the input field proactively, spanning with a rigid initial hardcoded default value directly on page load.</p>
                        </div>
                        <div className="bg-[#0A0A0A] border border-gray-800 p-5 rounded-lg">
                            <h4 className="font-mono text-orange-400 mb-2">maxlength / minlength</h4>
                            <p className="text-sm text-gray-400 m-0">Constraint boundaries defining exactly how many total characters the form visually allows you to type inside.</p>
                        </div>
                        <div className="bg-[#0A0A0A] border border-gray-800 p-5 rounded-lg">
                            <h4 className="font-mono text-orange-400 mb-2">disabled vs readonly</h4>
                            <p className="text-sm text-gray-400 m-0"><code>readonly</code> prevents editing but guarantees the value submits. <code>disabled</code> gray-locks the element and PREVENTS it from transmitting entirely.</p>
                        </div>
                    </div>
                </Section>

                <Section title="The Password Input Protocol" icon={KeyRound}>
                    <p>
                        Constructively identical architecturally to a standard text input foundation, the browser natively executes obfuscation algorithms visually masking each typed character immediately with black circular dots or thick asterisks (obscuring shoulder surfing risks).
                    </p>

                    <div className="bg-red-500/10 border-l-4 border-red-500 p-6 my-6 rounded-r-xl">
                        <p className="text-red-200 m-0">
                            <strong>Absolute Security Rule:</strong> Consistently verify and aggressively enforce that you are implementing the strictly encrypted <code>method="post"</code> combined heavily overlapping standard SSL/HTTPS certificates universally combined directly with ALL deployed <code>type="password"</code> secure protocol variables.
                        </p>
                    </div>

                    <div className="bg-[#161b22] border border-gray-800 rounded-xl overflow-hidden my-6">
                        <div className="bg-gray-800/50 px-4 py-2 text-sm text-gray-400 font-mono border-b border-gray-800">
                            Encrypted HTML Implementation
                        </div>
                        <pre className="p-4 text-sm text-blue-300 overflow-x-auto flex gap-4">
                            {`<label for="pwd">Password:</label>
<input type="password"
       id="pwd"
       name="password"
       minlength="8"
       autocomplete="current-password"
       required>`}
                        </pre>
                    </div>
                </Section>

                <Section title="Multi-Line Biological Textarea" icon={AlignLeft}>
                    <p>
                        When the anticipated input sequence drastically requires spanning significantly more length than just one uniform truncated horizontal line natively—such as highly detailed restaurant reviews, sweeping biological profiles, or lengthy message compositions—you implement the mighty HTML <code>&lt;textarea&gt;</code> element structurally.
                    </p>
                    <p>
                        Unlike the universally self-closing singleton <code>&lt;input&gt;</code> tag, the sophisticated <code>&lt;textarea&gt;</code> mandates heavily employing both fully matching opening elements closely coupled with a distinct closing bracket permanently enclosing the default text span organically.
                    </p>

                    <div className="bg-[#161b22] border border-gray-800 rounded-xl overflow-hidden my-6">
                        <div className="bg-gray-800/50 px-4 py-2 text-sm text-gray-400 font-mono border-b border-gray-800">HTML Textarea Layout</div>
                        <pre className="p-4 text-sm text-blue-300 overflow-x-auto">
                            {`<label for="bio">Short Historical Bio:</label>
<textarea id="bio"
          name="bio"
          rows="5"
          maxlength="500"
          placeholder="Tell us everything interesting about yourself natively...">
</textarea>`}
                        </pre>
                    </div>

                    <div className="bg-orange-900/10 p-6 rounded-xl border border-orange-500/30">
                        <h4 className="text-xl font-bold flex items-center gap-2 text-white mb-4"><Hash className="text-orange-400" /> Defining Textarea Dimensions</h4>
                        <p className="text-gray-300 text-sm mb-4">You manually size the internal text rendering area by manipulating two explicit structural attributes:</p>
                        <ul className="text-sm text-gray-400 space-y-2 mb-4 list-disc pl-5">
                            <li><strong>cols="30":</strong> Adjusts overall character column width structurally defining exact spanning vertical constraints.</li>
                            <li><strong>rows="5":</strong> Generates exact vertical stacking dimensions configuring maximum initially visible stacked lines on default render.</li>
                        </ul>
                        <p className="text-sm text-orange-300 italic">Pro-Tip: Standard CSS declarations powerfully override these baseline HTML attributes completely allowing fluid responsive height resizing natively.</p>
                    </div>
                </Section>

            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/html/forms/form-element" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> The Form Element
                </Link>
                <Link to="/webdevelopment/html/forms/choice-controls" className="flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300 transition-colors">
                    Next: Choice Controls <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};

export default TextInputControls;
