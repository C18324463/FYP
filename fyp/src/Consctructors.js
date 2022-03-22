import './Standings.css';
import React, {useEffect, useState} from 'react';
import {Table} from 'react-bootstrap';

function Constructors() {
    const [results, setResults] = useState([]);
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  
    useEffect(() => {
      const fetchData = async () => {
        await fetch(`http://ergast.com/api/f1/2022/1/constructorStandings.json`, requestOptions)
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
          <button id='drivers' onClick={() => openDrivers()}>Drivers</button>
          <br></br>
          <br></br>
          <Table id='table_standings'>
            <thead>
              <tr>
                <th>Position</th>
                <th>Constructor</th>
                <th>Points</th>
                <th>Wins</th>
              </tr>
            </thead>
            <tbody>
                {results.MRData?.StandingsTable?.StandingsLists[0].ConstructorStandings.map(element => {
                  return (
                    <tr>
                      <td key={element.position}>
                        {element.position}
                      </td>
                      <td key={element.Constructor.name}>
                        {element.Constructor.name}
                      </td>
                      <td key={element.constructorId}>
                        {element.points}
                      </td>
                      <td key={element.positionText}>
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