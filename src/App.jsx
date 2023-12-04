import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
import Content from "./components/Content";
import Sphere from "./components/Sphere";
import "./App.scss";

function App() {
  const SPHERE_NUMBER = 200; // 100?

  const initialSphereArray = Array(SPHERE_NUMBER)
    .fill()
    .map((_, idx) => {
      const x = -Math.random() * 10 + Math.random() * 10;
      const y = -Math.random() * 10 + Math.random() * 10;
      const z = -Math.random() * 10 + Math.random() * 10;
      return (
        <Sphere key={idx} index={idx} firstRender={true} position={[x, y, z]} />
      );
    });

  const spheres = initialSphereArray.map((sphere, idx) => {
    const [x, y, z] = sphere.props.position;
    return (
      <Sphere
        key={idx}
        index={idx}
        firstRender={false}
        sphereToLeft={idx === 0 ? null : initialSphereArray[idx - 1]}
        position={[x, y, z]}
      />
    );
  });

  return (
    <div id="site-container">
      <Content></Content>
      <div id="canvas-wrapper">
        <Canvas>
          <fog attach="fog" color="black" near={2} far={12} />
          <hemisphereLight
            skyColor={0x111111}
            groundColor={0x000000}
            intensity={0.5}
          />
          <directionalLight
            color={0xffffff}
            intensity={0.5}
            position={[0, 0, 3]}
          />
          <object3D>{spheres}</object3D>
          {/* <OrbitControls enableZoom={true} /> */}
        </Canvas>
      </div>
    </div>
  );
}

export default App;
