import { EVENTS, DEPT_COLORS } from '../data/events';
import EventsImage from '../assets/event.jpg';
import NYILogo from '../assets/NYI-logo.jpeg';
import NazareneLogo from '../assets/Nazarene-logo.jpeg';
import NMILogo from '../assets/NMI-logo.jpeg';
import NDILogo from '../assets/NDI-logo.jpg';

const MONTH_NAMES = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
];

const DEPT_ORDER = ['District', 'NMI', 'NYI', 'NDI', 'Church Plant', 'Campaign & Rally'];

function getUniqueEventsByDept() {
  const seen = new Set();
  return EVENTS.filter(e => {
    const key = `${e.department}__${e.title}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function formatDate(event) {
  const month = MONTH_NAMES[event.month - 1];
  if (event.dayEnd) return `${month} ${event.day}–${event.dayEnd}, ${event.year}`;
  return `${month} ${event.day}, ${event.year}`;
}

export default function Events() {
  const uniqueEvents = getUniqueEventsByDept();

  const grouped = DEPT_ORDER.map(dept => ({
    dept,
    color: DEPT_COLORS[dept]?.color,
    events: uniqueEvents.filter(e => e.department === dept),
  })).filter(g => g.events.length > 0);

  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <div className="relative overflow-hidden">
        <img src={EventsImage} alt="Events" className="w-full h-[50vh] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-blue via-navy-blue/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/75 via-black/40 to-transparent flex items-end pb-8 px-6">
          <div className="max-w-6xl mx-auto w-full">
            <span
              className="text-[10px] font-black uppercase tracking-[0.4em]"
              style={{ color: 'rgba(242,232,207,0.6)' }}
            >
              Western Cape District
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mt-2">
              Events
            </h1>
            <p className="text-white/70 font-light mt-2 max-w-xl leading-relaxed text-sm">
              Upcoming events across all departments of the Western Cape District Church of the Nazarene.
            </p>
          </div>
        </div>
      </div>

      {/* Sections per department */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">
        {grouped.map(({ dept, color, events }) => (
          <section key={dept}>

            {/* Section header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-10">
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-[2px] w-10" style={{ backgroundColor: color }} />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-atlantic">{dept}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black tracking-tighter" style={{ color: '#132c43' }}>
                  {dept} Events
                </h2>
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                {events.length} {events.length === 1 ? 'Event' : 'Events'}
              </span>
            </div>

            {/* 4-column card grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col"
                >
                  {/* Image area */}
                  <div
                    className="relative overflow-hidden flex items-end"
                    style={{ backgroundColor: color, aspectRatio: '389 / 315' }}
                  >
                    {dept === 'NYI' || dept === 'NDI' || dept === 'NMI' || dept === 'District' || dept === 'Church Plant' || dept === 'Campaign & Rally' ? (
                      <img
                        src={dept === 'NYI' ? NYILogo : dept === 'NDI' ? NDILogo: dept === 'NMI' ? NMILogo : NazareneLogo}
                        alt={dept}
                        className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        <div className="absolute top-4 right-4 z-10">
                          <span className="text-[8px] font-black uppercase tracking-[0.15em] text-white/40 bg-black/20 px-2 py-1">
                            Photo TBA
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Card body */}
                  <div className="p-6 flex flex-col gap-3 flex-1 bg-white">

                    

                    {/* Title */}
                    <h3
                      className="font-black text-lg tracking-tight leading-snug group-hover:opacity-80 transition-opacity"
                      style={{ color: '#132c43' }}
                    >
                      {event.title}
                    </h3>

                    {/* Meta details */}
                    <div className="space-y-2 mt-1">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span className="w-4 h-4 rounded-md bg-slate-100 flex items-center justify-center text-[10px]">📅</span>
                        <span>{formatDate(event)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="w-4 h-4 rounded-md bg-slate-100 flex items-center justify-center text-[10px]">🕐</span>
                        <span className="italic">{event.time || 'Time to be announced'}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="w-4 h-4 rounded-md bg-slate-100 flex items-center justify-center text-[10px]">📍</span>
                        <span className="italic">{event.location || 'Venue to be announced'}</span>
                      </div>
                    </div>

                    {/* Divider + description placeholder */}
                    <div className="border-t border-slate-100 pt-4 mt-auto">
                      <p className="text-xs text-slate-400 italic leading-relaxed">
                        {event.description || 'More details coming soon.'}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Footer CTA */}
      {/* <div className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <div className="h-[2px] w-10 bg-crimson" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-atlantic">Stay Updated</span>
            </div>
            <p className="text-slate-500 text-sm font-light max-w-sm leading-relaxed">
              Check the calendar for full scheduling details and multi-day event breakdowns.
            </p>
          </div>
          <a
            href="/calendar"
            className="shrink-0 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] text-white transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 shadow-lg"
            style={{ backgroundColor: '#132c43' }}
          >
            View Full Calendar →
          </a>
        </div>
      </div> */}

    </div>
  );
}
