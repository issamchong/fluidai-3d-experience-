// CanvasComponent.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import Body1 from './components/Body1';
import LiverPatient from './components/LiverPatient';
import LargeIntestinesPatient from './components/LargeIntestinesPatient';

export const PatientViewCanvas = ({   }) => (
  <Canvas
    gl={{ antialias: true }}
    dpr={[1, 2]}
    camera={{ position: [0, 0, 0], fov: 45 }}
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
      <Body1 color={0xADD8E6}  opacity={0.4} />
      <LiverPatient color={0xADD8E6}  opacity={1} />
      <LargeIntestinesPatient color={0xADD8E6}  opacity={1} />

      {/*<DigestiveComponents />*/}
    </Stage>
    <OrbitControls
      enableRotate
      enableZoom={false}
      enablePan={false}
      rotateSpeed={1.5}
      minPolarAngle={Math.PI / 2}
      maxPolarAngle={Math.PI - Math.PI }
      minAzimuthAngle={-Math.PI}
      maxAzimuthAngle={Math.PI}
    />
    <ambientLight intensity={0.3} />
    <directionalLight position={[5, -5, 5]} intensity={1.5} castShadow />
  </Canvas>
);

export default PatientViewCanvas;
