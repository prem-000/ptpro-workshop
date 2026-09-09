'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Cpu, Database, Code2, LineChart, BrainCircuit, ArrowRight, Layers, Workflow, Award } from 'lucide-react';

const INPUT_PROMPTS = [
  { text: 'Create an AI app', icon: Cpu, color: '#7C5CFF' },
  { text: 'Write SQL query', icon: Database, color: '#38BDF8' },
  { text: 'Analyze customer data', icon: LineChart, color: '#34D399' },
  { text: 'Build a portfolio', icon: Code2, color: '#A78BFA' },
  { text: 'Automate workflow', icon: Workflow, color: '#7DD3FC' },
  { text: 'Design RAG solution', icon: Layers, color: '#EABF55' },
];

const OUTPUT_CARDS = [
  { title: 'AI Application', desc: 'Working Full-Stack GenAI', icon: Cpu, badge: 'Deployed' },
  { title: 'SQL & Data Pipeline', desc: 'Complex Joins & Analytics', icon: Database, badge: 'Optimized' },
  { title: 'Portfolio Project', desc: 'Real Industry Use Case', icon: Code2, badge: 'Ready' },
  { title: 'Non-CGPA Certificate', desc: 'Group 3 Accreditation', icon: Award, badge: 'Verified' },
];

