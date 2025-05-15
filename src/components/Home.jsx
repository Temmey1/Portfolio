import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 pt-5 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          HARRISON TIMOTHY,
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Frontend Web Developer / Frontend Mobile App Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a front-end developer specializing in building exceptional digital
          experiences. Currently, I’m focused on building responsive frontend
          web and mobile applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="work" smooth={true} duration={500}>
                   
          <button className="w-full sm:w-[200px] text-white group border-2 px-6 py-3 flex items-center justify-center hover:bg-pink-600 hover:border-pink-600">
            View Works
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
          </Link>
          <a
            href="/HarrisonTimothyCV.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-[200px]"
          >
            <button className="w-full text-white group border-2 px-6 py-3 flex items-center justify-center hover:bg-pink-600 hover:border-pink-600">
              View CV
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
