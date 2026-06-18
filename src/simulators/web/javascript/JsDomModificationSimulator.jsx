import React, { useState } from 'react';
import { AlertTriangle, ShieldCheck, Code, Zap } from 'lucide-react';

export default function JsDomModificationSimulator() {
    const [inputValue, setInputValue] = useState('<strong>Hello</strong> <script>alert("Hacked!")</script>');
    const [activeMethod, setActiveMethod] = useState('textContent');
    const [simulatedDom, setSimulatedDom] = useState([]);

    const handleApply = () => {
        if (activeMethod === 'textContent') {
            setSimulatedDom([{ type: 'text', content: inputValue }]);
        } else if (activeMethod === 'innerHTML') {
            // Simulated XSS check
            const hasScript = inputValue.toLowerCase().includes('<script>');
            setSimulatedDom([
                { type: 'html', content: inputValue, hacked: hasScript }
            ]);
        }
    };

    return (
        <div className="bg-[#0f172a] rounded-2xl border border-gray-800 p-6 my-8 shadow-2xl w-full">
            <div className="flex flex-col md:flex-row gap-6">
                
                {/* Controls */}
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                    <div>
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">User Input (Untrusted Data)</label>
                        <textarea 
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className="w-full bg-gray-900 border border-gray-700 text-pink-300 font-mono rounded-lg p-3 outline-none focus:border-blue-500 transition-colors resize-none h-24 text-sm"
                            placeholder="Type some text or HTML..."
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <button 
                            onClick={() => { setActiveMethod('textContent'); handleApply(); }}
                            className={`p-3 rounded-lg border flex flex-col items-center justify-center gap-2 transition-all ${activeMethod === 'textContent' ? 'bg-blue-600/20 border-blue-500 text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.3)]' : 'bg-gray-800/50 border-gray-700 text-gray-400 hover:bg-gray-800'}`}
                        >
                            <ShieldCheck className="w-5 h-5" />
                            <span className="font-mono text-xs">.textContent</span>
                        </button>
                        <button 
                            onClick={() => { setActiveMethod('innerHTML'); handleApply(); }}
                            className={`p-3 rounded-lg border flex flex-col items-center justify-center gap-2 transition-all ${activeMethod === 'innerHTML' ? 'bg-rose-600/20 border-rose-500 text-rose-300 shadow-[0_0_15px_rgba(244,63,94,0.3)]' : 'bg-gray-800/50 border-gray-700 text-gray-400 hover:bg-gray-800'}`}
                        >
                            <AlertTriangle className="w-5 h-5" />
                            <span className="font-mono text-xs">.innerHTML</span>
                        </button>
                    </div>

                    <div className="p-4 bg-black/40 rounded-xl border border-gray-800 mt-2">
                        <div className="text-xs text-gray-500 mb-2">Execution:</div>
                        <div className="font-mono text-sm text-gray-300">
                            element.<span className={activeMethod === 'textContent' ? 'text-blue-400' : 'text-rose-400'}>{activeMethod}</span> = userInput;
                        </div>
                    </div>
                </div>

                {/* Simulated Browser View */}
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Browser Rendering Result</div>
                    <div className="flex-1 bg-white rounded-xl p-4 overflow-hidden relative min-h-[200px]">
                        
                        {/* Fake Browser Toolbar */}
                        <div className="absolute top-0 left-0 w-full bg-gray-200 border-b border-gray-300 px-3 py-2 flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            <div className="ml-4 text-[10px] text-gray-500 font-mono">yoursite.com/profile</div>
                        </div>

                        <div className="mt-8 text-black font-sans">
                            {simulatedDom.map((node, i) => {
                                if (node.type === 'text') {
                                    return <div key={i} className="whitespace-pre-wrap">{node.content}</div>;
                                }
                                if (node.type === 'html') {
                                    if (node.hacked) {
                                        return (
                                            <div key={i} className="relative z-10 animate-pulse text-center mt-10">
                                                <div className="inline-block bg-red-600 text-white font-bold p-4 rounded shadow-2xl border-4 border-red-800 transform rotate-[-5deg]">
                                                    <Zap className="w-8 h-8 mx-auto mb-2" />
                                                    CRITICAL XSS EXECUTED!
                                                    <div className="text-xs font-normal mt-2 opacity-80">Arbitrary script has run in your session.</div>
                                                </div>
                                            </div>
                                        );
                                    }
                                    return <div key={i} dangerouslySetInnerHTML={{ __html: node.content }} />;
                                }
                                return null;
                            })}
                        </div>
                    </div>

                    <div className="text-xs text-gray-400 bg-gray-900/50 p-3 rounded-lg border border-gray-800">
                        {activeMethod === 'textContent' 
                            ? "Safe. The browser treats the input strictly as literal characters, escaping any HTML tags automatically." 
                            : "Danger. The browser parses the string into live DOM nodes. If the string contains a <script> tag from a user, it will execute."}
                    </div>
                </div>

            </div>
        </div>
    );
}