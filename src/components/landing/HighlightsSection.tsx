'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Laptop,
  Code2,
  Cpu,
  Database,
  Compass,
  FolderGit2,
  Users2,
  Award,
  Sparkles,
} from 'lucide-react';

const highlights = [
  {
    icon: Laptop,
    text: 'Live Interactive Labs',
    desc: 'Hands-on prompt crafting and code execution in live environments',
  },
  {
    icon: Code2,
    text: 'Real-World AI Projects',
    desc: 'Build functional GenAI applications from conception to deployment',
  },
  {
    icon: Cpu,
    text: 'Frontier AI Stack',
    desc: 'Experience modern LLM APIs, prompt frameworks, and vector search',
  },
  {
    icon: Database,
    text: 'SQL & Analytics Practice',
    desc: 'Direct query writing and dataset exploration with instant feedback',
  },
  {
    icon: Compass,
    text: 'Career & Domain Guidance',
    desc: 'Clear pathways into Data Engineering, Analytics, and AI roles',
  },
  {
    icon: FolderGit2,
    text: 'Portfolio-Ready Assets',
    desc: 'Tangible projects and code repositories to feature on your resume',
  },
  {
    icon: Users2,
    text: 'Alumni & Peer Mentorship',
    desc: 'Direct guidance from senior computing practitioners and alumni',
  },
  {
    icon: Award,
    text: '2 Non-CGPA Group 3 Certificates',
    desc: 'Group 3 institutional accreditation verified for your record',
  },
];

export default function HighlightsSection() {
  return (
    <section id="highlights" className="py-20 sm:py-24 relative bg-[#080C12] border-t border-[#1B2835]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Attend Prompt to Pro</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Workshop Highlights
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-sans max-w-xl mx-auto">
            Everything you need to accelerate your technical skills, create verifiable projects, and earn academic credits.
          </p>
        </div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {highlights.map((h, idx) => {
            const Icon = h.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: idx * 0.04, duration: 0.35 }}
                whileHover={{ y: -3 }}
                className="p-5 rounded-2xl bg-[#0D131C] border border-[#1B2835] hover:border-[#38BDF8]/40 transition-all duration-300 space-y-2 group shadow-sm hover:shadow-[#38BDF8]/5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#111923] border border-[#1B2835] group-hover:border-[#38BDF8]/40 text-[#38BDF8] flex items-center justify-center shrink-0 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-white group-hover:text-[#38BDF8] transition-colors leading-snug">
                    {h.text}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-0 sm:pl-12 pt-1 sm:pt-0 font-sans">
                  {h.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

