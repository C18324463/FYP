import React, {useEffect, useState} from 'react';
import './F1Live.css';
import "firebase/database";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./img/logo512.png";

function F1Live(){
    const [show, setShow] = useState(false)
    const [schedule, setSchedule] = useState([]);
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'f1-live-motorsport-data.p.rapidapi.com',
        'X-RapidAPI-Key': '0c95c310c4mshab7ea109206920dp127537jsn00aba7a3f891'
      }
    };

    useEffect(() => {
        const fetchData = async () => {
          await fetch(`https://f1-live-motorsport-data.p.rapidapi.com/session/3120`, options)
          .then(response => response.json())
          .then(result => setSchedule(result))
          .catch(error => console.log('error', error));
        };
        fetchData();
      }, []);

      console.log(schedule);

    ///////////////////////////////////////////////////////////////////////////
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
            <div id="sidenav">
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
          
        </div>
    )
}

export default F1Live;