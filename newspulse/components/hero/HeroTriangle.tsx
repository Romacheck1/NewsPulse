import React from "react";

type HeroTriangleProps = {
  className?: string;
};

export function HeroTriangle({ className = "" }: HeroTriangleProps) {
  return (
    <div className={`w-full pointer-events-none ${className}`} aria-hidden="true">
      <svg
        className="w-full block h-20 md:h-28 lg:h-32"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
      >
        {/* Bottom layer - largest, most transparent */}
        <path
          d="M 0 200 L 0 140 Q 180 100, 360 110 Q 540 120, 720 100 Q 900 90, 1080 110 Q 1200 120, 1200 140 L 1200 200 Z"
          fill="rgba(255,255,255,0.08)"
        />
        {/* Middle layer */}
        <path
          d="M 0 200 L 0 150 Q 150 120, 300 130 Q 450 140, 600 120 Q 750 110, 900 130 Q 1050 140, 1200 150 L 1200 200 Z"
          fill="rgba(255,255,255,0.12)"
        />
        {/* Top layer - smallest, most opaque */}
        <path
          d="M 0 200 L 0 160 Q 120 140, 240 144 Q 360 148, 480 136 Q 600 130, 720 140 Q 840 144, 960 136 Q 1080 130, 1200 150 L 1200 200 Z"
          fill="rgba(255,255,255,0.18)"
        />
      </svg>
    </div>
  );
}
