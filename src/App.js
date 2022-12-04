import React, { useState } from "react";
import axios from 'axios';

function App() {
  return (
    <div className="app">
      <div className="search">
        <input
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Kochi</p>
          </div>
          <div className="temp">
            <h1>30^c</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>

        </div>


        <div className="bottom">

          <div className="feels">
            <p className="bold">35^c</p>
            <p>Feels Like</p>
          </div>

          <div className="humidity">
            <p className="bold" >60%</p>
            <p>Humidity</p>
          </div>

          <div className="windspeed">
          <p className="bold">12 MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>



      </div>


    </div>
  );
}

export default App;
