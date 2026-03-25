import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Key, Lightbulb, AlertTriangle, ArrowRight, Code2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";
import CodeBlock from "../../../../components/CodeBlock";

const Section = ({ title, icon: Icon, children, id }) => (
    <section id={id} className="relative mb-16 sm:mb-24 scroll-mt-28">
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full">
            <div className="p-2 sm:p-3 md:p-4 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-xl sm:rounded-2xl border border-amber-500/40 text-amber-500 shadow-[0_0_30px_rgba(251,191,36,0.15)] flex-shrink-0">
                <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight w-full break-words">
                {title}
            </h2>
        </div>
        <div className="space-y-6 sm:space-y-8 w-full">
            {children}
        </div>
    </section>
);

const HighlightBox = ({ title, children, type = "info" }) => {
    const config = {
        key:  { icon: Key,           color: "text-amber-400",   border: "border-amber-500/40",   bg: "bg-gradient-to-br from-amber-900/40 to-yellow-900/10",   heading: "text-amber-500",  shadow: "shadow-amber-500/10"  },
        note: { icon: BookOpen,      color: "text-sky-400",     border: "border-sky-500/40",     bg: "bg-gradient-to-br from-sky-900/40 to-blue-900/10",       heading: "text-sky-400",    shadow: "shadow-sky-500/10"    },
        tip:  { icon: Lightbulb,     color: "text-emerald-400", border: "border-emerald-500/40", bg: "bg-gradient-to-br from-emerald-900/40 to-green-900/10",   heading: "text-emerald-400",shadow: "shadow-emerald-500/10"},
        warn: { icon: AlertTriangle, color: "text-rose-400",    border: "border-rose-500/40",    bg: "bg-gradient-to-br from-rose-900/40 to-red-900/10",       heading: "text-rose-500",   shadow: "shadow-rose-500/10"   },
    }[type] || { icon: BookOpen, color: "text-sky-400", border: "border-sky-500/40", bg: "bg-gradient-to-br from-sky-900/40 to-blue-900/10", heading: "text-sky-400", shadow: "shadow-sky-500/10" };
    const Icon = config.icon;
    return (
        <div className={`p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl ${config.bg} border ${config.border} shadow-xl ${config.shadow} my-8 sm:my-10 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 w-full`}>
            <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 blur-3xl rounded-full ${config.bg} transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700`}></div>
            <h4 className={`text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3 ${config.heading} relative z-10 w-full`}>
                <div className={`p-1.5 sm:p-2 rounded-lg bg-black/20 ${config.border} border shrink-0`}>
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${config.color}`} />
                </div>
                <span className="break-words">{title}</span>
            </h4>
            <div className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-line relative z-10 font-medium w-full">
                {children}
            </div>
        </div>
    );
};

