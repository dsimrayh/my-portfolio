import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Sphere from "./components/Sphere";
import "./App.scss";

function App() {
  const SPHERE_NUMBER = 30;

  const spheres = Array(SPHERE_NUMBER)
    .fill()
    .map((_, idx) => {
      let x = -Math.random() * 10 + Math.random() * 10;
      let y = -Math.random() * 10 + Math.random() * 10;
      let z = -Math.random() * 10 + Math.random() * 10;
      return <Sphere key={idx} position={[x, y, z]} />;
    });

  return (
    <div id="site-container">
      <div id="content-container">
        <h1 id="hero-header">My Portfolio</h1>
      </div>
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <object3D>{spheres}</object3D>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}

export default App;
