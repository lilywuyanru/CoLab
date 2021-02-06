import React from "react";
import "./App.css";
import VideoChat from "./VideoChat";
import Navbar from "./components/Navbar";
import "./media/CoLab.css";
const App = () => {
  return (
    <div className="app">
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <VideoChat />
      </main>
    </div>
  );
};

export default App;
