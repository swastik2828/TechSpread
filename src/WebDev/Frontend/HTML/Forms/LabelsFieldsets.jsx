import React from 'react';
import { Type, ArrowRight, ArrowLeft, Layers, ShieldCheck, CheckSquare } from 'lucide-react';
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

const LabelsFieldsets = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="HTML Labels, Fieldsets, and Legends"
                description="Master form accessibility and organization. Learn how to use the label, fieldset, and legend elements properly in HTML5 forms."
                keywords="HTML label for, HTML fieldset, HTML legend, accessible form grouping, HTML form accessibility"
                url="/webdevelopment/html/forms/labels-fieldsets"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase border border-orange-500/20 mb-4 inline-block">
                    Module 9.7
                </span>
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    Labels, <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Fieldsets & Legends</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    Beautiful input arrays mean nothing if users cannot understand what they represent. Discover the critical requirement of labels and the organizational power of semantic HTML fieldsets.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">

                <Section title="The Absolute Necessity of <label>" icon={Type}>
                    <p>
                        Every form control must have a <code>&lt;label&gt;</code>[cite: 87]. It serves two purposes:
                    </p>
                    <ol className="list-decimal pl-6 space-y-3 mb-6">
                        <li>Screen readers announce the label when the input receives focus[cite: 87].</li>
                        <li>Clicking the label moves focus to (or toggles) the associated control — expanding the clickable area[cite: 87].</li>
                    </ol>

                    <div className="bg-[#161b22] border border-gray-800 rounded-xl overflow-hidden my-6">
                        <div className="bg-gray-800/50 px-4 py-2 text-sm text-gray-400 font-mono border-b border-gray-800 text-center">
                            The Strict Linkage Algorithm: The 'for' Attribute
                        </div>
                        <pre className="p-6 text-sm text-orange-300 overflow-x-auto m-0">
                            {`<label for="email">Email address:</label>
<input type="email" id="email" name="email">

<label>
  Email address:
  <input type="email" name="email">
</label>`}
                        </pre>
                    </div>

                    <div className="bg-red-500/10 border-l-4 border-red-500 p-6 my-6 rounded-r-xl">
                        <p className="text-red-200 m-0">
                            <strong>⚠ NOTE:</strong> Do not use placeholder text as a replacement for a label[cite: 91]. Placeholders disappear when the user starts typing and have poor accessibility support[cite: 91].
                        </p>
                    </div>
                </Section>

                <Section title="Label Placement Guide" icon={CheckSquare}>
                    <p>
                        Where you place the label visually alters cognitive processing speeds for users completing the form. Follow these standard placement rules based on the control type:
                    </p>
                    <ul className="list-disc pl-6 space-y-4 mb-6">
                        <li><strong>Text input, textarea, select, file upload:</strong> Above the control (best for readability and mobile)[cite: 90].</li>
                        <li><strong>Checkbox:</strong> To the right of the control[cite: 90].</li>
                        <li><strong>Radio button:</strong> To the right of the control[cite: 90].</li>
                    </ul>
                </Section>

                <Section title="Grouping with <fieldset> and <legend>" icon={Layers}>
                    <p>
                        Use <code>&lt;fieldset&gt;</code> to visually and semantically group related controls in longer forms[cite: 93]. The <code>&lt;legend&gt;</code> element provides a caption for the group[cite: 94].
                    </p>
                    
                    

                    <div className="bg-[#161b22] border border-gray-800 rounded-xl overflow-hidden my-6">
                        <div className="bg-gray-800/50 px-4 py-2 text-sm text-gray-400 font-mono border-b border-gray-800">
                            Grouping Code Pattern
                        </div>
                        <pre className="p-4 text-sm text-orange-300 overflow-x-auto">
                            {`<form action="/checkout" method="post">

  <fieldset>
    <legend>Personal Details</legend>
    <label for="fname">First Name:</label>
    <input type="text" id="fname" name="first_name" required>
    <label for="lname">Last Name:</label>
    <input type="text" id="lname" name="last_name" required>
  </fieldset>

  <fieldset>
    <legend>Delivery Address</legend>
    <label for="city">City:</label>
    <input type="text" id="city" name="city">
    <label for="zip">Postal Code:</label>
    <input type="text" id="zip" name="postal_code">
  </fieldset>

  <button type="submit">Place Order</button>
</form>`}
                        </pre>
                    </div>
                </Section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/html/forms/html5-inputs" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> HTML5 Inputs
                </Link>
                <Link to="/webdevelopment/html/forms/form-validation" className="flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300 transition-colors">
                    Next: Form Validation <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};

export default LabelsFieldsets;