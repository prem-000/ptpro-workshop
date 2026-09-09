'use client';

import React from 'react';

export default function AIChipAnimation() {
  return (
    <div className="relative w-full max-w-[520px] lg:max-w-[560px] aspect-square mx-auto flex items-center justify-center select-none p-2 sm:p-4">
      {/* Ambient background soft aura: Deep navy, electric purple, and cool blue */}
      <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-[#7C5CFF]/12 via-[#38BDF8]/10 to-[#60A5FA]/8 blur-3xl pointer-events-none" />

      {/* Main SVG Graphic Canvas */}
      <svg
        viewBox="0 0 600 600"
        className="w-full h-full relative z-10 overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Surface & Dark Metallic Gradients */}
          <linearGradient id="substrateGrad" x1="180" y1="180" x2="420" y2="420" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#080C14" />
            <stop offset="50%" stopColor="#0B1320" />
            <stop offset="100%" stopColor="#060910" />
          </linearGradient>

          <linearGradient id="ihsMetallic" x1="200" y1="200" x2="400" y2="400" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#151F2E" />
            <stop offset="30%" stopColor="#0F1724" />
            <stop offset="70%" stopColor="#0A1019" />
            <stop offset="100%" stopColor="#121B28" />
          </linearGradient>

          <linearGradient id="dieCoreGrad" x1="225" y1="225" x2="375" y2="375" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#070C16" />
            <stop offset="50%" stopColor="#05080E" />
            <stop offset="100%" stopColor="#070D18" />
          </linearGradient>

          {/* Dark Metallic Pins Gradient */}
          <linearGradient id="darkMetallicPinGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2D3E54" />
            <stop offset="50%" stopColor="#1E2A3A" />
            <stop offset="100%" stopColor="#121A26" />
          </linearGradient>

          {/* Active Purple Pin Glow Gradient */}
          <linearGradient id="activePurplePinGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#7C5CFF" />
          </linearGradient>

          {/* Active Blue Pin Glow Gradient */}
          <linearGradient id="activeBluePinGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7DD3FC" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>

          {/* Central PRO Typography Gradient: Purple to Cool Blue (NO YELLOW!) */}
          <linearGradient id="proPurpleBlueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#906FFA" />
            <stop offset="50%" stopColor="#7C5CFF" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>

          {/* Soft Processor Core Radial Glow: Purple & Cyan diffusion */}
          <radialGradient id="chipPulseGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7C5CFF" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.22" />
            <stop offset="85%" stopColor="#60A5FA" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#05070B" stopOpacity="0" />
          </radialGradient>

          {/* Rare Gold Accent Gradient (<5% usage) */}
          <linearGradient id="rareGoldGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E6BD5A" />
            <stop offset="100%" stopColor="#C9A45A" />
          </linearGradient>

          {/* Glow Filters */}
          <filter id="purpleGlow" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="blueGlow" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="rareGoldGlow" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <style>{`
          /* Central AI Processor Soft Pulse (5s cycle) */
          @keyframes processorPulse {
            0%, 100% {
              opacity: 0.25;
              transform: scale(0.98);
            }
            35% {
              opacity: 0.6;
              transform: scale(1.02);
            }
            50% {
              opacity: 0.85;
              transform: scale(1.04);
            }
            75% {
              opacity: 0.4;
              transform: scale(0.99);
            }
          }

          .processor-pulse-core {
            transform-origin: 300px 300px;
            animation: processorPulse 5.4s ease-in-out infinite;
          }

          /* Subtle border illumination on processor */
          @keyframes borderGlowPulse {
            0%, 100% {
              stroke: #1B293A;
              stroke-opacity: 0.5;
            }
            50% {
              stroke: #7C5CFF;
              stroke-opacity: 0.8;
            }
          }

          .chip-border-pulse {
            animation: borderGlowPulse 5.4s ease-in-out infinite;
          }

          /* Circuit Data Flow Animations - Staggered Electric Timings */
          @keyframes flowBlueEnter {
            0% {
              stroke-dashoffset: 420;
              opacity: 0;
            }
            15% {
              opacity: 1;
            }
            85% {
              opacity: 1;
            }
            100% {
              stroke-dashoffset: 0;
              opacity: 0;
            }
          }

          @keyframes flowPurpleToChip {
            0% {
              stroke-dashoffset: 440;
              opacity: 0;
            }
            20% {
              opacity: 1;
            }
            80% {
              opacity: 1;
            }
            100% {
              stroke-dashoffset: 0;
              opacity: 0;
            }
          }

          @keyframes flowBlueExit {
            0% {
              stroke-dashoffset: 0;
              opacity: 0;
            }
            20% {
              opacity: 1;
            }
            80% {
              opacity: 1;
            }
            100% {
              stroke-dashoffset: 420;
              opacity: 0;
            }
          }

          /* Rare Gold Accent Pulse (Rare 7.2s cycle) */
          @keyframes flowGoldRare {
            0%, 40% {
              stroke-dashoffset: 400;
              opacity: 0;
            }
            55% {
              opacity: 0.9;
            }
            80% {
              opacity: 0.9;
            }
            95%, 100% {
              stroke-dashoffset: 0;
              opacity: 0;
            }
          }

          .circuit-flow-blue-1 {
            stroke-dasharray: 45 355;
            animation: flowBlueEnter 3.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }
          .circuit-flow-purple-1 {
            stroke-dasharray: 40 360;
            animation: flowPurpleToChip 3.8s cubic-bezier(0.4, 0, 0.2, 1) infinite -1.2s;
          }
          .circuit-flow-blue-2 {
            stroke-dasharray: 45 355;
            animation: flowBlueExit 3.9s cubic-bezier(0.4, 0, 0.2, 1) infinite -2.4s;
          }
          .circuit-flow-purple-2 {
            stroke-dasharray: 38 362;
            animation: flowPurpleToChip 4.3s cubic-bezier(0.4, 0, 0.2, 1) infinite -0.6s;
          }
          .circuit-flow-blue-3 {
            stroke-dasharray: 42 358;
            animation: flowBlueEnter 4.1s cubic-bezier(0.4, 0, 0.2, 1) infinite -1.9s;
          }
          .circuit-flow-blue-4 {
            stroke-dasharray: 48 352;
            animation: flowBlueExit 4.5s cubic-bezier(0.4, 0, 0.2, 1) infinite -3.1s;
          }
          .circuit-flow-gold-rare {
            stroke-dasharray: 30 370;
            animation: flowGoldRare 7.2s cubic-bezier(0.4, 0, 0.2, 1) infinite -2.8s;
          }

          /* Neural Node Brightening & Breathing */
          @keyframes nodePurpleBreathe {
            0%, 100% { opacity: 0.35; transform: scale(0.9); }
            50% { opacity: 1; transform: scale(1.3); }
          }
          @keyframes nodeBlueBreathe {
            0%, 100% { opacity: 0.38; transform: scale(0.95); }
            55% { opacity: 1; transform: scale(1.35); }
          }
          @keyframes nodeGoldRareBreathe {
            0%, 65%, 100% { opacity: 0.15; transform: scale(0.8); }
            82% { opacity: 0.85; transform: scale(1.25); }
          }

          .node-purple {
            transform-box: fill-box;
            transform-origin: center;
            animation: nodePurpleBreathe 4.2s ease-in-out infinite;
          }
          .node-blue {
            transform-box: fill-box;
            transform-origin: center;
            animation: nodeBlueBreathe 3.6s ease-in-out infinite -1.5s;
          }
          .node-gold-rare {
            transform-box: fill-box;
            transform-origin: center;
            animation: nodeGoldRareBreathe 7.2s ease-in-out infinite -2.5s;
          }

          /* Pin Data Activity Glow */
          @keyframes pinGlowPulse {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.95; }
          }
          .pin-pulse-purple {
            animation: pinGlowPulse 3.8s ease-in-out infinite -1.2s;
          }
          .pin-pulse-blue {
            animation: pinGlowPulse 3.4s ease-in-out infinite;
          }

          /* Respect prefers-reduced-motion */
          @media (prefers-reduced-motion: reduce) {
            .processor-pulse-core,
            .chip-border-pulse,
            .circuit-flow-blue-1,
            .circuit-flow-purple-1,
            .circuit-flow-blue-2,
            .circuit-flow-purple-2,
            .circuit-flow-blue-3,
            .circuit-flow-blue-4,
            .circuit-flow-gold-rare,
            .node-purple,
            .node-blue,
            .node-gold-rare,
            .pin-pulse-purple,
            .pin-pulse-blue {
              animation: none !important;
            }
          }
        `}</style>

        {/* ============================================================ */}
        {/* 1. BASE STATIC CIRCUIT TRACES (Deep Dark Navy)                */}
        {/* ============================================================ */}
        <g stroke="#111B28" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8">
          {/* Top circuits extending outward */}
          <path d="M 260 200 L 260 120 L 220 80 L 160 80" />
          <path d="M 280 200 L 280 100 L 300 80 L 300 30" />
          <path d="M 320 200 L 320 110 L 350 80 L 410 80 L 440 50" />
          <path d="M 340 200 L 340 140 L 380 100 L 480 100" />

          {/* Bottom circuits extending outward */}
          <path d="M 260 400 L 260 470 L 210 520 L 140 520" />
          <path d="M 280 400 L 280 490 L 300 510 L 300 570" />
          <path d="M 320 400 L 320 480 L 360 520 L 440 520" />
          <path d="M 340 400 L 340 460 L 390 510 L 470 510" />

          {/* Left circuits extending outward */}
          <path d="M 200 260 L 120 260 L 80 220 L 80 150" />
          <path d="M 200 280 L 100 280 L 70 310 L 30 310" />
          <path d="M 200 320 L 110 320 L 70 360 L 70 420" />
          <path d="M 200 340 L 140 340 L 100 380 L 40 380" />

          {/* Right circuits extending outward */}
          <path d="M 400 260 L 480 260 L 520 220 L 520 160" />
          <path d="M 400 280 L 500 280 L 530 310 L 570 310" />
          <path d="M 400 320 L 490 320 L 530 360 L 530 430" />
          <path d="M 400 340 L 460 340 L 500 380 L 560 380" />

          {/* Sub-branches */}
          <path d="M 160 80 L 160 50" />
          <path d="M 480 100 L 480 70" />
          <path d="M 140 520 L 140 550" />
          <path d="M 440 520 L 440 550" />
          <path d="M 80 220 L 40 220" />
          <path d="M 520 220 L 560 220" />
        </g>

        {/* Deep navy endpoint vias */}
        <g fill="#0D1623" stroke="#1C2B3E" strokeWidth="1">
          <circle cx="160" cy="50" r="2.5" />
          <circle cx="300" cy="30" r="2.5" />
          <circle cx="440" cy="50" r="2.5" />
          <circle cx="480" cy="70" r="2.5" />
          <circle cx="30" cy="310" r="2.5" />
          <circle cx="40" cy="220" r="2.5" />
          <circle cx="40" cy="380" r="2.5" />
          <circle cx="70" cy="420" r="2.5" />
          <circle cx="140" cy="550" r="2.5" />
          <circle cx="300" cy="570" r="2.5" />
          <circle cx="440" cy="550" r="2.5" />
          <circle cx="470" cy="510" r="2.5" />
          <circle cx="570" cy="310" r="2.5" />
          <circle cx="560" cy="220" r="2.5" />
          <circle cx="560" cy="380" r="2.5" />
          <circle cx="530" cy="430" r="2.5" />
        </g>

        {/* ============================================================ */}
        {/* 2. ACTIVE DATA FLOW: ELECTRIC PURPLE & COOL BLUE (RARE GOLD) */}
        {/* ============================================================ */}
        <g strokeLinecap="round">
          {/* 1. Blue data particle enters circuit from outer edge */}
          <path
            d="M 160 80 L 220 80 L 260 120 L 260 200"
            stroke="#38BDF8"
            strokeWidth="1.8"
            className="circuit-flow-blue-1"
            filter="url(#blueGlow)"
          />

          {/* 2. Purple light travels toward AI chip */}
          <path
            d="M 300 30 L 300 80 L 280 100 L 280 200"
            stroke="#7C5CFF"
            strokeWidth="2"
            className="circuit-flow-purple-1"
            filter="url(#purpleGlow)"
          />

          {/* Left Flow 1: Cool blue entry toward chip */}
          <path
            d="M 80 150 L 80 220 L 120 260 L 200 260"
            stroke="#60A5FA"
            strokeWidth="1.8"
            className="circuit-flow-blue-3"
            filter="url(#blueGlow)"
          />

          {/* Left Flow 2: Electric purple pulsing */}
          <path
            d="M 200 280 L 100 280 L 70 310 L 30 310"
            stroke="#7C5CFF"
            strokeWidth="2"
            className="circuit-flow-purple-2"
            filter="url(#purpleGlow)"
          />

          {/* Right Flow 1: Blue output circuit lights up */}
          <path
            d="M 400 260 L 480 260 L 520 220 L 520 160"
            stroke="#38BDF8"
            strokeWidth="2"
            className="circuit-flow-blue-2"
            filter="url(#blueGlow)"
          />

          {/* Right Flow 2: Purple light traveling outwards */}
          <path
            d="M 400 320 L 490 320 L 530 360 L 530 430"
            stroke="#A78BFA"
            strokeWidth="1.8"
            className="circuit-flow-purple-1"
            filter="url(#purpleGlow)"
          />

          {/* Bottom Flow 1: Blue entering circuit */}
          <path
            d="M 140 520 L 210 520 L 260 470 L 260 400"
            stroke="#38BDF8"
            strokeWidth="1.8"
            className="circuit-flow-blue-1"
            filter="url(#blueGlow)"
          />

          {/* Bottom Flow 2: Output circuit lights blue */}
          <path
            d="M 340 400 L 340 460 L 390 510 L 470 510"
            stroke="#60A5FA"
            strokeWidth="2"
            className="circuit-flow-blue-4"
            filter="url(#blueGlow)"
          />

          {/* RARE Special Processing Pulse: Soft Gold Accent (<5%) */}
          <path
            d="M 440 50 L 410 80 L 350 80 L 320 110 L 320 200"
            stroke="url(#rareGoldGrad)"
            strokeWidth="1.6"
            className="circuit-flow-gold-rare"
            filter="url(#rareGoldGlow)"
          />
        </g>

        {/* ============================================================ */}
        {/* 3. NEURAL NODES (Electric Purple & Cool Blue, 1 Rare Gold)   */}
        {/* ============================================================ */}
        {/* Node 1: Top Left Junction (Purple) */}
        <g className="node-purple">
          <circle cx="220" cy="80" r="6" fill="#7C5CFF" fillOpacity="0.25" filter="url(#purpleGlow)" />
          <circle cx="220" cy="80" r="3" fill="#A78BFA" />
        </g>

        {/* Node 2: Top Right Junction (Rare Gold Accent <5%) */}
        <g className="node-gold-rare">
          <circle cx="350" cy="80" r="5" fill="#C9A45A" fillOpacity="0.2" filter="url(#rareGoldGlow)" />
          <circle cx="350" cy="80" r="2.4" fill="#E6BD5A" />
        </g>

        {/* Node 3: Left Junction (Cool Blue) */}
        <g className="node-blue">
          <circle cx="70" cy="310" r="6" fill="#38BDF8" fillOpacity="0.25" filter="url(#blueGlow)" />
          <circle cx="70" cy="310" r="3" fill="#7DD3FC" />
        </g>

        {/* Node 4: Right Junction (Electric Purple) */}
        <g className="node-purple">
          <circle cx="530" cy="310" r="6" fill="#7C5CFF" fillOpacity="0.25" filter="url(#purpleGlow)" />
          <circle cx="530" cy="310" r="3" fill="#C4B5FD" />
        </g>

        {/* Node 5: Bottom Left Junction (Cool Blue) */}
        <g className="node-blue">
          <circle cx="210" cy="520" r="6" fill="#38BDF8" fillOpacity="0.25" filter="url(#blueGlow)" />
          <circle cx="210" cy="520" r="3" fill="#60A5FA" />
        </g>

        {/* Node 6: Bottom Right Junction (Electric Purple) */}
        <g className="node-purple">
          <circle cx="360" cy="520" r="6" fill="#7C5CFF" fillOpacity="0.25" filter="url(#purpleGlow)" />
          <circle cx="360" cy="520" r="3" fill="#A78BFA" />
        </g>

        {/* Peripheral subtle micro-nodes */}
        <circle cx="120" cy="260" r="2.2" fill="#38BDF8" opacity="0.75" />
        <circle cx="480" cy="260" r="2.2" fill="#A78BFA" opacity="0.75" />

        {/* ============================================================ */}
        {/* 4. CHIP PINS (Mostly Dark Metallic, Pulses on Active Pins)   */}
        {/* ============================================================ */}
        <g fill="url(#darkMetallicPinGrad)" stroke="#090E17" strokeWidth="0.5">
          {/* Top Pins (12 pins) */}
          {[215, 230, 245, 260, 275, 290, 305, 320, 335, 350, 365, 380].map((x, i) => (
            <rect key={`pin-top-${i}`} x={x} y="187" width="5" height="13" rx="1" />
          ))}

          {/* Bottom Pins (12 pins) */}
          {[215, 230, 245, 260, 275, 290, 305, 320, 335, 350, 365, 380].map((x, i) => (
            <rect key={`pin-bot-${i}`} x={x} y="400" width="5" height="13" rx="1" />
          ))}

          {/* Left Pins (12 pins) */}
          {[215, 230, 245, 260, 275, 290, 305, 320, 335, 350, 365, 380].map((y, i) => (
            <rect key={`pin-left-${i}`} x="187" y={y} width="13" height="5" rx="1" />
          ))}

          {/* Right Pins (12 pins) */}
          {[215, 230, 245, 260, 275, 290, 305, 320, 335, 350, 365, 380].map((y, i) => (
            <rect key={`pin-right-${i}`} x="400" y={y} width="13" height="5" rx="1" />
          ))}
        </g>

        {/* Active Pins: Glowing tips on pins receiving purple/blue pulses */}
        <rect x="260" y="187" width="5" height="4" rx="0.8" fill="url(#activeBluePinGrad)" className="pin-pulse-blue" />
        <rect x="280" y="187" width="5" height="4" rx="0.8" fill="url(#activePurplePinGrad)" className="pin-pulse-purple" />
        <rect x="187" y="260" width="4" height="5" rx="0.8" fill="url(#activeBluePinGrad)" className="pin-pulse-blue" />
        <rect x="187" y="280" width="4" height="5" rx="0.8" fill="url(#activePurplePinGrad)" className="pin-pulse-purple" />
        <rect x="409" y="260" width="4" height="5" rx="0.8" fill="url(#activeBluePinGrad)" className="pin-pulse-blue" />
        <rect x="260" y="409" width="5" height="4" rx="0.8" fill="url(#activeBluePinGrad)" className="pin-pulse-blue" />
        <rect x="280" y="409" width="5" height="4" rx="0.8" fill="url(#activePurplePinGrad)" className="pin-pulse-purple" />

        {/* Rare Gold Accent Pin Pulse (pin at x=320 top) */}
        <rect x="320" y="187" width="5" height="4" rx="0.8" fill="url(#rareGoldGrad)" className="node-gold-rare" />

        {/* Pin alignment guide ring (Subtle dark steel line) */}
        <rect
          x="196"
          y="196"
          width="208"
          height="208"
          rx="12"
          fill="none"
          stroke="#1F2E40"
          strokeWidth="1"
        />

        {/* ============================================================ */}
        {/* 5. MAIN AI MICROCHIP BODY (Square Center Processor)        */}
        {/* ============================================================ */}
        {/* Outer Dark Substrate (Deep navy/black) */}
        <rect
          x="200"
          y="200"
          width="200"
          height="200"
          rx="14"
          fill="url(#substrateGrad)"
          stroke="#1E2B3D"
          strokeWidth="1.5"
          className="chip-border-pulse"
        />

        {/* Substrate Alignment Corner Triangle (Deep cool titanium with subtle cyan) */}
        <polygon points="208,208 219,208 208,219" fill="#38BDF8" opacity="0.6" />

        {/* Integrated Heat Spreader (IHS) Metallic Bevel */}
        <rect
          x="212"
          y="212"
          width="176"
          height="176"
          rx="10"
          fill="url(#ihsMetallic)"
          stroke="#162232"
          strokeWidth="1.2"
        />

        {/* Subtle Brushed Metal Accent Lines */}
        <line x1="220" y1="218" x2="380" y2="218" stroke="#253549" strokeWidth="0.8" opacity="0.4" />
        <line x1="220" y1="382" x2="380" y2="382" stroke="#080D14" strokeWidth="1" opacity="0.8" />

        {/* Microchip Corner Mounting Rivets */}
        <circle cx="222" cy="222" r="2" fill="#29394D" />
        <circle cx="378" cy="222" r="2" fill="#29394D" />
        <circle cx="222" cy="378" r="2" fill="#29394D" />
        <circle cx="378" cy="378" r="2" fill="#29394D" />

        {/* Laser Etched Tech Markings (Cool Slate/Muted Blue) */}
        <text
          x="300"
          y="229"
          textAnchor="middle"
          fill="#475569"
          fontSize="6.5"
          fontFamily="monospace"
          fontWeight="600"
          letterSpacing="0.18em"
        >
          NEURAL MATRIX // ARCH-2026
        </text>

        <text
          x="300"
          y="375"
          textAnchor="middle"
          fill="#475569"
          fontSize="6"
          fontFamily="monospace"
          fontWeight="500"
          letterSpacing="0.12em"
        >
          SCRS-PTP-NPU • 64-CORE TENSOR
        </text>

        {/* ============================================================ */}
        {/* 6. INNER DIE COMPUTING CORE (Soft purple/blue AI activation) */}
        {/* ============================================================ */}
        {/* Inner Core Recess */}
        <rect
          x="235"
          y="237"
          width="130"
          height="126"
          rx="8"
          fill="url(#dieCoreGrad)"
          stroke="#182434"
          strokeWidth="1"
        />

        {/* Soft Radial AI Processing Pulse Layer (Purple & Cool Blue) */}
        <circle
          cx="300"
          cy="300"
          r="64"
          fill="url(#chipPulseGlow)"
          className="processor-pulse-core pointer-events-none"
        />

        {/* Inner Core Edge Highlight (Subtle electric purple border) */}
        <rect
          x="237"
          y="239"
          width="126"
          height="122"
          rx="6"
          fill="none"
          stroke="#7C5CFF"
          strokeOpacity="0.25"
          strokeWidth="0.8"
        />

        {/* ============================================================ */}
        {/* 7. CHIP CONTENT TYPOGRAPHY                                   */}
        {/*    PROMPT = cream/white                                      */}
        {/*    arrow  = subtle purple                                    */}
        {/*    PRO    = purple-to-blue gradient (NOT yellow)             */}
        {/*    LEARN • BUILD • GROW                                      */}
        {/* ============================================================ */}
        {/* Word: PROMPT (Cream / White) */}
        <text
          x="300"
          y="266"
          textAnchor="middle"
          fill="#FFFDF7"
          fontSize="15"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontWeight="800"
          letterSpacing="0.22em"
        >
          PROMPT
        </text>

        {/* Down Arrow ↓ (Subtle Electric Purple) */}
        <g filter="url(#purpleGlow)">
          <text
            x="300"
            y="286"
            textAnchor="middle"
            fill="#A78BFA"
            fontSize="14"
            fontFamily="system-ui, sans-serif"
            fontWeight="700"
          >
            ↓
          </text>
        </g>

        {/* Word: PRO (High-Tech Purple to Blue Gradient — NO YELLOW!) */}
        <text
          x="300"
          y="312"
          textAnchor="middle"
          fill="url(#proPurpleBlueGrad)"
          fontSize="22"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontWeight="900"
          letterSpacing="0.26em"
          filter="url(#blueGlow)"
        >
          PRO
        </text>

        {/* Subtle Horizontal Divider Line (Purple / Blue tint) */}
        <line
          x1="255"
          y1="326"
          x2="345"
          y2="326"
          stroke="#7C5CFF"
          strokeOpacity="0.4"
          strokeWidth="0.75"
          strokeDasharray="2 2"
        />

        {/* Subtitle: LEARN • BUILD • GROW (Clean light slate / cream) */}
        <text
          x="300"
          y="342"
          textAnchor="middle"
          fill="#CBD5E1"
          fillOpacity="0.9"
          fontSize="7"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
          fontWeight="600"
          letterSpacing="0.18em"
        >
          LEARN • BUILD • GROW
        </text>

        {/* Micro status indicator dots under text: Purple, Blue, and 1 tiny Gold dot */}
        <circle cx="288" cy="352" r="1.3" fill="#7C5CFF" opacity="0.9" />
        <circle cx="300" cy="352" r="1.3" fill="#38BDF8" opacity="0.95" />
        <circle cx="312" cy="352" r="1.1" fill="#C9A45A" opacity="0.65" />
      </svg>
    </div>
  );
}
