import './App.css';
import React, { useRef } from "react";


function App() {
  function openNav() {
    var name = React.findDOMNode(this.refs.cpDev1).value;
    this.someOtherFunction(name);
    this.myRef= React.createRef();

    //document.getElementById("mySidenav").style.width = "250px";
    //document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    //document.getElementById("mySidenav").style.width = "0";
    //document.getElementById("main").style.marginLeft= "0";
  }

  return (
    <div>
      {/*Comments*/}
      <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onClick={() => closeNav()}>&times;</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
      <div id="main" ref={this.myRef}>
        <span style="font-size:30px;cursor:pointer" onClick={() => openNav()}>&#9776; Open</span>
      </div>
    </div>
  );
}

export default App;
