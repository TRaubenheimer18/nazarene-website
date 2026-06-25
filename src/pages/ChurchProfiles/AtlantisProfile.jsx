import { useState } from 'react';
import { Link } from 'react-router-dom';
import AtlantisPastor from '../../assets/AtlantisResources/AtlantisPastor.jpeg';


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
    ],
  },
];

const localPastors = [
  { name: 'Ashley Slinger' },
  { name: 'Bevan Brown' },
  { name: 'Cedrick Arendse' },
  { name: 'Donovan De Villiers' },
  { name: 'Graeme Daniels' },
  { name: 'Hetley Pietersen' },
  { name: 'Ivan Hendricks' },
  { name: 'Jenine Charles' },
  { name: 'Jessica Daniels' },
  { name: 'Martin De Villiers' },
  { name: 'Marvin-Jacob Cornelissen' },
];

const bioSections = [
  {
    tab: 'Background',
    content: [
      { heading: 'Personal Background', body: 'Rev. Nigel J. Kolkoto was born in Bishop Lavis and raised in Cape Town. His upbringing laid a foundation of faith and community that would shape his character and eventual calling into ministry.' },
      { heading: 'Key Life Experiences', body: 'The experiences of his early life in Cape Town gave him a deep understanding of the communities he now serves. These formative years cultivated in him a pastoral heart and a genuine compassion for people from all walks of life.' },
    ],
  },
  {
    tab: 'Calling',
    content: [
      { heading: 'Spiritual Journey', body: 'Rev. Kolkoto gave his life to Christ in 2000. His journey of faith was shaped by the guidance of Rev. Gene Pretorius and Rev. Matthew Simeon, who mentored him during the early years of his walk with God.' },
      { heading: 'Confirmation of the Call', body: 'He felt called into ministry in 2000. The call was confirmed through his mentors and his growing conviction to serve the local church. That calling has remained the driving force behind 17 years of faithful ministry.' },
    ],
  },
  {
    tab: 'Education',
    content: [
      {
        heading: 'Qualifications',
        list: [
          'Theology — Nazarene Theological College (NTC)',
        ],
      },
    ],
  },
  {
    tab: 'Ministry',
    content: [
      {
        heading: 'Roles Served',
        list: [
          'Minister\'s License — Belhar Church of the Nazarene',
          'Pastor — Northpine Church of the Nazarene',
          'Senior Pastor — Atlantis Church of the Nazarene (Current)',
        ],
      },
      { heading: 'Ministry Impact', body: 'Over 17 years of ministry, Rev. Kolkoto has led the Atlantis congregation with a commitment to evangelism, outreach, and community development. Under his leadership, the church has maintained active ministries in NMI, evangelism, and prison ministry.' },
    ],
  },
  {
    tab: 'Vision',
    content: [
      { heading: 'Leadership Style', body: 'Rev. Kolkoto leads by example and through positive influence. His approach to mentoring is grounded in the belief that you walk the journey with others that was once walked with you.' },
      { heading: 'Goals & Trust', body: 'His vision for the future is one of trust — to trust God for the now and to remain ready for wherever He leads. He does not chase a fixed plan but remains open and obedient to the leading of the Holy Spirit.' },
      { heading: 'Life Scripture', body: 'Proverbs 3:5–6 — "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight."' },
      { heading: 'Legacy', body: 'Rev. Kolkoto hopes to be remembered as a person who loved God and loved others. His personal motto: "Walk faithfully with God today, not because the path is easy, but because His presence makes every step meaningful."' },
    ],
  },
];

