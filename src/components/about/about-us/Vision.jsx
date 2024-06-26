import React from "react";
import "./Vision.css";

export const Vision = () => {
  return (
    <section className="vision bg-gray-100">
      <div className="m-[6rem] flex flex-col justify-center align-center">
        <div>
          <div className="top">OUR VISSION</div>
          <div className="vline">
            Stay Up-To-Date With The Latest Technologies And Industry Trends
          </div>
        </div>
          <div className="container-v ">
            <div className="left-area">
              <img src="./assets/images/young.jpg" alt="" />
            </div>
            <div className="right-area">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit{" "}
                <br />
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div class="check">
                <p>
                  <span
                    style={{
                      color: "#001845",
                      fontSize: "larger",
                      fontWeight: "bold",
                    }}
                  >
                    &#10003;
                  </span>{" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
                <p>
                  <span
                    style={{
                      color: "#001845",
                      fontSize: "larger",
                      fontWeight: "bold",
                    }}
                  >
                    &#10003;
                  </span>{" "}
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
              <div className="bug-rep flex pt-8 pb-8">
                <img
                  src="./assets/images/bug.svg"
                  alt=""
                  className="w-[80px] pr-4"
                />
                <div className="bug-txt flex flex-col">
                  <span className="text-2xl font-bold font-kanit text-blue">
                    Minimalize Bug Reports
                  </span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
              <div className="clean-code flex pt-8 pb-8">
                <img
                  src="./assets/images/tag.webp"
                  alt=""
                  className="w-[80px] h-[55px] pr-4"
                />
                <div className="code-txt flex flex-col">
                  <span className="text-2xl font-bold font-kanit text-blue">
                    Give The Clean Of Code
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};
