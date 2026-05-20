import { useEffect, useRef } from 'react';

export default function Projects({ projects = [] }) {
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
  }, [projects]);

  const featured = projects.filter(p => p.featured);
  const mini = projects.filter(p => !p.featured);

  return (
    <section id="projects" ref={ref} className="py-28 relative">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/3 w-[400px] h-[400px] bg-electric-500/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-16">
          <div className="section-divider" />
          <p className="code-label mb-2">03. what I've built</p>
          <h2 className="section-heading text-white">Featured <span className="gradient-text">Projects</span></h2>
        </div>

        {/* Featured projects */}
        <div className="space-y-8 mb-16">
          {featured.map((project, idx) => (
            <div
              key={project.title}
              className={`reveal glass-card rounded-2xl p-8 border border-white/5 hover:border-jade-400/20 transition-all duration-300 group`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="grid md:grid-cols-5 gap-8">
                {/* Project number */}
                <div className="md:col-span-1 flex md:flex-col items-center md:items-start gap-4">
                  <div className="text-6xl font-bold text-white/5 group-hover:text-white/10 transition-colors" style={{ fontFamily: 'Syne, sans-serif' }}>
                    0{idx + 1}
                  </div>
                  <div className="md:mt-auto">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-1 text-jade-400 hover:text-jade-300 text-xs transition-colors"
                        style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                        View ↗
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-4 space-y-5">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <span className="code-label block mb-1">{project.period}</span>
                      <h3 className="text-xl font-bold text-white group-hover:text-jade-400 transition-colors" style={{ fontFamily: 'Syne, sans-serif' }}>
                        {project.title}
                      </h3>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-jade-400/10 border border-jade-400/20 text-jade-400 text-xs" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      Featured
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>

                  <ul className="space-y-2">
                    {project.bullets?.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                        <span className="text-jade-400 mt-0.5 shrink-0">▸</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack?.map(tech => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mini projects */}
        {mini.length > 0 && (
          <div>
            <p className="code-label mb-6">Other projects</p>
            <div className="grid md:grid-cols-2 gap-5">
              {mini.map((project, idx) => (
                <div
                  key={project.title}
                  className="reveal glass-card rounded-2xl p-6 border border-white/5 hover:border-electric-400/20 transition-all duration-300 group"
                  style={{ transitionDelay: `${idx * 80}ms` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-electric-400/10 border border-electric-400/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-electric-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <span className="code-label">{project.period}</span>
                  </div>
                  <h3 className="text-white font-semibold mb-2 group-hover:text-electric-400 transition-colors" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack?.map(tech => (
                      <span key={tech} className="px-2 py-1 rounded text-xs text-electric-400 bg-electric-400/10" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                        {tech}
                      </span>
                    ))}
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
