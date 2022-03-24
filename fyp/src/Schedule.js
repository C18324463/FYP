import React, {useEffect, useState} from 'react';
import {Table} from 'react-bootstrap';
import globalNum from './global';

function Schedule(){
    const [schedule, setSchedule] = useState([]);
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  
    useEffect(() => {
      const fetchData = async () => {
        await fetch(`http://ergast.com/api/f1/current.json`, requestOptions)
        .then(response => response.text())
        .then(response2 => JSON.parse(response2))
        .then(result => setSchedule(result))
        .catch(error => console.log('error', error));
      };
      fetchData();
    }, []);

    console.log(schedule);
    console.log(schedule.MRData?.RaceTable?.Races[0]);

    let counter = -1;

    function Info(circuit){
        let test = Number(circuit);
        globalNum.value = 0;
        globalNum.value = test -1;
        console.log(globalNum.value);
        window.location = "/schedule/Bahrain"
    };

    return(
        <div>
          <Table id='table_standings' style={{ border: "1px solid black", borderCollapse: "collapse", width: "70%", margin: "auto", fontSize: "20px"}}>
            <thead>
                <tr>
                    <th style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>Race Name</th>
                    <th style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>Date</th>
                    <th style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>Time GMT</th>
                    <th style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>Circuit</th>
                </tr>
            </thead>
            <tbody>
                {schedule.MRData?.RaceTable?.Races.map(element => {
                    counter = counter + 1;
                    return (
                        <tr>
                            <td onClick={() => Info(element.round)} key={element.raceName} style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>
                                {element.raceName}
                            </td>
                            <td key={element.date} style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>
                                {element.date}
                            </td>
                            <td key={element.time} style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>
                                {element.time}
                            </td>
                            <td key={element.Circuit.circuitName} style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>
                                {element.Circuit.circuitName}
                            </td>
                        </tr>
                    )
                    }  )}
            </tbody>
      </Table>
        </div>
    )
}

export default Schedule;