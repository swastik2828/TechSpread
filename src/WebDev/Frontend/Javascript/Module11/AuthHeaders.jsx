import React, { useState } from 'react';
import { BookOpen, Key, Lightbulb, AlertTriangle, ArrowRight, Compass, ShieldCheck, Lock, Unlock, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";
import JsJwtSimulator from '../../../../simulators/web/javascript/JsJwtSimulator';

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


const AuthHeaders = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="Authentication & Headers | JavaScript Web APIs"
                description="Learn how to authenticate HTTP requests using JSON Web Tokens (JWT), understand Bearer tokens, and secure token storage in the browser."
                keywords="JWT, JSON Web Token, HTTP Headers, Bearer Token, authentication fetch, XSS, CSRF, HttpOnly"
                url="/webdevelopment/javascript/auth-headers"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-yellow-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>

                <div className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                        <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 11.5: Web APIs & Data Handling</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        Authentication & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-yellow-500">Headers</span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light px-4">
                        Most APIs require authentication — proof of who you are before they'll respond with data. Headers are the mechanism for passing this proof securely along with each request.
                    </p>
                </div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">

                <Section title="Request Headers" icon={Database} id="request-headers">
                    <p className="text-gray-300 leading-relaxed">
                        Headers are key-value pairs sent with every request. Some are set automatically by the browser; others you set explicitly to declare content formats or identities.
                    </p>
                    <CodeBlock
                        code={`const response = await fetch('/api/data', {
  headers: {
    'Content-Type': 'application/json',     // What format the request body is in
    'Accept': 'application/json',           // What format you want back
    'Authorization': 'Bearer your-token',  // Who you are
    'X-Request-ID': crypto.randomUUID(),   // Custom header — useful for tracing
  }
});`}
                        language="javascript"
                    />
                </Section>

                <Section title="Bearer Token Authentication (JWT)" icon={ShieldCheck} id="jwt-auth">
                    <p className="text-gray-300 leading-relaxed">
                        The most common authentication pattern in modern APIs: the client includes a <strong>token</strong> in every request's `Authorization` header.
                    </p>
                    <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6 text-sm text-gray-300 font-mono overflow-x-auto whitespace-pre">
{`1. User submits login form (username + password)
         │
         ▼
2. Server verifies credentials, generates a signed token (JWT)
         │
         ▼
3. Server sends token back to client
         │
         ▼
4. Client stores token and sends it with every future request
         │
         ▼
5. Server reads token, verifies its signature, extracts user identity
   (No database lookup needed — the token is self-contained)`}
                    </div>

                    <JsJwtSimulator />

                    <CodeBlock
                        code={`// Decode the payload manually (just Base64 decoding — no crypto involved)
function decodeJwtPayload(token) {
  const payloadBase64 = token.split('.')[1];
  const padded = payloadBase64 + '=='.slice((payloadBase64.length % 4) || 4);
  return JSON.parse(atob(padded.replace(/-/g, '+').replace(/_/g, '/')));
}

const payload = decodeJwtPayload(token);
// { userId: 42, role: "admin", exp: 1736000000 }

// Check if token is expired (exp is a Unix timestamp in seconds)
const isExpired = Date.now() / 1000 > payload.exp;`}
                        language="javascript"
                    />

                    <p className="text-gray-300 leading-relaxed mt-8">
                        Rather than copy-pasting the Authorization header everywhere, include it natively in your fetch wrapper:
                    </p>
                    <CodeBlock
                        code={`function getAuthToken() {
  // Retrieve from wherever you stored it
  return sessionStorage.getItem('auth_token');
}

async function authenticatedRequest(url, options = {}) {
  const token = getAuthToken();

  return request(url, {
    ...options,
    headers: {
      ...(token ? { Authorization: \`Bearer \${token}\` } : {}),
      ...options.headers,
    },
  });
}`}
                        language="javascript"
                    />
                </Section>

                <Section title="Token Storage Security" icon={Lock} id="token-storage">
                    <HighlightBox title="Where you store tokens matters significantly" type="key">
                        Where you store the auth token directly affects your app's security posture against XSS and CSRF attacks.
                    </HighlightBox>

                    <div className="overflow-x-auto rounded-xl border border-gray-800 my-6">
                        <table className="w-full text-left text-sm text-gray-400">
                            <thead className="text-xs text-gray-300 uppercase bg-gray-900/80 border-b border-gray-800">
                                <tr>
                                    <th className="px-6 py-4">Storage</th>
                                    <th className="px-6 py-4">Accessible to JS?</th>
                                    <th className="px-6 py-4">Sent Automatically?</th>
                                    <th className="px-6 py-4">Vulnerable to</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-800/50"><td className="px-6 py-4 font-mono text-yellow-400">localStorage</td><td className="px-6 py-4 text-emerald-400">✅ Yes</td><td className="px-6 py-4 text-rose-400">❌ No</td><td className="px-6 py-4 text-white">XSS attacks</td></tr>
                                <tr className="border-b border-gray-800/50"><td className="px-6 py-4 font-mono text-yellow-400">sessionStorage</td><td className="px-6 py-4 text-emerald-400">✅ Yes</td><td className="px-6 py-4 text-rose-400">❌ No</td><td className="px-6 py-4 text-white">XSS attacks (clears on tab close)</td></tr>
                                <tr><td className="px-6 py-4 font-mono text-yellow-400">HttpOnly Cookie</td><td className="px-6 py-4 text-rose-400">❌ No</td><td className="px-6 py-4 text-emerald-400">✅ Yes (same-origin)</td><td className="px-6 py-4 text-white">CSRF attacks</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                        <strong className="text-yellow-400">XSS (Cross-Site Scripting):</strong> If an attacker manages to inject malicious JavaScript into your page, any token in <code>localStorage</code> or <code>sessionStorage</code> can be read and stolen.
                    </p>
                    <p className="text-gray-300 leading-relaxed mt-4">
                        <strong className="text-emerald-400">HttpOnly cookies</strong> cannot be read by JavaScript at all — only the browser sees them, and it attaches them automatically. This makes XSS token theft impossible. The recommendation for sensitive auth tokens: Use <code>HttpOnly</code>, <code>Secure</code>, <code>SameSite=Strict</code> cookies set by the server.
                    </p>
                </Section>

                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript/working-with-json" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">11.4 Working with JSON</span>
                            </div>
                        </Link>

                        <Link to="/webdevelopment/javascript/error-handling-architecture" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block group-hover:text-yellow-500/80 transition-colors">Up Next</span>
                                <span className="text-gray-200 font-bold text-xs sm:text-sm group-hover:text-white transition-colors">11.6 Error Handling</span>
                            </div>
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-amber-400 group-hover:bg-yellow-500/10 flex items-center justify-center border border-gray-800 group-hover:border-yellow-500/30 transition-all duration-300">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </article>
    );
};

export default AuthHeaders;