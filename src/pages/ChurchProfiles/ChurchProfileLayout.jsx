import { Link } from 'react-router-dom';
import { churches } from '../../data/churches';

export default function ChurchProfileLayout({ churchId }) {
  const church = churches.find(c => c.id === churchId);

  if (!church) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-navy-blue">
        <h2 className="text-3xl font-black mb-4">Church not found</h2>
        <Link to="/churches" className="text-atlantic underline">← Back to Churches</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="relative h-72 bg-navy-blue overflow-hidden">
        {church.image ? (
          <img src={church.image} alt={church.name} className="w-full h-full object-cover opacity-50" />
        ) : (
          <div className="w-full h-full bg-atlantic/80" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-blue via-navy-blue/60 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8 max-w-5xl mx-auto">
          <span className="text-[10px] font-black text-sand/70 uppercase tracking-[0.3em]">{church.area}</span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter mt-1">{church.name}</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { label: 'Pastor', value: church.pastor, icon: '👤' },
            { label: 'Sunday Service', value: church.time, icon: '⏰' },
            { label: 'Address', value: church.address || 'To be added', icon: '📍' },
          ].map((item, i) => (
            <div key={i} className="bg-sand/30 rounded-[1.5rem] p-6 border border-sand">
              <span className="text-2xl mb-3 block">{item.icon}</span>
              <p className="text-[10px] font-black text-atlantic uppercase tracking-[0.3em] mb-1">{item.label}</p>
              <p className="text-navy-blue font-semibold text-sm">{item.value}</p>
            </div>
          ))}
        </div>

        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-10 bg-crimson" />
            <span className="text-[10px] font-black text-atlantic uppercase tracking-[0.4em]">About</span>
          </div>
          <p className="text-slate-400 italic text-sm">No description added yet.</p>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-10 bg-crimson" />
            <span className="text-[10px] font-black text-atlantic uppercase tracking-[0.4em]">Services & Times</span>
          </div>
          <p className="text-slate-400 italic text-sm">No additional service times added yet.</p>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-10 bg-crimson" />
            <span className="text-[10px] font-black text-atlantic uppercase tracking-[0.4em]">Contact</span>
          </div>
          <p className="text-slate-400 italic text-sm">No contact details added yet.</p>
        </div>

        <Link to="/churches" className="inline-flex items-center gap-2 text-atlantic font-bold text-sm hover:text-crimson transition-colors">
          ← Back to all Churches
        </Link>
      </div>
    </div>
  );
}
