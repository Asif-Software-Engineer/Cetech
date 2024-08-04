import React from "react";

export const Bideas = () => {
  return (
    <div className="flex justify-center align-center w-full bg-txt p-24">
      <div className="grid grid-cols-2 gap-12 mx-auto max-w-screen-2xl font-kanit">
        <div className="font-kanit max-w-full h-full mt-16">
          <div className="tracking-widest text-head font-semibold">
            BRING IDEAS
          </div>
          <div className="text-45 font-semibold text-blue capitalize my-4 leading-tight">
            We start by getting to know your business Goals
          </div>
          <p className="text-tgray pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className="quote bg-btnblu text-white h-[4rem] w-[15rem] mt-[3rem] ml-[1rem] pr-[2rem] font-bold tracking-wider font-kanit text-center hover:bg-blue hover:transition-transform hover:duration-300 hover:translate-y-[-15px]">
            LEARN MORE
            <img
              src="../assets/images/right.png"
              alt="icon"
              className="w-[1.3rem] h-[1rem] ml-[11.5rem] mt-[-1.2rem]"
            />
          </button>
        </div>
        <div className='grid grid-cols-2 gap-8'>
            <img src="../assets/images/Nouno.jpg" alt="" className="object-contain pt-8"/>
            <img src="../assets/images/kouding.jpg" alt="" className="object-contain" />
        </div>
      </div>
    </div>
  );
};
