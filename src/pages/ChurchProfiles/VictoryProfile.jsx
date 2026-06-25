import { useState } from 'react';
import { Link } from 'react-router-dom';
import { churches } from '../../data/churches';
import VictoryPastor from '../../assets/VictoryResources/VictoryPastor.jpeg';


const church = churches.find(c => c.id === 'victory-nazarene');

const historyPeriods = [
  {
    period: '2006 – Early Years',
    title: 'Establishment',
    content: [
      'Victory Church of the Nazarene was established in 2006 by Pastor Martin, who at the time was serving as the pastor of Bonteheuwel Church of the Nazarene. Due to a large number of congregants living in Valhalla Park, many found it difficult and often unsafe to travel to Bonteheuwel for Sunday services.',
      'In response to this need, Pastor Martin initiated an outreach in Valhalla Park, beginning with a small splinter group and earlier Sunday services. These early gatherings were first held in the home of Sis Eunice Nitsky at 92 Simon Street, Valhalla Park.',
    ],
  },
  {
    period: 'Growth & Transition',
    title: 'Expanding the Congregation',
    content: [
      'As the congregation grew, leadership transitioned to Pastor Chetty, under whose guidance services were moved to Nooidtgedacht. When the hosts of that venue relocated, services were then held in a classroom at Valpark Primary School, secured by Pastor Chetty.',
      'Following Pastor Chetty\'s departure, Pastor Levi assumed leadership of Victory Church of the Nazarene. During this season, due to repeated break-ins at the school, the church board sought an alternative meeting place. Brother William and Sister Jacqueline Cornelius opened their home at 127 Angela Street, Valhalla Park, where the congregation continued to gather in worship. Pastor Levi faithfully shepherded the church until his passing in 2018.',
    ],
  },
  {
    period: '2018 – Present',
    title: 'New Leadership',
    content: [
      'After Pastor Levi\'s passing, Pastor Nathan Valensky and his family joined the church as the pastoral family, serving from 2018 to 2024.',
      'Following his ministry, God graciously provided new leadership through Pastor Liam Amansure and his family — his wife Sister Whitney and their daughters Makenzie and Keziah — who currently serve and continue to lead Victory Church of the Nazarene.',
    ],
  },
];

