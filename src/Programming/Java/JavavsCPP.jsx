import React from "react";
import SEO from "../../components/SEO";
import JavaCompilerSimulator from "../../simulators/java/JavaCompilerSimulator"; // Renamed as requested
import CppArchitectureSimulator from "../../simulators/cpp/CppArchitectureSimulator";
import CodeBlock from "../../components/CodeBlock";

const JavavsCPP = () => {
  return (
    <div className="p-4 md:p-8 rounded-2xl bg-gray-900/60 backdrop-blur-xl shadow-xl text-gray-300 leading-relaxed">
      <SEO
        title="Java vs C++: A Clear Comparison"
        description="Understand the core differences between Java and C++. Learn about platform dependency, memory management, and when to use which language."
        keywords="java vs cpp, java vs c++, difference between java and c++, programming languages comparison, java performance, c++ performance"
        url="techspread.co.in/programming/java/javavscpp"
      />

      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
        Java vs C++: A Clear and Practical Comparison
      </h2>

      <p className="text-lg mb-6">
        Java and C++ are two of the most widely used programming languages in the
        world. While they may look similar at first glance—especially in
        syntax—they are built with very different goals in mind. Understanding
        these differences helps beginners choose the right language and helps
        experienced developers use each one effectively.
      </p>

      <p className="mb-10">
        Let’s break this down in a simple, no-nonsense way.
      </p>

      <section className="space-y-4 mb-10">
        <h3 className="text-2xl font-semibold text-yellow-400">
          Core Difference Between Java and C++
        </h3>
        <p>At a high level:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>
            Java focuses on portability, safety, and ease of development
          </li>
          <li>
            C++ focuses on performance, control, and system-level power
          </li>
        </ul>
        <p>Both are powerful, but they shine in different areas.</p>
      </section>

      <section className="space-y-4 mb-10">
        <h3 className="text-2xl font-semibold text-yellow-400">
          Key Differences Between Java and C++
        </h3>

        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-bold text-gray-200 mb-2">Platform Dependency</h4>
            <p className="mb-4">
              Java follows the principle “Write Once, Run Anywhere”. Java code is
              compiled into bytecode, which runs on the Java Virtual Machine (JVM).
              This allows the same program to run on Windows, Linux, or macOS
              without changes.
            </p>
            <p className="mb-4">
              C++ programs are compiled directly into machine code. This means the
              same code must be recompiled separately for each operating system.
            </p>
            <p className="font-semibold text-white">
              👉 Result: Java is platform-independent, C++ is platform-dependent.
            </p>
            
            {/* Interactive Simulators Side-by-Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                <div>
                    <JavaCompilerSimulator />
                </div>
                <div>
                    <CppArchitectureSimulator />
                </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-gray-200 mb-2">Compilation Process</h4>
            <p>
              Java uses both compilation and interpretation. First, source code is
              compiled into bytecode, then the JVM executes it.
            </p>
            <p className="mt-2">
              C++ is a purely compiled language. The compiler converts code directly
              into machine instructions.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-gray-200 mb-2">Memory Management</h4>
            <p>
              Java handles memory automatically using garbage collection. Developers
              don’t need to manually free memory.
            </p>
            <p className="mt-2">
              C++ gives full control to the developer. Memory is managed using new
              and delete.
            </p>
            <p className="mt-2 font-semibold text-white">
              👉 Java is safer for beginners, while C++ is more powerful for
              performance-critical applications.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-gray-200 mb-2">Object-Oriented Nature</h4>
            <p>
              Java is strictly object-oriented. Everything (except primitive types)
              revolves around classes and objects.
            </p>
            <p className="mt-2">
              C++ supports both procedural and object-oriented programming. You can
              write simple C-style programs or fully object-oriented code.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-gray-200 mb-2">Inheritance</h4>
            <p>
              Java allows only single inheritance using classes. Multiple
              inheritance is achieved using interfaces.
            </p>
            <p className="mt-2">
              C++ supports both single and multiple inheritance directly.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-gray-200 mb-2">Pointers</h4>
            <p>
              Java hides pointers from the developer to avoid memory misuse.
            </p>
            <p className="mt-2">
              C++ provides strong support for pointers, enabling low-level memory
              manipulation.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-gray-200 mb-2">Method and Operator Overloading</h4>
            <p>
              Java supports method overloading but does not allow operator
              overloading.
            </p>
            <p className="mt-2">
              C++ supports both method overloading and operator overloading.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-gray-200 mb-2">Thread Support</h4>
            <p>
              Java has built-in support for multithreading with a rich concurrency
              API.
            </p>
            <p className="mt-2">
              C++ relies on libraries (like &lt;thread&gt;) or third-party tools for
              threading.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-gray-200 mb-2">Global Scope</h4>
            <p>Java does not support global variables.</p>
            <p className="mt-2">
              C++ allows global variables and namespace-level scope.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-gray-200 mb-2">Hardware Interaction</h4>
            <p>Java stays away from direct hardware interaction.</p>
            <p className="mt-2">
              C++ works very close to hardware, making it ideal for system software,
              game engines, and embedded systems.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8 mb-10">
        <h3 className="text-2xl font-semibold text-yellow-400">
          Simple “Hello World” Examples
        </h3>

        <div>
          <h4 className="text-lg font-bold text-gray-300">C++ Example</h4>
          <CodeBlock
            language="cpp"
            title="C++ Hello World"
            code={`#include <iostream>\n\nusing namespace std;\nint main() {\n\n    cout << "Hello World";\n\n    return 0;\n\n}`}
            output="Hello World"
          />
        </div>

        <div>
          <h4 className="text-lg font-bold text-gray-300">Java Example</h4>
          <CodeBlock
            language="java"
            title="Java Hello World"
            code={`class Main {\n\n    public static void main(String[] args) {\n\n        System.out.print("Hello World");\n\n    }\n\n}`}
            output="Hello World"
          />
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
            When to Use C++
          </h3>
          <p className="mb-2">C++ is widely used in:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Game development</li>
            <li>Operating systems</li>
            <li>Embedded systems</li>
            <li>High-performance applications</li>
            <li>Compilers and database engines</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
            When to Use Java
          </h3>
          <p className="mb-2">Java is commonly used for:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Android app development</li>
            <li>Backend web applications</li>
            <li>Enterprise systems</li>
            <li>Cloud-based services</li>
            <li>Large-scale distributed applications</li>
          </ul>
        </div>
      </section>

      <div className="mt-10 bg-gradient-to-r from-purple-600 to-blue-600 p-[1px] rounded-xl">
        <div className="bg-gray-900 rounded-xl p-6">
          <h3 className="text-2xl font-semibold text-purple-400 mb-4">
            Final Thoughts
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            There is no “better” language—only the right tool for the job.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
            <li>
              Choose Java if you want portability, safety, and faster development.
            </li>
            <li>
              Choose C++ if you want maximum performance and low-level control.
            </li>
          </ul>
          <p className="text-gray-300 font-semibold">
            At TechSpread, we encourage learning both—because great developers
            don’t limit themselves to one language, they master concepts and
            apply them wherever needed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JavavsCPP;