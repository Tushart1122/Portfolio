import React from "react";
import {
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative text-white pt-12 pb-6 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-[#0B0F24] overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 -z-10 
        bg-[linear-gradient(#1a1a1a_1px,transparent_1px),linear-gradient(90deg,#1a1a1a_1px,transparent_1px)] 
        bg-[20px_20px] opacity-20">
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-400">Tushar Tekchandani</h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 mt-4 text-sm sm:text-base">
          {[
            { name: "About", id: "about" },
            { name: "Education", id: "education" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "projects" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-400 my-1 transition-colors duration-200"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 mt-6 text-xl">
          {[
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/tushar-tekchandani-b234bb2b4/",
            },
            {
              icon: <SiLeetcode />,
              link: "https://leetcode.com/u/Tushar_1122/",
            },
            {
              icon: <SiGeeksforgeeks />,
              link: "https://www.geeksforgeeks.org/user/tushartekckxrr/",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Tushar Tekchandani. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
