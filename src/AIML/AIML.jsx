import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Brain, Cpu, ArrowLeft } from "lucide-react";
import SEO from "../components/SEO.jsx";

const AIML = () => {
  const navigate = useNavigate();

  const courses = [
    {
      name: "Artificial Intelligence",
      desc: "Understand the core concepts of AI, including problem-solving agents, search algorithms, and logic.",
      icon: <Brain size={36} />,
      color: "from-red-500 to-pink-600",
      route: "/aiml/ai", 
    },
    {
      name: "Machine Learning",
      desc: "Dive into supervised and unsupervised learning, neural networks, and real-world ML applications.",
      icon: <Cpu size={36} />,
      color: "from-violet-600 to-indigo-600",
      route: "/aiml/ml", 
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white py-16 px-6 md:px-20">
      <SEO 
        title="Learn AI & Machine Learning | AI, ML Tutorials"
        description="Master Artificial Intelligence and Machine Learning with structured courses. Learn about neural networks, algorithms, and data modeling."
        keywords="learn ai, artificial intelligence tutorial, machine learning basics, ml algorithms, neural networks, python for ai"
        url="techspread.co.in/aiml"
      />
      
      <button
        onClick={() => navigate("/tutorial")}
        className="flex items-center gap-2 mb-8 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 hover:from-red-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-purple-500/20"
      >
        <ArrowLeft size={18} /> Back to Tutorial
      </button>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent"
      >
        AI & ML Courses
      </motion.h1>

      {/* Grid - Centered and limited to 2 columns for the 2 courses */}
      <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {courses.map((course, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => navigate(course.route)}
            className={`cursor-pointer bg-gray-900/60 backdrop-blur-xl border border-gray-800 p-8 rounded-2xl hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] transition-all flex flex-col items-center text-center`}
          >
            <div
              className={`p-5 rounded-full bg-gradient-to-r ${course.color} inline-block mb-5 shadow-lg`}
            >
              {course.icon}
            </div>
            <h3 className="text-3xl font-semibold mb-3">{course.name}</h3>
            <p className="text-gray-400 text-base">{course.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AIML;