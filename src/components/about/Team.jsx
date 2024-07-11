import React from "react";
import "./Team.css";
import { Team1 } from "./team/Team1";

export const Team = () => {
  return (
    <section className="team">
      <div className="overlay flex flex-col align-center justify-center">
        <div className="flex flex-col left-0 font-kanit text-white">
          <span className="text-55 font-bold mt-24 ml-12">Our Team</span>
          <div className="inline-block mt-8 mb-24">
            <button className="text-gray hover:text-white ml-12 mr-12 font-semibold  tracking-wider">
              Home
            </button>
            <i class="fa fa-caret-right pr-6" aria-hidden="true"></i>
            <span className="text-gray hover:text-white">OUR TEAM</span>
          </div>
        </div>
        <Team1/>
      </div>
    </section>
  );
};
