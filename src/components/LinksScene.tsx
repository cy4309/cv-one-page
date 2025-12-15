import { Canvas } from "@react-three/fiber";
import { LinkButton3D } from "./LinkButton3D";
import OrientationGroup from "./OrientationGroup";
import { Environment } from "@react-three/drei";

export default function LinksScene() {
  const links = [
    { label: "CYC ZINE", url: "https://cyc-zine.vercel.app/" },
    { label: "MindBay", url: "https://mindbay.vercel.app/" },
    { label: "Huye WebAR", url: "https://webar-huye-next.vercel.app/" },
  ];

  return (
    <div className="w-full h-[75vh] relative">
      <Canvas
        shadows
        camera={{ position: [0, 0, 8], fov: 45 }}
        className="absolute inset-0"
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
        <Environment preset="city" />

        <OrientationGroup>
          {links.map((lnk, idx) => (
            <LinkButton3D
              key={lnk.label}
              label={lnk.label}
              url={lnk.url}
              position={[0, 2 - idx * 1.8, 0]}
              fadeInDelay={idx * 200}
            />
          ))}
        </OrientationGroup>
      </Canvas>
    </div>
  );
}
