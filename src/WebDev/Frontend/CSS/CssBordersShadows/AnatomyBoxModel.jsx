import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, Code2 } from 'lucide-react';
import SEO from '../../../../components/SEO';
import CssBorderRadiusSimulator from '../../../../simulators/web/css/CssBorderRadiusSimulator';

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

const CodeBlock = ({ title = 'styles.css', language = 'css', children }) => (
    <div className="my-6 w-full rounded-xl overflow-hidden bg-[#0d1117] border border-gray-800 shadow-2xl">
        <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-gray-800">
            <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/30 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/30 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/30 border border-green-500/50" />
                </div>
                <span className="text-xs font-bold text-gray-400 font-mono">{title}</span>
            </div>
            <span className="text-[10px] font-bold text-gray-500 uppercase bg-gray-800 px-2 py-0.5 rounded border border-gray-700">{language}</span>
        </div>
        <div className="p-5 overflow-x-auto font-mono text-sm leading-relaxed">
            <pre className="text-gray-300 whitespace-pre-wrap"><code>{children}</code></pre>
        </div>
    </div>
);

const InfoBox = ({ type = 'note', children }) => {
    const styles = {
        note: 'border-sky-500 bg-sky-900/10 text-sky-200',
        tip: 'border-green-500 bg-green-900/10 text-green-200',
        warning: 'border-yellow-500 bg-yellow-900/10 text-yellow-200',
    };
    return (
        <div className={`border-l-4 p-6 rounded-r-xl my-6 ${styles[type]}`}>
            {children}
        </div>
    );
};

