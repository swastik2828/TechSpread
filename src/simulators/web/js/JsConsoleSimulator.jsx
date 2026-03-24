import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Settings, Trash2, ChevronRight, Info, AlertTriangle, XCircle, Table2 } from "lucide-react";

export default function JsConsoleSimulator() {
    const [history, setHistory] = useState([
        { id: 1, type: "system", content: "Welcome to Node.js v20.x.x.\nType '.help' for more information." }
    ]);
    const scrollRef = useRef(null);

    // Auto-scroll to bottom of console
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    const handleAction = (type, payload) => {
        const id = Date.now();
        setHistory(prev => [...prev, { id, type, content: payload }]);
    };

    const clearConsole = () => {
        setHistory([{ id: Date.now(), type: "system", content: "Console was cleared" }]);
    };

    const actions = [
        {
            label: "console.log()",
            desc: "Standard informational output",
            color: "bg-blue-500/10 text-blue-400 border-blue-500/30 hover:bg-blue-500/20",
            icon: Info,
            action: () => handleAction("log", "User authenticated successfully.")
        },
        {
            label: "console.warn()",
            desc: "Yellow warning indicator",
            color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/30 hover:bg-yellow-500/20",
            icon: AlertTriangle,
            action: () => handleAction("warn", "API rate limit approaching. (45/50)")
        },
        {
            label: "console.error()",
            desc: "Red error indicator with trace",
            color: "bg-red-500/10 text-red-400 border-red-500/30 hover:bg-red-500/20",
            icon: XCircle,
            action: () => handleAction("error", "TypeError: Cannot read properties of undefined (reading 'map')\n    at RenderList (app.js:42:15)")
        },
        {
            label: "console.table()",
            desc: "Visualizes arrays of objects",
            color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20",
            icon: Table2,
            action: () => handleAction("table", [
                { id: 1, name: "Alice", role: "Admin" },
                { id: 2, name: "Bob", role: "User" }
            ])
        }
    ];

    const renderMessage = (msg) => {
        switch (msg.type) {
            case "system":
                return <span className="text-gray-500 italic">{msg.content}</span>;
            case "log":
                return <span className="text-gray-300">{msg.content}</span>;
            case "warn":
                return (
                    <div className="flex items-start gap-2 w-full bg-[#332b00] border-l-4 border-yellow-500 px-3 py-2 -ml-3">
                        <AlertTriangle size={14} className="text-yellow-500 mt-0.5 shrink-0" />
                        <span className="text-yellow-200">{msg.content}</span>
                    </div>
                );
            case "error":
                return (
                    <div className="flex items-start gap-2 w-full bg-[#290000] border-l-4 border-red-500 px-3 py-2 -ml-3 text-red-400">
                        <XCircle size={14} className="text-red-500 mt-0.5 shrink-0" />
                        <pre className="font-mono text-[10px] sm:text-xs whitespace-pre-wrap">{msg.content}</pre>
                    </div>
                );
            case "table":
                return (
                    <div className="overflow-x-auto w-full max-w-full pb-2">
                        <table className="w-full sm:w-auto text-left border-collapse mt-1 text-xs sm:text-sm">
                            <thead>
                                <tr className="border-b border-gray-700">
                                    <th className="py-2 px-3 font-bold text-gray-400 border-r border-gray-700">(index)</th>
                                    {Object.keys(msg.content[0]).map(k => (
                                        <th key={k} className="py-2 px-3 font-bold text-gray-400 border-r border-gray-700">{k}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {msg.content.map((row, i) => (
                                    <tr key={i} className="border-b border-gray-800 hover:bg-white/5">
                                        <td className="py-1.5 px-3 font-bold text-gray-500 border-r border-gray-700">{i}</td>
                                        {Object.values(row).map((val, idx) => (
                                            <td key={idx} className="py-1.5 px-3 border-r border-gray-700 text-purple-300">
                                                {typeof val === 'number' ? <span className="text-blue-300">{val}</span> : `"${val}"`}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="w-full flex flex-col lg:flex-row gap-6 my-10">
            {/* Control Panel */}
            <div className="w-full lg:w-1/3 flex flex-col gap-3">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <Settings className="text-yellow-500" size={20} /> Experimental Lab
                </h3>
                <p className="text-sm text-gray-400 mb-2">
                    Click the buttons below to fire different console commands and see how they render in the runtime environment.
                </p>
                {actions.map((act, i) => (
                    <button
                        key={i}
                        onClick={act.action}
                        className={`flex items-start gap-3 p-3 sm:p-4 rounded-xl border text-left transition-all w-full shadow-lg ${act.color}`}
                    >
                        <div className="mt-0.5"><act.icon size={18} /></div>
                        <div>
                            <div className="font-mono font-bold text-sm sm:text-base">{act.label}</div>
                            <div className="text-xs sm:text-sm opacity-80 mt-1">{act.desc}</div>
                        </div>
                    </button>
                ))}
            </div>

            {/* Console Output */}
            <div className="w-full lg:w-2/3 flex flex-col bg-[#1e1e1e] rounded-xl border border-gray-700 shadow-2xl overflow-hidden h-[400px] sm:h-[450px]">
                {/* Console Header */}
                <div className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between border-b border-[#3c3c3c]">
                    <div className="flex items-center gap-2">
                        <Terminal size={14} className="text-gray-400" />
                        <span className="text-xs font-mono text-gray-300 tracking-wider">Output / Debug Console</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <button 
                            onClick={clearConsole}
                            className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 bg-[#3c3c3c] hover:bg-gray-600 px-2 py-1 rounded text-xs"
                            title="Clear Console"
                        >
                            <Trash2 size={12} /> Clear
                        </button>
                    </div>
                </div>

                {/* Console Body */}
                <div 
                    ref={scrollRef}
                    className="flex-1 p-3 sm:p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 font-mono text-xs sm:text-sm bg-[#1e1e1e]"
                >
                    <AnimatePresence initial={false}>
                        {history.map(msg => (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-start gap-3 mb-2 min-w-0"
                            >
                                <ChevronRight size={14} className="text-blue-500 mt-1 shrink-0" />
                                <div className="flex-1 w-full overflow-hidden break-words">
                                    {renderMessage(msg)}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
