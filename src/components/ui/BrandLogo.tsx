'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface BrandLogoProps {
  variant?: 'navbar' | 'hero' | 'card' | 'footer' | 'icon-only';
  className?: string;
  withLink?: boolean;
}

export function BrandLogo({
  variant = 'navbar',
  className,
  withLink = true,
}: BrandLogoProps) {
  const sizeClasses = {
    navbar: { img: 'w-9 h-9 sm:w-10 sm:h-10', text: 'text-base sm:text-lg', subtext: 'text-[9px] sm:text-[10px]' },
    hero: { img: 'w-12 h-12 sm:w-14 sm:h-14', text: 'text-xl sm:text-2xl', subtext: 'text-[10px] sm:text-xs' },
    card: { img: 'w-10 h-10', text: 'text-base', subtext: 'text-[10px]' },
    footer: { img: 'w-11 h-11', text: 'text-lg', subtext: 'text-[10px]' },
    'icon-only': { img: 'w-10 h-10', text: '', subtext: '' },
  };

  const current = sizeClasses[variant] || sizeClasses.navbar;

  const content = (
    <div className={cn('flex items-center gap-3 select-none group', className)}>
      {/* Real Circular Logo with Natural AI Purple / Cyan Ring - Retained Untouched */}
      <div className="relative shrink-0">
        <img
          src="/association-logo.jpeg"
          alt="Association Crest"
          className={cn(
            'rounded-full object-contain transition-all duration-300 group-hover:scale-105 filter drop-shadow-[0_0_12px_rgba(124,92,255,0.4)] ring-1 ring-[#7C5CFF]/50 group-hover:ring-[#7C5CFF]',
            current.img
          )}
        />
        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#34D399] border-2 border-[#05070B]" />
      </div>

      {variant !== 'icon-only' && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 leading-tight">
            <span className={cn('font-sans font-black tracking-tight text-[#F1F5F9] group-hover:text-white transition-colors', current.text)}>
              PROMPT TO <span className="text-[#7C5CFF]">PRO</span>
            </span>
          </div>
          <span className={cn('hidden sm:block font-mono font-medium tracking-wider text-[#A8B3C2] group-hover:text-white transition-colors uppercase truncate max-w-[280px]', current.subtext)}>
            Kalasalingam (KARE) × School of Computing
          </span>
        </div>
      )}
    </div>
  );

  if (withLink) {
    return (
      <Link href="/" className="inline-block focus:outline-none">
        {content}
      </Link>
    );
  }

  return content;
}
