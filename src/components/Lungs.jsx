import { useGLTF, PresentationControls } from "@react-three/drei";
import { MeshStandardMaterial, Matrix4 } from "three";

function Lungs(props) {
  const { scene } = useGLTF("/Lungs.gltf");

  // Create a custom material with a glossy and semi-transparent appearance
  const glossyMaterial = new MeshStandardMaterial({
    color: 0x660000,
    roughness: 0.2,
    metalness: 0.3,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
    opacity: 1,
    transparent: false
  });

  // Apply the custom material to the Lungs model
  scene.traverse((object) => {
    if (object.isMesh) {
      object.material = glossyMaterial;
    }
  });



  return <primitive object={scene} {...props} />;
}

export default Lungs;