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
      </Route>

      {/* Java Course */}
      <Route path="/programming/java" element={<Java />}>
        <Route index element={<WhatisJava />} />
        <Route path="history" element={<HistoryofJava />} />
        <Route path="features" element={<FeaturesJava />} />
        <Route path="jdk-jre-jvm" element={<WhatisJDKJVMJRE />} />
        <Route path="installation" element = {<JavaInstallation/>}/>
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