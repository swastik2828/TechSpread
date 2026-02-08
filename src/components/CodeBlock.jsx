import React from "react";

const CodeBlock = ({ title, code, output, language = "java" }) => {
  return (
    <div className="my-6 w-full rounded-xl overflow-hidden bg-gray-950 border border-gray-800 shadow-lg group">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900 border-b border-gray-800">
        <div className="flex items-center gap-4">
           {/* Window Controls Decoration */}
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
          </div>
          
          {/* Filename or Language Title */}
          <span className="text-xs font-bold text-gray-300 font-mono tracking-wide">
            {title ? title : language.toUpperCase()}
          </span>
        </div>
        
        {/* Language Badge (Only show if title is present to avoid redundancy) */}
        {title && (
           <span className="text-[10px] font-bold text-gray-500 uppercase bg-gray-800 px-2 py-0.5 rounded border border-gray-700">
            {language}
           </span>
        )}
      </div>

      {/* Code Area */}
      <div className="p-4 overflow-x-auto font-mono text-sm leading-relaxed scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
        <pre className="text-gray-300 whitespace-pre-wrap">
          <code>{code}</code>
        </pre>
      </div>

      {/* Output Area */}
      {output && (
        <div className="border-t border-gray-800 bg-black/50 p-4">
          <div className="text-xs text-gray-500 font-bold uppercase mb-2 select-none">
            &gt; Terminal Output
          </div>
          <div className="font-mono text-green-400 text-sm whitespace-pre-wrap">
            {output}
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeBlock;