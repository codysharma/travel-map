import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import ReactMapGL from 'react-map-gl';


mapboxgl.accessToken = 'pk.eyJ1IjoiY29keXNoYXJtYSIsImEiOiJjbHM2aTB4YW4wd3c1MnBucmZwb3R0aWdpIn0.2-nmMKx09tjnsgD9QDLFTQ';
// Change to pull from .env after testing

function App() {
  
  const mapContainer = useRef(null);

  const [newPlace, setNewPlace] = useState(null)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current, 
      style: 'mapbox://styles/mapbox/streets-v11', 
      center: [-105, 39.7], // starting position [longitude, latitude]
      zoom: 3,
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>header</p>
      </header>
      <p>body</p>
      <h1>Travel Map</h1>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

export default App;
