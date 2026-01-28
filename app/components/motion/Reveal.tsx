"use client";

import { LazyMotion, m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const loadFeatures = () => import("framer-motion").then((res) => res.domAnimation);

type AnimationType = 
  | "fadeUp"      // Standard fade + slide up
  | "fadeScale"   // Fade + scale (for cards/grids)
  | "slideLeft"   // Slide from left
  | "slideRight"  // Slide from right
  | "slideIn"     // Slide from both sides (for pricing cards)
  | "fadeOnly";   // Simple fade (for footer)

interface RevealProps {
  as?: "div" | "section";
  className?: string;
  delay?: number;
  animation?: AnimationType;
  children: ReactNode;
}

const getVariants = (type: AnimationType, shouldReduceMotion: boolean, delay: number) => {
  const baseTransition = {
    duration: shouldReduceMotion ? 0 : 0.5,
    delay: shouldReduceMotion ? 0 : delay,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  const variants: Record<AnimationType, { hidden: any; show: any }> = {
    fadeUp: {
      hidden: { opacity: 0, y: 18 },
      show: { opacity: 1, y: 0, transition: baseTransition },
    },
    fadeScale: {
      hidden: { opacity: 0, scale: 0.96, y: 12 },
      show: { opacity: 1, scale: 1, y: 0, transition: baseTransition },
    },
    slideLeft: {
      hidden: { opacity: 0, x: -30 },
      show: { opacity: 1, x: 0, transition: baseTransition },
    },
    slideRight: {
      hidden: { opacity: 0, x: 30 },
      show: { opacity: 1, x: 0, transition: baseTransition },
    },
    slideIn: {
      hidden: { opacity: 0, y: 24 },
      show: { opacity: 1, y: 0, transition: { ...baseTransition, duration: shouldReduceMotion ? 0 : 0.6 } },
    },
    fadeOnly: {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { ...baseTransition, duration: shouldReduceMotion ? 0 : 0.4 } },
    },
  };

  return variants[type];
};

export default function Reveal({
  as: Component = "div",
  className = "",
  delay = 0,
  animation = "fadeUp",
  children,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const variants = getVariants(animation, shouldReduceMotion, delay);

  const MotionComponent = Component === "section" ? m.section : m.div;

  return (
    <LazyMotion features={loadFeatures}>
      <MotionComponent
        className={className}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={variants}
      >
        {children}
      </MotionComponent>
    </LazyMotion>
  );
}

