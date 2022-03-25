import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import db from "./Firebase"

function RaceDetails(){
    const {circuitId} = useParams();
    const ref = db.ref("MRData/RaceTable/Races");
    /*ref.on('value', snapshot => {
        let list = snapshot.val();
        /*list.forEach((element, index) => {
            if (index === globalNum.value){
            }
        });
    });*/

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
    console.log(schedule.MRData?.RaceTable?.Races[0]);

    return(
        <div>
            <br></br>
            {schedule.MRData?.RaceTable?.Races.map(function(element) {
                return (
                    <table>
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
                    </table>
                    
                )
                }  )}
        </div>
    )

}

export default RaceDetails;