// import { Canvas, useFrame } from "@react-three/fiber";
// import { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
// import { Html, useGLTF } from "@react-three/drei";

// function OrientationModel({ onDisable }: { onDisable: () => void }) {
//   const groupRef = useRef<THREE.Group>(null);
//   const [rotation, setRotation] = useState({ alpha: 0, beta: 0, gamma: 0 });

//   useEffect(() => {
//     function handleOrientation(event: DeviceOrientationEvent) {
//       setRotation({
//         alpha: event.alpha || 0,
//         beta: event.beta || 0,
//         gamma: event.gamma || 0,
//       });
//     }

//     window.addEventListener("deviceorientation", handleOrientation);
//     return () => {
//       window.removeEventListener("deviceorientation", handleOrientation);
//     };
//   }, []);

//   useFrame(() => {
//     if (groupRef.current) {
//       groupRef.current.rotation.x = THREE.MathUtils.degToRad(rotation.beta);
//       groupRef.current.rotation.y = THREE.MathUtils.degToRad(rotation.alpha);
//       groupRef.current.rotation.z = THREE.MathUtils.degToRad(rotation.gamma);
//     }
//   });

//   const { scene } = useGLTF("/models/model-me-pbr.glb");

//   return (
//     <group ref={groupRef} scale={2}>
//       <primitive object={scene} rotation={[0, -Math.PI / 2, 1]} />
//       <Html position={[0, -1.5, 0]} center>
//         <button
//           onClick={onDisable}
//           className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm shadow-lg"
//         >
//           關閉感測器
//         </button>
//       </Html>
//     </group>
//   );
// }

// export default function Home() {
//   const [enabled, setEnabled] = useState(false);

//   const handlePermission = async () => {
//     if (
//       typeof DeviceOrientationEvent !== "undefined" &&
//       // @ts-ignore
//       typeof DeviceOrientationEvent.requestPermission === "function"
//     ) {
//       try {
//         // @ts-ignore
//         const response = await DeviceOrientationEvent.requestPermission();
//         if (response === "granted") setEnabled(true);
//       } catch (e) {
//         console.error("Permission denied:", e);
//       }
//     } else {
//       setEnabled(true);
//     }
//   };

//   return (
//     <div className="w-full h-[100dvh] flex items-center justify-center">
//       {!enabled ? (
//         <button
//           onClick={handlePermission}
//           className="px-6 py-3 bg-black text-white rounded-lg text-lg"
//         >
//           啟用感測器
//         </button>
//       ) : (
//         <Canvas camera={{ position: [0, 0, 5] }} className="w-full h-full">
//           <ambientLight intensity={2} />
//           <directionalLight position={[5, 5, 5]} intensity={1} />
//           <pointLight position={[-5, -5, 5]} intensity={0.5} />

//           <OrientationModel onDisable={() => setEnabled(false)} />
//         </Canvas>
//       )}
//     </div>
//   );
// }

// import { Canvas } from "@react-three/fiber";
// import OrientationModel from "@/components/OrientationModel";
// import LinksScene from "@/components/LinksScene";

// export default function Home() {
//   return (
//     <div className="w-full h-[100dvh] bg-black text-white flex flex-col">
//       {/* Hero 區塊 */}
//       <section className="relative w-full h-[70vh] md:h-screen flex items-center justify-center">
//         {/* R3F 場景 */}
//         <Canvas
//           camera={{ position: [0, 0, 6], fov: 50 }}
//           className="absolute inset-0"
//         >
//           <ambientLight intensity={0.5} />
//           <directionalLight position={[5, 5, 5]} intensity={1.2} />
//           <pointLight position={[-5, -5, 5]} intensity={0.6} />
//           <OrientationModel />
//         </Canvas>

//         {/* 文字疊在前面 */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
//           <h1 className="text-3xl md:text-5xl font-bold">
//             Hello, I’m chu_yuchen
//           </h1>
//           <p className="mt-4 text-lg md:text-xl text-white/80 max-w-xl">
//             Front-end Engineer · Interactive Designer · WebAR Explorer
//           </p>
//           <a
//             href="#links"
//             className="mt-8 px-6 py-3 bg-white text-black rounded-lg text-lg shadow-lg hover:bg-gray-200 transition"
//           >
//             Explore Links
//           </a>
//         </div>
//       </section>

//       {/* Link 區塊 */}
//       {/* <section id="links" className="py-16 px-4 md:px-24 flex-1">
//         <div className="max-w-lg mx-auto space-y-6">
//           <a
//             href="https://example.com"
//             className="block w-full text-center py-4 bg-white text-black rounded-lg hover:bg-gray-200 transition"
//           >
//             Link 1
//           </a>
//           <a
//             href="https://example.com"
//             className="block w-full text-center py-4 bg-white text-black rounded-lg hover:bg-gray-200 transition"
//           >
//             Link 2
//           </a>
//         </div>
//       </section> */}

