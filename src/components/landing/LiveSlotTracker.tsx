'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, RefreshCw, CheckCircle2, AlertCircle } from 'lucide-react';

export default function LiveSlotTracker() {
  const [stats, setStats] = useState({
    totalRegistered: 0,
    totalCapacity: 200,
    paymentsVerified: 0,
    paymentsPending: 0,
    registrationOpen: true,
  });
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [mounted, setMounted] = useState(false);

  const fetchStats = async () => {
    try {
      const res = await fetch('/api/event-stats');
      const data = await res.json();
      if (data.success && data.stats) {
        setStats({
          totalRegistered: data.stats.totalRegistered || 0,
          totalCapacity: data.stats.totalCapacity || 200,
          paymentsVerified: data.stats.paymentsVerified || 0,
          paymentsPending: data.stats.paymentsPending || 0,
          registrationOpen: data.stats.registrationOpen ?? true,
        });
        setLastUpdated(new Date());
      }
    } catch (e) {
      console.error('Failed to fetch event stats:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setMounted(true);
    fetchStats();

    let eventSource: EventSource | null = null;
    try {
      eventSource = new EventSource('/api/realtime');
      eventSource.onmessage = (e) => {
        try {
          const payload = JSON.parse(e.data);
          if (payload.event === 'registration:countUpdated') {
            fetchStats();
          }
        } catch (err) {
          // ignore
        }
      };
    } catch (err) {
      // ignore
    }

    const interval = setInterval(fetchStats, 30000);

    return () => {
      clearInterval(interval);
      if (eventSource) eventSource.close();
    };
  }, []);

  const totalPercent = Math.min(
    100,
    Math.round((stats.totalRegistered / (stats.totalCapacity || 200)) * 100)
  );

  const remaining = Math.max(0, stats.totalCapacity - stats.totalRegistered);
  const isOpen = stats.registrationOpen && stats.totalRegistered < stats.totalCapacity;

  return (
    <section id="seats" className="py-12 sm:py-16 relative border-t border-[#1B2835]/80">
      <div className="container mx-auto px-4">
        <div className="w-full max-w-3xl mx-auto rounded-2xl bg-[#0D131C] border border-[#1B2835] p-5 sm:p-8 shadow-xl">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#1B2835]">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#7C5CFF]/10 border border-[#7C5CFF]/30 text-[#A78BFA] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono font-medium text-[#A8B3C2] uppercase tracking-wider">
                  Registration Capacity
                </div>
                <div className="flex items-center gap-2.5 mt-0.5">
                  <h3 className="text-base sm:text-lg font-sans font-bold text-[#F1F5F9]">
                    Live Seat Availability
                  </h3>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-sans font-semibold uppercase flex items-center gap-1 ${
                      isOpen
                        ? 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-400'
                        : 'bg-red-950/60 border border-red-500/40 text-red-400'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-red-400'}`} />
                    {isOpen ? 'Registration Open' : 'Seats Full'}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={fetchStats}
              title="Refresh live count"
              className="flex items-center gap-1.5 text-xs font-sans text-[#A8B3C2] hover:text-white bg-[#111923] px-3 py-1.5 rounded-lg border border-[#1B2835] hover:border-[#263747] transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-[#7C5CFF]' : ''}`} />
              <span>Refresh</span>
            </button>
          </div>

          {/* Seat Numbers & Progress Gauge */}
          <div className="mt-6 space-y-3.5">
            <div className="flex items-baseline justify-between font-sans">
              <div className="text-xs text-[#A8B3C2]">
                Confirmed Participants
              </div>
              <div className="text-right">
                <span className="text-2xl sm:text-3xl font-bold font-sans text-white">
                  {stats.totalRegistered}
                </span>
                <span className="text-xs text-[#718096]"> / {stats.totalCapacity} Total Seats</span>
                <span className="ml-2 text-xs font-semibold text-[#A78BFA]">({totalPercent}%)</span>
              </div>
            </div>

            {/* Neutral Track with Purple-Cyan Fill */}
            <div className="h-3 w-full rounded-full bg-[#111923] border border-[#1B2835] overflow-hidden p-0.5">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${totalPercent}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="h-full rounded-full bg-gradient-to-r from-[#7C5CFF] via-[#A78BFA] to-[#38BDF8]"
              />
            </div>

            {/* Remaining Seats & Fee Specification */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1.5 text-xs font-sans text-[#A8B3C2] pt-1">
              <span className="font-semibold text-white">
                Registration Fee: <span className="text-[#38BDF8]">₹200/-</span> (Flat)
              </span>
              <span className="text-[#34D399] font-medium">
                {remaining} seats currently available
              </span>
            </div>
          </div>

          {/* Last Updated */}
          <div
            suppressHydrationWarning
            className="mt-6 pt-4 border-t border-[#1B2835] text-[11px] font-sans text-[#718096] text-center"
          >
            {mounted ? `Status updated at ${lastUpdated.toLocaleTimeString()}` : 'Connecting live seat tracker...'}
          </div>
        </div>
      </div>
    </section>
  );
}
