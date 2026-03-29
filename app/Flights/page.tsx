'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function FlightsPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    departure: '',
    destination: '',
    date: '',
    passengers: '1',
    travelClass: 'Economy',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Flight Query*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Departure:* ${formData.departure}%0A*Destination:* ${formData.destination}%0A*Date:* ${formData.date}%0A*Passengers:* ${formData.passengers}%0A*Class:* ${formData.travelClass}`;
    window.open(`https://wa.me/917301207295?text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#ffffff] min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Heading & Graphic */}
        <div className="text-left">
          <h1 className="text-5xl font-extrabold text-[#0f172a] uppercase tracking-tight mb-4">
            Book Your <span className="text-[#e8862c]">Flights</span>
          </h1>
          <div className="w-24 h-1 bg-[#e8862c] rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Ready to take off? Fill out the details below, and our experts will find the best flight options tailored to your schedule and budget.
          </p>
          <div className="relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-lg border-2 border-[#e8862c]/20">
            <Image 
              src="https://picsum.photos/seed/airport/800/600" 
              alt="Flights" 
              fill 
              className="object-cover" 
              referrerPolicy="no-referrer" 
            />
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-gray-100">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-8">Flight Query Form</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#e8862c] focus:border-transparent outline-none transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#e8862c] focus:border-transparent outline-none transition-all" placeholder="+91 98765 43210" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Departure City</label>
                <input required type="text" name="departure" value={formData.departure} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#e8862c] focus:border-transparent outline-none transition-all" placeholder="New Delhi" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Destination City</label>
                <input required type="text" name="destination" value={formData.destination} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#e8862c] focus:border-transparent outline-none transition-all" placeholder="London" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Travel Date</label>
              <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#e8862c] focus:border-transparent outline-none transition-all" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Passengers</label>
                <input required type="number" min="1" name="passengers" value={formData.passengers} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#e8862c] focus:border-transparent outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Travel Class</label>
                <select name="travelClass" value={formData.travelClass} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#e8862c] focus:border-transparent outline-none transition-all bg-white">
                  <option value="Economy">Economy</option>
                  <option value="Premium Economy">Premium Economy</option>
                  <option value="Business">Business</option>
                  <option value="First Class">First Class</option>
                </select>
              </div>
            </div>

            <button type="submit" className="w-full bg-[#e8862c] text-white font-bold py-4 px-8 rounded-full hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-xl mt-4">
              Send Query via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
