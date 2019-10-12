import React from "react";
import Webcam from "react-webcam";
import Profile from "./Profile.jsx";
import logo from "./logo.PNG";
import pill from "./pill.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Pilldentity</h1>
        <p>Take a photo of the pill and we will identify it for you!</p>
        <img src={pill} className="pill-image" alt="pillimage" />
        <button class="capture-button">Capture photo</button>
        <div class="text-container">
          {/*
          <p>Color: </p>
          <p>Shape: </p>
          <p>Imprint: </p>
          <h4>Drug: </h4>
          */}

          <p>Color: White</p>
          <p>Shape: Circle</p>
          <p>Imprint: M18</p>
          <h4>Drug: M18 (Metoprolol Tartrate)</h4>
        </div>
      </header>
      <Profile />
    </div>
  );
}

export default App;
