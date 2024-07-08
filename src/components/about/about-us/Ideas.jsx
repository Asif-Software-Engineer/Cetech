import React from "react";
import "./Ideas.css";

export const Ideas = () => {
  return (
    <section className="ideas">
      <div className="overlay flex align-center justify-center">
        <div className="">
          <div className="mx-[2rem] lg:mx-[5rem] xl:mx-[7.75rem] py-10 md:py-16 lg:py-20 text-white font-kanit w-full max-w-[90%] md:max-w-[42%]">
            <h2 className="text-6 md:text-10 lg:text-13 font-semibold">
              BRING YOUR IDEAS
            </h2>
            <div className="text-30 md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-55 font-bold mt-8">
              We Have Expertise To Build Customization Software From Idea
            </div>
            <div className="mt-4 md:mt-6 lg:mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </div>
            <button className="quote bg-btnblu text-white h-[3rem] md:h-[3.5rem] lg:h-[4rem] w-[10rem] md:w-[12rem] lg:w-[15rem] mt-[2rem] md:mt-[2.5rem] lg:mt-[3rem] pr-[1rem] md:pr-[1.5rem] lg:pr-[2rem] font-semibold text-sm md:text-base lg:text-lg tracking-wider font-kanit text-center hover:bg-blue hover:transition-transform hover:duration-300 hover:translate-y-[-10px] md:hover:translate-y-[-12px] lg:hover:translate-y-[-15px]">
              GET STARTED
              <img
                src="../assets/images/right.png"
                alt="icon"
                className="w-[0.8rem] h-[0.6rem] md:w-[1rem] md:h-[0.8rem] lg:w-[1.3rem] lg:h-[1rem] ml-[8rem] md:ml-[9rem] lg:ml-[11.5rem] mt-[-0.8rem] md:mt-[-1rem] lg:mt-[-1.2rem]"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
