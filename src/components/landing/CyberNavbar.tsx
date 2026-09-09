'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { CyberButton } from '@/components/ui/CyberButton';
import { Menu, X, LayoutDashboard, LogOut, ArrowRight, LogIn, UserCheck, MessageCircle } from 'lucide-react';

export default function CyberNavbar() {
  const { data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isAdmin = (session?.user as any)?.role === 'admin';
  const [whatsappLink, setWhatsappLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    fetch('/api/event-stats')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.stats?.whatsappGroupLink) {
          setWhatsappLink(data.stats.whatsappGroupLink);
        }
      })
      .catch(() => {});
  }, []);

  // Approved Center navigation as per Section 7
  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Overview', href: '#overview' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Highlights', href: '#highlights' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Coordinators', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-[#1B2835] bg-[#05070B]/90 backdrop-blur-xl shadow-xl shadow-black/60'
          : 'border-b border-[#1B2835]/40 bg-[#05070B]/60 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Left: Official Club Crest & Event Branding */}
        <BrandLogo variant="navbar" />

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-sans font-medium tracking-wide text-[#A8B3C2]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors py-1 relative group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7C5CFF] transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
        </nav>

        {/* Right: Action Buttons */}
        <div className="flex items-center gap-2.5">
          {whatsappLink && (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-900/40 hover:border-emerald-400 font-sans text-xs font-semibold transition-all"
              title="Join Workshop WhatsApp Group"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          )}

          {session ? (
            <div className="flex items-center gap-2">
              {isAdmin ? (
                <Link href="/admin" prefetch={true}>
                  <CyberButton size="sm" variant="secondary" className="gap-2 text-xs">
                    <LayoutDashboard className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Admin Center</span>
                    <span className="sm:hidden">Admin</span>
                  </CyberButton>
                </Link>
              ) : (
                <Link href="/portal" prefetch={true}>
                  <CyberButton size="sm" variant="secondary" className="gap-2 text-xs">
                    <UserCheck className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Participant Portal</span>
                    <span className="sm:hidden">Portal</span>
                  </CyberButton>
                </Link>
              )}

              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                title="Sign Out"
                className="p-2 sm:p-2.5 rounded-xl bg-[#0D131C] border border-[#1B2835] text-[#A8B3C2] hover:text-red-400 hover:border-red-500/40 transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Login Button - accessible on mobile via drawer */}
              <Link href="/login" prefetch={true} className="hidden sm:inline-block">
                <button className="flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2 rounded-xl bg-[#0D131C] hover:bg-[#111923] border border-[#1B2835] hover:border-[#7C5CFF]/60 text-[#F1F5F9] hover:text-white font-sans text-xs font-semibold transition-all shadow-sm">
                  <LogIn className="w-3.5 h-3.5 text-[#7C5CFF]" />
                  <span>Login</span>
                </button>
              </Link>

              {/* Primary Register CTA */}
              <Link href="/register" prefetch={true}>
                <button className="flex items-center gap-1.5 px-3 py-2 sm:px-5 sm:py-2 rounded-xl bg-gradient-to-r from-[#7C5CFF] to-[#6366F1] hover:from-[#6D4AE8] hover:to-[#4F46E5] text-white font-sans text-xs font-bold transition-all shadow-lg shadow-[#7C5CFF]/20">
                  <span className="hidden sm:inline">Register Now</span>
                  <span className="sm:hidden">Register</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </Link>
            </div>
          )}

          {/* Mobile Drawer Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-[#0D131C] border border-[#1B2835] text-[#F1F5F9] hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden border-b border-[#1B2835] bg-[#05070B]/98 backdrop-blur-2xl px-5 py-6 space-y-4 font-sans text-xs"
          >
            <div className="text-[10px] text-[#A8B3C2] uppercase tracking-widest font-semibold border-b border-[#1B2835] pb-2">
              Workshop Navigation
            </div>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-lg text-[#F1F5F9] hover:text-white bg-[#0D131C] border border-[#1B2835] hover:border-[#7C5CFF]/50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-[#1B2835] flex flex-col gap-2.5">
              {whatsappLink && (
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-400 font-semibold text-center text-xs flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Join WhatsApp Group
                </a>
              )}
              {session ? (
                <>
                  <Link
                    href={isAdmin ? '/admin' : '/portal'}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block"
                  >
                    <CyberButton size="md" variant="secondary" className="w-full">
                      {isAdmin ? 'Enter Admin Center' : 'Enter Participant Portal'}
                    </CyberButton>
                  </Link>
                  <button
                    onClick={() => signOut({ callbackUrl: '/' })}
                    className="p-2.5 rounded-xl bg-red-950/20 border border-red-500/30 text-red-400 font-semibold text-center"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                    <button className="w-full flex items-center justify-center gap-1.5 py-3 rounded-xl bg-[#0D131C] border border-[#7C5CFF]/50 text-[#A78BFA] font-bold">
                      <LogIn className="w-4 h-4" />
                      <span>Login</span>
                    </button>
                  </Link>
                  <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                    <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#7C5CFF] to-[#6366F1] text-white font-bold">
                      Register
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
