import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Laptop, Server, Globe, ArrowRight, FileCode, Database } from 'lucide-react';

const WebArchitectureSimulator = () => {
  const [step, setStep] = useState(0);

  const steps = [
    { title: "Idle", desc: "User enters 'www.example.com'" },
    { title: "DNS Lookup", desc: "Browser asks DNS for IP address" },
    { title: "Request", desc: "Browser sends HTTP GET request to Server IP" },
    { title: "Processing", desc: "Server processes request, queries Database" },
    { title: "Response", desc: "Server sends back HTML, CSS, JS files" },
    { title: "Rendering", desc: "Browser parses code and paints the pixels" }
  ];

  const nextStep = () => setStep((prev) => (prev + 1) % steps.length);

  return (
    <div className="w-full max-w-4xl mx-auto my-12 bg-gray-900/80 border border-gray-700 rounded-2xl p-8 shadow-2xl overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-600" />
      
      <div className="flex justify-between items-center mb-12 relative z-10">
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <Globe className="text-orange-500" /> 
          How the Web Works Simulator
        </h3>
        <div className="text-right">
          <p className="text-orange-400 font-mono text-sm">Status: {steps[step].title}</p>
          <button 
            onClick={nextStep}
            className="mt-2 px-4 py-1 bg-orange-600 hover:bg-orange-500 text-white rounded-lg text-sm transition-colors"
          >
            {step === steps.length - 1 ? "Reset" : "Next Step >"}
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center px-4 md:px-16 relative h-40">
        
        {/* Client Side */}
        <div className="flex flex-col items-center z-10">
          <Laptop size={64} className={step === 5 ? "text-green-400" : "text-blue-400"} />
          <span className="mt-2 text-gray-300 font-mono">Client (Browser)</span>
          {step === 5 && (
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute -top-4 bg-white text-black text-xs px-2 py-1 rounded shadow-lg"
            >
              Hello World!
            </motion.div>
          )}
        </div>

        {/* Animation Zone */}
        <div className="flex-1 mx-8 relative flex items-center justify-center">
          {/* Connection Line */}
          <div className="w-full h-0.5 bg-gray-700 absolute" />
          
          {/* Moving Packet */}
          {step === 2 && (
            <motion.div 
              initial={{ x: "-45%" }}
              animate={{ x: "45%" }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute bg-blue-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
            >
              GET / <ArrowRight size={10} />
            </motion.div>
          )}

          {step === 4 && (
            <motion.div 
              initial={{ x: "45%" }}
              animate={{ x: "-45%" }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
            >
              <FileCode size={10} /> HTML/CSS
            </motion.div>
          )}
        </div>

        {/* Server Side */}
        <div className="flex flex-col items-center z-10">
          <div className="relative">
            <Server size={64} className={step === 3 ? "text-orange-400 animate-pulse" : "text-purple-400"} />
            {step === 3 && (
               <motion.div 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }}
               className="absolute -right-8 -top-2"
             >
               <Database size={24} className="text-yellow-400" />
             </motion.div>
            )}
          </div>
          <span className="mt-2 text-gray-300 font-mono">Web Server</span>
        </div>
      </div>

      <div className="mt-8 bg-black/40 p-4 rounded-xl border border-gray-700/50">
        <p className="text-gray-300 text-center">
          <span className="text-orange-400 font-bold">Step {step + 1}:</span> {steps[step].desc}
        </p>
      </div>
    </div>
  );
};

export default WebArchitectureSimulator;