'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Timer } from 'lucide-react';

export default function RegistrationCountdown() {
  const [targetDate, setTargetDate] = useState(new Date('2026-10-03T09:00:00+05:30').getTime());

  useEffect(() => {
    async function loadTarget() {
      try {
        const res = await fetch('/api/event-stats');
        const data = await res.json();
        if (data.success && data.stats?.countdownTarget) {
          setTargetDate(new Date(data.stats.countdownTarget).getTime());
        }
      } catch (e) {
        // use default
      }
    }
    loadTarget();
  }, []);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = Date.now();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="py-20 sm:py-24 relative border-t border-[#1B2835]">
      <div className="container mx-auto px-4">
        <div className="w-full max-w-4xl mx-auto rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 bg-gradient-to-b from-[#0D131C] to-[#080C12] border border-[#1B2835] text-center space-y-6 sm:space-y-8 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#7C5CFF]/10 blur-3xl pointer-events-none rounded-full" />

          {/* Header */}
          <div className="space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7C5CFF]/10 border border-[#7C5CFF]/30 text-[#A78BFA] text-xs font-medium">
              <Timer className="w-3.5 h-3.5 animate-pulse text-[#7C5CFF]" />
              <span>Workshop Launch Countdown</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
              Event Commences In
            </h3>
            <p className="text-xs sm:text-sm font-sans text-slate-400 max-w-md mx-auto">
              October 3, 2026 • 9th Block Seminar Hall • Kalasalingam University
            </p>
          </div>

          {/* 4 Digit Boxes */}
          <div suppressHydrationWarning className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto pt-2 relative z-10">
            {timeUnits.map((u, idx) => (
              <motion.div
                key={u.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#111923]/90 border border-[#1B2835] hover:border-[#7C5CFF]/40 transition-colors flex flex-col items-center justify-center space-y-1 shadow-inner"
              >
                <span suppressHydrationWarning className="text-2xl sm:text-4xl md:text-5xl font-mono font-bold text-white tracking-tight">
                  {String(u.value).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#38BDF8] uppercase font-semibold">
                  {u.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
