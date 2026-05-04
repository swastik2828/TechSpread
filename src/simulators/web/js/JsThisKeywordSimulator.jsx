import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, AlertCircle, CheckCircle2, ChevronRight, Terminal } from 'lucide-react';

const scenarios = [
  {
    id: 'implicit',
    name: 'Implicit Binding',
    description: 'Object to the left of the dot at call time becomes "this".',
    code: `const user = {
  name: "Marcus",
  greet() {
    console.log("Hello, " + this.name);
  }
};

user.greet(); // Who is to the left of the dot?`,
    steps: [
      { highlight: 1, text: "Object 'user' created with property 'name'." },
      { highlight: 3, text: "Method 'greet' defined. The value of 'this' is NOT set yet." },
      { highlight: 8, text: "Function is invoked as 'user.greet()'. The engine checks left of the dot." },
      { highlight: 8, text: "Since 'user' is left of the dot, 'this' is bound to 'user'." },
      { highlight: 4, text: "Executes: console.log('Hello, ' + user.name)", output: "Hello, Marcus" }
    ],
    thisContext: 'user object { name: "Marcus", greet: ƒ }'
  },
  {
    id: 'explicit',
    name: 'Explicit Binding',
    description: 'Using .call(), .apply(), or .bind() to force "this".',
    code: `function introduce(lang) {
  console.log(\`I am \${this.name}, I write \${lang}.\`);
}

const dev = { name: "Sarah" };

// Explicitly bind 'this' to 'dev'
introduce.call(dev, "JavaScript");`,
    steps: [
      { highlight: 1, text: "Standalone function 'introduce' defined." },
      { highlight: 5, text: "Object 'dev' created." },
      { highlight: 8, text: "Function is invoked using '.call(dev, ...)'." },
      { highlight: 8, text: "The first argument 'dev' explicitly becomes 'this' inside the function." },
      { highlight: 2, text: "Executes: console.log(`I am ${dev.name}...`)", output: "I am Sarah, I write JavaScript." }
    ],
    thisContext: 'dev object { name: "Sarah" }'
  },
  {
    id: 'new',
    name: 'new Binding',
    description: 'Using the "new" keyword creates a brand-new object and binds it to "this".',
    code: `function User(name) {
  // 'this' = {}
  this.name = name;
  // returns 'this'
}

const user1 = new User("Alice");
console.log(user1.name);`,
    steps: [
      { highlight: 1, text: "Constructor function 'User' defined." },
      { highlight: 7, text: "'new User(\"Alice\")' is called. A brand new empty object is created." },
      { highlight: 2, text: "'this' is bound to the new empty object {}." },
      { highlight: 3, text: "The property 'name' is added to 'this'." },
      { highlight: 8, text: "The new object is returned and stored in 'user1'.", output: "Alice" }
    ],
    thisContext: 'Newly created object { name: "Alice" }'
  },
  {
    id: 'default',
    name: 'Default Binding / Lost this',
    description: 'Standalone invocation falls back to undefined (in strict mode) or global object.',
    code: `'use strict';
const logger = {
  prefix: "[APP]",
  log() { console.log(this.prefix); }
};

const standaloneLog = logger.log;
standaloneLog(); // Lost implicit binding!`,
    steps: [
      { highlight: 2, text: "Object 'logger' created with a 'log' method." },
      { highlight: 7, text: "The method is assigned to 'standaloneLog'. We are passing the function REFERENCE, not the object." },
      { highlight: 8, text: "'standaloneLog()' is called. Look left of the dot... there is NO dot!" },
      { highlight: 8, text: "Default binding kicks in. Because of 'use strict', 'this' is undefined." },
      { highlight: 4, text: "Executes: console.log(undefined.prefix) -> throws TypeError.", output: "TypeError: Cannot read properties of undefined (reading 'prefix')" }
    ],
    thisContext: 'undefined (Strict Mode)'
  },
  {
    id: 'arrow',
    name: 'Arrow Functions',
    description: 'Arrow functions do not have their own "this". They inherit it lexically.',
    code: `class Timer {
  constructor() { this.seconds = 0; }
  
  start() {
    setInterval(() => {
      this.seconds++;
      console.log(this.seconds);
    }, 1000);
  }
}
const myTimer = new Timer();
myTimer.start();`,
    steps: [
      { highlight: 11, text: "'myTimer' is instantiated using 'new Timer()'." },
      { highlight: 12, text: "'myTimer.start()' is called. Implicit binding makes 'this' inside 'start()' = myTimer." },
      { highlight: 5, text: "setInterval receives an arrow function callback." },
      { highlight: 6, text: "The arrow function executes. It has NO 'this', so it looks up lexically." },
      { highlight: 6, text: "It finds 'this' from the parent 'start()' method, which is myTimer.", output: "1 ... 2 ... 3" }
    ],
    thisContext: 'Lexically inherited (myTimer instance)'
  }
];

