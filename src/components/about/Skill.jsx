import React, { useEffect, useState } from "react";

export const Skill = () => {
  const [completedDesk, setCompletedDesk] = useState(0);
  const [completedWeb, setCompletedWeb] = useState(0);
  useEffect(() => {
    const deskTimer = setTimeout(() => {
      if (completedDesk < 90) {
        setCompletedDesk(completedDesk + 1);
      }
    }, 10);
    const webTimer = setTimeout(() => {
      if (completedWeb < 99) {
        setCompletedWeb(completedWeb + 1);
      }
    }, 10);
    return () => {
      clearTimeout(deskTimer);
      clearTimeout(webTimer);
    };
  }, [completedDesk, completedWeb]);

  return (
    <section>
      <div className="m-[6rem] flex justify-center align-center">
        <div className="left">
          <img
            src="../assets/images/Nouno.jpg"
            alt="find"
            className="w-[20rem] h-[45rem]  pr-4"
          />
        </div>
        <div className="ml-[4rem] ">
          <div className="tracking-wider mb-[2rem] font-bold text-gray-500">
            EXPERT SKILL WE HAVE
          </div>
          <div className="text-4xl font-black font-kanit text-blue ">
            We Have The Skills And Expertise To Deliver <br />
            High-Quality Custom Software
          </div>
          <div className="flex mt-[3rem] ">
            <img
              src="../assets/images/meeting.jpg"
              alt=""
              className="w-[17rem] h-[31rem]"
            />
            <div className="ml-[3rem] mr-[1rem] ">
              <p className="text-gray-500 p-[1rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor <br />
                incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-gray-500 p-[1rem]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu <br /> fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa <br /> qui
                officia deserunt mollit anim id est laborum.
              </p>
              <div className="bar1 p-[1rem] font-bold tracking-wider font-kanit text-xl">
                <h1 className="pb-[0.8rem]">Desktop Software</h1>
                <div className="relative">
                  <div className="absolute -top-10 text-right w-full text-blue">
                    {completedDesk}%
                  </div>
                  <div className="bg-gray-300 w-[100%] ">
                    <div
                      className=""
                      style={{
                        width: `${completedDesk}%`,
                        height: "10px",
                        backgroundColor: "#001845",
                        transition: "width 0.3s ease",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="bar1 p-[1rem] font-bold tracking-wider font-kanit text-xl">
                <h1 className="pb-[0.8rem]">Web Based Software</h1>
                <div className="relative">
                  <div className="absolute -top-10 text-right w-full text-blue">
                    {completedWeb}%
                  </div>
                  <div className="bg-gray-300 w-[100%] ">
                    <div
                      className=""
                      style={{
                        width: `${completedWeb}%`,
                        height: "10px",
                        backgroundColor: "#001845",
                        transition: "width 0.3s ease",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <button className="quote bg-blue2 text-white h-[4rem] w-[15rem] mt-[3rem] ml-[1rem] pr-[2rem] font-bold tracking-wider font-kanit text-center hover:bg-blue hover:transition-transform hover:duration-300 hover:translate-y-[-15px]">
                GET A QUOTE{" "}
                <img
                  src="../assets/images/right.png"
                  alt="icon"
                  className="w-[1.3rem] h-[1rem] ml-[11.5rem] mt-[-1.2rem]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
