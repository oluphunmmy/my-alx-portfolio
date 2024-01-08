
import React from "react";
import Index from "./components/Index";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Trainings from "./components/Trainings";
import SocialFollow from "./components/SocialFollow";
import Designs from "./components/Designs";
import Footer from "./components/Footer";
import "./App.css";
 

export default function App() {
  return (
    
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Index />
      <Projects />
      <Designs />
      <Trainings />
      <Contact />
      <SocialFollow/>
      <Footer/>
    </main>
  );
}
