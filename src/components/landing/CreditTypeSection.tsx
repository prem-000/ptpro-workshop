'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Award, Check, ArrowRight, Sparkles, BookOpen } from 'lucide-react';

export default function CreditTypeSection() {
  const highlights = [
    '2 Official Non-CGPA Group 3 Certificates issued upon completion',
    'Hands-on GenAI application building with modern frameworks',
    'SQL querying, relational modeling & real-world data analytics',
    'Direct mentorship from industry alumni and School of Computing faculty',
    'Open to all academic branches & all years (1st through 4th Year)',
    'Portfolio project code and repository documentation to take home',
  ];

  return (
    <section id="tracks" className="py-16 sm:py-24 relative border-t border-[#1B2835]/80">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D131C] border border-[#1B2835] text-[#A78BFA] text-xs font-sans font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#7C5CFF]" />
            <span>Academic Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#F1F5F9] tracking-tight">
            Certifications & Eligibility
          </h2>
          <p className="text-sm sm:text-base text-[#A8B3C2] font-sans">
            Group 3 Non-CGPA accreditation details and student participation criteria.
          </p>
        </div>

        {/* Unified Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto rounded-2xl p-6 sm:p-9 bg-[#0D131C] border border-[#1B2835] shadow-xl"
        >
          {/* Top Tag */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#7C5CFF]/15 border border-[#7C5CFF]/30 text-[#A78BFA] font-sans text-xs font-bold">
              <Award className="w-4 h-4" />
              <span>2 Non-CGPA Group 3 Certificates</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#38BDF8] bg-[#38BDF8]/10 px-2.5 py-1 rounded border border-[#38BDF8]/20">
                200 SEATS
              </span>
              <span className="text-xs font-mono text-[#34D399] bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-500/30">
                ALL DEPARTMENTS
              </span>
            </div>
          </div>

          {/* Title & Fee */}
          <div className="space-y-3 mb-6">
            <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#F1F5F9]">
              Prompt to Pro Workshop
            </h3>
            <p className="text-xs sm:text-sm font-sans text-[#A8B3C2]">
              Organized by Kalasalingam Academy of Research and Education in association with School of Computing & AKCE-KLU-KARE Alumni.
            </p>

            <div className="flex items-baseline gap-2 pt-2 pb-4 border-b border-[#1B2835]">
              <span className="text-4xl sm:text-5xl font-bold font-sans text-white">₹200</span>
              <span className="text-xs font-sans text-[#718096]">/ flat registration fee</span>
            </div>
          </div>

          {/* Non-CGPA Detail Box */}
          <div className="mb-6 p-4 rounded-xl bg-[#111923] border border-[#1B2835]">
            <div className="text-[10px] font-mono font-bold text-[#A78BFA] uppercase tracking-wider mb-2">
              ACADEMIC CERTIFICATION
            </div>
            <p className="text-xs sm:text-sm font-sans text-[#A8B3C2] leading-relaxed">
              Participants receive <strong className="text-white">2 Non-CGPA Group 3 Certificates</strong> formally recognized under university activity credits. Certificates are verifiable online through the SCRS Participant Portal.
            </p>
          </div>

          {/* What's Included List */}
          <ul className="space-y-3 text-xs sm:text-sm font-sans text-[#A8B3C2] mb-8">
            {highlights.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>

          {/* Register Button */}
          <Link href="/register" className="block">
            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-[#7C5CFF] to-[#6366F1] hover:from-[#6D4AE8] hover:to-[#4F46E5] text-white font-sans text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#7C5CFF]/20 transition-all">
              <span>Register Now — ₹200</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
