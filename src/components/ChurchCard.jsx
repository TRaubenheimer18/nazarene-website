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
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
          />
        ) : (
          <div className="w-full h-full bg-navy"></div>
        )}
        
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
            <span className="font-bold text-navy/70 mr-1 uppercase tracking-widest text-[10px]">Sunday Service:</span> 
            <span className="text-fynbos">{church.time}</span>
          </div>
          {church.address && (
            <div className="flex items-start text-slate-500 text-sm font-light">
              <span className="mr-3 w-5 h-5 flex items-center justify-center bg-sand rounded-lg text-[10px] shrink-0">📍</span>
              <span className="font-bold text-navy/70 mr-1 uppercase tracking-widest text-[10px]">Address:</span> 
              <span className="text-fynbos">{church.address}</span>
            </div>
          )}
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