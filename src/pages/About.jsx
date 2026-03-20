// import React from 'react';

// export default function About() {
//   return (
//     <div className="bg-white min-h-screen">
      
//       {/* 1. Professional Hero Section */}
//       <section className="relative bg-navy py-24 px-6 overflow-hidden">
//         {/* Decorative background element */}
//         <div className="absolute top-0 right-0 w-1/3 h-full bg-logo-teal/10 skew-x-12 transform translate-x-20"></div>
        
//         <div className="max-w-5xl mx-auto text-center relative z-10">
//           <h1 className="text-sm font-bold text-sky tracking-[0.3em] uppercase mb-4">Established in Faith</h1>
//           <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
//             Western Cape <span className="text-logo-teal">District</span>
//           </h2>
//           <p className="text-xl text-sky/80 font-light max-w-3xl mx-auto leading-relaxed">
//             A movement of 35 Great Commission churches making Christlike disciples 
//             across the beautiful landscape of the Western Cape.
//           </p>
//         </div>
//       </section>

//       {/* 2. Mission & Vision - Split Layout */}
//       <section className="py-20 px-6">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
//           <div className="space-y-6">
//             <h3 className="text-3xl font-bold text-navy border-l-4 border-red pl-6">Our Mission</h3>
//             <p className="text-lg text-slate-600 leading-relaxed">
//               We exist to serve as a resource and support network for our local congregations. 
//               Our mission is to empower pastors, develop leaders, and plant new churches 
//               that reflect the holiness and love of Jesus Christ in every community.
//             </p>
//             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
//               <h4 className="font-bold text-navy mb-2 underline decoration-teal">Our Vision</h4>
//               <p className="text-slate-500 italic">
//                 "To see a vibrant, holiness-centered Nazarene presence in every town and suburb 
//                 of the Western Cape, bringing hope to the broken and light to the dark."
//               </p>
//             </div>
//           </div>
          
//           {/* Visual Side - Placeholder for a District Office or Group Photo */}
//           <div className="bg-slate-200 rounded-3xl h-80 md:h-[450px] shadow-2xl overflow-hidden relative border-8 border-white">
//              <div className="absolute inset-0 bg-gradient-to-br from-navy/40 to-transparent"></div>
//              <div className="flex items-center justify-center h-full text-slate-400 font-medium">
//                 [District Leadership Image Placeholder]
//              </div>
//           </div>
//         </div>
//       </section>

//       {/* 3. Core Values / The Nazarene Essentials */}
//       <section className="bg-navy py-20 px-6 text-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold mb-4">What We Stand For</h2>
//             <div className="h-1 w-20 bg-red mx-auto"></div>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-10">
//             {/* Value 1 */}
//             <div className="text-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
//               <div className="text-4xl mb-6">📖</div>
//               <h4 className="text-xl font-bold mb-4 text-logo-teal">Christian</h4>
//               <p className="text-sky/70 text-sm leading-relaxed">
//                 We are a part of the universal church of Jesus Christ. We confess the historic 
//                 creeds and the authority of the Holy Scriptures.
//               </p>
//             </div>

//             {/* Value 2 */}
//             <div className="text-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
//               <div className="text-4xl mb-6">🔥</div>
//               <h4 className="text-xl font-bold mb-4 text-logo-teal">Holiness</h4>
//               <p className="text-sky/70 text-sm leading-relaxed">
//                 We believe that God, who is holy, calls us to a life of holiness. We believe 
//                 the Holy Spirit cleanses and empowers us to love God and neighbor.
//               </p>
//             </div>

//             {/* Value 3 */}
//             <div className="text-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
//               <div className="text-4xl mb-6">⛪</div>
//               <h4 className="text-xl font-bold mb-4 text-logo-teal">Missional</h4>
//               <p className="text-sky/70 text-sm leading-relaxed">
//                 We are a sent people. Our mission is to take the message of Christ to 
//                 our neighbors and to the ends of the earth through service and evangelism.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

      // {/* 4. Leadership Section Placeholder */}
      // <section className="py-20 px-6 max-w-7xl mx-auto">
      //   <div className="flex flex-col md:flex-row justify-between items-end mb-12">
      //     <div>
      //       <h2 className="text-3xl font-bold text-navy">District Leadership</h2>
      //       <p className="text-slate-500 mt-2">The team serving the Western Cape District</p>
      //     </div>
      //     <button className="mt-4 md:mt-0 text-teal font-bold hover:underline">
      //       View All Leaders →
      //     </button>
      //   </div>
        
      //   {/* Simple Leadership Grid */}
      //   <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      //      {[1, 2, 3, 4].map((i) => (
      //        <div key={i} className="group">
      //           <div className="aspect-square bg-slate-100 rounded-2xl mb-4 overflow-hidden border border-slate-200">
      //              <div className="w-full h-full bg-slate-200 group-hover:scale-105 transition-transform duration-500"></div>
      //           </div>
      //           <h5 className="font-bold text-navy">Leadership Name</h5>
      //           <p className="text-xs text-red uppercase tracking-wider font-semibold">Position Title</p>
      //        </div>
      //      ))}
      //   </div>
      // </section>

//     </div>
//   );
// }

import React from 'react';

