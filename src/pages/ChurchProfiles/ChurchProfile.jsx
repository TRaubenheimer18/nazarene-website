import { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { churches } from '../../data/churches';

function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
}

function PastorsCarousel({ pastors }) {
  const scrollRef = useRef(null);
  const scroll = (dir) => scrollRef.current.scrollBy({ left: dir * 200, behavior: 'smooth' });
  return (
    <div className="mt-8 relative">
      <button onClick={() => scroll(-1)} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-8 h-8 rounded-full bg-white border border-slate-200 shadow flex items-center justify-center text-navy-blue hover:border-crimson hover:text-crimson transition-colors">‹</button>
      <div ref={scrollRef} className="flex gap-6 overflow-x-auto px-2 pb-2" style={{ scrollbarWidth: 'none' }}>
        {pastors.map((pastor, i) => (
          <div key={i} className="flex flex-col items-center gap-3 shrink-0">
            <div className="w-16 h-16 rounded-full bg-[#FCFAF5] border border-slate-200 flex items-center justify-center">
              <span className="text-sm font-black text-atlantic tracking-wide">{getInitials(pastor.name)}</span>
            </div>
            <p className="text-xs font-semibold text-navy-blue text-center leading-tight w-20">{pastor.name}</p>
          </div>
        ))}
      </div>
      <button onClick={() => scroll(1)} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-8 h-8 rounded-full bg-white border border-slate-200 shadow flex items-center justify-center text-navy-blue hover:border-crimson hover:text-crimson transition-colors">›</button>
    </div>
  );
}

