import React, { useState } from 'react';
import { Database, MousePointerClick, Code } from 'lucide-react';

export default function JsDataAttributeSimulator() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        { id: "p_101", action: "add-to-cart", price: "29.99", stockStatus: "in-stock", name: "Wireless Mouse" },
        { id: "p_102", action: "add-to-cart", price: "89.50", stockStatus: "low-stock", name: "Mechanical Keyboard" },
        { id: "p_103", action: "out-of-stock", price: "120.00", stockStatus: "empty", name: "Gaming Headset" }
    ];

    const handleClick = (product) => {
        // In a real app, we'd read event.target.dataset, but here we simulate it
        setSelectedProduct({
            rawHtml: `<button \n  data-product-id="${product.id}"\n  data-action="${product.action}"\n  data-price="${product.price}"\n  data-stock-status="${product.stockStatus}">\n  ${product.name}\n</button>`,
            dataset: {
                productId: product.id,
                action: product.action,
                price: product.price,
                stockStatus: product.stockStatus
            }
        });
    };

    return (
        <div className="bg-[#0f172a] rounded-2xl border border-gray-800 p-6 my-8 shadow-2xl w-full">
            <div className="flex flex-col md:flex-row gap-8">
                
                {/* Visual UI (The "Browser") */}
                <div className="w-full md:w-1/3 flex flex-col gap-4">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <MousePointerClick className="w-4 h-4" /> Click a Product
                    </div>
                    
                    <div className="flex flex-col gap-3">
                        {products.map((p, idx) => (
                            <button 
                                key={idx}
                                onClick={() => handleClick(p)}
                                className="p-4 rounded-xl border border-gray-700 bg-gray-800/40 text-left hover:bg-gray-800 hover:border-blue-500 transition-all flex justify-between items-center group focus:ring-2 focus:ring-blue-500 outline-none"
                            >
                                <span className="font-semibold text-gray-200 group-hover:text-blue-300 transition-colors">{p.name}</span>
                                <span className="text-sm text-gray-400">${p.price}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Data Inspector */}
                <div className="w-full md:w-2/3 flex flex-col gap-4">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                        <Database className="w-4 h-4" /> JavaScript Evaluation
                    </div>

                    {selectedProduct ? (
                        <div className="grid grid-cols-1 gap-4">
                            {/* HTML View */}
                            <div className="bg-black/50 border border-gray-800 rounded-xl p-4">
                                <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-2 border-b border-gray-800 pb-2">1. The HTML Element</div>
                                <pre className="font-mono text-sm text-green-300 overflow-x-auto whitespace-pre-wrap">
                                    {selectedProduct.rawHtml}
                                </pre>
                            </div>

                            {/* Dataset Map View */}
                            <div className="bg-black/50 border border-gray-800 rounded-xl p-4">
                                <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-2 border-b border-gray-800 pb-2">2. The element.dataset Object</div>
                                
                                <div className="font-mono text-sm">
                                    <span className="text-blue-300">element.dataset</span> = {'{'}
                                    <div className="pl-4 border-l border-gray-800 ml-2 my-2 flex flex-col gap-2">
                                        <div className="flex justify-between items-center border-b border-gray-800/50 pb-1">
                                            <span className="text-yellow-200">productId:</span>
                                            <span className="text-orange-300">"{selectedProduct.dataset.productId}"</span>
                                        </div>
                                        <div className="flex justify-between items-center border-b border-gray-800/50 pb-1">
                                            <span className="text-yellow-200">action:</span>
                                            <span className="text-orange-300">"{selectedProduct.dataset.action}"</span>
                                        </div>
                                        <div className="flex justify-between items-center border-b border-gray-800/50 pb-1">
                                            <span className="text-yellow-200">price:</span>
                                            <span className="text-orange-300">"{selectedProduct.dataset.price}"</span>
                                        </div>
                                        <div className="flex justify-between items-center pb-1">
                                            <span className="text-yellow-200">stockStatus:</span>
                                            <span className="text-orange-300">"{selectedProduct.dataset.stockStatus}"</span>
                                        </div>
                                    </div>
                                    {'}'}
                                </div>
                            </div>

                            <div className="bg-blue-900/20 border border-blue-900/50 p-4 rounded-xl flex items-start gap-3">
                                <Code className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                                <div className="text-sm text-gray-300 font-medium">
                                    Notice the transformation: <code>data-stock-status</code> in HTML automatically becomes <code>stockStatus</code> (camelCase) in JavaScript. Also note that <code>price</code> is a string <code>"{selectedProduct.dataset.price}"</code>, not a number!
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="h-full border border-dashed border-gray-700 rounded-xl flex items-center justify-center text-gray-500 p-8 text-center min-h-[300px]">
                            Select a product card on the left to inspect its data attributes mapping.
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}