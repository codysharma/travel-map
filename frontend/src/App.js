// import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import ReactMapGL from 'react-map-gl';


mapboxgl.accessToken = 'pk.eyJ1IjoiY29keXNoYXJtYSIsImEiOiJjbHM2aTB4YW4wd3c1MnBucmZwb3R0aWdpIn0.2-nmMKx09tjnsgD9QDLFTQ';
const API_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN
// Change to pull from .env after testing

function App() {
    const [viewport, setViewport] = useState({
      width: "100vw", 
      height: "100vh", 
      latitude: 39.7, 
      longitude: -105, 
      zoom: 3 
    });

  return (
    <div className="App">
      <header className="App-header">
        <p>header</p>
      </header>
      <p>body</p>
      <h1>Travel Map</h1>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={API_TOKEN}
        // onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        </ReactMapGL>
    </div>
  );
}

export default App;
