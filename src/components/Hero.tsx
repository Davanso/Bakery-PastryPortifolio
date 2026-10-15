import Image from 'next/image';

export function Hero() {
  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">BAKING & PASTRY PORTFOLIO</p>
        <h1 id="hero-title">
          A little flour.
          <br />A lot of <em>heart.</em>
        </h1>
        <p className="hero-description">
          An appreciation for beautiful bakes, thoughtful flavours and the details that make
          something special.
        </p>
        <a className="button" href="#work">
          View my work <span aria-hidden="true">↗</span>
        </a>
        <p className="hero-note">Made with care. Shared with pride.</p>
      </div>
      <div className="hero-art">
        <Image
          src="/images/myself/myself.webp"
          alt="Bianca Melikardi in a chef's jacket, holding a whisk behind a glazed cake in the kitchen"
          fill
          sizes="(max-width: 639px) 100vw, 50vw"
          preload
          style={{ objectFit: 'cover' }}
        />
      </div>
    </section>
  );
}
