import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen selection:bg-atlantic/30">

      {/* 1. Hero */}
      <section className="relative bg-white py-20 md:py-28 px-4 md:px-6 text-center overflow-hidden">


        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-8 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
            {/* <div className="w-1.5 h-1.5 rounded-full bg-atlantic"></div> */}
            {/* <span className="text-[10px] font-black text-atlantic uppercase tracking-[0.5em]">We'd Love to Hear From You</span> */}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
            <span className="text-atlantic">Get in </span><span className="text-atlantic italic font-serif">Touch.</span>
          </h1>

          <p className="text-base md:text-xl text-sky/80 font-light max-w-2xl mx-auto leading-relaxed">
            Whether you're looking for a church home or have a question for the district office,<br />
            we are here to listen and serve.
          </p>
        </div>
      </section>

      {/* 2. Contact Content */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">

          {/* Left: Info */}
          <div className="lg:col-span-5 space-y-6">

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-10 bg-crimson"></div>
                <span className="text-[10px] font-black text-light-blue uppercase tracking-[0.4em]">District Office</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-navy-blue tracking-tighter leading-tight mb-8">
                Headquarters.
              </h2>
            </div>

            <div className="bg-white rounded-[2rem] p-6 md:p-8 border border-slate-100 shadow-sm space-y-6">
              {[
                { icon: '📍', label: 'Address', value: 'P.O Box 42624, Lotus River, Cape Town, 7854' },
                // { icon: '📞', label: 'Phone', value: '+27 (21) 000 0000' },
                { icon: '✉️', label: 'Email', value: 'Secretary@nazarenecapetown.com' },
                { icon: '🕐', label: 'Office Hours', value: 'Mon – Fri: 08:30 – 16:30' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-lg shrink-0">{item.icon}</div>
                  <div>
                    <p className="text-[10px] font-black text-atlantic uppercase tracking-[0.3em] mb-1">{item.label}</p>
                    <p className="text-sm text-navy/80 font-light leading-snug">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative bg-navy rounded-[2rem] p-6 md:p-6 border border-slate-100 shadow-sm space-y-1 overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-atlantic rounded-1-[2rem]"></div>
              <p className="text-[10px] font-black text-atlantic uppercase tracking-[0.4em] mb-3">Our Commitment</p>
              <p className="text-black font-light text-sm leading-relaxed">
                We aim to respond to all inquiries within 2 business days. For urgent pastoral matters, please call the district office directly.
              </p>
            </div>

          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-7 md:p-14 rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 shadow-sm">

              <div className="flex items-center gap-4 mb-10">
                <div className="h-[2px] w-10 bg-crimson"></div>
                <span className="text-[10px] font-black text-light-blue uppercase tracking-[0.4em]">Send a Message</span>
              </div>

              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="relative">
                    <input type="text" id="name" className="peer w-full bg-transparent border-b-2 border-slate-100 py-3 focus:border-atlantic outline-none transition-colors placeholder-transparent" placeholder="Name" />
                    <label htmlFor="name" className="absolute left-0 -top-4 text-[10px] font-black uppercase tracking-widest text-fynbos/50 peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-atlantic transition-all">Full Name</label>
                  </div>
                  <div className="relative">
                    <input type="email" id="email" className="peer w-full bg-transparent border-b-2 border-slate-100 py-3 focus:border-atlantic outline-none transition-colors placeholder-transparent" placeholder="Email" />
                    <label htmlFor="email" className="absolute left-0 -top-4 text-[10px] font-black uppercase tracking-widest text-fynbos/50 peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-atlantic transition-all">Email Address</label>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-atlantic mb-3">Subject</label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-white border border-slate-100 rounded-xl px-4 py-3 text-sm text-navy font-medium focus:outline-none focus:border-atlantic focus:ring-1 focus:ring-atlantic/30 transition-all cursor-pointer">
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
                  <textarea rows="4" id="msg" className="peer w-full bg-transparent border-b-2 border-slate-100 py-3 focus:border-atlantic outline-none transition-colors placeholder-transparent resize-none" placeholder="Message"></textarea>
                  <label htmlFor="msg" className="absolute left-0 -top-4 text-[10px] font-black uppercase tracking-widest text-fynbos/50 peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-atlantic transition-all">How can we help?</label>
                </div>

                <button type="submit" className="group relative w-full overflow-hidden bg-navy py-5 rounded-2xl">
                  <div className="absolute inset-0 bg-atlantic translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  <span className="relative z-10 text-atlantic font-black uppercase tracking-[0.3em] text-xs group-hover:text-white transition-colors">
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



