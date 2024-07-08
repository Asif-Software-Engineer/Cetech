import React, { useState } from "react";
import "./Navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar flex align-center justify-center z-40 p-4">
      <a className="m-8">
        <img
          src="./assets/images/logo-cetech.png"
          alt="logo"
          className="w-[10rem] mr-16"
        />
      </a>
      <div
        className="menu-icon hidden cursor-pointer font-bold"
        onClick={toggleNavbar}
      >
        ☰
      </div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <a className="home1" href="home">
            Home
          </a>
        </li>
        <li>
          <a className="about1 peer" href="about">
            About <img src="./assets/images/dropdown.png" alt="" />
          </a>
          <ul className="absolute hidden cursor-pointer text-gray bg-white w-60 tracking-wider font-semibold peer-hover:block hover:block">
            <li className="pt-6 pb-6 pl-8 hover:bg-blue hover:text-white">
              <a>ABOUT US</a>
            </li>
            <li className="pt-6 pb-6 pl-8 hover:bg-blue hover:text-white">
              <a>OUR TEAM</a>
            </li>
            <li className="pt-6 pb-6 pl-8 hover:bg-blue hover:text-white">
              <a>OUR HISTROY</a>
            </li>
          </ul>
        </li>
        <li>
          <a className="services1 peer" href="services">
            Services <img src="./assets/images/dropdown.png" alt="" />
          </a>
          <ul className="absolute hidden cursor-pointer text-gray bg-white w-60 tracking-wider font-semibold peer-hover:block hover:block">
            <li className="pt-6 pb-6 pl-8 hover:bg-blue hover:text-white">
              <a>OUR SERVICES</a>
            </li>
            <li className="pt-6 pb-6 pl-8 hover:bg-blue hover:text-white">
              <a>DETAIL SERVICE</a>
            </li>
            <li className="pt-6 pb-6 pl-8 hover:bg-blue hover:text-white">
              <a className="flex peer">
                OUR PROJECTS{" "}
                <img
                  src="./assets/images/dd.png"
                  alt=""
                  className="w-3 h-2 ml-8 mt-2"
                />
                <ul className="absolute hidden cursor-pointer text-gray bg-white w-60 tracking-wider font-semibold peer-hover:block hover:block">
                  <li className="pt-6 pb-6 pl-8 hover:bg-blue hover:text-white">
                    <a>DETAIL PROJECT</a>
                  </li>
                </ul>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a className="price1" href="pricing">
            Pricing Plan
          </a>
        </li>
        <li>
          <a className="pages1 peer" href="pages">
            Pages <img src="./assets/images/dropdown.png" alt="" />
          </a>
          <ul className="absolute hidden cursor-pointer text-gray bg-white w-60 tracking-wider font-semibold peer-hover:block hover:block">
            <li className="pt-6 pb-6 pl-8 hover:bg-blue hover:text-white">
              <a>CONTACT US</a>
            </li>
            <li className="pt-6 pb-6 pl-8 hover:bg-blue hover:text-white">
              <a>FAQS</a>
            </li>
            <li className="pt-6 pb-6 pl-8 hover:bg-blue hover:text-white">
              <a>CLIENT FEEDBACK</a>
            </li>
            <li className="pt-6 pb-6 pl-8 hover:bg-blue hover:text-white">
              <a>404</a>
            </li>
            <li className="pt-6 pb-6 pl-8 hover:bg-blue hover:text-white">
              <a>BLOG PAGE</a>
            </li>
            <li className="pt-6 pb-6 pl-8 hover:bg-blue hover:text-white">
              <a>SINGLE BLOG</a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="call">
        <img src="../assets/images/call.png" alt="call" />
        123 456 789
      </div>
      <button className="btn" type="button">
        get a quote
      </button>
    </nav>
  );
};
