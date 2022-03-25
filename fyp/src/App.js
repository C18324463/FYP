import './App.css';
import React, {useState} from 'react';
import SideNav from './SideNav';
import Standings from "./Standings";
import Schedule from "./Schedule";
import F1Live from "./F1Live";
import Info_Drivers from "./Statistics";
import Info_Constructors from "./Info_Constructors";
import Info_Tracks from "./Info_Tracks";
import Home from "./Home";
import Constructors from "./Consctructors";
import RaceDetails from "./RaceDetails";
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Firebase from "firebase/app";
import "firebase/database";
import config from "./Firebase"


export default function App(props, state) {
  
  const [wid, setWid] = useState('0%');
  const openSidenav = ( ) => {
    setWid('25%')
  }
  const closeSidenav = ( ) => {
    setWid('0%')
  }

  return (
      <div className="app">
        <button className='openBtn' onClick={openSidenav}>&#9776; Open</button>
        <SideNav name='Bar' width={wid} closeNav={closeSidenav}/>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/schedule" element={<Schedule/>}/>
            <Route path="/f1-live" element={<F1Live/>}/>
            <Route path="/statistics/info_drivers" element={<Info_Drivers/>}/>
            <Route path="/statistics/info_constructors" element={<Info_Constructors/>}/>
            <Route path="/statistics/info_tracks" element={<Info_Tracks/>}/>
            <Route path="/standings/drivers_champ" element={<Standings/>}/>
            <Route path="/standings/constructors_champ" element={<Constructors/>}/>
            <Route path="/schedule/:circuitId" element={<RaceDetails/>}/>
        </Routes>
        </BrowserRouter>
      </div>
  );
}