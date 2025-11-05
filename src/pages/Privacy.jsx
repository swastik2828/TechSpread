import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Privacy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_#071022,_#070616_40%)] text-slate-200 px-6 py-16 relative overflow-hidden">
      {/* Animated background gradients */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-400 blur-3xl mix-blend-screen" />
        <div className="absolute -bottom-40 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-pink-600 to-violet-600 blur-2xl mix-blend-screen" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl"
      >
        <h1 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Privacy Policy
        </h1>
        <p className="text-slate-300 mb-4 leading-relaxed">
          At <span className="font-semibold text-slate-100">TechSpread</span>, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our learning platform.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-slate-100">1. Information We Collect</h2>
        <p className="text-slate-300 mb-4">
          We may collect information such as your name, email address, and usage data to provide you with a better learning experience. All data is handled securely and used only for educational and communication purposes.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-slate-100">2. How We Use Your Information</h2>
        <p className="text-slate-300 mb-4">
          The data we collect helps us improve our content, personalize your learning experience, and keep you updated with new tutorials and features.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-slate-100">3. Data Security</h2>
        <p className="text-slate-300 mb-4">
          We use modern encryption and security measures to protect your data. However, please note that no online transmission is 100% secure, and we encourage users to safeguard their credentials.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-slate-100">4. Updates to This Policy</h2>
        <p className="text-slate-300 mb-4">
          We may update this Privacy Policy periodically to reflect changes in our practices or for operational, legal, or regulatory reasons. The latest version will always be available on this page.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-slate-100">5. Contact Us</h2>
        <p className="text-slate-300 mb-6">
          If you have any questions about our Privacy Policy, feel free to reach out to us at{" "}
          <a href="mailto:codesewa.in@gmail.com" className="text-cyan-400 hover:underline">
            codesewa.in@gmail.com
          </a>.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/")}
          className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-400 text-black font-semibold rounded-full shadow-md hover:shadow-lg transition-all"
        >
          ← Back to Home
        </motion.button>
      </motion.div>
    </div>
  );
}
