import React from 'react';
import { ShieldCheck, BookOpen, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";

const Section = ({ title, icon: Icon, children }) => (
    <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-sky-500/20 to-cyan-500/20 rounded-xl border border-sky-500/30 text-sky-400">
                <Icon size={28} />
            </div>
            <h2 className="text-3xl font-bold text-white">{title}</h2>
        </div>
        {children}
    </section>
);

const InfoBox = ({ type = "note", children }) => {
    const styles = {
        note: "border-sky-500 bg-sky-900/10 text-sky-200",
        warning: "border-yellow-500 bg-yellow-900/10 text-yellow-200",
        tip: "border-green-500 bg-green-900/10 text-green-200",
    };
    return (
        <div className={`border-l-4 p-6 rounded-r-xl my-6 ${styles[type]}`}>
            {children}
        </div>
    );
};

export default function BestPracticesRecap() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Animations Best Practices & Recap"
                description="Consolidate your CSS animation knowledge with performance tips, best habits, and a quick recap."
                keywords="css animation performance, css animation best practices"
                url="/webdevelopment/css/animations/recap"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <h1 className="text-5xl font-extrabold text-white mb-6">
                    Best Practices & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">Recap</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    Performance matters. Learn how to write animations that browsers can execute flawlessly without draining battery life.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <Section title="A few habits worth building early" icon={ShieldCheck}>
                    <ul className="space-y-4 mb-6 list-disc pl-6">
                        <li><strong>Use <code>linear</code> for mechanical motion:</strong> Spinners, scrolling tickers. Use <code>ease</code> or <code>ease-in-out</code> for natural motion like growing or sliding.</li>
                        <li><strong>Don't forget <code>forwards</code>:</strong> This is the most common bug beginners run into — an element that flickers and disappears. Check <code>fill-mode</code> first.</li>
                        <li><strong>Favor <code>transform</code> and <code>opacity</code>:</strong> Browsers are heavily optimized to handle these smoothly. Animating layout properties like width, height, top, or left forces the browser to recalculate the layout of the entire page, which causes stuttering.</li>
                        <li><strong>Less motion is usually better motion:</strong> A 1.15x scale reads as a gentle pulse. A 2x scale reads as the page yelling at you.</li>
                    </ul>
                </Section>

                <Section title="Quick recap" icon={BookOpen}>
                    <div className="bg-[#161b22] border border-gray-800 p-6 rounded-xl">
                        <ul className="space-y-3 list-disc pl-4 text-sky-200">
                            <li><strong className="text-sky-400">@keyframes</strong> describes the stages of motion from 0% to 100%.</li>
                            <li><strong className="text-sky-400">animation</strong> attaches motion to an element, bundling duration, timing, and delay.</li>
                            <li><strong className="text-sky-400">iteration-count</strong> sets how many times it plays (infinite).</li>
                            <li><strong className="text-sky-400">direction</strong> dictates the path (use alternate for pendulum swings).</li>
                            <li><strong className="text-sky-400">fill-mode</strong> (forwards) prevents snapping back to initial styles.</li>
                            <li><strong className="text-sky-400">animation-play-state</strong> freezes and resumes motion on demand.</li>
                        </ul>
                    </div>
                    
                    <InfoBox type="tip">
                        <strong>Ready for the next step?</strong> You now have everything you need to build motion that runs entirely on its own. The next frontier is combining everything from this module and the last one — transitions and animations together — to build interfaces that feel properly responsive and alive.
                    </InfoBox>
                </Section>
            </div>

            <div className="flex justify-start mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/animations/examples" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Real Examples
                </Link>
            </div>
        </article>
    );
}