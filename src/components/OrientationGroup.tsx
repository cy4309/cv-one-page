import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useOrientation } from "@/hooks/useOrientation";

export default function OrientationGroup({
  children,
}: {
  children: React.ReactNode;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const { alpha, beta, gamma } = useOrientation();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.degToRad(beta) * 0.5;
      groupRef.current.rotation.y = THREE.MathUtils.degToRad(alpha) * 0.01;
      groupRef.current.rotation.z = THREE.MathUtils.degToRad(-gamma) * 0.01;
    }
  });

  return (
    <group ref={groupRef} rotation={[0, -Math.PI / 2, 1]}>
      {children}
    </group>
  );
}
