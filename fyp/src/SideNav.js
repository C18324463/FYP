import React, {useState} from 'react';
import TextField from "@mui/material/TextField";
import logo from "./img/Untitled.png"

const SideNav = (props) => {
   const [inputText, setInputText] = useState("");
   let inputHandler = (e) => {
     var lowerCase = e.target.value.toLowerCase();
     setInputText(lowerCase);
   };

   return (
      <div className="sidenav" style={{ width: props.width, paddingTop: '20px' }}>
         <button className="closebtn" onClick={props.closeNav}>X</button>
         <img src={logo}/>
         <div className="search">
            <TextField id="outlined-basic" variant="outlined" fullWidth label="Search"/>
         </div>
         {/*<List input={inputText} />*/}
         <a href="/Home.js">Home</a>
         <a href="/F1Live.js">F1 Live</a>
         <a href="/Standings.js">Standings</a>
         <a href="/Statistics.js">Statistics</a>
      </div>
   );
};

export default SideNav;