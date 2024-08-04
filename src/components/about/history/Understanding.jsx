import React from "react";
import './Understanding.css';

export const Understanding = () => {
  return (
    <div className="flex flex-col justify-center align-center w-full bg-white p-24">
      <div className="grid grid-cols-2 mx-auto max-w-screen-2xl font-kanit pb-8">
        <div className="font-kanit w-full my-8 mr-8">
          <div className="tracking-widest text-head font-semibold uppercase">
            take the time to understand
          </div>
          <div className="text-45 font-semibold text-blue capitalize my-8 leading-tight">
            We work closely with you to develop a customized solution
          </div>
        </div>
        <div className="ml-8">
          <img
            src="../assets/images/t4understand.jpg"
            alt=""
            className="w-full h-[300px] object-cover"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-16 mx-auto max-w-screen-2xl font-kanit">
        <div
          className="bg-cover h-full bg-no-repeat bg-center relative ml-0 md:ml-0 animate-slide-in"
          style={{
            backgroundImage: `url(/assets/images/software-developer-at-office.jpg)`,
          }}
        >
          <a
            href="https://www.youtube.com/embed/VhBl3dHT5SY?feature=oembed?playlist=VhBl3dHT5SY&mute=0&autoplay=0&loop=no&controls=0&start=0&end="
            className="block w-full h-full relative "
          >
            <div className="button-wrapper absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="play-button w-16 h-16 bg-white hover:bg-blue rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 relative">
                <div className="triangle"></div>
              </div>
            </div>
          </a>
        </div>
        <div className="bg-blue text-txt py-12 pl-8 pr-16">
          <div className="font-bold pb-8">
            ” Lorem ipsum dolor sit amet, consectetur adipiscing elit sed “
          </div>
          <div className="flex pt-4">
            <img src="../assets/images/wtick.png" alt="" className="w-6 mr-4" />
            Lorem ipsum dolor sit amet
          </div>
          <div className="flex pt-4">
            <img src="../assets/images/wtick.png" alt="" className="w-6 mr-4" />
            Sit amet consectetur
          </div>
          <div className="flex pt-4">
            <img src="../assets/images/wtick.png" alt="" className="w-6 mr-4" />
            Lorem ipsum dolor sit amet
          </div>
        </div>
        <div className="py-12 px-3 w-full md:max-w-3xl">
          <div className="flex text-13 font-semibold text-tgray font-kanit pb-6">
            <hr className="text-borderClr w-16 border border-[4px] borderClr" />
            <span className="px-4 -mt-[14px] text-25 leading-tight">
              Experienced Developer
            </span>
          </div>
          <div className="text-tgray">
            <p className="pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
