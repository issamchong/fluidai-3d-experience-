
export const Model1 = ({position,color,scale}) => {
  return (
    <>
     <mesh rotation-y={40} position={position}   scale={scale} >
       <boxGeometry args={[1,1,1]}/>
       <meshBasicMaterial color= {color}/>
     </mesh>
 
   </>
  )
}
export  default Model1;
