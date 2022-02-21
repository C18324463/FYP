import './App.css';
import React, {useState} from 'react';
import SideNav from './SideNav';


function App(props, state) {
  const [wid, setWid] = useState('0%');
  const openSidenav = ( ) => {
    setWid('25%')
  }
  const closeSidenav = ( ) => {
    setWid('0%')
  }

  return (
    <div className="container">
      <button onClick={openSidenav}>Open</button>
      <SideNav name='Bar' width={wid} closeNav={closeSidenav}/>
    </div>
  );
}

export default App;
