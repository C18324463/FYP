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
    let date_old = [];
    let date_new = [];
    let first_date = [];
    let new_fdate = [];
    let second_date = [];
    let new_sdate = [];
    let third_date = [];
    let new_tdate = [];
    let sprint_date = [];
    let new_sprdate = [];
    let quali_date = [];
    let new_qdate = [];
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

    for (num=0; num < schedule.MRData?.RaceTable?.Races.length; num++) {
        time_old[num] = schedule.MRData?.RaceTable?.Races[num].time;
        time_new[num] = time_old[num].slice(0, 8);
        date_old[num] = schedule.MRData?.RaceTable?.Races[num].date;
        let a = date_old[num].slice(8, 10);
        a += date_old[num].slice(4, 7);
        a += "-";
        a += date_old[num].slice(0, 4);
        date_new[num] = a;
        first_old[num] = schedule.MRData?.RaceTable?.Races[num].FirstPractice.time;
        first_new[num] = first_old[num].slice(0, 8);
        first_date[num] = schedule.MRData?.RaceTable?.Races[num].FirstPractice.date;
        let b = first_date[num].slice(8, 10);
        b += first_date[num].slice(4, 7);
        b += "-";
        b += first_date[num].slice(0, 4);
        new_fdate[num] = b;
        second_old[num] = schedule.MRData?.RaceTable?.Races[num].SecondPractice.time;
        second_new[num] = second_old[num].slice(0, 8);
        second_date[num] = schedule.MRData?.RaceTable?.Races[num].SecondPractice.date;
        let c = second_date[num].slice(8, 10);
        c += second_date[num].slice(4, 7);
        c += "-";
        c += second_date[num].slice(0, 4);
        new_sdate[num] = c;
        if (schedule.MRData?.RaceTable?.Races[num].ThirdPractice != undefined) {
            third_old[num] = schedule.MRData?.RaceTable?.Races[num].ThirdPractice.time;
            third_new[num] = third_old[num].slice(0, 8);
            third_date[num] = schedule.MRData?.RaceTable?.Races[num].ThirdPractice.date;
            let d = third_date[num].slice(8, 10);
            d += third_date[num].slice(4, 7);
            d += "-";
            d += third_date[num].slice(0, 4);
            new_tdate[num] = d;
        } else {
            sprint_old[num] = schedule.MRData?.RaceTable?.Races[num].Sprint.time;
            sprint_new[num] = sprint_old[num].slice(0, 8);
            sprint_date[num] = schedule.MRData?.RaceTable?.Races[num].Sprint.date;
            let e = sprint_date[num].slice(8, 10);
            e += sprint_date[num].slice(4, 7);
            e += "-";
            e += sprint_date[num].slice(0, 4);
            new_sprdate[num] = e;
        }
        quali_old[num] = schedule.MRData?.RaceTable?.Races[num].Qualifying.time;
        quali_new[num] = quali_old[num].slice(0, 8);
        quali_date[num] = schedule.MRData?.RaceTable?.Races[num].Qualifying.date;
        let f = quali_date[num].slice(8, 10);
        f += quali_date[num].slice(4, 7);
        f += "-";
        f += quali_date[num].slice(0, 4);
        new_qdate[num] = f;
    }

    function Home(){
        window.location = "/"
    };

    function Schedule(){
        window.location = "/schedule"
    };

    function F1Live(){
        window.location = "/f1-live/fp1"
    };

    function Standings(){
        window.location = "/standings/drivers_champ"
    };

    function Information(){
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
                    <Table id='race_info' style={{ border: "1px solid black", borderCollapse: "collapse", backgroundColor: "#fff0f0", width: "70%", margin: "auto", fontSize: "20px"}}>
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
                                    {date_new}
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
                                    {new_fdate}
                                </td>
                            </tr>
                            <br></br>
                            <tr>
                                <td key={element.raceName} style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>
                                    Second Practice:
                                    {" "} 
                                    {second_new}
                                    {" "}
                                    {new_sdate}
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
                                        {new_tdate}
                                    </td>
                                :
                                    <td key={element.raceName} style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>
                                        Sprint:
                                        {" "} 
                                        {sprint_new}
                                        {" "}
                                        {new_sprdate}
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
                                    {new_qdate}
                                </td>
                            </tr>
                            <br></br>
                            <tr>
                                <td key={element.raceName} style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>
                                    Race:
                                    {" "} 
                                    {time_new}
                                    {" "}
                                    {date_new}
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