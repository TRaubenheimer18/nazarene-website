import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import Img1 from '../assets/image1.jpg';

export default function About() {
  return (
    <div className="bg-[#FCFAF5] min-h-screen selection:bg-sunset/30">

      {/* 1. Hero */}
      <section className="relative bg-navy py-28 px-6 text-center overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-atlantic rounded-full blur-[120px] opacity-30 -translate-y-1/2 translate-x-1/2"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-8 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
            <div className="w-1.5 h-1.5 rounded-full bg-sunset"></div>
            <span className="text-[10px] font-black text-sunset uppercase tracking-[0.5em]">Established in Faith</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
            <span className="text-sand">Western Cape </span><span className="text-sand italic font-serif">District</span>
          </h1>

          <p className="text-sky/80 text-xl font-light max-w-2xl mx-auto leading-relaxed">
            A movement of 40 Great Commission churches woven into the fabric of the Cape,<br />
            dedicated to making Christlike disciples in every community.
          </p>

          {/* <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link
              to="/churches"
              className="bg-sunset text-white px-10 py-4 rounded-2xl font-bold transition-all duration-300 shadow-xl shadow-sunset/20 hover:-translate-y-1"
            >
              Find a Church
            </Link>
            <Link
              to="/contact"
              className="group flex items-center text-white/70 font-semibold gap-2 hover:text-white transition-colors"
            >
              Get in Touch
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div> */}
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="py-28 px-6 bg-[#FCFAF5]">
        <div className="max-w-7xl mx-auto">

          <div className="flex items-center gap-4 mb-16">
            <div className="h-[2px] w-10 bg-sunset"></div>
            <span className="text-[10px] font-black text-sunset uppercase tracking-[0.4em]">Our Calling</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div className="space-y-10">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-navy tracking-tighter leading-tight mb-6">
                  Empowering Pastors. <br />
                  <span className="text-fynbos">Transforming Lives.</span>
                </h2>
                <p className="text-slate-500 text-lg font-light leading-relaxed">
                  We exist as a resource and support network for our local congregations —
                  empowering pastors, developing leaders, and planting new churches that
                  reflect the holiness and love of Jesus Christ across the Western Cape.
                </p>
              </div>

              <div className="relative bg-navy rounded-[2rem] p-10 overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-sunset rounded-l-[2rem]"></div>
                <p className="text-[10px] font-black text-sunset uppercase tracking-[0.4em] mb-4">The Vision</p>
                <p className="text-slate-500 font-serif italic text-xl leading-relaxed">
                  &ldquo;To see a vibrant, holiness-centered Nazarene presence in every town
                  of the Western Cape, bringing hope to the broken and light to the dark.&rdquo;
                </p>
              </div>
            </div>

            <div className="relative rounded-[2.5rem] overflow-hidden h-[480px] shadow-2xl shadow-navy/20">
              <img src={Img1} alt="Western Cape" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent"></div>
              {/* <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
                  <span className="text-4xl font-black text-white">40</span>
                  <p className="text-[10px] font-black text-sand/70 uppercase tracking-widest mt-1">Congregations</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
                  <span className="text-4xl font-black text-white">5k+</span>
                  <p className="text-[10px] font-black text-sand/70 uppercase tracking-widest mt-1">Members</p>
                </div>
              </div> */}
            </div>

          </div>
        </div>
      </section>

      {/* 3. Statement of Mission */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-[2px] w-10 bg-sunset"></div>
            <span className="text-[10px] font-black text-sunset uppercase tracking-[0.4em]">Statement of Mission</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-4xl md:text-5xl font-black text-navy tracking-tighter leading-tight mb-6">
                Making Christlike <br />
                <span className="text-fynbos">Disciples in the Nations.</span>
              </h3>
              <p className="text-slate-500 text-lg font-light leading-relaxed mb-8">
                We are a Great Commission church. As a global community of faith, we are commissioned to take the Good News of life in Jesus Christ to people everywhere and to spread the message of scriptural holiness across the lands.
              </p>
              <p className="text-slate-500 text-lg font-light leading-relaxed">
                We strive to express the compassion of Jesus Christ to all persons along with our personal commitment to Christlike living. While the primary motive of the church is to glorify God, we are also called to actively participate in His mission — reconciling the world to Himself.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {missionEssentials.map((e, i) => (
                <div key={i} className="flex items-start gap-6 p-6 rounded-[1.5rem] border border-sand/50 bg-sand/20">
                  <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center text-lg shrink-0">{e.icon}</div>
                  <div>
                    <h4 className="font-black text-navy uppercase tracking-widest text-sm mb-1">{e.title}</h4>
                    <p className="text-slate-500 text-sm font-light leading-relaxed">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Statement of Beliefs */}
      <section className="py-24 px-6 bg-[#FCFAF5]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-10 bg-sunset"></div>
            <span className="text-[10px] font-black text-sunset uppercase tracking-[0.4em]">Statement of Beliefs</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <h3 className="text-4xl md:text-5xl font-black text-navy tracking-tighter">We Believe.</h3>
            <p className="text-sm text-slate-400 font-light max-w-xs leading-relaxed">
              The foundational convictions that unite every Church of the Nazarene.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {beliefs.map((b, i) => (
              <div key={i} className="flex gap-6 bg-white rounded-2xl p-7 border border-slate-100 shadow-sm">
                <span className="text-[11px] font-black text-sunset/60 tracking-[0.2em] shrink-0 pt-0.5">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  <span className="font-bold text-navy">We believe </span>{b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Core Values */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <p className="text-[10px] font-black text-sunset uppercase tracking-[0.4em] mb-3">Core Values</p>
              <h3 className="text-4xl md:text-5xl font-black text-navy tracking-tighter">The Essence of Our Identity.</h3>
            </div>
            <p className="text-sm text-slate-400 font-light max-w-xs leading-relaxed">
              Our core values support the vision of our denomination and shape our culture.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((v, i) => (
              <div key={i} className="bg-[#FCFAF5] p-10 rounded-[2.5rem] border border-slate-100">
                {/* <div className="w-12 h-12 bg-sand/50 rounded-2xl flex items-center justify-center text-2xl mb-6">{v.icon}</div> */}
                <p className="text-[10px] font-black text-sunset uppercase tracking-[0.4em] mb-2">Core Value</p>
                <h4 className="text-xl font-black text-navy mb-4">{v.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-light">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Articles of Faith */}
      <section className="py-24 px-6 bg-[#FCFAF5]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-10 bg-sunset"></div>
            <span className="text-[10px] font-black text-sunset uppercase tracking-[0.4em]">Articles of Faith</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-navy tracking-tighter mb-8">The Constitution of Our Faith.</h3>
          <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm mb-10">
            <p className="text-slate-500 text-base font-light leading-relaxed">
              In order that we may preserve our God-given heritage, the faith once delivered to the saints, especially the doctrine and experience of entire sanctification as a second work of grace, and also that we may cooperate effectually with other branches of the Church of Jesus Christ in advancing God's kingdom, we, the ministers and lay members of the Church of the Nazarene, in accordance with the principles of constitutional legislation established among us, do hereby ordain, adopt, and set forth as the fundamental law or Constitution of the Church of the Nazarene the Articles of Faith, the Covenant of Christian Character, and the Articles of Organization and Government here following, to wit:
            </p>
          </div>
          <ArticlesOfFaith />
        </div>
      </section>

      {/* 7. Our History */}
      <section className="py-28 px-6 bg-[#FCFAF5]">
        <div className="max-w-7xl mx-auto">

          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-10 bg-sunset"></div>
            <span className="text-[10px] font-black text-sunset uppercase tracking-[0.4em]">Our History</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <h3 className="text-4xl md:text-5xl font-black text-navy tracking-tighter">The Nazarene Story.</h3>
            <p className="text-sm text-slate-400 font-light max-w-xs leading-relaxed">
              Tracing our roots from 1908 to a global movement of holiness.
            </p>
          </div>

          {/* Intro */}
          <div className="bg-white rounded-[2rem] p-10 border border-slate-100 shadow-sm mb-12">
            <p className="text-slate-500 text-base font-light leading-relaxed mb-6">
              The Church of the Nazarene traces its anniversary date to 1908. Its organization was a marriage that, like every marriage, linked existing families and created a new one. As an expression of the holiness movement and its emphasis on the sanctified life, our founders came together to form one people. Utilizing evangelism, compassionate ministries, and education, their church went forth to become a people of many cultures and tongues.
            </p>
            {/* <div className="flex flex-wrap gap-4">
              {['Unity in Holiness', 'A Mission to the World'].map((theme, i) => (
                <span key={i} className="inline-flex items-center gap-2 bg-sand/50 px-5 py-2 rounded-full border border-sand">
                  <div className="w-1.5 h-1.5 rounded-full bg-sunset"></div>
                  <span className="text-[10px] font-black text-navy uppercase tracking-[0.3em]">{theme}</span>
                </span>
              ))}
            </div> */}
          </div>

          {/* Two themes */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">

            <div className="bg-white rounded-[2rem] p-10 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                {/* <div className="w-10 h-10 rounded-xl bg-sand/50 flex items-center justify-center text-lg shrink-0">✝️</div> */}
                <p className="text-[10px] font-black text-sunset uppercase tracking-[0.4em]">Unity in Holiness</p>
              </div>
              <p className="text-slate-500 text-sm font-light leading-relaxed mb-4">
                The spiritual vision of early Nazarenes was derived from the doctrinal core of John Wesley's preaching — justification by grace through faith, entire sanctification as an inheritance available to every Christian, and the witness of the Spirit to God's work in human lives.
              </p>
              <p className="text-slate-500 text-sm font-light leading-relaxed mb-4">
                In October 1907, the Association of Pentecostal Churches of America and the Church of the Nazarene merged in Chicago at the First General Assembly. In October 1908, the Second General Assembly was held at Pilot Point, Texas, completing the "year of uniting" with the merger of the southern and northern denominations.
              </p>
              <p className="text-slate-500 text-sm font-light leading-relaxed">
                With the Pentecostal Church of Scotland and Pentecostal Mission unions in 1915, the Church of the Nazarene embraced seven previous denominations. The Nazarenes emerged as the denomination that eventually drew together a majority of the holiness movement's independent strands.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-10 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                {/* <div className="w-10 h-10 rounded-xl bg-sand/50 flex items-center justify-center text-lg shrink-0">🌍</div> */}
                <p className="text-[10px] font-black text-sunset uppercase tracking-[0.4em]">A Mission to the World</p>
              </div>
              <p className="text-slate-500 text-sm font-light leading-relaxed mb-4">
                In 1908 there were churches in Canada and organized work in India, Cape Verde, and Japan, soon followed by work in Africa, Mexico, and China. As General Superintendent H. F. Reynolds advocated "a mission to the world," support for world evangelization became a distinguishing characteristic of Nazarene life.
              </p>
              <p className="text-slate-500 text-sm font-light leading-relaxed mb-4">
                As the church grew culturally and linguistically diverse, it committed itself in 1980 to internationalization — a deliberate policy of being one church of congregations and districts worldwide. Today 65 percent of Nazarenes and over 80 percent of the church's 439 districts are outside the United States.
              </p>
              <p className="text-slate-500 text-sm font-light leading-relaxed">
                Nazarenes support 14 liberal arts institutions across Africa, Brazil, Canada, the Caribbean, Korea, and the United States, as well as five graduate seminaries, 31 undergraduate Bible colleges, and additional institutions worldwide.
              </p>
            </div>

          </div>

          {/* Phineas Bresee */}
          <div className="relative bg-navy rounded-[2rem] p-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-sunset rounded-l-[2rem]"></div>
            <p className="text-[10px] font-black text-sunset uppercase tracking-[0.4em] mb-3">Founding Father</p>
            <h4 className="text-2xl font-black text-black mb-4">Phineas F. Bresee</h4>
            <p className="text-slate-500 text-sm font-light leading-relaxed">
              In 1907, Bresee led the Church of the Nazarene into a union with the Association of Pentecostal Churches of America. Meeting in Chicago for their First General Assembly, the two groups formalized their merger, adopting the name Pentecostal Church of the Nazarene and electing two general superintendents. Bresee was the first general superintendent elected, soon joined by H. F. Reynolds of Brooklyn as the second.
            </p>
          </div>

        </div>
      </section>

      {/* 8. CTA Banner */}
      {/* <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto relative rounded-[3rem] overflow-hidden bg-navy p-12 md:p-20 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-atlantic/50 to-transparent"></div>
          <div className="relative z-10">
            <p className="text-[10px] font-black text-sunset uppercase tracking-[0.4em] mb-4">Join the Family</p>
            <h2 className="text-4xl md:text-5xl font-black text-sand mb-6 leading-tight tracking-tighter">
              Looking for a church home?
            </h2>
            <p className="text-white/50 font-light mb-10 max-w-md mx-auto">
              Browse our directory of 40 Nazarene communities across the Western Cape.
            </p>
            <Link
              to="/churches"
              className="inline-block bg-white text-navy font-black px-12 py-4 rounded-2xl hover:bg-sunset hover:text-white transition-all shadow-2xl shadow-black/30 text-sm uppercase tracking-widest"
            >
              Browse Churches
            </Link>
          </div>
        </div>
      </section> */}

    </div>
  );
}

const missionEssentials = [
  { icon: '✝️', title: 'Evangelism', desc: 'Sharing the Good News of life in Jesus Christ with people everywhere.' },
  { icon: '🌿', title: 'Sanctification', desc: 'Spreading the message of scriptural holiness and Christlike living across the lands.' },
  { icon: '🤝', title: 'Discipleship', desc: 'Bonding together individuals who have made Jesus Christ Lord, strengthening each other in faith.' },
  { icon: '❤️', title: 'Compassion', desc: 'Expressing the compassion of Jesus Christ to all persons and actively participating in His mission.' },
];

const beliefs = [
  'in one God — the Father, Son, and Holy Spirit.',
  'that the Old and New Testament Scriptures, given by plenary inspiration, contain all truth necessary to faith and Christian living.',
  'that human beings are born with a fallen nature, and are, therefore, inclined to evil, and that continually.',
  'that the finally impenitent are hopelessly and eternally lost.',
  'that the atonement through Jesus Christ is for the whole human race; and that whosoever repents and believes on the Lord Jesus Christ is justified and regenerated and saved from the dominion of sin.',
  'that believers are to be sanctified wholly, subsequent to regeneration, through faith in the Lord Jesus Christ.',
  'that the Holy Spirit bears witness to the new birth, and also to the entire sanctification of believers.',
  'that our Lord will return, the dead will be raised, and the final judgment will take place.',
];

function ArticlesOfFaith() {
  const [active, setActive] = useState(null);
  return (
    <div className="divide-y divide-slate-100 border border-slate-100 rounded-[2rem] overflow-hidden bg-white shadow-sm">
      {articles.map((a, i) => (
        <div key={i}>
          <button
            onClick={() => setActive(active === i ? null : i)}
            className="w-full flex items-center gap-5 px-8 py-5 text-left hover:bg-[#FCFAF5] transition-colors group"
          >
            <span className="text-[10px] font-black tracking-[0.2em] text-sunset/60 shrink-0 w-6">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="flex-1 text-sm font-bold text-navy group-hover:text-sunset transition-colors">
              {a.title}
            </span>
            <span className={`text-slate-300 text-lg transition-transform duration-200 ${
              active === i ? 'rotate-45' : ''
            }`}>+</span>
          </button>
          {active === i && (
            <div className="px-8 pb-7 pt-1">
              <div className="pl-11">
                <div className="h-[1px] w-8 bg-sunset mb-4"></div>
                <p className="text-slate-500 text-sm font-light leading-relaxed">{a.body}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const articles = [
  {
    title: 'The Triune God',
    body: 'We believe in one eternally existent, infinite God, Sovereign Creator and Sustainer of the universe; that He only is God, holy in nature, attributes, and purpose. The God who is holy love and light is Triune in essential being, revealed as Father, Son, and Holy Spirit.',
  },
  {
    title: 'Jesus Christ',
    body: 'We believe in Jesus Christ, the Second Person of the Triune God; that He was eternally one with the Father; that He became incarnate by the Holy Spirit and was born of the Virgin Mary, so that two whole and perfect natures, that is to say the Godhead and manhood, are thus united in one Person very God and very man.',
  },
  {
    title: 'The Holy Spirit',
    body: 'We believe in the Holy Spirit, the Third Person of the Triune God, that He is ever present and efficiently active in and with the Church of Christ, convincing the world of sin, regenerating those who repent and believe, sanctifying believers, and guiding into all truth as it is in Jesus.',
  },
  {
    title: 'The Holy Scriptures',
    body: 'We believe in the plenary inspiration of the Holy Scriptures, by which we understand the 66 books of the Old and New Testaments, given by divine inspiration, inerrantly revealing the will of God concerning us in all things necessary to our salvation, so that whatever is not contained therein is not to be enjoined as an article of faith.',
  },
  {
    title: 'Atonement',
    body: 'We believe that Jesus Christ, by His sufferings, by the shedding of His own blood, and by His meritorious death on the Cross, made a full atonement for all human sin, and that this Atonement is the only ground of salvation, and that it is sufficient for every individual of Adam\'s race.',
  },
  {
    title: 'Prevenient Grace',
    body: 'We believe that the human race\'s creation in Godlikeness included ability to choose between right and wrong, and that thus human beings were made morally responsible; that through the fall of Adam they became depraved so that they cannot now turn and prepare themselves by their own natural strength and works to faith and calling upon God.',
  },
  {
    title: 'Repentance',
    body: 'We believe that repentance, which is a sincere and thorough change of the mind in regard to sin, involving a sense of personal guilt and a voluntary turning away from sin, is demanded of all who have by act or purpose become sinners against God.',
  },
  {
    title: 'Justification, Regeneration, and Adoption',
    body: 'We believe that justification is the gracious and judicial act of God by which He grants full pardon of all guilt and complete release from the penalty of sins committed, and acceptance as righteous, to all who believe on Jesus Christ and receive Him as Lord and Savior. We believe that regeneration, or the new birth, is that gracious work of God whereby the moral nature of the repentant believer is spiritually quickened and given a distinctively spiritual life, capable of faith, love, and obedience. We believe that adoption is that gracious act of God by which the justified and regenerated believer is constituted a son of God.',
  },
  {
    title: 'Entire Sanctification',
    body: 'We believe that entire sanctification is that act of God, subsequent to regeneration, by which believers are made free from original sin, or depravity, and brought into a state of entire devotement to God, and the holy obedience of love made perfect. It is wrought by the baptism with or infilling of the Holy Spirit, and comprehends in one experience the cleansing of the heart from sin and the abiding, indwelling presence of the Holy Spirit, empowering the believer for life and service.',
  },
  {
    title: 'The Church',
    body: 'We believe in the Church, the community that confesses Jesus Christ as Lord, the covenant people of God made new in Christ, the Body of Christ called together by the Holy Spirit through the Word. God calls the Church to express its life in the unity and fellowship of the Spirit; in worship through the preaching of the Word, observance of the sacraments, and ministry in His name; by obedience to Christ and mutual accountability.',
  },
  {
    title: 'Baptism',
    body: 'We believe that Christian baptism, commanded by our Lord, is a sacrament signifying acceptance of the benefits of the atonement of Jesus Christ, to be administered to believers and declarative of their faith in Jesus Christ as their Savior, and full purpose of obedience in holiness and righteousness.',
  },
  {
    title: 'The Lord\'s Supper',
    body: 'We believe that the Memorial and Communion Supper instituted by our Lord and Savior Jesus Christ is essentially a New Testament sacrament, declarative of His sacrificial death, through the merits of which believers have life and salvation and promise of all spiritual blessings in Christ.',
  },
  {
    title: 'Divine Healing',
    body: 'We believe in the Bible doctrine of divine healing and urge our people to seek to offer the prayer of faith for the healing of the sick. We also believe God heals through the means of medical science.',
  },
  {
    title: 'Second Coming of Christ',
    body: 'We believe that the Lord Jesus Christ will come again; that we who are alive at His coming shall not precede them that are asleep in Christ Jesus; but that, if we are abiding in Him, we shall be caught up with the risen saints to meet the Lord in the air, so that we shall ever be with the Lord.',
  },
  {
    title: 'Resurrection, Judgment, and Destiny',
    body: 'We believe in the resurrection of the dead, that the bodies both of the just and of the unjust shall be raised to life and united with their spirits — they that have done good unto the resurrection of life, and they that have done evil unto the resurrection of damnation. We believe in future judgment in which every person shall appear before God to be judged according to his or her deeds in this life.',
  },
  {
    title: 'Justification and Character',
    body: 'We believe that glorious and everlasting life is assured to all who savingly believe in, and obediently follow, Jesus Christ our Lord; and that the finally impenitent shall suffer eternally in hell.',
  },
];

const coreValues = [
  {
    // icon: '✝️',
    title: 'A Christian People',
    desc: 'As members of the Church Universal, we join with all true believers in proclaiming the Lordship of Jesus Christ and affirming the historic Trinitarian creeds. We value our Wesleyan-Holiness heritage as a way of understanding the faith true to Scripture, reason, tradition, and experience.',
  },
  {
    // icon: '🌿',
    title: 'A Holiness People',
    desc: 'God, who is holy, calls us to a life of holiness. We believe the Holy Spirit seeks to do in us a second work of grace — cleansing us from all sin, renewing us in the image of God, and producing in us the character of Christ.',
  },
  {
    // icon: '🌍',
    title: 'A Missional People',
    desc: 'We are a sent people, responding to the call of Christ and empowered by the Holy Spirit to go into all the world, witnessing to the Lordship of Christ and participating with God in the building of the Church and the extension of His kingdom.',
  },
];

