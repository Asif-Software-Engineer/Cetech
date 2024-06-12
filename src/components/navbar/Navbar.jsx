import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <a className="logo" ><img src="./assets/images/logo-cetech.png" alt="" /></a>
      <a className="home1" href="home">Home</a>
      <a className="about1" href="about">About <img src="./assets/images/dropdown.png" alt="" /></a>
      <a className="services1" href="services">Services <img src="./assets/images/dropdown.png" alt="" /></a>
      <a className="price1" href="pricing">Pricing Plan</a>
      <a className="pages1" href="pages">Pages <img src="./assets/images/dropdown.png" alt="" /></a>

      <div className="call">
        <img src="../assets/images/call.png" alt="call" />
        123 456 789
      </div>
      <button className="btn" type="button">
        get a quote
      </button>
    </div>
  );
};
