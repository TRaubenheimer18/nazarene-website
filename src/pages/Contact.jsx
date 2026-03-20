// src/pages/Contact.jsx
import React from 'react';

export default function Contact() {
  return (
    <div className="bg-white min-h-screen selection:bg-sunset/30">
      
      {/* 1. Cinematic Hero Section */}
      <section className="relative h-[60vh] flex items-center bg-navy overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-atlantic/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-logo-teal/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>
        
        {/* <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter mb-8">
              Let’s <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sand via-sky to-white italic">
                Connect.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-sky/70 font-light leading-relaxed max-w-xl">
              Whether you are looking for a church home or inquiring about district leadership, 
              we are here to listen and serve.
            </p>
          </div>
        </div> */}
      </section>

      {/* 2. Overlapping Contact Content */}
      <section className="relative z-20 -mt-24 pb-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contextual Info Cards (5/12) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Office Details Card */}
            <div className="bg-white p-7 rounded-[2rem] shadow-xl shadow-navy/5 border border-slate-50 flex flex-col justify-between group">
               <div>
                  <h3 className="text-[10px] font-black text-red uppercase tracking-[0.3em] mb-5">Headquarters</h3>
                  <div className="space-y-5">
                    <div className="flex gap-4 items-start">
                       <span className="text-xl mt-0.5">📍</span>
                       <p className="text-sm text-navy font-light leading-snug">
                         123 Church Street, <br />
                         Cape Town CBD, 8001
                       </p>
                    </div>
                    <div className="flex gap-4 items-center">
                       <span className="text-xl">📞</span>
                       <p className="text-sm text-navy font-light">+27 (21) 000 0000</p>
                    </div>
                    <div className="flex gap-4 items-center">
                       <span className="text-xl">✉️</span>
                       <p className="text-sm text-navy font-light underline decoration-sunset underline-offset-4">
                         info@wcnazarene.org
                       </p>
                    </div>
                  </div>
               </div>
               
               <div className="mt-6 pt-5 border-t border-sand">
                  <p className="text-[10px] font-black text-fynbos/40 uppercase tracking-widest">Office Hours</p>
                  <p className="text-navy font-bold text-xs mt-1">Mon — Fri: 08:30 – 16:30</p>
               </div>
            </div>
          </div>

          {/* Right Column: High-End Minimalist Form (7/12) */}
          <div className="lg:col-span-7">
            <div className="bg-[#FCFAF5] p-10 md:p-16 rounded-[4rem] border border-sand/50 shadow-inner">
              <h2 className="text-4xl font-black text-navy mb-12 tracking-tighter">Send a Message</h2>
              
              <form className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="relative">
                    <input type="text" id="name" className="peer w-full bg-transparent border-b-2 border-sand py-3 focus:border-sunset outline-none transition-colors placeholder-transparent" placeholder="Name" />
                    <label htmlFor="name" className="absolute left-0 -top-4 text-[10px] font-black uppercase tracking-widest text-fynbos/50 peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-sunset transition-all">Full Name</label>
                  </div>
                  <div className="relative">
                    <input type="email" id="email" className="peer w-full bg-transparent border-b-2 border-sand py-3 focus:border-sunset outline-none transition-colors placeholder-transparent" placeholder="Email" />
                    <label htmlFor="email" className="absolute left-0 -top-4 text-[10px] font-black uppercase tracking-widest text-fynbos/50 peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-sunset transition-all">Email Address</label>
                  </div>
                </div>

                <div className="relative">
                   <label className="block text-[10px] font-black uppercase tracking-widest text-sunset mb-2">Subject</label>
                   <div className="relative">
                     <select className="w-full appearance-none bg-white border border-sand rounded-xl px-4 py-3 text-sm text-navy font-medium focus:outline-none focus:border-sunset focus:ring-1 focus:ring-sunset/30 transition-all cursor-pointer">
                        <option value="" disabled>Select a subject...</option>
                        <option>General Inquiry</option>
                        <option>Find a Church</option>
                        <option>Departmental Inquiry</option>
                        <option>Other</option>
                     </select>
                     <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-fynbos/50 text-xs">▼</span>
                   </div>
                </div>

                <div className="relative">
                  <textarea rows="4" id="msg" className="peer w-full bg-transparent border-b-2 border-sand py-3 focus:border-sunset outline-none transition-colors placeholder-transparent resize-none" placeholder="Message"></textarea>
                  <label htmlFor="msg" className="absolute left-0 -top-4 text-[10px] font-black uppercase tracking-widest text-fynbos/50 peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-sunset transition-all">How can we help?</label>
                </div>

                <button type="submit" className="group relative w-full overflow-hidden bg-navy py-6 rounded-2xl">
                   <div className="absolute inset-0 bg-sunset translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                   <span className="relative z-10 text-sand font-black uppercase tracking-[0.3em] text-xs group-hover:text-navy transition-colors">
                      Send Message
                   </span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}