import { useEffect, useRef } from 'react';

export default function Contact({ data }) {
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
  }, []);

  const contacts = [
    {
      label: 'Email',
      value: data?.email || 'janakrishnan2172005@gmail.com',
      href: `mailto:${data?.email || 'janakrishnan2172005@gmail.com'}`,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'text-jade-400 bg-jade-400/10 border-jade-400/20 hover:border-jade-400/50'
    },
    {
      label: 'Phone',
      value: data?.phone || '7558163201',
      href: `tel:${data?.phone}`,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      color: 'text-electric-400 bg-electric-400/10 border-electric-400/20 hover:border-electric-400/50'
    },
    {
      label: 'LinkedIn',
      value: 'Jana Krishnan D',
      href: data?.linkedin || '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'text-amber-400 bg-amber-400/10 border-amber-400/20 hover:border-amber-400/50'
    },
    {
      label: 'GitHub',
      value: 'View Projects',
      href: data?.github || '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
      color: 'text-purple-400 bg-purple-400/10 border-purple-400/20 hover:border-purple-400/50'
    }
  ];

  return (
    <section id="contact" ref={ref} className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-jade-400/3 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-16 text-center">
          <div className="section-divider mx-auto" />
          <p className="code-label mb-2">06. let's connect</p>
          <h2 className="section-heading text-white">Get In <span className="gradient-text">Touch</span></h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            I'm actively looking for new opportunities. Whether you have a question, a project in mind, or just want to say hi — my inbox is open!
          </p>
        </div>

        {/* Contact cards */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className={`glass-card rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center gap-3 ${contact.color}`}
            >
              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${contact.color}`}>
                {contact.icon}
              </div>
              <div>
                <p className="text-white font-semibold text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>{contact.label}</p>
                <p className="text-slate-500 text-xs mt-0.5 truncate max-w-[140px]">{contact.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal text-center">
          <a href={`mailto:${data?.email || 'janakrishnan2172005@gmail.com'}`} className="btn-primary text-base px-10 py-4 inline-flex">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
}
