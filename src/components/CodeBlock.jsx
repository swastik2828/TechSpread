import React from "react";

const CodeBlock = ({ title, code, output, language = "java" }) => {
  return (
    <div className="my-6 w-full rounded-xl overflow-hidden bg-gray-950 border border-gray-800 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900 border-b border-gray-800">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
          {language}
        </span>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
        </div>
      </div>

      {/* Code Area */}
      <div className="p-4 overflow-x-auto font-mono text-sm leading-relaxed">
        <pre className="text-gray-300 whitespace-pre-wrap">
          <code>{code}</code>
        </pre>
      </div>

      {/* Output Area */}
      {output && (
        <div className="border-t border-gray-800 bg-black/50 p-4">
          <div className="text-xs text-gray-500 font-bold uppercase mb-1">
            Output
          </div>
          <div className="font-mono text-green-400 text-sm">
            {output}
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeBlock;