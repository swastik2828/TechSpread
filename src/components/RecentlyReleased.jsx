import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Zap } from "lucide-react";

export default function RecentlyReleased() {
    const RECENT_LESSONS = [
        {
            title: "Mastering the 'this' Keyword",
            path: "/webdevelopment/javascript/the-golden-rule",
            desc: "Understand the 'this' keyword in JavaScript. Stop asking where the function was written, and start asking how it was called.",
            category: "Web Development",
            isNew: true
        },
        {
            title: "CSS Borders & Shadows",
            path: "/webdevelopment/css/borders-shadows/anatomy",
            desc: "Master the CSS Box Model, accessibility with outlines, and photorealistic depth using box-shadow and filter: drop-shadow().",
            category: "Web Development",
            isNew: false
        },
        {
            title: "Mastering CSS Backgrounds",
            path: "/webdevelopment/css/backgrounds/intro",
            desc: "Master CSS backgrounds: solid colors, images, gradients, layering, and the gradient text trick.",
            category: "Web Development",
            isNew: false
        }
    ];

  return (
    <section className="relative bg-[#0f172a] border-b border-gray-800/50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-purple-400" />
            Recently Released
          </h2>

          <Link
            to="/tutorial"
            className="text-sm text-purple-400 hover:text-purple-300 font-medium hidden sm:block"
          >
            View all lessons →
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RECENT_LESSONS.map((lesson, idx) => (
            <motion.article
              key={lesson.path}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[#1e293b]/50 border border-gray-700/50 rounded-xl p-5 hover:bg-[#1e293b] hover:border-purple-500/30 transition-all duration-300"
            >
              <Link to={lesson.path} className="block h-full">
                <div className="flex justify-between items-start mb-2">
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded ${lesson.category.includes("AI")
                      ? "bg-blue-900/40 text-blue-300 border border-blue-800/50"
                      : lesson.category.includes("Web Development")
                        ? "bg-teal-900/40 text-teal-300 border border-teal-800/50"
                        : "bg-orange-900/40 text-orange-300 border border-orange-800/50"
                      }`}
                  >
                    {lesson.category}
                  </span>

                  {lesson.isNew && (
                    <span className="flex items-center gap-1 text-xs font-bold text-green-400 bg-green-900/20 px-2 py-1 rounded-full border border-green-900/50">
                      <Zap size={12} fill="currentColor" /> NEW
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-gray-100 group-hover:text-purple-400 transition-colors mb-2">
                  {lesson.title}
                </h3>
                <p className="text-sm text-gray-400 line-clamp-2">
                  {lesson.desc}
                </p>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Link
            to="/tutorial"
            className="text-sm text-purple-400 hover:text-purple-300 font-medium"
          >
            View all lessons →
          </Link>
        </div>
      </div>
    </section>
  );
}
