import React from "react";
import SEO from "../../components/SEO";
import javaLogo from "../../assets/Java_Image/JavaLogoOld.PNG";
const HistoryofJava = () => {
  return (
    <div className="p-4 md:p-8 rounded-2xl bg-gray-900/60 backdrop-blur-xl shadow-xl space-y-6">
      <SEO 
        title="History of Java | From Oak to Green Team"
        description="Explore the complete history of Java. Learn about James Gosling, the Green Team, the Oak language, and how Java revolutionized the internet."
        keywords="history of java, james gosling, green team, oak programming language, java versions timeline"
        url="/programming/java/history"
      />
      {/* Title */}
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center">
        The Birth of Java: A Journey From Oak to Global Phenomenon
      </h2>

      {/* Intro */}
      <p className="text-gray-300 leading-relaxed text-lg">
        Java's story begins not with grand ambitions to revolutionize programming,
        but with a practical problem that needed solving. In June 1991, a small
        team at Sun Microsystems — <b>James Gosling</b>, <b>Mike Sheridan</b>, and{" "}
        <b>Patrick Naughton</b> — started a project that would eventually change
        the technology landscape forever. Understanding this history helps
        beginners appreciate why Java was designed the way it is and why certain
        features exist.
      </p>

      {/* Green Project */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-blue-400">
          🌱 The Green Project (1991–1992)
        </h3>
        <p className="text-gray-300 leading-relaxed">
          The origin of Java lies in what was called the <b>Green Project</b>,
          an initiative at Sun Microsystems. The goal wasn’t to create a new
          language but to develop software for consumer electronics and
          interactive TV systems. However, languages like C and C++ were too
          complex and platform-dependent for these devices, forcing developers to
          rewrite code for each platform — a frustrating limitation.
        </p>
        <p className="text-gray-300">
          James Gosling realized they needed a language that could <b>write once
          and run anywhere</b> — a concept that became Java’s defining trait.
        </p>
      </section>

      {/* Oak */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-blue-400">
          🌳 Oak: The First Name (1992)
        </h3>
        <p className="text-gray-300 leading-relaxed">
          In 1992, the team created a prototype of their new language and named
          it <b>Oak</b>, inspired by the oak tree outside Gosling’s office.
          Oak was object-oriented, secure, robust, and platform-independent. They
          even built a prototype device called <b>Star7</b>, featuring a
          graphical interface and an animated assistant named <b>Duke</b> — who
          later became Java’s mascot.
        </p>
      </section>


      {/* Internet Revolution */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-blue-400">
          🌐 The Internet Revolution (1993–1994)
        </h3>
        <p className="text-gray-300 leading-relaxed">
          By the mid-90s, the internet was booming. The team realized their
          platform-independent language was ideal for web applications — where
          software needed to run seamlessly across Windows, Mac, and Unix. But
          there was a problem: another company already owned the name “Oak.”
        </p>
      </section>

      {/* From Oak to Java */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-blue-400">
          ☕ From Oak to Java (1994–1995)
        </h3>
        <p className="text-gray-300 leading-relaxed">
          During brainstorming sessions, the team drank countless cups of coffee
          from Indonesia’s <b>Java</b> island — and the name stuck. It was catchy,
          energizing, and symbolized the liveliness of the language. On{" "}
          <b>May 23, 1995</b>, Sun Microsystems officially introduced Java at the
          SunWorld conference, showcasing the revolutionary <b>HotJava browser</b>
          — capable of running interactive applets within web pages.
        </p>
      </section>

      {/* Java 1.0 */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-blue-400">
          🚀 Java 1.0: The Official Release (1996)
        </h3>
        <p className="text-gray-300 leading-relaxed">
          On <b>January 23, 1996</b>, Java 1.0 (JDK 1.0) was officially released,
          introducing the world to <b>“Write Once, Run Anywhere.”</b> Developers
          could now build software that ran on any platform with a JVM. Its
          simplicity, reliability, and free availability fueled a programming
          revolution across the web.
        </p>
      </section>

      {/* Evolution */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-blue-400">
          ⚙️ Rapid Evolution (1997–1998)
        </h3>
        <p className="text-gray-300 leading-relaxed">
          Java evolved quickly — with <b>Java 1.1</b> adding inner classes,
          JDBC, and JavaBeans. In <b>1998</b>, the release of <b>Java 2</b> was a
          major leap, introducing the Swing toolkit, Collections Framework, and
          new editions (J2SE, J2EE, J2ME) for different platforms.
        </p>
      </section>

      {/* Image placeholder */}
      <div>
              <img
        src={javaLogo}
        alt="Java Old Logo"
        className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg my-10 object-contain"
      />
            </div>

      {/* Golden Age */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-blue-400">
          🏆 The Golden Age (2000–2006)
        </h3>
        <p className="text-gray-300 leading-relaxed">
          The early 2000s were Java’s golden years. Versions 1.3 to 1.5 brought
          performance gains, generics, metadata annotations, and enhanced
          for-loops. Java 6 (2006) introduced better performance and scripting
          support, solidifying its dominance in enterprise software and Android
          development.
        </p>
      </section>

      {/* Oracle & Modern Era */}
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-blue-400">
          ☀️ Oracle Acquisition & Open Source Era (2007–2010)
        </h3>
        <p className="text-gray-300 leading-relaxed">
          In 2007, Java was open-sourced under the <b>GNU GPL</b>, empowering
          developers worldwide. Three years later, <b>Oracle</b> acquired Sun
          Microsystems, taking over Java’s stewardship and continuing its
          evolution.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-blue-400">
          ⚡ Modern Java (2011–Present)
        </h3>
        <p className="text-gray-300 leading-relaxed">
          Java 7 introduced try-with-resources and parallel programming, while
          Java 8 brought functional programming via <b>lambda expressions</b> and
          the <b>Stream API</b>. Today, with versions like Java 17 and Java 21,
          it remains one of the most powerful and widely used languages powering
          everything from Android to cloud computing.
        </p>
      </section>

      {/* Why history matters */}
      <section className="bg-gradient-to-r from-cyan-700/20 to-blue-700/20 rounded-xl p-5 mt-6 border border-cyan-500/20">
        <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
          💡 Why This History Matters for Beginners
        </h3>
        <p className="text-gray-300 leading-relaxed">
          Java’s history teaches a vital lesson: it was born from real-world
          challenges, not theory. Its platform independence came from consumer
          electronics needs, and its security focus grew from web applets. Every
          feature — from the JVM to garbage collection — was a practical solution
          to real problems.
        </p>
        <p className="text-gray-300 mt-3">
          Java’s journey from a failed TV project to one of the most influential
          languages in history shows how adaptability and community-driven
          evolution create lasting technology.
        </p>
      </section>
    </div>
  );
};

export default HistoryofJava;
