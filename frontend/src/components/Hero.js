import React from 'react';

const Hero = () => {
  return (
    <section className="shadow-md h-72 bg-gradient-to-r from-yellow-200 via-green-200 to-green-300 flex flex-col justify-center items-center">
      <div className="mt-4 text-3xl font-bold font-Poppins text-emerald-900 pb-2 border-b-2 border-green-900">
        Adarsh Chakraborty
      </div>
      <div className="pt-1 text-xl font-Baloo text-emerald-900">
        MERN Stack Developer
      </div>

      <div className="mt-8 text-emerald-800 font-Cookie text-2xl">
        "I code simple things and I love what i do..."
      </div>
    </section>
  );
};

export default Hero;
