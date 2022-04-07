import React, {useEffect, useState} from 'react';
import './Home.css';
import './App.js';
import {Card, Image, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "firebase/database";
import logo from "./img/logo512.png";

export default function Home(){
    const [show, setShow] = useState(false);
    const [showBar, setShowBar] = useState("none");
    const [search, setSearch] = useState("Formula1");
    const [results, setResults] = useState([]);
    const options = {
        method: 'GET',
        headers: {
            'X-BingApis-SDK': 'true',
            'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
            'X-RapidAPI-Key': '0c95c310c4mshab7ea109206920dp127537jsn00aba7a3f891'
        }
    };

    useEffect(() => {
        const fetchData = async () => {
          await fetch(`https://bing-news-search1.p.rapidapi.com/news/search?q=${search}&freshness=Day&textFormat=Raw&safeSearch=Off`, options)
            .then(response => response.json())
            .then(result => setResults(result.value))
            .catch(err => console.error(err));
        };
        fetchData();
    }, []);

    // .slice(0).reverse()

    console.log(results);

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
            <Row id='row'>
                {results.map(element => {
                return (
                    <Card className='card1' border="danger">
                        <div>
                            <Card.Img className='img1' variant="top" src={element.image?.thumbnail?.contentUrl}/>
                            <Card.Body>
                                <Card.Title key={element.name}>
                                    {element.name}
                                </Card.Title>
                                <Card.Text style={{maxWidth: "800px"}} key={element.description}>
                                    {element.description}
                                </Card.Text>
                                <br></br>
                                <br></br>
                                <Card.Text style={{maxWidth: "800px", fontStyle: "italic"}}key={element.provider[0].name}>
                                    <Card.Img className='img2' variant="top" src={element.provider[0].image?.thumbnail?.contentUrl}/>
                                    {element.provider[0].name}
                                </Card.Text>
                                <Card.Text style={{maxWidth: "800px"}} key={element.url}>
                                    <Card.Link target="_blank" href={element.url}>{element.url}</Card.Link>
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                )
                })}
            </Row>
        </div>
    )
}

