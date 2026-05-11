import React, { useState } from 'react';

const DEPARTMENTS = ['All', 'District', 'NMI', 'NYI', 'NDI', 'Church Plant', 'Campaign & Rally'];

const DEPT_COLORS = {
  District:           { color: '#132c43' },
  NMI:                { color: '#7c2938' },
  NYI:                { color: '#00384D' },
  NDI:                { color: '#5a7a3a' },
  'Church Plant':     { color: '#7c5c2a' },
  'Campaign & Rally': { color: '#4a3060' },
};

// Add events here: { title, department, year, month (1-12), day, time?, location?, description? }
const EVENTS = [
  { title: 'Youth Week', department: 'NYI', year: 2025, month: 5, day: 27, time: '7:00 PM', location: 'Belhar Church of the Nazarene' },
  { title: 'Youth Week', department: 'NYI', year: 2025, month: 5, day: 28, time: '7:00 PM', location: 'Sunnyside Church of the Nazarene' },
  { title: 'Youth Week', department: 'NYI', year: 2025, month: 5, day: 29, time: '7:00 PM', location: 'Bonteheuwel Church of the Nazarene' },
];

const MONTH_NAMES = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
];
const DAY_LABELS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const DAY_LABELS_SHORT = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

export default function Calendar() {
  const today = new Date();
  const firstEventYear = EVENTS.length > 0 ? Math.min(...EVENTS.map(e => e.year)) : today.getFullYear();
  const firstEventMonth = EVENTS.length > 0
    ? EVENTS.filter(e => e.year === firstEventYear).reduce((min, e) => Math.min(min, e.month), 12) - 1
    : today.getMonth();
  const [currentMonth, setCurrentMonth] = useState(firstEventMonth);
  const [currentYear, setCurrentYear] = useState(firstEventYear);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedKey, setSelectedKey] = useState(null);
  const [selectedEvents, setSelectedEvents] = useState([]);

  const filtered = activeFilter === 'All' ? EVENTS : EVENTS.filter(e => e.department === activeFilter);

  function prevMonth() {
    setSelectedKey(null); setSelectedEvents([]);
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(y => y - 1); }
    else setCurrentMonth(m => m - 1);
  }

  function nextMonth() {
    setSelectedKey(null); setSelectedEvents([]);
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(y => y + 1); }
    else setCurrentMonth(m => m + 1);
  }

  function handleDayClick(key, events) {
    if (selectedKey === key) { setSelectedKey(null); setSelectedEvents([]); }
    else { setSelectedKey(key); setSelectedEvents(events); }
  }

  const month = currentMonth + 1;
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < firstDayOfWeek; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  const weeks = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));

  const monthEvents = filtered.filter(e => e.year === currentYear && e.month === month);

  return (
    <div className="bg-white min-h-screen flex flex-col">

      {/* Hero */}
      <div className="pt-32 pb-10 px-6" style={{ backgroundColor: '#132c43' }}>
        <div className="max-w-6xl mx-auto">
          <span className="text-[10px] font-black uppercase tracking-[0.4em]" style={{ color: 'rgba(242,232,207,0.6)' }}>
            Western Cape District
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mt-2">Events Calendar</h1>
        </div>
      </div>

      {/* Legend */}
      <div className="border-b border-sand bg-sand/10">
        <div className="max-w-6xl mx-auto px-6 py-3 flex flex-wrap gap-4">
          {Object.entries(DEPT_COLORS).map(([dept, c]) => (
            <span key={dept} className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-atlantic">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c.color }} />
              {dept}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full px-6 py-8 flex-1 flex flex-col">

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {DEPARTMENTS.map(dept => (
            <button
              key={dept}
              onClick={() => { setActiveFilter(dept); setSelectedKey(null); setSelectedEvents([]); }}
              className="px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-colors border"
              style={
                activeFilter === dept
                  ? { backgroundColor: '#132c43', color: '#fff', borderColor: '#132c43' }
                  : { backgroundColor: '#fff', color: '#00384D', borderColor: '#F2E8CF' }
              }
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Month navigation */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={prevMonth}
            className="w-12 h-12 rounded-full border border-sand flex items-center justify-center font-black text-2xl transition-all hover:text-white"
            style={{ color: '#00384D' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#132c43'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#132c43'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = '#00384D'; e.currentTarget.style.borderColor = ''; }}
          >
            ‹
          </button>

          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter" style={{ color: '#132c43' }}>
              {MONTH_NAMES[currentMonth]}
            </h2>
            <p className="text-[11px] font-black uppercase tracking-[0.3em] mt-0.5" style={{ color: 'rgba(0,56,77,0.4)' }}>
              {currentYear}
            </p>
          </div>

          <button
            onClick={nextMonth}
            className="w-12 h-12 rounded-full border border-sand flex items-center justify-center font-black text-2xl transition-all"
            style={{ color: '#00384D' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#132c43'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#132c43'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = '#00384D'; e.currentTarget.style.borderColor = ''; }}
          >
            ›
          </button>
        </div>

        {/* Calendar grid */}
        <div className="rounded-[1.5rem] border border-sand overflow-hidden shadow-sm">

          {/* Day headers */}
          <div className="grid grid-cols-7" style={{ backgroundColor: '#132c43' }}>
            {DAY_LABELS_SHORT.map((d, i) => (
              <div key={d} className="py-3 text-center text-[10px] font-black uppercase tracking-widest" style={{ color: 'rgba(242,232,207,0.7)' }}>
                <span className="hidden sm:inline">{DAY_LABELS[i]}</span>
                <span className="sm:hidden">{d}</span>
              </div>
            ))}
          </div>

          {/* Weeks */}
          {weeks.map((week, wi) => (
            <div key={wi} className="grid grid-cols-7 border-t border-sand">
              {week.map((day, di) => {
                if (!day) return (
                  <div
                    key={`e-${wi}-${di}`}
                    className="min-h-[100px] md:min-h-[130px]"
                    style={{ backgroundColor: 'rgba(242,232,207,0.08)', borderRight: di < 6 ? '1px solid #F2E8CF' : 'none' }}
                  />
                );

                const key = `${currentYear}-${month}-${day}`;
                const dayEvents = filtered.filter(e => e.year === currentYear && e.month === month && e.day === day);
                const isToday = today.getFullYear() === currentYear && today.getMonth() === currentMonth && today.getDate() === day;
                const isSelected = selectedKey === key;

                return (
                  <div
                    key={key}
                    onClick={() => dayEvents.length > 0 && handleDayClick(key, dayEvents)}
                    className="min-h-[100px] md:min-h-[130px] p-2 flex flex-col gap-1 transition-colors"
                    style={{
                      borderRight: di < 6 ? '1px solid #F2E8CF' : 'none',
                      cursor: dayEvents.length > 0 ? 'pointer' : 'default',
                      backgroundColor: isSelected ? 'rgba(242,232,207,0.4)' : 'transparent',
                    }}
                    onMouseEnter={e => { if (dayEvents.length > 0 && !isSelected) e.currentTarget.style.backgroundColor = 'rgba(242,232,207,0.25)'; }}
                    onMouseLeave={e => { if (!isSelected) e.currentTarget.style.backgroundColor = 'transparent'; }}
                  >
                    {/* Day number */}
                    <span
                      className="self-start w-7 h-7 flex items-center justify-center rounded-full text-xs font-black"
                      style={isToday
                        ? { backgroundColor: '#7c2938', color: '#fff' }
                        : { color: '#64748b' }
                      }
                    >
                      {day}
                    </span>

                    {/* Event pills — desktop */}
                    <div className="flex flex-col gap-0.5">
                      {dayEvents.slice(0, 3).map((ev, idx) => {
                        const c = DEPT_COLORS[ev.department] || DEPT_COLORS['District'];
                        return (
                          <span
                            key={idx}
                            className="text-[9px] font-black px-1.5 py-0.5 rounded truncate hidden sm:block"
                            style={{ backgroundColor: c.color, color: '#fff' }}
                          >
                            {ev.title}
                          </span>
                        );
                      })}
                      {/* Mobile dots */}
                      {dayEvents.length > 0 && (
                        <div className="flex gap-0.5 sm:hidden flex-wrap mt-0.5">
                          {dayEvents.slice(0, 3).map((ev, idx) => {
                            const c = DEPT_COLORS[ev.department] || DEPT_COLORS['District'];
                            return <span key={idx} className="w-2 h-2 rounded-full" style={{ backgroundColor: c.color }} />;
                          })}
                        </div>
                      )}
                      {dayEvents.length > 3 && (
                        <span className="text-[9px] font-black pl-1" style={{ color: 'rgba(0,56,77,0.5)' }}>
                          +{dayEvents.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Selected day detail panel */}
        {selectedKey && selectedEvents.length > 0 && (
          <div className="mt-8 rounded-[1.5rem] border border-sand p-8" style={{ backgroundColor: 'rgba(242,232,207,0.15)' }}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-10" style={{ backgroundColor: '#7c2938' }} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]" style={{ color: '#00384D' }}>
                  {(() => {
                    const [y, m, d] = selectedKey.split('-');
                    return `${MONTH_NAMES[parseInt(m) - 1]} ${d}, ${y}`;
                  })()}
                </span>
              </div>
              <button
                onClick={() => { setSelectedKey(null); setSelectedEvents([]); }}
                className="font-black text-lg transition-colors"
                style={{ color: 'rgba(0,56,77,0.4)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#7c2938'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(0,56,77,0.4)'}
              >
                ✕
              </button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {selectedEvents.map((event, i) => {
                const c = DEPT_COLORS[event.department] || DEPT_COLORS['District'];
                return (
                  <div
                    key={i}
                    className="bg-white rounded-[1rem] border border-sand p-5 space-y-2 shadow-sm"
                    style={{ borderLeft: `4px solid ${c.color}` }}
                  >
                    <span
                      className="inline-block px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-white"
                      style={{ backgroundColor: c.color }}
                    >
                      {event.department}
                    </span>
                    <h4 className="font-black tracking-tight text-sm" style={{ color: '#132c43' }}>{event.title}</h4>
                    <div className="text-xs text-slate-500 space-y-0.5">
                      {event.time && <p>🕐 {event.time}</p>}
                      {event.location && <p>📍 {event.location}</p>}
                    </div>
                    {event.description && (
                      <p className="text-xs text-slate-500 leading-relaxed border-t border-sand pt-2">{event.description}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Empty state */}
        {monthEvents.length === 0 && (
          <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] mt-8" style={{ color: 'rgba(0,56,77,0.3)' }}>
            No events for {MONTH_NAMES[currentMonth]} {currentYear}
          </p>
        )}

      </div>
    </div>
  );
}
