import React from 'react';
import { motion } from 'framer-motion';
import {
    Globe2, Settings, Laptop2, Code2, Bug, BookOpen, Key,
    Lightbulb, AlertTriangle, ArrowRight, TerminalSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';

import SEO from "../../../components/SEO";
import JsEngineSimulator from "../../../simulators/web/JsEngineSimulator";
import JsConsoleSimulator from "../../../simulators/web/JsConsoleSimulator";

const Section = ({ title, icon: Icon, children, id }) => (
    <section id={id} className="relative mb-24 scroll-mt-28">
        <div className="flex items-center gap-4 mb-10">
            <div className="p-3 sm:p-4 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-2xl border border-amber-500/40 text-amber-500 shadow-[0_0_30px_rgba(251,191,36,0.15)] flex-shrink-0">
                <Icon size={32} />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {title}
            </h2>
        </div>
        <div className="space-y-8">
            {children}
        </div>
    </section>
);

const HighlightBox = ({ title, children, type = "info" }) => {
    const config = {
        key: { icon: Key, color: "text-amber-400", border: "border-amber-500/40", bg: "bg-gradient-to-br from-amber-900/40 to-yellow-900/10", heading: "text-amber-500", shadow: "shadow-amber-500/10" },
        note: { icon: BookOpen, color: "text-sky-400", border: "border-sky-500/40", bg: "bg-gradient-to-br from-sky-900/40 to-blue-900/10", heading: "text-sky-400", shadow: "shadow-sky-500/10" },
        tip: { icon: Lightbulb, color: "text-emerald-400", border: "border-emerald-500/40", bg: "bg-gradient-to-br from-emerald-900/40 to-green-900/10", heading: "text-emerald-400", shadow: "shadow-emerald-500/10" },
        warn: { icon: AlertTriangle, color: "text-rose-400", border: "border-rose-500/40", bg: "bg-gradient-to-br from-rose-900/40 to-red-900/10", heading: "text-rose-500", shadow: "shadow-rose-500/10" },
    }[type];

    const Icon = config.icon;

    return (
        <div className={`p-6 sm:p-8 rounded-3xl ${config.bg} border ${config.border} shadow-xl ${config.shadow} my-10 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1`}>
            <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 blur-3xl rounded-full ${config.bg} transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700`}></div>
            <h4 className={`text-xl sm:text-2xl font-bold mb-4 flex items-center gap-3 ${config.heading} relative z-10`}>
                <div className={`p-2 rounded-lg bg-black/20 ${config.border} border`}>
                    <Icon size={24} className={config.color} />
                </div>
                {title}
            </h4>
            <div className="text-gray-300 text-base sm:text-lg leading-relaxed whitespace-pre-line relative z-10 font-medium">
                {children}
            </div>
        </div>
    );
};

const LocalCodeBlock = ({ title, code, language = "javascript" }) => {
    return (
        <div className="my-10 w-full rounded-2xl overflow-hidden bg-[#0d1117] border border-gray-700 shadow-2xl group ring-1 ring-white/5 transition-all hover:ring-white/10">
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-[#161b22] border-b border-gray-700">
                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex gap-2">
                        <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] border border-[#e0443e]"></div>
                        <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] border border-[#dea123]"></div>
                        <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] border border-[#1aab29]"></div>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-gray-300 font-mono tracking-widest uppercase">
                        {title}
                    </span>
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-amber-500 uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 tracking-wider">
                    {language}
                </span>
            </div>
            <div className="p-6 sm:p-8 overflow-x-auto font-mono text-sm sm:text-base leading-relaxed scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent selection:bg-amber-500/30 selection:text-amber-100">
                <pre className="text-gray-300">
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    );
};

const AnalogyCard = ({ title, desc, icon: Icon, colorClass, bgClass, borderClass }) => (
    <div className={`p-6 sm:p-8 rounded-2xl ${bgClass} border ${borderClass} shadow-lg transition-transform hover:-translate-y-2 duration-300`}>
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-black/40 ${colorClass}`}>
            <Icon size={32} />
        </div>
        <h3 className={`text-2xl font-bold mb-3 ${colorClass}`}>{title}</h3>
        <p className="text-gray-300 text-base leading-relaxed">{desc}</p>
    </div>
);

const IntroToJS = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-8 leading-loose tracking-wide font-sans pb-20">
            <SEO
                title="Introduction to JavaScript — The Ultimate Beginner's Guide"
                description="Start your programming journey here. Learn what JavaScript is, how engines execute code, and set up your computer for professional web development from scratch."
                keywords="learn javascript properly, javascript for absolute beginners, nodejs environment setup, v8 engine explained simply, javascript devtools console guide"
                url="/webdevelopment/javascript"
            />

            {/* Hero Section */}
            <header className="py-12 sm:py-24 text-center border-b border-white/10 mb-12 sm:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px]">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
                <div className="absolute top-0 right-0 -z-20 opacity-[0.05] transform translate-x-1/4 -translate-y-1/4 pointer-events-none hidden md:block">
                    <TerminalSquare size={600} className="text-yellow-500" />
                </div>

                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="px-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                        <TerminalSquare size={16} className="text-amber-400" />
                        <span className="text-amber-400 text-xs sm:text-sm font-black uppercase tracking-[0.2em]">Module 1: The Foundation</span>
                    </div>
                    
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter drop-shadow-2xl">
                        Hello, <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-orange-500">JavaScript.</span>
                    </h1>
                    
                    <p className="text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
                        Don't write a single line of code yet. First, you must understand what JavaScript actually is, why it rules the world, and how it breathes life into the digital universe.
                    </p>
                </motion.div>
            </header>

            <div className="prose prose-invert prose-lg max-w-none text-gray-300 px-2 sm:px-0 text-[1.1rem]">
                
                {/* 1.1 What is JavaScript */}
                <Section title="1.1 What Actually is JavaScript?" icon={Globe2} id="what-is-js">
                    <p className="text-xl font-medium text-white">
                        If you are an absolute beginner to programming, welcome. You have chosen the right language. JavaScript is the undisputed king of the web.
                    </p>
                    
                    <p>
                        To understand what JavaScript does, imagine you are building a physical house. When building the web, we use three distinct languages that perfectly mirror this process:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                        <AnalogyCard 
                            title="HTML corresponds to the Structure." 
                            desc="HTML is like the bricks, wood, and concrete. It defines where the walls go, where the doors are, and constructs the skeleton of the page. It represents the 'Nouns' (text, images, links)." 
                            icon={BookOpen} 
                            colorClass="text-orange-400" 
                            bgClass="bg-orange-500/5" 
                            borderClass="border-orange-500/20" 
                        />
                        <AnalogyCard 
                            title="CSS corresponds to the Presentation." 
                            desc="CSS is the interior design. It's the wallpaper, the paint colors, the stylish furniture, and the layout. It makes the bare bricks look beautiful. It represents the 'Adjectives' (blue, big, centered)." 
                            icon={Laptop2} 
                            colorClass="text-sky-400" 
                            bgClass="bg-sky-500/5" 
                            borderClass="border-sky-500/20" 
                        />
                        <AnalogyCard 
                            title="JS corresponds to the Behavior." 
                            desc="JavaScript is the electricity and plumbing. It makes the garage door open when you press a button, and the lights turn on when you flick a switch. It represents the 'Verbs' (click, scroll, submit)." 
                            icon={TerminalSquare} 
                            colorClass="text-yellow-400" 
                            bgClass="bg-yellow-500/5" 
                            borderClass="border-yellow-500/20" 
                        />
                    </div>

                    <p>
                        Without JavaScript, a website is just a static magazine page. You can read it, but you can't interact with it. <strong>JavaScript is the programming language that makes web pages interactive, dynamic, and "alive".</strong> Whether it's a pop-up modal, a live-updating stock ticker, a 3D browser game, or a complex web application like Netflix or Spotify—JavaScript is the engine making it all happen.
                    </p>

                    <h3 className="text-3xl font-extrabold text-white mt-16 mb-8 border-b border-gray-800 pb-4">A Brief Story of the World's Most Misunderstood Language</h3>
                    
                    <p>
                        To truly master JavaScript, you have to understand its strange, dramatic history. In 1995, the web was just static text and ugly images. A company named Netscape communications (creators of the Netscape browser) wanted to add simple interactions to webpages. 
                    </p>
                    <p>
                        They hired a programmer named <strong>Brendan Eich</strong> and gave him a nearly impossible deadline: create a new programming language in exactly ten days. 
                    </p>
                    <p>
                        He succeeded. He originally called it <strong>Mocha</strong>, then renamed it to <strong>LiveScript</strong>. However, at the time, a completely disconnected, highly-complex programming language called <strong>Java</strong> was extremely popular. In a pure marketing scheme to ride the hype of Java, Netscape officially rebranded LiveScript to <strong>JavaScript</strong>.
                    </p>
                    
                    <HighlightBox title="The Biggest Source of Beginner Confusion" type="warn">
                        <strong>Java and JavaScript are entirely different languages.</strong> They have absolutely nothing to do with each other. As the famous developer joke goes: <em>"Java is to JavaScript as CAR is to CARPET... or as HAM is to HAMSTER."</em> They just share a word for marketing reasons!
                    </HighlightBox>

                    <p>
                        Despite being built in 10 days, JavaScript exploded in popularity. Today, it runs on billions of devices. It is no longer trapped in the browser. Thanks to modern technologies, JavaScript now runs on mighty web servers, builds desktop apps (like Discord and VS Code), creates mobile apps for iOS and Android, and even programs robots.
                    </p>

                    <h3 className="text-3xl font-extrabold text-white mt-16 mb-8 border-b border-gray-800 pb-4">Four Things That Make JavaScript Unique</h3>
                    
                    <p>If you've studied other languages like C++ or Python, JavaScript will feel a bit different. Here are the four fundamental pillars of how JavaScript operates:</p>

                    <ul className="space-y-6 list-none pl-0 mt-8">
                        <li className="flex gap-4 p-6 rounded-2xl bg-[#161b22] border border-gray-800">
                            <span className="text-3xl">1️⃣</span>
                            <div>
                                <strong className="text-amber-400 text-xl block mb-2">It is Dynamically Typed</strong>
                                <p className="text-gray-400 m-0">In rigid languages like C++, if you create a box (variable) labeled "Numbers Only", you can never put a word in it. If you try, the program crashes. JavaScript is highly flexible. A variable is just a blank box. You can put a number in it, take the number out later, and replace it with text. The <em>value</em> has a type (like text or number), but the <em>box itself</em> doesn't care.</p>
                            </div>
                        </li>
                        <li className="flex gap-4 p-6 rounded-2xl bg-[#161b22] border border-gray-800">
                            <span className="text-3xl">2️⃣</span>
                            <div>
                                <strong className="text-amber-400 text-xl block mb-2">It is Interpreted (Mostly)</strong>
                                <p className="text-gray-400 m-0">Traditional languages require you to run a "compiler" which translates your human-readable code into robot-readable 1s and 0s before you can even run the app. JavaScript is generally read and executed from top to bottom immediately, though modern systems sneakily compile it right as it runs to make it blistering fast.</p>
                            </div>
                        </li>
                        <li className="flex gap-4 p-6 rounded-2xl bg-[#161b22] border border-gray-800">
                            <span className="text-3xl">3️⃣</span>
                            <div>
                                <strong className="text-amber-400 text-xl block mb-2">It is Prototype-Based</strong>
                                <p className="text-gray-400 m-0">Most object-oriented languages use "Classes" (blueprints) to create objects (houses). JavaScript is weird—it doesn't naturally use blueprints. Instead, objects just clone other existing objects and inherit their traits directly. (Though modern JS added "class" keywords to make it look normal to Java programmers).</p>
                            </div>
                        </li>
                        <li className="flex gap-4 p-6 rounded-2xl bg-[#161b22] border border-gray-800">
                            <span className="text-3xl">4️⃣</span>
                            <div>
                                <strong className="text-amber-400 text-xl block mb-2">Single-Threaded but Non-Blocking</strong>
                                <p className="text-gray-400 m-0">Imagine a restaurant with exactly one incredibly fast waiter (JavaScript). The waiter takes your food order, passes it to the kitchen (a background API), and instantly goes to take the next table's order instead of standing around waiting for your burger to cook. When the burger is ready, the kitchen rings a bell, and the waiter brings it to you. This is why JS can handle millions of web requests simultaneously without freezing up.</p>
                            </div>
                        </li>
                    </ul>
                </Section>

                {/* 1.2 The Engine vs The Runtime */}
                <Section title="1.2 The Engine vs The Runtime" icon={Settings} id="engine-runtime">
                    <p className="text-xl">
                        Two words that confuse almost every beginner are <strong>"Engine"</strong> and <strong>"Runtime"</strong>. If you want to be a professional, you must understand the difference. It is the absolute core of how JavaScript executes.
                    </p>

                    <h3 className="text-3xl font-extrabold text-white mt-16 mb-8">The Engine: The Calculator</h3>
                    <p>
                        A JavaScript Engine is fundamentally just an incredibly fast text parser and calculator. You feed it a text file, it reads the English words, figures out what math or logic you want to do, and does it.
                    </p>
                    <p>
                        The most famous engine in the world is <strong>V8</strong>, created by Google for Google Chrome. Every time you open Chrome, the V8 engine is humming in the background. But here is the secret: <strong>The Engine is blind and trapped in a box.</strong> 
                    </p>
                    <p>
                        The V8 engine can do math <code>(5 + 5 = 10)</code>. It can store data. But the V8 engine <strong>cannot</strong> read files on your computer. It <strong>cannot</strong> connect to the internet. It <strong>cannot</strong> even show text on a screen. It is just a silent brain computing pure logic.
                    </p>

                    <HighlightBox title="The V8 Pipeline Visualized" type="tip">
                        When you feed text to the V8 engine, it goes through a fascinating factory assembly line. Interact with the simulator below to understand exactly how the engine parses human text into binary machine code.
                    </HighlightBox>

                    <JsEngineSimulator />

                    <h3 className="text-3xl font-extrabold text-white mt-20 mb-8">The Runtime: The Workbench</h3>
                    <p>
                        If the Engine is a pure mathematical brain trapped in a jar, how does JavaScript actually do things like show popups, fetch data from Spotify, or read files?
                    </p>
                    <p>
                        It does it via the <strong>Runtime Environment</strong>. 
                    </p>
                    <p>
                        Imagine the Engine is a powerful drill. The Runtime is the workbench that provides the drill bits, the wood, the screws, and the electricity. The environment surrounding the brain "injects" superpowers into the language.
                    </p>

                    <p>There are two main 'workbenches' you will use in your career:</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                        <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/10 border border-blue-500/30 p-8 rounded-3xl shadow-lg relative overflow-hidden">
                            <div className="absolute top-4 right-4 bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-500/30">Frontend</div>
                            <Globe2 size={48} className="text-blue-400 mb-6" />
                            <h4 className="text-2xl font-bold text-white mb-4">The Browser Runtime</h4>
                            <p className="text-blue-100/70 mb-6 font-medium">When V8 sits inside Google Chrome, Chrome injects "Web APIs" into it. Because it's a web browser, it gives JavaScript tools to manipulate screens.</p>
                            <ul className="space-y-3 text-sm font-mono text-blue-300">
                                <li className="flex items-center gap-2"><ArrowRight size={14}/> <code>document.getElementById()</code></li>
                                <li className="flex items-center gap-2"><ArrowRight size={14}/> <code>window.alert("Hello!")</code></li>
                                <li className="flex items-center gap-2"><ArrowRight size={14}/> <code>fetch("https://api.com")</code></li>
                                <li className="flex items-center gap-2"><ArrowRight size={14}/> <code>localStorage.setItem()</code></li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-emerald-900/20 to-teal-900/10 border border-emerald-500/30 p-8 rounded-3xl shadow-lg relative overflow-hidden">
                            <div className="absolute top-4 right-4 bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-500/30">Backend</div>
                            <TerminalSquare size={48} className="text-emerald-400 mb-6" />
                            <h4 className="text-2xl font-bold text-white mb-4">The Node.js Runtime</h4>
                            <p className="text-emerald-100/70 mb-6 font-medium">In 2009, a genius named Ryan Dahl ripped the V8 engine out of Chrome and wrapped it in a brand new C++ shell called Node.js. It gives JS tools for servers.</p>
                            <ul className="space-y-3 text-sm font-mono text-emerald-300">
                                <li className="flex items-center gap-2"><ArrowRight size={14}/> <code>fs.readFileSync()</code> (File System)</li>
                                <li className="flex items-center gap-2"><ArrowRight size={14}/> <code>os.cpus()</code> (Hardware info)</li>
                                <li className="flex items-center gap-2"><ArrowRight size={14}/> <code>http.createServer()</code></li>
                                <li className="flex items-center gap-2"><ArrowRight size={14}/> <code>process.env.PASSWORD</code></li>
                            </ul>
                        </div>
                    </div>

                    <HighlightBox title='The "Aha!" Moment for Beginners' type="key">
                        If you try to run <code>fs.readFileSync()</code> inside Google Chrome, the browser will crash and throw an error. Why? Because the browser runtime doesn't have a File System tool! If it did, any website you visit could secretly read all the private files on your hard drive! 
                        <br/><br/>
                        Conversely, if you try to run <code>window.alert()</code> inside a backend Node.js server, Node will crash. Why? Because it's a server living in a dark data center; it doesn't have a screen or a "window" to show popups on!
                    </HighlightBox>
                </Section>

                {/* 1.3 Setting Up Development Environment */}
                <Section title="1.3 Your Professional Workspace" icon={Laptop2} id="environment">
                    <p className="text-xl">
                        A boxer doesn't walk into the ring naked. A chef doesn't cook without sharpening their knives. A master developer does not write code in Windows Notepad. You must set up a professional workspace to catch your human errors for you.
                    </p>

                    <h3 className="text-3xl font-extrabold text-white mt-16 mb-8 flex items-center gap-4">
                        <span className="bg-amber-500 text-black w-8 h-8 flex items-center justify-center rounded-full text-lg">1</span>
                        Installing Node.js
                    </h3>
                    <p>
                        Even if you only want to build frontend websites, you <strong>absolutely must</strong> install Node.js. Why? Because modern frontend tools (like React, Tailwind, and Webpack) use Node.js in the background to build and compile your files.
                    </p>
                    <p>
                        Installing Node.js also gives you <strong>npm (Node Package Manager)</strong>. npm is the largest software library in human history. It contains over 2 million free code snippets written by other humans that you can freely download and use in your projects. Need to handle dates? There's an npm package for that. Need to accept credit cards? npm package.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
                        <div className="bg-[#161b22] border border-gray-800 p-6 rounded-2xl flex flex-col gap-3 transition-colors hover:border-emerald-500/30">
                            <span className="text-emerald-500 font-bold text-xs sm:text-sm bg-emerald-500/10 self-start px-3 py-1 rounded-full border border-emerald-500/20">Step 1</span>
                            <p className="text-sm text-gray-300 m-0">Go to <strong className="text-amber-400 font-bold">nodejs.org</strong> in your browser.</p>
                        </div>
                        <div className="bg-[#161b22] border border-gray-800 p-6 rounded-2xl flex flex-col gap-3 transition-colors hover:border-emerald-500/30">
                            <span className="text-emerald-500 font-bold text-xs sm:text-sm bg-emerald-500/10 self-start px-3 py-1 rounded-full border border-emerald-500/20">Step 2</span>
                            <p className="text-sm text-gray-300 m-0">Download the <strong>LTS (Long Term Support)</strong> version. Ignore the "Current" beta version.</p>
                        </div>
                        <div className="bg-[#161b22] border border-gray-800 p-6 rounded-2xl flex flex-col gap-3 transition-colors hover:border-emerald-500/30">
                            <span className="text-emerald-500 font-bold text-xs sm:text-sm bg-emerald-500/10 self-start px-3 py-1 rounded-full border border-emerald-500/20">Step 3</span>
                            <p className="text-sm text-gray-300 m-0">Run the installer. Just keep clicking Next, leaving all the default options exactly as they are.</p>
                        </div>
                        <div className="bg-[#161b22] border border-gray-800 p-6 rounded-2xl flex flex-col gap-3 transition-colors hover:border-emerald-500/30">
                            <span className="text-emerald-500 font-bold text-xs sm:text-sm bg-emerald-500/10 self-start px-3 py-1 rounded-full border border-emerald-500/20">Step 4</span>
                            <p className="text-sm text-gray-300 m-0">Verify it worked by opening your computer's Terminal and typing the short commands below:</p>
                        </div>
                    </div>

                    <LocalCodeBlock
                        title="Terminal / Command Prompt"
                        language="bash"
                        code={`# Type this and press Enter. It should respond with a version number like "v20.9.0"
node -v

# Type this to verify your package manager installed successfully
npm -v`}
                    />

                    <h3 className="text-3xl font-extrabold text-white mt-16 mb-8 flex items-center gap-4">
                        <span className="bg-amber-500 text-black w-8 h-8 flex items-center justify-center rounded-full text-lg">2</span>
                        VS Code: The Supreme Editor
                    </h3>
                    <p>
                        You need a sophisticated text editor. <strong>Visual Studio Code (VS Code)</strong>, built by Microsoft, is free, open-source, beautifully designed, and used by 80% of professional developers. Go to <strong className="text-amber-400">code.visualstudio.com</strong> and download it.
                    </p>
                    <p>
                        VS Code out-of-the-box is great, but Extensions make it legendary. Open the Extensions tab (the four squares icon on the left) and install these immediately:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                        <div className="bg-black/20 border border-gray-800 p-6 rounded-xl hover:border-amber-500/30 transition-colors">
                            <strong className="text-emerald-400 text-lg block mb-1">Prettier - Code Formatter</strong>
                            <p className="text-sm text-gray-400 m-0">Never worry about ugly spacing again. Every time you hit save (Ctrl+S), Prettier automatically aligns and formats your code beautifully.</p>
                        </div>
                        <div className="bg-black/20 border border-gray-800 p-6 rounded-xl hover:border-amber-500/30 transition-colors">
                            <strong className="text-blue-400 text-lg block mb-1">ESLint</strong>
                            <p className="text-sm text-gray-400 m-0">A strict grammar teacher for your code. It constantly scans your writing and puts red squiggly lines underneath bugs before you even run the file.</p>
                        </div>
                        <div className="bg-black/20 border border-gray-800 p-6 rounded-xl hover:border-amber-500/30 transition-colors">
                            <strong className="text-purple-400 text-lg block mb-1">Live Server</strong>
                            <p className="text-sm text-gray-400 m-0">Creates a mini-server on your computer. Every time you save your HTML/JS files, it instantly refreshes your browser automatically.</p>
                        </div>
                        <div className="bg-black/20 border border-gray-800 p-6 rounded-xl hover:border-amber-500/30 transition-colors">
                            <strong className="text-rose-400 text-lg block mb-1">Material Icon Theme</strong>
                            <p className="text-sm text-gray-400 m-0">Simply makes your file explorer look stunning by adding beautiful, perfectly categorized icons next to all your files.</p>
                        </div>
                    </div>
                </Section>

                {/* 1.4 Writing and Running JavaScript */}
                <Section title="1.4 How to Actually Write & Run JS" icon={Code2} id="writing-running">
                    <p className="text-xl">
                        Your environment is set up. How do we actually run JavaScript code? In the professional world, there are absolutely <strong>three distinct ways</strong> to do this, depending on what exactly you are trying to achieve. 
                    </p>

                    <h3 className="text-2xl font-bold text-amber-500 mt-12 mb-4 border-l-4 border-amber-500 pl-4">Method A: The Browser DevTools (For Quick Experiments)</h3>
                    <p>
                        Did you know there is a secret hacker-like terminal hidden inside Google Chrome? Press <code>F12</code> (or Right Click anywhere on a page -{'>'} Inspect), and click the <strong>Console</strong> tab.
                    </p>
                    <p>
                        This is a Live JavaScript environment! It is called a REPL (Read-Evaluate-Print Loop). You can type raw JavaScript directly into this box, press Enter, and the browser will execute it instantly. Try opening it up right now on this page and typing <code>10 + 10</code>. It will spit out <code>20</code>. 
                    </p>
                    <p>
                        We use the DevTools console constantly to test quick logic, peek inside variables, and debug our live web applications.
                    </p>

                    <h3 className="text-2xl font-bold text-amber-500 mt-16 mb-4 border-l-4 border-amber-500 pl-4">Method B: Linking JS to HTML (For Frontend Web Apps)</h3>
                    <p>
                        If you are building a website (frontend), your JavaScript must attach to an HTML file so the browser knows to load it when a user visits your site. Just like we link CSS with a <code>&lt;link&gt;</code> tag, we link JavaScript with a <code>&lt;script&gt;</code> tag.
                    </p>
                    <p>
                        <strong>CRITICAL RULE:</strong> Your HTML document reads from top to bottom. If it hits a script tag, the entire website pauses rendering a blank white screen while downloading the JS. To prevent this, professional developers place the <code>&lt;script&gt;</code> tag in the <code>&lt;head&gt;</code> and add the holy <code>defer</code> keyword. 
                    </p>
                    <p>
                        <code>defer</code> tells the browser: <em>"Hey, download this script in the background so it's super fast, but DO NOT run it until the HTML bones are completely finished building."</em>
                    </p>

                    <LocalCodeBlock
                        title="index.html"
                        language="html"
                        code={`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Application</title>
    
    <!-- 🛑 BAD: This pauses the webpage from loading -->
    <script src="bad-script.js"></script>

    <!-- ✅ PRO: Downloads in parallel, waits patiently to run -->
    <script defer src="main.js"></script>
    
  </head>
  <body>
    <h1>Welcome to the App</h1>
  </body>
</html>`}
                    />

                    <h3 className="text-2xl font-bold text-amber-500 mt-16 mb-4 border-l-4 border-amber-500 pl-4">Method C: Running via Node.js (For Backend / CLI)</h3>
                    <p>
                        If you are building a server, a database migration script, or an automation bot, you don't even have an HTML file! You just have raw logic scripts.
                    </p>
                    <p>
                        To run pure logic files, you open your Terminal, type the word <code>node</code>, followed by the exact name of your file. Node grabs the V8 engine, reads the file, and executes your logic instantly in the black screen.
                    </p>
                    
                    <LocalCodeBlock
                        title="robot.js & VS Code Terminal"
                        language="javascript"
                        code={`// File: robot.js
const botName = "Optimus";
console.log(botName + " is online and ready.");

/* -----------------------------------------------
   ⬇️ In your Terminal, you type:
   $ node robot.js
   
   🖥️ The Terminal immediately spits out:
   Optimus is online and ready.
------------------------------------------------ */`}
                    />
                </Section>

                {/* 1.5 The Console & Debugging */}
                <Section title="1.5 The Console & Debugging Mastery" icon={Bug} id="console-debugging">
                    <p className="text-xl mb-8">
                        When you write code, it happens silently in the background. If a variable changes from 10 to 5, you have no way of seeing it with your physical eyes. You are flying a 747 airplane completely blindfolded.
                    </p>
                    <p>
                        The <code>console</code> object is your radar screen. It allows you to print messages, peek inside variables, and track exactly how your code is flowing step-by-step. 
                    </p>
                    <p>
                        Most beginner tutorials teach you <code>console.log()</code> and nothing else. But you are training to be a professional. The console possesses incredible superpower tools that will save you hundreds of hours tracking down confusing bugs.
                    </p>

                    <HighlightBox title="Interactive Lab: The Console Methods" type="note">
                        Interact with the buttons on the left simulator panel to fire different console commands. Watch how the built-in terminal handles styling and visualizing your data perfectly!
                    </HighlightBox>

                    <JsConsoleSimulator />

                    <h3 className="text-3xl font-extrabold text-white mt-16 mb-8">Advanced Debugging Trace Techniques</h3>
                    <p>Once you start building massive applications, printing out 50 logs gets messy. Here is how pros keep their radar clean:</p>

                    <LocalCodeBlock
                        title="pro-debugging.js"
                        language="javascript"
                        code={`// 1. GROUPING LOGS
// If you have a massive multi-step process, group them in a folder!
console.group('🔐 Secure Login Process');
  console.log('Validating user email format...');
  console.log('Connecting to database...');
  console.log('Checking password hashes...');
console.groupEnd(); // Closes the folder

// 2. TIMING PROCESSES
// Is your site slow? Put timers around code to see how long it takes!
console.time('Database Search');
for (let i = 0; i < 9999999; i++) { 
   // Searching huge database of customers... 
}
console.timeEnd('Database Search'); 
// ⏱️ Terminal prints: "Database Search: 14.5 milliseconds"

// 3. CONDITIONAL ALARMS (Assert)
// Only screams at you IF A RULE IS BROKEN. If the rule is fine, it stays totally silent.
const userStripeBalance = -500;
console.assert(userStripeBalance >= 0, "CRITICAL ALERT: User has negative money!!");
// 🚨 Prints bold red error because -500 is NOT greater than 0!`}
                    />

                    <p className="mt-12 p-8 rounded-2xl bg-[#0a0c10] border border-gray-800 text-gray-400 font-medium">
                        Beyond the console API, browser DevTools provides an advanced graphical debugger. You can literally pause time, freeze your code execution on line 42, and look exactly at what every value is holding at that exact millisecond. As we progress in this course, we will train you to use it flawlessly.
                    </p>
                </Section>

                {/* Footer Navigation */}
                <div className="mt-24 pt-12 border-t border-gray-800/60 text-center relative">
                    <p className="text-xs font-black text-amber-500/50 uppercase tracking-[0.3em] mb-12">
                        Module 1 Complete • TechSpread Curriculum
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center sm:justify-end gap-6 max-w-2xl mx-auto sm:mr-0 mt-8">
                        <Link to="/webdevelopment/javascript/variables" className="group flex items-center justify-between gap-4 p-4 sm:p-6 rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.1)] transition-all duration-300 w-full sm:w-auto">
                            <div className="text-left flex flex-col justify-center">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block group-hover:text-amber-500/80 transition-colors">Up Next</span>
                                <span className="text-gray-200 font-bold text-sm sm:text-base group-hover:text-white transition-colors">Module 2: Variables & Types</span>
                            </div>
                            <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-amber-400 group-hover:bg-amber-500/10 flex items-center justify-center border border-gray-800 group-hover:border-amber-500/30 transition-all duration-300">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </article>
    );
};

export default IntroToJS;
