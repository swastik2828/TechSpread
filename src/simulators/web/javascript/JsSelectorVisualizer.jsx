import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function JsSelectorVisualizer() {
    const [selector, setSelector] = useState('.card');
    const [method, setMethod] = useState('querySelectorAll');

    // Simulated DOM Structure
    const domTree = [
        { id: '1', tag: 'div', className: 'container', children: [
            { id: '2', tag: 'h1', className: 'title', text: 'Products' },
            { id: '3', tag: 'div', className: 'card active', text: 'Card 1' },
            { id: '4', tag: 'div', className: 'card', text: 'Card 2' },
            { id: '5', tag: 'ul', className: 'list', children: [
                { id: '6', tag: 'li', className: 'item', text: 'Item A' },
                { id: '7', tag: 'li', className: 'item', text: 'Item B' }
            ]}
        ]}
    ];

    // Simple robust query matcher for simulation purposes
    const matchSelector = (node, query) => {
        if (!query) return false;
        const q = query.trim();
        if (q.startsWith('.')) return node.className?.includes(q.substring(1));
        if (q.startsWith('#')) return node.id === q.substring(1);
        return node.tag === q.toLowerCase();
    };

    const getMatchedNodeIds = () => {
        let matched = [];
        const traverse = (nodes) => {
            for (let node of nodes) {
                if (matchSelector(node, selector)) {
                    matched.push(node.id);
                    if (method === 'querySelector') break; // Stop after first match
                }
                if (node.children && !(method === 'querySelector' && matched.length > 0)) {
                    traverse(node.children);
                }
            }
        };
        traverse(domTree);
        return matched;
    };

    const matchedIds = getMatchedNodeIds();

    const renderNode = (node, depth = 0) => {
        const isMatched = matchedIds.includes(node.id);
        const hasChildren = node.children && node.children.length > 0;

        return (
            <div key={node.id} className="font-mono text-sm" style={{ marginLeft: `${depth * 20}px` }}>
                <div className={`p-2 my-1 rounded border transition-colors duration-300 ${isMatched ? 'bg-blue-900/40 border-blue-500 text-blue-200 shadow-[0_0_15px_rgba(59,130,246,0.3)]' : 'bg-gray-800/30 border-gray-700/50 text-gray-400'}`}>
                    <span className="text-pink-400">&lt;{node.tag}</span>
                    {node.className && <span className="text-yellow-300"> class="<span className="text-green-300">{node.className}</span>"</span>}
                    {node.id && <span className="text-yellow-300"> id="<span className="text-green-300">{node.id}</span>"</span>}
                    <span className="text-pink-400">&gt;</span>
                    
                    {!hasChildren && node.text && <span className="text-gray-300 ml-2">{node.text}</span>}
                    {!hasChildren && <span className="text-pink-400 ml-2">&lt;/{node.tag}&gt;</span>}
                </div>
                
                {hasChildren && (
                    <>
                        <div>{node.children.map(child => renderNode(child, depth + 1))}</div>
                        <div className={`p-2 rounded mt-1 transition-colors duration-300 ${isMatched ? 'text-blue-200' : 'text-gray-500'}`}>
                            <span className="text-pink-400">&lt;/{node.tag}&gt;</span>
                        </div>
                    </>
                )}
            </div>
        );
    };

    return (
        <div className="bg-[#0f172a] rounded-2xl border border-gray-800 p-6 my-8 overflow-hidden shadow-2xl w-full">
            <div className="flex flex-col md:flex-row gap-6">
                
                {/* Controls */}
                <div className="w-full md:w-1/3 flex flex-col gap-4">
                    <div>
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">JS Method</label>
                        <select 
                            value={method} 
                            onChange={(e) => setMethod(e.target.value)}
                            className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg p-3 outline-none focus:border-blue-500 transition-colors"
                        >
                            <option value="querySelectorAll">querySelectorAll()</option>
                            <option value="querySelector">querySelector()</option>
                        </select>
                    </div>

                    <div>
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">CSS Selector</label>
                        <div className="relative">
                            <input 
                                type="text" 
                                value={selector} 
                                onChange={(e) => setSelector(e.target.value)}
                                className="w-full bg-gray-900 border border-gray-700 text-green-300 font-mono rounded-lg p-3 pl-10 outline-none focus:border-blue-500 transition-colors"
                                placeholder=".class, #id, tag"
                            />
                            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-3.5" />
                        </div>
                    </div>

                    <div className="mt-4 p-4 bg-black/40 rounded-xl border border-gray-800">
                        <div className="text-xs text-gray-500 mb-1">Execution Result:</div>
                        <div className="font-mono text-sm text-blue-300">
                            document.{method}('{selector}')
                        </div>
                        <div className="text-xs text-gray-400 mt-3 pt-3 border-t border-gray-800">
                            {method === 'querySelector' ? (
                                <span>Returns: <strong className="text-white">{matchedIds.length > 0 ? 'Element Node' : 'null'}</strong></span>
                            ) : (
                                <span>Returns: NodeList [<strong className="text-white">{matchedIds.length}</strong> items]</span>
                            )}
                        </div>
                    </div>
                </div>

                {/* DOM Visualizer */}
                <div className="w-full md:w-2/3 bg-black/50 rounded-xl border border-gray-800 p-4 overflow-x-auto">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">Browser DOM Tree</div>
                    {domTree.map(node => renderNode(node))}
                </div>

            </div>
        </div>
    );
}