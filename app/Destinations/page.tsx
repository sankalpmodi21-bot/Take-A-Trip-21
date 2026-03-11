import { destinations } from '@/lib/data/destinations';
import Link from 'next/link';

export default function DestinationsPage() {
  const domestic = destinations.filter(d => d.type === 'Domestic');
  const international = destinations.filter(d => d.type === 'International');

  return (
    <div className="bg-[#ffffff]">
      {/* Hero Section */}
      <section className="bg-[#0f172a] text-white py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/seed/travel/1920/1080')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight mb-6">Explore Our Destinations</h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            From the serene backwaters of Kerala to the bustling streets of Dubai, discover your next adventure with Take a Trip.
          </p>
        </div>
      </section>

      {/* Domestic Destinations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[#0f172a] uppercase tracking-tight mb-4">Domestic Getaways</h2>
          <div className="w-24 h-1 bg-[#e8862c] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {domestic.map((dest) => (
            <Link href={`/Destinations/${dest.id}`} key={dest.id} className="group block h-full">
              <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg border border-gray-100 h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-[#e8862c] hover:border-[#e8862c]">
                <div className="h-48 relative overflow-hidden">
                  <img src={dest.imageUrl} alt={dest.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#e8862c] uppercase tracking-wider">
                    {dest.type}
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-extrabold text-[#0f172a] mb-3 group-hover:text-white transition-colors duration-300">{dest.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow group-hover:text-white/90 transition-colors duration-300">{dest.description}</p>
                  <div className="flex items-center text-[#e8862c] font-bold text-sm uppercase tracking-wider group-hover:text-white transition-colors duration-300">
                    Explore Itinerary <i className="fa-solid fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* International Destinations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50 rounded-[3rem] mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[#0f172a] uppercase tracking-tight mb-4">International Escapes</h2>
          <div className="w-24 h-1 bg-[#e8862c] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {international.map((dest) => (
            <Link href={`/Destinations/${dest.id}`} key={dest.id} className="group block h-full">
              <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-md border border-gray-100 h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-[#e8862c] hover:border-[#e8862c]">
                <div className="h-56 relative overflow-hidden">
                  <img src={dest.imageUrl} alt={dest.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 bg-[#0f172a]/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider">
                    {dest.type}
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-extrabold text-[#0f172a] mb-3 group-hover:text-white transition-colors duration-300">{dest.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow group-hover:text-white/90 transition-colors duration-300">{dest.description}</p>
                  <div className="flex items-center text-[#e8862c] font-bold text-sm uppercase tracking-wider group-hover:text-white transition-colors duration-300">
                    Explore Itinerary <i className="fa-solid fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
