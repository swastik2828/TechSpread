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
   // subcategory page
import Java from "./Programming/Java/Java";               // main java container
import WhatisJava from "./Programming/Java/WhatisJava";   // java topic pages
import HistoryofJava from "./Programming/Java/HistoryofJava";
import FeaturesJava from "./Programming/Java/FeaturesJava";
import WhatisJDKJVMJRE from "./Programming/Java/WhatisJDKJVMJRE"; 

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

      {/* Java Course */}
      <Route path="/programming/java" element={<Java />}>
        <Route index element={<WhatisJava />} />
        <Route path="history" element={<HistoryofJava />} />
        <Route path="features" element={<FeaturesJava />} />
        <Route path="jdk-jre-jvm" element={<WhatisJDKJVMJRE />} />
      </Route>


      {/* Default route for invalid URLs */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;