import React from "react";

export const History = () => {
  return (
    <section className="">
      <div className="">
        <img
          src="../assets/images/theres-our-solution-.jpg"
          alt=""
          className="relative -mt-[100px] w-full h-[500px] object-cover -z-10"
        />
        <div className=" flex flex-col -mt-[43rem] -z-10 bg-transparent bg-gradient-to-r from-[#001845] to-transparent">
          <div className="flex flex-col justify-center align-center w-full h-[40rem] font-kanit text-white">
            <span className="text-55 font-bold mt-[25rem] ml-12">Our History</span>
            <div className="inline-block mt-8 mb-24">
              <button className="text-gray hover:text-white ml-12 mr-8 font-semibold tracking-wider">
                Home
              </button>
              <i class="fa fa-caret-right pr-6" aria-hidden="true"></i>
              <span className="text-gray hover:text-white">OUR HISTORY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
