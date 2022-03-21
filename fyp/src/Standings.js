import './App.css';
import React, {useState} from 'react';


function Standings(){
  let x = {};
  let y = false;
  const [results, setResults] = useState();
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  if(x === null) {
    y = true;
  } else {
    initProducts();
  }

  async function initProducts() {
    await fetch(`http://ergast.com/api/f1/2022/1/driverStandings.json`, requestOptions)
      .then(response => response.text())
      .then(response2 => JSON.parse(response2))
      .then(result => x = result)
      .then(result => setResults(result))
      .catch(error => console.log('error', error));
  }

  /*help(result)
  function help(result) {
    setResults(result);
    x = result;
  }*/

  console.log(x);
  console.log(results);
  console.log("WHY!");
  JSON.parse(JSON.stringify(x))
  x = JSON.stringify(x);

  return(
    <div>
      <button>Click</button>
      <div>
          {x?.MRData?.map(element => {
            <h1>
              {element}
            </h1>
          } )}
      </div>
    </div>
  )
}

export default Standings;