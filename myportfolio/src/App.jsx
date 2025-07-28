import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="min-h-screen relative">
      {/* Dark header section */}
      <div className="bg-black">
        <Navbar />
      </div>

      {/* Full-page modern grid background */}
      <div className="relative min-h-screen bg-[#0B0F24] text-white overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 -z-10 
            bg-[linear-gradient(#1a1a1a_1px,transparent_1px),linear-gradient(90deg,#1a1a1a_1px,transparent_1px)] 
            bg-[20px_20px] opacity-20">
        </div>

        {/* Page Content */}
        <div className="relative z-10">
          <main className="space-y-32 pt-20 px-4 md:px-12">
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
