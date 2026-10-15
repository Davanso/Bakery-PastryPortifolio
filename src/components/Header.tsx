import { profile } from '@/data/profile';
import { ArrowUpRight } from 'lucide-react';

export function Header() {
  return (
    <header id="top" className="header shell">
      <a className="brand" href="#top" aria-label={`${profile.name} portfolio home`}>
        <span className="brand-mark" aria-hidden="true">
          b<span>&</span>m
        </span>
        <span>
          {profile.name}
          <span className="brand-sub">PORTFOLIO</span>
        </span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#work">The collection</a>
        <a href="#about">
          About & contact <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
