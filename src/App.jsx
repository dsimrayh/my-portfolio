import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
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
      <div id="content-container">
        <h1 id="hero-header">
          Hi, I&apos;m <span id="name">Damian.</span>
        </h1>
        <p id="hero-subtext">I&apos;m a full stack developer.</p>
        <div id="test">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste amet
          ducimus odit hic voluptas itaque ipsa cum in tempora consectetur fugit
          eos quos facilis accusamus quasi, sit cupiditate labore tempore, dicta
          sed atque nisi aliquid! Architecto ab eaque temporibus vero maiores
          eum aut commodi ipsa dolorem sunt quas ipsum officiis, est, eligendi,
          voluptatum et laborum repellendus assumenda quasi? Eligendi totam
          dolorem quisquam maiores aliquam explicabo. Incidunt velit placeat,
          nobis cupiditate iure voluptas saepe eligendi, consectetur vero est
          tempora omnis a optio labore iste eveniet. Quasi animi excepturi
          dolorum quibusdam neque dolore delectus! Placeat quas repellendus
          expedita ipsam? Modi nulla adipisci odit aliquam, vitae debitis quasi.
          Eaque voluptas, fugiat accusamus earum officiis est a, quas atque
          quidem iusto laborum voluptatum cupiditate? Nesciunt omnis a odio
          autem eius suscipit nemo dolorem totam. Ipsam, quam voluptas deleniti
          asperiores esse iste et exercitationem laboriosam repellendus quos
          explicabo cumque temporibus totam incidunt ducimus laborum earum
          soluta accusantium aut enim voluptatibus eveniet voluptates.
          Voluptatum aut expedita laudantium, ducimus voluptas at deleniti
          maiores aliquam nihil itaque rem officiis quos, facilis atque
          doloremque quas similique totam nisi. Dolore magni, voluptatem ipsum
          temporibus, cum laudantium fuga impedit explicabo perspiciatis ratione
          architecto, autem dolores laboriosam soluta sequi consequatur sed in.
        </div>
      </div>
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
  );
}

export default App;
