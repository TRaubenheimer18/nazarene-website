import React from 'react';
import { Link } from 'react-router-dom';
import CapeTownImg from '../assets/cape-town.jpg';
import Image2 from '../assets/image2.jpg';
import Image4 from '../assets/image4.jpg'; 

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

      {/* 3. Core Pillars */}
      <section className="py-32 px-6 bg-sand/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-10 bg-sunset"></div>
              <span className="text-[10px] font-black text-sunset uppercase tracking-[0.4em]">Who We Are</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-navy tracking-tighter max-w-xl">
              Grounded in Holiness, <br />
              <span className="text-fynbos">Driven by Mission.</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <Link
                key={i}
                to={p.to}
                className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 hover:-translate-y-1 flex flex-col"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col flex-1 gap-3">
                  <p className="text-[10px] font-black text-sunset uppercase tracking-[0.3em]">About Us</p>
                  <h4 className="text-lg font-black text-navy group-hover:text-sunset transition-colors">{p.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">{p.desc}</p>
                  <span className="mt-auto text-[11px] font-black uppercase tracking-widest text-sunset group-hover:translate-x-1 transition-transform inline-block pt-2">Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Impact Footer Card
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
      </section> */}
    </div>
  );
}

const pillars = [
  {
    title: 'Statement of Mission',
    desc: 'Making Christlike disciples in every nation — our Great Commission calling.',
    to: '/about#mission',
  },
  {
    title: 'Core Values',
    desc: 'A Christian, Holiness, and Missional people — the essence of our identity.',
    to: '/about#values',
  },
  {
    image: Image2,
    title: 'Statement of Beliefs',
    desc: 'The foundational convictions that unite every Church of the Nazarene.',
    to: '/about#beliefs',
  },
  {
    image: Image4,
    title: 'Articles of Faith',
    desc: 'The constitutional articles that define our doctrine and Christian character.',
    to: '/about#articles',
  },
];