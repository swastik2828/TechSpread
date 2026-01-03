import React from "react";
import SEO from "../../components/SEO";
import What_is_java from "../../assets//Java_Image/What_is_java.png";
import JVM_JDK_JRE from "../../assets/Java_Image/JVM_JDK_JRE_Architecture.png";
import OOPS from "../../assets/Java_Image/OOPS_Architecture.png";
const WhatisJava = () => {
  return (
     <div className="p-4 md:p-8 rounded-2xl bg-gray-900/60 backdrop-blur-xl shadow-xl text-gray-300 leading-relaxed">
      <SEO 
        title="What is Java? Introduction & Basics"
        description="Learn what Java is, why it is platform-independent, and its core Object-Oriented Programming (OOP) concepts. A perfect start for beginners."
        keywords="what is java, java programming introduction, object oriented programming, platform independence, java for beginners"
        url="/programming/java/whatisjava"
      />
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
        What is Java?
      </h2>

      <p className="text-lg mb-6">
        Java is a high-level, object-oriented programming language that allows you
        to write instructions for computers to execute specific tasks. Think of it
        as a way to communicate with computers using a structured language that
        both humans can read and machines can understand. Java is used to build
        various types of applications including mobile apps (especially Android),
        desktop software, web applications, games, and enterprise systems.
      </p>

      {/* --- Space for Image 1 --- */}
      <div>
        <img
  src={What_is_java}
  alt="Whar is Java"
  className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg my-10 object-contain"
/>
      </div>

      <section className="space-y-4 mb-10">
        <h3 className="text-2xl font-semibold text-yellow-400">
          Understanding Java as a Programming Language
        </h3>
        <p>
          Java is considered a high-level language, which means it uses syntax and
          commands that are closer to human language rather than machine code. This
          makes it much easier for beginners to learn and understand compared to
          low-level languages. When you write code in Java, you're essentially
          writing a set of instructions that tell the computer what to do, step by
          step.
        </p>
      </section>

      <section className="space-y-4 mb-10">
        <h3 className="text-2xl font-semibold text-yellow-400">
          The Core Concept: Object-Oriented Programming (OOP)
        </h3>
        <p>
          Java follows an object-oriented programming (OOP) approach, which is one
          of its fundamental characteristics. In this paradigm, everything is
          viewed as an "object" – think of objects like real-world entities with
          properties and behaviors. For example, if you're building a program about
          cars, a car would be an object with properties (color, model, speed) and
          behaviors (start, stop, accelerate). This approach helps organize code
          into modular, reusable components that make programs easier to understand
          and maintain.
        </p>
      </section>

      <div>
        <img
  src={OOPS}
  alt="OOPs Architecture"
  className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg my-10 object-contain"
/>
      </div>

      <section className="space-y-4 mb-10">
        <h3 className="text-2xl font-semibold text-yellow-400">
          Write Once, Run Anywhere (WORA)
        </h3>
        <p>
          One of Java's most powerful concepts is its platform independence, often
          described as "Write Once, Run Anywhere". This means you can write your
          Java code on a Windows computer, and the same code can run on Mac, Linux,
          or any other operating system without needing to rewrite it. This is made
          possible through the Java Virtual Machine (JVM), which acts as a
          translator between your code and the computer's hardware.
        </p>
      </section>

      <section className="space-y-4 mb-10">
        <h3 className="text-2xl font-semibold text-yellow-400">
          How Java Works: The Three Main Components
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <b>Java Virtual Machine (JVM):</b> The engine that executes Java programs by
            providing a platform-independent environment.
          </li>
          <li>
            <b>Java Runtime Environment (JRE):</b> Includes the JVM and libraries needed to
            run Java applications.
          </li>
          <li>
            <b>Java Development Kit (JDK):</b> Includes the JRE plus tools like compilers and
            debuggers to develop Java programs.
          </li>
        </ul>
      </section>

      {/* --- Space for Image 3 --- */}
      <div>
        <img
  src={JVM_JDK_JRE}
  alt="JVM, JDK, and JRE Architecture"
  className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg my-10 object-contain"
/>
      </div>

      <section className="space-y-4 mb-10">
        <h3 className="text-2xl font-semibold text-yellow-400">
          The Compilation Process
        </h3>
        <p>
          When you write Java code, you create a file with human-readable
          instructions. Before execution, this code must be compiled into bytecode
          — an intermediate form that the JVM understands. This bytecode, stored in
          a <code>.class</code> file, can then be executed on any system with a JVM.
          This two-step process (compile to bytecode, then execute on JVM) is what
          enables Java's platform independence.
        </p>
      </section>

      <section className="space-y-4 mb-10">
        <h3 className="text-2xl font-semibold text-yellow-400">
          Why Java is Beginner-Friendly
        </h3>
        <p>
          Java’s syntax is clear and expressive, making it beginner-friendly. It
          offers flexibility in formatting, has vast documentation, and a global
          developer community that supports learners at every stage.
        </p>
      </section>

      <section className="space-y-4 mb-10">
        <h3 className="text-2xl font-semibold text-yellow-400">
          Real-World Applications
        </h3>
        <p>
          Java powers over 3 billion devices — from Android smartphones to web
          servers, enterprise software, cloud platforms, and even IoT devices. It’s
          also widely used in AI, machine learning, and big data analytics.
        </p>
      </section>

      <section className="space-y-4 mb-10">
        <h3 className="text-2xl font-semibold text-yellow-400">
          Security and Reliability
        </h3>
        <p>
          Java emphasizes security and robustness through features like automatic
          memory management, garbage collection, and exception handling. These help
          prevent errors and keep applications stable.
        </p>
      </section>

      <section className="space-y-4 mb-10">
        <h3 className="text-2xl font-semibold text-yellow-400">
          Performance and Multithreading
        </h3>
        <p>
          Java supports multithreading — allowing programs to perform multiple
          tasks simultaneously. This makes it ideal for performance-heavy and
          real-time applications like gaming or financial systems.
        </p>
      </section>

      <section className="space-y-4 mb-10">
        <h3 className="text-2xl font-semibold text-yellow-400">
          Rich Ecosystem
        </h3>
        <p>
          Java’s extensive standard library and ecosystem of open-source frameworks
          allow developers to build applications faster. It offers tools for
          networking, database handling, file I/O, and much more.
        </p>
      </section>

      <div className="mt-10 bg-gradient-to-r from-purple-600 to-blue-600 p-[1px] rounded-xl">
        <div className="bg-gray-900 rounded-xl p-6">
          <h3 className="text-2xl font-semibold text-purple-400 mb-4">
            🚀 Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>
              Java is a high-level, object-oriented language with platform
              independence.
            </li>
            <li>
              Write Once, Run Anywhere — Java runs on all platforms via JVM.
            </li>
            <li>
              OOP makes code modular, reusable, and organized.
            </li>
            <li>
              JVM, JRE, and JDK are the three pillars of Java development.
            </li>
            <li>
              Beginner-friendly with huge community and documentation.
            </li>
            <li>
              Secure and reliable with automatic memory management.
            </li>
            <li>
              Powers billions of devices — from Android to enterprise servers.
            </li>
            <li>
              Multithreading boosts performance and efficiency.
            </li>
            <li>
              Rich ecosystem accelerates development with pre-built libraries.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhatisJava;
