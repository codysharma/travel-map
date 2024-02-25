import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import { NavLink, Link, Route, Routes, Navigate } from "react-router-dom";
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import ReactMapGL, {Marker} from 'react-map-gl';
import axios from "axios"
import AddPin from './AddPin';
import ShowMap from './ShowMap';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
// Change to pull from .env after testing

function App() {
  
  let routes = (
      <Routes>
        <Route path="/addpin" element={<AddPin />}/>
        <Route path="/map" element={<ShowMap />}/>
        <Route path="*"element={ <Navigate to="/map" replace/>}/>
      </Routes>
  )

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/addpin"><h3 className="text-link">Add Pins</h3></Link>
        <Link to="/map"><h3 className="text-link">Home</h3></Link>
      </header>
      <h1>Travel Map</h1>
      <main>
        {routes}
      </main>
    </div>
  );
}

export default App;
