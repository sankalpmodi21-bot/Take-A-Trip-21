import Link from 'next/link';
import { Phone, MapPin, Mail, ChevronDown } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-[#ffffff] border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-extrabold text-[#e8862c] tracking-tight uppercase">
              Take a Trip
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-[#0f172a] hover:text-[#e8862c] font-semibold transition-colors">
              Home
            </Link>
            <Link href="/Flights" className="text-[#0f172a] hover:text-[#e8862c] font-semibold transition-colors">
              Flights
            </Link>
            <Link href="/Hotels" className="text-[#0f172a] hover:text-[#e8862c] font-semibold transition-colors">
              Hotels
            </Link>
            
            {/* Destinations Dropdown (Simplified for UI) */}
            <div className="relative group">
              <button className="flex items-center text-[#0f172a] hover:text-[#e8862c] font-semibold transition-colors">
                Destinations <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                <div className="py-2">
                  <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase">Domestic</div>
                  <Link href="/Destinations/kashmir" className="block px-4 py-2 text-sm text-[#0f172a] hover:bg-orange-50 hover:text-[#e8862c]">Kashmir</Link>
                  <Link href="/Destinations/goa" className="block px-4 py-2 text-sm text-[#0f172a] hover:bg-orange-50 hover:text-[#e8862c]">Goa</Link>
                  <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase border-t border-gray-50 mt-2 pt-2">International</div>
                  <Link href="/Destinations/dubai" className="block px-4 py-2 text-sm text-[#0f172a] hover:bg-orange-50 hover:text-[#e8862c]">Dubai</Link>
                  <Link href="/Destinations/bali" className="block px-4 py-2 text-sm text-[#0f172a] hover:bg-orange-50 hover:text-[#e8862c]">Bali</Link>
                  <Link href="/Destinations" className="block px-4 py-2 text-sm font-bold text-[#e8862c] hover:bg-orange-50 border-t border-gray-50 mt-2">View All</Link>
                </div>
              </div>
            </div>

            <Link href="/Visas" className="text-[#0f172a] hover:text-[#e8862c] font-semibold transition-colors">
              Visas
            </Link>
            <Link href="/About" className="text-[#0f172a] hover:text-[#e8862c] font-semibold transition-colors">
              About Us
            </Link>
            <Link href="/Blogs" className="text-[#0f172a] hover:text-[#e8862c] font-semibold transition-colors">
              Blogs
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a 
              href="https://wa.me/917301207295" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#e8862c] text-white px-6 py-3 rounded-full font-bold hover:-translate-y-1 transition-transform shadow-md hover:shadow-lg flex items-center"
            >
              <i className="fa-brands fa-whatsapp mr-2 text-xl"></i>
              Query Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
