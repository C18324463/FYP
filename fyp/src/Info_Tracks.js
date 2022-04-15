import React, {useEffect, useState} from 'react';
import './Info_Tracks.css';
import {Card, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import track_images from "./img/track_images";
import logo from "./img/logo512.png";

function Info_Tracks() {
    let counter = -1;
    let number = 0
    let info = [];
    let x = [];
    const [show, setShow] = useState(false);
    const [trackSearch, setTrackSearch] = useState("");
    const [search, setSearch] = useState([]);
    const [answer, setAnswer] = useState([]);
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    useEffect(() => {
        const fetchData = async () => {
          await fetch(`http://ergast.com/api/f1/2022/circuits.json`, requestOptions)
          .then(response => response.text())
          .then(response2 => JSON.parse(response2))
          .then(result => info = result)
          .catch(error => console.log('error', error));
        };
        fetchData();

        setTimeout (() => {
            console.log(info);
            console.log(x);
            for(number = 0; number < info.MRData?.CircuitTable?.Circuits.length; number++) {
                var obj = {};
                obj.img = track_images[number];
                obj.circuitName = info.MRData?.CircuitTable?.Circuits[number].circuitName;
                obj.nationality = info.MRData?.CircuitTable?.Circuits[number].nationality;
                obj.locality = info.MRData?.CircuitTable?.Circuits[number].Location.locality;
                obj.country = info.MRData?.CircuitTable?.Circuits[number].Location.country;
                obj.circuitId = info.MRData?.CircuitTable?.Circuits[number].Location.circuitId;
                x.push(obj);
            }
            console.log(x);
            setAnswer(x);
        }, 1000)

    }, []);

    useEffect(() => {
        console.log(answer);
        setSearch(answer?.filter((element) => element.circuitName.toLowerCase().includes(trackSearch.toLowerCase()) 
        || element.locality.toLowerCase().includes(trackSearch.toLowerCase())
        || element.country.toLowerCase().includes(trackSearch.toLowerCase())));
    }, [trackSearch])

    console.log(x);
    console.log(info);
    console.log(search);
    console.log(answer);

    function openDrivers() {
        console.log("const");
        window.location = "/statistics/info_drivers"
    };

    function openConstructors() {
        console.log("const");
        window.location = "/statistics/info_constructors"
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
        window.location = "/f1-live/fp1"
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
                <>
                    <div className="sidenav" >
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
                <Col className='col-sm-2 text-center'>
                    <button className='info_drivers' style={{backgroundColor: "#fff0f0"}} onClick={() => openDrivers()}>Drivers</button>
                </Col>
                <Col className='col-sm-2 text-center'>
                    <button className='info_constructors' style={{backgroundColor: "#fff0f0"}} onClick={() => openConstructors()}>Constructors</button>
                </Col>
                <Col className='col-sm-3 text-center'>
                    <input id='input1' type="text" style={{backgroundColor: "#fff0f0"}} placeholder="Search..." onInput={(e) => setTrackSearch(e.target.value)}/>
                </Col>
            </Row>
            <br></br>
            <div>
                <Row>
                {trackSearch ?
                    search?.map(element => {
                        counter = counter + 1;
                        return (
                            <Col className='col-sm-3' style={{ marginBottom: "20px"}}>
                                <Card className='card' border='danger'>
                                    <Card.Img className='img' variant="top" style={{backgroundColor: "#fff7f7"}} src={element.img}/>
                                    <Card.Body style={{backgroundColor: "#fff0f0"}}>
                                        <Card.Title key={element.circuitId}>
                                            Name:{" "}
                                            {element.circuitName}
                                        </Card.Title>
                                        <Card.Text>
                                            Location:{" "}
                                            {element.locality}
                                            <br></br>
                                            Country:{" "}
                                            {element.country}
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
                            <Col className='col-sm-3' style={{ marginBottom: "20px"}}>
                                <Card className='card' border='danger' >
                                    <Card.Img className='img' variant="top" style={{backgroundColor: "#fff7f7"}} src={element.img}/>
                                    <Card.Body style={{backgroundColor: "#fff0f0"}}>
                                        <Card.Title key={element.circuitId}>
                                            Name:{" "}
                                            {element.circuitName}
                                        </Card.Title>
                                        <Card.Text>
                                            Location:{" "}
                                            {element.locality}
                                            <br></br>
                                            Country:{" "}
                                            {element.country}
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

export default Info_Tracks;