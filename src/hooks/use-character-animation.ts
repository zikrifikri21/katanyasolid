"use client";

import { useEffect, useState } from "react";
import { useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";

export type AnimationPhase = "floating" | "transitioning" | "sticky";

export function useCharacterAnimation(scrollYProgress: MotionValue<number>) {
  const [phase, setPhase] = useState<AnimationPhase>("floating");
  const [isSticky, setIsSticky] = useState(false);
  const [stickyOffset, setStickyOffset] = useState(0);

  // Define scroll breakpoints
  const transitionStart = 0.3;
  const transitionEnd = 0.6;
  const stickyStart = 0.6;

  // Character position transforms - adjusted for better visibility
  const positionX = useTransform(
    scrollYProgress,
    [0, transitionStart, transitionEnd, 1],
    (() => {
      if (typeof window !== "undefined") {
        const isMobile = window.innerWidth < 768;
        const isTablet = window.innerWidth < 1024;

        if (isMobile) {
          // Mobile positioning - closer to center
          return [2, 2, -2, -2];
        } else if (isTablet) {
          // Tablet positioning
          return [2.5, 2.5, -2.5, -2.5];
        } else {
          // Desktop positioning
          return [1.5, 3, -3, -3];
        }
      }
      // Default fallback
      return [2.5, 2.5, -2.5, -2.5];
    })()
  );

  const positionY = useTransform(
    scrollYProgress,
    [0, transitionStart, transitionEnd, 1],
    [0, 0, 0, 0] // Keep at center height
  );

  // Character rotation during transition
  const rotation = useTransform(scrollYProgress, [0, transitionStart, transitionEnd, 1], [0, 0, Math.PI, Math.PI]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      if (progress < transitionStart) {
        setPhase("floating");
        setIsSticky(false);
      } else if (progress >= transitionStart && progress < stickyStart) {
        setPhase("transitioning");
        setIsSticky(false);
      } else {
        setPhase("sticky");
        setIsSticky(true);
        // Calculate sticky offset based on second section position
        const secondSectionOffset = window.innerHeight;
        setStickyOffset(secondSectionOffset);
      }
    });

    return unsubscribe;
  }, [scrollYProgress, transitionStart, stickyStart]);

  return {
    phase,
    isSticky,
    stickyOffset,
    positionX,
    positionY,
    rotation,
  };
}
