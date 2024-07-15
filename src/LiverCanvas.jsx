// CanvasComponent.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import Liver from './components/Liver';

export const LiverCanvas = ({ scale}) => (

  <Canvas
    gl={{ antialias: true }}
    dpr={[1, 2]}
    camera={{ position: [0, 0, 0], fov: 53 }}
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
    <Stage>
      <Liver scale={scale}/>
    </Stage>
    <OrbitControls
      enableRotate
      enableZoom={false}
      enablePan={false}
      rotateSpeed={1.5}
      minPolarAngle={Math.PI / 2}
      maxPolarAngle={Math.PI - Math.PI / 1}
      minAzimuthAngle={-Math.PI}
      maxAzimuthAngle={Math.PI}
      minDistance={10}  // Set the minimum zoom distance
      maxDistance={100}  // Set the maximum zoom distanc
    />
    <ambientLight intensity={0.2} />
    <directionalLight position={[5, -5, 5]} intensity={1} castShadow />
  </Canvas>
  
);

export default LiverCanvas;
