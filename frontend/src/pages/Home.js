import React from 'react';
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
    </div>
  );
};

export default Home;
