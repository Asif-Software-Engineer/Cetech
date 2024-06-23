import React from "react";
import "./Home.css";
import { Banner } from "./Banner";
import { About } from "../about/About";

export const Home = () => {
  return (
    <div className="body">
      <div className="home">
        <div className="hbanner"><Banner /></div>
        
        <div className="container">
          <div className="content">
            <h2 className="h2">custom software development</h2>
            <h1 className="h1">
              specialize in providing custom software solutions unique needs
            </h1>
            <p className="txt">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, ut
              placeat debitis rerum quas ex quidem quasi! Amet ab necessitatibus
              in modi asperiores ea eaque a? Voluptate excepturi deserunt eaque.
            </p>
            <div className="btns">
              <button className="btn1">get started</button>
              <button className="btn2">
                see projects <img src="../assets/images/right.png" alt="icon" />
              </button>
            </div>
          </div>
          <div className="empty"></div>
        </div>
      </div>
      <About />
    </div>
  );
};