export default function HeroVisual() {
  const [activeInputIdx, setActiveInputIdx] = useState(0);
  const [activeOutputIdx, setActiveOutputIdx] = useState(0);
  const [corePhase, setCorePhase] = useState<'idle' | 'token' | 'reasoning' | 'output'>('token');

  useEffect(() => {
    const timer = setInterval(() => {
      // Step through prompt -> processing -> output
      setCorePhase('token');
      setTimeout(() => setCorePhase('reasoning'), 800);
      setTimeout(() => {
        setCorePhase('output');
        setActiveOutputIdx((prev) => (prev + 1) % OUTPUT_CARDS.length);
      }, 1800);
      setTimeout(() => {
        setCorePhase('idle');
        setActiveInputIdx((prev) => (prev + 1) % INPUT_PROMPTS.length);
      }, 3000);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const currentInput = INPUT_PROMPTS[activeInputIdx];
  const currentOutput = OUTPUT_CARDS[activeOutputIdx];

  return (
    <div className="relative w-full max-w-[540px] aspect-[4/3] sm:aspect-square mx-auto flex items-center justify-center select-none py-6">
      {/* Background Soft Glow */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#7C5CFF]/15 via-transparent to-[#38BDF8]/10 blur-3xl pointer-events-none" />

      {/* SVG Connecting Information Flow Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="flowGrad1" x1="60" y1="120" x2="250" y2="250" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7C5CFF" stopOpacity="0.8" />
            <stop offset="1" stopColor="#38BDF8" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="flowGrad2" x1="250" y1="250" x2="440" y2="380" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7C5CFF" stopOpacity="0.3" />
            <stop offset="1" stopColor="#34D399" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Input to Core Curved Path */}
        <path
          d="M 90 140 C 160 140, 180 230, 240 245"
          stroke="url(#flowGrad1)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          className="flow-pulse-line opacity-60"
        />

        {/* Core to Output Curved Path */}
        <path
          d="M 260 255 C 320 270, 340 360, 410 360"
          stroke="url(#flowGrad2)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          className="flow-pulse-line opacity-60"
        />

        {/* Subtle Decorative Concentric Circuit Ring */}
        <circle
          cx="250"
          cy="250"
          r="110"
          stroke="#1B2835"
          strokeWidth="1"
          strokeDasharray="2 8"
          className="opacity-40"
        />
        <circle
          cx="250"
          cy="250"
          r="140"
          stroke="#1B2835"
          strokeWidth="1"
          strokeDasharray="1 12"
          className="opacity-30"
        />
      </svg>

      {/* 9.2 Staggered Floating Input Prompt Card (Top Left) */}
      <motion.div
        key={`input-${currentInput.text}`}
        initial={{ opacity: 0, x: -25, scale: 0.92 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 20, scale: 0.9 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="absolute top-4 left-2 sm:left-4 z-20"
      >
        <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-[#0D131C]/90 border border-[#1B2835] hover:border-[#7C5CFF]/60 shadow-xl backdrop-blur-md">
          <div
            className="w-7 h-7 rounded-xl flex items-center justify-center text-white"
            style={{ backgroundColor: `${currentInput.color}25` }}
          >
            <currentInput.icon className="w-3.5 h-3.5" style={{ color: currentInput.color }} />
          </div>
          <div>
            <div className="text-[9px] font-mono tracking-wider text-[#A8B3C2] uppercase flex items-center gap-1">
              <span>PROMPT_INPUT</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C5CFF] animate-ping" />
            </div>
            <div className="text-xs font-sans font-semibold text-[#F1F5F9]">
              &quot;{currentInput.text}&quot;
            </div>
          </div>
        </div>
      </motion.div>

      {/* 9.1 Central AI Processing Core */}
      <div className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-[#0D131C] border border-[#1B2835] p-5 shadow-2xl flex flex-col items-center justify-between overflow-hidden">
        {/* Inner Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,92,255,0.18)_0%,transparent_70%)] pointer-events-none" />

        {/* Top Processing State Bar */}
        <div className="w-full flex items-center justify-between text-[10px] font-mono text-[#A8B3C2] z-10 border-b border-[#1B2835]/80 pb-2">
          <span className="flex items-center gap-1.5">
            <Cpu className="w-3 h-3 text-[#7C5CFF]" />
            <span className="text-white font-semibold">AI_CORE_v2.6</span>
          </span>
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#16212D] text-[#38BDF8] border border-[#263747]">
            {corePhase.toUpperCase()}
          </span>
        </div>

        {/* Center Neural Processing Nodes Visual */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
          {/* Outer Pulsing Ring */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-full border border-[#7C5CFF]/40 shadow-[0_0_20px_rgba(124,92,255,0.2)]"
          />

          {/* Abstract Nodes Ring */}
          <div className="absolute inset-2 rounded-full border border-dashed border-[#1B2835]" />

          {/* Inner Chip Core */}
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#16212D] to-[#0A0F17] border border-[#7C5CFF]/60 flex flex-col items-center justify-center shadow-lg relative">
            <BrainCircuit className="w-7 h-7 text-[#7C5CFF]" />
            <span className="absolute -bottom-1 w-2 h-0.5 bg-[#38BDF8] rounded-full" />
          </div>

          {/* Staggered orbiting node indicators */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 flex items-start justify-center"
          >
            <span className="w-2 h-2 rounded-full bg-[#7C5CFF] shadow-[0_0_8px_#7C5CFF]" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 flex items-end justify-center"
          >
            <span className="w-2 h-2 rounded-full bg-[#38BDF8] shadow-[0_0_8px_#38BDF8]" />
          </motion.div>
        </div>

        {/* Bottom Status Feed */}
        <div className="w-full flex items-center justify-between text-[9px] font-mono text-[#718096] z-10 border-t border-[#1B2835]/80 pt-2">
          <span>LATENT: 512-DIM</span>
          <span className="text-[#34D399] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
            ACTIVE
          </span>
        </div>
      </div>

      {/* 9.5 Staggered Emerging Output Card (Bottom Right) */}
      <motion.div
        key={`output-${currentOutput.title}`}
        initial={{ opacity: 0, x: 25, scale: 0.92 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: -20, scale: 0.9 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="absolute bottom-4 right-2 sm:right-4 z-20"
      >
        <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#0D131C]/90 border border-[#1B2835] hover:border-[#38BDF8]/60 shadow-xl backdrop-blur-md">
          <div className="w-8 h-8 rounded-xl bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8]">
            <currentOutput.icon className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-sans font-bold text-[#F1F5F9]">
                {currentOutput.title}
              </span>
              <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-emerald-950/60 text-[#34D399] border border-[#34D399]/30">
                {currentOutput.badge}
              </span>
            </div>
            <div className="text-[10px] text-[#A8B3C2] font-sans mt-0.5">
              {currentOutput.desc}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Mini Context Badge (Top Right) */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="absolute top-10 right-4 sm:right-8 z-10 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#080C12]/80 border border-[#1B2835] text-[10px] font-mono text-[#A8B3C2]"
      >
        <Sparkles className="w-3 h-3 text-[#A78BFA]" />
        <span>CONTEXT: MULTI-MODAL</span>
      </motion.div>

      {/* Floating Career Growth Badge (Bottom Left) */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-10 left-4 sm:left-8 z-10 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#080C12]/80 border border-[#1B2835] text-[10px] font-mono text-[#38BDF8]"
      >
        <Database className="w-3 h-3" />
        <span>CAREER://DATA_PIPELINE</span>
      </motion.div>
    </div>
  );
}
