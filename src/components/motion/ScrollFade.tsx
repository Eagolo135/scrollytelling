"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface ScrollFadeProps {
  children: React.ReactNode;
  threshold?: number | number[];
  duration?: number;
  className?: string;
}

/**
 * ScrollFade: Fade in elements as they enter the viewport
 * Uses Intersection Observer for performance and automatic cleanup
 */
export const ScrollFade: React.FC<ScrollFadeProps> = ({
  children,
  threshold = 0.2,
  duration = 0.6,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
