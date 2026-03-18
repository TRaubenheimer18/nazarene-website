import React, { useState } from 'react';
import ChurchCard from '../components/ChurchCard';
import { churches } from '../data/churches';

export default function Churches() {
  const [searchTerm, setSearchTerm] = useState("");

  // Search Logic
  const filteredChurches = churches.filter(church =>
    church.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    church.area.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Header Section */}
      <div className="bg-navy text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 uppercase">
          District <span className="text-logo-teal">Churches</span>
        </h1>
        <p className="text-sky text-lg font-light max-w-2xl mx-auto">
          Explore our 35 Nazarene communities serving across the Western Cape.
        </p>
      </div>

      {/* Search Bar Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-8">
        <div className="bg-white p-2 rounded-2xl shadow-xl border border-slate-100">
          <input
            type="text"
            placeholder="Search by name or area (e.g. 'Heideveld')..."
            className="w-full p-4 rounded-xl border-none focus:ring-2 focus:ring-teal outline-none text-slate-700"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <p className="mt-4 text-slate-400 text-sm font-medium ml-2">
          Showing {filteredChurches.length} results
        </p>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {filteredChurches.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredChurches.map((church) => (
              <ChurchCard key={church.id} church={church} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
            <p className="text-slate-400 text-lg">No churches found matching your search.</p>
          </div>
        )}
      </div>

    </div>
  );
}