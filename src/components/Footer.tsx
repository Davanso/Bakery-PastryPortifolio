import { profile } from '@/data/profile';
export function Footer() {
  return (
    <>
      <section id="about" className="about shell">
        <div>
          <p className="eyebrow">BEHIND THE BAKES</p>
          <h2>
            Care in every
            <br />
            <em>little detail.</em>
          </h2>
        </div>
        <div className="about-copy">
          <p>
            {profile.introduction ||
              'This portfolio is a space to share a personal collection of baking and pastry work — from the first idea to the final finishing touch.'}
          </p>
          <address className="professional-contact">
            <p className="contact-name">{profile.professionalName}</p>
            {profile.email || profile.phone || profile.linkedin ? (
              <div className="contact-links">
                {profile.email && (
                  <a className="text-link" href={`mailto:${profile.email}`}>
                    {profile.email} ↗
                  </a>
                )}
                {profile.phone && (
                  <a className="text-link" href={`tel:${profile.phoneHref}`}>
                    {profile.phone}
                  </a>
                )}
                {profile.linkedin && (
                  <a
                    className="text-link"
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn ↗
                  </a>
                )}
              </div>
            ) : (
              <p className="contact-pending">Professional contact details will be added soon.</p>
            )}
            {profile.australianPhoneNote && (
              <p className="contact-pending">{profile.australianPhoneNote}</p>
            )}
          </address>
        </div>
      </section>
      <footer className="footer shell">
        <span>{profile.name}</span>
        <span>Baked with care. Presented with love.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
