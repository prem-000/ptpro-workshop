'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  MapPin,
  CreditCard,
  Award,
  GraduationCap,
  Layers,
  Users,
  Sparkles,
} from 'lucide-react';

export default function EventSpecsSection() {
  const specCards = [
    {
      icon: Layers,
      label: 'EVENT TYPE',
      value: '2-Day Hands-On Workshop',
      highlight: 'Intensive Practical Lab',
    },
    {
      icon: Calendar,
      label: 'WORKSHOP DATES',
      value: '3rd & 4th October 2026',
      highlight: 'Saturday & Sunday',
    },
    {
      icon: Clock,
      label: 'SESSION TIMINGS',
      value: '9:00 AM – 5:00 PM (IST)',
      highlight: 'Full-Day Interactive Experience',
    },
    {
      icon: MapPin,
      label: 'VENUE',
      value: '9th Block Seminar Hall',
      highlight: 'On Campus, KARE',
    },
    {
      icon: CreditCard,
      label: 'REGISTRATION FEE',
      value: '₹200/- Flat',
      highlight: 'All-Inclusive Workshop Access',
    },
    {
      icon: Users,
      label: 'TOTAL SLOTS',
      value: '200 Seats Only',
      highlight: 'First-Come, First-Served',
    },
    {
      icon: Award,
      label: 'ACADEMIC CREDITS',
      value: '2 Non-CGPA Group 3 Certificates',
      highlight: 'Group 3 Accreditation',
    },
    {
      icon: GraduationCap,
      label: 'ELIGIBILITY',
      value: 'All Years & Departments',
      highlight: 'Open to 1st, 2nd, 3rd, 4th Year',
    },
  ];

  return (
    <section id="specs" className="py-16 sm:py-24 relative border-t border-[#1B2835]/80">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D131C] border border-[#1B2835] text-[#A78BFA] text-xs font-sans font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#7C5CFF]" />
            <span>Event Logistics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#F1F5F9] tracking-tight">
            Workshop Specifications
          </h2>
          <p className="text-sm sm:text-base text-[#A8B3C2] font-sans">
            Key academic parameters, timings, and campus venue details.
          </p>
        </div>

        {/* Spec Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {specCards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="p-5 rounded-2xl bg-[#0D131C] border border-[#1B2835] hover:border-[#263747] transition-all flex items-start gap-3.5"
              >
                <div className="p-3 rounded-xl bg-[#111923] border border-[#1B2835] text-[#7C5CFF] shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1 min-w-0 flex-1 font-sans">
                  <div className="text-[10px] text-[#718096] uppercase tracking-wider font-mono font-bold">
                    {item.label}
                  </div>
                  <div className="text-sm font-bold text-[#F1F5F9] leading-snug">
                    {item.value}
                  </div>
                  <div className="text-[11px] text-[#38BDF8] font-medium">
                    {item.highlight}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
