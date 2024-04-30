import './App.css';
import React from 'react';
import {action,originals} from './urls'
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost urls={originals} title='Netflix Originals'/>
      <RowPost urls={action} title='Action' isSmall/>
    </div>
  );
}

export default App;
