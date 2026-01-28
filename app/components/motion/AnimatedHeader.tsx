"use client";

import { LazyMotion, m, useReducedMotion } from "framer-motion";

const loadFeatures = () => import("framer-motion").then((res) => res.domAnimation);

interface AnimatedHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

export default function AnimatedHeader({ title, subtitle, className = "" }: AnimatedHeaderProps) {
  const shouldReduceMotion = useReducedMotion() ?? false;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <LazyMotion features={loadFeatures}>
      <m.div
        className={`text-center mb-[40px] lg:mb-[60px] ${className}`}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <m.h2
          className="text-[20px] lg:text-[40px] font-extrabold leading-[26px] lg:leading-[60px] tracking-[0.02em] text-[#1A1A1A] mb-2"
          variants={itemVariants}
        >
          {title}
        </m.h2>
        <m.p
          className="text-[12px] lg:text-[16px] font-medium leading-[12px] lg:leading-[24px] text-[#4A4A4A]"
          variants={itemVariants}
        >
          {subtitle}
        </m.p>
      </m.div>
    </LazyMotion>
  );
}

