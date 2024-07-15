import React from 'react';

export const ButtonGroup = ({
  toggleMainCanvas,
  togglePatientViewCanvas,
  toggleLiverCanvas,
  toggleLargeIntestinesCanvas,
  skinOpacity,
  handleOpacityChange,
}) => {
  return (
    <div className="container">
      <div>
        <div className="button-group">
          <button onClick={toggleMainCanvas}>
          {'Main Canvas'}
          </button>
          <button onClick={togglePatientViewCanvas}>
          {'Patient View'}
          </button>
           <button onClick={toggleLargeIntestinesCanvas}>LargeIntestines</button>
          <button onClick={toggleLiverCanvas}>Liver</button>      
     
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={skinOpacity}
            onChange={handleOpacityChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ButtonGroup;
    {/* this is the original 
    <div className="container">
      <div >
        <div className="button-group">
          <button onClick={toggleRespiratory}>Respiratory</button>
          <button onClick={toggleDigestive}>Digestive</button>
          <button onClick={toggleBrain}>Brain</button>
          <button onClick={toggleMuscles}>Muscles</button>
          <button onClick={toggleSkin}>Skin</button>
          <button onClick={toggleSkeleton}>Skeleton</button>
          <button onClick={toggleNervous}>Nervous</button>
          <button onClick={toggleCirculatory}>Circulatory</button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={skinOpacity}
            onChange={handleOpacityChange}
          />
        </div>
      </div>*/}