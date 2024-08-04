import React from "react";

export const Bhistory = () => {
  return (
    <div className="flex justify-center align-center w-full bg-white p-24">
        <div className="grid grid-cols-2 gap-12 mx-auto max-w-screen-2xl">
          <div>
            <img
              src="../assets/images/t6.jpg"
              alt=""
              className="max-w-full h-full object-cover"
            />
          </div>
          <div className="font-kanit max-w-full h-full my-16">
            <div className="tracking-widest text-head font-semibold">
              BUSINESS HISTORY
            </div>
            <div className="text-45 font-semibold text-blue capitalize my-4 leading-tight">
              We're excited to introduce you to our establishment Software
              Developer Business
            </div>
            <p className="text-tgray pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="grid grid-cols-2 gap-8 font-kanit my-8 -ml-[10rem]">
              <div className="bg-white p-8 border border-tgray">
                <div className="text-35 font-semibold text-blue2 pb-8">
                  2013
                </div>
                <h1 className="text-blue text-25 font-semibold">
                  Freelance Work
                </h1>
                <p className="text-tgray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="bg-white p-8 border border-tgray">
                <div className="text-35 font-semibold text-blue2 pb-8">
                  2016
                </div>
                <h1 className="text-blue text-25 font-semibold">
                  Business Founded
                </h1>
                <p className="text-tgray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 font-kanit">
              <div className="bg-blue text-white p-8 border border-tgray">
                <div className="text-35 font-semibold pb-8">2017</div>
                <h1 className="text-25 font-semibold">Software House</h1>
                <p className="text-tgray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="bg-white p-8 border border-tgray">
                <div className="text-35 font-semibold text-blue2 pb-8">
                  2022 - Now
                </div>
                <h1 className="text-blue text-25 font-semibold">
                  Legal Company
                </h1>
                <p className="text-tgray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};
