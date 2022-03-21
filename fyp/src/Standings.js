import './App.css';
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
      <table>
          {results.MRData?.StandingsTable?.StandingsLists[0].DriverStandings.map(element => {
            return (
              <p key={element.Driver.driverId}>
              {element.position}
              {" "}
              {element.Driver.givenName}
              {" "}
              {element.Driver.familyName}
              {" "}
              {element.Driver.permanentNumber}
              {" "}
              {element.Constructors[0].name}
              {" "}
              {element.points}
              </p>
            )
          }  )}
      </table>
    </div>
  )
}

export default Standings;