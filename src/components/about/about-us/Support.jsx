import React from "react";
import "./Support.css";

export const Support = () => {
  return (
    <div className="bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:w-full lg:h-full justify-center align-center pt-20 pb-[16rem] lg:pb-16 px-8 md:px-10 xl:px-20">
          <div className="left grid grid-cols-1 gap-4 content-start">
            <div className="tracking-wider font-bold text-gray-500 mt-20 ">
              DEDICATED SUPPORT
            </div>
            <div className="support-txt text-4xl font-black font-kanit text-blue animate-slide-up w-full">
              We Provide Dedicated Support Throughout The Development Process
              And Beyond
            </div>
            <img
              src="../assets/images/tablet.jpg"
              alt=""
              className="mt-12 mr-8 mb-20 w-[40rem] animate-slide-in w-full"
            />
          </div>
          <div className="right">
            <div
              className="bg-cover h-[22rem] bg-no-repeat bg-center relative mt-10 ml-0 md:ml-0 animate-slide-in"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 content-start bg-blue ml-4 mr-14 lg:-ml-28 -mt-20 lg:m-12 p-6 absolute w-[80%] sm:[86%] md:w-[88%] lg:w-[35rem] xl:w-[40rem]">
              <div className="flex flex-row p-6">
                <img
                  src="../assets/images/24.png"
                  alt=""
                  className="w-[3rem] h-[3rem] mr-4"
                />
                <div className="font-kanit grid grid-row-1 text-white">
                  <span className="font-kanit font-extrabold pb-4">
                    24 Hours Support
                  </span>
                  <span>Lorem ipsum dolor sit amet consectetur</span>
                </div>
              </div>
              <div className="flex md:flex-row p-6">
                <div className="-rotate-90 -mt-8 ml-4 -mr-4">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2a10 10 0 1 0 10 10h-1a9 9 0 1 1-9-9V2z"
                      fill="none"
                      stroke="white"
                      stroke-width="1"
                    />
                    <path d="M12 2 l-2 2 l4 0 z" fill="white" />
                    <line
                      x1="12"
                      y1="12"
                      x2="15"
                      y2="17.5"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <line
                      x1="12"
                      y1="12"
                      x2="15"
                      y2="9"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <circle cx="12" cy="12" l="1" fill="white" />
                  </svg>
                </div>
                <div className="text-white font-kanit grid grid-row-2">
                  <span className="font-kanit font-extrabold pb-4">
                    Unlimited Revision
                  </span>
                  <span>Lorem ipsum dolor sit amet consectetur</span>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};
