import React from 'react';
import Tech from '../components/Tech';

const Home = () => {
  return (
    <div>
      <div className="w-full h-2 shadow-sm bg-gradient-to-t from-green-500 to-green-700"></div>

      <section className="shadow-md h-72 bg-gradient-to-r from-yellow-200 via-green-200 to-green-300 flex flex-col justify-center items-center">
        <div className="mt-4 text-3xl font-bold font-Poppins text-emerald-900 border-b-2 border-green-900">
          Adarsh Chakraborty
        </div>
        <div className="pt-1 text-xl font-Baloo text-emerald-900">
          MERN Stack Developer
        </div>

        <div className="mt-8 text-emerald-800 font-Cookie text-2xl">
          "I code simple things and I love what i do..."
        </div>
      </section>

      <section className="mt-4 flex justify-center items-center gap-3">
        <div className="w-14 bg-emerald-500 h-2"></div>
        <h1 className="text-2xl font-Baloo">My Technical Skillset</h1>
        <div className="w-14 bg-emerald-500 h-2"></div>
      </section>

      <section className="flex items-center justify-center">
        <div className="grid grid-cols-4 gap-4">
          <Tech />
          <Tech />
          <Tech />
          <Tech />
          <Tech />
        </div>
      </section>
    </div>
  );
};

export default Home;
