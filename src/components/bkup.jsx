import React, { useState } from 'react';
import {  Stage,  OrbitControls } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';
import Body1 from './components/Body1';
import { Respiratory } from './components/Respiratory';





function App() {
  const [showBody1, setShowBody1] = useState(true);



  const toggleBody1 = () => {
    setShowBody1(!showBody1);
  };

  return (
    <div>
      <button onClick={toggleBody1}>Toggle Body1</button>
        <Canvas

          gl={{ antialias: true }} // Enable anti-aliasing
          dpr={[1, 2]}
          shadows
          camera={{ fov: 45 }}
          style={{
            position: 'absolute',
            left: '35%',
            right: '50%',
            top: '10%',
            width: '500px',
            height: '500px',
          }}
        >
          <color attach="background" args={['#26282b']} />
          
          <Stage >
            {showBody1 && <Body1 scale={0.01} />}
            < Respiratory />
          </Stage>
          <OrbitControls enableRotate enableZoom={false} enablePan={false} rotateSpeed={1.5} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI - Math.PI / 1} minAzimuthAngle={-Math.PI } maxAzimuthAngle={Math.PI }/>
          <ambientLight intensity={0.2} />
          <directionalLight
          position={[5, -5, 5]}
          intensity={1}
          castShadow
        />

        </Canvas>
    </div>
  );
}

export default App;
