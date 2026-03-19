"use client";

import React from "react";

/** Centre of the flower head in SVG coordinate space */
const CX = 200;
const CY = 188;

/** Number of petal layers */
const OUTER_PETALS = 8;
const INNER_PETALS = 8;
const STAMEN_COUNT = 12;

function OuterPetals(): React.JSX.Element {
  return (
    <>
      {Array.from({ length: OUTER_PETALS }, (_, i) => {
        const angle = (360 / OUTER_PETALS) * i;
        return (
          <ellipse
            key={`outer-${i}`}
            cx={CX}
            cy={140}
            rx={21}
            ry={48}
            fill="url(#outerPetalGrad)"
            opacity={0.93}
            className="petal-shimmer"
            transform={`rotate(${angle}, ${CX}, ${CY})`}
            style={{ animationDelay: `${i * 0.07}s` }}
          />
        );
      })}
    </>
  );
}

function InnerPetals(): React.JSX.Element {
  return (
    <>
      {Array.from({ length: INNER_PETALS }, (_, i) => {
        const angle = (360 / INNER_PETALS) * i + 22.5;
        return (
          <ellipse
            key={`inner-${i}`}
            cx={CX}
            cy={163}
            rx={14}
            ry={28}
            fill="url(#innerPetalGrad)"
            opacity={0.97}
            className="petal-shimmer"
            transform={`rotate(${angle}, ${CX}, ${CY})`}
            style={{ animationDelay: `${0.12 + i * 0.07}s` }}
          />
        );
      })}
    </>
  );
}

function StamenRing(): React.JSX.Element {
  return (
    <>
      {Array.from({ length: STAMEN_COUNT }, (_, i) => {
        const rad = ((2 * Math.PI) / STAMEN_COUNT) * i;
        const r = 17;
        const x = CX + r * Math.cos(rad);
        const y = CY + r * Math.sin(rad);
        return (
          <circle
            key={`stamen-${i}`}
            cx={x}
            cy={y}
            r={2.6}
            fill="#fbbf24"
            className="stamen-sparkle"
            style={{ animationDelay: `${i * 0.09}s` }}
          />
        );
      })}
    </>
  );
}

export default function Flower(): React.JSX.Element {
  return (
    <div className="flower-float" aria-hidden="false">
      <svg
        viewBox="0 0 400 500"
        width={380}
        height={475}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Animated blooming flower with pink and coral petals, green stem, and golden centre"
        className="drop-shadow-xl"
      >
        <title>Blooming Flower</title>

        <defs>
          {/* ── Petal Gradients ── */}
          <radialGradient id="outerPetalGrad" cx="50%" cy="75%" r="65%">
            <stop offset="0%" stopColor="#fbcfe8" />
            <stop offset="40%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#7c3aed" />
          </radialGradient>

          <radialGradient id="innerPetalGrad" cx="50%" cy="80%" r="65%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="45%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#ec4899" />
          </radialGradient>

          {/* ── Centre Gradients ── */}
          <radialGradient id="centerGrad" cx="38%" cy="38%" r="62%">
            <stop offset="0%" stopColor="#fef9c3" />
            <stop offset="50%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#b45309" />
          </radialGradient>

          <radialGradient id="centerInnerGrad" cx="42%" cy="42%" r="55%">
            <stop offset="0%" stopColor="#fffbeb" />
            <stop offset="100%" stopColor="#d97706" />
          </radialGradient>

          {/* ── Stem ── */}
          <linearGradient id="stemGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#166534" />
            <stop offset="45%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#166534" />
          </linearGradient>

          {/* ── Leaves ── */}
          <linearGradient id="leafGradL" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#86efac" />
            <stop offset="100%" stopColor="#166534" />
          </linearGradient>

          <linearGradient id="leafGradR" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#86efac" />
            <stop offset="100%" stopColor="#166534" />
          </linearGradient>

          {/* ── Halo glow blur ── */}
          <filter id="haloFilter" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="14" />
          </filter>

          {/* ── Subtle petal glow ── */}
          <filter id="petalGlow" x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* ── Ground shadow ── */}
          <radialGradient id="shadowGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#15803d" stopOpacity={0.35} />
            <stop offset="100%" stopColor="#15803d" stopOpacity={0} />
          </radialGradient>
        </defs>

        {/* ── Ground shadow ── */}
        <ellipse cx={CX} cy={478} rx={105} ry={16} fill="url(#shadowGrad)" />

        {/* ── Sway group (stem + flower) ── */}
        <g className="flower-sway">

          {/* Stem */}
          <path
            d="M 200 458 Q 184 385 196 324 Q 208 268 200 218"
            stroke="url(#stemGrad)"
            strokeWidth={8}
            fill="none"
            strokeLinecap="round"
          />

          {/* ── Left leaf ── */}
          <g className="leaf-shimmer" style={{ animationDelay: "0.4s" }}>
            <path
              d="M 193 375 Q 128 338 114 298 Q 160 318 190 360 Z"
              fill="url(#leafGradL)"
              stroke="#15803d"
              strokeWidth={1.2}
            />
            {/* vein */}
            <path
              d="M 193 375 Q 148 332 114 298"
              stroke="#166534"
              strokeWidth={1}
              fill="none"
              opacity={0.55}
            />
          </g>

          {/* ── Right leaf ── */}
          <g className="leaf-shimmer" style={{ animationDelay: "0.9s" }}>
            <path
              d="M 200 326 Q 262 288 278 255 Q 236 272 204 312 Z"
              fill="url(#leafGradR)"
              stroke="#15803d"
              strokeWidth={1.2}
            />
            {/* vein */}
            <path
              d="M 200 326 Q 243 282 278 255"
              stroke="#166534"
              strokeWidth={1}
              fill="none"
              opacity={0.55}
            />
          </g>

          {/* ── Flower head ── */}

          {/* Soft halo glow behind petals */}
          <circle
            cx={CX}
            cy={CY}
            r={82}
            fill="#f9a8d4"
            filter="url(#haloFilter)"
            className="halo-breathe"
          />

          {/* Bloom entrance group */}
          <g className="flower-bloom" filter="url(#petalGlow)">
            {/* Outer petals */}
            <OuterPetals />

            {/* Inner petals */}
            <InnerPetals />

            {/* Centre disc */}
            <circle
              cx={CX}
              cy={CY}
              r={22}
              fill="url(#centerGrad)"
              className="center-pulse"
            />

            {/* Centre inner highlight */}
            <circle
              cx={CX}
              cy={CY}
              r={14}
              fill="url(#centerInnerGrad)"
              opacity={0.85}
              className="center-pulse"
              style={{ animationDelay: "0.15s" }}
            />

            {/* Stamen ring */}
            <StamenRing />

            {/* Specular highlight */}
            <ellipse
              cx={CX - 7}
              cy={CY - 7}
              rx={6}
              ry={4}
              fill="white"
              opacity={0.32}
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
