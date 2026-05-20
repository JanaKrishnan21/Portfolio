import { useState, useEffect } from 'react';

const NAV_ITEMS = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = NAV_ITEMS.map(n => document.getElementById(n.toLowerCase()));
      const scrollPos = window.scrollY + 100;
      sections.forEach((section, i) => {
        if (section && scrollPos >= section.offsetTop) {
          setActive(NAV_ITEMS[i].toLowerCase());
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3 bg-ink-900/90 backdrop-blur-xl border-b border-white/5' : 'py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="group flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-jade-400 to-electric-400 flex items-center justify-center text-xs font-bold text-ink-900" style={{ fontFamily: 'Syne, sans-serif' }}>
            JK
          </div>
          <span className="text-white font-semibold tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>Jana Krishnan</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map(item => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`nav-link ${active === item.toLowerCase() ? 'active text-jade-400' : ''}`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="mailto:janakrishnan2172005@gmail.com" className="btn-primary text-xs py-2 px-4">
            Hire Me
          </a>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-2">
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-ink-800/95 backdrop-blur-xl border-b border-white/5 py-4">
          {NAV_ITEMS.map(item => (
            <button key={item} onClick={() => scrollTo(item)} className="block w-full text-left px-6 py-3 text-slate-400 hover:text-jade-400 nav-link transition-colors">
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
