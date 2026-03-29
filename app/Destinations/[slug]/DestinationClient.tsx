'use client';

import { useState, useRef } from 'react';
import { Destination } from '@/lib/data/destinations';

export default function DestinationClient({ destination }: { destination: Destination }) {
  const [activeRegion, setActiveRegion] = useState(destination.mapRegions[0]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Adjust scroll distance as needed
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="space-y-16">
      {/* Interactive Map Section */}
      <div>
        <h2 className="text-3xl font-extrabold text-[#0f172a] uppercase tracking-tight mb-8 flex items-center">
          <i className="fa-solid fa-map-location-dot text-[#e8862c] mr-4"></i>
          Interactive Map
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* SVG Map Box */}
          <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm flex items-center justify-center min-h-[300px]">
            <svg viewBox="0 0 400 400" className="w-full h-full max-w-[300px]">
              {/* Generic placeholder regions */}
              <g 
                onClick={() => setActiveRegion(destination.mapRegions[0] || activeRegion)}
                className={`cursor-pointer transition-colors duration-300 ${activeRegion?.id === destination.mapRegions[0]?.id ? 'fill-[#e8862c]' : 'fill-gray-200 hover:fill-[#e8862c]/50'}`}
              >
                <path d="M100,50 C150,20 250,20 300,50 C350,100 350,200 300,250 C250,250 150,200 100,150 Z" />
                <text x="200" y="120" fill={activeRegion?.id === destination.mapRegions[0]?.id ? 'white' : '#0f172a'} fontSize="20" fontWeight="bold" textAnchor="middle" pointerEvents="none">
                  {destination.mapRegions[0]?.name || 'Region 1'}
                </text>
              </g>

              <g 
                onClick={() => setActiveRegion(destination.mapRegions[1] || activeRegion)}
                className={`cursor-pointer transition-colors duration-300 ${activeRegion?.id === destination.mapRegions[1]?.id ? 'fill-[#e8862c]' : 'fill-gray-200 hover:fill-[#e8862c]/50'}`}
              >
                <path d="M300,250 C350,300 300,380 200,380 C100,380 50,300 100,250 C150,200 250,250 300,250 Z" />
                <text x="200" y="300" fill={activeRegion?.id === destination.mapRegions[1]?.id ? 'white' : '#0f172a'} fontSize="20" fontWeight="bold" textAnchor="middle" pointerEvents="none">
                  {destination.mapRegions[1]?.name || 'Region 2'}
                </text>
              </g>

              <g 
                onClick={() => setActiveRegion(destination.mapRegions[2] || activeRegion)}
                className={`cursor-pointer transition-colors duration-300 ${activeRegion?.id === destination.mapRegions[2]?.id ? 'fill-[#e8862c]' : 'fill-gray-200 hover:fill-[#e8862c]/50'}`}
              >
                <path d="M100,150 C50,150 20,200 50,250 C100,300 100,250 100,250 C150,200 150,150 100,150 Z" />
                <text x="75" y="210" fill={activeRegion?.id === destination.mapRegions[2]?.id ? 'white' : '#0f172a'} fontSize="14" fontWeight="bold" textAnchor="middle" pointerEvents="none">
                  {destination.mapRegions[2]?.name || 'Region 3'}
                </text>
              </g>
            </svg>
          </div>

          {/* Dynamic Info Box */}
          <div className="bg-[#0f172a] rounded-[2.5rem] p-10 shadow-lg text-white flex flex-col justify-center">
            {activeRegion ? (
              <>
                <h3 className="text-3xl font-extrabold uppercase tracking-tight mb-4 text-[#e8862c]">
                  {activeRegion.name}
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {activeRegion.info}
                </p>
              </>
            ) : (
              <p className="text-gray-400 italic">Click on a region in the map to view details.</p>
            )}
          </div>
        </div>
      </div>

      {/* Itinerary PDFs Carousel */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-extrabold text-[#0f172a] uppercase tracking-tight flex items-center m-0">
            <i className="fa-solid fa-file-pdf text-[#e8862c] mr-4"></i>
            Download Itineraries
          </h2>
          <div className="flex gap-3">
            <button 
              onClick={() => scroll('left')} 
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-[#0f172a] hover:bg-[#e8862c] hover:text-white transition-colors shadow-sm"
              aria-label="Scroll left"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-[#0f172a] hover:bg-[#e8862c] hover:text-white transition-colors shadow-sm"
              aria-label="Scroll right"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-8 -mx-4 px-4 gap-6 snap-x scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {destination.itineraryPdfs.map((pdf, index) => (
            <a 
              key={index} 
              href={pdf.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="snap-start shrink-0 w-64 bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-red-50 text-red-500 flex items-center justify-center mb-6 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                <i className="fa-solid fa-file-pdf text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">{pdf.title}</h3>
              <p className="text-sm text-[#e8862c] font-medium uppercase tracking-wider mt-auto pt-4">View PDF</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
