import { useEffect, useRef } from 'react';
import profileImg from '../assets/Profile img.jpeg';

const TECH_BADGES = ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'JavaScript'];

export default function Hero({ data }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    setTimeout(() => el.classList.add('visible'), 100);
  }, []);

  return (
    <section id="about" className="min-h-screen relative flex items-center overflow-hidden pt-20">
      {/* Background orbs */}
      <div className="orb w-[600px] h-[600px] bg-jade-500/10 -top-40 -right-40" style={{ animationDelay: '0s' }} />
      <div className="orb w-[400px] h-[400px] bg-electric-500/8 bottom-0 -left-20" style={{ animationDelay: '3s' }} />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="max-w-6xl mx-auto px-6 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div ref={heroRef} className="reveal space-y-8">
            {/* Code label */}
            <div className="inline-flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-jade-400 animate-pulse" />
              <span className="code-label">Available for opportunities</span>
            </div>

            {/* Main headline */}
            <div className="space-y-2">
              <p className="text-slate-500 text-sm tracking-widest uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Hello, I'm</p>
              <h1 className="section-heading text-5xl md:text-6xl lg:text-7xl leading-none">
                <span className="text-white">Jana</span>
                <br />
                <span className="gradient-text">Krishnan D</span>
              </h1>
              <div className="flex items-center gap-3 pt-2">
                <div className="section-divider" />
                <p className="text-jade-400 font-medium tracking-wide" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {data?.title || 'MERN Stack Developer'}
                </p>
              </div>
            </div>

            {/* Summary */}
            <p className="text-slate-400 text-base leading-relaxed max-w-lg">
              {data?.summary || 'Computer Science graduate skilled in building scalable full-stack web applications.'}
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2">
              {TECH_BADGES.map(tech => (
                <span key={tech} className="tag">{tech}</span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="mailto:janakrishnan2172005@gmail.com?subject=Hiring%20Opportunity" className="btn-primary">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get in Touch
              </a>
              <a href='https://github.com/JanaKrishnan21'target="_blank" rel="noreferrer" className="btn-outline">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a href='https://www.linkedin.com/in/jana-krishnan-218b96258/'target="_blank" rel="noreferrer" className="btn-outline">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>

            {/* Contact info */}
            <div className="flex flex-wrap gap-6 pt-2">
              <a href={`tel:${data?.phone}`} className="flex items-center gap-2 text-slate-500 hover:text-jade-400 transition-colors text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {data?.phone}
              </a>
              <a href={`mailto:${data?.email}`} className="flex items-center gap-2 text-slate-500 hover:text-jade-400 transition-colors text-sm truncate max-w-xs">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {data?.email}
              </a>
            </div>
          </div>

          {/* Right: Profile image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Rotating ring */}
              <div className="absolute inset-0 rounded-full border border-jade-400/20 animate-spin-slow scale-110" />
              <div className="absolute inset-0 rounded-full border border-electric-400/10 animate-spin-slow scale-125" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-jade-400/10 blur-2xl scale-150" />

              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-jade-400/30 jade-glow">
                <img
                  src={profileImg}
                  alt="Jana Krishnan D"
                  className="w-full h-full object-cover object-top"
                />
                {/* Overlay shimmer */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/20 to-transparent" />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 glass-card rounded-xl px-3 py-2 border-glow">
                <p className="code-label">B.E. CSE</p>
                <p className="text-white text-xs font-medium">2022–2026</p>
              </div>
              <div className="absolute -bottom-4 -right-4 glass-card rounded-xl px-3 py-2 border-glow" style={{ animationDelay: '1.5s' }}>
                <p className="code-label">MERN Stack</p>
                <p className="text-white text-xs font-medium">Full Stack Dev</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <p className="code-label">scroll</p>
          <div className="w-px h-8 bg-gradient-to-b from-jade-400 to-transparent" />
        </div>
      </div>
    </section>
  );
}
