import { useEffect, useRef } from 'react';

const SKILL_COLORS = [
  'from-jade-400/20 to-jade-400/5 border-jade-400/20 hover:border-jade-400/50',
  'from-electric-400/20 to-electric-400/5 border-electric-400/20 hover:border-electric-400/50',
  'from-amber-400/20 to-amber-400/5 border-amber-400/20 hover:border-amber-400/50',
  'from-purple-400/20 to-purple-400/5 border-purple-400/20 hover:border-purple-400/50',
  'from-rose-400/20 to-rose-400/5 border-rose-400/20 hover:border-rose-400/50',
  'from-cyan-400/20 to-cyan-400/5 border-cyan-400/20 hover:border-cyan-400/50',
];

const SKILL_TEXT_COLORS = [
  'text-jade-400', 'text-electric-400', 'text-amber-400',
  'text-purple-400', 'text-rose-400', 'text-cyan-400'
];

export default function Skills({ skills = [] }) {
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
  }, [skills]);

  return (
    <section id="skills" ref={ref} className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal mb-16">
          <div className="section-divider" />
          <p className="code-label mb-2">02. what I work with</p>
          <h2 className="section-heading text-white">Technical <span className="gradient-text">Skills</span></h2>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skillGroup, idx) => (
            <div
              key={skillGroup.category}
              className={`reveal glass-card rounded-2xl p-6 bg-gradient-to-br ${SKILL_COLORS[idx % SKILL_COLORS.length]} border transition-all duration-300 hover:-translate-y-1`}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-xl">
                  {skillGroup.icon}
                </div>
                <h3 className={`font-semibold text-sm ${SKILL_TEXT_COLORS[idx % SKILL_TEXT_COLORS.length]}`} style={{ fontFamily: 'Syne, sans-serif' }}>
                  {skillGroup.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map(item => (
                  <span key={item} className="px-3 py-1.5 rounded-lg bg-white/5 text-slate-300 text-xs border border-white/5 hover:border-white/20 transition-colors" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="reveal mt-12 glass-card rounded-2xl p-6 border border-white/5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-xl">🌏</div>
            <h3 className="font-semibold text-sm text-jade-400" style={{ fontFamily: 'Syne, sans-serif' }}>Languages Spoken</h3>
          </div>
          <div className="flex gap-3">
            {['Tamil', 'English'].map(lang => (
              <span key={lang} className="px-4 py-2 rounded-lg bg-white/5 text-slate-300 text-sm border border-white/5">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
