'use client';

import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { motion } from 'framer-motion';
import AIChipAnimation from '@/components/animations/AIChipAnimation';
import { Sparkles, Calendar, Clock, MapPin, Award, ArrowRight, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
  const { data: session } = useSession();
  const isAdmin = (session?.user as any)?.role === 'admin';

  const metadataSpecs = [
    { icon: Calendar, text: '3rd & 4th October 2026' },
    { icon: Clock, text: '9:00 AM – 5:00 PM' },
    { icon: MapPin, text: '9th Block Seminar Hall' },
    { icon: Award, text: '2 Non-CGPA Group 3 Certificates' },
  ];

  return (
    <section className="relative pt-6 pb-14 md:pt-12 md:pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column (58-62%): Event Story, Headline, Details & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Association Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D131C] border border-[#1B2835] text-[#A78BFA] text-xs font-sans font-medium shadow-sm max-w-full">
              <Sparkles className="w-3.5 h-3.5 text-[#7C5CFF] shrink-0" />
              <span className="truncate">AKCE-KLU-KARE Alumni × School of Computing</span>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-black tracking-tight text-[#F1F5F9] leading-[1.08]">
                Prompt to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C5CFF] via-[#A78BFA] to-[#38BDF8]">
                  Pro
                </span>
              </h1>
              <p className="text-base sm:text-xl md:text-2xl font-sans font-semibold text-[#A8B3C2] tracking-normal">
                A 2-Day Hands-On Workshop
              </p>
            </div>

            {/* Event Story Supporting Line */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-xs sm:text-sm font-sans font-semibold tracking-wide text-[#38BDF8]">
              <span>Learn</span>
              <span className="text-[#718096]">•</span>
              <span>Build</span>
              <span className="text-[#718096]">•</span>
              <span>Grow</span>
              <span className="text-[#718096]">•</span>
              <span className="text-[#A78BFA]">Get Certified</span>
            </div>

            {/* 4 Metadata Specifications */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 pt-1">
              {metadataSpecs.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    title={item.text}
                    className="flex items-center justify-center lg:justify-start gap-1.5 sm:gap-2 p-2 sm:p-2.5 rounded-xl bg-[#0D131C] border border-[#1B2835] text-[11px] sm:text-xs font-sans font-medium text-[#F1F5F9] hover:border-[#263747] transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7C5CFF] shrink-0" />
                    <span className="truncate">{item.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Day 1 & Day 2 Quick Track Peek */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-left">
              <div className="p-3.5 rounded-xl bg-[#0D131C]/80 border border-[#1B2835]">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#A78BFA] font-bold">
                  DAY 1 · 3RD OCTOBER 2026
                </div>
                <div className="text-xs font-bold text-white mt-1">
                  GenAI: Zero to Hero
                </div>
                <div className="text-[11px] text-[#718096] mt-0.5">
                  Build Your Own Functional AI Applications
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0D131C]/80 border border-[#1B2835]">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#38BDF8] font-bold">
                  DAY 2 · 4TH OCTOBER 2026
                </div>
                <div className="text-xs font-bold text-white mt-1">
                  Your Gateway to a Career in Data
                </div>
                <div className="text-[11px] text-[#718096] mt-0.5">
                  SQL, Analytics, Careers & Industry Pathways
                </div>
              </div>
            </div>

            {/* Action Buttons & Fee Callout */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
              <Link href={session ? (isAdmin ? '/admin' : '/portal') : '/register'} className="w-full sm:w-auto">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#7C5CFF] to-[#6366F1] hover:from-[#6D4AE8] hover:to-[#4F46E5] text-white font-sans text-sm font-bold shadow-xl shadow-[#7C5CFF]/25 transition-all">
                  <span>{session ? (isAdmin ? 'Go to Admin Center' : 'Go to Participant Portal') : 'Register Now (₹200)'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>

              <a href="#overview" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0D131C] hover:bg-[#111923] border border-[#1B2835] hover:border-[#263747] text-[#F1F5F9] font-sans text-sm font-medium transition-all">
                  <BookOpen className="w-4 h-4 text-[#A8B3C2]" />
                  <span>Explore Workshop</span>
                </button>
              </a>
            </div>
          </motion.div>

          {/* Right Column (38-42%): Living AI Information Flow Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-5 flex items-center justify-center w-full"
          >
            <AIChipAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