const JsThisKeywordSimulator = () => {
  const [activeScenario, setActiveScenario] = useState(scenarios[0]);
  const [stepIndex, setStepIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [output, setOutput] = useState('');

  const handleScenarioChange = (id) => {
    const scenario = scenarios.find(s => s.id === id);
    setActiveScenario(scenario);
    setStepIndex(-1);
    setIsPlaying(false);
    setOutput('');
  };

  const handleNextStep = () => {
    if (stepIndex < activeScenario.steps.length - 1) {
      const nextStep = stepIndex + 1;
      setStepIndex(nextStep);
      if (activeScenario.steps[nextStep].output) {
        setOutput(activeScenario.steps[nextStep].output);
      }
    }
  };

  const handleReset = () => {
    setStepIndex(-1);
    setIsPlaying(false);
    setOutput('');
  };

  const handlePlayAll = async () => {
    setIsPlaying(true);
    setStepIndex(-1);
    setOutput('');
    for (let i = 0; i < activeScenario.steps.length; i++) {
      await new Promise(r => setTimeout(r, 1500));
      setStepIndex(i);
      if (activeScenario.steps[i].output) {
        setOutput(activeScenario.steps[i].output);
      }
    }
    setIsPlaying(false);
  };

  const lines = activeScenario.code.split('\n');

  return (
    <div className="bg-[#0A0A0A] rounded-2xl border border-gray-800 shadow-2xl overflow-hidden my-8 w-full max-w-5xl mx-auto font-sans">
      <div className="border-b border-gray-800 bg-[#111] p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <h3 className="text-amber-400 font-bold flex items-center gap-2">
          <Terminal size={18} /> Interactive 'this' Simulator
        </h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {scenarios.map(s => (
            <button
              key={s.id}
              onClick={() => handleScenarioChange(s.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeScenario.id === s.id
                  ? 'bg-amber-500 text-[#111] shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Code Editor Side */}
        <div className="flex flex-col gap-4">
          <div className="bg-[#111] rounded-xl border border-gray-800 overflow-hidden relative font-mono text-sm shadow-inner h-64 sm:h-80 overflow-y-auto">
            <div className="absolute top-0 left-0 bottom-0 w-10 bg-gray-900 border-r border-gray-800 flex flex-col items-center py-4 text-gray-600 text-xs select-none">
              {lines.map((_, i) => <span key={i} className="leading-6">{i + 1}</span>)}
            </div>
            <div className="py-4 pl-14 pr-4 overflow-x-auto">
              {lines.map((line, i) => {
                const isHighlighted = stepIndex >= 0 && activeScenario.steps[stepIndex].highlight === i + 1;
                return (
                  <div key={i} className={`leading-6 whitespace-pre relative transition-colors duration-300 ${isHighlighted ? 'text-amber-400 bg-amber-500/10 rounded-md px-1 -mx-1' : 'text-gray-300'}`}>
                    {line || ' '}
                    {isHighlighted && (
                      <motion.div layoutId="highlight-indicator" className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Controls */}
          <div className="flex gap-3 justify-center sm:justify-start">
            <button
              onClick={handlePlayAll}
              disabled={isPlaying}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white rounded-lg font-bold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-green-900/20"
            >
              <Play size={16} /> Auto-Run
            </button>
            <button
              onClick={handleNextStep}
              disabled={isPlaying || stepIndex >= activeScenario.steps.length - 1}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed border border-gray-700"
            >
              Step Forward <ChevronRight size={16} />
            </button>
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-3 py-2 bg-gray-800/50 hover:bg-gray-800 text-gray-400 hover:text-white rounded-lg font-medium text-sm transition-all border border-gray-800"
              title="Reset"
            >
              <RotateCcw size={16} />
            </button>
          </div>
        </div>

        {/* Explanation Side */}
        <div className="flex flex-col gap-4">
          <div className="bg-gradient-to-br from-gray-900 to-[#111] rounded-xl border border-gray-800 p-5 shadow-inner min-h-[140px] flex flex-col justify-center relative overflow-hidden">
             <div className="absolute top-0 right-0 p-3 opacity-10">
                <AlertCircle size={64} className="text-amber-500" />
             </div>
             <h4 className="text-amber-500 text-xs font-black tracking-widest uppercase mb-2">Engine Analysis</h4>
             <AnimatePresence mode="wait">
                <motion.p
                  key={stepIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-gray-200 text-sm md:text-base leading-relaxed relative z-10"
                >
                  {stepIndex === -1 ? activeScenario.description : activeScenario.steps[stepIndex].text}
                </motion.p>
             </AnimatePresence>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <div className="bg-[#111] rounded-xl border border-gray-800 p-4">
                <h4 className="text-gray-500 text-xs font-bold uppercase mb-2 flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-500" /> Value of `this`
                </h4>
                <div className="text-amber-400 font-mono text-sm break-words bg-amber-500/10 p-2 rounded-lg border border-amber-500/20">
                  {stepIndex === -1 ? "Not determined yet" : activeScenario.thisContext}
                </div>
             </div>
             
             <div className="bg-[#111] rounded-xl border border-gray-800 p-4">
                <h4 className="text-gray-500 text-xs font-bold uppercase mb-2 flex items-center gap-2">
                  <Terminal size={14} className="text-sky-500" /> Console Output
                </h4>
                <div className={`font-mono text-sm break-words p-2 rounded-lg border ${output.includes('TypeError') ? 'bg-red-500/10 border-red-500/20 text-red-400' : 'bg-gray-900 border-gray-800 text-sky-300'}`}>
                  {output || "Waiting for execution..."}
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JsThisKeywordSimulator;
