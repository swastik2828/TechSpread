import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Layout, Server, ArrowLeft, ArrowRight } from "lucide-react";
import SEO from "../components/SEO.jsx";

const WebDevelopment = () => {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Front-End Development",
      desc: "Master the art of creating beautiful, interactive user interfaces using HTML, CSS, JavaScript, and React.",
      icon: <Layout size={40} />,
      color: "from-orange-500 to-pink-600",
      route: "/tutorials/webdevelopment/frontend", // Points to the new Frontend Hub
    },
    {
      name: "Back-End Development",
      desc: "Learn to build robust server-side logic, APIs, and database architectures with Node.js, Python, and SQL.",
      icon: <Server size={40} />,
      color: "from-blue-500 to-cyan-500",
      route: "#", // Placeholder for now
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white py-16 px-6 md:px-20">
      <SEO 
        title="Web Development Roadmap | Frontend & Backend"
        description="Choose your path: become a Frontend wizard or a Backend architect. Free comprehensive tutorials."
        keywords="web development, frontend, backend, full stack, html, css, javascript, nodejs"
        url="/tutorials/webdevelopment"
      />
      
      <button
        onClick={() => navigate("/tutorial")}
        className="flex items-center gap-2 mb-8 px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all text-sm text-gray-300"
      >
        <ArrowLeft size={16} /> Back to Tutorials
      </button>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
      >
        Web Development Paths
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            onClick={() => navigate(cat.route)}
            className="cursor-pointer bg-gray-900/50 backdrop-blur-xl border border-gray-800 p-8 rounded-3xl hover:border-gray-600 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all group"
          >
            <div className={`p-5 rounded-2xl bg-gradient-to-r ${cat.color} w-fit mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
              {cat.icon}
            </div>
            <h3 className="text-3xl font-bold mb-4">{cat.name}</h3>
            <p className="text-gray-400 leading-relaxed mb-6">{cat.desc}</p>
            <span className="text-sm font-semibold text-gray-500 group-hover:text-white transition-colors flex items-center gap-2">
              Select Path <ArrowRight size={16} />
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WebDevelopment;