import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import ReactMapGL, {Marker} from 'react-map-gl';
import axios from "axios"

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
// Change to pull from .env after testing

function App() {
  
  const mapContainer = useRef(null);

  const [pins, setNewPins] = useState([])

  const getPins = async (req, res) => {
    try{
      const res = await axios.get("http://localhost:8000/api/pins").then((res) => {
        setNewPins(res.data)
        // console.log(pins);
        console.log("heeere");
        pins.forEach((pin) => 
          {
            console.log(pin.lat);
            // new mapboxgl.Marker()
            //   .setLngLat([pin.long, pin.lat])
            //   .addTo(map)
          })
      })
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current, 
      style: 'mapbox://styles/codysharma/cls6i6d6200fa01pvbw2i6qbq', 
      center: [-105, 39.7], // starting [longitude, latitude]
      zoom: 3,
    });
    const marker1 = new mapboxgl.Marker({color: 'red'})
      .setLngLat([-119.5383,37.8651])
      .addTo(map)
    const marker2 = new mapboxgl.Marker({color: 'red'})
      .setLngLat([-105.6836,40.3428])
      .addTo(map)
    getPins()

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
