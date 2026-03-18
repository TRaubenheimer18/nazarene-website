import React from 'react';

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. Professional Hero Section */}
      <section className="relative bg-navy py-24 px-6 overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-logo-teal/10 skew-x-12 transform translate-x-20"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-sm font-bold text-sky tracking-[0.3em] uppercase mb-4">Established in Faith</h1>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            Western Cape <span className="text-logo-teal">District</span>
          </h2>
          <p className="text-xl text-sky/80 font-light max-w-3xl mx-auto leading-relaxed">
            A movement of 35 Great Commission churches making Christlike disciples 
            across the beautiful landscape of the Western Cape.
          </p>
        </div>
      </section>

      {/* 2. Mission & Vision - Split Layout */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-navy border-l-4 border-red pl-6">Our Mission</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              We exist to serve as a resource and support network for our local congregations. 
              Our mission is to empower pastors, develop leaders, and plant new churches 
              that reflect the holiness and love of Jesus Christ in every community.
            </p>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-navy mb-2 underline decoration-teal">Our Vision</h4>
              <p className="text-slate-500 italic">
                "To see a vibrant, holiness-centered Nazarene presence in every town and suburb 
                of the Western Cape, bringing hope to the broken and light to the dark."
              </p>
            </div>
          </div>
          
          {/* Visual Side - Placeholder for a District Office or Group Photo */}
          <div className="bg-slate-200 rounded-3xl h-80 md:h-[450px] shadow-2xl overflow-hidden relative border-8 border-white">
             <div className="absolute inset-0 bg-gradient-to-br from-navy/40 to-transparent"></div>
             <div className="flex items-center justify-center h-full text-slate-400 font-medium">
                [District Leadership Image Placeholder]
             </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values / The Nazarene Essentials */}
      <section className="bg-navy py-20 px-6 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What We Stand For</h2>
            <div className="h-1 w-20 bg-red mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {/* Value 1 */}
            <div className="text-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-4xl mb-6">📖</div>
              <h4 className="text-xl font-bold mb-4 text-logo-teal">Christian</h4>
              <p className="text-sky/70 text-sm leading-relaxed">
                We are a part of the universal church of Jesus Christ. We confess the historic 
                creeds and the authority of the Holy Scriptures.
              </p>
            </div>

            {/* Value 2 */}
            <div className="text-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-4xl mb-6">🔥</div>
              <h4 className="text-xl font-bold mb-4 text-logo-teal">Holiness</h4>
              <p className="text-sky/70 text-sm leading-relaxed">
                We believe that God, who is holy, calls us to a life of holiness. We believe 
                the Holy Spirit cleanses and empowers us to love God and neighbor.
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-4xl mb-6">⛪</div>
              <h4 className="text-xl font-bold mb-4 text-logo-teal">Missional</h4>
              <p className="text-sky/70 text-sm leading-relaxed">
                We are a sent people. Our mission is to take the message of Christ to 
                our neighbors and to the ends of the earth through service and evangelism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Leadership Section Placeholder */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-navy">District Leadership</h2>
            <p className="text-slate-500 mt-2">The team serving the Western Cape District</p>
          </div>
          <button className="mt-4 md:mt-0 text-teal font-bold hover:underline">
            View All Leaders →
          </button>
        </div>
        
        {/* Simple Leadership Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
           {[1, 2, 3, 4].map((i) => (
             <div key={i} className="group">
                <div className="aspect-square bg-slate-100 rounded-2xl mb-4 overflow-hidden border border-slate-200">
                   <div className="w-full h-full bg-slate-200 group-hover:scale-105 transition-transform duration-500"></div>
                </div>
                <h5 className="font-bold text-navy">Leadership Name</h5>
                <p className="text-xs text-red uppercase tracking-wider font-semibold">Position Title</p>
             </div>
           ))}
        </div>
      </section>

    </div>
  );
}