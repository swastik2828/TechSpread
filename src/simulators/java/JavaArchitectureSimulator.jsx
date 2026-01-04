import React, { useState, useEffect } from "react";

const JavaArchitectureSimulator = () => {
  // --- State Management ---
  const [step, setStep] = useState(0);
  const [output, setOutput] = useState("");
  const [isCompiling, setIsCompiling] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  // --- Constants ---
  const STEPS = {
    IDLE: 0,
    CODING: 1,
    COMPILING: 2,
    RUNNING: 3,
    FINISHED: 4,
  };

  // --- Handlers ---
  const handleNext = () => {
    if (step === STEPS.FINISHED) {
      // Reset
      setStep(STEPS.IDLE);
      setOutput("");
      return;
    }
    setStep((prev) => prev + 1);
  };

  // --- Effects (Animation Timing) ---
  useEffect(() => {
    // Simulation: Compile Time
    if (step === STEPS.COMPILING) {
      setIsCompiling(true);
      setTimeout(() => {
        setIsCompiling(false);
      }, 2000); // 2 seconds compile time
    }

    // Simulation: Run Time
    if (step === STEPS.RUNNING) {
      setIsRunning(true);
      setTimeout(() => {
        setOutput("Hello World!");
        setIsRunning(false);
        setStep(STEPS.FINISHED);
      }, 2500); // 2.5 seconds run time
    }
  }, [step]);

  return (
    <div className="w-full max-w-5xl mx-auto my-12 p-6 bg-gray-900 rounded-xl border border-gray-700 shadow-2xl overflow-hidden relative font-sans">
      {/* Top Decorative Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 opacity-50"></div>

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">
          🚀 Interactive Java Lab
        </h3>
        <p className="text-gray-400 text-sm">
          Click the button below to see how JDK, JRE, and JVM work together.
        </p>
      </div>

      {/* --- Main Visualization Stage --- */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start justify-center min-h-[320px]">
        
        {/* STAGE 1: Source Code (Developer) */}
        <div
          className={`relative p-4 rounded-lg border-2 transition-all duration-500 w-full md:w-1/3 min-h-[200px] flex flex-col justify-between
            ${
              step >= STEPS.CODING
                ? "border-blue-500 bg-blue-900/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                : "border-gray-700 bg-gray-800/30"
            }`}
        >
          <div className="absolute -top-3 left-4 bg-gray-900 px-2 text-xs text-blue-400 font-bold uppercase tracking-wider">
            1. Source Code
          </div>
          
          <div className="font-mono text-xs text-gray-300 space-y-1 mt-2">
            <p className="text-gray-500 mb-2">// HelloWorld.java</p>
            <p>
              <span className="text-purple-400">class</span> Main {"{"}
            </p>
            <p className="pl-4">
              <span className="text-purple-400">public static void</span>{" "}
              main...
            </p>
            <p className="pl-6 text-green-400">
              System.out.println(<span className="text-yellow-300">"Hello"</span>);
            </p>
            <p>{"}"}</p>
          </div>

          <div className="mt-4 h-6">
            {step === STEPS.CODING && (
              <div className="text-xs text-blue-300 animate-pulse flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                Writing code...
              </div>
            )}
          </div>
        </div>

        {/* Arrow 1 */}
        <div className="hidden md:flex items-center justify-center h-[200px]">
          <span
            className={`text-2xl transition-all duration-500 transform ${
              step >= STEPS.COMPILING
                ? "text-yellow-400 scale-125 translate-x-1"
                : "text-gray-700"
            }`}
          >
            ➜
          </span>
        </div>

        {/* STAGE 2: JDK (Compiler) */}
        <div
          className={`relative p-4 rounded-lg border-2 transition-all duration-500 w-full md:w-1/3 min-h-[200px] flex flex-col justify-between
            ${
              step >= STEPS.COMPILING
                ? "border-yellow-500 bg-yellow-900/20 shadow-[0_0_15px_rgba(234,179,8,0.2)]"
                : "border-gray-700 bg-gray-800/30"
            }`}
        >
          <div className="absolute -top-3 left-4 bg-gray-900 px-2 text-xs text-yellow-500 font-bold uppercase tracking-wider">
            2. JDK (Compiler)
          </div>

          <div className="flex flex-col items-center justify-center flex-grow">
            {isCompiling ? (
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mb-3"></div>
                <span className="text-xs text-yellow-300 font-mono">
                  javac Main.java
                </span>
              </div>
            ) : step > STEPS.COMPILING ? (
              <div className="text-center animate-bounce-short">
                <div className="text-4xl mb-2">📄</div>
                <p className="text-xs text-gray-300 font-mono font-bold">
                  Main.class
                </p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">
                  Bytecode
                </p>
              </div>
            ) : (
              <span className="text-gray-600 text-sm">Waiting for Source...</span>
            )}
          </div>
        </div>

        {/* Arrow 2 */}
        <div className="hidden md:flex items-center justify-center h-[200px]">
          <span
            className={`text-2xl transition-all duration-500 transform ${
              step >= STEPS.RUNNING
                ? "text-green-400 scale-125 translate-x-1"
                : "text-gray-700"
            }`}
          >
            ➜
          </span>
        </div>

        {/* STAGE 3: JRE & JVM */}
        <div
          className={`relative p-4 rounded-lg border-2 transition-all duration-500 w-full md:w-1/3 min-h-[200px]
            ${
              step >= STEPS.RUNNING
                ? "border-green-500 bg-green-900/20 shadow-[0_0_15px_rgba(74,222,128,0.2)]"
                : "border-gray-700 bg-gray-800/30"
            }`}
        >
          <div className="absolute -top-3 left-4 bg-gray-900 px-2 text-xs text-green-500 font-bold uppercase tracking-wider">
            3. JRE Environment
          </div>

          <div className="flex flex-col h-full gap-3 mt-2">
            {/* JRE Context */}
            <div className={`flex-1 p-2 rounded border border-dashed transition-colors duration-300 ${step >= STEPS.RUNNING ? "border-green-500/50" : "border-gray-700"}`}>
              <span className="text-[10px] text-gray-400 block mb-2 font-bold">
                JRE Libraries (util, lang...)
              </span>

              {/* JVM Core */}
              <div
                className={`p-3 rounded bg-black/60 transition-all duration-500 ${
                  step >= STEPS.RUNNING
                    ? "shadow-[inset_0_0_10px_rgba(74,222,128,0.3)] border border-green-500/30"
                    : "border border-gray-800"
                }`}
              >
                <span className="text-[10px] text-gray-400 block mb-2 border-b border-gray-700 pb-1">
                  JVM (Interpreter)
                </span>

                <div className="h-16 flex items-center justify-center bg-gray-900 rounded inner-shadow">
                  {isRunning ? (
                    <div className="font-mono text-xs text-green-400 animate-pulse text-center">
                      Interpreting...<br/>
                      0101 1100 1010
                    </div>
                  ) : step === STEPS.FINISHED ? (
                    <div className="font-bold text-green-400 bg-green-900/40 px-4 py-2 rounded border border-green-500/50 shadow-[0_0_10px_rgba(74,222,128,0.4)] animate-fade-in-up">
                      {output}
                    </div>
                  ) : (
                    <span className="text-gray-600 text-[10px]">Idle</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Controls & Explanation Area --- */}
      <div className="mt-8 flex flex-col items-center">
        {/* Dynamic Explanation Box */}
        <div className="bg-gray-800/80 backdrop-blur rounded-lg p-4 mb-6 w-full max-w-2xl border border-gray-700 min-h-[90px] flex items-center justify-center text-center">
          <p className="text-sm md:text-base text-gray-200 transition-all duration-300 leading-relaxed">
            {step === STEPS.IDLE &&
              "Ready to start? Let's simulate how Java code turns into a running program."}
            {step === STEPS.CODING && (
              <span>
                <strong className="text-blue-400">Step 1:</strong> You write code in a <code className="bg-gray-700 px-1 rounded">.java</code> file. The computer cannot understand this high-level language yet.
              </span>
            )}
            {step === STEPS.COMPILING && (
              <span>
                <strong className="text-yellow-400">Step 2:</strong> The <strong className="text-white">JDK</strong> (specifically the <em>javac compiler</em>) translates your code into <strong className="text-white">Bytecode</strong> (<code className="bg-gray-700 px-1 rounded">.class</code>). This is a universal format.
              </span>
            )}
            {step === STEPS.RUNNING && (
              <span>
                <strong className="text-green-400">Step 3:</strong> The <strong className="text-white">JRE</strong> provides libraries, and the <strong className="text-white">JVM</strong> reads the Bytecode line-by-line, converting it into machine code (0s and 1s) that your specific CPU understands.
              </span>
            )}
            {step === STEPS.FINISHED && (
              <span>
                <strong className="text-green-400">Success!</strong> The program executed successfully. Notice how the JDK was needed to build it, but the JRE/JVM was needed to run it.
              </span>
            )}
          </p>
        </div>

        {/* Action Button */}
        <button
          onClick={handleNext}
          disabled={isCompiling || isRunning}
          className={`
            relative px-8 py-3 rounded-full font-bold text-sm md:text-base shadow-lg transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2
            disabled:cursor-not-allowed disabled:opacity-50 disabled:transform-none
            ${
              step === STEPS.FINISHED
                ? "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-orange-500/30"
                : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-blue-500/30 hover:shadow-blue-500/50"
            }
          `}
        >
          {step === STEPS.IDLE && "✍️ Write Code"}
          {step === STEPS.CODING && "⚙️ Compile (JDK)"}
          {step === STEPS.COMPILING && "⏳ Compiling..."}
          {(step === STEPS.RUNNING || (step === STEPS.COMPILING && !isCompiling)) &&
            "▶️ Run (JRE/JVM)"}
          {step === STEPS.FINISHED && "🔄 Reset Simulator"}
        </button>
      </div>
    </div>
  );
};

export default JavaArchitectureSimulator;