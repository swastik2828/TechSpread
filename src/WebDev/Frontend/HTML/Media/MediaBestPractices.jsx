import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Image as ImageIcon, CheckCircle, Gauge, Activity, Eye, PlaySquare, Volume2, ShieldAlert, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MediaOptimizationSimulator from '../../../../simulators/web/MediaOptimizationSimulator';

const MediaBestPractices = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto space-y-12"
        >
            {/* Header Section */}
            <motion.div variants={itemVariants} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center p-3 bg-orange-500/10 rounded-full mb-4">
                    <Zap className="text-orange-500 h-8 w-8" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Media Performance & Accessibility
                </h1>
                <p className="text-xl text-gray-400">
                    Professional best practices for speed, optimization, and WCAG compliance.
                </p>
            </motion.div>

            {/* 6.1 Image Optimisation for Speed */}
            <motion.section variants={itemVariants} className="space-y-6">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <Gauge className="text-orange-400 h-8 w-8" />
                    <h2 className="text-2xl font-bold text-white">6.1 Image Optimisation</h2>
                </div>

                <div className="prose prose-invert max-w-none text-gray-300">
                    <p>
                        Page load speed is one of the most consequential metrics in web development. Images typically account for 50% to 80% of total page weight. Optimising them is the highest-return performance investment you can make.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                        <div className="bg-[#111] border border-white/10 rounded-lg p-5">
                            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><ImageIcon size={18} className="text-blue-400" /> Formatting Strategies</h3>
                            <p className="text-sm text-gray-400 mb-3">Never send a 4000px image to display at 300px. Compress JPEGs using ImageOptim/TinyJPEG (reducing sizes by 40-70% with no perceptual loss).</p>
                            <div className="bg-black/50 p-2 text-xs font-mono text-gray-500 rounded border border-white/5">
                                Original Image: 2400x1600 (2.5MB)<br />
                                Resized (800x600) + WebP: 85KB
                            </div>
                        </div>
                        <div className="bg-[#111] border border-white/10 rounded-lg p-5">
                            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><Activity size={18} className="text-green-400" /> Next-Gen Formats</h3>
                            <p className="text-sm text-gray-400 mb-3">WebP provides 25-35% smaller files than JPEG at the same quality. AVIF offers even further compression. Serve them sequentially using the HTML <code>&lt;picture&gt;</code> element.</p>
                            <div className="bg-black/50 p-2 text-[10px] font-mono text-blue-300 rounded border border-white/5 overflow-x-auto whitespace-pre">
                                {`<picture>
  <source srcset="hero.avif" type="image/avif" />
  <source srcset="hero.webp" type="image/webp" />
  <img src="hero.jpg" alt="..." />
</picture>`}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* 6.2 Lazy Loading */}
            <motion.section variants={itemVariants} className="space-y-6">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <Eye className="text-orange-400 h-8 w-8" />
                    <h2 className="text-2xl font-bold text-white">6.2 Lazy Loading Data</h2>
                </div>

                <div className="prose prose-invert max-w-none text-gray-300">
                    <p>
                        Lazy loading is a technique where images off-screen (below the fold) are not downloaded until the user scrolls near them. This dramatically speeds up initial payload times.
                    </p>
                    <p>
                        Modern browsers support native lazy loading via the <code>loading="lazy"</code> attribute. Use <code>loading="eager"</code> for critical hero images at the very top of the page.
                    </p>
                </div>

                {/* Simulator Area */}
                <div className="my-10 border-t border-b border-white/5 py-4">
                    <MediaOptimizationSimulator />
                </div>
            </motion.section>

            {/* 6.3 Accessibility Beyond alt Text */}
            <motion.section variants={itemVariants} className="space-y-6">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <ShieldAlert className="text-orange-400 h-8 w-8" />
                    <h2 className="text-2xl font-bold text-white">6.3 Advanced Image Accessibility</h2>
                </div>

                <div className="prose prose-invert max-w-none text-gray-300">
                    <p>
                        Web accessibility extends beyond writing <code>alt</code> text. The Web Content Accessibility Guidelines (WCAG) require complex images (charts, infographics) to provide a long description.
                    </p>

                    <div className="bg-[#111] p-5 border-l-4 border-yellow-500 rounded-r-lg my-6">
                        <h3 className="text-yellow-400 font-bold mb-2">Color Contrast Requirements</h3>
                        <p className="text-sm text-gray-300">
                            Text overlaid on image backgrounds must meet minimum contrast ratios to be readable by users with low vision. WCAG AA requires <strong>4.5:1</strong> for normal text, and <strong>3.0:1</strong> for large text (18pt+ or 14pt+ bold).
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* 6.4 Video and Audio Accessibility */}
            <motion.section variants={itemVariants} className="space-y-6">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <PlaySquare className="text-orange-400 h-8 w-8" />
                    <h2 className="text-2xl font-bold text-white">6.4 Media Accessibility (Captions/Tracks)</h2>
                </div>

                <div className="prose prose-invert max-w-none text-gray-300">
                    <p>
                        WCAG requires video content with spoken audio to provide captions. This serves deaf users, users in noisy environments (subways), or viewers natively speaking another language.
                    </p>

                    <div className="bg-black/50 rounded-lg p-5 font-mono text-sm border border-white/10 my-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-2 text-[10px] text-gray-600 uppercase">Implementing the Track element</div>
                        {`<video controls width="960">
    <source src="lecture.mp4" type="video/mp4" />
    
    <!-- Captions: WebVTT file mapping text to timestamps -->
    <track 
      kind="captions" 
      src="captions/en.vtt" 
      srclang="en" 
      label="English" default 
    />

    <!-- Description: Audio description for blind users -->
    <track 
      kind="descriptions" 
      src="descriptions/en.vtt" 
    />
</video>`}
                    </div>

                    <div className="flex items-start gap-3 bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg">
                        <Volume2 className="text-blue-400 shrink-0 mt-1" size={24} />
                        <div>
                            <h4 className="text-white font-bold mb-1 block">Audio Transcripts</h4>
                            <p className="text-sm text-blue-200">
                                Audio-only content like podcasts must provide a full text transcript alongside the player. Transcripts benefit hearing-impaired users, those skimming information, and search engine bots that cannot index audio.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800 pb-12">
                <Link to="../media-audio" className="flex items-center gap-2 text-gray-500 hover:text-white"><ArrowLeft size={16} /> Audio on Web</Link>
                <Link to="/webdevelopment/html" className="flex items-center gap-2 text-gray-500 hover:text-white pointer-events-none opacity-50">End of Module <ArrowRight size={16} /></Link>
            </div>

        </motion.div>
    );
};

export default MediaBestPractices;
