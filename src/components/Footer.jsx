// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-10 pb-6 px-6 border-t border-sand/50">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-8">

          {/* 1. Branding */}
          <div className="text-center lg:text-left">
            <h2 className="text-lg font-black tracking-tighter text-navy leading-none">
              NAZARENE <span className="text-sunset">DISTRICT</span>
            </h2>
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-fynbos/60 mt-1">
              Western Cape
            </p>
          </div>

          {/* 2. Contact & Social */}
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="text-center">
              <h4 className="text-[9px] font-black uppercase tracking-widest text-red mb-2">Connect</h4>
              <div className="space-y-1 text-xs font-medium text-navy">
                <p>+27 (21) 000 0000</p>
                <a href="mailto:info@wcnazarene.org" className="hover:text-sunset transition-colors underline decoration-sand underline-offset-2">
                  info@wcnazarene.org
                </a>
              </div>
            </div>

            <div className="text-center">
              <h4 className="text-[9px] font-black uppercase tracking-widest text-red mb-2">Follow</h4>
              <div className="flex gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-fynbos">
                <span className="hover:text-sunset transition-all cursor-pointer">FB</span>
                <span className="text-sand">/</span>
                <span className="hover:text-sunset transition-all cursor-pointer">IG</span>
                <span className="text-sand">/</span>
                <span className="hover:text-sunset transition-all cursor-pointer">YT</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Bottom Bar */}
        <div className="pt-5 border-t border-sand/30 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-slate-300">
            © {currentYear} Church of the Nazarene
          </p>
          <Link to="/contact" className="text-[9px] font-black uppercase tracking-[0.2em] text-fynbos/40 hover:text-navy transition-colors">
            Terms & Conditions
          </Link>
        </div>

      </div>
    </footer>
  );
}