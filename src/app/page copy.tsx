"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Html } from "@react-three/drei";
import { useScroll, useTransform } from "framer-motion";
import { HeroSection } from "@/components/hero-section";
import { SecondSection } from "@/components/second-section";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { ParallaxBackground } from "@/components/parallax-background";
import { useCharacterAnimation } from "@/hooks/use-character-animation";
// Import the responsive character component
import { ResponsiveCharacter3D } from "@/components/responsive-character-3d";
import Velocity from "@/components/ScrollVelocity";
import Emoticon3D from "./../components/emoticon3d";
import LetterGlitch from "@/components/LetterGlitch";
import GenapSolidHover from "@/components/genap-solid";
import TextCursor from "@/components/solid";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const characterAnimation = useCharacterAnimation(scrollYProgress);

  // Parallax transforms for background layers
  const bgLayer1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const bgLayer2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const bgLayer3 = useTransform(scrollYProgress, [0, 1], [0, -450]);

  return (
    <div className="relative">
      <ScrollIndicator scrollProgress={scrollYProgress} />
      {/* Parallax Background Layers */}
      <ParallaxBackground layer1Y={bgLayer1} layer2Y={bgLayer2} layer3Y={bgLayer3} />
      {/* 3D Character with dynamic positioning - ALWAYS VISIBLE */}
      <div
        className={`${characterAnimation.isSticky ? "absolute" : "fixed"} inset-0 pointer-events-none`}
        style={{
          zIndex: 25, // Higher z-index to ensure visibility
          ...(characterAnimation.isSticky ? { top: characterAnimation.stickyOffset } : {}),
        }}
      >
        <Canvas
          camera={{
            position: [0, 0, 6],
            fov: 50,
          }}
          className="w-full h-full"
          style={{ background: "transparent" }} // Ensure transparent background
          onCreated={({ camera }) => {
            // Responsive camera adjustment
            if (typeof window !== "undefined") {
              const isMobile = window.innerWidth < 768;
              if (isMobile) {
                camera.position.set(0, 0, 8);
                camera.fov = 60;
                camera.updateProjectionMatrix();
              }
            }
          }}
        >
          <Suspense
            fallback={
              <Html center>
                <div className="text-white text-lg font-semibold animate-pulse bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">Loading 3D Character...</div>
              </Html>
            }
          >
            <Environment preset="warehouse" />
            <ambientLight intensity={1.2} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <pointLight position={[-10, -10, -5]} intensity={1} color="#4f46e5" />
            <spotLight position={[0, 10, 0]} intensity={1} color="#ec4899" />
            <ResponsiveCharacter3D positionX={characterAnimation.positionX} positionY={characterAnimation.positionY} rotation={characterAnimation.rotation} animationPhase={characterAnimation.phase} />
          </Suspense>
        </Canvas>
      </div>
      {/* Scrollable Content with lower z-index */}
      <div className="relative" style={{ zIndex: 20 }}>
        <HeroSection />
        <SecondSection />
      </div>
      <Velocity />
      solid
      <TextCursor text="Hello!" delay={0.01} spacing={80} followMouseDirection={true} randomFloat={true} exitDuration={0.3} removalInterval={20} maxPoints={10} />
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="w-[90vw] max-w-[800px] h-[450px] rounded-lg shadow-2xl shadow-emerald-500/20">
          <GenapSolidHover />
        </div>
      </div>
      <section className="h-screen relative " style={{ zIndex: 50 }}>
        <Emoticon3D />
      </section>
    </div>
  );
}
