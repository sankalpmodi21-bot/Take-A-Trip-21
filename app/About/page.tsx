export default function AboutPage() {
  return (
    <div className="bg-[#ffffff] min-h-screen">
      {/* Our History */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-[#0f172a] uppercase tracking-tight mb-4">About Us</h1>
          <div className="w-24 h-1 bg-[#e8862c] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            {/* Replace src below with your actual history/about image path */}
            <img src="https://picsum.photos/seed/history/800/600" alt="Our History" className="rounded-[2.5rem] shadow-lg w-full object-cover h-[400px]" />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-[#0f172a] uppercase tracking-tight mb-6">Our History</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded by Sankalp Modi, Take a Trip began with a simple mission: to provide mission-driven, personalized travel experiences that go beyond the ordinary. What started as a small passion project has grown into a premier travel agency serving clients across India and the globe.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe that travel is not just about visiting new places, but about creating lasting memories, understanding different cultures, and finding a sense of belonging wherever you go. Our expert team is dedicated to crafting itineraries that reflect your unique preferences and dreams.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50 rounded-[3rem] mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[#0f172a] uppercase tracking-tight mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-[#e8862c] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-[2.5rem] p-10 text-center shadow-sm border border-gray-100 hover:-translate-y-2 transition-all duration-300 hover:bg-[#e8862c] hover:border-[#e8862c] group">
            <i className="fa-solid fa-location-dot text-4xl text-[#e8862c] group-hover:text-white mb-4 transition-colors duration-300"></i>
            <h3 className="text-xl font-bold text-[#0f172a] group-hover:text-white mb-2 uppercase transition-colors duration-300">Visit Our Office</h3>
            <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">H NO. 02/Western Part, Near Ram Mandir, Bistupur,<br/>Jamshedpur, Jharkhand, 831001</p>
          </div>
          <div className="bg-white rounded-[2.5rem] p-10 text-center shadow-sm border border-gray-100 hover:-translate-y-2 transition-all duration-300 hover:bg-[#e8862c] hover:border-[#e8862c] group">
            <i className="fa-solid fa-phone text-4xl text-[#e8862c] group-hover:text-white mb-4 transition-colors duration-300"></i>
            <h3 className="text-xl font-bold text-[#0f172a] group-hover:text-white mb-2 uppercase transition-colors duration-300">Call Us</h3>
            <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">+91 73012 07295<br/>Mon-Sat, 9AM to 6PM</p>
          </div>
          <div className="bg-white rounded-[2.5rem] p-10 text-center shadow-sm border border-gray-100 hover:-translate-y-2 transition-all duration-300 hover:bg-[#e8862c] hover:border-[#e8862c] group">
            <i className="fa-solid fa-envelope text-4xl text-[#e8862c] group-hover:text-white mb-4 transition-colors duration-300"></i>
            <h3 className="text-xl font-bold text-[#0f172a] group-hover:text-white mb-2 uppercase transition-colors duration-300">Email Us</h3>
            <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">hello@takeatrip.com<br/>support@takeatrip.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}
