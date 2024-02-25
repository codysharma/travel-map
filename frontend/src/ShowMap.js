import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import { NavLink, Link, Route, Routes, Navigate } from "react-router-dom";
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import ReactMapGL, {Marker} from 'react-map-gl';
import axios from "axios"

function ShowMap(){

    const mapContainer = useRef(null)
    const mapReference = useRef(null)
    const [pins, setNewPins] = useState([])
  
    const getPins = async (req, res) => {
      try{
        const res = await axios.get("http://localhost:8000/api/pins").then((res) => {
          setNewPins(res.data)
          pins.forEach((pin) => 
            {
              console.log(pin);
              new mapboxgl.Marker({'color': 'red'})
                .setLngLat([pin.long.$numberDecimal, pin.lat.$numberDecimal])
                .addTo(mapReference.current)
            })
        })
      }catch(err){
        console.log(err)
      }
    }
  
    useEffect(() => {
      mapReference.current = new mapboxgl.Map({
        container: mapContainer.current, 
        style: 'mapbox://styles/codysharma/cls6i6d6200fa01pvbw2i6qbq', 
        center: [-105, 39.7], // starting [longitude, latitude]
        zoom: 3,
      });
      // const marker1 = new mapboxgl.Marker({color: 'red'})
      //   .setLngLat([-119.5383,37.8651])
      //   .addTo(mapReference.current)
      // const marker2 = new mapboxgl.Marker({color: 'red'})
      //   .setLngLat([-105.6836,40.3428])
      //   .addTo(mapReference.current)
      getPins()
  
    }, []);

    return (
        <>
        <div ref={mapContainer} className="map-container" />
        </>
    )
}

export default ShowMap