
export const Model2 = ({position,color,scale}) => {
  return (
    <>
     <mesh rotation-y={40} position={position}   scale={scale} >
       <boxGeometry args={[1,1,1]}/>
       <meshStandardMaterial color= {color}/>
     </mesh>
 
   </>
  )
}
export  default Model2;