import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../home/Home";
import { About } from "../about/About";
import { Team } from "../about/Team";
import {Services} from "../services/Services";
import {Price} from "../pricing/Price";
import {Pages } from "../pages/Pages";
import { History } from "../about/History";

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="team" element={<Team />} />
        <Route path="history" element={<History />} />
        <Route path="services" element={<Services/>} />
        <Route path="pricing" element={<Price/>} />
        <Route path="pages" element={<Pages />} />
      </Routes>
    </div>
  );
};
