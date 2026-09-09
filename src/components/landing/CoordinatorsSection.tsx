'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, User, Users } from 'lucide-react';

export interface LandingCoordinator {
  name: string;
  role: string;
  department: string;
  phone: string;
  whatsappUrl?: string;
  callUrl?: string;
}

const DEFAULT_COORDINATORS: LandingCoordinator[] = [
  {
    name: 'Sai Dhanush',
    role: 'Student Technical Lead',
    department: 'School of Computing / 3rd Year',
    phone: '+91 93812 76836',
    whatsappUrl: 'https://wa.me/919381276836?text=Hi%20Sai%20Dhanush,%20I%20have%20a%20query%20about%20the%20Prompt%20to%20Pro%20Workshop.',
    callUrl: 'tel:+919381276836',
  },
  {
    name: 'Rahul',
    role: 'Student Operations Lead',
    department: 'School of Computing / 3rd Year',
    phone: '+91 95153 92839',
    whatsappUrl: 'https://wa.me/919515392839?text=Hi%20Rahul,%20I%20have%20a%20query%20about%20the%20Prompt%20to%20Pro%20Workshop.',
    callUrl: 'tel:+919515392839',
  },
];

export default function CoordinatorsSection() {
  const [coordinators, setCoordinators] = useState<LandingCoordinator[]>(DEFAULT_COORDINATORS);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/event-stats');
        const data = await res.json();
        if (data.success && data.stats?.coordinators && Array.isArray(data.stats.coordinators) && data.stats.coordinators.length > 0) {
          setCoordinators(data.stats.coordinators);
        }
      } catch (e) {
        // use default fallback
      }
    }
    load();
  }, []);

  return (
    <section id="contact" className="py-20 sm:py-28 relative border-t border-[#1B2835]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7C5CFF]/10 border border-[#7C5CFF]/30 text-[#A78BFA] text-xs font-medium">
            <Users className="w-3.5 h-3.5" />
            <span>Student Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Event Coordinators
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-sans">
            Have questions regarding registrations, schedule details, or workshop preparation? Reach out directly.
          </p>
        </div>

        {/* Coordinators Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {coordinators.map((c, idx) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.35 }}
              whileHover={{ y: -3 }}
              className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0D131C] border border-[#1B2835] hover:border-[#7C5CFF]/40 transition-all duration-300 space-y-6 text-center flex flex-col justify-between shadow-lg"
            >
              <div className="space-y-4">
                {/* Avatar Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-[#111923] border border-[#1B2835] text-[#38BDF8] flex items-center justify-center shadow-inner">
                  <User className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-white tracking-tight">{c.name}</h3>
                  <p className="text-xs font-mono font-medium text-[#7C5CFF] uppercase tracking-wider">{c.role}</p>
                  <p className="text-xs text-slate-400 font-sans">{c.department}</p>
                </div>

                <div className="text-sm font-mono font-medium text-slate-300 pt-1">
                  {c.phone}
                </div>
              </div>

              {/* Action Buttons */}
              {(() => {
                const cleanDigits = (c.phone || '').replace(/\D/g, '');
                const phoneNum = cleanDigits.length === 10 ? '91' + cleanDigits : cleanDigits;
                let waLink = (c.whatsappUrl || '').trim();

                if (!waLink || /nextgen|soc|bootcamp/i.test(waLink) || !waLink.includes('Prompt')) {
                  waLink = `https://wa.me/${phoneNum}?text=Hi%20${encodeURIComponent(c.name || 'Coordinator')},%20I%20have%20a%20query%20about%20the%20Prompt%20to%20Pro%20Workshop.`;
                }

                const telLink = c.callUrl || `tel:${(c.phone || '').replace(/\s+/g, '')}`;

                return (
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-2">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 text-xs font-semibold transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>

                    <a
                      href={telLink}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#111923] border border-[#1B2835] text-slate-200 hover:text-white hover:border-[#38BDF8]/40 text-xs font-semibold transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Now</span>
                    </a>
                  </div>
                );
              })()}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

