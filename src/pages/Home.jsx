import React from 'react';
import { Link } from 'react-router-dom';
import CapeTownImg from '../assets/cape-town.jpg'; 

export default function Home() {
  return (
    <div className="bg-white min-h-screen selection:bg-sunset/30">
      
      {/* 1. Ultra-Modern Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-navy overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={CapeTownImg} 
            className="w-full h-full object-cover opacity-40 scale-105"
            alt="Cape Town Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          {/* Glassmorphic Text Card */}
          <div className="backdrop-blur-md bg-white/5 p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-2xl">
            <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tighter">
              Hope for the <br />
              <span className="text-transparent bg-clip-text bg-sunset">
                Western Cape.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-sky/90 font-light mb-10 max-w-lg leading-relaxed">
              We are a movement of 40 congregations woven into the fabric of the Cape, 
              bringing the light of Christ to every corner.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link 
                to="/churches" 
                className="bg-sunset hover:bg-yellow text-navy px-10 py-4 rounded-2xl font-bold transition-all duration-300 shadow-xl shadow-sunset/20 hover:-translate-y-1"
              >
                Find a Local Church
              </Link>
              <Link 
                to="/about" 
                className="group flex items-center text-white font-semibold gap-2 hover:text-sky transition-colors"
              >
                Our Story 
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Floating Stats Bar */}
      <div className="max-w-6xl mx-auto px-6 -mt-12 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl shadow-navy/10 border border-slate-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Churches', val: '40', color: 'text-atlantic' },
            { label: 'District', val: '1', color: 'text-red' },
            { label: 'Members', val: '5k+', color: 'text-fynbos' },
            { label: 'Commitment', val: '100%', color: 'text-protea-pink' }
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <p className={`text-4xl font-black ${stat.color} mb-1 group-hover:scale-110 transition-transform`}>
                {stat.val}
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. The "Essentials" Section with Glass Cards */}
      <section className="py-32 px-6 bg-sand/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-red font-bold tracking-widest uppercase text-sm mb-4">Core Pillars</h2>
            <h3 className="text-4xl md:text-5xl font-black text-navy max-w-xl">
              Grounded in Holiness, <br />
              Driven by Mission.
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <div key={i} className="group bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 text-6xl">{p.icon}</div>
                <div className="w-14 h-14 bg-sky/20 rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:bg-fynbos group-hover:text-white transition-colors">
                  {p.icon}
                </div>
                <h4 className="text-2xl font-bold text-navy mb-4">{p.title}</h4>
                <p className="text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Impact Footer Card */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto relative rounded-[3rem] overflow-hidden bg-navy p-12 md:p-24 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-atlantic/50 to-transparent"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-sand mb-8 leading-tight">
              Ready to find <br /> your community?
            </h2>
            <Link 
              to="/churches" 
              className="inline-block bg-white text-navy font-bold px-12 py-5 rounded-2xl hover:bg-sunset hover:text-white transition-all transform hover:scale-105 shadow-2xl shadow-black/40"
            >
              Browse 40 Churches
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const pillars = [
  { icon: '📖', title: 'Holiness', desc: 'Seeking to be a people set apart by God’s grace and love.' },
  { icon: '🤝', title: 'Fellowship', desc: 'Supporting our pastors and families as one district body.' },
  { icon: '🌍', title: 'Mission', desc: 'Actively serving the diverse communities of the Western Cape.' }
];