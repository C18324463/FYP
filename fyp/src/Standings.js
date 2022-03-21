import './Standings.css';
import React, {useEffect, useState} from 'react';


function Standings(){
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

  console.log(results);
  console.log(results.MRData?.StandingsTable?.StandingsLists[0].DriverStandings[0]);

  return(
    <div>
      <br></br>
      <table id='table_standings' >
        <thead>
          <tr>
            <th>Position</th>
            <th>Driver</th>
            <th>Number</th>
            <th>Team</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody className='trtable'>
            {results.MRData?.StandingsTable?.StandingsLists[0].DriverStandings.map(element => {
              return (
                <tr>
                  <td key={element.Driver.driverId} className='trtable'>
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
      </table>
    </div>
  )
}

export default Standings;

