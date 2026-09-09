'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Database, Users, ArrowUpRight } from 'lucide-react';

export default function EventOverviewSection() {
  const cards = [
    {
      badge: 'Day 1 Focus · Oct 3, 2026',
      badgeColor: 'text-[#A78BFA] bg-[#7C5CFF]/10 border-[#7C5CFF]/30',
      icon: Brain,
      iconColor: 'text-[#7C5CFF]',
      title: 'GenAI: Zero to Hero',
      desc: 'Build your own functional AI applications from scratch. Master prompt engineering paradigms, system instructions, retrieval augmented generation (RAG) principles, and deployment workflows without needing complex math.',
    },
    {
      badge: 'Day 2 Focus · Oct 4, 2026',
      badgeColor: 'text-[#38BDF8] bg-[#38BDF8]/10 border-[#38BDF8]/30',
      icon: Database,
      iconColor: 'text-[#38BDF8]',
      title: 'Your Gateway to a Career in Data',
      desc: 'Master hands-on SQL query authoring, analytical thinking, relational modeling, and uncover high-demand data career pathways across tech, finance, product, and AI infrastructure teams.',
    },
    {
      badge: 'Interactive Experience',
      badgeColor: 'text-[#34D399] bg-emerald-950/40 border-emerald-500/30',
      icon: Sparkles,
      iconColor: 'text-[#34D399]',
      title: 'Why Prompt to Pro?',
      desc: 'Moving from AI consumers to AI builders. While theoretical classes cover concepts, this workshop gives you direct keyboard experience building portfolio-ready applications and verified academic certificates.',
    },
    {
      badge: 'Universal Eligibility',
      badgeColor: 'text-[#EABF55] bg-amber-950/40 border-amber-500/30',
      icon: Users,
      iconColor: 'text-[#EABF55]',
      title: 'Open for All Students',
      desc: 'Open for students of all years (1st, 2nd, 3rd, 4th Year) and all departments across Kalasalingam Academy of Research and Education. No prior AI or advanced coding background required.',
    },
  ];

  return (
    <section id="overview" className="py-16 sm:py-24 relative border-t border-[#1B2835]/80">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D131C] border border-[#1B2835] text-[#A78BFA] text-xs font-sans font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#7C5CFF]" />
            <span>Workshop Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#F1F5F9] tracking-tight">
            What is Prompt to Pro?
          </h2>
          <p className="text-sm sm:text-base text-[#A8B3C2] font-sans leading-relaxed">
            A two-day hands-on workshop designed to help students move from understanding AI and data concepts to building practical applications and developing career-ready skills.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="p-6 sm:p-7 rounded-2xl bg-[#0D131C] border border-[#1B2835] hover:border-[#263747] transition-all space-y-4 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold border ${card.badgeColor}`}>
                      {card.badge}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#111923] border border-[#1B2835] flex items-center justify-center group-hover:border-[#7C5CFF]/40 transition-colors">
                      <Icon className={`w-4 h-4 ${card.iconColor}`} />
                    </div>
                  </div>

                  <h3 className="text-lg font-sans font-bold text-[#F1F5F9] tracking-normal">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A8B3C2] font-sans leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
