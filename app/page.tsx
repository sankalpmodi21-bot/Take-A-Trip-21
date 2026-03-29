'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import { destinations } from '@/lib/data/destinations';

export default function Home() {
  const [filter, setFilter] = useState('All');
  const carouselRef = useRef<HTMLDivElement>(null);

  const filteredDestinations = destinations.filter(d => filter === 'All' || d.type === filter);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#ffffff]">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Replace the URL below with your actual hero background image path */}
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/hero/1920/1080')] bg-cover bg-center">
          <div className="absolute inset-0 bg-[#0f172a]/70 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white uppercase tracking-tight mb-6 leading-tight">
            Discover Your Next <span className="text-[#e8862c]">Adventure</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto font-medium mb-10">
            Mission-driven, personalized travel experiences across India and the globe, curated by founder Sankalp Modi.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/Destinations" className="w-full sm:w-auto bg-[#e8862c] text-white px-10 py-5 rounded-full font-bold text-lg hover:-translate-y-1 transition-transform shadow-lg uppercase tracking-wider">
              Explore Destinations
            </Link>
            <a href="https://wa.me/917301207295" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white text-[#0f172a] px-10 py-5 rounded-full font-bold text-lg hover:-translate-y-1 transition-transform shadow-lg uppercase tracking-wider flex items-center justify-center">
              <i className="fa-brands fa-whatsapp mr-2 text-xl text-[#25D366]"></i> Contact Expert
            </a>
          </div>
        </div>
      </section>

      {/* OUR DESTINATIONS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-2">
              <span className="text-[#0f172a]">OUR</span> <span className="text-[#e8862c]">DESTINATIONS.</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">Find your next escape.</p>
          </div>
          <div className="mt-6 md:mt-0 flex space-x-2 bg-gray-100 p-1 rounded-full">
            {['All', 'Domestic', 'International'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-colors ${filter === f ? 'bg-[#e8862c] text-white shadow-sm' : 'text-[#0f172a] hover:bg-gray-200'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="relative group">
          <button onClick={scrollLeft} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#e8862c] hover:bg-gray-50 transition-colors">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          
          <div ref={carouselRef} className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {filteredDestinations.map((dest) => (
              <Link href={`/Destinations/${dest.id}`} key={dest.id} className="min-w-[280px] md:min-w-[320px] h-[450px] rounded-[2.5rem] overflow-hidden relative snap-start group block flex-shrink-0">
                <img src={dest.imageUrl} alt={dest.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-3xl font-extrabold text-white mb-4">{dest.name}</h3>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-[#e8862c] transition-colors">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <button onClick={scrollRight} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#e8862c] hover:bg-gray-50 transition-colors">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-2">
            <span className="text-[#0f172a]">OUR</span> <span className="text-[#e8862c]">SERVICES.</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm uppercase tracking-widest font-bold">Quality Travel Solutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'FLIGHTS', icon: 'fa-plane', link: '/Flights' },
            { title: 'HOTELS', icon: 'fa-building', link: '/Hotels' },
            { title: 'PACKAGES', icon: 'fa-globe', link: '/Destinations' },
            { title: 'VISAS', icon: 'fa-passport', link: '/Visas' }
          ].map((service, idx) => (
            <Link href={service.link} key={idx} className="bg-white rounded-[2.5rem] p-10 text-center border border-gray-100 hover:bg-[#e8862c] hover:border-[#e8862c] hover:shadow-xl transition-all duration-300 group block">
              <div className="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors duration-300">
                <i className={`fa-solid ${service.icon} text-2xl text-[#e8862c] group-hover:text-white transition-colors duration-300`}></i>
              </div>
              <h3 className="text-lg font-extrabold text-[#0f172a] group-hover:text-white uppercase tracking-widest transition-colors duration-300">{service.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* OUR JOURNEY */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-4 flex flex-col">
            <span className="text-[#0f172a]">OUR</span> 
            <span className="text-[#e8862c]">JOURNEY.</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-2xl">
            Since our founding in 2025 by Sankalp Modi, we've been dedicated to making global exploration a reality for everyone with personalized support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { count: '500+', label: 'FLIGHTS BOOKED', icon: 'fa-plane' },
            { count: '80+', label: 'PACKAGES BOOKED', icon: 'fa-suitcase-rolling' },
            { count: '400+', label: 'HOTELS BOOKED', icon: 'fa-building' },
            { count: '40+', label: 'VISAS PROCESSED', icon: 'fa-passport' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white rounded-[2.5rem] p-8 border border-gray-100 hover:bg-[#e8862c] hover:border-[#e8862c] hover:shadow-xl transition-all duration-300 group">
              <i className={`fa-solid ${stat.icon} text-2xl text-[#e8862c] group-hover:text-white mb-6 block transition-colors duration-300`}></i>
              <h3 className="text-5xl font-extrabold text-[#0f172a] group-hover:text-white mb-2 transition-colors duration-300">{stat.count}</h3>
              <p className="text-gray-400 group-hover:text-white/90 text-xs font-bold uppercase tracking-widest transition-colors duration-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VISIT OUR OFFICE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-[3rem] border border-[#e8862c]/20 shadow-2xl shadow-[#e8862c]/5 overflow-hidden flex flex-col lg:flex-row p-4 lg:p-8 gap-8">
          <div className="lg:w-1/2 rounded-[2rem] overflow-hidden border-4 border-[#e8862c] relative min-h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.336618581023!2d86.1757!3d22.79!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e31989f0e2b5%3A0xeeec8e81ce9b344!2sBistupur%2C%20Jamshedpur%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center p-4 lg:p-8">
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-12">
              <span className="text-[#0f172a]">VISIT</span> <span className="text-[#e8862c]">OUR OFFICE</span>
            </h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mr-6 flex-shrink-0">
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">ADDRESS</h4>
                  <p className="text-[#0f172a] font-bold text-lg leading-snug">
                    H NO. 02/Western Part, Near Ram Mandir, Bistupur,<br/>
                    Jamshedpur, Jharkhand, 831001
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mr-6 flex-shrink-0">
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">PHONE</h4>
                  <p className="text-[#0f172a] font-bold text-lg">
                    +91 7301207295
                  </p>
                </div>
              </div>
            </div>

            <a href="https://wa.me/917301207295" target="_blank" rel="noopener noreferrer" className="w-full bg-[#e8862c] text-white py-5 rounded-full font-bold text-lg hover:bg-[#d07826] transition-colors text-center uppercase tracking-wider shadow-lg shadow-[#e8862c]/30 block">
              SEND A QUERY
            </a>
          </div>
        </div>
      </section>

      {/* JOIN THE COMMUNITY */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-2">
            <span className="text-[#0f172a]">JOIN THE</span> <span className="text-[#e8862c]">COMMUNITY.</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm uppercase tracking-widest font-bold">
            STAY UPDATED WITH TRAVEL HACKS AND GROUP TRIP ANNOUNCEMENTS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Instagram */}
          <a href="#" className="bg-[#E1306C] rounded-[2.5rem] p-10 text-center text-white hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center justify-center min-h-[300px]">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
              <i className="fa-brands fa-instagram text-3xl"></i>
            </div>
            <h3 className="text-2xl font-extrabold mb-2">Instagram</h3>
            <p className="text-white/80 font-medium">Daily Vibe Checks</p>
          </a>

          {/* Facebook */}
          <a href="#" className="bg-[#1877F2] rounded-[2.5rem] p-10 text-center text-white hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center justify-center min-h-[300px]">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
              <i className="fa-brands fa-facebook-f text-3xl"></i>
            </div>
            <h3 className="text-2xl font-extrabold mb-2">Facebook</h3>
            <p className="text-white/80 font-medium">Community & Reviews</p>
          </a>

          {/* YouTube */}
          <a href="#" className="bg-[#FF0000] rounded-[2.5rem] p-10 text-center text-white hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center justify-center min-h-[300px]">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
              <i className="fa-brands fa-youtube text-3xl"></i>
            </div>
            <h3 className="text-2xl font-extrabold mb-2">YouTube</h3>
            <p className="text-white/80 font-medium">Travel Vlogs</p>
          </a>

          {/* Newsletter */}
          <div className="bg-[#0f172a] rounded-[2.5rem] p-8 text-white flex flex-col justify-center min-h-[300px]">
            <h3 className="text-3xl font-extrabold mb-2">Newsletter</h3>
            <p className="text-[#e8862c] font-bold uppercase tracking-wider text-sm mb-8">GET SECRET DEALS</p>
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-white/10 border border-white/5 rounded-xl px-4 py-4 mb-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#e8862c]"
            />
            <button className="w-full bg-[#e8862c] text-white py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-[#d07826] transition-colors">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