export default function ChurchProfile() {
  const { id } = useParams();
  const church = churches.find(c => c.id === id);
  const [activeTab, setActiveTab] = useState(0);
  const [pastorsOpen, setPastorsOpen] = useState(false);

  if (!church) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-navy-blue">
        <h2 className="text-3xl font-black mb-4">Church not found</h2>
        <Link to="/churches" className="text-atlantic underline">← Back to Churches</Link>
      </div>
    );
  }

  const serviceItems = [
    { label: 'Sunday School', value: church.sundaySchool },
    { label: 'Bible Study', value: church.bibleStudy },
    { label: 'Youth Service', value: church.youthService },
  ].filter(item => item.value);

  const bioSections = church.bioSections || [];

  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <div className="relative h-72 bg-navy-blue overflow-hidden">
        {church.image
          ? <img src={church.image} alt={church.name} className="w-full h-full object-cover opacity-50" />
          : <div className="w-full h-full bg-atlantic/80" />
        }
        <div className="absolute inset-0 bg-gradient-to-t from-navy-blue via-navy-blue/60 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8 max-w-5xl mx-auto flex items-end justify-between">
          <div>
            <span className="text-[10px] font-black text-sand/70 uppercase tracking-[0.3em]">{church.area}</span>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter mt-1">{church.name}</h1>
          </div>
          {(church.facebook || church.tiktok) && (
            <div className="flex gap-2 shrink-0">
              {church.facebook && (
                <a href={church.facebook} target="_blank" rel="noopener noreferrer"
                  className="w-[38px] h-[38px] bg-[#1877f2] text-white rounded-full flex items-center justify-center shadow-[0_10px_10px_rgba(0,0,0,0.1)] hover:scale-110"
                  style={{ transition: 'all 0.2s cubic-bezier(0.68,-0.55,0.265,1.55)' }}>
                  <svg viewBox="0 0 320 512" height="1em" fill="currentColor"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
                </a>
              )}
              {church.tiktok && (
                <a href={church.tiktok} target="_blank" rel="noopener noreferrer"
                  className="w-[38px] h-[38px] bg-black text-white rounded-full flex items-center justify-center shadow-[0_10px_10px_rgba(0,0,0,0.1)] hover:scale-110"
                  style={{ transition: 'all 0.2s cubic-bezier(0.68,-0.55,0.265,1.55)' }}>
                  <svg viewBox="0 0 448 512" height="1em" fill="currentColor"><path d="M448,209.9a210.1,210.1,0,0,1-122.8-39.3V349.4A162.6,162.6,0,1,1,185.7,188V278.2a74.7,74.7,0,1,0,52.2,71.2V0h88.3a121.2,121.2,0,0,0,121.8,108.9Z" /></svg>
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-0">

        {/* Quick info */}
        {serviceItems.length > 0 && (
          <div className={`grid grid-cols-${serviceItems.length} border border-slate-200 rounded-xl overflow-hidden mb-12`}>
            {serviceItems.map((item, i) => (
              <div key={i} className={`px-6 py-5 ${i !== 0 ? 'border-l border-slate-200' : ''}`}>
                <p className="text-[10px] font-black text-crimson uppercase tracking-[0.3em] mb-1">{item.label}</p>
                <p className="text-navy-blue font-semibold text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        )}

        {/* Current Pastor */}
        {(church.pastor || church.pastorImage) && (
          <div className="py-10 border-t border-slate-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-6 bg-crimson" />
              <span className="text-[10px] font-black text-light-blue uppercase tracking-[0.4em]">Pastor of the Church</span>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-6">
              {church.pastorImage && (
                <img src={church.pastorImage} alt={church.pastor} className="w-32 h-32 rounded-full object-cover shrink-0" />
              )}
              <div>
                <p className="text-[10px] font-black text-atlantic uppercase tracking-[0.3em] mb-1">Senior Pastor</p>
                {church.pastor && <h3 className="text-2xl font-black text-navy-blue tracking-tighter mb-2">{church.pastor}</h3>}
                {church.pastorBio && (
                  <p className="text-slate-500 text-sm font-light leading-relaxed max-w-xl">{church.pastorBio}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Pastor's Biography tabs */}
        {bioSections.length > 0 && (
          <div className="py-10 border-t border-slate-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-6 bg-crimson" />
              <span className="text-[10px] font-black text-light-blue uppercase tracking-[0.4em]">Pastor's Biography</span>
            </div>
            <div className="pastor-bio-tabs mb-8">
              {bioSections.map((section, i) => (
                <label key={i}>
                  <input
                    type="radio"
                    name={`${church.id}-bio-tab`}
                    checked={activeTab === i}
                    onChange={() => setActiveTab(i)}
                  />
                  {section.tab}
                </label>
              ))}
              <div
                className="pastor-bio-tabs-selection"
                style={{ width: `${100 / bioSections.length}%`, transform: `translateX(${activeTab * 100}%)` }}
              />
            </div>
            <div className="space-y-6">
              {bioSections[activeTab].content.map((item, i) => (
                <div key={i} className={i !== 0 ? 'pt-6 border-t border-slate-100' : ''}>
                  <h4 className="text-sm font-black text-navy-blue tracking-tight mb-2">{item.heading}</h4>
                  {item.body && <p className="text-slate-500 text-sm font-light leading-relaxed">{item.body}</p>}
                  {item.list && (
                    <ul className="space-y-2">
                      {item.list.map((point, j) => (
                        <li key={j} className="flex items-start gap-3 text-slate-500 text-sm font-light">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-crimson shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* History */}
        {(church.history || church.historyPeriods) && (
          <div className="py-10 border-t border-slate-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-6 bg-crimson" />
              <span className="text-[10px] font-black text-light-blue uppercase tracking-[0.4em]">History of the Church</span>
            </div>
            {church.historyPeriods ? (
              <div className="space-y-0">
                {church.historyPeriods.map((period, i) => (
                  <div key={i} className={`grid md:grid-cols-[120px_1fr] gap-6 md:gap-10 py-8 ${i !== 0 ? 'border-t border-slate-200' : ''}`}>
                    <div>
                      <span className="text-[10px] font-black text-crimson uppercase tracking-[0.2em]">{period.period}</span>
                      <h4 className="text-base font-black text-navy-blue tracking-tight mt-1">{period.title}</h4>
                    </div>
                    <div className="space-y-3">
                      {period.content.map((para, j) => (
                        <p key={j} className="text-slate-500 text-sm font-light leading-relaxed">{para}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-500 text-sm font-light leading-relaxed">{church.history}</p>
            )}
          </div>
        )}

        {/* Local Pastors */}
        {church.localPastors && (
          <div className="py-10 border-t border-slate-200">
            <button
              onClick={() => setPastorsOpen(!pastorsOpen)}
              className="w-full flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-6 bg-crimson" />
                <span className="text-[10px] font-black text-light-blue uppercase tracking-[0.4em]">Local Pastors</span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
                  {church.localPastors.length} Pastors
                </span>
              </div>
              <span className={`text-slate-400 text-lg transition-transform duration-200 ${pastorsOpen ? 'rotate-45' : ''}`}>+</span>
            </button>
            {pastorsOpen && <PastorsCarousel pastors={church.localPastors} />}
          </div>
        )}

        {/* Outreach */}
        {church.outreach && (
          <div className="py-10 border-t border-slate-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-6 bg-crimson" />
              <span className="text-[10px] font-black text-light-blue uppercase tracking-[0.4em]">Outreach Ministries</span>
            </div>
            <div className="grid md:grid-cols-[160px_1fr] gap-4 md:gap-10 items-start">
              <p className="text-slate-500 text-sm font-light leading-relaxed">{church.outreach}</p>
            </div>
          </div>
        )}

        <div className="py-6 border-t border-slate-200">
          <Link to="/churches" className="inline-flex items-center gap-2 text-atlantic font-bold text-sm hover:text-crimson transition-colors">
            ← Back to all Churches
          </Link>
        </div>

      </div>
    </div>
  );
}