export default function About() {
  return (
    <div className="bg-white min-h-screen selection:bg-sunset/30 selection:text-navy">
      
      {/* 1. The "Golden Hour" Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-navy">
        {/* Visual Layer: Soft Gradient Mesh representing the Cape Sky at Dusk */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-atlantic/40 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sunset/20 rounded-full blur-[130px] translate-y-1/2 -translate-x-1/4"></div>
          {/* Subtle Stone Texture Overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/p6.png')] opacity-10 mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-4 mb-8 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
            <span className="text-[10px] font-black tracking-[0.5em] text-sunset uppercase">Western Cape District</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black text-white leading-none tracking-tighter mb-8">
            Faith as Deep <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sand via-sky to-white italic">
              as the Ocean.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-sky/80 font-light max-w-3xl mx-auto leading-relaxed">
            From the slopes of Table Mountain to the shores of the Atlantic, 
            we are a family of 35 churches woven into the heart of the Cape.
          </p>
        </div>
        
        {/* Scroll Indicator - Minimalist */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-[1px] h-12 bg-gradient-to-b from-sunset to-transparent"></div>
        </div>
      </section>

      {/* 2. Mission & Landscape - High Contrast Organic Layout */}
      <section className="py-32 px-6 relative bg-[#FCFAF5]"> {/* Warm Sand Tint */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          
          <div className="space-y-12">
            <div>
              <h2 className="text-red font-black uppercase tracking-widest text-xs mb-4">Our Calling</h2>
              <h3 className="text-5xl md:text-6xl font-black text-navy leading-tight tracking-tighter">
                Rooted in Holiness. <br />
                <span className="text-fynbos">Grounded in Grace.</span>
              </h3>
            </div>
            
            <p className="text-xl text-slate-600 leading-relaxed font-light">
              We serve as the heartbeat of the Nazarene movement in the Western Cape, 
              empowering 35 congregations to flourish as beacons of hope, healing, 
              and holiness in every town and suburb.
            </p>

            {/* Vision Card: Clean Typography with Glass Accent */}
            <div className="relative p-12 bg-white rounded-[3rem] shadow-2xl shadow-navy/5 border border-slate-100 overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-sunset"></div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">The Vision</h4>
              <p className="text-2xl text-navy font-serif italic leading-snug">
                "To see a vibrant, holiness-centered Nazarene presence in every community, 
                bringing light to the dark and hope to the broken."
              </p>
            </div>
          </div>

          {/* Artistic Representation of the Cape */}
          <div className="relative group">
            <div className="aspect-[4/5] bg-navy rounded-[4rem] shadow-2xl overflow-hidden transform rotate-2 group-hover:rotate-0 transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-to-tr from-atlantic to-transparent opacity-60"></div>
              {/* This represents the "Window to the Cape" */}
              <div className="w-full h-full border-[20px] border-white/10 flex items-center justify-center">
                 <span className="text-sand/10 text-9xl font-black select-none vertical-text">WC</span>
              </div>
            </div>
            {/* Floating "35 Churches" Badge */}
            <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-full shadow-2xl border border-slate-50 flex flex-col items-center justify-center w-44 h-44">
              <span className="text-4xl font-black text-navy leading-none">35</span>
              <span className="text-[10px] font-bold text-red uppercase tracking-widest mt-1">Churches</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The "Essentials" - Fynbos Inspired Grid */}
      <section className="py-32 px-6 bg-navy relative overflow-hidden">
        {/* Subtle Wave Pattern */}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-atlantic/10 skew-y-3 translate-y-32"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center mb-20">
          <h2 className="text-sunset font-black tracking-widest uppercase text-xs mb-4">What Defines Us</h2>
          <h3 className="text-4xl md:text-5xl font-black text-sand tracking-tighter italic">The Nazarene Way.</h3>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            { icon: '📖', title: 'Christian', desc: 'Rooted in the historic creeds and the transformative authority of Scripture.' },
            { icon: '🌿', title: 'Holiness', desc: 'A people empowered by the Holy Spirit to reflect the pure love of God in the Cape.' },
            { icon: '⛵', title: 'Missional', desc: 'Sent to serve the diverse needs of our region with compassion and action.' }
          ].map((v, i) => (
            <div key={i} className="group bg-white/5 backdrop-blur-md p-12 rounded-[3.5rem] border border-white/10 hover:bg-white/20 transition-all duration-500 text-center hover:-translate-y-3 shadow-xl">
              <div className="text-5xl mb-8 group-hover:scale-110 transition-transform">{v.icon}</div>
              <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">{v.title}</h4>
              <p className="text-sky/60 text-sm font-light leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Leadership - Editorial Portrait Grid */}
      <section className="py-32 px-6 max-w-7xl mx-auto bg-white">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-sm font-black text-red uppercase tracking-[0.3em] mb-4">Leadership</h2>
            <h3 className="text-4xl md:text-5xl font-black text-navy tracking-tighter leading-tight">Serving the District.</h3>
          </div>
          <button className="bg-sand text-navy px-10 py-4 rounded-full font-bold hover:bg-navy hover:text-white transition-all shadow-xl shadow-sand/40">
            Meet the Team
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
           {[1, 2, 3, 4].map((i) => (
             <div key={i} className="group cursor-pointer">
                <div className="aspect-[3/4] bg-[#F5F2EA] rounded-[4rem] mb-6 overflow-hidden border border-slate-100 shadow-sm transition-all group-hover:shadow-2xl group-hover:-translate-y-2">
                   {/* This would be the Pastor's Photo */}
                   <div className="w-full h-full bg-atlantic/10 mix-blend-multiply opacity-40"></div>
                </div>
                <h5 className="font-bold text-navy text-xl px-4">Leadership Name</h5>
                <p className="text-[10px] text-red uppercase tracking-[0.2em] font-black mt-1 px-4 italic">District Office</p>
             </div>
           ))}
        </div>
      </section>
      
    </div>
  );
}