import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] text-gray-200 px-6 py-16 md:px-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <Link
          to="/"
          className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Terms & Conditions
        </h1>

        <p className="text-gray-400 mb-8">
          Welcome to our learning platform. By accessing or using our website, you agree to comply with these Terms and Conditions. Please read them carefully before using our services.
        </p>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">1. Acceptance of Terms</h2>
            <p className="text-gray-400 leading-relaxed">
              By accessing this website, you agree to be bound by these terms and conditions. If you do not agree with any part, you should stop using the site immediately.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">2. Use of the Platform</h2>
            <p className="text-gray-400 leading-relaxed">
              You agree to use our platform solely for educational and lawful purposes. Any misuse, including sharing of offensive content or unauthorized access attempts, may lead to termination of your account.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">3. Intellectual Property</h2>
            <p className="text-gray-400 leading-relaxed">
              All content, including courses, videos, and materials, are the intellectual property of this platform. You may not copy, distribute, or modify any content without prior permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">4. Account Responsibility</h2>
            <p className="text-gray-400 leading-relaxed">
              You are responsible for maintaining the confidentiality of your account credentials and ensuring all activities under your account comply with our terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">5. Limitation of Liability</h2>
            <p className="text-gray-400 leading-relaxed">
              We strive to provide accurate and up-to-date content, but we are not liable for any errors, interruptions, or losses arising from using our website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">6. Modifications to Terms</h2>
            <p className="text-gray-400 leading-relaxed">
              We may update these terms at any time without prior notice. Continued use of our platform after updates constitutes your acceptance of the revised terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">7. Contact Us</h2>
            <p className="text-gray-400 leading-relaxed">
              If you have any questions or concerns regarding these terms, please contact us through our official support channels.
            </p>
          </div>
        </section>

        <p className="text-gray-500 text-sm mt-10 text-center">
          © {new Date().getFullYear()} TechSpread. All Rights Reserved.
        </p>
      </motion.div>
    </div>
  );
}
