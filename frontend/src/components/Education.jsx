import { useEffect, useRef } from 'react';

export default function Education({ education = [] }) {
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
  }, [education]);

  const icons = ['🎓', '📚', '🏫'];

  return (
    <section id="education" ref={ref} className="py-28 relative">
      <div className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[80px]" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-16">
          <div className="section-divider" />
          <p className="code-label mb-2">05. academic background</p>
          <h2 className="section-heading text-white">Education <span className="gradient-text">Journey</span></h2>
        </div>

        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="reveal glass-card rounded-2xl p-7 border border-white/5 hover:border-electric-400/20 transition-all duration-300 group"
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-5">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-electric-400/10 border border-electric-400/20 flex items-center justify-center text-2xl shrink-0 group-hover:border-electric-400/50 transition-colors">
                  {icons[idx] || '📖'}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-1">
                  <h3 className="text-white font-bold text-lg group-hover:text-electric-400 transition-colors" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {edu.degree}
                  </h3>
                  <p className="text-electric-400 font-medium">{edu.institution}</p>
                  <p className="text-slate-500 text-sm flex items-center gap-2">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {edu.location}
                  </p>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap md:flex-col items-start md:items-end gap-3">
                  <div className="glass-card rounded-xl px-4 py-2 border border-white/5 text-center">
                    <p className="text-jade-400 font-bold text-xl" style={{ fontFamily: 'Syne, sans-serif' }}>
                      {edu.score}
                    </p>
                    <p className="text-slate-500 text-xs" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      {edu.scoreType}
                    </p>
                  </div>
                  <div className="code-label">{edu.period}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
