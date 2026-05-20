import { useState, useEffect, useRef } from 'react';

const OWNER_EMAIL = 'janakrishnan2172005@gmail.com';

export default function SayHeyModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    contact: '',
    message: "Hey Jana! I came across your portfolio and I'd love to connect. 👋",
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const overlayRef = useRef(null);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // Reset on close
      setTimeout(() => {
        setForm({
          name: '',
          email: '',
          contact: '',
          message: "Hey Jana! I came across your portfolio and I'd love to connect. 👋",
        });
        setStatus('idle');
      }, 300);
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      return;
    }
    setStatus('sending');

    // Build a mailto link as the primary delivery method — opens native mail client
    // For direct send without mail client, integrate EmailJS (see README note)
    const subject = encodeURIComponent(`Hey from ${form.name} via Portfolio`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nContact: ${form.contact || 'N/A'}\n\nMessage:\n${form.message}`
    );

    // Try EmailJS if configured, otherwise fall back to mailto
    try {
      // EmailJS free tier — swap in your own service/template/public key
      const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
        // Dynamic import so the build doesn't break if emailjs isn't installed
        const emailjs = await import('@emailjs/browser').catch(() => null);
        if (emailjs) {
          await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            {
              from_name:    form.name,
              from_email:   form.email,
              contact:      form.contact || 'N/A',
              message:      form.message,
              to_email:     OWNER_EMAIL,
            },
            EMAILJS_PUBLIC_KEY
          );
          setStatus('success');
          return;
        }
      }

      // Fallback: open mailto (works without any API key)
      window.location.href = `mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`;
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      style={{ background: 'rgba(10,10,15,0.85)', backdropFilter: 'blur(8px)' }}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl border border-jade-400/20 p-8 shadow-2xl"
        style={{
          background: 'rgba(18,18,26,0.98)',
          boxShadow: '0 0 60px rgba(52,211,153,0.08)',
          animation: 'modalPop 0.25s cubic-bezier(0.34,1.56,0.64,1)',
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-all"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-jade-400 animate-pulse" />
            <span className="text-jade-400 text-xs font-mono tracking-widest uppercase">say hey</span>
          </div>
          <h2 className="text-white text-2xl font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>
            Let's <span style={{
              background: 'linear-gradient(135deg,#34d399,#60a5fa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Connect</span>
          </h2>
          <p className="text-slate-500 text-sm mt-1">Fill in your details and I'll get back to you!</p>
        </div>

        {status === 'success' ? (
          <div className="text-center py-10 space-y-3">
            <div className="w-16 h-16 mx-auto rounded-full bg-jade-400/10 border border-jade-400/30 flex items-center justify-center">
              <svg className="w-8 h-8 text-jade-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-white font-semibold" style={{ fontFamily: 'Syne, sans-serif' }}>Message Sent!</p>
            <p className="text-slate-400 text-sm">Jana will get back to you soon. 🚀</p>
            <button onClick={onClose} className="mt-4 px-6 py-2 rounded-lg border border-jade-400/30 text-jade-400 text-sm hover:bg-jade-400/10 transition-all">
              Close
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Name */}
            <div>
              <label className="text-slate-400 text-xs font-mono tracking-wider uppercase mb-1.5 block">Your Name *</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(52,211,153,0.4)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-slate-400 text-xs font-mono tracking-wider uppercase mb-1.5 block">Your Email *</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(52,211,153,0.4)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
              />
            </div>

            {/* Contact / Phone */}
            <div>
              <label className="text-slate-400 text-xs font-mono tracking-wider uppercase mb-1.5 block">Contact Number <span className="text-slate-600 normal-case">(optional)</span></label>
              <input
                name="contact"
                value={form.contact}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(52,211,153,0.4)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-slate-400 text-xs font-mono tracking-wider uppercase mb-1.5 block">Message *</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none resize-none transition-all"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(52,211,153,0.4)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
              />
            </div>

            {status === 'error' && (
              <p className="text-red-400 text-xs">Something went wrong. Try emailing directly at {OWNER_EMAIL}</p>
            )}

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={status === 'sending' || !form.name || !form.email || !form.message}
              className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: 'linear-gradient(135deg, rgba(52,211,153,0.9), rgba(96,165,250,0.8))',
                color: '#0a0a0f',
                fontFamily: 'Syne, sans-serif',
              }}
            >
              {status === 'sending' ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  Sending…
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Send Message
                </>
              )}
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes modalPop {
          from { opacity: 0; transform: scale(0.92) translateY(12px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
