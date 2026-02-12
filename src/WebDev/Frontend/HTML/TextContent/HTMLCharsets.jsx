import React from 'react';
import { Globe, FileCode, AlertTriangle, Database, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";

const Section = ({ title, icon: Icon, children }) => (
  <section className="mb-20">
    <div className="flex items-center gap-3 mb-8">
      <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl border border-orange-500/30 text-orange-400">
        <Icon size={28} />
      </div>
      <h2 className="text-3xl font-bold text-white">{title}</h2>
    </div>
    {children}
  </section>
);

const LocalCodeBlock = ({ code, label = "HTML" }) => (
  <div className="my-6 rounded-xl overflow-hidden bg-[#0d1117] border border-gray-800 shadow-2xl">
    <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-gray-800">
      <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-500/20"></div><div className="w-3 h-3 rounded-full bg-yellow-500/20"></div></div>
      <span className="text-[10px] font-bold text-gray-500 uppercase">{label}</span>
    </div>
    <div className="p-5 overflow-x-auto font-mono text-sm text-gray-300 whitespace-pre-wrap">{code}</div>
  </div>
);

const HTMLCharsets = () => {
  return (
    <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
      <SEO 
        title="HTML Charsets & Encoding" 
        description="Why do weird symbols appear on websites? Learn about Character Sets, ASCII, and why UTF-8 is the universal standard for the web."
        keywords="html charset, utf-8, character encoding, meta charset, mojibake"
      />

      <header className="py-12 border-b border-gray-800 mb-12">
        <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase border border-orange-500/20 mb-4 inline-block">
          Module 3.7
        </span>
        <h1 className="text-5xl font-extrabold text-white mb-6">Character <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Sets</span></h1>
        <p className="text-xl text-gray-400 max-w-3xl">
          Computers only understand 0s and 1s. To show text, they need a map to convert those numbers into letters. If the browser uses the wrong map, your beautiful website turns into garbage.
        </p>
      </header>

      <div className="prose prose-invert prose-lg max-w-none">
        
        <Section title="What is a Character Set?" icon={Database}>
          <p>
            A <strong>Character Set</strong> (or Encoding) is a table that matches numbers to characters.
          </p>
          <p>
            In the 1960s, we had <strong>ASCII</strong>. It used 7 bits to represent 128 characters—enough for English letters, numbers, and basic punctuation. But what about German umlauts (ü)? What about Greek (Ω)? What about Hindi, Arabic, or Chinese?
          </p>
          <p>
            Different countries invented their own maps (ISO-8859-1, Windows-1252, Shift_JIS). This was a nightmare. If you opened a Japanese website on a European computer, you would see random garbage text known as <strong>Mojibake</strong> (e.g., "Ã§Ã£o").
          </p>
        </Section>

        <Section title="Enter UTF-8" icon={Globe}>
          <p>
            The solution is <strong>Unicode</strong>, and its implementation on the web is called <strong>UTF-8</strong>.
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-400">
            <li>It covers almost every character in every human language.</li>
            <li>It includes symbols, math notations, and Emojis (🎉).</li>
            <li>It is variable-width: standard English letters take up 1 byte (same as ASCII), while complex characters take 2 to 4 bytes.</li>
          </ul>
          <p className="mt-4 font-bold text-white">
            Today, over 98% of the web uses UTF-8. You should use it for every project.
          </p>
        </Section>

        <Section title="Declaring the Charset" icon={FileCode}>
          <p>
            You must tell the browser strictly to use UTF-8. You do this inside the <code>&lt;head&gt;</code> tag of your document. It should be one of the very first things in your file (within the first 1024 bytes) so the browser knows how to read the rest of the file.
          </p>
          <LocalCodeBlock code={`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My Page</title>
  </head>
  <body>
    <p>Hello World</p>
    <p>こんにちは (Japanese)</p>
    <p>Rocket: 🚀</p>
  </body>
</html>`} />
          <p>
            In HTML5, the syntax is short and sweet: <code>&lt;meta charset="UTF-8"&gt;</code>.
          </p>
        </Section>

        <Section title="What happens if you forget it?" icon={AlertTriangle}>
          <p>
            If you omit the charset declaration, the browser has to guess.
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-400">
            <li>It might guess correctly based on your user settings.</li>
            <li>It might guess incorrectly and show "" (the replacement character) everywhere.</li>
            <li>It opens up a security vulnerability known as <strong>UTF-7 XSS</strong> (rare now, but historically dangerous).</li>
          </ul>
          <div className="bg-red-900/10 border border-red-500/20 p-6 rounded-xl mt-6">
            <h4 className="text-red-400 font-bold mb-2">Pro Tip</h4>
            <p className="text-sm">
              Even if you declare UTF-8 in HTML, your <strong>text editor</strong> (VS Code, Notepad++, etc.) must also save the file as UTF-8. If you save a file as "ANSI" but declare "UTF-8", the browser will try to read it as UTF-8 and fail.
            </p>
          </div>
        </Section>

      </div>

      <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
        <Link to="../block-inline" className="flex items-center gap-2 text-gray-500 hover:text-white"><ArrowLeft size={16}/> Block vs Inline</Link>
        <Link to="/webdevelopment/html" className="flex items-center gap-2 text-gray-500 hover:text-white pointer-events-none opacity-50">End of Module <ArrowRight size={16}/></Link>
      </div>
    </article>
  );
};

export default HTMLCharsets;