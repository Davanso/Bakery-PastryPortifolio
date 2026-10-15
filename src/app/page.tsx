import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { PortfolioGallery } from '@/components/PortfolioGallery';
import { Footer } from '@/components/Footer';
export default function Home() { return <><Header/><main id="main"><Hero/><div className="divider shell"><span>THOUGHTFUL FLAVOURS</span><span aria-hidden="true">✳</span><span>CREATIVE HANDS</span><span aria-hidden="true">✳</span><span>THE FINER DETAILS</span></div><PortfolioGallery/><Footer/></main></>; }
