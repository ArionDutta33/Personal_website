import React from "react";
import Navbar from "./components/Navbar.jsx";
import Photo from "./components/Photo.jsx";
import HeroText from "./components/HeroText.jsx";
import Info from "./components/Info.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Review from "./components/Review.jsx";
import Footer from "./components/Footer.jsx";
import Filler from "./components/Filler.jsx";

const App = () => {
  return (
      <div className='bg-gradient-to-r from-gray-900 via-black to-gray-900 min-h-screen text-white'>
        <Navbar />
        <div className="px-6">
          <Photo />
            <Filler/>
          <HeroText />
          <Photo />
            <Info/>
            <Skills/>
            <Projects/>
            <Review/>
            <Footer/>
        </div>
      </div>
  );
};
export default App;