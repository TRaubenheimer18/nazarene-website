import { useState } from 'react';

const tabs = ['College'];

export default function Ministries() {
  const [activeTab, setActiveTab] = useState('College');

  return (
    <div className="bg-sand/60/10 min-h-screen selection:bg-atlantic/30">

      {/* Hero */}
      <section className="relative py-20 md:py-28 px-4 md:px-6 text-center overflow-hidden bg-white">

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
            <span className="text-atlantic">Our </span>
            <span className="text-atlantic italic font-serif">Ministries</span>
          </h1>
          <p className="text-base md:text-xl text-sky/80 font-light max-w-2xl mx-auto leading-relaxed">
            Serving the Western Cape through intentional ministry and discipleship.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="px-4 md:px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex gap-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 text-sm font-black uppercase tracking-widest transition-colors border-b-2 -mb-[1px] ${
                activeTab === tab
                  ? 'border-crimson text-crimson'
                  : 'border-transparent text-slate-400 hover:text-navy-blue'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {activeTab === 'College' && (
            <div className="text-center py-24">
              <p className="text-slate-400 font-light text-lg">Content coming soon.</p>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
