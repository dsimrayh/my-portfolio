import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Sphere from "./components/Sphere";
import "./App.scss";

function App() {
  const SPHERE_NUMBER = 30;

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
        <h1 id="hero-header">Damian Simrayh</h1>
        <p id="hero-subtext">Front end web developer based in Chicago IL</p>
      </div>
      <Canvas>
        <spotLight
          position={[-3, 10, -2]}
          angle={0.5}
          penumbra={1}
          decay={0.2}
          intensity={0.5}
        />
        <spotLight
          position={[-3, 8, -2]}
          angle={0.25}
          penumbra={1}
          decay={0.3}
          intensity={1}
        />
        <spotLight
          position={[-3, 6, -2]}
          angle={0.15}
          penumbra={1}
          decay={0.4}
          intensity={1.5}
        />
        <directionalLight position={[-6, 10, 10]} intensity={1.25} />
        <directionalLight position={[0, 10, 10]} intensity={0.75} />
        <directionalLight position={[4, 10, 10]} intensity={0.5} />
        <ambientLight color={"#fff"} intensity={0.15} />
        <object3D>{spheres}</object3D>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}

export default App;
