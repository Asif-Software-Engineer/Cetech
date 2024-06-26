import React, { useEffect, useState } from "react";
import "./AboutUs.css";

export const AboutUs = () => {
  const [count, setcount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 1235) {
        setcount(count + 1);
      }
    }, 1);
    return () => clearInterval(interval);
  }, [count]);
  const formattedCounter = count.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return (
    <section className="about">
      <div className="container-left ">
        <div className="img1">
          <img src="./assets/images/klin.jpg" alt="" />
        </div>
        <div className="img2">
          <img src="./assets/images/programmer-working.jpg" alt="" />
        </div>
        <div className="txtbox">
          <img src="./assets/images/setting.png" alt="" />
          <div className="txt2">
            <p1>1,2K+ Project Done</p1>
            <p2>Small Until High Projects</p2>
          </div>
        </div>
        <div className="img3">
          <img src="./assets/images/dot-smoke-1.png" alt="" />
        </div>
      </div>
      <div className="container-right">
        <div>
          <div className="about-title">ABOUT US</div>
          <h3 className="welcome">
            Welcome To Our Custom Software Development Service For Any Neededs
          </h3>
          <div className="about-txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            sunt maiores quos culpa obcaecati magnam itaque cumque? Asperiores,
            dignissimos eveniet.
          </div>
          <div className="special-txt">
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            modi aliquam adipisci, optio nostrum assumenda?"
          </div>
        </div>
        <div>
          <div className="revision">
            <div className="icon -rotate-90">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2a10 10 0 1 0 10 10h-1a9 9 0 1 1-9-9V2z"
                  fill="none"
                  stroke="#100845"
                  stroke-width="1"
                />
                <path d="M12 2 l-2 2 l4 0 z" fill="#100845" />
                <line
                  x1="12"
                  y1="12"
                  x2="15"
                  y2="17.5"
                  stroke="#100845"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <line
                  x1="12"
                  y1="12"
                  x2="15"
                  y2="9"
                  stroke="#100845"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <circle cx="12" cy="12" l="1" fill="#100845" />
              </svg>
            </div>
            <div className="revise-txt">
              <h4>We Offer Unlimited Revision</h4>
              <p2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p2>
            </div>
          </div>
          <div className="dotted"></div>
          <div className="feedback">
            <img src="./assets/images/julio.jpg" alt="" className="img1" />
            <img src="./assets/images/young.jpg" alt="" className="img2" />
            <img
              src="./assets/images/software-developer-at-office.jpg"
              alt=""
              className="img3"
            />
            <div className="num">
              <h1>{formattedCounter} +</h1>
            </div>
            <div className="feedback-txt">
              <h4>Give Best Feedback</h4>
              <p2>Lorem Ipsum Dolor</p2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
