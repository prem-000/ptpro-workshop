'use client';

import React from 'react';
import Link from 'next/link';
import { RegistrationData } from '@/types';
import { Bell, Calendar } from 'lucide-react';

interface Props {
  registration: RegistrationData;
}

export default function ParticipantHeader({ registration }: Props) {
  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-[#0D131C] border border-[#1B2835] shadow-xl space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#1B2835]">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7C5CFF] to-[#38BDF8] flex items-center justify-center text-white text-xl font-bold font-serif shadow-lg">
            {registration.name.charAt(0).toUpperCase()}
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <h1 className="text-xl sm:text-2xl font-serif font-bold text-white">
                {registration.name}
              </h1>
              <span className="px-2.5 py-0.5 rounded-full bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/30 font-mono text-[10px] font-semibold">
                PARTICIPANT
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-sans">
              <span>{registration.email}</span>
              <span>•</span>
              <span className="text-[#38BDF8] font-mono font-medium">{registration.registrationId}</span>
            </div>
          </div>
        </div>

        {/* Quick Nav Buttons */}
        <div className="flex items-center gap-2.5 self-stretch sm:self-auto">
          <Link href="/portal/updates" className="flex-1 sm:flex-initial">
            <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#111923] border border-[#1B2835] hover:border-[#38BDF8]/40 text-slate-300 hover:text-white text-xs font-medium transition-colors">
              <Bell className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Announcements</span>
            </button>
          </Link>
          <Link href="/portal/schedule" className="flex-1 sm:flex-initial">
            <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#111923] border border-[#1B2835] hover:border-[#7C5CFF]/40 text-slate-300 hover:text-white text-xs font-medium transition-colors">
              <Calendar className="w-3.5 h-3.5 text-[#A78BFA]" />
              <span>Schedule</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Participant Academic Details */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 text-xs font-sans">
        <div className="p-3.5 rounded-xl bg-[#111923] border border-[#1B2835]">
          <span className="text-slate-400 block text-[11px] font-medium">REGISTER NO:</span>
          <span className="text-white font-mono font-semibold mt-0.5 block truncate">
            {registration.registerNumber}
          </span>
        </div>
        <div className="p-3.5 rounded-xl bg-[#111923] border border-[#1B2835]">
          <span className="text-slate-400 block text-[11px] font-medium">ACADEMIC CREDIT:</span>
          <span className="text-[#38BDF8] font-semibold mt-0.5 block truncate">
            Non-CGPA Group 3
          </span>
        </div>
        <div className="p-3.5 rounded-xl bg-[#111923] border border-[#1B2835]">
          <span className="text-slate-400 block text-[11px] font-medium">DEPARTMENT:</span>
          <span className="text-white font-medium mt-0.5 block truncate">
            {registration.department} ({registration.section})
          </span>
        </div>
        <div className="p-3.5 rounded-xl bg-[#111923] border border-[#1B2835]">
          <span className="text-slate-400 block text-[11px] font-medium">INSTITUTION:</span>
          <span className="text-white font-medium mt-0.5 block truncate">
            {registration.college}
          </span>
        </div>
      </div>
    </div>
  );
}

