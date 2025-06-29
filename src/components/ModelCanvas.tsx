import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useEffect } from "react";
import FloatingHead from "./Floatinghead";

interface MousePosition {
  x: number;
  y: number;
}
export default function ModelCanvas() {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="sticky top-[50vh] h-[400px] w-full max-w-[400px] mx-auto transform -translate-y-1/2 z-10 overflow-hidden">
      <Canvas className="w-full h-full">
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} castShadow />
        <pointLight position={[-5, -5, 5]} intensity={0.9} />
        <spotLight position={[0, 10, 10]} angle={0.3} intensity={0.4} penumbra={1} />
        <Suspense fallback={null}>
          <FloatingHead mouse={mouse} />
        </Suspense>
      </Canvas>
    </div>
  );
}
