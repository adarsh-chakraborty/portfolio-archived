import React from 'react';
import Particle from './Particle';

const Hero = () => {
  return (
    <>
      <section className="z-10 shadow-md h-72 bg-gradient-to-r from-yellow-200 via-green-200 to-green-300 flex flex-col justify-center items-center">
        <Particle />
        <div className="z-10 mt-4 text-3xl font-bold font-Poppins text-emerald-900 pb-2 border-b-2 border-green-900">
          Adarsh Chakraborty
        </div>
        <div className="z-10 pt-1 text-xl font-Baloo text-emerald-900">
          MERN Stack Developer
        </div>

        <div className="z-10 mt-8 text-emerald-800 font-Cookie text-2xl">
          "I code simple things and I love what i do..."
        </div>
      </section>
    </>
  );
};

export default Hero;
