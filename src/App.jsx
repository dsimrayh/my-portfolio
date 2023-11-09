import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Sphere from "./components/Sphere";
import "./App.scss";

function App() {
  const SPHERE_NUMBER = 50;

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
      <div id="content-container">
        <h1 id="hero-header">My Portfolio</h1>
      </div>
      <Canvas>
        <spotLight
          position={[-10, 10, 30]}
          angle={0.5}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <object3D>{spheres}</object3D>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}

export default App;
