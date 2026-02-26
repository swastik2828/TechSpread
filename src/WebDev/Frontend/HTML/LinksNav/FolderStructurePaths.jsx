import React from 'react';
import { FolderTree, ArrowRight, ArrowLeft, Folder, File, Code, LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../../../../components/SEO";

const Section = ({ title, icon: Icon, children }) => (
    <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl border border-orange-500/30 text-orange-400">
                <Icon size={28} />
            </div>
            <h2 className="text-3xl font-bold text-white">{title}</h2>
        </div>
        {children}
    </section>
);

const LocalCodeBlock = ({ code, label = "HTML" }) => (
    <div className="my-6 rounded-xl overflow-hidden bg-[#0d1117] border border-gray-800 shadow-2xl">
        <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-gray-800">
            <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-500/20"></div><div className="w-3 h-3 rounded-full bg-yellow-500/20"></div></div>
            <span className="text-[10px] font-bold text-gray-500 uppercase">{label}</span>
        </div>
        <div className="p-5 overflow-x-auto font-mono text-sm text-gray-300 whitespace-pre-wrap">{code}</div>
    </div>
);

const FolderStructurePaths = () => {
    return (
        <article className="max-w-5xl mx-auto text-gray-300 leading-loose">
            <SEO
                title="Folder Structure And Relative Paths in HTML"
                description="Learn how to map your website's folder structure to create accurate relative paths for links and assets."
                keywords="HTML relative paths, absolute vs relative paths, folder structure, website directory tree, linking to subfolders, parent folders, TechSpread"
                url="/webdevelopment/html/paths"
            />

            <header className="py-12 border-b border-gray-800 mb-12">
                <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase border border-orange-500/20 mb-4 inline-block">
                    Module 4.4
                </span>
                <h1 className="text-5xl font-extrabold text-white mb-6">Folder Structure <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">And Relative Paths</span></h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    To use relative URLs effectively, you need a clear mental model of your site’s folder (directory) structure. A strong directory structure is the backbone of a maintainable website.
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">

                <Section title="The Root Directory" icon={FolderTree}>
                    <p>
                        A website’s root folder is the top‑level directory that contains all the files and subfolders belonging to that site. Web servers are typically configured so that when someone visits the domain name with no path, such as <code>https://www.example.com</code>, they receive a default file, often named <code>index.html</code>, that sits in the root folder.
                    </p>
                    <p>
                        Subfolders within the root can hold related pages, images, scripts, and stylesheets. Think of the root folder as the entrance to a library, and the subfolders as the specific categorized sections (Fiction, Non-Fiction, Reference, etc.). Keeping files well-organized in these folders is crucial to ensure that links and media assets load correctly as your project grows.
                    </p>
                </Section>

                <Section title="Visualizing the Tree" icon={LayoutDashboard}>
                    <p>
                        Imagine a simple entertainment site with this directory structure:
                    </p>

                    <div className="bg-[#0A0A0A] border border-gray-800 rounded-xl p-6 font-mono text-sm shadow-xl my-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <FolderTree size={100} />
                        </div>
                        <div className="flex items-center gap-2 text-orange-400 mb-2 font-bold"><Folder size={16} /> examplearts/ <span className="text-gray-500 text-xs font-normal">(Root Directory)</span></div>
                        <div className="pl-6 border-l border-gray-800 ml-2 space-y-2 text-gray-400">
                            <div className="flex items-center gap-2"><File size={16} /> index.html</div>
                            <div className="flex items-center gap-2 text-blue-400"><Folder size={16} /> images/</div>
                            <div className="pl-6 border-l border-gray-800 ml-2">
                                <div className="flex items-center gap-2"><File size={16} /> logo.png</div>
                            </div>
                            <div className="flex items-center gap-2 text-blue-400"><Folder size={16} /> movies/</div>
                            <div className="pl-6 border-l border-gray-800 ml-2 space-y-2">
                                <div className="flex items-center gap-2"><File size={16} /> index.html</div>
                                <div className="flex items-center gap-2"><File size={16} /> listings.html</div>
                                <div className="flex items-center gap-2"><File size={16} /> reviews.html</div>
                                <div className="flex items-center gap-2 text-blue-400"><Folder size={16} /> dvd/</div>
                                <div className="pl-6 border-l border-gray-800 ml-2 space-y-2">
                                    <div className="flex items-center gap-2"><File size={16} /> index.html</div>
                                    <div className="flex items-center gap-2"><File size={16} /> reviews.html</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-blue-400"><Folder size={16} /> music/</div>
                            <div className="pl-6 border-l border-gray-800 ml-2 space-y-2">
                                <div className="flex items-center gap-2"><File size={16} /> index.html</div>
                                <div className="flex items-center gap-2"><File size={16} /> listings.html</div>
                                <div className="flex items-center gap-2"><File size={16} /> reviews.html</div>
                            </div>
                        </div>
                    </div>

                    <p>
                        Here, <code>examplearts</code> is the root folder of the site. It contains a homepage <code>index.html</code>, an <code>images</code> folder, and section folders: <code>movies</code> and <code>music</code>. Each section has its own index and related pages. The <code>movies</code> folder also contains a nested <code>dvd</code> subfolder.
                    </p>
                </Section>

                <Section title="Navigating the Directory Tree" icon={Code}>
                    <p>
                        Relative paths describe how to move from the current file’s location to the target file within this tree. To build these links, you must ask yourself: <em>"Where am I right now, and what steps must I take to reach the target file?"</em>
                    </p>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4 border-l-4 border-orange-500 pl-3">1. Linking to siblings (Same Folder)</h3>
                    <p>
                        If you are editing <code>music/index.html</code> and want to link to <code>music/reviews.html</code>, you only need the file name, because both files are in the same folder. They are siblings.
                    </p>
                    <LocalCodeBlock code={`<a href="reviews.html">Music reviews</a>`} />

                    <h3 className="text-xl font-bold text-white mt-8 mb-4 border-l-4 border-orange-500 pl-3">2. Moving down to children (Subfolders)</h3>
                    <p>
                        If you are in <code>index.html</code> at the root and want to link to the music listings, you need to step down into the music folder and then to the target file:
                    </p>
                    <LocalCodeBlock code={`<a href="music/listings.html">Music listings</a>`} />
                    <p>
                        From the root homepage to the DVD reviews nested deeply, you trace the full path downwards:
                    </p>
                    <LocalCodeBlock code={`<a href="movies/dvd/reviews.html">DVD reviews</a>`} />

                    <h3 className="text-xl font-bold text-white mt-8 mb-4 border-l-4 border-orange-500 pl-3">3. Moving up to parents (Parent Folders)</h3>
                    <p>
                        These examples all move “down” the directory tree into child folders. To move “up” to a parent folder, you use the special sequence <code>..</code> (two dots).
                    </p>
                    <p>
                        For example, from <code>music/reviews.html</code> back to the root homepage <code>index.html</code>:
                    </p>
                    <LocalCodeBlock code={`<a href="../index.html">Home</a>`} />
                    <p>
                        The <code>..</code> tells the browser to go up one level—from the <code>music</code> folder back to the root directory—and then look for <code>index.html</code> there.
                    </p>
                    <p>
                        From the DVD reviews page at <code>movies/dvd/reviews.html</code> back to the homepage, you are two levels deep, so you need to go up twice:
                    </p>
                    <LocalCodeBlock code={`<a href="../../index.html">Home</a>`} />
                    <p>
                        The first <code>..</code> moves from <code>dvd</code> to <code>movies</code>, and the second <code>..</code> from <code>movies</code> to the root folder. Practicing these patterns with a simple project on your own machine is a good way to build intuition.
                    </p>
                </Section>

                <Section title="Frameworks and Dynamic Paths" icon={Folder}>
                    <p>
                        A well‑organized folder structure has several benefits beyond simpler relative paths. Grouping related pages into folders, such as putting all movie pages under <code>/movies</code>, makes URLs cleaner and more meaningful to users and search engines. It also helps you keep track of assets like images and scripts by placing them in dedicated folders (<code>/images</code>, <code>/js</code>, <code>/css</code>), reducing the risk of name collisions and making the project easier to navigate as it grows.
                    </p>
                    <p>
                        Some content management systems and modern Javascript frameworks (like Next.js or generic React Router apps) generate pages dynamically rather than as separate <code>.html</code> files. Even in those cases, the concept of a logical directory structure lives on in the URL paths, which often mimic a folder hierarchy (for example, <code>/blog/2026/02/links/</code>).
                    </p>
                    <p>
                        When writing links in such modern systems, you still conceptually use relative or absolute paths, but the underlying implementation maps them to templates and database records instead of static files. It is common in React to use absolute paths from the domain root (e.g. <code>href="/movies/reviews"</code> starting with a slash) to ensure the framework routes consistently from anywhere.
                    </p>
                    <p className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg text-orange-200 mt-6">
                        <strong>Pro Tip:</strong> As you build more complex sites, take time to sketch your directory structure on paper or in a diagram before creating files. Decide where each section of content will live, what the main homepages are, and how users will move between them. Good planning prevents endless refactoring of broken links later.
                    </p>
                </Section>
            </div>

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
                <Link to="../urls" className="flex items-center gap-2 text-gray-500 hover:text-white"><ArrowLeft size={16} /> URLs: Abs vs Rel</Link>
                <Link to="../in-page" className="flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300">Next: In-Page Linking <ArrowRight size={16} /></Link>
            </div>
        </article>
    );
};

export default FolderStructurePaths;
