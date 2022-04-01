import React, {useEffect, useState} from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import team_images from "./img/team_images";
import './Info_Constructors.css';
import "firebase/database";
import logo from "./img/logo512.png";

function Info_Constructors() {
    let counter = -1;
    const [show, setShow] = useState(false) 
    const [info, setInfo] = useState([]);
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    
    useEffect(() => {
        const fetchData = async () => {
          await fetch(`http://ergast.com/api/f1/2022/constructors.json`, requestOptions)
          .then(response => response.text())
          .then(response2 => JSON.parse(response2))
          .then(result => setInfo(result))
          .catch(error => console.log('error', error));
        };
        fetchData();
    }, []);

    console.log(info);

    function openDrivers() {
        console.log("const");
        window.location = "/statistics/info_drivers"
    };

    function openTracks() {
        console.log("const");
        window.location = "/statistics/info_tracks"
    };

    function Home(){
        console.log("hi");
        window.location = "/"
    };

    function Schedule(){
        console.log("hi");
        window.location = "/schedule"
    };

    function F1Live(){
        console.log("hi");
        window.location = "/f1-live"
    };

    function Standings(){
        console.log("hi");
        window.location = "/standings/drivers_champ"
    };
    
    function Information(){
        console.log("hi");
        window.location = "/statistics/info_drivers"
    };

    return(
        <div>
            {show === true? 
                <div className="sidenav" >
                    <button className="closebtn" onClick={() => setShow(false)}>X</button>     
                    <img id='logo' src={logo}/>
                    <br></br>
                    <br></br>
                    <a href="#" onClick={Home}>Home</a>
                    <a href="#" onClick={Schedule}>Schedule</a>
                    <a href="#" onClick={F1Live}>F1 Live</a>
                    <a href="#" onClick={Standings}>Standings</a>
                    <a href="#" onClick={Information}>Information</a>
                </div> 
                : 
                <div>
                    <button className='openBtn' onClick={() => setShow(true)}>&#9776; Open</button>
                </div>
            }
            <Row className='justify-content-center'>
                <Col className='col-sm-2 text-center'>
                    <button className='info_drivers' onClick={() => openDrivers()}>Drivers</button>
                </Col>
                <Col className='col-sm-2 text-center'>
                    <button className='info_tracks' onClick={() => openTracks()}>Tracks</button>
                </Col>
            </Row>
            <br></br>
            <div>
                <Row>
                {info.MRData?.ConstructorTable?.Constructors.map(element => {
                    counter = counter + 1;
                    return (
                        <Col className='col-sm-3' style={{ marginBottom: "20px"}}>
                            <Card className='card' border='danger'>
                                <Card.Img className='img' variant="top" src={team_images[counter]}/>
                                <Card.Body>
                                    <Card.Title key={element.constructorId}>
                                        Team:{" "}
                                        {element.name}
                                    </Card.Title>
                                    <Card.Text>
                                        Nationality:{" "}
                                        {element.nationality}
                                        <br></br>
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

export default Info_Constructors;