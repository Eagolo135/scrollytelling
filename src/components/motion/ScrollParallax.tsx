"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface ScrollParallaxProps {
  children: React.ReactNode;
  offset?: number; // pixel offset per scroll direction
  direction?: "up" | "down" | "left" | "right";
  strength?: number; // multiplier for scroll effect (0-1)
  className?: string;
}

/**
 * ScrollParallax: Create parallax shift effect as user scrolls
 * Uses scroll event listener with requestAnimationFrame for smooth performance
 */
export const ScrollParallax: React.FC<ScrollParallaxProps> = ({
  children,
  offset = 20,
  direction = "up",
  strength = 0.5,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [translateValue, setTranslateValue] = useState(0);

  useEffect(() => {
    let rafId: number;
    let lastScrollY = 0;

    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const delta = (scrollY - lastScrollY) * strength;

        let newValue = translateValue;
        if (direction === "up") {
          newValue = Math.max(-offset, translateValue - delta);
        } else if (direction === "down") {
          newValue = Math.min(offset, translateValue + delta);
        } else if (direction === "left") {
          newValue = Math.max(-offset, translateValue - delta);
        } else if (direction === "right") {
          newValue = Math.min(offset, translateValue + delta);
        }

        setTranslateValue(newValue);
        lastScrollY = scrollY;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [direction, offset, strength, translateValue]);

  const getTransform = () => {
    if (direction === "up" || direction === "down") {
      return { y: translateValue };
    }
    return { x: translateValue };
  };

  return (
    <motion.div ref={ref} animate={getTransform()} className={className}>
      {children}
    </motion.div>
  );
};
