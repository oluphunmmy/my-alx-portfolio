import React from "react";

export default function Index() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Golden Pebbles Creative Solutions
            <br className="hidden lg:inline-block" />We love to create amazing designs
          </h1>
          <p className="mb-8 leading-relaxed">
          Our fashion business was borne out of the passion for style and class. We desire to boost people's confidence and self esteem by ensuring they look good and impressive.
 Our major focus is on bespoke wears for both formal and informal outings as well as training of young fashion designers.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Locate Us
            </a>
            <a
              href="#designs"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              click to see our designs
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./aboutus.jpg"
          />
          <div id="designs" />
        </div>
      </div>
    </section>
  );
}