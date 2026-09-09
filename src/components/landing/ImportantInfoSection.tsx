'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  CreditCard,
  Calendar,
  GraduationCap,
  Award,
  QrCode,
  Info,
} from 'lucide-react';

const infoItems = [
  {
    icon: FileText,
    title: 'Registration Steps',
    desc: 'Sign in with your university Google account, complete your academic profile (registration number, department, year), and proceed to secure your seat.',
  },
  {
    icon: CreditCard,
    title: 'Payment Verification',
    desc: 'Pay ₹200 via UPI (GPay, PhonePe, Paytm, etc.) using the official QR code and submit your payment screenshot with the 12-digit UTR transaction reference.',
  },
  {
    icon: Calendar,
    title: 'Seat Allocation Deadline',
    desc: 'Admissions are handled on a first-come, first-served basis and close once hall capacity is filled or by October 2, 2026.',
  },
  {
    icon: GraduationCap,
    title: 'Eligibility & Requirements',
    desc: 'Open to students from all years (1st, 2nd, 3rd & 4th year) and all departments. Please bring a charged laptop with Wi-Fi access for hands-on labs.',
  },
  {
    icon: Award,
    title: '2 Non-CGPA Group 3 Certificates',
    desc: 'Eligible students will receive 2 Non-CGPA Group 3 Certificates upon active participation and attendance across both workshop days.',
  },
  {
    icon: QrCode,
    title: 'Digital QR Attendance',
    desc: 'Check-in at the 9th Block Seminar Hall will be recorded seamlessly using your personal digital QR pass from the Participant Portal.',
  },
];

export default function ImportantInfoSection() {
  return (
    <section id="guidelines" className="py-20 sm:py-28 relative border-t border-[#1B2835]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7C5CFF]/10 border border-[#7C5CFF]/30 text-[#A78BFA] text-xs font-medium">
            <Info className="w-3.5 h-3.5" />
            <span>Essential Guidelines</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Important Information
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-sans max-w-xl mx-auto">
            Review key requirements, payment verification steps, and academic credit eligibility before registering.
          </p>
        </div>

        {/* 6 Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {infoItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.35 }}
                className="p-6 rounded-2xl bg-[#0D131C] border border-[#1B2835] hover:border-[#263747] transition-all duration-200 space-y-3 shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#111923] border border-[#1B2835] text-[#38BDF8] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed pt-1">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

