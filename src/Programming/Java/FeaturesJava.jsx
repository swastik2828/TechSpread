import React from "react";
import { Lightbulb, Globe, Shield, Zap, Layers, Cpu, Cloud, Library } from "lucide-react";

const FeaturesJava = () => {
  const features = [
    {
      title: "🧠 Simple and Easy to Learn",
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
      desc: (
        <>
          Java is designed to be <b>simple and beginner-friendly</b>. Its syntax
          is clear, readable, and similar to English. Complex features like
          pointers and multiple inheritance were removed to make learning easier.
          <br />
          <br />
          <span className="text-gray-400 italic">
            Example: Writing{" "}
            <code className="bg-gray-800 px-2 py-1 rounded text-green-400">
              System.out.println("Hello World");
            </code>{" "}
            clearly tells the computer to print text — no confusion, no mess.
          </span>
        </>
      ),
    },
    {
      title: "🚗 Object-Oriented Programming (OOP)",
      icon: <Layers className="w-8 h-8 text-blue-400" />,
      desc: (
        <>
          Java models real-world things as <b>objects</b> with properties and
          actions. It supports OOP concepts like Encapsulation, Inheritance,
          Polymorphism, and Abstraction.
          <br />
          <br />
          <span className="text-gray-400 italic">
            Example: A <b>Car</b> object can have properties like color, model,
            and methods like <b>startEngine()</b> or <b>drive()</b>.
          </span>
        </>
      ),
    },
    {
      title: "🌍 Platform Independence (WORA)",
      icon: <Globe className="w-8 h-8 text-teal-400" />,
      desc: (
        <>
          Java’s motto is <b>“Write Once, Run Anywhere.”</b> Once you compile
          your Java code, it can run on any operating system that has a Java
          Virtual Machine (JVM) — no changes needed!
          <br />
          <br />
          <span className="text-gray-400 italic">
            Think of it like a universal charger that works everywhere.
          </span>
        </>
      ),
    },
    {
      title: "💪 Robust and Reliable",
      icon: <Shield className="w-8 h-8 text-green-400" />,
      desc: (
        <>
          Java handles errors gracefully using{" "}
          <b>exception handling</b> and automatically manages memory through{" "}
          <b>garbage collection</b>. It prevents crashes and memory leaks,
          ensuring stable applications.
          <br />
          <br />
          <span className="text-gray-400 italic">
            It’s like a car with airbags and auto-brakes — even when things go
            wrong, it keeps running safely.
          </span>
        </>
      ),
    },
    {
      title: "🔒 Secure by Design",
      icon: <Shield className="w-8 h-8 text-red-400" />,
      desc: (
        <>
          Java was built with <b>security</b> in mind. The JVM acts as a
          security guard — it verifies code before running, prevents access to
          unauthorized files, and isolates code in a <b>“sandbox.”</b>
          <br />
          <br />
          <span className="text-gray-400 italic">
            That’s why banking and financial systems trust Java.
          </span>
        </>
      ),
    },
    {
      title: "⚙️ Multithreaded",
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      desc: (
        <>
          Java can perform <b>multiple tasks simultaneously</b>. Each task runs
          in its own “thread,” making apps faster and smoother.
          <br />
          <br />
          <span className="text-gray-400 italic">
            Example: In a video game, one thread handles movement while another
            manages sound — all at once.
          </span>
        </>
      ),
    },
    {
      title: "🚀 High Performance",
      icon: <Zap className="w-8 h-8 text-orange-400" />,
      desc: (
        <>
          Java’s <b>Just-In-Time (JIT)</b> compiler converts bytecode into fast
          machine code during execution. This optimization makes modern Java
          apps perform at near-native speeds.
          <br />
          <br />
          <span className="text-gray-400 italic">
            Companies like Netflix and LinkedIn rely on Java to handle millions
            of requests per second.
          </span>
        </>
      ),
    },
    {
      title: "☁️ Distributed and Dynamic",
      icon: <Cloud className="w-8 h-8 text-cyan-400" />,
      desc: (
        <>
          Java easily connects programs across networks using{" "}
          <b>RMI and socket programming</b>. It can dynamically load code and
          add new features while running — ideal for cloud and web systems.
          <br />
          <br />
          <span className="text-gray-400 italic">
            Think of it like upgrading your app while it’s still live.
          </span>
        </>
      ),
    },
    {
      title: "📚 Rich Standard Library",
      icon: <Library className="w-8 h-8 text-indigo-400" />,
      desc: (
        <>
          Java comes with a <b>massive standard library</b> — thousands of ready
          classes for file handling, networking, collections, databases, and
          more.
          <br />
          <br />
          <span className="text-gray-400 italic">
            It’s like moving into a furnished apartment — you can start building
            immediately without reinventing the basics.
          </span>
        </>
      ),
    },
  ];

  return (
    <div className="p-6 md:p-10 rounded-2xl bg-gray-900/70 backdrop-blur-xl shadow-2xl">
      <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
        Understanding Java’s Features
      </h2>
      <p className="text-gray-300 text-lg text-center mb-10 max-w-3xl mx-auto">
        Java’s strength lies in its features — designed for simplicity,
        portability, and reliability. Let’s explore them one by one with
        beginner-friendly explanations and real-world examples.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-gray-800/70 hover:bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-lg transition duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-center gap-3 mb-3">
              {f.icon}
              <h3 className="text-xl font-semibold text-white">{f.title}</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center text-gray-400 text-base max-w-3xl mx-auto">
        <p>
          <b>Why these features matter:</b> They make Java the perfect language
          for building real-world applications — from Android apps to enterprise
          servers and cloud systems. Java’s simplicity, security, and power make
          it a timeless skill for every developer.
        </p>
      </div>
    </div>
  );
};

export default FeaturesJava;
