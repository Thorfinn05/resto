import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-yellow-500 font-serif text-xl mb-4">Contact Us</p>
          <h2 className="text-4xl font-serif font-bold">Get in Touch</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-yellow-500 p-3 rounded-full">
                <MapPin className="text-black" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-600">221/B Bakshi Street<br />Kolkata - 700032, West Bengal, India</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-yellow-500 p-3 rounded-full">
                <Phone className="text-black" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Reservations</h3>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-yellow-500 p-3 rounded-full">
                <Mail className="text-black" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600">booking@rojjos.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-yellow-500 p-3 rounded-full">
                <Clock className="text-black" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 10:00 AM - 12:00 AM<br />
                  Saturday - Sunday: 11:00 AM - 01:00 AM
                </p>
              </div>
            </div>
          </div>

          <form className="space-y-6 bg-white p-8 rounded-lg shadow-lg border border-yellow-200">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-black">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-black">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-black py-3 px-6 rounded-full hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-colors font-semibold"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}