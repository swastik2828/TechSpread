import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO.jsx";
import {
  Code,
  Globe,
  Database,
  Cpu,
  BookOpen,
  Brain,
} from "lucide-react";
import Header from "../layout/Header"
import Footer from "../layout/Footer"
import { div } from "framer-motion/client";
const Tutorial = () => {
  const navigate = useNavigate();

  const sections = [
    {
      name: "Programming",
      icon: <Code size={40} />,
      desc: "Master programming languages like Java, C++, Python and more with step-by-step tutorials.",
      color: "from-purple-500 to-indigo-500",
      route: "/programming",
    },
    {
      name: "Web Development",
      icon: <Globe size={40} />,
      desc: "Learn HTML, CSS, JavaScript, React, and build real-world modern web applications.",
      color: "from-blue-500 to-cyan-500",
      route: "/tutorials/webdevelopment",
    },
    {
      name: "Computer Fundamentals",
      icon: <BookOpen size={40} />,
      desc: "Understand the core principles of computing, operating systems, and networking.",
      color: "from-pink-500 to-rose-500",
      route: "/tutorials/computerfundamentals",
    },
    {
      name: "Data Science",
      icon: <Database size={40} />,
      desc: "Dive into data analysis, visualization, and Python-based data science projects.",
      color: "from-emerald-500 to-teal-500",
      route: "/tutorials/datascience",
    },
    {
      name: "Database & SQL",
      icon: <Cpu size={40} />,
      desc: "Learn how to design, manage, and query databases efficiently using SQL and NoSQL.",
      color: "from-yellow-500 to-orange-500",
      route: "/tutorials/database",
    },
    {
      name: "AI / ML",
      icon: <Brain size={40} />,
      desc: "Explore Artificial Intelligence, Machine Learning, and neural networks practically.",
      color: "from-red-500 to-purple-500",
      route: "/tutorials/aiml",
    },
  ];

  return (
    <div>
      <Header />
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white py-16 px-6 md:px-20">
      <SEO 
        title="Free Coding Tutorials & Learning Paths"
        description="Start your tech journey with our free, structured tutorials. Learn Web Development, Python, Java, DSA, and Database Management from scratch."
        keywords="free coding tutorials, learn programming, web development course, dsa tutorials, computer science for beginners"
        url="/tutorial"
      />
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
      >
        Explore Tutorials
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center text-gray-400 text-lg max-w-3xl mx-auto mb-12"
      >
        Learn step-by-step through curated tutorials designed for every level — 
        from fundamentals to advanced AI concepts. Built for ambitious learners like you.
      </motion.p>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((sec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            onClick={() => navigate(sec.route)}
            className={`cursor-pointer rounded-2xl bg-gray-900/60 backdrop-blur-xl border border-gray-800 hover:border-transparent hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] transition-all duration-300 p-6 flex flex-col items-center text-center`}
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.2 }}
              className={`p-4 rounded-full bg-gradient-to-r ${sec.color} mb-5`}
            >
              {sec.icon}
            </motion.div>
            <h3 className="text-2xl font-semibold mb-3">{sec.name}</h3>
            <p className="text-gray-400 text-sm">{sec.desc}</p>
            <div
              className={`mt-5 w-full h-[2px] bg-gradient-to-r ${sec.color} rounded-full`}
            ></div>
          </motion.div>
        ))}
      </div>

      {/* Subtle Glow */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-40 left-1/2 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-20 right-1/2 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default Tutorial;
