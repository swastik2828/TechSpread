import React, { useState } from 'react';
import { Zap } from 'lucide-react';

const TABS = [
    {
        id: 'action',
        label: 'User Action',
        items: [
            { pseudo: ':hover', desc: 'Triggered when pointer is over the element', demoClass: 'hover:bg-sky-500/20 hover:text-sky-300 hover:scale-105 cursor-pointer' },
            { pseudo: ':focus', desc: 'Triggered when element receives keyboard focus', type: 'input' },
            { pseudo: ':active', desc: 'Triggered while element is being pressed', demoClass: 'active:scale-95 active:bg-sky-600 cursor-pointer' },
        ],
    },
    {
        id: 'form',
        label: 'Form State',
        items: [
            { pseudo: ':valid', desc: 'Input passes HTML validation', type: 'input-email' },
            { pseudo: ':invalid', desc: 'Input fails HTML validation', type: 'input-email' },
            { pseudo: ':checked', desc: 'Checkbox or radio is checked', type: 'checkbox' },
            { pseudo: ':disabled', desc: 'Input has disabled attribute', type: 'input-disabled' },
        ],
    },
    {
        id: 'structural',
        label: 'Structural',
        items: [
            { pseudo: ':first-child', desc: 'Targets the first child element', type: 'list' },
            { pseudo: ':last-child', desc: 'Targets the last child element', type: 'list' },
            { pseudo: ':nth-child(2n)', desc: 'Every even child (zebra stripe)', type: 'list' },
        ],
    },
];

const InteractiveDemo = ({ item }) => {
    if (item.type === 'input') {
        return (
            <div className="mt-3">
                <input
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white text-sm font-mono focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/30 transition-all"
                    placeholder="Click me to see :focus"
                />
            </div>
        );
    }
    if (item.type === 'input-email') {
        return (
            <div className="mt-3">
                <input
                    type="email"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white text-sm font-mono valid:border-green-500 invalid:border-red-500 focus:outline-none transition-all"
                    placeholder="Type an email to see :valid / :invalid"
                />
            </div>
        );
    }
    if (item.type === 'checkbox') {
        return (
            <div className="mt-3 space-y-2">
                {['Option A', 'Option B'].map(opt => (
                    <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 accent-sky-500" />
                        <span className="text-sm text-gray-400 group-has-[:checked]:text-sky-300 group-has-[:checked]:font-bold transition-colors">{opt}</span>
                    </label>
                ))}
            </div>
        );
    }
    if (item.type === 'input-disabled') {
        return (
            <div className="mt-3">
                <input
                    disabled
                    className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-2 text-gray-600 text-sm font-mono cursor-not-allowed"
                    value="This input is disabled"
                    readOnly
                />
            </div>
        );
    }
    if (item.type === 'list') {
        return (
            <ul className="mt-3 space-y-1">
                {['First item', 'Second item', 'Third item', 'Fourth item'].map((text, i) => (
                    <li
                        key={i}
                        className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                            item.pseudo === ':first-child' && i === 0 ? 'bg-sky-500/20 text-sky-300 font-bold border border-sky-500/30'
                            : item.pseudo === ':last-child' && i === 3 ? 'bg-sky-500/20 text-sky-300 font-bold border border-sky-500/30'
                            : item.pseudo === ':nth-child(2n)' && (i + 1) % 2 === 0 ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20'
                            : 'bg-gray-800/50 text-gray-400 border border-gray-800'
                        }`}
                    >
                        {text}
                        {(item.pseudo === ':first-child' && i === 0) ? ' ← :first-child' : ''}
                        {(item.pseudo === ':last-child' && i === 3) ? ' ← :last-child' : ''}
                        {(item.pseudo === ':nth-child(2n)' && (i + 1) % 2 === 0) ? ' ← even' : ''}
                    </li>
                ))}
            </ul>
        );
    }
    return (
        <div className={`mt-3 px-5 py-4 rounded-xl border border-gray-700 text-sm font-medium text-gray-300 transition-all duration-200 select-none ${item.demoClass}`}>
            Interact with this element
        </div>
    );
};

const CssPseudoClassSimulator = () => {
    const [activeTab, setActiveTab] = useState('action');
    const tab = TABS.find(t => t.id === activeTab);

    return (
        <div className="my-10 rounded-2xl overflow-hidden border border-sky-500/20 bg-[#0d1117] shadow-2xl">
            <div className="flex items-center gap-3 px-6 py-4 bg-[#161b22] border-b border-gray-800">
                <Zap size={18} className="text-sky-400" />
                <span className="font-bold text-white text-sm">Pseudo-Class Interactive Demo</span>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-800">
                {TABS.map(t => (
                    <button
                        key={t.id}
                        onClick={() => setActiveTab(t.id)}
                        className={`px-5 py-3 text-sm font-medium transition-all ${activeTab === t.id ? 'text-sky-400 border-b-2 border-sky-500 bg-sky-500/5' : 'text-gray-500 hover:text-gray-300'}`}
                    >
                        {t.label}
                    </button>
                ))}
            </div>

            <div className="p-5 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                {tab.items.map(item => (
                    <div key={item.pseudo} className="p-4 rounded-xl bg-[#161b22] border border-gray-800">
                        <code className="text-sky-400 font-bold text-sm font-mono">{item.pseudo}</code>
                        <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                        <InteractiveDemo item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CssPseudoClassSimulator;
