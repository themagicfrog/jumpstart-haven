'use client';

import Image from 'next/image';

export default function Header() {
  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section style={{ position: 'relative' }}>
      <div
        className="header-content"
        style={{
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '3rem',
          paddingBottom: '1rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: '100%' }}>
          <Image
            src="/assets/header-heidi.svg"
            alt="Heidi"
            width={300}
            height={289}
            className="hide-mobile"
            style={{ marginRight: '-3rem', marginTop: '2rem' }}
          />
          <div className="hero-title header-title-container" style={{ display: 'inline-block', maxWidth: '55%' }}>
            <Image
              src="/assets/new-title.png"
              alt="Jumpstart Haven"
              width={1819}
              height={1157}
              priority
              style={{ width: '100%', maxWidth: '900px', height: 'auto', cursor: 'pointer', display: 'block' }}
            />
          </div>
          <Image
            src="/assets/header-orpheus.svg"
            alt="Orpheus"
            width={300}
            height={300}
            className="hide-mobile"
            style={{ marginLeft: '-3rem', marginTop: '2rem' }}
          />
        </div>

        <div className="header-text-container" style={{ textAlign: 'center', width: '100%', marginTop: '-3rem', position: 'relative', zIndex: 2 }}>
          <p style={{ fontFamily: 'var(--font-darumadrop), sans-serif', fontSize: 'clamp(2rem, 4.2vw, 4rem)', margin: '0', lineHeight: '1.1' }}>
            Build a Godot platformer game!
          </p>
          <p style={{ fontSize: 'clamp(1.5rem, 3vw, 2.8rem)', margin: '0', lineHeight: '1.15', marginTop: '0.5rem' }}>
            Learn the basics of game dev before<br />running your Haven event.
          </p>
          <div className="header-triangle-container" style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem', marginBottom: '1rem' }}>
            <Image
              src="/assets/triangle.svg"
              alt="Triangle"
              width={40}
              height={31}
              className="triangle-bounce"
              onClick={handleScrollDown}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>

        <Image
          src="/assets/pudhero.png"
          alt="Pud"
          width={280}
          height={205}
          className="hide-mobile"
          style={{ position: 'absolute', bottom: '-0.5rem', left: '7%', zIndex: 1, pointerEvents: 'none' }}
        />
        <Image
          src="/assets/pudhero.png"
          alt="Pud"
          width={280}
          height={205}
          className="hide-mobile"
          style={{ position: 'absolute', bottom: '-0.5rem', right: '7%', zIndex: 1, pointerEvents: 'none' }}
        />
      </div>

      <div className="hero-band" style={{ width: '100%', height: '4.5rem', backgroundColor: '#224CCA' }} />
    </section>
  );
}
