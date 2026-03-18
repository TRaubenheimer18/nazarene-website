// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. Hero Section - Dynamic & Modern */}
      <section className="relative bg-navy overflow-hidden">
        {/* Subtle Background Pattern or Image Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Empowering Churches. <br />
              <span className="text-logo-teal">Transforming Communities.</span>
            </h1>
            <p className="text-lg md:text-xl text-sky font-light mb-10 max-w-lg">
              The Western Cape District is a family of 35 churches dedicated to holiness, 
              service, and spreading the hope of Christ across our region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/churches" 
                className="bg-red text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-yellow hover:text-navy transition-all duration-300 shadow-lg shadow-black/20"
              >
                Find a Local Church
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-logo-teal text-logo-teal px-8 py-4 rounded-xl font-bold text-center hover:bg-logo-teal hover:text-white transition-all"
              >
                Our Mission
              </Link>
            </div>
          </div>
          
          {/* Hero Visual Element */}
          <div className="hidden md:block relative">
            <div className="bg-gradient-to-tr from-teal to-logo-teal rounded-3xl h-[400px] w-full transform rotate-3 shadow-2xl overflow-hidden border-4 border-white/10">
               {/* Replace with an actual photo of the Western Cape later */}
               <div className="absolute inset-0 bg-navy/20 mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Quick Stats / Impact Bar */}
      <div className="bg-white border-y border-slate-100 py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-navy">35</p>
            <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Churches</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-red">1</p>
            <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold">District</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-navy">5000+</p>
            <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Members</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-teal">100%</p>
            <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Committed</p>
          </div>
        </div>
      </div>

      {/* 3. About Section - Clean & High Contrast */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-bold text-red tracking-[0.2em] uppercase mb-4">Our Heart</h2>
          <h3 className="text-4xl font-bold text-navy mb-8">About the Western Cape District</h3>
          <p className="text-xl text-slate-600 leading-relaxed italic">
            "To be a movement of Great Commission churches, making Christlike disciples 
            in every community of the Western Cape."
          </p>
          <div className="mt-12 grid sm:grid-cols-3 gap-8">
             <div className="p-6 bg-white rounded-2xl shadow-sm border border-sky/30">
                <div className="text-3xl mb-4 text-teal">📖</div>
                <h4 className="font-bold text-navy mb-2">Holiness</h4>
                <p className="text-sm text-slate-500 text-balance">Grounded in the Word of God and the beauty of holiness.</p>
             </div>
             <div className="p-6 bg-white rounded-2xl shadow-sm border border-sky/30">
                <div className="text-3xl mb-4 text-teal">🤝</div>
                <h4 className="font-bold text-navy mb-2">Fellowship</h4>
                <p className="text-sm text-slate-500 text-balance">Supporting our pastors and congregations as one family.</p>
             </div>
             <div className="p-6 bg-white rounded-2xl shadow-sm border border-sky/30">
                <div className="text-3xl mb-4 text-teal">🌍</div>
                <h4 className="font-bold text-navy mb-2">Mission</h4>
                <p className="text-sm text-slate-500 text-balance">Reaching the lost and serving the marginalized.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="py-20 bg-sky/20">
         <div className="max-w-5xl mx-auto px-6 rounded-3xl bg-navy p-12 text-center shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-6">Are you looking for a church home?</h2>
            <p className="text-sky mb-8 text-lg">Use our directory to find a Nazarene community near you.</p>
            <Link to="/churches" className="inline-block bg-white text-navy font-bold px-10 py-4 rounded-xl hover:bg-logo-teal hover:text-white transition-all">
               Browse Directory
            </Link>
         </div>
      </section>
      
    </div>
  );
}