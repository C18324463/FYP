import React, {useEffect, useState} from 'react';
import {Table} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import db from "./Firebase"
import {globalNum} from './Schedule';

function Bahrain(){
    const {circuitId} = useParams();
    console.log(circuitId);
    const ref = db.ref("MRData/RaceTable/Races");
    ref.on('value', snapshot => {
        let list = snapshot.val();
        console.log("This is global num: " + globalNum.value);
        list.forEach((element, index) => {
            console.log(index);
            if (index === globalNum.value){
                console.log(list[index]);
            }
        });
    });

    const [raceData, setRaceData] = useState();
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

    /*useEffect(() => {
        ref.on("value", (snapshot)=>{
            const racedb = snapshot.val();
            const racearray = [];
            for(let id in racedb){
                racearray.push({id, ...racedb[id]});
            }
            setRaceData(racearray)

        });
    })*/

    console.log(schedule);
    console.log(schedule.MRData?.RaceTable?.Races[0]);

    return(
        <div>
            <br></br>
            {schedule.MRData?.RaceTable?.Races.map(function(element) {
                //if(element.circuitId == circuitId)
                return (
                    <table>
                        <thead>
                            <tr>
                                <th key={element.raceName} style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>
                                    {element.circuitId}
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
                    </table>
                    
                )
                }  )}
        </div>
    )

}

export default Bahrain;