export default function AnatomyBoxModel() {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="The Anatomy of Borders and the CSS Box Model"
                description="Understanding the physical boundaries of web elements through borders and the CSS Box Model. Learn border styles, width, and responsive border-radius."
                keywords="css borders, css box model, border-radius, box-sizing border-box, responsive design css"
                url="/webdevelopment/css/borders-shadows/anatomy"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <div className="flex items-center gap-2 mb-4">
                    {/* <span className="text-sm font-bold text-sky-400 uppercase tracking-widest">Section 1</span> */}
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                    The Anatomy of Borders and the{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">
                        CSS Box Model
                    </span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl">
                    Every element on a web page is a rectangular box. The border is the structural boundary of that box. Discover how to control it seamlessly.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <Section title="Understanding the Boundaries" icon={Box}>
                    <p>
                        Understanding borders requires a foundational understanding of how web browsers interpret and render HTML elements. Every single element on a web page, regardless of its shape or content, is inherently a rectangular box. This is governed by the <strong>CSS Box Model</strong>, a fundamental concept that dictates how space is allocated. The Box Model consists of four concentric layers: the innermost content area, the padding (inner spacing), the border, and the margin (outer spacing).
                    </p>
                    <p>
                        The border is the critical structural boundary that separates the inside of the element from the outside world. It is the physical wall of the box. Understanding this physical nature is vital because, unlike some other CSS properties, borders take up actual, calculable space in the document flow. If you create a box that is strictly defined to be 300 pixels wide, and you add a 5 pixel solid border to the left and right sides, the total mathematical width of that element becomes 310 pixels. 
                    </p>
                    <InfoBox type="warning">
                        <strong>The Solution to Layout Frustration:</strong> This default behavior (known as <code className="bg-gray-800 px-1 rounded text-pink-400">box-sizing: content-box</code>) historically caused immense frustration for developers, as adding a border could unexpectedly push adjacent elements onto the next line, breaking carefully crafted grid layouts. Today, modern web development relies almost exclusively on a reset rule called <code className="bg-gray-800 px-1 rounded text-green-400">box-sizing: border-box</code>.
                    </InfoBox>
                    <p>
                        When you apply <code className="bg-gray-800 px-1 rounded text-green-400">box-sizing: border-box</code>, the browser alters its calculation method: it forces the padding and the border to be absorbed <em>into</em> the specified width and height. Thus, a 300-pixel wide box remains exactly 300 pixels wide, with the 5-pixel borders pushing inward rather than expanding outward. This makes responsive design significantly more predictable.
                    </p>
                </Section>

                <Section title="Shorthands and Styles" icon={Code2}>
                    <p>
                        When applying borders, developers most commonly use the <code className="bg-gray-800 px-1 rounded text-sky-400">border</code> shorthand property. This shorthand requires up to three distinct values: width, style, and color. The syntax <code className="bg-gray-800 px-1 rounded text-sky-400">border: 2px solid black;</code> is universally recognized. However, under the hood, the browser engine unpacks this shorthand into discrete longhand properties: <code className="bg-gray-800 px-1 rounded">border-width</code>, <code className="bg-gray-800 px-1 rounded">border-style</code>, and <code className="bg-gray-800 px-1 rounded">border-color</code>. You have the granularity to control each of these independently, and even more granular control over specific sides, such as <code className="bg-gray-800 px-1 rounded text-pink-400">border-left-color</code>.
                    </p>
                    <CodeBlock title="border-styles.css">{`/* Shorthand */
.box {
  border: 2px solid black;
}

/* Longhand equivalent */
.box-longhand {
  border-width: 2px;
  border-style: solid;
  border-color: black;
}

/* Specific side */
.warning-box {
  border-left: 4px solid red;
}`}</CodeBlock>
                    <p>
                        The most strictly enforced rule of the border property is that the <strong>border-style must be defined</strong>. If you set a width and a color but omit the style, the browser will render nothing. The <code>solid</code> style is ubiquitous in modern flat design, providing a clean, uninterrupted line. However, CSS offers a rich vocabulary of styles inherited from earlier eras of web design. The <code>dashed</code> and <code>dotted</code> styles are excellent for indicating drag-and-drop zones or secondary information. The <code>double</code> style requires a minimum width of 3 pixels to render properly, as it creates two parallel solid lines with a transparent gap between them. Furthermore, CSS includes a suite of 3D-effect borders: <code>groove</code>, <code>ridge</code>, <code>inset</code>, and <code>outset</code>.
                    </p>
                </Section>

                <Section title="Mastering Border Radius" icon={Box}>
                    <p>
                        While sharp, 90-degree angles are the default for rectangular boxes, user interface design often demands softer, more organic shapes. The <code className="bg-gray-800 px-1 rounded text-sky-400">border-radius</code> property is the CSS mechanism for smoothing these harsh corners. It is important to realize that border-radius does not merely redraw the visual border line; it alters the fundamental clipping path of the element's background and contents.
                    </p>
                    <p>
                        If an element has a solid red background and a border-radius of 10 pixels, the red background will seamlessly curve to follow that radius. If the element contains an image, however, the image may bleed past the rounded corners unless the parent element explicitly dictates <code className="bg-gray-800 px-1 rounded text-pink-400">overflow: hidden;</code> to enforce the new clipping path.
                    </p>
                    
                    {/* Interactive Simulator */}
                    <CssBorderRadiusSimulator />
                    
                    <p className="mt-8">
                        One of the most common beginner pitfalls involves creating circular and pill-shaped elements. To create a perfect circle from a perfectly square element, the industry standard is to use <code className="bg-gray-800 px-1 rounded text-green-400">border-radius: 50%</code>. Using a percentage tells the browser to calculate the radius dynamically based on the element's current dimensions.
                    </p>
                    <InfoBox type="tip">
                        <strong>Creating Pill-Shaped Buttons:</strong> Percentages become problematic when applied to rectangles. If you attempt to make a "pill" shaped button—a rectangle that is wider than it is tall—using <code>border-radius: 50%</code>, the browser calculates the horizontal radius based on the width and the vertical radius based on the height. This results in an asymmetrical, stretched, elliptical curve that looks deformed. The correct architectural approach for a pill-shaped button is to use a heavily exaggerated pixel value, such as <code className="bg-gray-800 px-1 rounded text-green-400">border-radius: 9999px</code>.
                    </InfoBox>
                </Section>

                <Section title="Logical Properties" icon={Code2}>
                    <p>
                        Finally, modern CSS layout techniques introduce "Logical Properties" for borders. Instead of tying borders to physical screen directions like <code>border-left</code> or <code>border-right</code>, modern architectures use <code className="bg-gray-800 px-1 rounded text-sky-400">border-inline-start</code> or <code className="bg-gray-800 px-1 rounded text-sky-400">border-block-end</code>. These logical properties adapt automatically to the user's reading direction. 
                    </p>
                    <p>
                        If you define a strong border on the <code>border-inline-start</code>, it will appear on the left side for an English user (left-to-right reading), but it will automatically flip to the right side for an Arabic user (right-to-left reading) without requiring any additional code. This represents the cutting edge of building internationally accessible, robust web layouts, ensuring your borders serve a structural purpose regardless of the user's native language.
                    </p>
                </Section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="/webdevelopment/css/backgrounds/summary" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    ← Backgrounds Summary
                </Link>
                <Link to="/webdevelopment/css/borders-shadows/accessibility" className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Next: Accessibility & Focus <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
}
