// import { Link } from 'react-router-dom';

// export default function ChurchCard({ church }) {
//   return (
//     <div className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 flex flex-col h-full">
      
//       {/* Visual Header */}
//       <div className="relative h-40 bg-navy overflow-hidden">
//         <img 
//           src={church.image} 
//           alt={church.name} 
//           className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
//         />
//         {/* <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-80"></div> */}
        
//         <div className="absolute bottom-4 left-6">
//           <span className="bg-logo-teal text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-white/20">
//             {church.area}
//           </span>
//         </div>
//       </div>

//       {/* Content Area */}
//       <div className="p-8 flex-grow flex flex-col">
//         <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-teal transition-colors leading-tight">
//           {church.name}
//         </h3>

//         <div className="space-y-3 mb-8">
//           <div className="flex items-center text-slate-600 text-sm">
//             <span className="mr-3 text-red font-bold">👤</span> 
//             <span className="font-medium text-slate-800">Pastor:</span> 
//             <span className="ml-1">{church.pastor}</span>
//           </div>
//           <div className="flex items-center text-slate-600 text-sm">
//             <span className="mr-3 text-teal font-bold">⏰</span> 
//             <span className="font-medium text-slate-800">Service:</span> 
//             <span className="ml-1">{church.time}</span>
//           </div>
//         </div>

//         <Link 
//           to={`/churches/${church.id}`}
//           className="mt-auto block w-full text-center py-4 rounded-xl font-bold text-sm border-2 border-navy text-navy hover:bg-navy hover:text-white transition-all duration-300 transform active:scale-95"
//         >
//           View Church Profile
//         </Link>
//       </div>
//     </div>
//   );
// }

import { Link } from 'react-router-dom';

export default function ChurchCard({ church }) {
  return (
    <div className="group bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-navy/10 transition-all duration-700 overflow-hidden border border-sand/50 flex flex-col h-full">
      
      {/* 1. Visual Header - Clean & Atmospheric */}
      <div className="relative h-48 bg-navy overflow-hidden">
        {church.image ? (
          <img 
            src={church.image} 
            alt={church.name} 
            className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-1000 ease-out"
          />
        ) : (
          <div className="w-full h-full bg-navy"></div>
        )}
        {/* Coastal Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent"></div>
        
        {/* Area Badge - Styled with Glassmorphism */}
        <div className="absolute top-4 left-6">
          <span className="backdrop-blur-md bg-sunset/80 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] border border-white/20">
            {church.area}
          </span>
        </div>
      </div>

      {/* 2. Content Area - Refined Typography */}
      <div className="p-8 flex-grow flex flex-col bg-white">
        <h3 className="text-2xl font-black text-navy mb-5 group-hover:text-teal transition-colors leading-tight tracking-tighter">
          {church.name}
        </h3>

        <div className="space-y-4 mb-10">
          <div className="flex items-center text-slate-500 text-sm font-light">
            <span className="mr-3 w-5 h-5 flex items-center justify-center bg-sand rounded-lg text-[10px]">👤</span> 
            <span className="font-bold text-navy/70 mr-1 uppercase tracking-widest text-[10px]">Pastor:</span> 
            <span className="text-fynbos">{church.pastor}</span>
          </div>
          <div className="flex items-center text-slate-500 text-sm font-light">
            <span className="mr-3 w-5 h-5 flex items-center justify-center bg-sand rounded-lg text-[10px]">⏰</span> 
            <span className="font-bold text-navy/70 mr-1 uppercase tracking-widest text-[10px]">Sunday:</span> 
            <span className="text-fynbos">{church.time}</span>
          </div>
        </div>

        {/* 3. Button - Coastal Zen Style */}
        <Link 
          to={`/churches/${church.id}`}
          className="mt-auto relative overflow-hidden group/btn"
        >
          <div className="w-full text-center py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] border-2 border-sunset text-navy transition-all duration-300 group-hover/btn:bg-sunset group-hover/btn:text-white group-hover/btn:border-sunset">
            Explore Profile
          </div>
        </Link>
      </div>
    </div>
  );
}