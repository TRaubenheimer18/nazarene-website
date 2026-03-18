// src/pages/Contact.jsx
import React from 'react';

export default function Contact() {
  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* Hero Section - Using the Deep Navy from the logo */}
      <div className="bg-navy text-white py-24 px-6 relative overflow-hidden">
        {/* Subtle decorative element to mimic Table Mountain silhouette or waves */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-red opacity-80"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4 uppercase">Get In Touch</h1>
          <p className="text-xl text-sky font-light max-w-2xl mx-auto">
            Connecting the Church of the Nazarene across the Western Cape. Reach out to our district leadership and administration.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-5 gap-16">
          
          {/* Left Column: Contact Details (2/5 width) */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-sm font-bold text-district-red tracking-widest uppercase mb-4">Contact Information</h2>
              <h3 className="text-3xl font-bold text-district-navy mb-6">District Office</h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="text-district-ocean text-2xl mt-1">📍</div>
                  <div>
                    <h4 className="font-bold text-district-navy">Headquarters</h4>
                    <p className="text-slate-600 leading-relaxed">
                      123 Church Street,<br /> 
                      Cape Town CBD, 8001<br />
                      South Africa
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-district-ocean text-2xl mt-1">✉️</div>
                  <div>
                    <h4 className="font-bold text-district-navy">Email Us</h4>
                    <p className="text-slate-600">General: info@wcnazarene.org</p>
                    <p className="text-slate-600">Office: admin@wcnazarene.org</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-district-ocean text-2xl mt-1">📞</div>
                  <div>
                    <h4 className="font-bold text-district-navy">Call Us</h4>
                    <p className="text-slate-600">Main Office: +27 (21) 000 0000</p>
                    <p className="text-slate-600 font-light text-sm italic">Mon - Fri, 08:30 - 16:30</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links or Extra Info */}
            <div className="p-8 bg-slate-50 rounded-2xl border-l-4 border-district-teal">
              <h4 className="font-bold text-district-navy mb-2">Pastoral Credentials</h4>
              <p className="text-sm text-slate-600">
                For inquiries regarding district licensing or credentialing, please specify "Board of Orders" in your message.
              </p>
            </div>
          </div>

          {/* Right Column: Premium Form (3/5 width) */}
          <div className="lg:col-span-3">
            <div className="bg-white p-2 sm:p-10 rounded-3xl shadow-2xl shadow-slate-200 border border-slate-100">
              <h2 className="text-2xl font-bold text-district-navy mb-8">Direct Message</h2>
              
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-slate-700 mb-2 ml-1">Full Name</label>
                  <input
                    type="text"
                    className="bg-slate-50 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-district-ocean focus:bg-white transition outline-none"
                    placeholder="e.g. Samuel Khumalo"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-slate-700 mb-2 ml-1">Email Address</label>
                  <input
                    type="email"
                    className="bg-slate-50 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-district-ocean focus:bg-white transition outline-none"
                    placeholder="samuel@example.com"
                  />
                </div>

                <div className="flex flex-col sm:col-span-2">
                  <label className="text-sm font-semibold text-slate-700 mb-2 ml-1">Subject</label>
                  <select className="bg-slate-50 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-district-ocean focus:bg-white transition outline-none appearance-none">
                    <option>General Inquiry</option>
                    <option>Find a Church</option>
                    <option>District Events</option>
                    <option>Departmental (NYI / NMI / NDI)</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="flex flex-col sm:col-span-2">
                  <label className="text-sm font-semibold text-slate-700 mb-2 ml-1">Your Message</label>
                  <textarea
                    rows="6"
                    className="bg-slate-50 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-district-ocean focus:bg-white transition outline-none resize-none"
                    placeholder="How can we assist you?"
                  ></textarea>
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-district-navy text-white font-bold py-5 rounded-xl hover:bg-district-ocean transition-all duration-300 shadow-lg shadow-slate-300 transform hover:-translate-y-1"
                  >
                    Send Secure Message
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}