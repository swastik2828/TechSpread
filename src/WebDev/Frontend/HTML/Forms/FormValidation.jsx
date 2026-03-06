import React from 'react';
import { ShieldAlert, ArrowRight, ArrowLeft, CheckCircle, AlertOctagon, Terminal, ServerOff, CheckSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import ValidationSimulator from "../../../../simulators/web/ValidationSimulator";

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

const FormValidation = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="HTML5 Client-Side Form Validation"
                description="Learn how to validate user input on the client-side using built-in HTML5 attributes like required, min, max, and pattern."
                keywords="HTML form validation, HTML5 required attribute, HTML pattern regex, client-side validation HTML, min max attributes"
                url="/webdevelopment/html/forms/form-validation"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase border border-blue-500/20 mb-4 inline-block">
                    Module 9.8
                </span>
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    Form <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Validation</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    HTML5 validation checks that data is correct and complete before the form is submitted — without writing any JavaScript[cite: 97].
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">

                <Section title="The Purpose of Form Validation" icon={ShieldAlert}>
                    <p>
                        Implementing native HTML5 validation provides several immediate benefits to both the user and the system architecture. By checking data at the browser level, it reduces server load, catches errors instantly, and guides users toward correct input[cite: 98].
                    </p>
                    
                    
                </Section>

                <Section title="Built-In Validation Attributes" icon={CheckCircle}>
                    <p>
                        HTML5 introduces several specialized attributes that handle different types of input constraints automatically[cite: 99].
                    </p>

                    <div className="overflow-x-auto bg-[#161b22] border border-gray-800 rounded-xl my-6">
                        <table className="w-full text-left text-sm whitespace-nowrap">
                            <thead className="bg-gray-800/50">
                                <tr>
                                    <th className="p-4 text-blue-300 font-mono">Attribute</th>
                                    <th className="p-4 text-gray-400">What It Validates</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800">
                                <tr>
                                    <td className="p-4 font-mono font-bold text-gray-200">required</td>
                                    <td className="p-4 text-gray-400 whitespace-normal">Field must not be empty. Works on text, email, select, textarea, and radio/checkbox groups[cite: 100].</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono font-bold text-gray-200">minlength / maxlength</td>
                                    <td className="p-4 text-gray-400 whitespace-normal">Minimum and maximum number of characters for text-type inputs[cite: 100].</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono font-bold text-gray-200">min / max</td>
                                    <td className="p-4 text-gray-400 whitespace-normal">Minimum and maximum value for number, range, and date inputs[cite: 100].</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono font-bold text-gray-200">step</td>
                                    <td className="p-4 text-gray-400 whitespace-normal">Value must be a multiple of this increment (e.g. step="5" allows only 0, 5, 10...)[cite: 100].</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono font-bold text-gray-200">pattern</td>
                                    <td className="p-4 text-gray-400 whitespace-normal">Value must match a JavaScript regular expression[cite: 100].</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono font-bold text-gray-200">type</td>
                                    <td className="p-4 text-gray-400 whitespace-normal">Implicit validation based on the input type (email checks email format; url checks URL format)[cite: 100].</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Section>

                <Section title="The Regex 'pattern' Attribute" icon={Terminal}>
                    <p>
                        The <code>pattern</code> attribute validates the input against a regular expression[cite: 102]. The entire value must match for the field to be valid[cite: 102]. Always add a title attribute to explain the expected format to users[cite: 103].
                    </p>

                    <div className="bg-[#1e293b] p-6 rounded-xl border border-gray-800 my-6 shadow-inner">
                        <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                            {`<input type="text" name="phone"
       pattern="[0-9]{10}"
       title="Enter exactly 10 digits, e.g. 9876543210">

<input type="password" name="password"
       pattern="(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,}"
       title="Min 8 chars including uppercase, a digit, and a symbol (!@#$%)">

<input type="text" name="zip"
       pattern="[0-9]{5}(-[0-9]{4})?"
       title="Enter 5-digit ZIP, e.g. 90210 or 90210-1234">`}
                        </pre>
                    </div>
                </Section>

                <Section title="Applying 'required' on Different Controls" icon={CheckSquare}>
                    <p>
                        The application of the <code>required</code> attribute differs slightly depending on the control type being utilized[cite: 105].
                    </p>
                    <div className="bg-[#161b22] border border-gray-800 rounded-xl overflow-hidden my-6">
                        <pre className="p-6 text-sm text-orange-300 overflow-x-auto m-0">
{`<input type="text" name="full_name" required>

<select name="category" required>
  <option value="">-- Select a category --</option>
  <option value="news">News</option>
</select>

<input type="radio" name="size" value="s" required> Small
<input type="radio" name="size" value="m"> Medium
<input type="radio" name="size" value="l"> Large

<input type="checkbox" name="agree" value="yes" required>
<label>I agree to the Terms of Service</label>`}
                        </pre>
                    </div>
                </Section>

                <Section title="Bypassing Validation" icon={ServerOff}>
                    <p>
                        Sometimes, you need to allow users to submit forms without fulfilling all validation requirements, such as when saving a draft[cite: 107]. Add novalidate to the <code>&lt;form&gt;</code> element to disable all HTML5 validation (useful for draft saves)[cite: 108]. Alternatively, use formnovalidate on a specific button to bypass validation for that button only[cite: 109].
                    </p>

                    <div className="bg-[#1e293b] p-6 rounded-xl border border-gray-800 my-6 shadow-inner">
                        <pre className="text-green-400 font-mono text-sm overflow-x-auto">
{`<button type="submit">Publish</button>

<button type="submit" formnovalidate>Save as Draft</button>`}
                        </pre>
                    </div>

                    <div className="bg-orange-500/10 border-l-4 border-orange-500 p-6 my-6 rounded-r-xl">
                        <p className="text-orange-200 m-0">
                            <strong>💡 TIP:</strong> Always re-validate data on the server even when HTML5 validation is in place[cite: 111]. Client-side validation can be bypassed by disabling JavaScript or editing the HTTP request directly[cite: 111].
                        </p>
                    </div>
                </Section>

                <Section title="Interactive Validation Sandbox" icon={AlertOctagon}>
                    <p className="mb-8">
                        Experience the visual power of native HTML5 form constraints. Trigger the validation events below to witness how the browser dynamically reacts to incorrect data formatting.
                    </p>
                    <ValidationSimulator />
                </Section>

            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/html/forms/labels-fieldsets" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Labels & Fieldsets
                </Link>
                <Link to="/webdevelopment/html/forms/accessible-forms" className="flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300 transition-colors">
                    Next: Accessible Forms <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};

export default FormValidation;