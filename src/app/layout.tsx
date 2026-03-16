import type { Metadata } from 'next';
import { Inter, Playfair_Display, IBM_Plex_Mono } from 'next/font/google';
import { UtilityBar } from '@/components/UtilityBar';
import { MainNav } from '@/components/MainNav';
import { Footer } from '@/components/Footer';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-ibm-plex-mono',
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Longview Solutions Group | Strategic Capability. Operational Deployment.',
    template: '%s | Longview Solutions Group',
  },
  description:
    'Longview Solutions Group builds, deploys, and sustains disaster response capability for the governments and communities that need it most.',
  keywords: [
    'emergency management',
    'disaster response',
    'incident management team',
    'FEMA',
    'NIMS',
    'ICS',
    'disaster housing',
    'EOC staffing',
    'emergency operations center',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${ibmPlexMono.variable} font-sans antialiased`}
      >
        <UtilityBar />
        <MainNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
