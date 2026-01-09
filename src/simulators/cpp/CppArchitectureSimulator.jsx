import React, { useState, useEffect } from "react";

const CppArchitectureSimulator = () => {
  const [step, setStep] = useState(0);
  const [output, setOutput] = useState("");
  const [isCompiling, setIsCompiling] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const STEPS = {
    IDLE: 0,
    CODING: 1,
    COMPILING: 2,
    RUNNING: 3,
    FINISHED: 4,
  };

  const handleNext = () => {
    if (step === STEPS.FINISHED) {
      setStep(STEPS.IDLE);
      setOutput("");
      return;
    }
    setStep((prev) => prev + 1);
  };

  useEffect(() => {
    // C++ Compilation is typically direct to machine code
    if (step === STEPS.COMPILING) {
      setIsCompiling(true);
      setTimeout(() => {
        setIsCompiling(false);
      }, 2000);
    }

    if (step === STEPS.RUNNING) {
      setIsRunning(true);
      setTimeout(() => {
        setOutput("Hello World");
        setIsRunning(false);
        setStep(STEPS.FINISHED);
      }, 1500);
    }
  }, [step]);

  return (
    <div className="w-full p-4 bg-gray-950/50 rounded-xl border border-gray-800 font-sans">
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-white">⚙️ C++ Execution Flow</h3>
        <p className="text-gray-400 text-xs">Source → Compiler → Machine Code → OS</p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Step 1: Source */}
        <div className={`p-3 rounded-lg border transition-all ${step >= STEPS.CODING ? "border-blue-500 bg-blue-900/20" : "border-gray-800 bg-gray-900"}`}>
          <div className="text-xs font-bold text-blue-400 uppercase mb-1">1. Source Code</div>
          <code className="text-[10px] text-gray-300 block">cout &lt;&lt; "Hello World";</code>
        </div>

        {/* Arrow */}
        <div className="flex justify-center text-gray-600">↓</div>

        {/* Step 2: Compiler */}
        <div className={`p-3 rounded-lg border transition-all ${step >= STEPS.COMPILING ? "border-purple-500 bg-purple-900/20" : "border-gray-800 bg-gray-900"}`}>
          <div className="text-xs font-bold text-purple-500 uppercase mb-1">2. Compiler (g++)</div>
          <div className="text-[10px] text-gray-300">
            {isCompiling ? "Compiling..." : step > STEPS.COMPILING ? "Generates .exe (Machine Code)" : "Waiting..."}
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center text-gray-600">↓</div>

        {/* Step 3: Execution */}
        <div className={`p-3 rounded-lg border transition-all ${step >= STEPS.RUNNING ? "border-red-500 bg-red-900/20" : "border-gray-800 bg-gray-900"}`}>
          <div className="text-xs font-bold text-red-500 uppercase mb-1">3. OS Execution</div>
          <div className="text-[10px] text-gray-300 min-h-[20px]">
             {isRunning ? "Running Machine Code..." : output || "Waiting..."}
          </div>
        </div>
      </div>

      <button
        onClick={handleNext}
        disabled={isCompiling || isRunning}
        className="mt-6 w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold transition-colors disabled:opacity-50"
      >
        {step === STEPS.IDLE ? "Start C++ Process" : step === STEPS.FINISHED ? "Reset" : "Next Step"}
      </button>
    </div>
  );
};

export default CppArchitectureSimulator;