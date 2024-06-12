import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { BrowserRouter} from "react-router-dom";
import { AppRouter } from "./components/routes/AppRouter";

export const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </div>
  );
};

export default App;
