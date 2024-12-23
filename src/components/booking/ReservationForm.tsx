import React, { useState } from 'react';
import { Calendar, Clock, Users } from 'lucide-react';
import Button from '../ui/Button';

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Table reserved successfully!\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nDate: ${formData.date}\nTime: ${formData.time}\nGuests: ${formData.guests}`);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      specialRequests: ''
    });
  };

  return (
    <div className="bg-gradient-to-r from-black via-gray-800 to-black p-8 rounded-2xl shadow-2xl max-w-lg mx-auto">
      <h3 className="text-3xl font-bold text-center text-white mb-6">Reserve Your Table</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-white">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              required
              className="mt-1 w-full rounded-md border-gray-700 bg-gray-900 text-white shadow-md px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-white">Phone</label>
            <input
              type="tel"
              placeholder="Enter phone no."
              required
              className="mt-1 w-full rounded-md border-gray-700 bg-gray-900 text-white shadow-md px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="mt-1 w-full rounded-md border-gray-700 bg-gray-900 text-white shadow-md px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative">
            <label className="block text-sm font-medium text-white">Date</label>
            <div className="relative">
              <input
                type="date"
                required
                className="mt-1 w-full rounded-md border-gray-700 bg-gray-900 text-white shadow-md pr-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-white">Time</label>
            <div className="relative">
              <input
                type="time"
                required
                className="mt-1 w-full rounded-md border-gray-700 bg-gray-900 text-white shadow-md px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none pr-10"
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
              />
              <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-white">Guests</label>
            <div className="relative">
              <select
                className="mt-1 w-full rounded-md border-gray-700 bg-gray-900 text-white shadow-md px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                value={formData.guests}
                onChange={(e) => setFormData({...formData, guests: e.target.value})}
              >
                {[1,2,3,4,5,6,7,8].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
              <Users className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white">Special Requests</label>
          <textarea
            rows={4}
            placeholder="Enter any special requests"
            className="mt-1 w-full rounded-md border-gray-700 bg-gray-900 text-white shadow-md px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
            value={formData.specialRequests}
            onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
          ></textarea>
        </div>

        <Button variant="primary" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg">
          Confirm Reservation
        </Button>
      </form>
    </div>
  );
}
