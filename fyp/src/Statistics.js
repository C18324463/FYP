import React, {useEffect, useState} from 'react';
import './Stats.css';
import {Card, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import driver_images from "./img/driver_images";
import "firebase/database";
import logo from "./img/logo512.png";

function Statistics(){
    let counter = -1;
    const [show, setShow] = useState(false);
    const [info, setInfo] = useState([]);
    const [driverSearch, setDriverSearch] = useState("");
    const [bollox, setBollox] = useState([]);
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

    //   setTimeout(() => {
    //     info.MRData?.DriverTable?.Drivers.map(function(element, index) {
    //         console.log(element);
    //         element.push({img : driver_images[index]});
    //     });
    //     console.log(info.MRData?.DriverTable?.Drivers);
    //   }, 1000)
    //   setBollox(info.MRData?.DriverTable?.Drivers.filter((element) => element.givenName.toLowerCase().includes(driverSearch.toLowerCase())));
    }, [/*driverSearch*/]);


    // useEffect(() => {
    //     console.log(driverSearch);
    //     setDriverSearch(info.MRData?.DriverTable?.Drivers.filter((element) => element.givenName.toLowerCase().includes(driverSearch.toLowerCase())));
    // }, [driverSearch]);

    console.log(info);

    function openConstructors() {
        console.log("const");
        window.location = "/statistics/info_constructors"
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
                <div className="sidenav">
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
                <Col className='col-sm-3 text-center' style={{marginLeft: "8%"}}>
                    <button className='info_constructors' onClick={() => openConstructors()}>Constructors</button>
                </Col>
                <Col className='col-sm-3 text-center'>
                    <button className='info_tracks' onClick={() => openTracks()}>Tracks</button>
                </Col>
                {/* <Col className='col-sm-3 text-center'>
                    <input type="text" placeholder="Search..." onInput={(e) => setDriverSearch(e.target.value)}/>
                </Col> */}
            </Row>
            <br></br>
            <div>
            <Row>
                {driverSearch.length > 0 ?
                
                bollox?.map(element => {
                    counter = counter + 1;
                    return (
                        <Col className='col-sm-3' style={{marginBottom: "20px"}}>
                            <Card className='card' border="danger">
                                <Card.Img className='img' variant="top" src={driver_images[counter]}/>
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
                }  ) :
                info.MRData?.DriverTable?.Drivers.map(element => {
                    console.log("hello") 
                    counter = counter + 1;
                    return (
                        <Col className='col-sm-3' style={{marginBottom: "20px"}}>
                            <Card className='card' border="danger">
                                <Card.Img className='img' variant="top" src={driver_images[counter]}/>
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
                }  )
                }
            </Row>
            </div>
        </div>
    )
}

export default Statistics;

