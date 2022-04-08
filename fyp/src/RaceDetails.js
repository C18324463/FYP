import React, {useEffect, useState} from 'react';
import {Table} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import './RaceDetails.css';
import logo from "./img/logo512.png";

function RaceDetails(){
    let num = 0;
    let time_old = [];
    let time_new = [];
    let first_old = [];
    let first_new = [];
    let second_old = [];
    let second_new = [];
    let third_old = [];
    let third_new = [];
    let sprint_old = [];
    let sprint_new = [];
    let quali_old = [];
    let quali_new = [];
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

    for (num=0; num < schedule.MRData?.RaceTable?.Races.length; num++) {
        time_old[num] = schedule.MRData?.RaceTable?.Races[num].time;
        time_new[num] = time_old[num].slice(0, 8);
        first_old[num] = schedule.MRData?.RaceTable?.Races[num].FirstPractice.time;
        first_new[num] = first_old[num].slice(0, 8);
        second_old[num] = schedule.MRData?.RaceTable?.Races[num].SecondPractice.time;
        second_new[num] = second_old[num].slice(0, 8);
        if (schedule.MRData?.RaceTable?.Races[num].ThirdPractice != undefined) {
            third_old[num] = schedule.MRData?.RaceTable?.Races[num].ThirdPractice.time;
            third_new[num] = third_old[num].slice(0, 8);
        } else {
            sprint_old[num] = schedule.MRData?.RaceTable?.Races[num].Sprint.time;
            sprint_new[num] = sprint_old[num].slice(0, 8);
        }
        quali_old[num] = schedule.MRData?.RaceTable?.Races[num].Qualifying.time;
        quali_new[num] = quali_old[num].slice(0, 8);
    }

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
                                    at
                                    {" "}
                                    {time_new}
                                    {" "}
                                    on
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
                                    {first_new}
                                    {" "}
                                    {element.FirstPractice.date}
                                </td>
                            </tr>
                            <br></br>
                            <tr>
                                <td key={element.raceName} style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>
                                    Second Practice:
                                    {" "} 
                                    {second_new}
                                    {" "}
                                    {element.SecondPractice.date}
                                </td>
                            </tr>
                            <br></br>
                            <tr>
                                {element.ThirdPractice !== undefined ? 
                                    <td key={element.raceName} style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>
                                        Third Practice:
                                        {" "} 
                                        {third_new}
                                        {" "}
                                        {element.ThirdPractice.date}
                                    </td>
                                :
                                    <td key={element.raceName} style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>
                                        Sprint:
                                        {" "} 
                                        {sprint_new}
                                        {" "}
                                        {element.Sprint.date}
                                    </td>
                                }
                            </tr>
                            <br></br>
                            <tr>
                                <td key={element.raceName} style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>
                                    Qualifying:
                                    {" "} 
                                    {quali_new}
                                    {" "}
                                    {element.Qualifying.date}
                                </td>
                            </tr>
                            <br></br>
                            <tr>
                                <td key={element.raceName} style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>
                                    Race:
                                    {" "} 
                                    {time_new}
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