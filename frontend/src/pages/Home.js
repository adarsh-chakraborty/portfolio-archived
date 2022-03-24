import React from 'react';
import Footer from '../components/Footer';
import Gradient from '../components/Gradient';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skillset from '../components/Skillset';

const Home = () => {
  return (
    <div className="bg-gray-100 h-full">
      <Gradient />
      <Hero />

      <Projects />
      <Skillset />
      <Footer />
    </div>
  );
};

export default Home;
