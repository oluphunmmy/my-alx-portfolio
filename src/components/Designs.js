
import React from "react";
import { designs } from "../data";

export default function Designs() {
  return (
    <section>
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
             Our services
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            We produce corporate wears for individuals and corporate uniforms such as branded
            clothings, overall for technicians, school uniforms, ushering attires and others.
            Our trainings are in mini segments that are cheaper to set up such as embroidery,
            Weaving, Stoning and so on 
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {designs.map((designs) => (
            <div key={designs} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <span className="title-font font-medium text-white">
                  {designs}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div  id="training" />
      </div>
    </section>
  );
}
