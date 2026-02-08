import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, Server, Smartphone, Network, Zap, 
  Layers, Code, Database, ShieldCheck, Cpu, Cloud 
} from 'lucide-react';

import SEO from "../../../components/SEO.jsx"; 
import WebArchitectureSimulator from "../../../simulators/web/WebArchitectureSimulator.jsx";

// Image Imports (Ensure these exist in your assets folder)
import ClientServerImg from "../../../assets/WebDev/client_server_architecture.jpeg";
import BrowserRenderingImg from "../../../assets/WebDev/browser_rendering_engine.jpeg";
import FrontendTrinityImg from "../../../assets/WebDev/html_css_js_structure.jpeg";
import BackendAPIImg from "../../../assets/WebDev/rest_api_diagram.jpeg";
import DatabaseScalingImg from "../../../assets/WebDev/sql_vs_nosql_scaling.jpeg";
import DevOpsCycleImg from "../../../assets/WebDev/ci_cd_pipeline.jpeg";

// --- Local Components ---

// 1. Ad Placeholder
const AdSpot = ({ label = "Advertisement" }) => (
  <div className="w-full h-32 my-12 bg-gray-900/40 border border-gray-800 border-dashed rounded-xl flex flex-col items-center justify-center text-gray-600">
    <span className="text-xs uppercase tracking-widest font-semibold">{label}</span>
    <span className="text-xs opacity-50">Space reserved for future sponsors</span>
  </div>
);

// 2. Styled Section
const Section = ({ title, icon: Icon, children, id }) => (
  <section id={id} className="relative mb-20 scroll-mt-24">
    <div className="flex items-center gap-3 mb-8">
      <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl border border-orange-500/30 text-orange-400">
        <Icon size={28} />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
        {title}
      </h2>
    </div>
    {children}
  </section>
);

// 3. Highlight Box
const HighlightBox = ({ title, children, color = "blue" }) => {
  const colors = {
    blue: "from-blue-500/10 to-cyan-500/10 border-blue-500/30 text-blue-300",
    orange: "from-orange-500/10 to-red-500/10 border-orange-500/30 text-orange-300",
    green: "from-green-500/10 to-emerald-500/10 border-green-500/30 text-green-300",
    purple: "from-purple-500/10 to-pink-500/10 border-purple-500/30 text-purple-300",
  };
  
  return (
    <div className={`p-6 rounded-2xl bg-gradient-to-br ${colors[color]} border backdrop-blur-sm`}>
      <h4 className="text-lg font-bold mb-3 text-white flex items-center gap-2">
        {title}
      </h4>
      <div className="text-gray-300 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
};

// 4. Local Code Block Implementation
const LocalCodeBlock = ({ title, code, output, language = "java", outputLabel = "Terminal Output" }) => {
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
        
        {/* Language Badge */}
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
          <div className="text-xs text-gray-500 font-bold uppercase mb-2 select-none flex items-center gap-2">
            <span className="text-orange-500">➜</span> {outputLabel}
          </div>
          <div className="font-mono text-green-400 text-sm whitespace-pre-wrap border-l-2 border-green-500/30 pl-3">
            {output}
          </div>
        </div>
      )}
    </div>
  );
};

