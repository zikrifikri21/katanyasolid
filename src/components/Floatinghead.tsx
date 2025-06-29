// components/FloatingHead.jsx
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

type FloatingHeadProps = {
  mouse: React.MutableRefObject<{ x: number; y: number }>;
};

export default function FloatingHead({ mouse }: FloatingHeadProps) {
  const model = useGLTF("/models/Minecraft_cartoon_head.glb");
  const ref = useRef<THREE.Object3D>(null!);

  useFrame(() => {
    if (ref.current) {
      // Smooth follow mouse
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, mouse.current.x * 0.5, 0.1);
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, mouse.current.y * 0.3, 0.1);
    }
  });

  return <primitive object={model.scene} scale={0.5} ref={ref} position={[0, 0, 0]} />;
}
