import React from 'react';
import { motion } from 'framer-motion';
import Header from '../layout/Header.jsx';
import Footer from '../layout/Footer.jsx';
import SEO from '../components/SEO.jsx';
const AboutUs = () => {
  return (
    <div>
      <SEO
        title="About Us"
        description="Learn about TechSpread's mission to make computer science education accessible, practical, and industry-relevant for all learners."
        keywords="about techspread, programming education, tech learning platform, coding tutorials"
        url="/about"
      />
      <Header />
      <section className="min-h-screen bg-gradient-to-br from-[#0a0f1c] via-[#111827] to-[#0f172a] text-gray-100 flex flex-col items-center justify-center px-6 py-20">
        <motion.div
          className="max-w-5xl text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
            At <span className="font-semibold text-cyan-400">TechSpread</span>, we are a passionate team of innovators, educators, and developers united by one mission - to make computer science education simple, practical, and accessible to everyone.
            <br /><br />
            We believe learning should not just be about theory - it should empower you to build, create, and innovate. That's why every course, project, and guide we create focuses on real-world applications, industry-relevant skills, and hands-on learning.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-10 max-w-6xl mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2, duration: 0.8, ease: 'easeOut' },
            },
          }}
        >
          {[
            {
              title: 'Our Mission',
              text: 'We aim to bridge the gap between academic knowledge and industry demands by offering well-structured, practical learning resources that prepare learners to excel in the modern tech world.',
            },
            {
              title: 'Our Vision',
              text: 'We envision a future where every learner, regardless of background, can confidently explore the world of technology - mastering everything from programming and web development to AI, data science, and cloud computing.',
            },
            {
              title: 'Our Approach',
              text: 'We blend concept clarity, project-based learning, and modern tools to deliver an experience that goes beyond traditional textbooks. Our learners don\'t just study - they build projects, solve real problems, and grow into professionals ready to take on the tech industry.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#1e293b]/40 border border-cyan-500/20 rounded-2xl p-8 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:scale-105 transition-all duration-500 backdrop-blur-md"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">{item.title}</h2>
              <p className="text-gray-300 text-base leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 max-w-4xl text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-gray-400 text-lg leading-relaxed">
            We provide a structured, hands-on learning experience built by experienced developers, where every lesson focuses on real-world applications. Our interactive projects and exercises help learners apply concepts immediately, while our constantly updated content keeps you aligned with the latest technologies and industry trends. With a supportive community of peers and mentors by your side, you'll not only learn computer science essentials - you'll gain the confidence and skills to build, innovate, and thrive in the ever-evolving tech world.
          </p>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
