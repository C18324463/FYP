import './Statistics.css';
import React, {useEffect, useState} from 'react';
import {Card} from 'react-bootstrap';
import driver_images from "./img/driver_images";

function Statistics(){
    const [info, setInfo] = useState([]);
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  
    useEffect(() => {
      const fetchData = async () => {
        await fetch(`http://ergast.com/api/f1/2022/drivers.json`, requestOptions)
        .then(response => response.text())
        .then(response2 => JSON.parse(response2))
        .then(result => setInfo(result))
        .catch(error => console.log('error', error));
      };
      fetchData();
    }, []);

    console.log(info);
    console.log(info.MRData?.DriverTable.Drivers);
    console.log(driver_images);

    let counter = -1;

    return(
        <div>
            <button id='info_constructors'>Constructors</button>
            <br></br>
            <br></br>
            <button id='info_tracks'>Tracks</button>
            <div>
            {info.MRData?.DriverTable?.Drivers.map(element => {
                counter = counter + 1;
              return (
                <Card style={{ width: '18rem' }}>
                    <Card.Img className='img' variant="top" src={driver_images[counter]}/>
                    <Card.Body>
                        <Card.Title key={element.driverId}>
                            {element.givenName}
                            {" "}
                            {element.familyName}
                        </Card.Title>
                        <Card.Text>
                            {element.dateOfBirth}
                            <br></br>
                            {element.nationality}
                            <br></br>
                            {element.permanentNumber}
                        </Card.Text>
                    </Card.Body>
                </Card>
              )
            }  )}
            </div>
        </div>
    )
}

export default Statistics;
