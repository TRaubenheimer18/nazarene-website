// import React, { useState } from 'react';
// import ChurchCard from '../components/ChurchCard';
// import { churches } from '../data/churches';

// export default function Churches() {
//   const [searchTerm, setSearchTerm] = useState("");

//   // Search Logic
//   const filteredChurches = churches.filter(church =>
//     church.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     church.area.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="bg-slate-50 min-h-screen">
      
//       {/* Header Section */}
//       <div className="bg-navy text-white py-20 px-6 text-center">
//         <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 uppercase">
//           District <span className="text-logo-teal">Churches</span>
//         </h1>
//         <p className="text-sky text-lg font-light max-w-2xl mx-auto">
//           Explore our 35 Nazarene communities serving across the Western Cape.
//         </p>
//       </div>

//       {/* Search Bar Section */}
//       <div className="max-w-7xl mx-auto px-6 -mt-8">
//         <div className="bg-white p-2 rounded-2xl shadow-xl border border-slate-100">
//           <input
//             type="text"
//             placeholder="Search by name or area"
//             className="w-full p-4 rounded-xl border-none focus:ring-2 focus:ring-teal outline-none text-slate-700"
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//         <p className="mt-4 text-slate-400 text-sm font-medium ml-2">
//           Showing {filteredChurches.length} results
//         </p>
//       </div>

//       {/* Grid Section */}
//       <div className="max-w-7xl mx-auto px-6 py-16">
//         {filteredChurches.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//             {filteredChurches.map((church) => (
//               <ChurchCard key={church.id} church={church} />
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
//             <p className="text-slate-400 text-lg">No churches found matching your search.</p>
//           </div>
//         )}
//       </div>

//     </div>
//   );
// }

import React, { useState } from 'react';
import ChurchCard from '../components/ChurchCard';
import { churches } from '../data/churches';

export default function Churches() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredChurches = churches.filter(church =>
    church.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    church.area.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#FCFAF5] min-h-screen selection:bg-sunset/30">
      
      {/* 1. Header Section - Using the deep Atlantic Mesh style */}
      <div className="relative bg-navy py-28 px-6 text-center overflow-hidden">
        {/* Subtle background glow to match Home/About */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-atlantic rounded-full blur-[120px] opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
            <span className="text-sand">District </span><span className="text-sand italic font-serif">Churches</span>
          </h1>
          <p className="text-sky/80 text-xl font-light max-w-2xl mx-auto leading-relaxed">
            A family of 35 communities across the Western Cape, <br/> 
            bound by faith and service.
          </p>
        </div>
      </div>

      {/* 2. Search Bar Section - Floating with Sunset Focus */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white p-2 rounded-[2.5rem] shadow-2xl shadow-navy/10 border border-slate-100 group transition-all">
          <div className="relative flex items-center">
             <span className="absolute left-6 text-2xl group-focus-within:scale-110 transition-transform">🔍</span>
             <input
                type="text"
                placeholder="Find a church by name or suburb..."
                className="w-full pl-16 pr-8 py-5 rounded-[2rem] border-none focus:ring-2 focus:ring-sunset/50 outline-none text-navy text-lg placeholder:text-slate-300 transition-all bg-transparent"
                onChange={(e) => setSearchTerm(e.target.value)}
             />
          </div>
        </div>
        <div className="mt-6 flex justify-between items-center px-4">
           <p className="text-fynbos/60 text-xs font-black uppercase tracking-[0.2em]">
             Directory Filter
           </p>
           <p className="text-navy font-bold text-sm bg-sand px-4 py-1 rounded-full">
             {filteredChurches.length} Congregations
           </p>
        </div>
      </div>

      {/* 3. Grid Section - Using Atlantic & Sand accents in cards */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {filteredChurches.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredChurches.map((church) => (
              <ChurchCard key={church.id} church={church} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-white rounded-[3rem] border border-dashed border-sand shadow-inner">
            <div className="text-6xl mb-6 opacity-20">⛵</div>
            <p className="text-fynbos/40 text-2xl font-light italic">
              No churches found matching your search.
            </p>
            <button 
              onClick={() => setSearchTerm("")}
              className="mt-6 text-red font-bold hover:underline tracking-widest uppercase text-xs"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>

      {/* 4. Bottom Support Section */}
      <div className="max-w-4xl mx-auto pb-24 px-6 text-center">
        <div className="h-[1px] w-20 bg-sunset mx-auto mb-8 opacity-40"></div>
        {/* <p className="text-slate-400 text-sm italic">
          Are you a pastor looking to register a new church? <br/>
          Contact the <span className="text-navy font-bold">Western Cape District Office</span>.
        </p> */}
      </div>

    </div>
  );
}