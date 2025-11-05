import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
  const tutorialTopics = [
    "Web Development",
    "Programming",
    "Computer Fundamentals",
    "Database & SQL",
    "Data Science",
    "AI & ML",
  ];

  return (
    <footer className="bg-black text-gray-400 pt-16">
      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pt-16 pb-8 px-6 md:px-16">
        {/* Brand / About */}
        <div>
          <h3 className="text-gray-200 font-semibold text-lg mb-4">TechSpread</h3>
          <p className="text-gray-400 leading-relaxed">
            Structured computer science tutorials, beginner-friendly and practical. Learn, apply, and grow your skills.
          </p>
        </div>

        {/* Tutorials */}
        <div>
          <h3 className="text-gray-200 font-semibold text-lg mb-4">Tutorials</h3>
          <ul className="space-y-2">
            {tutorialTopics.map((topic, i) => (
              <li key={i}>
                <a
                  href={`/tutorial/${topic.toLowerCase().replace(/\s/g, "")}`}
                  className="hover:text-[#8B5CF6] transition-all duration-200"
                >
                  {topic}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-gray-200 font-semibold text-lg mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="/privacy" className="hover:text-[#8B5CF6] transition-all duration-200">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-[#8B5CF6] transition-all duration-200">Terms & Conditions</a></li>
            {/* <li><a href="/faq" className="hover:text-[#8B5CF6] transition-all duration-200">FAQs</a></li>
            <li><a href="/help" className="hover:text-[#8B5CF6] transition-all duration-200">Help</a></li> */}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-gray-200 font-semibold text-lg mb-4">Connect</h3>
          <div className="flex items-center space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"
               className="text-gray-400 hover:text-[#8B5CF6] transition duration-200 text-2xl">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"
               className="text-gray-400 hover:text-[#8B5CF6] transition duration-200 text-2xl">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer"
               className="text-gray-400 hover:text-[#8B5CF6] transition duration-200 text-2xl">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer"
               className="text-gray-400 hover:text-[#8B5CF6] transition duration-200 text-2xl">
              <i className="bi bi-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 text-center py-4 text-gray-500 text-sm">
        © 2025 TechSpread.
      </div>
    </footer>
  );
}
