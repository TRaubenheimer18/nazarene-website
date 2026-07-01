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
                NAZARENE <span className="text-atlantic">DISTRICT</span>
              </h2>
              <p className="text-[9px] font-black uppercase tracking-[0.4em] text-navy/30 mt-1">
                Western Cape
              </p>
            </div>
            <p className="text-sm text-slate-400 font-light leading-relaxed max-w-xs">
              Empowering 40 faith communities across the Cape with hope, holiness, and purpose.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.facebook.com/p/Church-of-the-Nazarene-WC-District-61556339500627/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#1877f2] text-white rounded-full flex items-center justify-center shadow-[0_10px_10px_rgba(0,0,0,0.1)] transition-all duration-200 hover:scale-110"
                style={{transition: 'all 0.2s cubic-bezier(0.68,-0.55,0.265,1.55)'}}
              >
                <svg viewBox="0 0 320 512" height="1em" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center shadow-[0_10px_10px_rgba(0,0,0,0.1)] transition-all duration-200 hover:scale-110"
                style={{transition: 'all 0.2s cubic-bezier(0.68,-0.55,0.265,1.55)'}}
              >
                <svg viewBox="0 0 448 512" height="1em" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M448,209.9a210.1,210.1,0,0,1-122.8-39.3V349.4A162.6,162.6,0,1,1,185.7,188V278.2a74.7,74.7,0,1,0,52.2,71.2V0h88.3a121.2,121.2,0,0,0,121.8,108.9Z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 text-white rounded-full flex items-center justify-center shadow-[0_10px_10px_rgba(0,0,0,0.1)] transition-all duration-200 hover:scale-110"
                style={{background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)', transition: 'all 0.2s cubic-bezier(0.68,-0.55,0.265,1.55)'}}
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-4" />

          {/* Navigation Column */}
          {/* <div className="md:col-span-3 space-y-4">
            <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-atlantic">Navigate</h4>
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
          </div> */}

          {/* Contact Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-atlantic">Get in Touch</h4>
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
                  className="hover:text-atlantic transition-colors underline decoration-slate-200 underline-offset-4"
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



