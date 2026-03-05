import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, ShieldAlert, MonitorUp, Code2, Film, Server, Database, AlertCircle, Info, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoSimulator from '../../../../simulators/web/VideoSimulator';

const FlashVideo = () => {
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
                    Flash, Video, and Media Embedding
                </h1>
                <p className="text-xl text-gray-400">
                    From the plugin era to native HTML5 multimedia playback.
                </p>
            </motion.div>

            {/* 4.1 The History and Decline of Flash */}
            <motion.section variants={itemVariants} className="space-y-6">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <Film className="text-orange-400 h-8 w-8" />
                    <h2 className="text-2xl font-bold text-white">6.1 The History and Decline of Flash</h2>
                </div>

                <div className="prose prose-invert max-w-none text-gray-300 space-y-4">
                    <p>
                        To understand the current state of web multimedia, you must first understand Flash — the technology that dominated web animation, video, and audio for over a decade and a half. Adobe Flash (originally developed by Macromedia as FutureSplash Animator in 1996) was a plugin-based technology that extended browser capabilities far beyond what standard HTML and JavaScript could achieve. It enabled fluid animation, rich interactive applications, full-screen video playback, and complex audio experiences at a time when browsers supported none of these natively.
                    </p>
                    <p>
                        Flash works through a browser plugin called the Flash Player. When you visit a page that includes Flash content, the Flash Player plugin intercepts the relevant content, renders it in its own environment, and displays the result within the browser window. The Flash authoring environment produces files with the <code>.fla</code> extension; these are then exported to the <code>.swf</code> (ShockWave Flash) format for deployment on the web. The <code>.swf</code> file is embedded in the HTML page, typically using a JavaScript technique called SWFObject that handles cross-browser compatibility.
                    </p>
                    <p>
                        At its peak around 2005, Flash was used not just for video players and animations but for entire websites. Creative studios built immersive Flash-powered experiences with complex navigation, particle effects, and cinematic intros. An entire generation of web designers built their careers around Flash skills. However, several forces combined to bring about Flash's eventual demise.
                    </p>

                    <div className="bg-[#111] border border-red-500/20 rounded-lg p-6 my-6 shadow-inner relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <ShieldAlert className="w-24 h-24 text-red-500" />
                        </div>
                        <h3 className="text-red-400 font-bold mb-3 absolute z-10">The Twin Blows to Flash</h3>
                        <div className="relative z-10 space-y-4 mt-8">
                            <div className="flex gap-4 items-start">
                                <div className="bg-red-500/10 p-3 rounded text-red-400 shrink-0 border border-red-500/20"><MonitorUp size={20} /></div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Mobile Web Exclusion</h4>
                                    <p className="text-sm">The first blow came from Apple in 2007, releasing the iPhone without Flash support due to battery consumption, security vulnerabilities, and its proprietary nature. The mobile web became a Flash-free zone by default.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="bg-orange-500/10 p-3 rounded text-orange-400 shrink-0 border border-orange-500/20"><Code2 size={20} /></div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Standardization of HTML5</h4>
                                    <p className="text-sm">The second blow was HTML5 and JavaScript maturation. Native <code>&lt;video&gt;</code> and <code>&lt;audio&gt;</code> elements, Canvas for 2D, and WebGL for 3D graphics allowed open standards to accomplish what previously required the Flash plugin.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mt-8">Why Study Flash If It Is Obsolete?</h3>
                    <p>
                        Flash is no longer used for new web development. Adobe officially ended Flash Player support on 31 December 2020. However, understanding Flash and SWFObject remains valuable. Existing legacy websites built between 1998 and 2015 still contain Flash concepts that may need migration or documentation. More importantly, the architectural concepts behind Flash embedding — fallback content, progressive enhancement, and codec compatibility — directly inform how modern HTML5 video and audio is implemented.
                    </p>
                </div>
            </motion.section>

            {/* 4.2 Embedding Flash Content with SWFObject */}
            <motion.section variants={itemVariants} className="space-y-6">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <Code2 className="text-orange-400 h-8 w-8" />
                    <h2 className="text-2xl font-bold text-white">6.2 Embedding Flash Content (SWFObject)</h2>
                </div>

                <div className="prose prose-invert max-w-none text-gray-300">
                    <p>
                        Even though Flash is no longer viable for new projects, understanding how Flash was embedded helps you appreciate the design philosophy behind HTML5 media elements. The standard method used a JavaScript library called <strong>SWFObject</strong>, which solved an ugly cross-browser compatibility problem where different browsers required completely different HTML syntax.
                    </p>
                    <p>
                        The SWFObject approach follows a pattern of <strong>progressive enhancement</strong> with a fallback. You first write standard HTML content inside a <code>&lt;div&gt;</code> element — this acts as the fallback. SWFObject is called via JavaScript, replacing the div's HTML content with the Flash movie if a compatible Flash Player is detected.
                    </p>

                    <div className="bg-[#0a0a0a] rounded-lg p-4 border border-white/10 my-6 font-mono text-sm overflow-x-auto">
                        <div className="text-gray-500 mb-2 border-b border-white/5 pb-2 uppercase tracking-widest text-[10px]">HTML/JavaScript snippet (Legacy Pattern)</div>
                        <pre className="text-blue-300">
                            {`<!DOCTYPE html>
<html>
<head>
  <script type="text/javascript" src="swfobject.js"></script>
  <script type="text/javascript">
      swfobject.embedSWF(
        "flash/animation.swf",  // Path to the .swf file
        "flash-container",      // ID of the target div
        "600",                  // Width in pixels
        "400",                  // Height in pixels
        "8.0.0"                 // Minimum Flash Player version
      );
  </script>
</head>
<body>
  <div id="flash-container">
    <p>This animation requires Adobe Flash Player.</p>
  </div>
</body>
</html>`}
                        </pre>
                    </div>

                    <p>
                        Notice the elegance of this fallback pattern. Users without Flash see meaningful content. Search engines index the text. Screen readers access the HTML alternative. This pattern of providing a baseline experience, then enhancing it, remains a foundational principle today.
                    </p>
                </div>
            </motion.section>

            {/* 4.3 Understanding Video Formats */}
            <motion.section variants={itemVariants} className="space-y-6">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <Database className="text-orange-400 h-8 w-8" />
                    <h2 className="text-2xl font-bold text-white">6.3 Video Formats & Browser Compatibility</h2>
                </div>

                <div className="prose prose-invert max-w-none text-gray-300">
                    <p>
                        A video file is not a single entity; it is a <strong>container</strong> that holds at least two streams of data: a video stream and an audio stream. The container format (e.g., MP4, WebM) defines how these streams are packaged. The <strong>codec</strong> (coder-decoder) defines how each stream is compressed and decompressed.
                    </p>
                    <p>
                        Different browsers support different combinations of containers and codecs. To guarantee your video plays broadly, you must often provide multiple formats.
                    </p>

                    <div className="overflow-x-auto my-6">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-white/5 border-b border-white/10">
                                    <th className="p-3 text-white font-medium rounded-tl-lg">Format / Codec</th>
                                    <th className="p-3 text-white font-medium rounded-tr-lg">Primary Browser Support</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm divide-y divide-white/5">
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="p-3 text-orange-300 font-mono">MP4 (H.264 + AAC)</td>
                                    <td className="p-3 text-gray-400">Chrome, Safari, Edge, IE9+, iOS, Android (Universal approach)</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors border-l-2 border-green-500">
                                    <td className="p-3 text-green-300 font-mono">WebM (VP8/VP9 + Vorbis/Opus)</td>
                                    <td className="p-3 text-gray-400">Chrome, Firefox, Opera, Edge (Open codec preference)</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="p-3 text-gray-300 font-mono">Ogg (Theora + Vorbis)</td>
                                    <td className="p-3 text-gray-500">Firefox, Chrome, Opera (Legacy open support)</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors border-l-2 border-red-500">
                                    <td className="p-3 text-red-300 font-mono">Flash Video (FLV)</td>
                                    <td className="p-3 text-gray-500">Legacy browsers with Flash Player installed only</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg flex items-start gap-3">
                        <Info className="text-blue-400 shrink-0 mt-0.5" size={20} />
                        <div className="text-sm text-blue-200">
                            <strong className="text-white block mb-1">Encoding / Transcoding</strong>
                            The process of converting video from one format to another is transcoding. Tools like FFmpeg or HandBrake automate this. Always consider bitrate (data per second), resolution, and frame rate when preparing video for the web.
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* 4.4 The HTML5 video Element and Simulator */}
            <motion.section variants={itemVariants} className="space-y-6">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <PlayCircle className="text-orange-400 h-8 w-8" />
                    <h2 className="text-2xl font-bold text-white">6.4 The HTML5 &lt;video&gt; Element</h2>
                </div>

                <div className="prose prose-invert max-w-none text-gray-300">
                    <p>
                        The HTML5 <code>&lt;video&gt;</code> element is the native, plugin-free way to embed video content. It provides a standardised API supported by all modern browsers, allowing the browser to supply its own playback controls to handle decoding directly.
                    </p>

                    <div className="bg-[#0a0a0a] rounded-lg p-4 border border-white/10 my-6 font-mono text-sm">
                        <pre className="text-blue-300">
                            {`<video
  poster="images/video-preview.jpg"
  width="960" height="540"
  controls preload="metadata"
>
  <!-- Broadest compatibility first -->
  <source src="presentation.mp4" type='video/mp4' />
  <!-- Fallback for open-codec browsers -->
  <source src="presentation.webm" type='video/webm' />
  <!-- Text Fallback -->
  <p>Browser unsupported. <a href="presentation.mp4">Download</a>.</p>
</video>`}
                        </pre>
                    </div>

                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-400 mb-8">
                        <li><strong>poster:</strong> Image displayed before playback (prevents empty black rectangles).</li>
                        <li><strong>controls:</strong> Boolean attribute showing native browser play, pause, volume UI.</li>
                        <li><strong>preload:</strong> "metadata" (downloads only dimensions/length), "auto" (downloads full video), or "none".</li>
                        <li><strong>loop / autoplay:</strong> Restarts when ended / starts immediately (often blocked if not muted).</li>
                    </ul>
                </div>

                {/* Interactive Simulator */}
                <div className="my-10 border-t border-b border-white/5 py-4">
                    <VideoSimulator />
                </div>
            </motion.section>

            {/* 4.5 Hosted Video Services vs. Self-Hosting */}
            <motion.section variants={itemVariants} className="space-y-6">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <Server className="text-orange-400 h-8 w-8" />
                    <h2 className="text-2xl font-bold text-white">6.5 Hosted Services vs Self-Hosting</h2>
                </div>

                <div className="prose prose-invert max-w-none text-gray-300">
                    <p>
                        When adding video, you face a strategic decision: host it yourself on your own server, or upload it to a hosted service (YouTube, Vimeo) and embed their player.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 my-6">
                        <div className="bg-[#111] border border-white/10 rounded-lg p-5">
                            <h3 className="text-lg font-bold text-white mb-3">Hosted Services</h3>
                            <p className="text-sm text-gray-400 mb-4">YouTube, Vimeo, Wistia.</p>
                            <ul className="text-sm text-gray-300 space-y-2 list-none">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>Zero bandwidth constraints or costs.</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>Automatic transcoding to all formats/resolutions.</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>Discoverability via search engines.</li>
                                <li className="flex items-center gap-2 mt-4 pt-4 border-t border-white/5"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>Loss of visual control, branding, and ads.</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>Content subject to platform terms.</li>
                            </ul>
                        </div>
                        <div className="bg-[#111] border border-white/10 rounded-lg p-5">
                            <h3 className="text-lg font-bold text-white mb-3">Self-Hosting</h3>
                            <p className="text-sm text-gray-400 mb-4">Hosting MP4s directly on your server.</p>
                            <ul className="text-sm text-gray-300 space-y-2 list-none">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>Complete control over player UI.</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>No third-party ads or related video distractions.</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>Can protect behind auth/paywalls securely.</li>
                                <li className="flex items-center gap-2 mt-4 pt-4 border-t border-white/5"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>Expensive server bandwidth and storage.</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>Technical burden of manual encoding/fallbacks.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-orange-500/10 border border-orange-500/20 p-4 rounded-lg flex items-start gap-3 mt-6">
                        <AlertCircle className="text-orange-400 shrink-0 mt-0.5" size={20} />
                        <div className="text-sm text-orange-200">
                            <strong className="text-white block mb-1">A Practical Recommendation</strong>
                            For most small to medium websites, a hybrid approach works best: use a hosted service as the primary delivery mechanism, but embed videos within your own page design. Use self-hosting strictly for gated content like premium courses or proprietary material.
                        </div>
                    </div>
                </div>
            </motion.section>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800 pb-12">
                <Link to="/webdevelopment/html/image-formats" className="flex items-center gap-2 text-gray-500 hover:text-white"><ArrowLeft size={16} /> Image Formats</Link>
                <Link to="/webdevelopment/html/media-audio" className="flex items-center gap-2 text-gray-500 hover:text-white">Audio on Web <ArrowRight size={16} /></Link>
            </div>

        </motion.div>
    );
};

export default FlashVideo;
