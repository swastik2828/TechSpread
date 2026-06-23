// swastik2828/techspread/TechSpread-e42273dd6b6a9028bc99382c33681de38dbe3959/src/simulators/web/js/JsStorageSimulator.jsx

import React, { useState } from 'react';
import { HardDrive, RefreshCw, LogOut, Clock } from 'lucide-react';

export default function JsStorageSimulator() {
  const [local, setLocal] = useState("dark-mode");
  const [session, setSession] = useState("wizard-step-2");
  const [cookie, setCookie] = useState("session-id-8x9a");

  const simulateRefresh = () => {
    setSession("--- (Cleared on Tab Close) ---");
  };

  const simulateClearData = () => {
    setLocal("--- (Cleared) ---");
    setSession("--- (Cleared) ---");
    setCookie("--- (Cleared) ---");
  };

  const StorageBox = ({ title, icon: Icon, value, colorClass }) => (
    <div className={`p-4 rounded-xl border ${colorClass} bg-black/40 flex flex-col gap-2 transition-all duration-300`}>
      <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
        <Icon className="w-4 h-4" /> {title}
      </div>
      <div className="font-mono text-xs p-2 bg-black/60 rounded text-gray-300 break-all h-10 flex items-center">
        {value}
      </div>
    </div>
  );

  return (
    <div className="bg-[#0d1117] rounded-2xl border border-gray-800 overflow-hidden text-sm sm:text-base p-6">
      <div className="flex flex-wrap gap-4 mb-8">
        <button onClick={() => { setLocal("dark-mode"); setSession("wizard-step-2"); setCookie("session-id-8x9a"); }} className="px-4 py-2 bg-amber-500/20 text-amber-400 rounded-lg text-sm font-bold border border-amber-500/30 hover:bg-amber-500/30 transition-colors">
          Initialize Data
        </button>
        <button onClick={simulateRefresh} className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-bold border border-blue-500/30 hover:bg-blue-500/30 transition-colors flex items-center gap-2">
          <RefreshCw className="w-4 h-4" /> Simulate Tab Close & Reopen
        </button>
        <button onClick={simulateClearData} className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg text-sm font-bold border border-red-500/30 hover:bg-red-500/30 transition-colors">
          Clear Browser Data
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StorageBox title="localStorage" icon={HardDrive} value={local} colorClass="border-green-500/40 text-green-400" />
        <StorageBox title="sessionStorage" icon={Clock} value={session} colorClass="border-purple-500/40 text-purple-400" />
        <StorageBox title="Cookies" icon={LogOut} value={cookie} colorClass="border-orange-500/40 text-orange-400" />
      </div>
    </div>
  );
}