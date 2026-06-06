import React, { useState, useEffect } from 'react';
import { BookOpen, Key, Lightbulb, AlertTriangle, ArrowRight, Compass, ShieldAlert, Timer, Box, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";
import JsExponentialBackoffSimulator from '../../../../simulators/web/javascript/JsExponentialBackoffSimulator';

const Section = ({ title, icon: Icon, children, id }) => (
    <section id={id} className="relative mb-16 sm:mb-24 scroll-mt-28">
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full">
            <div className="p-2 sm:p-3 md:p-4 bg-gradient-to-br from-yellow-500/20 to-yellow-500/20 rounded-xl sm:rounded-2xl border border-yellow-500/40 text-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.15)] flex-shrink-0">
                <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight w-full break-words">
                {title}
            </h2>
        </div>
        <div className="space-y-6 sm:space-y-8 w-full">
            {children}
        </div>
    </section>
);

const HighlightBox = ({ title, children, type = "info" }) => {
    const config = {
        key: { icon: Key, color: "text-amber-400", border: "border-amber-500/40", bg: "bg-gradient-to-br from-amber-900/40 to-yellow-900/10", heading: "text-amber-500", shadow: "shadow-amber-500/10" },
        note: { icon: BookOpen, color: "text-sky-400", border: "border-sky-500/40", bg: "bg-gradient-to-br from-sky-900/40 to-blue-900/10", heading: "text-sky-400", shadow: "shadow-sky-500/10" },
        tip: { icon: Lightbulb, color: "text-amber-400", border: "border-yellow-500/40", bg: "bg-gradient-to-br from-emerald-900/40 to-green-900/10", heading: "text-amber-400", shadow: "shadow-yellow-500/10" },
        warn: { icon: AlertTriangle, color: "text-amber-400", border: "border-yellow-500/40", bg: "bg-gradient-to-br from-rose-900/40 to-red-900/10", heading: "text-yellow-500", shadow: "shadow-yellow-500/10" },
    }[type] || { icon: BookOpen, color: "text-sky-400", border: "border-sky-500/40", bg: "bg-gradient-to-br from-sky-900/40 to-blue-900/10", heading: "text-sky-400", shadow: "shadow-sky-500/10" };

    const Icon = config.icon;

    return (
        <div className={`p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl ${config.bg} border ${config.border} shadow-xl ${config.shadow} my-8 sm:my-10 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 w-full`}>
            <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 blur-3xl rounded-full ${config.bg} transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700`}></div>
            <h4 className={`text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3 ${config.heading} relative z-10 w-full`}>
                <div className={`p-1.5 sm:p-2 rounded-lg bg-black/20 ${config.border} border shrink-0`}>
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${config.color}`} />
                </div>
                <span className="break-words">{title}</span>
            </h4>
            <div className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-line relative z-10 font-medium w-full">
                {children}
            </div>
        </div>
    );
};



