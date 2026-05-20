export default function Footer({ data }) {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-jade-400 to-electric-400 flex items-center justify-center text-xs font-bold text-ink-900" style={{ fontFamily: 'Syne, sans-serif' }}>
            JK
          </div>
          <span className="text-slate-500 text-sm">Jana Krishnan D</span>
        </div>
        <p className="text-slate-600 text-xs" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          Built with React + Node.js + MongoDB · {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-4">
          <a href={data?.github || '#'} className="text-slate-600 hover:text-jade-400 transition-colors text-xs" style={{ fontFamily: 'JetBrains Mono, monospace' }}>GitHub</a>
          <a href={data?.linkedin || '#'} className="text-slate-600 hover:text-jade-400 transition-colors text-xs" style={{ fontFamily: 'JetBrains Mono, monospace' }}>LinkedIn</a>
          <a href={`mailto:${data?.email}`} className="text-slate-600 hover:text-jade-400 transition-colors text-xs" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Email</a>
        </div>
      </div>
    </footer>
  );
}
