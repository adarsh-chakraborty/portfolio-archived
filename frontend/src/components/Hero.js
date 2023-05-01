import React from 'react';
import Navbar from './Navbar';
// 0e59b4

// --bg: #f5f6f7;
// --bg-alt: #fff;
// --fg: #444;
// --fg-alt: #222;
// --primary: #306cc4;
// --primary-alt: #185dc7;
// --primary-light: rgba(44,93,206,0.1);
// --container-shadow: 0 2px 4px rgb(0 0 0/10%);
const Hero = () => {
  return (
    <div className=" bg-[#f5f6f7] bg-bbblurry bg-cover  font-Poppins border-t-[10px] border-[#0e59b4] ">
      <Navbar />

      <div className="h-full md:h-screen mx-auto flex flex-col items-center 2xl:gap-4">
        <section className="text-left border-b-4 border-[#306cc4] mt-28 2xl:mt-40 ">
          <div className="text-3xl md:text-[4rem] font-extrabold text-neutral-900">
            Hi. I am
          </div>
          <div className="text-[#0e59b4] font-bold text-[2rem] md:text-[4rem]">
            Adarsh Chakraborty
          </div>
        </section>

        <div className="mt-[2.25rem] text-lg text-center px-4">
          I am a full stack developer with experience in building web
          applications {`</>`}.
        </div>
        <div className="mt-14 mb-12">
          <button className="px-6 py-3 bg-[#1270e3] hover:bg-blue-700 transition-colors ease-out text-blue-50 rounded-[5px]  ">
            Let's Talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
