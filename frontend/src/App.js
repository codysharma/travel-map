import './App.css';
import {useState} from 'react';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"



function App() {
  
  mapboxgl.accessToken = 'pk.eyJ1IjoiY29keXNoYXJtYSIsImEiOiJjbHM2aTB4YW4wd3c1MnBucmZwb3R0aWdpIn0.2-nmMKx09tjnsgD9QDLFTQ';
  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9, // starting zoom
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>header</p>
      </header>
      <p>body</p>
      <h1>Travel Map</h1>
      <ReactMapGl 
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      />
    </div>
  );
}

export default App;
