import React, { useState } from "react";
import SEO from "../../components/SEO";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Download, 
  Terminal, 
  Monitor, 
  Apple, 
  Cpu, 
  AlertTriangle, 
  Settings, 
  HelpCircle,
  CheckCircle,
  Code,
  ChevronDown
} from "lucide-react";
import java_folder from "../../assets/Java_Image/java_i_ss_1.PNG";
import java_env from "../../assets/Java_Image/java_i_ss_2.PNG";
import java_path from "../../assets/Java_Image/java_i_ss_3.PNG";
import mac_terminal from "../../assets/Java_Image/java_i_ss_4.PNG"
const JavaInstallation = () => {
  // --- Helper Components ---

  // 1. Reusable Code Snippet Block
  const CodeBlock = ({ children, label }) => (
    <div className="my-5 rounded-lg overflow-hidden border border-gray-700 bg-gray-950/80 shadow-inner">
      {label && <div className="bg-gray-800/60 px-4 py-2 text-xs text-gray-300 font-mono border-b border-gray-700 font-semibold tracking-wide uppercase">{label}</div>}
      <pre className="p-5 overflow-x-auto text-sm text-green-400 font-mono leading-relaxed">
        <code>{children}</code>
      </pre>
    </div>
  );

  // 2. Reusable Screenshot Placeholder
  const ScreenshotPlaceholder = ({ label }) => (
    <div className="w-full max-w-4xl mx-auto my-10 border-2 border-dashed border-gray-700 bg-gray-800/20 rounded-xl p-12 flex flex-col items-center justify-center text-center transition-all hover:border-purple-500/50 hover:bg-gray-800/30 group cursor-pointer">
      <div className="bg-gray-800 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
        <Monitor className="text-gray-400 group-hover:text-purple-400" size={32} />
      </div>
      <p className="text-gray-300 font-medium text-lg">Image Placeholder</p>
      <p className="text-sm text-gray-500 mt-2 max-w-md">{label}</p>
      <span className="text-xs text-purple-400 mt-6 px-4 py-1.5 bg-purple-500/10 rounded-full border border-purple-500/20">
        Insert Screenshot Here
      </span>
    </div>
  );

  // 3. New Interactive FAQ Component (Fixes the "Not Working" issue)
  const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="bg-gray-800/30 rounded-xl border border-gray-700 overflow-hidden transition-colors hover:bg-gray-800/50">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
        >
          <h3 className="font-bold text-white flex gap-3 items-center">
            <HelpCircle className="text-red-400 min-w-[20px]" size={20} /> 
            {question}
          </h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="text-gray-400" size={20} />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-5 pb-5 text-sm text-gray-300 leading-relaxed border-t border-gray-700/50 pt-4 ml-2">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  // --- Main Render ---
  return (
    <div className="p-6 md:p-10 rounded-2xl bg-gray-900/80 backdrop-blur-xl shadow-2xl text-gray-300 leading-relaxed border border-gray-800">
      <SEO 
        title="How to Install Java JDK 25 (2026 Guide) - Windows, Linux, macOS"
        description="The ultimate 2026 guide to installing Java Development Kit (JDK) 25 LTS. Includes deep dives on JAVA_HOME, multiple version management, and troubleshooting for Windows, Linux, and macOS."
        keywords="install java 25, jdk 25 installation, download jdk 2026, java setup windows 11, java linux install, macos java home, openjdk 25, sdkman, brew install java"
        url="techspread.co.in/programming/java/installation"
      />

      {/* HEADER SECTION */}
      <div className="mb-12 border-b border-gray-800 pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider mb-6">
          <Cpu size={14} /> Updated for 2026
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent leading-tight">
          Java Development Kit (JDK) 25: The Complete Installation Guide
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl">
          Welcome to the definitive guide for setting up your Java development environment in 2026. 
          Whether you are building enterprise backends, Android applications, or experimenting with the latest features of <b>JDK 25 (LTS)</b>, 
          this tutorial covers every step with precision. We will walk you through downloading, installing, configuring environment variables, 
          and troubleshooting common issues on Windows, Linux, and macOS.
        </p>
      </div>

      {/* PREREQUISITES & ARCHITECTURE */}
      <section className="space-y-6 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
          <CheckCircle className="text-green-500" /> Prerequisites & System Check
        </h2>
        <p>
          Before we begin the installation, it is crucial to understand your system's architecture. In 2026, the divide between 
          <b> x64 (Intel/AMD)</b> and <b>ARM64 (Apple Silicon/Snapdragon)</b> is more prominent than ever. Installing the wrong version 
          can lead to performance degradation or complete failure to run.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-800/40 p-6 rounded-xl border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-2">For Windows Users</h3>
            <p className="text-sm">Go to <b>Settings &gt; System &gt; About</b>. Look for "System type". Most modern PCs are x64, but newer laptops may be ARM64.</p>
          </div>
          <div className="bg-gray-800/40 p-6 rounded-xl border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-2">For macOS Users</h3>
            <p className="text-sm">Click the <b>Apple Logo &gt; About This Mac</b>. If it says "Intel", you need x64. If it says "Apple M1/M2/M3/M4", you need ARM64 (AArch64).</p>
          </div>
        </div>
      </section>

      {/* DOWNLOAD SECTION */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Downloading JDK 25</h2>
        <p className="mb-6">
          Java is distributed by various vendors. For this guide, we focus on the <b>Oracle OpenJDK</b> builds, which are free, open-source, and production-ready. 
          JDK 25 is the Long Term Support (LTS) release for 2026, offering stability for years to come.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <a href="https://www.oracle.com/java/technologies/downloads/#jdk25-windows" target="_blank" rel="noreferrer" className="flex-1 px-8 py-5 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-bold hover:scale-[1.02] transition-transform flex items-center justify-center gap-3 shadow-lg shadow-orange-900/20">
            <Download size={24} /> 
            <div>
              <span className="block text-xs opacity-80 font-normal">Recommended</span>
              Download JDK 25 (LTS)
            </div>
          </a>
          <a href="https://jdk.java.net/" target="_blank" rel="noreferrer" className="flex-1 px-8 py-5 bg-gray-800 text-white rounded-xl font-bold hover:bg-gray-700 transition-transform flex items-center justify-center gap-3 border border-gray-700">
             <Settings size={24} />
             <div>
               <span className="block text-xs opacity-80 font-normal">Experimental</span>
               Early Access (JDK 26/27)
             </div>
          </a>
        </div>
      </section>

      {/* WINDOWS INSTALLATION DEEP DIVE */}
      <section className="mb-16 border-t border-gray-800 pt-10">
        <h2 className="text-3xl font-bold text-blue-400 mb-6 flex items-center gap-3">
          <Monitor size={32} /> Installation on Windows
        </h2>
        <p className="mb-6">
          Windows remains the most popular OS for enterprise Java development. We will use the installer method for simplicity, 
          but we will also manually verify environment variables to ensure your command line tools work flawlessly.
        </p>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Step 1: The Installation Wizard</h3>
            <p>
              Download the <code>.exe</code> file (e.g., <code>openjdk-25_windows-x64_bin.exe</code>). Run the installer with Administrator privileges. 
              While clicking "Next", pay attention to the destination folder. It is usually <code>C:\Program Files\Java\jdk-25</code>. 
              <b> Do not change this unless necessary</b>, as standard paths make troubleshooting easier.
            </p>
          </div>

          <img src={java_folder} alt="Screenshot of the Windows Installation Wizard destination folder selection" />

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Step 2: Configuring Environment Variables (Critical)</h3>
            <p className="mb-4">
              Installing Java isn't enough; you must tell Windows where to find it. This is done via the <code>JAVA_HOME</code> variable.
            </p>
            <ol className="list-decimal list-inside space-y-4 ml-2 text-gray-300">
              <li>Press the <b>Windows Key</b>, type <b>"Environment Variables"</b>, and select "Edit the system environment variables".</li>
              <li>In the dialog, click the <b>Environment Variables</b> button at the bottom right.</li>
              <li>Under the <b>System Variables</b> section (bottom half), click <b>New</b>.</li>
              <li>Enter the following details carefully:</li>
            </ol>
            <CodeBlock label="New System Variable Configuration">
              Variable Name: JAVA_HOME{"\n"}
              Variable Value: C:\Program Files\Java\jdk-25
            </CodeBlock>
            <p className="mt-4 mb-2">
              Next, we update the <code>Path</code> variable so you can type <code>java</code> in any command prompt window.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-300">
              <li>Find the <b>Path</b> variable in the "System Variables" list and select <b>Edit</b>.</li>
              <li>Click <b>New</b> on the right side.</li>
              <li>Type exactly: <code>%JAVA_HOME%\bin</code></li>
              <li>Click OK on all windows to save.</li>
            </ul>
          </div>

          <img src={java_env} alt="Screenshot of the Environment Variables window highlighting JAVA_HOME and Path" />
          <img src={java_path} alt="Screenshot of the Path variable configuration in Environment Variables" />
        </div>
      </section>

      {/* LINUX INSTALLATION DEEP DIVE */}
      <section className="mb-16 border-t border-gray-800 pt-10">
        <h2 className="text-3xl font-bold text-orange-400 mb-6 flex items-center gap-3">
          <Terminal size={32} /> Installation on Linux
        </h2>
        <p className="mb-6">
          Linux users have more flexibility. You can use package managers (apt, yum, dnf) or install manually via tarball. 
          Below, we cover the <b>manual tarball method</b> because it works on <i>any</i> distribution (Ubuntu, Debian, Fedora, Arch, Kali) 
          and guarantees you get the exact version you want.
        </p>

        <div className="space-y-8">
           <div>
            <h3 className="text-xl font-semibold text-white mb-3">Step 1: Extract and Move</h3>
            <p>
              Open your terminal. Navigate to your downloads folder and extract the archive. 
              We typically install Java software in the <code>/usr/lib/jvm</code> directory.
            </p>
            <CodeBlock label="Terminal Commands">
              # Create the directory if it doesn't exist{"\n"}
              sudo mkdir -p /usr/lib/jvm{"\n\n"}
              # Move into the directory{"\n"}
              cd /usr/lib/jvm{"\n\n"}
              # Extract the downloaded archive (Adjust filename as needed){"\n"}
              sudo tar -xvzf ~/Downloads/openjdk-25_linux-x64_bin.tar.gz
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Step 2: Update-Alternatives (The Right Way)</h3>
            <p>
              Linux systems often have multiple Java versions. The <code>update-alternatives</code> command manages which one is the default.
            </p>
            <CodeBlock label="Registering the New JDK">
              # Register java executable{"\n"}
              sudo update-alternatives --install /usr/bin/java java /usr/lib/jvm/jdk-25/bin/java 1{"\n\n"}
              # Register javac compiler{"\n"}
              sudo update-alternatives --install /usr/bin/javac javac /usr/lib/jvm/jdk-25/bin/javac 1
            </CodeBlock>
            <p className="mt-2">
              If you have older versions installed, run <code>sudo update-alternatives --config java</code> to select JDK 25 from the list.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Step 3: Permanent Environment Variables</h3>
            <p>To ensure <code>JAVA_HOME</code> is set every time you log in:</p>
            <CodeBlock label="Edit .bashrc or .zshrc">
              nano ~/.bashrc  # Use ~/.zshrc if you use Zsh
            </CodeBlock>
            <p>Add these lines to the bottom of the file:</p>
            <CodeBlock label="Add to file">
              export JAVA_HOME="/usr/lib/jvm/jdk-25"{"\n"}
              export PATH="$JAVA_HOME/bin:$PATH"
            </CodeBlock>
            <p>Save (Ctrl+O, Enter) and Exit (Ctrl+X), then reload:</p>
            <CodeBlock label="Terminal">
              source ~/.bashrc
            </CodeBlock>
          </div>
        </div>
      </section>

      {/* MACOS INSTALLATION DEEP DIVE */}
      <section className="mb-16 border-t border-gray-800 pt-10">
        <h2 className="text-3xl font-bold text-gray-100 mb-6 flex items-center gap-3">
          <Apple size={32} /> Installation on macOS
        </h2>
        <p className="mb-6">
          macOS development is seamless with Java, but the file structure can be confusing. 
          Apple places Java VMs in <code>/Library/Java/JavaVirtualMachines</code>. 
          We recommend using the official DMG installer for simplicity.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Step 1: The Installer</h3>
            <p>
              Download the <code>.dmg</code> file. Remember to choose <b>Arm 64</b> if you are on an M1/M2/M3/M4 Mac, or <b>x64</b> for Intel Macs. 
              Double-click the file and follow the package installer instructions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Step 2: Dynamic JAVA_HOME Setting</h3>
            <p>
              macOS includes a specialized tool called <code>/usr/libexec/java_home</code> that dynamically finds the installed JDK. 
              This is far superior to hardcoding paths.
            </p>
            <CodeBlock label="Terminal - Find Version">
              # List all installed versions{"\n"}
              /usr/libexec/java_home -V{"\n\n"}
              # Get the path for JDK 25 explicitly{"\n"}
              /usr/libexec/java_home -v 25
            </CodeBlock>
            <p>
              Now, let's add this to your shell profile so it sets automatically:
            </p>
            <CodeBlock label="~/.zshrc Configuration">
              # Open your config file{"\n"}
              nano ~/.zshrc{"\n\n"}
              # Add this line{"\n"}
              export JAVA_HOME=$(/usr/libexec/java_home -v 25){"\n\n"}
              # Save and reload{"\n"}
              source ~/.zshrc
            </CodeBlock>
          </div>
          
          <img src={mac_terminal} alt="Screenshot of macOS Terminal showing successful java -version output" />
        </div>
      </section>

      {/* ADVANCED: MULTIPLE VERSIONS */}
      <section className="mb-16 border-t border-gray-800 pt-10">
        <h2 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-3">
          <Settings /> Managing Multiple Java Versions
        </h2>
        <p className="mb-4">
          Professional developers often need to switch between JDK 17, 21, and 25 for different projects. 
          While you can change environment variables manually, using a version manager is highly recommended.
        </p>
        <div className="bg-gray-800/50 p-6 rounded-xl border-l-4 border-purple-500">
          <h3 className="font-bold text-white mb-2">Recommended Tool: SDKMAN! (Linux/macOS)</h3>
          <p className="text-sm mb-4">
            SDKMAN! is a tool for managing parallel versions of multiple Software Development Kits on most Unix-based systems.
          </p>
          <CodeBlock label="Install & Use SDKMAN">
            # Install SDKMAN{"\n"}
            curl -s "https://get.sdkman.io" | bash{"\n\n"}
            # List available Java versions{"\n"}
            sdk list java{"\n\n"}
            # Install JDK 25{"\n"}
            sdk install java 25-open{"\n\n"}
            # Switch versions instantly{"\n"}
            sdk use java 25-open
          </CodeBlock>
        </div>
      </section>

      {/* TROUBLESHOOTING & FAQ - FIXED INTERACTIVITY */}
      <section className="mb-16 border-t border-gray-800 pt-10">
        <h2 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-3">
          <AlertTriangle /> Troubleshooting & FAQ
        </h2>
        
        <div className="space-y-4">
          <FAQItem 
            question='Error: "javac is not recognized as an internal or external command"'
            answer={
              <span>
                This is the most common error on Windows. It means your <b>Path</b> variable is incorrect. 
                Go back to the Environment Variables settings and ensure <code>%JAVA_HOME%\bin</code> is listed in the Path. 
                Also, <b>restart your Command Prompt window</b>; changes don't apply to open windows.
              </span>
            }
          />

          <FAQItem 
            question='I installed JDK but "java -version" shows an old version.'
            answer={
              <span>
                This happens when an older version (like Oracle JDK 8 or a corporate version) is listed <i>before</i> your new JDK in the Path variable. 
                Move your <code>%JAVA_HOME%\bin</code> entry to the <b>top</b> of the Path list in Environment Variables.
              </span>
            }
          />

          <FAQItem 
            question='Should I uninstall older JDK versions?'
            answer={
              <span>
                It is good practice to keep LTS versions (like 17 and 21) if you work on older projects. 
                However, you can safely remove outdated non-LTS versions to save disk space.
              </span>
            }
          />
        </div>
      </section>

      {/* IDE INTEGRATION */}
      <section className="mb-12 border-t border-gray-800 pt-10">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Code /> Next Steps: IDE Setup
        </h2>
        <p className="mb-4">
          Now that Java is installed, you need an Integrated Development Environment (IDE) to write code efficiently.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
            <h4 className="font-bold text-white">IntelliJ IDEA</h4>
            <p className="text-sm text-gray-400 mt-1">The gold standard for Java development. Detects JDK automatically.</p>
          </li>
          <li className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
            <h4 className="font-bold text-white">VS Code</h4>
            <p className="text-sm text-gray-400 mt-1">Lightweight and powerful. Requires the "Extension Pack for Java".</p>
          </li>
        </ul>
      </section>

      {/* FINAL CTA */}
      {/* <div className="mt-16 bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-2xl p-8 border border-purple-500/30 text-center">
        <h3 className="text-3xl font-bold text-white mb-4">
          🚀 You Are Ready to Code!
        </h3>
        <p className="text-gray-300 max-w-2xl mx-auto mb-6">
          You have successfully navigated the installation of JDK 25. Your environment is robust, future-proof, and ready for action. 
          The next step in your journey is writing your first Java program.
        </p>
        <a href="/programming/java/hello-world" className="inline-block px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          Start Your First Lesson →
        </a>
      </div> */}
    </div>
  );
};

export default JavaInstallation;