import React, {useState} from 'react';
import TextField from "@mui/material/TextField";
import logo from "./img/logo512.png";

const SideNav = (props) => {
   /*const [inputText, setInputText] = useState("");
   let inputHandler = (e) => {
     var lowerCase = e.target.value.toLowerCase();
     setInputText(lowerCase);
   };*/

   function Home(){
      console.log("hi");
      window.location = "/"
   };
   function F1Live(){
      console.log("hi");
      window.location = "/f1-live"
   };
   function Standings(){
      console.log("hi");
      window.location = "/standings/drivers_champ"
   };
   function Statistics(){
      console.log("hi");
      window.location = "/statistics/info_drivers"
   };

   return (
      <div className="sidenav" style={{ width: props.width, paddingTop: '20px' }}>
         <button className="closebtn" onClick={props.closeNav}>X</button>
         <img src={logo}/>
         <div className="search">
            <TextField id="outlined-basic" variant="outlined" fullWidth label="Search"/>
         </div>
         {/*<List input={inputText} />*/}
         <a href="#" onClick={Home}>Home</a>
         <a href="#" onClick={F1Live}>F1 Live</a>
         <a href="#" onClick={Standings}>Standings</a>
         <a href="#" onClick={Statistics}>Statistics</a>
      </div>
   );
};


export default SideNav;
