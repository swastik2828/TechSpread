import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Briefcase, Timer, Twitter, Github, Linkedin } from 'lucide-react';
import Header from '../layout/Header.jsx';
import Footer from '../layout/Footer.jsx';

export default function ContactPage() {
  return (
    <div>
      <Header />
      <div className="min-h-screen py-16 px-6 bg-[radial-gradient(ellipse_at_top_right,_#071022,_#070616_40%)] text-slate-100 relative overflow-hidden">
        {/* Decorative floating blobs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          transition={{ duration: 1.2 }}
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-400 blur-3xl mix-blend-screen" />
          <div className="absolute -bottom-40 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-pink-600 to-violet-600 blur-2xl mix-blend-screen" />
        </motion.div>

        <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <section className="space-y-6">
            <motion.h1
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight"
            >
              Get in touch
              <span className="block text-lg font-medium text-slate-300 mt-2">
                Questions, collabs, freelance or just say hi — We respond fast.
              </span>
            </motion.h1>

            <motion.p
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-slate-300 max-w-xl"
            >
              Prefer email? Drop a line at{' '}
              <a href="mailto:techspread.co.in@gmail.com" className="text-gradient font-medium">
                techspread.co.in@gmail.com
              </a>. Or reach us via socials below.
            </motion.p>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InfoCard icon={<MapPin className="h-5 w-5 text-cyan-400" />} title="Location" value="Remote / India" />
              <InfoCard icon={<Clock className="h-5 w-5 text-purple-400" />} title="Availability" value="Weekdays — 9am to 7pm IST" />
              <InfoCard icon={<Briefcase className="h-5 w-5 text-pink-400" />} title="Services" value="Education, Skill Development, Programming" />
              <InfoCard icon={<Timer className="h-5 w-5 text-blue-400" />} title="Response Time" value="Usually within 24 hours" />
            </div>

            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="mt-6"
            >
              <div className="text-sm text-slate-400">Follow on</div>
              <div className="flex gap-3 mt-3">
                {/* <SocialButton label="Twitter" href="#" icon={<Twitter className="h-4 w-4" />} /> */}
                <SocialButton label="GitHub" href="#" icon={<Github className="h-4 w-4" />} />
                <SocialButton label="LinkedIn" href="#" icon={<Linkedin className="h-4 w-4" />} />
              </div>
            </motion.div>
          </section>

          <motion.section
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="bg-white/5 backdrop-blur-md border border-white/6 rounded-2xl p-6 sm:p-8 shadow-2xl text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Let’s Collaborate</h2>
            <p className="text-slate-300 mb-6">
              We love working on challenging projects and innovative ideas. Whether you have a project in mind, want to collaborate, or just say hello — feel free to reach out!
            </p>
            <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
              <a
                href="mailto:techspread.co.in@gmail.com"
                className="rounded-full px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-400 text-black font-semibold shadow hover:shadow-lg transition-all"
              >
                Email Us
              </a>
            </motion.div>
          </motion.section>
        </main>
      </div>
      <Footer />
    </div>
  );
}

function InfoCard({ title, value, icon }) {
  return (
    <div className="flex items-center gap-3 p-4 bg-white/3 border border-white/4 rounded-xl">
      {icon}
      <div>
        <div className="text-xs text-slate-300">{title}</div>
        <div className="font-semibold mt-1">{value}</div>
      </div>
    </div>
  );
}

function SocialButton({ label, href = '#', icon }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/3 border border-white/5 hover:scale-105 transition-transform"
    >
      {icon}
      <span className="text-sm">{label}</span>
    </a>
  );
}