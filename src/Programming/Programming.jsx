import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Coffee, FileCode2, Terminal } from "lucide-react";
import SEO from "../components/SEO.jsx";
import { ArrowLeft } from "lucide-react";
const Programming = () => {
  const navigate = useNavigate();

  const courses = [
    {
      name: "Java",
      desc: "Learn Java from the ground up – from basics to advanced OOP and project building.",
      icon: <Coffee size={36} />,
      color: "from-yellow-500 to-orange-500",
      route: "/programming/java",
    },
    // {
    //   name: "C++",
    //   desc: "Master data structures and algorithms through C++ and problem-solving techniques.",
    //   icon: <FileCode2 size={36} />,
    //   color: "from-blue-500 to-indigo-500",
    //   route: "/tutorials/programming/cpp",
    // },
    // {
    //   name: "Python",
    //   desc: "Explore Python for automation, AI, data science, and scripting.",
    //   icon: <Terminal size={36} />,
    //   color: "from-green-500 to-teal-500",
    //   route: "/tutorials/programming/python",
    // },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white py-16 px-6 md:px-20">
          <SEO 
        title="Learn Programming Languages | C, C++, Java, Python"
        description="Master the syntax and logic of top programming languages. Beginner-friendly guides for C, C++, Java, and Python."
        keywords="learn programming, c language tutorial, java programming, python for beginners, c++ basics, coding syntax"
        url="/programming"
      />
          <button
                  onClick={() => navigate("/tutorial")}
                  className="flex items-center gap-2 mb-8 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-purple-500/20"
                >
                  <ArrowLeft size={18} /> Back to Tutorial
                </button>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
      >
        Programming Courses
      </motion.h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => navigate(course.route)}
            className={`cursor-pointer bg-gray-900/60 backdrop-blur-xl border border-gray-800 p-6 rounded-2xl hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] transition-all`}
          >
            <div
              className={`p-4 rounded-full bg-gradient-to-r ${course.color} inline-block mb-4`}
            >
              {course.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-2">{course.name}</h3>
            <p className="text-gray-400 text-sm">{course.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Programming;
