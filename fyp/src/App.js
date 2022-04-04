import React from 'react';
import Standings from "./Standings";
import Schedule from "./Schedule";
import F1Live from "./F1Live";
import FP2 from "./FP2";
import FP3 from "./FP3";
import Q1 from "./Q1";
import Q2 from "./Q2";
import Q3 from "./Q3";
import Grid from "./Grid";
import Race from "./Race";
import Info_Drivers from "./Statistics";
import Info_Constructors from "./Info_Constructors";
import Info_Tracks from "./Info_Tracks";
import Home from "./Home";
import Constructors from "./Consctructors";
import RaceDetails from "./RaceDetails";
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "firebase/database";

export default function App() {

  return (
      <div className="app" style={{height: "auto", width: "1450px"}}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/schedule" element={<Schedule/>}/>
            <Route path="/f1-live/fp1" element={<F1Live/>}/>
            <Route path="/f1-live/fp2" element={<FP2/>}/>
            <Route path="/f1-live/fp3" element={<FP3/>}/>
            <Route path="/f1-live/q1" element={<Q1/>}/>
            <Route path="/f1-live/q2" element={<Q2/>}/>
            <Route path="/f1-live/q3" element={<Q3/>}/>
            <Route path="/f1-live/grid" element={<Grid/>}/>
            <Route path="/f1-live/race" element={<Race/>}/>
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
