import React from "react";

const SideNav = (props) => {
   return (
      <div className="sidenav" style={{ width: props.width, paddingTop: '20px' }}>
         <button onClick={props.closeNav}>X</button>
         <a href="#section">Home</a>
         <a href="#section">F1 Live</a>
         <a href="#section">Standings</a>
         <a href="#section">Statistics</a>
      </div>
   );
};

export default SideNav;