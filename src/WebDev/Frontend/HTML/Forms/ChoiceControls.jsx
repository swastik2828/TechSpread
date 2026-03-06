import React from 'react';
import { ToggleRight, ArrowRight, ArrowLeft, CheckSquare, AlignCenter, LayoutList } from 'lucide-react';
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

const ChoiceControls = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="Choice Controls - Checkboxes, Radios & Dropdowns"
                description="Learn HTML form selection mechanisms. Master radio buttons, checkboxes, and select dropdown lists with option groups cleanly formatted."
                keywords="HTML checkboxes, HTML radio buttons, HTML select dropdown, HTML option, form choice elements, frontend forms"
                url="/webdevelopment/html/forms/choice-controls"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase border border-orange-500/20 mb-4 inline-block">
                    Module 9.4
                </span>
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    Choice <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Controls</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    Forms frequently require users to pick options from finite, established lists to securely enforce data structure.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">

                <Section title="Exclusive Options: Radio Buttons" icon={ToggleRight}>
                    <p>
                        Radio buttons allow users to select exactly one option universally from a logically linked group of choices.
                    </p>

                    <img
                        src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200"
                        alt="Electronics circuit board representing binary choices"
                        className="w-full h-64 object-cover rounded-xl my-8 border border-gray-800 opacity-90"
                    />

                    <p>
                        The metaphorical derivation mimics classic 1980s car radios—pressing one button mechanically pops out the previously selected button.
                    </p>

                    <div className="bg-[#161b22] border border-gray-800 rounded-xl overflow-hidden my-6">
                        <div className="bg-gray-800/50 px-4 py-2 text-sm text-gray-400 font-mono border-b border-gray-800">Exclusive Select System</div>
                        <pre className="p-4 text-sm text-blue-300 overflow-x-auto">
                            {`<fieldset>
  <legend>Choose your subscription tier:</legend>

  <input type="radio" id="free" name="plan" value="free" checked>
  <label for="free">Free Forever</label>

  <input type="radio" id="basic" name="plan" value="basic">
  <label for="basic">Basic — $4.99/mo</label>

  <input type="radio" id="pro" name="plan" value="pro">
  <label for="pro">Pro Max — $19.99/mo</label>

</fieldset>`}
                        </pre>
                    </div>

                    <div className="bg-orange-900/10 border border-orange-500/30 p-5 rounded-xl text-sm">
                        <p className="font-bold text-orange-400 m-0 mb-2">Architectural Necessity:</p>
                        <p className="text-gray-300 m-0">The <code>name</code> attribute must match exactly across all mutually exclusive radio buttons. This securely binds the group, enforcing the singular select rule across the given choices.</p>
                    </div>
                </Section>

                <Section title="Multiple Selection: Checkboxes" icon={CheckSquare}>
                    <p>
                        In stark contrast, checkboxes permit users to select an unlimited number of explicitly verified boolean options concurrently—zero, one, or everything available.
                    </p>
                    <p>
                        They are commonly used for collecting overlapping diverse user interests or handling required legal agreement constraints reliably.
                    </p>

                    <div className="bg-[#161b22] border border-gray-800 rounded-xl flex flex-col md:flex-row shadow-lg my-8">
                        <div className="md:w-1/2 p-6 border-b md:border-b-0 md:border-r border-gray-800 bg-[#0A0A0A]">
                            <h4 className="text-gray-400 font-bold mb-4 uppercase text-xs tracking-wider">Example Output</h4>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <input type="checkbox" id="t-tech" className="w-4 h-4 accent-orange-500" />
                                    <label htmlFor="t-tech" className="text-gray-300">Technology</label>
                                </div>
                                <div className="flex items-center gap-3">
                                    <input type="checkbox" id="t-design" className="w-4 h-4 accent-orange-500" defaultChecked />
                                    <label htmlFor="t-design" className="text-gray-300">Design Systems</label>
                                </div>
                                <div className="flex items-center gap-3">
                                    <input type="checkbox" id="t-science" className="w-4 h-4 accent-orange-500" />
                                    <label htmlFor="t-science" className="text-gray-300">Physics</label>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 p-0 bg-[#0d1117] flex items-center">
                            <pre className="text-xs text-blue-300 p-6 overflow-x-auto w-full font-mono">
                                {`<input type="checkbox" 
  id="tech" 
  name="interest" 
  value="tech">
<label for="tech">Technology</label>

<input type="checkbox" 
  id="design" 
  name="interest" 
  value="design" 
  checked>
<label for="design">Design Systems</label>`}
                            </pre>
                        </div>
                    </div>

                    <p>
                        <strong>Crucial Fact:</strong> A completely unchecked deactivated checkbox transmits totally absolutely nothing back to the server natively—it simply omits its value entirely from the request payload.
                    </p>
                </Section>

                <Section title="Space Optimization: Dropdown Select List" icon={LayoutList}>
                    <p>
                        A spatially dense list accurately rendering a singular chosen option while saving screen space by hiding the remaining options until clicked.
                    </p>

                    <div className="my-6">
                        <pre className="bg-[#161b22] p-5 rounded-xl border border-gray-800 text-blue-300 text-sm overflow-x-auto font-mono">
                            {`<label for="country">Country of origin:</label>
<select id="country" name="country" required>
  <option value="">-- Priority Select --</option>
  <option value="us">United States</option>
  <option value="gb">United Kingdom</option>
  <option value="in" selected>India</option>
  <option value="ca">Canada</option>
</select>`}
                        </pre>
                    </div>

                    <h3 className="text-xl font-bold mt-8 mb-4 text-white flex items-center gap-2"><AlignCenter size={20} className="text-orange-400" /> Option Groups (optgroup)</h3>
                    <p>
                        Organize long select menus carefully using <code>&lt;optgroup&gt;</code> elements encapsulating categories. The natively rendered group title explicitly annotates standard choices without being selectable itself.
                    </p>

                    <div className="bg-[#101927] border border-gray-800 p-5 rounded-xl">
                        <pre className="text-green-300 text-sm overflow-x-auto font-mono">
                            {`<select name="timezone">
  <optgroup label="Continents — Americas">
    <option value="est">Eastern Time</option>
    <option value="pst">Pacific Time</option>
  </optgroup>
  <optgroup label="Continents — Asia">
    <option value="ist">India (IST)</option>
    <option value="jst">Japan (JST)</option>
  </optgroup>
</select>`}
                        </pre>
                    </div>
                </Section>

            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/html/forms/text-inputs" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Text Inputs
                </Link>
                <Link to="/webdevelopment/html/forms/buttons-special" className="flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300 transition-colors">
                    Next: Buttons & Special <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
};

export default ChoiceControls;
