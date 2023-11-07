import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Sphere(props) {
  const sphereRef = useRef();

  const INDEX = props.index;
  const SPHERE_SCALE_MAX = 0.8;
  const SPHERE_SCALE_MIN = 0.25;
  const ANIMATION_SPEED = 0.25;
  const GAP = 1;

  const scale =
    Math.random() * (SPHERE_SCALE_MAX - SPHERE_SCALE_MIN) + SPHERE_SCALE_MIN;

  function updateSpherePosition(index, elapsed) {
    if (index === 0) {
      sphereRef.current.position.x = Math.cos(elapsed * 2);
      sphereRef.current.position.y = Math.cos(elapsed * 2);
      sphereRef.current.position.z = Math.cos(elapsed * 2);
    }

    if (props.firstRender === false && index !== 0) {
      sphereRef.current.position.x =
        Math.cos(
          props.sphereToLeft.props.position[0] * elapsed * ANIMATION_SPEED,
        ) * GAP;
      sphereRef.current.position.y =
        Math.cos(
          props.sphereToLeft.props.position[1] * elapsed * ANIMATION_SPEED,
        ) * GAP;
      sphereRef.current.position.z =
        Math.cos(
          props.sphereToLeft.props.position[2] * elapsed * ANIMATION_SPEED,
        ) * GAP;
    }
  }

  useFrame((state) => {
    updateSpherePosition(INDEX, state.clock.elapsedTime);
  });

  return (
    <mesh
      position={props.position}
      ref={sphereRef}
      scale={[scale, scale, scale]}
    >
      <sphereGeometry args={[0.7, 24, 24]} />
      <meshStandardMaterial wireframe={false} color={"#03fcca"} />
    </mesh>
  );
}
