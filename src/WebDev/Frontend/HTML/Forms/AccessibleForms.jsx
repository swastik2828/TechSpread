import React from 'react';
import { Ear, ArrowLeft, ArrowRight, Eye, Layout, CheckCircle, AlertTriangle, ListChecks, Target } from 'lucide-react';
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

const AccessibleForms = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="Building Accessible HTML Forms"
                description="Learn the principles of web accessibility for HTML forms. Master ARIA attributes, semantic structure, and keyboard navigation for inclusive web design."
                keywords="HTML form accessibility, ARIA labels, accessible web design, keyboard navigation HTML, WCAG forms"
                url="/webdevelopment/html/forms/accessible-forms"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase border border-blue-500/20 mb-4 inline-block">
                    Module 9.9
                </span>
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    Accessible <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Forms</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    The web is for everyone. Building accessible forms isn't just an ethical imperative or a legal requirement; it's the absolute baseline of professional frontend engineering.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">

                <Section title="The Universal Design Principle" icon={Layout}>
                    <p>
                        Accessible forms work for everyone — including users of screen readers, keyboard navigation, voice control, and switch access[cite: 113]. Accessibility is not optional; it also improves usability for all users[cite: 114].
                    </p>
                </Section>

                <Section title="Keyboard Navigation Priority" icon={ArrowRight}>
                    <p>
                        All form controls must be reachable by Tab (forward) and Shift+Tab (backward)[cite: 122]. Never remove the default focus outline with <code>outline: none</code> unless you replace it with a clearly visible custom style[cite: 123].
                    </p>

                    <div className="bg-[#1e293b] p-6 rounded-xl border border-gray-800 my-6 shadow-inner">
                        <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                            {`/* Visible focus style for keyboard users only [cite: 125] */
input:focus-visible,
select:focus-visible,
textarea:focus-visible,
button:focus-visible {
  outline: 3px solid #1a6fbb;
  outline-offset: 2px;
}`}
                        </pre>
                    </div>
                </Section>

                <Section title="Accessible Error Messages" icon={AlertTriangle}>
                    <p>
                        Error messages must be programmatically linked to the field they describe — not just visually nearby[cite: 118]. Use <code>aria-describedby</code> and <code>role="alert"</code> so screen readers announce the error immediately[cite: 119].
                    </p>

                    <div className="bg-[#1e293b] p-6 rounded-xl border border-gray-800 my-6 shadow-inner">
                        <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                            {`<div>
  <label for="email_field">Email Address:</label>
  <input type="email"
         id="email_field"
         name="email"
         aria-describedby="email_error"
         aria-invalid="true"
         required>
  <p id="email_error" role="alert" style="color: red;">
    Please enter a valid email address — e.g. you@example.com
  </p>
</div>`}
                        </pre>
                    </div>
                </Section>

                <Section title="Handling Validation Failures" icon={Target}>
                    <p>
                        When form validation catches an error, the experience must remain seamless and highly visible for all users. After a failed submission, move keyboard focus to the first invalid field[cite: 124].
                    </p>

                    <div className="bg-blue-500/10 border-l-4 border-blue-500 p-6 my-6 rounded-r-xl">
                        <p className="text-blue-200 m-0">
                            <strong>💡 PRO TIP:</strong> Ensure that colour is not the only error indicator[cite: 127]. This guarantees that users with colour vision deficiency can still identify errors[cite: 127].
                        </p>
                    </div>
                </Section>

                <Section title="Essential ARIA Attributes Reference" icon={Eye}>
                    <div className="overflow-x-auto bg-[#161b22] border border-gray-800 rounded-xl my-6">
                        <table className="w-full text-left text-sm whitespace-nowrap">
                            <thead className="bg-gray-800/50">
                                <tr>
                                    <th className="p-4 text-blue-300 font-mono">ARIA Attribute</th>
                                    <th className="p-4 text-gray-400">Implementation Example & Purpose</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800">
                                <tr>
                                    <td className="p-4 font-mono font-bold text-gray-200">aria-label</td>
                                    <td className="p-4 text-gray-400 whitespace-normal">
                                        <code>&lt;input type="search" name="q" aria-label="Search the site"&gt;</code><br/>
                                        Labels an input when no visible label is present[cite: 116].
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono font-bold text-gray-200">aria-describedby</td>
                                    <td className="p-4 text-gray-400 whitespace-normal">
                                        <code>&lt;input type="password" id="pwd" aria-describedby="pwd_hint"&gt;</code><br/>
                                        Links a hint or error message to the input[cite: 116].
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono font-bold text-gray-200">aria-required</td>
                                    <td className="p-4 text-gray-400 whitespace-normal">
                                        <code>&lt;input type="text" name="name" required aria-required="true"&gt;</code><br/>
                                        Reinforces required for assistive technologies[cite: 116].
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono font-bold text-gray-200">aria-invalid</td>
                                    <td className="p-4 text-gray-400 whitespace-normal">
                                        <code>&lt;input type="email" name="email" aria-invalid="true"&gt;</code><br/>
                                        Set via JavaScript after a validation failure[cite: 116].
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Section>

                <Section title="Accessibility Checklist" icon={ListChecks}>
                    <div className="overflow-x-auto bg-[#161b22] border border-gray-800 rounded-xl my-6">
                        <table className="w-full text-left text-sm whitespace-nowrap">
                            <thead className="bg-gray-800/50">
                                <tr>
                                    <th className="p-4 text-blue-300">Checkpoint</th>
                                    <th className="p-4 text-gray-400">Why It Matters</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800">
                                <tr>
                                    <td className="p-4 text-gray-200 font-semibold">Every input has a visible &lt;label&gt; [cite: 127]</td>
                                    <td className="p-4 text-gray-400 whitespace-normal">Screen readers announce the label when the input is focused. [cite: 127]</td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-gray-200 font-semibold">label for matches input id [cite: 127]</td>
                                    <td className="p-4 text-gray-400 whitespace-normal">Creates the programmatic association between label and control. [cite: 127]</td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-gray-200 font-semibold">Error messages use aria-describedby [cite: 127]</td>
                                    <td className="p-4 text-gray-400 whitespace-normal">Screen readers read the error message when focus lands on the invalid field. [cite: 127]</td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-gray-200 font-semibold">Required fields marked with required and aria-required [cite: 127]</td>
                                    <td className="p-4 text-gray-400 whitespace-normal">Both native validation and assistive technologies are informed. [cite: 127]</td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-gray-200 font-semibold">Fieldsets used for radio and checkbox groups [cite: 127]</td>
                                    <td className="p-4 text-gray-400 whitespace-normal">Screen readers announce the group legend with each option. [cite: 127]</td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-gray-200 font-semibold">Focus order follows logical reading order [cite: 127]</td>
                                    <td className="p-4 text-gray-400 whitespace-normal">Keyboard users can navigate the form in a predictable sequence. [cite: 127]</td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-gray-200 font-semibold">Colour is not the only error indicator [cite: 127]</td>
                                    <td className="p-4 text-gray-400 whitespace-normal">Users with colour vision deficiency can still identify errors. [cite: 127]</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/html/forms/form-validation" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Form Validation
                </Link>
                <span  className="flex items-center gap-2 text-grey-100 font-bold hover:text-grey-300 transition-colors">
                    End of Module <CheckCircle size={16} />
                </span>
            </div>
        </article>
    );
};

export default AccessibleForms;