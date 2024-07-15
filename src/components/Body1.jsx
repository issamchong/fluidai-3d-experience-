import { useGLTF } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

function Model({ color, opacity }) {
  const { scene } = useGLTF("/body_only.gltf");

  // Create a custom material with a glossy and semi-transparent appearance
  const glossyMaterial = new MeshStandardMaterial({
    color: color,
    roughness: 0.2,
    metalness: 0.2,
    opacity: opacity,
    transparent: opacity < 1
  });

  // Apply the custom material to the model
  scene.traverse((object) => {
    if (object.isMesh) {
      object.material = glossyMaterial;
    }
  });

  return <primitive object={scene} />;
}

export const Body1 = ({color, opacity}) => {
  return (
    <>
      <Model color={color} opacity={opacity} />
    </>
  );
};

export default Body1;
