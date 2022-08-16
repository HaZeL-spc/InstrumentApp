import React from "react";
import MainVideo from "./components/MainVideo";
import Navbar from "./components/Navbar";
import SlidesMain from "./components/SlidesMain";
import CompanyHelped from "./components/CompanyHelped";
import "./css/App.css";
import BrandsWorked from "./components/BrandsWorked";
import LoveToWork from "./components/LoveToWork";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainVideo />
      <SlidesMain />
      <CompanyHelped />
      <BrandsWorked />
      <LoveToWork />
      <Footer />
    </div>
  );
}

export default App;
