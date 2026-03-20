// // src/pages/Home.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// // Step 1: Import the image from your assets folder
// import CapeTownImg from '../assets/cape-town.jpg'; 

// export default function Home() {
//   return (
//     <div className="bg-white min-h-screen">
      
//       {/* 1. Hero Section - Dynamic & Modern */}
//       <section className="relative bg-navy overflow-hidden">
//         {/* Subtle Background Pattern or Image Overlay */}
//         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
//         <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10 grid md:grid-cols-2 gap-12 items-center">
//           <div className="text-left">
//             <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
//               Empowering Churches. <br />
//               <span className="text-logo-teal">Transforming Communities.</span>
//             </h1>
//             <p className="text-lg md:text-xl text-sky font-light mb-10 max-w-lg">
//               The Western Cape District is a family of 35 churches dedicated to holiness, 
//               service, and spreading the hope of Christ across our region.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Link 
//                 to="/churches" 
//                 className="bg-red text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-yellow hover:text-navy transition-all duration-300 shadow-lg shadow-black/20"
//               >
//                 Find a Local Church
//               </Link>
//               <Link 
//                 to="/about" 
//                 className="border-2 border-logo-teal text-logo-teal px-8 py-4 rounded-xl font-bold text-center hover:bg-logo-teal hover:text-white transition-all"
//               >
//                 Our Mission
//               </Link>
//             </div>
//           </div>
          
//           {/* Hero Visual Element */}
//           <div className="hidden md:block relative">
//             <div className="bg-navy rounded-3xl h-[400px] w-full transform rotate-3 shadow-2xl overflow-hidden border-4 border-white/10 relative">
//                {/* Step 2: Use the imported image in an <img> tag */}
//                <img 
//                  src={CapeTownImg} 
//                  alt="Table Mountain, Western Cape" 
//                  className="absolute inset-0 w-full h-full object-cover"
//                />
               
//                {/* This overlay stays to blend the image nicely */}
//                <div className="absolute inset-0 bg-navy/20 mix-blend-overlay"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 2. Quick Stats / Impact Bar */}
//       <div className="bg-white border-y border-slate-100 py-10">
//         <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//           <div>
//             <p className="text-4xl font-bold text-navy">35</p>
//             <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Churches</p>
//           </div>
//           <div>
//             <p className="text-4xl font-bold text-red">1</p>
//             <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold">District</p>
//           </div>
//           <div>
//             <p className="text-4xl font-bold text-navy">5000+</p>
//             <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Members</p>
//           </div>
//           <div>
//             <p className="text-4xl font-bold text-teal">100%</p>
//             <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Committed</p>
//           </div>
//         </div>
//       </div>

//       {/* 3. About Section - Clean & High Contrast */}
//       <section className="py-20 px-6 bg-slate-50">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-sm font-bold text-red tracking-[0.2em] uppercase mb-4">Our Heart</h2>
//           <h3 className="text-4xl font-bold text-navy mb-8">About the Western Cape District</h3>
//           <p className="text-xl text-slate-600 leading-relaxed italic">
//             "To be a movement of Great Commission churches, making Christlike disciples 
//             in every community of the Western Cape."
//           </p>
//           <div className="mt-12 grid sm:grid-cols-3 gap-8">
//              <div className="p-6 bg-white rounded-2xl shadow-sm border border-sky/30">
//                 <div className="text-3xl mb-4 text-teal">📖</div>
//                 <h4 className="font-bold text-navy mb-2">Holiness</h4>
//                 <p className="text-sm text-slate-500 text-balance">Grounded in the Word of God and the beauty of holiness.</p>
//              </div>
//              <div className="p-6 bg-white rounded-2xl shadow-sm border border-sky/30">
//                 <div className="text-3xl mb-4 text-teal">🤝</div>
//                 <h4 className="font-bold text-navy mb-2">Fellowship</h4>
//                 <p className="text-sm text-slate-500 text-balance">Supporting our pastors and congregations as one family.</p>
//              </div>
//              <div className="p-6 bg-white rounded-2xl shadow-sm border border-sky/30">
//                 <div className="text-3xl mb-4 text-teal">🌍</div>
//                 <h4 className="font-bold text-navy mb-2">Mission</h4>
//                 <p className="text-sm text-slate-500 text-balance">Reaching the lost and serving the marginalized.</p>
//              </div>
//           </div>
//         </div>
//       </section>

//       {/* 4. CTA Section */}
//       <section className="py-20 bg-sky/20">
//          <div className="max-w-5xl mx-auto px-6 rounded-3xl bg-navy p-12 text-center shadow-xl">
//             <h2 className="text-3xl font-bold text-white mb-6">Are you looking for a church home?</h2>
//             <p className="text-sky mb-8 text-lg">Use our directory to find a Nazarene community near you.</p>
//             <Link to="/churches" className="inline-block bg-white text-navy font-bold px-10 py-4 rounded-xl hover:bg-logo-teal hover:text-white transition-all">
//                Browse Directory
//             </Link>
//          </div>
//       </section>
      
//     </div>
//   );
// }

// src/pages/Home.jsx
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
              We are a movement of 37 congregations woven into the fabric of the Cape, 
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
            { label: 'Churches', val: '37', color: 'text-atlantic' },
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
              Browse 37 Churches
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