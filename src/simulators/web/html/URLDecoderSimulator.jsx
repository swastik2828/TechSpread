import React, { useState } from 'react';

const URLDecoderSimulator = () => {
  const [urlInput, setUrlInput] = useState('https://example.com/products?id=10&ref=instagram');
  const [parsedData, setParsedData] = useState(null);
  const [error, setError] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleDecode = (e) => {
    e?.preventDefault();
    
    // Reset state for re-triggering animations
    setShowResults(false);
    setError('');
    
    if (!urlInput.trim()) {
      setError('Please enter a valid URL.');
      setParsedData(null);
      return;
    }

    // Auto-prepend http if user forgets protocol to prevent URL constructor from failing
    let processUrl = urlInput.trim();
    if (!/^https?:\/\//i.test(processUrl)) {
      processUrl = 'http://' + processUrl;
    }

    setTimeout(() => {
      try {
        const url = new URL(processUrl);
        const params = Array.from(url.searchParams.entries());

        setParsedData({
          protocol: url.protocol,
          domain: url.hostname,
          path: url.pathname === '/' ? '' : url.pathname,
          search: url.search,
          params: params,
          isSecure: url.protocol === 'https:',
        });

        // Small timeout to allow DOM to render before triggering CSS transitions
        setTimeout(() => setShowResults(true), 50);
      } catch (err) {
        setError('Invalid URL format. Check for typos and try again.');
        setParsedData(null);
      }
    }, 150); // slight delay to feel like processing
  };

  const handleReset = () => {
    setUrlInput('');
    setParsedData(null);
    setShowResults(false);
    setError('');
  };

  // Reusable component for the animated URL parts
  const URLPartCard = ({ label, value, tooltip, delay }) => {
    if (!value) return null;
    return (
      <div 
        className={`flex flex-col p-3 bg-gray-800/50 rounded-xl border border-gray-700/50 transition-all duration-500 ease-out transform ${
          showResults ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: delay }}
      >
        <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">{label}</span>
        <span className="text-sm md:text-base font-mono text-cyan-400 break-all">{value}</span>
        <span className="text-xs text-gray-500 mt-1">{tooltip}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4 font-sans text-gray-100">
      {/* Main Card */}
      <div className="w-full max-w-xl max-h-[85vh] bg-gray-900 border border-gray-800 rounded-3xl shadow-2xl shadow-cyan-900/10 flex flex-col overflow-hidden">
        
        {/* Header Section */}
        <div className="p-6 border-b border-gray-800 shrink-0">
          <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1">
            URL Decoder Simulator
          </h2>
          <p className="text-sm text-gray-400 mb-5">
            Break down web addresses into simple, understandable parts.
          </p>

          <form onSubmit={handleDecode} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="Paste a URL here..."
              className="flex-1 bg-gray-950 border border-gray-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
            />
            <div className="flex gap-2">
              <button
                type="submit"
                className="flex-1 sm:flex-none bg-cyan-600 hover:bg-cyan-500 text-white font-medium px-6 py-3 rounded-xl transition-colors active:scale-95"
              >
                Decode
              </button>
              {parsedData && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-3 rounded-xl transition-colors active:scale-95"
                  title="Reset"
                >
                  ✕
                </button>
              )}
            </div>
          </form>
          
          {error && (
            <p className="text-red-400 text-sm mt-3 animate-pulse">{error}</p>
          )}
        </div>

        {/* Results Section (Scrollable if necessary, but compact) */}
        {parsedData && (
          <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
            <div className="flex flex-col gap-3">
              
              <URLPartCard 
                label="Protocol" 
                value={parsedData.protocol} 
                tooltip="The communication method used (HTTP/HTTPS)" 
                delay="0ms" 
              />
              
              <URLPartCard 
                label="Domain" 
                value={parsedData.domain} 
                tooltip="The main address of the website" 
                delay="100ms" 
              />
              
              <URLPartCard 
                label="Path" 
                value={parsedData.path} 
                tooltip="The specific folder or page on the server" 
                delay="200ms" 
              />
              
              <URLPartCard 
                label="Query Parameters" 
                value={parsedData.search} 
                tooltip="Data sent to the server for processing" 
                delay="300ms" 
              />

              {/* Smart Insights Panel */}
              <div 
                className={`mt-4 p-4 rounded-xl border bg-gradient-to-br from-gray-800/80 to-gray-900 transition-all duration-700 ease-out transform ${
                  showResults ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                } ${parsedData.isSecure ? 'border-emerald-500/30' : 'border-amber-500/30'}`}
                style={{ transitionDelay: '400ms' }}
              >
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                  Smart Insights
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5">{parsedData.isSecure ? '🔒' : '🔓'}</span>
                    <span className={parsedData.isSecure ? 'text-emerald-400' : 'text-amber-400'}>
                      {parsedData.isSecure 
                        ? 'Secure connection (HTTPS) - your data is encrypted.' 
                        : 'Unsecure connection (HTTP) - your data is not encrypted.'}
                    </span>
                  </li>
                  
                  {parsedData.params.length > 0 && (
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5">📊</span>
                      <span className="text-blue-300">
                        Contains <strong>{parsedData.params.length}</strong> query parameter(s). This is data sent to the server.
                      </span>
                    </li>
                  )}
                  
                  {parsedData.params.length > 0 && (
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5">👀</span>
                      <span className="text-amber-300/90">
                        This may include tracking info. Parameters like 'id', 'ref', or 'utm' are often used to track where you came from.
                      </span>
                    </li>
                  )}
                </ul>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default URLDecoderSimulator;