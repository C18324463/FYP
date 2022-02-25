import './App.css';
import React from 'react';
import SideNav from './SideNav';

export default function Standings(){
  console.log("soooooooooooooo");
  function showAPI() {
    console.log("helllllllooooooooooo");
  
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://ergast.com/api/f1/2021/1/driverStandings", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  
  }
  
  return(
    <div>
      <button onClick={showAPI}>Click</button>
    </div>
  )
}


