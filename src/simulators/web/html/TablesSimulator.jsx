import React, { useState } from 'react';
import { Table, Columns, Rows, CheckSquare, Square, Code, Play } from 'lucide-react';

const TablesSimulator = () => {
    const [rows, setRows] = useState(3);
    const [cols, setCols] = useState(3);
    const [hasThead, setHasThead] = useState(true);
    const [hasTfoot, setHasTfoot] = useState(false);
    const [hasBorders, setHasBorders] = useState(true);

    const generateTableHtml = () => {
        let html = `<table${hasBorders ? ' border="1"' : ''}>\n`;

        if (hasThead) {
            html += `  <thead>\n    <tr>\n`;
            for (let c = 1; c <= cols; c++) {
                html += `      <th scope="col">Header ${c}</th>\n`;
            }
            html += `    </tr>\n  </thead>\n`;
        }

        html += `  <tbody>\n`;
        for (let r = 1; r <= rows; r++) {
            html += `    <tr>\n`;
            for (let c = 1; c <= cols; c++) {
                if (c === 1) {
                    html += `      <th scope="row">Row ${r}</th>\n`;
                } else {
                    html += `      <td>Data ${r},${c}</td>\n`;
                }
            }
            html += `    </tr>\n`;
        }
        html += `  </tbody>\n`;

        if (hasTfoot) {
            html += `  <tfoot>\n    <tr>\n`;
            html += `      <td colspan="${cols}">Table Footer / Summary</td>\n`;
            html += `    </tr>\n  </tfoot>\n`;
        }

        html += `</table>`;
        return html;
    };

    return (
        <div className="w-full max-w-4xl mx-auto my-12 bg-[#0d1117] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-[#161b22] px-6 py-4 border-b border-gray-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg">
                        <Table size={20} />
                    </div>
                    <h3 className="text-white font-bold text-lg">Interactive Table Builder</h3>
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
                            <Rows size={16} /> Data Rows: {rows}
                        </label>
                        <input
                            type="range"
                            min="1"
                            max="8"
                            value={rows}
                            onChange={(e) => setRows(Number(e.target.value))}
                            className="w-full accent-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                            <Columns size={16} /> Total Columns: {cols}
                        </label>
                        <input
                            type="range"
                            min="2"
                            max="6"
                            value={cols}
                            onChange={(e) => setCols(Number(e.target.value))}
                            className="w-full accent-blue-500"
                        />
                    </div>

                    <div className="space-y-3 pt-4 border-t border-gray-800">
                        <label className="block text-sm font-medium text-gray-400 mb-2">Table Structure</label>

                        <button
                            onClick={() => setHasThead(!hasThead)}
                            className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition group w-full text-left"
                        >
                            {hasThead ? <CheckSquare size={18} className="text-blue-500" /> : <Square size={18} className="text-gray-600 group-hover:text-gray-400" />}
                            Include &lt;thead&gt; (Table Header)
                        </button>

                        <button
                            onClick={() => setHasTfoot(!hasTfoot)}
                            className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition group w-full text-left"
                        >
                            {hasTfoot ? <CheckSquare size={18} className="text-blue-500" /> : <Square size={18} className="text-gray-600 group-hover:text-gray-400" />}
                            Include &lt;tfoot&gt; (Table Footer)
                        </button>

                        <button
                            onClick={() => setHasBorders(!hasBorders)}
                            className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition group w-full text-left"
                        >
                            {hasBorders ? <CheckSquare size={18} className="text-blue-500" /> : <Square size={18} className="text-gray-600 group-hover:text-gray-400" />}
                            Enable CSS Borders (Visual Grid)
                        </button>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mt-6">
                        <p className="text-xs text-blue-300">
                            <strong>Tip:</strong> We automatically add <code>&lt;th scope="row"&gt;</code> to the first column to make the table accessible for screen readers!
                        </p>
                    </div>
                </div>

                {/* Live Preview Section */}
                <div className="bg-[#0a0c10] rounded-xl border border-gray-800 flex flex-col items-center justify-start relative overflow-hidden group">
                    <div className="absolute top-4 right-4 flex items-center gap-2 text-xs text-gray-500">
                        <Play size={14} className="text-emerald-500" /> Live Output
                    </div>

                    <div className="w-full p-4 mt-8 flex justify-center overflow-x-auto">
                        <table className={`w-full text-sm text-left text-gray-400 ${hasBorders ? 'border border-gray-600' : ''}`}>
                            {hasThead && (
                                <thead className="text-xs text-gray-300 uppercase bg-gray-700">
                                    <tr>
                                        {Array.from({ length: cols }).map((_, i) => (
                                            <th key={i} scope="col" className={`px-4 py-3 ${hasBorders ? 'border border-gray-600' : ''}`}>
                                                Header {i + 1}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                            )}
                            <tbody>
                                {Array.from({ length: rows }).map((_, r) => (
                                    <tr key={r} className="bg-gray-800 hover:bg-gray-700/50">
                                        {Array.from({ length: cols }).map((_, c) => {
                                            if (c === 0) {
                                                return <th key={c} scope="row" className={`px-4 py-3 font-medium text-white whitespace-nowrap ${hasBorders ? 'border border-gray-600 bg-gray-700/30' : ''}`}>Row {r + 1}</th>
                                            }
                                            return <td key={c} className={`px-4 py-2 ${hasBorders ? 'border border-gray-600' : ''}`}>Data {r + 1},{c + 1}</td>
                                        })}
                                    </tr>
                                ))}
                            </tbody>
                            {hasTfoot && (
                                <tfoot className="bg-gray-900 font-bold text-gray-300">
                                    <tr>
                                        <td colSpan={cols} className={`px-4 py-3 text-center ${hasBorders ? 'border border-gray-600' : ''}`}>
                                            Table Footer / Summary
                                        </td>
                                    </tr>
                                </tfoot>
                            )}
                        </table>
                    </div>

                    {/* Status logs */}
                    <div className="w-full mt-auto bg-[#161b22] border-t border-gray-800 p-4 font-mono text-xs text-gray-400">
                        <div className="flex justify-between items-center mb-2 pb-2">
                            <span className="text-blue-400 flex items-center gap-2"><Code size={12} /> Generated HTML:</span>
                        </div>
                        <pre className="text-blue-300 overflow-x-auto whitespace-pre-wrap max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700">
                            {generateTableHtml()}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TablesSimulator;
