'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Building2, GraduationCap, Award } from 'lucide-react';

export default function OrganizerBrandingSection() {
  return (
    <section id="organizers" className="py-20 sm:py-28 relative bg-[#080C12] border-t border-[#1B2835]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 bg-[#0D131C] border border-[#1B2835] flex flex-col md:flex-row items-center gap-6 sm:gap-8 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Radial */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#7C5CFF]/5 blur-3xl pointer-events-none rounded-full" />

          {/* Official Logo Container - Preserving existing logo */}
          <div className="relative shrink-0">
            <img
              src="/association-logo.jpeg"
              alt="Association Crest"
              className="w-24 h-24 sm:w-32 md:w-36 sm:h-32 md:h-36 rounded-full object-contain filter drop-shadow-[0_0_24px_rgba(124,92,255,0.3)] ring-2 ring-[#7C5CFF]/40 bg-[#080C12]"
            />
            <span className="absolute bottom-1 right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-emerald-400 border-2 border-[#0D131C]" />
          </div>

          {/* Organizer Information */}
          <div className="space-y-3.5 text-center md:text-left flex-1 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7C5CFF]/10 border border-[#7C5CFF]/30 text-[#A78BFA] text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Academic & Alumni Initiative</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
              Kalasalingam Academy of Research and Education
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              Presented in joint association by <span className="text-white font-medium">AKCE-KLU-KARE Alumni</span>, the <span className="text-white font-medium">School of Computing</span>, and the <span className="text-white font-medium">Soft Computing Research Society (SCRS)</span> to empower university students with modern applied AI engineering and foundational data capabilities.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 text-xs text-slate-400 font-sans">
              <span className="flex items-center gap-1.5 text-slate-300">
                <GraduationCap className="w-4 h-4 text-[#38BDF8]" /> School of Computing
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Award className="w-4 h-4 text-[#C9A45A]" /> AKCE-KLU-KARE Alumni Network
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

