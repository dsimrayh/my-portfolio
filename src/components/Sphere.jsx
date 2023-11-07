import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Sphere(props) {
  const sphereRef = useRef();

  useFrame((_, delta) => {
    sphereRef.current.rotation.x += delta * 0.2;
    sphereRef.current.rotation.y -= delta * 0.2;
  });

  return (
    <mesh {...props} ref={sphereRef}>
      <sphereGeometry args={[0.7, 24, 24]} />
      <meshBasicMaterial wireframe={true} color={"lime"} />
    </mesh>
  );
}
