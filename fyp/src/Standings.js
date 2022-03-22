import './Standings.css';
import React, {useEffect, useState} from 'react';
import {Table} from 'react-bootstrap';


function Standings(props){
  const [results, setResults] = useState([]);
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`http://ergast.com/api/f1/2022/1/driverStandings.json`, requestOptions)
      .then(response => response.text())
      .then(response2 => JSON.parse(response2))
      .then(result => setResults(result))
      .catch(error => console.log('error', error));
    };
    fetchData();
  }, []);

  function openConstructors() {
    console.log("const");
    window.location = "/standings/constructors_champ"
  }

  console.log(results);
  console.log(results.MRData?.StandingsTable?.StandingsLists[0].DriverStandings[0]);

  return(
    <div>
      <button id='constructors' onClick={() => openConstructors()}>Constructors</button>
      <br></br>
      <br></br>
      <Table id='table_standings'>
        <thead>
          <tr>
            <th>Position</th>
            <th>Driver</th>
            <th>Number</th>
            <th>Team</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
            {results.MRData?.StandingsTable?.StandingsLists[0].DriverStandings.map(element => {
              return (
                <tr>
                  <td key={element.Driver.driverId}>
                    {element.position}
                  </td>
                  <td key={element.Driver.dateOfBirth}>
                    {element.Driver.givenName}
                    {" "}
                    {element.Driver.familyName}
                  </td>
                  <td key={element.Driver.permanentNumber}>
                    {element.Driver.permanentNumber}
                  </td>
                  <td key={element.positionText}>
                    {element.Constructors[0].name}
                  </td>
                  <td key={element.Driver.code}>
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

