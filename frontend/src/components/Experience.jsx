import { useEffect, useRef } from 'react';

export default function Experience({ experience = [], certifications = [] }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    if (ref.current) {
      ref.current.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }
    return () => observer.disconnect();
  }, [experience]);

  return (
    <section id="experience" className="py-28 relative" ref={ref}>
      <div className="absolute left-0 top-1/3 w-[350px] h-[350px] bg-amber-400/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-16">
          <div className="section-divider" />
          <p className="code-label mb-2">04. where I've worked</p>
          <h2 className="section-heading text-white">Work <span className="gradient-text">Experience</span></h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-jade-400/50 via-jade-400/20 to-transparent" />

          <div className="space-y-10">
            {experience.map((exp, idx) => (
              <div key={`${exp.company}-${idx}`} className="reveal relative pl-16" style={{ transitionDelay: `${idx * 100}ms` }}>
                {/* Timeline dot */}
                <div className="absolute left-4 top-2 w-5 h-5 rounded-full border-2 border-jade-400 bg-ink-900 -translate-x-1/2 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-jade-400" />
                </div>

                <div className="glass-card rounded-2xl p-6 border border-white/5 hover:border-jade-400/20 transition-all duration-300 group">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-white font-bold text-lg group-hover:text-jade-400 transition-colors" style={{ fontFamily: 'Syne, sans-serif' }}>
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-jade-400" />
                        <p className="text-jade-400 text-sm font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full glass-card border border-white/10 code-label">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.bullets?.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                        <span className="text-jade-400 mt-0.5 shrink-0">▸</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        {certifications.length > 0 && (
          <div className="reveal mt-20">
            <div className="section-divider" />
            <p className="code-label mb-2">achievements</p>
            <h3 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: 'Syne, sans-serif' }}>Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="glass-card rounded-xl p-5 border border-white/5 hover:border-amber-400/30 transition-all duration-300 group flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0 group-hover:border-amber-400/50 transition-colors">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{cert.name}</p>
                    <p className="text-amber-400/70 text-xs" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
