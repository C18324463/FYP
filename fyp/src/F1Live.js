import './App.css';
import React, {useEffect, useState} from 'react';

function F1Live(){

    const [schedule, setSchedule] = useState([]);
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    useEffect(() => {
        const fetchData = async () => {
          await fetch(`https://f1.sportmonks.com/api/v1.0/livescores/now?api_token=PDK3oTAIsRHAcHvyXh305cipcYCSNiHujyrtp9N1FkC24w8PhAZ4aQMXMCfp`, requestOptions)
          .then(response => response.text())
          .then(response2 => JSON.parse(response2))
          .then(result => setSchedule(result))
          .catch(error => console.log('error', error));
        };
        fetchData();
      }, []);

    return(
        <div>
          
        </div>
    )
}

export default F1Live;