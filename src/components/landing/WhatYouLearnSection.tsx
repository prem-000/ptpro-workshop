'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Brain,
  Code2,
  Workflow,
  Database,
  BarChart3,
  Compass,
  Briefcase,
  ArrowRight,
} from 'lucide-react';

const learningModules = [
  {
    icon: Sparkles,
    badge: 'CORE AI',
    title: 'Prompt Engineering',
    desc: 'Master multi-turn prompt architectures, few-shot conditioning, chain-of-thought reasoning, and precision context steering.',
  },
  {
    icon: Brain,
    badge: 'FOUNDATIONS',
    title: 'Generative AI Fundamentals',
    desc: 'Understand transformer models, latent vector spaces, embeddings, token economics, and how frontier LLMs process information.',
  },
  {
    icon: Code2,
    badge: 'APPLICATION',
    title: 'Building AI Applications',
    desc: 'Build functional AI-powered web tools from scratch by connecting APIs, structuring state, and creating clean user experiences.',
  },
  {
    icon: Workflow,
    badge: 'SYSTEMS',
    title: 'AI Workflow Design',
    desc: 'Architect Retrieval-Augmented Generation (RAG) flows, AI agent tool calling, and automated data pipelines for practical tasks.',
  },
  {
    icon: Database,
    badge: 'DATA BASELINE',
    title: 'SQL Fundamentals',
    desc: 'Write structured database queries, master multi-table joins, aggregations, schema design, and core relational data operations.',
  },
  {
    icon: BarChart3,
    badge: 'ANALYTICS',
    title: 'Data Analysis & Insights',
    desc: 'Extract actionable intelligence from raw data, calculate key business metrics, and communicate quantitative findings with clarity.',
  },
  {
    icon: Compass,
    badge: 'ROADMAP',
    title: 'Data Career Pathways',
    desc: 'Explore career specializations across Data Analytics, Data Engineering, AI Product Management, and Applied Machine Learning.',
  },
  {
    icon: Briefcase,
    badge: 'PORTFOLIO',
    title: 'Industry Opportunities',
    desc: 'Curate high-impact resume projects, build public GitHub showcases, and navigate real-world technical interview workflows.',
  },
];

export default function WhatYouLearnSection() {
  return (
    <section id="workshop" className="py-20 sm:py-28 relative border-t border-[#1B2835]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7C5CFF]/10 border border-[#7C5CFF]/30 text-[#A78BFA] text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive 2-Day Curriculum</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            What You Will Learn
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-sans max-w-2xl mx-auto">
            From crafting precision AI prompts to building production-ready apps and mastering analytical SQL data queries.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {learningModules.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-[#0D131C] border border-[#1B2835] hover:border-[#7C5CFF]/50 transition-all duration-300 space-y-4 flex flex-col justify-between group shadow-lg hover:shadow-[#7C5CFF]/5"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-[#111923] border border-[#1B2835] group-hover:border-[#7C5CFF]/40 text-[#7C5CFF] group-hover:text-[#38BDF8] flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-white group-hover:text-[#38BDF8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#1B2835]/60 text-[11px] font-mono text-slate-400 group-hover:text-[#A78BFA] flex items-center justify-between transition-colors">
                  <span>MODULE 0{idx + 1}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

