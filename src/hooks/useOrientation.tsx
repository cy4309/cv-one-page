import { createContext, useContext, useEffect, useState } from "react";

type Orientation = { alpha: number; beta: number; gamma: number };

const OrientationContext = createContext<Orientation>({
  alpha: 0,
  beta: 0,
  gamma: 0,
});

export function OrientationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [rotation, setRotation] = useState<Orientation>({
    alpha: 0,
    beta: 0,
    gamma: 0,
  });

  useEffect(() => {
    function handleOrientation(event: DeviceOrientationEvent) {
      setRotation({
        alpha: event.alpha || 0,
        beta: event.beta || 0,
        gamma: event.gamma || 0,
      });
    }
    window.addEventListener("deviceorientation", handleOrientation);
    return () =>
      window.removeEventListener("deviceorientation", handleOrientation);
  }, []);

  return (
    <OrientationContext.Provider value={rotation}>
      {children}
    </OrientationContext.Provider>
  );
}

export function useOrientation() {
  return useContext(OrientationContext);
}