const bioSections = [
  {
    tab: 'Background',
    content: [
      { heading: 'Personal Background', body: 'Rev. Liam Amansure was born in Olifantshoek, Northern Cape, and raised in Rocklands, Mitchells Plain. Raised by a grandmother and single mother after the passing of his father at the age of two, he grew up in a stable and supportive home environment that played a significant role in shaping his character and values.' },
      { heading: 'Key Life Experiences', body: 'Growing up without a father meant navigating seasons of uncertainty around identity, belonging, and direction. Despite these challenges, his upbringing fostered resilience and a deep awareness of the struggles faced by others. Through his walk with God and involvement in ministry, he began to experience healing, clarity, and a stronger sense of identity and purpose. These early life experiences have contributed to his pastoral heart and deep compassion for people.' },
    ],
  },
  {
    tab: 'Calling',
    content: [
      { heading: 'Spiritual Journey', body: 'Rev. Liam Amansure gave his life to Christ on 23rd November 2013. His journey of faith did not begin in a traditional church setting — it began in an ordinary moment in his mother\'s kitchen while preparing lunch, where he experienced a deeply personal encounter with the presence of God. In that moment, he became aware of the faithfulness of the prayers of his grandmother, his mother, and the Portlands NMI team. This experience led him to repentance and a release from guilt, sin, and spiritual burden.' },
      { heading: 'Confirmation of the Call', body: 'Shortly thereafter, he attended Portland Church of the Nazarene and became involved in an outreach team ministering to families affected by addiction. He was later invited by Rev. Pretorius to lead the outreach team. Becoming increasingly aware of God\'s call into full-time ministry, he resigned from his 13-year career at SASSA and stepped out in faith to pursue full-time theological studies at Nazarene Theological College in Johannesburg. He discerned this call in September 2015. The call was affirmed through his spouse, his senior pastor Rev. Pretorius, and his own growing conviction.' },
    ],
  },
  {
    tab: 'Education',
    content: [
      {
        heading: 'Qualifications',
        list: [
          'Bachelor\'s Degree in Theology – Nazarene Theological College, Johannesburg',
          'Master\'s Degree in Religion (in progress) – Africa Nazarene University',
          'Certificate in Business Management and Leadership – Institute of Business Management',
          'Certificate in Recovery and Support Facilitation – Good News Recovery Centre, Johannesburg',
          'Certificate in Sports Chaplaincy – Sports Chaplaincy South Africa (SCZA)',
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
          'Outreach Group Leader – Portland Church of the Nazarene (2014–2015)',
          'Student Pastor – Ennerdale Church of the Nazarene, Johannesburg (2015–2017)',
          'Associate Pastor – Portland Church of the Nazarene (2018–2024)',
          'Recovery Facilitator – Portland Church of the Nazarene (2018–2024)',
          'Senior Pastor – Victory Church of the Nazarene (2025–Present)',
          'District Evangelism Secretary (2018–Present)',
        ],
      },
      {
        heading: 'Key Milestones',
        list: [
          'Began full-time theological studies at NTC Johannesburg (2015)',
          'Appointed Student Body President at NTC Johannesburg (2016)',
          'Received the Oracle Award for the highest GPA (2016)',
          'Co-founded Be the Change Recovery Group',
          'Academic work published in Transform Theological Journal (2026)',
          'Ordination (2025)',
        ],
      },
      { heading: 'Ministry Impact', body: 'Rev. Liam Amansure has made meaningful impact in recovery and evangelism ministry. He has supported individuals through processes of healing, restoration, and reintegration, and has been actively engaged in evangelism through outreach initiatives in the Valhalla Park area. His ministry reflects a consistent commitment to practical discipleship, pastoral care, and mission-driven service.' },
    ],
  },
  {
    tab: 'Vision',
    content: [
      { heading: 'Vision for the Church', body: 'Shaped by Wesleyan ecclesiology, with a focus on forming Christlike disciples through holiness, spiritual formation, and faithful engagement in both personal and social transformation. A church rooted in Scripture, empowered by the Holy Spirit, and actively living out the gospel in the life of the community.' },
      { heading: 'Goals for the Next 3–5 Years', body: 'To establish thriving, spiritually accountable communities across Valhalla Park, rooted in the Wesleyan model of class meetings and bands, where discipleship is lived out in authentic relationships. In addition, to develop and sustain a fully functioning recovery ministry within the local church, creating a safe and Christ-centred environment for healing, restoration, and long-term support.' },
      { heading: 'Life Scripture', body: '1 Timothy 1:13 — "Even though I was once a blasphemer and a persecutor and a violent man, I was shown mercy because I acted in ignorance and unbelief." This scripture speaks deeply to his own journey of grace, transformation, and the mercy of God that shapes his calling and ministry.' },
      { heading: 'Legacy', body: 'A life that points people to Christ and leaves behind communities rooted in healing, holiness, and discipleship.' },
    ],
  },
];

export default function VictoryProfile() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <div className="relative h-72 bg-navy-blue overflow-hidden">
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
              src={VictoryPastor}
              alt={church.pastor}
              className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-lg shrink-0"
            />
            <div className="text-center sm:text-left">
              <p className="text-[10px] font-black text-atlantic uppercase tracking-[0.3em] mb-1">Senior Pastor</p>
              <h3 className="text-2xl font-black text-navy-blue tracking-tighter mb-2">Rev. {church.pastor}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Rev. Liam Amansure and his wife, Sister Whitney, together with their daughters Makenzie and Keziah, currently serve and lead Victory Church of the Nazarene.
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
                  name="victory-bio-tab"
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

        {/* Services */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-10 bg-crimson" />
            <span className="text-[10px] font-black text-atlantic uppercase tracking-[0.4em]">Services & Times</span>
          </div>
          <div>
            <p className="text-[10px] font-black text-atlantic uppercase tracking-[0.3em] mb-1">Sunday Service</p>
            <p className="text-navy-blue font-semibold text-sm">{church.time}</p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-10 bg-crimson" />
            <span className="text-[10px] font-black text-atlantic uppercase tracking-[0.4em]">Contact</span>
          </div>
          <p className="text-slate-600 text-sm">066 445 5740</p>
        </div>

        <Link to="/churches" className="inline-flex items-center gap-2 text-atlantic font-bold text-sm hover:text-crimson transition-colors">
          ← Back to all Churches
        </Link>
      </div>
    </div>
  );
}
