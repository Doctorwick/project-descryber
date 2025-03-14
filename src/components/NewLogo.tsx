
import React from 'react';

export const NewLogo = () => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shield Background with Gradient */}
      <defs>
        <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#92f7ff" />
          <stop offset="100%" stopColor="#016eff" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Base Shield */}
      <path
        d="M50 5L87 20V45C87 65 71 83 50 95C29 83 13 65 13 45V20L50 5Z"
        fill="url(#shieldGradient)"
        filter="url(#glow)"
      />
      
      {/* Tech Lines */}
      <path
        d="M25 45H75M50 25V65"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="0.5"
      />
      
      {/* Metallic D */}
      <path
        d="M40 35H50C55.5228 35 60 39.4772 60 45V55C60 60.5228 55.5228 65 50 65H40V35Z"
        fill="white"
        fillOpacity="0.9"
      />
      <path
        d="M45 40V60H50C52.7614 60 55 57.7614 55 55V45C55 42.2386 52.7614 40 50 40H45Z"
        fill="#016eff"
      />
    </svg>
  );
};
