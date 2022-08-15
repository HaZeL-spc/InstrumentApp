import React from "react";
import MainVideo from "./components/MainVideo";
import Navbar from "./components/Navbar";
import SlidesMain from "./components/SlidesMain";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainVideo />
      <SlidesMain />
    </div>
  );
}

export default App;
