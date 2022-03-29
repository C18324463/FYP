import React, {useEffect, useState} from 'react';
import './Stats.css';
import {Card, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
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

    function openConstructors() {
        console.log("const");
        window.location = "/statistics/info_constructors"
    }

    function openTracks() {
        console.log("const");
        window.location = "/statistics/info_tracks"
    }

    return(
        <div>
            <Row className='justify-content-center'>
                <Col className='col-sm-2 text-center'>
                    <button className='info_constructors' onClick={() => openConstructors()}>Constructors</button>
                </Col>
                <Col className='col-sm-2 text-center'>
                    <button className='info_tracks' onClick={() => openTracks()}>Tracks</button>
                </Col>
            </Row>
            <br></br>
            <div style={{height: "1000px"}}>
                <Row>
                {info.MRData?.DriverTable?.Drivers.map(element => {
                    counter = counter + 1;
                    return (
                        <Col className='col-sm-3' style={{ marginBottom: "20px"}}>
                            <Card className='card' border="danger">
                                <Card.Img className='img' variant="top" style={{height: "100%", width: "100%", borderBottom: "1px solid black", borderCollapse: "collapse"}} src={driver_images[counter]}/>
                                <Card.Body>
                                    <Card.Title key={element.driverId}>
                                        Name:
                                        {" "}
                                        {element.givenName}
                                        {" "}
                                        {element.familyName}
                                    </Card.Title>
                                    <Card.Text>
                                        Date{" "}of{" "}Birth:{" "}
                                        {element.dateOfBirth}
                                        <br></br>
                                        Nationality:{" "}
                                        {element.nationality}
                                        <br></br>
                                        Driver{" "}Number:{" "}
                                        {element.permanentNumber}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }  )}
                </Row>
            </div>
        </div>
    )
}

export default Statistics;
