import { Header } from '@/components/Header';
import { Asterisk } from 'lucide-react';
import { Hero } from '@/components/Hero';
import { PortfolioGallery } from '@/components/PortfolioGallery';
import { Footer } from '@/components/Footer';
export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <div className="divider shell">
          <span>THOUGHTFUL FLAVOURS</span>
          <Asterisk size={18} aria-hidden="true" />
          <span>CREATIVE HANDS</span>
          <Asterisk size={18} aria-hidden="true" />
          <span>THE FINER DETAILS</span>
        </div>
        <PortfolioGallery />
        <Footer />
      </main>
    </>
  );
}
