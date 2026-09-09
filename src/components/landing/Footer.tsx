'use client';

import React from 'react';
import Link from 'next/link';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { MapPin, Calendar, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[#1B2835] bg-[#05070B] py-14 sm:py-18 text-xs text-slate-400 font-sans">
      <div className="container mx-auto px-4 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Brand & Organization Info */}
          <div className="md:col-span-5 space-y-4">
            <BrandLogo variant="footer" />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Prompt to Pro — A 2-Day Hands-On Workshop in Generative AI and Data. Learn prompt architecture, build AI applications, and launch your data career.
            </p>
            <div className="space-y-1.5 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-2 text-slate-300">
                <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>October 3 – 4, 2026 • 9:00 AM – 5:00 PM</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-[#7C5CFF]" />
                <span>9th Block Seminar Hall, Kalasalingam University</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-xs font-mono">
              Event Navigation
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="#overview" className="hover:text-white transition-colors">
                  Workshop Overview
                </Link>
              </li>
              <li>
                <Link href="#workshop" className="hover:text-white transition-colors">
                  What You Will Learn
                </Link>
              </li>
              <li>
                <Link href="#highlights" className="hover:text-white transition-colors">
                  Key Highlights
                </Link>
              </li>
              <li>
                <Link href="#schedule" className="hover:text-white transition-colors">
                  2-Day Schedule
                </Link>
              </li>
              <li>
                <Link href="#guidelines" className="hover:text-white transition-colors">
                  Important Guidelines
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Student Coordinators
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Portals & Services */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-xs font-mono">
              Participant Services
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/login" className="hover:text-white transition-colors">
                  Participant Portal Sign In
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-white transition-colors">
                  Workshop Registration Form
                </Link>
              </li>
              <li>
                <Link href="/portal" className="hover:text-white transition-colors">
                  Digital QR Pass & Attendance Hub
                </Link>
              </li>
              <li>
                <Link href="/certificate" className="hover:text-white transition-colors">
                  Certificate Verification Portal
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-white transition-colors">
                  Organizer Admin Console
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1B2835]/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <div>
            © 2026 Kalasalingam Academy of Research and Education. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-4 text-slate-400 font-mono text-[10px] sm:text-[11px]">
            <span>AKCE-KLU-KARE ALUMNI</span>
            <span>•</span>
            <span className="text-[#38BDF8]">SCHOOL OF COMPUTING</span>
            <span>•</span>
            <span>SCRS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

