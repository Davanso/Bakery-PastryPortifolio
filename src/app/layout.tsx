import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Baking & Pastry Portfolio',
  description: 'A collection of baking and pastry work, with a focus on flavour, creativity and the finer details.',
  robots: { index: false, follow: false },
  openGraph: { title: 'Baking & Pastry Portfolio', description: 'Baking, pastry and the finer details.', locale: 'en_AU', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-AU"><body><a className="skip-link" href="#main">Skip to content</a>{children}</body></html>;
}
