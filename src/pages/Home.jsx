import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="font-sans">
        {/* Hero Section */}
        <header className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-800 to-purple-800 text-white py-20">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Welcome to Your All-in-One Toolset
            </h1>
            <p className="text-base md:text-lg mb-6 text-justify mx-5 lg:mx-12">
              OptimizerHub is your go-to web app for making daily tasks easier
              and faster. Need to convert units or currencies, count words?
              We've got you covered all in one convenient place. Whether you're
              a student tackling assignments, a professional managing work, or
              just someone looking to save time, OptimizerHub is here to help.
              With a simple, easy-to-use design and tools that get the job done
              quickly and accurately, it's all about making your life a little
              easier. Give it a try and see how OptimizerHub can simplify your
              day!
            </p>
          </div>
        </header>
      </div>

      {/* Tools Section */}
      <section id="tools" className="py-16 bg-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">Our Tools</h2>
          <p className="text-lg text-gray-600">
            Explore a variety of tools designed to optimize your daily tasks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-4">
          {/* Tool Card 1: Word Counter */}
          <Link to="/Wordcounter">
            <div className="bg-white p-6 shadow-lg rounded-lg text-center h-64 w-full flex flex-col justify-center items-center hover:scale-95 hover:bg-slate-300 transition duration-200">
              <div className="text-4xl mb-4 text-blue-500">📝</div>
              <h3 className="text-xl font-semibold mb-3">Word Counter</h3>
              <p className="text-gray-600 mb-4">
                Count words, characters, and sentences in your text.
              </p>
            </div>
          </Link>

          {/* Tool Card 2: Age Calculator */}
          <Link to="/Agecalculator">
            <div className="bg-white p-6 shadow-lg rounded-lg text-center h-64 w-full flex flex-col justify-center items-center hover:scale-95 hover:bg-slate-300 transition duration-200">
              <div className="text-4xl mb-4 text-blue-500">🔞</div>
              <h3 className="text-xl font-semibold mb-3">Age Calculator</h3>
              <p className="text-gray-600 mb-4">
                Check your exact date of birth with Year, Month and Day
                Parameters.
              </p>
            </div>
          </Link>

          {/* Tool Card 3: Length Converter */}
          <Link to="/Lengthconverter">
            <div className="bg-white p-6 shadow-lg rounded-lg text-center h-64 w-full flex flex-col justify-center items-center hover:scale-95 hover:bg-slate-300 transition duration-200">
              <div className="text-4xl mb-4 text-blue-500">📏</div>
              <h3 className="text-xl font-semibold mb-3">Length Converter</h3>
              <p className="text-gray-600 mb-4">
                Convert between different length units like meters, feet and
                more.
              </p>
            </div>
          </Link>

          {/* Tool Card 4: Weight Converter */}
          <Link to="/Weightconverter">
            <div className="bg-white p-6 shadow-lg rounded-lg text-center h-64 w-full flex flex-col justify-center items-center hover:scale-95 hover:bg-slate-300 transition duration-200">
              <div className="text-4xl mb-4 text-blue-500">⚖️</div>
              <h3 className="text-xl font-semibold mb-3">Weight Converter</h3>
              <p className="text-gray-600 mb-4">
                Convert between Kilogram, Pound, and Ounces.
              </p>
            </div>
          </Link>

          {/* Tool Card 4: Temperature Converter */}
          <Link to="/Temperatureconverter">
            <div className="bg-white p-6 shadow-lg rounded-lg text-center h-64 w-full flex flex-col justify-center items-center hover:scale-95 hover:bg-slate-300 transition duration-200">
              <div className="text-4xl mb-4 text-blue-500">🌡️</div>
              <h3 className="text-xl font-semibold mb-3">Temperature Converter</h3>
              <p className="text-gray-600 mb-4">
                Convert between Celsius, Fahrenheit, and Kelvin.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
