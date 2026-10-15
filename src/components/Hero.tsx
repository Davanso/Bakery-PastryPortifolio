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
      <div className="hero-art" aria-hidden="true">
        <div className="art-caption">FROM THE KITCHEN</div>
        <div className="plate">
          <div className="pastry">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
        <span className="art-word">the sweeter details</span>
        <span className="art-note">An original collection, in the making.</span>
      </div>
    </section>
  );
}
