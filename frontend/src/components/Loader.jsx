export default function Loader() {
  return (
    <div className="fixed inset-0 bg-ink-900 flex flex-col items-center justify-center z-50 gap-6">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-2 border-jade-400/20 animate-ping" />
        <div className="absolute inset-0 rounded-full border-2 border-t-jade-400 border-r-jade-400/50 border-b-jade-400/20 border-l-jade-400/20 animate-spin" />
        <div className="absolute inset-3 rounded-full bg-gradient-to-br from-jade-400 to-electric-400 flex items-center justify-center text-ink-900 font-bold text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>
          JK
        </div>
      </div>
      <p className="text-slate-600 text-xs tracking-widest" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
        LOADING PORTFOLIO...
      </p>
    </div>
  );
}
