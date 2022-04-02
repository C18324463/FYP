import React, {useEffect, useState} from 'react';
import './F1Live.css';
import {Table} from 'react-bootstrap';
import "firebase/database";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./img/logo512.png";

function F1Live(){
    const [show, setShow] = useState(false)
    const [live, setLive] = useState([]);
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'f1-live-motorsport-data.p.rapidapi.com',
        'X-RapidAPI-Key': '0c95c310c4mshab7ea109206920dp127537jsn00aba7a3f891'
      }
    };

    useEffect(() => {
        const fetchData = async () => {
          await fetch(`https://f1-live-motorsport-data.p.rapidapi.com/session/3113`, options)
          .then(response => response.json())
          .then(result => setLive(result))
          .catch(error => console.log('error', error));
        };
        fetchData();
      }, []);

      console.log(live);
      let array = [];
      let array2 = [];
      let array3 = [];
      let array4 = [];
      let index = 0;
      let index2 = 0;
      let index3 = 0;
      let index4 = 0;

      for(index = 0; index < live.results?.drivers.length; index++) {
        array[index] = [live.results?.drivers[index]];
      }

      for(index2 = 0; index2< live.results?.speed?.top_speeds[0]?.drivers.length; index2++) {
        array2[index2] = [live.results?.speed?.top_speeds[0].drivers[index2]];
      } 

      for(index3 = 0; index3< live.results?.speed?.top_speeds[1]?.drivers.length; index3++) {
        array3[index3] = [live.results?.speed?.top_speeds[1].drivers[index3]];
      } 

      for(index4 = 0; index4< live.results?.speed?.top_speeds[2]?.drivers.length; index4++) {
        array4[index4] = [live.results?.speed?.top_speeds[2].drivers[index4]];
      } 

      ///////////////////
      console.log(array);
      console.log(array2);
      console.log(array3);
      console.log(array4);
      //console.log(array2[0]);

    ///////////////////////////////////////////////////////////////////////////
    function Home(){
        console.log("hi");
        window.location = "/"
    };
  
    function Schedule(){
        console.log("hi");
        window.location = "/schedule"
    };
  
    function F1Live(){
        console.log("hi");
        window.location = "/f1-live"
    };
  
    function Standings(){
        console.log("hi");
        window.location = "/standings/drivers_champ"
    };
  
    function Information(){
        console.log("hi");
        window.location = "/statistics/info_drivers"
    };

    return(
        <div>
          {show === true? 
            <div id="sidenav">
                <button className="closebtn" onClick={() => setShow(false)}>X</button>     
                <img id='logo' src={logo}/>
                <br></br>
                <br></br>
                <a href="#" onClick={Home}>Home</a>
                <a href="#" onClick={Schedule}>Schedule</a>
                <a href="#" onClick={F1Live}>F1 Live</a>
                <a href="#" onClick={Standings}>Standings</a>
                <a href="#" onClick={Information}>Information</a>
            </div> 
            : 
            <div>
                <button className='openBtn' onClick={() => setShow(true)}>&#9776; Open</button>
            </div>
          }
          <br></br>
          <Table id='live_standings'>
            <thead>
              <tr>
                <th id='header'>Position</th>
                <th id='header'>Driver</th>
                <th id='header'>Team</th>
                <th id='header'>Tyre</th>
                <th id='header'>Time</th>
                <th id='header'>Gap to Leader</th>
                <th id='header'>Gap to Driver Ahead</th>
                <th id='header'>Lap Number</th>
              </tr>
            </thead>
            <tbody>
                {array.map(element => { 
                  return (
                    <tr>
                      <td id='cell'>
                        {element[0].position}
                      </td>
                      <td id='cell'>
                        {element[0].name}
                      </td>
                      <td id='cell'>
                        {element[0].team_name}
                      </td>
                      <td id='cell'>
                        {element[0].current_tyre}
                      </td>
                      <td id='cell'>
                        {element[0].time}
                      </td>
                      <td id='cell'>
                        {element[0].gap}
                      </td>
                      <td id='cell'>
                        {element[0].interval}
                      </td>
                      <td id='cell'>
                        {element[0].current_lap}
                      </td>
                    </tr>
                  )
                }  )}
            </tbody>
          </Table>
          <br></br>
          <h1 id='label'>Sector 1 Top 6 Speeds</h1>
          <Table id='speeds'>
            <thead>
              <tr>
                <th id='header'>Speed Position</th>
                <th id='header'>Driver</th>
                <th id='header'>Team</th>
                <th id='header'>Speed</th>
              </tr>
            </thead>
            <tbody>
              {array2.map(element => {
                return (
                  <tr>
                    <td id='cell'>{element[0].position}</td>
                    <td id='cell'>{element[0].driver}</td>
                    <td id='cell'>{element[0].team_name}</td>
                    <td id='cell'>{element[0].speed}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
          <br></br>
          <h1 id='label'>Sector 2 Top 6 Speeds</h1>
          <Table id='speeds'>
            <thead>
              <tr>
                <th id='header'>Speed Position</th>
                <th id='header'>Driver</th>
                <th id='header'>Team</th>
                <th id='header'>Speed</th>
              </tr>
            </thead>
            <tbody>
              {array3.map(element => {
                return (
                  <tr>
                    <td id='cell'>{element[0].position}</td>
                    <td id='cell'>{element[0].driver}</td>
                    <td id='cell'>{element[0].team_name}</td>
                    <td id='cell'>{element[0].speed}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
          <br></br>
          <h1 id='label'>Sector 3 Top 6 Speeds</h1>
          <Table id='speeds'>
            <thead>
              <tr>
                <th id='header'>Speed Position</th>
                <th id='header'>Driver</th>
                <th id='header'>Team</th>
                <th id='header'>Speed</th>
              </tr>
            </thead>
            <tbody>
              {array4.map(element => {
                return (
                  <tr>
                    <td id='cell'>{element[0].position}</td>
                    <td id='cell'>{element[0].driver}</td>
                    <td id='cell'>{element[0].team_name}</td>
                    <td id='cell'>{element[0].speed}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
          <br></br>
          <br></br>
        </div>
    )
}

export default F1Live;