// swastik2828/techspread/TechSpread-e42273dd6b6a9028bc99382c33681de38dbe3959/src/simulators/web/js/JsFormSimulator.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, CheckCircle, AlertCircle } from 'lucide-react';

export default function JsFormSimulator() {
  const [prevent, setPrevent] = useState(true);
  const [reloading, setReloading] = useState(false);
  const [consoleLog, setConsoleLog] = useState("Waiting for form submission...");

  const handleSubmit = (e) => {
    if (prevent) {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());
      setConsoleLog(`event.preventDefault() called.\n\nFormData captured:\n${JSON.stringify(data, null, 2)}`);
    } else {
      // Simulate standard HTML form submission reload
      e.preventDefault();
      setReloading(true);
      setTimeout(() => {
        setReloading(false);
        setConsoleLog("Page reloaded. Form data was sent to server but state was lost.");
        e.target.reset();
      }, 1500);
    }
  };

  return (
    <div className="bg-[#0d1117] rounded-2xl border border-gray-800 overflow-hidden text-sm sm:text-base">
      <div className="p-4 bg-gray-900/50 border-b border-gray-800 flex justify-between items-center">
        <span className="text-gray-300 font-semibold">Form Behavior Simulator</span>
        <button 
          onClick={() => setPrevent(!prevent)}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${prevent ? 'bg-amber-500/20 text-amber-400 border border-amber-500/50' : 'bg-red-500/20 text-red-400 border border-red-500/50'}`}
        >
          e.preventDefault(): {prevent ? "ON" : "OFF"}
        </button>
      </div>

      <div className="flex flex-col md:flex-row p-6 gap-6 relative">
        {reloading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 z-10 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center text-white">
            <RefreshCw className="w-8 h-8 animate-spin mb-3 text-amber-400" />
            <p className="font-bold">Reloading Page...</p>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="flex-1 space-y-4">
          <div>
            <label className="block text-gray-400 mb-1 text-xs uppercase tracking-wider">Username</label>
            <input name="username" type="text" required defaultValue="jordan" className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-amber-500" />
          </div>
          <div>
            <label className="block text-gray-400 mb-1 text-xs uppercase tracking-wider">Plan</label>
            <select name="plan" className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-amber-500">
              <option value="free-trial">Free Trial</option>
              <option value="pro">Pro Plan</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 rounded-lg transition-colors">
            Submit Form
          </button>
        </form>

        <div className="flex-1 bg-black/80 rounded-lg p-4 border border-gray-800 font-mono text-xs text-green-400 whitespace-pre-wrap flex flex-col">
          <span className="text-gray-500 mb-2 border-b border-gray-800 pb-2">Browser Console</span>
          {consoleLog}
        </div>
      </div>
    </div>
  );
}