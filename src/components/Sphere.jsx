import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Sphere(props) {
  const sphereRef = useRef();

  const INDEX = props.index;
  const SPHERE_SCALE_MAX = 0.5;
  const SPHERE_SCALE_MIN = 0.2;
  const ANIMATION_SPEED = 0.25;
  const GAP = 1.5;
  const LERP_FACTOR = 0.05;

  let scale =
    Math.random() * (SPHERE_SCALE_MAX - SPHERE_SCALE_MIN) + SPHERE_SCALE_MIN;

  function updateSpherePosition(index, elapsed) {
    if (index === 0) {
      sphereRef.current.position.x = Math.cos(elapsed * 2);
      sphereRef.current.position.y = Math.sin(elapsed * 2);
      sphereRef.current.position.z = Math.sin(elapsed * 2);
    }

    if (props.firstRender === false && index !== 0) {
      const vector = new THREE.Vector3(
        Math.cos(
          props.sphereToLeft.props.position[0] * elapsed * ANIMATION_SPEED,
        ) * GAP,
        Math.sin(
          props.sphereToLeft.props.position[1] * elapsed * ANIMATION_SPEED,
        ) * GAP,
        Math.cos(
          props.sphereToLeft.props.position[2] * elapsed * ANIMATION_SPEED,
        ) * GAP,
      );
      sphereRef.current.position.lerp(vector, LERP_FACTOR);
    }
  }

  function updateSphereColor(index, elapsed) {
    if (index !== 0 && index % 2 === 0) {
      sphereRef.current.material.color.r = 0;
      sphereRef.current.material.color.g =
        (Math.abs(Math.cos(elapsed * 0.1)) + 0.3) * 0.5;
      sphereRef.current.material.color.b =
        (Math.abs(Math.sin(elapsed * 0.1)) + 0.3) * 0.5;
    }
    if (index !== 0 && index % 2 !== 0) {
      sphereRef.current.material.color.r = 0;
      sphereRef.current.material.color.g =
        (Math.abs(Math.sin(elapsed * 0.175)) + 0.3) * 0.5;
      sphereRef.current.material.color.b =
        (Math.abs(Math.cos(elapsed * 0.175)) + 0.3) * 0.5;
    }
  }

  useFrame((state) => {
    updateSpherePosition(INDEX, state.clock.elapsedTime);
    updateSphereColor(INDEX, state.clock.elapsedTime);
  });

  return (
    <mesh
      position={props.position}
      ref={sphereRef}
      scale={[scale, scale, scale]}
      visible={INDEX === 0 ? false : true}
    >
      <sphereGeometry args={[1, 24, 24]} />
      <meshStandardMaterial wireframe={false} color={"#03fcca"} />
    </mesh>
  );
}
