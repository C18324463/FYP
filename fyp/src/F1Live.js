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
          await fetch(`https://f1-live-motorsport-data.p.rapidapi.com/session/3111`, options)
          .then(response => response.json())
          .then(result => setLive(result))
          .catch(error => console.log('error', error));
        };
        fetchData();
      }, []);

      console.log(live);
      let array = [];
      let index = 0;

      for (index = 0; index < live.results?.drivers.length; index++) {
        array[index] = [live.results?.drivers[index]];
      }


      ///////////////////
      console.log(array);
      console.log(array[0]);

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
          <Table id='live_standings' style={{ border: "1px solid black", borderCollapse: "collapse", width: "50%", margin: "auto", fontSize: "20px"}}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>Position</th>
              <th style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>Driver</th>
              <th style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>Team</th>
              <th style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>Tyre</th>
              <th style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>Time</th>
              <th style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>Gap</th>
              <th style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>Interval</th>
              <th style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>Lap Number</th>
            </tr>
          </thead>
          <tbody>
              {array.map(element => { 
                return (
                  <tr>
                    <td style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>
                      {element[0].position}
                    </td>
                    <td style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>
                      {element[0].name}
                    </td>
                    <td style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>
                      {element[0].team_name}
                    </td>
                    <td style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>
                      {element[0].current_tyre}
                    </td>
                    <td style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>
                      {element[0].time}
                    </td>
                    <td style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>
                      {element[0].gap}
                    </td>
                    <td style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>
                      {element[0].interval}
                    </td>
                    <td style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>
                      {element[0].current_lap}
                    </td>
                  </tr>
                )
              }  )}
          </tbody>
        </Table>
        <br></br>
        <br></br>
        </div>
    )
}

export default F1Live;