import React from 'react';
import { motion } from 'framer-motion';
import { Volume2, Music, ServerCog, Wrench, VolumeX, Mic2, AlertTriangle, Disc3, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AudioSimulator from '../../../../simulators/web/AudioSimulator';

const AudioWeb = () => {
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
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Audio on the Web
                </h1>
                <p className="text-xl text-gray-400">
                    Understanding audio formats, implementation strategies, and the HTML5 Audio element.
                </p>
            </motion.div>

            {/* 5.1 Audio Formats and Browser Support */}
            <motion.section variants={itemVariants} className="space-y-6">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <Disc3 className="text-orange-400 h-8 w-8" />
                    <h2 className="text-2xl font-bold text-white">6.6 Audio Formats & Browser Support</h2>
                </div>

                <div className="prose prose-invert max-w-none text-gray-300">
                    <p>
                        Audio on the web faces the same codec fragmentation problem as video, though the landscape is somewhat simpler. The dominant audio format for web delivery is MP3 (MPEG Audio Layer III), which enjoys near-universal browser support and produces good quality at small sizes. MP3 uses lossy compression—discarding audio information below human hearing thresholds.
                    </p>
                    <p>
                        Ogg Vorbis is an open-source, patent-free codec championed by open-web browsers, and AAC (Advanced Audio Coding) is the default audio format for Apple devices, widely supported in video containers.
                    </p>

                    <div className="overflow-x-auto my-6">
                        <table className="w-full text-left border-collapse border border-white/10 rounded-lg overflow-hidden">
                            <thead>
                                <tr className="bg-white/5 border-b border-white/10">
                                    <th className="p-3 text-white font-medium">Format</th>
                                    <th className="p-3 text-white font-medium">Browser & Device Support</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm divide-y divide-white/5">
                                <tr className="hover:bg-white/5 transition-colors border-l-4 border-green-500">
                                    <td className="p-3 text-green-300 font-mono font-bold"><span className="bg-green-500/10 px-2 py-1 flex items-center gap-2 max-w-min rounded"><Volume2 size={16} /> MP3</span></td>
                                    <td className="p-3 text-gray-300 font-medium">All modern browsers (Universal Standard)</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors border-l-4 border-blue-500">
                                    <td className="p-3 text-blue-300 font-mono font-bold"><span className="bg-blue-500/10 px-2 py-1 flex items-center gap-2 max-w-min rounded"><Disc3 size={16} /> Ogg Vorbis</span></td>
                                    <td className="p-3 text-gray-400">Chrome, Firefox, Opera, Edge (Chromium); NOT Safari/iOS</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors border-l-4 border-gray-500">
                                    <td className="p-3 text-gray-300 font-mono font-bold"><span className="bg-gray-500/10 px-2 py-1 flex items-center gap-2 max-w-min rounded"><Music size={16} /> AAC (in MP4)</span></td>
                                    <td className="p-3 text-gray-400">Safari, Chrome, Edge, Firefox (varying); iOS</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors border-l-4 border-purple-500">
                                    <td className="p-3 text-purple-300 font-mono font-bold"><span className="bg-purple-500/10 px-2 py-1 flex items-center gap-2 max-w-min rounded"><Mic2 size={16} /> WAV / AIFF</span></td>
                                    <td className="p-3 text-gray-500 italic">Supported widely but rarely used (massive uncompressed size)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </motion.section>

            {/* 5.2 Three Approaches to Adding Audio */}
            <motion.section variants={itemVariants} className="space-y-6">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <Wrench className="text-orange-400 h-8 w-8" />
                    <h2 className="text-2xl font-bold text-white">6.7 Implementing Web Audio</h2>
                </div>

                <div className="prose prose-invert max-w-none text-gray-300">
                    <p>As with video, there are three main routes to adding audio. Hosted services, Flash-based legacy players, and the native HTML5 audio element.</p>

                    <div className="space-y-6 mt-6">
                        <div className="bg-[#111] border border-white/5 rounded-lg p-6 shadow-md relative overflow-hidden group hover:border-white/20 transition-all">
                            <ServerCog className="absolute right-4 top-4 text-white/5 w-24 h-24 group-hover:text-white/10 transition-colors" />
                            <h3 className="text-xl font-bold text-white mb-2 relative z-10 flex items-center gap-2"><div className="w-2 h-2 bg-orange-500 rounded-full"></div>Approach 1: Hosted Services</h3>
                            <p className="text-sm relative z-10">
                                Services like SoundCloud, Spotify for Podcasters, and Buzzsprout allow you to upload files and embed a widget via an iframe. They handle hosting, cross-browser compatibility, streaming, and analytics. Appropriate for podcasts where broad distribution (RSS) and discoverability matter more than a custom UI.
                            </p>
                        </div>

                        <div className="bg-[#111] border border-red-500/20 rounded-lg p-6 shadow-md relative overflow-hidden group hover:border-red-500/40 transition-all">
                            <AlertTriangle className="absolute right-4 top-4 text-red-500/5 w-24 h-24 group-hover:text-red-500/10 transition-colors" />
                            <h3 className="text-xl font-bold text-white mb-2 relative z-10 flex items-center gap-2"><div className="w-2 h-2 bg-red-500 rounded-full"></div>Approach 2: Flash-Based Players (Legacy)</h3>
                            <p className="text-sm relative z-10">
                                Historically, Flash MP3 players were dominant because they worked consistently across browsers. Embedded using SWFObject, they accepted an MP3 path as a parameter. This is entirely obsolete today and discussed only for architectural historical context.
                            </p>
                        </div>

                        <div className="bg-[#111] border border-green-500/20 rounded-lg p-6 shadow-md relative overflow-hidden group hover:border-green-500/40 transition-all">
                            <Volume2 className="absolute right-4 top-4 text-green-500/5 w-24 h-24 group-hover:text-green-500/10 transition-colors" />
                            <h3 className="text-xl font-bold text-white mb-2 relative z-10 flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div>Approach 3: HTML5 audio Element</h3>
                            <p className="text-sm relative z-10">
                                The native approach for all new projects. Works without plugins, respects accessibility, and supports multiple sources.
                            </p>
                            <div className="bg-black/50 p-4 rounded font-mono text-xs text-blue-300 mt-4 relative z-10 border border-white/5">
                                {`<audio controls preload="metadata">
    <!-- MP3 first -->
    <source src="podcast.mp3" type="audio/mpeg" />
    <source src="podcast.ogg" type="audio/ogg" />
    <p>Your browser lacks HTML5 audio. <a href="podcast.mp3">Download</a></p>
</audio>`}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Simulator Section */}
            <motion.section variants={itemVariants} className="space-y-6">
                <h2 className="text-xl font-bold text-white">Interactive Demo: Audio Configurations</h2>
                <p className="text-gray-400">Use the simulator below to understand how the <code>controls</code>, <code>autoplay</code>, <code>muted</code>, and <code>preload</code> attributes alter the behavior and visual output of the native audio element.</p>
                <AudioSimulator />

                <div className="bg-orange-500/10 border-l-4 border-orange-500 p-4 rounded-r-lg flex items-start gap-4">
                    <VolumeX className="text-orange-400 shrink-0" size={24} />
                    <div>
                        <h4 className="text-orange-300 font-bold mb-1">Crucial UX Consideration: Autoplay</h4>
                        <p className="text-sm text-orange-200/80">Autoplay audio is almost universally considered intrusive and annoying. Browsers penalize sites actively by blocking unmuted autoplay media. Best practice is to <em>never</em> start unmuted audio on page load. Offer clear controls instead.</p>
                    </div>
                </div>
            </motion.section>

            {/* 5.3 Persistent Audio Across Page Navigation */}
            <motion.section variants={itemVariants} className="space-y-6 pb-20">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <Music className="text-orange-400 h-8 w-8" />
                    <h2 className="text-2xl font-bold text-white">6.8 Persistent Audio Across Navigation</h2>
                </div>

                <div className="prose prose-invert max-w-none text-gray-300">
                    <p>
                        Making audio continue playing as a user navigates between pages (e.g., SoundCloud, music players) is technically challenging. A standard HTTP page load destroys the DOM, killing any active <code>&lt;audio&gt;</code> element.
                    </p>

                    <p className="font-medium text-white mb-2 mt-6">Solutions to this problem:</p>
                    <ul className="space-y-4 list-decimal pl-6 text-sm">
                        <li className="pl-2">
                            <strong className="text-orange-300 block mb-1">Popups (Legacy)</strong>
                            Opening a separate small browser window hosting the player. Feels dated and conflicts heavily with modern popup blockers. Not recommended.
                        </li>
                        <li className="pl-2">
                            <strong className="text-orange-300 block mb-1">Single Page Applications (SPAs)</strong>
                            Using frameworks like React, Vue, or Angular. The audio element sits in a root "Layout" component. Navigation (via React Router) only swaps out child components, leaving the root layout and its audio player intact and playing.
                        </li>
                        <li className="pl-2">
                            <strong className="text-orange-300 block mb-1">AJAX / History API pushing (Vanilla JS)</strong>
                            If not using an SPA framework, you manually intercept link clicks, fetch the HTML of the next page via <code>fetch()</code>, update the main content div, and use <code>history.pushState()</code> to update the URL natively—all while an audio player sitting in a fixed footer continues playing unharmed.
                        </li>
                    </ul>
                </div>
            </motion.section>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800 pb-12">
                <Link to="/webdevelopment/html/media-flash-video" className="flex items-center gap-2 text-gray-500 hover:text-white"><ArrowLeft size={16} /> Flash & Video</Link>
                <Link to="/webdevelopment/html/media-best-practices" className="flex items-center gap-2 text-gray-500 hover:text-white">Best Practices <ArrowRight size={16} /></Link>
            </div>

        </motion.div>
    );
};

export default AudioWeb;
