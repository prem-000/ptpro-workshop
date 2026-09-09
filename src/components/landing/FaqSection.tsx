'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What is Prompt to Pro?',
    a: 'Prompt to Pro is a comprehensive 2-day hands-on workshop presented by Kalasalingam Academy of Research and Education in association with AKCE-KLU-KARE Alumni and the School of Computing. Day 1 focuses on Generative AI, prompt engineering, and building practical applications; Day 2 focuses on SQL fundamentals, data analytics, and pathways into modern data careers.',
  },
  {
    q: 'When and where is the event scheduled?',
    a: 'The workshop takes place on October 3rd & 4th, 2026, from 9:00 AM to 5:00 PM IST at the 9th Block Seminar Hall on the Kalasalingam University campus.',
  },
  {
    q: 'Who can register and attend?',
    a: 'Students from all years (1st, 2nd, 3rd, and 4th year) and all academic departments across engineering, technology, and sciences are welcome to register.',
  },
  {
    q: 'What is the registration fee?',
    a: 'The registration fee is a flat ₹200/- per student for the entire 2-day workshop. There are no additional or hidden charges.',
  },
  {
    q: 'What academic certification will I receive?',
    a: 'Participants who attend both days and actively engage in the practical sessions will receive 2 Non-CGPA Group 3 Certificates officially recognized for institutional credit.',
  },
  {
    q: 'Do I need prior experience in AI or programming?',
    a: 'No prior background in AI, machine learning, or advanced SQL is required. The curriculum begins with fundamentals ("Zero to Hero") and builds step-by-step toward hands-on app creation and data querying.',
  },
  {
    q: 'What equipment do I need to bring?',
    a: 'Please bring a laptop with its charger. Ensure your device has Wi-Fi capability and a modern web browser installed so you can interact with live labs.',
  },
  {
    q: 'How does registration and payment verification work?',
    a: 'Click "Register Now", authenticate with your Google account, fill out your student registration number and department, and submit the ₹200 payment via UPI. Upload your payment screenshot and 12-digit UTR reference to generate your digital participant pass.',
  },
  {
    q: 'Who can I contact for questions or support?',
    a: 'You can contact the student coordinators directly: Sai Dhanush (+91 93812 76836) or Rahul (+91 95153 92839) by phone or WhatsApp at any time.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-28 relative bg-[#080C12] border-t border-[#1B2835]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-medium">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-sans max-w-xl mx-auto">
            Everything you need to know about the Prompt to Pro workshop, certificates, schedule, and attendance.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#7C5CFF]/50 bg-[#0D131C] shadow-lg shadow-[#7C5CFF]/5'
                    : 'border-[#1B2835] bg-[#0D131C]/60 hover:border-[#263747]'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
                >
                  <span className={`text-sm sm:text-base font-medium pr-4 transition-colors ${isOpen ? 'text-[#38BDF8] font-semibold' : 'text-white'}`}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#38BDF8]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-400 font-sans leading-relaxed border-t border-[#1B2835]/80 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

