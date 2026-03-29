'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function VisasPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    destination: '',
    nationality: '',
    travelDate: '',
    purpose: 'Tourism',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Visa Query*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Destination Country:* ${formData.destination}%0A*Nationality:* ${formData.nationality}%0A*Expected Travel Date:* ${formData.travelDate}%0A*Purpose:* ${formData.purpose}`;
    window.open(`https://wa.me/917301207295?text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#ffffff] min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Heading & Graphic */}
        <div className="text-left">
          <h1 className="text-5xl font-extrabold text-[#0f172a] uppercase tracking-tight mb-4">
            Hassle-Free <span className="text-[#e8862c]">Visas</span>
          </h1>
          <div className="w-24 h-1 bg-[#e8862c] rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Navigating visa requirements can be complex. Let us simplify the process for you. Fill out the form to get expert assistance.
          </p>
          <div className="relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-lg border-2 border-[#e8862c]/20">
            {/* Replace src below with your actual visas image path */}
            <Image 
              src="https://picsum.photos/seed/passport/800/600" 
              alt="Visas" 
              fill 
              className="object-cover" 
              referrerPolicy="no-referrer" 
            />
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-gray-100">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-8">Visa Query Form</h2>
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Destination Country</label>
                <input required type="text" name="destination" value={formData.destination} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#e8862c] focus:border-transparent outline-none transition-all" placeholder="USA" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nationality</label>
                <input required type="text" name="nationality" value={formData.nationality} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#e8862c] focus:border-transparent outline-none transition-all" placeholder="Indian" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Expected Travel Date</label>
              <input required type="date" name="travelDate" value={formData.travelDate} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#e8862c] focus:border-transparent outline-none transition-all" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Purpose of Visit</label>
              <select name="purpose" value={formData.purpose} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#e8862c] focus:border-transparent outline-none transition-all bg-white">
                <option value="Tourism">Tourism</option>
                <option value="Business">Business</option>
                <option value="Student">Student</option>
                <option value="Work">Work</option>
                <option value="Transit">Transit</option>
                <option value="Other">Other</option>
              </select>
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
