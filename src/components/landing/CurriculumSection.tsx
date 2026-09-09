'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Database, Code2, LineChart, Terminal } from 'lucide-react';

const modules = [
  {
    day: 'DAY 1 // MORNING',
    icon: Sparkles,
    title: 'Generative AI Foundations & Architecture',
    topics: [
      'Evolution of LLMs and core transformer mechanics',
      'Prompt structuring, few-shot prompting & system instruction design',
      'Context windows, tokens, temperature, and hallucination reduction',
      'Hands-on prompt laboratory with multi-modal AI systems',
    ],
  },
  {
    day: 'DAY 1 // AFTERNOON',
    icon: Code2,
    title: 'Hands-on AI Application Development',
    topics: [
      'Building automated AI workflows with API integrations',
      'Zero-code to code: translating business logic to working prototypes',
      'Developing personalized assistants and intelligent productivity tools',
      'Deployment walkthrough: launching your first AI utility',
    ],
  },
  {
    day: 'DAY 2 // MORNING',
    icon: Database,
    title: 'SQL Fundamentals & Relational Querying',
    topics: [
      'Relational database architecture & schema navigation',
      'Mastering SELECT, WHERE, GROUP BY, and Aggregations',
      'Advanced multi-table INNER, LEFT, and RIGHT JOINs',
      'Writing analytical queries on industry transaction datasets',
    ],
  },
  {
    day: 'DAY 2 // AFTERNOON',
    icon: LineChart,
    title: 'Data Analytics, Insights & Career Pathways',
    topics: [
      'Transforming raw database records into strategic business metrics',
      'Interactive dashboards & visual narrative generation',
      'The modern data tech stack: Roles, roadmaps & compensation tiers',
      'Portfolio strategy: Showcasing projects that hire',
    ],
  },
];

export default function CurriculumSection() {
  return (
    <section id="curriculum" className="py-20 sm:py-28 relative bg-[#080C12]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7C5CFF]/10 border border-[#7C5CFF]/30 text-[#A78BFA] text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Curriculum</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Workshop Curriculum
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-sans">
            A step-by-step pathway from generative AI fundamentals and app building to relational SQL querying and data analytics.
          </p>
        </div>

        {/* 4 Module Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {modules.map((mod, idx) => {
            const Icon = mod.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -3 }}
                className="p-8 rounded-3xl bg-[#0D131C] border border-[#1B2835] hover:border-[#7C5CFF]/40 transition-all duration-300 space-y-5 shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-[#38BDF8] tracking-wider">
                    {mod.day}
                  </span>
                  <div className="p-2.5 rounded-xl bg-[#111923] border border-[#1B2835] text-[#A78BFA]">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl font-serif font-bold text-white tracking-tight">
                  {mod.title}
                </h3>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400 font-sans">
                  {mod.topics.map((t, tidx) => (
                    <li key={tidx} className="flex items-start gap-2.5">
                      <span className="text-[#38BDF8] mt-1">›</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

