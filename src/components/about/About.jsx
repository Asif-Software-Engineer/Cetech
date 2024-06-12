import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className="about">
      <div className="container-left">
        <div className="img1">
          <img src="./assets/images/meeting.jpg" alt="" />
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
        
      </div>
    </div>
  );
};
