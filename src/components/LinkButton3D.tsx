import { useState } from "react";
import { RoundedBox, Text } from "@react-three/drei";
import { a, useSpring } from "@react-spring/three";

type Props = {
  label: string;
  url: string;
  position: [number, number, number];
  fadeInDelay?: number;
};

export function LinkButton3D({ label, url, position, fadeInDelay = 0 }: Props) {
  const [active, setActive] = useState(false);

  const { scale } = useSpring({
    scale: active ? 0.92 : 1,
    config: { mass: 1, tension: 220, friction: 18 },
    delay: fadeInDelay,
  });

  return (
    <a.group
      position={position}
      scale={scale}
      onClick={() => window.open(url, "_blank")}
      onPointerDown={() => setActive(true)}
      onPointerUp={() => setActive(false)}
      onPointerCancel={() => setActive(false)}
      onPointerOver={() => (document.body.style.cursor = "pointer")}
      onPointerOut={() => (document.body.style.cursor = "auto")}
    >
      {/* 厚實的玻璃塊 */}
      <RoundedBox args={[3, 1, 0.5]} radius={0.25} smoothness={4} castShadow>
        <meshPhysicalMaterial
          transparent
          opacity={0.4}
          color="#ffffff"
          roughness={0.05}
          metalness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.05}
          transmission={1} // 玻璃透光
          thickness={1} // 厚度
          ior={1.4} // 折射率
          reflectivity={1}
        />
      </RoundedBox>

      {/* 文字浮在前面 */}
      <Text
        position={[0, 0, 0.28]}
        fontSize={0.35}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.01}
        outlineColor="#00ffff"
      >
        {label}
      </Text>
    </a.group>
  );
}
