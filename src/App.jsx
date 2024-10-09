import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/videoPlayer/VideoPlayer';
import Gallery from './Components/Campus/Gallery'; 

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Main Page */}
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <Hero />
              <div className="container">
                <Title subTitle="Our Products" title="What We Offer" />
                <Programs />
                <About setPlayState={setPlayState} />
                <Title subTitle="Gallery" title="See About Us" />
                <Campus />
                <Title subTitle="TESTIMONIALS" title="What Clients Say" />
                <Testimonials />
                <Title subTitle="Contact Us" title="Get in Touch" />
                <Contact />
                <Footer />
              </div>
              <VideoPlayer playState={playState} setPlayState={setPlayState} />
            </div>
          }
        />
        {/* Gallery Page */}
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
};

export default App;
