import React, { useState } from 'react';
import { MousePointer2, Smartphone, Keyboard, Search, Calendar, Clock, Palette } from 'lucide-react';

const InputTypesSimulator = () => {
    const [activeTab, setActiveTab] = useState('text');

    const [values, setValues] = useState({
        email: '',
        url: '',
        tel: '',
        number: '',
        range: 50,
        date: '',
        time: '',
        color: '#3b82f6',
        search: ''
    });

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const tabs = [
        { id: 'mobile', label: 'Mobile Utilities', icon: Smartphone },
        { id: 'numeric', label: 'Numbers & Range', icon: Keyboard },
        { id: 'date', label: 'Date & Time', icon: Calendar },
        { id: 'visual', label: 'Visual Selectors', icon: Palette },
    ];

    return (
        <div className="bg-[#0f172a] rounded-2xl border border-gray-800 overflow-hidden shadow-2xl my-8">
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-800 overflow-x-auto bg-[#1e293b]">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-5 py-4 text-sm font-medium transition-colors whitespace-nowrap ${activeTab === tab.id
                                ? 'text-blue-400 border-b-2 border-blue-500 bg-blue-500/5'
                                : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                            }`}
                    >
                        <tab.icon size={16} />
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="p-8">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left Column: Interactive Inputs */}
                    <div className="space-y-8">
                        {activeTab === 'mobile' && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">type="email"</label>
                                    <input type="email" name="email" value={values.email} onChange={handleChange} placeholder="user@example.com" className="w-full bg-[#1e293b] border border-gray-700 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    <p className="text-xs text-gray-500 mt-2">Triggers keyboard with @ key on mobile. Validates email format.</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">type="url"</label>
                                    <input type="url" name="url" value={values.url} onChange={handleChange} placeholder="https://website.com" className="w-full bg-[#1e293b] border border-gray-700 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    <p className="text-xs text-gray-500 mt-2">Triggers keyboard with .com key. Expects absolute URL.</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">type="tel"</label>
                                    <input type="tel" name="tel" value={values.tel} onChange={handleChange} placeholder="+1 234 567 890" className="w-full bg-[#1e293b] border border-gray-700 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    <p className="text-xs text-gray-500 mt-2">Summons numeric keypad on phones. Does NOT auto-validate format.</p>
                                </div>
                            </>
                        )}

                        {activeTab === 'numeric' && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">type="number" (min=0, max=100)</label>
                                    <input type="number" name="number" min="0" max="100" value={values.number} onChange={handleChange} className="w-full bg-[#1e293b] border border-gray-700 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    <p className="text-xs text-gray-500 mt-2">Displays native stepper controls and prevents non-numeric text entry.</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">type="range" (Value: {values.range})</label>
                                    <input type="range" name="range" min="0" max="100" value={values.range} onChange={handleChange} className="w-full accent-blue-500" />
                                    <p className="text-xs text-gray-500 mt-2">Visual slider for imprecise numerical selection.</p>
                                </div>
                            </>
                        )}

                        {activeTab === 'date' && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">type="date"</label>
                                    <input type="date" name="date" value={values.date} onChange={handleChange} className="w-full bg-[#1e293b] border border-gray-700 text-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    <p className="text-xs text-gray-500 mt-2">Opens native OS calendar picker widget.</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">type="time"</label>
                                    <input type="time" name="time" value={values.time} onChange={handleChange} className="w-full bg-[#1e293b] border border-gray-700 text-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    <p className="text-xs text-gray-500 mt-2">Native time selector wheel or standard input block.</p>
                                </div>
                            </>
                        )}

                        {activeTab === 'visual' && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">type="color"</label>
                                    <div className="flex gap-4 items-center">
                                        <input type="color" name="color" value={values.color} onChange={handleChange} className="h-12 w-20 bg-transparent border-0 cursor-pointer p-0 rounded-lg" />
                                        <span className="font-mono text-gray-300 bg-[#1e293b] px-3 py-1 rounded border border-gray-700">{values.color}</span>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">Triggers the operating system's native color picking tool.</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">type="search"</label>
                                    <div className="relative">
                                        <Search className="absolute left-3 top-3 text-gray-500" size={18} />
                                        <input type="search" name="search" value={values.search} onChange={handleChange} placeholder="Search site..." className="w-full pl-10 bg-[#1e293b] border border-gray-700 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">Semantically optimized for searches. Browsers often style with an 'x' to clear.</p>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Right Column: Code Output */}
                    <div className="bg-[#0A0A0A] border border-gray-800 rounded-xl p-6 flex flex-col h-full">
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                            <CodeTag size={18} /> HTML Rendered Code
                        </h4>
                        <div className="flex-1 bg-[#161b22] border border-gray-800 rounded-lg p-5">
                            <pre className="text-blue-300 text-sm overflow-x-auto whitespace-pre-wrap font-mono">
                                {generateCode(activeTab, values)}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CodeTag = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;

const generateCode = (tab, values) => {
    if (tab === 'mobile') {
        return `<label for="email">Email Address:</label>\n<input \n  type="email" \n  id="email"\n  name="user_email"\n  value="${values.email}"\n/>\n\n<label for="url">Website URL:</label>\n<input \n  type="url" \n  id="url"\n  name="website"\n  value="${values.url}"\n/>\n\n<label for="tel">Phone Number:</label>\n<input \n  type="tel" \n  id="tel"\n  name="phone"\n  value="${values.tel}"\n/>`;
    }
    if (tab === 'numeric') {
        return `<label for="qty">Quantity:</label>\n<input \n  type="number" \n  id="qty"\n  name="quantity"\n  min="0"\n  max="100"\n  value="${values.number}"\n/>\n\n<label for="vol">Volume:</label>\n<input \n  type="range" \n  id="vol"\n  name="volume"\n  min="0"\n  max="100"\n  value="${values.range}"\n/>`;
    }
    if (tab === 'date') {
        return `<label for="birth">Birth Date:</label>\n<input \n  type="date" \n  id="birth"\n  name="birthday"\n  value="${values.date}"\n/>\n\n<label for="alarm">Alarm Time:</label>\n<input \n  type="time" \n  id="alarm"\n  name="alarm"\n  value="${values.time}"\n/>`;
    }
    return `<label for="color">Theme Color:</label>\n<input \n  type="color" \n  id="color"\n  name="theme"\n  value="${values.color}"\n/>\n\n<label for="query">Search:</label>\n<input \n  type="search" \n  id="query"\n  name="q"\n  value="${values.search}"\n/>`;
}

export default InputTypesSimulator;