//       {/* Links 區塊 (3D Buttons) */}
//       <section id="links" className="flex-1">
//         <LinksScene />
//       </section>

//       <footer className="py-12 text-center text-sm text-white/60">
//         ©2025 Chester
//       </footer>
//     </div>
//   );
// }

// import { OrientationProvider } from "@/hooks/useOrientation";
// import OrientationModel from "@/components/OrientationModel";
// import LinksScene from "@/components/LinksScene";
// import { Canvas } from "@react-three/fiber";

// export default function Home() {
//   return (
//     <OrientationProvider>
//       <div className="w-full h-[100dvh] bg-black text-white overflow-x-hidden">
//         {/* Hero 區塊 */}
//         <section className="relative w-full h-[70vh] md:h-screen flex items-center justify-center">
//           <Canvas
//             camera={{ position: [0, 0, 6], fov: 50 }}
//             className="absolute inset-0"
//           >
//             <ambientLight intensity={0.5} />
//             <directionalLight position={[5, 5, 5]} intensity={1.2} />
//             <OrientationModel />
//           </Canvas>
//           <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
//             <h1 className="text-3xl md:text-5xl font-bold">
//               Hello, I’m chu_yuchen
//             </h1>
//             <p className="mt-4 text-lg md:text-xl text-white/80">
//               Frontend Engineer · Interactive Designer
//             </p>
//           </div>
//         </section>

//         {/* Links 區塊 */}
//         <section id="links" className="flex-1">
//           <LinksScene />
//         </section>

//         <footer className="py-12 text-center text-sm text-white/60">
//           ©2025{" "}
//           <a
//             href="https://www.instagram.com/chu_yuchen"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="underline hover:text-white"
//           >
//             @chu_yuchen
//           </a>
//         </footer>
//       </div>
//     </OrientationProvider>
//   );
// }

import { useState } from "react";
import { OrientationProvider } from "@/hooks/useOrientation";
import OrientationModel from "@/components/OrientationModel";
import LinksScene from "@/components/LinksScene";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  // const [enabled, setEnabled] = useState(false);
  const [status, setStatus] = useState<"idle" | "granted" | "denied">("idle");

  const handlePermission = async () => {
    if (
      typeof DeviceOrientationEvent !== "undefined" &&
      // @ts-ignore
      typeof DeviceOrientationEvent.requestPermission === "function"
    ) {
      try {
        // @ts-ignore
        const response = await DeviceOrientationEvent.requestPermission();
        if (response === "granted") {
          setStatus("granted");
        } else {
          setStatus("denied");
        }
      } catch (e) {
        setStatus("denied");
      }
    } else {
      // Android 或支援自動授權的瀏覽器
      setStatus("granted");
    }
  };

  return (
    <div className="w-full h-[100dvh] bg-black text-white overflow-x-hidden flex items-center justify-center">
      {status === "idle" && (
        // 還沒允許時顯示按鈕
        <button
          onClick={handlePermission}
          className="px-6 py-3 bg-black border border-white text-white rounded-lg text-lg"
        >
          啟用感測器
        </button>
      )}

      {status === "denied" && (
        <div className="text-center space-y-4">
          <p className="text-red-400 text-sm">
            你已拒絕感測器權限，請到瀏覽器設定允許。
          </p>
          <button
            onClick={handlePermission}
            className="px-6 py-3 bg-gray-800 border border-white rounded-lg"
          >
            再次嘗試
          </button>
        </div>
      )}

      {status === "granted" && (
        // 允許後再渲染主體
        <OrientationProvider>
          <div className="w-full h-[100dvh] bg-black text-white overflow-x-hidden">
            {/* Hero 區塊 */}
            <section className="relative w-full h-[70vh] md:h-screen flex items-center justify-center">
              <Canvas
                camera={{ position: [0, 0, 6], fov: 50 }}
                className="absolute inset-0"
              >
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={2} />
                <OrientationModel />
              </Canvas>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h1 className="text-3xl md:text-5xl font-bold">
                  Hello, I’m chu_yuchen
                </h1>
                <p className="mt-4 text-lg md:text-xl text-white/80">
                  Frontend Engineer · Interactive Designer
                </p>
              </div>
            </section>

            {/* Links 區塊 */}
            <section id="links" className="flex-1">
              <LinksScene />
            </section>

            <footer className="py-12 text-center text-sm text-white/60">
              ©2025{" "}
              <a
                href="https://www.instagram.com/chu_yuchen"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                @chu_yuchen
              </a>
            </footer>
          </div>
        </OrientationProvider>
      )}
    </div>
  );
}
