import { Routes, Route } from "react-router-dom";

// Main pages
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import UserDashboard from "./pages/UserDashboard";

// Tutorials-related pages
import Tutorial from "./pages/Tutorial";          // main tutorials hub
import Programming from "./Programming/Programming";
import AIML from "./AIML/AIML";
import AI from "./AIML/AI/AI";

// Web Development
import WebDevelopment from "./WebDev/WebDevelopment";
import Frontend from "./WebDev/Frontend/Frontend";
import HTML from "./WebDev/Frontend/HTML/HTML";
import FundamentalsWeb from "./WebDev/Frontend/HTML/FundamentalsWeb";
import IntroToHTML from "./WebDev/Frontend/HTML/IntroToHTML";
import HTMLStructure from "./WebDev/Frontend/HTML/HTMLStructure";
import HTMLElements from "./WebDev/Frontend/HTML/TextContent/HTMLElements";
import HTMLAttributes from "./WebDev/Frontend/HTML/TextContent/HTMLAttributes";
import HTMLHeadings from "./WebDev/Frontend/HTML/TextContent/HTMLHeadings";
import HTMLParagraphs from "./WebDev/Frontend/HTML/TextContent/HTMLParagraphs";
import HTMLFormatting from "./WebDev/Frontend/HTML/TextContent/HTMLFormatting";
import HTMLBlockInline from "./WebDev/Frontend/HTML/TextContent/HTMLBlockInline";
import HTMLCharsets from "./WebDev/Frontend/HTML/TextContent/HTMLCharsets";

// Links & Navigation Module
import WhatAreLinks from "./WebDev/Frontend/HTML/LinksNav/WhatAreLinks";
import AnchorSyntax from "./WebDev/Frontend/HTML/LinksNav/AnchorSyntax";
import UrlsAbsoluteRelative from "./WebDev/Frontend/HTML/LinksNav/UrlsAbsoluteRelative";
import FolderStructurePaths from "./WebDev/Frontend/HTML/LinksNav/FolderStructurePaths";
import InPageLinking from "./WebDev/Frontend/HTML/LinksNav/InPageLinking";
import EmailSpecialLinks from "./WebDev/Frontend/HTML/LinksNav/EmailSpecialLinks";
import NewTabsWindows from "./WebDev/Frontend/HTML/LinksNav/NewTabsWindows";
import NavigationMenus from "./WebDev/Frontend/HTML/LinksNav/NavigationMenus";
import LinksBestPractices from "./WebDev/Frontend/HTML/LinksNav/LinksBestPractices";

// Images Module
import ImagesIntro from "./WebDev/Frontend/HTML/Images/ImagesIntro";
import ImageMarkup from "./WebDev/Frontend/HTML/Images/ImageMarkup";
import ImageFormats from "./WebDev/Frontend/HTML/Images/ImageFormats";

// Video & Audio Module
import FlashVideo from "./WebDev/Frontend/HTML/Media/FlashVideo";
import AudioWeb from "./WebDev/Frontend/HTML/Media/AudioWeb";
import MediaBestPractices from "./WebDev/Frontend/HTML/Media/MediaBestPractices";

// subcategory page
import Java from "./Programming/Java/Java";               // main java container
import WhatisJava from "./Programming/Java/WhatisJava";   // java topic pages
import HistoryofJava from "./Programming/Java/HistoryofJava";
import FeaturesJava from "./Programming/Java/FeaturesJava";
import WhatisJDKJVMJRE from "./Programming/Java/WhatisJDKJVMJRE";
import JavaInstallation from "./Programming/Java/JavaInstallation";
import JavavsCPP from "./Programming/Java/JavavsCPP";
// AI course
import WhatisAI from "./AIML/AI/WhatisAI"

function App() {
  return (
    <Routes>
      {/* Core Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/dashboard" element={<UserDashboard />} />

      {/* Tutorials Section */}
      <Route path="/tutorial" element={<Tutorial />} />
      <Route path="/programming" element={<Programming />} />
      <Route path="/aiml" element={<AIML />} />

      {/* Web Development Section */}
      <Route path="/tutorials/webdevelopment" element={<WebDevelopment />} />

      {/* NEW: Intermediate Frontend Page */}
      <Route path="/tutorials/webdevelopment/frontend" element={<Frontend />} />

      {/* HTML Course */}
      <Route path="/webdevelopment/html" element={<HTML />}>
        <Route index element={<FundamentalsWeb />} />
        <Route path="intro" element={<IntroToHTML />} />
        <Route path="structure" element={<HTMLStructure />} />

        {/* New Text & Content Module Routes */}
        <Route path="elements" element={<HTMLElements />} />
        <Route path="attributes" element={<HTMLAttributes />} />
        <Route path="headings" element={<HTMLHeadings />} />
        <Route path="paragraphs" element={<HTMLParagraphs />} />
        <Route path="formatting" element={<HTMLFormatting />} />
        <Route path="block-inline" element={<HTMLBlockInline />} />
        <Route path="charsets" element={<HTMLCharsets />} />

        {/* NEW: Links & Navigation Module Routes */}
        <Route path="links-intro" element={<WhatAreLinks />} />
        <Route path="anchor-syntax" element={<AnchorSyntax />} />
        <Route path="urls" element={<UrlsAbsoluteRelative />} />
        <Route path="paths" element={<FolderStructurePaths />} />
        <Route path="in-page" element={<InPageLinking />} />
        <Route path="special-links" element={<EmailSpecialLinks />} />
        <Route path="new-tabs" element={<NewTabsWindows />} />
        <Route path="nav-menus" element={<NavigationMenus />} />
        <Route path="links-best-practices" element={<LinksBestPractices />} />

        {/* NEW: Images Module Routes */}
        <Route path="images-intro" element={<ImagesIntro />} />
        <Route path="image-markup" element={<ImageMarkup />} />
        <Route path="image-formats" element={<ImageFormats />} />

        {/* NEW: Video & Audio Module Routes */}
        <Route path="media-flash-video" element={<FlashVideo />} />
        <Route path="media-audio" element={<AudioWeb />} />
        <Route path="media-best-practices" element={<MediaBestPractices />} />
      </Route>

      {/* Java Course */}
      <Route path="/programming/java" element={<Java />}>
        <Route index element={<WhatisJava />} />
        <Route path="history" element={<HistoryofJava />} />
        <Route path="features" element={<FeaturesJava />} />
        <Route path="jdk-jre-jvm" element={<WhatisJDKJVMJRE />} />
        <Route path="installation" element={<JavaInstallation />} />
        <Route path="java-vs-cpp" element={<JavavsCPP />} />
      </Route>

      {/* AI Course */}
      <Route path="/aiml/ai" element={<AI />}>
        {/* Index route shows "What is AI" by default */}
        <Route index element={<WhatisAI />} />
      </Route>
      {/* Default route for invalid URLs */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;