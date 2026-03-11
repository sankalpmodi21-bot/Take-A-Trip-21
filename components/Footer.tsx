import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-extrabold text-[#e8862c] tracking-tight uppercase mb-6">Take a Trip</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Your premier travel partner for domestic and international destinations. Founded by Sankalp Modi, we are dedicated to providing mission-driven, personalized travel experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#e8862c] transition-colors">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#e8862c] transition-colors">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#e8862c] transition-colors">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/About" className="text-gray-400 hover:text-[#e8862c] transition-colors">About Us</Link></li>
              <li><Link href="/Destinations" className="text-gray-400 hover:text-[#e8862c] transition-colors">Destinations</Link></li>
              <li><Link href="/Flights" className="text-gray-400 hover:text-[#e8862c] transition-colors">Flight Bookings</Link></li>
              <li><Link href="/Hotels" className="text-gray-400 hover:text-[#e8862c] transition-colors">Hotel Bookings</Link></li>
              <li><Link href="/Visas" className="text-gray-400 hover:text-[#e8862c] transition-colors">Visa Assistance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Top Destinations</h4>
            <ul className="space-y-3">
              <li><Link href="/Destinations/kashmir" className="text-gray-400 hover:text-[#e8862c] transition-colors">Kashmir</Link></li>
              <li><Link href="/Destinations/kerala" className="text-gray-400 hover:text-[#e8862c] transition-colors">Kerala</Link></li>
              <li><Link href="/Destinations/dubai" className="text-gray-400 hover:text-[#e8862c] transition-colors">Dubai</Link></li>
              <li><Link href="/Destinations/bali" className="text-gray-400 hover:text-[#e8862c] transition-colors">Bali</Link></li>
              <li><Link href="/Destinations/singapore" className="text-gray-400 hover:text-[#e8862c] transition-colors">Singapore</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <i className="fa-solid fa-location-dot mt-1 mr-3 text-[#e8862c]"></i>
                <span>Visit our office to plan your next dream vacation with our experts.</span>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-phone mr-3 text-[#e8862c]"></i>
                <span>+91 73012 07295</span>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-envelope mr-3 text-[#e8862c]"></i>
                <span>hello@takeatrip.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Take a Trip. All rights reserved.
          </p>
          <div className="text-gray-500 text-sm font-mono bg-white/5 px-4 py-2 rounded-lg">
            GSTIN: 20AATFT9671P1Z6
          </div>
        </div>
      </div>
    </footer>
  );
}
