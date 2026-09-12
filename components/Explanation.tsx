'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

interface DropdownLink {
  label: string;
  href: string;
}

type StepAction =
  | { kind: 'link'; label: string; href: string }
  | { kind: 'dropdown'; label: string; links: DropdownLink[] };

interface Step {
  title: string;
  description: string;
  action?: StepAction;
}

const steps: Step[] = [
  {
    title: 'BUILD',
    description: 'Use our beginner resources to build your own 2D platformer game in about 1 hour.',
    action: {
      kind: 'dropdown',
      label: 'RESOURCES',
      links: [
        { label: 'Written Guide', href: 'https://jams.hackclub.com/jam/godot-platformer' },
        { label: 'Video Tutorial', href: 'https://www.youtube.com/watch?v=G7iZHazD4wo' },
        { label: 'Slideshow Presentation', href: 'https://www.figma.com/slides/j0xld5JL1PLVmndZPV6YSi/Godot-Platformer-Guide--Jumpstart-?node-id=1-42&t=YvoFRsTHrLei0iRJ-1' },
        { label: 'Hackatime Setup (important)', href: 'https://hackatime.hackclub.com/docs/editors/godot' },
      ],
    },
  },
  {
    title: 'SHIP',
    description: 'Upload your game to Itch.io, finish your GitHub repo, then submit to our form.',
    action: {
      kind: 'link',
      label: 'FORM',
      href: 'https://forms.hackclub.com/jumpstart-haven',
    },
  },
  {
    title: 'RUN',
    description: 'Once approved after about a week, you will run your Haven event! Have fun!!',
  },
];

const games = [
  {
    title: 'Infinity Lost',
    image: '/assets/infinitylost.png',
    alt: 'Infinity Lost',
    creator: 'Violet, 16 years old, USA',
    description: 'Lost in an infinitely looping space shuttle, you have to escape your unfortunate circumstance',
    link: 'https://vivithequeen.itch.io/infinity-lost'
  },
  {
    title: 'Tales of Orbis',
    image: '/assets/taleoforbis.png',
    alt: 'Tales of Orbis',
    creator: 'Jake, 17 years old, India',
    description: 'Travel as Orbis, a lone orb created from the ashes of gods to escape Null and reach the Core',
    link: 'https://jakeojeff.itch.io/tales-of-orbis'
  },
  {
    title: 'One More Day',
    image: '/assets/onemoreday.png',
    alt: 'One More Day',
    creator: 'Zach, 16 years old, USA',
    description: 'When it seems like you ran out of time, time just keeps repeating...',
    link: 'https://bolb2019.itch.io/one-more-day-gmtk-2025'
  },
  {
    title: 'Trust me.',
    image: '/assets/trustme.png',
    alt: 'Trust me',
    creator: 'Avni, 16 years old, USA',
    description: 'Trust me. or don\'t. The choice is yours.',
    link: 'https://of-knee.itch.io/trust-me'
  },
  {
    title: 'Okrim',
    image: '/assets/okrim.png',
    alt: 'Okrim',
    creator: 'Ernests, 17 years old, Latvia',
    description: 'A point and click psychological horror game, you are ghost going through daily routine to break free',
    link: 'https://n0o0b090lv.itch.io/okrim-updated'
  },
  {
    title: 'The Birb',
    image: '/assets/thebirb.png',
    alt: 'The Birb',
    creator: 'Neya, 13 years old, USA',
    description: 'A platformer where you fly around and collect candy for the winter',
    link: 'https://that-blob.itch.io/the-birb'
  }
];

const stepButtonStyle = {
  backgroundColor: '#EE00A7',
  color: 'white',
  padding: '0.75rem 1.5rem',
  borderRadius: '0.5rem',
  fontSize: '1.8rem',
  fontWeight: 'bold' as const,
  border: 'none',
  cursor: 'pointer',
  boxShadow: '-4px 4px 0 #930B6A',
  transition: 'transform 0.2s ease',
  zIndex: 10000,
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none' as const,
  minHeight: '44px',
  minWidth: '44px'
};

