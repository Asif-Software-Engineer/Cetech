import React, { useState } from "react";

export const WeTeam = () => {
  const [hovered, setHovered] = useState(false);
  const [hovered1, setHovered1] = useState(false);

  return (
    <div className="flex justify-center align-center bg-[#f9f9f9] w-full -px-12">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="pt-24 min-w-[68%] md:max-w-3xl">
            <div className="text-13 font-semibold tracking-widest text-tgray font-kanit pb-6">
              WHO WE ARE
            </div>
            <div className="text-45 font-bold font-kanit text-blue animate-slide-up w-full">
              We Specialize In Providing Tailor-Made Software Solutions Custom
              Needed
            </div>
            <div className="flex flex-col md:flex-row gap-14">
              <div className="my-24 py-20 px-8 w-full md:max-w-3xl border border-[5px] border-borderClr2 hover:border-borderClr">
                <div className="flex text-13 font-semibold tracking-widest text-tgray font-kanit pb-6">
                  <hr className="text-borderClr w-24 border border-[4px] borderClr" />
                  <span className="px-4 -mt-[14px] text-25">Overview</span>
                </div>
                <div className="text-txt">
                  <p className="pb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident
                  </p>
                </div>
              </div>
              <div className="flex flex-col min-w-[47%]">
                <div
                  className="my-24 py-20 shadow flex-none w-full md:ml-auto"
                  style={{ border: "none" }}
                >
                  <div
                    className="px-8 mb-12"
                    style={{
                      borderLeft: "4px solid",
                      borderColor: hovered ? "#0466C8" : "#DADADA",
                    }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    <h4 className="text-xl font-semibold text-blue font-kanit">
                      15 Years Experience
                    </h4>
                    <span className="w-full">
                      Lorem ipsum dolor sit amet consectetur
                    </span>
                  </div>
                  <div
                    className="px-8 mb-12"
                    style={{
                      borderLeft: "4px solid",
                      borderColor: "#0466C8",
                    }}
                  >
                    <h4 className="text-xl font-semibold text-blue font-kanit">
                      Best Certification Team
                    </h4>
                    <span className="w-full">
                      Lorem ipsum dolor sit amet consectetur
                    </span>
                  </div>
                  <div
                    className="px-8"
                    style={{
                      borderLeft: "4px solid",
                      borderColor: hovered1 ? "#0466C8" : "#DADADA",
                    }}
                    onMouseEnter={() => setHovered1(true)}
                    onMouseLeave={() => setHovered1(false)}
                  >
                    <h4 className="text-xl font-semibold text-blue font-kanit">
                      Unlimited Revision
                    </h4>
                    <span className="w-full">
                      Lorem ipsum dolor sit amet consectetur
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative max-w-sm bg-white shadow md:ml-auto">
            <img
              src="../assets/images/kouding.jpg"
              alt=""
              className="relative w-full h-full object-cover"
            />
          </div>
        </div>
    </div>
  );
};
