import { destinations } from '@/lib/data/destinations';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import DestinationClient from './DestinationClient';

export default async function DestinationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = destinations.find(d => d.id === slug);

  if (!destination) {
    notFound();
  }

  return (
    <div className="bg-[#ffffff]">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${destination.imageUrl})` }}
        >
          <div className="absolute inset-0 bg-[#0f172a]/60 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <div className="inline-block bg-[#e8862c] text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
            {destination.type} Destination
          </div>
          <div className="flex items-center justify-center gap-6 mb-6">
            {/* Replace src with your actual logo path */}
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center overflow-hidden border-2 border-white/20 shrink-0">
              <img src="https://picsum.photos/seed/logo/100/100" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white uppercase tracking-tight m-0">
              {destination.name}
            </h1>
          </div>
          <p className="text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto font-medium">
            {destination.description}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        {/* Overview */}
        <div>
          <h2 className="text-3xl font-extrabold text-[#0f172a] uppercase tracking-tight mb-8 flex items-center">
            <i className="fa-solid fa-compass text-[#e8862c] mr-4"></i>
            Trip Overview
          </h2>
          <div className="bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Best Time to Visit</h3>
                <p className="text-[#0f172a] font-medium flex items-start">
                  <i className="fa-regular fa-calendar text-[#e8862c] mt-1 mr-3"></i>
                  {destination.bestTimeToVisit}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Key Attractions</h3>
                <ul className="space-y-2">
                  {destination.keyAttractions.map((attraction, index) => (
                    <li key={index} className="text-[#0f172a] font-medium flex items-center">
                      <i className="fa-solid fa-check text-[#e8862c] mr-3 text-sm"></i>
                      {attraction}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Destination Client Component (Map & PDFs) */}
        <DestinationClient destination={destination} />

        {/* Bottom Call to Action */}
        <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-lg text-center max-w-3xl mx-auto mt-24">
          <div className="mb-8">
            <h3 className="text-3xl font-extrabold text-[#0f172a] mb-4">Still confused?</h3>
            <p className="text-gray-500 text-lg">Contact our experts to customize this itinerary and get all your questions answered.</p>
          </div>
          
          <a href="https://wa.me/917301207295" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#e8862c] text-white py-4 px-10 rounded-full font-bold uppercase tracking-wider hover:bg-[#d07826] transition-colors shadow-lg shadow-[#e8862c]/30">
            Connect to an expert
          </a>
        </div>
      </section>
    </div>
  );
}