const FundamentalsWeb = () => {
  return (
    <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
      <SEO 
        title="What is the Web? Fundamentals & Architecture Explained"
        description="A comprehensive guide to Web Fundamentals: Client-Server model, HTTP protocols, Browser rendering, Frontend vs Backend, and modern DevOps."
        keywords="what is the web, web architecture, how internet works, client server model, http vs https, browser rendering path"
        url="/tutorials/webdevelopment/frontend/html"
      />

      {/* --- Hero Header --- */}
      <header className="py-12 text-center md:text-left border-b border-gray-800 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase tracking-wider border border-orange-500/20 mb-4 inline-block">
            Module 1: The Basics
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            Fundamentals of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">The Web</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            The World Wide Web is not magic—it's a massive distributed system built on open protocols. 
            Before you write code, you must understand the ecosystem where your code lives.
          </p>
        </motion.div>
      </header>

      {/* --- 1. What is the Web? --- */}
      <Section title="What is the Web?" icon={Globe} id="what-is-web">
        <div className="prose prose-invert prose-lg max-w-none">
          <p>
            The <strong>World Wide Web (WWW)</strong>, commonly known as the Web, is an information system where documents and other web resources are identified by Uniform Resource Locators (URLs), which may be interlinked by hyperlinks, and are accessible over the Internet.
          </p>
          <p>
            It is crucial to distinguish the <em>Web</em> from the <em>Internet</em>. The <strong>Internet</strong> is the massive networking infrastructure that connects millions of computers globally. The <strong>Web</strong> is essentially a service built <em>on top</em> of the Internet that allows us to access information through pages and apps.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <HighlightBox title="The Internet (The Road)" color="blue">
             The physical infrastructure: Cables, routers, satellites, and data centers that allow computers to connect. It is the "hardware" of connectivity.
          </HighlightBox>
          <HighlightBox title="The Web (The Traffic)" color="orange">
             The information sharing model: Websites, APIs, and browsers that run over the Internet. It is the "software" we use to browse.
          </HighlightBox>
        </div>
      </Section>

      {/* <AdSpot label="Top Banner Ad" /> */}

      {/* --- 2. Components of the Web --- */}
      <Section title="Components of the Web Ecosystem" icon={Layers} id="components">
        <p className="mb-8 text-lg">
          The Web isn't a single entity; it's a conversation between different actors. The primary architecture is the <strong>Client-Server Model</strong>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            { 
              icon: <Smartphone className="text-blue-400" />, 
              title: "Clients", 
              desc: "Browsers (Chrome, Firefox) or apps on user devices that request content." 
            },
            { 
              icon: <Server className="text-purple-400" />, 
              title: "Servers", 
              desc: "Powerful computers that store web pages, databases, and handle logic." 
            },
            { 
              icon: <Network className="text-green-400" />, 
              title: "DNS", 
              desc: "The 'Phonebook' that translates domain names (google.com) to IPs." 
            },
            { 
              icon: <Zap className="text-yellow-400" />, 
              title: "HTTP", 
              desc: "The protocol (language) used for communicating data between client and server." 
            }
          ].map((item, i) => (
            <div key={i} className="bg-gray-900/50 border border-gray-800 p-5 rounded-xl hover:bg-gray-900 transition-colors">
              <div className="mb-3">{item.icon}</div>
              <h3 className="font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-black/30 p-6 rounded-2xl border border-gray-800">
          <h3 className="text-xl font-bold text-white mb-4 pl-2 border-l-4 border-orange-500">Visualizing the Architecture</h3>
          <img 
            src={ClientServerImg} 
            alt="Client Server Architecture Diagram" 
            className="w-full h-auto rounded-lg opacity-90 mb-4"
          />
          <p className="text-sm text-center text-gray-500 italic">Figure 1: The separation of concerns between the requester (Client) and the provider (Server).</p>
        </div>
      </Section>

      {/* --- 3. How the Web Works --- */}
      <Section title="How the Web Works" icon={Zap} id="how-it-works">
        <p className="mb-6">
          When you type a URL into your browser, a complex chain reaction occurs in milliseconds. This is the <strong>Request-Response Cycle</strong>.
        </p>
        
        {/* Interactive Simulator Component */}
        <div className="my-10 ring-1 ring-gray-800 rounded-2xl overflow-hidden shadow-2xl">
           <WebArchitectureSimulator />
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white">The Step-by-Step Flow</h3>
          <ol className="relative border-l border-gray-800 ml-4 space-y-8">
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full -left-4 ring-4 ring-gray-900 text-orange-400 font-bold text-sm">1</span>
              <h4 className="flex items-center mb-1 text-lg font-semibold text-white">DNS Lookup</h4>
              <p className="text-base font-normal text-gray-400">The browser asks a DNS server: "What is the IP address for google.com?" The DNS replies with a number like <code>142.250.190.46</code>.</p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full -left-4 ring-4 ring-gray-900 text-orange-400 font-bold text-sm">2</span>
              <h4 className="flex items-center mb-1 text-lg font-semibold text-white">TCP Handshake</h4>
              <p className="text-base font-normal text-gray-400">The browser establishes a stable connection with the server using TCP/IP to ensure data packets arrive in order.</p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full -left-4 ring-4 ring-gray-900 text-orange-400 font-bold text-sm">3</span>
              <h4 className="flex items-center mb-1 text-lg font-semibold text-white">HTTP Request</h4>
              <p className="text-base font-normal text-gray-400">The browser sends a message: <code>GET /index.html</code>. It may also send cookies or authentication tokens.</p>
            </li>
            <li className="ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full -left-4 ring-4 ring-gray-900 text-orange-400 font-bold text-sm">4</span>
              <h4 className="flex items-center mb-1 text-lg font-semibold text-white">Server Response</h4>
              <p className="text-base font-normal text-gray-400">The server processes the request (maybe querying a database) and sends back the HTML code with a status code (e.g., 200 OK).</p>
            </li>
          </ol>
        </div>
      </Section>

      {/* <AdSpot label="In-Content Ad" /> */}

      {/* --- 4. Browser Rendering --- */}
      <Section title="Browser Rendering Engine" icon={Cpu} id="rendering">
        <p className="mb-6">
          Receiving code is useless if the user can't see it. The browser's <strong>Rendering Engine</strong> turns raw HTML/CSS bytes into pixels on the screen.
        </p>

        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 mb-8">
          <img 
            src={BrowserRenderingImg} 
            alt="Browser Critical Rendering Path" 
            className="w-full h-auto rounded-lg mb-6"
          />
          <div className="grid gap-4 md:grid-cols-3 text-sm">
            <div className="bg-black/40 p-3 rounded border border-gray-700">
              <strong className="text-orange-400 block mb-1">1. Parsing</strong>
              HTML builds the DOM tree. CSS builds the CSSOM tree.
            </div>
            <div className="bg-black/40 p-3 rounded border border-gray-700">
              <strong className="text-blue-400 block mb-1">2. Layout</strong>
              Calculates geometry: exact width, height, and position of elements.
            </div>
            <div className="bg-black/40 p-3 rounded border border-gray-700">
              <strong className="text-green-400 block mb-1">3. Paint</strong>
              Fills pixels with colors, borders, shadows, and images.
            </div>
          </div>
        </div>
      </Section>

      {/* --- 5. Frontend Trinity --- */}
      <Section title="The Frontend Trinity" icon={Code} id="frontend">
        <p className="mb-6">
          Every modern website is built upon three core technologies. They are separate layers of concern:
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <HighlightBox title="HTML" color="orange">
            <strong>Structure.</strong> The skeleton of the page. Defines headings, paragraphs, and images.
          </HighlightBox>
          <HighlightBox title="CSS" color="blue">
            <strong>Presentation.</strong> The skin. Controls colors, fonts, layout, and responsiveness.
          </HighlightBox>
          <HighlightBox title="JavaScript" color="green">
            <strong>Behavior.</strong> The brain. Handles interactions, data fetching, and logic.
          </HighlightBox>
        </div>

        <div className="mb-8">
          <img src={FrontendTrinityImg} alt="HTML CSS JS Stack" className="rounded-xl opacity-80 w-full max-w-2xl mx-auto" />
        </div>

        <p className="mb-4">Here is how they come together in code:</p>
        
        {/* Uses LocalCodeBlock with custom output label */}
        <LocalCodeBlock 
          title="index.html"
          language="html"
          outputLabel="Browser Behavior" 
          code={`<div class="card">
  <h2 id="title">Loading...</h2>
  <button onclick="updateTitle()">Click Me</button>
</div>

<style>
  .card {
    border: 1px solid #333;
    padding: 20px;
    background: #111;
    color: white;
  }
</style>

<script>
  function updateTitle() {
    document.getElementById('title').innerText = "Hello World!";
  }
</script>`}
          output="[On Click]: The text 'Loading...' changes to 'Hello World!' immediately."
        />
      </Section>

      {/* --- 6. Backend & Databases --- */}
      <Section title="Backend & Databases" icon={Database} id="backend">
        <p className="mb-6">
          The <strong>Backend</strong> is the "under the hood" engine. It runs on the server and handles business logic, authentication, and data storage. Frontend apps talk to backends via <strong>APIs (Application Programming Interfaces)</strong>.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2"><Cloud size={20}/> API Architecture</h3>
            <p className="text-sm">Most modern web apps use <strong>REST</strong> or <strong>GraphQL</strong>. REST uses standard HTTP methods:</p>
            <ul className="space-y-2 text-sm font-mono bg-gray-900 p-4 rounded-lg border border-gray-800">
              <li className="text-green-400">GET /users <span className="text-gray-500">// Read</span></li>
              <li className="text-blue-400">POST /users <span className="text-gray-500">// Create</span></li>
              <li className="text-yellow-400">PUT /users/1 <span className="text-gray-500">// Update</span></li>
              <li className="text-red-400">DELETE /users/1 <span className="text-gray-500">// Delete</span></li>
            </ul>
            <img src={BackendAPIImg} alt="API Diagram" className="rounded-lg border border-gray-800" />
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2"><Database size={20}/> Data Storage</h3>
            <p className="text-sm">Databases provide persistence. There are two main types:</p>
            
            <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-blue-500">
              <strong className="text-white block">Relational (SQL)</strong>
              <span className="text-xs text-gray-400">MySQL, PostgreSQL</span>
              <p className="text-sm mt-1">Structured tables. Best for complex relationships and financial data (ACID compliance).</p>
            </div>

            <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-green-500">
              <strong className="text-white block">NoSQL</strong>
              <span className="text-xs text-gray-400">MongoDB, Redis</span>
              <p className="text-sm mt-1">Flexible documents. Best for massive scale, real-time data, and rapid prototyping.</p>
            </div>
            <img src={DatabaseScalingImg} alt="Database Scaling" className="rounded-lg border border-gray-800" />
          </div>
        </div>
      </Section>

      {/* <AdSpot label="Bottom Banner" /> */}

      {/* --- 7. Security & DevOps --- */}
      <Section title="Security & Modern DevOps" icon={ShieldCheck} id="devops">
        <p className="mb-6">
          A web developer's job isn't done when the code works. It must be secure and deployed reliably.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <HighlightBox title="Security Essentials" color="purple">
            <ul className="list-disc pl-4 space-y-2 text-sm">
              <li><strong>HTTPS (SSL/TLS):</strong> Encrypts data in transit. Never use HTTP for login forms.</li>
              <li><strong>XSS & CSRF:</strong> Common attacks where hackers inject scripts. Frameworks like React help prevent this.</li>
              <li><strong>CORS:</strong> Controls which domains can access your API resources.</li>
            </ul>
          </HighlightBox>

          <HighlightBox title="DevOps Lifecycle" color="green">
            <ul className="list-disc pl-4 space-y-2 text-sm">
              <li><strong>CI/CD:</strong> Automated pipelines that test and deploy code on every save.</li>
              <li><strong>Docker:</strong> Packages apps into containers so they run the same on any machine.</li>
              <li><strong>Cloud (AWS/Vercel):</strong> Where modern apps are hosted, often using Serverless functions.</li>
            </ul>
          </HighlightBox>
        </div>

        <div className="bg-black/30 p-6 rounded-2xl border border-gray-800 text-center">
           <img src={DevOpsCycleImg} alt="DevOps Cycle" className="mx-auto rounded-lg mb-4 max-h-64 object-contain"/>
           <p className="text-sm text-gray-500">The Modern Deployment Pipeline</p>
        </div>
      </Section>

      <div className="h-24" /> {/* Footer Spacer */}
    </article>
  );
};

export default FundamentalsWeb;