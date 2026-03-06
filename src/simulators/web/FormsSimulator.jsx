import React, { useState } from 'react';
import { Play, RotateCcw, Send, Settings, CheckCircle2, AlertCircle } from 'lucide-react';

const FormsSimulator = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        department: 'engineering',
        subscribe: true,
    });
    const [submittedData, setSubmittedData] = useState(null);
    const [method, setMethod] = useState('POST');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.username || !formData.email) {
            alert("Please fill required fields (Username, Email)");
            return;
        }
        setSubmittedData({
            ...formData,
            _timestamp: new Date().toISOString()
        });
    };

    const resetForm = () => {
        setFormData({
            username: '',
            email: '',
            department: 'engineering',
            subscribe: true,
        });
        setSubmittedData(null);
    };

    return (
        <div className="bg-[#0f172a] rounded-2xl border border-gray-800 overflow-hidden mt-6 mb-10 shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 bg-[#1e293b] border-b border-gray-800">
                <div className="flex items-center gap-2">
                    <Settings className="text-blue-400" size={20} />
                    <h3 className="text-lg font-bold text-gray-200">Form Submission Simulator</h3>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => setMethod('GET')}
                        className={`px-3 py-1 text-xs font-bold rounded-md ${method === 'GET' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50' : 'bg-gray-800 text-gray-400 hover:text-gray-200'}`}
                    >
                        GET
                    </button>
                    <button
                        onClick={() => setMethod('POST')}
                        className={`px-3 py-1 text-xs font-bold rounded-md ${method === 'POST' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/50' : 'bg-gray-800 text-gray-400 hover:text-gray-200'}`}
                    >
                        POST
                    </button>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-0">
                <div className="lg:col-span-2 p-6 border-r border-gray-800 bg-[#0f172a]">
                    <h4 className="text-sm font-semibold text-gray-400 tracking-wider mb-6 uppercase">Client Interface (Browser)</h4>
                    <form onSubmit={handleSubmit} className="space-y-6">

                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">Username <span className="text-red-400">*</span></label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="w-full bg-[#1e293b] border border-gray-700 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors"
                                placeholder="e.g., alice_dev"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address <span className="text-red-400">*</span></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-[#1e293b] border border-gray-700 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors"
                                placeholder="alice@example.com"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="department" className="block text-sm font-medium text-gray-300 mb-2">Department</label>
                            <select
                                id="department"
                                name="department"
                                value={formData.department}
                                onChange={handleChange}
                                className="w-full bg-[#1e293b] border border-gray-700 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors appearance-none"
                            >
                                <option value="engineering">Engineering</option>
                                <option value="design">Design</option>
                                <option value="marketing">Marketing</option>
                            </select>
                        </div>

                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                id="subscribe"
                                name="subscribe"
                                checked={formData.subscribe}
                                onChange={handleChange}
                                className="w-5 h-5 rounded border-gray-700 bg-[#1e293b] text-blue-500 focus:ring-blue-500 focus:ring-offset-gray-900"
                            />
                            <label htmlFor="subscribe" className="text-sm text-gray-300 leading-none">Subscribe to newsletter</label>
                        </div>

                        <div className="flex gap-3 pt-4">
                            <button type="button" onClick={resetForm} className="flex-1 px-4 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                                <RotateCcw size={16} /> Reset
                            </button>
                            <button type="submit" className="flex-[2] bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20">
                                <Send size={16} /> Submit Form
                            </button>
                        </div>
                    </form>
                </div>

                <div className="lg:col-span-3 p-6 bg-[#161b22]">
                    <h4 className="text-sm font-semibold text-gray-400 tracking-wider mb-6 uppercase">Server Response</h4>

                    {!submittedData ? (
                        <div className="flex flex-col items-center justify-center h-[350px] text-gray-500 border-2 border-dashed border-gray-800 rounded-xl">
                            <AlertCircle size={48} className="mb-4 opacity-50" />
                            <p>Awaiting form submission...</p>
                            <p className="text-sm mt-2 opacity-70">Fill out the form and hit "Submit Form"</p>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 flex items-start gap-3">
                                <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" />
                                <div>
                                    <h5 className="font-bold text-green-400">Request Received Successfully!</h5>
                                    <p className="text-sm text-green-300/80 mt-1">The server processed the incoming {method} request.</p>
                                </div>
                            </div>

                            {method === 'GET' && (
                                <div className="bg-[#0d1117] rounded-lg border border-gray-800 p-4">
                                    <h6 className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">Generated URL Endpoint</h6>
                                    <code className="text-sm text-blue-300 break-all">
                                        https://example.com/submit?username={encodeURIComponent(submittedData.username)}&email={encodeURIComponent(submittedData.email)}&department={submittedData.department}{submittedData.subscribe ? '&subscribe=on' : ''}
                                    </code>
                                </div>
                            )}

                            <div className="bg-[#0d1117] rounded-lg border border-gray-800 overflow-hidden">
                                <div className="bg-gray-800/40 px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-800">
                                    Parsed Key-Value Pairs
                                </div>
                                <div className="p-4 overflow-x-auto">
                                    <table className="w-full text-sm text-left">
                                        <thead>
                                            <tr className="text-gray-500 border-b border-gray-800">
                                                <th className="pb-2 font-medium w-1/3">Name Attribute</th>
                                                <th className="pb-2 font-medium">Submitted Value</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-800/50">
                                            <tr>
                                                <td className="py-2.5 font-mono text-purple-400">username</td>
                                                <td className="py-2.5 text-gray-300">"{submittedData.username}"</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2.5 font-mono text-purple-400">email</td>
                                                <td className="py-2.5 text-gray-300">"{submittedData.email}"</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2.5 font-mono text-purple-400">department</td>
                                                <td className="py-2.5 text-gray-300">"{submittedData.department}"</td>
                                            </tr>
                                            {submittedData.subscribe && (
                                                <tr>
                                                    <td className="py-2.5 font-mono text-purple-400">subscribe</td>
                                                    <td className="py-2.5 text-gray-300">"on"</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FormsSimulator;