const APIErrorHandling = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="Error Handling & Architecture | JavaScript Web APIs"
                description="Master deep error handling with fetch(), implement exponential backoff, timeouts with AbortController, and build a complete API client."
                keywords="fetch error handling, exponential backoff, AbortController timeout, robust fetch, javascript API client architecture"
                url="/webdevelopment/javascript/error-handling-architecture"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-yellow-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>

                <div className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                        <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 11.6 & 11.7: Web APIs & Data</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        Error Handling & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-yellow-500">Architecture</span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light px-4">
                        Good error handling separates demo code from production code. Network requests fail in many ways, and users need specific, useful feedback for each scenario.
                    </p>
                </div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">

                <Section title="The Three Ways Fetch Can Fail" icon={ShieldAlert} id="fetch-failures">
                    <p className="text-gray-300 leading-relaxed">
                        To build a truly robust system, your fetch wrapper must distinguish between three entirely different categories of failure:
                    </p>
                    <CodeBlock
                        code={`async function robustFetch(url, options) {
  let response;

  // Failure type 1: Network never reached
  // Causes: No internet, DNS failure, server unreachable, CORS rejection
  try {
    response = await fetch(url, options);
  } catch (networkError) {
    throw Object.assign(new Error('Network error'), {
      type: 'NETWORK_ERROR',
      original: networkError,
    });
  }

  // Failure type 2: Server responded with an error status
  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw Object.assign(new Error(body.message || \`HTTP \${response.status}\`), {
      type: 'HTTP_ERROR',
      status: response.status,
      body,
    });
  }

  // Failure type 3: Response body isn't valid JSON
  try {
    return await response.json();
  } catch (parseError) {
    throw Object.assign(new Error('Failed to parse response'), {
      type: 'PARSE_ERROR',
      original: parseError,
    });
  }
}`}
                        language="javascript"
                    />
                </Section>

                <Section title="Retry Logic & Exponential Backoff" icon={Timer} id="exponential-backoff">
                    <p className="text-gray-300 leading-relaxed">
                        Some failures are transient. Retrying after a short wait often succeeds. But don't retry immediately in a tight loop — that overwhelms a struggling server. Exponential backoff waits longer with each retry.
                    </p>

                    <JsExponentialBackoffSimulator />

                    <CodeBlock
                        code={`async function fetchWithRetry(url, options = {}, maxRetries = 3) {
  const RETRYABLE_STATUSES = [429, 500, 502, 503, 504];

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await robustFetch(url, options);
    } catch (error) {
      const isLastAttempt = attempt === maxRetries;
      const isRetryable =
        error.type === 'NETWORK_ERROR' ||
        (error.type === 'HTTP_ERROR' && RETRYABLE_STATUSES.includes(error.status));

      if (isLastAttempt || !isRetryable) {
        throw error; // Give up — re-throw for the caller to handle
      }

      // Wait: 200ms, 400ms, 800ms... (exponential) + random jitter
      const baseDelay = 200 * Math.pow(2, attempt);
      const jitter = Math.random() * 100;
      await new Promise(resolve => setTimeout(resolve, baseDelay + jitter));
    }
  }
}`}
                        language="javascript"
                    />
                    <p className="text-gray-400 italic text-sm mt-4">Note: The jitter (random extra delay) prevents multiple clients from all retrying in perfect synchrony, which would create "thundering herd" problems on the server.</p>
                </Section>

                <Section title="Timeouts via AbortController" icon={AlertTriangle} id="timeouts">
                    <p className="text-gray-300 leading-relaxed">
                        `fetch()` has no built-in timeout. A request can hang indefinitely. Use `AbortController` to add one:
                    </p>
                    <CodeBlock
                        code={`async function fetchWithTimeout(url, options = {}, timeoutMs = 10000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error(\`Request timed out after \${timeoutMs}ms\`);
    }
    throw error;
  }
}`}
                        language="javascript"
                    />
                </Section>

                <Section title="Putting It All Together (api.js)" icon={Box} id="architecture-putting-together">
                    <HighlightBox title="The Complete API Module" type="tip">
                        A realistic architectural pattern centralizes all fetch logic, headers, token injection, and routing into a single exported API module. Callers in your UI components never call fetch directly.
                    </HighlightBox>
                    <CodeBlock
                        code={`// api.js — A self-contained API client module
const BASE_URL = 'https://api.example.com';

function getToken() { return sessionStorage.getItem('auth_token'); }

async function request(path, options = {}) {
  // Setup headers, timeouts, and execute robust fetch logic here...
  // (Combining concepts from sections 11.2, 11.5, and 11.6)
}

// API methods — each describes a resource operation clearly
export const auth = {
  login: (email, password) =>
    request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }).then(data => {
      sessionStorage.setItem('auth_token', data.token);
      return data.user;
    }),
  logout: () => {
    sessionStorage.removeItem('auth_token');
    return request('/auth/logout', { method: 'POST' });
  },
};

export const users = {
  list: (filters = {}) => {
    const params = new URLSearchParams(filters);
    return request(\`/users?\${params}\`);
  },
  get: (id) => request(\`/users/\${id}\`),
  update: (id, changes) => request(\`/users/\${id}\`, { method: 'PATCH', body: JSON.stringify(changes) }),
};`}
                        language="javascript"
                    />
                </Section>

                <div className="bg-gradient-to-br from-yellow-500/20 to-amber-900/20 border border-yellow-500/40 rounded-2xl p-8 my-16 text-center">
                    <CheckCircle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                    <h2 className="text-3xl font-black text-white mb-4">Module Complete!</h2>
                    <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
                        You've mastered the intricacies of web communication. You now understand how HTTP works beneath the surface, how to wield the Fetch API securely, and how to architect production-ready, fault-tolerant networking code.
                    </p>
                </div>

                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript/auth-headers" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">11.5 Auth & Headers</span>
                            </div>
                        </Link>

                        <Link to="/tutorials/webdevelopment/frontend" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-yellow-500/90 to-amber-600/90 hover:from-yellow-400 hover:to-amber-500 shadow-[0_0_30px_rgba(234,179,8,0.3)] transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-yellow-900 font-black uppercase tracking-widest mb-1 block">Course Map</span>
                                <span className="text-black font-black text-xs sm:text-sm">Return to Hub</span>
                            </div>
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-black/20 text-black flex items-center justify-center transition-all duration-300">
                                <Compass className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </article>
    );
};

export default APIErrorHandling;