const StepColumn = ({ step, index }: { step: Step; index: number }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const titleImageSrc = `/assets/explanation-title${index + 1}.svg`;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="step-column" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: isDropdownOpen ? 10002 : 'auto' }}>
      <div style={{ position: 'relative', zIndex: 20 }}>
        <Image
          src={titleImageSrc}
          alt={`Step ${index + 1}`}
          width={400}
          height={121}
          className="step-title-image"
        />
        <div className="step-title-text-wrapper" style={{ position: 'absolute', top: '50%', left: '35%', transform: 'translateY(-50%)', textAlign: 'left', zIndex: 21, pointerEvents: 'none' }}>
          <span className="step-title-text" style={{ fontSize: '3.5rem', color: '#EE0073', fontWeight: 'bold', letterSpacing: '0.5rem' }}>{step.title}</span>
        </div>
      </div>

      <div className="step-rectangle" style={{ backgroundColor: '#101E45', borderRadius: '1rem', width: '360px', minHeight: '240px', flexGrow: 1, marginTop: '-2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '4rem 1rem 1.5rem 1rem', position: 'relative', zIndex: 1 }}>
        <p className="step-rectangle-text" style={{ color: 'white', textAlign: 'center', margin: 0, fontSize: '2rem', lineHeight: '1.2', marginBottom: '1rem' }}>
          {step.description}
        </p>

        {step.action?.kind === 'link' && (
          <a
            href={step.action.href}
            {...(step.action.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="form-button"
            style={{ ...stepButtonStyle, display: 'inline-flex', marginTop: 'auto' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            {step.action.label}
          </a>
        )}

        {step.action?.kind === 'dropdown' && (
          <div
            ref={dropdownRef}
            style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 'auto', zIndex: 10000 }}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className="details-dropdown-button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              style={{ ...stepButtonStyle, display: 'flex', gap: '0.5rem' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Image
                src="/assets/triangle.svg"
                alt="Dropdown"
                width={16}
                height={12}
                style={{
                  transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease'
                }}
              />
              {step.action.label}
            </button>
            {isDropdownOpen && (
              <>
                <div
                  style={{ position: 'absolute', top: '100%', left: 0, right: 0, height: '12rem', zIndex: 10000 }}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                />
                <div className="details-dropdown-content" style={{
                  position: 'absolute',
                  top: '100%',
                  marginTop: '0.25rem',
                  backgroundColor: 'white',
                  borderRadius: '0.5rem',
                  padding: '1rem',
                  width: '100%',
                  textAlign: 'center',
                  zIndex: 10001,
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  pointerEvents: 'auto'
                }}>
                  {step.action.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#EE00A7', textDecoration: 'underline', fontWeight: 'bold', fontSize: '1.6rem', lineHeight: '1.4', padding: '0.5rem', minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const sectionTitleBoxStyle = {
  backgroundColor: 'white',
  borderRadius: '2rem',
  padding: '1.25rem 3.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: '0 1 auto',
  minWidth: 0,
  maxWidth: '100%'
};

const sectionTitleTextStyle = {
  textAlign: 'center' as const,
  margin: 0,
  color: '#142B70',
  fontSize: 'clamp(2.2rem, 4vw, 5rem)',
  letterSpacing: '0.25rem',
  whiteSpace: 'nowrap' as const
};

// The white banner straddles the navy/blue seam, so its wrapper paints both halves.
const BANNER_SPLIT_BACKGROUND = 'linear-gradient(to bottom, #142B70 0 72%, #224CCA 72% 100%)';

interface SectionBannerProps {
  title: string;
  left: { src: string; alt: string; width: number; height: number };
  right: { src: string; alt: string; width: number; height: number };
}

const SectionBanner = ({ title, left, right }: SectionBannerProps) => (
  <div className="section-title-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '0 1.5rem' }}>
    <Image src={left.src} alt={left.alt} width={left.width} height={left.height} className="hide-mobile" style={{ flexShrink: 0 }} />
    <div className="section-title-box" style={sectionTitleBoxStyle}>
      <h2 className="section-title-text" style={sectionTitleTextStyle}>{title}</h2>
    </div>
    <Image src={right.src} alt={right.alt} width={right.width} height={right.height} className="hide-mobile" style={{ flexShrink: 0 }} />
  </div>
);

const carouselButtonStyle = {
  backgroundColor: '#EE00A7',
  color: 'white',
  padding: '0.5rem 1.25rem',
  borderRadius: '0.5rem',
  textDecoration: 'none' as const,
  fontSize: '1.6rem',
  fontWeight: 'bold' as const,
  marginTop: 'auto',
  marginBottom: '0.5rem',
  boxShadow: '-5px 5px 0 #930B6A'
};

export default function Explanation() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Three identical sets are rendered; measure one so the seamless wrap holds
    // at any card size (they shrink on phones) rather than assuming desktop widths.
    let singleSetWidth = 0;
    const measure = () => {
      const items = Array.from(carousel.children) as HTMLElement[];
      const perSet = Math.floor(items.length / 3);
      if (perSet < 1 || !items[perSet]) return;
      singleSetWidth = items[perSet].offsetLeft - items[0].offsetLeft;
      carousel.scrollLeft = singleSetWidth;
    };

    const handleScroll = () => {
      if (!singleSetWidth) return;
      const scrollLeft = carousel.scrollLeft;

      if (scrollLeft >= singleSetWidth * 2 - 10) {
        carousel.style.scrollBehavior = 'auto';
        carousel.scrollLeft = scrollLeft - singleSetWidth;
        setTimeout(() => { carousel.style.scrollBehavior = ''; }, 0);
      } else if (scrollLeft < singleSetWidth) {
        carousel.style.scrollBehavior = 'auto';
        carousel.scrollLeft = scrollLeft + singleSetWidth;
        setTimeout(() => { carousel.style.scrollBehavior = ''; }, 0);
      }
    };

    const startAutoScroll = () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
      autoScrollIntervalRef.current = setInterval(() => {
        if (!isPausedRef.current && carousel) {
          carousel.scrollLeft -= 1;
        }
      }, 15);
    };

    const handleMouseEnter = () => { isPausedRef.current = true; };
    const handleMouseLeave = () => { isPausedRef.current = false; };
    // let a finger drag the strip without it scrolling away underneath
    const handleTouchStart = () => { isPausedRef.current = true; };
    const handleTouchEnd = () => { isPausedRef.current = false; };

    carousel.addEventListener('scroll', handleScroll, { passive: true });
    carousel.addEventListener('mouseenter', handleMouseEnter);
    carousel.addEventListener('mouseleave', handleMouseLeave);
    carousel.addEventListener('touchstart', handleTouchStart, { passive: true });
    carousel.addEventListener('touchend', handleTouchEnd, { passive: true });

    measure();
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(carousel);
    startAutoScroll();

    return () => {
      carousel.removeEventListener('scroll', handleScroll);
      carousel.removeEventListener('mouseenter', handleMouseEnter);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
      carousel.removeEventListener('touchstart', handleTouchStart);
      carousel.removeEventListener('touchend', handleTouchEnd);
      resizeObserver.disconnect();
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, []);

  return (
    <section>
      {/* HOW DOES THIS WORK? */}
      <div style={{ background: BANNER_SPLIT_BACKGROUND, paddingTop: '2.5rem' }}>
        <SectionBanner
          title="HOW DOES THIS WORK?"
          left={{ src: '/assets/explanation-diamond.svg', alt: 'Diamond', width: 150, height: 136 }}
          right={{ src: '/assets/explanation-arcade1.svg', alt: 'Arcade', width: 145, height: 145 }}
        />
      </div>

      <div style={{ backgroundColor: '#224CCA', paddingTop: '2rem', paddingBottom: '2rem', position: 'relative', zIndex: 10 }}>
        <div className="steps-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch', gap: '3rem', padding: '0 2rem', position: 'relative', zIndex: 100 }}>
          {steps.map((step, index) => (
            <StepColumn key={step.title} step={step} index={index} />
          ))}
        </div>

        <p className="prior-experience" style={{ color: 'white', textAlign: 'center', margin: 0, marginTop: '2.5rem', fontSize: '2.2rem' }}>
          Have prior game dev experience? Submit{' '}
          <a
            href="https://forms.hackclub.com/jumpstart-haven"
            style={{ color: 'white', textDecoration: 'underline' }}
          >
            here
          </a>
          !
        </p>
      </div>

      {/* NEED INSPIRATION? */}
      <div style={{ background: BANNER_SPLIT_BACKGROUND, paddingTop: '2.5rem' }}>
        <SectionBanner
          title="NEED INSPIRATION?"
          left={{ src: '/assets/explanation-stars2.svg', alt: 'Stars', width: 130, height: 131 }}
          right={{ src: '/assets/explanation-stars2.svg', alt: 'Stars', width: 130, height: 131 }}
        />
      </div>

      <div style={{ backgroundColor: '#224CCA', paddingTop: '2rem', paddingBottom: '2rem' }}>
        <p className="past-description" style={{ color: 'white', textAlign: 'center', margin: 0, padding: '0 3rem 1.5rem 3rem', fontSize: '3rem', lineHeight: '1.2' }}>
          Check out some past games from Jumpstart participants:
        </p>

        <div
          ref={carouselRef}
          className="hide-scrollbar games-carousel"
          style={{
            display: 'flex',
            gap: '1.5rem',
            padding: '1.5rem 3rem',
            backgroundColor: '#101E45',
            overflowX: 'auto',
            scrollBehavior: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          } as React.CSSProperties}
        >
          {[...games, ...games, ...games].map((game, index) => {
            const setIndex = Math.floor(index / games.length);
            const isLastInSet = (index + 1) % games.length === 0;

            return (
              <React.Fragment key={`${game.title}-${index}`}>
                <div className="game-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '300px', flexShrink: 0, border: '2px solid white', borderRadius: '1rem', padding: '0.75rem' }}>
                  <h3 style={{ color: 'white', fontSize: '2.2rem', marginBottom: '0.4rem', textAlign: 'center', wordWrap: 'break-word' }}>{game.title}</h3>
                  <Image src={game.image} alt={game.alt} width={260} height={146} style={{ marginBottom: '0.5rem', borderRadius: '0.5rem', width: '260px', height: '146px', objectFit: 'cover' }} />
                  <p style={{ color: 'white', fontSize: '1.4rem', textAlign: 'center', marginBottom: '0.25rem', wordWrap: 'break-word' }}>{game.creator}</p>
                  <p style={{ color: 'white', fontSize: '1.3rem', textAlign: 'center', marginBottom: '0.5rem', wordWrap: 'break-word' }}>{game.description}</p>
                  <a href={game.link} target="_blank" rel="noopener noreferrer" className="pink-button" style={carouselButtonStyle}>
                    PLAY HERE
                  </a>
                </div>
                {isLastInSet && (
                  <div key={`all-games-${setIndex}`} className="game-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '300px', flexShrink: 0, border: '2px solid white', borderRadius: '1rem', padding: '0.75rem' }}>
                    <h3 style={{ color: 'white', fontSize: '2.2rem', marginBottom: '0.4rem', textAlign: 'center', wordWrap: 'break-word' }}>ALL GAMES</h3>
                    <Image src="/assets/v2gamse.png" alt="V2 Games" width={260} height={146} style={{ marginBottom: '0.5rem', borderRadius: '0.5rem', width: '260px', height: '146px', objectFit: 'cover' }} />
                    <a href="http://v2.jumpstart.hackclub.com/games/index.html" target="_blank" rel="noopener noreferrer" className="pink-button" style={{ ...carouselButtonStyle, width: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem 2rem' }}>
                      PLAY HERE
                    </a>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

      </div>

      <div style={{ backgroundColor: '#142B70', height: '2.5rem', width: '100%' }}></div>
    </section>
  );
}
