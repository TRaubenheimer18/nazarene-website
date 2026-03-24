// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-navy border-t border-sand/50">

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Branding Column */}
          <div className="md:col-span-4 space-y-4">
            <div>
              <h2 className="text-xl font-black tracking-tighter text-navy leading-none">
                NAZARENE <span className="text-sunset">DISTRICT</span>
              </h2>
              <p className="text-[9px] font-black uppercase tracking-[0.4em] text-navy/30 mt-1">
                Western Cape
              </p>
            </div>
            <p className="text-sm text-slate-400 font-light leading-relaxed max-w-xs">
              Empowering 35 faith communities across the Cape with hope, holiness, and purpose.
            </p>
            <div className="flex gap-3 pt-2">
              {['FB', 'IG', 'YT'].map((s) => (
                <span
                  key={s}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 text-[9px] font-black tracking-widest text-slate-400 hover:border-sunset hover:text-sunset transition-all cursor-pointer"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1" />

          {/* Navigation Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-sunset">Navigate</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', to: '/' },
                { label: 'About', to: '/about' },
                { label: 'Churches', to: '/churches' },
                { label: 'Contact', to: '/contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-400 hover:text-navy transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-sunset">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-slate-300">📍</span>
                <span>P.O Box 42624, Lotus River, Cape Town, 7854</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-slate-300">📞</span>
                <span>+27 (21) 000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-slate-300">✉️</span>
                <a
                  href="mailto:info@wcnazarene.org"
                  className="hover:text-sunset transition-colors underline decoration-slate-200 underline-offset-4"
                >
                  info@wcnazarene.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-slate-300">🕐</span>
                <span>Mon – Fri: 08:30 – 16:30</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-sand/50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[10px] font-medium uppercase tracking-widest text-slate-300">
            © {currentYear} Church of the Nazarene — Western Cape District
          </p>
          <Link
            to="/contact"
            className="text-[10px] font-black uppercase tracking-widest text-slate-300 hover:text-navy transition-colors"
          >
            Terms &amp; Conditions
          </Link>
        </div>
      </div>

    </footer>
  );
}
