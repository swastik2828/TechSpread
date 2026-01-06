import { useState } from "react";
import Header from '../layout/Header'
import Footer from '../layout/Footer';
import Newsletter from '../components/Newsletter';
import SEO from '../components/SEO';
import { motion } from "framer-motion"; 
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  Code2,
  Globe,
  Brain,
  Database,
  Cpu,
  GitBranch,
  Compass,
  Lightbulb,
  Settings,
  Sprout,
  Clock, 
  Zap,
  Sparkles // Added for variety
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImg from "../assets/hero-illustration.svg";
import illustration from "../assets/what-we-do-illustration.svg";
import illustration2 from "../assets/why_us_illustration.png";

// PART 1 UPDATE: Data Source now includes AI & Java mixed
// Renamed from JAVA_LESSONS to RECENT_LESSONS to reflect mixed content
const RECENT_LESSONS = [
  {
    title: "What is Artificial Intelligence?",
    path: "/aiml/ai",
    desc: "Discover the basics of AI, how it works, and its impact on the modern world.",
    category: "AI & ML",
    isNew: true
  },
  {
    title: "What is JDK, JRE, and JVM? Architecture Explained",
    path: "/programming/java/jdk-jre-jvm",
    desc: "Understand the core components of Java execution: the JVM, JRE, and JDK.",
    category: "Java",
    isNew: true
  },
  {
    title: "Java Features: Why is it so popular?",
    path: "/programming/java/features",
    desc: "Explore platform independence, security, and robustness.",
    category: "Java",
    isNew: false
  }
];

