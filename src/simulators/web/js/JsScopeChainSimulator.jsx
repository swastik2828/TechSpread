import React, { useState } from 'react';
import { Play, RotateCcw, ArrowRight, Eye, Code2, Waypoints, Search } from 'lucide-react';

const JsScopeChainSimulator = () => {
    const [step, setStep] = useState(0);

    const steps = [
        {
            code: 'const theme = "Dark Mode";\n\nfunction renderPage() {\n  const theme = "Light Mode";\n\n  function renderButton() {\n    const theme = "High Contrast Mode";\n    \n    console.log(`Button is using: ${theme}`); \n  }\n  \n  renderButton();\n}\n\nrenderPage();',
            desc: "Step 1: Code execution reaches line 9 inside 'renderButton()'. It needs to find the value of the variable 'theme'.",
            activeLine: 9,
            searchLoc: null,
            env: {
                global: { theme: '"Dark Mode"' },
                renderPage: { theme: '"Light Mode"' },
                renderButton: { theme: '"High Contrast Mode"' }
            },
            output: []
        },
        {
            code: 'const theme = "Dark Mode";\n\nfunction renderPage() {\n  const theme = "Light Mode";\n\n  function renderButton() {\n    const theme = "High Contrast Mode";\n    \n    console.log(`Button is using: ${theme}`); \n  }\n  \n  renderButton();\n}\n\nrenderPage();',
            desc: "Step 2: Local Check. The engine first checks its own current Lexical Environment (renderButton). It finds 'theme = \"High Contrast Mode\"'.",
            activeLine: 9,
            searchLoc: 'renderButton',
            env: {
                global: { theme: '"Dark Mode"' },
                renderPage: { theme: '"Light Mode"' },
                renderButton: { theme: '"High Contrast Mode"' }
            },
            output: []
        },
        {
            code: 'const theme = "Dark Mode";\n\nfunction renderPage() {\n  const theme = "Light Mode";\n\n  function renderButton() {\n    const theme = "High Contrast Mode";\n    \n    console.log(`Button is using: ${theme}`); \n  }\n  \n  renderButton();\n}\n\nrenderPage();',
            desc: "Step 3: Because it found a match immediately, the great data hunt STOPS. This is called 'Shadowing'. The inner variable shadows all the outer ones.",
            activeLine: 9,
            searchLoc: 'match-renderButton',
            env: {
                global: { theme: '"Dark Mode"' },
                renderPage: { theme: '"Light Mode"' },
                renderButton: { theme: '"High Contrast Mode"' }
            },
            output: ["Button is using: High Contrast Mode"]
        },
        {
            code: 'const theme = "Dark Mode";\n\nfunction renderPage() {\n  const theme = "Light Mode";\n\n  function renderButton() {\n    // const theme = "High Contrast Mode"; (REMOVED)\n    \n    console.log(`Button is using: ${theme}`); \n  }\n  \n  renderButton();\n}\n\nrenderPage();',
            desc: "Step 4: Let's pretend we delete the local variable. What happens now? The engine checks its local environment and finds NOTHING.",
            activeLine: 8,
            searchLoc: 'renderButton',
            env: {
                global: { theme: '"Dark Mode"' },
                renderPage: { theme: '"Light Mode"' },
                renderButton: { theme: '<not found>' }
            },
            output: ["Button is using: High Contrast Mode"]
        },
        {
            code: 'const theme = "Dark Mode";\n\nfunction renderPage() {\n  const theme = "Light Mode";\n\n  function renderButton() {\n    // const theme = "High Contrast Mode"; (REMOVED)\n    \n    console.log(`Button is using: ${theme}`); \n  }\n  \n  renderButton();\n}\n\nrenderPage();',
            desc: "Step 5: Parent Check. It follows the hidden scope chain arrow to its parent environment (renderPage). It finds 'theme = \"Light Mode\"'.",
            activeLine: 8,
            searchLoc: 'renderPage',
            env: {
                global: { theme: '"Dark Mode"' },
                renderPage: { theme: '"Light Mode"' },
                renderButton: { theme: '<not found>' }
            },
            output: ["Button is using: High Contrast Mode"]
        },
        {
            code: 'const theme = "Dark Mode";\n\nfunction renderPage() {\n  const theme = "Light Mode";\n\n  function renderButton() {\n    // const theme = "High Contrast Mode"; (REMOVED)\n    \n    console.log(`Button is using: ${theme}`); \n  }\n  \n  renderButton();\n}\n\nrenderPage();',
            desc: "Step 6: It prints 'Light Mode'. The search stops. The global 'Dark Mode' is shadowed.",
            activeLine: 8,
            searchLoc: 'match-renderPage',
            env: {
                global: { theme: '"Dark Mode"' },
                renderPage: { theme: '"Light Mode"' },
                renderButton: { theme: '<not found>' }
            },
            output: ["Button is using: High Contrast Mode", "Button is using: Light Mode"]
        },
        {
            code: 'const theme = "Dark Mode";\n\nfunction renderPage() {\n  // const theme = "Light Mode"; (REMOVED)\n\n  function renderButton() {\n    // const theme = "High Contrast Mode"; (REMOVED)\n    \n    console.log(`Button is using: ${theme}`); \n  }\n  \n  renderButton();\n}\n\nrenderPage();',
            desc: "Step 7: If we delete the parent variable too, the engine checks local (fails), parent (fails), and goes to the Global Scope (finds 'Dark Mode'). If that failed, it would throw a ReferenceError.",
            activeLine: 8,
            searchLoc: 'match-global',
            env: {
                global: { theme: '"Dark Mode"' },
                renderPage: { theme: '<not found>' },
                renderButton: { theme: '<not found>' }
            },
            output: ["Button is using: High Contrast Mode", "Button is using: Light Mode", "Button is using: Dark Mode"]
        }
    ];

    const currentStep = steps[step];

    return (
        <div className="bg-[#0a0a0a] rounded-xl border border-gray-800 overflow-hidden shadow-2xl flex flex-col w-full font-sans">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-3 border-b border-gray-800 bg-[#111] gap-3">
                <div className="flex items-center gap-2">
                    <Waypoints className="w-5 h-5 text-cyan-400" />
                    <span className="font-semibold text-gray-200">Scope Chain Simulator</span>
                </div>

                <div className="flex gap-2">
                    <button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0} className="p-1.5 rounded bg-gray-800 text-gray-300 hover:bg-gray-700 disabled:opacity-50"><ArrowRight className="w-4 h-4 rotate-180" /></button>
                    <button onClick={() => setStep(Math.min(steps.length - 1, step + 1))} disabled={step === steps.length - 1} className="p-1.5 rounded bg-cyan-600 text-white hover:bg-cyan-500 disabled:opacity-50 flex items-center gap-1"><span className="text-xs font-bold px-1">Next Step</span><ArrowRight className="w-4 h-4" /></button>
                    <button onClick={() => setStep(0)} className="p-1.5 rounded bg-gray-800 text-gray-300 hover:bg-gray-700 ml-2" title="Reset"><RotateCcw className="w-4 h-4" /></button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-gray-800">
                <div className="bg-[#1e1e1e] p-4 flex flex-col">
                    <div className="flex items-center gap-2 mb-3 text-gray-400 text-sm font-semibold uppercase tracking-wider">
                        <Code2 className="w-4 h-4" /> Code execution
                    </div>
                    <pre className="text-sm font-mono text-gray-300 whitespace-pre-wrap flex-1 bg-[#161616] p-4 rounded-lg border border-gray-800">
                        {currentStep.code.split('\n').map((line, i) => (
                            <div key={i} className={`px-2 py-0.5 rounded ${i + 1 === currentStep.activeLine ? 'bg-cyan-500/20 border-l-2 border-cyan-500' : ''}`}>
                                {line}
                            </div>
                        ))}
                    </pre>
                </div>

                <div className="bg-[#1e1e1e] p-4 flex flex-col gap-4">
                    <div className="flex items-center gap-2 mb-1 text-gray-400 text-sm font-semibold uppercase tracking-wider">
                        <Waypoints className="w-4 h-4" /> Scope Chain (Lexical Environments)
                    </div>
                    
                    <div className="flex-1 flex flex-col items-center justify-end gap-3 relative pb-4 pt-8">
                        
                        {/* Global */}
                        <div className={`w-3/4 p-3 rounded-lg border flex justify-between items-center relative z-10 transition-all duration-300 ${currentStep.searchLoc === 'global' ? 'bg-yellow-900/30 border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.2)]' : currentStep.searchLoc === 'match-global' ? 'bg-green-900/30 border-green-500/50 scale-105' : 'bg-gray-900 border-gray-700'}`}>
                            {currentStep.searchLoc === 'match-global' && <div className="absolute -left-10 text-green-400 font-bold tracking-widest uppercase text-xs flex items-center gap-1"><Search className="w-3 h-3" /> MATCH</div>}
                            <div className="text-xs text-gray-400 uppercase font-bold text-center absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-900 px-2 rounded border border-gray-700">Global (Store)</div>
                            <div className="font-mono text-sm text-blue-300">theme</div>
                            <div className="font-mono text-sm text-cyan-400">{currentStep.env.global.theme}</div>
                        </div>

                        {/* Arrow */}
                        <div className="w-0.5 h-6 bg-cyan-800/50 relative">
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 border-b-2 border-r-2 border-cyan-800/50 rotate-45"></div>
                        </div>

                        {/* renderPage */}
                        <div className={`w-5/6 p-3 rounded-lg border flex justify-between items-center relative z-10 transition-all duration-300 ${currentStep.searchLoc === 'renderPage' ? 'bg-yellow-900/30 border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.2)]' : currentStep.searchLoc === 'match-renderPage' ? 'bg-green-900/30 border-green-500/50 scale-105' : 'bg-blue-900/10 border-blue-900/50'}`}>
                            {currentStep.searchLoc === 'match-renderPage' && <div className="absolute -left-10 text-green-400 font-bold tracking-widest uppercase text-xs flex items-center gap-1"><Search className="w-3 h-3" /> MATCH</div>}
                            <div className="text-xs text-blue-400 uppercase font-bold text-center absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1e1e1e] px-2 rounded border border-blue-900/50">renderPage() (Neighbor)</div>
                            <div className="font-mono text-sm text-blue-300">theme</div>
                            <div className={`font-mono text-sm ${currentStep.env.renderPage.theme.includes('not found') ? 'text-red-400' : 'text-cyan-400'}`}>{currentStep.env.renderPage.theme}</div>
                        </div>

                        {/* Arrow */}
                        <div className="w-0.5 h-6 bg-cyan-800/50 relative">
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 border-b-2 border-r-2 border-cyan-800/50 rotate-45"></div>
                        </div>

                        {/* renderButton */}
                        <div className={`w-full p-3 rounded-lg border flex justify-between items-center relative z-10 transition-all duration-300 ${currentStep.searchLoc === 'renderButton' ? 'bg-yellow-900/30 border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.2)]' : currentStep.searchLoc === 'match-renderButton' ? 'bg-green-900/30 border-green-500/50 scale-105' : 'bg-purple-900/10 border-purple-900/50'}`}>
                            {currentStep.searchLoc === 'renderButton' && <div className="absolute -left-10 text-yellow-400 font-bold tracking-widest uppercase text-xs flex items-center gap-1 animate-pulse"><Search className="w-3 h-3" /> LOOKING</div>}
                            {currentStep.searchLoc === 'match-renderButton' && <div className="absolute -left-10 text-green-400 font-bold tracking-widest uppercase text-xs flex items-center gap-1"><Search className="w-3 h-3" /> MATCH</div>}
                            <div className="text-xs text-purple-400 uppercase font-bold text-center absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1e1e1e] px-2 rounded border border-purple-900/50">renderButton() (Kitchen)</div>
                            <div className="font-mono text-sm text-blue-300">theme</div>
                            <div className={`font-mono text-sm ${currentStep.env.renderButton.theme.includes('not found') ? 'text-red-400' : 'text-cyan-400'}`}>{currentStep.env.renderButton.theme}</div>
                        </div>

                    </div>

                    <div className="bg-[#111] p-3 rounded-lg border border-gray-800 min-h-[80px]">
                        <div className="text-xs text-gray-500 uppercase font-bold mb-1">Console</div>
                        <div className="flex flex-col gap-1">
                            {currentStep.output.length === 0 ? (
                                <span className="text-gray-600 italic text-sm font-mono">...</span>
                            ) : (
                                currentStep.output.map((out, idx) => (
                                    <div key={idx} className="text-sm font-mono text-gray-300">&gt; {out}</div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#161616] p-4 border-t border-gray-800 min-h-[80px]">
                <p className="text-gray-300 text-sm leading-relaxed">{currentStep.desc}</p>
            </div>
        </div>
    );
};

export default JsScopeChainSimulator;
