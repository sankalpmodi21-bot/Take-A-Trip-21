import { destinations } from '@/lib/data/destinations';
import { notFound } from 'next/navigation';
import Link from 'next/link';

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
          <h1 className="text-5xl md:text-7xl font-extrabold text-white uppercase tracking-tight mb-6">
            {destination.name}
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto font-medium">
            {destination.description}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left Column: Details & Itinerary */}
          <div className="lg:col-span-2 space-y-16">
            
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

            {/* Itinerary */}
            <div>
              <h2 className="text-3xl font-extrabold text-[#0f172a] uppercase tracking-tight mb-8 flex items-center">
                <i className="fa-solid fa-route text-[#e8862c] mr-4"></i>
                Sample 3-Day Itinerary
              </h2>
              <div className="space-y-6">
                {destination.itinerary.map((day) => (
                  <div key={day.day} className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-sm hover:shadow-md hover:bg-[#e8862c] hover:border-[#e8862c] transition-all duration-300 group">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#e8862c]/10 text-[#e8862c] group-hover:bg-white/20 group-hover:text-white flex items-center justify-center font-extrabold text-xl mr-6 transition-colors duration-300">
                        {day.day}
                      </div>
                      <h3 className="text-2xl font-bold text-[#0f172a] group-hover:text-white transition-colors duration-300">{day.title}</h3>
                    </div>
                    <p className="text-gray-600 group-hover:text-white/90 leading-relaxed pl-18 ml-18 transition-colors duration-300">
                      {day.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-lg sticky top-24">
              <div className="mb-6">
                <h3 className="text-2xl font-extrabold text-[#0f172a] mb-2">Ready to Book?</h3>
                <p className="text-gray-500 text-sm">Contact our experts to customize this itinerary.</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <span className="text-gray-600 font-medium">Type</span>
                  <span className="text-[#0f172a] font-bold">{destination.type}</span>
                </div>
              </div>

              <a href="https://wa.me/917301207295" target="_blank" rel="noopener noreferrer" className="w-full block text-center bg-[#e8862c] text-white py-4 rounded-full font-bold uppercase tracking-wider hover:bg-[#d07826] transition-colors shadow-lg shadow-[#e8862c]/30 mb-4">
                Book Now
              </a>
              <a href="https://wa.me/917301207295" target="_blank" rel="noopener noreferrer" className="w-full block text-center bg-gray-50 text-[#0f172a] py-4 rounded-full font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors border border-gray-200">
                Contact Expert
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
