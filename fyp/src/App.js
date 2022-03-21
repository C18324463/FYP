import './App.css';
import React, {useState} from 'react';
import SideNav from './SideNav';
import Standings from "./Standings";
import F1Live from "./F1Live";
import Statistics from "./Statistics";
import Home from "./Home";
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from "react-router-dom";


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
            <Route path="/f1-live" element={<F1Live/>}/>
            <Route path="/statistics" element={<Statistics/>}/>
            <Route path="/standings" element={<Standings/>}/>
        </Routes>
        </BrowserRouter>
      </div>
  );
}