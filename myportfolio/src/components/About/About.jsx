import React from 'react';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/Profileimg.jpg';
import useTypewriter from '../../hooks/useTypewriter';

const About = () => {
  const typedText = useTypewriter({
    words: [
      "Fullstack Developer",
      "Coder",
      "Problem Solver",
      "UI/UX Enthusiast",
    ],
    loop: true,
    typingSpeed: 100,
    deletingSpeed: 60,
    delay: 2000,
  });

  return (
    <section
      id="about"
      className="py-1 px-[5vw] md:px-[6vw] lg:px-[10vw] font-sans mt-20"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left pr-6">
          <h1 className="text-4xl font-bold text-white mb-1">Hi, I am</h1>
          <h2 className="text-5xl font-bold text-white mb-2">
            Tushar Tekchandani
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-purple-400 mb-4 h-[2.5rem]">
            I am a <span className="text-purple-500">{typedText}</span>
            <span className="animate-blink">|</span>
          </h3>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            I am a full-stack developer with over 2 years of experience in
            building scalable web applications. Skilled in both front-end and
            back-end development, I specialize in the MERN stack and other
            modern technologies to create seamless user experiences and
            efficient solutions.
          </p>
            <a
            href="https://drive.google.com/file/d/10_mblwEduTW5FzuyOFiuw99w9V0nu8e_/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-2 px-4 rounded-full mt-4 text-lg font-bold transition duration-200 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 1px #8245ec, 0 0 1px #8245ec, 0 0 30px #8245ec',
              textDecoration: 'none',
            }}
          >
            DOWNLOAD RESUME
          </a>
        </div>
        {/* Right Section - Circular Image */}

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt>
            <img
              src={profileImage}
              alt="Tushar Tekchandani"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-purple-500 shadow-lg ml-4"
            />
          </Tilt>
          
        </div>
      </div>
    </section>
  );
};

export default About;
