import React, {useEffect, useState} from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import track_images from "./img/track_images";

function Info_Tracks() {
    const [info, setInfo] = useState([]);
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    useEffect(() => {
        const fetchData = async () => {
          await fetch(`http://ergast.com/api/f1/2022/circuits.json`, requestOptions)
          .then(response => response.text())
          .then(response2 => JSON.parse(response2))
          .then(result => setInfo(result))
          .catch(error => console.log('error', error));
        };
        fetchData();
    }, []);

    console.log(info);
    console.log(info.MRData?.CircuitTable.Circuits);
    console.log(track_images);

    let counter = -1;

    function openDrivers() {
        console.log("const");
        window.location = "/statistics/info_drivers"
    }

    function openConstructors() {
        console.log("const");
        window.location = "/statistics/info_constructors"
    }

    return(
        <div>
            <Row className='justify-content-center'>
                <Col className='col-sm-2 text-center'>
                    <button id='info_drivers' onClick={() => openDrivers()} style={{ width: "155px", margin: "2px", fontSize: "25px"}}>Drivers</button>
                </Col>
                <Col className='col-sm-2 text-center'>
                    <button id='info_constructors' onClick={() => openConstructors()} style={{ width: "155px", margin: "2px", fontSize: "25px"}}>Constructors</button>
                </Col>
            </Row>
            <br></br>
            <div style={{height: "1000px"}}>
                <Row>
                {info.MRData?.CircuitTable?.Circuits.map(element => {
                    counter = counter + 1;
                    return (
                        <Col className='col-sm-3' style={{ marginBottom: "20px"}}>
                            <Card className='card' style={{ width: '20rem', height: "100%", border: "1px solid black", marginLeft: "8%", borderCollapse: "collapse"}}>
                                <Card.Img className='img' variant="top" src={track_images[counter]} style={{height: "100%", width: "100%", borderBottom: "1px solid black", borderCollapse: "collapse"}}/>
                                <Card.Body>
                                    <Card.Title key={element.circuitId}>
                                        Name:{" "}
                                        {element.circuitName}
                                    </Card.Title>
                                    <Card.Text>
                                        Location:{" "}
                                        {element.Location.locality}
                                        <br></br>
                                        Country:{" "}
                                        {element.Location.country}
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

export default Info_Tracks;