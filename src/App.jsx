import React, { useState } from 'react';
import './App.css'; // Import the CSS file
import ButtonGroup from './ButtonGroup';
import MainCanvas from './MainCanvas';
import LiverCanvas from './LiverCanvas';
import PatientViewCanvas from './PatientViewCanvas';
import LargeIntestinesCanvas from './LargeIntestinesCanvas';

function App() {
  const [skinOpacity, setSkinOpacity] = useState(1.0); // Initial opacity value
  const [showMainCanvas, setShowMainCanvas] = useState(true);
  const [showPatientCanvas, setPatientCanvas] = useState(false);
  const [showLiverCanvas, setShowLiverCanvas] = useState(false);
  const [showLargeIntestinesCanvas, setLargeIntestinesCanvas] = useState(false);




  const toggleMainCanvas = () => {
    setShowLiverCanvas(false);
    setPatientCanvas(false);
    setLargeIntestinesCanvas(false);
    setShowMainCanvas(true);
  };

  const togglePatientViewCanvas = () => {
    setShowLiverCanvas(false);
    setShowMainCanvas(false);
    setLargeIntestinesCanvas(false);
    setPatientCanvas(true);
  };

  const toggleLiverCanvas = () => {
    setShowMainCanvas(false);
    setPatientCanvas(false);
    setLargeIntestinesCanvas(false);
    setShowLiverCanvas(true);

  };
  const toggleLargeIntestinesCanvas = () => {
    setShowMainCanvas(false);
    setPatientCanvas(false);
    setShowLiverCanvas(false);
    setLargeIntestinesCanvas(true);
  };

  const toggleDigestive = () => {
    setShowDigestive(!showDigestive);
  };


  const handleOpacityChange = (event) => {
    setSkinOpacity(parseFloat(event.target.value));
  };

  return (
    <div className='container1'>
        
      <div >
        {/* Conditionay render based on state */}
        {showMainCanvas && <MainCanvas skinOpacity={skinOpacity} />}
        {showLiverCanvas && <LiverCanvas scale={0.4}/>}
        {showLargeIntestinesCanvas  && <LargeIntestinesCanvas />}
        {showPatientCanvas && <PatientViewCanvas />}
      </div>
      
      <div>
      <ButtonGroup
        toggleMainCanvas ={toggleMainCanvas}
        togglePatientViewCanvas = {togglePatientViewCanvas}
        toggleLargeIntestinesCanvas={toggleLargeIntestinesCanvas}
        toggleLiverCanvas={toggleLiverCanvas}
        /*toggleRespiratory={toggleRespiratory}*/
        toggleDigestive={toggleDigestive}
        skinOpacity={skinOpacity}
        handleOpacityChange={handleOpacityChange}
      />
      </div>
    </div>
  );
}


export default App;
