import React, {useEffect, useState} from 'react';
import {Table} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import "firebase/database";
import './RaceDetails.css';
import logo from "./img/logo512.png";

function RaceDetails(){
    const {circuitId} = useParams();
    const [show, setShow] = useState(false);
    const [schedule, setSchedule] = useState([]);
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  
    useEffect(() => {
      const fetchData = async () => {
        await fetch(`http://ergast.com/api/f1/current/${circuitId}.json`, requestOptions)
        .then(response => response.text())
        .then(response2 => JSON.parse(response2))
        .then(result => setSchedule(result))
        .catch(error => console.log('error', error));
      };
      fetchData();
    }, []);

    console.log(schedule);

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
            {show === true ?
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
                        <h1 id='universe_side1'>F1 UNIVERSE</h1>
                    </div>
                </>
                : 
                <div id='title1'>
                    <button className='openBtn' onClick={() => setShow(true)}>&#9776; Open</button>
                    <h1 id='universe1'>F1 UNIVERSE</h1>
                </div>
            }
            <br></br>
            {schedule.MRData?.RaceTable?.Races.map(function(element) {
                return (
                    <Table id='race_info' style={{ border: "1px solid black", borderCollapse: "collapse", width: "70%", margin: "auto", fontSize: "20px"}}>
                        <thead>
                            <tr>
                                <th key={element.raceName} style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>
                                    {element.raceName}
                                    {" "}
                                    at the
                                    {" "}
                                    {element.Circuit.circuitName}
                                    {" "}
                                    {element.time}
                                    {" "}
                                    {element.date}
                                </th>
                            </tr>
                        </thead>
                        <br></br>
                        <tbody>
                            <tr>
                                <td key={element.raceName} style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>
                                    First Practice:
                                    {" "} 
                                    {element.FirstPractice.time}
                                    {" "}
                                    {element.FirstPractice.date}
                                </td>
                            </tr>
                            <br></br>
                            <tr>
                                <td key={element.raceName} style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>
                                    Second Practice:
                                    {" "} 
                                    {element.SecondPractice.time}
                                    {" "}
                                    {element.SecondPractice.date}
                                </td>
                            </tr>
                            <br></br>
                            <tr>
                                <td key={element.raceName} style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>
                                    Third Practice:
                                    {" "} 
                                    {element.ThirdPractice.time}
                                    {" "}
                                    {element.ThirdPractice.date}
                                </td>
                            </tr>
                            <br></br>
                            <tr>
                                <td key={element.raceName} style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>
                                    Qualifying:
                                    {" "} 
                                    {element.Qualifying.time}
                                    {" "}
                                    {element.Qualifying.date}
                                </td>
                            </tr>
                            <br></br>
                            <tr>
                                <td key={element.raceName} style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>
                                    Race:
                                    {" "} 
                                    {element.time}
                                    {" "}
                                    {element.date}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                )
                }  )}
        </div>
    )

}

export default RaceDetails;