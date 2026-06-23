import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Eye, Bug } from 'lucide-react';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";

const AccessibilityBugs = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO title="CSS Transitions Accessibility and Common Bugs" description="Learn how to handle prefers-reduced-motion and fix common page-load animation bugs." url="/webdevelopment/css/transitions/accessibility" />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-br from-sky-500/20 to-cyan-500/20 rounded-lg border border-sky-500/30 text-sky-400">
                        <Eye size={24} />
                    </div>
                    <span className="text-sky-400 font-bold tracking-widest uppercase text-sm">CSS Transitions / Part 5</span>
                </div>
                <h1 className="text-4xl font-extrabold text-white mb-6">Don't Forget People Who Get Motion Sick</h1>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <p>
                    This is the one piece of the original material that's easy to treat as an afterthought but really shouldn't be. Vestibular disorders and motion sensitivity are common enough that browsers expose a setting for it, and respecting it costs you three lines:
                </p>
                <CodeBlock language="css" code={`@media (prefers-reduced-motion: reduce) {
    * {
        transition: none !important;
    }
}`} />
                <p>
                    If <code>!important</code> feels too blunt for your codebase, scope it to your animated classes instead. Either way — ship this. It's one of the few accessibility wins that's almost zero effort.
                </p>

                <h3 className="text-2xl font-bold text-white mt-16 mb-4 flex items-center gap-2">
                    <Bug className="text-red-400" /> The "why did it animate on page load" bug
                </h3>
                <p>
                    A common surprise: you set up a fade-in for a modal, write <code>opacity: 0</code> as the default and <code>opacity: 1</code> for <code>.is-visible</code>, and then the <em>very first time</em> the page loads with <code>.is-visible</code> already present, you see it visibly fade in — even though no user action happened yet.
                </p>
                <p>
                    This happens because the browser applies the transition to <em>any</em> property change it detects after the stylesheet is parsed, including the very first style calculation. The usual fix is to add the "visible" class slightly after load, via JS, so the browser registers the <code>0</code> state first and the change to <code>1</code> second:
                </p>
                <CodeBlock language="javascript" code={`const modal = document.querySelector('.modal');

// without the delay, the browser may collapse both states into one frame
requestAnimationFrame(() => {
    modal.classList.add('is-visible');
});`} />
                <p>
                    This is also why a lot of component libraries add a <code>no-transition</code> class on initial render and strip it after the first paint — same problem, same fix, different naming.
                </p>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/transitions/properties" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <ArrowLeft size={16} /> Previous
                </Link>
                {/* <Link to="/webdevelopment/css/transitions/exercises" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Summary & Exercises <ArrowRight size={16} />
                </Link> */}
            </div>
        </article>
    );
};
export default AccessibilityBugs;