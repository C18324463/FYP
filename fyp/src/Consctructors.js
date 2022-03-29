import React, {useEffect, useState} from 'react';
import './Constructors.css';
import {Table} from 'react-bootstrap';

function Constructors() {
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

    function openDrivers() {
        console.log("const");
        window.location = "/standings/drivers_champ"
    }

    console.log(results);
    console.log(results.MRData?.StandingsTable?.StandingsLists[0].ConstructorStandings[0]);

    return(
        <div>
          <button className='drivers' onClick={() => openDrivers()}>Drivers</button>
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