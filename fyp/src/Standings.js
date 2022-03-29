import React, {useEffect, useState} from 'react';
import './Standings.css';
import {Table} from 'react-bootstrap';

function Standings(){
  const [results, setResults] = useState([]);
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`http://ergast.com/api/f1/current/driverStandings.json`, requestOptions)
      .then(response => response.text())
      .then(response2 => JSON.parse(response2))
      .then(result => setResults(result))
      .catch(error => console.log('error', error));
    };
    fetchData();
  }, []);

  function openConstructors() {
    window.location = "/standings/constructors_champ"
  }

  console.log(results);
  console.log(results.MRData?.StandingsTable?.StandingsLists[0].DriverStandings[0]);

  return(
    <div>
      <button className='constructors' onClick={() => openConstructors()}>Constructors</button>
      <br></br>
      <Table id='table_standings' style={{ border: "1px solid black", borderCollapse: "collapse", width: "50%", margin: "auto", fontSize: "20px"}}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>Position</th>
            <th style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>Driver</th>
            <th style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>Number</th>
            <th style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>Team</th>
            <th style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>Points</th>
          </tr>
        </thead>
        <tbody>
            {results.MRData?.StandingsTable?.StandingsLists[0].DriverStandings.map(element => {
              return (
                <tr>
                  <td key={element.Driver.driverId} style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>
                    {element.position}
                  </td>
                  <td key={element.Driver.dateOfBirth} style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>
                    {element.Driver.givenName}
                    {" "}
                    {element.Driver.familyName}
                  </td>
                  <td key={element.Driver.permanentNumber} style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>
                    {element.Driver.permanentNumber}
                  </td>
                  <td key={element.positionText} style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>
                    {element.Constructors[0].name}
                  </td>
                  <td key={element.Driver.code} style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto", fontSize: "20px", padding: "10px"}}>
                    {element.points}
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

export default Standings;

