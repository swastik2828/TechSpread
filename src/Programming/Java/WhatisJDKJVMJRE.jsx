import React from "react";
import JVM_JDK_JRE from "../../assets/Java_Image/JVM_JDK_JRE_Architecture2.jpeg";
import SEO from "../../Components/SEO";

const WhatisJDKJVMJRE = () => {
  return (
    <div className="p-4 md:p-8 rounded-2xl bg-gray-900/60 backdrop-blur-xl shadow-xl text-gray-300 leading-relaxed">
      <SEO 
        title="Difference between JDK, JRE, and JVM"
        description="Understand the core components of Java architecture: Java Development Kit (JDK), Java Runtime Environment (JRE), and Java Virtual Machine (JVM)."
        keywords="jdk vs jre vs jvm, java architecture, java development kit, java virtual machine, how java works"
        url="/programming/java/jdk-jre-jvm"
      />
      <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
        The Beginner's Guide to Java: Understanding JDK, JRE, and JVM
      </h2>

      <section className="space-y-4 mb-10">
        <h3 className="text-2xl font-semibold text-yellow-400">Introduction</h3>
        <p className="text-lg">
          Java is one of the most popular programming languages in the world. If
          you’re new to it, terms like JDK, JRE, and JVM might seem confusing.
          Don’t worry! This guide will break them down in simple terms and show
          how they work together.
        </p>
      </section>

      {/* --- Diagram Space --- */}
      <div>
        <img
          src={JVM_JDK_JRE}
          alt="JVM, JDK, and JRE Architecture"
          className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg my-10 object-contain"
        />
        <p className="text-center text-sm text-gray-500 mb-10">
          Visual representation of how JDK, JRE, and JVM interact.
        </p>
      </div>

      <section className="space-y-4 mb-10">
        <h3 className="text-2xl font-semibold text-yellow-400">
          Types of Software
        </h3>
        <p>Java software is broadly divided into two types:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>
            <b className="text-white">JDK</b> - Java Development Kit
          </li>
          <li>
            <b className="text-white">JRE</b> - Java Runtime Environment
          </li>
        </ul>
      </section>

      <section className="space-y-6 mb-12">
        <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
          Breaking Down the Acronyms
        </h2>

        {/* 1. JDK */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-yellow-400">
            1. JDK (Java Development Kit)
          </h3>
          <p>
            The Java Development Kit (JDK) is the foundation for anyone looking
            to develop Java programs. It's essentially a toolkit that contains
            everything you need to write, compile, and debug Java code.
          </p>
          <p>
            The JDK contains both the <b>Compiler</b> and the <b>JVM</b>. So,
            using the JDK, we can develop, compile, and execute new Java
            applications, as well as modify existing ones.
          </p>
          
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mt-4">
            <h4 className="text-xl font-semibold text-orange-300 mb-3">
              Key Components of JDK
            </h4>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <b className="text-white">Java Compiler (javac):</b> Converts
                your human-readable Java code (source code) into bytecode.
                Bytecode is an intermediate language understood by the JVM.
                <br />
                <span className="text-sm text-gray-400 ml-6 block mt-1">
                  Example: When you write <code>HelloWorld.java</code>, the
                  compiler generates <code>HelloWorld.class</code>.
                </span>
              </li>
              <li>
                <b className="text-white">Java Runtime Environment (JRE):</b>{" "}
                Included within the JDK. It allows you to run Java programs and
                contains the JVM and libraries required for execution.
              </li>
              <li>
                <b className="text-white">Development Tools:</b> Tools like the
                Java Debugger (<code>jdb</code>), Java Archive Tool (
                <code>jar</code>), and other utilities help developers test and
                package applications.
              </li>
            </ul>
          </div>
        </div>

        {/* 2. JRE */}
        <div className="space-y-4 pt-6">
          <h3 className="text-2xl font-semibold text-yellow-400">
            2. JRE (Java Runtime Environment)
          </h3>
          <p>
            <b>Purpose:</b> For running Java applications. It provides the runtime
            environment.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <b>JVM:</b> To execute Java bytecode.
            </li>
            <li>
              <b>Libraries:</b> Set of libraries and files required to run Java
              applications.
            </li>
          </ul>
          <p>
            <b>Users:</b> End-users who only run Java programs.
          </p>
          <p className="italic text-gray-400 border-l-4 border-yellow-500 pl-4 py-2 bg-gray-800/30 rounded-r">
            Example: If you have a Java application like Minecraft, you only
            need the JRE to play it.
          </p>
        </div>

        {/* 3. JVM */}
        <div className="space-y-4 pt-6">
          <h3 className="text-2xl font-semibold text-yellow-400">
            3. JVM (Java Virtual Machine)
          </h3>
          <p>
            <b>Purpose:</b> The engine that executes Java bytecode. It converts
            bytecode into machine-specific instructions.
          </p>
          
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mt-4">
            <h4 className="text-xl font-semibold text-orange-300 mb-3">
              Key Functions
            </h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Loads Java class files.</li>
              <li>Verifies bytecode to ensure security.</li>
              <li>Executes the program.</li>
              <li>Provides garbage collection for memory management.</li>
            </ul>
          </div>

          <p className="mt-4">
            <b>Users:</b> Both developers and end-users rely on the JVM, as it
            ensures the application runs.
          </p>
          <p className="italic text-gray-400 border-l-4 border-yellow-500 pl-4 py-2 bg-gray-800/30 rounded-r">
            Example: The JVM ensures your Java program works on any operating
            system, adhering to the "Write Once, Run Anywhere" principle.
          </p>
        </div>
      </section>

      {/* --- Space for additional diagrams if needed --- */}
      {/* <div className="w-full h-32 border-2 border-dashed border-gray-700 rounded-xl flex items-center justify-center mb-10 bg-gray-800/20">
        <span className="text-gray-500">Space for additional flow diagrams</span>
      </div> */}

      {/* Note Section */}
      <div className="mt-10 bg-gradient-to-r from-purple-600 to-blue-600 p-[1px] rounded-xl">
        <div className="bg-gray-900 rounded-xl p-6">
          <h3 className="text-2xl font-semibold text-purple-400 mb-4">
            📝 NOTE
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-300">
            <li>
              JVM is a subset of JRE, and JRE is a subset of JDK.
            </li>
            <li>
              When we install JDK, JRE is also installed automatically.
            </li>
            <li>
              JRE Software is available as a separate pack so we can install JRE
              alone if we only need to run applications.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhatisJDKJVMJRE;