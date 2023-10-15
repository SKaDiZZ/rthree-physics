import { CuboidCollider, RigidBody } from "@react-three/rapier";
const Ground = () => {
  return (
    <RigidBody type="fixed" restitution={0} colliders={false}>
      <mesh receiveShadow position={[0, 0, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100, 100, 1, 1]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      <CuboidCollider args={[100, 2, 100]} position={[0, -2, 0]} />
    </RigidBody>
  );
};

export default Ground;
