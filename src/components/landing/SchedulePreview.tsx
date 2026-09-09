'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, MapPin, Sparkles, Compass } from 'lucide-react';

const scheduleData = {
  day1: [
    {
      time: '09:00 AM – 10:30 AM',
      title: 'Foundations of Generative AI & Large Language Models',
      desc: 'Overview of modern AI models, transformer architectures, token mechanics, and the transition to prompt-driven development.',
      lead: 'GenAI Foundations Track',
    },
    {
      time: '10:45 AM – 01:00 PM',
      title: 'Advanced Prompt Engineering & Reasoning Frameworks',
      desc: 'Hands-on practice with few-shot prompting, chain-of-thought logic, system instructions, and structuring deterministic outputs.',
      lead: 'Prompt Engineering Lab',
    },
    {
      time: '01:00 PM – 02:00 PM',
      title: 'Networking & Lunch Break',
      desc: 'Informal discussions, mentor meetups, and team preparation for the afternoon hands-on build lab.',
      lead: 'Campus Break',
    },
    {
      time: '02:00 PM – 04:30 PM',
      title: 'Hands-On Lab: Building Your First Functional AI Application',
      desc: 'Connect frontier LLM APIs, structure UI state, implement real-time streaming, and deploy a live project to the web.',
      lead: 'AI Application Build Lab',
    },
    {
      time: '04:30 PM – 05:00 PM',
      title: 'Day 1 Wrap-up & Project Showcase',
      desc: 'Interactive review of participant applications, open debugging, and briefing for Sunday’s Data Track.',
      lead: 'Workshop Leads',
    },
  ],
  day2: [
    {
      time: '09:00 AM – 10:30 AM',
      title: 'SQL Fundamentals & Relational Data Mastery',
      desc: 'Relational database core concepts, schema architecture, writing structured SELECT queries, WHERE filters, and sorting.',
      lead: 'Data Architecture Track',
    },
    {
      time: '10:45 AM – 01:00 PM',
      title: 'Advanced SQL: Joins, Aggregations & Analytical Thinking',
      desc: 'Multi-table INNER/LEFT joins, GROUP BY, aggregations, window functions, and solving simulated business data challenges.',
      lead: 'Data Analytics Lab',
    },
    {
      time: '01:00 PM – 02:00 PM',
      title: 'Networking & Lunch Break',
      desc: 'Peer discussions, portfolio reviews, and preparation for the industry careers session.',
      lead: 'Campus Break',
    },
    {
      time: '02:00 PM – 04:00 PM',
      title: 'Data Career Pathways, Portfolios & Tech Industry Insights',
      desc: 'Exploring roles across Data Analytics, Data Engineering, and Applied AI. Proven GitHub portfolio frameworks and interview strategies.',
      lead: 'Career & Industry Track',
    },
    {
      time: '04:00 PM – 05:00 PM',
      title: 'Capstone Wrap-Up & Certificate Distribution',
      desc: 'Final Q&A, verification of 2 Non-CGPA Group 3 Certificates, and closing addresses from alumni organizers.',
      lead: 'Organizing Committee',
    },
  ],
};

export default function SchedulePreview() {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1');

  return (
    <section id="schedule" className="py-20 sm:py-28 relative border-t border-[#1B2835]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7C5CFF]/10 border border-[#7C5CFF]/30 text-[#A78BFA] text-xs font-medium">
            <Calendar className="w-3.5 h-3.5" />
            <span>Interactive 2-Day Timeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Workshop Schedule
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-400 pt-1 font-sans">
            <span className="flex items-center gap-1.5 text-white">
              <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" /> October 3 – 4, 2026
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5 text-white">
              <Clock className="w-3.5 h-3.5 text-[#7C5CFF]" /> 9:00 AM – 5:00 PM IST
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5 text-white">
              <MapPin className="w-3.5 h-3.5 text-[#C9A45A]" /> 9th Block Seminar Hall
            </span>
          </div>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex justify-center mb-10 w-full px-2">
          <div className="flex flex-col sm:flex-row w-full sm:w-auto p-1.5 rounded-2xl bg-[#0D131C] border border-[#1B2835] gap-1.5 sm:gap-0">
            <button
              onClick={() => setActiveDay('day1')}
              className={`w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 text-center ${
                activeDay === 'day1'
                  ? 'bg-gradient-to-r from-[#7C5CFF] to-[#6366F1] text-white shadow-md shadow-[#7C5CFF]/20 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              DAY 1 : GenAI: Zero to Hero (Oct 3)
            </button>
            <button
              onClick={() => setActiveDay('day2')}
              className={`w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 text-center ${
                activeDay === 'day2'
                  ? 'bg-gradient-to-r from-[#0284C7] to-[#38BDF8] text-white shadow-md shadow-[#38BDF8]/20 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              DAY 2 : Gateway to Career in Data (Oct 4)
            </button>
          </div>
        </div>

        {/* Timeline Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {scheduleData[activeDay].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06 }}
              className="p-5 sm:p-6 rounded-2xl bg-[#0D131C] border border-[#1B2835] hover:border-[#263747] transition-all flex flex-col sm:flex-row items-start gap-4 sm:gap-5 shadow-sm"
            >
              <div className="w-full sm:w-48 shrink-0 font-mono text-xs text-[#38BDF8] flex items-center gap-2 bg-[#111923] px-3.5 py-2 rounded-xl border border-[#1B2835]">
                <Clock className="w-3.5 h-3.5 shrink-0 text-[#7C5CFF]" />
                <span>{item.time}</span>
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-base font-semibold text-white">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                  {item.desc}
                </p>
                <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5 pt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C5CFF]"></span>
                  <span className="text-slate-400">{item.lead}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

