import React, { useState } from 'react';
import { List, ListOrdered, FileText, Plus, Minus, Code, Play } from 'lucide-react';

const ListsSimulator = () => {
    const [listType, setListType] = useState('ul'); // ul, ol, dl
    const [listStyle, setListStyle] = useState('disc');

    // For ul/ol
    const [items, setItems] = useState(['Learn HTML', 'Master CSS', 'Understand JavaScript']);

    // For dl
    const [dlItems, setDlItems] = useState([
        { term: 'HTML', def: 'HyperText Markup Language' },
        { term: 'CSS', def: 'Cascading Style Sheets' }
    ]);

    const handleAddItem = () => {
        if (listType === 'dl') {
            setDlItems([...dlItems, { term: `Term ${dlItems.length + 1}`, def: 'New Definition' }]);
        } else {
            setItems([...items, `New Item ${items.length + 1}`]);
        }
    };

    const handleRemoveItem = () => {
        if (listType === 'dl' && dlItems.length > 0) {
            setDlItems(dlItems.slice(0, -1));
        } else if (items.length > 0) {
            setItems(items.slice(0, -1));
        }
    };

    const updateItem = (index, value) => {
        const newItems = [...items];
        newItems[index] = value;
        setItems(newItems);
    };

    const updateDlItem = (index, field, value) => {
        const newItems = [...dlItems];
        newItems[index][field] = value;
        setDlItems(newItems);
    };

    const getHtmlCode = () => {
        if (listType === 'dl') {
            let code = `<dl>\n`;
            dlItems.forEach(item => {
                code += `  <dt>${item.term}</dt>\n`;
                code += `  <dd>${item.def}</dd>\n`;
            });
            code += `</dl>`;
            return code;
        }

        const tag = listType;
        const styleAttr = listStyle && listStyle !== 'default' && listStyle !== 'disc' && listStyle !== 'decimal'
            ? ` style="list-style-type: ${listStyle};"`
            : '';

        let code = `<${tag}${styleAttr}>\n`;
        items.forEach(item => {
            code += `  <li>${item}</li>\n`;
        });
        code += `</${tag}>`;
        return code;
    };

    return (
        <div className="w-full max-w-4xl mx-auto my-12 bg-[#0d1117] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-[#161b22] px-6 py-4 border-b border-gray-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-500/20 text-orange-400 rounded-lg">
                        <List size={20} />
                    </div>
                    <h3 className="text-white font-bold text-lg">Interactive List Builder</h3>
                </div>
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                </div>
            </div>

            <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
                {/* Controls Section */}
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                            <ListOrdered size={16} /> List Type
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                            <button
                                onClick={() => { setListType('ul'); setListStyle('disc'); }}
                                className={`px-3 py-2 rounded-lg text-sm transition-all border flex justify-center items-center gap-2 ${listType === 'ul' ? 'bg-orange-600/20 border-orange-500 text-orange-400 font-bold' : 'bg-[#161b22] border-gray-700 text-gray-400 hover:border-gray-500'}`}
                            >
                                <List size={16} /> Unordered
                            </button>
                            <button
                                onClick={() => { setListType('ol'); setListStyle('decimal'); }}
                                className={`px-3 py-2 rounded-lg text-sm transition-all border flex justify-center items-center gap-2 ${listType === 'ol' ? 'bg-orange-600/20 border-orange-500 text-orange-400 font-bold' : 'bg-[#161b22] border-gray-700 text-gray-400 hover:border-gray-500'}`}
                            >
                                <ListOrdered size={16} /> Ordered
                            </button>
                            <button
                                onClick={() => { setListType('dl'); setListStyle('none'); }}
                                className={`px-3 py-2 rounded-lg text-sm transition-all border flex justify-center items-center gap-2 ${listType === 'dl' ? 'bg-orange-600/20 border-orange-500 text-orange-400 font-bold' : 'bg-[#161b22] border-gray-700 text-gray-400 hover:border-gray-500'}`}
                            >
                                <FileText size={16} /> Definition
                            </button>
                        </div>
                    </div>

                    {listType !== 'dl' && (
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">List Style Type (CSS)</label>
                            <select
                                value={listStyle}
                                onChange={(e) => setListStyle(e.target.value)}
                                className="w-full bg-[#161b22] border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500 transition-colors"
                            >
                                {listType === 'ul' ? (
                                    <>
                                        <option value="disc">disc (default)</option>
                                        <option value="circle">circle</option>
                                        <option value="square">square</option>
                                        <option value="none">none</option>
                                    </>
                                ) : (
                                    <>
                                        <option value="decimal">decimal (default)</option>
                                        <option value="decimal-leading-zero">decimal-leading-zero</option>
                                        <option value="lower-alpha">lower-alpha (a, b, c)</option>
                                        <option value="upper-alpha">upper-alpha (A, B, C)</option>
                                        <option value="lower-roman">lower-roman (i, ii, iii)</option>
                                        <option value="upper-roman">upper-roman (I, II, III)</option>
                                    </>
                                )}
                            </select>
                        </div>
                    )}

                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-medium text-gray-400">List Items</label>
                            <div className="flex gap-2">
                                <button onClick={handleRemoveItem} className="p-1 rounded bg-[#161b22] border border-gray-700 text-gray-400 hover:text-red-400 transition" title="Remove Item"><Minus size={14} /></button>
                                <button onClick={handleAddItem} className="p-1 rounded bg-[#161b22] border border-gray-700 text-gray-400 hover:text-green-400 transition" title="Add Item"><Plus size={14} /></button>
                            </div>
                        </div>
                        <div className="space-y-2 max-h-48 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-800">
                            {listType === 'dl' ? (
                                dlItems.map((item, idx) => (
                                    <div key={idx} className="flex gap-2">
                                        <input type="text" value={item.term} onChange={(e) => updateDlItem(idx, 'term', e.target.value)} className="w-1/3 bg-[#161b22] border border-gray-700 text-white rounded-lg px-3 py-1 text-sm focus:border-orange-500" placeholder="Term" />
                                        <input type="text" value={item.def} onChange={(e) => updateDlItem(idx, 'def', e.target.value)} className="w-2/3 bg-[#161b22] border border-gray-700 text-white rounded-lg px-3 py-1 text-sm focus:border-orange-500" placeholder="Definition" />
                                    </div>
                                ))
                            ) : (
                                items.map((item, idx) => (
                                    <input key={idx} type="text" value={item} onChange={(e) => updateItem(idx, e.target.value)} className="w-full bg-[#161b22] border border-gray-700 text-white rounded-lg px-3 py-1 text-sm focus:border-orange-500" placeholder={`Item ${idx + 1}`} />
                                ))
                            )}
                        </div>
                    </div>
                </div>

                {/* Live Preview Section */}
                <div className="bg-[#0a0c10] rounded-xl border border-gray-800 flex flex-col items-center justify-start relative overflow-hidden group">
                    <div className="absolute top-4 right-4 flex items-center gap-2 text-xs text-gray-500">
                        <Play size={14} className="text-emerald-500" /> Live Output
                    </div>

                    <div className="w-full p-8 mt-6">
                        <div className="bg-white/5 border border-white/10 p-6 rounded-lg text-gray-200">
                            {listType === 'ul' && (
                                <ul style={{ listStyleType: listStyle }} className="pl-6 space-y-1">
                                    {items.map((item, idx) => <li key={idx} className="pl-1">{item}</li>)}
                                </ul>
                            )}
                            {listType === 'ol' && (
                                <ol style={{ listStyleType: listStyle }} className="pl-6 space-y-1">
                                    {items.map((item, idx) => <li key={idx} className="pl-1">{item}</li>)}
                                </ol>
                            )}
                            {listType === 'dl' && (
                                <dl className="space-y-3">
                                    {dlItems.map((item, idx) => (
                                        <div key={idx}>
                                            <dt className="font-bold text-orange-400">{item.term}</dt>
                                            <dd className="pl-4 border-l-2 border-orange-500/20 text-gray-300 mt-1">{item.def}</dd>
                                        </div>
                                    ))}
                                </dl>
                            )}
                        </div>
                    </div>

                    {/* Status logs */}
                    <div className="w-full mt-auto bg-[#161b22] border-t border-gray-800 p-4 font-mono text-xs text-gray-400">
                        <div className="flex justify-between items-center mb-2 pb-2">
                            <span className="text-orange-400 flex items-center gap-2"><Code size={12} /> Generated HTML:</span>
                        </div>
                        <pre className="text-blue-300 overflow-x-auto whitespace-pre-wrap">
                            {getHtmlCode()}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListsSimulator;
