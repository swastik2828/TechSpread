import React from 'react';
import { Sparkles, ArrowRight, ArrowLeft, Smartphone, CalendarDays, KeyRound, Hash, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import InputTypesSimulator from "../../../../simulators/web/InputTypesSimulator";

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

const Html5Inputs = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="HTML5 Specialised Input Types"
                description="Explore modern HTML5 input types. Learn how email, URL, date, color, and range inputs provide native mobile keyboards and built-in validation."
                keywords="HTML5 inputs, input type email, input type date, HTML range slider, mobile keyboard HTML forms, HTML5 form validation"
                url="/webdevelopment/html/forms/html5-inputs"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase border border-orange-500/20 mb-4 inline-block">
                    Module 9.6
                </span>
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    HTML5 <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Specialised Inputs</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    HTML5 introduced input types that provide built-in validation, mobile-optimised keyboards, and native UI widgets (date pickers, color selectors, sliders) — no JavaScript required. [cite: 72]
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">

                <Section title="The Mobile Keyboard Revolution: Email, URL, and Tel" icon={Smartphone}>
                    <p>
                        The most immediate benefit of adopting specialized HTML5 input states affects mobile phone software keyboards. When a mobile browser detects a specialized type, it instantly hot-swaps the underlying software keyboard to match optimally. [cite: 72, 74]
                    </p>

                    <div className="grid md:grid-cols-3 gap-4 my-8">
                        <div className="bg-[#1e293b] p-5 rounded-lg border border-gray-800">
                            <h4 className="text-orange-400 font-bold mb-2 font-mono text-sm">type="email"</h4>
                            <p className="text-xs text-gray-400 mb-3">Validates format and shows the @ keyboard on mobile. [cite: 75]</p>
                            <code className="text-[10px] text-green-400 break-all block bg-gray-900 p-2 rounded">
                                &lt;input type="email" name="email" placeholder="you@example.com" required&gt; [cite: 75]
                            </code>
                        </div>
                        <div className="bg-[#1e293b] p-5 rounded-lg border border-gray-800">
                            <h4 className="text-orange-400 font-bold mb-2 font-mono text-sm">type="url"</h4>
                            <p className="text-xs text-gray-400 mb-3">Validates format (must include https://). [cite: 75]</p>
                            <code className="text-[10px] text-green-400 break-all block bg-gray-900 p-2 rounded">
                                &lt;input type="url" name="website" placeholder="https://yoursite.com"&gt; [cite: 75]
                            </code>
                        </div>
                        <div className="bg-[#1e293b] p-5 rounded-lg border border-gray-800">
                            <h4 className="text-orange-400 font-bold mb-2 font-mono text-sm">type="tel"</h4>
                            <p className="text-xs text-gray-400 mb-3">Shows numeric keyboard on mobile; use pattern for format. [cite: 75]</p>
                            <code className="text-[10px] text-green-400 break-all block bg-gray-900 p-2 rounded">
                                &lt;input type="tel" name="phone" pattern="[0-9]&#123;10,15&#125;" title="Enter 10–15 digits" placeholder="07700 900000"&gt; [cite: 75]
                            </code>
                        </div>
                    </div>
                </Section>

                <Section title="Number and Range Controls" icon={Hash}>
                    <p>
                        For numeric data, HTML5 offers specialized controls that restrict input and provide native adjustment mechanisms. [cite: 76, 77]
                    </p>
                    
                    <div className="bg-[#161b22] border border-gray-800 rounded-xl my-6 p-6">
                        <div className="mb-6">
                            <h4 className="text-orange-300 font-bold mb-2">Number Input</h4>
                            <p className="text-sm text-gray-400 mb-3">Restricts to numeric values with spinner controls. [cite: 77]</p>
                            <pre className="bg-gray-900 p-3 rounded-lg text-green-400 text-sm overflow-x-auto">
                                <code>&lt;input type="number" name="quantity" min="1" max="10" step="1" value="1"&gt; [cite: 77]</code>
                            </pre>
                        </div>
                        <div>
                            <h4 className="text-orange-300 font-bold mb-2">Range Input</h4>
                            <p className="text-sm text-gray-400 mb-3">Draggable slider for approximate values. [cite: 77]</p>
                            <pre className="bg-gray-900 p-3 rounded-lg text-green-400 text-sm overflow-x-auto">
                                <code>&lt;input type="range" name="volume" min="0" max="100" step="5" value="50"&gt; [cite: 77]</code>
                            </pre>
                        </div>
                    </div>
                </Section>

                <Section title="Dates, Times, and Calendars" icon={CalendarDays}>
                    <p>
                        Historically, developers required bloated JavaScript plugin libraries to render basic calendar date pickers. HTML5 solves this natively and elegantly, providing unified interfaces handled efficiently by the browser. [cite: 78]
                    </p>

                    
                    <div className="overflow-x-auto bg-[#161b22] border border-gray-800 rounded-xl my-6">
                        <table className="w-full text-left text-sm whitespace-nowrap">
                            <thead className="bg-gray-800/50">
                                <tr>
                                    <th className="p-4 text-orange-300 font-mono">Input Type Signature [cite: 79]</th>
                                    <th className="p-4 text-gray-400">What It Collects [cite: 79]</th>
                                    <th className="p-4 text-gray-400">Example Value [cite: 79]</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800">
                                <tr>
                                    <td className="p-4 font-mono font-bold text-gray-200">type="date" [cite: 79]</td>
                                    <td className="p-4 text-gray-400">Calendar date [cite: 79]</td>
                                    <td className="p-4 font-mono text-green-400">2025-08-15 [cite: 79]</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono font-bold text-gray-200">type="time" [cite: 79]</td>
                                    <td className="p-4 text-gray-400">Time of day [cite: 79]</td>
                                    <td className="p-4 font-mono text-green-400">14:30 [cite: 79]</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono font-bold text-gray-200">type="datetime-local" [cite: 79]</td>
                                    <td className="p-4 text-gray-400">Date and time combined [cite: 79]</td>
                                    <td className="p-4 font-mono text-green-400">2025-08-15T14:30 [cite: 79]</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono font-bold text-gray-200">type="month" [cite: 79]</td>
                                    <td className="p-4 text-gray-400">Year and month only [cite: 79]</td>
                                    <td className="p-4 font-mono text-green-400">2025-08 [cite: 79]</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-[#1e293b] p-5 rounded-lg border border-gray-800 mt-4">
                        <h4 className="text-white font-bold mb-3">Example Implementation:</h4>
                        <pre className="bg-gray-900 p-3 rounded-lg text-green-400 text-sm overflow-x-auto">
                            <code>
&lt;label for="checkin"&gt;Check-in date:&lt;/label&gt; [cite: 80]{'\n'}
&lt;input type="date" id="checkin" name="checkin_date" min="2025-01-01" max="2026-12-31" required&gt; [cite: 80]
                            </code>
                        </pre>
                    </div>
                </Section>

                <Section title="Color and Search" icon={Palette}>
                    <p>
                        HTML5 also introduces native controls for color selection and semantic search fields. [cite: 81]
                    </p>

                    
                    <div className="bg-[#161b22] border border-gray-800 rounded-xl my-6 p-6 space-y-6">
                        <div>
                            <h4 className="text-orange-300 font-bold mb-2">Color Picker</h4>
                            <p className="text-sm text-gray-400 mb-3">Opens native OS color picker; value is a hex code. [cite: 82]</p>
                            <pre className="bg-gray-900 p-3 rounded-lg text-green-400 text-sm overflow-x-auto">
                                <code>&lt;input type="color" name="theme_color" value="#1a6fbb"&gt; [cite: 82]</code>
                            </pre>
                        </div>
                        <div>
                            <h4 className="text-orange-300 font-bold mb-2">Search Field</h4>
                            <p className="text-sm text-gray-400 mb-3">Semantically a search field; browsers may style it differently. [cite: 82]</p>
                            <pre className="bg-gray-900 p-3 rounded-lg text-green-400 text-sm overflow-x-auto">
                                <code>&lt;input type="search" name="q" placeholder="Search..." autocomplete="off"&gt; [cite: 82]</code>
                            </pre>
                        </div>
                    </div>
                </Section>

                <Section title="Interactive HTML5 Inputs Simulator" icon={Sparkles}>
                    <p className="mb-8">
                        Experience specialized HTML5 inputs via our interactive simulator, showcasing proper rendering and built-in validations.
                    </p>
                    <InputTypesSimulator />
                </Section>

                <Section title="Failsafe Degradation Principle" icon={KeyRound}>
                    <p>
                        Browsers that don't recognise a type fall back to a plain text box. [cite: 73] If an older browser fails to recognize a specific modern HTML5 input type (such as <code>type="date"</code>), it gracefully degrades to a standard <code>type="text"</code> input block, allowing the form to still function continuously. 
                    </p>
                </Section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/html/forms/buttons-special" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Buttons & Special
                </Link>
                <Link to="/webdevelopment/html/forms/labels-fieldsets" className="flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300 transition-colors">
                    Next: Labels & Fieldsets <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};

export default Html5Inputs;