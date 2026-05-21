import { Link } from 'react-router-dom';
import { churches } from '../../data/churches';

export default function ChurchProfileLayout({ churchId, church: churchProp }) {
  const church = churchProp || churches.find(c => c.id === churchId);

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
        {/* <div className="grid sm:grid-cols-3 gap-6">
          {[
            { label: 'Pastor', value: church.pastor},
            { label: 'Sunday Service', value: church.time},
            { label: 'Address', value: church.address || 'To be added'},
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-[1.5rem]">
              <span className="text-2xl mb-3 block">{item.icon}</span>
              <p className="text-[10px] font-black text-atlantic uppercase tracking-[0.3em] mb-1">{item.label}</p>
              <p className="text-navy-blue font-semibold text-sm">{item.value}</p>
            </div>
          ))}
        </div> */}

        {/* Pastor Bio */}
        {(church.pastorBio || church.pastorImage) && (
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-10 bg-crimson" />
              <span className="text-[10px] font-black text-atlantic uppercase tracking-[0.4em]">Pastor Profile</span>
            </div>
            {church.pastorImage ? (
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 bg-white rounded-[2rem] p-8 border border-sand">
                <img src={church.pastorImage} alt={church.pastor} className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-lg shrink-0" />
                <div className="text-center sm:text-left">
                  <p className="text-[10px] font-black text-atlantic uppercase tracking-[0.3em] mb-1">Pastor</p>
                  <h3 className="text-2xl font-black text-navy-blue tracking-tighter mb-2">{church.pastor}</h3>
                  {church.pastorBio && <p className="text-slate-600 text-sm leading-relaxed">{church.pastorBio}</p>}
                </div>
              </div>
            ) : (
              <p className="text-slate-600 text-sm leading-relaxed">{church.pastorBio}</p>
            )}
          </div>
        )}

        {/* History */}
        {(church.history || church.historyPeriods) && (
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-10 bg-crimson" />
              <span className="text-[10px] font-black text-atlantic uppercase tracking-[0.4em]">History of the Church</span>
            </div>
            {church.historyPeriods ? (
              <div className="space-y-10">
                {church.historyPeriods.map((period, i) => (
                  <div key={i} className="border-l-2 border-sand pl-8 space-y-4">
                    <div>
                      <span className="text-[10px] font-black text-crimson uppercase tracking-[0.3em]">{period.period}</span>
                      <h4 className="text-xl font-black text-navy-blue tracking-tighter mt-1">{period.title}</h4>
                    </div>
                    {period.content.map((para, j) => (
                      <p key={j} className="text-slate-600 text-sm leading-relaxed">{para}</p>
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-600 text-sm leading-relaxed">{church.history}</p>
            )}
          </div>
        )}

        {/* Services & Times */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-10 bg-crimson" />
            <span className="text-[10px] font-black text-atlantic uppercase tracking-[0.4em]">Services & Times</span>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-[10px] font-black text-atlantic uppercase tracking-[0.3em] mb-1">Sunday Service</p>
              <p className="text-navy-blue font-semibold text-sm">{church.time}</p>
            </div>
            {church.sundaySchool && (
              <div>
                <p className="text-[10px] font-black text-atlantic uppercase tracking-[0.3em] mb-1">Sunday School</p>
                <p className="text-navy-blue font-semibold text-sm">{church.sundaySchool}</p>
              </div>
            )}
            {church.youthService && (
              <div>
                <p className="text-[10px] font-black text-atlantic uppercase tracking-[0.3em] mb-1">Youth Service</p>
                <p className="text-navy-blue font-semibold text-sm">{church.youthService}</p>
              </div>
            )}
            {church.onlineService !== undefined && (
              <div>
                <p className="text-[10px] font-black text-atlantic uppercase tracking-[0.3em] mb-1">Online Service</p>
                <p className="text-navy-blue font-semibold text-sm">{church.onlineService ? 'Yes' : 'No'}</p>
              </div>
            )}
          </div>
        </div>

        {/* Outreach */}
        {church.outreach && (
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-10 bg-crimson" />
              <span className="text-[10px] font-black text-atlantic uppercase tracking-[0.4em]">Outreach Ministries</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">{church.outreach}</p>
          </div>
        )}

        {/* Connect */}
        {(church.facebook || church.tiktok) && (
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-10 bg-crimson" />
              <span className="text-[10px] font-black text-atlantic uppercase tracking-[0.4em]">Connect</span>
            </div>
            <div className="flex gap-3">
              {church.facebook && (
                <a href={church.facebook} target="_blank" rel="noopener noreferrer"
                  className="w-[38px] h-[38px] bg-[#1877f2] text-white rounded-full flex items-center justify-center shadow-[0_10px_10px_rgba(0,0,0,0.1)] cursor-pointer transition-all duration-200 hover:scale-110"
                  style={{transition: 'all 0.2s cubic-bezier(0.68,-0.55,0.265,1.55)'}}>
                  <svg viewBox="0 0 320 512" height="1em" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                  </svg>
                </a>
              )}
              {church.tiktok && (
                <a href={church.tiktok} target="_blank" rel="noopener noreferrer"
                  className="w-[38px] h-[38px] bg-black text-white rounded-full flex items-center justify-center shadow-[0_10px_10px_rgba(0,0,0,0.1)] cursor-pointer transition-all duration-200 hover:scale-110"
                  style={{transition: 'all 0.2s cubic-bezier(0.68,-0.55,0.265,1.55)'}}>
                  <svg viewBox="0 0 448 512" height="1em" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M448,209.9a210.1,210.1,0,0,1-122.8-39.3V349.4A162.6,162.6,0,1,1,185.7,188V278.2a74.7,74.7,0,1,0,52.2,71.2V0h88.3a121.2,121.2,0,0,0,121.8,108.9Z"></path>
                  </svg>
                </a>
              )}
            </div>
          </div>
        )}

        <Link to="/churches" className="inline-flex items-center gap-2 text-atlantic font-bold text-sm hover:text-crimson transition-colors">
          ← Back to all Churches
        </Link>
      </div>
    </div>
  );
}
