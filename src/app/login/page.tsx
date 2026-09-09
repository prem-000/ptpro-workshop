'use client';

import React, { useState, Suspense } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Lock, CheckCircle2, AlertTriangle, LogOut, ArrowRight } from 'lucide-react';
import { BrandLogo } from '@/components/ui/BrandLogo';
import Link from 'next/link';

function LoginContent() {
  const { data: session } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  const [loading, setLoading] = useState(false);

  // If already logged in, show existing identity
  if (session?.user) {
    const isAdmin = (session.user as any).role === 'admin';
    return (
      <div className="flex-1 flex items-center justify-center p-4 min-h-[calc(100vh-5rem)]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md rounded-3xl p-8 bg-[#0D131C] border border-[#1B2835] text-center space-y-6 shadow-2xl"
        >
          <div className="w-16 h-16 rounded-2xl bg-[#7C5CFF]/10 border border-[#7C5CFF]/30 mx-auto flex items-center justify-center text-[#A78BFA]">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div className="space-y-1.5">
            <div className="inline-block px-3 py-1 text-[11px] font-mono font-semibold tracking-wider rounded-full border border-[#7C5CFF]/40 bg-[#7C5CFF]/10 text-[#A78BFA]">
              ROLE: {isAdmin ? 'ADMINISTRATOR' : 'PARTICIPANT'}
            </div>
            <h2 className="text-xl font-serif font-bold text-white">
              Welcome, {session.user.name}
            </h2>
            <p className="text-xs text-slate-400 font-sans">
              {session.user.email}
            </p>
          </div>

          <div className="pt-2 space-y-3">
            <Link href={isAdmin ? '/admin' : '/portal'} className="block">
              <button className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#7C5CFF] to-[#6366F1] text-white font-semibold text-sm shadow-lg shadow-[#7C5CFF]/20 hover:shadow-xl transition-all flex items-center justify-center gap-2">
                <span>{isAdmin ? 'Enter Admin Console' : 'Open Participant Portal'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/register" className="block">
              <button className="w-full py-3 px-5 rounded-xl bg-[#111923] border border-[#1B2835] hover:border-[#38BDF8]/40 text-slate-200 text-sm font-medium transition-colors">
                Workshop Registration Form
              </button>
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: '/login' })}
              className="w-full pt-3 text-xs text-slate-400 hover:text-red-400 transition-colors flex items-center justify-center gap-1.5 font-sans"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log out / Switch Account</span>
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const errorParam = searchParams.get('error');
  const errorMsg =
    errorParam === 'InvalidDomain'
      ? 'Access Restricted: Only official @klu.ac.in university Google accounts are permitted.'
      : errorParam
      ? 'Authentication failed. Please use your official @klu.ac.in account.'
      : null;

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await signIn('google', { callbackUrl });
    } catch (e) {
      console.error('Google sign-in error:', e);
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center p-4 min-h-[calc(100vh-5rem)]">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md rounded-3xl p-7 sm:p-9 bg-[#0D131C] border border-[#1B2835] shadow-2xl space-y-6 relative overflow-hidden"
      >
        {/* Subtle Ambient Radial */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#7C5CFF]/5 blur-3xl pointer-events-none rounded-full" />

        {/* Header with Official Logo */}
        <div className="text-center space-y-3 relative z-10">
          <div className="flex justify-center">
            <BrandLogo variant="hero" withLink={false} />
          </div>
          <p className="text-xs text-slate-400 font-sans">
            Sign in to access your Prompt to Pro participant portal or registration
          </p>
        </div>

        {/* Error Banner */}
        {errorMsg && (
          <div className="p-3.5 rounded-xl bg-red-950/60 border border-red-500/60 text-red-300 text-xs flex items-start gap-2.5 leading-relaxed">
            <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Google Sign In Button */}
        <div className="space-y-4 pt-1 relative z-10">
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl bg-[#111923] hover:bg-[#151f2c] border border-[#1B2835] hover:border-[#38BDF8]/50 text-white text-sm font-medium transition-all shadow-md disabled:opacity-50"
          >
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            {loading ? (
              <span>Connecting to Google...</span>
            ) : (
              <span>Continue with Google (@klu.ac.in)</span>
            )}
          </button>
        </div>

        {/* Security Notices */}
        <div className="p-3.5 rounded-2xl bg-[#080C12] border border-[#1B2835] text-xs text-slate-400 text-center leading-relaxed space-y-1.5 relative z-10 font-sans">
          <div className="text-slate-300 font-medium flex items-center justify-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>Institutional Account Verification</span>
          </div>
          <p className="text-[11px]">
            Please sign in using your official <strong className="text-white">@klu.ac.in</strong> student/faculty Google account.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="font-mono text-[#38BDF8] text-xs">Loading login gateway...</div>
        </div>
      }
    >
      <LoginContent />
    </Suspense>
  );
}

