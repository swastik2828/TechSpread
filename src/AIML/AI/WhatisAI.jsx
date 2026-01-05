import React from "react";
import SEO from "../../components/SEO";
import { Brain, Cpu, Globe, MessageSquare } from "lucide-react";

// --- Import Images ---
// Make sure to create the folder 'src/assets/AI_Image' and place these files there.
import What_is_AI_Img from "../../assets/AI_Image/What_is_AI.jpeg";
import AI_Agents_Img from "../../assets/AI_Image/AI_Agents.jpeg";

const WhatisAI = () => {
  return (
    <div className="space-y-12 text-gray-300 leading-relaxed font-light">
      <SEO 
        title="What is Artificial Intelligence? | AI Tutorial"
        description="Learn the definition of AI, its goals, and the four main approaches: Acting Humanly, Thinking Humanly, Thinking Rationally, and Acting Rationally."
        keywords="what is AI, artificial intelligence definition, turing test, rational agent, ai history, cognitive modeling"
        url="/tutorials/aiml/ai"
      />

      {/* Header Section */}
      <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            What is Artificial Intelligence?
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
            The quest to create machines capable of performing tasks that normally require human intelligence.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 blur-[100px] rounded-full"></div>
      </div>

      {/* Introduction */}
      <section className="bg-gray-900/40 backdrop-blur-xl p-8 rounded-2xl border border-gray-800">
        <p className="text-lg mb-6">
          Artificial Intelligence (AI) is a field of computer science that aims to create machines capable of performing tasks that normally require human intelligence. These tasks include learning, reasoning, problem-solving, understanding language, recognizing images, and making decisions. AI is concerned not only with understanding how humans think and act, but also with building intelligent systems that can operate effectively in the real world.
        </p>
        <p className="text-lg">
          Humans are called <i>Homo sapiens</i>—the wise species—because intelligence plays a central role in our lives. For centuries, humans have tried to understand how the mind works. AI takes this curiosity a step further: 
          <span className="text-cyan-400 font-semibold"> Can machines be made intelligent?</span>
        </p>
      </section>

      {/* --- Image 1: What is AI --- */}
      <div>
        <img
          src={What_is_AI_Img}
          alt="What is Artificial Intelligence"
          className="w-full max-w-4xl mx-auto rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.15)] my-10 object-contain border border-gray-800"
        />
      </div>

      {/* Goal of AI */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-3xl font-bold mb-4 text-white">The Goal of AI</h3>
          <p className="mb-4">
            The main goal of AI is to build <span className="text-purple-400 font-semibold">intelligent entities</span>—machines or programs that can sense their environment, reason about what they observe, and take appropriate actions to achieve specific objectives.
          </p>
          <p>
            AI is considered a universal field, relevant to almost every intellectual activity performed by humans, covering perception, reasoning, learning, decision-making, and interaction.
          </p>
        </div>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-2xl">
           <ul className="space-y-4">
              {['Perception', 'Reasoning', 'Learning', 'Decision Making'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
                  <span className="text-lg font-medium text-gray-200">{item}</span>
                </li>
              ))}
           </ul>
        </div>
      </section>

      {/* Approaches to AI */}
      <section>
        <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Approaches to Artificial Intelligence
        </h3>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          Researchers have defined AI from different perspectives. These are the four main approaches based on thought and behavior.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-gray-900/60 p-6 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="text-cyan-400" />
              <h4 className="text-xl font-bold text-white">1. Acting Humanly</h4>
            </div>
            <p className="text-sm text-gray-400 mb-2 font-mono uppercase">The Turing Test Approach</p>
            <p className="text-sm mb-4">
              Proposed by Alan Turing (1950). A machine is intelligent if a human cannot distinguish it from another human in conversation.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
              <li>Natural Language Processing</li>
              <li>Knowledge Representation</li>
              <li>Automated Reasoning</li>
              <li>Machine Learning</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900/60 p-6 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="text-purple-400" />
              <h4 className="text-xl font-bold text-white">2. Thinking Humanly</h4>
            </div>
            <p className="text-sm text-gray-400 mb-2 font-mono uppercase">The Cognitive Modeling Approach</p>
            <p className="text-sm">
              Defines AI as systems that think like humans. Requires understanding the human mind through introspection, psychological experiments, and brain imaging.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-900/60 p-6 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="text-green-400" />
              <h4 className="text-xl font-bold text-white">3. Thinking Rationally</h4>
            </div>
            <p className="text-sm text-gray-400 mb-2 font-mono uppercase">The Laws of Thought Approach</p>
            <p className="text-sm">
              Based on logical reasoning (Aristotle). Uses formal logic to draw correct conclusions. However, real-world uncertainty makes pure logic difficult to apply.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-900/60 p-6 rounded-2xl border border-gray-800 hover:border-pink-500/50 transition-colors duration-300 relative overflow-hidden">
             <div className="absolute top-0 right-0 bg-pink-500/10 w-32 h-32 blur-3xl rounded-full"></div>
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <Globe className="text-pink-400" />
              <h4 className="text-xl font-bold text-white">4. Acting Rationally</h4>
            </div>
            <p className="text-sm text-gray-400 mb-2 font-mono uppercase">The Rational Agent Approach</p>
            <p className="text-sm relative z-10">
              <span className="text-white font-semibold">The modern standard.</span> A rational agent perceives its environment and acts to maximize the best outcome. It uses logic, probability, and decision theory.
            </p>
          </div>
        </div>
      </section>

      {/* --- Image 2: AI Agents --- */}
      <div>
        <img
          src={AI_Agents_Img}
          alt="AI Agents and Rationality"
          className="w-full max-w-4xl mx-auto rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.15)] my-10 object-contain border border-gray-800"
        />
      </div>

      {/* Foundations */}
      <section className="bg-gradient-to-r from-gray-900 to-black p-8 rounded-2xl border border-gray-800">
        <h3 className="text-2xl font-bold mb-6 text-white">Foundations of AI</h3>
        <div className="flex flex-wrap gap-3">
          {['Computer Science', 'Mathematics & Probability', 'Logic & Philosophy', 'Psychology', 'Neuroscience', 'Economics'].map((tag, i) => (
             <span key={i} className="px-4 py-2 rounded-full bg-gray-800 border border-gray-700 text-cyan-300 text-sm hover:bg-gray-700 transition-colors cursor-default">
               {tag}
             </span>
          ))}
        </div>
        <p className="mt-6 text-gray-400 italic">
          These foundations help AI systems learn from data, reason under uncertainty, and make effective decisions.
        </p>
      </section>

      {/* Real World & Conclusion */}
      <section>
        <h3 className="text-2xl font-bold mb-4 text-white border-l-4 border-purple-500 pl-4">AI in the Real World</h3>
        <p className="mb-4 text-gray-300">
          Today, AI is powering search engines, medical diagnosis, autonomous vehicles, and more.
        </p>
        <div className="bg-purple-900/20 border border-purple-500/30 p-6 rounded-xl">
           <p className="text-purple-200">
             As AI systems become more powerful, it becomes important to ensure that their objectives are aligned with human values and that they act in ways that are beneficial to society.
           </p>
        </div>
      </section>

    </div>
  );
};

export default WhatisAI;