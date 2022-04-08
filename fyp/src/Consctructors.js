import React, {useEffect, useState} from 'react';
import './Constructors.css';
import {Table, Col, Row} from 'react-bootstrap';
import "firebase/database";
import 'bootstrap/dist/css/bootstrap.min.css';
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
    
    function pageRefresh() {
      window.location.reload(false);
    };
    
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
        window.location = "/f1-live/fp1"
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
            <>
              <div id="sidenav">
                  <button className="closebtn" onClick={() => setShow(false)}>X</button>     
                  <img id='logo1' src={logo}/>
                  <a href="#" onClick={Home}>Home</a>
                  <a href="#" onClick={Schedule}>Schedule</a>
                  <a href="#" onClick={F1Live}>F1 Live</a>
                  <a href="#" onClick={Standings}>Standings</a>
                  <a href="#" onClick={Information}>Information</a>
              </div> 
              <div id='title_side1'>
                  <button id='refreshButton' onClick={pageRefresh}>Refresh</button>
                  <h1 id='universe_side1'>F1 UNIVERSE</h1>
              </div>
            </>
            : 
            <div id='title1'>
                <button className='openBtn' onClick={() => setShow(true)}>&#9776; Open</button>
                <button id='refreshButton' onClick={pageRefresh}>Refresh</button>
                <h1 id='universe1'>F1 UNIVERSE</h1>
            </div>
          }
          <br></br>
          <Row className='justify-content-center'>
            <Col className='col-sm-3 text-center'>
              <button id='drivers' className='justify-content-center' onClick={() => openDrivers()} style={{marginLeft: "25%"}}>Drivers</button>
            </Col>
          </Row>
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