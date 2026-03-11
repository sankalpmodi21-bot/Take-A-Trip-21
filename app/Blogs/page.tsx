import Link from 'next/link';

export default function BlogsPage() {
  const blogs = [
    { id: 1, title: 'Top 10 Hidden Gems in Kashmir', excerpt: 'Discover the unexplored beauty of the paradise on earth with our curated guide to Kashmir\'s best-kept secrets.', image: 'https://picsum.photos/seed/blog1/800/600', date: 'Oct 12, 2025' },
    { id: 2, title: 'A Complete Guide to Bali Visas', excerpt: 'Everything you need to know before traveling to the Island of Gods, from visa on arrival to long-term stays.', image: 'https://picsum.photos/seed/blog2/800/600', date: 'Nov 05, 2025' },
    { id: 3, title: 'Why Kerala Should Be Your Next Destination', excerpt: 'From serene backwaters to lush tea gardens, explore why God\'s Own Country is the perfect getaway.', image: 'https://picsum.photos/seed/blog3/800/600', date: 'Dec 20, 2025' },
    { id: 4, title: 'Experiencing the Magic of Dubai', excerpt: 'A comprehensive guide to making the most out of your trip to the city of superlatives.', image: 'https://picsum.photos/seed/blog4/800/600', date: 'Jan 15, 2026' },
    { id: 5, title: 'Trekking in Himachal: A Beginner\'s Guide', excerpt: 'Essential tips and trails for those looking to start their trekking journey in the Himalayas.', image: 'https://picsum.photos/seed/blog5/800/600', date: 'Feb 02, 2026' },
    { id: 6, title: 'The Ultimate Singapore Itinerary', excerpt: 'How to spend 3 perfect days in the Lion City, covering all major attractions and hidden spots.', image: 'https://picsum.photos/seed/blog6/800/600', date: 'Mar 10, 2026' },
  ];

  return (
    <div className="bg-[#ffffff] min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-[#0f172a] uppercase tracking-tight mb-4">Travel Blogs</h1>
        <div className="w-24 h-1 bg-[#e8862c] mx-auto rounded-full"></div>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">Inspiration, tips, and guides for your next adventure.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map(blog => (
          <div key={blog.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-md border border-gray-100 hover:-translate-y-2 transition-all duration-300 hover:bg-[#e8862c] hover:border-[#e8862c] hover:shadow-xl group flex flex-col">
            <div className="h-48 overflow-hidden relative">
              <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <p className="text-[#e8862c] group-hover:text-white/80 text-sm font-bold mb-2 uppercase tracking-wider transition-colors duration-300">{blog.date}</p>
              <h2 className="text-xl font-extrabold text-[#0f172a] group-hover:text-white mb-3 line-clamp-2 transition-colors duration-300">{blog.title}</h2>
              <p className="text-gray-600 group-hover:text-white/90 mb-6 line-clamp-3 flex-grow transition-colors duration-300">{blog.excerpt}</p>
              <button className="text-[#0f172a] group-hover:text-white font-bold uppercase tracking-wider text-sm transition-colors text-left flex items-center mt-auto duration-300">
                Read More <i className="fa-solid fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