const Principle = ({ number, title, children }) => (
    <div className="flex gap-4 p-5 bg-[#0a0c10] border border-gray-800/60 rounded-2xl hover:border-amber-500/20 transition-colors group">
        <div className="w-9 h-9 shrink-0 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-black text-amber-400 text-sm group-hover:bg-amber-500/20 transition-colors">
            {number}
        </div>
        <div className="flex-1 min-w-0">
            <h4 className="text-base font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">{title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{children}</p>
        </div>
    </div>
);

const CleanConditions = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 flex flex-col gap-6 sm:gap-8 leading-loose tracking-wide font-sans pb-16 sm:pb-20 w-full px-4 sm:px-0">
            <SEO
                title="Writing Clean Logical Conditions | JavaScript Module 3.5"
                description="Master the principles for writing clear, readable, and maintainable logical conditions in JavaScript — named constants, De Morgan's laws, positive phrasing, and more."
                keywords="clean code javascript, logical conditions javascript, De Morgan's law javascript, readable conditions, boolean expressions"
                url="/webdevelopment/javascript/clean-conditions"
            />

            <header className="py-10 sm:py-16 md:py-24 text-center border-b border-white/10 mb-10 sm:mb-16 md:mb-20 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 rounded-b-[40px] w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-amber-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none opacity-50"></div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                        <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                        <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Module 3.5: Writing Clean Conditions</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter drop-shadow-2xl px-2 w-full break-words">
                        Clean <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-orange-500">Logic.</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light px-4">
                        Logical conditions encode business rules directly. Write them so clearly that a colleague can understand them at a glance.
                    </p>
                </motion.div>
            </header>

            <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300 w-full border-box">

                <Section title="3.5 Writing Clean Logical Conditions" icon={Zap} id="clean-conditions">
                    <p className="text-lg sm:text-xl font-medium text-white p-6 bg-[#0d1117] border border-gray-800/60 rounded-2xl">
                        Logical conditions are among the most important expressions to write clearly, because they encode business rules directly. Unclear conditions lead to incorrect logic, bugs that resist debugging, and code that cannot be maintained by others.
                    </p>

                    <div className="flex flex-col gap-4 my-8">
                        <Principle number="1" title="Extract complex conditions into named constants or functions">
                            A name provides documentation. <code>const isEligible = age &gt;= 18 &amp;&amp; hasValidID &amp;&amp; !isBlacklisted</code> is instantly understandable. The raw condition alone is not.
                        </Principle>
                        <Principle number="2" title="Prefer positive phrasing over negation">
                            <code>isActive</code> is clearer than <code>!isInactive</code>. Name your booleans to reflect the positive state wherever possible.
                        </Principle>
                        <Principle number="3" title="Avoid double negatives">
                            <code>!(!isValid)</code> should just be <code>isValid</code>. Double negatives require extra mental processing with no benefit.
                        </Principle>
                        <Principle number="4" title="Apply De Morgan's Laws for simplification">
                            <code>!(A &amp;&amp; B)</code> is equivalent to <code>(!A || !B)</code>. Choose whichever form is more readable for the specific case — usually the one with fewer negations.
                        </Principle>
                        <Principle number="5" title="Use parentheses for compound expressions">
                            Even when technically unnecessary, parentheses communicate intent and prevent misreading: <code>(isAdmin || isOwner) &amp;&amp; !isBanned</code> is clearer than the ungrouped version.
                        </Principle>
                        <Principle number="6" title="Limit conditions to two or three terms">
                            More than that usually means the condition should be extracted into a clearly named function. Long conditions are a code smell.
                        </Principle>
                    </div>

                    <CodeBlock
                        title="before-and-after.js"
                        language="javascript"
                        code={`// ❌ Hard to read — what does this mean?
if (!user.deleted && user.age >= 18 && user.subscription !== 'free' && !user.isBanned) {
  grantAccess(user);
}

// ✓ Extract into named constant — self-documenting
const isPremiumAdultUser =
  !user.deleted &&
  user.age >= 18 &&
  user.subscription !== 'free' &&
  !user.isBanned;

if (isPremiumAdultUser) {
  grantAccess(user);
}

// ✓ Or extract into a named function for reusability & testability
function canAccessPremiumContent(user) {
  if (user.deleted || user.isBanned) return false;
  if (user.age < 18)                 return false;
  if (user.subscription === 'free')  return false;
  return true;
}

if (canAccessPremiumContent(user)) {
  grantAccess(user);
}`}
                    />

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#fbbf24] mt-12 sm:mt-16 mb-4">
                        De Morgan's Laws in Practice
                    </h3>
                    <p className="mb-6">
                        De Morgan's Laws are a pair of logical transformation rules that help simplify conditions involving negation. Knowing them lets you rewrite conditions into more readable forms:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                        <div className="p-5 bg-[#0a0c10] border border-gray-800 rounded-2xl">
                            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3">Law 1</p>
                            <code className="text-amber-400 font-mono text-sm block mb-2">!(A &amp;&amp; B)</code>
                            <p className="text-gray-400 text-xs mb-2">is equivalent to:</p>
                            <code className="text-emerald-400 font-mono text-sm block mb-3">(!A || !B)</code>
                            <p className="text-gray-500 text-xs">NOT (A and B) = (NOT A) or (NOT B)</p>
                        </div>
                        <div className="p-5 bg-[#0a0c10] border border-gray-800 rounded-2xl">
                            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3">Law 2</p>
                            <code className="text-amber-400 font-mono text-sm block mb-2">!(A || B)</code>
                            <p className="text-gray-400 text-xs mb-2">is equivalent to:</p>
                            <code className="text-emerald-400 font-mono text-sm block mb-3">(!A &amp;&amp; !B)</code>
                            <p className="text-gray-500 text-xs">NOT (A or B) = (NOT A) and (NOT B)</p>
                        </div>
                    </div>

                    <CodeBlock
                        title="de-morgans.js"
                        language="javascript"
                        code={`// Original — hard to read with double negation
if (!(isInvalid || isExpired)) {
  processRequest();
}

// De Morgan applied — clearer positive phrasing
if (!isInvalid && !isExpired) {
  processRequest();
}

// Even better — use named positive booleans and skip the negation:
const isValid   = !isInvalid;
const isCurrent = !isExpired;
if (isValid && isCurrent) {
  processRequest();
}`}
                    />

                    <HighlightBox title="The Golden Rule of Conditions" type="key">
                        A condition should read like an English sentence. If you have to stop and mentally decode a condition to understand what it does, it needs to be refactored. Use names that reveal intent, keep conditions short, and extract complexity into well-named functions.
                    </HighlightBox>

                    <HighlightBox title="What You've Learned in Module 3" type="tip">
                        {'✓ if / else if / else chains, guard clauses, and the switch statement\n✓ All six falsy values and why empty arrays/objects are truthy\n✓ Every loop type: for, while, do...while, for...of, for...in\n✓ break, continue, and labeled statements for loop flow control\n✓ Principles for writing clear, readable, maintainable logical conditions'}
                    </HighlightBox>

                </Section>

                {/* Footer Navigation */}
                <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-800/60 text-center relative w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-2xl mx-auto">
                        <Link to="/webdevelopment/javascript/break-continue" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/20 border border-gray-800 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto self-start sm:self-auto order-2 sm:order-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-white flex items-center justify-center border border-gray-800 transition-colors">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                            </div>
                            <div className="text-left w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block">Previous</span>
                                <span className="text-gray-300 font-bold text-xs sm:text-sm">break, continue & Labels</span>
                            </div>
                        </Link>

                        <Link to="/webdevelopment/javascript" className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0c10] border border-gray-800 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.1)] transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                            <div className="text-right w-full h-full">
                                <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1 block group-hover:text-amber-500/80 transition-colors">Up Next</span>
                                <span className="text-gray-200 font-bold text-xs sm:text-sm group-hover:text-white transition-colors">Back to JS Course Home</span>
                            </div>
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-gray-800/40 text-gray-400 group-hover:text-amber-400 group-hover:bg-amber-500/10 flex items-center justify-center border border-gray-800 group-hover:border-amber-500/30 transition-all duration-300">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </article>
    );
};

export default CleanConditions;
