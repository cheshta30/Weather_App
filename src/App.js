import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigater = useNavigate();
  const navigateToForecast = () => {
    navigater("/weather");
  };
  return (
    <div>
      <h1> Weather Forecast api</h1>
      <button onClick={navigateToForecast}> Proceed </button>
    </div>
  );
}

export default App;