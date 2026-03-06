import React, { useState } from 'react';
import { ShieldCheck, XCircle, AlertTriangle, Fingerprint } from 'lucide-react';

const ValidationSimulator = () => {
    const [pwd, setPwd] = useState('');
    const [zip, setZip] = useState('');

    // Validation checks
    const hasLength = pwd.length >= 8;
    const hasUpper = /[A-Z]/.test(pwd);
    const hasNumber = /[0-9]/.test(pwd);
    const hasSymbol = /[!@#$%^&*]/.test(pwd);
    const isPwdValid = hasLength && hasUpper && hasNumber && hasSymbol;

    const isZipValid = /^[0-9]{5}(-[0-9]{4})?$/.test(zip) || zip === '';

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert("Client-side validation passed! Form would normally submit to server now.");
    };

    return (
        <div className="bg-[#0A0A0A] border border-gray-800 rounded-2xl overflow-hidden my-10 shadow-xl">
            <div className="p-4 bg-gradient-to-r from-red-900/20 to-orange-900/20 border-b border-gray-800 flex items-center gap-3">
                <ShieldCheck className="text-red-400" size={24} />
                <h3 className="text-xl font-bold text-gray-200">HTML5 Pattern Validation Sandbox</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 border-r border-gray-800 bg-[#0f172a]">
                    <form onSubmit={handleFormSubmit} className="space-y-8">
                        <div>
                            <label className="block font-medium text-gray-300 mb-2">Secure Password</label>
                            <div className="relative">
                                <Fingerprint className="absolute left-3 top-3 text-gray-500" size={18} />
                                <input
                                    type="text"
                                    value={pwd}
                                    onChange={(e) => setPwd(e.target.value)}
                                    className={`w-full bg-[#1e293b] border text-white rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:ring-2 ${pwd.length > 0 ? (isPwdValid ? 'border-green-500/50 focus:ring-green-500/50' : 'border-red-500/50 focus:ring-red-500/50') : 'border-gray-700'}`}
                                    placeholder="Enter test password..."
                                    pattern="(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}"
                                    required
                                />
                            </div>

                            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                                <ValItem valid={hasLength} text="8+ characters" />
                                <ValItem valid={hasUpper} text="Uppercase letter" />
                                <ValItem valid={hasNumber} text="Number (0-9)" />
                                <ValItem valid={hasSymbol} text="Symbol (!@#$...)" />
                            </div>
                        </div>

                        <hr className="border-gray-800" />

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">US ZIP Code (5 or 9 digit)</label>
                            <input
                                type="text"
                                value={zip}
                                onChange={(e) => setZip(e.target.value)}
                                className={`w-full bg-[#1e293b] border ${zip !== '' && !isZipValid ? 'border-red-500/50 text-red-200 focus:ring-red-500/50' : 'border-gray-700 text-white focus:ring-blue-500/50'} rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 transition-colors font-mono`}
                                placeholder="e.g. 90210 or 90210-1234"
                                pattern="[0-9]{5}(-[0-9]{4})?"
                            />
                            {zip !== '' && !isZipValid && (
                                <p className="text-red-400 text-xs mt-2 flex items-center gap-1"><AlertTriangle size={12} /> Invalid ZIP code format</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-lg transition-colors"
                        >
                            Test Submission
                        </button>
                    </form>
                </div>

                <div className="p-8 bg-[#161b22] flex flex-col justify-center">
                    <h4 className="text-gray-400 font-bold mb-4 uppercase tracking-widest text-sm text-center">Underlying HTML Attributes</h4>
                    <div className="bg-[#0A0A0A] border border-gray-800 rounded-xl p-5 shadow-inner">
                        <pre className="text-blue-300 text-xs overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed">
                            {`<!-- Password Field -->
<input 
  type="password" 
  name="secure_pwd"
  required
  pattern="(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}"
  title="Min 8 chars, 1 uppercase, 1 number, 1 symbol"
/>

<!-- ZIP Code Field -->
<input 
  type="text" 
  name="zipcode"
  pattern="[0-9]{5}(-[0-9]{4})?"
  title="Enter 5-digit ZIP or 5+4 format"
/>`}
                        </pre>
                    </div>
                    <div className="mt-8 bg-blue-900/10 border border-blue-900/30 p-4 rounded-lg">
                        <p className="text-sm text-blue-300/80 leading-relaxed">
                            <strong className="text-blue-400 block mb-1">How it works:</strong>
                            When the user clicks "Test Submission", the browser natively evaluates the <code>pattern</code> Regex before firing the submit event. If invalid, the browser halts submission and shows a native tool-tip popup using the text from the <code>title</code> attribute!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ValItem = ({ valid, text }) => (
    <div className={`flex items-center gap-1.5 ${valid ? 'text-green-400' : 'text-gray-500'}`}>
        {valid ? <ShieldCheck size={14} /> : <XCircle size={14} />}
        <span>{text}</span>
    </div>
);

export default ValidationSimulator;
