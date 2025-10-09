import { useState } from "react";
import { OrientationProvider } from "@/hooks/useOrientation";
import OrientationModel from "@/components/OrientationModel";
import LinksScene from "@/components/LinksScene";
import { Canvas } from "@react-three/fiber";

export default function Home() {
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
            你已拒絕感測器權限，請關閉app後再次進入本頁啟動。
          </p>
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
                <directionalLight position={[5, 5, 5]} intensity={2.4} />
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

            {/* 2D Link 區塊 */}
            {/* <section id="links" className="py-16 px-4 md:px-24 flex-1">
              <div className="max-w-lg mx-auto space-y-6">
                <a
                  href="https://cyc-studio.vercel.app/"
                  className="block w-full text-center py-4 bg-white text-black rounded-lg hover:bg-gray-200 transition"
                >
                  CYC STUDIO
                </a>
                <a
                  href="https://mindbay.vercel.app/"
                  className="block w-full text-center py-4 bg-white text-black rounded-lg hover:bg-gray-200 transition"
                >
                  MindBay
                </a>
                <a
                  href="https://webar-huye-next.vercel.app/"
                  className="block w-full text-center py-4 bg-white text-black rounded-lg hover:bg-gray-200 transition"
                >
                  Huye WebAR
                </a>
              </div>
            </section> */}

            {/* 3D Links 區塊 */}
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
