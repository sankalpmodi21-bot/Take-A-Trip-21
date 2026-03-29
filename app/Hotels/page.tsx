'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function HotelsPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    rooms: '1',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Hotel Query*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Destination:* ${formData.destination}%0A*Check-in:* ${formData.checkIn}%0A*Check-out:* ${formData.checkOut}%0A*Guests:* ${formData.guests}%0A*Rooms:* ${formData.rooms}`;
    window.open(`https://wa.me/917301207295?text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#ffffff] min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Form */}
        <div className="order-2 lg:order-1 bg-white rounded-[2.5rem] p-10 shadow-xl border border-gray-100">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-8">Hotel Query Form</h2>
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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Destination City</label>
              <input required type="text" name="destination" value={formData.destination} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#e8862c] focus:border-transparent outline-none transition-all" placeholder="Paris, France" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Check-in Date</label>
                <input required type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#e8862c] focus:border-transparent outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Check-out Date</label>
                <input required type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#e8862c] focus:border-transparent outline-none transition-all" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
                <input required type="number" min="1" name="guests" value={formData.guests} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#e8862c] focus:border-transparent outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rooms</label>
                <input required type="number" min="1" name="rooms" value={formData.rooms} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#e8862c] focus:border-transparent outline-none transition-all" />
              </div>
            </div>

            <button type="submit" className="w-full bg-[#e8862c] text-white font-bold py-4 px-8 rounded-full hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-xl mt-4">
              Send Query via WhatsApp
            </button>
          </form>
        </div>

        {/* Right Side: Heading & Graphic */}
        <div className="order-1 lg:order-2 text-right">
          <h1 className="text-5xl font-extrabold text-[#0f172a] uppercase tracking-tight mb-4">
            Find Perfect <span className="text-[#e8862c]">Hotels</span>
          </h1>
          <div className="w-24 h-1 bg-[#e8862c] rounded-full mb-6 ml-auto"></div>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Looking for a cozy stay or a luxury resort? Share your requirements, and we'll curate the best hotel options for your trip.
          </p>
          <div className="relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-lg border-2 border-[#e8862c]/20">
            <Image 
              src="https://picsum.photos/seed/hotelroom/800/600" 
              alt="Hotels" 
              fill 
              className="object-cover" 
              referrerPolicy="no-referrer" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
