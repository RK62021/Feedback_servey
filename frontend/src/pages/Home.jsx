import React from "react";
import img from "../assets/kindpng_1799417.png";
import { FcSurvey, FcFeedback } from "react-icons/fc";
import { IoIosBulb } from "react-icons/io";
import servey from "../assets/servey.svg";
import Feature from "./Feature";
import Serveys from "./serveys";
import About from "./About";

function Home() {
  
  return (
    <>
      <section className="flex flex-col md:flex-row items-center bg-cream px-4 md:px-8 p-6 lg:p-16 ">
        <div className="w-full md:w-2/3 h-full flex flex-col justify-center items-start px-6 mb-6 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
            Share Your Feedback and Shape the Future
          </h1>
          <p className="text-base md:text-xl mb-8 max-w-lg font-light">
            We value your opinion! Participate in our quick surveys to help us
            improve and provide the best experience possible.
          </p>
          <a
            href="#survey"
            className="bg-theme hover:bg-blue-700 text-white font-semibold py-3 px-6 md:px-8 rounded-lg text-base md:text-lg shadow-lg transition duration-300 transform hover:scale-105"
          >
            Start Survey Now
          </a>
        </div>
        <div className="w-full md:w-1/3 relative">
          <img
            height={300}
            width={300}
            src={servey}
            alt="Hero Background"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
      <section className="bg-cream py-12 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-gray-800 text-center">
          Why Participate in Our Surveys?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-4 md:m-8 mt-8 md:mt-16">
          <div className="flex flex-col items-center">
            <FcFeedback className="w-12 h-12 md:w-16 md:h-16 mb-4" />
            <h3 className="text-base md:text-lg font-medium mb-2">Feedback</h3>
            <p className="text-center text-gray-800 text-sm md:text-base font-normal">
              Provide feedback to help us improve our products and services.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FcSurvey className="w-12 h-12 md:w-16 md:h-16 mb-4" />
            <h3 className="text-base md:text-lg font-medium mb-2">Survey</h3>
            <p className="text-center text-gray-800 text-sm md:text-base font-normal">
              Participate in quick surveys to help us understand your needs.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <IoIosBulb className="w-12 h-12 md:w-16 md:h-16 mb-4" />
            <h3 className="text-base md:text-lg font-medium mb-2">Idea</h3>
            <p className="text-center text-gray-800 text-sm md:text-base font-normal">
              Share your ideas and suggestions to help us innovate and grow.
            </p>
          </div>
        </div>
      </section>
      {/* <hr className="bg-grey-300 w-[90%] mx-auto" /> */}

      <Feature />
      <Serveys />
      <About />
    </>
  );
}

export default Home;
