import React from "react";
import { LogoProps } from "@/types/index";

const SiteLogo: React.FC<LogoProps> = ({
  text = "AnixPlay",
  size = 150,
  className = "",
  ...props
}) => {
  return (
    <svg
      className={`logo ${className}`}
      width={size}
      viewBox="0 0 400 100"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <defs>
        {/* Neon Gradient */}
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00ffff" />
          <stop offset="100%" stopColor="#8a2be2" />
        </linearGradient>
        {/* Soft Glow Filter */}
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Main Text */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="90"
        fontFamily="Poppins, Arial, sans-serif"
        fill="url(#textGradient)"
        filter="url(#glow)"
      >
        {text}
      </text>
    </svg>
  );
};

export default SiteLogo;
