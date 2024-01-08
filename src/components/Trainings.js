import React from "react";
import { trainings } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Our different categories of training
        </h1>
        <div className="flex flex-wrap m-4">
          {trainings.map((trainings) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <p className="leading-relaxed mb-6">{trainings.quote}</p>
                <div className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={trainings.image}
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {trainings.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {trainings.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}