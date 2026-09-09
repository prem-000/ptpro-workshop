import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Playfair_Display } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import CyberBackground from '@/components/animations/CyberBackground';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Prompt to Pro | A 2-Day Hands-On Workshop',
  description:
    'Prompt to Pro — A 2-Day Hands-On Workshop: GenAI, AI Application Building, SQL & Data Skills. Kalasalingam Academy of Research and Education in association with School of Computing & AKCE-KLU-KARE Alumni.',
  openGraph: {
    title: 'Prompt to Pro | A 2-Day Hands-On Workshop',
    description:
      'Learn · Build · Grow · Get Certified. 2-Day Hands-On Workshop on GenAI & Data Analytics at 9th Block Seminar Hall, KARE.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} min-h-screen bg-cyber-bg text-cyber-text antialiased font-sans`}>
        <Providers>
          <CyberBackground />
          <div className="relative z-10 flex min-h-screen flex-col">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
