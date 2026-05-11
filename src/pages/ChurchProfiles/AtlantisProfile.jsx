import { Link } from 'react-router-dom';
import { churches } from '../../data/churches';
import AtlantisPastor from '../../assets/AtlantisResources/AtlantisPastor.jpeg';

const church = churches.find(c => c.id === 'atlantis-nazarene');

const historyPeriods = [
  {
    period: '1976–1981',
    title: 'Establishment',
    content: [
      'The church was established in 1976 by the missionary Rev. Emsly. When Ma Vlotman later relocated to Atlantis, Rev. Emsly spent approximately three months actively ministering and working in the Atlantis area. During this initial phase, church activities were conducted from a private home owned by the Van Zyl couple, who resided in Chandor Street, Atlantis.',
      'After the Van Zyl couple, responsibility for the work was taken over by the Emsly family. However, due to advancing age, the Emslys eventually withdrew from active ministry, and the Stiegleader missionary couple assumed leadership of the church. During their tenure, services were relocated to the home of Ma Vlotman at 14 Meteren Street, Avondale.',
      'Following the departure of the Stiegleader couple, Rev. William Bantom took oversight of the congregation. Sunday morning services continued to be held at the Vlotman residence, and worship gatherings remained there for approximately six years.',
      'The first officially appointed pastor of the church was Rev. Nugent Galant, who served while the congregation was still meeting at the Vlotman home. During this time, the church experienced steady growth, particularly as members of the Church of the Nazarene relocated to Atlantis. In addition, a wayside Sunday school ministry was conducted by Ma Vlotman at Eagles Nest in Dura.',
    ],
  },
  {
    period: '1981 onwards',
    title: 'Expansion and Relocation',
    content: [
      'In 1981, due to the growth of the congregation, the church relocated to a classroom at No. 1 Secondary School, where services were held for approximately three to four years. In 1985, the congregation moved again, this time to Berzelia Primary School. During this period, the church experienced rapid growth.',
      'The congregation continued meeting at Berzelia Primary School until the church building was completed in 1986. A significant milestone in the life of the church occurred in 1988, when the first wedding was conducted in the church building, celebrating the marriage of Ma Vlotman\'s daughter.',
      'Rev. Collip served as the second pastor of the church and was responsible for fencing the church grounds. Over the years, several other pastors have served the congregation, including Rev. Cousins, Rev. Slinger, Rev. Wesso, Rev. Sallies, Rev. Karelse, Rev. Fransuzane, Rev. Ramedies, Rev. Rustin, and Rev. Kolkoto. These names are not recorded in chronological order.',
      'The purchase of the church property was made possible through financial sponsorship from Pen-Hetrick of the United States of America, whose contribution enabled the acquisition of the land.',
    ],
  },
];

const localPastors = [
  { name: 'Pastor Placeholder', image: null },
  { name: 'Pastor Placeholder', image: null },
  { name: 'Pastor Placeholder', image: null },
];

export default function AtlantisProfile() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <div className="relative h-72 bg-navy-blue overflow-hidden">
        {church.image && (
          <img src={church.image} alt={church.name} className="w-full h-full object-cover opacity-50" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-blue via-navy-blue/60 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8 max-w-5xl mx-auto">
          <span className="text-[10px] font-black text-sand/70 uppercase tracking-[0.3em]">{church.area}</span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter mt-1">{church.name}</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">

        {/* Current Pastor */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-10 bg-crimson" />
            <span className="text-[10px] font-black text-atlantic uppercase tracking-[0.4em]">Pastor of the Church</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 bg-sand/20 rounded-[2rem] p-8 border border-sand">
            <img
              src={AtlantisPastor}
              alt={church.pastor}
              className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-lg shrink-0"
            />
            <div className="text-center sm:text-left">
              <p className="text-[10px] font-black text-atlantic uppercase tracking-[0.3em] mb-1">Pastor</p>
              <h3 className="text-2xl font-black text-navy-blue tracking-tighter mb-2">{church.pastor}</h3>
              <p className="text-slate-400 italic text-sm">No bio added yet.</p>
            </div>
          </div>
        </div>

        {/* History */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-10 bg-crimson" />
            <span className="text-[10px] font-black text-atlantic uppercase tracking-[0.4em]">History of the Church</span>
          </div>
          <div className="space-y-10">
            {historyPeriods.map((period, i) => (
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
        </div>

        {/* Local Pastors */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-10 bg-crimson" />
            <span className="text-[10px] font-black text-atlantic uppercase tracking-[0.4em]">Local Pastors</span>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {localPastors.map((pastor, i) => (
              <div key={i} className="bg-sand/20 rounded-[1.5rem] p-6 border border-sand flex flex-col items-center gap-4">
                <div className="w-24 h-24 rounded-full bg-slate-200 border-2 border-sand flex items-center justify-center text-slate-400 text-3xl">
                  👤
                </div>
                <p className="text-navy-blue font-bold text-sm">{pastor.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-10 bg-crimson" />
            <span className="text-[10px] font-black text-atlantic uppercase tracking-[0.4em]">Services & Times</span>
          </div>
          <p className="text-[10px] font-black text-atlantic uppercase tracking-[0.3em] mb-1">Sunday Service</p>
          <p className="text-navy-blue font-semibold text-sm">{church.time}</p>
        </div>

        {/* Contact */}
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
