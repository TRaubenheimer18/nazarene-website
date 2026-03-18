import { Link } from 'react-router-dom';

export default function ChurchCard({ church }) {
  return (
    <div className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 flex flex-col h-full">
      
      {/* Visual Header */}
      <div className="relative h-40 bg-navy overflow-hidden">
        <img 
          src={church.image} 
          alt={church.name} 
          className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-80"></div> */}
        
        <div className="absolute bottom-4 left-6">
          <span className="bg-logo-teal text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-white/20">
            {church.area}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-teal transition-colors leading-tight">
          {church.name}
        </h3>

        <div className="space-y-3 mb-8">
          <div className="flex items-center text-slate-600 text-sm">
            <span className="mr-3 text-red font-bold">👤</span> 
            <span className="font-medium text-slate-800">Pastor:</span> 
            <span className="ml-1">{church.pastor}</span>
          </div>
          <div className="flex items-center text-slate-600 text-sm">
            <span className="mr-3 text-teal font-bold">⏰</span> 
            <span className="font-medium text-slate-800">Service:</span> 
            <span className="ml-1">{church.time}</span>
          </div>
        </div>

        <Link 
          to={`/churches/${church.id}`}
          className="mt-auto block w-full text-center py-4 rounded-xl font-bold text-sm border-2 border-navy text-navy hover:bg-navy hover:text-white transition-all duration-300 transform active:scale-95"
        >
          View Church Profile
        </Link>
      </div>
    </div>
  );
}