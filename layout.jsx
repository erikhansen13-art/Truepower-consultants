import "../styles/globals.css";
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TruePower Consultants | Smarter Energy Procurement',
  description: 'Helping businesses lower energy costs and manage risk through smarter procurement.',
  keywords: 'energy consulting, energy procurement, electricity contracts, community solar, risk management',
  authors: [{ name: 'TruePower Consultants' }],
  openGraph: {
    title: 'TruePower Consultants',
    description: 'Helping businesses lower energy costs and manage risk through smarter procurement.',
    url: 'https://www.truepowerconsultants.com',
    siteName: 'TruePower Consultants',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TruePower Consultants'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TruePower Consultants',
    description: 'Helping businesses lower energy costs and manage risk through smarter procurement.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-gray-50 text-slate-900 antialiased'}>
        {children}
      </body>
    </html>
  );
}
