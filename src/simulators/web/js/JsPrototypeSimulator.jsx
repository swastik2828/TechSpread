import React, { useState } from 'react';
import { Search, ArrowUp, CheckCircle, XCircle } from 'lucide-react';

export default function JsPrototypeSimulator() {
  const [searchProp, setSearchProp] = useState('greet');
  const [lookupPath, setLookupPath] = useState([]);
  const [result, setResult] = useState(null);

  const performLookup = () => {
    const path = [];
    
    // Child level
    path.push({ obj: 'alice (Child)', propFound: searchProp === 'name' || searchProp === 'age' });
    if (searchProp === 'name' || searchProp === 'age') {
      setLookupPath(path);
      setResult(`Found on alice directly!`);
      return;
    }

    // Parent level
    path.push({ obj: 'Person.prototype (Parent)', propFound: searchProp === 'greet' || searchProp === 'species' });
    if (searchProp === 'greet' || searchProp === 'species') {
      setLookupPath(path);
      setResult(`Found on Person.prototype via [[Prototype]] chain!`);
      return;
    }

    // Object.prototype level
    path.push({ obj: 'Object.prototype (Root)', propFound: searchProp === 'toString' || searchProp === 'hasOwnProperty' });
    if (searchProp === 'toString' || searchProp === 'hasOwnProperty') {
      setLookupPath(path);
      setResult(`Found on Object.prototype via [[Prototype]] chain!`);
      return;
    }

    // End of chain
    path.push({ obj: 'null', propFound: false });
    setLookupPath(path);
    setResult(`Reached null. Property '${searchProp}' is undefined.`);
  };

  return (
    <div className="bg-[#0f172a] rounded-xl border border-gray-800 shadow-2xl p-6 text-gray-200 font-sans my-8 w-full">
      <h3 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
        <span className="text-2xl">🔗</span> Prototype Chain Lookup Simulator
      </h3>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-6">
          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h4 className="font-bold text-sky-400 mb-2">Memory Structure</h4>
            <ul className="text-sm space-y-2 font-mono">
              <li><span className="text-pink-400">alice</span> = {'{'} name: 'Alice', age: 28 {'}'}</li>
              <li className="pl-4 text-gray-500">↳ [[Prototype]]</li>
              <li><span className="text-pink-400">Person.prototype</span> = {'{'} greet: [fn], species: 'Human' {'}'}</li>
              <li className="pl-4 text-gray-500">↳ [[Prototype]]</li>
              <li><span className="text-pink-400">Object.prototype</span> = {'{'} toString: [fn] {'}'}</li>
              <li className="pl-4 text-gray-500">↳ [[Prototype]]: <span className="text-red-400">null</span></li>
            </ul>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Simulate Property Lookup: <code className="text-yellow-400">alice.</code></label>
            <div className="flex gap-2">
              <input 
                type="text" 
                value={searchProp} 
                onChange={(e) => setSearchProp(e.target.value)}
                className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 w-full text-white focus:outline-none focus:border-amber-500 font-mono"
                placeholder="e.g., name, greet, toString, fly"
              />
              <button 
                onClick={performLookup}
                className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-colors shrink-0"
              >
                <Search size={16} /> Lookup
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-[#1e293b] rounded-xl p-4 min-h-[300px] border border-gray-700/50 flex flex-col">
          <h4 className="font-bold text-gray-400 mb-4">Lookup Resolution Path:</h4>
          
          <div className="flex-1 space-y-2">
            {lookupPath.map((step, index) => (
              <div key={index} className={`p-3 rounded-lg flex items-center justify-between border ${step.propFound ? 'bg-emerald-900/20 border-emerald-500/30' : 'bg-gray-800 border-gray-700'}`}>
                <span className="font-mono text-sm">{step.obj}</span>
                {step.propFound ? (
                  <span className="flex items-center gap-1 text-emerald-400 text-xs font-bold"><CheckCircle size={14} /> FOUND</span>
                ) : (
                  <span className="flex items-center gap-1 text-rose-400 text-xs font-bold"><XCircle size={14} /> NOT HERE</span>
                )}
              </div>
            ))}
            {lookupPath.length > 0 && !lookupPath[lookupPath.length - 1].propFound && result && lookupPath[lookupPath.length - 1].obj !== 'null' && (
                <div className="flex justify-center text-gray-500 my-1"><ArrowUp size={16} /></div>
            )}
          </div>

          {result && (
            <div className={`mt-4 p-3 rounded-lg text-sm font-bold text-center border ${result.includes('null') ? 'bg-rose-900/20 border-rose-500/30 text-rose-400' : 'bg-emerald-900/20 border-emerald-500/30 text-emerald-400'}`}>
              {result}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
