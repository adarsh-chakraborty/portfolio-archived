import React from 'react';
import Gradient from '../components/Gradient';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skillset from '../components/Skillset';

const Home = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <Gradient />
      <Hero />
      <Skillset />
      <Projects />
    </div>
  );
};

export default Home;
