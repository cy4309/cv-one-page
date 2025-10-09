// components/OrientationModel.tsx
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useOrientation } from "@/hooks/useOrientation";

export default function OrientationModel() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/cyc_wireframe_white_spaced.glb");
  const { alpha, beta, gamma } = useOrientation();
  // const [rotation, setRotation] = useState({ alpha: 0, beta: 0, gamma: 0 });

  // useEffect(() => {
  //   function handleOrientation(event: DeviceOrientationEvent) {
  //     setRotation({
  //       alpha: event.alpha || 0,
  //       beta: event.beta || 0,
  //       gamma: event.gamma || 0,
  //     });
  //   }
  //   window.addEventListener("deviceorientation", handleOrientation);
  //   return () =>
  //     window.removeEventListener("deviceorientation", handleOrientation);
  // }, []);

  // useFrame(() => {
  //   if (groupRef.current) {
  //     // 調整對應：直立時顯示正面
  //     groupRef.current.rotation.x = THREE.MathUtils.degToRad(rotation.beta);
  //     groupRef.current.rotation.y = THREE.MathUtils.degToRad(rotation.alpha);
  //     groupRef.current.rotation.z = THREE.MathUtils.degToRad(rotation.gamma);
  //   }
  // });

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.degToRad(beta);
      groupRef.current.rotation.y = THREE.MathUtils.degToRad(alpha);
      groupRef.current.rotation.z = THREE.MathUtils.degToRad(-gamma);
    }
  });

  return (
    <group ref={groupRef} scale={1.6}>
      {/* <primitive object={scene} rotation={[0, -Math.PI / 2, 1]} /> */}
      <primitive object={scene} rotation={[0, 0, 0]} />
    </group>
  );
}
