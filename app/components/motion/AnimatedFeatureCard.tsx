"use client";

import { LazyMotion, m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import Image from "next/image";

const loadFeatures = () => import("framer-motion").then((res) => res.domAnimation);

interface AnimatedFeatureCardProps {
  image: string;
  title: ReactNode;
  alt?: string;
  subtitle: string;
  className?: string;
  variant?: "default" | "top-title" | "mid-title";
  titleSize?: "x-small" | "small" | "medium" | "large";
  imageScale?: number;
  titleClassName?: string;
  subtitleClassName?: string;
  titleBoxClassName?: string;
  index?: number;
}

export default function AnimatedFeatureCard({
  image,
  variant,
  title,
  alt,
  subtitle,
  className = "",
  imageScale,
  titleSize = "medium",
  titleClassName = "",
  subtitleClassName = "",
  titleBoxClassName = "",
  index = 0,
}: AnimatedFeatureCardProps) {
  const shouldReduceMotion = useReducedMotion() ?? false;

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.92,
      y: 20,
    },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        delay: shouldReduceMotion ? 0 : index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: shouldReduceMotion ? 1 : 1.05,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.4,
        delay: shouldReduceMotion ? 0 : index * 0.08 + 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <LazyMotion features={loadFeatures}>
      <m.div
        className={`relative rounded-[16px] lg:rounded-[32px] overflow-hidden ${className}`}
        variants={cardVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <m.div
          variants={imageVariants}
          whileHover="hover"
          className="absolute inset-0"
        >
          <Image
            src={image}
            alt={alt ?? (typeof title === "string" ? title : "Feature")}
            fill
            className="object-cover"
            style={imageScale ? { transform: `scale(${imageScale})` } : undefined}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={100}
            unoptimized
          />
        </m.div>
        <div className={`absolute inset-0 p-[16px] lg:p-[24px] flex flex-col justify-end ${variant === "top-title" ? "justify-start" : variant === "mid-title" ? "max-w-[500px] bottom-[20px] md:bottom-[60px] left-[41%] lg:max-w-[500px] lg:bottom-[60px] lg:left-[42%]" : "justify-end"} ${titleBoxClassName}`}>
          <m.h3
            className={`font-bold lg:leading-[35px] tracking-[0.02em] text-white mb-[6px] lg:mb-[8px] ${titleSize === "x-small" ? "text-[16px] leading-[18px] lg:text-[16px] lg:leading-[20px]" : titleSize === "small" ? "text-[20px] leading-[24px] lg:text-[24px] lg:leading-[24px] mt-[-10px]" : titleSize === "medium" ? "text-[24px] lg:text-[32px]" : "text-[28px] leading-[32px] lg:text-[48px] lg:leading-[52px]"} ${titleClassName}`}
            variants={textVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {title}
          </m.h3>
          <m.p
            className={`text-[10px] md:text-[14px] lg:text-[14px] font-medium leading-[12px] lg:leading-[24px] text-white/90 ${titleSize === "small" ? "max-w-[280px] mt-[-4px]" : ""} ${variant === "top-title" ? "max-w-[300px]" : ""} ${subtitleClassName}`}
            variants={textVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {subtitle}
          </m.p>
        </div>
      </m.div>
    </LazyMotion>
  );
}