const Home = () => {
  const navigate = useNavigate();

  const list = [
    "Structured lessons that turn theory into practice — short videos, readable notes, and concise examples.",
    "Hands-on mini-projects that reinforce concepts and build your portfolio.",
    "Clear progression paths: Beginner → Intermediate → Job-ready.",
    "Real-world tips: how topics map to internships, projects and interviews.",
  ];

  const categories = [
    {
      icon: <Code2 size={50} />,
      title: "Programming",
      desc: "Learn C, C++, Java, Python — master syntax, logic, and problem-solving.",
      path: "/programming",
    },
    {
      icon: <Globe size={50} />,
      title: "Web Development",
      desc: "Build websites from scratch using HTML, CSS, JavaScript, and React.",
      path: "/tutorial",
    },
    {
      icon: <Cpu size={50} />,
      title: "Computer Fundamentals",
      desc: "Understand how computers work — hardware, OS, and memory basics.",
      path: "/tutorial",
    },
    {
      icon: <Brain size={50} />,
      title: "Data Science & AI",
      desc: "Explore Python, data visualization, and machine learning essentials.",
      path: "/tutorial",
    },
    {
      icon: <Database size={50} />,
      title: "Database & SQL",
      desc: "Learn how to store, retrieve, and manage data with SQL and PostgreSQL.",
      path: "/tutorial",
    },
    {
      icon: <GitBranch size={50} />,
      title: "DSA & Algorithms",
      desc: "Sharpen your problem-solving skills with structured DSA tutorials.",
      path: "/tutorial",
    },
  ];

  const features = [
    {
      icon: <Compass className="w-6 h-6 text-purple-400" />,
      title: "Structured Learning Path",
      desc: "No confusion — progress step by step from basics to advanced concepts with guided tutorials.",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-purple-400" />,
      title: "Real-World Relevance",
      desc: "Every tutorial is written with clarity and examples that match real-world software scenarios.",
    },
    {
      icon: <Settings className="w-6 h-6 text-purple-400" />,
      title: "Concept Visualization",
      desc: "Interactive code snippets and analogies help you visualize complex topics effortlessly.",
    },
    {
      icon: <Sprout className="w-6 h-6 text-purple-400" />,
      title: "Beginner Friendly",
      desc: "We teach from absolute zero — even if you're new to computers, you’ll easily keep up.",
    },
  ];

  return (
    <>
      <SEO
        title="Home"
        description="Master coding with TechSpread. Free, structured tutorials for Java, Web Development, DSA, and Computer Science fundamentals designed for beginners."
        keywords="learn programming, java tutorial, web development course, dsa for beginners, computer science basics, techspread"
        url="/"
      />

      <div className='bg-gradient-to-b from-[#0f172a] to-[#111827]'>
        <Header />
        
        {/* HERO SECTION */}
        <section className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-hidden">
          {/* Floating Gradient Orbs */}
          <div className="absolute top-20 left-10 w-48 h-48 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />

          {/* Container */}
          <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center justify-between relative z-10">

            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1 space-y-6"
            >
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="inline-block text-sm font-medium bg-gradient-to-r from-purple-500 to-blue-400 text-transparent bg-clip-text uppercase tracking-wider"
              >
                🚀 Start from Zero
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="text-5xl md:text-7xl font-extrabold leading-tight text-left tracking-tight drop-shadow-lg"
              >
                Learn, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-gradient-x">Build</span>, and <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500 animate-gradient-x">Spread Tech Knowledge</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="text-gray-300 max-w-md"
              >
                Learn programming languages, computer fundamentals, and core concepts
                through structured, beginner-friendly tutorials. Designed for absolute
                beginners in tech.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center space-x-4 pt-4"
              >
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform flex items-center gap-2">
                  <ArrowRight size={18} />
                  <Link to="/tutorial">Start Learning</Link>
                </button>

                <button className="px-6 py-3 border border-gray-600 text-gray-200 font-semibold rounded-xl hover:bg-[#222]/70 hover:text-white transition flex items-center gap-2">
                  <BookOpen size={18} />
                  <Link to="/tutorial">Browse Tutorials</Link>
                </button>
              </motion.div>
            </motion.div>

            {/* Right Side - Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="flex-1 mt-12 md:mt-0 flex justify-center"
            >
              <motion.img
                src={heroImg}
                alt="Coding Illustration"
                className="w-[90%] max-w-md drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              />
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6, repeat: Infinity, repeatType: "mirror" }}
            className="absolute bottom-18 left-1/2 -translate-x-1/2 text-gray-400 text-sm"
          >
            ↓ Scroll to explore tutorials
          </motion.div>
        </section>

        {/* ✅ UPDATED RECENTLY RELEASED SECTION */}
        <section className="relative bg-[#0f172a] border-b border-gray-800/50 py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-between mb-8"
            >
              {/* Updated Title */}
              <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 flex items-center gap-2">
                <Sparkles className="w-8 h-8 text-purple-400" />
                Recently Released
              </h2>
              
              {/* Updated Link to /tutorial */}
              <Link to="/tutorial" className="text-sm text-purple-400 hover:text-purple-300 font-medium hidden sm:block">
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
                      {/* Dynamic Category Badge */}
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${
                        lesson.category.includes("AI") 
                          ? "bg-blue-900/40 text-blue-300 border border-blue-800/50" 
                          : "bg-orange-900/40 text-orange-300 border border-orange-800/50"
                      }`}>
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
            
            {/* Mobile Link Updated */}
            <div className="mt-6 text-center sm:hidden">
              <Link to="/tutorial" className="text-sm text-purple-400 hover:text-purple-300 font-medium">
                View all lessons →
              </Link>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section
          aria-labelledby="what-we-do-heading"
          className="relative overflow-hidden bg-gradient-to-b from-[#0f172a] to-[#071026] text-white py-20 px-6"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* LEFT - Text */}
            <motion.div
              className="lg:col-span-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2
                id="what-we-do-heading"
                className="text-3xl md:text-4xl font-extrabold leading-tight text-gradient"
              >
                What We Do
              </h2>

              <p className="mt-4 text-gray-300 text-lg max-w-2xl">
                At <span className="font-semibold text-white">TechSpread</span> we transform
                confusing computer science topics into bite-sized, practical learning paths.
                You won't just memorize — you'll build an intuitive mental model so you can
                solve real problems, interview with confidence, and ship projects.
              </p>

              <div className="mt-6 max-w-2xl">
                <ul className="space-y-4">
                  {list.map((text) => (
                    <motion.li
                      key={text}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <span className="flex-shrink-0">
                        <span className="feature-badge" aria-hidden="true">
                          <CheckCircle size={18} />
                        </span>
                      </span>

                      <span className="text-gray-200">{text}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
                  <motion.a
                    href="/tutorial"
                    whileHover={{ scale: 1.03 }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 font-semibold shadow-lg"
                  >
                    <Link to="/tutorial">Start Learning</Link>
                  </motion.a>

                  <motion.a
                    href="/tutorial"
                    whileHover={{ scale: 1.03 }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-700 text-gray-200 hover:text-white"
                  >
                    <Link to="/tutorial">Browse Learning Paths</Link>
                  </motion.a>
                </div>

                <p className="mt-4 text-sm text-gray-500 max-w-xl">
                  Clear paths • real projects • interview-ready skills. Start small, ship fast,
                  scale your learning.
                </p>
              </div>
            </motion.div>

            {/* RIGHT - Illustration */}
            <motion.div
              className="lg:col-span-6 flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={illustration}
                alt="Students learning with code and projects illustration"
                className="w-full max-w-md lg:max-w-lg drop-shadow-xl"
                loading="lazy"
                width="640"
                height="480"
              />
            </motion.div>
          </div>
        </section>
        
        {/* Featured Categories Section */}
        <section className="relative bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-24 px-6 overflow-hidden">
          {/* Decorative Gradient Orbs */}
          <div className="absolute top-10 left-20 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full animate-pulse" />
          <div className="absolute bottom-10 right-10 w-56 h-56 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />

          <div className="max-w-7xl mx-auto relative z-10 text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold mb-4"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
                Popular Categories
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Pick a path. Learn something new today. Every great coder starts somewhere.
            </motion.p>
          </div>

          {/* Categories Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => navigate(cat.path)}
                className="group bg-gradient-to-br from-[#1e293b]/80 to-[#334155]/60 rounded-2xl p-6 shadow-lg backdrop-blur-lg border border-gray-700 cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(139,92,246,0.4)]"
              >
                <div className="flex flex-col items-start space-y-4">
                  <motion.div
                    className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg group-hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition duration-300"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                  >
                    {cat.icon}
                  </motion.div>

                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition duration-300">
                    {cat.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{cat.desc}</p>

                  <motion.button
                    whileHover={{ x: 5 }}
                    className="mt-3 text-sm font-semibold text-purple-400 hover:text-blue-400 transition-all"
                  >
                    Explore →
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Us */}
        <section
          id="why-us"
          className="relative bg-gradient-to-b from-[#0f172a] to-[#111827] text-[#E2E8F0] overflow-hidden py-20 px-6"
        >
          {/* Background radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(88,28,135,0.15),transparent_70%)] pointer-events-none" />

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* LEFT CONTENT */}
            <motion.div
              className="lg:col-span-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#a855f7] to-[#3b82f6] bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Why Choose TechSpread?
              </motion.h2>

              <motion.p
                className="mt-3 text-[#94A3B8] text-lg leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Learning Made Simple, Structured, and Scalable.
              </motion.p>

              <motion.p
                className="mt-6 text-gray-300 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                We’re not just another blog — we’re a <span className="text-white font-semibold">structured learning platform</span> built to help you
                truly understand computer science, not just memorize syntax. Every
                concept connects logically, every step builds your confidence.
              </motion.p>

              {/* FEATURES */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((f, i) => (
                  <motion.div
                    key={i}
                    className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 transition duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] feature-card"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-600/20 to-blue-500/20 border border-purple-600/30">
                        {f.icon}
                      </div>
                      <h3 className="font-semibold text-lg text-white">{f.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {f.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT ILLUSTRATION */}
            <motion.div
              className="lg:col-span-6 flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <motion.img
                src={illustration2}
                alt="Learning illustration"
                className="w-full max-w-md lg:max-w-lg drop-shadow-[0_0_40px_rgba(139,92,246,0.3)] floating-image"
                loading="lazy"
                width="640"
                height="480"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </section>
        <Newsletter />
        <Footer />
      </div>
    </>
  )
}

export default Home