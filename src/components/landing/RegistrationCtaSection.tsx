'use client';

import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function RegistrationCtaSection() {
  const { data: session } = useSession();
  const isAdmin = (session?.user as any)?.role === 'admin';

  return (
    <section id="register" className="py-20 sm:py-28 relative overflow-hidden bg-[#080C12] border-t border-[#1B2835]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 bg-gradient-to-b from-[#0D131C] to-[#111923] border border-[#1B2835] text-center max-w-4xl mx-auto space-y-6 overflow-hidden shadow-2xl"
        >
          {/* Subtle Ambient Background Gradient */}
          <div className="absolute inset-0 bg-radial from-[#7C5CFF]/10 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7C5CFF]/10 border border-[#7C5CFF]/30 text-[#A78BFA] text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#7C5CFF]" />
              <span>Limited Seat Availability</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Transform Your AI & Data Journey
            </h2>

            <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed font-sans">
              Secure your seat in Prompt to Pro. Join us on October 3–4, 2026 at 9th Block Seminar Hall. Learn, build practical applications, and earn 2 Non-CGPA Group 3 Certificates.
            </p>
          </div>

          <div className="relative z-10 pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={session ? (isAdmin ? '/admin' : '/portal') : '/register'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#7C5CFF] to-[#6366F1] text-white font-semibold text-base shadow-lg shadow-[#7C5CFF]/25 hover:shadow-xl hover:shadow-[#7C5CFF]/35 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>{session ? (isAdmin ? 'Go to Admin Console' : 'Open Participant Portal') : 'Register Now (₹200)'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Guarantee Pills */}
          <div className="relative z-10 pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 border-t border-[#1B2835]/80 font-sans">
            <span className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-[#7C5CFF]" /> 2 Non-CGPA Group 3 Certificates
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" /> Flat ₹200 Registration Fee
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Instant QR Pass Generation
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

