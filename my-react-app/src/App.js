import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './assets/Home.png';
import MembersIcon from './assets/Members.png';
import Confusion from './assets/Confusion.png';
import Accuracy from './assets/Accuracy.png';
import searchicon from './assets/searchicon.png';
import MembersPage from './Components/MembersPage';
import Popup from './Components/Popup';
import Popup2 from './Components/Popup2';
import steam from './assets/steam.png';
function App() {
  const [showConfusionPopup, setShowConfusionPopup] = useState(false);
  const [showAccuracyPopup, setShowAccuracyPopup] = useState(false);

  const toggleConfusionPopup = () => {
    setShowConfusionPopup(!showConfusionPopup);
  };

  const toggleAccuracyPopup = () => {
    setShowAccuracyPopup(!showAccuracyPopup);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">STEAM GAME REVIEW ANALYSIS</a>
          <div className="search">
            <input type="text" placeholder="Search..." className="search-box" />
            <img className="search-icon" src={searchicon} alt="Search Icon" />
          </div>
        </div>
      </nav>

      <div className="Title">
        <div className="left-margin">
          <div className="steam">
            <img src={steam} className="App-image" />
          </div>
          <div className="home">
            <img src={Home} className="App-image" />
          </div>
          <div className="Members">
            <Link to="/members">
              <img src={MembersIcon} className="App-image" alt="members" />
            </Link>
          </div>
          <div className="Confusion" onClick={toggleConfusionPopup}>
            <img src={Confusion} className="App-image" alt="confusion" />
          </div>
          <div className="Accuracy" onClick={toggleAccuracyPopup}>
            <img src={Accuracy} className="App-image" alt="accuracy" />
          </div>
        </div>
      </div>
      <div className="mid-box">
        <Routes>
          <Route path="/members" element={<MembersPage />} />
        </Routes>
      </div>
      <Popup show={showConfusionPopup} handleClose={toggleConfusionPopup}>
        <h2>Confusion Matrix</h2>
        <p></p>
      </Popup>
      <Popup2 show={showAccuracyPopup} handleClose={toggleAccuracyPopup}>
        <h2>Accuracy</h2>
        <p></p>
      </Popup2>
    </>
  );
}

export default App;
