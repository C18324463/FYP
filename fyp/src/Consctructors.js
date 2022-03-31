import React, {useEffect, useState} from 'react';
import './Constructors.css';
import {Table} from 'react-bootstrap';
import "firebase/database";
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from "@mui/material/TextField";
import logo from "./img/logo512.png";

function Constructors() {
    const [show, setShow] = useState(false) 
    const [results, setResults] = useState([]);
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  
    useEffect(() => {
      const fetchData = async () => {
        await fetch(`http://ergast.com/api/f1/current/constructorStandings.json`, requestOptions)
        .then(response => response.text())
        .then(response2 => JSON.parse(response2))
        .then(result => setResults(result))
        .catch(error => console.log('error', error));
      };
      fetchData();
    }, []);

    console.log(results);

    function openDrivers() {
        console.log("const");
        window.location = "/standings/drivers_champ"
    };

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
                <img src={logo}/>
                <div className="search">
                    <TextField id="outlined-basic" variant="outlined" fullWidth label="Search"/>
                </div>
                {/*<List input={inputText} />*/}
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
          <button id='drivers' className='justify-content-center' onClick={() => openDrivers()} style={{marginLeft: "47%"}}>Drivers</button>
          <br></br>
          <Table id='table_standings' style={{ border: "1px solid black", borderCollapse: "collapse", width: "50%", margin: "auto", fontSize: "20px"}}>
            <thead>
              <tr>
                <th style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>Position</th>
                <th style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>Constructor</th>
                <th style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>Points</th>
                <th style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>Wins</th>
              </tr>
            </thead>
            <tbody>
                {results.MRData?.StandingsTable?.StandingsLists[0].ConstructorStandings.map(element => {
                  return (
                    <tr>
                      <td key={element.points} style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>
                        {element.position}
                      </td>
                      <td key={element.Constructor.name} style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>
                        {element.Constructor.name}
                      </td>
                      <td key={element.constructorId} style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>
                        {element.points}
                      </td>
                      <td key={element.positionText} style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>
                        {element.wins}
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
    
export default Constructors;