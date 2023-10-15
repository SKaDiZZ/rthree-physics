import "./App.css";

import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Sky, PointerLockControls } from "@react-three/drei";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";

import Menu from "./components/Menu";
import Player from "./components/Player";
import Ground from "./components/Ground";

// eslint-disable-next-line react/prop-types
function App() {
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    const handleLockchange = () => {
      if (document.pointerLockElement === null) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    };

    document.addEventListener("pointerlockchange", handleLockchange);
    return () => {
      document.removeEventListener("pointerlockchange", handleLockchange);
    };
  });

  return (
    <>
      <div>
        {showMenu && <Menu />}
        <Canvas camera={{ fov: 45 }} shadows>
          <PointerLockControls />
          <Sky sunPosition={[100, 20, 100]} />
          <ambientLight intensity={1.5} />
          <directionalLight
            castShadow
            intensity={1.5}
            position={[100, 100, 0]}
          />
          <Suspense>
            <Physics debug gravity={[0, -20, 0]}>
              <RigidBody type="fixed" colliders={false}>
                <mesh castShadow receiveShadow position={[0, 0.5, -2]}>
                  <boxGeometry />
                  <meshStandardMaterial color="hotpink" />
                </mesh>
                <CuboidCollider args={[0.5, 1, 0.5]} position={[0, 0, -2]} />
              </RigidBody>
              <RigidBody colliders={"hull"} mass={1}>
                <mesh castShadow receiveShadow position={[0, 0, -7]}>
                  <boxGeometry />
                  <meshStandardMaterial color="hotpink" />
                </mesh>
              </RigidBody>
              <Player />
              <Ground />
            </Physics>
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}

export default App;
