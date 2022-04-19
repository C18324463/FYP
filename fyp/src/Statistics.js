import React, {useEffect, useState} from 'react';
import './Stats.css';
import {Card, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import driver_images from "./img/driver_images";
import logo from "./img/logo512.png";

function Statistics(){
    let counter = -1;
    let number = 0;
    let info = [];
    let x = [];
    const [show, setShow] = useState(false);
    const [driverSearch, setDriverSearch] = useState("");
    const [search, setSearch] = useState([]);
    const [answer, setAnswer] = useState([]);
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
  
    useEffect(() => {
        const fetchData = async () => {
            await fetch(`http://ergast.com/api/f1/2022/drivers.json`, requestOptions)
            .then(response => response.text())
            .then(response2 => JSON.parse(response2))
            .then(result => info = result)
            .catch(error => console.log('error', error));
        };
        fetchData();

        setTimeout (() => {
            for(number = 0; number < info.MRData?.DriverTable?.Drivers.length; number++) {
                var obj = {};
                obj.img = driver_images[number];
                obj.code = info.MRData?.DriverTable?.Drivers[number].code;
                obj.dateOfBirth = info.MRData?.DriverTable?.Drivers[number].dateOfBirth;
                obj.driverId = info.MRData?.DriverTable?.Drivers[number].driverId;
                obj.familyName = info.MRData?.DriverTable?.Drivers[number].familyName;
                obj.givenName = info.MRData?.DriverTable?.Drivers[number].givenName;
                obj.nationality = info.MRData?.DriverTable?.Drivers[number].nationality;
                obj.permanentNumber = info.MRData?.DriverTable?.Drivers[number].permanentNumber;
                x.push(obj);
            }
            setAnswer(x);
        }, 1000)
    }, []);

    useEffect(() => {
        setSearch(answer?.filter((element) => element.givenName.toLowerCase().includes(driverSearch.toLowerCase()) 
        || element.familyName.toLowerCase().includes(driverSearch.toLowerCase()) 
        || element.nationality.toLowerCase().includes(driverSearch.toLowerCase())));
    }, [driverSearch])

    function openConstructors() {
        window.location = "/statistics/info_constructors"
    };

    function openTracks() {
        window.location = "/statistics/info_tracks"
    };

    function Home(){
        window.location = "/"
    };

    function Schedule(){
        window.location = "/schedule"
    };

    function F1Live(){
        window.location = "/f1-live/fp1"
    };

    function Standings(){
        window.location = "/standings/drivers_champ"
    };

    function Information(){
        window.location = "/statistics/info_drivers"
    };


    return(
        <div>
            {show === true? 
                <>
                    <div className="sidenav">
                        <button className="closebtn" onClick={() => setShow(false)}>X</button>     
                        <img id='logo1' src={logo}/>
                        <a href="#" onClick={Home}>Home</a>
                        <a href="#" onClick={Schedule}>Schedule</a>
                        <a href="#" onClick={F1Live}>F1 Live</a>
                        <a href="#" onClick={Standings}>Standings</a>
                        <a href="#" onClick={Information}>Information</a>
                    </div>
                    <div id='title_side1'>
                        <h1 id='universe_side1'>F1 UNIVERSE</h1>
                    </div> 
                </>
                :
                <div id='title1'>
                    <button className='openBtn' onClick={() => setShow(true)}>&#9776; Open</button>
                    <h1 id='universe1'>F1 UNIVERSE</h1>
                </div>
            }
            <br></br>
            <Row className='justify-content-center'>
                <Col className='col-sm-3 text-center' style={{marginLeft: "8%"}}>
                    <button className='info_constructors' style={{backgroundColor: "#fff0f0"}} onClick={() => openConstructors()}>Constructors</button>
                </Col>
                <Col className='col-sm-3 text-center'>
                    <button className='info_tracks'  style={{backgroundColor: "#fff0f0"}}onClick={() => openTracks()}>Tracks</button>
                </Col>
                <Col className='col-sm-3 text-center'>
                    <input id='input' type="text" placeholder="Search..." style={{backgroundColor: "#fff0f0"}} onInput={(e) => setDriverSearch(e.target.value)}/>
                </Col>
            </Row>
            <br></br>
            <div>
                <Row>
                    {driverSearch ?
                        search?.map(element => {
                            counter = counter + 1;
                            return (
                                <Col className='col-sm-3' style={{marginBottom: "20px"}}>
                                    <Card className='card' border="danger" style={{backgroundColor: "#fff0f0"}}>
                                        <Card.Img id='imgs' variant="top" src={element.img}/>
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
                        :
                        answer?.map(element => {
                            counter = counter + 1;
                            return (
                                <Col className='col-sm-3' style={{marginBottom: "20px"}}>
                                    <Card className='card' border="danger" style={{backgroundColor: "#fff0f0"}}>
                                        <Card.Img className='img' variant="top" src={element.img}/>
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

