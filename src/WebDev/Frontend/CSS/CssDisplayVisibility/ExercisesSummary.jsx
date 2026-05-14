import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ListTodo } from 'lucide-react';
import SEO from '../../../../components/SEO';

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

export default function ExercisesSummary() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="CSS Display & Visibility Exercises"
                description="Practice CSS display, visibility, opacity, and overflow with these mini-exercises. Read the Module 8 summary to reinforce your learning."
                keywords="css display exercises, css layout practice, css overflow examples, learning css display"
                url="/webdevelopment/css/display-visibility/exercises"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-bold text-sky-400 uppercase tracking-widest">Section 4</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                    Mini Exercises &{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">
                        Module Summary
                    </span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl">
                    Test your knowledge of the CSS Document Flow and review the core takeaways from Module 8.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <Section title="Mini Exercises" icon={ListTodo}>
                    <div className="space-y-6">
                        <div className="bg-gray-800/30 border border-gray-700 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-white mb-2">Exercise 1: The Inline-Block Navigation</h3>
                            <p>
                                Create a <code>&lt;nav&gt;</code> container with four <code>&lt;a&gt;</code> links inside. By default, links are inline. Write CSS to change them to <code>inline-block</code>. Give them <code>padding: 12px 20px</code>, a background color, and a slight margin to separate them. Observe how they now respect vertical padding while sitting side-by-side.
                            </p>
                        </div>
                        
                        <div className="bg-gray-800/30 border border-gray-700 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-white mb-2">Exercise 2: The Ghost Button</h3>
                            <p>
                                Create two identical buttons next to each other. Give the second button a class of <code>.ghost</code>. Apply <code>opacity: 0</code> to the ghost button. Hover your mouse over the empty space where the button should be—notice that if you attached a <code>:hover</code> state or an onclick event, it would still trigger! Now change it to <code>visibility: hidden</code> and observe the difference in interactivity.
                            </p>
                        </div>

                        <div className="bg-gray-800/30 border border-gray-700 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-white mb-2">Exercise 3: The Restricted Modal</h3>
                            <p>
                                Create a <code>&lt;div&gt;</code> with a fixed <code>width: 300px</code> and <code>height: 150px</code>. Give it a solid border. Inside, paste three long paragraphs of placeholder text. Set the container's overflow to <code>hidden</code>, then to <code>scroll</code>, and finally to <code>auto</code>. Note how the UI behaves differently in each state.
                            </p>
                        </div>
                    </div>
                </Section>

                <Section title="Module 8 Summary" icon={CheckCircle}>
                    <ul className="list-disc pl-6 space-y-3">
                        <li><strong className="text-sky-400">display: block</strong>: Dominates the line, stretches full width, respects all box model sizing.</li>
                        <li><strong className="text-sky-400">display: inline</strong>: Flows politely with text, ignores width/height, ignores vertical pushing margins.</li>
                        <li><strong className="text-sky-400">display: inline-block</strong>: Flows politely with text, but aggressively respects all internal width/height/margin/padding.</li>
                        <li><strong className="text-sky-400">display: none</strong>: Erases the element from the layout entirely (0 space).</li>
                        <li><strong className="text-sky-400">visibility: hidden</strong>: Turns the element invisible but leaves an empty hole exactly its size.</li>
                        <li><strong className="text-sky-400">opacity: 0</strong>: Turns the element invisible, leaves a hole, and remains clickable.</li>
                        <li><strong className="text-sky-400">overflow: auto</strong>: The safest way to handle content that is too large for its container, dynamically adding scrollbars only when necessary.</li>
                    </ul>
                </Section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/display-visibility/overflow-spillage" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    ← Back: Managing Spillage
                </Link>
                {/* Next module link would go here, leaving it empty or linking back to CSS index */}
                <Link to="/webdevelopment/css" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Back to CSS Home <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
}
