import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, FileCode, Palette, FileJson, Atom, ArrowRight } from "lucide-react";
import SEO from "../../components/SEO.jsx";

const Frontend = () => {
  const navigate = useNavigate();

  const technologies = [
    {
      name: "HTML",
      desc: "The standard markup language for documents designed to be displayed in a web browser.",
      icon: <FileCode size={32} />,
      color: "from-orange-500 to-red-500",
      route: "/webdevelopment/html", // Points to the HTML Course
      active: true
    },
    {
      name: "CSS",
      desc: "Style sheet language used for describing the presentation of a document written in HTML.",
      icon: <Palette size={32} />,
      color: "from-blue-500 to-cyan-500",
      route: "#",
      active: false
    },
    {
      name: "JavaScript",
      desc: "Programming language that enables interactive web pages and is an essential part of web applications.",
      icon: <FileJson size={32} />,
      color: "from-yellow-400 to-orange-400",
      route: "#",
      active: false
    },
    {
      name: "React",
      desc: "A JavaScript library for building user interfaces based on components.",
      icon: <Atom size={32} />,
      color: "from-cyan-400 to-blue-500",
      route: "#",
      active: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white py-16 px-6 md:px-20">
      <SEO 
        title="Frontend Development Technologies | HTML, CSS, JS, React"
        description="Explore the essential technologies for frontend development. Start with HTML and master the web."
        keywords="frontend development, html course, css tutorial, javascript, react js, web design"
        url="/tutorials/webdevelopment/frontend"
      />

      <button
        onClick={() => navigate("/tutorials/webdevelopment")}
        className="flex items-center gap-2 mb-8 px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all text-sm text-gray-300"
      >
        <ArrowLeft size={16} /> Back to Web Dev
      </button>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Frontend <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">Technologies</span>
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {technologies.map((tech, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={tech.active ? { scale: 1.05 } : {}}
            onClick={() => tech.active && navigate(tech.route)}
            className={`
              relative overflow-hidden rounded-2xl p-6 border transition-all duration-300
              ${tech.active 
                ? "bg-gray-900/60 border-gray-700 hover:border-orange-500/50 cursor-pointer hover:shadow-2xl hover:shadow-orange-500/10" 
                : "bg-gray-900/30 border-gray-800 opacity-60 cursor-not-allowed grayscale-[0.5]"}
            `}
          >
            {/* Background Glow */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${tech.color} opacity-10 blur-[50px] -z-10`} />

            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center mb-6 shadow-lg`}>
              {tech.icon}
            </div>

            <h3 className="text-2xl font-bold mb-3">{tech.name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {tech.desc}
            </p>

            <div className={`flex items-center gap-2 text-sm font-semibold ${tech.active ? "text-white" : "text-gray-600"}`}>
              {tech.active ? (
                <>Start Learning <ArrowRight size={16} /></>
              ) : (
                "Coming Soon"
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Frontend;