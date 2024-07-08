import React from "react";

export const Footer = () => {
  return (
    <div className="pt-[6.25rem] px-[3.125rem] pb-[1.875rem] bg-blue">
      <div class="divide-y divide-dashed divide-gray">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pb-14">
          <div className="grid1 text-white w-full md:w-[340px] font-kanit">
            <img
              src="./assets/images/logo-cetech.png"
              alt=""
              className="w-[11.5rem] py-4"
            />
            <p className="py-4 text-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="grid2 text-white w-full md:w-[300px] font-kanit">
            <h4 className="text-25 font-kanit font-semibold py-2">
              Quick Links
            </h4>
            <ul>
              <li className="py-1 my-2 text-gray cursor-pointer">
                <a href="home">
                  <i class="fa fa-caret-right pr-6" aria-hidden="true"></i>
                  HomePage
                </a>
              </li>
              <li className="py-1 my-2 text-gray cursor-pointer">
                <a href="home">
                  <i class="fa fa-caret-right pr-6" aria-hidden="true"></i>About
                  Us
                </a>
              </li>
              <li className="py-1 my-2 text-gray cursor-pointer">
                <a href="home">
                  <i class="fa fa-caret-right pr-6" aria-hidden="true"></i>Our
                  Services
                </a>
              </li>
              <li className="py-1 my-2 text-gray cursor-pointer">
                <a href="home">
                  <i class="fa fa-caret-right pr-6" aria-hidden="true"></i>
                  Projects Work
                </a>
              </li>
              <li className="py-1 my-2 text-gray cursor-pointer">
                <a href="home">
                  <i class="fa fa-caret-right pr-6" aria-hidden="true"></i>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="grid3 text-white w-full md:w-[300px] font-kanit">
            <h4 className="text-25 font-kanit font-semibold py-2">
              Customize Software
            </h4>
            <ul>
              <li className="py-1 my-2 text-gray cursor-pointer">
                <a href="home">
                  <i class="fa fa-caret-right pr-6" aria-hidden="true"></i>
                  Payment Gateway
                </a>
              </li>
              <li className="py-1 my-2 text-gray cursor-pointer">
                <a href="home">
                  <i class="fa fa-caret-right pr-6" aria-hidden="true"></i>Point
                  Of Sales
                </a>
              </li>
              <li className="py-1 my-2 text-gray cursor-pointer">
                <a href="home">
                  <i class="fa fa-caret-right pr-6" aria-hidden="true"></i>
                  Custom Warehouse
                </a>
              </li>
              <li className="py-1 my-2 text-gray cursor-pointer">
                <a href="home">
                  <i class="fa fa-caret-right pr-6" aria-hidden="true"></i>MLM
                  Software
                </a>
              </li>
              <li className="py-1 my-2 text-gray cursor-pointer">
                <a href="home">
                  <i class="fa fa-caret-right pr-6" aria-hidden="true"></i>SAAS
                  Software
                </a>
              </li>
            </ul>
          </div>
          <div className="grid4 text-white w-full md:w-[300px] font-kanit">
            <div className="py-2">
              <h1 className="font-semibold text-xl">Head Office Address</h1>
              <p className="text-gray py-4">
                Lumbung Hidup St 425 East Java Madiun City Block ABC 123
              </p>
            </div>
            <div className="py-2">
              <h1 className="font-semibold text-xl">Days Open</h1>
              <p className="text-gray py-4">Monday - Friday 08 AM - 10 PM</p>
            </div>
          </div>
        </div>
        <div className="pt-8 text-white font-kanit text-sm font-light tracking-wider grid grid-cols-1 md:grid-cols-2 gap-y-4">
          <div>
            <p>ALLRIGHT RESERVED - WIRASTUDIO ELEMENTOR KIT</p>
          </div>
          <div className="flex justify-center md:justify-end space-x-2">
            <i class="fab fa-facebook text-xl cursor-pointer text-white hover:text-blue-500 bg-blue-600 hover:bg-white px-2 py-1 transition-transform duration-400 transform hover:-translate-y-3"></i>
            <i class="fab fa-twitter text-xl cursor-pointer text-white hover:text-blue-400 bg-blue-600 hover:bg-white px-2 py-1 transition-transform duration-400 transform hover:-translate-y-3"></i>
            <i class="fab fa-pinterest text-xl cursor-pointer text-white hover:text-red-500 bg-blue-600 hover:bg-white px-2 py-1 transition-transform duration-400 transform hover:-translate-y-3"></i>
            <i class="fab fa-youtube text-xl cursor-pointer text-white hover:text-red-600 bg-blue-600 hover:bg-white px-2 py-1 transition-transform duration-400 transform hover:-translate-y-3"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