export default function AtlantisProfile() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <div className="relative h-72 bg-navy-blue overflow-hidden">
        <img src={require('../../assets/Atlantis COTN.jpeg')} alt="Atlantis COTN" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-blue via-navy-blue/60 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8 max-w-5xl mx-auto flex items-end justify-between">
          <div>
            <span className="text-[10px] font-black text-sand/70 uppercase tracking-[0.3em]">Atlantis, Cape Town</span>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter mt-1">Church of the Nazarene Atlantis</h1>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-end gap-2 max-w-5xl mx-auto px-6 pt-3">
            <a href="https://www.facebook.com/Church-of-the-Nazarene-Atlantis" target="_blank" rel="noopener noreferrer"
              className="w-[38px] h-[38px] bg-[#1877f2] text-white rounded-full flex items-center justify-center shadow-[0_10px_10px_rgba(0,0,0,0.1)] transition-all duration-200 hover:scale-110"
              style={{ transition: 'all 0.2s cubic-bezier(0.68,-0.55,0.265,1.55)' }}>
              <svg viewBox="0 0 320 512" height="1em" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@churchofthenazareneatl" target="_blank" rel="noopener noreferrer"
              className="w-[38px] h-[38px] bg-black text-white rounded-full flex items-center justify-center shadow-[0_10px_10px_rgba(0,0,0,0.1)] transition-all duration-200 hover:scale-110"
              style={{ transition: 'all 0.2s cubic-bezier(0.68,-0.55,0.265,1.55)' }}>
              <svg viewBox="0 0 448 512" height="1em" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M448,209.9a210.1,210.1,0,0,1-122.8-39.3V349.4A162.6,162.6,0,1,1,185.7,188V278.2a74.7,74.7,0,1,0,52.2,71.2V0h88.3a121.2,121.2,0,0,0,121.8,108.9Z"></path>
              </svg>
            </a>
          </div> */}

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">

        {/* Quick info */}
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { label: 'Sunday School', value: 'Sunday at 08:30' },
            { label: 'Bible Study', value: 'Wednesday at 19:00' },
            { label: 'Youth Service', value: 'Friday at 19:00' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-[1.5rem]">
              <span className="text-2xl mb-3 block">{item.icon}</span>
              <p className="text-[10px] font-black text-atlantic uppercase tracking-[0.3em] mb-1">{item.label}</p>
              <p className="text-navy-blue font-semibold text-sm">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Current Pastor */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-10 bg-crimson" />
            <span className="text-[10px] font-black text-atlantic uppercase tracking-[0.4em]">Pastor of the Church</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 bg-sand/20 rounded-[2rem] p-8 border border-sand">
            <img
              src={AtlantisPastor}
              alt="Nigel Kolkoto"
              className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-lg shrink-0"
            />
            <div className="text-center sm:text-left">
              <p className="text-[10px] font-black text-atlantic uppercase tracking-[0.3em] mb-1">Senior Pastor</p>
              <h3 className="text-2xl font-black text-navy-blue tracking-tighter mb-2">Rev. Nigel J. Kolkoto</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Rev. Nigel J. Kolkoto has served as Senior Pastor of Atlantis Church of the Nazarene for 17 years, leading the congregation with a heart for holiness, evangelism, and community transformation.
              </p>
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
  {/* Section Header with Refined Spacing */}
  <div className="flex items-center gap-4 mb-12">
    <div className="h-[1px] w-12 bg-crimson" />
    <span className="text-[10px] font-black text-navy uppercase tracking-[0.5em]">
      Local Pastors
    </span>
  </div>

  {/* Professional Editorial Grid */}
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
    {localPastors.map((pastor, i) => (
      <div key={i} className="group flex flex-col space-y-5">
        
        {/* Modern Portrait Frame */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] bg-[#FCFAF5] border border-sand/50 shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-navy/5 group-hover:-translate-y-2">
          {/* Decorative Overlay */}
          <div className="absolute inset-0 bg-navy/5 mix-blend-multiply transition-opacity group-hover:opacity-0" />
          
          {/* Placeholder/Photo Area */}
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-fynbos/30 italic">
              Portrait
            </span>
          </div>

          {/* Subtle Corner Detail */}
          <div className="absolute bottom-4 right-4 h-6 w-6 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-navy text-[10px]">+</span>
          </div>
        </div>

        {/* Minimalist Identity Block */}
        <div className="px-2">
          <h4 className="text-sm font-black text-navy tracking-tighter leading-none mb-1 group-hover:text-sunset transition-colors">
            {pastor.name}
          </h4>
        </div>
      </div>
    ))}
  </div>
</div>

        {/* Pastor's Biography */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-10 bg-crimson" />
            <span className="text-[10px] font-black text-atlantic uppercase tracking-[0.4em]">Pastor's Biography</span>
          </div>

          {/* Tabs */}
          <div className="pastor-bio-tabs mb-8">
            {bioSections.map((section, i) => (
              <label key={i}>
                <input
                  type="radio"
                  name="atlantis-bio-tab"
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

          {/* Tab Content */}
          <div className="space-y-8">
            {bioSections[activeTab].content.map((item, i) => (
              <div key={i}>
                <h4 className="text-base font-black text-navy-blue tracking-tight mb-3">{item.heading}</h4>
                {item.body && <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>}
                {item.list && (
                  <ul className="space-y-2">
                    {item.list.map((point, j) => (
                      <li key={j} className="flex items-start gap-3 text-slate-600 text-sm">
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

        {/* Outreach */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-10 bg-crimson" />
            <span className="text-[10px] font-black text-atlantic uppercase tracking-[0.4em]">Outreach Ministries</span>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">NMI, Evangelistic Ministry, Prison Ministry</p>
        </div>

        <Link to="/churches" className="inline-flex items-center gap-2 text-atlantic font-bold text-sm hover:text-crimson transition-colors">
          ← Back to all Churches
        </Link>
      </div>
    </div>
  );
}
