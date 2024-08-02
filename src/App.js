import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { BrowserRouter} from "react-router-dom";
import { AppRouter } from "./components/routes/AppRouter";
import { Footer } from "./components/footer/Footer";

export const App = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
